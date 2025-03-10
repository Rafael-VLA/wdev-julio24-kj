import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html'
})
export class ProductComponent {
  public flagProductoVisible:boolean = true; // si es true, se esconde

  @Input()
  public title: string = "[No title]";

  public setFlag(){
    
    if(this.flagProductoVisible === true){
      this.flagProductoVisible = false;
      return;
    }

    if(this.flagProductoVisible == false){
      this.flagProductoVisible = true;
      return;
    }

    //this.flagProductoVisible = !this.flagProductoVisible; // trua a false y de false a true en cada ejecución

  }

  get textBtn():string {

    if(this.flagProductoVisible === true){ // si this.flagProductoVisible es true
      return "Esconder producto";
    } else { // si this.flagProductoVisible es false
      return "Ver producto";
    }

  }
}
