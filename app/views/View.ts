export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(select: string, escapar ?: boolean) {
        const elemento = document.querySelector(select);
        
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${select} não existe no DOM. Verifique`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T ): string;

    public Update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }
}