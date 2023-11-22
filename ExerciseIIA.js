const fs = require('fs')
function fileName(filename){
    fs.readFile(filename, 'utf-8', (err, data)=>{
        if (err){
            console.log(err);
            return;
        }
        else{
            let content = data.replace(/[^a-z0-9 ]/gi, '');
            fs.appendFile(filename, content, err=>{
                if(err){
                    console.log(err);
                    return;
                }
            })
        }
    })
}

fileName('text.txt');