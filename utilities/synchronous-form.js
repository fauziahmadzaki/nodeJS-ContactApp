const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const form = (type) => {
    return new Promise(( resolve, reject ) => {
        rl.question(`Masukkan ${type} : `, value => {
            if(!value){
                reject(`${type} Belum dimasukkan!`);
            }resolve(value);
        })
    })
};

const contactApp = async (directory, file) => {
    const dir = directory;
    const dirFile = file;
    try{
        const nama = await form('Nama');
        const email = await form('Email');
        const nomorHp = await form('Nomor HP');
        const data = { nama, email, nomorHp };
        fileValidation(dir, dirFile);
        writeContact(data, `${directory}/${file}`);

        rl.close();
    }catch(error){
        throw new Error(error);
    }
};

