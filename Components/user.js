import request from '../request.js';

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}
