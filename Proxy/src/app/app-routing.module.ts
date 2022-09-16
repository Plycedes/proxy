import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  //{path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'navigation', component:NavComponent},
  {path:'feed', component:FeedComponent},
  {path:'academics', component:AcademicsComponent},
  {path:'results', component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
