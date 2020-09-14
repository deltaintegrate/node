//requireds

const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero `);
            return;
        }

        let tamano = 10
        let data = '';

        for (let i = 0; i <= tamano; i++) {
            data += `${i} es ${base * i}  \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla = ${base}.txt`);
        });

    })
}

module.exports = {
    crearArchivo
}