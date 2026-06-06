import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "О компании Братоуверие-СНБ — партнёр госпроектов РФ";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "ООО «Братоуверие-СНБ» — официальный партнёр правительства РФ по подбору кадров для государственных проектов: ЛНР-ДНР, Арктика, Нацпроект «Кадры». Узнайте о компании.");
  }, []);

  return (
    <div className="font-body">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
            <Link to="/" className="hover:text-foreground transition">Главная</Link>
            <span className="mx-2">/</span>
            <span>О компании</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              О компании Братоуверие-СНБ
            </h1>
            <div className="mt-8 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                ООО «Братоуверие-СНБ» — официальный партнёр администрации и правительства Российской
                Федерации в сфере подбора высококвалифицированного персонала для реализации стратегических
                государственных проектов федерального масштаба.
              </p>
              <p>
                Наша компания специализируется на HR-партнёрстве в рамках крупнейших государственных инициатив:
                восстановление и развитие новых регионов России (ЛНР, ДНР), освоение арктических территорий
                в рамках проекта «Арктический вызов», а также реализация Национального проекта «Кадры».
              </p>
              <p>
                Мы приглашаем к сотрудничеству как опытных HR-специалистов и рекрутинговые агентства,
                так и начинающих профессионалов без опыта в подборе персонала. Для всех партнёров мы
                обеспечиваем полное обучение, индивидуальное сопровождение и постоянный поток вакансий
                от государственных заказчиков.
              </p>
              <p>
                За годы работы мы трудоустроили более 10 000 специалистов, выстроили сеть из более чем
                50 активных партнёров по всей России и заработали репутацию надёжного посредника между
                государственными структурами и рынком труда.
              </p>
              <p>
                Наши партнёры получают прозрачные условия сотрудничества, официальные договоры,
                своевременные выплаты и поддержку 24/7. Мы уверены: вместе мы решаем важнейшие
                кадровые задачи страны и создаём достойные возможности заработка для всех участников.
              </p>
              <p>
                Присоединяйтесь к команде Братоуверие-СНБ и станьте частью государственных проектов,
                которые формируют будущее России.
              </p>
            </div>

            {/* Internal linking block */}
            <div className="mt-12 p-6 bg-secondary rounded-2xl border border-border">
              <h2 className="font-heading font-semibold text-lg text-foreground mb-4">Узнайте больше</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/#projects" onClick={() => { window.scrollTo(0,0); setTimeout(() => { document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'}); }, 300); }} className="block p-4 bg-card rounded-xl border border-border hover:shadow-md transition text-sm font-medium text-primary hover:text-primary/80">
                  → Государственные проекты
                </Link>
                <Link to="/#training" onClick={() => { window.scrollTo(0,0); setTimeout(() => { document.querySelector('#training')?.scrollIntoView({behavior:'smooth'}); }, 300); }} className="block p-4 bg-card rounded-xl border border-border hover:shadow-md transition text-sm font-medium text-primary hover:text-primary/80">
                  → Программа обучения
                </Link>
                <Link to="/#rewards" onClick={() => { window.scrollTo(0,0); setTimeout(() => { document.querySelector('#rewards')?.scrollIntoView({behavior:'smooth'}); }, 300); }} className="block p-4 bg-card rounded-xl border border-border hover:shadow-md transition text-sm font-medium text-primary hover:text-primary/80">
                  → Вознаграждения партнёров
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}