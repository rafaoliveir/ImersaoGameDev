class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }
  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao()
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    //posicionamento (primeiros parametros:eixo x e y) e tamanho do personagem
    //matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 50, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 45, 52, 52, 104, 104, 8);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 100, 100, 75, 200, 150, 8);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 18, 200, 200, 400, 400, 15);

    inimigos.push(inimigo)
    inimigos.push(inimigoTroll)
    inimigos.push(inimigoVoador)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura
    cenario.exibe();
    cenario.move();
    vida.draw()
    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe()
    inimigo.move()

    if (inimigoVisivel) {
      this.indice++
      inimigo.aparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      personagem.tornarInvencivel()
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3)
        textFont(fonteTelaInicial);
        textAlign('center');
        fill(255, 192, 193);
        textSize(60);
        strokeWeight(7);
        stroke(2,0,0);
        text('pressione enter para jogar novamente', width/2, height/3 * 1.8)
        somDoJogo.stop();
        noLoop()
        endOfGame = true;


      }
    }
  }
}