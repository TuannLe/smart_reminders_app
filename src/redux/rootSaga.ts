import { all } from "@redux-saga/core/effects";
import authSaga from './auth/saga'
import categorySaga from './category/saga'

export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...categorySaga,
    ]);
}