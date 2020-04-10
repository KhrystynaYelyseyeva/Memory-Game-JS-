document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
        {
            name: '1',
            img: 'images/1.jpg'
        },
        {
            name: '1',
            img: 'images/1.jpg'
        },
        {
            name: '2',
            img: 'images/2.jpg'
        },
        {
            name: '2',
            img: 'images/2.jpg'
        },
        {
            name: '3',
            img: 'images/3.jpg'
        },
        {
            name: '3',
            img: 'images/3.jpg'
        },
        {
            name: '4',
            img: 'images/4.jpg'
        },
        {
            name: '4',
            img: 'images/4.jpg'
        },
        {
            name: '5',
            img: 'images/5.jpg'
        },
        {
            name: '5',
            img: 'images/5.jpg'
        },
        {
            name: '6',
            img: 'images/6.jpg'
        },
        {
            name: '6',
            img: 'images/6.jpg'
        },
        {
            name: '7',
            img: 'images/7.jpg'
        },
        {
            name: '7',
            img: 'images/7.jpg'
        },
        {
            name: '8',
            img: 'images/8.jpg'
        },
        {
            name: '8',
            img: 'images/8.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

//create board
    const createBoard = () => {
        for (let i = 0, l = cardArray.length; i < l; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.jpg');
            card.setAttribute("data-id", i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };

//check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionOneId].removeAttribute('data-id');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].removeAttribute('data-id');
            cardsWon.push(cardsChosen);

        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations!';
        }

    }

//flip your card
    function flipCard() {
        if(this.hasAttribute('data-id')) {
            let cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
    }


    createBoard();

})