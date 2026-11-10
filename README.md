# Roadmap iOS

Checklist interativo do meu plano de estudos para virar iOS Engineer, partindo de front-end (React) e passando por Swift, SwiftUI, dados/rede, testes, arquitetura e publicação.

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
