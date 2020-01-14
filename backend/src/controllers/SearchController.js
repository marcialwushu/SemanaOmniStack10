const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(req, res) {
       const { latitude, longitude, techs } = req.query;

       const techsArray = parseStringAsArray(techs);

       const devs = await Dev.find({
           techs: {
                $in: techsArray,
           },
           location: {
               $near: {
                   $geometry: {
                       type: 'Point',
                       coordinates: [longitude,latitude], 
                   },
                   $maxDistance: 10000,
               }
           }
       });

       console.log(techsArray);

    return res.json({ devs });

    }
}