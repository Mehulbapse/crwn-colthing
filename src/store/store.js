import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares= [logger];
console.log("Middle" ,middleWares)
const composedEnchancers = compose(applyMiddleware(...middleWares))
export const store = createStore(rootReducer,undefined,composedEnchancers)