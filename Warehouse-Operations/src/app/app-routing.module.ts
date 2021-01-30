import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { AboutComponent } from './core/navbar/about/about.component';
import { HomeComponent } from './core/navbar/home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentComponent } from './document/document.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'documents', component: DocumentsComponent},
  {path:'documents/:id', component: DocumentComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
