const { getHome, getTest,postAddUser } = require('../controllers/homeController');

const express = require('express')
const router = express.Router()


router.get('/', getHome);

router.get('/test', getTest);

router.post('/add_user', postAddUser);


module.exports = router