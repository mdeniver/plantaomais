import * as I from "../icons";

const today = new Date();
const monthDays = Array.from({length: 35}, (_,i)=>{
  const day = i - 2; // offset for week start
  return day > 0 && day <= 31 ? day : null;
});

const events: Record<number, { c: string; t: string; type: "video"|"quiz"|"exam" }[]> = {
  3: [{c:"from-mint-400 to-mint-600",t:"Anatomia",type:"video"}],
  5: [{c:"from-violet-400 to-purple-500",t:"Flashcards",type:"quiz"}],
  9: [{c:"from-coral-400 to-coral-600",t:"Simulado",type:"exam"}],
  12: [{c:"from-mint-400 to-mint-600",t:"Aula",type:"video"},{c:"from-violet-400 to-purple-500",t:"Q.",type:"quiz"}],
  15: [{c:"from-sky-400 to-blue-500",t:"Revisão",type:"video"}],
  18: [{c:"from-amber-400 to-coral-500",t:"Simulado",type:"exam"}],
  22: [{c:"from-mint-400 to-mint-600",t:"Cardio",type:"video"}],
  25: [{c:"from-coral-400 to-coral-600",t:"PROVA COREN",type:"exam"}],
};

export default function Planner() {
  const day = today.getDate();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 space-y-5">
      {/* Hero with countdown */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"/>
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">⏰ Contagem regressiva</span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold">Concurso COREN-SP</h2>
          <p className="text-white/80 text-sm">25 de Março, 2026 · Domingo</p>
          <div className="mt-5 grid grid-cols-4 gap-3 max-w-md">
            {[{n:"42",l:"dias"},{n:"08",l:"horas"},{n:"23",l:"min"},{n:"14",l:"seg"}].map((c,i)=>(
              <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-3 text-center">
                <div className="text-2xl font-extrabold">{c.n}</div>
                <div className="text-[10px] text-white/70 uppercase">{c.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><I.Lightning size={16} className="text-amber-500"/> Meta diária</h3>
          <div className="flex items-center justify-center my-2">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-32 h-32 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f1f5f9" strokeWidth="3"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="url(#grad)" strokeWidth="3" strokeDasharray={`${72} 100`} strokeLinecap="round"/>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#46d693"/>
                    <stop offset="100%" stopColor="#129a5d"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-2xl font-extrabold text-slate-800">72%</div>
                  <div className="text-[10px] text-slate-500">de 5h</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div><div className="text-xs text-slate-400">Aulas</div><div className="font-bold text-slate-800">3/4</div></div>
            <div><div className="text-xs text-slate-400">Q.</div><div className="font-bold text-slate-800">28/40</div></div>
            <div><div className="text-xs text-slate-400">Cards</div><div className="font-bold text-slate-800">12/12</div></div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 capitalize">{today.toLocaleDateString("pt-BR",{month:"long",year:"numeric"})}</h3>
            <div className="flex gap-1">
              <button className="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-500"><I.ChevronRight size={16} className="rotate-180"/></button>
              <button className="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 text-slate-500"><I.ChevronRight size={16}/></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1.5 text-xs font-semibold text-slate-400 mb-2">
            {["D","S","T","Q","Q","S","S"].map((d,i)=><div key={i} className="text-center py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {monthDays.map((d,i)=>(
              <div key={i} className={`aspect-square rounded-xl border p-1.5 flex flex-col ${
                d===null ? "border-transparent" :
                d===day ? "bg-mint-500 text-white border-mint-500 shadow-soft" :
                "border-slate-100 hover:border-slate-200"
              }`}>
                {d && (
                  <>
                    <div className={`text-xs font-bold ${d===day?"text-white":"text-slate-700"}`}>{d}</div>
                    <div className="flex flex-wrap gap-0.5 mt-auto">
                      {events[d]?.map((e,ei)=>(
                        <div key={ei} className={`h-1 w-full rounded-full bg-gradient-to-r ${e.c}`}/>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Today schedule */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4">Agenda de hoje</h3>
          <div className="space-y-3">
            {[
              {h:"08:00",t:"Aula: Pressão arterial",d:"30 min · Anatomia",c:"from-mint-400 to-mint-600",Icon:I.Play},
              {h:"10:00",t:"Banco de questões",d:"40 questões · Farmacologia",c:"from-violet-400 to-purple-500",Icon:I.Book},
              {h:"14:30",t:"Flashcards do dia",d:"12 cards pendentes",c:"from-teal-400 to-cyan-500",Icon:I.Cards},
              {h:"19:00",t:"Simulado UTI",d:"25 questões · 1h",c:"from-amber-400 to-coral-500",Icon:I.Trophy},
            ].map((e,i)=>(
              <div key={i} className="flex gap-3">
                <div className="text-xs font-bold text-slate-500 w-12 pt-1">{e.h}</div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${e.c} grid place-items-center text-white shrink-0`}>
                  <e.Icon size={16}/>
                </div>
                <div className="flex-1 pb-3 border-b border-slate-100 last:border-0">
                  <div className="text-sm font-semibold text-slate-800">{e.t}</div>
                  <div className="text-[11px] text-slate-400">{e.d}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-3 w-full text-sm font-semibold text-mint-600 border border-dashed border-mint-300 py-2.5 rounded-xl hover:bg-mint-50 inline-flex items-center justify-center gap-1">
            <I.Plus size={14}/> Adicionar ao planner
          </button>
        </div>
      </div>

      {/* AI plan suggestion */}
      <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-3xl p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/15 grid place-items-center backdrop-blur"><I.Sparkles size={22}/></div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">Plano automático recalculado</h3>
            <p className="text-sm text-white/85 mt-1">Você está adiantada em Anatomia. Reorganizei sua semana para focar em Farmacologia e UTI, áreas com menor desempenho.</p>
            <button className="mt-3 bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-xl">Aplicar mudanças</button>
          </div>
        </div>
      </div>
    </div>
  );
}
