import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import user2Slice from "./features/users/user2Slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    users2: user2Slice,
  },
});
