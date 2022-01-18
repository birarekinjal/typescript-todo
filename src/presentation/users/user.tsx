import { useFetchAPIActionData } from '../../application/hooks/useApiActionHooks';
import useUsersMethodsTodo from './hooks/useUsersMethods';
import { usersListValues } from './models/users';


const User = () => {
  const [state, { fetchUsersData }] = useUsersMethodsTodo();

  const [{ data: usersDetails = [], isLoading: isUsersDetailsAPILoading }] =
    useFetchAPIActionData({
      apiFunction: fetchUsersData,
      defaultResponseValue: [],
      dependencyArray: [],
      apiParams: '',
      apiCallCondition: true,
    });

  return (
    <div>
      {(isUsersDetailsAPILoading) && 'Loading ' ||
        (usersDetails && usersDetails.length > 0) ?
        usersDetails.map((item: usersListValues) => {
          return (
            <ul>
              <li>Name: {item.name}</li>
              <li>User Name: {item.username}</li>
              <li>Email: {item.email}</li>
              <li>Website: {item.website}</li>
            </ul>
          )
        }) : 'No Data Found'}
    </div>
  );
};

export default User;