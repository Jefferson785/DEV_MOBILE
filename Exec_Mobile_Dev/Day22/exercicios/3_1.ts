import { Cliente } from './3_1_cliente';
import { Pedido } from './3_1_pedido';

const cliente1 = new Cliente('Jefferson Nascimento', 'rm94597@fiap.com.br');
const pedido1 = new Pedido(cliente1, 'Televisão', 4500.00); pedido1.exibirInformacoes();

const cliente2 = new Cliente('Enzo Malacrida', 'rm93437@fiap.com.br');
const pedido2 = new Pedido(cliente2, 'Computador', 6500.00); pedido2.exibirInformacoes();