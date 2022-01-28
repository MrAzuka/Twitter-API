const express = require('express')

const app = express()
const PORT = 8080



app.get('/', (req,res) => {
    res.send("Welcome to my project")
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})