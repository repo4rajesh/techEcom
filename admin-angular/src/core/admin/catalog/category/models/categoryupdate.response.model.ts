/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class CategoryupdateResponseModel {
  public user: any = {};

  constructor(categoryupdateFormResponse: any) {
    this.user = categoryupdateFormResponse || '';
  }
}
