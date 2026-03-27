"use client";

import CalculadoraPlataformas from "@/components/CalculadoraPlataformas";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Clock3, ShieldCheck, Truck, X, ArrowRight, ChevronUp, MessageCircleMore, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5511999999999";
const INSTAGRAM_URL = "https://www.instagram.com/terraar.brasil/";
const INSTITUTIONAL_VIDEO_EMBED = "https://www.youtube.com/embed/a3NtvovVe5w?rel=0&modestbranding=1";

const fleet = [
  {
    title: "Plataformas Tesoura Compactas",
    model: "S0807AC",
    description: "Compacta, elétrica e silenciosa para espaços apertados, áreas internas e manutenção predial com 272 kg de capacidade.",
    image: "/images/IMG-20260223-WA0033.jpg",
  },
  {
    title: "Plataformas Tesoura Alta Capacidade",
    model: "S1412AC+",
    description: "Alto desempenho para trabalho em altura com até 13,8 m e capacidade de 408 kg para operações mais exigentes.",
    image: "/images/IMG-20260224-WA0026.jpg",
  },
  {
    title: "Modelos Elétricos Zero Emissão",
    model: "AC+",
    description: "Operação limpa, pneus não marcantes e excelente autonomia para ambientes industriais, galpões e centros logísticos.",
    image: "/images/IMG-20260219-WA0055.jpg",
  },
  {
    title: "Plataformas com Certificação IPAF",
    model: "IPAF",
    description: "Segurança, padronização operacional e confiança extra para equipes que precisam trabalhar em altura com responsabilidade.",
    image: "/images/IMG-20260223-WA0052.jpg",
  },
];

const gallery = [
  {
    image: "/images/20260218_194143.jpg",
    title: "Operação em altura",
    description: "Plataforma em uso para mostrar alcance, estabilidade e presença visual forte.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/images/IMG-20260219-WA0054.jpg",
    title: "S1412AC+",
    description: "Alta capacidade com visual robusto e foco em segurança.",
    className: "",
  },
  {
    image: "/images/IMG-20260224-WA0024.jpg",
    title: "Linha compacta",
    description: "Estrutura elétrica e pronta para operação em canteiros e galpões.",
    className: "",
  },
  {
    image: "/images/IMG-20260212-WA0061.jpg",
    title: "Frota real",
    description: "Equipamentos reais para reforçar confiança comercial na apresentação.",
    className: "md:col-span-2",
  },
];

const reasons = [
  {
    icon: Clock3,
    title: "Agilidade de atendimento",
    text: "Resposta rápida para locação, entrega e entrada em operação de plataformas tesoura elétricas em Jundiaí e região.",
  },
  {
    icon: ShieldCheck,
    title: "Equipamentos confiáveis",
    text: "Plataformas com foco em segurança em altura, certificação IPAF, operação estável e trabalho limpo com zero emissão.",
  },
  {
    icon: Truck,
    title: "Entrega no canteiro",
    text: "Logística planejada para indústria, manutenção, construção civil e armazéns com mobilização rápida no local da operação.",
  },
];

export default function Page() {
  const router = useRouter();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (activeGalleryIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGalleryIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((prev) => (prev === null ? 0 : (prev + 1) % gallery.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((prev) => (prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGalleryIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(Math.round(progress));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-white/5">
        <div
          className="h-full bg-[linear-gradient(90deg,#f99c2c,#ffb347,#f99c2c)] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[rgba(249,156,44,0.4)] bg-zinc-900 shadow-[0_0_30px_rgba(249,156,44,0.25)]">
              <Image
                src="https://instagram.fcgh51-1.fna.fbcdn.net/v/t51.82787-19/561175354_17872139979440356_8157841243592877380_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fcgh51-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2gEjpSGKTQSHSTsL11zxWcOdXR2a7SP0qjHP-oN4WhccbLMmdl6UdkWlYi0SDnxiIuwrnbUTkepBvHeu8v-A2Yt7&_nc_ohc=CHmoXZKy8CkQ7kNvwFUJMvg&_nc_gid=yUywZmOhPOPpy4ou785bzw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfwyPsX_Bhcmnxn5wabyY6Bp5KVSqQcR4TOls_0hAQV7hw&oe=69C327BF&_nc_sid=22de04"
                alt="Logo Terraar Brasil"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f99c2c]">Terraar Brasil</p>
              <p className="text-xs text-zinc-400">Plataformas elevatórias e linha amarela para locação</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <Link href="#frota" className="transition hover:text-[#f99c2c]">
              Equipamentos
            </Link>
            <Link href="#diferenciais" className="transition hover:text-[#f99c2c]">
              Diferenciais
            </Link>
            <Link href="#galeria" className="transition hover:text-[#f99c2c]">
              Galeria
            </Link>
          </nav>

          <Link href={WHATSAPP_URL} target="_blank" className="rounded-full bg-[#f99c2c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e08a21]">
            WhatsApp
          </Link>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#ece8df] pt-24 text-zinc-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,156,44,0.18),transparent_30%)]" />
          <div className="absolute inset-y-0 right-0 w-[58%] bg-[linear-gradient(135deg,rgba(255,255,255,0.6),rgba(255,255,255,0)_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(236,232,223,0),#ece8df)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid min-h-[calc(100svh-6rem)] items-center gap-10 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:py-12">
            <div className="order-2 max-w-xl lg:order-1">
              <span className="inline-flex rounded-full border border-[rgba(249,156,44,0.28)] bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.32em] text-[#c96f00] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                Plataformas elevatórias + linha amarela
              </span>
              <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-[5.3rem]">
                Máquinas para
                <span className="block text-[#f99c2c]">altura e obra pesada</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-zinc-700 sm:text-lg">
                Locação com leitura imediata de nicho: plataformas elevatórias e estrutura pronta para destacar linha amarela.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#formulario"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#f99c2c]"
                >
                  Solicitar cotação
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#frota"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-950/15 bg-white/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-950 transition hover:border-[#f99c2c] hover:bg-white"
                >
                  Ver equipamentos
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <article className="group relative min-h-[25rem] overflow-hidden rounded-[2.2rem] border border-black/10 bg-zinc-900 shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:min-h-[32rem]">
                  <Image
                    src="/images/IMG-20260224-WA0026.jpg"
                    alt="Plataforma elevatória em destaque"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-white">
                    Plataforma elevatória
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#f99c2c]">Destaque principal</p>
                    <h2 className="mt-3 max-w-md text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                      Altura, alcance e presença visual forte logo na entrada.
                    </h2>
                  </div>
                </article>

                <div className="grid gap-4">
                  <article className="relative min-h-[15rem] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_50px_rgba(0,0,0,0.12)]">
                    <Image
                      src="/images/IMG-20260223-WA0033.jpg"
                      alt="Plataforma tesoura em operação"
                      fill
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/0 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f99c2c]">Frota real</p>
                      <p className="mt-2 text-xl font-bold text-white">Visual técnico, imediato e comercial.</p>
                    </div>
                  </article>

                  <article className="relative min-h-[15rem] overflow-hidden rounded-[2rem] border border-dashed border-zinc-950/20 bg-[linear-gradient(135deg,#d7d2c9,#f5f2ec)] shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,156,44,0.2),transparent_35%)]" />
                    <div className="relative flex h-full flex-col justify-between p-6">
                      <div className="inline-flex w-fit rounded-full border border-zinc-950/10 bg-white/75 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-700">
                        Placeholder visual
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#c96f00]">Linha amarela</p>
                        <h3 className="mt-3 max-w-xs text-2xl font-black uppercase leading-tight text-zinc-950">
                          Espaço pronto para foto de escavadeira ou retroescavadeira.
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-700">
                          A estrutura da capa já acomoda a segunda imagem principal sem roubar o protagonismo das máquinas.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 border-t border-zinc-950/10 pt-5 text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600 sm:grid-cols-3">
            <div className="rounded-full bg-white/70 px-4 py-3 text-center">Plataformas elevatórias</div>
            <div className="rounded-full bg-white/70 px-4 py-3 text-center">Linha amarela em destaque</div>
            <div className="rounded-full bg-white/70 px-4 py-3 text-center">Locação para obra, indústria e manutenção</div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-header">
          <p className="section-kicker">Vídeo em destaque</p>
          <h2 className="section-title">Assista como a Terraar faz a diferença</h2>
          <p className="section-copy">
            Uma apresentação visual forte para gerar confiança logo nos primeiros segundos.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[rgba(249,156,44,0.2)] bg-zinc-900 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={INSTITUTIONAL_VIDEO_EMBED}
                title="Video institucional Terraar Brasil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="#formulario"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(249,156,44,0.4)] bg-[rgba(249,156,44,0.1)] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f99c2c] transition hover:bg-[#f99c2c] hover:text-white"
          >
            Quero atendimento rápido
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="frota" className="section-shell">
        <div className="section-header">
          <p className="section-kicker">Nossa Frota</p>
          <h2 className="section-title">Máquinas para cada etapa do trabalho em altura</h2>
          <p className="section-copy">
            Equipamentos reais, visual robusto e apresentação comercial à altura do seu serviço.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {fleet.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900/70">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-[rgba(249,156,44,0.3)] bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#f99c2c]">
                  {item.model}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#formulario"
            className="inline-flex items-center gap-2 rounded-full bg-[#f99c2c] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#e08a21]"
          >
            Solicitar cotação da frota
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CalculadoraPlataformas />

      <section id="diferenciais" className="section-shell">
        <div className="rounded-[2rem] border border-[rgba(249,156,44,0.2)] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-8 sm:p-10">
          <div className="section-header !max-w-3xl !px-0 !pb-0">
            <p className="section-kicker">Por que escolher a Terraar?</p>
            <h2 className="section-title">Quebra de objeção com credibilidade, rapidez e presença profissional</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f99c2c] text-white">
                  <Icon className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="#formulario"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(249,156,44,0.4)] bg-[rgba(249,156,44,0.1)] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f99c2c] transition hover:bg-[#f99c2c] hover:text-white"
            >
              Falar com um especialista
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="galeria" className="section-shell">
        <div className="section-header">
          <p className="section-kicker">Galeria</p>
          <h2 className="section-title">Obras reais, máquinas reais, presença real no canteiro</h2>
          <p className="section-copy">
            Fotografias de operações e equipamentos brasileiros para reforçar confiança visual na marca.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-6 md:grid-cols-4">
          {gallery.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActiveGalleryIndex(index)}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 text-left ${item.className}`}
            >
              <div className="relative h-full min-h-[220px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f99c2c]">Galeria</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">{item.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#formulario"
            className="inline-flex items-center gap-2 rounded-full bg-[#f99c2c] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#e08a21]"
          >
            Pedir proposta agora
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[rgba(249,156,44,0.5)] hover:bg-[rgba(249,156,44,0.1)]"
          >
            <Instagram className="h-4 w-4" />
            Siga a gente no Instagram
          </Link>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(249,156,44,0.2)] bg-[#f99c2c] px-8 py-12 text-zinc-950 shadow-[0_25px_80px_rgba(249,156,44,0.25)] sm:px-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-zinc-950/80">Fale com a Terraar</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
                Sua obra precisa de máquina pesada com resposta rápida.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-900/85 sm:text-lg">
                Receba atendimento direto no WhatsApp e avance com uma apresentação forte, moderna e pronta para converter.
              </p>
            </div>

            <form
              id="formulario"
              onSubmit={(event) => {
                event.preventDefault();
                router.push("/obrigado");
              }}
              className="rounded-[1.75rem] border border-zinc-950/10 bg-zinc-950 p-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f99c2c]">Solicite contato</p>
                <h3 className="mt-2 text-2xl font-bold">Formulário rápido</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Preencha e nossa equipe retorna com agilidade para indicar a plataforma ideal.
                </p>
              </div>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#f99c2c]"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#f99c2c]"
                />
                <select className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-[#f99c2c]">
                  <option className="bg-zinc-950">Tipo de plataforma</option>
                  <option className="bg-zinc-950">S0807AC</option>
                  <option className="bg-zinc-950">S1412AC+</option>
                  <option className="bg-zinc-950">Preciso de ajuda para escolher</option>
                </select>
                <textarea
                  placeholder="Conte rapidamente sua necessidade"
                  rows={4}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#f99c2c]"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f99c2c] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#e08a21]"
              >
                Enviar solicitação
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-zinc-500 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>Terraar Brasil • Aluguel de máquinas pesadas para terraplanagem em Jundiaí-SP</p>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <Link href={INSTAGRAM_URL} target="_blank" className="inline-flex items-center gap-2 text-[#f99c2c] transition hover:text-[#ffb347]">
              <Instagram className="h-4 w-4" />
              Siga a gente no Instagram
            </Link>
            <Link href={WHATSAPP_URL} target="_blank" className="text-[#f99c2c] transition hover:text-[#ffb347]">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </footer>

      {activeGalleryIndex !== null ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setActiveGalleryIndex(null)}
            aria-label="Fechar galeria"
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-[#f99c2c]"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setActiveGalleryIndex((activeGalleryIndex - 1 + gallery.length) % gallery.length)}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#f99c2c]"
          >
            <ChevronUp className="h-5 w-5 -rotate-90" />
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={gallery[activeGalleryIndex].image}
                alt={gallery[activeGalleryIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="border-t border-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f99c2c]">Galeria Terraar</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{gallery[activeGalleryIndex].title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{gallery[activeGalleryIndex].description}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveGalleryIndex((activeGalleryIndex + 1) % gallery.length)}
            aria-label="Próxima foto"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#f99c2c]"
          >
            <ChevronUp className="h-5 w-5 rotate-90" />
          </button>
        </div>
      ) : null}

      <Link
        href={WHATSAPP_URL}
        target="_blank"
        className="group fixed bottom-5 left-5 z-[70] flex items-center gap-3 rounded-full border border-white/10 bg-[#1f1f22]/95 px-4 py-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:scale-[1.02] hover:bg-[#252529]"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_0_0_8px_rgba(37,211,102,0.14)]">
          <MessageCircleMore className="h-6 w-6" />
        </span>
        <span className="hidden sm:block">
          <span className="block text-xs uppercase tracking-[0.25em] text-zinc-400">WhatsApp</span>
          <span className="block text-sm font-semibold">Fale com a Terraar</span>
        </span>
      </Link>

      <Link
        href="#top"
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(249,156,44,0.3)] bg-zinc-950/90 text-[#f99c2c] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#f99c2c] hover:text-white"
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="h-6 w-6" />
      </Link>
    </main>
  );
}
