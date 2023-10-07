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

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2)
gameEvents.delete(64);

//3)
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, events] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${events} `);
}
