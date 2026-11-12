import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMetadata } from '../src/routesData';
export default function RouteMetadata(){const {pathname}=useLocation();useEffect(()=>{
 const meta=getRouteMetadata(pathname);
 if(!meta){document.getElementById('route-schema')?.remove();document.querySelector('link[rel="canonical"]')?.remove();let robots=document.querySelector('meta[name="robots"]');if(!robots){robots=document.createElement('meta');robots.setAttribute('name','robots');document.head.appendChild(robots);}robots.setAttribute('content','noindex,follow');return;}
 document.querySelector('meta[name="robots"]')?.remove();
 document.title=meta.title;
 const set=(selector:string,tag:string,attrs:Record<string,string>)=>{let e=document.head.querySelector(selector);if(!e){e=document.createElement(tag);document.head.appendChild(e);}Object.entries(attrs).forEach(([k,v])=>e!.setAttribute(k,v));};
 set('meta[name="description"]','meta',{name:'description',content:meta.description});
 set('link[rel="canonical"]','link',{rel:'canonical',href:meta.canonical});
 for(const [field,value] of [['title',meta.title],['description',meta.description],['url',meta.canonical]])set(`meta[property="og:${field}"]`,'meta',{property:`og:${field}`,content:value});
 for(const [field,value] of [['title',meta.title],['description',meta.description]])set(`meta[name="twitter:${field}"]`,'meta',{name:`twitter:${field}`,content:value});
 let schema=document.getElementById('route-schema');if(!schema){schema=document.createElement('script');schema.id='route-schema';schema.setAttribute('type','application/ld+json');document.head.appendChild(schema);}schema.textContent=JSON.stringify(meta.schemaJson);
},[pathname]);return null;}
