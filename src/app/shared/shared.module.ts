import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './mainpage/header/header.component';
import { FooterComponent } from './mainpage/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportedDietComponent } from '../user/userhome/supported-diet/supported-diet.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    MenuOutlineComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MainpageComponent]

})
export class SharedModule { }
