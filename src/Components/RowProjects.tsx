import styled from "styled-components";
import Project from "./Project";
import { nomflixClone } from "../ProjectData";

const Wrapper = styled.div`
  width: 100%;
`;
const Row = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  padding: 0px 15px;
  gap: 15px;
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
        </Row>
      </Wrapper>
    </>
  );
}

export default RowProjects;
