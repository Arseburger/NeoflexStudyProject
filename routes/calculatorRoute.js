const express = require('express')
const errorHandler = require('../middleware/errorHandler')
const router = express.Router()

const {
    showHomePage,
    calculate
} = require('../controllers/calculatorController')

router.get('/', showHomePage)
router.get('/:num1/:operation/:num2', errorHandler, calculate)

module.exports = router