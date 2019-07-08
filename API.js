const express = require('express')

const api = express()
 
api.listen(5000, function(err){
    
    console.log('Server is live on Port 5000')
})