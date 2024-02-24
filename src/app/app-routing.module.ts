import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ContactSellerPageComponent } from './contact-seller-page/contact-seller-page.component';

const routes: Routes = [
  { path:'', redirectTo: '/listings', pathMatch:'full'},
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  { path: 'listings/:id', component: ListingDetailsPageComponent },
  { path: 'contact/:id', component: ContactSellerPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
