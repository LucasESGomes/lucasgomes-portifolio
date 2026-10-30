# Lucas Gomes — Portfólio

Portfólio pessoal de Lucas Gomes (Desenvolvedor de Software, Eng. de Software na UMC, técnico SENAI, Mogi das Cruzes - SP).
Layout inspirado em https://md-rashid.vercel.app/, com o fundo quadriculado animado como identidade própria.

## Stack e comandos
- Vite + React 19 (JSX, sem TypeScript), Tailwind CSS v4 (`@tailwindcss/vite`, sem tailwind.config)
- Animações: `motion` (import de `motion/react`) + `lenis` para smooth scroll. Não usar GSAP nem misturar libs de animação.
- `npm run dev` · `npm run lint` · `npm run build` — lint e build precisam passar antes de qualquer commit.

## Estrutura
```
src/
  data/        textos e conteúdo (profile, skills, projects, timeline) — única fonte de copy
  hooks/       useLenis (smooth scroll + scrollToTarget), useInView
  components/
    layout/    Background (grid animado — não remover), Header, Section
    sections/  uma seção da página por arquivo, numeradas na UI (02, 03, 04…)
    ui/        componentes pequenos e reutilizáveis
public/img/    imagens; screenshots de projetos em public/img/projects/, currículo em public/cv/
```

## Regras
- **Conteúdo**: todo texto visível fica em `src/data/*`, nunca hard-coded em componentes. Copy em pt-BR, específico sobre o Lucas e seus projetos reais — nada de frases genéricas ("apaixonado por tecnologia", "soluções inovadoras") nem textos copiados da referência.
- **Assets**: referenciar arquivos de `public/` pela raiz (`/img/foto.png`). Nunca usar `/public/...` nem importar de `../../public`.
- **Responsividade**: Tailwind mobile-first (`sm/md/lg/xl`). Sem larguras fixas em px/rem para layout (`w-150`, `w-[600px]`); usar `w-full`, `max-w-*`, frações e grid. Conferir em 375px, 768px e 1280px+ sem scroll horizontal.
- **Animações da referência** (manter fiéis):
  - Hero `fixed` no desktop, conteúdo sobe por cima; no mobile o hero fica no fluxo normal.
  - Skill cards empilhados: `sticky top-0 h-screen`, imagem com escala 2→1 e deslocamento `50*i` px (ver `ui/SkillCard.jsx`).
  - Trajetória usa `.text-reveal` + `stagger-*` de `index.css`.
  - Lenis roda dentro do loop `frame` do motion (`hooks/useLenis.js`). Não voltar para um `requestAnimationFrame` próprio: os transforms ligados ao scroll ficam um frame atrasados e as imagens dos cards tremem.
- **Seção final (Contato)**: gradiente com granulado (`.cta-blob-*` + `.grain` em `index.css`), frases rotativas em `data/contact.js`. É a última seção da página e a única com fundo próprio.
- **Componentes**: function components com arrow function e `export default` no fim; comentários curtos só onde a lógica não é óbvia.
- **Fundo**: seções não têm `bg-*` sólido, para o grid de `Background.jsx` aparecer; só os cards e a seção de Contato têm fundo.
- **Commits**: mensagens curtas no imperativo descrevendo a mudança (ex.: `Add timeline section`).
