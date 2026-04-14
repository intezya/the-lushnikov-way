import { HeartHandshake, ScrollText, ShieldCheck } from 'lucide-react';
import { getAssetPath } from '@/lib/assetPath';

const blessingLetterSrc = getAssetPath('/homepage/blessing-letter.jpg', import.meta.env.BASE_URL);

const BlessingLetterSection = () => (
  <section id="blessing-letter" className="py-24">
    <div className="container mx-auto px-4">
      <div className="section-fade-in grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">Письмо благословение</p>
          <h2 className="mb-5 font-display text-4xl font-bold text-foreground md:text-5xl">
            Духовная <span className="gold-gradient">опора</span> программы
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-8 text-muted-foreground">
            В официальной позиции Никиты Лушникова и Национального антинаркотического союза вопрос духовного
            просвещения рассматривается как важная часть помощи людям, проходящим путь лечения и ресоциализации.
          </p>
          <div className="mb-8 space-y-4">
            <div className="rounded-[28px] border border-primary/15 bg-card/75 p-5">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <p className="text-sm leading-7 text-foreground/85">
                Поддержку в этом направлении Союзу оказывает священнослужитель Русской православной церкви,
                духовник братии Оптиной пустыни, член наблюдательного совета НАС Схиархимандрит Илий (Ноздрин).
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-border/80 bg-secondary/55 p-5">
                <ScrollText className="mb-3 h-5 w-5 text-primary" />
                <p className="mb-2 text-sm font-semibold text-foreground">Официальный документ</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Письмо на главной странице фиксирует поддержку миссии помощи зависимым и их близким.
                </p>
              </div>
              <div className="rounded-[24px] border border-border/80 bg-secondary/55 p-5">
                <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                <p className="mb-2 text-sm font-semibold text-foreground">Ценности программы</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Речь идёт не только о реабилитации, но и о внутреннем восстановлении, дисциплине и возвращении к
                  устойчивой трезвой жизни.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-[32px] border border-primary/15 bg-gradient-to-br from-card via-card to-secondary/60 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative rounded-[24px] border border-white/10 bg-background/50 p-3 backdrop-blur-sm">
              <img
                src={blessingLetterSrc}
                alt="Письмо благословение с официального сайта Никиты Лушникова"
                className="h-auto w-full rounded-[18px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlessingLetterSection;
