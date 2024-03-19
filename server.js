
const axios = require('axios');


const accessKey = '74e4f116-716d-470e-9d01-83a31377a1a9';


const headers = {
  'Authorization': `Bearer ${accessKey}`
};


const url = 'http://13.48.136.54:8000/api/api-code/';

axios.post(url, {}, { headers })
  .then(response => {
    
    if (response.status === 200) {

      const apiCode = response.data.api_code;

      
      console.log(`API Code: ${apiCode}`);
    } else {
      console.log(`Error: ${response.status} - ${response.statusText}`);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
