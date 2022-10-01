import { configureStore } from "@reduxjs/toolkit";
import  dataReducer from './slice'

export const store=configureStore({
    reducer:{
        userData:dataReducer,
        

    },
})