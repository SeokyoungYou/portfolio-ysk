import styled from "styled-components";
import Nav from "../Components/Navigation";
import CategoryBar, { ICategoryBar } from "../Components/CategoryBar";
import {
  faStairs,
  faUpload,
  faServer,
  faT,
  faDiagramProject,
  faA,
  faPeopleArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  CategoryName,
  coinTracker,
  DDobok,
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProjectWrapper = styled.div`
  padding: 20px 30px;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, auto-fill);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  justify-items: center; */
  /* @media only screen and (max-width: 860px) {
    width: 100%;
    padding: 0px;
  } */
`;
const ProjectArray = [
  DDobok,
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
    { title: CategoryName.collaboration, icon: faPeopleArrowsLeftRight },
  ],
};
function ProjectScreen() {
  const AllMatch = useRouteMatch(`/projects`);
  const BasicsMatch = useRouteMatch(`/projects/${items[0].title}`);
  const ReactJSMatch = useRouteMatch(`/projects/${items[1].title}`);
  const TypeScriptMatch = useRouteMatch(`/projects/${items[2].title}`);
  const BackEndMatch = useRouteMatch(`/projects/${items[3].title}`);
  const CollaborationMatch = useRouteMatch(`/projects/${items[4].title}`);
  const RouteMatchArray = [
    AllMatch,
    BasicsMatch,
    ReactJSMatch,
    TypeScriptMatch,
    BackEndMatch,
    CollaborationMatch,
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
  );
}

export default ProjectScreen;
