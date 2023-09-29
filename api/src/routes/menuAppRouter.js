const { Router } = require('express');
const createMenu = require('../handlers/createMenu.js')
const menuAppRouter = Router()
menuAppRouter.get('/createMenu', createMenu)

module.exports = menuAppRouter;