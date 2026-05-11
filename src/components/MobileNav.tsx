import * as I from "../icons";
import type { View } from "./Sidebar";

const items: { id: View; label: string; Icon: any }[] = [
  { id: "dashboard", label: "Início", Icon: I.Home },
  { id: "path", label: "Trilha", Icon: I.Path },
  { id: "questions", label: "Praticar", Icon: I.Book },
  { id: "ai", label: "IA", Icon: I.Sparkles },
  { id: "flashcards", label: "Cards", Icon: I.Cards },
];

export default function MobileNav({ view, setView }: { view: View; setView: (v: View) => void }) {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-slate-100 px-2 py-2 pb-[max(8px,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ id, label, Icon }) => {
          const active = view === id;
          return (
            <button
              key={id}
              onClick={() => setView(id)}
              className={`flex flex-col items-center gap-0.5 py-1.5 rounded-xl transition ${
                active ? "text-mint-700" : "text-slate-400"
              }`}
            >
              <span
                className={`grid place-items-center w-10 h-10 rounded-xl transition ${
                  active ? "bg-gradient-to-br from-mint-400 to-mint-600 text-white shadow-soft" : ""
                }`}
              >
                <Icon size={18} />
              </span>
              <span className={`text-[10px] font-semibold ${active?"text-mint-700":"text-slate-500"}`}>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
