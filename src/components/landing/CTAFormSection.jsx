import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { base44 } from "@/api/base44Client";
import { Send, CheckCircle, Phone, MessageCircle, Rocket } from "lucide-react";

const miniSteps = [
  { icon: Send, label: "Заполните форму" },
  { icon: Phone, label: "Звонок менеджера" },
  { icon: Rocket, label: "Старт работы!" },
];

export default function CTAFormSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", region: "", experience: "", description: "" });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed || !form.name || !form.phone || !form.email) return;
    setSubmitting(true);
    await base44.entities.PartnerLead.create(form);
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <section id="cta" className="py-20 sm:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-foreground">
              Готовы начать зарабатывать?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg">
              Присоединяйтесь к сети успешных партнёров Братоуверие-СНБ
            </p>

            <div className="mt-10 space-y-6">
              {miniSteps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50">Шаг {i + 1}</p>
                    <p className="font-heading font-semibold text-primary-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {success ? (
              <div className="bg-white rounded-2xl p-10 text-center shadow-xl">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="mt-4 font-heading font-bold text-xl text-foreground">Заявка отправлена!</h3>
                <p className="mt-2 text-muted-foreground">Наш менеджер свяжется с вами в течение 2-3 часов в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-4">
                <h3 className="font-heading font-bold text-lg text-foreground">Заполните форму регистрации</h3>
                <div>
                  <Label className="text-xs">Ваше имя *</Label>
                  <Input placeholder="Иван Иванов" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <Label className="text-xs">Телефон *</Label>
                  <Input placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <Label className="text-xs">Email *</Label>
                  <Input type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label className="text-xs">Регион</Label>
                  <Input placeholder="Москва" value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} />
                </div>
                <div>
                  <Label className="text-xs">Опыт в подборе персонала</Label>
                  <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
                    <SelectTrigger><SelectValue placeholder="Выберите" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Нет опыта">Нет опыта</SelectItem>
                      <SelectItem value="1-3 года">1-3 года</SelectItem>
                      <SelectItem value="3-5 лет">3-5 лет</SelectItem>
                      <SelectItem value="5+ лет">5+ лет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Краткое описание</Label>
                  <Textarea placeholder="Расскажите о себе..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox checked={agreed} onCheckedChange={setAgreed} id="agree" />
                  <label htmlFor="agree" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                    Я согласен с условиями договора и политикой конфиденциальности
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={submitting || !agreed || !form.name || !form.phone || !form.email}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold py-5"
                >
                  {submitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}