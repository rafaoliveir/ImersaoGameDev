class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade
    this.x = width

    //ajustando altura dos inimigos em relação ao chão do novo bg
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
  }

  move() {
    this.x = this.x - this.velocidade

    //if(this.x < -this.largura){
    // this.x = width
  }

  aparece() {
    this.x = width
  }
  //}
  //alteraVelocidade(novaVelocidade) {
  // this.velocidade = novaVelocidade
  //}
}