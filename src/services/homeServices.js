import request from '../utils/request';

export default {
  fetchUsers() {
    return (
      request.request({
        url: 'https://jsonplaceholder.typicode.com/users',
      })
    );
  },
};