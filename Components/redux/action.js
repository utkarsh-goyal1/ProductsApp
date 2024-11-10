import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    USER_LIST, 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE 
} from "./constants";

export function add_to_cart(item) {
    return {
        type: ADD_TO_CART,
        data: item,
    };
}

export function remove_from_cart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item,
    };
}

export function get_user_list() {
    return {
        type: USER_LIST,
    };
}

export function fetchProductsRequest() {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    };
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
}

export function fetchProductsFailure(error) {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
}
