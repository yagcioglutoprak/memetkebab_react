import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type Language = 'en' | 'pl' | 'ro';

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
    'nav.careers': 'CAREERS',
    'nav.privacyPolicy': 'PRIVACY POLICY',
    'nav.termsOfService': 'TERMS OF SERVICE',
    
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
    'locations.description': 'Find your nearest Memet Kebab restaurant and experience authentic Turkish cuisine.',
    'locations.comingSoon': 'Coming Soon',
    'locations.hours': 'Opening Hours',
    'locations.phone': 'Phone',
    'locations.flagship': 'Flagship Restaurant',
    'locations.dineIn': 'Dine-in & Takeaway Available',
    'locations.capacity': 'Spacious Seating Available',
    'locations.viewMenu': 'View Menu',
    'locations.back': 'Back to Previous Page',
    'locations.expansion': 'Growing Across Europe',
    'locations.expansionText': 'Starting from our roots in Turkey, we have been expanding our presence across Europe to bring authentic Turkish cuisine to more communities. Our commitment to quality and tradition remains unwavering as we grow.',
    'locations.quality': 'Quality First',
    'locations.qualityText': 'Every location maintains our high standards of food quality and service excellence.',
    'locations.tradition': 'Authentic Tradition',
    'locations.traditionText': 'We preserve our traditional recipes and cooking methods across all locations.',
    'locations.community': 'Community Focus',
    'locations.communityText': 'Each location is designed to be a welcoming gathering place for the local community.',
    'locations.franchiseTitle': 'Join the Memet Kebab Family',
    'locations.franchiseDescription': 'Interested in bringing authentic Turkish cuisine to your community? Learn about our franchise opportunities.',
    'locations.franchiseContact': 'Contact Our Franchise Team',
    'locations.franchiseEmail': 'franchise@memetkebab.com',
    'locations.franchisePhone': '+48 123 456 789',
    
    'about.title': 'Our Story',
    'about.text1': 'Since our humble beginnings in Turkey, Memet Kebab has been dedicated to bringing authentic Turkish flavors to food lovers across Europe. Our recipes, passed down through generations, capture the essence of traditional Turkish cuisine.',
    'about.text2': 'Every dish we serve is prepared with carefully selected ingredients and crafted with the same passion and dedication that has defined Turkish culinary excellence for centuries. We take pride in offering you not just a meal, but an authentic Turkish dining experience.',
    'about.history': 'Our History',
    'about.values': 'Our Values',
    'about.commitment': 'Our Commitment',
    'about.values.description': 'Our core values guide everything we do, from preparing our food to serving our customers.',
    'about.values.quality.title': 'Quality First',
    'about.values.quality.description': 'We use only premium halal meats and fresh ingredients, sourced from trusted local suppliers.',
    'about.values.tradition.title': 'Tradition Meets Innovation',
    'about.values.tradition.description': 'We honor traditional recipes while embracing modern techniques to serve you better.',
    'about.values.community.title': 'Community Focus',
    'about.values.community.description': 'We\'re more than a restaurant - we\'re a gathering place for the community to share meals and create memories.',
    'about.values.service.title': 'Passionate Service',
    'about.values.service.description': 'Every customer is treated like family, served with warmth and attention to detail.',
    'about.history.part1': 'Our journey began in the heart of Turkey, where our founder mastered the art of döner making under the guidance of traditional ustalar (masters). Bringing these time-honored techniques to Europe, we opened our first restaurant with a simple mission: to serve authentic Turkish cuisine that reminds people of home.',
    'about.history.part2': 'Today, Memet Kebab stands as a testament to that vision, combining traditional recipes with modern dining experiences. Each dish we serve carries the legacy of Turkish culinary artistry, prepared with the same passion and attention to detail as it was on our very first day.',
    'about.commitment.part1': 'At Memet Kebab, our commitment goes beyond serving delicious food. We\'re dedicated to creating a welcoming environment where every guest can experience the warmth of Turkish hospitality. From our kitchen to your table, we ensure every detail meets our high standards of quality and authenticity.',
    'about.commitment.part2': 'We continuously strive to improve and innovate while staying true to our roots, ensuring that each visit to Memet Kebab is memorable and satisfying.',
    
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
    
    'footer.description': 'Bringing authentic Turkish flavors to your table since 2010. Experience the taste of tradition with Memet Kebab.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.address': '123 Kebab Street',
    'footer.city': 'Istanbul, Turkey',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'info@memetkebab.com',
    
    'nav.careers': 'Careers',
    'nav.privacyPolicy': 'Privacy Policy',
    'nav.termsOfService': 'Terms of Service',
    
    'contact.title': 'Contact Us',
    'contact.call': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',
    'contact.getInTouch': 'Get in Touch',
    'contact.message': 'Send us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    
    'careers.title': 'Join Our Team',
    'careers.subtitle': 'Be part of our growing family',
    'careers.description': 'At Memet Kebab, we\'re always looking for passionate individuals who share our love for authentic Turkish cuisine and exceptional service.',
    'careers.positions': 'Open Positions',
    'careers.benefits': 'Benefits',
    'careers.benefits.health': 'Health Insurance',
    'careers.benefits.vacation': 'Paid Vacation',
    'careers.benefits.training': 'Professional Training',
    'careers.benefits.meals': 'Staff Meals',
    'careers.benefits.growth': 'Career Growth',
    'careers.apply': 'Apply Now',
    'careers.noPositions': 'No open positions at the moment',
    
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last Updated',
    
    'terms.title': 'Terms of Service',
    'terms.lastUpdated': 'Last Updated',
    
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
    'locations.description': 'Znajdź najbliższą restaurację Memet Kebab i doświadcz autentycznej kuchni tureckiej.',
    'locations.comingSoon': 'Wkrótce',
    'locations.hours': 'Godziny Otwarcia',
    'locations.phone': 'Telefon',
    'locations.flagship': 'Flagowa Restauracja',
    'locations.dineIn': 'Dostępna Konsumpcja na Miejscu i na Wynos',
    'locations.capacity': 'Dostępne Przestronne Miejsca',
    'locations.viewMenu': 'Zobacz Menu',
    'locations.back': 'Powrót do Poprzedniej Strony',
    'locations.expansion': 'Rozwijamy się w Europie',
    'locations.expansionText': 'Zaczynając od naszych korzeni w Turcji, rozszerzamy naszą obecność w Europie, aby przynieść autentyczną kuchnię turecką do większej liczby społeczności. Nasze zaangażowanie w jakość i tradycję pozostaje niezmienne w miarę naszego rozwoju.',
    'locations.quality': 'Jakość Przede Wszystkim',
    'locations.qualityText': 'Każda lokalizacja utrzymuje nasze wysokie standardy jakości żywności i doskonałości obsługi.',
    'locations.tradition': 'Autentyczna Tradycja',
    'locations.traditionText': 'Zachowujemy tradycyjne przepisy i metody gotowania we wszystkich lokalizacjach.',
    'locations.community': 'Koncentracja na Społeczności',
    'locations.communityText': 'Każda lokalizacja jest zaprojektowana jako przyjazne miejsce spotkań dla lokalnej społeczności.',
    'locations.franchiseTitle': 'Dołącz do Rodziny Memet Kebab',
    'locations.franchiseDescription': 'Zainteresowany wprowadzeniem autentycznej kuchni tureckiej do swojej społeczności? Dowiedz się o naszych możliwościach franczyzowych.',
    'locations.franchiseContact': 'Skontaktuj się z Naszym Zespołem Franczyzowym',
    'locations.franchiseEmail': 'franchise@memetkebab.com',
    'locations.franchisePhone': '+48 123 456 789',
    
    'about.title': 'Nasza Historia',
    'about.text1': 'Od tętniących życiem ulic Turcji po serce Europy, Memet Kebab przynosi autentyczną kuchnię turecką miłośnikom jedzenia na całym kontynencie. Nasze zaangażowanie w jakość i tradycję uczyniło nas znaną marką w tureckiej kuchni.',
    'about.text2': 'Każdy döner, który serwujemy, jest przygotowywany według tradycyjnych tureckich przepisów, w połączeniu z najlepszymi, najświeższymi składnikami od lokalnych europejskich dostawców.',
    'about.history': 'Nasza Historia',
    'about.values': 'Nasze Wartości',
    'about.commitment': 'Nasze Zobowiązanie',
    'about.values.description': 'Nasze wartości podstawowe kierują wszystkim, co robimy, od przygotowywania naszej żywności po obsługę naszych klientów.',
    'about.values.quality.title': 'Jakość Przede Wszystkim',
    'about.values.quality.description': 'Używamy tylko premium mięsa halal i świeżych składników, pozyskiwanych od zaufanych lokalnych dostawców.',
    'about.values.tradition.title': 'Tradycja Spotyka się z Innowacją',
    'about.values.tradition.description': 'Honorujemy tradycyjne przepisy, jednocześnie przyjmując nowoczesne techniki, aby lepiej służyć.',
    'about.values.community.title': 'Koncentracja na Społeczności',
    'about.values.community.description': 'Jesteśmy więcej niż restauracją - jesteśmy miejscem spotkań dla społeczności, aby dzielić się posiłkami i tworzyć wspomnienia.',
    'about.values.service.title': 'Paszowanie z Pasją',
    'about.values.service.description': 'Każdy klient jest traktowany jak rodzina, obsługiwany z ciepłem i uwagą do szczegółów.',
    'about.history.part1': 'Nasza podróż rozpoczęła się w sercu Turcji, gdzie nasz założyciel opanował sztukę przygotowywania dönera pod kierunkiem tradycyjnych ustalar (mistrzów). Przynosząc te cenione techniki do Europy, otworzyliśmy naszą pierwszą restaurację z prostą misją: aby serwować autentyczną kuchnię turecką, która przypomina ludziom o domu.',
    'about.history.part2': 'Dziś, Memet Kebab stoi jako świadectwo tej wizji, łącząc tradycyjne przepisy z nowoczesnymi doświadczeniami kulinarnej. Każde danie, które serwujemy, niesie dziedzictwo tureckiej sztuki kulinarnej, przygotowane z tą samą pasją i uwagą do szczegółów, jak to było w nasz pierwszy dzień.',
    'about.commitment.part1': 'W Memet Kebab, nasze zobowiązanie wykracza poza serwowanie pysznej żywności. Jesteśmy zaangażowani w tworzenie przyjaznego środowiska, w którym każdy gość może doświadczyć ciepła tureckiej gościnności. Od naszej kuchni do Twojego stołu, zapewniamy, że każdy szczegół spełnia nasze wysokie standardy jakości i autentyczności.',
    'about.commitment.part2': 'Ciągle dążymy do poprawy i innowacji, pozostając wiernymi naszym korzeniom, zapewniając, że każda wizyta w Memet Kebab jest niezapomniana i satysfakcjonująca.',
    
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
    
    'footer.description': 'Dostarczamy autentyczne tureckie smaki na Twój stół od 2010 roku. Doświadcz smaku tradycji z Memet Kebab.',
    'footer.quickLinks': 'Szybkie Linki',
    'footer.contact': 'Kontakt',
    'footer.followUs': 'Obserwuj Nas',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.address': 'ul. Kebabowa 123',
    'footer.city': 'Stambuł, Turcja',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'info@memetkebab.com',
    
    'nav.careers': 'Kariera',
    'nav.privacyPolicy': 'Polityka Prywatności',
    'nav.termsOfService': 'Warunki Użytkowania',
    
    'contact.title': 'Kontakt',
    'contact.call': 'Zadzwoń do Nas',
    'contact.email': 'Napisz do Nas',
    'contact.visit': 'Odwiedź Nas',
    'contact.getInTouch': 'Skontaktuj się',
    'contact.message': 'Wyślij Nam Wiadomość',
    'contact.form.name': 'Twoje Imię',
    'contact.form.email': 'Twój Email',
    'contact.form.message': 'Twoja Wiadomość',
    'contact.form.submit': 'Wyślij Wiadomość',
    
    'careers.title': 'Dołącz do Naszego Zespołu',
    'careers.subtitle': 'Zostań częścią naszej rosnącej rodziny',
    'careers.description': 'W Memet Kebab zawsze szukamy pasjonatów, którzy podzielają naszą miłość do autentycznej kuchni tureckiej i wyjątkowej obsługi.',
    'careers.positions': 'Otwarte Stanowiska',
    'careers.benefits': 'Benefity',
    'careers.benefits.health': 'Ubezpieczenie Zdrowotne',
    'careers.benefits.vacation': 'Płatny Urlop',
    'careers.benefits.training': 'Szkolenia Zawodowe',
    'careers.benefits.meals': 'Posiłki Pracownicze',
    'careers.benefits.growth': 'Rozwój Kariery',
    'careers.apply': 'Aplikuj Teraz',
    'careers.noPositions': 'Brak otwartych stanowisk w tym momencie',
    
    'privacy.title': 'Polityka Prywatności',
    'privacy.lastUpdated': 'Ostatnia Aktualizacja',
    
    'terms.title': 'Warunki Użytkowania',
    'terms.lastUpdated': 'Ostatnia Aktualizacja',
    
    'maintenance.title': 'W Trakcie Konserwacji',
    'maintenance.message': 'Nasza strona internetowa i aplikacja są obecnie aktualizowane, aby lepiej Ci służyć. Wrócimy wkrótce!',
    'maintenance.status': 'W Toku'
  },
  ro: {
    'nav.about': 'DESPRE',
    'nav.menu': 'MENIU',
    'nav.locations': 'LOCAȚII',
    'nav.contact': 'CONTACT',
    'nav.joinUs': 'ALĂTURĂ-TE',
    'nav.orderNow': 'Comandă Acum',
    'nav.careers': 'CARIERE',
    'nav.privacyPolicy': 'Politica de Confidențialitate',
    'nav.termsOfService': 'Termeni și Condiții',
    
    'hero.title': 'Turcesc Autentic',
    'hero.subtitle': 'Experimentează gustul autentic al Istanbulului, aducând aromele turcești autentice din inima Turciei în toată Europa.',
    'hero.orderNow': 'Comandă Acum',
    
    'menu.title': 'Meniul Nostru',
    'menu.subtitle': 'Descoperă selecția noastră de preparate turcești autentice, preparate zilnic folosind rețete tradiționale',
    'menu.specialOffer': 'Ofertă Specială',
    'menu.viewFull': 'Vezi Meniul Complet',
    'menu.viewDetails': 'Vezi Detalii',
    'menu.search': 'Caută în meniu...',
    'menu.filter': 'Filtrează',
    'menu.categories.all': 'Toate',
    'menu.categories.doner': 'Döner',
    'menu.categories.kebab': 'Kebab',
    'menu.categories.pide': 'Pide',
    'menu.categories.lahmacun': 'Lahmacun',
    'menu.categories.vegetarian': 'Vegetarian',
    'menu.categories.desserts': 'Deserturi',
    'menu.categories.drinks': 'Băuturi',
    'menu.reviews': 'recenzii',
    
    'locations.title': 'Locațiile Noastre',
    'locations.description': 'Găsește cel mai apropiat restaurant Memet Kebab și experimentează bucătăria turcească autentică.',
    'locations.comingSoon': 'În Curând',
    'locations.hours': 'Program',
    'locations.phone': 'Telefon',
    'locations.flagship': 'Restaurant Principal',
    'locations.dineIn': 'Servire în Restaurant și La Pachet',
    'locations.capacity': 'Locuri Spațioase Disponibile',
    'locations.viewMenu': 'Vezi Meniul',
    'locations.back': 'Înapoi la Pagina Anterioară',
    'locations.expansion': 'În Expansiune în Europa',
    'locations.expansionText': 'Pornind din Turcia, ne extindem prezența în Europa pentru a aduce bucătăria turcească autentică mai multor comunități.',
    'locations.quality': 'Calitate Înainte de Toate',
    'locations.qualityText': 'Fiecare locație menține standardele noastre înalte de calitate a alimentelor și serviciilor.',
    'locations.tradition': 'Tradiție Autentică',
    'locations.traditionText': 'Păstrăm rețetele și metodele tradiționale de gătit în toate locațiile.',
    'locations.community': 'Focus pe Comunitate',
    'locations.communityText': 'Fiecare locație este concepută pentru a fi un loc primitor pentru comunitatea locală.',
    'locations.franchiseTitle': 'Alătură-te Familiei Memet Kebab',
    'locations.franchiseDescription': 'Ești interesat să aduci bucătăria turcească autentică în comunitatea ta? Află despre oportunitățile noastre de franciză.',
    'locations.franchiseContact': 'Contactează Echipa de Franciză',
    'locations.franchiseEmail': 'franchise@memetkebab.com',
    'locations.franchisePhone': '+48 123 456 789',
    
    'about.title': 'Povestea Noastră',
    'about.text1': 'De la începuturile noastre modeste în Turcia, Memet Kebab s-a dedicat aducerii aromelor turcești autentice iubitorilor de mâncare din Europa.',
    'about.text2': 'Fiecare fel de mâncare este preparat cu ingrediente atent selecționate și realizat cu aceeași pasiune care definește excelența culinară turcească.',
    'about.history': 'Istoria Noastră',
    'about.values': 'Valorile Noastre',
    'about.commitment': 'Angajamentul Nostru',
    'about.values.description': 'Valorile noastre fundamentale ne ghidează în tot ceea ce facem.',
    'about.values.quality.title': 'Calitate Înainte de Toate',
    'about.values.quality.description': 'Folosim doar carne halal premium și ingrediente proaspete.',
    'about.values.tradition.title': 'Tradiție și Inovație',
    'about.values.tradition.description': 'Onorăm rețetele tradiționale adoptând tehnici moderne.',
    'about.values.community.title': 'Focus pe Comunitate',
    'about.values.community.description': 'Suntem mai mult decât un restaurant - suntem un loc de întâlnire pentru comunitate.',
    'about.values.service.title': 'Servicii cu Pasiune',
    'about.values.service.description': 'Fiecare client este tratat ca familia, servit cu căldură și atenție.',
    
    'features.quality': 'Calitate Premium',
    'features.qualityDesc': 'Carne 100% halal, legume proaspete și sosuri făcute în casă',
    'features.service': 'Serviciu Rapid',
    'features.serviceDesc': 'Preparare rapidă fără compromisuri la calitate',
    'features.community': 'Comunitatea Primul',
    'features.communityDesc': 'Servim cu mândrie comunitățile locale',
    
    'app.title': 'Descarcă Aplicația Memet Kebab',
    'app.subtitle': 'Comandă în avans, câștigă recompense și primește oferte exclusive!',
    'app.scan': 'Scanează pentru descărcare',
    'app.available': 'Disponibil pe iOS și Android',
    
    'contact.title': 'Contactează-ne',
    'contact.call': 'Sună-ne',
    'contact.email': 'Trimite-ne un Email',
    'contact.visit': 'Vizitează-ne',
    'contact.getInTouch': 'Ia Legătura cu Noi',
    'contact.message': 'Trimite-ne un Mesaj',
    'contact.form.name': 'Numele Tău',
    'contact.form.email': 'Email-ul Tău',
    'contact.form.message': 'Mesajul Tău',
    'contact.form.submit': 'Trimite Mesaj',
    
    'careers.title': 'Alătură-te Echipei',
    'careers.subtitle': 'Fii parte din familia noastră în creștere',
    'careers.description': 'La Memet Kebab, căutăm mereu persoane pasionate care împărtășesc dragostea noastră pentru bucătăria turcească autentică.',
    'careers.positions': 'Poziții Deschise',
    'careers.benefits': 'Beneficii',
    'careers.benefits.health': 'Asigurare de Sănătate',
    'careers.benefits.vacation': 'Concediu Plătit',
    'careers.benefits.training': 'Training Profesional',
    'careers.benefits.meals': 'Mese pentru Personal',
    'careers.benefits.growth': 'Dezvoltare în Carieră',
    'careers.apply': 'Aplică Acum',
    'careers.noPositions': 'Nu există poziții deschise momentan',
    
    'privacy.title': 'Politica de Confidențialitate',
    'privacy.lastUpdated': 'Ultima Actualizare',
    
    'terms.title': 'Termeni și Condiții',
    'terms.lastUpdated': 'Ultima Actualizare',
    
    'maintenance.title': 'În Mentenanță',
    'maintenance.message': 'Website-ul și aplicația noastră sunt în curs de actualizare pentru a vă servi mai bine. Revenim în curând!',
    'maintenance.status': 'În Desfășurare',
    
    'footer.description': 'Bucătărie turcească autentică, servită cu pasiune și tradiție. Vino să descoperi gusturile Istanbulului la Memet Kebab.',
    'footer.quickLinks': 'Link-uri Rapide',
    'footer.contact': 'Contact',
    'footer.followUs': 'Urmărește-ne',
    'footer.address': 'Str. Exemplu nr. 123',
    'footer.city': 'București, România',
    'footer.phone': '+40 123 456 789',
    'footer.email': 'contact@memetkebab.ro',
    'footer.rights': 'Toate drepturile rezervate.',
    
    'products.mixedGrill.title': 'Platou Mixt la Grătar',
    'products.mixedGrill.description': 'O selecție bogată de carne la grătar, inclusiv kebab, köfte și pui marinat.',
    
    'careers.form.title': 'Formular de Aplicare',
    'careers.form.fullName': 'Nume și Prenume',
    'careers.form.fullNamePlaceholder': 'Ion Popescu',
    'careers.form.email': 'Adresa de Email',
    'careers.form.emailPlaceholder': 'ion@exemplu.ro',
    'careers.form.phone': 'Număr de Telefon',
    'careers.form.phonePlaceholder': '+40 700 000 000',
    'careers.form.position': 'Poziția Dorită',
    'careers.form.selectPosition': 'Selectează Poziția',
    'careers.form.experience': 'Experiență',
    'careers.form.experiencePlaceholder': '3 ani',
    'careers.form.message': 'Mesajul Tău',
    'careers.form.messagePlaceholder': 'Spune-ne de ce dorești să te alături echipei noastre...',
    'careers.form.submit': 'Trimite Aplicația'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Get initial language from cookie or default to 'pl'
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = Cookies.get('preferredLanguage') as Language;
    return savedLanguage || 'pl';
  });

  // Update cookie when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('preferredLanguage', lang, { expires: 365 }); // Cookie expires in 1 year
  };

  // Function to get translation
  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  // Set initial language based on browser preference if no cookie exists
  useEffect(() => {
    if (!Cookies.get('preferredLanguage')) {
      const browserLang = navigator.language.split('-')[0];
      const supportedLangs: Language[] = ['en', 'pl', 'ro'];
      const defaultLang = supportedLangs.includes(browserLang as Language) 
        ? browserLang as Language 
        : 'pl';
      setLanguage(defaultLang);
    }
  }, []);

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