import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
    editUser(state, action) {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});
export default userSlice.reducer;
export const { addUser, deleteUser, editUser } = userSlice.actions;
