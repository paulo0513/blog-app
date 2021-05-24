import "./App.css";
import { Route, Switch } from "react-router-dom";
// import "./screens/Posts/Posts";
import CreatePost from "./screens/CreatePost/CreatePost";
// import "./screens/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/">
          <Posts />
        </Route> */}
        <Route path="/create-post">
          <CreatePost />
        </Route>
        {/* <Route path="/:id/edit"></Route> */}
        {/* <Route path="/:id">
          <PostDetail />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
