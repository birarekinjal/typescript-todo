import Axios from 'axios';

export async function getUserList() {
  return await Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res);
}
