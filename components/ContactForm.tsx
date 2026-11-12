import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: '',
    service: 'Caça-Vazamento Digital',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Solicitação de Orçamento - Desentupidora ADP*\n\n*Nome:* ${formData.name}\n*Telefone/WhatsApp:* ${formData.phone}\n*Bairro/Cidade:* ${formData.neighborhood}\n*Serviço:* ${formData.service}\n*Detalhes:* ${formData.message || 'Atendimento padrão'}`;
    const url = `https://api.whatsapp.com/send?phone=5541985171966&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
      <div className="text-center max-w-md mx-auto mb-6">
        <span className="text-[11px] uppercase tracking-wider font-bold text-yellow-400">
          Plantão 24 Horas em Curitiba
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
          Solicitar Atendimento Técnico
        </h3>
        <p className="text-xs text-slate-300 mt-1">
          Preencha abaixo para envio direto ao técnico de plantão no WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1">
              Seu Nome *
            </label>
            <input 
              type="text" 
              id="contact-name" name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: João da Silva"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1">
              WhatsApp / Telefone *
            </label>
            <input 
              type="tel" 
              id="contact-phone" name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(41) 99999-9999"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-neighborhood" className="block text-xs font-semibold text-slate-300 mb-1">
              Bairro ou Cidade *
            </label>
            <input 
              type="text" 
              id="contact-neighborhood" name="neighborhood"
              required
              value={formData.neighborhood}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: CIC, Batel, Portão, SJP..."
            />
          </div>

          <div>
            <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1">
              Tipo de Serviço *
            </label>
            <select 
              id="contact-service" name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Caça-Vazamento Digital">Caça-Vazamento Digital (Geofone)</option>
              <option value="Desentupimento 24 Horas">Desentupidora / Esgoto / Pias</option>
              <option value="Laudo Técnico Sanepar">Laudo Técnico para Sanepar</option>
              <option value="Limpeza de Caixa de Gordura">Limpeza de Caixa de Gordura</option>
              <option value="Hidrojateamento">Hidrojateamento de Alta Pressão</option>
              <option value="Vídeo Inspeção HD">Vídeo Inspeção de Tubulações</option>
              <option value="Manutenção Hidráulica">Troca de Válvula / Registro / Reparos</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1">
            Descreva o Problema (Opcional)
          </label>
          <textarea 
            id="contact-message" name="message"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Conta de água veio o dobro, infiltração na parede do banheiro..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 text-sm sm:text-base active:scale-98"
        >
          <i className="fa-brands fa-whatsapp text-lg"></i>
          <span>Enviar para Plantão via WhatsApp</span>
        </button>

        <p className="text-[11px] text-center text-slate-400">
          <i className="fa-solid fa-lock text-slate-500 mr-1"></i>
          Seus dados são protegidos e utilizados unicamente para retorno técnico.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
