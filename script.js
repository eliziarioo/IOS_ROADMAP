// Conteúdo do roadmap: fases, passos e entregas
const DATA = [
  {
    title: "Fase 0 — Base",
    weeks: "Semanas 1–3",
    goal: "Git/GitHub na prática, POO em Python e a primeira ponte para Swift.",
    steps: [
      "Criar o repositório do jogo de combate no GitHub",
      "Fazer commits, um branch, merge e um pull request",
      "Terminar o módulo de POO da Rocketseat",
      "Concluir o projeto do jogo de combate em turnos (Python)",
      "Refazer a classe de conta bancária em Swift usando class",
      "Refazer a mesma classe em Swift usando struct"
    ],
    deliverable: "Repositório no GitHub com o jogo em Python e um pull request concluído."
  },
  {
    title: "Fase 1 — Swift fundamentos",
    weeks: "Semanas 4–7",
    goal: "A linguagem em si, antes de qualquer interface.",
    steps: [
      "Variáveis, constantes e tipos básicos",
      "Optionals e unwrapping seguro",
      "Funções, closures e enums",
      "Structs e classes (diferença de valor x referência)",
      "Coleções (arrays, dicionários) e switch",
      "Tratamento de erros com throws / do-catch",
      "Introdução a async/await"
    ],
    deliverable: "Calculadora de médias escolares em linha de comando, com validação de entrada."
  },
  {
    title: "Fase 2 — SwiftUI",
    weeks: "Semanas 8–13",
    goal: "Construir interfaces de verdade.",
    steps: [
      "Views e modificadores básicos",
      "VStack, HStack, List",
      "NavigationStack e navegação entre telas",
      "@State e @Binding",
      "@Observable para estado compartilhado",
      "Formulários e sheets"
    ],
    deliverable: "Lista de tarefas com adicionar, concluir, remover e filtros."
  },
  {
    title: "Fase 3 — Dados e rede",
    weeks: "Semanas 14–17",
    goal: "Conectar o app a uma API e guardar dados no aparelho.",
    steps: [
      "URLSession e chamadas de rede",
      "Codable para converter JSON",
      "Tratamento de erros de rede",
      "async/await com Task e @MainActor",
      "Persistência com SwiftData",
      "Keychain e UserDefaults"
    ],
    deliverable: "App que consome uma API pública, mostra lista, detalhes e favoritos salvos localmente."
  },
  {
    title: "Fase 4 — Qualidade",
    weeks: "Semanas 18–20",
    goal: "Testar e depurar como profissional.",
    steps: [
      "Testes unitários com XCTest",
      "Primeiros testes com Swift Testing",
      "Uso do debugger do Xcode",
      "Uso do Instruments para memória e performance",
      "Entender retain cycles e usar [weak self]"
    ],
    deliverable: "Testes adicionados ao app da Fase 3, com um vazamento de memória identificado e corrigido."
  },
  {
    title: "Fase 5 — Arquitetura",
    weeks: "Semanas 21–22",
    goal: "Organizar o código para crescer sem virar bagunça.",
    steps: [
      "MVVM aplicado (ViewModel separado da View)",
      "Injeção de dependências básica",
      "Conhecer MVC, VIPER e TCA pelo nome e pelas diferenças"
    ],
    deliverable: "App da Fase 3 refatorado para MVVM, com testes no ViewModel."
  },
  {
    title: "Fase 6 — Publicação",
    weeks: "Semanas 23–26",
    goal: "Colocar um app nas mãos de outras pessoas.",
    steps: [
      "Conta no App Store Connect",
      "Distribuição via TestFlight",
      "Build automatizado com Fastlane ou Xcode Cloud",
      "Acessibilidade: VoiceOver e Dynamic Type",
      "Ler a Human Interface Guidelines (HIG)",
      "Permissões, privacidade e notificações push"
    ],
    deliverable: "App publicado no TestFlight com pelo menos cinco pessoas testando."
  },
  {
    title: "Fase 7 — Projeto final",
    weeks: "Semanas 27–34",
    goal: "Um app completo, do seu jeito, do início ao fim.",
    steps: [
      "Definir a ideia do app (algo que você usaria de verdade)",
      "SwiftUI + dados/rede implementados",
      "Arquitetura MVVM aplicada",
      "Testes cobrindo as regras principais",
      "Acessibilidade revisada",
      "Publicado na App Store ou no TestFlight",
      "README no GitHub explicando as decisões"
    ],
    deliverable: "App publicado, com código e README no GitHub."
  }
];

// Salvar e carregar o progresso no navegador (localStorage)
const STORAGE_KEY = "ios-roadmap-progress-v1";

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveProgress(state){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
}

// Estado atual: passos marcados e fase aberta
let progress = loadProgress();
let openPhase = null;

// Chave única de cada passo, ex: "2-3"
function stepKey(pIdx, sIdx){ return pIdx + "-" + sIdx; }

// Desenha as fases na tela e atualiza o progresso
function render(){
  const container = document.getElementById("phases");
  container.innerHTML = "";

  let totalSteps = 0, doneSteps = 0, completePhases = 0;

  DATA.forEach((phase, pIdx) => {
    const phaseDone = phase.steps.filter((_, sIdx) => progress[stepKey(pIdx, sIdx)]).length;
    totalSteps += phase.steps.length;
    doneSteps += phaseDone;
    const isComplete = phaseDone === phase.steps.length;
    if(isComplete) completePhases++;

    // Cabeçalho da fase (clique abre/fecha)
    const el = document.createElement("div");
    el.className = "phase" + (isComplete ? " complete" : "") + (openPhase === pIdx ? " open" : "");

    const head = document.createElement("div");
    head.className = "phase-head";
    head.innerHTML = `
      <div class="phase-num">${isComplete ? "✓" : pIdx}</div>
      <div class="phase-titles">
        <div class="phase-title">${phase.title}</div>
        <div class="phase-weeks">${phase.weeks}</div>
      </div>
      <div class="phase-mini"><span class="chip">${phaseDone}/${phase.steps.length}</span></div>
      <div class="chevron"></div>
    `;
    head.addEventListener("click", () => {
      openPhase = (openPhase === pIdx) ? null : pIdx;
      render();
    });

    // Corpo da fase: objetivo, passos e entrega
    const body = document.createElement("div");
    body.className = "phase-body";
    const inner = document.createElement("div");
    inner.className = "phase-body-inner";

    const goalEl = document.createElement("div");
    goalEl.className = "goal";
    goalEl.innerHTML = `<b>Objetivo:</b> ${phase.goal}`;
    inner.appendChild(goalEl);

    const ul = document.createElement("ul");
    ul.className = "steps";
    phase.steps.forEach((step, sIdx) => {
      const key = stepKey(pIdx, sIdx);
      const checked = !!progress[key];
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="check ${checked ? "on" : ""}" data-key="${key}">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div class="step-text ${checked ? "on" : ""}" data-key="${key}">${step}</div>
      `;
      ul.appendChild(li);
    });
    inner.appendChild(ul);

    const deliv = document.createElement("div");
    deliv.className = "deliverable";
    deliv.innerHTML = `<b>Entrega:</b> ${phase.deliverable}`;
    inner.appendChild(deliv);

    body.appendChild(inner);
    el.appendChild(head);
    el.appendChild(body);
    container.appendChild(el);
  });

  // Clique em um passo marca/desmarca
  container.querySelectorAll("[data-key]").forEach(node => {
    node.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = node.getAttribute("data-key");
      progress[key] = !progress[key];
      saveProgress(progress);
      render();
    });
  });

  // Atualiza a barra e os contadores
  const pct = totalSteps ? Math.round((doneSteps/totalSteps)*100) : 0;
  document.getElementById("overallPct").textContent = pct + "%";
  document.getElementById("overallBar").style.width = pct + "%";
  document.getElementById("overallCount").textContent = `${doneSteps} de ${totalSteps} passos`;
  document.getElementById("phaseCount").textContent = `${completePhases} de ${DATA.length} fases completas`;
}

// Botão de reiniciar apaga todo o progresso
document.getElementById("resetBtn").addEventListener("click", () => {
  progress = {};
  saveProgress(progress);
  render();
});

// Primeira renderização
render();
