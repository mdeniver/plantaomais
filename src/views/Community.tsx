import * as I from "../icons";
import { communityPosts } from "../data";

export default function Community() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-6 grid lg:grid-cols-3 gap-5">
      {/* Sidebar */}
      <aside className="space-y-4">
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-5 text-white">
          <I.Users size={26}/>
          <div className="mt-2 font-bold text-lg">Comunidade Plantão+</div>
          <div className="text-sm text-white/85 mt-1">Estude com mais de 120 mil colegas</div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Categorias</h3>
          <div className="space-y-1">
            {[
              {n:"Geral",c:"bg-slate-100 text-slate-700",i:"💬"},
              {n:"Concursos",c:"bg-amber-100 text-amber-700",i:"🏆"},
              {n:"Dúvidas",c:"bg-sky-100 text-sky-700",i:"❓"},
              {n:"Grupos de estudo",c:"bg-violet-100 text-violet-700",i:"👥"},
              {n:"Anúncios",c:"bg-coral-100 text-coral-700",i:"📢"},
            ].map((cat,i)=>(
              <button key={i} className="w-full flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-sm">
                <span className={`w-8 h-8 rounded-lg grid place-items-center text-base ${cat.c}`}>{cat.i}</span>
                <span className="text-slate-700 font-medium">{cat.n}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3">Desafio da semana</h3>
          <div className="p-3 rounded-2xl bg-gradient-to-br from-mint-50 to-sky-50 border border-mint-100">
            <div className="text-xs font-bold text-mint-700 uppercase">100 questões</div>
            <div className="text-sm font-semibold text-slate-800 mt-1">Resolva 100 questões de farmacologia em 7 dias</div>
            <div className="mt-2 h-2 bg-white rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-mint-400 to-mint-600" style={{width:"42%"}}/>
            </div>
            <div className="mt-1 text-[11px] text-slate-500">42 / 100 · Recompensa: +500 XP</div>
          </div>
        </div>
      </aside>

      {/* Feed */}
      <div className="lg:col-span-2 space-y-4">
        {/* Post composer */}
        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 grid place-items-center text-white font-bold">LM</div>
            <input placeholder="Compartilhe uma dúvida ou conquista..." className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-mint-400"/>
            <button className="bg-mint-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5"><I.Send size={14}/></button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-3">
          {communityPosts.map(p=>(
            <div key={p.id} className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100 hover:shadow-pop transition">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-100 grid place-items-center text-xl">{p.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-800 text-sm">{p.user}</span>
                    <span className="text-[11px] text-slate-400">· {p.time}</span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">{p.category}</span>
                  </div>
                  <h4 className="mt-1 font-semibold text-slate-900">{p.topic}</h4>
                  <p className="text-sm text-slate-500 mt-1">Quem manda dicas? Quero focar em fixar antes da prova de domingo!</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                    <button className="inline-flex items-center gap-1 hover:text-coral-500"><I.Heart size={14}/> {p.likes}</button>
                    <button className="inline-flex items-center gap-1 hover:text-slate-800"><I.Note size={14}/> {p.replies} respostas</button>
                    <button className="inline-flex items-center gap-1 hover:text-slate-800 ml-auto"><I.Bookmark size={14}/></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
