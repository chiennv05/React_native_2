import { createSlice } from "@reduxjs/toolkit";
import {
  addBookOnAPI,
  deleteBookOnAPI,
  updateBookOnAPI,
  fetchBooksOnAPI,
} from "../actions/BookAction";
//1. Khởi tạo state
const initialState = {
  listBook: [],
  loading: false,
  error: null,
};
// thiết lập slice
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Xử lý fetchBooksOnAPI
    builder
      .addCase(fetchBooksOnAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooksOnAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.listBook = action.payload;
        state.error = null;
      })
      .addCase(fetchBooksOnAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Có lỗi xảy ra khi tải danh sách sách';
      });

    // Xử lý deleteBookOnAPI
    builder
      .addCase(deleteBookOnAPI.fulfilled, (state, action) => {
        //xóa book trong store cục bộ
        state.listBook = state.listBook.filter(
          (row) => row.id != action.payload
        );
        state.error = null;
      })
      .addCase(deleteBookOnAPI.rejected, (state, action) => {
        state.error = action.payload || 'Có lỗi xảy ra khi xóa sách';
      });

    // Xử lý addBookOnAPI
    builder
      .addCase(addBookOnAPI.fulfilled, (state, action) => {
        //Thêm book vào store cục bộ
        state.listBook.push(action.payload);
        state.error = null;
      })
      .addCase(addBookOnAPI.rejected, (state, action) => {
        state.error = action.payload || 'Có lỗi xảy ra khi thêm sách';
      });

    // Xử lý updateBookOnAPI
    builder
      .addCase(updateBookOnAPI.fulfilled, (state, action) => {
        const updatedBook = action.payload;
        const index = state.listBook.findIndex(book => book.id === updatedBook.id);
        if (index !== -1) {
          state.listBook[index] = updatedBook;
        }
        state.error = null;
      })
      .addCase(updateBookOnAPI.rejected, (state, action) => {
        state.error = action.payload || 'Có lỗi xảy ra khi cập nhật sách';
      });
  },
});
// export các thành phần để sử dụng ở screen
export default bookSlice.reducer;
