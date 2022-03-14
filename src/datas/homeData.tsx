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
  description: "low level",
};
let LCDPanel: ISliderContent = {
  img: `${process.env.PUBLIC_URL}/HomePic/Arduino_Logo.svg`,
  title: "LCDPanel",
  description: "low level",
};

export let SliderProgrammingExp: ISlider = {
  title1: "프로그래밍 경험.",
  title2: "웹 프론트엔드 개발자 선택 계기.",
  contents: [Arduino, LCDPanel],
};
