import { combineReducers } from "redux";
import auth, { initStateModel as AuthInitState } from "./auth/reducers";
import category, { initStateModel as CategoryStateModel } from "./category/reducers"

export interface IRootReducer {
    auth: AuthInitState;
    category: CategoryStateModel;
}

export default combineReducers<IRootReducer>({
    auth,
    category,
});