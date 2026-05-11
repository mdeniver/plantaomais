import * as I from "../icons";
import type { View } from "../components/Sidebar";

export default function Landing({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 grid place-items-center text-white shadow-pop relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
              <I.Heart size={22} />
            </div>
            <div className="font-extrabold text-slate-800 text-xl tracking-tight">Plantão<span className="text-amber-500">+</span></div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900">Recursos</a>
            <a href="#path" className="hover:text-slate-900">Trilhas</a>
            <a href="#pricing" className="hover:text-slate-900">Planos</a>
            <a href="#community" className="hover:text-slate-900">Comunidade</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setView("dashboard")} className="hidden sm:inline text-sm font-medium text-slate-600 px-3 py-2">Entrar</button>
            <button
              onClick={() => setView("dashboard")}
              className="text-sm font-semibold bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-slate-800 transition"
            >
              Começar grátis
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative gradient-mesh overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-14 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
              <I.Sparkles size={12} /> Novo · Assistente IA com explicação personalizada
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Estudo de enfermagem que não te <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">cansa</span>, te <span className="bg-gradient-to-r from-coral-500 to-amber-500 bg-clip-text text-transparent">aprova</span>.
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Trilhas gamificadas, milhares de questões comentadas, simulados oficiais, flashcards inteligentes
              e um assistente IA que explica até o que parece impossível. Tudo em um só lugar.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setView("dashboard")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-mint-500 to-mint-600 text-white font-semibold shadow-pop hover:scale-[1.02] transition"
              >
                Começar grátis por 7 dias
                <I.ChevronRight size={18} />
              </button>
              <button
                onClick={() => setView("path")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50"
              >
                <I.Play size={16} /> Ver trilha de estudos
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {["from-mint-400 to-mint-600","from-coral-400 to-coral-600","from-violet-400 to-pink-500","from-sky-400 to-blue-500"].map((g,i)=>(
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} ring-2 ring-white`}/>
                ))}
              </div>
              <div>
                <div className="font-semibold text-slate-800">+120 mil estudantes</div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({length:5}).map((_,i)=>(<I.Star key={i} size={12} className="fill-amber-400"/>))}
                  <span className="text-slate-500 ml-1">4.9/5 na App Store</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -top-8 -left-6 w-72 h-72 bg-mint-300/40 rounded-full blur-3xl"/>
            <div className="absolute -bottom-10 -right-6 w-72 h-72 bg-coral-400/30 rounded-full blur-3xl"/>
            <div className="relative bg-white rounded-3xl shadow-pop p-5 border border-slate-100 animate-pop-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mint-400 to-mint-600 text-white grid place-items-center"><I.Stethoscope size={18}/></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Trilha · Anatomia</div>
                    <div className="text-[11px] text-slate-400">Módulo 1 · Sistema Cardiovascular</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-mint-600 bg-mint-50 px-2 py-1 rounded-lg">Lvl 14</span>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {[
                  {s:"done"},{s:"done"},{s:"current"},{s:"locked"},{s:"locked"},
                ].map((n,i)=>(
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`w-12 h-12 rounded-2xl grid place-items-center ${
                      n.s==="done" ? "bg-mint-500 text-white shadow-soft" :
                      n.s==="current" ? "bg-gradient-to-br from-amber-400 to-coral-500 text-white shadow-pop animate-pulse-soft" :
                      "bg-slate-100 text-slate-400"
                    }`}>
                      {n.s==="done" ? <I.Check size={18}/> : n.s==="current" ? <I.Star size={18}/> : <I.Lock size={16}/>}
                    </div>
                    <span className="text-[10px] text-slate-500">{n.s==="done"?"Pronto":n.s==="current"?"Hoje":"—"}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-mint-50 to-sky-50 border border-mint-100">
                <div className="text-xs text-slate-500">Próxima lição</div>
                <div className="font-semibold text-slate-800">Pressão arterial · Aferição correta</div>
                <button className="mt-2 text-xs font-semibold text-white bg-slate-900 px-3 py-1.5 rounded-lg">Continuar +30 XP</button>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-24 hidden md:block bg-white rounded-2xl shadow-pop p-3 border border-slate-100 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-coral-500 grid place-items-center text-white"><I.Flame size={18}/></div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-slate-800">12 dias</div>
                  <div className="text-[10px] text-slate-400">Sequência de estudo</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-6 hidden md:block bg-white rounded-2xl shadow-pop p-3 border border-slate-100 animate-float" style={{animationDelay:"0.6s"}}>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center text-white"><I.Sparkles size={18}/></div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-slate-800">IA respondeu</div>
                  <div className="text-[10px] text-slate-400">"Diferenças entre IAM e angina?"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Trust */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400 text-sm font-semibold">
          <span>Aprovados em:</span>
          <span>COREN-SP</span>
          <span>•</span>
          <span>Hospital Sírio-Libanês</span>
          <span>•</span>
          <span>Albert Einstein</span>
          <span>•</span>
          <span>HC-FMUSP</span>
          <span>•</span>
          <span>Revalida</span>
          <span>•</span>
          <span>SES-RJ</span>
        </div>
      </section>

      {/* Features grid */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-mint-600 uppercase tracking-wider">Tudo o que você precisa</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Uma plataforma completa para a sua aprovação</h2>
            <p className="mt-3 text-slate-600">Combinamos as melhores ideias de Duolingo, Descomplica e Qconcursos em uma experiência feita para enfermagem.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {Icon:I.Path,t:"Trilha gamificada",d:"Lições com XP, badges e checkpoints. Avance um passo por dia.",c:"from-mint-400 to-mint-600"},
              {Icon:I.Play,t:"Videoaulas premium",d:"Professores especialistas, marcadores de capítulo, materiais.",c:"from-coral-400 to-pink-500"},
              {Icon:I.Book,t:"Banco de questões",d:"+50 mil questões filtráveis por banca, ano, instituição e tema.",c:"from-sky-400 to-blue-500"},
              {Icon:I.Trophy,t:"Simulados reais",d:"Provas anteriores, simulados personalizados e ranking nacional.",c:"from-amber-400 to-orange-500"},
              {Icon:I.Sparkles,t:"Assistente IA",d:"Tira dúvidas, monta plano de estudo e analisa seus erros.",c:"from-violet-500 to-fuchsia-500"},
              {Icon:I.Cards,t:"Flashcards inteligentes",d:"Repetição espaçada para memorizar de verdade.",c:"from-teal-400 to-cyan-500"},
            ].map(({Icon,t,d,c},i)=>(
              <div key={i} className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-pop transition border border-slate-100">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c} grid place-items-center text-white shadow-soft`}>
                  <Icon size={22}/>
                </div>
                <h3 className="mt-4 font-bold text-slate-800 text-lg">{t}</h3>
                <p className="mt-1 text-sm text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path preview */}
      <section id="path" className="py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-coral-600 uppercase tracking-wider">Trilha visual</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Aprenda como em um jogo, evolua como uma profissional</h2>
            <p className="mt-3 text-slate-600">Cada matéria é dividida em módulos com lições curtas, quizzes e checkpoints. Você desbloqueia o próximo conteúdo conforme avança.</p>
            <ul className="mt-6 space-y-3">
              {["Mais de 13 disciplinas de enfermagem","Conquistas e badges para cada conquista","Plano adaptado ao seu nível","Modo revisão para vésperas de prova"].map(t=>(
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-mint-100 text-mint-600 grid place-items-center mt-0.5"><I.Check size={14}/></span>
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-mint-50 via-white to-sky-50 rounded-3xl p-6 border border-slate-100 shadow-soft">
              {[
                {l:"Coração: estrutura",s:"done"},
                {l:"Ciclo cardíaco",s:"done"},
                {l:"Pressão arterial",s:"current"},
                {l:"Aferição de PA",s:"locked"},
                {l:"Boss: Caso clínico",s:"locked"},
              ].map((n,i)=>(
                <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl mb-2 ${
                  n.s==="current"?"bg-white shadow-pop":"bg-white/60"
                }`}>
                  <div className={`w-12 h-12 rounded-2xl grid place-items-center ${
                    n.s==="done"?"bg-mint-500 text-white":
                    n.s==="current"?"bg-gradient-to-br from-coral-400 to-coral-600 text-white animate-pulse-soft":
                    "bg-slate-100 text-slate-400"
                  }`}>
                    {n.s==="done"?<I.Check size={18}/>:n.s==="current"?<I.Play size={16}/>:<I.Lock size={16}/>}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 text-sm">{n.l}</div>
                    <div className="text-[11px] text-slate-400">+{20+i*5} XP · Lição {i+1}</div>
                  </div>
                  {n.s==="current" && <I.ChevronRight size={18} className="text-coral-500"/>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40"/>
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Comece sua aprovação hoje 🩺</h2>
          <p className="mt-3 text-slate-300 text-lg">7 dias grátis. Sem cartão. Cancele quando quiser.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={()=>setView("dashboard")} className="px-7 py-4 rounded-2xl bg-mint-500 text-white font-semibold shadow-pop hover:bg-mint-600">Entrar na plataforma</button>
            <button onClick={()=>setView("pricing")} className="px-7 py-4 rounded-2xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20">Ver planos</button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center text-white"><I.Heart size={14}/></div>
            © 2026 Plantão+ · Feito com 💚 para enfermeir@s
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-800">Termos</a>
            <a href="#" className="hover:text-slate-800">Privacidade</a>
            <a href="#" className="hover:text-slate-800">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
