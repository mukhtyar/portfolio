// Represents page routes used by the Nav & Footer component
import { IconGithub, IconObservable, IconLinkedIn } from "../components/icons";

export const routes = [
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "https://www.linkedin.com/in/shruti-mukhtyar/",
    label: "LinkedIn",
    icon: IconLinkedIn,
  },
  {
    path: "https://github.com/mukhtyar",
    label: "Github",
    icon: IconGithub,
  },
  {
    path: "https://observablehq.com/@mukhtyar?tab=collections",
    label: "ObservableHQ",
    icon: IconObservable,
  },
];
