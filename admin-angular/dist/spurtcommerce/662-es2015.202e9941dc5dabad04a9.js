"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[662],{662:function(e,t,n){n.r(t),n.d(t,{ZoneModule:function(){return U}});var o=n(38583),i=n(3675),a=n(3679),r=n(70853),l=n(37716),s=n(72782),d=n(1860),p=n(45385),c=n(54051),m=n(86640),u=n(29790);function g(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(2,1,"Settings.Local.Zone.Error.ZoneNameisrequired")))}function h(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div",22),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1(" ",l.\u0275\u0275pipeBind1(2,1,"Settings.Local.Zone.Error.Mustbemax128characterslong")," "))}function f(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"div",22),l.\u0275\u0275template(1,g,3,3,"div",23),l.\u0275\u0275template(2,h,3,3,"div",12),l.\u0275\u0275elementEnd()),2&e){const e=l.\u0275\u0275nextContext();l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",e.f.zoneName.errors.required),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",e.zoneForm.get("zoneName").hasError("maxlength"))}}function v(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(2,1,"Settings.Local.Zone.Error.ZoneCodeisrequired")))}function S(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(2,1,"Settings.Local.Zone.Error.ZoneCodemustbeatmax30characters")))}function x(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"div",22),l.\u0275\u0275template(1,v,3,3,"div",23),l.\u0275\u0275template(2,S,3,3,"div",23),l.\u0275\u0275elementEnd()),2&e){const e=l.\u0275\u0275nextContext();l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",e.f.zoneCode.errors.required),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",e.f.zoneCode.errors.maxLength)}}function b(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(2,1,"Settings.Local.Zone.Error.Statusrequired")))}function I(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"div",22),l.\u0275\u0275template(1,b,3,3,"div",23),l.\u0275\u0275elementEnd()),2&e){const e=l.\u0275\u0275nextContext();l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",e.f.status.errors.required)}}function z(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"ng-option",16),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;l.\u0275\u0275property("value",e.countryId),l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(e.name)}}function y(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div",22),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1("",l.\u0275\u0275pipeBind1(2,1,"Settings.Local.Zone.Error.Countryisrequired")," "))}const E=function(e){return{"is-invalid":e}},C=function(e){return{"error-fields":e}};let Z=(()=>{class e{constructor(e,t,n,o,i,a,r){this.modalService=e,this.fb=t,this.route=n,this.sandbox=o,this.countrySandbox=i,this.router=a,this.service=r,this.config={displayKey:"name",value:"countryId",search:!0},this.submitted=!1,this.pageSize=5,this.keyword="",this.editZoneInfo=[],this.pagenationCount=1,this.countryList=[]}get f(){return this.zoneForm.controls}beforeChange(e){"preventchange-2"===e.panelId&&e.preventDefault(),"preventchange-3"===e.panelId&&!1===e.nextState&&e.preventDefault()}ngOnInit(){this.country=null,this.getCountryList(this.offset,this.keyword),this.initForm(),this.editZoneId=this.route.snapshot.paramMap.get("id"),this.editZoneList(),this.subscribe()}subscribe(){this.countrySandbox.countryList$.subscribe(e=>{this.countryList=e})}initForm(){this.zoneForm=this.fb.group({zoneName:[null,a.Validators.compose([a.Validators.required,a.Validators.maxLength(128)])],zoneCode:[null,[a.Validators.required,a.Validators.maxLength(30)]],country:[null,[a.Validators.required]],status:[null,[a.Validators.required]]})}onSubmit(){if(this.submitted=!0,this.zoneForm.invalid)this.countryValid=!this.countryId;else{if(""!==this.zoneForm.value.zoneName&&""!==this.zoneForm.value.zoneCode){const e={};e.zonename=this.zoneForm.value.zoneName,e.zonecode=this.zoneForm.value.zoneCode,e.country=this.zoneForm.value.country,e.status=this.zoneForm.value.status.toString(),this.editZoneInfo&&this.editZoneInfo[0].zoneId?(e.zoneId=this.editZoneInfo[0].zoneId,this.sandbox.updateZone(e),this.getZonesList(this.offset)):(this.sandbox.addNewZone(e),this.getZonesList(this.offset))}else this.valid=!0;this.modalService.close("close")}}getZonesList(e=0){const t={};t.limit=this.pageSize,t.offset=e,t.keyword=this.keyword,t.status="",this.sandbox.getZoneList(t),this.isCount&&(t.count=!0,this.sandbox.getZonePagination(t))}close(){this.modalService.close("close")}cancel(){this.router.navigate(["/settings/local/zone"])}editZoneList(){this.editZoneInfo.push(this.service.getzonelistdata()),null!==this.editZoneInfo[0]?this.editZoneInfo[0]&&this.editZoneInfo[0].name&&(this.updateTitle=1,this.zoneForm.controls.zoneName.setValue(this.editZoneInfo[0].name),this.zoneForm.controls.zoneCode.setValue(this.editZoneInfo[0].code),this.zoneForm.controls.country.setValue(this.editZoneInfo[0].country.countryId),this.zoneForm.controls.status.setValue(this.editZoneInfo[0].isActive)):this.zoneForm=null}getCountryList(e=0,t){const n={limit:""};n.offset=e,n.keyword=this.keyword,n.status=1,this.countrySandbox.getCountriesList(n),this.pagenationCount&&(n.count="true",this.countrySandbox.getCountryCount(n))}selectionChanged(e){this.countryId=e,this.countryId&&(this.countryValid=!1)}onHover(e){const t=e.target;"mouseover"===e.type?t.classList.add("dd-highlight-item"):t.classList.remove("dd-highlight-item")}}return e.\u0275fac=function(t){return new(t||e)(l.\u0275\u0275directiveInject(s.Kz),l.\u0275\u0275directiveInject(a.FormBuilder),l.\u0275\u0275directiveInject(r.gz),l.\u0275\u0275directiveInject(d.$),l.\u0275\u0275directiveInject(p.J),l.\u0275\u0275directiveInject(r.F0),l.\u0275\u0275directiveInject(c.b))},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-settings-zone-add"]],decls:65,vars:62,consts:[[1,"flex","setting2-inner-header",2,"margin","0 !important","border-bottom","1px solid #B1B1B5"],[2,"font-weight","700"],[1,"close"],[1,"bton",3,"click"],[1,"settings-right-wrapper","addnewuser"],[1,"new-user"],[1,"form-horizontal","m-t-20",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-12","col-xs-12"],[1,"form-group"],[1,"supvalidation"],["type","text","formControlName","zoneName",1,"form-control",3,"placeholder","ngClass"],["class","validation-error",4,"ngIf"],["type","text","formControlName","zoneCode",1,"form-control",3,"placeholder","ngClass"],[1,"control-label"],["formControlName","status","data-placeholder","Choose Role",3,"placeholder","searchable","ngClass"],[3,"value"],["formControlName","country",3,"placeholder","editableSearchTerm","multiple","ngClass","clearable","change","mouseout"],[3,"value",4,"ngFor","ngForOf"],[1,"col-12"],[1,"flex","user-btn"],["type","submit",1,"btn","btn-add","set-ad-btn",2,"position","fixed","margin-top","108px"],[1,"validation-error"],[4,"ngIf"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div",0),l.\u0275\u0275elementStart(1,"h3",1),l.\u0275\u0275text(2),l.\u0275\u0275pipe(3,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(4,"div",2),l.\u0275\u0275elementStart(5,"button",3),l.\u0275\u0275listener("click",function(){return t.close()}),l.\u0275\u0275text(6,"x"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(7,"div",4),l.\u0275\u0275elementStart(8,"div",5),l.\u0275\u0275elementStart(9,"form",6),l.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),l.\u0275\u0275elementStart(10,"div",7),l.\u0275\u0275elementStart(11,"div",8),l.\u0275\u0275elementStart(12,"div",9),l.\u0275\u0275elementStart(13,"label"),l.\u0275\u0275text(14),l.\u0275\u0275pipe(15,"translate"),l.\u0275\u0275elementStart(16,"sup",10),l.\u0275\u0275text(17,"*"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(18,"input",11),l.\u0275\u0275pipe(19,"translate"),l.\u0275\u0275template(20,f,3,2,"div",12),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(21,"div",8),l.\u0275\u0275elementStart(22,"div",9),l.\u0275\u0275elementStart(23,"label"),l.\u0275\u0275text(24),l.\u0275\u0275pipe(25,"translate"),l.\u0275\u0275elementStart(26,"sup",10),l.\u0275\u0275text(27,"*"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275element(28,"input",13),l.\u0275\u0275pipe(29,"translate"),l.\u0275\u0275template(30,x,3,2,"div",12),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(31,"div",8),l.\u0275\u0275elementStart(32,"div",9),l.\u0275\u0275elementStart(33,"label",14),l.\u0275\u0275text(34),l.\u0275\u0275pipe(35,"translate"),l.\u0275\u0275elementStart(36,"sup",10),l.\u0275\u0275text(37,"*"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(38,"ng-select",15),l.\u0275\u0275pipe(39,"translate"),l.\u0275\u0275elementStart(40,"ng-option",16),l.\u0275\u0275text(41),l.\u0275\u0275pipe(42,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(43,"ng-option",16),l.\u0275\u0275text(44),l.\u0275\u0275pipe(45,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275template(46,I,2,1,"div",12),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(47,"div",8),l.\u0275\u0275elementStart(48,"div",9),l.\u0275\u0275elementStart(49,"label",14),l.\u0275\u0275text(50),l.\u0275\u0275pipe(51,"translate"),l.\u0275\u0275elementStart(52,"sup",10),l.\u0275\u0275text(53,"*"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(54,"div"),l.\u0275\u0275elementStart(55,"ng-select",17),l.\u0275\u0275listener("change",function(e){return t.selectionChanged(e)})("mouseout",function(e){return t.onHover(e)}),l.\u0275\u0275pipe(56,"translate"),l.\u0275\u0275template(57,z,2,2,"ng-option",18),l.\u0275\u0275pipe(58,"async"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275template(59,y,3,3,"div",12),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(60,"div",19),l.\u0275\u0275elementStart(61,"div",20),l.\u0275\u0275elementStart(62,"button",21),l.\u0275\u0275text(63),l.\u0275\u0275pipe(64,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate(t.updateTitle?"Update Zone":l.\u0275\u0275pipeBind1(3,28,"Add Zone")),l.\u0275\u0275advance(7),l.\u0275\u0275property("formGroup",t.zoneForm),l.\u0275\u0275advance(5),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(15,30,"Settings.Local.Zone.ZoneName")),l.\u0275\u0275advance(4),l.\u0275\u0275propertyInterpolate("placeholder",l.\u0275\u0275pipeBind1(19,32,"Settings.Local.Zone.ZoneName")),l.\u0275\u0275property("ngClass",l.\u0275\u0275pureFunction1(54,E,t.submitted&&t.f.zoneName.errors)),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngIf",t.submitted&&t.f.zoneName.errors),l.\u0275\u0275advance(4),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(25,34,"Settings.Local.Zone.ZoneCode")),l.\u0275\u0275advance(4),l.\u0275\u0275propertyInterpolate("placeholder",l.\u0275\u0275pipeBind1(29,36,"Settings.Local.Zone.ZoneCode")),l.\u0275\u0275property("ngClass",l.\u0275\u0275pureFunction1(56,E,t.submitted&&t.f.zoneCode.errors)),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngIf",t.submitted&&t.f.zoneCode.errors),l.\u0275\u0275advance(4),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(35,38,"Settings.Local.Zone.Status")),l.\u0275\u0275advance(4),l.\u0275\u0275propertyInterpolate("placeholder",l.\u0275\u0275pipeBind1(39,40,"CMS.Pages.SelectStatus")),l.\u0275\u0275property("searchable",!1)("ngClass",l.\u0275\u0275pureFunction1(58,C,t.submitted&&t.f.status.errors)),l.\u0275\u0275advance(2),l.\u0275\u0275property("value",1),l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(42,42,"Settings.Local.Zone.Enabled")),l.\u0275\u0275advance(2),l.\u0275\u0275property("value",0),l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(45,44,"Settings.Local.Zone.Disabled")),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngIf",t.submitted&&t.f.status.errors),l.\u0275\u0275advance(4),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(51,46,"Settings.Local.Zone.Country")),l.\u0275\u0275advance(5),l.\u0275\u0275propertyInterpolate("placeholder",l.\u0275\u0275pipeBind1(56,48,"Settings.Local.Zone.SelectCountry")),l.\u0275\u0275property("editableSearchTerm",!0)("multiple",!1)("ngClass",l.\u0275\u0275pureFunction1(60,C,t.submitted&&t.f.country.errors))("clearable",!1),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngForOf",l.\u0275\u0275pipeBind1(58,50,t.countrySandbox.countryList$)),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngIf",t.countryValid),l.\u0275\u0275advance(4),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(64,52,"Settings.Local.Save")))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,o.NgClass,o.NgIf,m.w9,m.xv,o.NgForOf],pipes:[u.X$,o.AsyncPipe],styles:[".settings-right-wrapper[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}.setting2-inner-header[_ngcontent-%COMP%]{justify-content:space-between;margin-bottom:15px;margin-left:0!important;padding:8px}.settings-right-wrapper.addnewuser[_ngcontent-%COMP%]{padding:0!important;z-index:0;position:relative}.settings-right-wrapper.addnewuser[_ngcontent-%COMP%]   .new-user[_ngcontent-%COMP%]{padding:40px 50px;border:none}.dd-items-container[_ngcontent-%COMP%]{background-color:#fff;position:absolute;font-size:12px;overflow:auto;height:151px;width:95%;z-index:9;top:27px}.bton[_ngcontent-%COMP%]{background:none;border:none;outline:none}",".settings-right-wrapper[_ngcontent-%COMP%]{margin-top:0!important}"]}),e})();var w=n(9819),L=n(89113),F=n(99692);function N(e,t){if(1&e&&(l.\u0275\u0275elementStart(0,"option",25),l.\u0275\u0275text(1),l.\u0275\u0275elementEnd()),2&e){const e=l.\u0275\u0275nextContext(2);l.\u0275\u0275propertyInterpolate("value",e.pageSize),l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate(e.pageSize)}}function k(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1("",l.\u0275\u0275pipeBind1(2,1,"Settings.Local.StockStatus.Active")," "))}function B(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div"),l.\u0275\u0275text(1),l.\u0275\u0275pipe(2,"translate"),l.\u0275\u0275elementEnd()),2&e&&(l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1("",l.\u0275\u0275pipeBind1(2,1,"Settings.Local.StockStatus.InActive")," "))}const M=function(){return["edit-zone","delete-zone"]};function P(e,t){if(1&e){const e=l.\u0275\u0275getCurrentView();l.\u0275\u0275elementStart(0,"tr"),l.\u0275\u0275elementStart(1,"td",26),l.\u0275\u0275text(2),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(3,"td"),l.\u0275\u0275text(4),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(5,"td"),l.\u0275\u0275text(6),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(7,"td"),l.\u0275\u0275template(8,k,3,3,"div",27),l.\u0275\u0275template(9,B,3,3,"div",27),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(10,"td",28),l.\u0275\u0275elementStart(11,"div",29),l.\u0275\u0275element(12,"i",30),l.\u0275\u0275elementStart(13,"div",31),l.\u0275\u0275elementStart(14,"a",32),l.\u0275\u0275listener("click",function(){const t=l.\u0275\u0275restoreView(e).$implicit;return l.\u0275\u0275nextContext(2).addeNewZone(t,"edit")}),l.\u0275\u0275element(15,"img",33),l.\u0275\u0275text(16),l.\u0275\u0275pipe(17,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(18,"a",32),l.\u0275\u0275listener("click",function(){const t=l.\u0275\u0275restoreView(e).$implicit,n=l.\u0275\u0275nextContext(2);return n.deleteZone(t.zoneId,n.deletePop)}),l.\u0275\u0275element(19,"img",34),l.\u0275\u0275text(20),l.\u0275\u0275pipe(21,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()}if(2&e){const e=t.$implicit;l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate(e.country.name),l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate(e.name),l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate(e.code),l.\u0275\u0275advance(2),l.\u0275\u0275property("ngIf",1===e.isActive),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf",0===e.isActive),l.\u0275\u0275advance(1),l.\u0275\u0275property("multipleHide",l.\u0275\u0275pureFunction0(14,M)),l.\u0275\u0275advance(4),l.\u0275\u0275property("appHideIfUnauthorized","edit-zone"),l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate1(" ",l.\u0275\u0275pipeBind1(17,10,"Settings.Local.Edit")," "),l.\u0275\u0275advance(2),l.\u0275\u0275property("appHideIfUnauthorized","delete-zone"),l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate1(" ",l.\u0275\u0275pipeBind1(21,12,"Settings.Local.Delete")," ")}}const O=function(e){return[e]};function V(e,t){if(1&e){const e=l.\u0275\u0275getCurrentView();l.\u0275\u0275elementStart(0,"div",7),l.\u0275\u0275elementStart(1,"div",8),l.\u0275\u0275elementStart(2,"div",9),l.\u0275\u0275elementStart(3,"p"),l.\u0275\u0275text(4),l.\u0275\u0275pipe(5,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(6,"div",10),l.\u0275\u0275elementStart(7,"select",11),l.\u0275\u0275listener("ngModelChange",function(t){return l.\u0275\u0275restoreView(e),l.\u0275\u0275nextContext().pageSize=t})("change",function(){return l.\u0275\u0275restoreView(e),l.\u0275\u0275nextContext().pageLength()}),l.\u0275\u0275template(8,N,2,2,"option",12),l.\u0275\u0275elementStart(9,"option",13),l.\u0275\u0275text(10,"10"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(11,"option",14),l.\u0275\u0275text(12,"20"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(13,"option",15),l.\u0275\u0275text(14,"30"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(15,"button",16),l.\u0275\u0275listener("click",function(){return l.\u0275\u0275restoreView(e),l.\u0275\u0275nextContext().addeNewZone("","add")}),l.\u0275\u0275element(16,"img",17),l.\u0275\u0275text(17),l.\u0275\u0275pipe(18,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(19,"div",18),l.\u0275\u0275elementStart(20,"div",19),l.\u0275\u0275elementStart(21,"table",20),l.\u0275\u0275elementStart(22,"thead"),l.\u0275\u0275elementStart(23,"tr"),l.\u0275\u0275elementStart(24,"th",21),l.\u0275\u0275text(25),l.\u0275\u0275pipe(26,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(27,"th",21),l.\u0275\u0275text(28),l.\u0275\u0275pipe(29,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(30,"th",21),l.\u0275\u0275text(31),l.\u0275\u0275pipe(32,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(33,"th",21),l.\u0275\u0275text(34),l.\u0275\u0275pipe(35,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(36,"th",22),l.\u0275\u0275text(37),l.\u0275\u0275pipe(38,"translate"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(39,"tbody"),l.\u0275\u0275template(40,P,22,15,"tr",23),l.\u0275\u0275pipe(41,"async"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(42,"mat-paginator",24),l.\u0275\u0275listener("page",function(t){return l.\u0275\u0275restoreView(e),l.\u0275\u0275nextContext().onPageChange(t)}),l.\u0275\u0275pipe(43,"async"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd()}if(2&e){const e=l.\u0275\u0275nextContext();l.\u0275\u0275advance(4),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(5,15,"Settings.Local.Resultsperpage")),l.\u0275\u0275advance(3),l.\u0275\u0275property("ngModel",e.pageSize),l.\u0275\u0275advance(1),l.\u0275\u0275property("ngIf","10"!==e.pageSize&&"20"!==e.pageSize&&"30"!==e.pageSize),l.\u0275\u0275advance(7),l.\u0275\u0275property("appHideIfUnauthorized","create-zone"),l.\u0275\u0275advance(2),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(18,17,"Settings.Local.Zone.AddNewZone")),l.\u0275\u0275advance(8),l.\u0275\u0275textInterpolate1("",l.\u0275\u0275pipeBind1(26,19,"Settings.Local.Zone.Country")," "),l.\u0275\u0275advance(3),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(29,21,"Settings.Local.Zone.ZoneName")),l.\u0275\u0275advance(3),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(32,23,"Settings.Local.Zone.ZoneCode")),l.\u0275\u0275advance(3),l.\u0275\u0275textInterpolate(l.\u0275\u0275pipeBind1(35,25,"Settings.Local.Emailtemplate.Status")),l.\u0275\u0275advance(2),l.\u0275\u0275property("multipleHide",l.\u0275\u0275pureFunction0(33,M)),l.\u0275\u0275advance(1),l.\u0275\u0275textInterpolate1(" ",l.\u0275\u0275pipeBind1(38,27,"Settings.Local.Zone.Action"),""),l.\u0275\u0275advance(3),l.\u0275\u0275property("ngForOf",l.\u0275\u0275pipeBind1(41,29,e.zoneSandbox.zoneList$)),l.\u0275\u0275advance(2),l.\u0275\u0275property("length",l.\u0275\u0275pipeBind1(43,31,e.zoneSandbox.zonePagination$))("pageSize",e.pageSize)("pageSizeOptions",l.\u0275\u0275pureFunction1(34,O,e.pageSize))}}let j=(()=>{class e{constructor(e,t,n,o){this.modal=e,this.router=t,this.zoneSandbox=n,this.service=o,this.type="edit",this.pageSize="5",this.keyword="",this.regSubscribeEvents()}ngOnInit(){this.pageSize=sessionStorage.getItem("itemsPerPage")?sessionStorage.getItem("itemsPerPage"):this.pageSize,this.isCount=!0,this.getZonesList(this.offset),this.zoneSandbox.zoneAddLoaded$.subscribe(e=>{!0===e&&this.getZonesList(this.offset)}),this.zoneSandbox.zoneUpdateLoaded$.subscribe(e=>{!0===e&&this.getZonesList(this.offset)})}beforeChange(e){"preventchange-2"===e.panelId&&e.preventDefault(),"preventchange-3"===e.panelId&&!1===e.nextState&&e.preventDefault()}getZonesList(e=0){const t={};t.limit=this.pageSize,t.offset=e,t.keyword=this.keyword,t.status="",this.zoneSandbox.getZoneList(t),this.isCount&&(t.count=!0,this.zoneSandbox.getZonePagination(t))}addeNewZone(e,t){const n=this.modal.open(Z,{windowClass:"add-customers",keyboard:!1,backdrop:"static"});"edit"===t?(this.service.setzonelistdata(e),n.componentInstance.edit=this.type,n.componentInstance.id=e.countryId):this.service.setzonelistdata("")}editzone(e){this.service.setzonelistdata(e),this.router.navigate(["/settings/local/zone/edit",e.zoneId])}onPageChange(e){this.currentPage=e.offset,this.pageSize=e.pageSize,this.index=e.pageIndex,this.offset=e.pageSize*e.pageIndex,this.getZonesList(this.offset)}deleteZone(e){const t=this.modal.open(w.j,{size:"sm",windowClass:"delete-confirm",backdrop:"static",backdropClass:"createcr"});t.componentInstance.key="",t.componentInstance.id="",t.result.then(t=>{"deleted"===t&&(this.zoneSandbox.zoneDelete({zoneId:e}),this.regSubscribeEvents())})}pageLength(){this.getZonesList()}regSubscribeEvents(){this.zoneSandbox.deleteZone$.subscribe(e=>{e&&1===e.status&&this.getZonesList(this.offset)})}}return e.\u0275fac=function(t){return new(t||e)(l.\u0275\u0275directiveInject(s.FF),l.\u0275\u0275directiveInject(r.F0),l.\u0275\u0275directiveInject(d.$),l.\u0275\u0275directiveInject(c.b))},e.\u0275cmp=l.\u0275\u0275defineComponent({type:e,selectors:[["app-settings-zone-list"]],decls:12,vars:0,consts:[[1,"set-lay-notes","flex",2,"padding","0 10px 0 10px"],[1,"setup-wrapper","set-loc-wrapper"],[1,"setup-container","localization-container"],[1,"card","ap-general","ap-info"],[1,"flex","ap-body"],[2,"width","100%"],["ngbTabContent","","style","display: flex !important;"],[1,"localize-header","flex"],[1,"loc-hdr-lft"],[1,"input-group"],[1,"select"],[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngIf"],["value","10"],["value","20"],["value","30"],[1,"set-ad-btn",3,"appHideIfUnauthorized","click"],["src","assets/img/add-white-ico.png","alt","add"],[1,"setup-right"],[1,"table-responsive"],[1,"table",2,"background","white !important"],["scope","col"],["scope","col",1,"text-center",3,"appHideIfUnauthorized","multipleHide"],[4,"ngFor","ngForOf"],[3,"length","pageSize","pageSizeOptions","page"],[3,"value"],["scope","row"],[4,"ngIf"],[1,"text-center",3,"appHideIfUnauthorized","multipleHide"],["ngbDropdown","",1,"dropdown"],["ngbDropdownToggle","",1,"fa","fa-ellipsis-v","cursor",2,"padding","0 15px"],["ngbDropdownMenu","",1,"dropdown-menu"],["ngbDropdownItem","","href","javascript:void(0)",1,"dropdown-item",3,"appHideIfUnauthorized","click"],["src","assets/img/edit.png","alt","edit"],["src","assets/img/delete-new.png","alt","delete"]],template:function(e,t){1&e&&(l.\u0275\u0275elementStart(0,"div",0),l.\u0275\u0275elementStart(1,"h4"),l.\u0275\u0275text(2,"Note :"),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(3,"p"),l.\u0275\u0275text(4,"In this section, the admin can maintain the master list of countries. They can choose any one zone from this list that will be available in the general settings for configuring the zone to which the eCommerce business belongs to. "),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementStart(5,"div",1),l.\u0275\u0275elementStart(6,"div",2),l.\u0275\u0275elementStart(7,"div",3),l.\u0275\u0275elementStart(8,"div",4),l.\u0275\u0275elementStart(9,"ngb-tabset",5),l.\u0275\u0275elementStart(10,"ngb-tab"),l.\u0275\u0275template(11,V,44,36,"ng-template",6),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd(),l.\u0275\u0275elementEnd())},directives:[s.T3,s.N_,s.EU,a.SelectControlValueAccessor,a.NgControlStatus,a.NgModel,o.NgIf,a.NgSelectOption,a.\u0275NgSelectMultipleOption,L.E,o.NgForOf,F.NW,s.jt,s.iD,s.Vi,s.TH],pipes:[u.X$,o.AsyncPipe],styles:[".settings-right-wrapper[_ngcontent-%COMP%]{margin-top:0!important}.coc[_ngcontent-%COMP%]{background:#f20a6d;border:solid thin #dddddd;color:#fff;padding:4px 16px}"]}),e})();var _=n(8300);const A=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:j,canActivate:[_.a],data:{permission:"list-zone"}},{path:"add",component:Z,canActivate:[_.a],data:{permission:"create-zone"}},{path:"edit/:id",component:Z,canActivate:[_.a],data:{permission:"edit-zone"}}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=l.\u0275\u0275defineInjector({imports:[[r.Bz.forChild(A)],r.Bz]}),e})();var $=n(39717),H=n(20044),q=n(91841),T=n(12476);let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=l.\u0275\u0275defineInjector({providers:[],imports:[[o.CommonModule,i.o,a.FormsModule,a.ReactiveFormsModule,$.q,D,T.K,u.aw.forChild({loader:{provide:u.Zw,useFactory:H.g,deps:[q.eN]}})]]}),e})()},9819:function(e,t,n){n.d(t,{j:function(){return a}});var o=n(37716),i=n(72782);let a=(()=>{class e{constructor(e){this.activeModal=e}ngOnInit(){}close(){this.activeModal.close()}deleteContent(){"vendor"===this.key&&this.activeModal.close("deleted")}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275directiveInject(i.Kz))},e.\u0275cmp=o.\u0275\u0275defineComponent({type:e,selectors:[["app-delete-confirmation-dialog"]],decls:12,vars:0,consts:[[1,"modal-body"],["type","button",1,"close",3,"click"],["aria-hidden","true"],["src","assets/img/info-triangle.svg"],[1,"delete-btns","flex"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(e,t){1&e&&(o.\u0275\u0275elementStart(0,"div",0),o.\u0275\u0275elementStart(1,"button",1),o.\u0275\u0275listener("click",function(){return t.close()}),o.\u0275\u0275elementStart(2,"span",2),o.\u0275\u0275text(3,"\xd7"),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(4,"h4"),o.\u0275\u0275element(5,"img",3),o.\u0275\u0275text(6," Do You Want To Delete? "),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(7,"div",4),o.\u0275\u0275elementStart(8,"button",5),o.\u0275\u0275listener("click",function(){return t.close()}),o.\u0275\u0275text(9," No "),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(10,"button",6),o.\u0275\u0275listener("click",function(){return t.deleteContent()}),o.\u0275\u0275text(11," Yes "),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementEnd())},styles:[".modal-title[_ngcontent-%COMP%]{padding:30px 30px 5px;border-bottom:1px solid #eeeeee}.modal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;font-size:.875rem}.close[_ngcontent-%COMP%]{padding:10px}.close[_ngcontent-%COMP%]:focus{outline:none!important}.modal-footer[_ngcontent-%COMP%]{justify-content:center!important}"]}),e})()}}]);