import * as I from "../icons";
import { subjects, motivationalMessages, mockExams } from "../data";
import type { View } from "../components/Sidebar";

export default function Dashboard({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24 lg:pb-6">
      {/* Greeting */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="animate-slide-up">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Olá, Larissa! 👋</h2>
          <p className="text-slate-500 mt-1">{motivationalMessages[0]}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={()=>setView("path")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">
            <I.Play size={14}/> Continuar estudando
          </button>
          <button onClick={()=>setView("ai")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold hover:opacity-90">
            <I.Sparkles size={14}/> Pergunte à IA
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {Icon:I.Flame,label:"Sequência",value:"12",sub:"dias seguidos",color:"from-amber-400 to-coral-500"},
          {Icon:I.Trophy,label:"Lições",value:"143",sub:"+8 esta semana",color:"from-mint-400 to-mint-600"},
          {Icon:I.Chart,label:"Acerto",value:"82%",sub:"+4% vs semana passada",color:"from-sky-400 to-blue-500"},
          {Icon:I.Lightning,label:"XP",value:"4.820",sub:"Nível 14 · 320 p/ subir",color:"from-violet-500 to-fuchsia-500"},
        ].map(({Icon,label,value,sub,color},i)=>(
          <div key={i} className="bg-white rounded-2xl p-4 shadow-soft border border-slate-100 hover:shadow-pop transition">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} text-white grid place-items-center shadow-soft`}>
                <Icon size={18}/>
              </div>
              <div className="text-xs font-medium text-slate-500">{label}</div>
            </div>
            <div className="mt-3 text-2xl font-extrabold text-slate-900">{value}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Continue studying */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-mint-400/20 rounded-full blur-3xl"/>
          <div className="absolute -right-2 -bottom-10 w-48 h-48 bg-coral-400/20 rounded-full blur-3xl"/>
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 px-2.5 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse"/> Em andamento
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold">Pressão arterial · Aferição correta</h3>
            <p className="mt-1 text-slate-300 text-sm">Módulo 1 · Sistema Cardiovascular · 12 min restantes</p>
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-mint-400 to-mint-500" style={{width:"68%"}}/>
            </div>
            <div className="mt-1 text-xs text-slate-400">68% concluído</div>
            <div className="mt-5 flex flex-wrap gap-2">
              <button onClick={()=>setView("video")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold">
                <I.Play size={14}/> Continuar aula
              </button>
              <button onClick={()=>setView("questions")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20">
                <I.Book size={14}/> Praticar questões
              </button>
              <button onClick={()=>setView("flashcards")} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20">
                <I.Cards size={14}/> Flashcards
              </button>
            </div>
          </div>
        </div>

        {/* Weekly progress */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-slate-800">Progresso semanal</div>
              <div className="text-xs text-slate-400">Meta: 7 dias / 5h</div>
            </div>
            <span className="text-xs font-bold text-mint-600 bg-mint-50 px-2 py-1 rounded-lg">+18%</span>
          </div>
          <div className="mt-5 flex items-end gap-2 h-32">
            {[40,60,30,80,55,90,70].map((h,i)=>(
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full bg-slate-100 rounded-lg overflow-hidden flex items-end" style={{height:"100%"}}>
                  <div className={`w-full rounded-lg bg-gradient-to-t ${i===6?"from-coral-400 to-coral-500":"from-mint-400 to-mint-500"}`} style={{height:`${h}%`}}/>
                </div>
                <span className={`text-[10px] font-medium ${i===6?"text-coral-600":"text-slate-400"}`}>{["S","T","Q","Q","S","S","D"][i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-500">Você estudou <strong className="text-slate-800">4h 12min</strong> esta semana</div>
        </div>
      </div>

      {/* Subjects performance */}
      <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-bold text-slate-800">Desempenho por matéria</h3>
            <p className="text-xs text-slate-400">Sua trilha personalizada</p>
          </div>
          <button onClick={()=>setView("analytics")} className="text-xs font-semibold text-mint-600 hover:text-mint-700 inline-flex items-center gap-1">
            Ver análise completa <I.ChevronRight size={12}/>
          </button>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subjects.slice(0,6).map(s=>(
            <div key={s.id} className="p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} grid place-items-center text-xl shadow-soft`}>
                  <span>{s.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm truncate">{s.name}</div>
                  <div className="text-[11px] text-slate-400">{s.done}/{s.lessons} aulas</div>
                </div>
                <div className="text-xs font-bold text-slate-700">{s.accuracy}%</div>
              </div>
              <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${s.color} rounded-full`} style={{width:`${s.progress}%`}}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Upcoming exams */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-800">Próximos simulados</h3>
              <p className="text-xs text-slate-400">Programe sua semana</p>
            </div>
            <button onClick={()=>setView("exams")} className="text-xs font-semibold text-mint-600 inline-flex items-center gap-1">
              Ver todos <I.ChevronRight size={12}/>
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {mockExams.slice(0,3).map(m=>(
              <div key={m.id} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-coral-500 text-white grid place-items-center shadow-soft">
                  <I.Trophy size={20}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm truncate">{m.title}</div>
                  <div className="text-[11px] text-slate-400">{m.questions} questões · {m.duration} · {m.difficulty}</div>
                </div>
                <span className={`text-[11px] font-bold px-2 py-1 rounded-lg ${
                  m.status==="Disponível"?"bg-mint-100 text-mint-700":
                  m.status==="Agendado"?"bg-amber-100 text-amber-700":
                  "bg-slate-200 text-slate-600"
                }`}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-amber-50 to-coral-50 rounded-3xl p-6 border border-amber-100">
          <h3 className="font-bold text-slate-800 flex items-center gap-2"><I.Award size={18} className="text-amber-500"/> Conquistas recentes</h3>
          <div className="mt-4 space-y-3">
            {[
              {t:"100 questões em uma semana",d:"Desbloqueou +200 XP",emoji:"🏆"},
              {t:"Primeira aula concluída",d:"Bem-vinda ao Plantão+",emoji:"🎉"},
              {t:"Sequência de 7 dias",d:"Mantenha o ritmo!",emoji:"🔥"},
            ].map((a,i)=>(
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur">
                <span className="text-2xl">{a.emoji}</span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-800">{a.t}</div>
                  <div className="text-[11px] text-slate-500">{a.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
