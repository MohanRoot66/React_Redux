import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"movie",
    initialState:[],
    reducers:
    {
        Addmovie:(state,action)=>
        {   
            state.push(action.payload)
           
        },
        Removemovie:(state,action)=>
        {
            console.log(state)
            const index = state.findIndex((movie)=>action.payload===movie)
            state.splice(index,1)
        },
        ResetMovie:(state,action)=>
        {
            state.splice(0,state.length)
        }
    }

})
export const {Addmovie,Removemovie,ResetMovie} = Slice.actions
export default Slice.reducer
