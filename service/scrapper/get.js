const axios = require('axios');
const fs = require('fs');

module.exports = async (url) => {
    const response = await axios.get(url);
    return response;
}