export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(select: string) {
        const elemento = document.querySelector(select);
        
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${select} não existe no DOM. Verifique`);
        }
    }

    protected abstract template(model: T ): string;

    public Update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}