import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'reviews' , component:ReviewsComponent},
  {path:'contact' , component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
