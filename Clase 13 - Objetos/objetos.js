// Los objetos se pueden crear directamente
let miVaso = {
  // PROPIEDADES
  color: "blue",
  capacidad: 300,
  contenidoActual: 200,
  material: "vidrio",
  dueno: "Luis",
  // PROPIEDADES
  regarAgua: function (cantidad) {
    this.contenidoActual -= cantidad;
  },
  llenar: function () {
    this.contenidoActual = this.capacidad;
  },
};
console.log(miVaso.capacidad);
console.log(miVaso.contenidoActual);
miVaso.regarAgua(15);
console.log(miVaso.contenidoActual);
miVaso.llenar();
console.log(miVaso.contenidoActual);
