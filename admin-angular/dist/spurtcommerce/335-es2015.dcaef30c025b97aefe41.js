"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[335],{25335:function(t,e,o){o.r(e),o.d(e,{AuthenticationModule:function(){return B}});var r=o(38583),n=o(72782),i=o(70853),a=o(3679),s=o(37716),l=o(6754),d=o(33821),p=o(29790);function c(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",11),s.\u0275\u0275text(1),s.\u0275\u0275pipe(2,"translate"),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Usernamerequired")," "))}function m(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",11),s.\u0275\u0275text(1),s.\u0275\u0275pipe(2,"translate"),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Incorrectemail")," "))}function g(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",11),s.\u0275\u0275text(1),s.\u0275\u0275pipe(2,"translate"),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Passwordrequired")," "))}function f(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",11),s.\u0275\u0275text(1),s.\u0275\u0275pipe(2,"translate"),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.UsernameorPasswordisincorrect")," "))}const u=function(t){return{validationcolor:t}},h=function(){return["/auth/forgot-password"]};function v(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",9),s.\u0275\u0275text(1),s.\u0275\u0275pipe(2,"translate"),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Emailrequired")," "))}function b(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",9),s.\u0275\u0275text(1),s.\u0275\u0275pipe(2,"translate"),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Incorrectemail")," "))}const w=function(t){return{validationcolor:t}},F=function(){return["/auth/login"]},x=[{path:"login",component:(()=>{class t{constructor(t,e,o){this.fb=t,this.authSandbox=e,this.layoutSandbox=o,this.emailPattern="[a-zA-Z0-9.-_-._]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.ifSubmitted=!1,this.badResponse=!1,this.subscriptions=[]}ngOnInit(){this.loginForm=this.fb.group({userName:["",[a.Validators.required,a.Validators.pattern(this.emailPattern)]],password:["",a.Validators.required]})}validateAllFormFields(t){Object.keys(t.controls).forEach(e=>{const o=t.get(e);o instanceof a.FormControl?o.markAsTouched({onlySelf:!0}):o instanceof a.FormGroup&&this.validateAllFormFields(o)})}onSubmit(t){if(this.ifSubmitted=!0,!this.loginForm.valid)return void this.validateAllFormFields(this.loginForm);const e={};e.userName=this.loginForm.value.userName,e.password=this.loginForm.value.password,this.authSandbox.authLogin(e),this.subscriptions.push(this.authSandbox.loginLoaded$.subscribe(t=>{if(!0===t){const t=JSON.parse(sessionStorage.getItem("adminUser"));this.layoutSandbox.getUserDetail(t)}else this.loginForm.reset()}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(s.\u0275\u0275directiveInject(a.FormBuilder),s.\u0275\u0275directiveInject(l.j),s.\u0275\u0275directiveInject(d.b))},t.\u0275cmp=s.\u0275\u0275defineComponent({type:t,selectors:[["app-spurt-login"]],decls:20,vars:22,consts:[[1,"card-align"],[1,"cards"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"admin"],[1,"log-group","first"],["type","text","placeholder","User Name","formControlName","userName",1,"form-control","placeholder-fix",3,"ngClass"],["class","validation-error",4,"ngIf"],[1,"log-group"],["type","password","placeholder","Password","formControlName","password",1,"form-control","placeholder-fix",3,"ngClass"],[1,"btn","btn-log"],[1,"forgot",3,"routerLink"],[1,"validation-error"]],template:function(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",0),s.\u0275\u0275elementStart(1,"div",1),s.\u0275\u0275elementStart(2,"form",2),s.\u0275\u0275listener("ngSubmit",function(){return e.onSubmit(e.loginForm.value)}),s.\u0275\u0275elementStart(3,"div",3),s.\u0275\u0275text(4),s.\u0275\u0275pipe(5,"translate"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(6,"div",4),s.\u0275\u0275element(7,"input",5),s.\u0275\u0275template(8,c,3,3,"div",6),s.\u0275\u0275template(9,m,3,3,"div",6),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(10,"div",7),s.\u0275\u0275element(11,"input",8),s.\u0275\u0275template(12,g,3,3,"div",6),s.\u0275\u0275elementEnd(),s.\u0275\u0275template(13,f,3,3,"div",6),s.\u0275\u0275elementStart(14,"button",9),s.\u0275\u0275text(15),s.\u0275\u0275pipe(16,"translate"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(17,"div",10),s.\u0275\u0275text(18),s.\u0275\u0275pipe(19,"translate"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(2),s.\u0275\u0275property("formGroup",e.loginForm),s.\u0275\u0275advance(2),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(5,11,"Profile.Login.AdminLogin")),s.\u0275\u0275advance(3),s.\u0275\u0275property("ngClass",s.\u0275\u0275pureFunction1(17,u,e.loginForm.get("userName").hasError("required")&&e.loginForm.get("userName").touched&&1==e.ifSubmitted||1==e.badResponse)),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",e.loginForm.get("userName").hasError("required")&&e.loginForm.get("userName").touched&&1==e.ifSubmitted),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",e.loginForm.get("userName").hasError("pattern")&&e.loginForm.get("userName").touched&&1==e.ifSubmitted),s.\u0275\u0275advance(2),s.\u0275\u0275property("ngClass",s.\u0275\u0275pureFunction1(19,u,e.loginForm.get("password").hasError("required")&&e.loginForm.get("password").touched&&1==e.ifSubmitted||1==e.badResponse)),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",e.loginForm.get("password").hasError("required")&&e.loginForm.get("password").touched&&1==e.ifSubmitted),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",1==e.badResponse),s.\u0275\u0275advance(2),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(16,13,"Profile.Login.login")),s.\u0275\u0275advance(2),s.\u0275\u0275property("routerLink",s.\u0275\u0275pureFunction0(21,h)),s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(19,15,"Profile.Login.Error.Cantlogin?")," "))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,r.NgClass,r.NgIf,i.rH],pipes:[p.X$],styles:['.validationcolor[_ngcontent-%COMP%]{border-color:red}.error[_ngcontent-%COMP%]{color:red}.first[_ngcontent-%COMP%]{margin-bottom:20px}.form-control[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.53px;color:#000!important;height:53px;border-radius:2px;border:solid 1px #d6d6d6;background-color:#fff}.card-align[_ngcontent-%COMP%]{margin-top:15%}.cards[_ngcontent-%COMP%]{box-shadow:0 2px 10px #00000026;background-color:#fff;width:70%;margin:auto;padding:3% 5%}.cards[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:18px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#264151;margin-bottom:7%}.cards[_ngcontent-%COMP%]   .btn-log[_ngcontent-%COMP%]{height:53px;background-color:#264151;font-family:"Poppins",sans-serif;font-size:18px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#fff;width:100%;margin:5% 0% 3%}.cards[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{font-family:Roboto;cursor:pointer;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#514c4c;text-decoration:underline;text-align:right;margin:3% 0% 5%}']}),t})()},{path:"forgot-password",component:(()=>{class t{constructor(t,e){this.fb=t,this.authSandbox=e,this.emailPattern="[a-zA-Z0-9.-_-._]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.ifSubmitted=!1}ngOnInit(){this.forgotPasswordForm=this.fb.group({email:["",[a.Validators.required,a.Validators.pattern(this.emailPattern)]]})}onSubmits(t,e){if(this.ifSubmitted=!0,!this.forgotPasswordForm.valid)return void this.validateAllFormFields(this.forgotPasswordForm);const o={};o.email=this.forgotPasswordForm.value.email,this.authSandbox.authForget(o),this.authSandbox.forgorPasswordResponse$.subscribe(t=>{(t&&!0===t||!1===t)&&(this.ifSubmitted=!1,this.forgotPasswordForm.reset(),this.forgotPasswordForm.clearValidators())})}validateAllFormFields(t){Object.keys(t.controls).forEach(e=>{const o=t.get(e);o instanceof a.FormControl?o.markAsTouched({onlySelf:!0}):o instanceof a.FormGroup&&this.validateAllFormFields(o)})}}return t.\u0275fac=function(e){return new(e||t)(s.\u0275\u0275directiveInject(a.FormBuilder),s.\u0275\u0275directiveInject(l.j))},t.\u0275cmp=s.\u0275\u0275defineComponent({type:t,selectors:[["app-spurt-forgot-password"]],decls:17,vars:20,consts:[[1,"card-align"],[1,"cards"],[3,"formGroup","ngSubmit"],[1,"admin"],["type","text","placeholder","Email","formControlName","email",1,"form-control","placeholder-fix",3,"ngClass"],["class","validation-error",4,"ngIf"],[1,"btn","btn-log"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","pull-right",3,"hidden"],[1,"forgot",3,"routerLink"],[1,"validation-error"]],template:function(t,e){1&t&&(s.\u0275\u0275elementStart(0,"div",0),s.\u0275\u0275elementStart(1,"div",1),s.\u0275\u0275elementStart(2,"form",2),s.\u0275\u0275listener("ngSubmit",function(t){return e.onSubmits(t,e.forgotPasswordForm.value)}),s.\u0275\u0275elementStart(3,"div",3),s.\u0275\u0275text(4),s.\u0275\u0275pipe(5,"translate"),s.\u0275\u0275elementEnd(),s.\u0275\u0275element(6,"input",4),s.\u0275\u0275template(7,v,3,3,"div",5),s.\u0275\u0275template(8,b,3,3,"div",5),s.\u0275\u0275elementStart(9,"button",6),s.\u0275\u0275text(10),s.\u0275\u0275pipe(11,"translate"),s.\u0275\u0275element(12,"span",7),s.\u0275\u0275pipe(13,"async"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(14,"div",8),s.\u0275\u0275text(15),s.\u0275\u0275pipe(16,"translate"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementEnd()),2&t&&(s.\u0275\u0275advance(2),s.\u0275\u0275property("formGroup",e.forgotPasswordForm),s.\u0275\u0275advance(2),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(5,9,"Profile.Login.forgotpassword")),s.\u0275\u0275advance(2),s.\u0275\u0275property("ngClass",s.\u0275\u0275pureFunction1(17,w,e.forgotPasswordForm.get("email").hasError("required")&&e.forgotPasswordForm.get("email").touched&&1==e.ifSubmitted)),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",e.forgotPasswordForm.get("email").hasError("required")&&e.forgotPasswordForm.get("email").touched&&1==e.ifSubmitted),s.\u0275\u0275advance(1),s.\u0275\u0275property("ngIf",e.forgotPasswordForm.get("email").hasError("pattern")&&e.forgotPasswordForm.get("email").touched&&1==e.ifSubmitted),s.\u0275\u0275advance(2),s.\u0275\u0275textInterpolate1(" ",s.\u0275\u0275pipeBind1(11,11,"Profile.Login.Submit"),""),s.\u0275\u0275advance(2),s.\u0275\u0275property("hidden",!s.\u0275\u0275pipeBind1(13,13,e.authSandbox.forgotpasswordLoading$)),s.\u0275\u0275advance(2),s.\u0275\u0275property("routerLink",s.\u0275\u0275pureFunction0(19,F)),s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(16,15,"Profile.Login.BacktoLogin")))},directives:[a.\u0275NgNoValidate,a.NgControlStatusGroup,a.FormGroupDirective,a.DefaultValueAccessor,a.NgControlStatus,a.FormControlName,r.NgClass,r.NgIf,i.rH],pipes:[p.X$,r.AsyncPipe],styles:['.validationcolor[_ngcontent-%COMP%]{border-color:red}.error[_ngcontent-%COMP%]{color:red}.form-control[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.53px;color:#000!important;height:53px;border-radius:2px;border:solid 1px #d6d6d6;background-color:#fff}.card-align[_ngcontent-%COMP%]{margin-top:15%}.cards[_ngcontent-%COMP%]{box-shadow:0 2px 10px #00000026;background-color:#fff;width:70%;margin:auto;padding:3% 5%}.cards[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:18px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#264151;margin-bottom:7%}.cards[_ngcontent-%COMP%]   .btn-log[_ngcontent-%COMP%]{height:53px;background-color:#264151;font-family:"Poppins",sans-serif;font-size:18px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#fff;width:100%;margin:5% 0% 3%}.cards[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{font-family:Roboto;cursor:pointer;font-size:14px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#514c4c;text-decoration:underline;text-align:right;margin:3% 0% 5%}']}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=s.\u0275\u0275defineInjector({imports:[[i.Bz.forChild(x)],i.Bz]}),t})();var P=o(59798),y=o(47417),C=o(6050),E=o(64762),I=o(41964),O=o(5207),N=o(37540),M=o(99922),_=o(44781),k=o(75894);class L{constructor(t,e,o,r){this.action$=t,this.authService=e,this.sandbox=o,this.router=r,this.doLogin$=this.action$.pipe((0,C.l4)(_.MF.DO_LOGIN),(0,O.U)(t=>t.payload),(0,N.w)(t=>this.authService.login(t).pipe((0,N.w)(t=>[new _.Cs(t)]),(0,k.K)(t=>(0,I.of)(new _.Xo(t)))))),this.doForget$=this.action$.pipe((0,C.l4)(_.MF.DO_FORGOT_PASSWORD),(0,O.U)(t=>t.payload),(0,N.w)(t=>this.authService.forgetPassword(t).pipe((0,N.w)(t=>[new _.A1(t)]),(0,k.K)(t=>(0,I.of)(new _.cd(t)))))),this.gettoken$=this.action$.pipe((0,C.l4)(_.MF.GET_TOKEN),(0,O.U)(t=>t.payload),(0,N.w)(t=>(console.log("eff",t),this.authService.gettoken(t).pipe((0,M.b)(t=>{console.log("get token error",t),t&&2===t.status&&this.router.navigate(["/token-expired"]),t&&3===t.status&&this.router.navigate(["/invalid-token"])}),(0,O.U)(t=>new _.vi(t)),(0,k.K)(t=>(0,I.of)(new _.fk(t))))))),this.setpassword$=this.action$.pipe((0,C.l4)(_.MF.SET_PASSWORD),(0,O.U)(t=>t.payload),(0,N.w)(t=>this.authService.setpassword(t).pipe((0,M.b)(t=>{t&&1===t.status&&this.router.navigate(["/auth/login"])}),(0,O.U)(t=>new _.j4(t)),(0,k.K)(t=>(0,I.of)(new _.QP(t))))))}}L.\u0275fac=function(t){return new(t||L)(s.\u0275\u0275inject(C.eX),s.\u0275\u0275inject(y.e),s.\u0275\u0275inject(l.j),s.\u0275\u0275inject(i.F0))},L.\u0275prov=s.\u0275\u0275defineInjectable({token:L,factory:L.\u0275fac}),(0,E.gn)([(0,C.Qm)()],L.prototype,"doLogin$",void 0),(0,E.gn)([(0,C.Qm)()],L.prototype,"doForget$",void 0),(0,E.gn)([(0,C.Qm)()],L.prototype,"gettoken$",void 0),(0,E.gn)([(0,C.Qm)()],L.prototype,"setpassword$",void 0);var A=o(20044),j=o(91841);let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=s.\u0275\u0275defineInjector({providers:[y.e,l.j],imports:[[r.CommonModule,S,n.IJ,a.ReactiveFormsModule,a.FormsModule,P.Rh.forRoot(),C.sQ.forFeature([L]),p.aw.forChild({loader:{provide:p.Zw,useFactory:A.g,deps:[j.eN]}})]]}),t})()}}]);