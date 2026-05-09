import { motion } from "framer-motion";
import { Building2, Banknote, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMG = "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/56fea4d40_generated_40b3baf9.png";

const features = [
  { icon: Building2, label: "Работа с государством" },
  { icon: Banknote, label: "Высокая оплата" },
  { icon: GraduationCap, label: "Обучение включено" },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Профессиональная корпоративная атмосфера" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3c72]/90 via-[#1e3c72]/75 to-[#1e3c72]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-white"
          >
            Зарабатывайте от 50 до 300 тысяч рублей на подборе кадров для государственных проектов
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            Присоединяйтесь к сети успешных партнёров Братоуверие-СНБ. Мы подбираем персонал для
            стратегических проектов: Программа восстановления ЛНР-ДНР, Арктический вызов, Национальный
            проект «Кадры». Начинающих специалистов обучим с нуля!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#cta")}
              className="bg-accent hover:bg-accent/90 text-white font-heading font-semibold text-base px-8 py-6"
            >
              Начать сотрудничество
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#training")}
              className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-base px-8 py-6"
            >
              Программа обучения
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                <f.icon className="w-5 h-5 text-white/80" />
                <span className="text-sm text-white/90 font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}