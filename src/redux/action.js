import {Add_To_Cart, Empty_Cart, Remove_From_Cart} from "./constant"
export const AddToCart =(data)=>{
    console.warn("action called",data)
    return {
        type:Add_To_Cart,
        data:data
    }
}
export const RemoveFromCart =(data)=>{
    console.warn("action Remove from cart",data)
    return {
        type:Remove_From_Cart,
        data:data
    }
}
    export const emptyCart =()=>{
        console.warn("action called Empty Cart")
        return {
            type:Empty_Cart,
           
        }
}

