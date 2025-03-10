import { Component, Input } from '@angular/core'

@Component({
    selector: "app-counter", // [nombre modulo]-[nombre componente]
    standalone: false,

    templateUrl: "./counter.component.html",
    styleUrl: "./counter.component.css" 
})
export class CounterComponent {

    @Input() // Le indica a angular que esta propiedad será un prop (valor foraneo)
    public count: number = 0; // => count es una propiedad de la clase CounterComponent 

    @Input()
    public title: string = "";

    @Input()
    public incrementBy: number = 1;

    @Input()
    public description: string = "";

    // public duplicateCount(): number { // => Es un método
    //     return this.count * 2; 
    // }

    get duplicateCount(): number { // El get se comporta como una propieda
        return this.count * 2; 
    }

    get hayDescripcion(): boolean{

        if(this.description.length > 0){ // Si hay texto
            return true; // dame un true
        } else {
            return false // dame un false
        }

    }

    public increment(): void {
        this.count = this.count + this.incrementBy; // 20 + 1 = 21
    }

    public decrement(): void { // No retorna nada => ejecutan solo lógica
        this.count -= this.incrementBy;

        if(this.count < 0) { // si es un valor negativo
            this.count = 0; // pasa el valor a 0
        }

        // if(this.count > 0){
        //     this.count -= 2; // this.count = this.count + 1;
        // }
    }

}

