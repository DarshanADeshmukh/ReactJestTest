class NearLocations{
  static getLocations(){
    return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.7040592,77.10249019999999&radius=47022&keyword=%22Delhi%20food%22&key=AIzaSyCu-9ibaHg0MAGp725rk_SW8AFStRXS_VM').then((response) => {
      return response.json();
    });
  }
}
export default NearLocations;
