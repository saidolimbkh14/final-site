import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import { productApi } from "./product";




export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat(productApi.middleware)
});
setupListeners(store.dispatch);
 