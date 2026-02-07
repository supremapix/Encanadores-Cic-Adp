
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('Um encanador profissional uniformizado realizando um serviço de desentupimento de esgoto com equipamentos modernos de alta pressão em uma residência luxuosa, iluminação profissional, estilo realista fotográfico.');
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
      // @ts-ignore - aistudio safety check
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        // Se a API não existe, tratamos como sem chave para mostrar o botão de fallback
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
        setError("O seletor de chaves de API não está disponível neste navegador.");
      }
    } catch (e) {
      setHasKey(true); 
    }
  };

  const generateImage = async () => {
    setLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      // @google/genai fix: Create a new instance right before the call to ensure the latest API key is used
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
      if (response.candidates && response.candidates[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setGeneratedImageUrl(`data:image/png;base64,${base64EncodeString}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) throw new Error("Falha na geração.");
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("Chave inválida. Selecione novamente.");
        setHasKey(false);
      } else {
        setError("Erro ao gerar imagem. Tente um prompt mais simples ou aguarde alguns minutos.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (hasKey === false) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-key text-3xl text-primary"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Acesso ao Gerador IA</h2>
          <div className="text-gray-600 mb-8 space-y-4">
            <p>
              Para gerar imagens realistas para o site ADP, você precisa ativar sua chave de API Gemini Pro de um projeto com faturamento ativo.
            </p>
            {/* @google/genai guideline: Provide link to billing documentation in the selection dialog */}
            <a 
              href="https://ai.google.dev/gemini-api/docs/billing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-semibold inline-block"
            >
              Verifique os requisitos de faturamento <i className="fas fa-external-link-alt ml-1"></i>
            </a>
          </div>
          <button
            onClick={handleSelectKey}
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg transition-all"
          >
            Selecionar Chave de API
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-primary mb-4">Gerador de Imagens ADP</h1>
            <p className="text-gray-600">Produza fotos profissionais de hidráulica em segundos.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Configurações</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Formato</label>
                    <select value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value as any)} className="w-full p-2 border rounded-lg">
                      <option value="1:1">Quadrado</option>
                      <option value="16:9">Widescreen</option>
                      <option value="9:16">Vertical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Resolução</label>
                    <select value={imageSize} onChange={(e) => setImageSize(e.target.value as any)} className="w-full p-2 border rounded-lg">
                      <option value="1K">1K HD</option>
                      <option value="2K">2K Ultra</option>
                      <option value="4K">4K Cinema</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={3}
                  className="w-full p-4 bg-gray-50 border rounded-xl outline-none mb-4 focus:ring-2 focus:ring-primary"
                  placeholder="Ex: Encanador consertando cano de água..."
                />
                <button onClick={generateImage} disabled={loading} className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:scale-[1.01] transition-all disabled:bg-gray-400">
                  {loading ? 'Processando...' : 'Gerar Imagem'}
                </button>
              </div>

              <div className="bg-white min-h-[400px] rounded-2xl shadow-sm flex items-center justify-center p-4 border border-dashed border-gray-200">
                {generatedImageUrl ? (
                  <img src={generatedImageUrl} className="w-full rounded-xl shadow-lg" alt="Gerada por IA" />
                ) : (
                  <p className="text-gray-400">{error || 'Sua imagem aparecerá aqui.'}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
