import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "./api";

// combine all reducers
const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
});

//  create store

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      immutableCheck: false,

      serializableCheck: false,
    }).concat(api.middleware),
});

//  export types

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
