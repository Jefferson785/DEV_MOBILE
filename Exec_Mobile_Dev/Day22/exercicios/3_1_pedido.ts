import { Cliente } from './3_1_cliente';

export class Pedido { constructor( public cliente: Cliente, public produto: string, public valor: number) { }

  exibirInformacoes(): void {
    console.log(`\nNome do Cliente: ${this.cliente.nome}`);
    console.log(`Produto: ${this.produto}`);
    console.log(`Valor Total: R$${this.valor.toFixed(2)}\n`);
  }
}