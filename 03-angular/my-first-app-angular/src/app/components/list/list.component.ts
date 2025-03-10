import { Component } from '@angular/core';
import { todos } from '../../data/todos';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html'
})
export class ListComponent {
  public frutas:string[] = ["Uva", "Manzana", "Piña"];
  public todos = todos;
}
