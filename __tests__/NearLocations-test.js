import NearLocations from '../Components/NearLocations.js';

test('Test NearLocations API using Mock', async function(){
  global.fetch = jest.fn().mockImplementation(() => {
    var promise = new Promise((resolve,reject) => {
      resolve({
        json:function(){
          return {
            "results":[{
              region:{
                lat:28.678894,
                lng:77.08390659999999
              },
              southwest: {
                        lat: 28.46977622010728,
                        lng: 77.06397262010728
                    },
            },
            {
              northeast:{
                lat: 28.53213872989272,
                lng: 77.29918727989272
            },
          }
           ],
          }
        }
      })
    })
    return promise;
  })

  const response = await NearLocations.getLocations();
  expect(response.results[0].region.lat).toBe(28.678894);
  expect(response.results[0].southwest.lat).toBe(28.46977622010728);
  expect(response.results[1].northeast.lat).toBe(28.53213872989272);

});
