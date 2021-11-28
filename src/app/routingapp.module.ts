import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet/projet.component';
import { WorkspaceComponent } from './workspace/workspace.component';


const routes:Routes = [
  {path:'projet',component:ProjetComponent},
  {path:'workspace', component:WorkspaceComponent}
]

  
  
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: [
     ProjetComponent,
    ]
})
export class RoutingappModule { }
