import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SandeepComponent } from './sandeep/sandeep.component';
import { Sandeep1Component } from './sandeep1/sandeep1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerAuthComponent,
    HeaderComponent,
    HomeComponent,
    SellerHomeComponent,
    SandeepComponent,
    Sandeep1Component,
    ParentComponent,
    ChildComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
