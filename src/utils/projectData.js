import TrainGoneHome from "./projects/TrainGone/trainGoneCover.png";
import FireworkCover from "./projects/Firework/fireworkCover.png";
import MySiteCover from "./projects/MySite/mysitecover.png";
import BonoCover from "./projects/Bono/BonoHome.png";
import ChillCover from "./projects/Chill/ChillCover.png";

const orange = "#FF410C";
const red = "#FF1601";
const pink = "#FF006E";
const purple = "#8338EC";
const blue = "#3986FF";

const timelineData = [
  {
    header: "Firework",
    caption:
      "Front-end engineer and former designer at a leading global video commerce company.",
    date: "2024",
    color: orange,
    tags: ["TypeScript", "React", "Python", "Figma"],
    url: "projects/Firework",
    type: "web",
    imageLink: FireworkCover,
  },
  {
    header: "Bono",
    caption:
      "Developed a donation app that personalizes and simplifies the giving process",
    date: "2024",
    color: red,
    tags: ["React", "Python", "Figma"],
    url: "Bono",
    type: "mobile",
    imageLink: BonoCover,
  },
  {
    header: "TrainGone",
    caption:
      "Designed a reverse-ASL dictionary app to connect deaf and hearing communities.",
    date: "2024",
    color: pink,
    tags: ["ReactNative", "UX/UI", "User Research"],
    url: "TrainGone",
    imageLink: TrainGoneHome,
    type: "mobile",
  },
  {
    header: "Portfolio",
    caption:
      "You're looking at it! A custom-built site showcasing my journey through design and development.",
    date: "2024",
    color: purple,
    tags: ["React", "Figma"],
    url: "Portfolio",
    type: "web",
    imageLink: MySiteCover,
  },
  {
    header: "&Chill",
    caption:
      "I designed a social TV streaming app for virtual hangouts, my first Figma project.",
    date: "2024",
    color: blue,
    tags: ["UX/UI", "User Research", "Prototyping"],
    url: "Chill",
    type: "web",
    imageLink: ChillCover,
  },
];

export default timelineData;
