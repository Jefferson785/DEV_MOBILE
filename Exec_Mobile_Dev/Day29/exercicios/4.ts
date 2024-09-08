async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; 

            if (sucesso) {
                resolve('Dados recebidos com Sucesso');
            } else {
                reject('Falha na busca de dados');
            }
        }, 2000);  
    });
}

async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI(); console.log(dados); 
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca();