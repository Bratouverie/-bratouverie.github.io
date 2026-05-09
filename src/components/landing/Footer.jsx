export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">СНБ</span>
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Братоуверие-СНБ</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Партнёрство в подборе персонала для государственных проектов России
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm mb-4">О компании</p>
            <div className="space-y-2">
              {[
                { label: "О нас", href: "#about" },
                { label: "Гарантии", href: "#guarantees" },
                { label: "Условия", href: "#steps" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="block text-sm text-background/60 hover:text-background transition">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm mb-4">Проекты</p>
            <div className="space-y-2">
              <button onClick={() => scrollTo("#projects")} className="block text-sm text-background/60 hover:text-background transition">Восстановление ЛНР-ДНР</button>
              <button onClick={() => scrollTo("#projects")} className="block text-sm text-background/60 hover:text-background transition">Арктический вызов</button>
              <button onClick={() => scrollTo("#projects")} className="block text-sm text-background/60 hover:text-background transition">Национальный проект «Кадры»</button>
            </div>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm mb-4">Контакты</p>
            <div className="space-y-2 text-sm text-background/60">
              <p>Игорь: +7 (984) 262-09-36</p>
              <p>Яков: +7 (919) 107-22-44</p>
              <a href="https://t.me/bratouverie" target="_blank" rel="noopener noreferrer" className="block hover:text-background transition">Telegram: @bratouverie</a>
              <a href="mailto:bratouverie@gmail.com" className="block hover:text-background transition">bratouverie@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">© 2026 ООО &quot;Братоуверие-СНБ&quot; | Все права защищены</p>
          <p className="text-xs text-background/40">Работаем с администрацией и правительством РФ</p>
        </div>
      </div>
    </footer>
  );
}