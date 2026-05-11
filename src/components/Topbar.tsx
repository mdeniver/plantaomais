import * as I from "../icons";

export default function Topbar({ onMenu, title, subtitle }: { onMenu: () => void; title: string; subtitle?: string }) {
  return (
    <div className="sticky top-0 z-30 glass border-b border-slate-100">
      <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-3">
        <button
          onClick={onMenu}
          className="lg:hidden w-10 h-10 grid place-items-center rounded-xl bg-white border border-slate-200 text-slate-600"
        >
          <I.Menu size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg sm:text-xl font-bold text-slate-800 truncate">{title}</h1>
          {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 w-72">
          <I.Search size={16} className="text-slate-400" />
          <input
            placeholder="Buscar aulas, questões, temas..."
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-slate-400"
          />
          <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">⌘K</kbd>
        </div>
        <button className="relative w-10 h-10 grid place-items-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
          <I.Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-coral-500 ring-2 ring-white" />
        </button>
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-amber-50 to-coral-50 border border-amber-100">
          <I.Lightning size={16} className="text-amber-500" />
          <span className="text-sm font-bold text-amber-700">4.820 XP</span>
        </div>
      </div>
    </div>
  );
}
