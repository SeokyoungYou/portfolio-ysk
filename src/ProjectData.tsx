export interface Ilecture {
  lecture: string;
  theory: string[];
  package: string[];
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
  package: ["React", "Axios", "React Router", "Github Pages"],
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
  package: [
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
export let coinTracker: Iproject = {
  title: "Coin Tracker",
  lecture: reactMasterClass,
  releaseDate: "2022-01",
  categories: ["reactJS"],
  keywords: ["Data Fetching", "Data Visualization", "Routing", "Dark Mode"],
};
export let trelloClone: Iproject = {
  title: "Trello",
  lecture: reactMasterClass,
  releaseDate: "2022-02",
  categories: ["reactJS"],
  keywords: ["Form Validation", "Drag and Drop", "State Management"],
};

export let nomflixClone: Iproject = {
  title: "Nomflix",
  lecture: reactMasterClass,
  releaseDate: "2022-02",
  categories: ["reactJS", "API"],
  keywords: ["Animations", "Sliders", "Modals"],
  depolyedWebsite: "https://seokyoungyou.github.io/nomflix-clone",
  githubRepo: "https://github.com/SeokyoungYou/nomflix-clone",
};
