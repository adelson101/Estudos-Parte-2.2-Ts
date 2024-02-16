export function domInject(select: string) {
    return function (
        target: any,
        propetyKey: string,
        descriptor : PropertyDescriptor
    ) {
        const ModeloOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const retorno = descriptor.value;
            
            return retorno;
        }
    
        return descriptor;
}
}