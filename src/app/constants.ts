export const enum SNS {
  x,
  instagram,
  linkedin,
}

interface SNSInfoProps {
  title: string;
  href: string;
  src: string;
}

export const SNSInfo: SNSInfoProps[] = [
  {
    title: "x",
    href: "https://x.com/curascopium?s=11&t=bab-OhquEEWjR_k74r_d3w",
    src: "/sns/x.png",
  },
  {
    title: "instagram",
    href: "https://www.instagram.com/curascopium?igsh=MzRlODBiNWFlZA==",
    src: "/sns/Instagram.png",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/company/curascopium138/",
    src: "/sns/LinkedIn.png",
  },
];

export const enum Section {
  news,
  history,
  purpose,
  member,
  project,
  contact,
}

interface SectionInfoProps {
  title: string;
  href: string;
}

export const SectionInfo: SectionInfoProps[] = [
  {
    title: "news",
    href: "/news",
  },
  {
    title: "history",
    href: "/#history",
  },
  {
    title: "purpose",
    href: "/#purpose",
  },
  {
    title: "member",
    href: "/#member",
  },
  {
    title: "project",
    href: "/#project",
  },
  {
    title: "contact",
    href: "/#contact",
  },
];

export const enum Member {
  tanaka,
  harimoto,
  yamamoto,
  nagasawa,
  sanada,
  miyagi,
  taniguchi,
  yamada,
  kurosaka,
  sato,
  matsunaga,
  ikeda,
}

interface MemberInfoProps {
  id: string;
  portfolioURL: string;
}

export const members: MemberInfoProps[] = [
  {
    id: "tanaka",
    portfolioURL: "https://www.linkedin.com/in/yusaku-tanaka/",
  },
  {
    id: "harimoto",
    portfolioURL: "https://www.linkedin.com/in/hiro-harimoto",
  },
  {
    id: "yamamoto",
    portfolioURL: "https://www.linkedin.com/in/haruyamamoto/",
  },
  {
    id: "nagasawa",
    portfolioURL: "https://www.linkedin.com/in/takeshi-nagasawa-59487a1b2/",
  },
  {
    id: "sanada",
    portfolioURL: "https://www.linkedin.com/in/saniya-sanada-860a41280/",
  },
  {
    id: "miyagi",
    portfolioURL: "",
  },
  {
    id: "taniguchi",
    portfolioURL: "https://www.linkedin.com/in/tomoka-taniguchi/",
  },
  {
    id: "yamada",
    portfolioURL: "https://www.linkedin.com/in/gaku-yamada/",
  },
  {
    id: "kurosaka",
    portfolioURL: "",
  },
  {
    id: "sato",
    portfolioURL: "https://www.linkedin.com/in/sakuya-sato-198395294",
  },
  {
    id: "matsunaga",
    portfolioURL: "https://www.linkedin.com/in/taishipatrickmatsunaga/",
  },
  {
    id: "ikeda",
    portfolioURL: "https://www.linkedin.com/in/yumeka-ikeda-59bb8b304",
  },
];

export const projects = ["education", "planetarium"];
