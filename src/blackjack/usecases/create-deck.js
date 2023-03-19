import _ from "underscore";

/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} types Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna una nueva baraja de cartas
 */
export const createDeck = (types, specials) => {
    if (!types || types.length === 0) {
        throw new Error('Tipos de cartas es obligatorio como un arreglo de string.');
    }

    if (!specials || specials.length === 0) {
        throw new Error('Tipos de cartas especiales es obligatorio como un arreglo de string.');
    }

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }

    return _.shuffle(deck);
}
