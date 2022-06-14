// const arr = ['1', '2', '3', '4', '5'];
// for (const ar of arr) {
//   console.log(ar);
// }

// const customValidate = _ => {
//   const emailFilled = document.getElementById('email');
//   const email = emailFilled.value;
//   const regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;
//   if (email.match(regEx)) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }



const images = [
  './assets/images/pic-1.jpg',
  './assets/images/pic-2.jpg',
  './assets/images/pic-3.jpg'
]

const imgContainer = document.querySelector('.img-item');
let imgIndex = 0;

setInterval (() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }

  const imgUrl = images[imgIndex];
  imgContainer.src = imgUrl;
  imgIndex++;
}, 1500)
