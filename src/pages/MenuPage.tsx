import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import ProductModal from '../components/ProductModal';
import donerDurum from '../assets/menu_items /döner_png_dürüm.png';
import donerWithKetchup from '../assets/menu_items /2_döner_with_ketchup.webp';
import wrap from '../assets/menu_items /wrap.webp';
import singleDonerMenu from '../assets/menu_items /single döner menü .webp';
import sandvic from '../assets/menu_items /sandviç .webp';
import menuDurum from '../assets/menu_items /menu_4_dürüm .webp';

const categories = [
  { id: 'all', label: 'menu.categories.all' },
  { id: 'doner', label: 'menu.categories.doner' },
  { id: 'durum', label: 'menu.categories.durum' },
  { id: 'menu', label: 'menu.categories.menu' },
  { id: 'sandwich', label: 'menu.categories.sandwich' },
  { id: 'wrap', label: 'menu.categories.wrap' }
];

const fullMenuItems = [
  {
    title: 'Mega Döner Roll',
    title_ru: 'Мега Дёнер Ролл',
    title_pl: 'Mega Döner Roll',
    price: "€8.99",
    description: 'Classic dürüm with thin lavash bread, juicy döner meat, fresh vegetables, and creamy sauce.',
    description_ru: 'Классический дюрюм с тонким лавашем, сочным мясом дёнера, свежими овощами и кремовым соусом.',
    description_pl: 'Klasyczny dürüm z cienkim chlebem lavash, soczystym mięsem döner, świeżymi warzywami i kremowym sosem.',
    image: donerDurum,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'durum',
    rating: 4.9,
    reviews: 328,
    isPromo: true
  },
  {
    title: 'Döner Fun Zestaw',
    title_ru: 'Дёнер Фан Набор',
    title_pl: 'Döner Fun Zestaw',
    price: "€12.99",
    description: 'A flavor-packed set! Tasty döner wrap, crispy fries, nuggets, and a cold drink. Perfect for lunch or a chill evening.',
    description_ru: 'Набор, полный вкуса! Вкусный дёнер-врап, хрустящий картофель фри, наггетсы и холодный напиток. Идеально для обеда или спокойного вечера.',
    description_pl: 'Zestaw pełen smaku! Smaczny wrap döner, chrupiące frytki, nuggetsy i zimny napój. Idealny na lunch lub relaksujący wieczór.',
    image: donerWithKetchup,
    features: ['product.features.chef'],
    category: 'menu',
    rating: 4.8,
    reviews: 246
  },
  {
    title: 'Wrapster Klasyk',
    title_ru: 'Рапстер Классик',
    title_pl: 'Wrapster Klasyk',
    price: "€7.99",
    description: 'Grilled triangular wrap filled with seasoned meat and fresh vegetables. A classic with a modern twist!',
    description_ru: 'Обжаренный треугольный врап, наполненный приправленным мясом и свежими овощами. Классика с современным поворотом!',
    description_pl: 'Grillowany trójkątny wrap wypełniony przyprawionym mięsem i świeżymi warzywami. Klasyka w nowoczesnym wydaniu!',
    image: wrap,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'wrap',
    rating: 4.7,
    reviews: 187
  },
  {
    title: 'Dürüm Solo Menu',
    title_ru: 'Дюрюм Соло Меню',
    title_pl: 'Dürüm Solo Menu',
    price: "€10.99",
    description: 'Simple and satisfying. A döner wrap, fries, and a cold drink. All you need – solo but loaded.',
    description_ru: 'Просто и сытно. Дёнер-врап, картофель фри и прохладный напиток. Всё, что нужно – соло, но с полной загрузкой.',
    description_pl: 'Proste i satysfakcjonujące. Wrap döner, frytki i zimny napój. Wszystko, czego potrzebujesz – solo, ale na bogato.',
    image: singleDonerMenu,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'menu',
    rating: 4.7,
    reviews: 203,
    isPromo: true
  },
  {
    title: 'Kids Kebab Mix',
    title_ru: 'Детский Кебаб Микс',
    title_pl: 'Kids Kebab Mix',
    price: "€6.99",
    description: 'Small sandwich with meat, fresh veggies, and our mild sauce. Comes with fries and juice – perfect for little kebab fans!',
    description_ru: 'Маленький сэндвич с мясом, свежими овощами и нашим нежным соусом. Подается с картофелем фри и соком – идеально для маленьких любителей кебаба!',
    description_pl: 'Mała kanapka z mięsem, świeżymi warzywami i naszym łagodnym sosem. Podawana z frytkami i sokiem – idealna dla małych fanów kebaba!',
    image: sandvic,
    features: ['product.features.traditional'],
    category: 'sandwich',
    rating: 4.6,
    reviews: 156
  },
  {
    title: 'Maxi Dürüm Zestaw',
    title_ru: 'Макси Дюрюм Набор',
    title_pl: 'Maxi Dürüm Zestaw',
    price: "€14.99",
    description: 'For the hungry ones! Two signature dürüms, fries, and a drink – a real feast.',
    description_ru: 'Для голодных! Два фирменных дюрюма, картофель фри и напиток – настоящий пир.',
    description_pl: 'Dla głodomorów! Dwa popisowe dürümy, frytki i napój – prawdziwa uczta.',
    image: menuDurum,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'menu',
    rating: 4.9,
    reviews: 198
  }
];

const menuItems = fullMenuItems.reduce<Array<{ category: string; items: typeof fullMenuItems }>>((acc, item) => {
  const category = acc.find(category => category.category === item.category);
  if (category) {
    category.items.push(item);
  } else {
    acc.push({ category: item.category, items: [item] });
  }
  return acc;
}, []);

export default function MenuPage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof fullMenuItems[0] | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const filteredItems = menuItems.flatMap(category => category.items).filter(item => {
    const matchesSearch = t(item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t(item.description).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                          menuItems.find(cat => cat.category === selectedCategory)?.items.includes(item);
    return matchesSearch && matchesCategory;
  });

  // Fonction pour obtenir le titre et la description selon la langue
  const getLocalizedTitle = (item: typeof fullMenuItems[0]) => {
    if (language === 'ru' && item.title_ru) {
      return item.title_ru;
    }
    if (language === 'pl' && item.title_pl) {
      return item.title_pl;
    }
    return item.title;
  };

  const getLocalizedDescription = (item: typeof fullMenuItems[0]) => {
    if (language === 'ru' && item.description_ru) {
      return item.description_ru;
    }
    if (language === 'pl' && item.description_pl) {
      return item.description_pl;
    }
    return item.description;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjEzLDE3LDQyLDAuMDgpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-4 pb-12 relative">
        {/* Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 flex items-center gap-2 text-[rgba(32,12,0,0.7)] hover:text-[rgba(32,12,0,255)] transition-colors relative z-10 bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('menu.back')}
        </motion.button>

        {/* Title and Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-[rgba(213,17,42,255)]/5 rounded-full mb-6">
            <span className="text-[rgba(213,17,42,255)] font-medium text-sm">Our Menu</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[rgba(32,12,0,255)] to-[rgba(213,17,42,255)]">
            {t('menu.title')}
          </h1>
          <p className="text-xl text-[rgba(32,12,0,0.7)] max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('menu.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(213,17,42,255)]/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-white rounded-2xl shadow-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[rgba(213,17,42,255)]" />
              <input
                type="text"
                placeholder={t('menu.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-[rgba(32,12,0,255)] focus:outline-none focus:ring-2 focus:ring-[rgba(213,17,42,255)] transition-shadow"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[rgba(213,17,42,255)] text-white shadow-lg'
                    : 'bg-white text-[rgba(32,12,0,0.7)] hover:text-[rgba(32,12,0,255)] shadow-sm hover:shadow-md'
                }`}
              >
                {t(category.label)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              <div className="relative h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={getLocalizedTitle(item)}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {item.isPromo && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-[rgba(213,17,42,255)] text-white px-4 py-1.5 rounded-xl text-sm font-medium shadow-lg">
                      {t('menu.specialOffer')}
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[rgba(213,17,42,255)]" />
                  <span className="font-medium text-[rgba(32,12,0,255)]">{item.rating}</span>
                  <span className="text-sm text-[rgba(32,12,0,0.7)]">({item.reviews})</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[rgba(32,12,0,255)] group-hover:text-[rgba(213,17,42,255)] transition-colors">
                  {getLocalizedTitle(item)}
                </h3>
                <p className="text-[rgba(32,12,0,0.7)] text-sm mb-4 line-clamp-2">
                  {getLocalizedDescription(item)}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[rgba(213,17,42,255)]">{item.price}</span>
                  {item.features && item.features.length > 0 && (
                    <div className="flex gap-2">
                      {item.features.map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-lg bg-[rgba(213,17,42,255)]/5 text-[rgba(213,17,42,255)]"
                        >
                          {t(feature)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}