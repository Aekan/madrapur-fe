import axios from 'axios';

const API_ENDPOINT = __CONFIG__.API;

export const handleRequest = (URL, params = {}) => {
  const resourceURL = `${API_ENDPOINT}${URL}`;
  let responseData = [];

  axios
    .get(resourceURL, params)
    .then((response) => {
      responseData.push(response.data);
      console.warn(response.data);
    })
    .catch((error) => {
      responseData = error;
      console.error(error);
    })
    .then(() => {
      // always executed
    });


  return responseData;
}
