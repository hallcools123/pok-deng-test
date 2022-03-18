const inquirer = require('inquirer');
const {pokerDeck} = require('./card.js')
const {cardValue,sumValue} = require('./value.js')

let playerMoney;
let playerBet;
let reward = 0;
let playerCard1;
let playerCard2;
let dealerCard1;
let dealerCard2;
const poker = new pokerDeck();

const pokDengPlay = async () => {

    const betInput = await inquirer.prompt({
        name:'bet',
        type:'input',
        message:'Place your bet!'
    });

    playerBet = betInput.bet
    console.log(`Your bet is ${playerBet}`)

    playerCard1 = poker.deal()
    dealerCard1 = poker.deal()
    playerCard2 = poker.deal()
    dealerCard2 = poker.deal()

    const playerValue = sumValue(cardValue(playerCard1),cardValue(playerCard2));
    const dealerValue = sumValue(cardValue(dealerCard1),cardValue(dealerCard2));
    
    
    console.log(`You got ${playerCard1} and ${playerCard2}`)
    console.log(`Your value => ${playerValue}`)
    console.log(`Dealer got ${dealerCard1} and ${dealerCard2}`)
    console.log(`Dealer value => ${dealerValue}`)

    if(playerValue > dealerValue){
        console.log(`Yeah! You won!! Received ${playerBet} chips` )
        reward += playerBet
    }else{
        console.log(`You lose! Loss ${playerBet} chips`)
        reward -= playerBet
    }

    poker.reset()
    poker.shuffle()

    playAgain()

}

const playAgain = async () => {
    const askForPlayAgain = await inquirer.prompt({
        name:'answer',
        type:'input',
        message:'Do you want to play again? (Yes/No)'
    });

    playerAnswer = askForPlayAgain.answer
    
    if(playerAnswer == 'Yes'){
        pokDengPlay()
    }else{
        console.log(`You got total ${reward} chips`)
    }
}

exports.pokDengPlay = pokDengPlay;
