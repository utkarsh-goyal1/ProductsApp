import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
import { USER_LIST } from "./constants";
export function add_to_cart(item) {
    return {
        type: ADD_TO_CART,
        data: item,
    };
}

export function remove_from_cart(item){
    return{
        type: REMOVE_FROM_CART,
        data: item
    }
}

export function get_user_list(){
    return {
        type:USER_LIST
    }
}