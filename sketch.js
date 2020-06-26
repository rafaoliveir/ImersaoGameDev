let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;
let somDoPulo;
let imagemInimigoVoador;
let imagemGameOver;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoTroll;
let inimigoVoador;
let pontuacao;

//matriz para movimentar o personagem e inimigos

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];
const matrizInimigoTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const inimigos = [];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  //posicionamento (primeiros parametros:eixo x e y) e tamanho do personagem
  //matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay
  personagem = new Personagem(
    matrizPersonagem,
    imagemPersonagem,
    0,
    50,
    110,
    135,
    220,
    270
  );
  const inimigo = new Inimigo(
    matrizInimigo,
    imagemInimigo,
    width - 52,
    45,
    52,
    52,
    104,
    104,
    8,
    100
  );
  const inimigoVoador = new Inimigo(
    matrizInimigoVoador,
    imagemInimigoVoador,
    width - 52,
    100,
    100,
    75,
    200,
    150,
    8,
    1500
  );
  const inimigoTroll = new Inimigo(
    matrizInimigoTroll,
    imagemInimigoTroll,
    width,
    18,
    200,
    200,
    400,
    400,
    8,
    2500
  );

  inimigos.push(inimigo);
  inimigos.push(inimigoTroll);
  inimigos.push(inimigoVoador);

  frameRate(40);
  somDoJogo.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  /* inimigo.exibe();
  inimigo.move();
  
  inimigoVoador.exibe();
  inimigoVoador.move();
  
  inimigoTroll.exibe();
  inimigoTroll.move(); */

  inimigos.forEach((inimigo) => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      console.log('colidiu');
      image(imagemGameOver, width / 2 - 200, height / 3);

      noLoop();
    }
  });
}
