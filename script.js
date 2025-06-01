// war game 
// - deck consisting of rank, suits and an array for the deck itself to preside  in once created

class Deck {
    constructor() {
        this.deck = [];
        this.rank = {
            'Ace': 14,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'Jack': 11,
            'Queen': 12,
            'King': 13
        };
        this.suits = [
            "Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"
        ];
    }


//  creates deck by looping through the rank object and the suit array and creates 
//  a card with an object with a value and suit


    createDeck() {
        this.deck = [];
         for (let rankName in this.rank) {
            let rankValue = this.rank[rankName];
          for (let i = 0; i < this.suits.length; i++) {
             let suit = this.suits[i];
             let card = {
                name: rankName + ' of ' + suit,
                value: rankValue
            };
            this.deck.push(card);
           }
        }
    }


// shuffles the deck by starting at the end of the array and moving backwards,
//  then it picks a random index from  
// "o" then swapping them with the the value at the current i index.


    shuffleDeck() {
  const deck = this.deck;
  for (let i = deck.length - 1; i > 0; i--) {
    const o = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[o]] = [deck[o], deck[i]];
        }
    }

}  

// class for the game itself including the two player objects

class Game {
    constructor() {
        this.player1 = {
            name: 'player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'player 2',
            score: 0,
            hand: []
        }
    }
    
}

// a way to play the game






const myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffleDeck();
console.log(myDeck.deck);
