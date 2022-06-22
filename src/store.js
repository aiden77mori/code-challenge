import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/common/commonSlice";

export default configureStore({
  reducer: {
    common: commonReducer,
  },
});
