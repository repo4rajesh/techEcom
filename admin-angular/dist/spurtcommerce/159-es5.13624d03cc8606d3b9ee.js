!function(){"use strict";function e(t,n){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,o=r(e);if(t){var a=r(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return n(this,i)}}function n(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[159],{83698:function(n,r,i){i.r(r),i.d(r,{SeoModule:function(){return H}});var s,l=i(38583),c=i(3679),p=i(6050),u=i(29790),d=i(39717),m=i(70853),f=i(37716),h=i(15089),g=o(function e(t){a(this,e),this.metaTagTitle=t.metaTagTitle||"",this.metaTagDescription=t.metaTagDescription||"",this.metaTagKeywords=t.metaTagKeywords||""}),v=i(80933),S=i(13907),y=function(e){return e.seosetting},b=(0,v.P1)(y,S.tA),w=(0,v.P1)(y,S.u8),x=i(25624),T=((s=function(){function e(t,n){a(this,e),this.appState=t,this.router=n,this.newSeo$=this.appState.select(b),this.getSeo$=this.appState.select(w)}return o(e,[{key:"createSeo",value:function(e){this.appState.dispatch(new h.R7(new g(e)))}},{key:"getSeo",value:function(){this.appState.dispatch(new h.F$)}}]),e}()).\u0275fac=function(e){return new(e||s)(f.\u0275\u0275inject(x.yh),f.\u0275\u0275inject(m.F0))},s.\u0275prov=f.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s),E=i(7279),I=i(89113);function F(e,t){1&e&&(f.\u0275\u0275elementStart(0,"div",18),f.\u0275\u0275text(1),f.\u0275\u0275pipe(2,"translate"),f.\u0275\u0275elementEnd()),2&e&&(f.\u0275\u0275advance(1),f.\u0275\u0275textInterpolate1(" ",f.\u0275\u0275pipeBind1(2,1,"Settings.SiteSettings.Errors.Mustbemaximum70characterslong")," "))}function C(e,t){1&e&&(f.\u0275\u0275elementStart(0,"div",18),f.\u0275\u0275text(1),f.\u0275\u0275pipe(2,"translate"),f.\u0275\u0275elementEnd()),2&e&&(f.\u0275\u0275advance(1),f.\u0275\u0275textInterpolate1(" ",f.\u0275\u0275pipeBind1(2,1,"Settings.SiteSettings.Errors.Mustbemaximum160characterslong")," "))}function j(e,t){1&e&&(f.\u0275\u0275elementStart(0,"div",18),f.\u0275\u0275text(1),f.\u0275\u0275pipe(2,"translate"),f.\u0275\u0275elementEnd()),2&e&&(f.\u0275\u0275advance(1),f.\u0275\u0275textInterpolate1(" ",f.\u0275\u0275pipeBind1(2,1,"Settings.SiteSettings.Errors.Mustbemaximum255characterslong")," "))}var k=function(e){return{validationcolor:e}},O=[{path:"",component:function(){var e=function(){function e(t,n,r){a(this,e),this.fb=t,this.seoSandbox=n,this.router=r,this.subscriptions=[],this.submitted=!1}return o(e,[{key:"ngOnInit",value:function(){this.initForm(),this.getseoinfo(),this.subscribe()}},{key:"subscribe",value:function(){var e=this;this.subscriptions.push(this.seoSandbox.newSeo$.subscribe(function(e){})),this.subscriptions.push(this.seoSandbox.getSeo$.subscribe(function(t){t&&t[0]&&(e.seoForm.controls.metaTagDescription.setValue(t[0].metaTagDescription),e.seoForm.controls.metaTagKeyword.setValue(t[0].metaTagKeywords),e.seoForm.controls.metaTitle.setValue(t[0].metaTagTitle))}))}},{key:"getseoinfo",value:function(){this.seoSandbox.getSeo()}},{key:"initForm",value:function(){this.metaTitle=new c.FormControl("",c.Validators.compose([c.Validators.maxLength(70)])),this.metaTagDescription=new c.FormControl("",c.Validators.compose([c.Validators.maxLength(160)])),this.metaTagKeyword=new c.FormControl("",c.Validators.compose([c.Validators.maxLength(255)])),this.seoForm=this.fb.group({metaTitle:this.metaTitle,metaTagDescription:this.metaTagDescription,metaTagKeyword:this.metaTagKeyword})}},{key:"onSubmit",value:function(){if(this.submitted=!0,!this.seoForm.invalid){var e={};e.metaTagTitle=this.seoForm.value.metaTitle,e.metaTagDescription=this.seoForm.value.metaTagDescription,e.metaTagKeywords=this.seoForm.value.metaTagKeyword,this.seoSandbox.createSeo(e)}}},{key:"seoCancel",value:function(){this.router.navigate(["/settings"])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(f.\u0275\u0275directiveInject(c.FormBuilder),f.\u0275\u0275directiveInject(T),f.\u0275\u0275directiveInject(m.F0))},e.\u0275cmp=f.\u0275\u0275defineComponent({type:e,selectors:[["app-settings-sitesettings-seo"]],decls:54,vars:36,consts:[[1,"set-lay-notes","flex",2,"padding","0 10px 10px 10px"],[1,"setup-wrapper","setup-personalize"],[1,"setup-container","flex"],[1,"setup-left"],[1,"setup-right"],[1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"sup-rht-section"],[1,"suprs-form"],[1,"suprs-form-row","flex"],["href","javascript:void(0)"],[1,"suprs-form-col"],["type","text","formControlName","metaTitle",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],["class","validation-error",4,"ngIf"],["type","text","formControlName","metaTagDescription",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],["type","text","formControlName","metaTagKeyword",1,"form-control",3,"appDisableIfUnauthorized","ngClass"],[1,"flex","srbtn"],[1,"cancel",3,"appHideIfUnauthorized","click"],["type","submit",3,"appHideIfUnauthorized"],[1,"validation-error"]],template:function(e,t){1&e&&(f.\u0275\u0275elementStart(0,"div",0),f.\u0275\u0275elementStart(1,"h4"),f.\u0275\u0275text(2,"Note :"),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(3,"p"),f.\u0275\u0275text(4,"This is the section that is dedicated for making the entire site SEO friendly with meta tags. Here, the admin can provide the title, description and keywords that will bring the eCommerce portal on the top in the search engine rankings. "),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(5,"div",1),f.\u0275\u0275elementStart(6,"div",2),f.\u0275\u0275elementStart(7,"div",3),f.\u0275\u0275elementStart(8,"h3"),f.\u0275\u0275text(9),f.\u0275\u0275pipe(10,"translate"),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(11,"p"),f.\u0275\u0275text(12," \u2022 Meta title can be between 60-70 characters with a highly searchable keyword. "),f.\u0275\u0275element(13,"br"),f.\u0275\u0275text(14,"\u2022 Meta description can be a snippet to give an idea on the top products that are sold on eCommerce portal and this can range between 160-170 characters."),f.\u0275\u0275element(15,"br"),f.\u0275\u0275text(16," \u2022 Meta keywords can be highly searchable keywords and those keywords that the target audience will be giving to search for the relevant eCommerce portal."),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(17,"div",4),f.\u0275\u0275elementStart(18,"form",5),f.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),f.\u0275\u0275elementStart(19,"div",6),f.\u0275\u0275elementStart(20,"div",7),f.\u0275\u0275elementStart(21,"div",8),f.\u0275\u0275elementStart(22,"label"),f.\u0275\u0275text(23),f.\u0275\u0275pipe(24,"translate"),f.\u0275\u0275element(25,"a",9),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(26,"div",10),f.\u0275\u0275element(27,"input",11),f.\u0275\u0275template(28,F,3,3,"div",12),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(29,"div",7),f.\u0275\u0275elementStart(30,"div",8),f.\u0275\u0275elementStart(31,"label"),f.\u0275\u0275text(32),f.\u0275\u0275pipe(33,"translate"),f.\u0275\u0275element(34,"a",9),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(35,"div",10),f.\u0275\u0275element(36,"input",13),f.\u0275\u0275template(37,C,3,3,"div",12),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(38,"div",7),f.\u0275\u0275elementStart(39,"div",8),f.\u0275\u0275elementStart(40,"label"),f.\u0275\u0275text(41),f.\u0275\u0275pipe(42,"translate"),f.\u0275\u0275element(43,"a",9),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(44,"div",10),f.\u0275\u0275element(45,"input",14),f.\u0275\u0275template(46,j,3,3,"div",12),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(47,"div",15),f.\u0275\u0275elementStart(48,"button",16),f.\u0275\u0275listener("click",function(){return t.seoCancel()}),f.\u0275\u0275text(49),f.\u0275\u0275pipe(50,"translate"),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementStart(51,"button",17),f.\u0275\u0275text(52),f.\u0275\u0275pipe(53,"translate"),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd(),f.\u0275\u0275elementEnd()),2&e&&(f.\u0275\u0275advance(9),f.\u0275\u0275textInterpolate(f.\u0275\u0275pipeBind1(10,18,"Settings.SiteSettings.seo.WhatSEOdetailsarerequired")),f.\u0275\u0275advance(9),f.\u0275\u0275property("formGroup",t.seoForm),f.\u0275\u0275advance(5),f.\u0275\u0275textInterpolate1("",f.\u0275\u0275pipeBind1(24,20,"Settings.SiteSettings.MetaTitle")," "),f.\u0275\u0275advance(4),f.\u0275\u0275property("appDisableIfUnauthorized","edit-seo-url")("ngClass",f.\u0275\u0275pureFunction1(30,k,t.seoForm.controls.metaTitle.errors&&t.submitted)),f.\u0275\u0275advance(1),f.\u0275\u0275property("ngIf",t.seoForm.get("metaTitle").hasError("maxlength")),f.\u0275\u0275advance(4),f.\u0275\u0275textInterpolate1("",f.\u0275\u0275pipeBind1(33,22,"Settings.SiteSettings.MetaTagDescription")," "),f.\u0275\u0275advance(4),f.\u0275\u0275property("appDisableIfUnauthorized","edit-seo-url")("ngClass",f.\u0275\u0275pureFunction1(32,k,t.seoForm.controls.metaTagDescription.errors&&t.submitted)),f.\u0275\u0275advance(1),f.\u0275\u0275property("ngIf",t.seoForm.get("metaTagDescription").hasError("maxlength")),f.\u0275\u0275advance(4),f.\u0275\u0275textInterpolate1("",f.\u0275\u0275pipeBind1(42,24,"Settings.SiteSettings.MetatagKeyword")," "),f.\u0275\u0275advance(4),f.\u0275\u0275property("appDisableIfUnauthorized","edit-seo-url")("ngClass",f.\u0275\u0275pureFunction1(34,k,t.seoForm.controls.metaTagKeyword.errors&&t.submitted)),f.\u0275\u0275advance(1),f.\u0275\u0275property("ngIf",t.seoForm.get("metaTagKeyword").hasError("maxlength")),f.\u0275\u0275advance(2),f.\u0275\u0275property("appHideIfUnauthorized","edit-seo-url"),f.\u0275\u0275advance(1),f.\u0275\u0275textInterpolate(f.\u0275\u0275pipeBind1(50,26,"Settings.SiteSettings.Cancel")),f.\u0275\u0275advance(2),f.\u0275\u0275property("appHideIfUnauthorized","edit-seo-url"),f.\u0275\u0275advance(1),f.\u0275\u0275textInterpolate(f.\u0275\u0275pipeBind1(53,28,"Settings.SiteSettings.Save")))},directives:[c.\u0275NgNoValidate,c.NgControlStatusGroup,c.FormGroupDirective,c.DefaultValueAccessor,c.NgControlStatus,c.FormControlName,E.f,l.NgClass,l.NgIf,I.E],pipes:[u.X$],styles:[".settings-right-wrapper[_ngcontent-%COMP%]{margin-top:0!important}.validationcolor[_ngcontent-%COMP%]{border-color:red!important}.settings-right-wrapper[_ngcontent-%COMP%]{display:block;margin-left:0!important;background:white;padding:15px 30px 100px;margin-top:40px}.setting2-inner-header[_ngcontent-%COMP%]{justify-content:space-between;margin-bottom:15px;margin-left:0!important;padding:8px}"]}),e}()}],D=function(){var e=o(function e(){a(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=f.\u0275\u0275defineInjector({imports:[[m.Bz.forChild(O)],m.Bz]}),e}(),M=i(3675),_=i(9900),N=function(){var n,r=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&e(t,n)}(i,n);var r=t(i);function i(){var e;return a(this,i),(e=r.apply(this,arguments)).url=e.getBaseUrl(),e}return o(i,[{key:"createSeo",value:function(e){return this.http.post(this.url+"/settings/create-settings",e)}},{key:"getSeo",value:function(){return this.http.get(this.url+"/settings/get-settings")}}]),i}(_.V);return r.\u0275fac=function(e){return(n||(n=f.\u0275\u0275getInheritedFactory(r)))(e||r)},r.\u0275prov=f.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r}(),P=i(64762),B=i(41964),K=i(5207),z=i(37540),$=i(75894),U=o(function e(t,n){var r=this;a(this,e),this.action$=t,this.service=n,this.doAddseo$=this.action$.pipe((0,p.l4)(h.MF.DO_NEW_SEO_SITE_SETTINGS),(0,K.U)(function(e){return e.payload}),(0,z.w)(function(e){return r.service.createSeo(e).pipe((0,z.w)(function(e){return[new h.hy(e)]}),(0,$.K)(function(e){return(0,B.of)(new h.B$(e))}))})),this.dogetseosetting$=this.action$.pipe((0,p.l4)(h.MF.DO_SEO_SITE_SETTINGS),(0,K.U)(function(e){return e.payload}),(0,z.w)(function(){return r.service.getSeo().pipe((0,z.w)(function(e){return[new h.X2(e)]}),(0,$.K)(function(e){return(0,B.of)(new h.oW)}))}))});U.\u0275fac=function(e){return new(e||U)(f.\u0275\u0275inject(p.eX),f.\u0275\u0275inject(N))},U.\u0275prov=f.\u0275\u0275defineInjectable({token:U,factory:U.\u0275fac}),(0,P.gn)([(0,p.Qm)()],U.prototype,"doAddseo$",void 0),(0,P.gn)([(0,p.Qm)()],U.prototype,"dogetseosetting$",void 0);var V=i(20044),R=i(91841),G=i(12476),H=function(){var e=o(function e(){a(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=f.\u0275\u0275defineInjector({providers:[T,N],imports:[[l.CommonModule,M.o,c.FormsModule,c.ReactiveFormsModule,d.q,D,G.K,u.aw.forChild({loader:{provide:u.Zw,useFactory:V.g,deps:[R.eN]}}),p.sQ.forFeature([U])]]}),e}()}}])}();