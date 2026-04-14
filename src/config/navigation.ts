import {
  Building2,
  Clapperboard,
  ContactRound,
  HeartHandshake,
  Newspaper,
  type LucideIcon,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export type PrimaryNavItem = {
  label: string;
  path: string;
  description: string;
  icon: LucideIcon;
};

export const primaryNavItems: PrimaryNavItem[] = [
  {
    label: "О себе",
    path: "/about",
    description: "Биография, ключевые вехи, награды и международная деятельность.",
    icon: UserRound,
  },
  {
    label: "Деятельность",
    path: "/activities",
    description: "Структуры, проекты и цифры, которые показывают масштаб работы.",
    icon: Building2,
  },
  {
    label: "Рехабы",
    path: "/rehabs",
    description: "Каталог проверенных реабилитационных центров по всей России.",
    icon: ShieldCheck,
  },
  {
    label: "Новости",
    path: "/news",
    description: "Последние события, выступления и упоминания в федеральных медиа.",
    icon: Newspaper,
  },
  {
    label: "Контент",
    path: "/content",
    description: "Полезные материалы, видео, блог и основные социальные каналы.",
    icon: Clapperboard,
  },
  {
    label: "Отзывы",
    path: "/testimonials",
    description: "Истории выздоровления и мнения уважаемых публичных фигур.",
    icon: HeartHandshake,
  },
  {
    label: "Контакты",
    path: "/contacts",
    description: "Горячая линия, контактные данные и форма запроса консультации.",
    icon: ContactRound,
  },
];
