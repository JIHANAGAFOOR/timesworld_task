import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slice/country";

const userReducer = combineReducers({
  country: countrySlice.reducer,
});

const store = configureStore({
  reducer: userReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
      immutableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;