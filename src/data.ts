export type Subject = {
  id: string;
  name: string;
  icon: string; // emoji fallback
  color: string; // tailwind gradient classes
  progress: number;
  accuracy: number;
  lessons: number;
  done: number;
};

export const subjects: Subject[] = [
  { id: "anat", name: "Anatomia & Fisiologia", icon: "🫀", color: "from-rose-400 to-pink-500", progress: 72, accuracy: 81, lessons: 24, done: 17 },
  { id: "farm", name: "Farmacologia", icon: "💊", color: "from-violet-400 to-purple-500", progress: 58, accuracy: 74, lessons: 22, done: 13 },
  { id: "emerg", name: "Emergência", icon: "🚑", color: "from-coral-400 to-coral-600", progress: 64, accuracy: 78, lessons: 18, done: 12 },
  { id: "fund", name: "Fundamentos da Enfermagem", icon: "🩺", color: "from-mint-400 to-mint-600", progress: 88, accuracy: 91, lessons: 26, done: 23 },
  { id: "seg", name: "Segurança do Paciente", icon: "🛡️", color: "from-sky-400 to-blue-500", progress: 45, accuracy: 69, lessons: 14, done: 6 },
  { id: "ped", name: "Pediatria", icon: "👶", color: "from-amber-400 to-orange-500", progress: 33, accuracy: 65, lessons: 16, done: 5 },
  { id: "obs", name: "Obstetrícia", icon: "🤰", color: "from-pink-400 to-rose-500", progress: 28, accuracy: 70, lessons: 15, done: 4 },
  { id: "cir", name: "Enfermagem Cirúrgica", icon: "🔪", color: "from-teal-400 to-cyan-500", progress: 50, accuracy: 76, lessons: 20, done: 10 },
  { id: "spub", name: "Saúde Pública", icon: "🏥", color: "from-emerald-400 to-green-500", progress: 60, accuracy: 80, lessons: 18, done: 11 },
  { id: "etic", name: "Ética & Legislação", icon: "⚖️", color: "from-indigo-400 to-violet-500", progress: 40, accuracy: 72, lessons: 12, done: 5 },
  { id: "uti", name: "UTI", icon: "💉", color: "from-fuchsia-400 to-pink-600", progress: 22, accuracy: 60, lessons: 19, done: 4 },
  { id: "prim", name: "Primeiros Socorros", icon: "⛑️", color: "from-red-400 to-rose-600", progress: 78, accuracy: 84, lessons: 14, done: 11 },
  { id: "sus", name: "SUS & Políticas", icon: "📜", color: "from-cyan-400 to-sky-500", progress: 55, accuracy: 77, lessons: 16, done: 9 },
];

export type Lesson = { id: string; title: string; xp: number; status: "done" | "current" | "locked"; type?: "video" | "quiz" | "boss" | "bonus" };

export const learningPath: { module: string; subject: string; color: string; lessons: Lesson[] }[] = [
  {
    module: "Módulo 1 · Sistema Cardiovascular",
    subject: "Anatomia",
    color: "from-rose-400 to-pink-500",
    lessons: [
      { id: "l1", title: "Coração: estrutura", xp: 20, status: "done", type: "video" },
      { id: "l2", title: "Ciclo cardíaco", xp: 25, status: "done", type: "quiz" },
      { id: "l3", title: "Pressão arterial", xp: 30, status: "current", type: "video" },
      { id: "l4", title: "Aferição de PA", xp: 25, status: "locked", type: "quiz" },
      { id: "l5", title: "Boss: Caso clínico", xp: 80, status: "locked", type: "boss" },
    ],
  },
  {
    module: "Módulo 2 · Farmacologia Básica",
    subject: "Farmacologia",
    color: "from-violet-400 to-purple-500",
    lessons: [
      { id: "f1", title: "Vias de administração", xp: 20, status: "done" },
      { id: "f2", title: "Cálculo de dosagem", xp: 35, status: "current" },
      { id: "f3", title: "Anti-hipertensivos", xp: 30, status: "locked" },
      { id: "f4", title: "Antibióticos", xp: 30, status: "locked" },
      { id: "f5", title: "Bônus: Mnemônicos", xp: 50, status: "locked", type: "bonus" },
    ],
  },
  {
    module: "Módulo 3 · Emergência",
    subject: "Emergência",
    color: "from-coral-400 to-coral-600",
    lessons: [
      { id: "e1", title: "Avaliação primária ABCDE", xp: 25, status: "locked" },
      { id: "e2", title: "RCP em adultos", xp: 30, status: "locked" },
      { id: "e3", title: "Manejo de choque", xp: 35, status: "locked" },
    ],
  },
];

export type Question = {
  id: string;
  subject: string;
  board: string;
  year: number;
  institution: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  statement: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: "q1",
    subject: "Farmacologia",
    board: "IBFC",
    year: 2024,
    institution: "Hospital das Clínicas",
    difficulty: "Médio",
    statement:
      "Sobre a administração de medicamentos por via endovenosa, é correto afirmar que o enfermeiro deve, antes da aplicação:",
    options: [
      "Realizar massagem no local da punção para facilitar a absorção.",
      "Verificar prazo de validade, dose, via e identificação do paciente.",
      "Aspirar com a agulha para confirmar entrada em vaso arterial.",
      "Aquecer o medicamento até atingir 40°C para reduzir dor.",
    ],
    correct: 1,
    explanation:
      "A regra dos 9 certos exige a verificação do paciente, medicamento, dose, via, hora, validade, registro, orientação e direito a recusar antes de qualquer administração.",
  },
  {
    id: "q2",
    subject: "Emergência",
    board: "FCC",
    year: 2023,
    institution: "Prefeitura de SP",
    difficulty: "Difícil",
    statement:
      "Durante o atendimento a uma vítima inconsciente, o profissional verifica ausência de pulso e respiração. A conduta inicial recomendada pelo protocolo de PCR em adultos é:",
    options: [
      "Iniciar 2 ventilações de resgate seguidas de compressões.",
      "Iniciar compressões torácicas a 100-120/min com profundidade de 5-6 cm.",
      "Aplicar manobra de Heimlich antes da RCP.",
      "Aguardar chegada do desfibrilador para iniciar suporte.",
    ],
    correct: 1,
    explanation:
      "Conforme as Diretrizes da AHA, em PCR em adulto deve-se iniciar imediatamente compressões torácicas de alta qualidade (100-120/min, 5-6 cm de profundidade), conforme algoritmo C-A-B.",
  },
  {
    id: "q3",
    subject: "Fundamentos",
    board: "VUNESP",
    year: 2024,
    institution: "SES-RJ",
    difficulty: "Fácil",
    statement: "A higienização das mãos com água e sabão deve ter duração mínima recomendada de:",
    options: ["10 segundos", "20 a 30 segundos", "40 a 60 segundos", "2 minutos"],
    correct: 2,
    explanation:
      "A ANVISA recomenda 40 a 60 segundos para higienização das mãos com água e sabão, garantindo a remoção mecânica de microrganismos.",
  },
  {
    id: "q4",
    subject: "Pediatria",
    board: "IDECAN",
    year: 2023,
    institution: "Hospital Infantil",
    difficulty: "Médio",
    statement:
      "No atendimento à criança com desidratação grave, a primeira medida do enfermeiro deve ser:",
    options: [
      "Administrar SRO via oral imediatamente.",
      "Iniciar reposição venosa com solução cristaloide.",
      "Aguardar avaliação médica para qualquer conduta.",
      "Oferecer alimentação sólida para repor eletrólitos.",
    ],
    correct: 1,
    explanation:
      "Em desidratação grave, a reposição volêmica venosa imediata com cristaloide é a prioridade, seguindo o protocolo de hidratação rápida.",
  },
];

export type MockExam = {
  id: string;
  title: string;
  questions: number;
  duration: string;
  subject: string;
  status: "Disponível" | "Concluído" | "Agendado";
  difficulty: string;
};

export const mockExams: MockExam[] = [
  { id: "m1", title: "Simulado Geral COREN-SP 2025", questions: 60, duration: "3h", subject: "Geral", status: "Disponível", difficulty: "Difícil" },
  { id: "m2", title: "Revalida Enfermagem · Bloco 1", questions: 40, duration: "2h", subject: "Geral", status: "Disponível", difficulty: "Médio" },
  { id: "m3", title: "Concurso Hospital Albert Einstein", questions: 50, duration: "2h30", subject: "Hospitalar", status: "Agendado", difficulty: "Difícil" },
  { id: "m4", title: "UTI · Foco em ventilação mecânica", questions: 25, duration: "1h", subject: "UTI", status: "Concluído", difficulty: "Médio" },
  { id: "m5", title: "Saúde Pública e SUS", questions: 30, duration: "1h15", subject: "Saúde Pública", status: "Disponível", difficulty: "Fácil" },
];

export type Flashcard = {
  id: string;
  front: string;
  back: string;
  deck: string;
  due: string;
};

export const flashcards: Flashcard[] = [
  { id: "fc1", front: "Qual a dose padrão de adrenalina em PCR adulto?", back: "1 mg EV em bolus a cada 3-5 minutos durante a RCP.", deck: "Farmacologia · Emergência", due: "Hoje" },
  { id: "fc2", front: "Sinais de choque hipovolêmico precoce?", back: "Taquicardia, palidez, extremidades frias, ansiedade e PA inicialmente preservada.", deck: "Emergência", due: "Hoje" },
  { id: "fc3", front: "Quais são os 5 momentos para higienização das mãos (OMS)?", back: "1) Antes de tocar o paciente; 2) Antes de procedimento asséptico; 3) Após risco de exposição a fluidos; 4) Após tocar o paciente; 5) Após contato com áreas próximas ao paciente.", deck: "Segurança do Paciente", due: "Hoje" },
  { id: "fc4", front: "Escala de Glasgow: faixa de pontuação?", back: "3 (coma profundo) a 15 (consciente). Avalia abertura ocular, resposta verbal e resposta motora.", deck: "Anatomia & Neurologia", due: "Amanhã" },
];

export const teacher = {
  name: "Profa. Camila Andrade",
  role: "Enfermeira intensivista · MSc",
  bio: "10+ anos em UTI adulto e formação de profissionais de saúde. Especialista em emergência cardiovascular.",
  rating: 4.9,
  students: 28430,
};

export const motivationalMessages = [
  "Você está a 3 lições de bater seu recorde semanal! 🚀",
  "Cada questão respondida te aproxima da aprovação. Bora! 💪",
  "Consistência > intensidade. Continue firme!",
  "Sua rotina de estudos está acima da média da turma!",
];

export type CommunityPost = {
  id: string;
  user: string;
  avatar: string;
  topic: string;
  category: string;
  replies: number;
  likes: number;
  time: string;
};

export const communityPosts: CommunityPost[] = [
  { id: "p1", user: "Mariana S.", avatar: "🩷", topic: "Dica de mnemônico para ciclo de Krebs?", category: "Bioquímica", replies: 18, likes: 42, time: "2h" },
  { id: "p2", user: "Rafael L.", avatar: "💚", topic: "Alguém fez o concurso do HC-SP esse ano?", category: "Concursos", replies: 31, likes: 87, time: "5h" },
  { id: "p3", user: "Júlia P.", avatar: "💜", topic: "Grupo de estudos para UTI · sextas 19h", category: "Grupos", replies: 12, likes: 56, time: "1d" },
  { id: "p4", user: "Profa. Camila", avatar: "👩‍⚕️", topic: "📢 Aula extra de farmacologia liberada!", category: "Anúncios", replies: 47, likes: 210, time: "1d" },
];
