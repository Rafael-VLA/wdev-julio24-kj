import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from './shared/pages/no-page/no-page.component';
import { HomeComponent } from './shared/pages/home/home.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "empleado",
    loadChildren: () => import('./empleado/empleado.module').then((m) => m.EmpleadoModule)
  },
  {
    path: "**",
    component: NoPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
