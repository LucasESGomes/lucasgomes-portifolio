import { SiClaude, SiDocker, SiFastify, SiPostman, SiTypescript } from "react-icons/si";

export const skills = [
  {
    title: "FRONT-END",
    description:
      "Interfaces em React e Tailwind, do protótipo no Figma ao deploy na Vercel. Fui o responsável pelo front-end do Senai ID, meu TCC no SENAI, que trocou as carteirinhas físicas por digitais.",
    src: "/img/frontend.png",
    tags: [
      { label: "React", icon: "/img/icon/react.png" },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Tailwind", icon: "/img/icon/tailwind.png" },
      { label: "Vite", icon: "/img/icon/vite.png" },
      { label: "Figma", icon: "/img/icon/figma.png" },
      { label: "Vercel", icon: "/img/icon/vercel.png" },
    ],
  },
  {
    title: "BACK-END",
    description:
      "APIs REST em Node com TypeScript, usando Fastify ou Express, autenticação de usuários e modelagem de dados em MySQL e MongoDB — testadas no Postman e construídas lado a lado com o Claude Code.",
    src: "/img/skills/backend.svg",
    tags: [
      { label: "Node.js", icon: "/img/icon/node.webp" },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Fastify", Icon: SiFastify },
      { label: "Express", icon: "/img/icon/express.webp" },
      { label: "MySQL", icon: "/img/icon/mySql.png" },
      { label: "MongoDB", icon: "/img/icon/mongoDb.png" },
      { label: "Python", icon: "/img/icon/python.png" },
      { label: "Postman", Icon: SiPostman },
      { label: "Claude Code", Icon: SiClaude },
    ],
  },
  {
    title: "FULL STACK",
    description:
      "Sistemas de ponta a ponta em TypeScript e Docker, como o Shared Resources: agendamento de espaços e equipamentos compartilhados com histórico de quem usou cada recurso.",
    src: "/img/skills/fullstack.svg",
    tags: [
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Docker", Icon: SiDocker },
      { label: "APIs" },
      { label: "Git", icon: "/img/icon/git.png" },
      { label: "Arduino / RFID" },
    ],
  },
];
