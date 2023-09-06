import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const  getAllData = createAsyncThunk("getUsers", async ()=>{
    const res  = await fetch("https://reqres.in/api/users?page=1");
    const result = res.json()
    return result
})
export const  createUser = createAsyncThunk(
    "createUser", async (data, {rejectedWithValue})=>{
    const res  = await fetch("https://reqres.in/api/users?page=1",{
        
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body :  JSON.stringify(data)
    });
    
    try{
          const result = res.json()
          console.log(result)
          return result
    }catch (error){
        return rejectedWithValue(error.res)

    }
})
const gitUser = createSlice({
    name: "getuser",
    initialState:{
        users:[], 
        loading: false,
        error : null
    }, 
    extraReducers : {
        [getAllData.pending] : (state)=>{
            state.loading = true

        },
        [getAllData.fulfilled] : (state, action)=>{
            state.loading = false
            state.users = action.payload;

        },
        [getAllData.rejected] : (state, action)=>{
            state.loading = false;
            state.error = action.payload;

        },
        [createUser.pending] : (state)=>{
            state.loading = true

        },
        [createUser.fulfilled] : (state, action)=>{
            state.loading = false
           // state.users.push(action.payload)
            state.users = action.payload;

        },
        [createUser.rejected] : (state, action)=>{
            state.loading = false;
            state.users = action.payload;

        },
    }
    

    
})


export default gitUser.reducer;