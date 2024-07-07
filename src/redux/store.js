import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import campersReducer from "./campers/slice.js";

const favoritesPersistConfig = {
  key: "campersSlice",
  storage,
  whitelist: ["favorites"],
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: { campers: persistedFavoritesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
