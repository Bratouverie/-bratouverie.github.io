import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "О компании", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Обучение", href: "#training" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Условия", href: "#steps" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">СНБ</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-sm text-foreground leading-tight">Братоуверие-СНБ</p>
            <p className="text-[11px] text-muted-foreground leading-tight">Партнёр госпроектов РФ</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("#cta")}
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold"
          >
            Стать партнёром
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-4 py-3 text-sm rounded-md hover:bg-muted transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#cta")}
            className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold"
          >
            Стать партнёром
          </Button>
        </div>
      )}
    </header>
  );
}