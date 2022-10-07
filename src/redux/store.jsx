// import {postSlice,photoSlice} from "./slice";
import { configureStore } from "@reduxjs/toolkit";
 import postSliceReducer from '../redux/slice';

export const store = configureStore({
  reducer: {
    post: postSliceReducer,
    // photo:postSlice.reducer,
  },
});
// import { configureStore } from "@reduxjs/toolkit";
// // Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { userApi } from "../services/user"

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [userApi.reducerPath]: userApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userApi.middleware),
// });

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
