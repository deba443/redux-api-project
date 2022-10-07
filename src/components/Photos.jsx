import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateModal from "./CreateModal";
// import { useParams } from "react-router-dom";

const Photos = (props) => {
    let data;
    const { photos, posts, ide } = useSelector((state) => state.post)
    const[open,setOpen]=useState(false)
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
    const openCreateModal=()=>setOpen(true);
    const closeCreatModal=()=>setOpen(false)
    // useEffect(() => {
    //     localStorage.setItem('photosData', JSON.stringify(data))
    // }, [data])
    return (
        <div className="MY-AUTO mx-auto">
            {open && <CreateModal open={openCreateModal} close={closeCreatModal}/>}
            <div className="flex flex-wrap flex-col justify-center items-center gap-5 max-w-5xl mx-auto my-auto">
                <button onClick={(e) => {
                    e.preventDefault();
                    openCreateModal()
                }}>Create</button>
                <div>
                    <div className="max-w-xs max-h-fit mx-auto my-auto">
                        <img src={data.url} alt="" />
                        <div className="max-w-xs mx-auto my-auto">
                            <button>update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Photos;