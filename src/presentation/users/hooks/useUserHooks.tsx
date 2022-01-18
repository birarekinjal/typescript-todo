import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../reducer/userAction';
import { useAppSelector } from '../../../application/redux/reduxHooks/reduxHooks';

const useUsersHooks = () => {
  const { users } = useAppSelector((state) => state?.users)

  const dispatch = useDispatch();
  const [state, setState] = useState({
    loader: false,
    errorFlag: false,
    error: ''
  });


  useEffect(() => {
    dispatch(fetchUsers())


  }, [dispatch]);

  return {
    users
  }
}

export { useUsersHooks };