import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";


function App() {
  return (
    <div className="container">
      <h1>Image Upload App</h1>

      <CreatePost />

      <hr />

      <PostList />
    </div>
  );
}

export default App;