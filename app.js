const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
//string만 포함된 변수명은 대문자로만 표기한다.!!
function onLoginSubmit(event) {
  const username = loginInput.value;
  //기존의 폼 없애기
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //환영인사하기
  greeting.innerText = `Hello ${username} ~`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);
