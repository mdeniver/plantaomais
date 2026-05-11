import { useMemo, useState } from "react";
import * as I from "../icons";
import { questions } from "../data";

const subjects = ["Todas","Farmacologia","Emergência","Fundamentos","Pediatria"];
const boards = ["Todas","IBFC","FCC","VUNESP","IDECAN"];
const years = ["Todos","2024","2023","2022","2021"];
const difficulties = ["Todas","Fácil","Médio","Difícil"];

export default function Questions() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [filters, setFilters] = useState({s:"Todas",b:"Todas",y:"Todos",d:"Todas"});
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [saved, setSaved] = useState<string[]>([]);

  const filtered = useMemo(()=>{
    return questions.filter(q=>(
      (filters.s==="Todas"||q.subject===filters.s) &&
      (filters.b==="Todas"||q.board===filters.b) &&
      (filters.y==="Todos"||String(q.year)===filters.y) &&
      (filters.d==="Todas"||q.difficulty===filters.d)
    ));
  },[filters]);
  const q = filtered[idx % Math.max(filtered.length,1)] || questions[0];

  const next = () => { setSelected(null); setRevealed(false); setIdx(i=>(i+1)%filtered.length); };
  const reveal = () => setRevealed(true);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 grid lg:grid-cols-4 gap-5">
      {/* Filters sidebar */}
      <aside className="lg:col-span-1 space-y-4">
        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4"><I.Filter size={16}/> Filtros</h3>
          {[
            {k:"s",l:"Disciplina",opts:subjects},
            {k:"b",l:"Banca",opts:boards},
            {k:"y",l:"Ano",opts:years},
            {k:"d",l:"Dificuldade",opts:difficulties},
          ].map(g=>(
            <div key={g.k} className="mb-4">
              <div className="text-xs font-semibold text-slate-500 mb-2">{g.l}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.opts.map(o=>(
                  <button
                    key={o}
                    onClick={()=>setFilters(f=>({...f,[g.k]:o}))}
                    className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition ${
                      (filters as any)[g.k]===o ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="w-full mt-2 text-sm font-semibold bg-mint-500 text-white py-2.5 rounded-xl hover:bg-mint-600">Aplicar</button>
        </div>

        <div className="bg-gradient-to-br from-sky-500 to-indigo-500 rounded-3xl p-5 text-white">
          <I.Clock size={22}/>
          <div className="mt-2 font-bold">Modo cronometrado</div>
          <div className="text-sm text-white/80 mt-1">Resolva como em uma prova real.</div>
          <div className="flex items-center justify-between mt-3">
            <span className="font-mono text-2xl font-bold">{Math.floor(seconds/60).toString().padStart(2,"0")}:{(seconds%60).toString().padStart(2,"0")}</span>
            <button
              onClick={()=>{
                setTimer(t=>!t);
                if(!timer){
                  const id = setInterval(()=>setSeconds(s=>s+1),1000);
                  setTimeout(()=>clearInterval(id),60000); // demo only
                }
              }}
              className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg"
            >
              {timer?"Parar":"Iniciar"}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Estatísticas</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Resolvidas hoje</span><strong className="text-slate-800">42</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Acerto</span><strong className="text-mint-600">82%</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Tempo médio</span><strong className="text-slate-800">1m 24s</strong></div>
            <div className="flex justify-between"><span className="text-slate-500">Salvas</span><strong className="text-slate-800">{saved.length}</strong></div>
          </div>
        </div>
      </aside>

      {/* Question */}
      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 animate-pop-in">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="bg-mint-100 text-mint-700 font-semibold px-2 py-1 rounded-lg">{q.subject}</span>
            <span className="bg-slate-100 text-slate-600 font-semibold px-2 py-1 rounded-lg">{q.board} · {q.year}</span>
            <span className="bg-amber-100 text-amber-700 font-semibold px-2 py-1 rounded-lg">{q.difficulty}</span>
            <span className="text-slate-400 ml-auto text-[11px]">Questão #{(idx%filtered.length)+1} de {filtered.length}</span>
          </div>
          <p className="mt-4 text-slate-800 leading-relaxed">{q.statement}</p>
          <div className="mt-5 space-y-2">
            {q.options.map((opt,i)=>{
              const isCorrect = i===q.correct;
              const isSelected = selected===i;
              const showResult = revealed;
              return (
                <button
                  key={i}
                  onClick={()=>!revealed && setSelected(i)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition flex items-start gap-3 ${
                    showResult && isCorrect ? "border-mint-400 bg-mint-50" :
                    showResult && isSelected && !isCorrect ? "border-coral-400 bg-coral-50" :
                    isSelected ? "border-slate-900 bg-slate-50" :
                    "border-slate-100 hover:border-slate-300"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg grid place-items-center font-bold text-sm shrink-0 ${
                    showResult && isCorrect ? "bg-mint-500 text-white" :
                    showResult && isSelected && !isCorrect ? "bg-coral-500 text-white" :
                    isSelected ? "bg-slate-900 text-white" :
                    "bg-slate-100 text-slate-600"
                  }`}>
                    {String.fromCharCode(65+i)}
                  </span>
                  <span className="text-sm text-slate-800 pt-1">{opt}</span>
                  {showResult && isCorrect && <I.Check size={20} className="ml-auto text-mint-600 shrink-0"/>}
                  {showResult && isSelected && !isCorrect && <I.X size={20} className="ml-auto text-coral-600 shrink-0"/>}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              disabled={selected===null||revealed}
              onClick={reveal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold disabled:opacity-40 hover:bg-slate-800"
            >
              Confirmar resposta
            </button>
            <button onClick={next} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mint-500 text-white text-sm font-semibold hover:bg-mint-600">
              Próxima <I.ChevronRight size={14}/>
            </button>
            <div className="ml-auto flex gap-1.5">
              <button
                onClick={()=>setSaved(s=>s.includes(q.id)?s.filter(x=>x!==q.id):[...s,q.id])}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border ${
                  saved.includes(q.id) ? "bg-amber-50 border-amber-200 text-amber-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <I.Bookmark size={14}/> {saved.includes(q.id)?"Salva":"Salvar"}
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50">
                <I.Flame size={14}/> Marcar difícil
              </button>
            </div>
          </div>
        </div>

        {/* Explanation */}
        {revealed && (
          <div className="bg-gradient-to-br from-mint-50 to-sky-50 rounded-3xl p-5 border border-mint-100 animate-slide-up">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <I.Sparkles size={18} className="text-mint-600"/> Explicação detalhada
            </div>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{q.explanation}</p>
            <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-mint-700 hover:text-mint-800">
              Ver aula relacionada <I.ChevronRight size={14}/>
            </button>
          </div>
        )}

        {/* Comments */}
        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Comentários da comunidade</h3>
          <div className="space-y-3">
            {[
              {n:"Beatriz O.",t:"Caí nessa pegadinha! A regra dos 9 certos salva!",a:"💚"},
              {n:"Lucas P.",t:"Boa explicação. Coloquei no resumo aqui pra revisar amanhã.",a:"💙"},
            ].map((c,i)=>(
              <div key={i} className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 grid place-items-center text-lg">{c.a}</div>
                <div className="flex-1 bg-slate-50 rounded-2xl p-3">
                  <div className="text-xs font-semibold text-slate-700">{c.n}</div>
                  <div className="text-sm text-slate-600">{c.t}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input placeholder="Comente esta questão..." className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-mint-400"/>
            <button className="bg-slate-900 text-white px-3 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5"><I.Send size={14}/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
