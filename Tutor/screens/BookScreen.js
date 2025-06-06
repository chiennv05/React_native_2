import { ActivityIndicator, Image, StyleSheet, Text, View, FlatList, Alert, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBookOnAPI, deleteBookOnAPI, fetchBooksOnAPI, updateBookOnAPI } from '../redux/actions/BookAction'

const BookScreen = () => {
    // lấy ds dữ liệu từ store của redux
    const { listBook, loading, error } = useSelector(state => state.listBookInStore);
    // lấy đối tượng dispatch
    const dispatch = useDispatch(); 

    // khi vào ứng dụng tự động gọi api lấy danh sách đổ vào store
    useEffect(() => {
        console.log("Fetching books...");
        dispatch(fetchBooksOnAPI())
            .then((result) => {
                console.log("Fetch result:", result);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, [dispatch]);

    // Hiển thị lỗi nếu có
    useEffect(() => {
        if (error) {
            console.error("Redux state error:", error);
            Alert.alert('Lỗi', error);
        }
    }, [error]);

    /// hàm xử lý xóa
    const handleDelete = (id) => {
        dispatch(deleteBookOnAPI(id))
        .then(() => {
            Alert.alert("Xóa thành công");
        })
        .catch((error) => {
            Alert.alert("Lỗi", error.message);
        });
    }
    // xử lý thêm:
    // tạo state tương tác với thẻ input
    const [bookName, setBookName] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    // tạo hàm xử lý thêm
    const handleAdd = ()=>{
        let dulieu = {name: bookName, author: author, price: price, description: description};
        dispatch(addBookOnAPI(dulieu))
        .then(()=>{
            Alert.alert("Thêm thành công")
        })
        .catch((e)=>{
            console.error(e);
        })
    }

    //--- sử lý sửa
    const [idEdit, setIdEdit] = useState(null); //lưu id bản ghi cần sửa
    const showEdit = (objBook) =>{
        // hàm này để  ẩn hiện form sửa
        setIdEdit(objBook.id);

        setBookName(objBook.name);
        setAuthor(objBook.author);
        setDescription(objBook.description);
        setPrice(objBook.price);


    }
    // hàm lưu kết quả sửa
    const handleUpdate = () => { 
        let dulieu = {
            id: idEdit,
            name: bookName, 
            author: author, 
            price: price, 
            description: description
        };
        
        dispatch(updateBookOnAPI(dulieu))
        .then(() => {
            Alert.alert("Sửa thành công")
            setBookName('');
            setAuthor('');
            setDescription('');
            setPrice('');
            setIdEdit(null);
        })
        .catch((error) => {
            Alert.alert("Lỗi", error.message);
        });
    }
 

    if (loading) {
        return <ActivityIndicator size='large' color='blue' />
    }

    console.log("Current listBook:", listBook); // Thêm log để debug

    if (!listBook || listBook.length === 0) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Không có sách nào</Text>
            </View>
        )
    }
     
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{flex: 2}}>
                <Text>BookScreen</Text>
                <TextInput placeholder='Nhập tên sách' onChangeText={setBookName} value={bookName}/>
                <TextInput placeholder='Nhập giá tiền' onChangeText={setPrice}  value={price}/>
                <TextInput placeholder='Nhập tên tác giả' onChangeText={setAuthor}  value={author}/>
                <TextInput placeholder='Nhập tên mô tả' onChangeText={setDescription}  value={description}/>
                <View style={{width:100}}>
                    <Button title="Lưu dữ liệu" onPress={idEdit?handleUpdate:handleAdd} />
                </View>
            </View>
            <View style={{flex:4}}>
 
                    <FlatList
                        data={listBook}
                        keyExtractor={(item) => {
                                 return item.id
                        }
                        }
                        renderItem={({ item }) => (
                            <View style={st.row}>
                                <Image source={{ uri: item.image }} style={st.img} />
                                <Text style={st.name}>{item.name}</Text>
                                <Text>Price: {item.price}</Text>
                                <Text onPress={()=>handleDelete (item.id) }>Xóa</Text>
                                <Text onPress={() => showEdit(item)}>Sửa</Text>
                            </View>
                        )}
                        />
            </View>
        </View>
    )
}

export default BookScreen

const st = StyleSheet.create({
    row:{ margin: 10, padding: 10, borderColor: 'blue', borderWidth: 1},
    img:{ width:100, height: 50},
    name:{ fontSize: 30, fontWeight: 'bold', color:'blue'}
})