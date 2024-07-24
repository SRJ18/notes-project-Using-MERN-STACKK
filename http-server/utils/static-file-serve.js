const fs =require('fs'); //require same like import
function serveStaticFile(response){
    
const filePath='E:/notes_project/http-server/public/index.html';

fs.readFile(filePath,(error,content)=>{
    if(error){
        console.log('file is not found..',error);
    }
    else{
        response.write(content); //write content to the browser
        response.end();
    }
})
}
module.exports=serveStaticFile;
