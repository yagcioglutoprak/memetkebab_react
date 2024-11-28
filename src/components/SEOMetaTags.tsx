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
  const { t } = useLanguage();
  
  const defaultTitle = 'Memet Kebab - Authentic Turkish Cuisine';
  const defaultDescription = 'Experience authentic Turkish kebabs, grills, and traditional dishes at Memet Kebab. Fresh ingredients, family recipes, and a warm atmosphere await you.';
  
  const metaTags = {
    '/': {
      title: defaultTitle,
      description: defaultDescription,
    },
    '/menu': {
      title: `${t('menu.title')} | Memet Kebab`,
      description: t('menu.description'),
    },
    '/locations': {
      title: `${t('locations.title')} | Memet Kebab`,
      description: t('locations.description'),
    },
    '/about': {
      title: `${t('about.title')} | Memet Kebab`,
      description: t('about.description'),
    },
    '/careers': {
      title: `${t('careers.title')} | Memet Kebab`,
      description: t('careers.description'),
    },
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const currentMeta = metaTags[currentPath as keyof typeof metaTags] || {
      title: defaultTitle,
      description: defaultDescription,
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
  }, [location, title, description, image, type, t]);

  return null;
};

export default SEOMetaTags;
