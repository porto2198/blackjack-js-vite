import _ from "underscore";
import {accumulatePoints, computerTurn, createCard, createDeck, orderCard} from "./usecases/index.js";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 * */
let deck = [];
const types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'Q', 'K'];

let pointsPlayers = [];

/*Referencias HTML*/
const btnOrder = document.querySelector('#btnOrder'),
    btnStop = document.querySelector('#btnStop'),
    btnNew = document.querySelector('#btnNew');

const divCardsPlayers = document.querySelectorAll('.divCards'),
    htmlPoints = document.querySelectorAll('small');

/*Inicializar el juego*/
const initGame = (numberPlayers = 2) => {
    deck = createDeck(types, specials);

    console.log(deck);

    pointsPlayers = [];

    for (let i = 0; i < numberPlayers; i++) {
        pointsPlayers.push(0);
    }

    htmlPoints.forEach(element => element.innerText = 0);
    divCardsPlayers.forEach(element => element.innerHTML = '');

    btnOrder.disabled = false;
    btnStop.disabled = false;
}

/*Eventos*/
btnOrder.addEventListener('click', () => {
    const card = orderCard(deck);
    const playerPoints = accumulatePoints(card, 0, pointsPlayers, htmlPoints);
    createCard(card, 0, divCardsPlayers);

    if (playerPoints > 21) {
        console.warn('Lo siento mucho, perdiste.');
        btnOrder.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, htmlPoints, divCardsPlayers, pointsPlayers, deck);
    } else if (playerPoints === 21) {
        console.warn('21, !Genial!');
        btnOrder.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, htmlPoints, divCardsPlayers, pointsPlayers, deck);
    }
});

btnStop.addEventListener('click', () => {
    btnOrder.disabled = true;
    btnStop.disabled = true;
    computerTurn(pointsPlayers[0], htmlPoints, divCardsPlayers, pointsPlayers, deck);
});

btnNew.addEventListener('click', () => {
    initGame();
});
