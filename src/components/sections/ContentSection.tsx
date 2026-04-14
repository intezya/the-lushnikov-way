import { Instagram, Send, Youtube, Play, BookOpen, Mic } from 'lucide-react';

const posts = [
  {
    icon: Play,
    title: 'Как распознать зависимость у близкого',
    description: 'Разбор ключевых признаков зависимости и пошаговый план действий для родственников.',
    platform: 'YouTube',
  },
  {
    icon: BookOpen,
    title: '5 мифов о реабилитации',
    description: 'Развенчиваем главные заблуждения о процессе восстановления от зависимости.',
    platform: 'Блог',
  },
  {
    icon: Mic,
    title: 'Интервью: мой путь к трезвости',
    description: 'Откровенный разговор о личном опыте борьбы с зависимостью и обретении новой жизни.',
    platform: 'Подкаст',
  },
  {
    icon: Play,
    title: 'Созависимость: как перестать спасать',
    description: 'Практические советы для тех, кто живёт рядом с зависимым человеком.',
    platform: 'YouTube',
  },
];

const socials = [
  { icon: Instagram, name: 'Instagram', handle: '@nikita_lushnikov', url: 'https://instagram.com/nikita_lushnikov', followers: '100K+' },
  { icon: Send, name: 'Telegram', handle: '@lushnikov_official', url: '#', followers: '50K+' },
  { icon: Youtube, name: 'YouTube', handle: 'Никита Лушников', url: '#', followers: '200K+' },
];

const ContentSection = () => (
  <section id="content" className="py-24">
    <div className="container mx-auto px-4">
      <div className="section-fade-in">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Контент</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Полезные <span className="gold-gradient">материалы</span>
          </h2>
          <div className="w-20 h-0.5 gold-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {posts.map((p, i) => (
            <div key={i} className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs text-primary font-medium">{p.platform}</span>
              <h3 className="font-display text-base font-semibold text-foreground mt-1 mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">Социальные сети</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{s.name}</p>
                  <p className="text-muted-foreground text-xs">{s.handle}</p>
                  <p className="text-primary text-xs font-medium">{s.followers} подписчиков</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSection;
