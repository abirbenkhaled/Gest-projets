import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetComponent } from './projet/projet.component';

import { ProfilComponent } from './profil/profil.component';

import { WorkspaceComponent } from './workspace/workspace.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ProjetListCardsComponent } from './projet-list-cards/projet-list-cards.component';

import { AdminListProjetComponent } from './admin-list-projet/admin-list-projet.component';



import { NotFoundComponent } from './not-found/not-found.component';

import { HomeComponent } from './home/home.component';



const routes:Routes = [
  {path:'home',component:HomeComponent},
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'projet',component:ProjetComponent},
  {path:'projet-list-cards',component:ProjetListCardsComponent},

  {path:'profil',component:ProfilComponent},

  {path:'workspace', component:WorkspaceComponent},


  {path:'ListUser',component:ListUserComponent},
  {path:'admin-list-projet' , component:AdminListProjetComponent}
];


  


  




  


  
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: [
     ProjetComponent,
     ProfilComponent,
     WorkspaceComponent,
     HomeComponent,
     NotFoundComponent,
     ListUserComponent,
     AdminListProjetComponent,
     ProjetListCardsComponent
    ]
})
export class RoutingappModule { }
