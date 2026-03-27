"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, Calculator, Truck } from "lucide-react";

type TabType = "tesoura" | "articulada";

type Tesoura = {
  descricao: string;
  altura: number;
  prolongamento: number;
  largura: number;
  suporte: number;
};

type Articulada = {
  descricao: string;
  altura: number;
  alcance: number;
  largura: number | string;
  suporte: number;
};

const tesouras: Tesoura[] = [
  { descricao: "Plataforma tipo Tesoura 8,0m - Elétrico", altura: 7.8, prolongamento: 0.9, largura: 1.2, suporte: 250 },
  { descricao: "Plataforma tipo Tesoura 10,0m - Elétrico", altura: 10.0, prolongamento: 0.9, largura: 2.44, suporte: 250 },
  { descricao: "Plataforma tipo Tesoura 12,0m - Elétrico", altura: 12.0, prolongamento: 0.9, largura: 1.73, suporte: 350 },
  { descricao: "Plataforma tipo Tesoura 14,0m - Elétrico", altura: 13.8, prolongamento: 0.9, largura: 2.44, suporte: 350 },
  { descricao: "Plataforma tipo Tesoura 16,0m - Elétrico", altura: 15.7, prolongamento: 0.9, largura: 2.44, suporte: 350 },
];

const articuladas: Articulada[] = [
  { descricao: "Plataforma Articulada 12,0m - Compacta", altura: 11.8, alcance: 6.5, largura: 1.2, suporte: 227 },
  { descricao: "Plataforma Articulada 16,0m - Compacta", altura: 16.5, alcance: 7.15, largura: 1.73, suporte: 230 },
  { descricao: "Plataforma Articulada 16,0m", altura: 16.27, alcance: 8.69, largura: 2.44, suporte: 320 },
  { descricao: "Plataforma Articulada 20,0m", altura: 20.15, alcance: 11.13, largura: 2.44, suporte: 320 },
  { descricao: "Plataforma Articulada 24,0m", altura: 24.3, alcance: 17.1, largura: 2.44, suporte: 300 },
  { descricao: "Plataforma Articulada 28,0m", altura: 28.1, alcance: 19.4, largura: 2.44, suporte: 250 },
  { descricao: "Plataforma Articulada 44,0m", altura: 44.06, alcance: 22.97, largura: 2.44, suporte: 272 },
  { descricao: "Plataforma Telescópica 20,0m", altura: 20.23, alcance: 13.36, largura: 2.44, suporte: 320 },
  { descricao: "Plataforma Telescópica 24,0m", altura: 24.8, alcance: 17.9, largura: 2.44, suporte: 454 },
  { descricao: "Plataforma Telescópica 26,0m", altura: 26.3, alcance: 19.5, largura: 2.44, suporte: 454 },
  { descricao: "Plataforma Telescópica 28,0m", altura: 28.6, alcance: 21.9, largura: 2.44, suporte: 454 },
  { descricao: "Plataforma Telescópica 30,0m", altura: 30.2, alcance: 23.0, largura: 2.44, suporte: 454 },
  { descricao: "Plataforma Telescópica 34,0m", altura: 34.14, alcance: 21.6, largura: 2.44, suporte: 454 },
  { descricao: "Plataforma Telescópica 36,0m", altura: 36.23, alcance: 23.6, largura: "4,17 / 2,44", suporte: 454 },
];

const cargaOpcoes = [
  { label: "Até 250 kg", value: 250 },
  { label: "Até 350 kg", value: 350 },
  { label: "Até 450 kg", value: 450 },
  { label: "Mais de 450 kg", value: 451 },
];

const MAX_ALTURA_TESOURA = Math.max(...tesouras.map((item) => item.altura));
const MAX_ALTURA_ARTICULADA = Math.max(...articuladas.map((item) => item.altura));
const MAX_ALCANCE_ARTICULADA = Math.max(...articuladas.map((item) => item.alcance));

const formatarNumero = (valor: number) =>
  valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function CalculadoraPlataformas() {
  const [abaAtiva, setAbaAtiva] = useState<TabType>("tesoura");
  const [altura, setAltura] = useState(12);
  const [alcance, setAlcance] = useState(5);
  const [cargaMinima, setCargaMinima] = useState(250);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const mostrarAvisoCargaTesoura = abaAtiva === "tesoura" && cargaMinima >= 450;

  const alturaMaxima = abaAtiva === "tesoura" ? MAX_ALTURA_TESOURA : MAX_ALTURA_ARTICULADA;

  useEffect(() => {
    if (altura > alturaMaxima) {
      setAltura(alturaMaxima);
    }
  }, [altura, alturaMaxima]);

  useEffect(() => {
    if (alcance > MAX_ALCANCE_ARTICULADA) {
      setAlcance(MAX_ALCANCE_ARTICULADA);
    }
  }, [alcance]);

  const resultados = useMemo(() => {
    if (abaAtiva === "tesoura") {
      return tesouras.filter((item) => item.altura >= altura && item.suporte >= cargaMinima);
    }

    return articuladas.filter(
      (item) => item.altura >= altura && item.alcance >= alcance && item.suporte >= cargaMinima,
    );
  }, [abaAtiva, altura, alcance, cargaMinima]);

  return (
    <section className="section-shell">
      <div className="rounded-[2rem] border border-[rgba(249,156,44,0.2)] bg-gradient-to-br from-zinc-100 via-white to-[rgba(249,156,44,0.12)] p-6 text-zinc-900 shadow-[0_20px_80px_rgba(0,0,0,0.14)] sm:p-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center">Calculadora de Plataforma Elevatória</h2>
          <p className="mt-3 text-center text-gray-600">Encontre o equipamento ideal em segundos</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5">
          <button
            type="button"
            onClick={() => {
              setAbaAtiva("tesoura");
              setMostrarResultados(false);
            }}
            className={`flex-1 rounded-xl px-5 py-4 text-sm font-semibold transition sm:text-base ${
              abaAtiva === "tesoura" ? "bg-[#f99c2c] text-white shadow-md" : "text-gray-700 hover:bg-[rgba(249,156,44,0.08)]"
            }`}
          >
            Tesoura Elétrica
          </button>
          <button
            type="button"
            onClick={() => {
              setAbaAtiva("articulada");
              setMostrarResultados(false);
            }}
            className={`flex-1 rounded-xl px-5 py-4 text-sm font-semibold transition sm:text-base ${
              abaAtiva === "articulada" ? "bg-[#f99c2c] text-white shadow-md" : "text-gray-700 hover:bg-[rgba(249,156,44,0.08)]"
            }`}
          >
            Articulada / Telescópica
          </button>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
          <div className="grid gap-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-800">
                  Altura de trabalho: <span className="text-[#f99c2c]">{formatarNumero(altura)} m</span>
                </label>
                <Calculator className="h-5 w-5 text-[#f99c2c]" />
              </div>
              <input
                type="range"
                min={6}
                max={alturaMaxima}
                step={0.1}
                value={altura}
                onChange={(e) => setAltura(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[rgba(249,156,44,0.18)] accent-[#f99c2c]"
              />
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>6m</span>
                <span>{formatarNumero(alturaMaxima)}m</span>
              </div>
            </div>

            {abaAtiva === "articulada" ? (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-800">
                    Alcance lateral: <span className="text-[#f99c2c]">{formatarNumero(alcance)} m</span>
                  </label>
                  <Truck className="h-5 w-5 text-[#f99c2c]" />
                </div>
                <input
                  type="range"
                  min={0}
                  max={MAX_ALCANCE_ARTICULADA}
                  step={0.1}
                  value={alcance}
                  onChange={(e) => setAlcance(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[rgba(249,156,44,0.18)] accent-[#f99c2c]"
                />
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>0m</span>
                  <span>{formatarNumero(MAX_ALCANCE_ARTICULADA)}m</span>
                </div>
              </div>
            ) : null}

            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-800">Carga necessária</label>
              <select
                value={cargaMinima}
                onChange={(e) => setCargaMinima(Number(e.target.value))}
                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-gray-900 outline-none transition focus:border-[#f99c2c] focus:bg-white"
              >
                {cargaOpcoes.map((opcao) => (
                  <option key={opcao.label} value={opcao.value}>
                    {opcao.label}
                  </option>
                ))}
              </select>

              {mostrarAvisoCargaTesoura ? (
                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                  Para suportar essa carga, seria interessante contratar a plataforma articulada ou telescópica.
                </div>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => setMostrarResultados(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f99c2c] px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#e08a21]"
            >
              Ver Modelos Recomendados
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {mostrarResultados ? (
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-[#f99c2c]" />
              <h3 className="text-2xl font-bold text-gray-900">Modelos recomendados para sua necessidade</h3>
            </div>

            {resultados.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {resultados.map((item) => (
                  <article
                    key={item.descricao}
                    className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h4 className="text-xl font-bold text-gray-900">{item.descricao}</h4>

                    <div className="mt-5 grid gap-3 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold text-gray-900">Altura:</span> {formatarNumero(item.altura)} m
                      </p>
                      {"alcance" in item ? (
                        <p>
                          <span className="font-semibold text-gray-900">Alcance:</span> {formatarNumero(item.alcance)} m
                        </p>
                      ) : null}
                      <p>
                        <span className="font-semibold text-gray-900">Largura:</span>{" "}
                        {typeof item.largura === "number" ? `${formatarNumero(item.largura)} m` : `${item.largura} m`}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Suporte:</span> {formatarNumero(item.suporte)} kg
                      </p>
                    </div>

                    <div className="mt-5 rounded-2xl bg-[rgba(249,156,44,0.12)] px-4 py-3 text-sm font-medium text-[#b96e10]">
                      Disponível em Elétrico, Diesel ou Híbrido
                    </div>

                    <a
                      href={`https://wa.me/5511913641056?text=${encodeURIComponent(`Quero orçamento da ${item.descricao}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-green-600 px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      Solicitar Orçamento no WhatsApp
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-black/5">
                <p className="text-lg font-semibold text-gray-900">Nenhum modelo encontrado com esses filtros.</p>
                <p className="mt-2 text-gray-600">
                  {mostrarAvisoCargaTesoura
                    ? "Para suportar essa carga, seria interessante contratar a plataforma articulada ou telescópica."
                    : "Ajuste altura, alcance ou carga para ver mais opções."}
                </p>
              </div>
            )}
          </div>
        ) : null}

        <div className="mt-20 space-y-12">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
            <div className="bg-[#f99c2c] px-6 py-5 text-white">
              <h3 className="text-2xl font-bold">PLATAFORMAS ELEVATÓRIAS TESOURAS</h3>
            </div>

            <div className="p-6 sm:p-8">
              <p className="whitespace-pre-line text-base leading-8 text-gray-700">
                A Plataforma Tesoura é ideal para trabalhos em altura que exigem segurança e
                estabilidade. Possuímos uma linha completa para diferentes alturas e necessidades.
                Esse equipamento funciona como um andaime móvel, utilizando um sistema tipo
                acordeão para elevar e abaixar a plataforma verticalmente.
                É indicada para construção, manutenção e instalações em ambientes internos ou
                externos, desde que em superfície firme e nivelada, sendo muito utilizada também
                em construções, indústrias, estoques e armazéns.
              </p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-[#f99c2c] text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Descrição</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Altura (m)</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Prolongamento (m)</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Largura (m)</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Suporte (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tesouras.map((item, index) => (
                      <tr key={item.descricao} className={index % 2 === 0 ? "bg-white align-middle" : "bg-gray-50 align-middle"}>
                        <td className="px-4 py-4 align-middle text-gray-900">{item.descricao}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.altura)}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.prolongamento)}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.largura)}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.suporte)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
            <div className="bg-[#f99c2c] px-6 py-5 text-white">
              <h3 className="text-2xl font-bold">PLATAFORMAS ELEVATÓRIAS ARTICULADAS</h3>
            </div>

            <div className="p-6 sm:p-8">
              <p className="whitespace-pre-line text-base leading-8 text-gray-700">
                As plataformas elevatórias articuladas são indicadas para trabalhos em altura que
                exigem alcance lateral, flexibilidade e acesso a locais de difícil alcance. Sua estrutura
                articulada permite superar obstáculos com facilidade, garantindo segurança e
                manobrabilidade em áreas restritas, internas ou externas. São amplamente
                utilizadas em obras industriais, construção civil, manutenção, instalações e serviços
                em terrenos irregulares.
              </p>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-[#f99c2c] text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Descrição</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Altura (m)</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Alcance (m)</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Largura (m)</th>
                      <th className="px-4 py-4 text-center align-middle font-semibold">Suporte (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articuladas.map((item, index) => (
                      <tr key={item.descricao} className={index % 2 === 0 ? "bg-white align-middle" : "bg-gray-50 align-middle"}>
                        <td className="px-4 py-4 align-middle text-gray-900">{item.descricao}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.altura)}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.alcance)}</td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">
                          {typeof item.largura === "number" ? formatarNumero(item.largura) : item.largura}
                        </td>
                        <td className="px-4 py-4 text-center align-middle text-gray-700">{formatarNumero(item.suporte)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-sm font-medium text-gray-700">
                * Para todos os modelos podemos oferecer com motor elétrico, diesel ou híbrido.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
