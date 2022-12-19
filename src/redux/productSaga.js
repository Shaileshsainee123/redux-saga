import axios from "axios"
import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"



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

function* productSaga(){
yield takeEvery (PRODUCT_LIST,getProduct)
}
export default productSaga