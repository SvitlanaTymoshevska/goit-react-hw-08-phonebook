import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { contactsReducer } from "redux/contacts/contactsSlice";
import { filterReducer } from "redux/contacts/filterSlice";
// import { authReducer } from "redux/auth/authSlice";

export const store = configureStore({

  devTools: true,
  reducer: {
    // auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);