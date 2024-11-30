import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const userSlice = createSlice({
  name: "users",
  initialState: { 
    dataList: [], 
    isLoading: "", 
    error: null 
},
reducers: {
  addUser: (state, action) => {
    state.dataList.push(action.payload);
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = "loading....";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = "succeeded...";
        state.dataList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = "failed...";
        state.error = action.error.message;
      });
  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
