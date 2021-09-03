import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./components/context/Context";
function App() {
  const {user} = useContext(Context);
  // const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
