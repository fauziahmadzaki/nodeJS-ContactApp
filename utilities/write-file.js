const fs = require('fs');
const validator = require('validator')
const {loadContact} = require('./read-file')
const writeContact = (data, path)=>{
        let contacts = fs.readFileSync(path, 'utf-8');

        contacts = JSON.parse(contacts);
        contacts.push(data);
        fs.writeFileSync(path, JSON.stringify(contacts));
        console.log("Data berhasil dimasukkan!")
}

const dataValidation = (data, path)=>{
        let contacts = loadContact(path)
        contacts = JSON.parse(contacts);
        const isSame = contacts.find( item => item.nama == data.nama);
        if(isSame){
                console.log((`nama ${data.nama} sudah pernah ditambahkan dalam kontak`))
                return false
        }
        if(data.email){
                if(!validator.isEmail(data.email)){
                console.log('bukan email');
                return false;
                        }
        }
        if(!validator.isMobilePhone(data.nomorHp, 'id-ID')){
                console.log('bukan no yang valid');
                return false;
        }
}

const listContact = (path)=>{
        let contacts = loadContact(path);
        contacts = JSON.parse(contacts);
        console.log('Daftar Kontak')
        if(contacts.length == 0 || !contacts){
                console.log('daftar kosong')
        }
        contacts.forEach((item, i) => {
        console.log(`${i + 1}. ${item.nama} | No HP : ${item.nomorHp}`)    
        })
}

const detailContact = (nama)=>{
        let contacts = loadContact('./data/contacts.json');
        contacts = JSON.parse(contacts);
        const contact = contacts.find(item => item.nama.toLowerCase() == nama.toLowerCase());
        if(!contact){
                console.log(`Kontak dengan nama ${nama} tidak ada dalam daftar`);
                return false;
        }
        contact.email?
        console.log(`
                ----Detail Kontak-----
                Nama : ${contact.nama}
                No HP : ${contact.nomorHp}
                Email : ${contact.email}
                `):
        console.log(`
                ----Detail Kontak-----
                Nama : ${contact.nama}
                No HP : ${contact.nomorHp}
                `)
}
const deleteContact = (nama)=>{
        let contacts = loadContact('./data/contacts.json');
        contacts = JSON.parse(contacts);
        const contact = contacts.find(item => item.nama.toLowerCase() == nama.toLowerCase());
        if(!contact){
                console.log(`Kontak dengan nama ${nama} tidak ada dalam daftar`);
                return false;
        }
        contacts = contacts.filter(item => item!= contact);
        fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));
        console.log("Data berhasil dihapus")
}


module.exports = {writeContact, dataValidation, listContact, detailContact, deleteContact}