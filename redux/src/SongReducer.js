import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice(
    {
        name:"song",
        initialState:[],
        reducers:
        {
            Addsong:(state,action)=>
            {
                state.push(action.payload);
            },
            RemoveSong:(state,action)=>
            {
                const index = state.findIndex(x=>x===action.payload);
                state.splice(index,1);
            },
            ResetSong:(state,action)=>
            {
                state.splice(0,state.length)
            }
        }
    }
)

export const {Addsong,RemoveSong,ResetSong} = slice.actions

export default slice.reducer