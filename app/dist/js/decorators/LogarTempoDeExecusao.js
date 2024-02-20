export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propetyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propetyKey}: Tempo de execucução ${t2 - t1 / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=LogarTempoDeExecusao.js.map