window.onload = function () {
  const bgColor1 = document.querySelectorAll('.color')[0];
  bgColor1.style.backgroundColor = bgColor1.id;
  const bgColor2 = document.querySelectorAll('.color')[1];
  bgColor2.style.backgroundColor = bgColor2.id;
  const bgColor3 = document.querySelectorAll('.color')[2];
  bgColor3.style.backgroundColor = bgColor3.id;
  const bgColor4 = document.querySelectorAll('.color')[3];
  bgColor4.style.backgroundColor = bgColor4.id;
};
const ulistC = document.createElement('ul');
ulistC.id = 'linha';
document.getElementById('pixel-board').appendChild(ulistC);

for (let i = 0; i < 5; i += 1) {
  const list = document.createElement('li');
  list.id = i;

  document.getElementById('linha').appendChild(list);
}
for (let i = 0; i < 5; i += 1) {
  for (let i2 = 0; i2 < 5; i2 += 1) {
    const divs = document.createElement('div');
    divs.className = 'pixel';

    document.getElementById(i).appendChild(divs);
  }
}