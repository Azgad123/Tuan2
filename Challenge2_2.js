// Working With Arrays

function calcAverageHumanAge(ages) {
    // Tính tuổi của chó ở tuổi người
    const humanAges = ages.map(age =>
      age <= 2 ? 2 * age : 16 + age * 4
    );
  
    // Loại bỏ tất cả các chó dưới 18 tuổi (tuổi người)
    const adults = humanAges.filter(age => age >= 18);
  
    // Tính tuổi người trung bình của tất cả các chó đã lọc
    const average =
      adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
    return average;
  }
  
  // Test data
  const data1 = [5, 2, 4, 1, 15, 8, 3];
  const data2 = [16, 6, 10, 5, 6, 1, 4];
  
  // Chạy hàm cho cả hai tập dữ liệu kiểm tra
  console.log("Tuổi trung bình của chó (dữ liệu 1):", calcAverageHumanAge(data1));
  console.log("Tuổi trung bình của chó (dữ liệu 2):", calcAverageHumanAge(data2));
  