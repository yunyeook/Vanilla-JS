const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
getClock(); //처음에 웹사이트 열자마자 시간 떠야하니까 맨처음엔 함수 실행하기

setInterval(getClock, 1000); //1초마다 갱신하도록 함수 실행하기
