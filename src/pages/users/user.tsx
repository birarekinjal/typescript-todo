import { useUsersHooks } from './hooks/useUserHooks';

const User = () => {
  const usersData = useUsersHooks();
  const {users} = usersData;
  const {data} = users;
  
  return (
    <div> 
      {data && data.map((item) => {
        return(
          <ul>
          <li>Name: {item.name}</li>
          <li>User Name: {item.username}</li>
          <li>Email: {item.email}</li>
          <li>Website: {item.website}</li>
          </ul>
        )
      })}
    </div>
  );
};

export default User;