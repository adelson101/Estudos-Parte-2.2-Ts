export class View {
    constructor(select) {
        const elemento = document.querySelector(select);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${select} não existe no DOM. Verifique`);
        }
    }
    Update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
