/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { SeoComponent } from './seo.component';

const seoRoutes: Routes = [{ path: '', component: SeoComponent }];

@NgModule({
  imports: [RouterModule.forChild(seoRoutes)],
  exports: [RouterModule]
})
export class SeoRouting {}
