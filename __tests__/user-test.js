'use strict';

jest.mock('../request');

import * as user from '../Components/user';

it('works with async/await', async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  console.warn(data);
  expect(data).toEqual('Mark');
});

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual('Paul');
});

it('Work with Promise',() => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});
it('Work with promise',() => {
  expect.assertions(1);
  return user.getUserName(5).then(data => expect(data).toEqual('Paul'));
})
