import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Navigation";
import Home from "./Routes/Home";
import ProfileScreen from "./Routes/ProfileScreen";
import ProjectScreen from "./Routes/ProjectScreen";

// projectId string이 가능한가?
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet>
        <title>Seokyoung You</title>
      </Helmet>
      <Nav />
      <Switch>
        <Route path="/profile">
          <ProfileScreen />
        </Route>
        <Route path={["/projects", "/projects/:projectTitle"]}>
          <ProjectScreen />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
