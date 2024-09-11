const idName = document.getElementById('hihi'); //html요소에서 id가 title인 객체를 반환함.
idName.innerText = 'got you'; // title의 태그사이의 텍스트 바꾸기

const classNames = document.getElementsByClassName('hello');

const querySelectors = document.querySelector('.hello');
querySelectors.style.backgroundColor = 'red';

const id1 = document.getElementById('hihi');
const id2 = document.querySelector('#hihi'); //더 많이 사용!

const selectorAll = document.querySelectorAll('.hello');

for (let i in selectorAll) {
  selectorAll[i].style.backgroundColor = 'blue';
}
