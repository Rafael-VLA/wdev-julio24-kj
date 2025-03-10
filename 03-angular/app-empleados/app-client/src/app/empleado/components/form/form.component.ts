import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../interfaces/employee-response.interface';
import { EmpleadoApiService } from '../../services/empleado-api.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

const INITIAL_VALUE = {
  nombre: "",
  apellido1: "",
  apellido2: "",
  salario: 0,
  puesto: "",
  activo: false,
  correo: ""
};

@Component({
  selector: 'empleado-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  public dataForm: Employee = { ...INITIAL_VALUE };
  public loadingBarRef;
  public isSubmitting: boolean = false;


  @Input()
  public isEdit:boolean = false;

  @Input()
  public idToEdit: (string | null) = null;

  constructor(
    private empleadoApi: EmpleadoApiService,
    loadingBar: LoadingBarService  
  ) {
    this.loadingBarRef = loadingBar.useRef();
  }

  public HandleOnChange(event: Event){
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    (this.dataForm as any)[name] = value;
  }

  public HandleOnSubmit(event: Event){
    event.preventDefault();

    this.loadingBarRef.start();
    this.isSubmitting = true;

    if(this.isEdit){
      this.editEmployee();
    } else {
      this.createEmployee();
    }
        
  }

  public editEmployee(){
    this.empleadoApi.editEmployee(this.dataForm, this.idToEdit || "").subscribe({
      next: (data) => {
        console.log(data); // Simular alerta
      },
      error: (err) => {
        console.error(err.message)
      },
      complete: () => {
        this.loadingBarRef.complete();
        this.isSubmitting = false;
      },
    })
  }

  public createEmployee(){
    this.empleadoApi.createEmployee(this.dataForm).subscribe({
      next: (data) => {
        this.dataForm = { ...INITIAL_VALUE };
        console.log(data); // Simular alerta
      },
      error: (err) => {
        console.error(err.message)
      },
      complete: () => {
        this.loadingBarRef.complete();
        this.isSubmitting = false;
      },
    })
  }

  
  ngOnInit() {
    if(this.isEdit && this.idToEdit != null){
      this.loadingBarRef.start();

      this.empleadoApi.getEmployee(this.idToEdit).subscribe({
        next: (data) => {
          this.dataForm = data;
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



}