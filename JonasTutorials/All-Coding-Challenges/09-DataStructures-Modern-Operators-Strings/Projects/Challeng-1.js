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
    teamONE: 11.33,
    x: 3.25,
    teamTOW: 6.5,
  },
};

//1)
const [playersONE, playersTOW] = game.players;
console.log(playersONE, playersTOW);

//2)
const [gk, ...fieldPlayers] = playersONE;
console.log(gk, fieldPlayers);

//3)
const allPlayers = [...playersONE, ...playersTOW];
console.log(allPlayers);

//4)
const playersFinal = [...playersONE, 'Thiago', 'Coutinho', 'Periscic'];

//5)
const {
  odds: { teamONE, x: draw, teamTOW },
} = game;
console.log(teamONE, draw, teamTOW);

//6)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewndowski');
// printGoals('Davies', 'Muller');

printGoals(...game.scored);

//7)
teamONE < teamTOW && console.log('Team One is more likely to win ');
teamONE > teamTOW && console.log('Team Tow is more likely to win ');
