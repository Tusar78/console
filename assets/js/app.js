// const arr = ['1', '2', '3', '4', '5'];
// for (const ar of arr) {
//   console.log(ar);
// }

const customValidate = _ => {
  const emailFilled = document.getElementById('email');
  const email = emailFilled.value;
  const regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;
  if (email.match(regEx)) {
    console.log('true');
  } else {
    console.log('false');
  }
}
