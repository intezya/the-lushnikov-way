import { ArrowDown, Shield, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Shield, value: '20+', label: 'лет помощи зависимым' },
  { icon: Users, value: '15 000+', label: 'спасённых жизней' },
  { icon: Globe, value: 'ООН', label: 'международное признание' },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Общественный деятель · Эксперт по реабилитации
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-foreground">Никита</span>
          <br />
          <span className="gold-gradient">Лушников</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Президент фонда «Центр Здоровой Молодежи» · Председатель НАС
        </p>

        <blockquote className="text-foreground/70 italic text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          «Каждый человек заслуживает шанс на новую жизнь без зависимости»
        </blockquote>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8"
            onClick={() => navigate('/contacts')}
          >
            Получить консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold text-base px-8"
            onClick={() => navigate('/rehabs')}
          >
            Проверенные центры
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon className="w-6 h-6 text-primary mb-1" />
              <span className="font-display text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo('#discover')}
          className="mt-16 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
