import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, TrendingUp, Users, Store, DollarSign, Award, ArrowRight } from 'lucide-react';
import favicon from '/favicon.png';
import { COLORS } from '../constants/colors';
import emailjs from '@emailjs/browser';
import { franchiseEmailTemplate } from '../templates/franchiseEmailTemplate';

const FranchisePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        location: formData.location,
        to_name: 'Memet Kebab Team',
        subject: franchiseEmailTemplate.subject.replace('{{from_name}}', formData.name),
        html: franchiseEmailTemplate.html
          .replace(/{{from_name}}/g, formData.name)
          .replace(/{{from_email}}/g, formData.email)
          .replace(/{{phone}}/g, formData.phone)
          .replace(/{{location}}/g, formData.location)
          .replace(/{{to_name}}/g, 'Memet Kebab Team')
      };

      await emailjs.send(
        'service_vv92a3a', // Replace with your EmailJS service ID
        'template_0vnhinm', // Replace with your EmailJS template ID
        templateParams,
        'Oolmh9iWrBHVHb2dw' // Replace with your EmailJS public key
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        location: ''
      });
      alert(t('franchise.investment.form.success'));
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('franchise.investment.form.error'));
    }
  };
  // Add animation keyframes
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes progressLine {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const { t } = useLanguage();

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" style={{ color: COLORS.PRIMARY }} />,
      title: t('franchise.benefits.proven'),
      description: t('franchise.benefits.provenDesc')
    },
    {
      icon: <Users className="w-6 h-6" style={{ color: COLORS.PRIMARY }} />,
      title: t('franchise.benefits.support'),
      description: t('franchise.benefits.supportDesc')
    },
    {
      icon: <Store className="w-6 h-6" style={{ color: COLORS.PRIMARY }} />,
      title: t('franchise.benefits.location'),
      description: t('franchise.benefits.locationDesc')
    },
    {
      icon: <DollarSign className="w-6 h-6" style={{ color: COLORS.PRIMARY }} />,
      title: t('franchise.benefits.roi'),
      description: t('franchise.benefits.roiDesc')
    },
    {
      icon: <Award className="w-6 h-6" style={{ color: COLORS.PRIMARY }} />,
      title: t('franchise.benefits.brand'),
      description: t('franchise.benefits.brandDesc')
    }
  ];

  const steps = [
    {
      number: '01',
      title: t('franchise.steps.inquiry'),
      description: t('franchise.steps.inquiryDesc')
    },
    {
      number: '02',
      title: t('franchise.steps.evaluation'),
      description: t('franchise.steps.evaluationDesc')
    },
    {
      number: '03',
      title: t('franchise.steps.agreement'),
      description: t('franchise.steps.agreementDesc')
    },
    {
      number: '04',
      title: t('franchise.steps.training'),
      description: t('franchise.steps.trainingDesc')
    },
    {
      number: '05',
      title: t('franchise.steps.launch'),
      description: t('franchise.steps.launchDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] rounded-b-[40px] overflow-hidden" 
        style={{ 
          background: `linear-gradient(135deg, ${COLORS.PRIMARY}, ${COLORS.PRIMARY_HOVER})`
        }}
      >
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 relative z-10">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t('franchise.hero.title')}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white mb-8 font-medium"
            >
              {t('franchise.hero.subtitle')}
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="group bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 mx-auto"
              style={{ color: COLORS.PRIMARY }}
            >
              {t('franchise.hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('franchise.benefits.title')}</h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-medium">{t('franchise.benefits.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4" style={{ background: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('franchise.steps.title')}</h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-medium">{t('franchise.steps.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div 
              className="absolute hidden lg:block h-0.5 top-[45px] left-[150px] right-[150px] z-0" 
              style={{ background: `linear-gradient(to right, ${COLORS.PRIMARY}20, ${COLORS.PRIMARY}20)` }}
            />
            <div 
              className="absolute hidden lg:block h-0.5 top-[45px] left-[150px] right-[150px] z-0" 
              style={{ 
                background: `linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.PRIMARY})`,
                animation: 'progressLine 2s ease-out forwards',
                transformOrigin: 'left',
                transform: 'scaleX(0)'
              }}
            />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold" 
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.PRIMARY}, ${COLORS.PRIMARY_HOVER})`,
                      color: 'white'
                    }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-[24px] p-8 md:p-12 text-white relative overflow-hidden shadow-xl border border-white/10"
            style={{ 
              background: `linear-gradient(135deg, ${COLORS.PRIMARY}, ${COLORS.PRIMARY_HOVER})`
            }}
          >
            <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('franchise.investment.title')}</h2>
                <p className="text-white mb-8 font-medium">{t('franchise.investment.description')}</p>
                <ul className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center">
                      <Check className="w-5 h-5 mr-3" />
                      <span>{t(`franchise.investment.point${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg relative z-10 border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <img src={favicon} alt="Memet Kebab Logo" className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.PRIMARY }}>{t('franchise.investment.form.title')}</h3>
                <p className="text-gray-600 mb-8 text-center">Join our successful franchise network and be part of our growing family.</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('franchise.investment.form.name')}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 outline-none transition-all placeholder:text-gray-400 focus:border-2 hover:border-gray-200 text-gray-800"
                    style={{ 
                      "--tw-ring-color": COLORS.PRIMARY,
                      "--tw-ring-opacity": "1",
                      "--tw-ring-offset-width": "0px"
                    } as React.CSSProperties}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('franchise.investment.form.email')}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 outline-none transition-all placeholder:text-gray-400 focus:border-2 hover:border-gray-200 text-gray-800"
                    style={{ 
                      "--tw-ring-color": COLORS.PRIMARY,
                      "--tw-ring-opacity": "1",
                      "--tw-ring-offset-width": "0px"
                    } as React.CSSProperties}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('franchise.investment.form.phone')}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 outline-none transition-all placeholder:text-gray-400 focus:border-2 hover:border-gray-200 text-gray-800"
                    style={{ 
                      "--tw-ring-color": COLORS.PRIMARY,
                      "--tw-ring-opacity": "1",
                      "--tw-ring-offset-width": "0px"
                    } as React.CSSProperties}
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder={t('franchise.investment.form.location')}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 outline-none transition-all placeholder:text-gray-400 focus:border-2 hover:border-gray-200 text-gray-800"
                    style={{ 
                      "--tw-ring-color": COLORS.PRIMARY,
                      "--tw-ring-opacity": "1",
                      "--tw-ring-offset-width": "0px"
                    } as React.CSSProperties}
                  />
                  <button
                    type="submit"
                    className="w-full text-white py-4 rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    style={{ 
                      backgroundColor: COLORS.PRIMARY,
                      "&:hover": { backgroundColor: COLORS.PRIMARY_HOVER }
                    } as React.CSSProperties}
                  >
                    {t('franchise.investment.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
