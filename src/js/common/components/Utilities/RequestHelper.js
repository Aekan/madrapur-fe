import axios from 'axios';

const API_ENDPOINT = __CONFIG__.API;

export const handleRequest = (URL, params = {}, method = 'GET') => {
  const resourceURL = `${API_ENDPOINT}${URL}`;
  let responseData = [];

  axios
    .get(resourceURL, params)
    .then((response) => {
      responseData.push(response.data);
      console.warn('ajaxsuccess', response.data);
    })
    .catch((error) => {
      responseData = error;
      console.error('ajaxerror', error);
    })
    .then(() => {
      // always executed
    });


  return responseData;
}
