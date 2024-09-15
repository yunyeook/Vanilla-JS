const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

// string은 입력시 오타날수 있으니까 변수로 저장해서 쓰기!!
const HIDDEN = 'hidden';
const USERNAME = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);

  localStorage.setItem(USERNAME, loginInput.value);
  greeting.innerText = `Hello ${loginInput.value} ~`;
  greeting.classList.remove(HIDDEN);
}

if (localStorage.getItem(USERNAME) === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN);
  greeting.innerText = `Hello ${localStorage.getItem(USERNAME)} ~`;
}
