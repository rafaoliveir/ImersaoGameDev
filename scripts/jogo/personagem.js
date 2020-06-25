class Personagem{
  constructor(imagem){
    this.imagem = imagem;
 this.matriz = [
    [0,0],  [220,0],  [440,0], [660,0],
    [0,270], [220,270], [440,270], [660,270],
    [0,540], [220,540], [440,540], [660,540],
    [0,810], [220,810], [440,810], [660,810]
  ] //matriz para movimentar o personagem
    //animação das 16 imagens do sprite
    this.frameAtual = 0
    
  }
  
  
      exibe(){
        //posicionamento (primeiros parametros:eixo x e y) e tamanho do personagem
      image(this.imagem,0, height -182, 110, 135,this.matriz[this.frameAtual][0],this.matriz[this.frameAtual][1],220, 270);
        this.anima()
      
      }
  //movimentação do personagem
  anima(){
    this.frameAtual++
    
    if(this.frameAtual >= this.matriz.length -1){
      this.frameAtual =0

       
       
       }
  
  }
  
  
}