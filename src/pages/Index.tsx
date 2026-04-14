import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HeroSection from '@/components/sections/HeroSection';
import BlessingLetterSection from '@/components/sections/BlessingLetterSection';
import RespectedOpinionsSection from '@/components/sections/RespectedOpinionsSection';
import RehabsPreviewSection from '@/components/sections/RehabsPreviewSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const animationRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main ref={animationRef}>
        <HeroSection />
        <BlessingLetterSection />
        <RespectedOpinionsSection />
        <RehabsPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
