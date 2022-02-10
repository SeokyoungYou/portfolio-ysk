import styled from "styled-components";
import Project from "./Project";
import { nomflixClone } from "../ProjectData";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Row = styled.div`
  margin: 10px 0px;
  width: 97%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  gap: 20px;
  border-radius: 10px;
  align-items: center;
`;
function RowProjects() {
  return (
    <>
      <Wrapper>
        <Row>
          <Project project={nomflixClone} />
          <Project project={nomflixClone} />
          <Project project={nomflixClone} />
        </Row>
      </Wrapper>
    </>
  );
}

export default RowProjects;
