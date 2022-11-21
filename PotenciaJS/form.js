class Potencia {
    constructor(base, exp){
        this.base = base;
        this.exp = exp;
        // this.res = Math.pow(this.base, this.exp) 
    }

    calcPotencia() {
        this.res = Math.pow(this.base, this.exp);
    }

    showPotencia() {
       return 'El resultado es: ' + this.res
    }
}


$("#calcularPotencia").click(function(){
    var base = document.getElementsByName('base')[0].value;
    var exp = document.getElementsByName('exponente')[0].value;
    const pot = new Potencia(base, exp);

    var showResult = document.getElementById('showResult'), showResultText = document.getElementById('showResultText');
    if(!showResult.classList.contains('show')) showResult.classList.add('show');

    pot.calcPotencia()
    showResultText.innerHTML = pot.showPotencia()
});