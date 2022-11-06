const express = require('express')
const app = express()

const router = require('./routes/calculatorRoute')

app.use(express.json())
app.use('/calculator', router)

app.all('*', (req, res) => {
    res.status(404).send(
        `<h1>Oops...Wrong page</h1>
        <a href = /calculator>Prooceed to Calculator Application</a>`
    )
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})