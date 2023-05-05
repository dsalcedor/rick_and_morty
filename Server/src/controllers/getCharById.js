const axios = require('axios');

const getCharById = (res, id) => {
    const url = 'https://rickandmortyapi.com/api/character/';

    axios(url+id)
    .then((response) => {
        const {name, gender, species, origin, image, status} = response.data;
        
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        res.writeHead(200, {'Content-Type': 'application/JSON'});
        res.end(JSON.stringify(character))

    })
    .catch((error) => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(error.message)
    })
}

module.exports = getCharById;