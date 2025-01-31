import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'searchCache',
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            console.log(action.payload);
         state=Object.assign(state,action.payload);
        }

    }
});
export default searchSlice.reducer;
export const {cacheResults}=searchSlice.actions;