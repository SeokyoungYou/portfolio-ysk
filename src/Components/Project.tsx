import styled from "styled-components";
import { Iproject } from "../datas/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled(motion.div)`
  width: 800px;
  height: 600px;
  margin: 10px 0px;
  background-color: ${(props) => props.theme.white.lighter};
  border-radius: 15px;
  margin-bottom: 30px;
  /* &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  } */
  @media only screen and (max-width: 860px) {
    width: 88vw;
    height: 400px;
  }
`;
const Thumbnail = styled(motion.div)`
  height: 50%;
  border-radius: 15px 15px 0px 0px;
  color: ${(props) => props.theme.white.darker};
  display: flex;
  align-items: flex-end;
  padding: 10px;
  font-size: 22px;
  font-weight: 400;
`;

const InfoWrapper = styled.div`
  height: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Infos = styled.div``;
const Info = styled.div`
  display: flex;
  margin: 15px 0px;
  height: 20px;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;
const InfoTitle = styled.h3`
  margin-right: 10px;
  font-weight: 400;
`;
const InfoText = styled.p`
  margin-right: 10px;
  color: "${(props) => props.theme.white.lighter}";
`;
const Btns = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Btn = styled.button`
  align-items: center;
  justify-content: center;
  border-style: none;
  padding: 8px;
  width: 110px;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.white.lighter};
`;
const Category = styled.div`
  padding: 8px 13px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white.lighter};
  /* border: solid ${(props) => props.theme.blue} 1.5px; */
  margin-right: 10px;
  margin-bottom: 10px;
`;
const WarpperVariants = {
  initial: {},
  hover: {
    scale: 1.01,
    boxShadow:
      "5px 5px 20px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(0, 0, 0, 0.1)",
    // boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)","10px 10px 10px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
    },
  },
};
const ThumnailVariants = {
  hover: {
    color: "white",
  },
};
interface IProjectComponent {
  project: Iproject;
}

function Project({ project }: IProjectComponent) {
  return (
    <Wrapper variants={WarpperVariants} initial="initial" whileHover="hover">
      <Thumbnail
        variants={ThumnailVariants}
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('${process.env.PUBLIC_URL}/Thumbnails/${project.title}.PNG')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {project.title}
      </Thumbnail>
      <InfoWrapper>
        <Infos>
          <Info>
            {project.categories?.map((category) => (
              <Category key={category}>{category}</Category>
            ))}
          </Info>
          <Info>
            <InfoTitle>Release Date</InfoTitle>
            <InfoText>{project.releaseDate}</InfoText>
          </Info>
          <Info>
            <InfoTitle>Keywords</InfoTitle>
            {project.keywords?.map((keyword) => (
              <InfoText key={keyword}>{keyword}</InfoText>
            ))}
          </Info>
          {/* <Info>API: data에 있으면...</Info>
          <Info>설명</Info> */}
        </Infos>
        <Btns>
          <Btn>
            <a href={project.githubRepo} target="_blank">
              Code <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Btn>
          {/* <Btn>
            <a href={project.depolyedWebsite} target="_blank">
              ScreenShots <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Btn> */}
          <Btn>
            <a href={project.depolyedWebsite} target="_blank">
              Website <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </Btn>
        </Btns>
      </InfoWrapper>
    </Wrapper>
  );
}

export default Project;
