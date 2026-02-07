
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

// Fixed: Removed the conflicting 'declare global' block for 'window.aistudio'.
// The 'aistudio' property is already defined on the Window interface as 'AIStudio' in this environment.
// Redefining it with a different structure caused a 'Subsequent property declarations must have the same type' error.

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
      // Fix: Assume aistudio is globally available and use it directly.
      // @ts-ignore - aistudio is provided by the environment
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    } catch (e) {
      setHasKey(false);
    }
  };

  const handleSelectKey = async () => {
    // Fix: Assume aistudio is globally available and use it directly.
    // @ts-ignore - aistudio is provided by the environment
    await window.aistudio.openSelectKey();
    setHasKey(true); // Proceed assuming success per instructions to mitigate race conditions
  };

  const generateImage = async () => {
    setLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      // Fix: Create GoogleGenAI instance right before the API call to ensure it uses the latest key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [
            {
              text: prompt,
            },
          ],
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

      if (!foundImage) {
        throw new Error("Nenhuma imagem foi gerada na resposta do modelo.");
      }
    } catch (err: any) {
      console.error(err);
      // Fix: Handle key selection reset if the entity is not found (invalid key).
      if (err.message?.includes("Requested entity was not found")) {
        setError("Erro de chave de API. Por favor, selecione sua chave novamente.");
        setHasKey(false);
      } else {
        setError("Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (hasKey === false) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <i className="fas fa-key text-5xl text-primary mb-6"></i>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chave de API Necessária</h2>
          <p className="text-gray-600 mb-8">
            Para usar o gerador de imagens de alta qualidade (Gemini 3 Pro), você deve selecionar uma chave de API de um projeto pago.
          </p>
          <button
            onClick={handleSelectKey}
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg transition-all mb-4"
          >
            Selecionar Chave de API
          </button>
          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Saiba mais sobre faturamento e cotas
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-primary mb-4">Gerador de Imagens Profissionais ADP</h1>
            <p className="text-gray-600">Crie imagens realistas para seus anúncios de desentupimento e serviços hidráulicos.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Settings */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <i className="fas fa-sliders-h text-primary"></i> Configurações
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Proporção (Aspect Ratio)</label>
                    <select 
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value as any)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="1:1">Quadrado (1:1)</option>
                      <option value="16:9">Widescreen (16:9)</option>
                      <option value="9:16">Portrait (9:16)</option>
                      <option value="4:3">Clássico (4:3)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Resolução (Image Size)</label>
                    <select 
                      value={imageSize}
                      onChange={(e) => setImageSize(e.target.value as any)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="1K">Alta Definição (1K)</option>
                      <option value="2K">Ultra HD (2K)</option>
                      <option value="4K">Cinema Quality (4K)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold mb-2">Dica de SEO:</h4>
                <p className="text-sm opacity-90">
                  Imagens exclusivas geradas por IA são vistas com bons olhos pelo Google. Use-as em seus blogs e páginas de bairros!
                </p>
              </div>
            </div>

            {/* Main Generator Area */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <label className="block text-sm font-bold text-gray-700 mb-2">Descrição da Imagem (Prompt)</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none resize-none mb-4"
                  placeholder="Descreva a imagem que deseja criar..."
                ></textarea>
                
                <button
                  onClick={generateImage}
                  disabled={loading || !prompt}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3 ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] text-white'
                  }`}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-circle-notch animate-spin"></i> Gerando Arte...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-wand-magic-sparkles"></i> Gerar Imagem com Gemini 3 Pro
                    </>
                  )}
                </button>
              </div>

              {/* Result Area */}
              <div className="bg-white min-h-[400px] rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {error && (
                  <div className="text-center p-8">
                    <i className="fas fa-exclamation-triangle text-urgent text-4xl mb-4"></i>
                    <p className="text-gray-800 font-semibold">{error}</p>
                  </div>
                )}

                {loading && (
                  <div className="text-center animate-pulse">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-image text-3xl text-primary"></i>
                    </div>
                    <p className="text-gray-500 font-medium">Processando pixels de alta qualidade...</p>
                    <p className="text-xs text-gray-400 mt-2">Isso pode levar alguns segundos dependendo da resolução.</p>
                  </div>
                )}

                {!loading && !generatedImageUrl && !error && (
                  <div className="text-center text-gray-400">
                    <i className="fas fa-cloud-upload-alt text-6xl mb-4 opacity-20"></i>
                    <p>Sua imagem gerada aparecerá aqui.</p>
                  </div>
                )}

                {generatedImageUrl && (
                  <div className="w-full space-y-4 animate-fade-in">
                    <img 
                      src={generatedImageUrl} 
                      alt="Imagem Gerada pela IA" 
                      className="w-full rounded-xl shadow-2xl border border-gray-200"
                    />
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                      <span className="text-sm font-bold text-gray-600">Qualidade: {imageSize} | {aspectRatio}</span>
                      <a 
                        href={generatedImageUrl} 
                        download={`adp-ia-${Date.now()}.png`}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow transition-colors"
                      >
                        <i className="fas fa-download"></i> Baixar Imagem
                      </a>
                    </div>
                  </div>
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
