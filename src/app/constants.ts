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

export const members = [
  "tanaka",
  "yamamoto",
  "nagasawa",
  "sanada",
  "harimoto",
  "miyagi",
  "taniguchi",
  "yamada",
  "kurosaka",
  "sato",
  "matsunaga",
  "ikeda",
];

export const projects = ["education", "planetarium"];
