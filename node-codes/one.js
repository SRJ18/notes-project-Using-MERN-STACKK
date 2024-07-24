//console.log('hello node js');
// fs module 
console.log('code start')//sync
const fs= require('fs');//sync
const filePath='E:/notes_project/node-codes/sample.txt'
//Async
fs.readFile(filePath,(err,content)=>{
    if(err){
        console.log('not read file', err);
    }
    else{
        console.log('read file',content.toString());
    }
})// Async way
console.log('code end');//sync
