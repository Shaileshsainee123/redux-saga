import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "./constant"
export const cartData = (data = [],action) =>{

switch(action.type) {
    case Add_To_Cart :
    console.warn("reducer called",action)
    return [action.data,...data]
    case Remove_From_Cart :
        console.warn("Remove_From_Cart called",action)
    //    data.length= data.length ? data.length-1 :[]
    let remainingItems = data.filter((item)=> item.id !== action.data)
    console.log(remainingItems,"Remaining items")
        return [...remainingItems];
    case Empty_Cart :
        console.log("Empty cart")
        data= []

        return [...data]
    default :
    return data
}

}