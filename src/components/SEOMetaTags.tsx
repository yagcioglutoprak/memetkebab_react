import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEOMetaTags: React.FC<MetaTagsProps> = ({
  title = '',
  description = '',
  image = 'https://memetkebab.pl/theme/memet-kebab-white-bcg-rgb.png',
  type = 'website'
}) => {
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  
  const defaultMetaTags = {
    pl: {
      title: 'Memet Kebab - Autentyczna Kuchnia Turecka w Twojej Okolicy',
      description: 'Odkryj prawdziwe smaki Turcji w Memet Kebab. Świeże składniki, tradycyjne przepisy i wyjątkowa atmosfera. Zamów online lub odwiedź nas już dziś!'
    },
    en: {
      title: 'Memet Kebab - Authentic Turkish Cuisine in Your Neighborhood',
      description: 'Experience authentic Turkish kebabs, grills, and traditional dishes at Memet Kebab. Fresh ingredients, family recipes, and a warm atmosphere await you.'
    }
  };
  
  const metaTags = {
    '/': {
      pl: {
        title: defaultMetaTags.pl.title,
        description: defaultMetaTags.pl.description,
      },
      en: {
        title: defaultMetaTags.en.title,
        description: defaultMetaTags.en.description,
      }
    },
    '/menu': {
      pl: {
        title: 'Menu | Memet Kebab',
        description: 'Sprawdź nasze menu pełne autentycznych tureckich smaków. Kebaby, grillowane mięsa, dania wegetariańskie i więcej.',
      },
      en: {
        title: 'Menu | Memet Kebab',
        description: 'Check our menu full of authentic Turkish flavors. Kebabs, grilled meats, vegetarian dishes, and more.',
      }
    },
    '/locations': {
      pl: {
        title: 'Lokalizacje | Memet Kebab',
        description: 'Znajdź najbliższą restaurację Memet Kebab. Odwiedź nas i poznaj prawdziwe smaki tureckiej kuchni.',
      },
      en: {
        title: 'Locations | Memet Kebab',
        description: 'Find your nearest Memet Kebab restaurant. Visit us and experience authentic Turkish cuisine.',
      }
    },
    '/about': {
      pl: {
        title: 'O Nas | Memet Kebab',
        description: 'Poznaj historię Memet Kebab. Dowiedz się więcej o naszej pasji do autentycznej kuchni tureckiej i tradycyjnych przepisów.',
      },
      en: {
        title: 'About Us | Memet Kebab',
        description: 'Learn about Memet Kebab\'s story. Discover our passion for authentic Turkish cuisine and traditional recipes.',
      }
    },
    '/careers': {
      pl: {
        title: 'Kariera | Memet Kebab',
        description: 'Dołącz do zespołu Memet Kebab. Sprawdź aktualne oferty pracy i rozwijaj się razem z nami.',
      },
      en: {
        title: 'Careers | Memet Kebab',
        description: 'Join the Memet Kebab team. Check our current job openings and grow with us.',
      }
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const lang = currentLanguage as keyof typeof defaultMetaTags;
    const currentMeta = metaTags[currentPath as keyof typeof metaTags]?.[lang] || {
      title: defaultMetaTags[lang].title,
      description: defaultMetaTags[lang].description,
    };

    // Update meta tags
    document.title = title || currentMeta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || currentMeta.description);
    }

    // Update OpenGraph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    if (ogTitle) ogTitle.setAttribute('content', title || currentMeta.title);
    if (ogDescription) ogDescription.setAttribute('content', description || currentMeta.description);
    if (ogUrl) ogUrl.setAttribute('content', `https://memetkebab.pl${currentPath}`);
    if (ogImage) ogImage.setAttribute('content', image);
    if (ogType) ogType.setAttribute('content', type);

    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterImage = document.querySelector('meta[property="twitter:image"]');

    if (twitterTitle) twitterTitle.setAttribute('content', title || currentMeta.title);
    if (twitterDescription) twitterDescription.setAttribute('content', description || currentMeta.description);
    if (twitterImage) twitterImage.setAttribute('content', image);
  }, [location, title, description, image, type, currentLanguage]);

  return null;
};

export default SEOMetaTags;
