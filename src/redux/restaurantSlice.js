import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    // here we have to call the api to fact restaurant details and store its value to install
    // state
    // Api call is an asynchronous function, its uses promise
    // promise has 3 state, so insde inital state we have to set key for all the 3 steps
    initialState: {
        loading:false, //pending state
        allRestaurant: [], //full filled state
        searchRestaurants:[],
        error:"" //rejected state

    },
    // in normal case , we use reducers to define actions, but in case of async function, we have to place
    // actions inside extrareducers
    extraReducers:(builder)=>{
        //builders hold result from thunk
        builder.addCase(fetchRestaurant.pending,(state, action)=>{
            state.loading=true;
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading =false,
            state.allRestaurant=action.payload;
            state.searchRestaurants= action.payload;
            state.error= ""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading= false;
            state.allRestaurant="";
            state.error= action.error.message
        })
    },
    reducers:{
        searchRestaurant:(state,action)=>{
            state.allRestaurant.restaurants =state.searchRestaurants.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }

})

//api calls are implemented using thunk

export const fetchRestaurant= createAsyncThunk('restaurantList/fetchRestaurant', ()=>{
    const result =axios.get('/restaurant.json').then(response=>response.data);
     console.log(result);
     return result;
     
})
export default restaurantSlice.reducer;
export const {searchRestaurant}=restaurantSlice.actions;