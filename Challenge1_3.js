//Data Structures, Modern Operators and Strings
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔴 Red card'],
  ]);
  
  // Bài tập 1: Tạo mảng 'events' chứa các sự kiện khác nhau trong trò chơi (không có trùng lặp)
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  // Bài tập 2: Xóa sự kiện thẻ vàng không công bằng ở phút 64
  gameEvents.delete(64);
  console.log(gameEvents);
  
  // Bài tập 3: Tính và in ra chuỗi yêu cầu
  const totalMinutes = 90;
  const eventCount = gameEvents.size;
  const averageInterval = totalMinutes / eventCount;
  console.log(`An event happened, on average, every ${averageInterval.toFixed(0)} minutes`);
  
  // Bài tập 4: Lặp qua 'gameEvents' và in từng phần tử ra console với thông tin hiệp 1 hoặc hiệp 2
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
  }
  