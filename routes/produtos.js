const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');

/* GET produtos*/
router.get('/', produtoController.findAll);
/* POST produtos*/
router.post('/', nomeMiddleware.validateName,
    descricaoMiddleware.validateDescription,
    precoMiddleware.validatePrice,
    produtoController.save,
);
/* PUT produtos*/
router.put('/', produtoController.update);
/* DELETE produtos*/
router.delete('/:id', produtoController.remove);

module.exports = router;
