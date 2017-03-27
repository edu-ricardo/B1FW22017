function Ociosidade(descricao, ttotal, tuso) {
    this.descricao = descricao;
    this.ttotal = ttotal;
    this.tuso = tuso;

    this.calculaOciosidade = function () {
        r = (( this.ttotal - this.tuso ) / this.ttotal)*100 ; 
    }
}