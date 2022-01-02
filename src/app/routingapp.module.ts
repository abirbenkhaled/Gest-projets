import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';

import { ProfilComponent } from './profil/profil.component';

import { WorkspaceComponent } from './workspace/workspace.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ProjetListCardsComponent } from './projet-list-cards/projet-list-cards.component';

import { AdminListProjetComponent } from './admin-list-projet/admin-list-projet.component';



import { NotFoundComponent } from './not-found/not-found.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
//import { AddDetailsComponent } from './add-details/add-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




const routes:Routes = [
  {path:'home',component:HomeComponent},
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'projet',component:ProjetComponent},
  {path:'projet-list-cards',component:ProjetListCardsComponent},

  {path:'profil',component:ProfilComponent},
  {path:'login',component:LoginComponent},
  //{path:'register',component:RegisterComponent},
  {path:'workspace', component:WorkspaceComponent},
  //{path:'addDetails/:_id', component:AddDetailsComponent},


  {path:'ListUser',component:ListUserComponent},
  {path:'admin-list-projet' , component:AdminListProjetComponent}
];


  @NgModule({
    imports:[RouterModule.forRoot(routes),FormsModule,BrowserModule],
    exports:[RouterModule],
    declarations: [
     ProjetComponent,
     ProfilComponent,
     WorkspaceComponent,
     HomeComponent,
     NotFoundComponent,
     ListUserComponent,
     AdminListProjetComponent,
     ProjetListCardsComponent,
     LoginComponent,
     RegisterComponent,
     //LoginComponent,
    // RegisterComponent,
     //AddDetailsComponent,
     
    ]
})
export class RoutingappModule { }
