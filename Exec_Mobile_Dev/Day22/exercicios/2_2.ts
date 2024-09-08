class ContaBancaria {
    titular: string; saldo: number;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular; this.saldo = saldo;
    }
  
    exibirSaldo(): void{
        console.log(`Titular: ${this.titular}`); console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
    }
}
  
  
class ContaCorrente extends ContaBancaria{
    limiteCredito: number;

    constructor(titular: string, saldo: number, limiteCredito: number) {
        super(titular, saldo); this.limiteCredito = limiteCredito;
      }

    exibirSaldo(): void {
        console.log(`Titular: ${this.titular}`); console.log(`Saldo: R$${(this.saldo + this.limiteCredito).toFixed(2)}`);
    }
}
  
const conta1 = new ContaBancaria('William nascimento', 5000);
console.log('\nConta Corrente:'); conta1.exibirSaldo();

const conta2 = new ContaCorrente('Phelipe Nascimento', 1000, 500);
console.log('\nConta Corrente:'); conta2.exibirSaldo();