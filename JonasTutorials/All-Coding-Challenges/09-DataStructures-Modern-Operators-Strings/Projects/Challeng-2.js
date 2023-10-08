'User-Strict';
const game = {
  teamONE: 'Bayern Munich',
  teamTOW: 'Borrussia Drotmond',
  players: [
    [
      'Neuer',
      'kane',
      'Pavard',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewndowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotoze',
    ],
  ],
  score: '4.0',
  scored: ['Hakimi', 'Muller', 'Hakimi', 'Hazard'],
  date: 'spt 14th, 2023',
  odds: {
    teamONE: 1.33,
    x: 3.25,
    teamTOW: 6.5,
  },
};

// 1)
for (const [index, players] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${players}`);

// 2)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
