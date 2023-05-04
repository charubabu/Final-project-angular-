import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DetailsComponent } from './userhome/details/details.component';
import { ProductComponent } from './userhome/product/product.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from '../shared/mainpage/mainpage.component';
import { MaterialModule } from '../material/material.module';
import { SupportedDietComponent } from './userhome/supported-diet/supported-diet.component';
import { BoxComponent } from './userhome/supported-diet/box/box.component';
import { CategoryComponent } from './userhome/category/category.component';
import { CategoryBoxComponent } from './userhome/category/category-box/category-box.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"sup",
      component: SupportedDietComponent
    },
    {
      path : ':id',
      component : DetailsComponent}

  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    DetailsComponent,
    ProductComponent,
    ProductrowComponent,
    SupportedDietComponent,
    BoxComponent,
    CategoryComponent,
    CategoryBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [RouterModule]
})
export class UserModule { }
