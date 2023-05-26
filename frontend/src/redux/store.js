import { configureStore, combineReducers } from "@reduxjs/toolkit";
import{  userUpdateReducer} from "../reducers/userReducer";
import tripReducer from "./trip/tripSlice";
import itineraryReducer from "./ititnerary/itinerarySlice";

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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  userUpdate: userUpdateReducer,
  tripSlice: tripReducer,
  itinerarySlice: itineraryReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);










// import { combineReducers,applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   userUpdateReducer,
// } from "../reducers/userReducer";
// import dateReducer from "./trip/tripSlice";

// const reducer = combineReducers({
//   userUpdate: userUpdateReducer,
//   tripSlice: dateReducer,
// });

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = configureStore (
//   {reducer},
//   initialState,
//   // middleware: [thunk, routerMiddleware(...middleware)],
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;



