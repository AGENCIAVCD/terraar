import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/terraar.brasil/";

export default function ObrigadoPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4 text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,156,44,0.22),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.86),rgba(9,9,11,1))]" />

      <div className="relative w-full max-w-3xl rounded-[2rem] border border-[rgba(249,156,44,0.2)] bg-zinc-900/85 p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.5rem] bg-white shadow-[0_0_50px_rgba(249,156,44,0.35)]">
          <div className="relative h-14 w-14">
            <Image src="/images/terraar-logo.jpg" alt="Logo Terraar Brasil" fill sizes="56px" className="object-cover rounded-full" priority />
          </div>
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-[#f99c2c]">Mensagem recebida</p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-none text-white sm:text-5xl">
          Obrigado pelo contato
        </h1>
        <div className="mx-auto mt-6 max-w-2xl rounded-[1.5rem] border border-[rgba(249,156,44,0.2)] bg-[#f99c2c] px-6 py-6 text-zinc-950">
          <p className="text-lg font-semibold sm:text-xl">
            Nossa equipe vai analisar sua solicitação e retornar com agilidade para indicar a melhor solução da Terraar.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
          Enquanto isso, acompanhe nossas máquinas, entregas e novidades nas redes sociais.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-[#f99c2c] px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#e08a21]"
          >
            <Instagram className="h-5 w-5" />
            Instagram da Terraar
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[rgba(249,156,44,0.5)] hover:bg-[rgba(249,156,44,0.1)]"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </main>
  );
}
