import AddPostForm from "./Fetures/Posts/AddPostForm";
import PostList from "./Fetures/Posts/PostList";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }} className="text-dark my-5">redux toolkit</h1>
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
