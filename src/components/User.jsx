import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../redux/slice'
import { useEffect, useState } from "react";

const User = () => {
    // let value = 3;
    const dispatch = useDispatch()
    const [user, setUser] = useState([])
    if(user[0]){
        dispatch(add(user))

    }
    const fetchData = () => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
              .then((response) => setUser(response.data));
      }
    useEffect(() => {
        fetchData();
    },[])
    return (
        <div>
            <h1>value</h1>

        </div>
    )
}
export default User;