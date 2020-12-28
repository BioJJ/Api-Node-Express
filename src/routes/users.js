const express =  require('express');

const controller = require('../controllers/userController')

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.post('/authenticate', controller.autenticar);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = app => app.use('/user', router);