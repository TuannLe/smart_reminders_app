import { combineReducers } from "redux";
import auth, { initStateModel as AuthInitState } from "./auth/reducers";
import category, { initStateModel as CategoryStateModel } from "./category/reducers"
import note, { initStateModel as NoteStateModel } from "./note/reducers"

export interface IRootReducer {
    auth: AuthInitState;
    category: CategoryStateModel;
    note: NoteStateModel;
}

export default combineReducers<IRootReducer>({
    auth,
    category,
    note,
});