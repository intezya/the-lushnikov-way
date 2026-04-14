import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'О себе', href: '#about' },
  { label: 'Деятельность', href: '#activities' },
  { label: 'Рехабы', href: '#rehabs' },
  { label: 'Новости', href: '#news' },
  { label: 'Контент', href: '#content' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#contacts' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl tracking-wider">
          <span className="gold-gradient font-bold">N.</span>
          <span className="text-foreground">Lushnikov</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:88001003334" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            8-800-100-3334
          </a>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => scrollTo('#contacts')}
          >
            Получить помощь
          </Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:88001003334" className="flex items-center gap-2 text-sm text-primary py-2">
              <Phone className="w-4 h-4" />
              8-800-100-3334
            </a>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full"
              onClick={() => scrollTo('#contacts')}
            >
              Получить помощь
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
