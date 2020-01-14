const { Router } = require('express');

const routes = Router();


routes.post('/users', (req,res) => {
    console.log(req.body);
    return res.json({ message: 'Hello OmniStack' });
});


module.exports = routes;