export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(select: string) {
        this.elemento = document.querySelector(select);
    }

    abstract template(model: T ): string;

    Update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}