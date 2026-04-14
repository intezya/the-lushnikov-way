import { Heart, Users, Dumbbell, Building, Globe } from 'lucide-react';

const activities = [
  {
    icon: Heart,
    title: 'Центр Здоровой Молодежи',
    description: 'Фонд и сеть реабилитационных центров, выросшие из практической помощи зависимым людям после 2004 года и объединившие десятки программ в России и за её пределами.',
  },
  {
    icon: Users,
    title: 'Национальный антинаркотический союз',
    description: 'Площадка координации НКО, специалистов и государственных партнёров, работающих в сфере профилактики зависимости, реабилитации и продвижения здорового образа жизни.',
  },
  {
    icon: Building,
    title: 'Социальный лифт',
    description: 'Программа повторной адаптации после реабилитации: образование, новая профессия, трудоустройство, сопровождение и реальное возвращение в общество.',
  },
  {
    icon: Dumbbell,
    title: 'Спортивно-терапевтические лагеря',
    description: 'Практический формат, который Лушников первым в России масштабно внедрил для зависимой молодёжи: мотивация к трезвости, дисциплина, команда и восстановление личности.',
  },
  {
    icon: Globe,
    title: 'Международная адвокация',
    description: 'Представление российских программ профилактики и социальной реабилитации в ООН и других международных организациях, укрепление межнационального сотрудничества.',
  },
];

const counters = [
  { value: '2004', label: 'старт практической помощи зависимым' },
  { value: '2013', label: 'запуск масштабной общественной координации в НАС' },
  { value: '2019', label: 'экспертный совет и усиление психологической экспертизы' },
  { value: 'ООН', label: 'международный уровень профилактики и реабилитации' },
];

const ActivitiesSection = () => (
  <section id="activities" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="section-fade-in">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Деятельность</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Структуры и <span className="gold-gradient">проекты</span>
          </h2>
          <div className="w-20 h-0.5 gold-line mx-auto" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {counters.map((c) => (
            <div key={c.label} className="text-center py-6 px-4 rounded-lg bg-card border border-border">
              <span className="font-display text-3xl md:text-4xl font-bold gold-gradient">{c.value}</span>
              <p className="text-muted-foreground text-sm mt-2">{c.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((a, i) => (
            <div
              key={i}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
