import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';

const routes: Routes = 
[
  {path:'Bienvenido',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'registro',component:RegisterComponent },
  {path:'lista_de_usuarios',component:ListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
