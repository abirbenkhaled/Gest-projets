import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetComponent } from './projet/projet.component';
<<<<<<< HEAD
import { ProfilComponent } from './profil/profil.component';
=======
import { WorkspaceComponent } from './workspace/workspace.component';
>>>>>>> 657e3f754cd76e383764f39ae834be795c0aa67e


const routes:Routes = [
  {path:'projet',component:ProjetComponent},
<<<<<<< HEAD
  {path:'profil',component:ProjetComponent}
];
=======
  {path:'workspace', component:WorkspaceComponent}
]
>>>>>>> 657e3f754cd76e383764f39ae834be795c0aa67e

  
  
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: [
     ProjetComponent,
     ProfilComponent
    ]
})
export class RoutingappModule { }
