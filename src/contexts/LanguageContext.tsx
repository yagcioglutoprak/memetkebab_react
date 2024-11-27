import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'ABOUT',
    'nav.menu': 'MENU',
    'nav.locations': 'LOCATIONS',
    'nav.contact': 'CONTACT',
    'nav.joinUs': 'JOIN US',
    'nav.orderNow': 'Order Now',
    
    'hero.title': 'Authentic Turkish',
    'hero.subtitle': 'Experience the true taste of Istanbul, bringing authentic Turkish flavors from the heart of Turkey to all across Europe.',
    'hero.orderNow': 'Order Now',
    
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Discover our selection of authentic Turkish dishes, prepared fresh daily using traditional recipes',
    'menu.specialOffer': 'Special Offer',
    'menu.viewFull': 'View Full Menu',
    'menu.viewDetails': 'View Details',
    'menu.search': 'Search menu...',
    'menu.filter': 'Filter',
    'menu.categories.all': 'All',
    'menu.categories.doner': 'Döner',
    'menu.categories.kebab': 'Kebab',
    'menu.categories.pide': 'Pide',
    'menu.categories.lahmacun': 'Lahmacun',
    'menu.categories.vegetarian': 'Vegetarian',
    'menu.categories.desserts': 'Desserts',
    'menu.categories.drinks': 'Drinks',
    'menu.reviews': 'reviews',
    
    'locations.title': 'Our Locations',
    'locations.subtitle': 'Find your nearest Memet Kebab restaurant and experience authentic Turkish cuisine.',
    'locations.comingSoon': 'Coming Soon',
    'locations.hours': 'Opening Hours',
    'locations.phone': 'Phone',
    'locations.expansion': 'Growing Across Europe',
    'locations.expansionText': 'Starting from our roots in Turkey, we have been expanding our presence across Europe to bring authentic Turkish cuisine to more communities. Our commitment to quality and tradition remains unwavering as we grow.',
    'locations.quality': 'Quality First',
    'locations.qualityText': 'Every location maintains our high standards of food quality and service excellence.',
    'locations.tradition': 'Authentic Tradition',
    'locations.traditionText': 'We preserve our traditional recipes and cooking methods across all locations.',
    'locations.community': 'Community Focus',
    'locations.communityText': 'Each restaurant is deeply integrated into its local community, supporting local initiatives and events.',
    'locations.franchiseTitle': 'Join Our Success Story',
    'locations.franchiseDescription': 'Interested in becoming part of the Memet Kebab family? We\'re expanding across Europe and looking for passionate entrepreneurs to join our franchise network.',
    'locations.franchiseContact': 'Contact Us for Franchise Opportunities',
    'locations.franchiseEmail': 'franchise@memetkebab.com',
    'locations.franchisePhone': '+48 123 456 789',
    
    'about.title': 'Our Story',
    'about.text1': 'From the vibrant streets of Turkey to the heart of Europe, Memet Kebab brings authentic Turkish cuisine to food lovers across the continent. Our commitment to quality and tradition has made us a beloved name in Turkish cuisine.',
    'about.text2': 'Every döner we serve is prepared using time-honored recipes from Turkey, combined with the finest, freshest ingredients sourced from local European suppliers.',
    
    'features.quality': 'Premium Quality',
    'features.qualityDesc': '100% halal meat, fresh vegetables, and homemade sauces',
    'features.service': 'Fast Service',
    'features.serviceDesc': 'Quick preparation without compromising quality',
    'features.community': 'Community First',
    'features.communityDesc': 'Proudly serving our local communities',
    
    'app.title': 'Get the Memet Kebab App',
    'app.subtitle': 'Order ahead, earn rewards, and get exclusive offers!',
    'app.scan': 'Scan to download',
    'app.available': 'Available on iOS and Android',
    
    'contact.title': 'Get in Touch',
    'contact.call': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',
    
    'careers.title': 'Join Our Team',
    'careers.description': "We're always looking for passionate people to join our growing family. Experience the joy of serving authentic Turkish cuisine while building your career.",
    'careers.button': 'View Open Positions',
    'careers.form.title': 'Join Our Team',
    'careers.form.fullName': 'Full Name',
    'careers.form.email': 'Email Address',
    'careers.form.phone': 'Phone Number',
    'careers.form.position': 'Position',
    'careers.form.experience': 'Years of Experience',
    'careers.form.message': 'Why do you want to join our team?',
    'careers.form.submit': 'Submit Application',
    'careers.form.resume': 'Resume',
    'careers.positions.chef': 'Senior Chef',
    'careers.positions.kitchen': 'Kitchen Staff',
    'careers.positions.manager': 'Restaurant Manager',
    'careers.positions.server': 'Server',
    'careers.positions.driver': 'Delivery Driver',
    'careers.training.title': 'Training & Development',
    'careers.training.description': 'Continuous learning opportunities and career growth paths',
    'careers.benefits.title': 'Great Benefits',
    'careers.benefits.description': 'Competitive salary, health insurance, and meal allowance',
    'careers.team.title': 'Amazing Team',
    'careers.team.description': 'Join a passionate and supportive work family',
    
    'product.features.fresh': '100% Fresh Ingredients',
    'product.features.halal': 'Halal Certified',
    'product.features.made': 'Made to Order',
    'product.features.chef': 'Chef Recommended',
    'product.features.traditional': 'Traditional Recipe',
    'product.orderNow': 'Order Now',
    'product.addFavorites': 'Add to Favorites',
    
    'products.classicDoner.title': 'Classic Döner',
    'products.classicDoner.description': 'Traditional Turkish döner with fresh vegetables and special sauce',
    'products.mixedGrill.title': 'Mixed Grill Plate',
    'products.mixedGrill.description': 'Combination of döner, adana kebab, and chicken şiş',
    'products.falafel.title': 'Vegetarian Falafel',
    'products.falafel.description': 'Homemade falafel with hummus and fresh salad',
    'products.iskender.title': 'Iskender Kebab',
    'products.iskender.description': 'Sliced döner on pide bread with yogurt and tomato sauce',
    'products.adanaKebab.title': 'Adana Kebab',
    'products.adanaKebab.description': 'Spicy minced lamb kebab served with bulgur pilaf and grilled vegetables',
    'products.cheesePide.title': 'Cheese Pide',
    'products.cheesePide.description': 'Traditional Turkish pizza with mixed cheeses and herbs',
    
    'promos.familyFeast.title': 'Family Feast',
    'promos.familyFeast.description': 'Perfect for 4: Mixed grill platter, salads, rice, and drinks',
    'promos.studentSpecial.title': 'Student Special',
    'promos.studentSpecial.description': 'Show your student ID for 15% off any meal',
    'promo.firstOrder.discount': '15% OFF',
    'promo.firstOrder.text': 'On your first order',
    
    'stats.rating': '4.9 ★ Rating',
    'stats.downloads': '100K+ Downloads',
    'stats.install': 'Free Install',
    'stats.platform': 'Mobile app',
    
    'footer.rights': ' 2024 Memet Kebab. All rights reserved.',
    
    'maintenance.title': 'Under Maintenance',
    'maintenance.message': 'Our website and app are currently being updated to serve you better. We\'ll be back soon!',
    'maintenance.status': 'In Progress'
  },
  pl: {
    'nav.about': 'O NAS',
    'nav.menu': 'MENU',
    'nav.locations': 'LOKALIZACJE',
    'nav.contact': 'KONTAKT',
    'nav.joinUs': 'DOŁĄCZ',
    'nav.orderNow': 'Zamów Teraz',
    
    'hero.title': 'Autentyczny Turecki',
    'hero.subtitle': 'Doświadcz prawdziwego smaku Stambułu, przynosząc autentyczne tureckie smaki z serca Turcji do całej Europy.',
    'hero.orderNow': 'Zamów Teraz',
    
    'menu.title': 'Nasze Menu',
    'menu.subtitle': 'Odkryj nasz wybór autentycznych tureckich dań, przygotowywanych codziennie według tradycyjnych przepisów',
    'menu.specialOffer': 'Promocja',
    'menu.viewFull': 'Zobacz Pełne Menu',
    'menu.viewDetails': 'Zobacz Szczegóły',
    'menu.search': 'Szukaj w menu...',
    'menu.filter': 'Filtruj',
    'menu.categories.all': 'Wszystkie',
    'menu.categories.doner': 'Döner',
    'menu.categories.kebab': 'Kebab',
    'menu.categories.pide': 'Pide',
    'menu.categories.lahmacun': 'Lahmacun',
    'menu.categories.vegetarian': 'Wegetariańskie',
    'menu.categories.desserts': 'Desery',
    'menu.categories.drinks': 'Napoje',
    'menu.reviews': 'opinii',
    
    'locations.title': 'Nasze Lokalizacje',
    'locations.subtitle': 'Znajdź najbliższy restaurację Memet Kebab i doświadcz autentycznej kuchni tureckiej.',
    'locations.comingSoon': 'Wkrótce',
    'locations.hours': 'Godziny Otwarcia',
    'locations.phone': 'Telefon',
    'locations.expansion': 'Rozwój w Europie',
    'locations.expansionText': 'Rozpoczynając od naszych korzeni w Turcji, rozszerzamy naszą obecność w całej Europie, aby dostarczać autentyczną kuchnię turecką większej liczbie społeczności. Nasze zaangażowanie w jakość i tradycję pozostaje niezmienne w miarę naszego rozwoju.',
    'locations.quality': 'Jakość Przede Wszystkim',
    'locations.qualityText': 'Każda lokalizacja utrzymuje nasze wysokie standardy jakości żywności i doskonałości obsługi.',
    'locations.tradition': 'Autentyczna Tradycja',
    'locations.traditionText': 'Zachowujemy nasze tradycyjne przepisy i metody gotowania we wszystkich lokalizacjach.',
    'locations.community': 'Koncentracja na Społeczności',
    'locations.communityText': 'Każda restauracja jest głęboko zintegrowana ze swoją lokalną społecznością, wspierając lokalne inicjatywy i wydarzenia.',
    'locations.franchiseTitle': 'Dołącz do Naszej Historii Sukcesu',
    'locations.franchiseDescription': 'Zainteresowany zostaniem częścią rodziny Memet Kebab? Rozwijamy się w całej Europie i szukamy pasjonatów do naszej sieci franczyzowej.',
    'locations.franchiseContact': 'Skontaktuj się w Sprawie Franczyzy',
    'locations.franchiseEmail': 'franchise@memetkebab.com',
    'locations.franchisePhone': '+48 123 456 789',
    
    'about.title': 'Nasza Historia',
    'about.text1': 'Od tętniących życiem ulic Turcji po serce Europy, Memet Kebab przynosi autentyczną kuchnię turecką miłośnikom jedzenia na całym kontynencie. Nasze zaangażowanie w jakość i tradycję uczyniło nas znaną marką w tureckiej kuchni.',
    'about.text2': 'Każdy döner, który serwujemy, jest przygotowywany według tradycyjnych tureckich przepisów, w połączeniu z najlepszymi, najświeższymi składnikami od lokalnych europejskich dostawców.',
    
    'features.quality': 'Najwyższa Jakość',
    'features.qualityDesc': '100% halal mięso, świeże warzywa i domowe sosy',
    'features.service': 'Szybka Obsługa',
    'features.serviceDesc': 'Szybkie przygotowanie bez kompromisów w jakości',
    'features.community': 'Społeczność',
    'features.communityDesc': 'Z dumą służymy naszym lokalnym społecznościom',
    
    'app.title': 'Pobierz Aplikację Memet Kebab',
    'app.subtitle': 'Zamawiaj z wyprzedzeniem, zbieraj nagrody i korzystaj z ekskluzywnych ofert!',
    'app.scan': 'Zeskanuj aby pobrać',
    'app.available': 'Dostępne na iOS i Android',
    
    'contact.title': 'Skontaktuj się',
    'contact.call': 'Zadzwoń',
    'contact.email': 'Email',
    'contact.visit': 'Odwiedź nas',
    
    'careers.title': 'Dołącz do Nas',
    'careers.description': 'Zawsze szukamy pasjonatów do naszej rosnącej rodziny. Doświadcz radości serwowania autentycznej tureckiej kuchni, budując swoją karierę.',
    'careers.button': 'Zobacz Oferty Pracy',
    'careers.form.title': 'Dołącz do Naszego Zespołu',
    'careers.form.fullName': 'Imię i Nazwisko',
    'careers.form.email': 'Adres Email',
    'careers.form.phone': 'Numer Telefonu',
    'careers.form.position': 'Stanowisko',
    'careers.form.experience': 'Lata Doświadczenia',
    'careers.form.message': 'Dlaczego chcesz dołączyć do naszego zespołu?',
    'careers.form.submit': 'Wyślij Aplikację',
    'careers.form.resume': 'CV',
    'careers.positions.chef': 'Starszy Kucharz',
    'careers.positions.kitchen': 'Personel Kuchni',
    'careers.positions.manager': 'Kierownik Restauracji',
    'careers.positions.server': 'Kelner',
    'careers.positions.driver': 'Kierowca Dostawczy',
    'careers.training.title': 'Szkolenia i Rozwój',
    'careers.training.description': 'Możliwości ciągłego uczenia się i ścieżki rozwoju kariery',
    'careers.benefits.title': 'Świetne Benefity',
    'careers.benefits.description': 'Konkurencyjne wynagrodzenie, ubezpieczenie zdrowotne i dodatek na posiłki',
    'careers.team.title': 'Wspaniały Zespół',
    'careers.team.description': 'Dołącz do pełnej pasji i wspierającej rodziny pracowników',
    
    'product.features.fresh': '100% Świeże Składniki',
    'product.features.halal': 'Certyfikat Halal',
    'product.features.made': 'Przygotowywane na Zamówienie',
    'product.features.chef': 'Polecane przez Szefa Kuchni',
    'product.features.traditional': 'Tradycyjna Receptura',
    'product.orderNow': 'Zamów Teraz',
    'product.addFavorites': 'Dodaj do Ulubionych',
    
    'products.classicDoner.title': 'Klasyczny Döner',
    'products.classicDoner.description': 'Tradycyjny turecki döner ze świeżymi warzywami i specjalnym sosem',
    'products.mixedGrill.title': 'Talerz Mix Grill',
    'products.mixedGrill.description': 'Kompozycja dönera, kebaba adana i şişa z kurczaka',
    'products.falafel.title': 'Falafel Wegetariański',
    'products.falafel.description': 'Domowy falafel z hummusem i świeżą sałatką',
    'products.iskender.title': 'Kebab Iskender',
    'products.iskender.description': 'Krojony döner na chlebie pide z jogurtem i sosem pomidorowym',
    'products.adanaKebab.title': 'Kebab Adana',
    'products.adanaKebab.description': 'Pikantny kebab z mielonej jagnięciny podawany z piławem z kaszy bulgur i grillowanymi warzywami',
    'products.cheesePide.title': 'Pide z Serem',
    'products.cheesePide.description': 'Tradycyjna turecka pizza z mieszanką serów i ziołami',
    
    'promos.familyFeast.title': 'Uczta Rodzinna',
    'promos.familyFeast.description': 'Idealne dla 4 osób: Talerz mix grill, sałatki, ryż i napoje',
    'promos.studentSpecial.title': 'Promocja Studencka',
    'promos.studentSpecial.description': 'Pokaż legitymację studencką i otrzymaj 15% zniżki',
    'promo.firstOrder.discount': '15% ZNIŻKI',
    'promo.firstOrder.text': 'Na pierwsze zamówienie',
    
    'stats.rating': 'Ocena 4.9 ★',
    'stats.downloads': '100K+ Pobrań',
    'stats.install': 'Darmowa Instalacja',
    'stats.platform': 'Aplikacja mobilna',
    
    'footer.rights': ' 2024 Memet Kebab. Wszelkie prawa zastrzeżone.',
    
    'maintenance.title': 'W Trakcie Konserwacji',
    'maintenance.message': 'Nasza strona internetowa i aplikacja są obecnie aktualizowane, aby lepiej Ci służyć. Wrócimy wkrótce!',
    'maintenance.status': 'W Toku'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}