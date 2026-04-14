import { Quote } from 'lucide-react';

const respectedOpinions = [
  {
    name: 'Сергей Лавров',
    role: 'Министр иностранных дел Российской Федерации',
    image: '/homepage/lavrov.png',
    quote:
      'Отмечает личную роль Никиты Лушникова в создании и развитии общественной организации, которая не просто сохраняет масштаб, а продолжает эффективно расширять круг сторонников.',
    featured: true,
  },
  {
    name: 'Юрий Федотов',
    role: 'Экс-исполнительный директор Управления ООН по наркотикам и преступности',
    image: '/homepage/fedotov.png',
    quote:
      'Подчёркивает, что Национальный антинаркотический союз рассматривается как надёжный партнёр среди неправительственных организаций, работающих в профилактике наркомании и реабилитации.',
  },
  {
    name: 'Фёдор Емельяненко',
    role: 'Спортсмен и общественный деятель',
    image: '/homepage/emelyanenko.png',
    quote:
      'Говорит о вкладе Никиты в помощь людям, которым нужны внимание, поддержка, надежда и возвращение к правильным ценностям и здоровому образу жизни.',
  },
  {
    name: 'Леонид Слуцкий',
    role: 'Политик и общественный деятель',
    image: '/homepage/slutsky.png',
    quote:
      'Отмечает организаторский масштаб, международный уровень совместных проектов и высокую личную ответственность в общественно значимых инициативах.',
  },
];

const RespectedOpinionsSection = () => (
  <section id="respected-opinions" className="py-24">
    <div className="container mx-auto px-4">
      <div className="section-fade-in">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Мнения уважаемых людей</p>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Публичное <span className="gold-gradient">доверие</span> к делу
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground">
            На официальном сайте собраны отзывы людей, которые оценивают работу Никиты Лушникова не как медийный образ,
            а как реальный вклад в объединение профессионального сообщества, спасение жизней и выстраивание устойчивых
            программ реабилитации.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {respectedOpinions.map((opinion) => (
            <article
              key={opinion.name}
              className="overflow-hidden rounded-[30px] border border-border/80 bg-card/75"
            >
              <div
                className={`grid h-full ${
                  opinion.featured ? 'lg:grid-cols-[280px_minmax(0,1fr)]' : 'md:grid-cols-[220px_minmax(0,1fr)]'
                }`}
              >
                <div className="relative min-h-[260px] overflow-hidden bg-secondary/70">
                  <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-primary/10 blur-3xl" />
                  <img
                    src={opinion.image}
                    alt={opinion.name}
                    className="relative h-full w-full object-cover object-top"
                  />
                </div>
                <div className="relative flex flex-col justify-between p-8">
                  <Quote className="mb-6 h-8 w-8 text-primary/30" />
                  <p className="mb-8 max-w-3xl text-base leading-8 text-foreground/85">{opinion.quote}</p>
                  <div>
                    <p className="text-lg font-semibold text-foreground">{opinion.name}</p>
                    <p className="text-sm text-muted-foreground">{opinion.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RespectedOpinionsSection;
