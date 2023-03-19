/*Turno 0: 1er jugador - Último: computadora*/
import {valueCard} from "./value-card.js";

/**
 * @param {String} card
 * @param {number} turn
 * @param {Array} pointsPlayers
 * @param {HTMLElement} htmlPoints
 */
export const accumulatePoints = (card, turn, pointsPlayers, htmlPoints) => {
    pointsPlayers[turn] = pointsPlayers[turn] + valueCard(card);
    htmlPoints[turn].innerText = pointsPlayers[turn];

    return pointsPlayers[turn];
}
