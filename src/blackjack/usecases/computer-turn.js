import {orderCard} from "./order-card.js";
import {accumulatePoints} from "./accumulate-points.js";
import {createCard} from "./create-card.js";

/**
 * Esta función obtiene el valor de cada carta
 * @param {Number} minPoints Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} htmlPoints Elemento Html para mostrar los puntos
 * @param {HTMLElement} divCardsPlayers Elemento Html para mostrar las cartas
 * @param {Array} pointsPlayers Puntos de los jugadores
 * @param {Array<String>} deck
 */
export const computerTurn = (minPoints, htmlPoints, divCardsPlayers, pointsPlayers, deck = []) => {
    if (!minPoints) throw new Error('Los puntos mínimos son necesarios.');

    let computerPoints = 0;

    do {
        const card = orderCard(deck);
        computerPoints = accumulatePoints(card, pointsPlayers.length - 1, pointsPlayers, htmlPoints);
        createCard(card, pointsPlayers.length - 1, divCardsPlayers);
    } while ((computerPoints < minPoints) && (minPoints <= 21));

    determineWinner(pointsPlayers);
}

/**
 * @param {Array} pointsPlayers
 */
const determineWinner = (pointsPlayers) => {
    const [minPoints, computerPoints] = pointsPlayers;

    setTimeout(() => {
        if (computerPoints === minPoints) {
            alert('Nadie Gana :(');
        } else if (minPoints > 21) {
            alert('¡Computadora Gana!');
        } else if (computerPoints > 21) {
            alert('¡Jugador Gana!');
        } else {
            alert('¡Computadora Gana!');
        }
    }, 100);
}
