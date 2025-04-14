import { ActivityIndicator, Image, StyleSheet, Text, View, FlatList, Alert, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBookOnAPI, deleteBookOnAPI, fetchBooks, updateBookOnAPI } from '../redux/actions/BookAction'
const BookScreen = () => {
    // lấy ds dữ liệu từ store của redux
    const listBook = useSelector(state => state.listBookInStore.listBook);
    // lấy đối tượng dispatch
    const dispatch = useDispatch (); 

    // khi vào ứng dụng tự động gọi api lấy danh sách đổ vào store
    useEffect(()=>{
        dispatch(fetchBooks()) ; // dispatch sẽ gọi một action nào đó
    },[dispatch]);

    /// hàm xử lý xóa
    const handleDelete =  (id) =>{
        dispatch( deleteBookOnAPI (id)).then (res =>{
            console.log('Xóa xong');
            Alert.alert("Xóa xong");
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
    const handleUpdate =()=>{ 

        let dulieu = {name: bookName, author: author, price: price, description: description};
        
        console.log(dulieu);
        console.log(idEdit);
        

        dispatch(updateBookOnAPI(idEdit, dulieu))
        .then((res)=>{
            console.log(res);
            
            Alert.alert("Sửa thành công")
            setBookName('');
            setAuthor('');
            setDescription('');
            setPrice('');
            setIdEdit(null);
        })
        .catch((e)=>{
            console.error(e);
        })
    }
 

    if(listBook.length ==0){
        // nếu ds rỗng thì hiện vòng tròn quay...
        return <ActivityIndicator size='large' color='blue' />
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