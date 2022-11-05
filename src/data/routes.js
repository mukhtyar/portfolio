// Represents page routes used by the Nav & Footer component
import { IconGithub, IconTwitter, IconObservable } from "../components/icons";

export const routes = [
  {
    path: "/projects",
    label: "Projects",
  },
  // {
  //   path: "/blog",
  //   label: "Blog",
  // },
  {
    path: "https://twitter.com/mapchitra",
    label: "Twitter",
    icon: IconTwitter,
  },
  {
    path: "https://observablehq.com/@mukhtyar?tab=collections",
    label: "ObservableHQ",
    icon: IconObservable,
  },
  {
    path: "https://github.com/mukhtyar",
    label: "Github",
    icon: IconGithub,
  },
];
