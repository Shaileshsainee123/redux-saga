import { PRODUCT_LIST, PRODUCT_Search } from "./constant";
export const productList =() =>{
       return {
            type :PRODUCT_LIST,
            
        }
    
}
export const productSearch =(query) =>{
    return {
         type :PRODUCT_Search,
         query
     }
 
}
