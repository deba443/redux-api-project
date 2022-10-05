import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
// const initialState = []

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

export const postSlice = createSlice({
  name: "userData",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// export const userActions = userSlice.actions;
// export const authActions=authSlice.actions;

// export const store = configureStore({
//   reducer: {
//     userData: postSlice.reducer,
//   },
// });

// export default counterSlice.reducer;
export default postSlice.reducer;
