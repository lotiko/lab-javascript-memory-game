/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe("MemoryGame class", () => {
  beforeEach(() => {
    memoryGame = new MemoryGame([]);
  });

  it("Create MemoryGame object", () => {
    expect(typeof memoryGame).toBe("object");
  });

  it("MemoryGame should receive `cards` as a parameter and create it as its own `cards` property", () => {
    expect(memoryGame.cards).toBeDefined();
  });

  it("MemoryGame should have a pickedCards property", () => {
    expect(memoryGame.pickedCards).toBeDefined();
  });

  it("pickedCards property should be an array", () => {
    expect(typeof memoryGame.pickedCards).toBe("object");
  });

  it("MemoryGame should have a pairsClicked property", () => {
    expect(memoryGame.pairsClicked).toBeDefined();
  });

  it("pairsClicked property should be a number", () => {
    expect(typeof memoryGame.pairsClicked).toBe("number");
  });

  it("MemoryGame should have a pairsGuessed property", () => {
    expect(memoryGame.pairsGuessed).toBeDefined();
  });

  it("pairsGuessed property should be a number", () => {
    expect(typeof memoryGame.pairsGuessed).toBe("number");
  });
});

describe("shuffleCards method", () => {
  beforeEach(() => {
    const cardsArray = [
      { name: "aquaman", img: "aquaman.jpg" },
      { name: "batman", img: "batman.jpg" },
      { name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four", img: "fantastic-four.jpg" },
      { name: "flash", img: "flash.jpg" },
      { name: "green arrow", img: "green-arrow.jpg" },
      { name: "green lantern", img: "green-lantern.jpg" },
      { name: "ironman", img: "ironman.jpg" },
      { name: "aquaman", img: "aquaman.jpg" },
      { name: "batman", img: "batman.jpg" },
      { name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four", img: "fantastic-four.jpg" },
      { name: "flash", img: "flash.jpg" },
      { name: "green arrow", img: "green-arrow.jpg" },
      { name: "green lantern", img: "green-lantern.jpg" },
      { name: "ironman", img: "ironman.jpg" },
    ];
    memoryGame = new MemoryGame(cardsArray);
  });

  it("should be declared", () => {
    expect(typeof memoryGame.shuffleCards).toBe("function");
  });

  it("should return undefined if argument (cards array) is not passed", () => {
    let memoryGameTest = new MemoryGame();
    expect(typeof memoryGameTest.shuffleCards()).toBe("undefined");
  });

  it("should return the shuffled (mixed) array of cards", () => {
    let formerCardsString = memoryGame.cards.map((card) => card.name).toString();
    memoryGame.shuffleCards();
    let newCardsString = memoryGame.cards.map((card) => card.name).toString();
    expect(formerCardsString === newCardsString).toBe(false);
  });
});

describe("checkIfPair method", () => {
  it("should be declared", () => {
    expect(typeof memoryGame.checkIfPair).toBe("function");
  });

  it("should add 1 to `pairsClicked` when we call it", () => {
    memoryGame.checkIfPair("batman", "ironman");
    expect(memoryGame.pairsClicked).toBe(1);
  });

  it("should return true when comparing cards are the same", () => {
    expect(memoryGame.checkIfPair("ironman", "ironman")).toBe(true);
  });

  it("should return false when the comparing cards are not the same", () => {
    expect(memoryGame.checkIfPair("ironman", "flash")).toBe(false);
  });

  it("should add 1 to pairsGuessed if they are the same card", () => {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair("ironman", "ironman");
    expect(memoryGame.pairsGuessed).toBe(1);
  });

  it("should not add to pairsGuessed if the cards are not the same", () => {
    memoryGame.pairsGuessed = 0;
    memoryGame.checkIfPair("ironman", "green lantern");
    expect(memoryGame.pairsGuessed).toBe(0);
  });
});

describe("isFinished method", () => {
  it("should be declared", () => {
    expect(typeof memoryGame.isFinished).toBe("function");
  });

  it("should return false at the beginning of the game", () => {
    expect(memoryGame.isFinished()).toBe(false);
  });

  it("should return false if there's still some pairs to be guessed", () => {
    memoryGame.pairsGuessed = 4;
    expect(memoryGame.isFinished()).toBe(false);
  });

  it("should return true if all pairs are guessed", () => {
    memoryGame.pairsGuessed = 8;
    expect(memoryGame.isFinished()).toBe(true);
  });
});
describe("addPickedCard method", () => {
  it("should be declared", () => {
    expect(typeof memoryGame.addPickedCard).toBe("function");
  });

  it("should return true if there's still some place in pickedCards", () => {
    expect(memoryGame.addPickedCard("batman")).toBe(true);
  });
  it("should return false if pickedCards if full (length = 2)", () => {
    memoryGame.pickedCards = ["batman", "ironman"];
    expect(memoryGame.addPickedCard("batman")).toBe(false);
  });
});

describe("resetPickedCards method", () => {
  it("should be declared", () => {
    expect(typeof memoryGame.resetPickedCards).toBe("function");
  });

  it("should set pickedCards to empty array", () => {
    memoryGame.pickedCards = ["batman", "ironman"];
    memoryGame.resetPickedCards();
    expect(memoryGame.pickedCards.length).toBe(0);
  });
});
describe("getNamesPickedCards method", () => {
  beforeEach(() => {
    const cardsArray = [
      { dataset: { cardName: "aquaman" }, img: "aquaman.jpg" },
      { dataset: { cardName: "batman" }, img: "batman.jpg" },
    ];
    memoryGame = new MemoryGame(cardsArray);
    memoryGame.pickedCards = [memoryGame.cards[0], memoryGame.cards[1]];
  });
  it("should be declared", () => {
    expect(typeof memoryGame.getNamesPickedCards).toBe("function");
  });
  it("should return array of 2 string", () => {
    const ret = memoryGame.getNamesPickedCards();
    expect(ret.length).toBe(2);
    expect(typeof ret[0]).toBe("string");
    expect(typeof ret[1]).toBe("string");
  });
});
