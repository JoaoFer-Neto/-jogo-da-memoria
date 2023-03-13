let game = {

  lockMode: false,
  firstCard: null,
  secondCard: null,

  setCard: function(id){
    let card =this.cards.filter(card=>card.id === id)[0]

    if (card.fliped || this.lockMode){
      return false
    }

    if(!this.firstCard ){
      this.firstCard = card;
      return true
    }
    else{
      this.secondCard = card;
      this.lockMode = true;
      return true
    }

  },

  match: function(){
    return this.firstCard.icon === this.secondCard.icon
  },

  clearCards: function(){
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  techs: [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
  ],

  cards: null,

  createTechsCards: function () {

    this.cards = [];

    this.techs.forEach(tech => {
      this.cards.push(this.createTechPair(tech))
    });

    this.cards = this.cards.flatMap(pair => pair);
    this.shuffleCards()
    return this.cards

  },

  createTechPair: function (tech) {
    return [
      {
        id: this.createTechId(tech),
        icon: tech,
        fliped: false,
      },

      {
        id: this.createTechId(tech),
        icon: tech,
        fliped: false,
      }

    ]
  },

  createTechId: function (tech) {
    return tech + parseInt(Math.random() * 1000)
  },
  


  shuffleCards: function (cards) {

    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]

    }

  },

};