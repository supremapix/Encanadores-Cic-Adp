import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: '',
    service: 'Desentupimento',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Contato do Site*%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Bairro:* ${formData.neighborhood}%0A*Serviço:* ${formData.service}%0A*Mensagem:* ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=5541985171966&text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-2xl text-white">
      <h3 className="text-2xl font-bold mb-2 text-center">Solicite um Orçamento</h3>
      <p className="text-center text-blue-100 mb-6">Resposta rápida via WhatsApp</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1 ml-1">Seu Nome</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 ml-1">WhatsApp / Telefone</label>
          <input 
            type="tel" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="(41) 99999-9999"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 ml-1">Bairro</label>
            <input 
              type="text" 
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Ex: Água Verde"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 ml-1">Tipo de Serviço</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="Desentupimento">Desentupimento Geral</option>
              <option value="Esgoto">Esgoto</option>
              <option value="Pia">Pia</option>
              <option value="Vaso Sanitário">Vaso Sanitário</option>
              <option value="Caça Vazamento">Caça Vazamento</option>
              <option value="Hidrojateamento">Hidrojateamento</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 ml-1">Mensagem (Opcional)</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Descreva brevemente o problema..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all flex justify-center items-center gap-2 text-lg"
        >
          <i className="fab fa-whatsapp text-2xl"></i> ENVIAR SOLICITAÇÃO
        </button>
      </form>
    </div>
  );
};

export default ContactForm;