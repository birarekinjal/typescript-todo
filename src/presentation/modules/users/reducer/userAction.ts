import { Dispatch } from 'react';
import { getApiObject } from '../../../../application/utility/apiDataUtils';
import { UserService } from '../../../../infrastructure/services/users/users.service';
import { setUserList } from './userReducer';

const usersService = new UserService();

export const fetchUsers = () => async (dispatch : Dispatch<any>) : Promise<void> => {
  try {
    dispatch(setUserList(getApiObject([])));
    const userResponse = await usersService.getUsers();
    dispatch(setUserList(getApiObject(userResponse?.data)));
    return userResponse;
  } catch (error: any) {
    dispatch(setUserList(getApiObject([])));
    return error;
  }
};
