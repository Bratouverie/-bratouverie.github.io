import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const contacts = [
  {
    name: "Николай (специалист)",
    phone: "+7 (984) 262-09-36",
    phoneLink: "tel:+79842620936",
    telegram: "@nikolay_snb",
    telegramLink: "https://t.me/nikolay_snb",
    whatsapp: "https://wa.me/79223120735",
  },
  {
    name: "Виктор (специалист)",
    phone: "+7 (919) 107-22-44",
    phoneLink: "tel:+79191072244",
    telegram: "@viktor_snb",
    telegramLink: "https://t.me/viktor_snb",
    whatsapp: "https://wa.me/79223120735",
  },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Мы готовы ответить на все вопросы</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              <p className="font-heading font-bold text-lg text-foreground">{c.name}</p>
              <div className="mt-4 space-y-3">
                <a href={c.phoneLink} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                  <Phone className="w-4 h-4 text-primary" /> {c.phone}
                </a>
                <a href={c.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                  <MessageCircle className="w-4 h-4 text-primary" /> Telegram: {c.telegram}
                </a>
                <a href={c.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                  <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm"
          >
            <p className="font-heading font-bold text-lg text-foreground">Общие контакты</p>
            <div className="mt-4 space-y-3">
              <a href="mailto:contact@bratouverie.ru" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                <Mail className="w-4 h-4 text-primary" /> contact@bratouverie.ru
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" /> Пн-Пт: 09:00-18:00, Сб: 10:00-16:00
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> ООО &quot;Братоуверие-СНБ&quot;, Россия
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}