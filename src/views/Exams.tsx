import * as I from "../icons";
import { mockExams } from "../data";

export default function Exams() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 space-y-5">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-400 via-coral-500 to-pink-500 rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"/>
        <div className="absolute right-8 top-6 hidden md:block animate-float">
          <I.Trophy size={64} className="opacity-90"/>
        </div>
        <div className="relative max-w-2xl">
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">Simulados</span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold">Treine como na prova real</h2>
          <p className="mt-2 text-white/85 text-sm">Simulados oficiais, provas anteriores e simulados personalizados com correção automática e ranking nacional.</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <button className="bg-white text-slate-900 px-4 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2"><I.Plus size={14}/> Criar simulado custom</button>
            <button className="bg-white/15 backdrop-blur text-white px-4 py-2.5 rounded-xl font-semibold text-sm border border-white/20">Ver ranking</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {l:"Simulados feitos",v:"24",Icon:I.Trophy,c:"from-amber-400 to-orange-500"},
          {l:"Média geral",v:"7.8",Icon:I.Chart,c:"from-mint-400 to-mint-600"},
          {l:"Posição no ranking",v:"#142",Icon:I.Award,c:"from-violet-500 to-fuchsia-500"},
          {l:"Próximo simulado",v:"Sex 14h",Icon:I.Calendar,c:"from-sky-400 to-blue-500"},
        ].map((s,i)=>(
          <div key={i} className="bg-white rounded-2xl p-4 shadow-soft border border-slate-100">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.c} grid place-items-center text-white`}>
              <s.Icon size={18}/>
            </div>
            <div className="text-xs text-slate-500 mt-3">{s.l}</div>
            <div className="text-xl font-bold text-slate-800">{s.v}</div>
          </div>
        ))}
      </div>

      {/* Last result */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Último resultado · UTI · Foco em ventilação mecânica</h3>
          <span className="text-xs font-semibold bg-mint-100 text-mint-700 px-2 py-1 rounded-lg">Aprovado</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-5">
          <div className="p-4 rounded-2xl bg-mint-50 border border-mint-100">
            <div className="text-xs text-slate-500">Acertos</div>
            <div className="text-3xl font-extrabold text-mint-700">21<span className="text-base text-slate-400">/25</span></div>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100">
            <div className="text-xs text-slate-500">Tempo</div>
            <div className="text-3xl font-extrabold text-sky-700">42<span className="text-base text-slate-400">min</span></div>
          </div>
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100">
            <div className="text-xs text-slate-500">Posição</div>
            <div className="text-3xl font-extrabold text-violet-700">#42<span className="text-base text-slate-400"> / 1.230</span></div>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-sm font-semibold text-slate-700 mb-2">Pontos fortes & a revisar</div>
          <div className="flex flex-wrap gap-2">
            {["VM básica","Sedação","Anatomia respiratória"].map(t=>(
              <span key={t} className="text-xs font-semibold bg-mint-100 text-mint-700 px-3 py-1.5 rounded-full inline-flex items-center gap-1"><I.Check size={12}/> {t}</span>
            ))}
            {["Modos avançados","Desmame ventilatório"].map(t=>(
              <span key={t} className="text-xs font-semibold bg-coral-100 text-coral-700 px-3 py-1.5 rounded-full inline-flex items-center gap-1"><I.Flame size={12}/> {t}</span>
            ))}
          </div>
        </div>
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100">
          <div className="font-semibold text-slate-800 flex items-center gap-2"><I.Sparkles size={16} className="text-violet-600"/> Plano de revisão sugerido</div>
          <div className="text-sm text-slate-600 mt-1">Reveja 2 aulas de modos avançados de VM e resolva 30 questões de desmame esta semana.</div>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800">Simulados disponíveis</h3>
          <div className="flex gap-1.5">
            {["Todos","Geral","Hospitalar","UTI","Saúde Pública"].map((t,i)=>(
              <button key={t} className={`text-xs px-3 py-1.5 rounded-lg font-semibold ${i===0?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {mockExams.map(m=>(
            <div key={m.id} className="p-4 rounded-2xl border border-slate-100 hover:shadow-soft transition">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-coral-500 grid place-items-center text-white shadow-soft">
                  <I.Trophy size={20}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm">{m.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{m.questions} questões · {m.duration} · {m.difficulty}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                      m.status==="Disponível"?"bg-mint-100 text-mint-700":
                      m.status==="Agendado"?"bg-amber-100 text-amber-700":
                      "bg-slate-200 text-slate-600"
                    }`}>{m.status}</span>
                    <button className="ml-auto text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                      {m.status==="Concluído"?"Ver resultado":"Iniciar"} <I.ChevronRight size={12}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranking */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><I.Award size={18} className="text-amber-500"/> Ranking semanal</h3>
        <div className="space-y-2">
          {[
            {p:1,n:"Carla R.",x:"8.940 XP",b:"🥇"},
            {p:2,n:"Felipe M.",x:"7.620 XP",b:"🥈"},
            {p:3,n:"Larissa M. (você)",x:"4.820 XP",b:"🥉",me:true},
            {p:4,n:"Júlia P.",x:"4.310 XP",b:"4"},
            {p:5,n:"Rafael L.",x:"3.890 XP",b:"5"},
          ].map(r=>(
            <div key={r.p} className={`flex items-center gap-3 p-3 rounded-2xl ${r.me?"bg-mint-50 border border-mint-200":"hover:bg-slate-50"}`}>
              <span className="w-8 text-center text-lg">{r.b}</span>
              <div className="flex-1 font-semibold text-slate-800 text-sm">{r.n}</div>
              <span className="text-xs font-bold text-slate-600">{r.x}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
