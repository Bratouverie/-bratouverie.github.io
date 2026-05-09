import { motion } from "framer-motion";
import { Wallet, Headphones, BarChart3, Scale, Shield, RefreshCcw, TrendingUp } from "lucide-react";

const guarantees = [
  { icon: Wallet, title: "Гарантия вознаграждения", desc: "Размер вознаграждения зафиксирован в договоре. Выплаты — в течение 3 рабочих дней после успешного трудоустройства." },
  { icon: Headphones, title: "Поддержка и консультации", desc: "Личный менеджер, доступ к поддержке 24/6 по телефону, email, Telegram. Ответ — менее 1 часа." },
  { icon: BarChart3, title: "Стабильность работы", desc: "Постоянный поток вакансий. Средний партнёр находит 3-5 кандидатов в месяц. Никакого сезонного сокращения." },
  { icon: Scale, title: "Прозрачность и легальность", desc: "Официальный договор по законодательству РФ. Полная прозрачность расчётов. УПД и счёт-фактуры." },
  { icon: Shield, title: "Защита данных кандидатов", desc: "Строгая конфиденциальность. Все данные защищены в соответствии с ФЗПД РФ." },
  { icon: RefreshCcw, title: "Гарантия замены кандидата", desc: "Если кандидат не подошёл — замена без штрафов для партнёра." },
  { icon: TrendingUp, title: "Гарантия масштабирования", desc: "Доступ к более высокооплачиваемым вакансиям по мере роста. Бонусы и премии лучшим партнёрам." },
];

export default function GuaranteesSection() {
  return (
    <section id="guarantees" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Гарантии для партнёров
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Мы берём на себя риски и гарантируем прозрачное сотрудничество
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-4 font-heading font-semibold text-foreground">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}