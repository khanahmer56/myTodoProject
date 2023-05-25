import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const user2Slice = createSlice({
  name: "users2",
  initialState,
  reducers: {
    editState(state, action) {
      return action.payload;
    },
  },
});
export default user2Slice.reducer;
export const { editState } = user2Slice.actions;
