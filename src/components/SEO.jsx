import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical, ogType = 'website' }) => {
  const siteTitle = 'C.E. Computer Repair';
  const baseUrl = 'https://cecomputerrepairs.com';
  const location = useLocation();
  
  // Standardized Title
  const fullTitle = title.includes('C.E. Computer Repair') 
    ? title 
    : `${title} | ${siteTitle}`;
    
  const defaultDescription = 'Professional computer repair and laptop services including screen replacement, hard drive repair, and diagnostics. Reliable service you can trust.';
  const defaultKeywords = 'computer repair, laptop repair, screen replacement, hard drive repair, motherboard repair, diagnostics, Seattle, PC repair';
  const defaultImage = `${baseUrl}/favicon.png`;
  const currentUrl = `${baseUrl}${location.pathname}${location.search}`;
  const seoCanonical = canonical || currentUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="C.E. Computer Repair" />
      <link rel="canonical" href={seoCanonical} />
      
      {/* Icons */}
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="C.E. Computer Repair" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content="C.E. Computer Repair Logo" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:image:alt" content="C.E. Computer Repair Logo" />
    </Helmet>
  );
};

export default SEO;
