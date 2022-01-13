import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../reducer/userAction';
import { useAppSelector } from '../../../redux/reduxHooks/reduxHooks';

const useUsersHooks = () => {  
      const {users}  = useAppSelector((state) => state?.users)
      const dispatch = useDispatch();
      
      useEffect(() => {
        dispatch(fetchUsers())
     },[dispatch]); 
  
  return {    
       users
  }}

export { useUsersHooks };