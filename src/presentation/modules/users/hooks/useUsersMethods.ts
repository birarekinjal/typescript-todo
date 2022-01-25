/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../reducer/userAction';

const useUsersMethodsTodo = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handlers = useMemo(
    () => ({
      fetchUsersData: () => dispatch(fetchUsers()),
    }),
    [],
  );

  return [state, handlers] as const;
};

export default useUsersMethodsTodo;
