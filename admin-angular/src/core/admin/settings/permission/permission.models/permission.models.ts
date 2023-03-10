/*
* spurtcommerce
* http://www.spurtcommerce.com
*
* Copyright (c) 2021 Piccosoft Software Labs Pvt Ltd
* Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
* Licensed under the MIT license.
*/
export class PermissionForm {
  public refType: number;
  public permission: String;
  public refId: number;

  constructor(permissionForm: any) {
    this.refType = permissionForm.refType || '';
    this.permission = permissionForm.permission;
      this.refId = permissionForm.refId || '';
  }
}
