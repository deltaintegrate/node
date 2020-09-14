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


getEmpleado = async(id) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${ id }`);
    } else {
        return empleadoDB
    }

}


let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`no se ha encontrado el valor para ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }

}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`

}

getInformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));