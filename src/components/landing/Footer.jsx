import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main site CTA strip */}
      <div className="border-b border-background/10 bg-background/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-background text-sm">
              Контакты, директорат, документация и подробная информация о проектах —
            </p>
            <p className="text-background/60 text-sm">на официальном сайте ООО «Братоуверие-СНБ»</p>
          </div>
          <a
            href="https://bratouverie-snb.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            bratouverie-snb.ru
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">СНБ</span>
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Братоуверие-СНБ</p>
                <p className="text-xs text-background/50">ООО «Братоуверие-СНБ»</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Партнёрство в подборе персонала для государственных проектов Российской Федерации
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-heading font-semibold text-sm mb-4 text-background/80 uppercase tracking-wider">О компании</p>
            <div className="space-y-2">
              {[
                { label: "О нас", href: "#about" },
                { label: "Гарантии", href: "#guarantees" },
                { label: "Как начать", href: "#steps" },
                { label: "Обучение", href: "#training" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="block text-sm text-background/60 hover:text-background transition">
                  {l.label}
                </button>
              ))}
              <Link to="/about" className="block text-sm text-background/60 hover:text-background transition">Страница «О компании»</Link>
            </div>
          </div>

          {/* Projects */}
          <div>
            <p className="font-heading font-semibold text-sm mb-4 text-background/80 uppercase tracking-wider">Проекты</p>
            <div className="space-y-2">
              <button onClick={() => scrollTo("#projects")} className="block text-sm text-background/60 hover:text-background transition">Программа восстановления ЛНР-ДНР</button>
              <button onClick={() => scrollTo("#projects")} className="block text-sm text-background/60 hover:text-background transition">Арктический вызов</button>
              <button onClick={() => scrollTo("#projects")} className="block text-sm text-background/60 hover:text-background transition">Национальный проект «Кадры»</button>
            </div>
          </div>

          {/* Partner program */}
          <div>
            <p className="font-heading font-semibold text-sm mb-4 text-background/80 uppercase tracking-wider">Партнёрам</p>
            <div className="space-y-2">
              <button onClick={() => scrollTo("#rewards")} className="block text-sm text-background/60 hover:text-background transition">Вознаграждения</button>
              <button onClick={() => scrollTo("#reviews")} className="block text-sm text-background/60 hover:text-background transition">Отзывы партнёров</button>
              <button onClick={() => scrollTo("#cta")} className="block text-sm text-background/60 hover:text-background transition">Стать партнёром</button>
              <button onClick={() => scrollTo("#contacts")} className="block text-sm text-background/60 hover:text-background transition">Связаться с нами</button>
              <Link to="/contact" className="block text-sm text-background/60 hover:text-background transition">Страница контактов</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">© 2026 ООО «Братоуверие-СНБ» | Все права защищены</p>
          <p className="text-xs text-background/40">Официальный партнёр государственных проектов РФ</p>
        </div>
      </div>
    </footer>
  );
}