import { useState, useRef, useEffect } from "react";
import * as I from "../icons";

type Msg = { role: "ai" | "user"; text: string };

const seed: Msg[] = [
  { role: "ai", text: "Oi, Larissa! 👋 Sou seu assistente de enfermagem. Posso explicar matérias, criar planos de estudo, gerar flashcards e analisar suas dúvidas. O que vamos estudar hoje?" },
];

const suggestions = [
  { Icon: I.Brain, t: "Explique a diferença entre IAM e angina" },
  { Icon: I.Calendar, t: "Monte um plano de estudos de 30 dias para COREN-SP" },
  { Icon: I.Cards, t: "Crie 5 flashcards sobre farmacologia básica" },
  { Icon: I.Chart, t: "Analise meus erros mais frequentes" },
];

export default function AI() {
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs,thinking]);

  const send = (text?: string) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMsgs(m=>[...m,{role:"user",text:t}]);
    setInput("");
    setThinking(true);
    setTimeout(()=>{
      const reply = generateReply(t);
      setMsgs(m=>[...m,{role:"ai",text:reply}]);
      setThinking(false);
    },900);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 grid lg:grid-cols-4 gap-5 h-[calc(100vh-100px)]">
      {/* Sidebar */}
      <aside className="lg:col-span-1 space-y-4 lg:overflow-y-auto">
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-5 text-white">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-white/15 grid place-items-center backdrop-blur"><I.Sparkles size={22}/></div>
            <div>
              <div className="font-bold">Plantão+ IA</div>
              <div className="text-xs text-white/80">Treinada em provas e protocolos</div>
            </div>
          </div>
          <p className="text-sm text-white/90 mt-3">Estudar fica mais leve quando alguém explica do seu jeito.</p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Atalhos</h3>
          <div className="space-y-2">
            {[
              {Icon:I.Note,t:"Resumir minha última aula"},
              {Icon:I.Cards,t:"Gerar flashcards"},
              {Icon:I.Calendar,t:"Plano de estudos personalizado"},
              {Icon:I.Chart,t:"Analisar meus pontos fracos"},
            ].map((s,i)=>(
              <button key={i} onClick={()=>send(s.t)} className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-sm text-slate-700 text-left">
                <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 grid place-items-center"><s.Icon size={14}/></span>
                {s.t}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Histórico</h3>
          <div className="space-y-2 text-sm">
            {["Diferença entre RCP adulto e infantil","Flashcards de cálculo de gotejamento","Plano para concurso HC-SP"].map((t,i)=>(
              <button key={i} className="w-full text-left p-2 rounded-lg hover:bg-slate-50 text-slate-600 truncate">📌 {t}</button>
            ))}
          </div>
        </div>
      </aside>

      {/* Chat */}
      <div className="lg:col-span-3 bg-white rounded-3xl shadow-soft border border-slate-100 flex flex-col overflow-hidden min-h-[500px]">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center text-white"><I.Sparkles size={18}/></div>
          <div>
            <div className="font-bold text-slate-800">Assistente Plantão+ IA</div>
            <div className="text-xs text-amber-600 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"/> Online</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {msgs.map((m,i)=>(
            <div key={i} className={`flex gap-3 animate-pop-in ${m.role==="user"?"flex-row-reverse":""}`}>
              <div className={`w-9 h-9 rounded-xl shrink-0 grid place-items-center text-white ${m.role==="ai"?"bg-gradient-to-br from-violet-500 to-fuchsia-500":"bg-gradient-to-br from-mint-400 to-mint-600"}`}>
                {m.role==="ai" ? <I.Sparkles size={16}/> : <span className="text-xs font-bold">LM</span>}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${m.role==="ai"?"bg-slate-50 text-slate-800":"bg-slate-900 text-white"}`}>
                {m.text}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center text-white"><I.Sparkles size={16}/></div>
              <div className="bg-slate-50 rounded-2xl px-4 py-3 text-sm">
                <span className="inline-flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{animationDelay:"0ms"}}/>
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{animationDelay:"150ms"}}/>
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{animationDelay:"300ms"}}/>
                </span>
              </div>
            </div>
          )}
          <div ref={endRef}/>
        </div>

        {msgs.length<=1 && (
          <div className="px-5 pb-2 grid sm:grid-cols-2 gap-2">
            {suggestions.map((s,i)=>(
              <button key={i} onClick={()=>send(s.t)} className="text-left p-3 rounded-2xl border border-slate-200 hover:border-violet-300 hover:bg-violet-50/50 transition flex items-center gap-2 text-sm text-slate-700">
                <s.Icon size={16} className="text-violet-500"/> {s.t}
              </button>
            ))}
          </div>
        )}

        <div className="p-4 border-t border-slate-100 flex gap-2">
          <button className="w-10 h-10 grid place-items-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200"><I.Mic size={16}/></button>
          <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter" && send()}
            placeholder="Pergunte qualquer coisa sobre enfermagem..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-violet-400"
          />
          <button onClick={()=>send()} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5">
            <I.Send size={14}/> Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

function generateReply(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("plano")) {
    return "📅 **Plano de estudos personalizado (30 dias)**\n\nSemana 1 — Fundamentos & Anatomia (2h/dia)\nSemana 2 — Farmacologia + 50 questões/dia\nSemana 3 — Emergência, UTI e Ética\nSemana 4 — Simulados completos + revisão dos erros\n\nQuer que eu adicione lembretes ao seu Planner? ⏰";
  }
  if (lower.includes("flashcard")) {
    return "✨ Gerei 5 flashcards de farmacologia básica:\n\n1) Via EV — começo de ação imediato\n2) Via IM — absorção rápida (10-30min)\n3) Cálculo de gtt/min — fórmula: V x 20 / T(min)\n4) Adrenalina em PCR — 1mg EV a cada 3-5min\n5) Atropina — 0,5mg EV em bradicardia sintomática\n\nAdicionei ao seu deck \"Farmacologia · IA\". 🃏";
  }
  if (lower.includes("iam") || lower.includes("angina")) {
    return "🫀 **IAM x Angina**\n\n• **Angina** — dor torácica TRANSITÓRIA por isquemia, geralmente desencadeada por esforço, alivia com repouso/nitrato. Sem necrose.\n• **IAM** — dor PROLONGADA (>20min), não alivia com repouso, com necrose miocárdica. Marcadores: troponina ↑, ECG com supra ou infra de ST.\n\nQuer um caso clínico para fixar? 🩺";
  }
  if (lower.includes("erros") || lower.includes("ponto")) {
    return "📊 Analisei suas últimas 200 questões:\n\n🔴 **Pontos fracos:** Farmacologia (cálculo de dose) · UTI (ventilação mecânica)\n🟢 **Pontos fortes:** Fundamentos · Primeiros socorros\n\n💡 Sugestão: 30 min/dia de questões de farmacologia e 1 simulado de UTI por semana.";
  }
  if (lower.includes("resumo") || lower.includes("resumir")) {
    return "📝 **Resumo: Pressão Arterial · Aferição correta**\n\n• Paciente em repouso 5min, sentado, costas apoiadas\n• Manguito 2 dedos acima da fossa antecubital\n• Estetoscópio sobre artéria braquial\n• Insuflar até 30mmHg acima do desaparecimento do pulso\n• Desinflar 2-3 mmHg/seg\n• Anotar sistólica (1° som) e diastólica (desaparecimento)\n\nClassificação ANVISA: Normal <120/80 · HAS estágio 1: 140-159/90-99";
  }
  return "Ótima pergunta! 🌱 Vou explicar de forma simples e com exemplo prático. Posso aprofundar com um caso clínico, gerar flashcards ou criar uma sequência de questões para você fixar. O que prefere?";
}
