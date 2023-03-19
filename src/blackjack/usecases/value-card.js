/**
 * Esta función obtiene el valor de cada carta
 * @param {String} card Ejemplo: 2C, 2D, 2H, 2S, A, J, Q, K
 * @returns {Number} Retorna el valor numérico de la carta
 */
export const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);

    return isNaN(value) ? ((value === 'A') ? 11 : 10) : value * 1;
}
