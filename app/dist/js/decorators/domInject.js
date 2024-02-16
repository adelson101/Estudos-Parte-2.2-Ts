export function domInject(select) {
    return function (target, propetyKey, descriptor) {
        const ModeloOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = descriptor.value;
            return retorno;
        };
        return descriptor;
    };
}
