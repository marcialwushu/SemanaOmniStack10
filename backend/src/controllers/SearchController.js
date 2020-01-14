const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(req, res) {
        //Buscar todos devs num raio de 10km
        //Filtrar por tecnologias 
        console.log(req.query);

        return res.json({ devs: [] });

    }
}