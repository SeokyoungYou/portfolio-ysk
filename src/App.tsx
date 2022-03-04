import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import ProjectScreen from "./Routes/ProjectScreen";

// projectId string이 가능한가?
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/profile"></Route>
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
