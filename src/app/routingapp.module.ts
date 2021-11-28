import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
{path:'projetComponent' }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingappModule { }
