import {
  ArrowRight,
  Mail,
  MessageCircle,
  Instagram,
  Monitor,
  Search,
  Calendar,
  TrendingUp,
  Sparkles,
  Star,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Bot,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const trustLogos = [
  "Northfield Plumbing",
  "Elite Fitness",
  "Urban Property",
  "Bloomfield Dental",
  "A1 Roofing",
];

const services = [
  {
    n: "01",
    title: "Website Design",
    desc: "Modern websites built with clean structure, premium visuals, and strong user experience.",
  },
  {
    n: "02",
    title: "Lead Generation",
    desc: "Forms, call-to-actions, landing sections, and conversion flow built to increase enquiries.",
  },
  {
    n: "03",
    title: "Effortless Online Booking",
    desc: "Let customers book your services anytime with a smooth, hassle-free experience.",
  },
];

const approach = [
  {
    n: "01",
    title: "Understand Your Business",
    desc: "We learn your services, audience, and goals.",
  },
  {
    n: "02",
    title: "Design & Structure",
    desc: "We create a layout built for trust and conversions.",
  },
  {
    n: "03",
    title: "Launch & Optimize",
    desc: "Your website goes live and starts generating leads.",
  },
];

const aiFeatures = [
  {
    title: "AI Chat Assistants",
    desc: "Instant replies 24/7 for website enquiries.",
  },
  {
    title: "Lead Follow-Up Automation",
    desc: "Automatically follow up with new leads so you never miss opportunities.",
  },
  {
    title: "Google Review Follow-Ups",
    desc: "AI follows up with happy customers and encourages 5★ reviews.",
  },
  {
    title: "Brand Recognition Growth",
    desc: "Build trust, visibility and authority with automated touchpoints.",
  },
];

const testimonials = [
  {
    name: "MG Barber Manchester",
    location: "Manchester, UK",
    quote:
      "Our new website instantly made us look more professional. We started getting more bookings within days.",
  },
  {
    name: "Jefe’s Barbers",
    location: "Local Barbershop",
    quote:
      "Simple, effective, and actually brings in leads. This was one of the best investments for our business.",
  },
  {
    name: "The Humble Barber 1972",
    location: "Barbershop",
    quote:
      "Super smooth process from start to finish. The design is clean, modern, and our clients love it.",
  },
];

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary w-fit">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

const Index = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center justify-end gap-2 py-2 text-sm sm:flex-row sm:gap-8">
          <a
            href="https://wa.me/447401093710"
            className="flex items-center gap-2 opacity-90 hover:opacity-100"
          >
            <MessageCircle className="h-4 w-4" /> +44 7401 09371
          </a>
          <a
            href="mailto:admin@jjwebdesigns.com"
            className="flex items-center gap-2 opacity-90 hover:opacity-100"
          >
            <Mail className="h-4 w-4" /> admin@jjwebdesigns.com
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/50 bg-white backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="https://jjwebdesigns.com">
            <img
              width="250"
              height="250"
              src="https://i0.wp.com/jjwebdesigns.com/wp-content/uploads/2026/04/Untitled-design-2026-04-28T094243.318.webp?fit=800%2C200&amp;ssl=1"
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-black transition-colors hover:text-blue-500"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="relative overflow-hidden border-b border-border/50"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="flex flex-col justify-center">
            <SectionEyebrow>Websites That Grow Your Business</SectionEyebrow>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Premium Websites That{" "}
              <span className="text-primary">Generate Leads</span> and Build
              Trust
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We design high-converting, mobile-friendly websites for local
              businesses—so you can attract more clients, stand out online, and
              grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-lg px-8 shadow-[var(--shadow-glow)]"
              >
                <a href="#contact">
                  Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg px-8"
              >
                <a href="#portfolio">View Our Work</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Zap, title: "Live in 7 Days", sub: "Fast & Reliable" },
                {
                  icon: TrendingUp,
                  title: "Built to Convert",
                  sub: "More Leads, More Sales",
                },
                {
                  icon: Star,
                  title: "5★ Rated",
                  sub: "Trusted by 50+ Businesses",
                },
              ].map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border/60 bg-card p-3 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-1.5 px-2 py-2">
                <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              </div>
              <div className="rounded-2xl border-2 border-primary/40 bg-white p-10">
                <div className="flex aspect-[4/3] items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-extrabold tracking-tight text-primary">
                      JJ
                    </div>
                    <div className="mt-2 text-2xl font-bold tracking-[0.2em] text-slate-800">
                      WEB DESIGNS
                    </div>
                    <div className="mt-1 text-xs font-medium tracking-widest text-slate-500">
                      DESIGN. DEVELOP. DELIVER.
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 pb-2 pt-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Website Package
                </div>
                <h3 className="mt-2 text-2xl font-bold">
                  Premium Business Website
                </h3>
                <div className="mt-2 text-5xl font-extrabold text-primary">
                  From £299
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: Monitor,
                      t: "Responsive Design",
                      s: "Looks perfect on every device",
                    },
                    {
                      icon: Search,
                      t: "SEO Ready",
                      s: "Built to get found on Google",
                    },
                    {
                      icon: Calendar,
                      t: "Booking Setup",
                      s: "Let clients book with ease",
                    },
                    {
                      icon: TrendingUp,
                      t: "Lead Focused",
                      s: "Turn visitors into enquiries",
                    },
                  ].map(({ icon: Icon, t, s }) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-border/60 bg-secondary/40 p-3 text-center"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-2 text-sm font-semibold">{t}</div>
                      <div className="text-xs text-muted-foreground">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 bg-background/40 backdrop-blur">
          <div className="container py-8">
            <div className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Trusted by Local Businesses
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base font-semibold text-muted-foreground/70">
              {trustLogos.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            High-Converting Websites for Growing Businesses
          </h2>
          <p className="mt-4 text-muted-foreground">
            Websites built to attract, impress, and turn visitors into paying
            customers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="text-sm font-bold tracking-widest text-primary/80">
                {s.n}
              </div>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Sparkles,
              t: "Premium Design",
              s: "Professional first impression",
            },
            {
              icon: TrendingUp,
              t: "Conversion Focused",
              s: "Built to generate enquiries",
            },
            {
              icon: Monitor,
              t: "Mobile Optimised",
              s: "Looks great on every device",
            },
          ].map(({ icon: Icon, t, s }) => (
            <div
              key={t}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="border-y border-border/50 bg-secondary/20 py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Our Approach</SectionEyebrow>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              We Design Websites That Actually Grow Your Business
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most websites just sit there. We build websites that work —
              designed to guide visitors, build trust, and turn clicks into real
              enquiries.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {approach.map((a) => (
              <div
                key={a.n}
                className="rounded-3xl border border-border/60 bg-card p-8"
              >
                <div className="text-5xl font-extrabold text-primary/80">
                  {a.n}
                </div>
                <h3 className="mt-4 text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Selected Work</SectionEyebrow>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Recent Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Jefe's Barbers",
              tag: "Barbershop · Booking",
              img: "https://i0.wp.com/jjwebdesigns.com/wp-content/uploads/2026/04/Screenshot-2026-04-28-at-11.02.24-AM.png?w=1200&ssl=1",
              href: "https://jefesbarbers.co.uk/barbers",
            },
            {
              title: "The Humble Barber 1972",
              tag: "Barbershop · Brand site",
              img: "https://i0.wp.com/jjwebdesigns.com/wp-content/uploads/2026/04/Screenshot-2026-04-28-at-11.06.03-AM.webp?w=1200&ssl=1",
              href: "https://thehumblebarber1972.co.uk/",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">
                    {p.tag}
                  </div>
                  <div className="mt-1 text-xl font-bold">{p.title}</div>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-10 text-center">
          <SectionEyebrow>Built for Growth</SectionEyebrow>
          <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold sm:text-4xl">
            Your Website Should Feel Like Your Best Salesperson
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A good website does more than look nice. It explains your value,
            builds confidence, answers questions, and makes it easy for people
            to contact you.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", t: "Clear Message" },
              { n: "02", t: "Strong Trust" },
              { n: "03", t: "Easy Enquiry" },
            ].map((i) => (
              <div
                key={i.n}
                className="rounded-2xl border border-border/60 bg-background/60 p-5"
              >
                <div className="text-sm font-bold text-primary">{i.n}</div>
                <div className="mt-1 font-semibold">{i.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#contact">Plan My Website</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/20 py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionEyebrow>AI Automation Systems</SectionEyebrow>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Automate Your Business With{" "}
              <span className="text-primary">Smart AI</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We don't just build websites — we create AI systems that handle
              enquiries, follow-ups, bookings, and repetitive tasks
              automatically.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our AI can also follow up with customers, encourage 5★ Google
              reviews, and help your business build stronger brand recognition,
              trust, and visibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aiFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border/60 bg-card p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8 rounded-full px-8">
              <a href="#contact">
                Ask About AI Automation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">New Lead Captured</div>
                  <div className="text-xs text-muted-foreground">
                    just now · website chat
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                AI replied instantly, qualified the lead, and sent a booking
                link.
              </p>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">
                    Google Review Follow-Up Sent
                  </div>
                  <div className="text-xs text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                AI checked in with a happy customer and guided them to leave a
                review.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/15 to-transparent p-5 text-sm font-semibold">
              <span>Website Chat</span>
              <ArrowRight className="h-4 w-4 text-primary" />
              <span>CRM</span>
              <ArrowRight className="h-4 w-4 text-primary" />
              <span>Review Request</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Client Results</SectionEyebrow>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real feedback from clients who upgraded their online presence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-border/60 bg-card p-7"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">"{t.quote}"</p>
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-border/50 py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Start Your Project</SectionEyebrow>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Get Your Free Website Quote
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us what your business needs and we'll help you build a modern
              website that actually brings in leads.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:admin@jjwebdesigns.com"
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </div>
                  <div className="font-semibold">admin@jjwebdesigns.com</div>
                </div>
              </a>
              <a
                href="https://wa.me/447949989361"
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </div>
                  <div className="font-semibold">+44 7949 989361</div>
                </div>
              </a>
              <a
                href="https://instagram.com/jjwebdesigns"
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Instagram
                  </div>
                  <div className="font-semibold">@jjwebdesigns</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(
                "Website enquiry from " + (data.get("name") || ""),
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:admin@jjwebdesigns.com?subject=${subject}&body=${body}`;
            }}
            className="rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your Name"
                className="rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className="rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
              />
            </div>
            <input
              name="business"
              placeholder="Business Name"
              className="mt-4 w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
            />
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              className="mt-4 w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:border-primary"
            />
            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full shadow-[var(--shadow-glow)]"
            >
              Send Request <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> We typically
              reply within a few hours.
            </div>
          </form>
        </div>
      </section>

      <section className="container py-24 text-center">
        <SectionEyebrow>Let's Work Together</SectionEyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          Build a Website That Brings You Clients
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We design clean, modern websites that make your business look
          professional, build trust, and turn visitors into real enquiries.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-lg px-8 shadow-[var(--shadow-glow)]"
          >
            <a href="#contact">Get Free Quote</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-lg px-8"
          >
            <a href="#portfolio">View Portfolio</a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-secondary/30">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <div>
            <span className="font-bold text-foreground">
              <span className="text-primary">JJ</span> Web Designs
            </span>{" "}
            © {new Date().getFullYear()} — Design. Develop. Deliver.
          </div>
          <div className="flex gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
