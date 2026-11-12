import pathlib,re,json,xml.etree.ElementTree as ET
from html.parser import HTMLParser
from urllib.parse import urlparse,unquote
root=pathlib.Path('dist');urls=[e.text for e in ET.parse(root/'sitemap.xml').iter() if e.tag.endswith('loc')]
class P(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.h1=0;self.canon=[];self.ids=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='h1':self.h1+=1
  if 'id'in d:self.ids.append(d['id'])
  if t=='link'and d.get('rel')=='canonical':self.canon.append(d.get('href'))
  for k in ('href','src'):
   if k in d:self.links.append(d[k])
errors=[];refs=0
for url in urls:
 path=urlparse(url).path;file=root/path.lstrip('/')/'index.html' if path!='/' else root/'index.html';s=file.read_text();p=P();p.feed(s)
 if p.h1!=1:errors.append((url,'h1',p.h1))
 if p.canon!=[url]:errors.append((url,'canonical',p.canon))
 if len(p.ids)!=len(set(p.ids)):errors.append((url,'duplicate ids'))
 for schema in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',s,re.S):json.loads(schema)
 for link in p.links:
  u=urlparse(link)
  if u.scheme and u.netloc!='www.encanador.servicosnobairro.com.br':continue
  if not u.path:continue
  if u.scheme not in ('','http','https'):continue
  rel=unquote(u.path).lstrip('/'); candidates=[root/rel,root/rel/'index.html',root/(rel+'.html')]
  if not any(x.is_file()for x in candidates):errors.append((url,'missing',link))
  refs+=1
assert not errors,errors[:20]
print(json.dumps({'pages':len(urls),'references':refs,'errors':errors},indent=2))
