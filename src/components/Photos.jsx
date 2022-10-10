import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateModal from "./CreateModal";
// import { useParams } from "react-router-dom";
import { create_photos } from "../redux/slice"
import { list } from "postcss";

const Photos = (props) => {
    let data;
    const dispatch = useDispatch()
    const { photos, posts, ide } = useSelector((state) => state.post)
    const [open, setOpen] = useState(false)
    // const getData = () => {
    //     let list = JSON.parse(localStorage.getItem("photosData"));
    //     if (list.length) {
    //         return JSON.parse(localStorage.getItem("photosData"))
    //     }
    //     else {
    //         return [];
    //     }
    // }
    // const [data, setData] = useState([{ide:getData()}])
    if (photos.length) {
        data = photos.find((item) => item.id === ide)
    }
    const openCreateModal = () => setOpen(true);
    const closeCreatModal = () => setOpen(false)
    // dispatch(create_photos(data))
    // useEffect(() => {
    //     localStorage.setItem('photosData', JSON.stringify(data))
    // }, [data])
    const getImgData = () => {
        let list = JSON.parse(localStorage.getItem("img"))
        if (!list) {
            return []
        }
        else {
            return list
        }

    }

    return (
        <div className="MY-AUTO mx-auto">
            {open && <CreateModal open={openCreateModal} close={closeCreatModal} />}
            <div className="flex flex-wrap flex-col justify-center items-center gap-5 max-w-5xl mx-auto my-auto">
                <button onClick={(e) => {
                    e.preventDefault();
                    openCreateModal()
                }}>Create</button>
                <div>
                    {data && <div className="max-w-xs max-h-fit mx-auto my-auto">
                        <img src={data.url} alt="" />
                        <div className="max-w-xs mx-auto my-auto">
                            <button>update</button>
                            <button>Delete</button>
                        </div>
                    </div>}
                    {getImgData().map((item) => <div className="max-w-xs max-h-fit mx-auto my-auto">
                        <img src={item.url} alt="" />
                        <div className="max-w-xs mx-auto my-auto">
                            <button>update</button>
                            <button>Delete</button>
                        </div>
                    </div>)}

                </div>
            </div>

        </div>
    )
}
export default Photos;