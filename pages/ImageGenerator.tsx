import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('Professional plumber working in a modern house, high quality photography, cinematic lighting, 8k resolution, realistic details, Curitiba architecture style.');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '3:4' | '4:3' | '9:16' | '16:9'>('16:9');
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [loading, setLoading] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    try {
      // @ts-ignore
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        setHasKey(false);
      }
    } catch (e) {
      setHasKey(false);
    }
  };

  const handleSelectKey = async () => {
    try {
      // @ts-ignore
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        await window.aistudio.openSelectKey();
        setHasKey(true);
      } else {
        setError("Seletor de chaves indisponível.");
      }
    } catch (e) {
      setHasKey(true); 
    }
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("Por favor, digite um prompt.");
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: imageSize
          }
        },
      });

      let foundImage = false;
      const candidate = response.candidates?.[0];
      if (candidate?.content?.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setGeneratedImageUrl(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        // Fallback for text response without image
        const textPart = candidate?.content?.parts.find(p => p.text);
        if (textPart) {
          setError(`A IA retornou apenas texto: ${textPart.text}`);
        } else {
          throw new Error("A imagem não pôde ser gerada.");
        }
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("entity was not found")) {
        setError("Chave de API inválida ou projeto sem faturamento ativo.");
        setHasKey(false);
      } else {
        setError(`Erro: ${err.message || "Falha na comunicação com o servidor Gemini."}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (hasKey === false) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <i className="fas fa-magic text-4xl text-primary"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">IA Visual ADP</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Para gerar imagens realistas para o site, conecte sua chave <strong>Gemini Pro (Paid Project)</strong>.
          </p>
          <button
            onClick={handleSelectKey}
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            Configurar API Key
          </button>
          <p className="mt-6 text-xs text-gray-400">
            Acompanhe em <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline">ai.google.dev/billing</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Gerador de Imagens Profissionais</h1>
          <p className="text-gray-600 text-lg">Crie fotos de alta qualidade para blogs, anúncios e redes sociais da ADP.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-6 text-primary flex items-center gap-2">
                <i className="fas fa-sliders-h"></i> Ajustes
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Tamanho / Resolução</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1K', '2K', '4K'].map(size => (
                      <button 
                        key={size}
                        onClick={() => setImageSize(size as any)}
                        className={`py-3 rounded-xl text-sm font-bold transition-all border ${
                          imageSize === size ? 'bg-primary text-white border-primary shadow-md' : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Proporção</label>
                  <select 
                    value={aspectRatio} 
                    onChange={(e) => setAspectRatio(e.target.value as any)} 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary appearance-none font-medium"
                  >
                    <option value="1:1">Quadrado (1:1)</option>
                    <option value="16:9">Widescreen (16:9)</option>
                    <option value="9:16">Mobile / Reel (9:16)</option>
                    <option value="4:3">Clássico (4:3)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-urgent/10 p-6 rounded-3xl border border-urgent/20">
              <p className="text-urgent font-bold text-sm flex items-center gap-2">
                <i className="fas fa-info-circle"></i> Dica do Especialista
              </p>
              <p className="text-xs text-urgent/80 mt-2 leading-relaxed">
                Use palavras como "8k", "ultra realistic", "photorealistic" e descreva a iluminação para melhores resultados.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-4 text-primary">Descrição da Imagem</h3>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full p-6 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary text-gray-700 leading-relaxed mb-6"
                placeholder="Ex: Close-up de um geofone digital detectando vazamento em parede azul..."
              />
              <button 
                onClick={generateImage} 
                disabled={loading} 
                className={`w-full py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all flex items-center justify-center gap-3 ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-[1.02]'
                }`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin"></i>
                    Gerando sua Obra Prima...
                  </>
                ) : (
                  <>
                    <i className="fas fa-magic"></i>
                    GERAR IMAGEM AGORA
                  </>
                )}
              </button>
            </div>

            <div className="bg-white min-h-[500px] rounded-3xl shadow-inner flex items-center justify-center p-6 border-2 border-dashed border-gray-200 relative overflow-hidden">
              {generatedImageUrl ? (
                <div className="group relative">
                  <img src={generatedImageUrl} className="w-full rounded-2xl shadow-2xl animate-fade-in" alt="Gerada por IA" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                    <a 
                      href={generatedImageUrl} 
                      download="adp-ia-image.png" 
                      className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-xl hover:scale-110 transition-all"
                    >
                      <i className="fas fa-download mr-2"></i> Baixar Imagem
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center p-12">
                  <i className="fas fa-images text-6xl text-gray-200 mb-6"></i>
                  <p className="text-gray-400 font-medium">
                    {error ? <span className="text-urgent">{error}</span> : 'Aguardando seu comando criativo...'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;