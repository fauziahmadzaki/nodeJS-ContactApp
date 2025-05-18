
const yargs = require('yargs')
const fileValidation = require('./utilities/file-handle')
const {writeContact, dataValidation, listContact, detailContact, deleteContact} = require('./utilities/write-file');


const directory = './data'
const file = 'contacts.json'
const path = `${directory}/${file}`
yargs.command({
    command: 'add',
    describe: 'Menambahkan user',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption : true,
            type : 'string'
        },
        email : {
            describe: 'Email anda',
            demandOption : false,
            type : 'string'
        },
        noHP : {
            describe : 'Nomor Handphone',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        const data = {
            nama : argv.nama,
            email   : argv.email,
            nomorHp : argv.noHP
        };
        if(dataValidation(data, path) == false) return false;
        fileValidation(directory, file)
        writeContact(data, path)
    }

}).demandCommand()

yargs.command({
    command : 'list',
    describe : 'Menampilkan kontak dalam daftar',
    handler(){
        listContact(path)
    }
})

yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail dari salah satu kontak',
    builder : {
        nama : {
            demandOption: true,
            describe: 'Nama yang ingin anda tampilkan detailnya',
            type : 'string'
        }
    },
    handler(argv){
        const {nama} = argv;
        detailContact(nama)

    }
})

yargs.command({
    command: 'hapus',
    describe: 'Menghapus kontak sesuai yang anda masukkan',
    builder : {
        nama : {
            demandOption: true,
            describe: 'Nama yang ingin anda hapus',
            type : 'string'
        }
    },
    handler(argv){
        const {nama} = argv;
        deleteContact(nama)

    }
})

yargs.parse()

