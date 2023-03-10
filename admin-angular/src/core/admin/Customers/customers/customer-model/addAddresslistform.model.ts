/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class AddAddressListForm {
  public limit: number;
  public offset: number;
  public count: string;
  public customerId: number;

  constructor(addaddresslist: any) {
    this.limit = addaddresslist.limit || 0;
    this.offset = addaddresslist.offset || 0;
    this.count = addaddresslist.count || 0;
    this.customerId = addaddresslist.customerId || 0;
  }
}
