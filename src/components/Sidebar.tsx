import * as I from "../icons";

type View =
  | "landing"
  | "dashboard"
  | "path"
  | "video"
  | "questions"
  | "exams"
  | "ai"
  | "flashcards"
  | "planner"
  | "analytics"
  | "community"
  | "pricing";

const items: { id: View; label: string; Icon: any }[] = [
  { id: "dashboard", label: "Dashboard", Icon: I.Home },
  { id: "path", label: "Trilha de Estudos", Icon: I.Path },
  { id: "video", label: "Videoaulas", Icon: I.Play },
  { id: "questions", label: "Banco de Questões", Icon: I.Book },
  { id: "exams", label: "Simulados", Icon: I.Trophy },
  { id: "ai", label: "Assistente IA", Icon: I.Sparkles },
  { id: "flashcards", label: "Flashcards", Icon: I.Cards },
  { id: "planner", label: "Planner", Icon: I.Calendar },
  { id: "analytics", label: "Desempenho", Icon: I.Chart },
  { id: "community", label: "Comunidade", Icon: I.Users },
];

export default function Sidebar({
  view,
  setView,
  open,
  setOpen,
}: {
  view: View;
  setView: (v: View) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-slate-100 z-50 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-5 flex items-center justify-between">
          <button onClick={() => setView("landing")} className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 grid place-items-center text-white shadow-pop group-hover:scale-105 transition relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
              <I.Heart size={22} />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-slate-800 text-xl tracking-tight">Plantão<span className="text-amber-500">+</span></div>
              <div className="text-[11px] text-slate-500 font-medium tracking-wide">APROVAÇÃO PREMIUM</div>
            </div>
          </button>
          <button onClick={() => setOpen(false)} className="lg:hidden text-slate-400">
            <I.X size={22} />
          </button>
        </div>

        {/* Streak banner */}
        <div className="mx-4 mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-coral-500 p-4 text-white shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs opacity-90 font-medium">Sequência atual</div>
              <div className="text-2xl font-bold">12 dias 🔥</div>
            </div>
            <I.Flame size={36} className="opacity-80 animate-pulse-soft" />
          </div>
          <div className="mt-2 h-1.5 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: "70%" }} />
          </div>
          <div className="text-[11px] mt-1 opacity-90">Faltam 3 dias para a próxima conquista!</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold px-3 py-2">Estudar</div>
          {items.map(({ id, label, Icon }) => {
            const active = view === id;
            return (
              <button
                key={id}
                onClick={() => {
                  setView(id);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition group ${
                  active
                    ? "bg-mint-50 text-mint-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`w-8 h-8 grid place-items-center rounded-lg ${
                    active ? "bg-gradient-to-br from-mint-400 to-mint-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  <Icon size={16} />
                </span>
                <span className="flex-1 text-left">{label}</span>
                {active && <I.ChevronRight size={14} className="text-mint-600" />}
              </button>
            );
          })}

          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold px-3 py-2 mt-4">Conta</div>
          <button
            onClick={() => setView("pricing")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <span className="w-8 h-8 grid place-items-center rounded-lg bg-amber-100 text-amber-600">
              <I.Star size={16} />
            </span>
            Planos & Premium
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
            <span className="w-8 h-8 grid place-items-center rounded-lg bg-slate-100 text-slate-500">
              <I.Settings size={16} />
            </span>
            Configurações
          </button>
        </nav>

        {/* User */}
        <div className="p-3 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 grid place-items-center text-white font-semibold">
              LM
            </div>
            <div className="flex-1 leading-tight">
              <div className="text-sm font-semibold text-slate-800">Larissa Moreira</div>
              <div className="text-[11px] text-slate-400">Nível 14 · 4.820 XP</div>
            </div>
            <I.Logout size={16} className="text-slate-400" />
          </div>
        </div>
      </aside>
    </>
  );
}

export type { View };
