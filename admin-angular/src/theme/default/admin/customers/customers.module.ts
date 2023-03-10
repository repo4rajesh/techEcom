/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { CustomerLayoutComponent } from './components/layout/layout.component';
import { CustomerHeaderComponent } from './components/header/header.component';
// Routing Module
import { CustomersRoutingModule } from './customers.routing';

// Shared Module
import { MaterialModule } from '../../default.material.module';
import { TranslateModule } from '@ngx-translate/core';

// Store Actions
import { EffectsModule } from '@ngrx/effects';
import { LayoutService } from '../../../../core/admin/Customers/layout/layout.service';
import { LayoutSandbox } from '../../../../core/admin/Customers/layout/layout.sandbox';
import { LayoutEffects } from '../../../../core/admin/Customers/layout/effects/layout.effect';

import { ComponentsModule } from '../shared/components';


@NgModule({
  declarations: [
    CustomerLayoutComponent,
    CustomerHeaderComponent,

  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DefaultCommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([LayoutEffects]),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  providers: [LayoutService, LayoutSandbox],
  bootstrap: [],
  entryComponents: []
})
export class CustomersModule {}
