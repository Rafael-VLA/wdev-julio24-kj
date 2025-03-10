import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateEditPageComponent } from './pages/create-edit-page/create-edit-page.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    CreateEditPageComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    FormsModule,
  ]
})
export class EmpleadoModule { }
