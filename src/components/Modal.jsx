import { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { update_post} from '../redux/slice'
const Modal = (props) => {
    const dispatch=useDispatch()
    let  {info,posts}=useSelector((state)=>state.post)
    const [input,setInput]=useState(info[0])
    const updatdData=(e)=>{
        e.preventDefault();
        props.cancel()
        dispatch(update_post(input))
    }
    return (
        <div>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="flex flex-col items-center justify-center">
                                        <h3 class="text-lg font-medium leading-6 text-gray-900 text-center" id="modal-title">Update Data</h3>
                                        <div className="flex flex-col gap-1">
                                            <input type="text" value={input.name} placeholder='name' onChange={(e)=>setInput({
                                                ...input,name:e.target.value
                                            })}/>
                                            <input type="text" value={input.email} placeholder='email' onChange={(e)=>setInput({
                                                ...input,email:e.target.value

                                            })}/>
                                            <input type="text" placeholder="phone" value={input.phone} onChange={(e)=>{
                                                setInput({
                                                    ...input,phone:e.target.value
                                                })

                                            }} />
                                            <input type="text" placeholder="website" value={input.website} onChange={(e)=>{
                                                setInput({
                                                    ...input,website:e.target.value
                                                })
                                            }} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={updatdData}>Update</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={(e)=>{
                                    e.preventDefault();
                                    props.cancel()
                                }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Modal;
