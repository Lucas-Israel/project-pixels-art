const cor = document.querySelectorAll('.color');
const container = document.querySelector('#pixel-board');
const botoes = document.getElementById('botoes');
const corPal = document.getElementById('color-palette');
const corBody = document.getElementById('body');

cor[0].style.backgroundColor = 'black';

function corNaBox(corN) {
  const corX = corN;
  const n = Math.round(Math.random() * 256);
  const m = Math.round(Math.random() * 256);
  const o = Math.round(Math.random() * 256);
  corX.style.backgroundColor = `rgb(${n}, ${m}, ${o})`;
}
corNaBox(cor[1]);
corNaBox(cor[2]);
corNaBox(cor[3]);
corNaBox(corBody);

function criarPixels(size) {
  container.style.setProperty('--size', size);
  for (let i = 0; i < size * size; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    container.appendChild(div);
  }
}

function seletorDeClasse() {
  corPal.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.className === 'color') {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

function pintadorDePixel(size) {
  for (let index = 0; index < size * size; index += 1) {
    const addCorPix = document.getElementsByClassName('pixel')[index];
    addCorPix.addEventListener('click', (event) => {
      const evento = event;
      const selected = document.querySelector('.selected');
      evento.target.style.backgroundColor = selected.style.backgroundColor;
    });
  }
}

function criadorDeBotao() {
  for (let index = 0; index < 1; index += 1) {
    const createButton = document.createElement('button');
    botoes.appendChild(createButton);
  }
}

function criaAbaInput() {
  const createInput = document.createElement('input');
  createInput.type = 'number';
  createInput.id = 'board-size';
  createInput.placeholder = 'Entre 5 ~ 50';
  createInput.min = 1;
  botoes.appendChild(createInput);
}

function nomeando() {
  const botao = document.querySelectorAll('button');
  botao[0].id = 'clear-board';
  botao[0].innerText = 'Limpar';
  botao[1].id = 'generate-board';
  botao[1].innerText = 'Aumentar, VQV';
}

function limpando() {
  const botaoL = document.getElementById('clear-board');
  botaoL.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((event) => {
      const evento = event;
      evento.style.backgroundColor = 'white';
    });
  });
}

function deleta() {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((event) => {
    const evento = event;
    evento.remove();
  });
}

function alertaDoInput() {
  const ouveImput = document.querySelector('#board-size');
  const botaoGenerate = document.querySelector('#generate-board');
  botaoGenerate.addEventListener('click', () => {
    if (ouveImput.value < 1) {
      alert('Board inválido!');
    }
    if (ouveImput.value < 5) {
      ouveImput.value = 5;
    }
    if (ouveImput.value > 50) {
      ouveImput.value = 50;
    }
    deleta();
    criarPixels(ouveImput.value);
    pintadorDePixel(ouveImput.value);
  });
}

seletorDeClasse();
criadorDeBotao();
criaAbaInput();
criadorDeBotao();
nomeando();
alertaDoInput();
criarPixels(5);
pintadorDePixel(5);
limpando();
