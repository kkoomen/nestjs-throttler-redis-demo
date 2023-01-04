#!/usr/bin/env node

const axios = require('axios');

for (let i = 0; i < 1000; i++) {
  axios
    .get('http://localhost:3000')
    .then(({ data }) => console.count())
    .catch((err) => {
      console.log(err.toString());
    });
}
