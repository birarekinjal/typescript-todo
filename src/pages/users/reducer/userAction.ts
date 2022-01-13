import { Dispatch } from "react";
import { getApiObject } from "../../../utility/apiDataUtils";
// import { getUserList } from "./userAPI";
import { setUserList } from "./userReducer";
import { UserService } from '../services/users.service';

const usersService = new UserService();

export const fetchUsers = () => async (dispatch : Dispatch<any>) : Promise<void> => {
  try {
    dispatch(setUserList(getApiObject([],true)))
    // const userResponse =  await getUserList()
    const userResponse = await usersService.getUsers();
    dispatch(setUserList(getApiObject(userResponse?.data,false)))
  }catch(error){
    console.log(error)
    dispatch(setUserList(getApiObject([],false,true,'')))
  }
};