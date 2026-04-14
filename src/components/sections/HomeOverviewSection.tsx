import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { primaryNavItems } from "@/config/navigation";

const cardLayoutClasses = [
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-3",
  "xl:col-span-3",
  "xl:col-span-3",
  "xl:col-span-3",
];

const cardGlowClasses = [
  "from-primary/18 via-primary/6 to-transparent",
  "from-white/14 via-primary/5 to-transparent",
  "from-primary/16 via-amber-200/5 to-transparent",
  "from-primary/14 via-white/5 to-transparent",
  "from-white/12 via-primary/4 to-transparent",
  "from-primary/16 via-white/4 to-transparent",
  "from-primary/18 via-primary/5 to-transparent",
];

const HomeOverviewSection = () => (
  <section id="discover" className="relative overflow-hidden py-24 bg-secondary/30">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/6 blur-[120px]" />
    <div className="container mx-auto px-4">
      <div className="section-fade-in text-center mb-14">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Навигация по сайту</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Отдельные <span className="gold-gradient">страницы</span> по ключевым темам
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Главная страница теперь работает как обзорная витрина, а каждая важная тема доступна в полноценном
          формате с отдельным маршрутом.
        </p>
        <div className="w-20 h-0.5 gold-line mx-auto mt-4" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {primaryNavItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`section-fade-in group relative overflow-hidden rounded-[28px] border border-border/80 bg-card/85 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_80px_-36px_rgba(201,168,76,0.42)] ${cardLayoutClasses[index] ?? "xl:col-span-2"}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br opacity-80 ${cardGlowClasses[index] ?? "from-primary/16 via-primary/5 to-transparent"}`} />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex items-start justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-primary/90">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item.path.replace("/", "") || "home"}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div className="relative mt-10">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Отдельная страница</p>
              <h3 className="mt-3 max-w-[14ch] font-display text-2xl font-semibold leading-tight text-foreground md:text-[2rem]">
                {item.label}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>

            <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-white/5 pt-5">
              <span className="text-sm font-medium text-foreground/80">Подробнее</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-2 text-sm font-medium text-primary transition-all group-hover:border-primary/35 group-hover:bg-primary/10">
                Открыть
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomeOverviewSection;
