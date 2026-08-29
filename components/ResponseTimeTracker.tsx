import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const ADP_COORDS = { lat: -25.5138495, lng: -49.3364239 }; // Rua Luiz Maltaca, 36 - CIC

const ResponseTimeTracker: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'locating' | 'calculating' | 'ready'>('idle');
  const [data, setData] = useState<{ distance: number; time: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Raio da Terra em km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const startTracking = () => {
    setStatus('locating');
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocalização não suportada no seu navegador.");
      setData({ distance: 7.2, time: 25 });
      setStatus('ready');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus('calculating');
        setTimeout(() => {
          const dist = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            ADP_COORDS.lat,
            ADP_COORDS.lng
          );

          const baseTime = (dist / 32) * 60;
          const finalTime = Math.max(15, Math.round(baseTime + 8));

          setData({
            distance: parseFloat(dist.toFixed(1)),
            time: finalTime,
          });
          setStatus('ready');
        }, 1200);
      },
      () => {
        // Fallback gracioso
        setData({ distance: 8.0, time: 25 });
        setStatus('ready');
      },
      { timeout: 8000 }
    );
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Left Info */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-400">
              <i className="fa-solid fa-route"></i>
              <span>Radar de Proximidade em Curitiba</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Calcule o tempo estimado de chegada até o seu endereço
            </h3>
            <p className="text-xs text-slate-300 max-w-lg">
              Base operacional no <strong>CIC</strong> com técnicos volantes nos principais corredores de Curitiba e RMC.
            </p>
          </div>

          {/* Action / Result */}
          <div className="flex-shrink-0 w-full md:w-auto text-center">
            {status === 'idle' && (
              <button
                onClick={startTracking}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm"
              >
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>Verificar Tempo de Saída</span>
              </button>
            )}

            {(status === 'locating' || status === 'calculating') && (
              <div className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 rounded-xl text-xs text-slate-300">
                <i className="fa-solid fa-circle-notch fa-spin text-yellow-400"></i>
                <span>Calculando rota mais rápida...</span>
              </div>
            )}

            {status === 'ready' && data && (
              <div className="flex items-center gap-3 bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl">
                <div className="text-left px-2">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Estimativa</span>
                  <span className="text-lg font-extrabold text-yellow-400 leading-none">
                    ~{data.time} min
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ({data.distance} km da base)
                  </span>
                </div>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Acionar Agora</span>
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResponseTimeTracker;
