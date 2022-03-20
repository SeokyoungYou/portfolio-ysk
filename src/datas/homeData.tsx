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
let ReactJS: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "React",
  description: "React",
};
export let SliderFrontendExp: ISlider = {
  title1: "프론트 엔드.",
  title2: "사용할 수 있는 툴.",
  contents: [ReactJS],
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
