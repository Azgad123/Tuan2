const loadNPause = async function () {
    try {
      let img = await createImage('img/img-1.jpg');
      console.log('Hình ảnh 1 đã được tải');
      await wait(2);
      img.style.display = 'none';
  
      img = await createImage('img/img-2.jpg');
      console.log('Hình ảnh 2 đã được tải');
      await wait(2);
      img.style.display = 'none';
    } catch (err) {
      console.error(err);
    }
  };
  
  loadNPause();
  
  const loadAll = async function (imgArr) {
    try {
      // Sử dụng map để tải nhiều hình ảnh
      const imgs = imgArr.map(async imgPath => await createImage(imgPath));
      const images = await Promise.all(imgs); // Sử dụng Promise.all để đợi tất cả hình ảnh tải xong
  
      // Thêm lớp CSS 'parallel' cho tất cả hình ảnh
      images.forEach(img => img.classList.add('parallel'));
    } catch (err) {
      console.error(err);
    }
  };
  
  loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
  