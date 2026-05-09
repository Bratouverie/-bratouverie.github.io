import { motion } from "framer-motion";
import { ClipboardCheck, BookOpen, Users, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, label: "Регистрация", day: "День 1", color: "bg-blue-500" },
  { icon: BookOpen, label: "Обучение", day: "День 2-5", color: "bg-amber-500" },
  { icon: Users, label: "Менторинг", day: "День 5-30", color: "bg-purple-500" },
  { icon: Rocket, label: "Старт работы", day: "День 5+", color: "bg-green-500" },
];

const provides = [
  "Полный обучающий курс (видеоуроки, текстовые материалы, вебинары)",
  "Персональный менторинг от опытных рекрутеров",
  "Готовые шаблоны объявлений о вакансиях",
  "База знаний с требованиями каждого проекта",
  "Еженедельные консультации с нашими специалистами",
  "Все необходимые документы и информацию для работы",
  "Техническую поддержку по CRM и системам учёта",
  "Мотивационные встречи и обмен опытом с другими партнёрами",
];

export default function TrainingSection() {
  return (
    <section id="training" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Нет опыта? Не проблема!
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Полное обучение, материалы, поддержка и менторство для начинающих партнёров
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Вы не обязаны быть опытным рекрутером, чтобы начать зарабатывать с нами.
              Братоуверие-СНБ предоставляет полный пакет обучения и поддержки:
            </p>
            <ul className="mt-6 space-y-3">
              {provides.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground">{p}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm text-foreground font-medium">
                После обучения вы получаете статус <strong>&quot;Сертифицированный партнёр Братоуверие-СНБ&quot;</strong> и полный доступ к вакансиям!
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 border border-border shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="font-heading font-semibold text-foreground">{s.label}</p>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">{s.day}</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-[23px] w-0.5 h-4 bg-border hidden" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}