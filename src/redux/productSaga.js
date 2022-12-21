import axios from "axios"
import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, PRODUCT_Search, SET_PRODUCT_LIST } from "./constant"



function* getProduct () {
    try{
        // let data = yield fetch('http://localhost:3500/product');
        // data = yield data.json();
        let data = yield axios.get("http://localhost:3004/product")
            // console.log(data,"data")
        // console.warn("action is called", data)
        yield put({type: SET_PRODUCT_LIST, data})
    }catch(error){
        console.log(error,"error")
    }
    
}
function* getSearchProduct (data) {
    try{
        // let data = yield fetch('http://localhost:3500/product');
        // data = yield data.json();
        let result = yield axios.get(`http://localhost:3004/product?q=${data.query}`)
           console.log(data,"data=>>>>")
        yield put({type: SET_PRODUCT_LIST, data:result})
    }catch(error){
        console.log(error,"error")
    }
    
}

function* productSaga(){
yield takeEvery (PRODUCT_LIST,getProduct);
yield takeEvery (PRODUCT_Search,getSearchProduct)
}
export default productSaga