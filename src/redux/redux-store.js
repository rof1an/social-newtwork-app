import {combineReducers, createStore} from "redux";
import sidebarReducer from "./reducers/sidebar-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
let store = createStore(reducers)

export default store