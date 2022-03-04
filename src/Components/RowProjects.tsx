// Two projects in row #Since 220304
import styled from "styled-components";
import Project from "./Project";
import { Iproject } from "../ProjectData";

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
interface IRowProjectsComponent {
  firstProject: Iproject;
  secondProject: Iproject;
}
function RowProjects({ firstProject, secondProject }: IRowProjectsComponent) {
  return (
    <>
      <Wrapper>
        <Row>
          <Project project={firstProject} />
          <Project project={secondProject} />
        </Row>
      </Wrapper>
    </>
  );
}

export default RowProjects;
