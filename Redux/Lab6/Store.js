import { createStore } from "redux";

const TANG = "TANG";
const GIAM = "GIAM";

export const tang = () => ({ type: TANG }); //khai báo hàm tăng
export const giam = () => ({ type: GIAM }); //khai báo hàm giảm

//2 định nghĩa reducer
const initState = {
  dem: 0,
};
const demReducer = (stare = initState, action) => {
  switch (
    action.type //kiểm tra hành động nào đc gọi
  ) {
    case TANG:
      return { ...stare, dem: stare.dem + 1 };
    case GIAM:
      return { ...stare, dem: stare.dem - 1 };
    default:
      return stare; // măc định không có thay đổi
  }
};
const Store = createStore(demReducer);
export default Store; // xuất store ra ngoài để sử dụng
