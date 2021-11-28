import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetComponent } from './projet/projet.component';

import { ProfilComponent } from './profil/profil.component';

import { WorkspaceComponent } from './workspace/workspace.component';
import { ListUserComponent } from './list-user/list-user.component';



const routes:Routes = [
  {path:'projet',component:ProjetComponent},




  {path:'profil',component:ProfilComponent},


  {path:'workspace', component:WorkspaceComponent},
  {path:'ListUser',component:ListUserComponent}
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
