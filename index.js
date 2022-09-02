class Usuario {
  constructor(nombre, apellido, libros, mascotas){
    this.nombre=nombre;
    this.apellido=apellido;
    this.libros=libros;
    this.mascotas=mascotas;
  }
}

const user1 = 
    new Usuario (
      'Carlos', 
      'Perez',
      [
        {nombre: "Asi hablo Zaratustra", autor: "Nietzsche"},
        {nombre: "21 lecciones para el siglo XXI", autor: "Yuval Noah Harari"}
      ], 
      ["Tortuga", "Gato", "Perro"])



function getFullName(user){
console.log(`${user.nombre} ${user.apellido}`)
}
function addMascota(user, mascota){
console.log("/////Mascotas////////")
console.log(user.mascotas)
user.mascotas.push(mascota)
console.log(user.mascotas)
}
const countMascotas=(user)=>{
console.log(`Numero de mascotas: ${user.mascotas.length}`)
}
const getBookNames=(user)=>{
console.log("/////LIBROS////////") 
user.libros.forEach(obj => console.log(obj.nombre))

}
const addBook=(user, libro, autor)=>{
obj = {nombre: libro, autor:autor};
user.libros.push(obj);

}
getFullName(user1)
addMascota(user1, "Frida")
countMascotas(user1)
addBook(user1, "De animales a dioses", "Yuval Noah")
getBookNames(user1)