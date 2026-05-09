import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Сколько нужно опыта, чтобы начать работать с вами?", a: "Опыт не требуется! Мы работаем как с опытными рекрутерами, так и с полными новичками. Предоставим полное обучение, менторинг и поддержку." },
  { q: "Нужна ли мне своя компания (ООО или ИП)?", a: "Вы можете работать как физическое лицо (самозанятый), ИП или ООО. Главное — готовность заключить договор и получать выплаты через официальные каналы." },
  { q: "Сколько времени нужно уделять работе?", a: "Полностью гибкий график. Минимум 5-10 часов в неделю (~60-120 тыс.), средне 20-30 часов (~250-400 тыс.), максимум 40+ часов (~700 тыс.+)." },
  { q: "Как долго ждать до первого заработка?", a: "От регистрации до первого заработка в среднем 2-4 недели при активной работе." },
  { q: "Какой размер вознаграждения я получу?", a: "От 50 000 до 300 000 рублей за одного трудоустроенного специалиста. Точный размер указывается в договоре." },
  { q: "Когда я получу выплату?", a: "Выплаты происходят в течение 10 рабочих дней после успешного трудоустройства кандидата." },
  { q: "Что если кандидат не прошёл испытательный срок?", a: "Мы предоставляем замену без штрафов в первые 30 дней. Это условие защищает вас от финансовых потерь." },
  { q: "Могу ли я работать с несколькими проектами одновременно?", a: "Да! Многие партнёры работают с несколькими проектами одновременно — ЛНР-ДНР, Арктический вызов и Национальный проект «Кадры»." },
  { q: "Какая поддержка мне будет оказана?", a: "Личный менеджер, обучающие материалы, еженедельные консультации, техподдержка, шаблоны и советы. Поддержка 24/6." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Найдите ответы на популярные вопросы</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}