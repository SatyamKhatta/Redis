const express = require('express')
const axios= require('axios')
const client=require('./client')

const app = express()

app.get('/',async(request,response)=>{

    const cacheValue = await client.get("todos")

    if(cacheValue){
        return response.json(JSON.parse(cacheValue))
    }
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/todos");

    await client.set('todos',JSON.stringify(data))
    await client.expire('todos',50)

    return response.json(data);

})


app.listen(9000)