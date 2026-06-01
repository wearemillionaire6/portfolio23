"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
  Sparkles,
  Zap,
  PhoneCall,
  Code,
  Workflow,
  Send,
  Database,
  Briefcase,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import IntegrationHero from "@/components/ui/integration-hero"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function DesignAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const triggerToast = (message: string) => {
    setToastMessage(message)
  }

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [toastMessage])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md ${scrollY > 50 ? "border-border" : "border-transparent"}`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-bold text-xl font-mono tracking-tighter">B.W.</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#work" className="text-sm font-mono text-muted-foreground transition-colors hover:text-foreground">
              Work
            </Link>
            <Link href="#about" className="text-sm font-mono text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="#contact" className="text-sm font-mono text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link href="#contact">
              <Button size="sm" className="rounded-3xl font-mono text-xs">
                Let's Talk
              </Button>
            </Link>
          </div>
          <button className="flex md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center space-x-3">
                <span className="font-bold text-xl font-mono tracking-tighter">B.W.</span>
              </Link>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto grid gap-3 pb-8 pt-6 px-4"
          >
            {["Work", "About", "Contact"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-3xl px-3 py-2 text-lg font-mono text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="flex flex-col gap-3 pt-4">
              <Link href="#contact" onClick={toggleMenu} className="w-full">
                <Button className="w-full rounded-3xl font-mono">Let's Talk</Button>
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-28 lg:py-36 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 border border-border/40 rounded-3xl bg-card/10">
            <div className="max-w-4xl py-12 md:py-20 space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-muted px-3 py-1 text-xs font-mono text-muted-foreground uppercase tracking-widest w-fit"
                  >
                    ⚡ Founder of HvacEQ.com & AI Automation Architect
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl/none font-heading leading-tight"
                  >
                    I build 24/7{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      Voice AI Receptionists
                    </span>{" "}
                    and automated pipelines.
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[750px] text-muted-foreground md:text-xl font-sans font-light leading-relaxed"
                  >
                    Hi, I'm Bhavesh Waghmare. I founded **HvacEQ**—a fully managed 24/7 autonomous phone call answer and scheduler service that saves lost revenues for HVAC companies by booking jobs directly to calendars.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row pt-4"
                >
                  <Link href="#contact">
                    <Button size="lg" className="rounded-3xl group font-mono text-sm">
                      Get In Touch
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    </Button>
                  </Link>
                  <Link href="#work">
                    <Button variant="outline" size="lg" className="rounded-3xl font-mono text-sm">
                      Selected Work
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack & Tooling Logos */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl bg-background/50 overflow-hidden"
          >
            <IntegrationHero />
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm font-medium"
                >
                  Capabilities
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Services I Offer
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-xl"
                >
                  Custom engineering focused on high-quality UX and automated efficiency.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-1 items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 max-w-5xl"
            >
              {[
                {
                  icon: <PhoneCall className="h-10 w-10 text-primary" />,
                  title: "Voice AI Receptionists",
                  description:
                    "Creating fully custom telephony call-agents using Retell AI, Vapi, and ElevenLabs. Integrates booking directly into Cal.com.",
                },
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "Next.js Frontend Deploys",
                  description:
                    "Building highly responsive, animated templates and functional dashboards on React 19, TypeScript, and Tailwind CSS v4.",
                },
                {
                  icon: <Workflow className="h-10 w-10 text-primary" />,
                  title: "Workflow Automations",
                  description:
                    "Connecting API webhooks, sync pipelines, and databases using self-hosted n8n workflows and Make.com configurations.",
                },
                {
                  icon: <Send className="h-10 w-10 text-primary" />,
                  title: "Outbound Lead Engines",
                  description:
                    "Scaffolding B2B lead generation scripts integrated with Apollo, Clay, Smartlead, Instantly, and HeyReach LinkedIn scripts.",
                },
                {
                  icon: <Database className="h-10 w-10 text-primary" />,
                  title: "Database Integrations",
                  description:
                    "Setting up secure database persistence, user authentication, and Stripe payments with Supabase server-only key policies.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-primary" />,
                  title: "Interactive Animations",
                  description:
                    "Designing scroll-linked visuals, bento structures, and dynamic transitions using Framer Motion and anime.js.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio/Work Bento Grid */}
        <section id="work" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 border border-border/40 rounded-3xl bg-card/10 p-8 md:p-12">
            
            {/* Live Selected Work */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-border/40 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading">Selected Work</h2>
                <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-mono text-sm">(5)</span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Lumen Dental Theme",
                    subtitle: "Medical Clinic Landing Page",
                    desc: "Vercel-deployed clinician landing template. Integrated with Supabase db persistence, Cal.com bookings, n8n webhook triggers, and verified Resend transactional mail.",
                    url: "https://lumen-dental-template.vercel.app"
                  },
                  {
                    title: "WanderTales App",
                    subtitle: "Travel Storytelling & Timelining",
                    desc: "Immersive Next.js traveler timelines featuring interactive slideshow layouts, destination filter quizzes, and Framer Motion viewport transitions.",
                    url: "https://wandertales.vercel.app"
                  },
                  {
                    title: "Aura Salon Portal",
                    subtitle: "Luxury Salon Scheduler UI",
                    desc: "React 19 client booking dashboard. Built with quiet luxury UI design (fraunces & inter fonts), 4-step wizard states, client dashboard templates, and admin metrics.",
                    url: "https://aura-salon-flax.vercel.app"
                  },
                  {
                    title: "HvacEQ AI Receptionist",
                    subtitle: "Voice Call Automation Service",
                    desc: "Fully managed call receptionist answering service for residential HVAC operators. Leverages Retell AI telephony, ElevenLabs ConvAI, and Cal.com appointment bookings.",
                    url: "https://hvaceq.com"
                  },
                  {
                    title: "Arch Cafe",
                    subtitle: "Architectural Coffee Shop",
                    desc: "Minimalist coffee shop platform featuring clean layouts, responsive menu displays, reservation state handling, and Tailwind hover animations.",
                    url: "https://arch-cafe-rouge.vercel.app"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeIn}
                    whileHover={{ y: -5 }}
                    className="group rounded-3xl border border-border/40 p-6 bg-background/50 hover:bg-background/80 hover:border-primary/50 transition-all flex flex-col justify-between"
                  >
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-full flex flex-col justify-between w-full"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{project.subtitle}</span>
                          <Briefcase className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-sans font-light">{project.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* In Development Projects */}
            <div className="space-y-8 mt-16">
              <div className="flex items-center gap-4 border-b border-border/40 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-heading text-muted-foreground">In Development</h2>
                <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-mono text-sm">(2)</span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Cold Outbound System",
                    subtitle: "Automated B2B Outbound Funnel",
                    desc: "Founder outreach automated engine sync. Integrates Apollo databases, HeyReach LinkedIn automation, Instantly email delivery, and Anthropic API for reply triage."
                  },
                  {
                    title: "AI Appointment Setter",
                    subtitle: "Conversational Lead Booking",
                    desc: "Autonomous conversational AI agent designed for WhatsApp, SMS, and web channels. Instantly responds to inquiries, qualifies prospects, and books appointments directly into your calendar."
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeIn}
                    whileHover={{ y: -5 }}
                    className="group rounded-3xl border border-border/40 p-6 bg-background/30 hover:bg-background/50 hover:border-primary/30 transition-all flex flex-col justify-between cursor-pointer"
                    onClick={() => triggerToast(`"${project.title}" is currently under development.`)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest">{project.subtitle}</span>
                        <Zap className="h-4 w-4 text-muted-foreground/60" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground/80">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-sans font-light">{project.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-24"
            >
              <blockquote className="max-w-3xl text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight text-foreground font-sans">
                “I love to automate, because I know the leverage it brings. Seeing systems work and driving revenue, that's what it's all about.”
              </blockquote>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-8 bg-border" />
                <cite className="not-italic font-mono text-xs text-primary uppercase tracking-wider">Bhavesh Waghmare</cite>
                <div className="h-px w-8 bg-border" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="grid gap-12 lg:grid-cols-2 items-start py-10">
              {/* Left Column: My Journey (top) & Other Info (bottom) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12 p-6"
              >
                {/* My Journey (top of left column) */}
                <div className="space-y-6">
                  <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm font-medium">About Me</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
                  <p className="text-muted-foreground md:text-lg leading-relaxed font-sans font-light">
                    I am the founder of **HvacEQ.com**, a leading voice AI automation agency helping HVAC businesses capture every missed call, qualify incoming residential service jobs, and schedule them automatically into job calendars.
                  </p>
                  <p className="text-muted-foreground md:text-lg leading-relaxed font-sans font-light">
                    By pairing clean frontend interfaces with solid automated systems (Next.js, Supabase, n8n, Twilio, and LLMs), I build robust software that bridges user intent with business efficiency, cutting lead leakage for service companies and high-growth founders.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="#contact">
                      <Button size="lg" className="rounded-3xl">
                        Get In Touch
                      </Button>
                    </Link>
                    <Link href="#work">
                      <Button variant="outline" size="lg" className="rounded-3xl">
                        My Builds
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Divider between My Journey and Other Info */}
                <hr className="border-border/40" />

                {/* Other Info: Experience Timeline (under my journey) */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-tight font-heading">Experience</h3>
                  <div className="space-y-6">
                    {[
                      {
                        date: "05/2024 - Current",
                        role: "Founder & AI Automation Architect",
                        company: "HvacEQ",
                        location: "Mumbai, India (Remote)"
                      },
                      {
                        date: "10/2023 - 04/2024",
                        role: "AI Workflow Consultant",
                        company: "Freelance",
                        location: "Mumbai, India"
                      },
                      {
                        date: "02/2023 - 09/2023",
                        role: "Frontend Developer & Systems Integrator",
                        company: "Self-Employed",
                        location: "Remote"
                      }
                    ].map((exp, idx) => (
                      <div key={idx} className="flex gap-4 border-l border-border/60 pl-4 relative group">
                        <div className="absolute -left-[6.5px] top-[7px] h-3 w-3 rounded-full bg-muted group-hover:bg-primary transition-colors border-2 border-background" />
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-muted-foreground">{exp.date}</span>
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{exp.role}</h4>
                          <div className="flex gap-2 text-xs text-muted-foreground font-mono">
                            <span>{exp.company}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Info: Direct Line card (under my journey) */}
                <div className="rounded-3xl border border-border/40 bg-muted/10 p-6 space-y-6">
                  <div>
                    <h4 className="font-bold text-xl">Direct Line</h4>
                    <p className="text-sm text-muted-foreground">
                      Let's build together. Call, email, or schedule a session on my calendar.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <a
                      href="tel:+919372915814"
                      className="flex items-center gap-3 group text-lg font-medium hover:text-primary transition-colors"
                    >
                      <div className="rounded-3xl bg-background border p-3 shadow-sm group-hover:border-primary transition-colors">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <span>+91 9372915814</span>
                    </a>
                    <a
                      href="mailto:bhavesh77yt@gmail.com"
                      className="flex items-center gap-3 group text-lg font-medium hover:text-primary transition-colors"
                    >
                      <div className="rounded-3xl bg-background border p-3 shadow-sm group-hover:border-primary transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <span>bhavesh77yt@gmail.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Profile Card (beside My Journey) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center w-full lg:sticky lg:top-24 p-6"
              >
                <Link
                  href="https://www.linkedin.com/in/bhavesh-hvaceq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl border bg-muted/20 flex flex-col items-center justify-center p-8 group hover:border-primary transition-all duration-300"
                >
                  <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden border bg-background shadow-lg transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/bhavesh-avatar.jpg"
                      alt="Bhavesh Waghmare"
                      fill
                      sizes="(max-width: 768px) 192px, 224px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest block mb-2">View LinkedIn Profile</span>
                    <h3 className="text-2xl font-bold text-white">Bhavesh Waghmare</h3>
                    <p className="text-primary font-medium text-sm mt-1">FOUNDER OF HVACEQ</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 border border-muted rounded-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 p-6"
            >
              <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm font-medium">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let's Work Together</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Ready to automate your workflows, set up vertical AI agents, or construct premium Next.js client portals? Get in touch.
              </p>
              <div className="mt-8 space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Mumbai, India</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Me</h3>
                    <p className="text-sm text-muted-foreground">bhavesh77yt@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 9372915814</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Calendly / Cal</h3>
                    <p className="text-sm text-muted-foreground">https://cal.com/wam-kyaygz/hvaceq-walkthrough</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 flex space-x-3">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/bhavesh-hvaceq/", label: "LinkedIn" },
                  { icon: <Github className="h-5 w-5" />, url: "https://github.com/wearemillionaire6", label: "GitHub" },
                  { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
                  { icon: <Instagram className="h-5 w-5" />, url: "#", label: "Instagram" }
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.url}
                      target={social.url !== "#" ? "_blank" : undefined}
                      className="rounded-3xl border p-2 text-muted-foreground hover:text-foreground hover:border-primary transition-colors flex items-center justify-center"
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border bg-background p-6 shadow-sm my-6"
            >
              <h3 className="text-xl font-bold">Send Me a Message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and I'll get back to you shortly.
              </p>
              <form className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-3xl" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-3xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-3xl" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] rounded-3xl" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full rounded-3xl">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 bg-background py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg font-mono tracking-tighter">B.W.</span>
            <span className="text-xs font-mono text-muted-foreground">/ Portfolio</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/bhavesh-hvaceq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:bhavesh77yt@gmail.com"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
            <Link
              href="tel:+919372915814"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Phone
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs font-mono text-muted-foreground">© {new Date().getFullYear()} Bhavesh. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-all flex items-center gap-1 group bg-transparent border-0 cursor-pointer"
            >
              Back to top 
              <ArrowRight className="h-3 w-3 -rotate-90 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border bg-background/80 backdrop-blur-md px-5 py-4 shadow-xl border-primary/20 max-w-sm"
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <div className="text-sm font-medium">
              {toastMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
