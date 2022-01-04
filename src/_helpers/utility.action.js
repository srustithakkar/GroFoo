const axios = require("axios");

export const api = () => {
  return axios.create({
    baseURL: " https://edamam-food-and-grocery-database.p.rapidapi.com",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e",
    },
    params: {
      ingr: "apple",
    },
  });
};
