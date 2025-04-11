//tạo thu 2

// Định nghĩa các action types
const TANG = 'TANG';
const GIAM = 'GIAM';

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

export default demReducer; // xuất reducer ra ngoài để sử dụng
