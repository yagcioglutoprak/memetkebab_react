import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Briefcase, Send, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resume?: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  position?: string;
  experience?: string;
  resume?: string;
}

export default function RecruitmentForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = t('careers.form.errors.required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('careers.form.errors.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('careers.form.errors.invalidEmail');
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('careers.form.errors.required');
    }
    
    if (!formData.position) {
      newErrors.position = t('careers.form.errors.required');
    }
    
    if (!formData.experience) {
      newErrors.experience = t('careers.form.errors.required');
    }
    
    // Resume is optional now to match template
    if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = t('careers.form.errors.fileTooBig');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Convert resume to base64 if exists
      let resumeBase64 = '';
      if (formData.resume) {
        resumeBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(formData.resume!);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
        });
      }
      
      // Initialize EmailJS
      emailjs.init('Oolmh9iWrBHVHb2dw');

      // Send email using EmailJS
      // Prepare template variables
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        message: formData.message
      };

      // Only add resume if it exists
      if (resumeBase64) {
        templateParams.resume = resumeBase64;
      }

      // Send email
      await emailjs.send(
        'service_vv92a3a',
        'template_tw91r0v',
        templateParams
      );
      
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      let errorMessage = t('careers.form.errors.submitError');
      
      // Handle specific EmailJS errors
      if (error?.text) {
        if (error.text.includes('service ID not found')) {
          errorMessage = 'Email service configuration error. Please contact support.';
        } else {
          errorMessage = `Error: ${error.text}`;
        }
      }
      
      setErrors({ ...errors, submit: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({
          ...prev,
          resume: t('careers.form.errors.fileTooBig')
        }));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setErrors(prev => ({
        ...prev,
        resume: undefined
      }));
    }
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

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
        >
          <CheckCircle className="w-5 h-5" />
          {t('careers.form.submitSuccess')}
        </motion.div>
      )}

      {errors.submit && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700"
        >
          {errors.submit}
        </motion.div>
      )}

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
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
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
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
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
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
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
            {errors.position && (
              <p className="mt-1 text-sm text-red-600">{errors.position}</p>
            )}
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
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-[rgba(213,17,42,255)] focus:ring-[rgba(213,17,42,255)] focus:ring-1 focus:outline-none transition-colors resize-none"
            placeholder={t('careers.form.messagePlaceholder')}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            {t('careers.form.resume')}
          </label>
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <div className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">
                  {formData.resume ? formData.resume.name : t('careers.form.uploadResume')}
                </span>
              </div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
          {errors.resume && (
            <p className="text-sm text-red-600">{errors.resume}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(213,17,42,255)] text-white rounded-lg hover:bg-[rgba(193,15,38,255)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(213,17,42,255)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {t('careers.form.submitting')}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t('careers.form.submit')}
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}