/**
 * Esta función toma una carta de la baraja
 * @param {Array<String>} deck Ejemplo: ['*']
 * @returns {String} Retorna la carta que se tomó
 */
export const orderCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en la baraja.';
    }

    return deck.pop();
}