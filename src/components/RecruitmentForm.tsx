import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Briefcase, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

export default function RecruitmentForm({ t }: { t: (key: string) => string }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const positions = [
    { id: 'chef', label: t('careers.positions.chef') },
    { id: 'kitchen', label: t('careers.positions.kitchen') },
    { id: 'manager', label: t('careers.positions.manager') },
    { id: 'server', label: t('careers.positions.server') },
    { id: 'driver', label: t('careers.positions.driver') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-950/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 max-w-xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-red-500" />
        <h3 className="text-2xl font-bold">{t('careers.form.title')}</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
              {t('careers.form.fullName')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              {t('careers.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              {t('careers.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
              {t('careers.form.position')}
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
            >
              <option value="">{t('careers.form.position')}</option>
              {positions.map(pos => (
                <option key={pos.id} value={pos.id}>{pos.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
            {t('careers.form.experience')}
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            min="0"
            max="50"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {t('careers.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send className="w-5 h-5" />
            {t('careers.form.submit')}
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Upload className="w-5 h-5" />
            {t('careers.form.resume')}
          </button>
        </div>
      </form>
    </motion.div>
  );
}