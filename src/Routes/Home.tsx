import { motion } from "framer-motion";
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
  font-size: 90px;
  font-weight: 900;
`;
const TypoContents = styled(motion.p)`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.black.grey};
`;
const Slider = styled.div`
  height: 350px;
  width: 100%;
  margin-bottom: 70px;
`;
const SliderTitle = styled.div`
  margin-left: 10%;
  margin-bottom: 20px;
  span {
    font-size: 24px;
    font-weight: 600;
    margin-right: 5px;
    &:nth-child(2) {
      color: ${(props) => props.theme.black.grey};
    }
  }
`;
const SliderContents = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  div {
    &:first-child {
      margin-left: 10%;
    }
  }
`;
const SliderContent = styled.div`
  height: 100%;
  width: 350px;
  border-radius: 10px;
  margin-right: 20px;
  background-color: ${(props) => props.theme.backgroundColor.white};
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
function Home() {
  return (
    <>
      <Nav />
      <Background>
        {/* 포지션 지원 동기 */}
        <Typo variants={TypoVariants} initial="start" animate="end">
          <TypoTitle variants={TypoChildVariants}>Code what I love.</TypoTitle>
          <TypoContents variants={TypoChildVariants}>
            안녕하세요. 프론트엔드 개발자 유서경입니다.
          </TypoContents>
        </Typo>
        {/* 포지션 역량 */}
        <Slider>
          <SliderTitle>
            <span>CS.</span>
            <span>부가설명.</span>
          </SliderTitle>
          <SliderContents>
            <SliderContent>hello</SliderContent>
            <SliderContent></SliderContent>
            <SliderContent>hello</SliderContent>
            <SliderContent></SliderContent>
            <SliderContent>hello</SliderContent>
            <SliderContent></SliderContent>
          </SliderContents>
        </Slider>
        <Slider>
          <SliderTitle>
            <span>CS.</span>
            <span>부가설명.</span>
          </SliderTitle>
          <SliderContents>
            <SliderContent>hello</SliderContent>
            <SliderContent></SliderContent>
          </SliderContents>
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

// 나의 가장 의미있었던 개발 경험
// 지원한 포지션과 연관지은 CS 지식이나 기술적 역량
// SW 개발활동 중 타인과 함께한 경험. 주도적으로 참여한 부분

export default Home;
