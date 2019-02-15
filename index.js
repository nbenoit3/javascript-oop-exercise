class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
        console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
}


class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageURL() {
        return 'images/5_of_diamonds.png';
    }
}


class Hand {
    constructor(card) {
        this.card = card;
    }
    addCard(card) {
        this.card = [];
        card.push(card);
    }
}

class Deck {
    constructor(numberOfCards) {
        this.numberOfCards = numberOfCards;
        var suits = ['diamonds', 'spades', 'clubs', 'hearts', 'star'];
        var point = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }
    draw() {
        return

    }
    shuffle() {

    }
    numCardsLeft() {

    }
}


var sonny = new Person("Sonny", "sonny@hotmail.com", '483-485-4948');
var jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

sonny.greet(jordan);
jordan.greet(sonny);

console.log(sonny.email + sonny.phone);
console.log(jordan.email + jordan.phone);



let myCard = new Card(5, 'diamonds')
console.log(myCard.point);
console.log(myCard.suit);