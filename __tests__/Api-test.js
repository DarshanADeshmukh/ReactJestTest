import 'react-native';
import React from 'react';
import ApiData from '../Components/ApiData';
import 'isomorphic-fetch';

it('Async Api Call', async function(){
  global.fetch = jest.fn(() => {
    var p = new Promise ((resolve, reject) => {
      resolve({
        json: function(){
          return {Id: 1}
        }
      })
    })
    return p;
  })

const response = await ApiData.jsonResponse();
// console.warn(response.results[0].name);
// expect(response.results[0].name).toEqual('Delhi food court');
expect(response.Id).toEqual(1);

})
