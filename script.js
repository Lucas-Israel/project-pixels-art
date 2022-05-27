const cor0 = document.querySelectorAll('.color')[0];
const cor1 = document.querySelectorAll('.color')[1];
const cor2 = document.querySelectorAll('.color')[2];
const cor3 = document.querySelectorAll('.color')[3];
const container = document.querySelector('#pixel-board');
const botoes = document.getElementById('botoes');
const corPal = document.getElementById('color-palette');

// chamada de elemento /\

cor0.style.backgroundColor = 'black';

// cores randomicas /\

function corNaBox(cor) {
  const corX = cor;
  const n = Math.round(Math.random() * 256);
  const m = Math.round(Math.random() * 256);
  const o = Math.round(Math.random() * 256);
  corX.style.backgroundColor = `rgb(${n}, ${m}, ${o})`;
}
corNaBox(cor1);
corNaBox(cor2);
corNaBox(cor3);

// randomizador /\

function criarPixels(size) {
  container.style.setProperty('--size', size);
  for (let i = 0; i < size * size; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    container.appendChild(div);
  }
}
// criarPixels(numero);

// criador de pixel /\

function seletorDeClasse() {
  corPal.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.className === 'color') {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
// seletorDeClasse();

// seletor de classe /\

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
// pintadorDePixel(numero);

// pinta os pixels /\

function criadorDeBotao() {
  for (let index = 0; index < 1; index += 1) {
    const createButton = document.createElement('button');
    botoes.appendChild(createButton);
  }
}
// criadorDeBotao();

// cria botoes /\

function criaAbaInput() {
  const createInput = document.createElement('input');
  createInput.type = 'number';
  createInput.id = 'board-size';
  createInput.placeholder = 'Entre 5 ~ 50';
  createInput.min = 1;
  botoes.appendChild(createInput);
}
// criaAbaInput();

// cria aba de input /\

// criadorDeBotao();

// segundo botao /\

function nomeando() {
  const botao = document.querySelectorAll('button');
  botao[0].id = 'clear-board';
  botao[0].innerText = 'Limpar';
  botao[1].id = 'generate-board';
  botao[1].innerText = 'Aumentar, VQV';
}
// nomeando();

// nomeia botoes e input /\

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
// limpando();

// limpa o board /\

function deleta() {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((event) => {
    const evento = event;
    evento.remove();
  });
}

// deleta pixels /\

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
// alertaDoInput();

// ordem

seletorDeClasse();
criadorDeBotao();
criaAbaInput();
criadorDeBotao();
nomeando();
alertaDoInput();
criarPixels(5);
pintadorDePixel(5);
limpando();
