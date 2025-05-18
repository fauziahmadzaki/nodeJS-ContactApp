const fs = require('fs');

const loadContact = (path)=>{
    return fs.readFileSync(path, 'utf-8')
}

module.exports = {loadContact};