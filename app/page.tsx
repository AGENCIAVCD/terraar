"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Building2,
  ChevronUp,
  Drill,
  Instagram,
  MessageCircleMore,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5511999999999";
const INSTAGRAM_URL = "https://www.instagram.com/terraar.brasil/";
const INSTITUTIONAL_VIDEO_EMBED = "https://www.youtube.com/embed/a3NtvovVe5w?rel=0&modestbranding=1";

const fleetCards = [
  {
    title: "Plataforma Tesoura Compacta",
    badge: "S0807AC",
    description: "Ideal para manutenção, instalações e operação em áreas internas com agilidade e segurança.",
    images: ["/images/IMG-20260223-WA0033.jpg"],
  },
  {
    title: "Plataforma Tesoura Alta Capacidade",
    badge: "S1412AC+",
    description: "Mais altura e capacidade de carga para equipes que precisam de produtividade com estabilidade.",
    images: ["/images/IMG-20260224-WA0026.jpg"],
  },
  {
    title: "Modelo Elétrico Zero Emissão",
    badge: "AC+",
    description: "Solução limpa para galpões, indústrias e centros logísticos que exigem operação silenciosa.",
    images: ["/images/IMG-20260219-WA0055.jpg"],
  },
  {
    title: "Plataformas com Certificação IPAF",
    badge: "IPAF",
    description: "Equipamentos preparados para operações que exigem padrão, segurança e confiança na contratação.",
    images: ["/images/IMG-20260223-WA0052.jpg"],
  },
];

const reasons = [
  {
    icon: Truck,
    title: "Entregamos a máquina diretamente no seu canteiro, com agilidade",
    text: "Caminhões equipados e operação preparada para mobilizar máquinas com rapidez e previsibilidade.",
  },
  {
    icon: Wrench,
    title: "Suporte e oficina móvel",
    text: "Suporte em campo para resolução rápida de problemas e manter sua obra rodando.",
  },
  {
    icon: ShieldCheck,
    title: "Equipamentos padronizados que transmitem confiança desde o primeiro contato",
    text: "Máquinas bem cuidadas para garantir mais segurança na sua contratação.",
  },
];

const gallery = [
  {
    image: "/images/frota-pesada/caminhao-comboio-vw-constellation-24280.jpeg",
    title: "Caminhão comboio para manter sua obra rodando",
    description: "Suporte em campo para reduzir paradas e manter o ritmo da sua operação.",
    className: "sm:col-span-2 xl:col-span-2 xl:row-span-2",
    icon: Wrench,
  },
  {
    image: "/images/frota-pesada/caminhao-tanque-patio-maquinas-terraar.jpeg",
    title: "Estrutura própria para atender sua obra com agilidade",
    description: "Frota e apoio preparados para entregar a máquina certa sem complicação.",
    className: "xl:row-span-2",
    icon: Building2,
  },
  {
    image: "/images/frota-pesada/liugong-764-retroescavadeira-frontal.jpeg",
    title: "LiuGong 764 - Retroescavadeira",
    description: "Ideal para serviços de escavação, carga e apoio com rapidez no canteiro.",
    className: "",
    icon: Drill,
  },
  {
    image: "/images/frota-pesada/liugong-838t-pa-carregadeira-vista-lateral-frontal.jpeg",
    title: "Pá Carregadeira LiuGong 838T",
    description: "Máquina pronta para carregar, movimentar material e ganhar produtividade na obra.",
    className: "",
    icon: Drill,
  },
  {
    image: "/images/frota-pesada/liugong-908e-vista-conjunto-caminhao-maquina.jpeg",
    title: "Mini Escavadeira entregue pronta para entrar em serviço",
    description: "Receba a máquina no local com mais rapidez e menos atraso na mobilização.",
    className: "sm:col-span-2 xl:col-span-1",
    icon: Truck,
  },
  {
    image: "/images/frota-pesada/liugong-915e-vista-frontal-angulada.jpeg",
    title: "LiuGong 915E - Escavadeira",
    description: "Potência para frentes mais exigentes com confiança e desempenho no dia a dia.",
    className: "",
    icon: Drill,
  },
  {
    image: "/images/frota-pesada/liugong-9035e-terraar-frontal-com-concha.jpeg",
    title: "LiuGong 9035E - Mini Escavadeira",
    description: "Compacta, prática e pronta para obras urbanas e serviços com pouco espaço.",
    className: "",
    icon: Drill,
  },
  {
    image: "/images/frota-pesada/patio-maquinas-liugong-838t-bobcat-outras.jpeg",
    title: "Variedade de máquinas para atender diferentes etapas da obra",
    description: "Mais opções para encontrar a solução certa com rapidez e segurança.",
    className: "sm:col-span-2 xl:col-span-2",
    icon: Building2,
  },
  {
    image: "/images/frota-pesada/liugong-915e-canteiro-entardecer.jpeg",
    title: "Escavadeira Hidraulica LiuGong 915E",
    description: "Escavadeira hidraulica LiuGong 915E da frota TERRAAR estacionada em canteiro de obras.",
    className: "xl:row-span-2",
    icon: Drill,
  },
  {
    image: "/images/frota-pesada/liugong-6112e-rolo-compactador-vista-traseira.jpeg",
    title: "Rolo Compactador LiuGong 6112E",
    description: "Rolo compactador LiuGong 6112E da TERRAAR pronto para compactacao em servicos de terraplenagem.",
    className: "",
    icon: Drill,
  },
  {
    image: "/images/frota-pesada/frota-escavadeira-rolo-pa-carregadeira-operacao.jpeg",
    title: "Escavadeira, Rolo Compactador e Pa Carregadeira",
    description: "Frota de maquinario pesado da TERRAAR em operacao no canteiro de obras, incluindo escavadeira LiuGong 915E.",
    className: "sm:col-span-2 xl:col-span-2",
    icon: Building2,
  },
  {
    image: "/images/frota-pesada/retroescavadeira-rolo-compactador-terraplenagem-2.jpeg",
    title: "Retroescavadeira e Rolo Compactador",
    description: "Retroescavadeira LiuGong e rolo compactador pe de carneiro da TERRAAR preparados para servico de terraplenagem.",
    className: "",
    icon: Building2,
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

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[rgba(244,239,231,0.82)] text-zinc-950 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#top" className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[rgba(249,156,44,0.32)] bg-white shadow-[0_12px_32px_rgba(249,156,44,0.18)]">
              <Image src="/images/terraar-logo.jpg" alt="Logo Terraar Brasil" fill sizes="48px" className="object-cover" priority />
            </div>
            <div className="min-w-0">
              <p className="truncate font-[family:var(--font-headline)] text-lg font-bold uppercase tracking-[0.16em] text-[#d47a12] sm:text-2xl sm:tracking-[0.24em]">
                <span className="sm:hidden">Terraar</span>
                <span className="hidden sm:inline">Terraar Brasil</span>
              </p>
              <p className="hidden text-xs text-zinc-600 sm:block">Locação de plataformas elevatórias para obra, indústria e manutenção</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-700 md:flex">
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

          <Link
            href={WHATSAPP_URL}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-[#f99c2c] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_32px_rgba(249,156,44,0.28)] transition hover:bg-[#e08a21]"
          >
            WhatsApp
          </Link>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[var(--hero-surface)] pt-[5.25rem] text-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,156,44,0.22),transparent_28%),linear-gradient(118deg,#f7f3ec_0%,#f4f0e9_44%,#ece6dd_100%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[60%] lg:block">
          <div className="hero-grid h-full w-full" />
        </div>
        <div className="absolute left-[-8rem] top-[18%] h-52 w-52 rounded-full bg-[#f99c2c]/12 blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute bottom-[-1rem] right-[-8rem] h-[18rem] w-[30rem] opacity-[0.18] sm:right-[-4rem] sm:opacity-[0.24] lg:hidden">
          <Image src="/images/boom-lift-hero.png" alt="" fill sizes="100vw" className="object-contain object-right" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(244,239,231,0),var(--hero-surface))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 py-10 lg:min-h-[calc(100svh-5.25rem)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-4 lg:py-0">
            <div className="relative z-10 max-w-xl">
              <span
                className="hero-reveal inline-flex rounded-full border border-[rgba(249,156,44,0.22)] bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-[#c96f00] shadow-[0_12px_34px_rgba(0,0,0,0.06)]"
                style={{ animationDelay: "0ms" }}
              >
                Plataformas elevatórias para locação
              </span>

              <p
                className="hero-reveal mt-6 hidden text-xs font-bold uppercase tracking-[0.42em] text-zinc-500 sm:mt-8 sm:block sm:text-sm"
                style={{ animationDelay: "90ms" }}
              >
                Receba a máquina certa no seu canteiro, com logística própria e suporte técnico em campo.
              </p>

              <h1
                className="hero-reveal mt-5 font-[family:var(--font-headline)] text-[2.15rem] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-zinc-950 sm:mt-3 sm:text-[3.3rem] lg:text-[4.05rem]"
                style={{ animationDelay: "170ms" }}
              >
                Máquinas pesadas
                <span className="block">prontas para obra</span>
                <span className="mt-3 block text-[0.62em] leading-[0.96] tracking-[-0.02em] text-[#f99c2c] sm:text-[0.58em]">
                  com entrega rápida
                  <span className="block">e zero atraso.</span>
                </span>
              </h1>

              <p
                className="hero-reveal mt-6 max-w-lg text-base leading-8 text-zinc-700 sm:text-lg"
                style={{ animationDelay: "250ms" }}
              >
                Equipamentos revisados prontos para entrar em operação no mesmo dia.
              </p>

              <div className="hero-reveal mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "330ms" }}>
                <Link
                  href="#galeria"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#f99c2c]"
                >
                  Ver máquinas disponíveis agora
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-950/15 bg-white/75 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-950 transition hover:border-[#f99c2c] hover:bg-white"
                >
                  Receber orçamento rápido no WhatsApp
                </Link>
              </div>
            </div>

            <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-[41rem] xl:min-h-[44rem]">
              <div className="absolute left-[10%] top-[12%] h-48 w-48 rounded-full bg-[#f99c2c]/18 blur-3xl sm:h-64 sm:w-64 lg:left-[18%] lg:top-[10%] lg:h-80 lg:w-80" />
              <div className="absolute inset-x-[12%] bottom-[10%] h-9 rounded-full bg-black/20 blur-3xl lg:inset-x-[18%] lg:bottom-[12%]" />

              <div className="absolute inset-0 flex items-end justify-end lg:items-center">
                <div className="hero-machine-shell relative w-full max-w-[54rem] lg:translate-x-6 lg:translate-y-6 xl:translate-x-0">
                  <div className="hero-machine-float">
                    <Image
                      src="/images/boom-lift-hero.png"
                      alt="Plataforma elevatória articulada Terraar Brasil"
                      width={1152}
                      height={804}
                      priority
                      sizes="(max-width: 1024px) 100vw, 62vw"
                      className="h-auto w-full object-contain object-right drop-shadow-[0_40px_38px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-header">
          <p className="section-kicker">Veja como funciona nossa operação na prática</p>
          <h2 className="section-title">Veja como a Terraar atende sua obra do início ao fim.</h2>
          <p className="section-copy">
            Entenda como entregamos, operamos e mantemos sua obra rodando sem atraso.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[rgba(255,187,71,0.2)] bg-zinc-900 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
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
      </section>

      <section id="frota" className="section-shell">
        <div className="section-header">
          <p className="section-kicker">Plataformas elevatórias</p>
          <h2 className="section-title">Veja as plataformas disponíveis para trabalho em altura na sua obra.</h2>
          <p className="section-copy">
            Modelos compactos, elétricos e de alta capacidade para manutenção, instalação, indústria e operação logística.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-4">
          {fleetCards.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <div className={`grid gap-1 ${item.images.length > 1 ? "grid-cols-3" : "grid-cols-1"}`}>
                {item.images.map((image) => (
                  <div key={image} className="relative h-72 overflow-hidden bg-zinc-900">
                    <Image
                      src={image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 25vw"
                      className="object-cover transition duration-500 hover:scale-[1.04]"
                    />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="inline-flex rounded-full border border-[rgba(255,187,71,0.24)] bg-[rgba(255,187,71,0.08)] px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#ffbb47]">
                  {item.badge}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="section-shell">
        <div className="rounded-[2rem] border border-[rgba(255,187,71,0.2)] bg-gradient-to-br from-[#121212] via-[#090909] to-[#151515] p-8 sm:p-10">
          <div className="section-header !max-w-3xl !px-0 !pb-0">
            <p className="section-kicker">Por que escolher a Terraar para sua obra</p>
            <h2 className="section-title">Estrutura pronta para atender obras exigentes com rapidez e eficiência.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c97d1d] text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section-shell">
        <div className="section-header">
          <p className="section-kicker">Frota disponível</p>
          <h2 className="section-title">Veja as máquinas disponíveis, prontas para entrar na sua obra.</h2>
          <p className="section-copy">
            Equipamentos reais para atender sua necessidade com rapidez, suporte e entrega no canteiro.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[240px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.image}
                type="button"
                onClick={() => setActiveGalleryIndex(index)}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 text-left shadow-[0_20px_50px_rgba(0,0,0,0.25)] ${item.className}`}
              >
                <div className="relative h-full min-h-[240px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.86))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-center gap-2 text-[#ffbb47]">
                      <Icon className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.28em]">Terraar</span>
                    </div>
                    <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[rgba(255,187,71,0.5)] hover:bg-[rgba(255,187,71,0.1)]"
          >
            <Instagram className="h-4 w-4" />
            Ver mais no Instagram
          </Link>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,187,71,0.2)] bg-[#c97d1d] px-8 py-12 text-zinc-950 shadow-[0_25px_80px_rgba(201,125,29,0.28)] sm:px-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-zinc-950/80">Fale com a Terraar</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
                Fale agora no WhatsApp e receba a máquina ideal para sua obra.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-900/85 sm:text-lg">
                Envie sua necessidade e receba indicação rápida, com disponibilidade e prazo de entrega.
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
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffbb47]">Solicite contato</p>
                <h3 className="mt-2 text-2xl font-bold">Fale com um especialista</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Preencha os dados e receba retorno comercial para locação, disponibilidade e recomendação da máquina ideal.
                </p>
              </div>

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ffbb47]"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ffbb47]"
                />
                <textarea
                  placeholder="Qual máquina você precisa e para quando?"
                  rows={4}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ffbb47]"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c97d1d] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#b56d14]"
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
          <p>Terraar Brasil • Locação de máquinas pesadas para terraplanagem, mobilização e apoio operacional em Jundiaí-SP</p>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <Link href={INSTAGRAM_URL} target="_blank" className="inline-flex items-center gap-2 text-[#ffbb47] transition hover:text-[#ffd27a]">
              <Instagram className="h-4 w-4" />
              Siga a gente no Instagram
            </Link>
            <Link href={WHATSAPP_URL} target="_blank" className="text-[#ffbb47] transition hover:text-[#ffd27a]">
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
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-[#c97d1d]"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setActiveGalleryIndex((activeGalleryIndex - 1 + gallery.length) % gallery.length)}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#c97d1d]"
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
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffbb47]">Galeria Terraar</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{gallery[activeGalleryIndex].title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{gallery[activeGalleryIndex].description}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveGalleryIndex((activeGalleryIndex + 1) % gallery.length)}
            aria-label="Próxima foto"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-[#c97d1d]"
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
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,187,71,0.3)] bg-zinc-950/90 text-[#ffbb47] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#c97d1d] hover:text-white"
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="h-6 w-6" />
      </Link>
    </main>
  );
}
