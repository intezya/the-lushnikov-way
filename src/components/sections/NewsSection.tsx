import { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    date: '2026-03-15',
    title: 'НАС провёл ежегодный форум по профилактике наркомании',
    preview: 'Более 500 участников из 30 регионов обсудили новые подходы к реабилитации и ресоциализации зависимых.',
    category: 'Новости',
  },
  {
    date: '2026-02-20',
    title: 'Открытие нового реабилитационного центра в Новосибирске',
    preview: 'ЦЗМ расширяет сеть: новый центр рассчитан на 80 человек и оснащён по последним стандартам.',
    category: 'Новости',
  },
  {
    date: '2026-01-10',
    title: 'Никита Лушников выступил на сессии ООН по наркотикам',
    preview: 'Доклад о российских drug-free программах реабилитации получил высокую оценку международного сообщества.',
    category: 'Новости',
  },
  {
    date: '2025-12-05',
    title: 'Интервью для «Первого канала»: история успеха ЦЗМ',
    preview: 'Никита Лушников рассказал о 20-летнем пути организации и планах на будущее.',
    category: 'В СМИ',
  },
  {
    date: '2025-11-18',
    title: 'Публикация в Forbes: «Люди, которые меняют Россию»',
    preview: 'Никита Лушников вошёл в список общественных деятелей, оказывающих наибольшее влияние на социальную сферу.',
    category: 'В СМИ',
  },
  {
    date: '2025-10-22',
    title: 'Репортаж НТВ о спортивно-терапевтических лагерях',
    preview: 'Съёмочная группа побывала в лагере для зависимой молодёжи и показала результаты программы.',
    category: 'В СМИ',
  },
];

const NewsSection = () => {
  const [tab, setTab] = useState<'Новости' | 'В СМИ'>('Новости');
  const filtered = newsItems.filter((n) => n.category === tab);

  return (
    <section id="news" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="section-fade-in">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Новости</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Последние <span className="gold-gradient">события</span>
            </h2>
            <div className="w-20 h-0.5 gold-line mx-auto" />
          </div>

          <div className="flex justify-center gap-2 mb-10">
            {(['Новости', 'В СМИ'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  tab === t
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground border border-border hover:text-foreground'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((n, i) => (
              <div key={i} className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(n.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{n.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
