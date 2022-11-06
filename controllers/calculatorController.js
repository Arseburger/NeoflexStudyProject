const { readFileSync } = require('fs')
const homePage = readFileSync('./resources/index.html')

const showHomePage = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
}

const calculate = (req, res) => {
    const { num1, operation, num2 } = req.params
    let result
    switch (operation) {
        case 'plus':
            result = Number(num1) + Number(num2)
            break
        case 'minus':
            result = Number(num1) - Number(num2)
            break
        case 'times':
            result = Number(num1) * Number(num2)
            break
        case 'by':
            result = Number(num1) / Number(num2)
            break
    }

    res.status(200).json({ success: true, data: result })
}

module.exports = {
    showHomePage,
    calculate
}