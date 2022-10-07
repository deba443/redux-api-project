import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Photos = (props) => {
    const { photos, posts, ide } = useSelector((state) => state.post)
    // const id=useParams()
    let data;
    if (photos.length) {
        data = photos.find((item) => item.id === ide)

    }
    // console.log(data)
    return (
        <div className="MY-AUTO mx-auto">
            {/* <h1>Hey</h1> */}
            <div className="max-w-xs max-h-fit mx-auto my-auto"><img src={data.url} alt="" /></div>

            <div className="max-w-xs mx-auto my-auto">
                <button>update</button>
                <button>create</button>
                <button>Delete</button>
                {/* <button>delete</button> */}
            </div>
        </div>
    )
}
export default Photos;