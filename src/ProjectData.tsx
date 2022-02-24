export const Skills = {
  concept: {
    CRUD: "CRUD",
  },
  tool: {
    VersionControl: {
      git: "Git",
    },
    PackageManager: {
      npm: "npm",
    },
    ModulBundler: {
      webpack: "Webpack",
    },
  },
  frontEnd: {
    Basics: {
      HTML: {
        HTML5: "HTML5",
        semanticTags: "Semantic Tags",
      },
      CSS: {
        CSS3: "CSS3",
        preprocessors: {
          Sass: "Sass",
        },
        CSSFramework: {
          TailwindCSS: "Tailwind CSS",
          StyledComponents: "Styled-Components",
        },
      },
      JS: "JavaSCript",
    },
    JS: {
      ES6Syntax: "ES6+ Syntax",
      browserAPIs: "APIs",
      NodeJS: {
        NodeJS: "NodeJS",
        package: {
          express: "Express",
          babel: "Babel",
          pug: "Pug",
          passport: "Passport",
          multer: "Multer",
        },
      },
      TypeScript: "TypeScript",
      Framework: {
        React: {
          package: {
            reactRouter: "React Router",
            recoil: "Recoil",
            framerMotion: "Framer Motion",
            beautifulDnD: "Beautiful DnD",
            reactQuery: "React Query",
            reactHookForm: "React Hook Form",
          },
        },
        Vue: "Vue",
        Angular: "Angular",
        Svelte: "Svelte",
      },
      SSG: {
        Gatsby: "Gatsby",
      },
      SSR: {
        NestJS: "NestJS",
      },
    },
  },
  backEnd: {
    dataBase: {
      MongoDB: {
        MongoDB: "MongoDB",
        Mongoose: "Mongoose",
      },
    },
  },
  publish: {
    githubPages: "Github Pages",
    AWS: "AWS",
    Heroku: "Heroku",
  },
  GraphQL: {},
  CrossPlatform: {
    Desktop: {
      Electron: "Electron",
    },
    Mobile: {
      ReactNative: "React Native",
      Flutter: "Flutter",
    },
  },
};
export const CategoryName = {
  basics: "Basics",
  reactJS: "ReactJS",
  typescript: "TypeScript",
  backEnd: "Back-end",
  publish: "Publish",
};
export interface Ilecture {
  lecture: string;
  theory: string[];
  packages: string[];
}
export interface Iproject {
  title: string;
  lecture: Ilecture;
  releaseDate: string;
  categories: string[];
  keywords?: string[];
  depolyedWebsite?: string;
  githubRepo?: string;
}
export let kokoaClone: Ilecture = {
  lecture: "Kokoa Clone",
  theory: [
    "IDs & Classes",
    "HTML Tags",
    "Semantic & no",
    "Box Model",
    "Inline, Block",
    "CSS Positio",
    "Flexbox",
    "Selectors",
    "Pseudo Select",
    "Transition",
    "Animation",
    "Media Queries",
  ],
  packages: ["HTML5", "CSS3", "VSCode", "Github Desktop", "Font Awesome"],
};
export let valinaJSChromeApp: Ilecture = {
  lecture: "Chrome App using ReactJS",
  theory: [
    "Variables",
    "Functions",
    "Data Type",
    "Arrays, O",
    "DOM Funct",
    "Events",
    "if / else",
  ],
  packages: [
    "Javascript",
    "localStorage",
    "AJAX",
    "JSON",
    "DOM",
    "fetch",
    "OpenWeather API",
  ],
};
export let wetubeClone: Ilecture = {
  lecture: "Movie Web Service using ReactJS",
  theory: ["MVC", "Routing", "Templates", "Models", "Relationships"],
  packages: [
    "NodeJS",
    "ES6",
    "Express",
    "Babel",
    "Pug",
    "Passport",
    "AJAX",
    "Webpack",
    "SCSS",
    "MongoDB",
    "Mongoose",
    "Multer",
    "ESLint",
  ],
};
export let reactMovieWebService: Ilecture = {
  lecture: "Movie Web Service using ReactJS",
  theory: [
    "JSX",
    "State",
    "Props",
    "Class Components",
    "Data Fetching",
    "Routing",
  ],
  packages: ["React", "Axios", "React Router", "Github Pages"],
};
export let reactMasterClass: Ilecture = {
  lecture: "ReactJS Master Class",
  theory: [
    "Routing",
    "State Management",
    "Data Fetching",
    "Animations",
    "Typescript",
  ],
  packages: [
    "React Router",
    "Styled Component",
    "Recoil",
    "ApexCharts",
    "Gatsby",
    "Typescript",
    "Framer Motion",
    "Beautiful DnD",
    "React Query",
    "React Hook Form",
  ],
};
export let kakaoClone: Iproject = {
  title: "Kakao-Clone",
  lecture: kokoaClone,
  releaseDate: "2021-07",
  categories: [CategoryName.basics],
  keywords: ["HTML", "CSS", "Status Bar", "Screens", "Message Animations"],
  depolyedWebsite: "https://seokyoungyou.github.io/antenna-messenger-2021",
  githubRepo: "https://github.com/SeokyoungYou/antenna-messenger-2021",
};
export let MomentumClone: Iproject = {
  title: "Momentum-Clone",
  lecture: valinaJSChromeApp,
  releaseDate: "2022-01",
  categories: [CategoryName.basics],
  keywords: [
    "JS Clock",
    "JS To Do List",
    "Get Geolocation",
    "Get Weather Information",
    "Deploy to Github Pages",
  ],
  depolyedWebsite: "https://seokyoungyou.github.io/daily-chrome-app-2021",
  githubRepo: "https://github.com/SeokyoungYou/daily-chrome-app-2021",
};
export let youtubeClone: Iproject = {
  title: "Youtube-Clone",
  lecture: wetubeClone,
  releaseDate: "2022-01",
  categories: [CategoryName.backEnd],
  keywords: [
    "User Authentication",
    "Video Upload & Record",
    "Heroku",
    "S3 Upload",
    "Mongo Atlas",
  ],
  depolyedWebsite: "https://wetube-quartz.herokuapp.com/",
  githubRepo: "https://github.com/SeokyoungYou/wetube-clone",
};
export let coinTracker: Iproject = {
  title: "Coin Tracker",
  lecture: reactMasterClass,
  releaseDate: "2022-01",
  categories: [CategoryName.reactJS, CategoryName.typescript],
  keywords: ["Data Fetching", "Data Visualization", "Routing", "Dark Mode"],
  depolyedWebsite:
    "https://seokyoungyou.github.io/ReactJS-masterclass-cointracker",
  githubRepo: "https://github.com/SeokyoungYou/ReactJS-masterclass-cointracker",
};
export let trelloClone: Iproject = {
  title: "Trello-Clone",
  lecture: reactMasterClass,
  releaseDate: "2022-02",
  categories: [CategoryName.reactJS, CategoryName.typescript],
  keywords: ["Form Validation", "Drag and Drop", "State Management"],
  depolyedWebsite: "https://seokyoungyou.github.io/nomflix-clone",
  githubRepo: "https://github.com/SeokyoungYou/nomflix-clone",
};

export let netflixClone: Iproject = {
  title: "Netflix-Clone",
  lecture: reactMasterClass,
  releaseDate: "2022-02",
  categories: [CategoryName.reactJS, CategoryName.typescript],
  keywords: ["Animations", "Sliders", "Modals"],
  depolyedWebsite: "https://seokyoungyou.github.io/nomflix-clone",
  githubRepo: "https://github.com/SeokyoungYou/nomflix-clone",
};
