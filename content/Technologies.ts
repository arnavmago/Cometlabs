
import { Technology } from "./Technology";
export interface Tech {
  title: "Angular" | "React" | "JavaScript" | "TypeScript" | "Vue" | "Svelte" | "Next" | "Nuxt" | "";
}

export interface Track extends Tech {
  imageUrl: string;
  id: string;
  description: string;
  type: "labs" | "quiz";
  href?: string;
}

export const FestecTechnologies: Array<Technology> = [
  { name: "Openvino" },
  { name: "nodejs" },
  { name: "opencv" },
];

export const FestecTracks: Array<Track> = [
  {
    imageUrl: "https://cdn.svgporn.com/logos/react.svg",
    title: "React",
    id: "asdfghjkl",
    description: "React labs",
    type: "labs",
    href: "/react",
  },
  {
    imageUrl: "https://cdn.svgporn.com/logos/react.svg",
    title: "React",
    id: "jhvhjvasdb",
    description: "React Quiz",
    type: "quiz",
  },
  {
    imageUrl: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    title: "Next",
    id: "asdfghjkl",
    description: "React labs",
    type: "labs",
    href: "/react",
  },
  {
    imageUrl: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    title: "Next",
    id: "jhvhjvasdb",
    description: "React Quiz",
    type: "quiz",
  },
  // {
  //   imageUrl: "https://cdn.svgporn.com/logos/javascript.svg",
  //   title: "JavaScript",
  //   id: "kajjskanska",
  //   description: "JavaScript labs",
  //   type: "labs",
  //   href: "/labs/vanilla",
  // },
  // {
  //   imageUrl: "https://cdn.svgporn.com/logos/javascript.svg",
  //   title: "JavaScript",
  //   id: "abkjbsdkj",
  //   description: "JavaScript Quiz",
  //   type: "quiz",
  // },
  // {
  //   imageUrl: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  //   title: "TypeScript",
  //   id: "bajbbkasfh",
  //   description: "TypeScript labs",
  //   type: "labs",
  //   href: "/labs/vanilla-ts",
  // },
  // {
  //   imageUrl: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  //   title: "TypeScript",
  //   id: "bajbbkasfh",
  //   description: "TypeScript Quiz",
  //   type: "quiz",
  // },
  {
    imageUrl: "https://cdn.svgporn.com/logos/vue.svg",
    title: "Vue",
    id: "hkibkjbkj ",
    description: "Vue labs",
    type: "labs",
    href: "/labs/vue",
  },
  {
    imageUrl: "https://cdn.svgporn.com/logos/vue.svg",
    title: "Vue",
    id: "kajhbjbds",
    description: "Vue Quiz",
    type: "quiz",
  },
  {
    imageUrl: "https://nuxtjs.ir/logos/nuxt-icon-white.png",
    title: "Nuxt",
    id: "hkibkjbkj ",
    description: "Vue labs",
    type: "labs",
    href: "/labs/vue",
  },
  {
    imageUrl: "https://nuxtjs.ir/logos/nuxt-icon-white.png",
    title: "Nuxt",
    id: "kajhbjbds",
    description: "Vue Quiz",
    type: "quiz",
  },
  {
    imageUrl: "https://cdn.svgporn.com/logos/angular-icon.svg",
    title: "Angular",
    id: "jskiajssjs ",
    description: "Angular labs",
    type: "labs",
    href: "/labs/angular",
  },
  {
    imageUrl: "https://cdn.svgporn.com/logos/angular-icon.svg",
    title: "Angular",
    id: "laksijansja",
    description: "Angular Quiz",
    type: "quiz",
  },
  {
    imageUrl: "https://cdn.svgporn.com/logos/svelte-icon.svg",
    title: "Svelte",
    id: "laksuhansja ",
    description: "Svelte labs",
    type: "labs",
    href: "/labs/svelte",
  },
  {
    imageUrl: "https://cdn.svgporn.com/logos/svelte-icon.svg",
    title: "Svelte",
    id: "sjaijshansa",
    description: "Svelte Quiz",
    type: "quiz",
  },
];
