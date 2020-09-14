let empleados = [{
    id: 1,
    nombre: 'Leonardo'
}, {
    id: 2,
    nombre: 'Melisa'
}, {
    id: 3,
    nombre: 'juan'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}]




// {
//     nombre:'Melisa',
//     salario:3000
// }

getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe el empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB)
    }
}


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`no se encontro un salario para el isiario ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }

}




getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            console.log(err)
        }
        console.log(`el salario de ${ resp.nombre } es de ${resp.salario}$`)
    })

});