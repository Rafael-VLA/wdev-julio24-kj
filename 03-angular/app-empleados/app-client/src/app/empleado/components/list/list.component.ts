import { Component, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee-response.interface';
import { EmpleadoApiService } from '../../services/empleado-api.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'empleado-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public isSubmitting: boolean = false;
    private loadingBarRef;

    @Input()
    public columns: string[] = [];

    @Input()
    public records: Employee[] = [];

    constructor(
      private empleadoApi:EmpleadoApiService,
      loadingBar: LoadingBarService
    ){
      this.loadingBarRef = loadingBar.useRef();
    }

    public deleteEmployee(id:string){

      const result = confirm(`¿Estás seguro que deseas eliminar al empleado con id ${id}?`);

      if(result === false) return;

      this.loadingBarRef.start();
      this.isSubmitting = true;

      this.empleadoApi.deleteEmployee(id).subscribe({
        next: (data) => {

          if(data.ok){
            this.records = this.records.filter(x => x.id?.toString() != id)
            console.log(data)
          }

        },
        error: (err) => {
          console.error(err.message)
        },
        complete: () => {
          this.loadingBarRef.complete();
          this.isSubmitting = false;
        }
      })
    }
    
}
