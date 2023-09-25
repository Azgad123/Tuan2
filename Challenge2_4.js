const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];
  
  // 1. Tính toán lượng thức ăn khuyến nghị cho mỗi con chó và thêm vào đối tượng
  dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // 2. Tìm chó của Sarah và kiểm tra xem nó ăn nhiều hay ít hơn lượng thức ăn khuyến nghị
  const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
  if (sarahDog) {
    const sarahEatingTooMuch = sarahDog.curFood > sarahDog.recommendedFood * 1.1;
    const sarahEatingTooLittle = sarahDog.curFood < sarahDog.recommendedFood * 0.9;
    console.log(
      `Sarah's dog is eating too much: ${sarahEatingTooMuch}, and eating too little: ${sarahEatingTooLittle}`
    );
  } else {
    console.log("Sarah doesn't own a dog in this dataset.");
  }
  
  // 3. Tạo các mảng chứa tên của chủ sở hữu của các con chó ăn nhiều và ăn ít
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
    .flatMap((dog) => dog.owners);
  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
    .flatMap((dog) => dog.owners);
  
  // 4. Hiển thị thông báo về việc ăn nhiều và ăn ít cho từng nhóm chủ sở hữu
  console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
  
  // 5. Kiểm tra xem có con chó nào đang ăn đúng lượng thức ăn khuyến nghị không
  const isEatingRecommendedAmount = dogs.some(
    (dog) => dog.curFood >= dog.recommendedFood * 0.9 && dog.curFood <= dog.recommendedFood * 1.1
  );
  console.log(`Any dog eating the recommended amount: ${isEatingRecommendedAmount}`);
  
  // 6. Kiểm tra xem có con chó nào đang ăn lượng thức ăn trong khoảng cho phép (10% trên hoặc dưới khuyến nghị) không
  const isEatingOkayAmount = dogs.some(
    (dog) => dog.curFood >= dog.recommendedFood * 0.9 && dog.curFood <= dog.recommendedFood * 1.1
  );
  console.log(`Any dog eating an okay amount: ${isEatingOkayAmount}`);
  
  // 7. Tạo một bản sao nông của mảng 'dogs' và sắp xếp theo lượng thức ăn khuyến nghị tăng dần
  const dogsCopySorted = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
  
  console.log(dogsCopySorted);
  