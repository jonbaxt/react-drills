const axios = require("axios");

var dataFromWeb = [];


module.exports = {
    receive: (req, res) => {
        // for (var i = 0; i < 101; i++) {
            let newObj = 
            // axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
            axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
                .then((element) => {
                    console.log(element.data.id)
                    console.log(element.data.name)
                    console.log(element.data.sprites)
                    // dataFromWeb.push(element.data)
                    // res.status(200).send(dataFromWeb).catch( (err) => console.log(err))
                }).catch( (err)=> console.log(`Still problems:`, err))
        // }
        
        // console.log(res)
        
        // res.send(dataFromWeb).catch( (err) => console.log(err))
        
        // res.send(req)
    }



}




