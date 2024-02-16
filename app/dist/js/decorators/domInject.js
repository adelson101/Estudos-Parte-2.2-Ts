export function domInject(seletor) {
    return function (target, propetyKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        console.log(target);
    };
}
