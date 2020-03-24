const express = require('express')

const app = express()

app.get('/',(request, response) => {
    return response.json({
        event: '11 Oministack Week',
        student: 'Juan Filippo'
    })
})

app.listen(3333)
