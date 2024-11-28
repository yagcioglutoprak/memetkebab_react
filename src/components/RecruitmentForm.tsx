import React, { useState, useEffect } from 'react';
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

export default function RecruitmentForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

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
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl max-w-xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-[rgba(213,17,42,255)]" />
        <h3 className="text-2xl font-bold text-gray-900">{t('careers.form.title')}</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-700">
              {t('careers.form.fullName')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
              {t('careers.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
              {t('careers.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium mb-2 text-gray-700">
              {t('careers.form.position')}
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors"
            >
              <option value="" className="text-gray-500">{t('careers.form.selectPosition')}</option>
              {positions.map(pos => (
                <option key={pos.id} value={pos.id} className="text-gray-900">
                  {pos.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-2 text-gray-700">
            {t('careers.form.experience')}
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors"
            placeholder="3 years"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
            {t('careers.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors resize-none"
            placeholder={t('careers.form.messagePlaceholder')}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(213,17,42,255)] text-white rounded-lg hover:bg-[rgba(193,15,38,255)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(213,17,42,255)]"
          >
            <Send className="w-5 h-5" />
            {t('careers.form.submit')}
          </button>
        </div>
      </form>
    </motion.div>
  );
}