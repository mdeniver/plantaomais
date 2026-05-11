import { useState } from "react";
import * as I from "../icons";
import { flashcards } from "../data";

export default function Flashcards() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = flashcards[idx % flashcards.length];

  const grade = (_g: "easy"|"medium"|"hard") => {
    setFlipped(false);
    setTimeout(()=>setIdx(i=>i+1),200);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 grid lg:grid-cols-3 gap-5">
      {/* Decks */}
      <aside className="space-y-4">
        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl p-5 text-white">
          <I.Cards size={26}/>
          <div className="mt-2 font-bold text-lg">Revisão de hoje</div>
          <div className="text-sm text-white/80">12 cards aguardando</div>
          <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{width:`${(idx/flashcards.length)*100}%`}}/>
          </div>
          <div className="mt-1 text-xs">{idx} / {flashcards.length} concluídos</div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Seus decks</h3>
          <div className="space-y-2">
            {[
              {n:"Farmacologia · Emergência",c:48,col:"from-violet-400 to-purple-500"},
              {n:"Anatomia & Neurologia",c:62,col:"from-rose-400 to-pink-500"},
              {n:"UTI & Ventilação Mecânica",c:34,col:"from-fuchsia-400 to-pink-600"},
              {n:"Procedimentos básicos",c:51,col:"from-mint-400 to-mint-600"},
              {n:"Termos médicos",c:120,col:"from-sky-400 to-blue-500"},
            ].map((d,i)=>(
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 text-left">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.col} grid place-items-center text-white shadow-soft`}>
                  <I.Cards size={16}/>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-800">{d.n}</div>
                  <div className="text-[11px] text-slate-400">{d.c} cards</div>
                </div>
                <I.ChevronRight size={14} className="text-slate-400"/>
              </button>
            ))}
          </div>
          <button className="mt-3 w-full flex items-center justify-center gap-2 text-sm font-semibold text-mint-600 border border-dashed border-mint-300 py-2.5 rounded-xl hover:bg-mint-50">
            <I.Plus size={14}/> Criar novo deck
          </button>
        </div>
      </aside>

      {/* Card */}
      <div className="lg:col-span-2 space-y-4">
        <div className="text-center">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{card.deck}</div>
          <div className="text-xs text-slate-400 mt-1">Repetição espaçada · Próxima revisão: {card.due}</div>
        </div>

        {/* Flip card */}
        <div
          className="relative h-96 cursor-pointer"
          style={{ perspective: "1500px" }}
          onClick={()=>setFlipped(!flipped)}
        >
          <div
            className="relative w-full h-full transition-transform duration-500"
            style={{ transformStyle: "preserve-3d", transform: flipped?"rotateY(180deg)":"" }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-sky-50 rounded-3xl shadow-pop border border-slate-100 p-8 flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="text-xs font-bold text-mint-600 bg-mint-100 px-3 py-1 rounded-full">PERGUNTA</span>
              <p className="mt-6 text-2xl font-bold text-slate-900 max-w-xl leading-snug">{card.front}</p>
              <button className="mt-8 text-sm font-semibold text-slate-500 inline-flex items-center gap-2">
                Toque para revelar a resposta <I.ChevronRight size={14}/>
              </button>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-pop p-8 flex flex-col text-white"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full self-start">RESPOSTA</span>
              <p className="mt-6 text-lg leading-relaxed">{card.back}</p>
              <div className="mt-auto text-xs text-white/60 text-center">Como foi a sua resposta?</div>
            </div>
          </div>
        </div>

        {/* Grade buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button onClick={()=>grade("hard")} className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-coral-50 border border-coral-200 hover:bg-coral-100 transition">
            <span className="text-xl">😰</span>
            <span className="text-sm font-bold text-coral-700">Difícil</span>
            <span className="text-[10px] text-coral-600">Revisar em 5min</span>
          </button>
          <button onClick={()=>grade("medium")} className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition">
            <span className="text-xl">🤔</span>
            <span className="text-sm font-bold text-amber-700">Médio</span>
            <span className="text-[10px] text-amber-600">Revisar em 1 dia</span>
          </button>
          <button onClick={()=>grade("easy")} className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-mint-50 border border-mint-200 hover:bg-mint-100 transition">
            <span className="text-xl">😎</span>
            <span className="text-sm font-bold text-mint-700">Fácil</span>
            <span className="text-[10px] text-mint-600">Revisar em 4 dias</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-soft flex items-center gap-3">
          <I.Sparkles size={18} className="text-violet-500"/>
          <div className="text-sm text-slate-600 flex-1">A IA pode gerar flashcards a partir da sua última aula.</div>
          <button className="text-xs font-semibold text-white bg-violet-500 hover:bg-violet-600 px-3 py-2 rounded-xl">Gerar agora</button>
        </div>
      </div>
    </div>
  );
}
