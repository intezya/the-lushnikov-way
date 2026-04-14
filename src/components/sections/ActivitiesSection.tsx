import { Heart, Users, Dumbbell, Building } from 'lucide-react';

const activities = [
  {
    icon: Heart,
    title: 'Центр Здоровой Молодежи',
    description: 'Благотворительный фонд и крупнейшая сеть реабилитационных центров, действующая с середины 2000‑х. Тысячи людей прошли курс реабилитации и вернулись к полноценной жизни.',
  },
  {
    icon: Users,
    title: 'Национальный антинаркотический союз',
    description: 'Ассоциация НКО, объединяющая десятки организаций в сфере профилактики наркомании и пропаганды здорового образа жизни по всей России.',
  },
  {
    icon: Building,
    title: 'Программы ресоциализации',
    description: 'Проекты «социального лифта» для выпускников реабилитационных программ: трудоустройство, обучение, жильё и поддержка на пути к новой жизни.',
  },
  {
    icon: Dumbbell,
    title: 'Спортивно-терапевтические лагеря',
    description: 'Оздоровительные и спортивные лагеря для зависимой молодёжи, направленные на формирование здоровых привычек и укрепление воли.',
  },
];

const counters = [
  { value: '50+', label: 'реабилитационных центров' },
  { value: '15 000+', label: 'прошедших реабилитацию' },
  { value: '20+', label: 'лет работы' },
  { value: '30+', label: 'регионов России' },
];

const ActivitiesSection = () => (
  <section id="activities" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Деятельность</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Структуры и <span className="gold-gradient">проекты</span>
        </h2>
        <div className="w-20 h-0.5 gold-line mx-auto" />
      </div>

      {/* Stats */}
      <div className="section-fade-in grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
            className="section-fade-in group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500"
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
  </section>
);

export default ActivitiesSection;
