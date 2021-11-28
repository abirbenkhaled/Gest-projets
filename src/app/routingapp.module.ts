import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetComponent } from './projet/projet.component';

import { ProfilComponent } from './profil/profil.component';

import { WorkspaceComponent } from './workspace/workspace.component';



const routes:Routes = [
  {path:'projet',component:ProjetComponent},


  {path:'profil',component:ProjetComponent},


  {path:'workspace', component:WorkspaceComponent}
];


  
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: [
     ProjetComponent,
     ProfilComponent
    ]
})
export class RoutingappModule { }
