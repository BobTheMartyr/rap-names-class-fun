const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 21,
        'birthname': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthname': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthname': 'Dylan',
        'birthLocation': 'Dylan'
    },
}

app.get('/', (request, response) => {                                                            //The start of a request to the server. Pass in what we want to listen for (the 'endpoint') app.get(endpoint, (request, response))
    response.sendFile(__dirname + '/index.html')                                                 //"Start wherever this server.js is(__dirname) and then find the index.html"
})

app.get('/api/:rapperName', (request, response) => {                                             //adding the : lets express know that what follows is going to be a query parameter
    const rappersName = request.params.rapperName.toLowerCase()                                               //grabs the information from the URL. saves the parameter in a variable. the code searches the GET request's params for the rapperName
    if(rappers[rappersName]){
        response.json(rappers[rappersName])                                                      //if the rapper named in the query parameter exists in the rappers object, respond with rappersObject[queryparameter]
    } else{
        response.json(rappers['dylan'])                                                          //if the rapper named in the query parameter dooesnt exist in the rappers object, respond with rappersObject['Dylan']
    }    
        //response.json(rappers)                                                                  //sends json as a response to the requested URL
})

app.listen(PORT, () => {                                                                         //listens to a specific port number
    console.log(`The server is running on port ${PORT}`)
})                                                                                