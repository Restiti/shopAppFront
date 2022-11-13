import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/home.service';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ProductControlComponent } from './product-control/product-control.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'product/:id', component: ProduitDetailsComponent },
  { path: "", component: HomeComponent},
  { path: "admin", component: ProductControlComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ProduitDetailsComponent,
    ProductControlComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  ,
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
