const validOperations = ['plus', 'minus', 'times', 'by']

const errorHandler = (req, res, next) => {
    const { num1, operation, num2 } = req.params

    if (isNaN(num1) || isNaN(num2)) {
        return res
            .status(400)
            .json({ success: false, msg: 'Input values are not numbers' })
    } else if (!validOperations.includes(operation)) {
        return res
            .status(404)
            .json({ success: false, msg: 'Invalid operation name' })
    } else if (operation === 'by' && Number(req.params.num2) === 0) {
        return res
            .status(400)
            .json({ success: false, msg: 'Division by zero' })
    } else {
        next()
    }
}

module.exports = errorHandler