import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredRehabs = [
  {
    name: 'ЦЗМ Москва',
    city: 'Москва',
    description: 'Флагманский центр реабилитации с полным циклом программ восстановления. Индивидуальный подход и комплексная терапия.',
    types: ['Наркозависимость', 'Алкозависимость'],
    verified: true,
  },
  {
    name: 'ЦЗМ Санкт-Петербург',
    city: 'Санкт-Петербург',
    description: 'Современный реабилитационный центр с квалифицированными специалистами и проверенными методиками drug-free программ.',
    types: ['Наркозависимость', 'Алкозависимость', 'Игромания'],
    verified: true,
  },
  {
    name: 'ЦЗМ Краснодар',
    city: 'Краснодар',
    description: 'Центр ресоциализации и реабилитации в тёплом климате. Спортивно-терапевтические программы и трудотерапия.',
    types: ['Наркозависимость', 'Ресоциализация'],
    verified: true,
  },
  {
    name: 'ЦЗМ Екатеринбург',
    city: 'Екатеринбург',
    description: 'Реабилитационный центр на Урале с многолетним опытом работы и высоким процентом успешной реабилитации.',
    types: ['Наркозависимость', 'Алкозависимость'],
    verified: true,
  },
];

const RehabsPreviewSection = () => (
  <section id="rehabs" className="py-24">
    <div className="container mx-auto px-4">
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Проверенные центры</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Лучшие <span className="gold-gradient">рехабы</span> России
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Реабилитационные центры, прошедшие проверку и сертификацию Национального антинаркотического союза
        </p>
        <div className="w-20 h-0.5 gold-line mx-auto mt-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {featuredRehabs.map((r, i) => (
          <div
            key={i}
            className="section-fade-in group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{r.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  {r.city}
                </div>
              </div>
              {r.verified && (
                <div className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Проверен НАС
                </div>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.description}</p>
            <div className="flex flex-wrap gap-2">
              {r.types.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="section-fade-in text-center">
        <Link to="/rehabs">
          <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold gap-2">
            Смотреть все центры <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default RehabsPreviewSection;
