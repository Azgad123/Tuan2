//Data Structures, Modern Operators and Strings
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Lucas',
        'Hernandez',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
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
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Bài tập 1: Lặp qua mảng 'scored' và in tên cầu thủ và số bàn thắng
  for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
  
  // Bài tập 2: Tính trung bình tỷ lệ cược và in ra màn hình
  const odds = Object.values(game.odds);
  const averageOdd =
    odds.reduce((accumulator, currentOdd) => accumulator + currentOdd, 0) /
    odds.length;
  console.log(`Average odd: ${averageOdd.toFixed(2)}`);
  
  // Bài tập 3: In ra tỷ lệ cược cho từng đội và tỷ lệ cược hòa
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = game[team] || 'draw';
    console.log(`Odd of victory ${teamName}: ${odd}`);
  }
  
  // Bài tập 4: Tạo đối tượng 'scorers' để theo dõi số bàn thắng của từng cầu thủ
  const scorers = {};
  for (const player of game.scored) {
    if (scorers[player]) {
      scorers[player]++;
    } else {
      scorers[player] = 1;
    }
  }
  console.log(scorers);
  