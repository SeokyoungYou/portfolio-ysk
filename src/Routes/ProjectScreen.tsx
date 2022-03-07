import styled from "styled-components";
import Nav from "../Components/Navigation";
import RowProjects from "../Components/RowProjects";
import CategoryBar, { ICategoryBar } from "../Components/CategoryBar";
import {
  faStairs,
  faUpload,
  faServer,
  faT,
  faDiagramProject,
  faA,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  CategoryName,
  coinTracker,
  Iproject,
  kakaoClone,
  MomentumClone,
  netflixClone,
  trelloClone,
  youtubeClone,
} from "../ProjectData";
import { useRouteMatch } from "react-router-dom";
import Project from "../Components/Project";

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.grey};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProjectWrapper = styled.div`
  padding: 30px;
`;
const ProjectArray = [
  netflixClone,
  kakaoClone,
  youtubeClone,
  coinTracker,
  MomentumClone,
];
const { items }: ICategoryBar = {
  items: [
    { title: CategoryName.basics, icon: faStairs },
    { title: CategoryName.reactJS, icon: faReact },
    { title: CategoryName.typescript, icon: faT },
    { title: CategoryName.backEnd, icon: faServer },
  ],
};
function ProjectScreen() {
  const AllMatch = useRouteMatch(`/projects`);
  const BasicsMatch = useRouteMatch(`/projects/${items[0].title}`);
  const ReactJSMatch = useRouteMatch(`/projects/${items[1].title}`);
  const TypeScriptMatch = useRouteMatch(`/projects/${items[2].title}`);
  const BackEndMatch = useRouteMatch(`/projects/${items[3].title}`);
  // Send route matching information in items prop of Category
  let RouteArray = new Array<Iproject>();
  function MatchRouteArray(RouteMatch: any | null) {
    RouteArray = [];
    if (RouteMatch?.isExact) {
      ProjectArray.map((project) =>
        project.categories.map(
          (cat) =>
            cat === RouteMatch?.path.slice(10) && RouteArray.push(project)
        )
      );
      items.map((item) => (item.routeMatch = null));
      items.map(
        (item) =>
          item.title === RouteMatch?.path.slice(10) &&
          (item.routeMatch = RouteMatch)
      );
    }
  }
  if (AllMatch) {
    RouteArray = [];
    RouteArray = ProjectArray;
  }
  if (BasicsMatch) {
    MatchRouteArray(BasicsMatch);
  }
  if (ReactJSMatch) {
    MatchRouteArray(ReactJSMatch);
  }
  if (TypeScriptMatch) {
    MatchRouteArray(TypeScriptMatch);
  }
  if (BackEndMatch) {
    MatchRouteArray(BackEndMatch);
  }

  // <Item>
  //     <Link to="/">Home {homeMatch?.isExact && <Circle layoutId="circle" />}</Link> //정확하게 "/"일때만 Circle 나타남 (/포함된 router면 항상 true이기 때문)
  //   </Item>
  //   <Item>
  //     <Link to="/tv">Tv Shows {tvMatch && <Circle layoutId="circle" />}</Link> //true이면 Circle 나타남
  //   </Item>
  //RowProject 묶기 -> 클론 이름 array로 만들어서 [].?=()> 함수식 사용하기

  return (
    <>
      <Nav />
      <Background>
        <CategoryBar items={items} />
        <ProjectWrapper>
          {RouteArray.map((project) => (
            <Project project={project} />
          ))}
        </ProjectWrapper>
      </Background>
    </>
  );
}

export default ProjectScreen;
