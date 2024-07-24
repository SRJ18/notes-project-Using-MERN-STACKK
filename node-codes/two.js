const fs=require('fs');
const path='C:/Users/admin/Downloads';
const stream=fs.createReadStream(path,{highWaterMark:200});
stream.on('open', ()=>{
    console.log('stream open..' );
});
stream.on('data', (chunk)=>{
    console.log('chunk is', chunk );
});
stream.on('end', ()=>{
    console.log('stream end..' );
});  