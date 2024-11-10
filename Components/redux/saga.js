import { put, takeEvery, call } from "redux-saga/effects";
import { USER_LIST, SET_USER_DATA } from "./constants";

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

function* SagaData() {
    yield takeEvery(USER_LIST, userList);
}

export default SagaData;

