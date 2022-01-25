import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IApiObject } from '../../../../application/models/apiDataModels';
import { getApiObject } from '../../../../application/utility/apiDataUtils';
import { IUser, IUserListState } from '../models/userModel';

export const defaultState:IUserListState = {
  users: getApiObject([]),
};

export const usersReducer = createSlice({
  name: 'userList',
  initialState: defaultState,
  reducers: {
    setUserList: (state, action:PayloadAction<IApiObject<IUser[]>>) => {
      state.users = action.payload;
    },
  },
});

export const { setUserList } = usersReducer.actions;

export default usersReducer.reducer;
