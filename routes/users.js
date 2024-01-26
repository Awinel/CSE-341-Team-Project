const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const validator = require('../validation/validate');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', validator.saveContact, usersController.createUser);

router.put('/:id', validator.saveContact, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
