import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const advantages = [
  "Прямым доступом к государственным заказчикам и проектам",
  "Многолетним опытом в управлении персоналом для крупных государственных инициатив",
  "Надёжной репутацией среди органов власти и администрации",
  "Проверенной системой подбора и трудоустройства специалистов",
  "Постоянным потоком вакансий из государственных проектов",
];

const stats = [
  { value: 1000, suffix: "+", label: "Трудоустроено специалистов" },
  { value: 50, suffix: "+", label: "Активных партнёров по РФ" },
  { value: 3, suffix: "", label: "Крупных госпроекта" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Почему Братоуверие-СНБ — надёжный партнёр в подборе персонала?
          </h2>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              ООО &quot;Братоуверие-СНБ&quot; — официальный партнёр администрации и правительства Российской
              Федерации в сфере подбора высококвалифицированного персонала для реализации стратегических
              государственных проектов федерального масштаба.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Наша компания обладает:
            </p>
            <ul className="mt-4 space-y-3">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{a}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Мы приглашаем к сотрудничеству HR-агентства и частных HR-специалистов со всей России,
              включая начинающих профессионалов, которых мы готовы обучить с нуля.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border"
                >
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-primary rounded-2xl p-6 text-center">
              <div className="font-heading font-extrabold text-3xl text-primary-foreground">24/7</div>
              <p className="mt-1 text-sm text-primary-foreground/80">Поддержка партнёров</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}