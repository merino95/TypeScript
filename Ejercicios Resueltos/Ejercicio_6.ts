/* 
    DEFINIENDO ENUMERADOS
    Typescript nos permite crear enumerados, que podríamos definir como un
    listado de constantes. Veamos un ejemplo

    Puedes saber más en: https://www.typescriptlang.org/docs/handbook/enums.html

    --- Resultado esperado por consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

enum Personaje {
  Bueno,
  Feo,
  Malo,
}

// Modifica el código bajo esta línea

function getName(personaje: Personaje): string {
  let name = "";
  if (personaje === Personaje.Bueno) {
    name = 'Rubio';
  } else if (personaje === Personaje.Feo) {
    name = 'Tuco';
  } else if (personaje === Personaje.Malo) {
    name = 'Sentencia';
  }
  return name;
}

function getNameDict(personaje: Personaje): string {
  const personajeMapper: any = {
    [Personaje.Bueno]: "Rubio",
    [Personaje.Feo]: "Tuco",
    [Personaje.Malo]: "Sentencia"
  };
  return personajeMapper[personaje];
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${getName(Personaje.Bueno)}, al malo ${getName(
    Personaje.Malo
  )} y, al feo, ${getName(Personaje.Feo)}`
);
export{};
