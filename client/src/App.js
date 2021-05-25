import "./App.css";
import { Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts/Posts";
import CreatePost from "./screens/CreatePost/CreatePost";
import PostDetail from "./screens/PostDetail/PostDetail";
import EditPost from "./screens/EditPost/EditPost";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/posts/:id/edit">
          <EditPost />
        </Route>
        <Route path="/posts/:id">
          <PostDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
