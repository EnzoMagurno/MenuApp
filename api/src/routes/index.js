const { Router } = require('express');
const mainRouter = Router();
const menuApp = require('./menuAppRouter');
mainRouter.use('/menuApp', menuApp);

module.exports = mainRouter;