import { Component, OnInit } from '@angular/core';
import { EmpleadoApiService } from '../../services/empleado-api.service';
import { Employee } from '../../interfaces/employee-response.interface';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'empleado-home-page',
  standalone: false,

  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  public columns: string[] = [];
  public records: Employee[] = []; 
  public loadingBarRef;

  constructor(
    private empleadoApi: EmpleadoApiService,
    loadingBar: LoadingBarService  
  ) {
    this.loadingBarRef = loadingBar.useRef();
  }

  ngOnInit(): void {
    this.loadingBarRef.start();

    this.empleadoApi.getEmployees().subscribe({
      next: (data) => { // employes

        if (data.length > 0) { // 1 > 0 si al menos existe un valor
          const firstValue = data[0];
          this.columns = Object.keys(firstValue).map((column) => {

            if(column === "apellido1"){
              return "Primer apellido"
            }

            if(column === "apellido2"){
              return "Segundo apellido"
            }


            return column;
          });
          this.records = data.sort((a, b) => (a.id || 0) - (b.id || 0)); // por id
          //this.records = data.sort((a, b) => a.nombre.localeCompare(b.nombre, "es")); // por nombre
        }

      },
      error: (err) => {
        console.log("Algo pasó")
      },
      complete: () => {
        this.loadingBarRef.complete();
      }
    })
  }
}
