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
} from "../datas/ProjectData";
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
  const RouteMatchArray = [
    AllMatch,
    BasicsMatch,
    ReactJSMatch,
    TypeScriptMatch,
    BackEndMatch,
  ];
  let ProjectRouteArray = new Array<Iproject>();
  function matchDot(RouteMatch: any) {
    items.map(
      (item) =>
        item.title === RouteMatch?.path.slice(10) &&
        (item.routeMatch = RouteMatch)
    );
  }
  function matchCategoryURL(RouteMatch: any) {
    ProjectArray.map((project) =>
      project.categories.map(
        (cat) =>
          cat === RouteMatch?.path.slice(10) && ProjectRouteArray.push(project)
      )
    );
  }
  function matchProjectRouteArray(RouteMatch: any) {
    ProjectRouteArray = [];
    items.map((item) => (item.routeMatch = null));
    if (RouteMatch?.path === "/projects") {
      ProjectRouteArray = ProjectArray;
      return;
    }
    if (RouteMatch?.isExact) {
      matchCategoryURL(RouteMatch);
      matchDot(RouteMatch); // Send route matching information in items prop of Category
    }
  }
  return (
    <>
      <Nav />
      <Background>
        <CategoryBar items={items} />
        <ProjectWrapper>
          {/* Change ProjectRouteArray by matching route and category  */}
          {RouteMatchArray.map((RouteMatch) =>
            RouteMatch ? matchProjectRouteArray(RouteMatch) : null
          )}
          {/* Render projects */}
          {ProjectRouteArray.map((project) => (
            <Project project={project} />
          ))}
        </ProjectWrapper>
      </Background>
    </>
  );
}

export default ProjectScreen;
