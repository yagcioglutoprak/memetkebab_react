import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import ProductModal from '../components/ProductModal';

const categories = [
  { id: 'all', label: 'menu.categories.all' },
  { id: 'doner', label: 'menu.categories.doner' },
  { id: 'kebab', label: 'menu.categories.kebab' },
  { id: 'pide', label: 'menu.categories.pide' },
  { id: 'lahmacun', label: 'menu.categories.lahmacun' },
  { id: 'vegetarian', label: 'menu.categories.vegetarian' },
  { id: 'desserts', label: 'menu.categories.desserts' },
  { id: 'drinks', label: 'menu.categories.drinks' }
];

const fullMenuItems = [
  {
    title: 'products.classicDoner.title',
    price: "$12.99",
    description: 'products.classicDoner.description',
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80",
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'doner',
    rating: 4.9,
    reviews: 328,
    isPromo: true
  },
  {
    title: 'products.mixedGrill.title',
    price: "$18.99",
    description: 'products.mixedGrill.description',
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80",
    features: ['product.features.chef'],
    category: 'doner',
    rating: 4.8,
    reviews: 246
  },
  {
    title: 'products.adanaKebab.title',
    price: "$16.99",
    description: 'products.adanaKebab.description',
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80",
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'kebab',
    rating: 4.9,
    reviews: 187
  },
  {
    title: 'products.iskender.title',
    price: "$16.99",
    description: 'products.iskender.description',
    image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&q=80",
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'kebab',
    rating: 4.7,
    reviews: 203,
    isPromo: true
  },
  {
    title: 'products.falafel.title',
    price: "$11.99",
    description: 'products.falafel.description',
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
    features: ['product.features.traditional'],
    category: 'vegetarian',
    rating: 4.6,
    reviews: 156
  },
  {
    title: 'products.cheesePide.title',
    price: "$13.99",
    description: 'products.cheesePide.description',
    image: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&q=80",
    features: ['product.features.traditional'],
    category: 'pide',
    rating: 4.8,
    reviews: 167
  }
];

const menuItems = fullMenuItems.reduce((acc, item) => {
  const category = acc.find(category => category.category === item.category);
  if (category) {
    category.items.push(item);
  } else {
    acc.push({ category: item.category, items: [item] });
  }
  return acc;
}, []);

export default function MenuPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 pb-12">
        {/* Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 flex items-center gap-2 text-[rgba(32,12,0,0.7)] hover:text-[rgba(32,12,0,255)] transition-colors relative z-10"
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
          <h1 className="text-4xl font-bold mb-4 text-[rgba(32,12,0,255)]">{t('menu.title')}</h1>
          <p className="text-[rgba(32,12,0,0.7)] max-w-2xl mx-auto mb-8">
            {t('menu.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(32,12,0,0.7)]" />
            <input
              type="text"
              placeholder={t('menu.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[rgba(32,12,0,0.1)] rounded-full text-[rgba(32,12,0,255)] focus:outline-none focus:ring-2 focus:ring-[rgba(213,17,42,255)]"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[rgba(213,17,42,255)] text-white'
                    : 'bg-[rgba(32,12,0,0.1)] text-[rgba(32,12,0,0.7)] hover:bg-[rgba(32,12,0,0.2)]'
                }`}
              >
                {t(category.label)}
              </button>
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
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-[rgba(32,12,0,0.1)] shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={t(item.title)}
                  className="w-full h-48 object-cover"
                />
              </div>
              {item.isPromo && (
                <div className="absolute top-4 right-4 bg-[rgba(213,17,42,255)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {t('menu.specialOffer')}
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[rgba(32,12,0,255)]">{t(item.title)}</h3>
                    {item.rating && (
                      <div className="flex items-center gap-2 text-[rgba(32,12,0,0.7)]">
                        <Star className="w-4 h-4 fill-[rgba(213,17,42,255)] text-[rgba(213,17,42,255)]" />
                        <span>{item.rating}</span>
                        <span>({item.reviews} {t('menu.reviews')})</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[rgba(213,17,42,255)] font-bold">{item.price}</span>
                </div>
                <p className="text-[rgba(32,12,0,0.7)]">{t(item.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}