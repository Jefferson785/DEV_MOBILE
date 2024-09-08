namespace Financeiro {
   
    export function calcularImposto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    export function calcularDesconto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    export class Orcamento {
      valorTotal: number; itens: string[];
  
      constructor(valorTotal: number, itens: string[]) {
        this.valorTotal = valorTotal; this.itens = itens;
      }
  
      aplicarImpostoEDesconto(impostoTaxa: number, descontoTaxa: number): void {
        const imposto = Financeiro.calcularImposto(this.valorTotal, impostoTaxa);
        const desconto = Financeiro.calcularDesconto(this.valorTotal, descontoTaxa);
        this.valorTotal += imposto - desconto;
      }
    }
}
  

const meuOrcamento = new Financeiro.Orcamento(4000, ['item1', 'item2']);
console.log(`Valor Inicial: R$${meuOrcamento.valorTotal.toFixed(2)}`);

meuOrcamento.aplicarImpostoEDesconto(10, 25);
console.log(`Valor Após Impostos e Descontos: R$${meuOrcamento.valorTotal.toFixed(2)}`);
