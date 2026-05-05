import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

import SecurityTips from '../components/SecurityTips';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <SEO 
        title="Computer Repair & Laptop Services | C.E. Computer Repair" 
        description="Professional computer repair and laptop services including screen replacement, hard drive repair, and diagnostics. Reliable service you can trust."
      />
      <div id="home"><Hero /></div>
      <div id="about"><AboutSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="why-choose-us"><SecurityTips /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="faq"><FAQSection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
};

export default Home;
