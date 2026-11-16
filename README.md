# Roadmap iOS

Checklist interativo do meu plano de estudos para virar iOS Engineer, partindo de front-end (React) e passando por Swift, SwiftUI, dados/rede, testes, arquitetura e publicação.

## Novo visual (em andamento)

O roadmap vai ser redesenhado no estilo da página `trilha-rocketseat.html`, que serve de referência:

- **Trilha vertical de etapas**: cada fase vira uma "estação" numerada, ligada às outras por uma linha. O círculo da etapa fica preenchido quando ela é concluída.
- **Card por etapa** com título, tipo da etapa, total de horas, um parágrafo explicando por que ela vem nesse ponto, barra de progresso e um link para o conteúdo.
- **Checklist agrupado** por nível, com a duração de cada módulo e marcações como `desafio`, `quiz` e `certificado`.
- **Resumo no topo**: porcentagem concluída, horas restantes, data estimada de término e um campo de ritmo (horas por semana) que recalcula as estimativas.
- **Estimativa de término por etapa**, calculada a partir do que falta e do ritmo escolhido.
- **Etapa opcional** com borda tracejada para extras que não entram na estimativa.
- **Tema claro e escuro** automático, fontes Bricolage Grotesque, IBM Plex Sans e IBM Plex Mono, e layout que funciona no celular.

O progresso continua salvo no `localStorage`, e o botão de reiniciar continua existindo.

## Como usar

Abra o `index.html` em qualquer navegador (ou publique com GitHub Pages). O progresso é salvo automaticamente no `localStorage` do navegador usado — ele não sincroniza entre dispositivos nem fica salvo no repositório.

## Publicar com GitHub Pages (opcional)

1. Em **Settings → Pages** do repositório, escolha a branch `main` e a pasta `/ (root)`.
2. O site fica disponível em `https://<seu-usuario>.github.io/<nome-do-repo>/`.

## Estrutura

- `index.html` — estrutura da página.
- `style.css` — estilos (cores, cards, checklist).
- `script.js` — dados do roadmap (fases e passos) e a lógica de marcar, salvar e mostrar o progresso.

Sem dependências externas. Para mudar fases ou passos, edite o array `DATA` no início do `script.js`.
