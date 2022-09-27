import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./rootSagas";
import cartReducer from "./features/characters";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false }),
        sagaMiddleware,
    ]
});

sagaMiddleware.run(rootSagas);