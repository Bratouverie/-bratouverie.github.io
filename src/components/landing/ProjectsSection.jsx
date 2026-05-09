import { motion } from "framer-motion";

const IMG_LNR = "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/8a036465e_generated_cafe6559.png";
const IMG_ARCTIC = "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/2742e1ae9_generated_06d5bc78.png";
const IMG_KADRY = "https://media.base44.com/images/public/69ff1df49b6c35d9cfa0cce4/e540e2c3f_generated_a363c586.png";

const projects = [
  {
    id: 1,
    title: "Программа восстановления ЛНР-ДНР",
    status: "АКТИВНЫЙ ПРОЕКТ",
    statusColor: "bg-red-500",
    image: IMG_LNR,
    alt: "Современная инфраструктура и строительство",
    description: "Масштабная программа восстановления и развития. Требуются специалисты в области строительства, инженерии, логистики, управления проектами и социальной политики.",
    specialists: ["Инженеры строительные", "Строители и рабочие", "Управляющие проектами", "Логисты", "Электромонтёры", "Сварщики", "Водители", "Медицинские работники"],
    reward: "От 50 до 250 тыс. руб.",
  },
  {
    id: 2,
    title: "Арктический вызов",
    status: "ВЫСОКИЙ СПРОС",
    statusColor: "bg-green-500",
    image: IMG_ARCTIC,
    alt: "Арктический пейзаж с северным сиянием",
    description: "Национальная инициатива по развитию и освоению Арктического региона. Требуются специалисты высокого уровня, готовые к работе в сложных климатических условиях.",
    specialists: ["Геологи и нефтегазовики", "Буровики и буровые мастера", "Инженеры-технологи", "Экологи", "Специалисты по логистике", "Управленцы", "Медицинский персонал"],
    reward: "От 50 до 300 тыс. руб.",
  },
  {
    id: 3,
    title: 'Национальный проект «Кадры»',
    status: "ПОСТОЯННЫЙ ПОТОК",
    statusColor: "bg-yellow-500",
    image: IMG_KADRY,
    alt: "Современная учебная аудитория",
    description: "Федеральный проект, направленный на подготовку и переподготовку кадров для экономики России. Охватывает различные отрасли.",
    specialists: ["Тренеры и менторы", "Преподаватели", "Специалисты по развитию персонала", "Менеджеры по обучению", "Консультанты карьеры", "Координаторы программ"],
    reward: "От 50 до 150 тыс. руб.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Государственные проекты
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Работайте на самые важные для России инициативы
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white ${p.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Требуемые специалисты:</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.specialists.slice(0, 5).map((s) => (
                      <span key={s} className="inline-block px-2 py-1 bg-secondary text-xs rounded-md text-foreground">{s}</span>
                    ))}
                    {p.specialists.length > 5 && (
                      <span className="inline-block px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground">
                        +{p.specialists.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Вознаграждение</p>
                  <p className="font-heading font-bold text-lg text-primary">{p.reward}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}