export function escape(target, propetyKey, descriptor) {
    const MetodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = MetodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map