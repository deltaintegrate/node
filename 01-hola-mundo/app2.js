function saludar(nombre) {
    let mensaje = `hola ${ nombre }`;

    return mensaje;
}

let saludo = saludar('leonardo');
console.log(saludo);