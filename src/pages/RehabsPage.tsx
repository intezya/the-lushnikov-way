import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, ArrowLeft, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const allRehabs = [
  { name: 'ЦЗМ Москва', city: 'Москва', description: 'Флагманский центр реабилитации с полным циклом программ восстановления. Индивидуальный подход и комплексная терапия.', types: ['Наркозависимость', 'Алкозависимость'], capacity: 120 },
  { name: 'ЦЗМ Санкт-Петербург', city: 'Санкт-Петербург', description: 'Современный реабилитационный центр с квалифицированными специалистами и drug-free программами.', types: ['Наркозависимость', 'Алкозависимость', 'Игромания'], capacity: 80 },
  { name: 'ЦЗМ Краснодар', city: 'Краснодар', description: 'Центр ресоциализации в тёплом климате. Спортивно-терапевтические программы и трудотерапия.', types: ['Наркозависимость', 'Ресоциализация'], capacity: 60 },
  { name: 'ЦЗМ Екатеринбург', city: 'Екатеринбург', description: 'Реабилитационный центр на Урале с многолетним опытом и высоким процентом успешной реабилитации.', types: ['Наркозависимость', 'Алкозависимость'], capacity: 70 },
  { name: 'ЦЗМ Новосибирск', city: 'Новосибирск', description: 'Новый центр с современным оборудованием и командой профессионалов.', types: ['Наркозависимость', 'Алкозависимость'], capacity: 80 },
  { name: 'ЦЗМ Ростов-на-Дону', city: 'Ростов-на-Дону', description: 'Центр реабилитации юга России с программами для всей семьи.', types: ['Наркозависимость', 'Созависимость'], capacity: 50 },
  { name: 'ЦЗМ Казань', city: 'Казань', description: 'Реабилитационный центр в Поволжье. Мультикультурный подход и уважение к традициям.', types: ['Наркозависимость', 'Алкозависимость'], capacity: 60 },
  { name: 'ЦЗМ Самара', city: 'Самара', description: 'Центр с фокусом на молодёжную реабилитацию и ресоциализацию.', types: ['Наркозависимость', 'Ресоциализация'], capacity: 45 },
  { name: 'ЦЗМ Нижний Новгород', city: 'Нижний Новгород', description: 'Один из старейших центров сети с богатым опытом реабилитации.', types: ['Наркозависимость', 'Алкозависимость', 'Игромания'], capacity: 55 },
  { name: 'ЦЗМ Воронеж', city: 'Воронеж', description: 'Компактный центр с семейным подходом и индивидуальными программами.', types: ['Наркозависимость', 'Алкозависимость'], capacity: 40 },
  { name: 'ЦЗМ Белгород', city: 'Белгород', description: 'Центр на родине основателя. Особое внимание к духовному восстановлению.', types: ['Наркозависимость', 'Алкозависимость'], capacity: 35 },
  { name: 'ЦЗМ Сочи', city: 'Сочи', description: 'Реабилитация в курортной зоне. Климатотерапия и спортивные программы.', types: ['Наркозависимость', 'Ресоциализация'], capacity: 50 },
];

const cities = [...new Set(allRehabs.map((r) => r.city))];
const types = [...new Set(allRehabs.flatMap((r) => r.types))];

const RehabsPage = () => {
  const [cityFilter, setCityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = allRehabs.filter((r) => {
    if (cityFilter && r.city !== cityFilter) return false;
    if (typeFilter && !r.types.includes(typeFilter)) return false;
    if (search && !r.name.toLowerCase().includes(search.toLowerCase()) && !r.city.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Каталог</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Проверенные <span className="gold-gradient">рехабы</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Все реабилитационные центры прошли проверку и сертификацию Национального антинаркотического союза
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск по названию или городу..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            >
              <option value="">Все города</option>
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors"
            >
              <option value="">Все типы</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <p className="text-muted-foreground text-sm mb-6">Найдено центров: {filtered.length}</p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <div key={i} className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">{r.name}</h3>
                  <div className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-2.5 py-1 rounded-full shrink-0 ml-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Проверен
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {r.city}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {r.types.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{r.capacity} мест</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Центры не найдены. Попробуйте изменить фильтры.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RehabsPage;
