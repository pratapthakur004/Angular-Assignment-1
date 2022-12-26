import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditComponent } from './components/edit/edit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'add', component:AddProductComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'details/:id', component:ProductDetailsComponent},
  {path:'viewproduct/:id', component:ViewProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
