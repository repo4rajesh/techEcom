/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class ForgotForm {
  // Declare Default Params
  public email: String;
  constructor(forgotForm: any) {
    this.email = forgotForm.email || '';
  }
}
