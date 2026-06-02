import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from "@/api/base44Client";
import { CheckCircle, ExternalLink, Send } from "lucide-react";

const specialists = [
  {
    id: "nikolay",
    name: "Николай",
    role: "Руководитель направления рекрутинга",
    photo: "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/3f3f46b36_1.png",
    desc: "Опытный профессионал с более чем 15 годами в сфере подбора персонала. Специализируется на координации работы с партнёрами-рекрутерами и управлении крупными проектами. Его подход — структурированный и системный. Помогает рекрутерам разобраться в требованиях вакансий, предоставляет чёткие критерии отбора и оперативно даёт обратную связь. Лучше всего контактировать для обсуждения стратегических вопросов и долгосрочного сотрудничества.",
  },
  {
    id: "viktoriya",
    name: "Виктория",
    role: "Координатор по работе с партнёрами",
    photo: "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/8aa2e528a_2.png",
    desc: "Творческий и коммуникабельный специалист с опытом более 12 лет в рекрутинге. Сильная сторона — умение находить общий язык с рекрутерами и создавать комфортные условия для работы. Фокусируется на построении долгосрочных отношений, готова делиться опытом. Отличается позитивным настроением и гибкостью. Обращайтесь, когда нужна поддержка, совет или дружеское общение по рабочим вопросам.",
  },
  {
    id: "viktor",
    name: "Виктор",
    role: "Менеджер по развитию партнёрства",
    photo: "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/e96c83d6b_3.png",
    desc: "Динамичный специалист с 6–7 годами опыта работы в рекрутинге. Подход — энергичный и ориентированный на результат. Отлично разбирается в актуальных вакансиях, быстро реагирует на запросы и всегда готов помочь рекрутерам найти нужный проект. Специализируется на работе со средним и высокотехнологичным сектором. Контактируйте для получения оперативной информации о новых вакансиях.",
  },
  {
    id: "anna",
    name: "Анна",
    role: "HR-консультант",
    photo: "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/d25311287_4.png",
    desc: "Молодой, энергичный специалист с опытом 3–4 года в области рекрутинга и подбора персонала. Подход — инновационный и ориентированный на технологии. Активно использует новые инструменты, всегда открыта к идеям от партнёров. Отлично подходит для работы с молодыми специалистами и стартап-проектами. Обращайтесь, если ищете свежий взгляд и готовы к экспериментам.",
  },
];

function ContactForm({ preselected }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", specialist: preselected || "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.specialist) return;
    setSubmitting(true);
    await base44.entities.PartnerLead.create({
      name: form.name,
      phone: form.phone,
      email: form.email,
      description: `Специалист: ${form.specialist}. ${form.message}`,
    });
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
        <h3 className="mt-4 font-heading font-bold text-lg text-foreground">Сообщение отправлено!</h3>
        <p className="mt-2 text-muted-foreground text-sm">Специалист свяжется с вами в ближайшее рабочее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-xs">Ваше имя *</Label>
          <Input placeholder="Иван Иванов" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <Label className="text-xs">Телефон *</Label>
          <Input placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
      </div>
      <div>
        <Label className="text-xs">Email *</Label>
        <Input type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <Label className="text-xs">Выберите специалиста *</Label>
        <Select value={form.specialist} onValueChange={(v) => setForm({ ...form, specialist: v })}>
          <SelectTrigger><SelectValue placeholder="Кому направить сообщение?" /></SelectTrigger>
          <SelectContent>
            {specialists.map((s) => (
              <SelectItem key={s.id} value={s.name}>{s.name} — {s.role}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Ваш вопрос</Label>
        <Textarea placeholder="Опишите ваш вопрос или цель обращения..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} />
      </div>
      <Button
        type="submit"
        disabled={submitting || !form.name || !form.phone || !form.email || !form.specialist}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold py-5"
      >
        <Send className="w-4 h-4 mr-2" />
        {submitting ? "Отправка..." : "Отправить сообщение"}
      </Button>
    </form>
  );
}

export default function ContactsSection() {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  return (
    <section id="contacts" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main site banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-primary rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-heading font-bold text-lg text-primary-foreground">Официальный сайт компании</p>
            <p className="mt-1 text-primary-foreground/80 text-sm max-w-xl">
              Полные контакты, директорат, подробная информация о проектах и документация размещены на главном сайте ООО «Братоуверие-СНБ»
            </p>
          </div>
          <a
            href="https://bratouverie-snb.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-heading font-semibold px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Перейти на сайт
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Выберите специалиста и напишите напрямую</p>
        </motion.div>

        {/* Specialists grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={s.photo} alt={s.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="font-heading font-bold text-foreground">{s.name}</p>
                <p className="text-xs text-primary font-medium mt-0.5">{s.role}</p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Button
                  onClick={() => {
                    setSelectedSpecialist(s.name);
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="outline"
                  className="mt-4 w-full text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
                >
                  Написать {s.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-card rounded-2xl border border-border shadow-sm p-8 max-w-2xl mx-auto"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">Форма обратной связи</h3>
          <ContactForm preselected={selectedSpecialist} />
        </motion.div>
      </div>
    </section>
  );
}