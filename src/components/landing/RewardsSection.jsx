import { motion } from "framer-motion";

const tableData = [
  { cat: "Рабочие", role: "Сварщик", project: "ЛНР-ДНР", reward: "50 – 80 тыс.", demand: "Высокий", demandColor: "text-red-500" },
  { cat: "", role: "Электромонтёр", project: "Восстановление", reward: "55 – 90 тыс.", demand: "Высокий", demandColor: "text-red-500" },
  { cat: "", role: "Строитель", project: "Проекты", reward: "50 – 100 тыс.", demand: "Высокий", demandColor: "text-red-500" },
  { cat: "Средний уровень", role: "Мастер участка", project: "ЛНР-ДНР", reward: "100 – 150 тыс.", demand: "Средний", demandColor: "text-amber-500" },
  { cat: "", role: "Инженер-технолог", project: "Арктический вызов", reward: "120 – 180 тыс.", demand: "Высокий", demandColor: "text-green-600" },
  { cat: "", role: "Бригадир", project: "Восстановление", reward: "110 – 160 тыс.", demand: "Высокий", demandColor: "text-red-500" },
  { cat: "Высокий уровень", role: "Главный инженер", project: "Арктический вызов", reward: "150 – 250 тыс.", demand: "Высокий", demandColor: "text-green-600" },
  { cat: "", role: "Руководитель отдела", project: "ЛНР-ДНР", reward: "160 – 240 тыс.", demand: "Средний", demandColor: "text-amber-500" },
  { cat: "Топ-менеджмент", role: "Геолог-нефтяник", project: "Арктический вызов", reward: "200 – 300 тыс.", demand: "Высокий", demandColor: "text-green-600" },
  { cat: "", role: "Директор проекта", project: "ЛНР-ДНР", reward: "220 – 300 тыс.", demand: "Редко", demandColor: "text-amber-500" },
];

const examples = [
  { title: "Новичок", subtitle: "1 месяц после обучения", result: "1 сварщик (ЛНР-ДНР)", total: "65 000 ₽", color: "border-blue-500" },
  { title: "Средний партнёр", subtitle: "6 месяцев сотрудничества", result: "3 специалиста", total: "395 000 ₽", color: "border-green-500" },
  { title: "Топ-партнёр", subtitle: "2 года сотрудничества", result: "4 специалиста", total: "775 000 ₽", color: "border-amber-500" },
];

export default function RewardsSection() {
  return (
    <section id="rewards" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Сколько вы можете заработать
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Прозрачная таблица вознаграждений</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-x-auto"
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 text-left font-heading font-semibold rounded-tl-xl">Категория</th>
                <th className="px-4 py-3 text-left font-heading font-semibold">Должность</th>
                <th className="px-4 py-3 text-left font-heading font-semibold">Проект</th>
                <th className="px-4 py-3 text-left font-heading font-semibold">Вознаграждение</th>
                <th className="px-4 py-3 text-left font-heading font-semibold rounded-tr-xl">Спрос</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-foreground">{r.cat}</td>
                  <td className="px-4 py-3 text-foreground">{r.role}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.project}</td>
                  <td className="px-4 py-3 font-heading font-semibold text-foreground">{r.reward}</td>
                  <td className={`px-4 py-3 font-semibold ${r.demandColor}`}>{r.demand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {examples.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card rounded-2xl p-6 border-t-4 ${e.color} border border-border shadow-sm`}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{e.subtitle}</p>
              <h3 className="mt-1 font-heading font-bold text-lg text-foreground">{e.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{e.result}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Итого за месяц</p>
                <p className="font-heading font-extrabold text-2xl text-primary">{e.total}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}