import { ArrowDown, Shield, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assetPath';

const stats = [
  { icon: Shield, value: 'с 2004', label: 'помогает зависимым возвращаться к трезвой жизни' },
  { icon: Users, value: 'НАС', label: 'экспертный совет и межрегиональная координация программ' },
  { icon: Globe, value: 'ООН', label: 'международное представительство российских практик' },
];

const officialPortraitSrc = getAssetPath('/nikita-lushnikov-official.png', import.meta.env.BASE_URL);

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-[-10%] top-24 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[160px]" />

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <div className="grid animate-soft-fade-up items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium tracking-[0.28em] uppercase text-sm mb-6">
              Общественный деятель · Профессиональная помощь зависимым
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-4">
              <span className="text-foreground">Никита</span>
              <br />
              <span className="gold-gradient">Лушников</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 mb-4">
              Председатель экспертного совета Национального антинаркотического союза · представитель программ
              профилактики и социальной реабилитации России в ООН и других международных организациях
            </p>

            <blockquote className="text-foreground/70 italic text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-8">
              «Счастлив по-настоящему тот, кто делает счастливыми других. Любую зависимость можно остановить, и я знаю,
              как это сделать».
            </blockquote>

            <div className="grid gap-3 mb-10">
              <div className="inline-flex items-start gap-3 rounded-2xl border border-primary/15 bg-card/65 px-5 py-4 text-left">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground/85">
                  Более двух десятилетий практической работы с людьми, прошедшими путь от зависимости к устойчивой
                  трезвой жизни.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
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
                Центры помощи
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/80 bg-card/70 p-5 text-left transition-colors duration-500 hover:border-primary/20 hover:bg-card/80">
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#rehabs')}
              className="mt-14 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-card/60 text-muted-foreground transition-all duration-500 hover:border-primary/30 hover:bg-primary/8 hover:text-primary animate-soft-float"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>

          <div>
            <div className="relative mx-auto max-w-[480px]">
              <div className="absolute inset-6 rounded-[36px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-gradient-to-b from-card to-card/60 px-6 pt-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary/90">
                  Официальный портрет
                </div>
                <img
                  src={officialPortraitSrc}
                  alt="Официальный портрет Никиты Лушникова"
                  className="mx-auto h-auto w-full max-w-[420px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
