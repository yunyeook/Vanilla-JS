const h1 = document.querySelector('div h1');
function handleH1Click() {
  const clickedClass = 'active'; //수정하기 편하므로 변수로 사용하기!!
  // if (h1.className === clickedClass) {
  //   h1.className = '';
  // } else {
  //   h1.className = clickedClass;
  // }

  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  //=> 한줄로 바꿀수 있음.
  h1.classList.toggle('active');
}

h1.addEventListener('click', handleH1Click);
