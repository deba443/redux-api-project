import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { delete_post, get_info_for_update, add_photos } from '../redux/slice'
// import Modal from "./Modal";
import "./User.css";
import { useNavigate } from "react-router-dom";

const User = (props) => {
    let data;
    const dispatch = useDispatch()
    const {photos}=useSelector((state)=>state.post)
    const navigate=useNavigate()

    // console.log(photos)
    if(photos.length){
        data=photos
    }
    const { name, email, id, phone, website, open } = props;

    const handleClick=async (e)=>{
        e.preventDefault()
        try{
            let results=await axios.get("https://jsonplaceholder.typicode.com/photos")
            // console.log(results)
            if(results.data.length){
                // console.log(results.data)
                dispatch(add_photos({data:results.data,id:id}))
            }
        }
        catch(err){
            console.log('deba')

        }
        navigate(`${id}/photos`)
    }

    return (
        // <div>
        <div className="shadow-md mx-auto p-1 my-auto sduration-75 hover:shadow-lg">
            <h1>name:{name}</h1>
            <h2>email:{email}</h2>
            <h2>phone:{phone}</h2>
            <h2>id:{id}</h2>
            <h2>website:{website}</h2>
            <div className="flex">
                <button onClick={(e) => {
                    e.preventDefault();
                    open()
                    // dispatch(get_info_for_update(id))
                }}>Update</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(delete_post(id))
                }}>Delete</button>
                <button onClick={handleClick}>Photos</button>
            </div>
        </div>
    );
};
export default User;
