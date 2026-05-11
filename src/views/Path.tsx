import * as I from "../icons";
import { learningPath, subjects } from "../data";
import type { View } from "../components/Sidebar";

export default function Path({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-mint-500 via-mint-600 to-emerald-600 rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden mb-6">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"/>
        <div className="absolute right-8 top-6 hidden md:block animate-float opacity-90">
          <div className="w-24 h-24 rounded-3xl bg-white/15 grid place-items-center backdrop-blur">
            <I.Stethoscope size={48}/>
          </div>
        </div>
        <div className="relative max-w-2xl">
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">Sua Trilha · Aprovação COREN-SP</span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold">Avance um passo por dia rumo à aprovação</h2>
          <p className="mt-2 text-white/80 text-sm">Trilha personalizada com base no seu nível e desempenho. Conclua lições, ganhe XP, suba de nível.</p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <div className="bg-white/15 px-3 py-2 rounded-xl backdrop-blur">
              <div className="text-[10px] text-white/70">XP Total</div>
              <div className="font-bold">4.820 XP</div>
            </div>
            <div className="bg-white/15 px-3 py-2 rounded-xl backdrop-blur">
              <div className="text-[10px] text-white/70">Nível</div>
              <div className="font-bold">14 / 30</div>
            </div>
            <div className="bg-white/15 px-3 py-2 rounded-xl backdrop-blur">
              <div className="text-[10px] text-white/70">Conquistas</div>
              <div className="font-bold">23 badges</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subject chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
        {subjects.map((s,i)=>(
          <button key={s.id} className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border ${i===0?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}>
            <span>{s.icon}</span> {s.name}
          </button>
        ))}
      </div>

      {/* Path */}
      <div className="space-y-8">
        {learningPath.map((mod, mi)=>(
          <div key={mi} className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.color} grid place-items-center text-white shadow-soft`}>
                <I.Path size={20}/>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{mod.module}</h3>
                <p className="text-xs text-slate-500">{mod.subject}</p>
              </div>
            </div>

            {/* Path nodes */}
            <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-soft">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 hidden md:block mx-12"/>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
                {mod.lessons.map((l, li)=>{
                  const center = li % 2 === 1;
                  const colorMap = {
                    done: "from-mint-400 to-mint-600",
                    current: "from-amber-400 to-coral-500",
                    locked: "from-slate-200 to-slate-300",
                  }[l.status];
                  return (
                    <div key={l.id} className={`flex flex-col items-center text-center ${center?"md:translate-y-6":""}`}>
                      <button
                        disabled={l.status==="locked"}
                        onClick={()=>l.status!=="locked" && setView("video")}
                        className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${colorMap} grid place-items-center text-white shadow-pop transition hover:scale-105 disabled:cursor-not-allowed ${l.status==="current"?"animate-pulse-soft ring-4 ring-coral-200":""}`}
                      >
                        {l.status==="done" ? <I.Check size={28}/> :
                         l.status==="current" ? (l.type==="boss" ? <I.Trophy size={26}/> : <I.Play size={26}/>) :
                         <I.Lock size={22}/>}
                        {l.type==="boss" && l.status!=="locked" && (
                          <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-coral-500 text-white px-2 py-0.5 rounded-full shadow-soft">BOSS</span>
                        )}
                        {l.type==="bonus" && (
                          <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-violet-500 text-white px-2 py-0.5 rounded-full">BÔNUS</span>
                        )}
                      </button>
                      <div className="mt-3 text-sm font-semibold text-slate-800 max-w-[140px]">{l.title}</div>
                      <div className="text-[11px] text-slate-400">+{l.xp} XP</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
