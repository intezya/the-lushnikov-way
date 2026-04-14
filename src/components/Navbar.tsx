import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';
import { primaryNavItems } from '@/config/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl tracking-wider">
          <span className="gold-gradient font-bold">N.</span>
          <span className="text-foreground">Lushnikov</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {primaryNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className="rounded-full border border-transparent px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/15 hover:bg-primary/5 hover:text-primary"
              activeClassName="border-primary/25 bg-primary/10 text-primary shadow-[0_0_0_1px_rgba(201,168,76,0.08)]"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+79160313555" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +7 916 031 35 55
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link to="/contacts">Получить помощь</Link>
          </Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-transparent px-3 py-2 text-left text-sm text-muted-foreground transition-all hover:border-primary/15 hover:bg-primary/5 hover:text-primary"
                activeClassName="border-primary/25 bg-primary/10 text-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+79160313555" className="flex items-center gap-2 text-sm text-primary py-2">
              <Phone className="w-4 h-4" />
              +7 916 031 35 55
            </a>
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full">
              <Link to="/contacts" onClick={() => setIsOpen(false)}>
                Получить помощь
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
