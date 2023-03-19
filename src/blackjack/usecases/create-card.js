/**
 * @param {String} card
 * @param {number} turn
 * @param {HTMLElement} divCardsPlayers
 * @returns {HTMLImageElement} Retorna la imagen de la carta
 */
export const createCard = (card, turn, divCardsPlayers) => {
    if (!card) throw new Error('La carta es un argumento obligatorio.');

    const imgCard = document.createElement('img');

    imgCard.src = `./assets/cards/${card}.png`;
    imgCard.classList.add('image-card');

    divCardsPlayers[turn].append(imgCard);
}
