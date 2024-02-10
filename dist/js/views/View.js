export class View {
    constructor(select) {
        this.elemento = document.querySelector(select);
    }
    Update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
