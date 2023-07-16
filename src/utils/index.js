const axios = require('axios');

function get(url, callback){
    axios.get(url)
    .then(res => {
        const data = res.data;
        
        callback(data);
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
}

module.exports = {get};