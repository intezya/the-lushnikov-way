import { Quote } from 'lucide-react';

const opinions = [
  {
    name: 'Сергей Лавров',
    role: 'Министр иностранных дел РФ',
    text: 'Деятельность Национального антинаркотического союза заслуживает высокой оценки. Работа по реабилитации зависимых — важнейшая социальная миссия.',
  },
  {
    name: 'Евгений Брюн',
    role: 'Главный нарколог Минздрава РФ',
    text: 'Центр Здоровой Молодежи демонстрирует эффективный подход к реабилитации. Их drug-free программы показывают высокие результаты.',
  },
  {
    name: 'Андрей Малахов',
    role: 'Телеведущий',
    text: 'Никита Лушников — человек, который своим примером доказывает, что выздоровление возможно. Его центры спасают тысячи жизней.',
  },
  {
    name: 'Вера Брежнева',
    role: 'Певица, посол доброй воли',
    text: 'Я видела, как работают центры ЦЗМ, и восхищена преданностью команды делу помощи зависимым людям.',
  },
];

const reviews = [
  {
    name: 'Алексей М.',
    text: 'Благодаря ЦЗМ я трезв уже 5 лет. Центр дал мне не просто реабилитацию, а новую жизнь — работу, семью, смысл.',
    type: 'Выпускник',
  },
  {
    name: 'Елена К.',
    text: 'Мой сын прошёл реабилитацию в ЦЗМ 3 года назад. Сейчас он учится в университете и помогает другим. Бесконечно благодарна!',
    type: 'Родственник',
  },
  {
    name: 'Дмитрий В.',
    text: 'Я думал, что всё кончено. Но команда центра поверила в меня, когда я сам в себя не верил. Сегодня я волонтёр и помогаю другим.',
    type: 'Выпускник',
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24">
    <div className="container mx-auto px-4">
      {/* VIP opinions */}
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Мнения</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Нас <span className="gold-gradient">поддерживают</span>
        </h2>
        <div className="w-20 h-0.5 gold-line mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {opinions.map((o, i) => (
          <div key={i} className="section-fade-in p-8 rounded-lg bg-card border border-border relative">
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
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Отзывы</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Истории <span className="gold-gradient">выздоровления</span>
        </h2>
        <div className="w-20 h-0.5 gold-line mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="section-fade-in p-6 rounded-lg bg-card border border-border">
            <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium mb-4">
              {r.type}
            </span>
            <p className="text-foreground/80 italic leading-relaxed mb-4">«{r.text}»</p>
            <p className="font-semibold text-foreground text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
