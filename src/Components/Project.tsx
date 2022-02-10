import styled from "styled-components";
import { Iproject } from "../ProjectData";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 95%;
  margin: 10px 0px;
  background-color: ${(props) => props.theme.backgroundColor.grey};
  border-radius: 15px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
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
`;

const Info = styled.div`
  height: 80%;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Btn = styled.button`
  border-style: none;
  padding: 8px;
  width: 80px;
  color: ${(props) => props.theme.white.lighter};
  border-radius: 5px;
  background-color: ${(props) => props.theme.black.lighter};
  :first-child {
    background-color: ${(props) => props.theme.orange};
  }
  :last-child {
    background-color: ${(props) => props.theme.blue};
  }
`;
const WarpperVariants = {
  initial: {},
  hover: {
    scale: 1.02,
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
          background: `linear-gradient(to top, rgba(0,0,0,0.5), transparent), url('${process.env.PUBLIC_URL}/Thumbnails/${project.title}.PNG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {project.title}
      </Thumbnail>
      <InfoWrapper>
        <Info>
          <FontAwesomeIcon icon={faCalendar} /> {project.releaseDate}
        </Info>
        <Btns>
          <Btn>
            <a href={project.githubRepo} target="_blank">
              Code
            </a>
          </Btn>
          <Btn>
            <a href={project.depolyedWebsite} target="_blank">
              Website
            </a>
          </Btn>
        </Btns>
      </InfoWrapper>
    </Wrapper>
  );
}

export default Project;
