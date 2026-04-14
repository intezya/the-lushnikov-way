import { Phone, Mail, MapPin, Instagram, Send, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => (
  <section id="contacts" className="py-24">
    <div className="container mx-auto px-4">
      <div className="section-fade-in text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Контакты</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Свяжитесь <span className="gold-gradient">с нами</span>
        </h2>
        <div className="w-20 h-0.5 gold-line mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact info */}
        <div className="section-fade-in space-y-8">
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Горячая линия</p>
            <a href="tel:88001003334" className="font-display text-3xl md:text-4xl font-bold gold-gradient hover:opacity-80 transition-opacity">
              8-800-100-3334
            </a>
            <p className="text-muted-foreground text-sm mt-1">Бесплатно по всей России, 24/7</p>
          </div>

          <div className="space-y-4">
            <a href="mailto:info@czm.su" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              info@czm.su
            </a>
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              Москва, Россия
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-sm mb-3">Социальные сети</p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, url: 'https://instagram.com/nikita_lushnikov' },
                { icon: Send, url: '#' },
                { icon: Youtube, url: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="section-fade-in">
          <form className="space-y-4 p-8 rounded-lg bg-card border border-border" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Запросить консультацию</h3>
            <p className="text-muted-foreground text-sm mb-4">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Кратко опишите ситуацию"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" size="lg">
              Отправить заявку
            </Button>
            <p className="text-muted-foreground text-xs text-center">Конфиденциальность гарантирована</p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
