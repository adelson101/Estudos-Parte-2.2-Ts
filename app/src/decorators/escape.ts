export function escape(
    target: any,
    propetyKey: string,
    descriptor: PropertyDescriptor
) {
    const MetodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let retorno = MetodoOriginal.apply(this,args);
        if (typeof retorno==='string'){
             retorno = retorno.replace(/<script>[\s\S]*?<\/script>/,''); 
        }
        return retorno;
    }
    return descriptor;
}