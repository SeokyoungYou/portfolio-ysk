import styled from "styled-components";
import Nav from "../Components/Navigation";
import RowProjects from "../Components/RowProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import CategoryBar from "../Components/CategoryBar";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <Nav />
      <Background>
        <CategoryBar />
        <RowProjects />
        <RowProjects />
      </Background>
    </>
  );
}

export default Home;
