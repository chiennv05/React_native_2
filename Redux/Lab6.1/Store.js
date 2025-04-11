//tạo thứ 3
import { createStore } from "redux";
import demReducer from "./reducers"; // Sửa cách import
const Store = createStore(demReducer);
export default Store; // xuất store ra ngoài để sử dụng
