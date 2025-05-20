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
    title_de: 'Mega Döner Roll',
    title_cs: 'Mega Döner Roll',
    title_hu: 'Mega Döner Roll',
    title_pl: 'Mega Döner Roll',
    title_ro: 'Mega Döner Roll',
    title_ru: 'Мега Дёнер Ролл',
    title_sl: 'Mega Döner Roll',
    title_uk: 'Мега Дёнер Рол',
    price: "€8.99",
    description: 'Classic dürüm with thin lavash bread, juicy döner meat, fresh vegetables, and creamy sauce.',
    description_de: 'Klassischer Dürüm mit dünnem Lavash-Brot, saftigem Döner-Fleisch, frischem Gemüse und cremiger Sauce.',
    description_cs: 'Klasický dürüm s tenkým lavash chlebem, šťavnatým döner masem, čerstvou zeleninou a krémovou omáčkou.',
    description_hu: 'Klasszikus dürüm vékony lavash kenyérrel, szaftos döner hússal, friss zöldségekkel és krémes szósszal.',
    description_pl: 'Klasyczny dürüm z cienkim chlebem lavash, soczystym mięsem döner, świeżymi warzywami i kremowym sosem.',
    description_ro: 'Dürüm clasic cu pâine lavash subțire, carne döner suculentă, legume proaspete și sos cremos.',
    description_ru: 'Классический дюрюм с тонким лавашем, сочным мясом дёнера, свежими овощами и кремовым соусом.',
    description_sl: 'Klasični dürüm s tankim lavash kruhom, sočnim döner mesom, svežo zelenjavo in kremasto omako.',
    description_uk: 'Класичний дюрюм з тонким лавашем, соковитим м\'ясом донера, свіжими овочами та вершковим соусом.',
    image: donerDurum,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'durum',
    rating: 4.9,
    reviews: 328,
    isPromo: true
  },
  {
    title: 'Döner Fun Zestaw',
    title_de: 'Döner Fun Set',
    title_cs: 'Döner Fun Set',
    title_hu: 'Döner Fun Készlet',
    title_pl: 'Döner Fun Zestaw',
    title_ro: 'Set Döner Fun',
    title_ru: 'Дёнер Фан Набор',
    title_sl: 'Döner Fun Set',
    title_uk: 'Донер Фан Набір',
    price: "€12.99",
    description: 'A flavor-packed set! Tasty döner wrap, crispy fries, nuggets, and a cold drink. Perfect for lunch or a chill evening.',
    description_de: 'Ein geschmackvolles Set! Leckerer Döner-Wrap, knusprige Pommes, Nuggets und ein kaltes Getränk. Perfekt für Mittag oder einen entspannten Abend.',
    description_cs: 'Sada plná chutí! Chutný döner wrap, křupavé hranolky, nugety a studený nápoj. Ideální na oběd nebo relaxační večer.',
    description_hu: 'Ízletes készlet! Ízletes döner tekercs, ropogós sültkrumpli, nuggets és hideg ital. Tökéletes ebédre vagy egy kellemes estére.',
    description_pl: 'Zestaw pełen smaku! Smaczny wrap döner, chrupiące frytki, nuggetsy i zimny napój. Idealny na lunch lub relaksujący wieczór.',
    description_ro: 'Un set plin de savoare! Wrap döner delicios, cartofi prăjiți crocanți, nuggets și o băutură rece. Perfect pentru prânz sau o seară relaxantă.',
    description_ru: 'Набор, полный вкуса! Вкусный дёнер-врап, хрустящий картофель фри, наггетсы и холодный напиток. Идеально для обеда или спокойного вечера.',
    description_sl: 'Komplet poln okusov! Okusen döner wrap, hrustljavi pomfri, nugeti in hladna pijača. Popoln za kosilo ali sproščen večer.',
    description_uk: 'Набір, сповнений смаку! Смачний донер-рап, хрустка картопля фрі, нагетси та холодний напій. Ідеально для обіду або спокійного вечора.',
    image: donerWithKetchup,
    features: ['product.features.chef'],
    category: 'menu',
    rating: 4.8,
    reviews: 246
  },
  {
    title: 'Wrapster Klasyk',
    title_de: 'Wrapster Klassik',
    title_cs: 'Wrapster Klasik',
    title_hu: 'Wrapster Klasszikus',
    title_pl: 'Wrapster Klasyk',
    title_ro: 'Wrapster Clasic',
    title_ru: 'Рапстер Классик',
    title_sl: 'Wrapster Klasik',
    title_uk: 'Рапстер Класик',
    price: "€7.99",
    description: 'Grilled triangular wrap filled with seasoned meat and fresh vegetables. A classic with a modern twist!',
    description_de: 'Gegrillter dreieckiger Wrap gefüllt mit gewürztem Fleisch und frischem Gemüse. Ein Klassiker mit modernem Touch!',
    description_cs: 'Grilovaný trojúhelníkový wrap plněný kořeněným masem a čerstvou zeleninou. Klasika s moderním nádechem!',
    description_hu: 'Grillezett háromszög alakú tekercs fűszeres hússal és friss zöldségekkel. Egy klasszikus modern fordulattal!',
    description_pl: 'Grillowany trójkątny wrap wypełniony przyprawionym mięsem i świeżymi warzywami. Klasyka w nowoczesnym wydaniu!',
    description_ro: 'Wrap triunghiular la grătar umplut cu carne condimentată și legume proaspete. Un clasic cu o notă modernă!',
    description_ru: 'Обжаренный треугольный врап, наполненный приправленным мясом и свежими овощами. Классика с современным поворотом!',
    description_sl: 'Pečen trikotni wrap, napolnjen z začinjenim mesom in svežo zelenjavo. Klasika s sodobnim pridihom!',
    description_uk: 'Смажений трикутний рап, наповнений приправленим м\'ясом та свіжими овочами. Класика з сучасним поворотом!',
    image: wrap,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'wrap',
    rating: 4.7,
    reviews: 187
  },
  {
    title: 'Dürüm Solo Menu',
    title_de: 'Dürüm Solo Menü',
    title_cs: 'Dürüm Solo Menu',
    title_hu: 'Dürüm Solo Menü',
    title_pl: 'Dürüm Solo Menu',
    title_ro: 'Meniu Dürüm Solo',
    title_ru: 'Дюрюм Соло Меню',
    title_sl: 'Dürüm Solo Menu',
    title_uk: 'Дюрюм Соло Меню',
    price: "€10.99",
    description: 'Simple and satisfying. A döner wrap, fries, and a cold drink. All you need – solo but loaded.',
    description_de: 'Einfach und befriedigend. Ein Döner-Wrap, Pommes und ein kaltes Getränk. Alles was du brauchst – solo aber vollgepackt.',
    description_cs: 'Jednoduché a uspokojivé. Döner wrap, hranolky a studený nápoj. Vše, co potřebujete – solo, ale nabité.',
    description_hu: 'Egyszerű és kielégítő. Egy döner tekercs, sültkrumpli és hideg ital. Minden, amire szükséged van – szóló, de tele.',
    description_pl: 'Proste i satysfakcjonujące. Wrap döner, frytki i zimny napój. Wszystko, czego potrzebujesz – solo, ale na bogato.',
    description_ro: 'Simplu și satisfăcător. Un wrap döner, cartofi prăjiți și o băutură rece. Tot ce ai nevoie – solo, dar încărcat.',
    description_ru: 'Просто и сытно. Дёнер-врап, картофель фри и прохладный напиток. Всё, что нужно – соло, но с полной загрузкой.',
    description_sl: 'Preprosto in zadovoljivo. Döner wrap, pomfri in hladna pijača. Vse, kar potrebujete – solo, a polno.',
    description_uk: 'Просто та ситно. Донер-рап, картопля фрі та прохолодний напій. Все, що потрібно – соло, але з повним завантаженням.',
    image: singleDonerMenu,
    features: ['product.features.chef', 'product.features.traditional'],
    category: 'menu',
    rating: 4.7,
    reviews: 203,
    isPromo: true
  },
  {
    title: 'Kids Kebab Mix',
    title_de: 'Kids Kebab Mix',
    title_cs: 'Dětský Kebab Mix',
    title_hu: 'Gyerek Kebab Mix',
    title_pl: 'Kids Kebab Mix',
    title_ro: 'Mix Kebab pentru Copii',
    title_ru: 'Детский Кебаб Микс',
    title_sl: 'Otroški Kebab Mix',
    title_uk: 'Дитячий Кебаб Мікс',
    price: "€6.99",
    description: 'Small sandwich with meat, fresh veggies, and our mild sauce. Comes with fries and juice – perfect for little kebab fans!',
    description_de: 'Kleines Sandwich mit Fleisch, frischem Gemüse und unserer milden Sauce. Mit Pommes und Saft – perfekt für kleine Kebab-Fans!',
    description_cs: 'Malý sendvič s masem, čerstvou zeleninou a naší jemnou omáčkou. S hranolky a džusem – perfektní pro malé fanoušky kebabu!',
    description_hu: 'Kis szendvics hússal, friss zöldségekkel és enyhe szósszal. Sültkrumplival és gyümölcslével – tökéletes a kis kebab rajongóknak!',
    description_pl: 'Mała kanapka z mięsem, świeżymi warzywami i naszym łagodnym sosem. Podawana z frytkami i sokiem – idealna dla małych fanów kebaba!',
    description_ro: 'Sandviș mic cu carne, legume proaspete și sosul nostru blând. Vine cu cartofi prăjiți și suc – perfect pentru micii fani de kebab!',
    description_ru: 'Маленький сэндвич с мясом, свежими овощами и нашим нежным соусом. Подается с картофелем фри и соком – идеально для маленьких любителей кебаба!',
    description_sl: 'Majhen sendvič z mesom, svežo zelenjavo in našo blago omako. S pomfri in sokom – popolno za male ljubitelje kebaba!',
    description_uk: 'Маленький сендвіч з м\'ясом, свіжими овочами та нашим м\'яким соусом. Подається з картоплею фрі та соком – ідеально для маленьких любителів кебаба!',
    image: sandvic,
    features: ['product.features.traditional'],
    category: 'sandwich',
    rating: 4.6,
    reviews: 156
  },
  {
    title: 'Maxi Dürüm Zestaw',
    title_de: 'Maxi Dürüm Set',
    title_cs: 'Maxi Dürüm Set',
    title_hu: 'Maxi Dürüm Készlet',
    title_pl: 'Maxi Dürüm Zestaw',
    title_ro: 'Set Maxi Dürüm',
    title_ru: 'Макси Дюрюм Набор',
    title_sl: 'Maxi Dürüm Set',
    title_uk: 'Максі Дюрюм Набір',
    price: "€14.99",
    description: 'For the hungry ones! Two signature dürüms, fries, and a drink – a real feast.',
    description_de: 'Für die Hungrigen! Zwei Signature Dürüms, Pommes und ein Getränk – ein echtes Festmahl.',
    description_cs: 'Pro hladové! Dva podpisové dürümy, hranolky a nápoj – opravdová hostina.',
    description_hu: 'Az éhesekért! Két különleges dürüm, sültkrumpli és ital – igazi lakoma.',
    description_pl: 'Dla głodomorów! Dwa popisowe dürümy, frytki i napój – prawdziwa uczta.',
    description_ro: 'Pentru cei flămânzi! Două dürüm-uri semnătură, cartofi prăjiți și o băutură – o adevărată sărbătoare.',
    description_ru: 'Для голодных! Два фирменных дюрюма, картофель фри и напиток – настоящий пир.',
    description_sl: 'Za lačne! Dva podpisni dürüma, pomfri in pijača – prava pojedina.',
    description_uk: 'Для голодних! Два фірмових дюрюма, картопля фрі та напій – справжнє бенкетування.',
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
    switch (language) {
      case 'de': return item.title_de;
      case 'cs': return item.title_cs;
      case 'hu': return item.title_hu;
      case 'pl': return item.title_pl;
      case 'ro': return item.title_ro;
      case 'ru': return item.title_ru;
      case 'sl': return item.title_sl;
      case 'uk': return item.title_uk;
      default: return item.title;
    }
  };

  const getLocalizedDescription = (item: typeof fullMenuItems[0]) => {
    switch (language) {
      case 'de': return item.description_de;
      case 'cs': return item.description_cs;
      case 'hu': return item.description_hu;
      case 'pl': return item.description_pl;
      case 'ro': return item.description_ro;
      case 'ru': return item.description_ru;
      case 'sl': return item.description_sl;
      case 'uk': return item.description_uk;
      default: return item.description;
    }
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