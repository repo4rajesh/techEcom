"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[212],{20212:function(e,t,n){n.r(t),n.d(t,{GeneralSettingsModule:function(){return q}});var a=n(38583),i=n(3675),r=n(3679),l=n(6050),s=n(25598),o=n(70853),d=n(37716),m=n(45385),p=n(1860),g=n(78897),c=n(73056),u=n(29790),h=n(16731),f=n(7279),v=n(86640);const S=["filePath"],I=["filePath2"],b=["filePath3"];function E(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",42),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(2,1,"Settings.generalsettings.Error.Mustbemaximum255characterslong")," "))}function y(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",42),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(2,1,"Settings.generalsettings.Error.Mustbemaximum96characterslong")," "))}function x(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",42),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(2,1,"Settings.generalsettings.Error.Mustbemaximum15numbers")," "))}function U(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",42),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(2,1,"Settings.generalsettings.Error.Mustbeatleast4numbers")," "))}function C(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",42),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(2,1,"Settings.generalsettings.Error.Mustbemaximum128characterslong")," "))}function z(e,t){1&e&&(d.\u0275\u0275elementStart(0,"p"),d.\u0275\u0275text(1),d.\u0275\u0275pipe(2,"translate"),d.\u0275\u0275elementStart(3,"span"),d.\u0275\u0275text(4,"(Note: 232 * 50 pixels)"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(2,1,"Settings.generalsettings.ClickordragLogo")," "))}function w(e,t){if(1&e&&d.\u0275\u0275element(0,"img",43),2&e){const e=d.\u0275\u0275nextContext();d.\u0275\u0275property("src",e.postImageUrl,d.\u0275\u0275sanitizeUrl)("alt",e.logo)}}function B(e,t){1&e&&d.\u0275\u0275element(0,"img",44)}function L(e,t){if(1&e&&d.\u0275\u0275element(0,"img",43),2&e){const e=d.\u0275\u0275nextContext();d.\u0275\u0275property("src",e.postInvoiceImageUrl,d.\u0275\u0275sanitizeUrl)("alt",e.invoiceImg)}}function D(e,t){1&e&&d.\u0275\u0275element(0,"img",44)}function M(e,t){if(1&e&&d.\u0275\u0275element(0,"img",45),2&e){const e=d.\u0275\u0275nextContext();d.\u0275\u0275property("src",e.postEmailImageUrl,d.\u0275\u0275sanitizeUrl)("alt",e.mailImg)}}function k(e,t){1&e&&d.\u0275\u0275element(0,"img",44)}function N(e,t){if(1&e&&(d.\u0275\u0275elementStart(0,"ng-option",46),d.\u0275\u0275text(1),d.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;d.\u0275\u0275property("value",e.countryId),d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",e.name,"")}}function P(e,t){if(1&e&&(d.\u0275\u0275elementStart(0,"ng-option",46),d.\u0275\u0275text(1),d.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;d.\u0275\u0275propertyInterpolate("value",e.zoneId),d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",e.name,"")}}const R=function(e){return{validationcolor:e}},F=[{path:"",component:(()=>{class e{constructor(e,t,n,a,i,r,l,s){this.changeDetectRef=e,this.router=t,this.fb=n,this.countrysandbox=a,this.zonesandbox=i,this.generalsettingsandbox=r,this.configService=l,this.translate=s,this.postImageUrl="",this.postEmailImageUrl="",this.postInvoiceImageUrl="",this.keyword="",this.pageSize="10",this.offset=0,this.countryRegion=[],this.countryListData=[],this.subscriptions=[]}ngOnInit(){this.pageSize=sessionStorage.getItem("itemsPerPage")?sessionStorage.getItem("itemsPerPage"):this.pageSize,this.defaultImageUrl="",this.defaultMailImageUrl="",this.defaultInvoiceImageUrl="",this.imageUrl=this.configService.getImageUrl(),this.initForm(),this.dropdownlist(),this.getGeneralSetting()}SelectCountry(){this.countryRegion=[],this.selectCountryId=this.generalSettings.value.country,this.zonesandbox.zoneList$.subscribe(e=>{e&&e.forEach(e=>{e&&e.country.countryId===this.selectCountryId&&this.countryRegion.push(e)})})}changeCountry(){this.generalSettings.controls.zone.reset(),this.countryRegion=[],this.selectCountryId=this.generalSettings.value.country,this.zonesandbox.zoneList$.subscribe(e=>{e&&e.forEach(e=>{e&&e.country.countryId===this.selectCountryId&&this.countryRegion.push(e)})})}getGeneralSetting(){this.generalsettingsandbox.getGeneralSetting()}dropdownlist(){this.countryList(this.offset,this.keyword),this.zonesList(this.offset),this.zonesandbox.zoneList$.subscribe(e=>{e&&this.subscribe()})}onSubmit(){if(this.submitted=!0,this.generalSettings.invalid)return;const e={};e.storename=this.generalSettings.value.storeName,e.storeowner=this.generalSettings.value.storeOwner,e.address=this.generalSettings.value.address,e.email=this.generalSettings.value.email,e.phonenumber=this.generalSettings.value.phonenumber,e.country=this.generalSettings.value.country,e.zone=this.generalSettings.value.zone,e.maintenanceMode="Yes"===this.generalSettings.value.maintenanceMode?1:0,this.defaultImageUrl&&(e.image=this.postImageUrl),""!==this.defaultMailImageUrl&&(e.mailImage=this.postEmailImageUrl),""!==this.defaultInvoiceImageUrl&&(e.invoiceLogo=this.postInvoiceImageUrl),this.generalsettingsandbox.createGeneralSetting(e),this.subscriptions.push(this.generalsettingsandbox.getNewGeneralSettings$.subscribe(e=>{e&&1===e.status&&(this.defaultImageUrl="",this.defaultInvoiceImageUrl="",this.defaultMailImageUrl="")}))}get f(){return this.generalSettings.controls}initForm(){this.generalSettings=this.fb.group({storeName:[null,r.Validators.compose([r.Validators.maxLength(255)])],storeOwner:[null],address:[null,r.Validators.compose([r.Validators.maxLength(128)])],email:[null,r.Validators.compose([r.Validators.maxLength(96)])],phonenumber:[null,r.Validators.compose([r.Validators.maxLength(15),r.Validators.minLength(4)])],country:[null],zone:[""],maintenanceMode:[null]})}countryList(e=0,t){const n={limit:0};n.offset=e,n.keyword=this.keyword,n.status=1,this.countrysandbox.getCountriesList(n)}zonesList(e=0){const t={limit:0};t.offset=e,t.keyword=this.keyword,t.status=1,this.zonesandbox.getZoneList(t)}uploadButtonClick(){this.filePath.nativeElement.click()}uploadChange(e){this.convertBase64(e.target),this.logo=e.target.files[0].name}convertBase64(e){const t=e.files[0],n=new FileReader;n.onloadend=e=>{this.postImageUrl=n.result,this.defaultImageUrl=n.result,this.changeDetectRef.detectChanges()},n.readAsDataURL(t)}uploadMailImage(e){this.convertMailImageBase64(e.target),this.mailImg=e.target.files[0].name}uploadMailButtonClick(){this.filePath2.nativeElement.click()}convertMailImageBase64(e){const t=e.files[0],n=new FileReader;n.onloadend=e=>{this.postEmailImageUrl=n.result,this.defaultMailImageUrl=n.result,this.changeDetectRef.detectChanges()},n.readAsDataURL(t)}uploadInvoiceImage(e){this.convertInvoiceImageBase64(e.target),this.invoiceImg=e.target.files[0].name}uploadInvoiceButtonClick(){this.filePath3.nativeElement.click()}convertInvoiceImageBase64(e){const t=e.files[0],n=new FileReader;n.onloadend=e=>{this.defaultInvoiceImageUrl=n.result,this.postInvoiceImageUrl=n.result,this.changeDetectRef.detectChanges()},n.readAsDataURL(t)}subscribe(){this.subscriptions.push(this.generalsettingsandbox.getGeneralSettings$.subscribe(e=>{e&&e[0]&&(this.generalSettings.controls.storeName.setValue(e[0].storeName),this.generalSettings.controls.storeOwner.setValue(e[0].storeOwner),this.generalSettings.controls.address.setValue(e[0].storeAddress),this.generalSettings.controls.country.setValue(e[0].countryId),this.generalSettings.controls.zone.setValue(e[0].zoneId),this.selectCountryId=e[0].countryId,this.SelectCountry(),this.generalSettings.controls.email.setValue(e[0].storeEmail),this.generalSettings.controls.phonenumber.setValue(e[0].storeTelephone),1===e[0].maintenanceMode?this.generalSettings.patchValue({maintenanceMode:"Yes",tc:!0}):0===e[0].maintenanceMode&&this.generalSettings.patchValue({maintenanceMode:"No",tc:!0}),e[0].storeLogoPath&&e[0].storeLogo&&(this.postImageUrl=this.imageUrl+`?path=${e[0].storeLogoPath}&name=${e[0].storeLogo}&width=160&height=150`,this.changeDetectRef.detectChanges()),e[0].emailLogoPath&&e[0].emailLogo&&(this.postEmailImageUrl=this.imageUrl+`?path=${e[0].emailLogoPath}&name=${e[0].emailLogo}&width=160&height=150`,this.changeDetectRef.detectChanges()),e[0].invoiceLogoPath&&e[0].invoiceLogo&&(this.postInvoiceImageUrl=this.imageUrl+`?path=${e[0].invoiceLogoPath}&name=${e[0].invoiceLogo}&width=160&height=150`,this.changeDetectRef.detectChanges()))}))}generalsettingcancel(){this.router.navigate(["/settings"])}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275directiveInject(d.ChangeDetectorRef),d.\u0275\u0275directiveInject(o.F0),d.\u0275\u0275directiveInject(r.FormBuilder),d.\u0275\u0275directiveInject(m.J),d.\u0275\u0275directiveInject(p.$),d.\u0275\u0275directiveInject(g.C),d.\u0275\u0275directiveInject(c.E),d.\u0275\u0275directiveInject(u.sK))},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["app-spurt-genearlsettingsadd"]],viewQuery:function(e,t){if(1&e&&(d.\u0275\u0275viewQuery(S,5),d.\u0275\u0275viewQuery(I,5),d.\u0275\u0275viewQuery(b,5)),2&e){let e;d.\u0275\u0275queryRefresh(e=d.\u0275\u0275loadQuery())&&(t.filePath=e.first),d.\u0275\u0275queryRefresh(e=d.\u0275\u0275loadQuery())&&(t.filePath2=e.first),d.\u0275\u0275queryRefresh(e=d.\u0275\u0275loadQuery())&&(t.filePath3=e.first)}},decls:165,vars:117,consts:[[1,"setup-wrapper"],[1,"settings-content"],[1,"setup-container"],[1,"setup-left"],[1,"setup-right","flex"],[1,"sr-left"],[1,"srl-desc"],[1,"form-horizontal",3,"formGroup"],["id","storeinfo",1,"sup-rht-section"],[1,"suprs-form"],[1,"suprs-form-row","flex"],["href","javascript:void(0)"],[1,"suprs-form-col"],["type","text","formControlName","storeName",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],["class","validation-error",4,"ngIf"],["type","text","formControlName","storeOwner",1,"form-control",3,"appDisableIfUnauthorized"],["type","text","formControlName","email",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],["appOnlyNumber","","type","text","formControlName","phonenumber",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],["formControlName","address","placeholder","Address",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],[1,"flex","srbtn"],[1,"cancel",3,"click"],[3,"click"],[1,"form-horizontal","fh-sit-set",3,"formGroup","ngSubmit"],[1,"sup-rht-header"],[1,"add-logo-er"],[1,"addler-box","flex",3,"appDisableIfUnauthorized"],["type","file","name","userImg","accept","image/*",3,"change"],["filePath",""],[4,"ngIf"],["style","width: 80%; height: 70%;","class","up-img",3,"src","alt",4,"ngIf"],["style","width: 80%; height: 70%;","src","assets/img/upload-img.svg","class","up-img",4,"ngIf"],["type","button",3,"appDisableIfUnauthorized","click"],[1,"addler-box","addler-box-uploaded","flex",3,"appDisableIfUnauthorized"],["type","file","name","invoiceImg","accept","image/*",3,"change"],["filePath3",""],["type","file","name","mailImg","accept","image/*",3,"change"],["filePath2",""],["style","width: 80%; height: 70%;",3,"src","alt",4,"ngIf"],[1,"form-group"],["formControlName","country",3,"placeholder","searchable","appDisableIfUnauthorized","clearable","change"],[3,"value",4,"ngFor","ngForOf"],["formControlName","zone",3,"placeholder","searchable","appDisableIfUnauthorized","clearable"],[1,"validation-error"],[1,"up-img",2,"width","80%","height","70%",3,"src","alt"],["src","assets/img/upload-img.svg",1,"up-img",2,"width","80%","height","70%"],[2,"width","80%","height","70%",3,"src","alt"],[3,"value"]],template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"div",0),d.\u0275\u0275element(1,"app-breadcrumb"),d.\u0275\u0275elementStart(2,"div",1),d.\u0275\u0275elementStart(3,"div",2),d.\u0275\u0275elementStart(4,"div",3),d.\u0275\u0275elementStart(5,"h3"),d.\u0275\u0275text(6),d.\u0275\u0275pipe(7,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(8,"p"),d.\u0275\u0275text(9,"General Settings is where the critical eCommerce settings are configured to get started with eCommerce portal. This includes adding of physical address for an online store which can be the main address of the company. Here, country, region, for the business is also configured. Also, the logo that appears on Store, invoice and email templates can be uploaded. "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(10,"div",4),d.\u0275\u0275elementStart(11,"div",5),d.\u0275\u0275elementStart(12,"h4"),d.\u0275\u0275text(13),d.\u0275\u0275pipe(14,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(15,"div",6),d.\u0275\u0275elementStart(16,"p"),d.\u0275\u0275text(17,"In this section, the admin can provide the name of the business, owner details, contact email and phone number and the physical address of the company. "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(18,"form",7),d.\u0275\u0275elementStart(19,"div",8),d.\u0275\u0275elementStart(20,"div",9),d.\u0275\u0275elementStart(21,"div",10),d.\u0275\u0275elementStart(22,"label"),d.\u0275\u0275text(23),d.\u0275\u0275pipe(24,"translate"),d.\u0275\u0275element(25,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(26,"div",12),d.\u0275\u0275element(27,"input",13),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(28,E,3,3,"div",14),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(29,"div",9),d.\u0275\u0275elementStart(30,"div",10),d.\u0275\u0275elementStart(31,"label"),d.\u0275\u0275text(32),d.\u0275\u0275pipe(33,"translate"),d.\u0275\u0275element(34,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(35,"div",12),d.\u0275\u0275element(36,"input",15),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(37,"div",9),d.\u0275\u0275elementStart(38,"div",10),d.\u0275\u0275elementStart(39,"label"),d.\u0275\u0275text(40),d.\u0275\u0275pipe(41,"translate"),d.\u0275\u0275element(42,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(43,"div",12),d.\u0275\u0275element(44,"input",16),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(45,y,3,3,"div",14),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(46,"div",9),d.\u0275\u0275elementStart(47,"div",10),d.\u0275\u0275elementStart(48,"label"),d.\u0275\u0275text(49),d.\u0275\u0275pipe(50,"translate"),d.\u0275\u0275element(51,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(52,"div",12),d.\u0275\u0275element(53,"input",17),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(54,x,3,3,"div",14),d.\u0275\u0275template(55,U,3,3,"div",14),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(56,"div",9),d.\u0275\u0275elementStart(57,"div",10),d.\u0275\u0275elementStart(58,"label"),d.\u0275\u0275text(59),d.\u0275\u0275pipe(60,"translate"),d.\u0275\u0275element(61,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(62,"div",12),d.\u0275\u0275element(63,"textarea",18),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(64,C,3,3,"div",14),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(65,"div",19),d.\u0275\u0275elementStart(66,"button",20),d.\u0275\u0275listener("click",function(){return t.generalsettingcancel()}),d.\u0275\u0275text(67),d.\u0275\u0275pipe(68,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(69,"button",21),d.\u0275\u0275listener("click",function(){return t.onSubmit()}),d.\u0275\u0275text(70),d.\u0275\u0275pipe(71,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(72,"div",4),d.\u0275\u0275elementStart(73,"div",5),d.\u0275\u0275elementStart(74,"h4"),d.\u0275\u0275text(75),d.\u0275\u0275pipe(76,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(77,"div",6),d.\u0275\u0275elementStart(78,"p"),d.\u0275\u0275text(79,"In this section, the admin can upload the logos that has to appear on the site, invoice and email template. "),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(80,"form",22),d.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),d.\u0275\u0275elementStart(81,"div",8),d.\u0275\u0275elementStart(82,"div",23),d.\u0275\u0275elementStart(83,"h3"),d.\u0275\u0275text(84),d.\u0275\u0275pipe(85,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(86,"div",24),d.\u0275\u0275elementStart(87,"div",25),d.\u0275\u0275elementStart(88,"input",26,27),d.\u0275\u0275listener("change",function(e){return t.uploadChange(e)}),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(90,z,5,3,"p",28),d.\u0275\u0275template(91,w,1,2,"img",29),d.\u0275\u0275template(92,B,1,0,"img",30),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(93,"div",19),d.\u0275\u0275elementStart(94,"button",31),d.\u0275\u0275listener("click",function(){return t.uploadButtonClick()}),d.\u0275\u0275text(95),d.\u0275\u0275pipe(96,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(97,"div",23),d.\u0275\u0275elementStart(98,"label"),d.\u0275\u0275text(99),d.\u0275\u0275pipe(100,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(101,"div",24),d.\u0275\u0275elementStart(102,"div",32),d.\u0275\u0275elementStart(103,"input",33,34),d.\u0275\u0275listener("change",function(e){return t.uploadInvoiceImage(e)}),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(105,L,1,2,"img",29),d.\u0275\u0275template(106,D,1,0,"img",30),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(107,"div",19),d.\u0275\u0275elementStart(108,"button",31),d.\u0275\u0275listener("click",function(){return t.uploadInvoiceButtonClick()}),d.\u0275\u0275text(109),d.\u0275\u0275pipe(110,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(111,"div",23),d.\u0275\u0275elementStart(112,"h3"),d.\u0275\u0275text(113),d.\u0275\u0275pipe(114,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(115,"div",24),d.\u0275\u0275elementStart(116,"div",32),d.\u0275\u0275elementStart(117,"input",35,36),d.\u0275\u0275listener("change",function(e){return t.uploadMailImage(e)}),d.\u0275\u0275elementEnd(),d.\u0275\u0275template(119,M,1,2,"img",37),d.\u0275\u0275template(120,k,1,0,"img",30),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(121,"div",19),d.\u0275\u0275elementStart(122,"button",31),d.\u0275\u0275listener("click",function(){return t.uploadMailButtonClick()}),d.\u0275\u0275text(123),d.\u0275\u0275pipe(124,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(125,"div",4),d.\u0275\u0275elementStart(126,"div",5),d.\u0275\u0275elementStart(127,"h4"),d.\u0275\u0275text(128),d.\u0275\u0275pipe(129,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(130,"div",6),d.\u0275\u0275elementStart(131,"p"),d.\u0275\u0275text(132,"In this section, the admin can setup the country, origin or region, for business, depending on the location it is situated."),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(133,"form",7),d.\u0275\u0275elementStart(134,"div",8),d.\u0275\u0275elementStart(135,"div",9),d.\u0275\u0275elementStart(136,"div",10),d.\u0275\u0275elementStart(137,"label"),d.\u0275\u0275text(138),d.\u0275\u0275pipe(139,"translate"),d.\u0275\u0275element(140,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(141,"div",12),d.\u0275\u0275elementStart(142,"div",38),d.\u0275\u0275elementStart(143,"ng-select",39),d.\u0275\u0275listener("change",function(){return t.changeCountry()}),d.\u0275\u0275pipe(144,"translate"),d.\u0275\u0275template(145,N,2,2,"ng-option",40),d.\u0275\u0275pipe(146,"async"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(147,"div",9),d.\u0275\u0275elementStart(148,"div",10),d.\u0275\u0275elementStart(149,"label"),d.\u0275\u0275text(150),d.\u0275\u0275pipe(151,"translate"),d.\u0275\u0275element(152,"a",11),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(153,"div",12),d.\u0275\u0275elementStart(154,"div",38),d.\u0275\u0275elementStart(155,"ng-select",41),d.\u0275\u0275pipe(156,"translate"),d.\u0275\u0275template(157,P,2,2,"ng-option",40),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(158,"div",19),d.\u0275\u0275elementStart(159,"button",20),d.\u0275\u0275listener("click",function(){return t.generalsettingcancel()}),d.\u0275\u0275text(160),d.\u0275\u0275pipe(161,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(162,"button",21),d.\u0275\u0275listener("click",function(){return t.onSubmit()}),d.\u0275\u0275text(163),d.\u0275\u0275pipe(164,"translate"),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementEnd()),2&e&&(d.\u0275\u0275advance(6),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(7,61,"Settings.nav.GeneralSettings")),d.\u0275\u0275advance(7),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(14,63,"Settings.generalsettings.Basicinformation")),d.\u0275\u0275advance(5),d.\u0275\u0275property("formGroup",t.generalSettings),d.\u0275\u0275advance(5),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(24,65,"Settings.generalsettings.StoreName")," "),d.\u0275\u0275advance(4),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings")("ngClass",d.\u0275\u0275pureFunction1(109,R,t.generalSettings.controls.storeName.errors&&t.submitted)),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.generalSettings.get("storeName").hasError("maxlength")),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(33,67,"Settings.generalsettings.StoreOwner")," "),d.\u0275\u0275advance(4),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(41,69,"Settings.generalsettings.Email")," "),d.\u0275\u0275advance(4),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings")("ngClass",d.\u0275\u0275pureFunction1(111,R,t.generalSettings.controls.email.errors&&1==t.submitted)),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.generalSettings.get("email").hasError("maxlength")),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(50,71,"Settings.generalsettings.Phonenumber")," "),d.\u0275\u0275advance(4),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings")("ngClass",d.\u0275\u0275pureFunction1(113,R,t.generalSettings.controls.phonenumber.errors&&1==t.submitted)),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.generalSettings.get("phonenumber").hasError("maxlength")),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.generalSettings.get("phonenumber").hasError("minlength")),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(60,73,"Settings.generalsettings.Address")," "),d.\u0275\u0275advance(4),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings")("ngClass",d.\u0275\u0275pureFunction1(115,R,t.generalSettings.controls.address.errors&&1==t.submitted)),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.generalSettings.get("address").hasError("maxlength")),d.\u0275\u0275advance(3),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(68,75,"Settings.generalsettings.Cancel")),d.\u0275\u0275advance(3),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(71,77,"Settings.generalsettings.Save")),d.\u0275\u0275advance(5),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(76,79,"Settings.generalsettings.SiteSettings")),d.\u0275\u0275advance(5),d.\u0275\u0275property("formGroup",t.generalSettings),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(85,81,"Settings.generalsettings.SiteLogo")),d.\u0275\u0275advance(3),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(3),d.\u0275\u0275property("ngIf",""===t.postImageUrl),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",""!==t.postImageUrl),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",""===t.postImageUrl),d.\u0275\u0275advance(2),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(96,83,"Settings.generalsettings.UploadLogo")),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(100,85,"Settings.generalsettings.InvoiceLogo")),d.\u0275\u0275advance(3),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(3),d.\u0275\u0275property("ngIf",""!==t.postInvoiceImageUrl),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",""===t.postInvoiceImageUrl),d.\u0275\u0275advance(2),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(110,87,"Settings.generalsettings.UploadLogo")),d.\u0275\u0275advance(4),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(114,89,"Settings.generalsettings.EmailTemplateLogo")),d.\u0275\u0275advance(3),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(3),d.\u0275\u0275property("ngIf",""!==t.postEmailImageUrl),d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",""===t.postEmailImageUrl),d.\u0275\u0275advance(2),d.\u0275\u0275property("appDisableIfUnauthorized","edit-general-settings"),d.\u0275\u0275advance(1),d.\u0275\u0275textInterpolate1(" ",d.\u0275\u0275pipeBind1(124,91,"Settings.generalsettings.UploadLogo"),""),d.\u0275\u0275advance(5),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(129,93,"Settings.generalsettings.StoreSettings")),d.\u0275\u0275advance(5),d.\u0275\u0275property("formGroup",t.generalSettings),d.\u0275\u0275advance(5),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(139,95,"Settings.generalsettings.Country")," "),d.\u0275\u0275advance(5),d.\u0275\u0275propertyInterpolate("placeholder",d.\u0275\u0275pipeBind1(144,97,"Settings.generalsettings.SelectCountry")),d.\u0275\u0275property("searchable",!1)("appDisableIfUnauthorized","edit-general-settings")("clearable",!1),d.\u0275\u0275advance(2),d.\u0275\u0275property("ngForOf",d.\u0275\u0275pipeBind1(146,99,t.countrysandbox.countryList$)),d.\u0275\u0275advance(5),d.\u0275\u0275textInterpolate1("",d.\u0275\u0275pipeBind1(151,101,"Settings.generalsettings.Region/State")," "),d.\u0275\u0275advance(5),d.\u0275\u0275propertyInterpolate("placeholder",d.\u0275\u0275pipeBind1(156,103,"Settings.generalsettings.SelectRegion")),d.\u0275\u0275property("searchable",!1)("appDisableIfUnauthorized","edit-general-settings")("clearable",!1),d.\u0275\u0275advance(2),d.\u0275\u0275property("ngForOf",t.countryRegion),d.\u0275\u0275advance(3),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(161,105,"Settings.generalsettings.Cancel")),d.\u0275\u0275advance(3),d.\u0275\u0275textInterpolate(d.\u0275\u0275pipeBind1(164,107,"Settings.generalsettings.Save")))},directives:[h.L,r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,r.DefaultValueAccessor,r.NgControlStatus,r.FormControlName,f.f,a.NgClass,a.NgIf,v.w9,a.NgForOf,v.xv],pipes:[u.X$,a.AsyncPipe],styles:["mat-radio-button[_ngcontent-%COMP%]{padding:1px 3px}.settings-right-wrapper[_ngcontent-%COMP%]{margin-top:0!important}.setting1-inner-header[_ngcontent-%COMP%]{margin-top:40px!important}.coc[_ngcontent-%COMP%]{background:#f20a6d;border:solid thin #dddddd;color:#fff;padding:4px 16px}"]}),e})(),canActivate:[n(8300).a],data:{permission:"edit-general-settings",urls:[{title:"Settings",url:""},{title:"General",url:""},{title:"Basic information",url:""}]}}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=d.\u0275\u0275defineInjector({imports:[[o.Bz.forChild(F)],o.Bz]}),e})();var G=n(39717),O=n(68343),$=n(99233),j=n(20044),A=n(91841),Q=n(12476);let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=d.\u0275\u0275defineInjector({providers:[g.C,O.E],imports:[[a.CommonModule,i.o,r.FormsModule,r.ReactiveFormsModule,G.q,V,Q.K,l.sQ.forFeature([s.V]),u.aw.forChild({loader:{provide:u.Zw,useFactory:j.g,deps:[A.eN]}}),$.dF]]}),e})()}}]);