// /Data Structures, Modern Operators and Strings
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
  
  // Bài tập 1: Tạo mảng players cho từng đội
  const players1 = game.players[0];
  const players2 = game.players[1];
  
  // Bài tập 2: Lấy thông tin thủ môn và các cầu thủ trường của Bayern Munich
  const [gk, ...fieldPlayers] = players1;
  
  // Bài tập 3: Tạo mảng 'allPlayers' chứa tất cả cầu thủ của cả hai đội
  const allPlayers = [...players1, ...players2];
  
  // Bài tập 4: Bayern Munich thay thế 3 cầu thủ dự bị. Tạo mảng 'players1Final' bao gồm tất cả cầu thủ ban đầu của team1 và thêm 'Thiago', 'Coutinho' và 'Perisic'
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // Bài tập 5: Tách thông tin về tỷ lệ cược thành các biến riêng
  const { team1, x: draw, team2: team2Odds } = game.odds;
  
  // Bài tập 6: Viết một hàm 'printGoals' để in ra tên cầu thủ và số bàn thắng đã ghi
  function printGoals(...players) {
    console.log(`Số bàn thắng được ghi là ${players.length} bàn, được ghi bởi:`);
    players.forEach((player) => console.log(player));
  }
  
  // Bài tập 7: Xác định đội nào có khả năng thắng cao hơn mà không sử dụng câu lệnh if/else hoặc toán tử ba ngôi
  team1 < team2Odds && console.log(`${game.team1} có khả năng thắng cao hơn.`);
  team1 > team2Odds && console.log(`${game.team2} có khả năng thắng cao hơn.`);
  draw < team1 && draw < team2Odds && console.log(`Có khả năng sẽ hòa.`);
  
  // Dữ liệu kiểm tra cho Bài tập 6
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  