// const axios = require('axios');

// const getCharById = (res, id) => {
//     const url = 'https://rickandmortyapi.com/api/character/';

//     axios(url+id)
//     .then((response) => {
//         const {name, gender, species, origin, image, status} = response.data;
        
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         res.writeHead(200, {'Content-Type': 'application/JSON'});
//         res.end(JSON.stringify(character))

//     })
//     .catch((error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end(error.message)
//     })
// }

// module.exports = getCharById;

/////////////////////////////////////////Express//////////////////////////////////////////

const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res){

    const {id} = req.params;

    axios(URL+id)
    .then(response => {
        const {name, gender, species, origin, image, status} = response.data;
        const character = {id, name, gender, species, origin, image, status};

        character ? res.status(200).json(character) : res.status(404).send('Not found');
    })
    .catch(error => {
        res.status(500).json({error:error.message})
    })
}


module.exports = getCharById;
