import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Nav from "../Components/Navigation";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Typo = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TypoTitle = styled(motion.h1)`
  font-size: 10vw;
  font-weight: 900;
`;
const TypoContents = styled(motion.p)`
  font-size: 2vw;
  font-weight: 600;
  padding: 20px 13vw;
  color: ${(props) => props.theme.black.grey};
`;
const Slider = styled.div`
  height: 350px;
  width: 100%;
  margin-bottom: 70px;
  /* padding-left: 5%; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const SliderTitle = styled.div`
  margin-bottom: 20px;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  position: absolute;
  top: 10%;
  /* grid-template-columns: repeat(3, 1fr); */
  /* gap: 10px; */
`;
const SliderContent = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  margin-right: 20px;
  background-color: ${(props) => props.theme.white.lighter};
`;
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
const TypoVariants = {
  start: {},
  end: {
    transition: {
      duration: 2,
      delay: 0.5,
      staggerChildren: 1,
    },
  },
};
const TypoChildVariants = {
  start: { opacity: 0, y: 20 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 30,
    },
  },
};
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
export const data = [1, 2, 3, 4, 5, 6];
const offset = 4;
function Home() {
  const [leaving, setLeaving] = useState(false); //leaving state 만들고
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const nextBtnClicked = () => {
    if (data) {
      if (leaving) return;
      setBack(false);
      toggleLeaving();
      const totalData = data.length - 1; //except banner movie
      const maxIndex = Math.floor(totalData / offset);
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const prevBtnClicked = () => {
    if (data) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      const totalData = data.length - 1; //except banner movie
      const maxIndex = Math.floor(totalData / offset);
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  return (
    <>
      <Nav />
      <Background>
        {/* 포지션 지원 동기 */}
        <Typo variants={TypoVariants} initial="start" animate="end">
          <TypoTitle variants={TypoChildVariants}>Code what I love.</TypoTitle>
          <TypoContents variants={TypoChildVariants}>
            안녕하세요. 좋아하는 것들을 구현해나가고 있는 개발자 유서경입니다.
            손에 닿는 것들을 설계하고 창작하는 엔지니어에서 많은 사람들이
            사용하는 2차원 서비스를 만들어보고
            싶습니다.ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </TypoContents>
        </Typo>
        {/* 포지션 역량 */}
        <Slider>
          <SliderTitle>
            <span>프로그래밍 경험.</span>
            <span>웹 프론트엔드 개발자 선택 계기.</span>
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
              {data
                ?.slice(offset * index, offset * index + offset)
                .map((content) => (
                  <SliderContent>hellooo</SliderContent>
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
        </Slider>
      </Background>
    </>
  );
}

// 인생의 prgress bar를 만들어보기
// CS: 아두이노 -> low level code -> 파이썬(그래프, 데이터 엔지니어?) ->  웾 프론트엔드
// 커리어: 항공 -> 기계 -> 연구/석사 -> 개발자
// 아헨에서 디자이너들과 협업
// 취향
// 취미?: 기타 -> 야구 -> 주짓수
// 3D 툴
// 나의 가장 의미있었던 개발 경험
// 지원한 포지션과 연관지은 CS 지식이나 기술적 역량
// SW 개발활동 중 타인과 함께한 경험. 주도적으로 참여한 부분

export default Home;
