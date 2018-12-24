import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'user/add', component:AddUserComponent},
  {path:'product', component:ProductComponent},
  {path:'product/addproduct', component:AddProductComponent},
  {path:'order', component:OrderComponent},
  {path:'order/addorder',component:AddOrderComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'post',component:PostComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
