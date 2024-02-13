export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(select: string) {
        this.elemento = document.querySelector(select);
    }

    protected abstract template(model: T ): string;

    public Update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}