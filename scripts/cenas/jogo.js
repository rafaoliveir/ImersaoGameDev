class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }
setup(){
cenario = new Cenario(imagemCenario, 3);  
  pontuacao = new Pontuacao()
  //posicionamento (primeiros parametros:eixo x e y) e tamanho do personagem
  //matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 50, 110, 135, 220, 270);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 45, 52, 52, 104, 104, 8, 100);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 100, 100, 75, 200, 150, 8, 100);
  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 18, 200,200,400,400, 8, 100);

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
    const inimigo = inimigos[this.inimigoAtual]
    const inimigoVisivel = inimigo.x < -inimigo.largura
    cenario.exibe();
    cenario.move();

    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();

    inimigo.exibe()
    inimigo.move()
    
    if(inimigoVisivel) {
      this.inimigoAtual++
      if(this.inimigoAtual > 2) {
        this.inimigoAtual = 0
      }
      inimigo.alteraVelocidade(parseInt(random(10, 20)))
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width/2 - 200, height/3)      
       noLoop()
    }
  }
}