import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';


const routes:Routes = [
  {path:'projet',component:ProjetComponent},
]

  
  
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: [
     ProjetComponent,
    ]
})
export class RoutingappModule { }
