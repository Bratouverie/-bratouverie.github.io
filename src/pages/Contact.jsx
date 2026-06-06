import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Контакты Братоуверие-СНБ — связаться со специалистами";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Контакты ООО «Братоуверие-СНБ». Свяжитесь с нашими специалистами по подбору кадров для госпроектов РФ. Телефон, Telegram, WhatsApp, email.");
  }, []);

  return (
    <div className="font-body">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
              <Link to="/" className="hover:text-foreground transition">Главная</Link>
              <span className="mx-2">/</span>
              <span>Контакты</span>
            </nav>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Контакты — Братоуверие-СНБ
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Свяжитесь с нашими специалистами любым удобным способом
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <p className="font-heading font-bold text-lg text-foreground">Николай (специалист)</p>
                <div className="mt-4 space-y-3">
                  <a href="tel:+79842620936" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <Phone className="w-4 h-4 text-primary" /> +7 (984) 262-09-36
                  </a>
                  <a href="https://t.me/nikolay_snb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <MessageCircle className="w-4 h-4 text-primary" /> Telegram: @nikolay_snb
                  </a>
                  <a href="https://wa.me/79223120735" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <p className="font-heading font-bold text-lg text-foreground">Виктор (специалист)</p>
                <div className="mt-4 space-y-3">
                  <a href="tel:+79191072244" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <Phone className="w-4 h-4 text-primary" /> +7 (919) 107-22-44
                  </a>
                  <a href="https://t.me/viktor_snb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <MessageCircle className="w-4 h-4 text-primary" /> Telegram: @viktor_snb
                  </a>
                  <a href="https://wa.me/79223120735" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm md:col-span-2">
                <p className="font-heading font-bold text-lg text-foreground">Общие контакты</p>
                <div className="mt-4 grid sm:grid-cols-3 gap-4">
                  <a href="mailto:contact@bratouverie.ru" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition">
                    <Mail className="w-4 h-4 text-primary" /> contact@bratouverie.ru
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" /> Пн-Пт: 09:00–18:00, Сб: 10:00–16:00
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" /> ООО «Братоуверие-СНБ», Россия
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}