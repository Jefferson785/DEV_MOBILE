function TempoExec(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.time(propertyKey); const resultado = metodoOriginal.apply(this, args);  
        console.timeEnd(propertyKey); 
        return resultado;
    };
    return descriptor;
}

class Calculadora {
    @TempoExec
    somarNumeros({ array }: { array: number[] }): number {
        return array.reduce((a, b) => a + b, 0);  
    }
}

const calc = new Calculadora();
calc.somarNumeros({ array: [1, 2, 3, 4, 5] });
