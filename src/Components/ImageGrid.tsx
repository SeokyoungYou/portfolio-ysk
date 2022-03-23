import styled from "styled-components";
import { ISlider } from "../datas/homeData";
import { ISliderComponent } from "./Slider";
const ImgGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px;
  /* overflow-x: auto; */
`;
const ImgItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgContent = styled.img`
  width: 40%;
  height: 80%;
  margin-bottom: 5px;
`;
const ImgTitle = styled.h2``;

function ImageGrid({ slider }: ISliderComponent) {
  return (
    <ImgGridWrapper>
      {slider?.contents.map((content) => (
        <ImgItem>
          <ImgContent src={content.img} />
          <ImgTitle>{content.title}</ImgTitle>
        </ImgItem>
      ))}
    </ImgGridWrapper>
  );
}

export default ImageGrid;
