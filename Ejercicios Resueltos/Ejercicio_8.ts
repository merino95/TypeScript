/* 
    TIPOS LITERALES

    Los tipos literales son un sub-tipo que creamos a partir de valores concretos.
    Puedes leer más en: https://www.typescriptlang.org/docs/handbook/literal-types.html

    --- Resultado esperado en consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

// Modifica el código bajo esta línea

type PersonajesLiterales = 'bueno' | 'malo' | 'feo'

function getName(personaje: PersonajesLiterales): string {
    let name = "";
    if (personaje === 'bueno') {
      name = 'Rubio';
    } else if (personaje === 'feo' ) {
      name = 'Tuco';
    } else if (personaje === 'malo' ) {
      name = 'Sentencia';
    }
    return name;
}

function getNameDict(personaje: PersonajesLiterales): string {
  const personajeMapper: any = {
    'bueno': "Rubio",
    'feo': "Tuco",
    'malo': "Sentencia"
  };
  return personajeMapper[personaje];
}

// Modifica el código sobre esta línea

console.log(
    `Al bueno lo llamaban ${getName('bueno')}, al malo ${getName('malo')} y, al feo, ${getName('feo')}`
  );

  export{};