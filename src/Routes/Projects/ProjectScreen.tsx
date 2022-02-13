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
      { title: "Basics", icon: faStairs },
      { title: "ReactJS", icon: faReact },
      { title: "TypeScript", icon: faT },
      { title: "Back-end", icon: faServer },
      { title: "Publish", icon: faUpload },
    ],
  };

  return (
    <>
      <Nav />
      <Background>
        <CategoryBar items={items} />
        <RowProjects />
        <RowProjects />
      </Background>
    </>
  );
}

export default ProjectScreen;
