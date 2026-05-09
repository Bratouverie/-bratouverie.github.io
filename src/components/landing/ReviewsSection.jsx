import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";

const reviews = [
  {
    name: "Елена Петрова",
    role: "Частный HR-специалист",
    region: "Москва",
    months: 8,
    rating: 5,
    text: "Я начала работать с Братоуверие-СНБ без опыта в подборе персонала для госпроектов. Компания предоставила полное обучение, и я за месяц разобралась в процессе. Сейчас у меня в среднем 3-4 успешных трудоустройства в месяц.",
    earned: "2 850 000 ₽",
    initials: "ЕП",
    color: "bg-blue-500",
  },
  {
    name: "Сергей Иванов",
    role: 'Директор HR-агентства "КадрПро"',
    region: "Санкт-Петербург",
    months: 14,
    rating: 5,
    text: "Партнёрство с Братоуверие-СНБ стало для нас новым источником дохода. Мы специализируемся на инженерных специалистах. Ежемесячно мы зарабатываем от 600 до 900 тысяч рублей только на этом направлении.",
    earned: "9 800 000 ₽",
    initials: "СИ",
    color: "bg-green-600",
  },
  {
    name: "Анна Сидорова",
    role: "Рекрутер-фрилансер",
    region: "Екатеринбург",
    months: 5,
    rating: 5,
    text: "Начав с нуля в рекрутменте, я нашла идеального партнёра. Менторское сопровождение на первых этапах было очень полезным. За 5 месяцев я уже зарабатываю по 200-300 тысяч рублей в месяц.",
    earned: "1 250 000 ₽",
    initials: "АС",
    color: "bg-purple-500",
  },
  {
    name: "Дмитрий Козлов",
    role: "Начальник отдела рекрутмента",
    region: "Новосибирск",
    months: 11,
    rating: 5,
    text: "Мы подключились к программе, чтобы диверсифицировать источники доходов HR-отдела. За 11 месяцев мы привлекли более 40 специалистов, заработав свыше 3 миллионов рублей.",
    earned: "3 200 000 ₽",
    initials: "ДК",
    color: "bg-amber-600",
  },
  {
    name: "Марина Углова",
    role: "Независимый рекрутер",
    region: "Казань",
    months: 3,
    rating: 4,
    text: "Хорошая компания для работы. Процесс чётко организован. За три месяца я уже заработала 180 тысяч рублей. Как новичок, я ещё учусь, но вижу, что с опытом доход будет расти.",
    earned: "180 000 ₽",
    initials: "МУ",
    color: "bg-rose-500",
  },
];

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const visible = 1;

  const next = () => setIdx((p) => (p + 1) % reviews.length);
  const prev = () => setIdx((p) => (p - 1 + reviews.length) % reviews.length);

  const r = reviews[idx];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Отзывы успешных партнёров
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">Смотрите, что говорят те, кто уже зарабатывает</p>
        </motion.div>

        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full ${r.color} flex items-center justify-center`}>
                <span className="text-white font-heading font-bold text-lg">{r.initials}</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {r.region}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {r.months} мес.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-0.5 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < r.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} />
              ))}
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic">&quot;{r.text}&quot;</p>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">Заработано за период</p>
              <p className="font-heading font-bold text-xl text-primary">{r.earned}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? "bg-primary w-6" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { val: "285 000 ₽", label: "Средний доход партнёра/мес" },
            { val: "3.5", label: "Трудоустройств/мес на партнёра" },
            { val: "4.8/5", label: "Удовлетворённость партнёров" },
            { val: "14 дней", label: "До первого заработка" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-white rounded-2xl p-5 border border-border">
              <p className="font-heading font-bold text-xl text-primary">{s.val}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}