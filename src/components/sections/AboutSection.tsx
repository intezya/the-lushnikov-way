import { Award, Building2, Globe2, Landmark } from 'lucide-react';

const timeline = [
  { year: '2005', text: 'Начало деятельности в сфере реабилитации зависимых', icon: Building2 },
  { year: '2009', text: 'Президент фонда «Центр Здоровой Молодежи»', icon: Building2 },
  { year: '2011', text: 'Государственная награда от Президента РФ Д. А. Медведева', icon: Award },
  { year: '2013', text: 'Ответственный секретарь межфракционной группы при Госдуме', icon: Landmark },
  { year: '2024', text: 'Представитель российских программ реабилитации в ООН', icon: Globe2 },
];

const badges = [
  'Член правления Российской наркологической лиги',
  'Представитель в ООН по вопросам наркотиков',
  'Государственная награда РФ',
  'Эксперт федеральных СМИ',
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Биография</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          О <span className="gold-gradient">Никите Лушникове</span>
        </h2>
        <div className="w-20 h-0.5 gold-line mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio text */}
        <div className="section-fade-in space-y-6">
          <p className="text-foreground/90 text-lg leading-relaxed">
            <span className="text-primary font-semibold">Никита Вячеславович Лушников</span> (род. 1982, Белгород) — 
            российский общественный деятель, один из ключевых фигур антинаркотического движения в России.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Пройдя через личный опыт борьбы с зависимостью, Никита посвятил свою жизнь помощи другим. 
            С 2005 года он активно занимается реабилитацией и ресоциализацией нарко‑ и алкозависимых, 
            создав одну из крупнейших сетей реабилитационных центров в стране.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Основатель и президент благотворительного фонда «Центр Здоровой Молодежи» (ЦЗМ), 
            председатель правления «Национального антинаркотического союза» (НАС), объединяющего 
            десятки НКО по всей России. Активно продвигает drug-free программы реабилитации, 
            проекты ресоциализации и спортивно-терапевтические лагеря для зависимой молодёжи.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="section-fade-in space-y-0">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">Ключевые вехи</h3>
          <div className="relative pl-8 border-l border-primary/20">
            {timeline.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[2.55rem] top-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-primary/30">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="ml-4">
                  <span className="text-primary font-display text-lg font-bold">{item.year}</span>
                  <p className="text-muted-foreground mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
