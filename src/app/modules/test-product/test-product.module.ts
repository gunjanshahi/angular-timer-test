import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ItemComponent } from './item/item.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductServiceService } from './product-service.service';

const routes: Routes = [
    {
      path: '',
      component: ProductListingComponent,
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductListingComponent, ItemComponent]
})
export class TestProductModule { }