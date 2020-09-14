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


getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB)
        }
    });
}


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`no se ha encontrado el valor para ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }

    })
}



getEmpleado(10).then(empleado => {

    return getSalario(empleado)


}).then(resp => {
    console.log(`el salario de ${resp.nombre} es ${resp.salario}$`)
}).catch(err => {
    console.log(err);
})