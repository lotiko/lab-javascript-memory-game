class MemoryGame {
  constructor(cards = []) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (this.cards.length === 0) return undefined;
    let randomI, swap, iToSetWithrandomValue;
    for (
      iToSetWithrandomValue = this.cards.length - 1;
      iToSetWithrandomValue > 0;
      iToSetWithrandomValue--
    ) {
      randomI = Math.floor(Math.random() * (iToSetWithrandomValue + 1));
      swap = this.cards[iToSetWithrandomValue];
      this.cards[iToSetWithrandomValue] = this.cards[randomI];
      this.cards[randomI] = swap;
    }
    return this.cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {}
}
