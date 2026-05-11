import { useState } from "react";
import Sidebar, { type View } from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MobileNav from "./components/MobileNav";
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";
import Path from "./views/Path";
import Video from "./views/Video";
import Questions from "./views/Questions";
import Exams from "./views/Exams";
import AI from "./views/AI";
import Flashcards from "./views/Flashcards";
import Planner from "./views/Planner";
import Analytics from "./views/Analytics";
import Community from "./views/Community";
import Pricing from "./views/Pricing";

const titles: Record<View, { t: string; s?: string }> = {
  landing: { t: "" },
  dashboard: { t: "Dashboard", s: "Bom te ver de novo, Larissa! Vamos estudar?" },
  path: { t: "Trilha de Estudos", s: "Seu caminho gamificado rumo à aprovação" },
  video: { t: "Videoaula", s: "Aprenda no seu ritmo, com os melhores professores" },
  questions: { t: "Banco de Questões", s: "+50 mil questões filtráveis e comentadas" },
  exams: { t: "Simulados", s: "Treine como na prova real" },
  ai: { t: "Assistente IA", s: "Tire dúvidas, gere planos e revise erros" },
  flashcards: { t: "Flashcards", s: "Memorize com repetição espaçada" },
  planner: { t: "Planner Inteligente", s: "Sua agenda otimizada por IA" },
  analytics: { t: "Desempenho", s: "Sua evolução em tempo real" },
  community: { t: "Comunidade", s: "Estude com 120 mil colegas" },
  pricing: { t: "Planos & Assinaturas", s: "Escolha seu caminho até a aprovação" },
};

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [open, setOpen] = useState(false);

  if (view === "landing") {
    return <Landing setView={setView} />;
  }

  const meta = titles[view];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar view={view} setView={setView} open={open} setOpen={setOpen} />
      <main className="flex-1 min-w-0 flex flex-col">
        <Topbar onMenu={() => setOpen(true)} title={meta.t} subtitle={meta.s} />
        <div className="flex-1">
          {view === "dashboard" && <Dashboard setView={setView} />}
          {view === "path" && <Path setView={setView} />}
          {view === "video" && <Video />}
          {view === "questions" && <Questions />}
          {view === "exams" && <Exams />}
          {view === "ai" && <AI />}
          {view === "flashcards" && <Flashcards />}
          {view === "planner" && <Planner />}
          {view === "analytics" && <Analytics />}
          {view === "community" && <Community />}
          {view === "pricing" && <Pricing />}
        </div>
      </main>
      <MobileNav view={view} setView={setView} />
    </div>
  );
}
