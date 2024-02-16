export function domInject(seletor: string) {
    return function ( target: any, propetyKey: string ) {
        
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
       }
       console.log(target);
       
       
    }
}

