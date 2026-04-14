import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import RehabsPreviewSection from '@/components/sections/RehabsPreviewSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsSection from '@/components/sections/NewsSection';
import ContentSection from '@/components/sections/ContentSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <RehabsPreviewSection />
      <NewsSection />
      <ContentSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
