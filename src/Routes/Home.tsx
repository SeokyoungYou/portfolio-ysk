import styled from "styled-components";
import Nav from "../Components/Navigation";

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
      <Background></Background>
    </>
  );
}

export default Home;
