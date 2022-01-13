import {combineReducers} from '@reduxjs/toolkit'
import { usersReducer } from '../pages/users/reducer/userReducer';

const rootReducer  = combineReducers({
     users: usersReducer.reducer
});

export default rootReducer