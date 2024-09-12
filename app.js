const link = document.querySelector('a');
function clickLink(event) {
  //alert는 모든 동작을 일단 멈춘다!! ok누르면 원래 동작 진행함.

  console.log(event);
  event.preventDefault();
  alert('click');
}
link.addEventListener('click', clickLink);
