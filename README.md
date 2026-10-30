# Lucas Gomes — Portfólio

Portfólio pessoal de **Lucas Gomes**, desenvolvedor de software, estudante de Engenharia de Software na UMC e técnico formado pelo SENAI (Mogi das Cruzes - SP).

O site reúne quem eu sou, as tecnologias com que trabalho, meus projetos (Senai ID, Auto Fix, Shared Resources e Energia Solar Montengel) e minha trajetória, tudo sobre um fundo quadriculado animado.

## Seções

- **Início**: apresentação, foto, redes sociais e currículo
- **Habilidades**: cards de Front-end, Back-end e Full Stack empilhados durante o scroll
- **Projetos**: cards com filtro por categoria (Front-end, Back-end, Full Stack)
- **Trajetória**: linha do tempo de estudos e experiências
- **Contato**: frases rotativas sobre um gradiente com granulado

## Tecnologias

React 19 · Vite · Tailwind CSS v4 · Motion · Lenis (smooth scroll) · React Icons

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run lint
```

> Se o `npm install` falhar com `ECONNRESET` (conexão instável), use `npm install --maxsockets=1`.

## Estrutura

```
src/
  data/         todo o conteúdo do site (perfil, skills, projetos, trajetória, contato)
  components/   layout (fundo, header), sections (uma por seção) e ui (cards, tags…)
  hooks/        smooth scroll e animações ao entrar na tela
public/img/     fotos, ícones e imagens dos projetos
```

Para editar textos ou adicionar um projeto, basta mexer nos arquivos de `src/data/`.

## Contato

[GitHub](https://github.com/LucasESGomes) · [LinkedIn](https://www.linkedin.com/in/lucasesgomes) · [Instagram](https://www.instagram.com/lucas_gomezzss)
