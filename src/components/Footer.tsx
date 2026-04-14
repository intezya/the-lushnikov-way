import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link to="/" className="font-display text-xl tracking-wider">
            <span className="gold-gradient font-bold">N.</span>
            <span className="text-foreground">Lushnikov</span>
          </Link>
          <p className="text-muted-foreground text-sm mt-1">Помогаем людям обрести свободу от зависимости</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">О себе</a>
          <a href="#activities" className="hover:text-primary transition-colors">Деятельность</a>
          <Link to="/rehabs" className="hover:text-primary transition-colors">Рехабы</Link>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
        </div>

        <p className="text-muted-foreground text-xs">© 2013–2026 Никита Лушников. Все права защищены.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
