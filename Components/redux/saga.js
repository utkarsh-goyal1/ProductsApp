import { put, takeEvery, call } from "redux-saga/effects";
import { 
    USER_LIST, 
    SET_USER_DATA, 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE 
} from "./constants";

function* userList() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const response = yield call(fetch, url);
        const data = yield call([response, 'json']); 
        yield put({ type: SET_USER_DATA, payload: data });
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

function* fetchProducts() {
    const url = 'https://dummyjson.com/products';
    try {
        const response = yield call(fetch, url);
        const data = yield call([response, 'json']);

        if (data.products) {
            yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: data.products });
        } else {
            yield put({ type: FETCH_PRODUCTS_FAILURE, payload: "Products not found in response" });
        }
    } catch (error) {
        yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        console.error("Error fetching product data:", error);
    }
}

function* SagaData() {
    yield takeEvery(USER_LIST, userList);
    yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default SagaData; 
