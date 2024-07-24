const http=require('http');
const serveStatic = require('./utils/static-file-serve');
function handleRequestAndResponse(request,response){
    console.log('request and response...');
    //write o client side
    //response write on client 
    serveStatic(response);
//     response.write('<h1>hello clint i am server</h>'); // pahle buffer create krega 
//    response.end();
}
const server =http.createServer(handleRequestAndResponse);
server.listen(1234, (error)=>{
    if(error){
        console.log('server crash',error);
    }
    else{
        console.log('server start');
    }
})