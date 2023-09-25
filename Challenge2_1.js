
// Working With Arrays

function checkDogs(dogsJulia, dogsKate) {
    // Tạo một bản sao nông của mảng dogsJulia để loại bỏ tuổi của mèo
    const correctedJulia = dogsJulia.slice();
  
    // Loại bỏ tuổi của mèo từ correctedJulia
    correctedJulia.splice(0, 1);
    correctedJulia.splice(-2);
  
    // Tạo một mảng chứa cả dữ liệu của Julia và Kate
    const allDogs = [...correctedJulia, ...dogsKate];
  
    // Duyệt qua từng con chó trong mảng và in ra kết quả
    allDogs.forEach(function (age, i) {
      const classification = age >= 3 ? 'adult' : 'puppy';
      console.log(`Chó số ${i + 1} là một ${classification}, và nó ${age} tuổi`);
    });
  }
  
  // Test data
  const juliaData1 = [3, 5, 2, 12, 7];
  const kateData1 = [4, 1, 15, 8, 3];
  const juliaData2 = [9, 16, 6, 8, 3];
  const kateData2 = [10, 5, 6, 1, 4];
  
  // Chạy hàm cho cả hai tập dữ liệu kiểm tra
  console.log("Dữ liệu 1:");
  checkDogs(juliaData1, kateData1);
  
  console.log("\nDữ liệu 2:");
  checkDogs(juliaData2, kateData2);
  