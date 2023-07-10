import { defaultTheme } from "vuepress";
const sidebar = require("./sidebar.js");

export default {
  title: "SWMG",
  // Appears in meta tag and subtitle
  description: "DnD Discord Bot",

  theme: defaultTheme({
    // Links that will appear in the top navbar
    navbar: [
      { text: "Guide", link: "/guide/" },
      { text: "Add to Discord", link: "/invite/" },
    ],
    sidebar,

    repo: "colorfulequines/swmg.io",
  }),
};
