import { createStore } from "./../utils/redux";
import count from "./reducers.js";
// console.log(count)
const store = createStore(count)
export default store