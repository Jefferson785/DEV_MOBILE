import { Pessoa } from '../../pessoa';

type Empregado = {
    empresa: string;
    salario: number;
};
  
type PessoaEmpregado = Pessoa & Empregado;
  
function exibirDetalhesPessoaEmpregado(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.name}\nIdade: ${pessoaEmpregado.age}\nEmpresa: ${pessoaEmpregado.empresa}\nSalário: R$${pessoaEmpregado.salario}`;
}
  
const pessoaEmpregado: PessoaEmpregado = {
    name: "Jefferson", age: 21, empresa: "Nava Technology for Business", salario: 2400
};
  
console.log(exibirDetalhesPessoaEmpregado(pessoaEmpregado));
  