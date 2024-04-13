import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./theme/themeSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export default store;
