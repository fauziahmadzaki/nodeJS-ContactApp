const fs = require('fs');

const fileValidation = (directory, file)=>{
    const dir = directory;
    const dirFile = file;
    const pathDir = `${dir}/${dirFile}`
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }
    if(!fs.existsSync(pathDir)){
        fs.writeFileSync(pathDir, '[]', 'utf-8')
    }
}

module.exports = fileValidation;