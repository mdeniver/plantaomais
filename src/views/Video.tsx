import { useState } from "react";
import * as I from "../icons";
import { teacher } from "../data";

export default function Video() {
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [tab, setTab] = useState<"notes"|"materials"|"questions">("notes");
  const [progress, setProgress] = useState(38);

  const chapters = [
    { t: "Introdução", time: "00:00", done: true },
    { t: "Anatomia do coração", time: "02:15", done: true },
    { t: "Aferição de PA", time: "08:40", done: false, current: true },
    { t: "Erros comuns", time: "16:20", done: false },
    { t: "Caso clínico", time: "21:05", done: false },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 grid lg:grid-cols-3 gap-5">
      {/* Left: video + tabs */}
      <div className="lg:col-span-2 space-y-5">
        {/* Player */}
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-pop">
          {/* Fake video content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white/20 grid place-items-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur grid place-items-center animate-pulse-soft">
                  <I.Heartbeat size={56} className="text-mint-300"/>
                </div>
              </div>
              <div className="absolute -inset-8 border border-white/10 rounded-full animate-spin-slow"/>
            </div>
          </div>
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur text-white text-xs font-semibold">
            🔴 AO VIVO · Aula 14 · Pressão arterial
          </div>
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur text-white text-xs">
            HD 1080p
          </div>
          {/* Controls */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div
              className="h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer"
              onClick={(e)=>{
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                setProgress(((e.clientX-rect.left)/rect.width)*100);
              }}
            >
              <div className="h-full bg-mint-400 rounded-full relative" style={{width:`${progress}%`}}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"/>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <button onClick={()=>setPlaying(!playing)} className="w-10 h-10 grid place-items-center rounded-full bg-white text-slate-900 hover:scale-105 transition">
                {playing ? <I.Pause size={18}/> : <I.Play size={18}/>}
              </button>
              <button className="opacity-80 hover:opacity-100"><I.Forward size={18}/></button>
              <button className="opacity-80 hover:opacity-100"><I.Volume size={18}/></button>
              <span className="text-xs font-mono">12:24 / 32:18</span>
              <div className="ml-auto flex items-center gap-2">
                <button onClick={()=>setSpeed(s=> s>=2 ? 0.75 : s+0.25)} className="text-xs font-bold bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md">{speed}x</button>
                <button className="opacity-80 hover:opacity-100"><I.Maximize size={18}/></button>
              </div>
            </div>
          </div>
        </div>

        {/* Title & teacher */}
        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="bg-mint-100 text-mint-700 px-2 py-1 rounded-lg font-semibold">Anatomia</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">Módulo 1 · Cardiovascular</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">14 min</span>
          </div>
          <h2 className="mt-2 text-xl lg:text-2xl font-bold text-slate-900">Pressão arterial: aferição correta e erros comuns</h2>
          <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral-400 to-pink-500 grid place-items-center text-white font-bold">CA</div>
              <div>
                <div className="font-semibold text-slate-800">{teacher.name}</div>
                <div className="text-xs text-slate-500">{teacher.role} · ⭐ {teacher.rating} · {teacher.students.toLocaleString("pt-BR")} alunos</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl"><I.Heart size={14}/> Curtir</button>
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl"><I.Bookmark size={14}/> Salvar</button>
              <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-xl"><I.Download size={14}/> PDF</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100">
            {[
              {k:"notes",l:"Anotações",Icon:I.Note},
              {k:"materials",l:"Materiais",Icon:I.Download},
              {k:"questions",l:"Questões relacionadas",Icon:I.Book},
            ].map(t=>(
              <button
                key={t.k}
                onClick={()=>setTab(t.k as any)}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold transition ${
                  tab===t.k ? "text-mint-700 border-b-2 border-mint-500 bg-mint-50/40" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <t.Icon size={16}/> <span className="hidden sm:inline">{t.l}</span>
              </button>
            ))}
          </div>
          <div className="p-5">
            {tab==="notes" && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Suas anotações desta aula</span>
                  <button className="text-xs font-semibold text-mint-600 inline-flex items-center gap-1"><I.Plus size={12}/> Nova nota</button>
                </div>
                <textarea
                  className="w-full min-h-[120px] p-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none text-sm focus:border-mint-400"
                  defaultValue="A PA deve ser aferida com o paciente em repouso por pelo menos 5 minutos. Manguito 2 dedos acima da fossa antecubital. Estetoscópio sobre a artéria braquial..."
                />
                <div className="mt-2 text-[11px] text-slate-400">💡 Dica: ⌘ + S para salvar suas notas automaticamente</div>
              </div>
            )}
            {tab==="materials" && (
              <div className="space-y-2">
                {[
                  {n:"Resumo: Pressão Arterial",s:"PDF · 2.4 MB"},
                  {n:"Mapa mental: Cardiovascular",s:"PNG · 1.1 MB"},
                  {n:"Tabela: Valores de referência PA",s:"PDF · 380 KB"},
                ].map((m,i)=>(
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50">
                    <div className="w-10 h-10 rounded-xl bg-coral-100 text-coral-600 grid place-items-center"><I.Note size={18}/></div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">{m.n}</div>
                      <div className="text-xs text-slate-400">{m.s}</div>
                    </div>
                    <button className="text-mint-600"><I.Download size={18}/></button>
                  </div>
                ))}
              </div>
            )}
            {tab==="questions" && (
              <div className="space-y-3">
                {[
                  "VUNESP 2024 · Manguito ideal para PA",
                  "FCC 2023 · Hipertensão estágio 2",
                  "IBFC 2024 · Erros mais comuns na aferição",
                ].map((q,i)=>(
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 grid place-items-center"><I.Book size={18}/></div>
                    <div className="flex-1 text-sm font-semibold text-slate-800">{q}</div>
                    <I.ChevronRight size={16} className="text-slate-400"/>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: chapters */}
      <aside className="space-y-5">
        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800">Capítulos</h3>
            <span className="text-xs text-slate-400">{chapters.filter(c=>c.done).length}/{chapters.length} concluídos</span>
          </div>
          <div className="space-y-2">
            {chapters.map((c,i)=>(
              <button key={i} className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition ${
                c.current ? "bg-mint-50 border border-mint-200" : "hover:bg-slate-50"
              }`}>
                <div className={`w-9 h-9 rounded-xl grid place-items-center ${
                  c.done ? "bg-mint-500 text-white" :
                  c.current ? "bg-gradient-to-br from-amber-400 to-coral-500 text-white" :
                  "bg-slate-100 text-slate-400"
                }`}>
                  {c.done ? <I.Check size={16}/> : c.current ? <I.Play size={14}/> : <span className="text-xs font-bold">{i+1}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-800 truncate">{c.t}</div>
                  <div className="text-[11px] text-slate-400">{c.time}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl p-5 text-white">
          <I.Sparkles size={22}/>
          <h3 className="mt-2 font-bold">Não entendeu algo?</h3>
          <p className="text-sm text-white/80 mt-1">Pergunte ao assistente IA com base nesta aula.</p>
          <button className="mt-3 inline-flex items-center gap-2 bg-white text-slate-900 px-3 py-2 rounded-xl text-sm font-semibold">
            Abrir assistente <I.ChevronRight size={14}/>
          </button>
        </div>
      </aside>
    </div>
  );
}
