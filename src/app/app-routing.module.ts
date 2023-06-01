import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './SHARED/Components/home/home.component';
import { NavbarComponent } from './SHARED/Components/navbar/navbar.component';
import { SeparacionArchivosComponent } from './SHARED/Components/separacion-archivos/separacion-archivos.component';
import { NotFoundComponent } from './HELPS/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Navbar', component: NavbarComponent },
  { path: 'Separacion', component: SeparacionArchivosComponent },
  { path: '**', component: NotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
