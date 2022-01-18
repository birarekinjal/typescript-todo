import { useState, useMemo } from "react";
import { fetchUsers } from "../reducer/userAction";
import { useDispatch } from 'react-redux';

const useUsersMethodsTodo = () => {
 
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handlers = useMemo(
    () => ({
    fetchUsersData: () => {
       return dispatch(fetchUsers())
      }
     }),
    []
  );

return [state, handlers] as const;
};

export default useUsersMethodsTodo;