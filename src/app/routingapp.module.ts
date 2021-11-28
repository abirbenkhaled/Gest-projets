import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetComponent } from './projet/projet.component';

import { ProfilComponent } from './profil/profil.component';

import { WorkspaceComponent } from './workspace/workspace.component';

import { AdminListProjetComponent } from './admin-list-projet/admin-list-projet.component';



const routes:Routes = [
  {path:'projet',component:ProjetComponent},



  {path:'profil',component:ProfilComponent},


  {path:'workspace', component:WorkspaceComponent},

  {path:'admin-list-projet' , component:AdminListProjetComponent}
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
