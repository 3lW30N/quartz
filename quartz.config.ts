import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Noémie",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "3lW30N.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", "public", ".quartz"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Silkscreen",
        body: "Overpass",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#8BBEB2",
          darkgray: "#4e4e4e",
          dark: "#0D0630",
          secondary: "#384E77",
          tertiary: "#EF9CDA",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#EF9CDA",
        },
        // darkMode: {
        //   light: "#2b2b2b",
        //   lightgray: "#393639",
        //   gray: "#646464",
        //   darkgray: "#d4d4d4",
        //   dark: "#F2E5BC",
        //   secondary: "#928374",
        //   tertiary: "#a89984",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        //   textHighlight: "#7b6e1b",
        // },
        darkMode: {
          light: "#0D0630",        // Darker background for better contrast  
          lightgray: "#18314F",    // Subtle contrast for UI elements  
          gray: "#8BBEB2",         // Medium gray for secondary elements  
          darkgray: "#d4d4d4",     // Well-balanced gray for subtext and secondary text  
          dark: "#E6F9AF",         // Warm beige for main text (readable but not harsh)  
          secondary: "#EF9CDA",    // Muted golden-yellow for buttons and accents  
          tertiary: "#E250BE",     // Darker gold for subheadings (less bright)  
          highlight: "rgba(131, 165, 152, 0.3)",  // Soft teal-green for background highlights  
          textHighlight: "#7b6e1b", // Muted teal-blue for text highlights (clear contrast with white text)  
        }
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
