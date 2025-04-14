import { createSlice } from "@reduxjs/toolkit";
import { addBookOnAPI, deleteBookOnAPI, updateBookOnAPI } from "../actions/BookAction";
//1. Khởi tạo state
const initialState = {
    listBook :[]
}
// thiết lập slice
const bookSlice = createSlice(
    {
        name: 'book',
        initialState,
        reducers:{
            //phần 1: reducer làm việc cục bộ
            addBook (state, action ){
                state.listBook.push ( action.payload ) 
            },            
        },
        extraReducers: builder =>{
            //phần 2: reducer xử lý kết quả tương tác api (promise)
            builder.addCase(deleteBookOnAPI.fulfilled, (state, action)=>{
                //xóa book trong store cục bộ
                state.listBook = state.listBook.filter( row => row.id != action.payload);
            }).addCase(deleteBookOnAPI.rejected, (state, action)=>{
                // thông báo lỗi
                console.log('Lỗi xóa', action.error.message);
                
            })


            builder.addCase(addBookOnAPI.fulfilled, (state, action)=>{
                //Thêm book vào store cục bộ
                 state.listBook.push(action.payload);
            }).addCase(addBookOnAPI.rejected, (state, action)=>{
                // thông báo lỗi
                console.log('Lỗi thêm', action.error.message);
                
            })

            // tình huống sửa
            builder.addCase(updateBookOnAPI.fulfilled, (state, action)=>{
                // lấy tham số truyền vào
                // console.log(action);
                const { id, name, author, price, description, image } = action.payload;
                // tìm bản ghi phù hợp với tham số truyền vào
                const objBookLocal = state.listBook.find(row => row.id === id);
                // update
                if (objBookLocal ) {
                    objBookLocal.name=name; // gán giá trị
                    objBookLocal.author = author;
                    objBookLocal.price = price;
                    objBookLocal.description = description;
                 }
          })
          .addCase(updateBookOnAPI.rejected, (state, action) => {
                // Xử lý khi yêu cầu Sửa   bị từ chối hoặc xảy ra lỗi
                console.log('Lỗi sửa:', action.error.message);
            });


        }
    }
);
// export các thành phần để sử dụng ở screen
export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;

