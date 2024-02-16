    export function inspect(
        target: any,
        propetyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`--- Metodo ${propetyKey}`);
            console.log(`------ Parâmetros ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this,args);
            console.log(`--------- Retorno ${JSON.stringify(retorno)}`);
            return retorno;
        }
        return descriptor;
    }