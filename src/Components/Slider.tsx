import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { ISlider } from "../datas/homeData";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const SliderWrapper = styled.div`
  height: 350px;
  width: 100%;
  margin-bottom: 50px;
  /* padding-left: 5%; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const SliderTitle = styled.div`
  width: 90%;
  span {
    font-size: 24px;
    font-weight: 600;
    margin-right: 5px;
    &:nth-child(2) {
      color: ${(props) => props.theme.black.grey};
    }
  }
`;
const SliderContents = styled(motion.div)`
  height: 75%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  position: absolute;
  top: 13%;
  /* grid-template-columns: repeat(3, 1fr); */
  /* gap: 10px; */
`;
const SliderContent = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  margin-right: 20px;
  background-color: ${(props) => props.theme.white.lighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
`;
const SliderImg = styled.img`
  width: 30%;
`;
const SliderContentTitle = styled.h1``;
const SliderContentDescription = styled.p``;
const SliderBtns = styled.div`
  /* position: absolute; */
  right: 50%;
  bottom: 0;
`;
const SliderBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 15px;
  border-style: 0.5px black;
  margin-left: 10px;
  padding-top: 2px;
  margin-top: 8px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
const SliderContentsVariants = {
  hidden: (back: boolean) => ({
    x: back ? -window.outerWidth - 5 : window.outerWidth + 5,
  }),

  visible: (back: boolean) => ({
    x: 0,
  }),
  exit: (back: boolean) => ({
    x: back ? window.outerWidth + 5 : -window.outerWidth - 5,
  }),
};

const offset = 3;
interface ISliderComponent {
  slider: ISlider;
}
function Slider({ slider }: ISliderComponent) {
  const [leaving, setLeaving] = useState(false); //leaving state 만들고
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const nextBtnClicked = () => {
    if (slider.contents) {
      if (leaving) return;
      setBack(false);
      toggleLeaving();
      const totalData = slider.contents.length - 1; //except banner movie
      const maxIndex = Math.floor(totalData / offset);
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const prevBtnClicked = () => {
    if (slider.contents) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      const totalData = slider.contents.length - 1; //except banner movie
      const maxIndex = Math.floor(totalData / offset);
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  return (
    <SliderWrapper>
      <SliderTitle>
        <span>{slider.title1}</span>
        <span>{slider.title2}</span>
      </SliderTitle>
      <AnimatePresence
        initial={false}
        custom={back}
        onExitComplete={toggleLeaving}
      >
        <SliderContents
          custom={back}
          key={index}
          variants={SliderContentsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
        >
          {slider?.contents
            .slice(offset * index, offset * index + offset)
            .map((content) => (
              <SliderContent>
                <SliderImg src={content.img} />
                <SliderContentTitle>{content.title}</SliderContentTitle>
                <SliderContentDescription>
                  {content.description}
                </SliderContentDescription>
              </SliderContent>
            ))}
        </SliderContents>
        <SliderBtns>
          <SliderBtn onClick={prevBtnClicked}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </SliderBtn>
          <SliderBtn onClick={nextBtnClicked}>
            <FontAwesomeIcon icon={faAngleRight} />
          </SliderBtn>
        </SliderBtns>
      </AnimatePresence>
    </SliderWrapper>
  );
}
export default Slider;
