interface Produto {
    nome: string;
    tipo: string;
    valor: number;
}

interface Compra{
    produto: Produto;
    pagamento: FormaPagamento;
}
  
type FormaPagamento = 'cartão cred' | 'cartão deb' |  'dinheiro' | 'pix' ;
  
function exibirDetalhesCompras(compras: Compra[]): string {
    return compras.map(compra => 
        `Produto: ${compra.produto.nome}\nPreço: R$${compra.produto.valor}\ntipo: ${compra.produto.tipo}\nForma de pagamento: ${compra.pagamento}`
    ).join('\n\n');
  }

const compras: Compra[] = [
    {
      produto: {nome: "Televisão", valor: 3500, tipo: "Eletrônicos"}, pagamento: 'dinheiro'
    },

    {
      produto: {nome: "Bolsa Termica", valor: 200, tipo: "Bolsa"}, pagamento: 'cartão deb'
    },

    {
      produto: {nome: "Armario", valor: 3500, tipo: "Móveis"}, pagamento: 'cartão cred'
    },

    {
      produto: {nome: "Chave de fenda", valor: 45, tipo: "Ferramenta"}, pagamento: 'pix'
    }
  ];
  
console.log(exibirDetalhesCompras(compras));
  

  