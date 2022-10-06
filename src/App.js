// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// // import { increment,decrement } from './redux/slice'
import User from "./components/User";
import { getPosts, set_all_posts } from "./redux/slice";
// import Random from "./components/Random";
import { useGetAllPostQuery } from "./services/user";
import Modal from './components/Modal'
function App() {
  const { posts } = useSelector((state) => state.post);
  const [loading, setLoading] = useState(true)
  const [open,setOpen]=useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    // check if redux data is empty
    if (Object.keys(posts).length === 0) {
      setLoading(true);
      // dispatch(getPosts());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          dispatch(set_all_posts(res.data))
          setLoading(false)
        });
    }
  }, []);
    const openModal=()=>{
    setOpen(true)
  }
  const closeModal=()=>{
    setOpen(false)
  }
  return (
    <div className="App ">
      {loading ? <div className="w-full text-center">
        <p className="text-base text-black-400">Loading</p>
      </div>
        :
        <div className="flex max-w-5xl mx-auto my-auto items-center justify-center  bg-gray-100 relative  flex-col gap-3 max-h-max app-data">
          <p className="text-center text-black font-black text-xl">----User-Data----</p>
          {open && <Modal cancel={closeModal} open={openModal}/>}
           <div className="flex flex-wrap items-center justify-center gap-2">
            {posts.length > 0
              && posts.map((items) => (
                <User
                  name={items.name}
                  email={items.email}
                  id={items.id}
                  phone={items.phone}
                  website={items.website}
                  open={openModal}
                />
              ))}
          </div>
        </div> 
}
        

    </div>
  );
}

export default App;
