class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message); this.name = 'EmailInvalido'; 
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Valor inválido: O email deve conter o caractere "@"');
    }

    console.log('Email válido!');
}

try {
    verificarEmail('usuario.com'); 
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message); 
    }
}