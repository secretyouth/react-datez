const express = require('express')
const path = require('path')

const port = process.env.PORT || 9000
const app = express()

// serve static assets normally
app.use(express.static(path.join(__dirname, '/')))

// Handles all routes so you do not get a not found error
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port)
console.log(`server started on port ${port}`)
