/*
<div>
  <input />
  <button> </button>
 </div > 
 */
const loginForm = document.querySelector('#login-form'); //div태그 요소를 저장
const loginInput = loginForm.querySelector('input'); //div 태그 안에있는 요소를 찾는거라 document안써도 됨.!!

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}
loginForm.addEventListener('submit', onLoginSubmit);

// function clickCheckbox(event) {
//   event.preventDefault();
//   console.log(event);
// }

// loginForm.addEventListener('click', clickCheckbox);
