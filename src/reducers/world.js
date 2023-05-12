
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'; 

export const fetchWorlds = createAsyncThunk('allWorlds', async ()=>{
    try{
        const {data} = await axios.get('http://localhost:8080/api/worlds');
        return data;
    }catch(err){
        console.log(err)
    }
});

const worldSlice = createSlice({
    name: 'worlds',
    initialState: [], 
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchWorlds.fulfilled, (state,action)=>{
            return action.payload
        })
    }
});

export const selectWorld = (state) => state.worlds;
export default worldSlice.reducer;