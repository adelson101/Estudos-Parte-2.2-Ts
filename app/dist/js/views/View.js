export class View {
    constructor(select, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(select);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${select} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    Update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
