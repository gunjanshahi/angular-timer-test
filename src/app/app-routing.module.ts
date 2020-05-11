import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HelloComponent },
  {
    path: 'timer',
    loadChildren: './modules/test-timer/test-timer.module#TestTimerModule'
  },
  {
    path: 'list',
    loadChildren: './modules/test-product/test-product.module#TestProductModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }