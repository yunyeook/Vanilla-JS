const h1 = document.querySelector('.hello');
function handleH1Click() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'green';
  } else {
    newColor = 'blue';
  }
  h1.style.color = newColor;
}

function handleMouseEnter() {
  // console.log('mouse is here');
  h1.style.color = 'red';
  h1.innerText = 'mouse is here!';
}
function handleMouseLeave() {
  h1.style.color = 'black';
  h1.innerText = 'mouse is gone~';
}
// title.addEventListener('click', handleH1Click()); => 작동안함 why? 콜백함수에서 ()를 빼야함!!

h1.addEventListener('click', handleH1Click);
h1.addEventListener('mouseenter', handleMouseEnter); //해당요소에 마우스 올라갔을때
// title.addEventListener('mouseleave', handleMouseLeave);

h1.onmouseleave = handleMouseLeave; // 별로 선호 하지 않음

function handleWindowResize() {
  document.body.style.backgroundColor = 'skyblue';
}
function handleWindowCopy() {
  alert('no copy');
}
function handleWindowoffline() {
  alert('no wifi');
}
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowoffline);
