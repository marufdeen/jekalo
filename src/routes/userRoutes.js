const { Router } = require('express');
const userController = require('../controllers/userController');  
const router = Router(); 
router.post('/users', userController.create);
router.get('/users', userController.getAllUsers);  
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;