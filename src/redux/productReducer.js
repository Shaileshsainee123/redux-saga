import { SET_PRODUCT_LIST} from "./constant"
export const ProductData = (data = [],action) =>{

switch(action.type) {
    case SET_PRODUCT_LIST:
                console.warn("PRODUCT_LIST condition ", action.data)
                return [...action.data.data]
       
    

    default :
    return data
}

}