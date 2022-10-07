import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import User from "./User"
import { getPosts, set_all_posts } from "../redux/slice"
import Modal from '../components/Modal'
import './Main.css';
const Main = () => {
    const { posts } = useSelector((state) => state.post);
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
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
    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    return (
        <div className="w-screen h-screen bg-black">
            {loading ? <div className="w-full text-center">
                <p className="text-base text-red-400">Loading</p>
            </div>
                :
                <div className="flex max-w-5xl mx-auto my-auto items-center justify-center  bg-gray-100 relative  flex-col gap-3 max-h-fit app-data">
                    <p className="text-center text-black font-black text-xl">----User-Data----</p>
                    {open && <Modal cancel={closeModal} open={openModal} />}
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
    )
}
export default Main;