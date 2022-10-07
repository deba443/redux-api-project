import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
// const initialState = []

// export const getPosts = createAsyncThunk("posts/getPosts", async () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.data);
// });

export const postSlice = createSlice({
  name: "userData",
  initialState: {
    id:'',
    posts: [],
    loading: false,
    info:{},
    photos:[],
    ide:''
  },
  reducers:{
    set_all_posts:(state, action)=>{
      state.posts= action.payload
      return state
    },
    delete_post:(state,action)=>{
      let new_post_data=state.posts.filter((item)=>item.id!==action.payload)
      state.posts=new_post_data;
      return state
    },
    get_info_for_update:(state,action)=>{
      state.info={...state.posts.filter((item)=>item.id===action.payload)}
      // console.log(state.info[0].name)
      return state
    },
    update_post:(state,action)=>{
      let value=state.posts.find((item)=>item.id===action.payload.id)
      let index=state.posts.indexOf(value)
      state.posts[index]=action.payload
      return state

    },
    add_photos:(state,action)=>{
      state.photos=action.payload.data
      state.ide=action.payload.id
      // console.log(state.photos)
      return state
    }
  },

  // extraReducers: {
  //   [getPosts.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [getPosts.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.posts = action.payload;
  //   },
  //   [getPosts.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  // },
});
// export const photoSlice=createSlice({
//   name:'photos',
//   initialState:{
//     photos:[]
//   },
//   reducers:{
//     add_photos:(state,action)=>{
//       state.photos=action.payload;
//       return state;
//     }
//   }
  

// })

export const {set_all_posts,delete_post,get_info_for_update,update_post,add_photos} = postSlice.actions;
// export const { add_photos}=photoSlice.actions;
// export const {get_info_for_update}=updateSlice.actions;

// export const userActions = userSlice.actions;
// export const authActions=authSlice.actions;

// export const store = configureStore({
//   reducer: {
//     userData: postSlice.reducer,
//   },
// });

// export default counterSlice.reducer;
export default postSlice.reducer;
