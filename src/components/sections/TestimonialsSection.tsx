import { Quote } from 'lucide-react';

const opinions = [
  {
    name: 'Сергей Лавров',
    role: 'Министр иностранных дел РФ',
    text: 'Подчёркивает, что общественная работа Никиты Лушникова не только сохраняет масштаб, но и расширяет круг сторонников и работает эффективно.',
  },
  {
    name: 'Евгений Брюн',
    role: 'Главный нарколог Минздрава РФ',
    text: 'Отмечает роль Лушникова в объединении реабилитационных центров и наведении порядка в сфере наркологических услуг.',
  },
  {
    name: 'Юрий Федотов',
    role: 'Экс-исполнительный директор УНП ООН',
    text: 'Называет Национальный антинаркотический союз надёжным партнёром среди НКО, работающих в профилактике наркомании и реабилитации.',
  },
  {
    name: 'Фёдор Емельяненко',
    role: 'Спортсмен, общественный деятель',
    text: 'Говорит о вкладе Лушникова в помощь людям, которым нужна поддержка, надежда и путь к правильным ценностям.',
  },
];

const reviews = [
  {
    name: 'Алексей М.',
    text: 'После курса реабилитации я впервые почувствовал, что возвращаюсь не просто к трезвости, а к нормальной жизни с работой, ответственностью и уважением к себе.',
    type: 'Выпускник',
  },
  {
    name: 'Елена К.',
    text: 'Программа помогла моему сыну не сорваться после центра, а пройти путь дальше: обучение, работа, семья и желание помогать другим зависимым.',
    type: 'Родственник',
  },
  {
    name: 'Дмитрий В.',
    text: 'Самым важным стала не только реабилитация, но и последующая поддержка. Именно она помогла мне удержаться в социуме и начать помогать другим.',
    type: 'Выпускник',
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24">
    <div className="container mx-auto px-4">
      <div className="section-fade-in">
        {/* VIP opinions */}
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Мнения</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Нас <span className="gold-gradient">поддерживают</span>
          </h2>
          <div className="w-20 h-0.5 gold-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {opinions.map((o, i) => (
            <div key={i} className="p-8 rounded-lg bg-card border border-border relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <p className="text-foreground/80 italic leading-relaxed mb-6">«{o.text}»</p>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">{o.name}</p>
                <p className="text-muted-foreground text-sm">{o.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Отзывы</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Истории <span className="gold-gradient">выздоровления</span>
          </h2>
          <div className="w-20 h-0.5 gold-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-lg bg-card border border-border">
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium mb-4">
                {r.type}
              </span>
              <p className="text-foreground/80 italic leading-relaxed mb-4">«{r.text}»</p>
              <p className="font-semibold text-foreground text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
