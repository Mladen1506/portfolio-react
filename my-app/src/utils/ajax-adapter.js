import axios from "axios";

export const ajax = {};

ajax.sendContactEmail = (formData) => {

  
  const prepared_data = JSON.stringify(formData);
  const response = axios.post('http://localhost:3001/sendemail/contact', prepared_data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};