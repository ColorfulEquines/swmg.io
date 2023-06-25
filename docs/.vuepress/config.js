import { defaultTheme } from "vuepress";

export default {
  title: "FateWeaver",
  // Appears in meta tag and subtitle
  description: "DnD Discord Bot",

  theme: defaultTheme({
    // Links that will appear in the top navbar
    navbar: [
      { text: "Guide", link: "/guide/" },
      { text: "Add to Discord", link: "/invite/" },
    ],
    // Links that will appear in side bar
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
        },
      ],
    },

    repo: "colorfulequines/fateweaver.io",
  }),
};
