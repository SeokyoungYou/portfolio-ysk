import styled from "styled-components";
import Nav from "../../Components/Navigation";
import RowProjects from "../../Components/RowProjects";
import CategoryBar, { ICategoryBar } from "../../Components/CategoryBar";
import {
  faStairs,
  faUpload,
  faServer,
  faT,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  CategoryName,
  coinTracker,
  kakaoClone,
  MomentumClone,
  netflixClone,
  trelloClone,
  youtubeClone,
} from "../../ProjectData";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function ProjectScreen() {
  const { items }: ICategoryBar = {
    items: [
      { title: CategoryName.basics, icon: faStairs },
      { title: CategoryName.reactJS, icon: faReact },
      { title: CategoryName.typescript, icon: faT },
      { title: CategoryName.backEnd, icon: faServer },
      { title: CategoryName.publish, icon: faUpload },
    ],
  };

  return (
    <>
      <Nav />
      <Background>
        <CategoryBar items={items} />
        <RowProjects firstProject={netflixClone} secondProject={kakaoClone} />
        <RowProjects firstProject={youtubeClone} secondProject={coinTracker} />
        <RowProjects firstProject={MomentumClone} secondProject={trelloClone} />
      </Background>
    </>
  );
}

export default ProjectScreen;
