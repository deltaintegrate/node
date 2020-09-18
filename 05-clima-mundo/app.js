const axios = require('axios');


const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const instance = axios.create({
    baseURL: 'devru-latitude-longitude-find-v1.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key': 'e294250b51msh80e79e041a0fac5p1158f8jsne8f0fb6046d7',
        'useQueryString': true
    }
});

instance.get()
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log('ERROR!!!', err);
    })