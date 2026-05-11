import * as I from "../icons";
import { subjects } from "../data";

export default function Analytics() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 space-y-5">
      {/* Top stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {l:"Tempo total",v:"86h 42m",sub:"+12% vs mês",Icon:I.Clock,c:"from-sky-400 to-blue-500"},
          {l:"Questões",v:"1.247",sub:"82% acerto",Icon:I.Book,c:"from-mint-400 to-mint-600"},
          {l:"Aulas concluídas",v:"143",sub:"de 312 aulas",Icon:I.Play,c:"from-coral-400 to-pink-500"},
          {l:"Consistência",v:"92%",sub:"dias ativos",Icon:I.Flame,c:"from-amber-400 to-orange-500"},
        ].map((s,i)=>(
          <div key={i} className="bg-white rounded-2xl p-4 shadow-soft border border-slate-100">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.c} grid place-items-center text-white`}><s.Icon size={18}/></div>
            <div className="text-xs text-slate-500 mt-3">{s.l}</div>
            <div className="text-2xl font-extrabold text-slate-800">{s.v}</div>
            <div className="text-[11px] text-mint-600 font-semibold mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Mock exam evolution */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-800">Evolução nos simulados</h3>
            <p className="text-xs text-slate-400">Últimos 8 simulados</p>
          </div>
          <span className="text-xs font-bold bg-mint-100 text-mint-700 px-2 py-1 rounded-lg">+24% nos últimos 30 dias</span>
        </div>
        <div className="h-56 relative">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#46d693" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#46d693" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[40,80,120,160].map(y=>(
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#f1f5f9" strokeDasharray="4 4"/>
            ))}
            <path d="M20,150 L70,140 L120,120 L170,130 L220,90 L270,80 L320,60 L380,50" stroke="#1fbd76" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M20,150 L70,140 L120,120 L170,130 L220,90 L270,80 L320,60 L380,50 L380,200 L20,200 Z" fill="url(#area)"/>
            {[
              [20,150],[70,140],[120,120],[170,130],[220,90],[270,80],[320,60],[380,50]
            ].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="white" stroke="#1fbd76" strokeWidth="3"/>
              </g>
            ))}
          </svg>
          <div className="flex justify-between text-[10px] text-slate-400 px-2">
            {["S1","S2","S3","S4","S5","S6","S7","S8"].map(d=><span key={d}>{d}</span>)}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Subject accuracy */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4">Acerto por disciplina</h3>
          <div className="space-y-3">
            {subjects.slice(0,7).map(s=>(
              <div key={s.id}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{s.icon}</span>
                    <span className="font-medium text-slate-700">{s.name}</span>
                  </div>
                  <span className="font-bold text-slate-800">{s.accuracy}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${s.color}`} style={{width:`${s.accuracy}%`}}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strong / Weak */}
        <div className="space-y-5">
          <div className="bg-gradient-to-br from-mint-50 to-emerald-50 rounded-3xl p-6 border border-mint-100">
            <h3 className="font-bold text-slate-800 flex items-center gap-2"><I.Heart size={18} className="text-mint-600"/> Pontos fortes</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Fundamentos","Primeiros socorros","Higiene das mãos","Ética","SUS"].map(t=>(
                <span key={t} className="text-xs font-semibold bg-white text-mint-700 px-3 py-1.5 rounded-full border border-mint-200">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-coral-50 to-pink-50 rounded-3xl p-6 border border-coral-100">
            <h3 className="font-bold text-slate-800 flex items-center gap-2"><I.Flame size={18} className="text-coral-500"/> A revisar</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["UTI · VM avançada","Pediatria · neonatologia","Cálculo de dose","Choque séptico"].map(t=>(
                <span key={t} className="text-xs font-semibold bg-white text-coral-700 px-3 py-1.5 rounded-full border border-coral-200">{t}</span>
              ))}
            </div>
            <button className="mt-4 text-xs font-semibold text-white bg-coral-500 px-3 py-2 rounded-xl inline-flex items-center gap-1.5">
              <I.Sparkles size={12}/> Gerar revisão guiada
            </button>
          </div>
        </div>
      </div>

      {/* Heatmap consistency */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800">Consistência (últimas 12 semanas)</h3>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span>Menos</span>
            {["bg-slate-100","bg-mint-200","bg-mint-400","bg-mint-600","bg-mint-700"].map(c=>(
              <span key={c} className={`w-3 h-3 rounded-sm ${c}`}/>
            ))}
            <span>Mais</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-1.5">
          {Array.from({length:12*7}).map((_,i)=>{
            const v = (Math.sin(i)*Math.cos(i*1.3)+1)/2;
            const cls = v>0.85?"bg-mint-700":v>0.65?"bg-mint-500":v>0.4?"bg-mint-300":v>0.2?"bg-mint-100":"bg-slate-100";
            return <div key={i} className={`aspect-square rounded-sm ${cls}`}/>;
          })}
        </div>
      </div>
    </div>
  );
}
