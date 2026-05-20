"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Facebook,
  FileText,
  Gavel,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Переваги", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contacts" }
];

const services = [
  { title: "Автоправо", text: "Захист водіїв у справах про ДТП, адмінпротоколи, вилучення посвідчення та спори зі страховими.", icon: Scale },
  { title: "Стаття 130 КУпАП", text: "Оцінка протоколу, доказів огляду, відеофіксації та захист у суді щодо керування у стані сп'яніння.", icon: ShieldCheck },
  { title: "Кримінальне право", text: "Захист на етапі досудового розслідування, допитів, обшуків, повідомлення про підозру та судового розгляду.", icon: Gavel },
  { title: "Митне право", text: "Супровід справ про порушення митних правил, вилучення товарів, штрафи та оскарження рішень митниці.", icon: Landmark },
  { title: "Адміністративні справи", text: "Оскарження постанов, протоколів, штрафів та дій органів влади у справах, де важлива швидка реакція.", icon: FileText },
  { title: "Представництво в суді", text: "Побудова правової позиції, процесуальні документи та захист інтересів на всіх стадіях розгляду.", icon: BriefcaseBusiness }
];

const benefits = [
  "Індивідуальний підхід",
  "Швидке реагування",
  "Багаторічний досвід",
  "Прозорі умови співпраці"
];

const whyUs = [
  { value: "12+", label: "років юридичної практики" },
  { value: "840+", label: "успішно закритих справ" },
  { value: "97%", label: "клієнтів звертаються повторно" }
];

const reviews = [
  {
    name: "Ігор Мельник",
    role: "Водій",
    text: "Звернувся після складання протоколу за ст. 130. Адвокат уважно перевірив матеріали, пояснив ризики та підготував позицію для суду."
  },
  {
    name: "Марина Гнатюк",
    role: "Підприємиця",
    text: "Потрібна була допомога у митній справі. Отримала чіткий план дій, підготовлені документи та супровід без зайвої паніки."
  },
  {
    name: "Олександр Романюк",
    role: "Приватний клієнт",
    text: "У кримінальному провадженні було важливо швидко зрозуміти, що робити. Комунікація була спокійною, конкретною і по суті."
  },
  {
    name: "Василь Ковач",
    role: "Автовласник",
    text: "Допомогли у спорі після ДТП та з документами для страхової. Сподобалося, що кожен крок пояснювали людською мовою."
  }
];

const faqs = [
  {
    q: "Скільки коштує первинна консультація?",
    a: "Вартість залежить від складності питання. Після короткого звернення ми називаємо формат, тривалість і прозору ціну консультації."
  },
  {
    q: "Чи допомагаєте у справах за ст. 130 КУпАП?",
    a: "Так. Аналізую протокол, порядок огляду, відеозаписи, пояснення свідків та інші докази, після чого готую позицію для суду."
  },
  {
    q: "Чи гарантуєте конфіденційність?",
    a: "Так. Усі звернення, документи й переговори захищені адвокатською та комерційною таємницею."
  },
  {
    q: "Чи можна отримати консультацію онлайн?",
    a: "Так. Проводимо зустрічі телефоном або відеозв'язком, а документи безпечно передаємо в електронному форматі."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p> : null}
    </motion.div>
  );
}

export function LawFirmLanding() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
        <nav className="container-shell flex h-20 items-center justify-between" aria-label="Головна навігація">
          <a href="#top" className="group flex items-center gap-3" aria-label="Канівець Олександр Петрович">
            <span className="grid size-11 place-items-center border border-gold/45 bg-gold/10 text-gold shadow-glow">
              <Scale className="size-5" />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-wide">Канівець Олександр</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">Адвокат | свідоцтво №21/1279</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#consultation"
            className="hidden items-center gap-2 border border-gold/45 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink lg:flex"
          >
            Консультація
            <ArrowRight className="size-4" />
          </a>

          <button
            className="grid size-11 place-items-center border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Відкрити меню"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-white/10 bg-navy/98 px-4 py-5 lg:hidden">
            <div className="container-shell flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-base text-slate-200">
                  {item.label}
                </a>
              ))}
              <a href="#consultation" onClick={() => setOpen(false)} className="mt-2 bg-gold px-5 py-3 text-center font-semibold text-ink">
                Отримати консультацію
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section id="top" className="relative min-h-[92svh] bg-hero-photo bg-cover bg-center pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,106,.18),transparent_35%)]" />
        <div className="container-shell relative grid min-h-[calc(92svh-7rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <div className="mb-7 inline-flex items-center gap-3 border border-gold/35 bg-white/7 px-4 py-2 text-sm text-champagne backdrop-blur">
              <ShieldCheck className="size-4 text-gold" />
              Адвокат Канівець Олександр Петрович | свідоцтво №21/1279
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white md:text-6xl lg:text-7xl">
              Захист водіїв, кримінальні справи та митне право
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Допомагаю у справах за ст. 130 КУпАП, ДТП, кримінальних провадженнях та митних спорах
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#consultation" className="group inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 font-semibold text-ink shadow-premium transition hover:-translate-y-0.5 hover:bg-champagne">
                Отримати консультацію
                <ArrowRight className="size-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-3 border border-white/18 bg-white/8 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-gold/55 hover:text-gold">
                Наші послуги
                <ChevronDown className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-panel hidden p-7 shadow-premium lg:block"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-gold">Експертність у цифрах</p>
            <div className="grid gap-5">
              {whyUs.map((item) => (
                <div key={item.label} className="border border-white/10 bg-white/[0.04] p-5">
                  <span className="block text-4xl font-semibold text-white">{item.value}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="about" className="bg-white py-24 text-ink">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Про адвоката</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Захист у ситуаціях, де важливі час, докази та правильна стратегія</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Адвокат Канівець Олександр Петрович надає правову допомогу водіям, приватним клієнтам та підприємцям у кримінальних, адміністративних і митних справах. Особлива увага приділяється автоправу, захисту за ст. 130 КУпАП та представництву в суді.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Досвід роботи", "Практика у судових, адміністративних, кримінальних та митних справах."],
              ["Професійний підхід", "Будуємо позицію на доказах, процесуальних порушеннях і зрозумілому плані дій."],
              ["Гарантія конфіденційності", "Захищаємо інформацію клієнта на кожному етапі взаємодії."]
            ].map(([title, text], index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,.08)]"
              >
                <CheckCircle2 className="mb-5 size-7 text-gold" />
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-navy py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Послуги" title="Правова допомога у складних справах" text="Фокус на автоправі, захисті за ст. 130 КУпАП, кримінальних провадженнях, митних спорах та судовому представництві." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group border border-white/10 bg-white/[0.045] p-7 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/[0.075]"
                >
                  <div className="mb-7 grid size-12 place-items-center border border-gold/35 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-ink py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Чому обирають нас" title="Захист, що починається з уважного аналізу деталей" text="У справах щодо водіїв, кримінальних і митних питаннях дрібниць не буває: важливі строки, процедура, докази та якість підготовки до суду." />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-panel p-6"
              >
                <BadgeCheck className="mb-5 size-7 text-gold" />
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-ink">
        <div className="container-shell">
          <SectionHeading eyebrow="Відгуки клієнтів" title="Довіра, підтверджена практикою" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-5 flex gap-1 text-gold" aria-label="5 зірок">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="min-h-36 text-sm leading-7 text-slate-700">“{review.text}”</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="bg-midnight py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Консультація</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Запишіться на консультацію з юристом</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Опишіть ситуацію, і ми зв&rsquo;яжемося з вами, щоб запропонувати найкращий формат роботи: разову консультацію, підготовку документів або повний супровід.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-gold" /> Відповідь у робочий день</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-gold" /> Конфіденційно</span>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass-panel p-6 shadow-premium md:p-8"
          >
            <label className="mb-5 block">
              <span className="mb-2 block text-sm text-slate-300">Ім&rsquo;я</span>
              <input className="field px-4 py-4" type="text" name="name" placeholder="Ваше ім&rsquo;я" />
            </label>
            <label className="mb-5 block">
              <span className="mb-2 block text-sm text-slate-300">Телефон</span>
              <input className="field px-4 py-4" type="tel" name="phone" placeholder="+380 XX XXX XX XX" />
            </label>
            <label className="mb-6 block">
              <span className="mb-2 block text-sm text-slate-300">Повідомлення</span>
              <textarea className="field min-h-36 resize-y px-4 py-4" name="message" placeholder="Коротко опишіть ваше питання" />
            </label>
            <button type="button" className="group inline-flex w-full items-center justify-center gap-3 bg-gold px-7 py-4 font-semibold text-ink transition hover:bg-champagne">
              Надіслати заявку
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </section>

      <section id="faq" className="bg-ink py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="FAQ" title="Відповіді на часті питання" />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group border border-white/10 bg-white/[0.045] p-6 open:border-gold/45"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                  {faq.q}
                  <ChevronDown className="size-5 shrink-0 text-gold transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-white py-24 text-ink">
        <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Контакти</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Почнімо з розмови</h2>
            <div className="mt-8 grid gap-5 text-slate-700">
              <a className="flex items-center gap-4 transition hover:text-gold" href="tel:+380501074137"><Phone className="size-5" /> 050 107 41 37</a>
              <a className="flex items-center gap-4 transition hover:text-gold" href="mailto:avtopravo1@gmail.com"><Mail className="size-5" /> avtopravo1@gmail.com</a>
              <p className="flex items-center gap-4"><ShieldCheck className="size-5" /> Свідоцтво про право на заняття адвокатською діяльністю №21/1279</p>
              <p className="flex items-center gap-4"><MapPin className="size-5" /> м. Ужгород, вул. Загорська, 51</p>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#" aria-label="Facebook" className="grid size-11 place-items-center border border-slate-200 transition hover:border-gold hover:text-gold"><Facebook className="size-5" /></a>
              <a href="#" aria-label="LinkedIn" className="grid size-11 place-items-center border border-slate-200 transition hover:border-gold hover:text-gold"><Linkedin className="size-5" /></a>
              <a href="#" aria-label="Документи" className="grid size-11 place-items-center border border-slate-200 transition hover:border-gold hover:text-gold"><FileText className="size-5" /></a>
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,.12)]">
            <iframe
              title="Канівець Олександр Петрович на Google Maps"
              src="https://www.google.com/maps?q=%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0%2051&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink py-8">
        <div className="container-shell flex flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Канівець Олександр Петрович. Усі права захищені.</p>
          <div className="flex gap-5">
            <a href="#top" className="transition hover:text-gold">На початок</a>
            <a href="#consultation" className="transition hover:text-gold">Консультація</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
