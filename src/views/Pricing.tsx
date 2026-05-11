import { useState } from "react";
import * as I from "../icons";

const plans = [
  {
    name: "Free",
    desc: "Para experimentar",
    price: { monthly: 0, annual: 0 },
    color: "from-slate-100 to-white",
    text: "text-slate-900",
    border: "border-slate-200",
    cta: "Começar grátis",
    features: ["20 questões/dia","2 aulas por semana","Trilha gamificada básica","Comunidade pública"],
  },
  {
    name: "Mensal",
    desc: "Flexível, sem compromisso",
    price: { monthly: 49, annual: 49 },
    color: "from-white to-white",
    text: "text-slate-900",
    border: "border-slate-200",
    cta: "Começar 7 dias grátis",
    features: ["Banco completo de questões","Todas as videoaulas","Flashcards ilimitados","Simulados completos","Planner inteligente"],
  },
  {
    name: "Anual",
    desc: "Melhor custo · Mais escolhido",
    price: { monthly: 29, annual: 348 },
    color: "from-mint-500 to-emerald-600",
    text: "text-white",
    border: "border-mint-500",
    cta: "Economizar 40%",
    highlight: true,
    features: ["Tudo do Mensal","Assistente IA ilimitado","Simulados oficiais COREN","Conteúdo exclusivo de UTI","Suporte prioritário","Grupos de estudo guiados"],
  },
  {
    name: "Premium Coach",
    desc: "Mentoria 1:1",
    price: { monthly: 199, annual: 1990 },
    color: "from-slate-900 to-slate-800",
    text: "text-white",
    border: "border-slate-900",
    cta: "Falar com consultor",
    features: ["Tudo do Anual","Mentoria semanal com enfermeiro","Plano de estudo manual","Correção personalizada de redação","Garantia de aprovação*"],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 pb-24 lg:pb-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-mint-700 bg-mint-100 px-3 py-1.5 rounded-full">
          <I.Star size={12} className="fill-mint-600"/> 7 dias grátis em qualquer plano pago
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900">Escolha o plano da sua aprovação</h1>
        <p className="mt-3 text-slate-600">Cancele quando quiser. Sem fidelidade. Garantia de 30 dias.</p>
        <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-xl">
          <button onClick={()=>setAnnual(false)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${!annual?"bg-white shadow-soft text-slate-900":"text-slate-500"}`}>Mensal</button>
          <button onClick={()=>setAnnual(true)} className={`px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 ${annual?"bg-white shadow-soft text-slate-900":"text-slate-500"}`}>
            Anual <span className="text-[10px] bg-mint-100 text-mint-700 px-1.5 py-0.5 rounded-md">-40%</span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {plans.map((p,i)=>(
          <div key={i} className={`relative rounded-3xl p-6 border-2 ${p.border} bg-gradient-to-br ${p.color} ${p.text} ${p.highlight?"shadow-pop scale-[1.02] lg:scale-[1.04]":"shadow-soft"} transition`}>
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-amber-400 text-slate-900 px-3 py-1 rounded-full shadow-soft">⭐ MAIS ESCOLHIDO</span>
            )}
            <div className="font-bold text-lg">{p.name}</div>
            <div className={`text-xs ${p.highlight||p.name==="Premium Coach"?"text-white/70":"text-slate-500"}`}>{p.desc}</div>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">R${annual?p.price.monthly:p.price.monthly}</span>
              <span className={`text-sm ${p.highlight||p.name==="Premium Coach"?"text-white/70":"text-slate-500"}`}>/mês</span>
            </div>
            {annual && p.price.annual>0 && (
              <div className={`text-xs ${p.highlight||p.name==="Premium Coach"?"text-white/70":"text-slate-500"}`}>Cobrança anual de R${p.price.annual}</div>
            )}
            <button className={`mt-5 w-full py-3 rounded-xl font-semibold text-sm transition ${
              p.highlight ? "bg-white text-mint-700 hover:scale-[1.02]" :
              p.name==="Premium Coach" ? "bg-white text-slate-900 hover:scale-[1.02]" :
              "bg-slate-900 text-white hover:bg-slate-800"
            }`}>{p.cta}</button>
            <div className={`mt-5 space-y-2 text-sm ${p.highlight||p.name==="Premium Coach"?"text-white/90":"text-slate-700"}`}>
              {p.features.map(f=>(
                <div key={f} className="flex items-start gap-2">
                  <span className={`w-5 h-5 rounded-full grid place-items-center mt-0.5 shrink-0 ${
                    p.highlight ? "bg-white/20" :
                    p.name==="Premium Coach" ? "bg-white/20" :
                    "bg-mint-100 text-mint-600"
                  }`}>
                    <I.Check size={12}/>
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="mt-16 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {[
          {Icon:I.Shield,t:"Pagamento 100% seguro",d:"Stripe e PIX · seus dados protegidos"},
          {Icon:I.Award,t:"Garantia de 30 dias",d:"Não gostou? Devolvemos 100% do valor"},
          {Icon:I.Heart,t:"+120 mil estudantes",d:"94% recomendam para colegas"},
        ].map((t,i)=>(
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mint-400 to-mint-600 text-white grid place-items-center mx-auto"><t.Icon size={20}/></div>
            <div className="mt-3 font-bold text-slate-800">{t.t}</div>
            <div className="text-xs text-slate-500 mt-1">{t.d}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-center text-2xl font-extrabold text-slate-900">O que dizem as alunas e alunos</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            {n:"Beatriz S.",r:"Aprovada COREN-SP 2025",t:"A trilha gamificada me fez não desistir. Em 4 meses estava aprovada!",a:"💚"},
            {n:"Lucas R.",r:"Hospital Sírio-Libanês",t:"O assistente IA virou meu professor particular. Recomendo demais.",a:"💜"},
            {n:"Mariana L.",r:"Aprovada Albert Einstein",t:"Os simulados são iguais às provas reais. Surreal a qualidade.",a:"🩷"},
          ].map((t,i)=>(
            <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft">
              <div className="flex gap-0.5 text-amber-400 mb-3">{Array.from({length:5}).map((_,j)=><I.Star key={j} size={14} className="fill-amber-400"/>)}</div>
              <p className="text-sm text-slate-700">"{t.t}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center text-lg">{t.a}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{t.n}</div>
                  <div className="text-[11px] text-slate-500">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ teaser */}
      <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30"/>
        <div className="relative">
          <h3 className="text-2xl font-extrabold">Ainda em dúvida?</h3>
          <p className="mt-2 text-slate-300">Fale com nosso time. Respondemos em menos de 2 horas.</p>
          <button className="mt-5 bg-mint-500 hover:bg-mint-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
            <I.Send size={14}/> Falar com consultor
          </button>
        </div>
      </div>
    </div>
  );
}
