import { motion } from "framer-motion";
import { FileText, BookOpen, Search, UserCheck, Trophy } from "lucide-react";

const steps = [
  { icon: FileText, num: "01", title: "Подписание договора", time: "1-2 дня", desc: "Официальное партнёрское соглашение с чёткими условиями, размерами вознаграждений и порядком расчётов." },
  { icon: BookOpen, num: "02", title: "Обучение", time: "2-4 дня", desc: "Доступ к видеокурсам, информации о вакансиях, шаблонам и базе знаний. Наставничество для новичков." },
  { icon: Search, num: "03", title: "Поиск кандидатов", time: "1-4 недели", desc: "Размещение вакансий на сайтах и в соцсетях. Проведение интервью и оценка кандидатов." },
  { icon: UserCheck, num: "04", title: "Передача кандидата", time: "3-5 дней", desc: "Финальное интервью, согласование с заказчиком, проверка документов и оформление." },
  { icon: Trophy, num: "05", title: "Вознаграждение", time: "5 дней", desc: "Выплата от 50 000 до 300 000 ₽ на ваш счёт после успешного трудоустройства." },
];

export default function StepsSection() {
  return (
    <section id="steps" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            5 шагов к успеху
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            От подписания договора до первого вознаграждения за 2-3 недели
          </p>
        </motion.div>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-14 h-14 mx-auto rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="mt-4">
                  <span className="font-heading font-extrabold text-3xl text-primary/20">{s.num}</span>
                  <h3 className="mt-1 font-heading font-semibold text-foreground text-sm">{s.title}</h3>
                  <span className="inline-block mt-2 text-xs text-muted-foreground bg-white px-2 py-1 rounded-md border border-border">{s.time}</span>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}