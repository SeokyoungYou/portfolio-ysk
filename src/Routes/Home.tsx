import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageGrid from "../Components/ImageGrid";
import Nav from "../Components/Navigation";
import Slider from "../Components/Slider";
import {
  SliderFrontendExp,
  SliderProgrammingExp,
  SliderTeamprojectExp,
} from "../datas/homeData";
const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  display: flex;
  margin-top: 50px;
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
  font-size: 9vw;
  font-weight: 900;
`;
const TypoContents = styled(motion.p)`
  font-size: 1.4vw;
  font-weight: 600;
  padding: 20px 14vw;
  color: ${(props) => props.theme.black.grey};
`;
const Wrapper = styled.div`
  /* height: 350px; */
  width: 100%;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Titles = styled.div`
  width: 90%;
  margin-bottom: 15px;
  span {
    font-size: 24px;
    font-weight: 600;
    margin-right: 5px;
    &:nth-child(2) {
      color: ${(props) => props.theme.black.grey};
    }
  }
`;
const GridWrapper = styled.div`
  width: 90%;
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
    <Background>
      {/* 포지션 지원 동기 */}
      <Typo variants={TypoVariants} initial="start" animate="end">
        <TypoTitle variants={TypoChildVariants}>Code what I love.</TypoTitle>
        <TypoContents variants={TypoChildVariants}>
          안녕하세요. 좋아하는 것들을 구현해나가고 있는 프론트엔드 개발자
          유서경입니다. 실재하는 감각을 통해 구동하는 디바이스를 설계하는
          기계공학 엔지니어에서, 가상의 평면에서 많은 사람들이 경험할 수 있는
          서비스를 창작하는 웹 개발자가 되는 과정을 지나가고 있습니다. 이
          웹사이트는 애플(Apple)의 홈페이지를 참조하여 디자인하였으며 ReactJS,
          Typescript, 그리고 Styled-component를 사용하여 개발되었습니다.
        </TypoContents>
      </Typo>
      {/* <Slider slider={SliderProgrammingExp} /> */}
      {/* <Slider slider={SliderFrontendExp} /> */}
      {/* ImgGridWrapper로 변경할 것 */}
      <Wrapper>
        <Titles>
          <span>{SliderFrontendExp.title1}</span>
          <span>{SliderFrontendExp.title2}</span>
        </Titles>
        <GridWrapper>
          <ImageGrid slider={SliderFrontendExp} />
        </GridWrapper>
      </Wrapper>

      {/* <Slider slider={SliderTeamprojectExp} /> */}
    </Background>
  );
}

// CS: 아두이노 -> low level code: LCD 만든게 프론트 백엔드 다 한거였네 ㅎ -> 파이썬(그래프, 데이터 엔지니어?) ->  웾 프론트엔드
// 커리어:기계 -> 연구/석사 -> 개발자
// 팀플: 아헨에서 디자이너들과 협업, 밴드, 석사 과제, 메이커톤
// 취미?: 기타, 음악 -> 영화 ->야구 -> 주짓수
// 나의 가장 의미있었던 개발 경험
// 지원한 포지션과 연관지은 CS 지식이나 기술적 역량
// SW 개발활동 중 타인과 함께한 경험. 주도적으로 참여한 부분

export default Home;
