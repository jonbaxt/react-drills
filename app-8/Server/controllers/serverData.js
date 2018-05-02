const axios = require("axios");

var dataFromWeb = [];


module.exports = {
    receive: (req, res) => {
    axios.get(`http://pokeapi.co/api/v2/pokemon/1`)
    .then( (element ) => {
        res.status(200).send(element.data)
        .catch( (err) => console.log(err))
    
    })  
        // res.send(req)
    }



}




