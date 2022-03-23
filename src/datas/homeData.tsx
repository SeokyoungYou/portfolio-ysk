export interface ISlider {
  title1: string;
  title2: string;
  contents: Array<any>;
}
export interface ISliderContent {
  img: string;
  title: string;
  description: string;
}
export interface IGrid {
  title: string;
  img: string;
}

let Arduino: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "Arduino",
  description: "low level.",
};
let LCDPanel: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "LCDPanel",
  description: "low level & 3D tools",
};
let Mnist: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "MNIST",
  description: "python",
};
let Web: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "Web Front-end",
  description: "low level",
};
export let SliderProgrammingExp: ISlider = {
  title1: "프로그래밍 경험.",
  title2: "웹 프론트엔드 개발자 선택 계기.",
  contents: [Arduino, LCDPanel, Mnist, Web],
};
//
let ReactJS: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/react.svg`,
  title: "React",
};
let toolCSS: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/css.svg`,
  title: "CSS",
};
let Git: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/git.svg`,
  title: "Git",
};
let toolHTML: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/html.svg`,
  title: "HTML",
};
let toolJS: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/javascript.svg`,
  title: "Javascript",
};
let sass: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/sass.svg`,
  title: "Sass",
};
let vsCode: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/vscode.svg`,
  title: "VS Code",
};
let styledComp: IGrid = {
  img: `${process.env.PUBLIC_URL}/HomePic/styled-component.png`,
  title: "Styled-component",
};
export let SliderFrontendExp: ISlider = {
  title1: "프론트 엔드.",
  title2: "사용할 수 있는 툴.",
  contents: [ReactJS, toolCSS, Git, toolHTML, toolJS, sass, vsCode, styledComp],
};
//
let Aachen: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "Aachen",
  description: "Aachen",
};
export let SliderTeamprojectExp: ISlider = {
  title1: "팀 프로젝트.",
  title2: "공동체 경험.",
  contents: [Aachen],
};
//
