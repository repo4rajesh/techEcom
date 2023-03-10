/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
import { AppState } from '../../../../app.state.interface';
import { createSelector } from 'reselect';
import * as fromCustomerLayout from './layout.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functions
 */
export const getCustomerLayoutState = (state: AppState) => state.customerLayout;


export const customerCount = createSelector(
  getCustomerLayoutState,
  fromCustomerLayout.customerCount
);
export const customerCountLoading = createSelector(
  getCustomerLayoutState,
  fromCustomerLayout.customerCountLoading
);
export const customerCountLoaded = createSelector(
  getCustomerLayoutState,
  fromCustomerLayout.customerCountLoaded
);
export const customerCountFailed = createSelector(
  getCustomerLayoutState,
  fromCustomerLayout.customerCountFailed
);
