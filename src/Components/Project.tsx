import styled from "styled-components";
import { Iproject } from "../ProjectData";

const Wrapper = styled.div`
  height: 95%;
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const src = "../Nomflix.PNG";
const Thumbnail = styled.div`
  height: 50%;
  border-radius: 10px 10px 0px 0px;
  color: white;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
`;

const InfoWrapper = styled.div`
  height: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  height: 80%;
`;
const Btn = styled.button`
  border-style: none;
  padding: 5px 20px;
  color: white;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;
interface IProjectComponent {
  project: Iproject;
}

function Project({ project }: IProjectComponent) {
  return (
    <Wrapper>
      <Thumbnail
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.5), transparent), url('${process.env.PUBLIC_URL}/Thumbnails/${project.title}.PNG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {project.title}
      </Thumbnail>
      <InfoWrapper>
        <Info>{project.releasedDate}</Info>
        <Info>{project.releasedDate}</Info>
        <Info>{project.releasedDate}</Info>
        <Info>{project.releasedDate}</Info>
        <Info>{project.releasedDate}</Info>
        <Info>{project.releasedDate}</Info>
        <Btn>
          <a href={project.githubRepo} target="_blank">
            Code
          </a>
        </Btn>
      </InfoWrapper>
    </Wrapper>
  );
}

export default Project;
