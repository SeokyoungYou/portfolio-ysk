import Nav from "../Components/Navigation";
import Project from "../Components/Project";
import RowProjects from "../Components/RowProjects";
import { nomflixClone } from "../ProjectData";

function Home() {
  return (
    <>
      <Nav />
      <RowProjects />
      {/* <RowProjects /> */}
    </>
  );
}

export default Home;
