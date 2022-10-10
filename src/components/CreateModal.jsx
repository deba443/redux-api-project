import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { create_photos} from "../redux/slice"
 
const CreateModal = (props) => {
    let item;
    const dispatch=useDispatch()
    const { photos,ide,photosData } = useSelector((state) => state.post)
    const [imgId, setImgId] = useState("")
    let data = photos.find((item) => item.id === ide)
    // console.log(data)

    const [imgData, setImgData] = useState([data])
    // setImgData([...imgData,data])
    // let imgData=[data]
    console.log(imgData)
    const createHandeler = (e) => {
        e.preventDefault()
        // console.log(imgId)
        // console.log(photos)
        // if(photos.length){
        item = photos.find((item) => item.id == imgId)
        // dispatchEvent(cre)
        dispatch(create_photos(item))        // }
        // console.log(item)
        // setImgData(item)
        // imgData.push(item)

        // console.log(imgData)
        // setImgId("")
        props.close()
    }
    useEffect(()=>{
        localStorage.setItem("img",JSON.stringify(photosData))
    },[photosData])
    return (
        <div>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <input type="number" placeholder="add a id(1,5000) to add a photo" className="input" value={imgId} onChange={(e) => setImgId(e.target.value)} />
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={createHandeler}>Create</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={props.close}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default CreateModal;