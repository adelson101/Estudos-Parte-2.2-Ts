export function domInject(seletor: string) {
    return function ( target: any, propetyKey: string ) {
        let elemento:HTMLElement;
        const getter = function () {
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
       }
       Object.defineProperty(target,propetyKey, { get: getter });
       
    }
}

