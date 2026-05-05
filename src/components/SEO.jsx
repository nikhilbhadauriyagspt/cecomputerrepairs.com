import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonical, ogType = 'website' }) => {
  const siteTitle = 'C.E. Computer Repair';
  const baseUrl = 'https://cecomputerrepairs.com';
  const location = useLocation();
  
  // Standardized Title
  const fullTitle = title.includes('C.E. Computer Repair') 
    ? title 
    : `${title} | ${siteTitle}`;
    
  const defaultDescription = 'Professional computer repair and laptop services including screen replacement, hard drive repair, and diagnostics. Reliable service you can trust.';
  const defaultImage = `${baseUrl}/favicon.avif`;
  const currentUrl = `${baseUrl}${location.pathname}${location.search}`;
  const seoCanonical = canonical || currentUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="C.E. Computer Repair" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  );
};

export default SEO;
