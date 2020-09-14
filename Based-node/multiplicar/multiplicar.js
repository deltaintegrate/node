//requireds

const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero `);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero `);
            return;
        }

        let tamano = limite
        let data = '';

        for (let i = 0; i <= tamano; i++) {
            data += `${i} es ${base * i}  \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla = ${base}.txt con limite: ${limite}`.blue);
        });

    })
}


let listarTabla = (base, limite = 5) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no encontre base numerica')
            return;
        }

        if (!Number(limite)) {
            reject('no encontre limite numerico')
            return;
        }

        console.log('==========================='.green)
        console.log(`tabla de multiplicar`.green);
        console.log('==========================='.green);

        for (let i = 0; i <= limite; i++) {
            console.log(`en la base ${base} multiplicado ${i} : ${i*base} \n`);
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}