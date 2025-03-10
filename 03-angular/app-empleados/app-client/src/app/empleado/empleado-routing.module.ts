import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CreateEditPageComponent } from "./pages/create-edit-page/create-edit-page.component";

const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        pathMatch: "full"
    },
    {
        path: "create-edit",
        component: CreateEditPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EmpleadoRoutingModule {

} 