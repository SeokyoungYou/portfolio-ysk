import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";

// projectId string이 가능한가?
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/profile"></Route>
        <Route path={["/", "/:projectTitle"]}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
