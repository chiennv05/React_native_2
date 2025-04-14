import { createAsyncThunk } from "@reduxjs/toolkit";


const api_url = "https://67ac54545853dfff53da3089.mockapi.io/books";

//định nghĩa hàm lấy dữ liệu, fetchBooks tên hàm tự đặt
export const fetchBooksOnAPI = createAsyncThunk(
  "book/fetchBooksOnAPI",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(api_url);
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookOnAPI = createAsyncThunk(
  "book/addBookOnAPI",
  async (objBook, thunAPI) => {
    try {
      // gửi api yc thêm
      const res = await fetch(api_url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objBook),
      });
      // xử lý kêt quả
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        //có lỗi thì data chính là thông tin lỗi
        return thunAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBookOnAPI = createAsyncThunk(
  "book/updateBookOnAPI",
  async (bookData, thunkAPI) => {
    try {
      // gửi api yc sửa
      const res = await fetch(`${api_url}/${bookData.id}`, {
        method: "PUT", // dùng method put để sửa
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      // xử lý kêt quả
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        //có lỗi thì data chính là thông tin lỗi
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBookOnAPI = createAsyncThunk(
  "book/deleteBookOnAPI",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`${api_url}/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        return id;
      } else {
        const data = await res.json();
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
