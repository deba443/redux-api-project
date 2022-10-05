// import logo from './logo.svg';
import { useEffect } from "react";
// import "./App.css";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// // import { increment,decrement } from './redux/slice'
import User from "./components/User";
import { getPosts } from "./redux/slice";
// import Random from "./components/Random";
import { useGetAllPostQuery } from "./services/user";
function App() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);
  if (loading) {
    return <h1>Loading</h1>;
  }
  // console.log(data[0].id);
  return (
    // <div className="App ">
    <div className="flex flex-wrap max-w-5xl mx-auto my-auto items-start justify-center gap-2.5">
      {posts
        ? posts.map((items) => (
            <User
              name={items.name}
              email={items.email}
              id={items.id}
              phone={items.phone}
              website={items.website}
            />
          ))
        : null}
    </div>
    // </div>
  );
}

export default App;
