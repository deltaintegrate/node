let deadpool = {
    nombre: 'wave',
    apellido: 'Wiston',
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: primernombre, apellido, poder } = deadpool;

console.log(primernombre, apellido, poder);