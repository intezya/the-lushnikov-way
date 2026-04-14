import { Globe, Building2, Landmark, Cross, GraduationCap, Trophy } from 'lucide-react';

const categories = [
  {
    icon: Landmark,
    title: 'Федеральные ведомства',
    partners: ['МИД России', 'Минздрав России', 'ФСКН (ранее)', 'Госдума РФ'],
  },
  {
    icon: Globe,
    title: 'Международные организации',
    partners: ['ООН (UNODC)', 'Международная антинаркотическая ассоциация'],
  },
  {
    icon: Building2,
    title: 'Федеральные СМИ',
    partners: ['Первый канал', 'НТВ', 'Россия 1', 'РИА Новости', 'Forbes'],
  },
  {
    icon: Cross,
    title: 'Духовенство',
    partners: ['Русская Православная Церковь', 'Духовные лидеры регионов'],
  },
  {
    icon: GraduationCap,
    title: 'Наука и образование',
    partners: ['Российская наркологическая лига', 'Профильные НИИ'],
  },
  {
    icon: Trophy,
    title: 'Культура и спорт',
    partners: ['Федерация бокса', 'Общественные деятели', 'Артисты и музыканты'],
  },
];

const PartnersSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Партнёры</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Нас <span className="gold-gradient">поддерживают</span>
        </h2>
        <div className="w-20 h-0.5 gold-line mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c, i) => (
          <div key={i} className="section-fade-in p-6 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
            </div>
            <ul className="space-y-2">
              {c.partners.map((p) => (
                <li key={p} className="text-muted-foreground text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
