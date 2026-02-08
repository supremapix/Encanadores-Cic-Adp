
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const ADP_COORDS = { lat: -25.5138495, lng: -49.3364239 }; // Rua Luiz Maltaca, 36

const ResponseTimeTracker: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'locating' | 'calculating' | 'ready'>('idle');
  const [data, setData] = useState<{ distance: number; time: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const startTracking = () => {
    setStatus('locating');
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocalização não suportada.");
      setStatus('idle');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus('calculating');
        
        // Simulação de processamento tático
        setTimeout(() => {
          const dist = calculateDistance(
            position.coords.latitude, 
            position.coords.longitude,
            ADP_COORDS.lat,
            ADP_COORDS.lng
          );

          // Velocidade média 35km/h + Margem de erro de 10%
          const baseTime = (dist / 35) * 60; 
          const errorFactor = 0.9 + (Math.random() * 0.2); // Entre 0.9 e 1.1 (10% erro)
          const finalTime = Math.max(15, Math.round(baseTime * errorFactor));

          setData({
            distance: parseFloat(dist.toFixed(1)),
            time: finalTime
          });
          setStatus('ready');
        }, 2000);
      },
      () => {
        setError("Acesso à localização negado. Usando estimativa padrão.");
        setData({ distance: 8.5, time: 25 });
        setStatus('ready');
      }
    );
  };

  return (
    <div className="relative z-30 -mt-12 container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-primary border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Action Area */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <i className="fas fa-satellite-dish text-accent animate-pulse"></i>
              </div>
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">Radar de Atendimento Tático</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter mb-6 leading-tight">
              {status === 'idle' && "Quanto tempo levamos para chegar até você?"}
              {status === 'locating' && "Rastreando sua posição atual..."}
              {status === 'calculating' && "Calculando rotas e tráfego..."}
              {status === 'ready' && "Resultado do Diagnóstico de Proximidade"}
            </h2>

            {status === 'idle' && (
              <button 
                onClick={startTracking}
                className="group relative bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest text-sm hover:bg-accent transition-all flex items-center justify-center gap-4 overflow-hidden"
              >
                <span className="relative z-10">Medir Tempo de Resposta</span>
                <i className="fas fa-bolt-lightning relative z-10 group-hover:rotate-12 transition-transform"></i>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            )}

            {(status === 'locating' || status === 'calculating') && (
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-accent animate-shimmer-loading"></div>
                </div>
                <p className="text-white/30 text-[9px] font-black uppercase tracking-widest text-center">Sincronizando com Unidade Móvel Curitiba...</p>
              </div>
            )}

            {status === 'ready' && data && (
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 rounded-xl border border-white/10 text-white/40 font-black text-[9px] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Recalcular
                </button>
                <a href={CONTACT_INFO.whatsappLink} className="flex-1 bg-accent text-primary px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-center shadow-lg hover:scale-105 transition-transform">
                  Solicitar Saída Imediata
                </a>
              </div>
            )}
          </div>

          {/* Results Area */}
          <div className="w-full md:w-80 bg-white/5 p-8 md:p-12 flex flex-col items-center justify-center relative">
            {status === 'ready' && data ? (
              <div className="text-center space-y-8 animate-fade-in">
                <div>
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] block mb-2">Estimativa</span>
                  <div className="text-6xl md:text-7xl font-black text-accent italic tracking-tighter leading-none">
                    {data.time}<span className="text-2xl">min</span>
                  </div>
                </div>
                <div className="h-px w-12 bg-white/20 mx-auto"></div>
                <div>
                  <div className="text-white font-black text-2xl tracking-tighter leading-none">
                    {data.distance}<span className="text-xs ml-1 opacity-40 uppercase tracking-widest">km</span>
                  </div>
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em] block mt-2">Distância da Base</span>
                </div>
                {error && <p className="text-[8px] text-urgent font-bold uppercase">{error}</p>}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6 opacity-20">
                <i className={`fas ${status === 'idle' ? 'fa-location-crosshairs' : 'fa-spinner fa-spin'} text-6xl text-white`}></i>
                <div className="text-center">
                  <div className="h-4 w-24 bg-white/20 rounded mb-2 mx-auto"></div>
                  <div className="h-2 w-16 bg-white/10 rounded mx-auto"></div>
                </div>
              </div>
            )}
            
            {/* Margem de Erro Badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-30">
              <i className="fas fa-circle-exclamation text-[8px] text-accent"></i>
              <span className="text-[7px] font-black text-white uppercase tracking-widest">Margem Erro 10% (IA)</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer-loading {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-shimmer-loading {
          width: 50%;
          animation: shimmer-loading 1.5s infinite ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ResponseTimeTracker;
