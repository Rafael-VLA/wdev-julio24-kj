import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'empleado-create-edit-page',
  standalone: false,
  
  templateUrl: './create-edit-page.component.html'
})
export class CreateEditPageComponent implements OnInit {

  public id: (string | null) = null;

  constructor(
    private route: ActivatedRoute
  ){

  }

  get isEdit():boolean { // Determinar si se intenta agregar o editar un empleado
    return this.id != null; // Cuando exista un valor en el id
  }
  
  ngOnInit() {
    const id = this.route.snapshot.queryParams["id"];
    this.id = id === undefined ? null : id;
  }

}
