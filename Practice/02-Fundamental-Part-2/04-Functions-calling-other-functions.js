const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(4, 3));
