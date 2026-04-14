import { Award, Brain, Building2, Globe2, GraduationCap, Landmark } from 'lucide-react';

const timeline = [
  { year: '2004', text: 'Прошёл реабилитацию и после возвращения в Белгород посвятил жизнь помощи зависимым людям.', icon: Building2 },
  { year: '2008', text: 'Окончил Белгородскую государственную сельскохозяйственную академию по специальности «Ветеринар» и переехал в Москву.', icon: GraduationCap },
  { year: '2009', text: 'Стал президентом благотворительного фонда «Центр здоровой молодёжи» и развивал сеть реабилитационных программ.', icon: Building2 },
  { year: '2011', text: 'Получил государственную награду за активную жизненную позицию и общественную деятельность на благо России.', icon: Award },
  { year: '2012', text: 'Вошёл в состав правления Российской наркологической лиги.', icon: Landmark },
  { year: '2013', text: 'Возглавил правление НАС и стал одним из авторов программы ресоциализации «Социальный лифт».', icon: Landmark },
  { year: '2017', text: 'Получил образование в сфере менеджмента и представлял российские НКО на площадках ООН.', icon: Globe2 },
  { year: '2019', text: 'Стал магистром психологии МГППУ и возглавил экспертный совет Национального антинаркотического союза.', icon: Brain },
  { year: '2020', text: 'Продолжил международную работу как представитель программ профилактики и социальной реабилитации России.', icon: Globe2 },
];

const badges = [
  'Член правления Российской наркологической лиги',
  'Председатель экспертного совета НАС',
  'Представитель российских программ в ООН',
  'Государственная награда РФ',
  'Автор программы «Социальный лифт»',
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="section-fade-in">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Биография</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            О <span className="gold-gradient">Никите Лушникове</span>
          </h2>
          <div className="w-20 h-0.5 gold-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio text */}
          <div className="space-y-6">
            <p className="text-foreground/90 text-lg leading-relaxed">
              <span className="text-primary font-semibold">Никита Вячеславович Лушников</span> (род. 1982, Белгород) —
              российский общественный деятель, который прошёл личный путь восстановления от зависимости и превратил этот
              опыт в системную помощь тысячам людей по всей стране.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              После успешной реабилитации в 2004 году он вернулся в родной город и вместе с единомышленниками начал
              строить сеть центров помощи зависимым. С тех пор его работа сосредоточена на реабилитации, ресоциализации,
              профилактике зависимости и поддержке семей.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Сегодня Никита Лушников — один из наиболее узнаваемых лидеров антинаркотического общественного движения в
              России: президент фонда «Центр здоровой молодёжи», руководитель экспертной работы в НАС, участник
              международного диалога о профилактике и социальной реабилитации на площадках ООН и других организаций.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Его подход соединяет практическую реабилитацию, психологическую поддержку, образование, трудовую
              ресоциализацию и духовно-нравственную опору. Именно поэтому локальная помощь людям постепенно превратилась
              в межрегиональную и международную общественную деятельность.
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
          <div className="space-y-0">
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
    </div>
  </section>
);

export default AboutSection;
