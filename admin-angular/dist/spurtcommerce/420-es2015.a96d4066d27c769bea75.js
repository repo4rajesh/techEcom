"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[420],{19420:function(e,t,n){n.r(t),n.d(t,{CMSModule:function(){return S}});var r=n(38583),a=n(3675),s=n(3679),c=n(70853),i=n(37716),o=n(39075),l=n(89113),m=n(29790);const p=function(){return["/cms/pages"]},d=function(){return["/cms/banners"]};let u=(()=>{class e{constructor(e){this.titleService=e}ngOnInit(){this.titleService.setTitle("CMS")}}return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(o.Dx))},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["app-cms-header"]],decls:14,vars:14,consts:[[1,"subtoolbar","cmstoolbar"],[1,"sub-nav-menu"],["href","javascript:void(0)",3,"routerLink","appHideIfUnauthorized","routerLinkActive"],["src","assets/img/header-icons/cms/cms-files.svg","alt","pages"],["src","assets/img/header-icons/cms/cms-files-on.svg","alt","pages"],["src","assets/img/header-icons/cms/cms-banner.svg","alt","banner"],["src","assets/img/header-icons/cms/cms-banner-on.svg","alt","banner"]],template:function(e,t){1&e&&(i.\u0275\u0275elementStart(0,"div",0),i.\u0275\u0275elementStart(1,"div",1),i.\u0275\u0275elementStart(2,"a",2),i.\u0275\u0275elementStart(3,"span"),i.\u0275\u0275element(4,"img",3),i.\u0275\u0275element(5,"img",4),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(6),i.\u0275\u0275pipe(7,"translate"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(8,"a",2),i.\u0275\u0275elementStart(9,"span"),i.\u0275\u0275element(10,"img",5),i.\u0275\u0275element(11,"img",6),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(12),i.\u0275\u0275pipe(13,"translate"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd()),2&e&&(i.\u0275\u0275advance(2),i.\u0275\u0275property("routerLink",i.\u0275\u0275pureFunction0(12,p))("appHideIfUnauthorized","cms-pages")("routerLinkActive","active"),i.\u0275\u0275advance(4),i.\u0275\u0275textInterpolate1(" ",i.\u0275\u0275pipeBind1(7,8,"CMS.Pages.Pages")," "),i.\u0275\u0275advance(2),i.\u0275\u0275property("routerLink",i.\u0275\u0275pureFunction0(13,d))("appHideIfUnauthorized","cms-banners")("routerLinkActive","active"),i.\u0275\u0275advance(4),i.\u0275\u0275textInterpolate1(" ",i.\u0275\u0275pipeBind1(13,10,"CMS.Banners.Banners")," "))},directives:[c.yS,l.E,c.Od],pipes:[m.X$],styles:[""],changeDetection:0}),e})();var v=n(16731);let h=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["app-cms-layout"]],decls:3,vars:0,template:function(e,t){1&e&&(i.\u0275\u0275element(0,"app-cms-header"),i.\u0275\u0275element(1,"app-breadcrumb"),i.\u0275\u0275element(2,"router-outlet"))},directives:[u,v.L,c.lC],styles:[""],changeDetection:0}),e})();var f=n(8300);const g=[{path:"",redirectTo:"pages",pathMatch:"full"},{path:"",component:h,children:[{path:"banners",loadChildren:()=>Promise.all([n.e(330),n.e(592),n.e(793)]).then(n.bind(n,77793)).then(e=>e.BannerModule),canActivate:[f.a],data:{permissionForHeader:"cms-banners",root:"cms"}},{path:"pages",loadChildren:()=>n.e(679).then(n.bind(n,21679)).then(e=>e.PagesModule),canActivate:[f.a],data:{permissionForHeader:"cms-pages",root:"cms"}}]}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[[c.Bz.forChild(g)],c.Bz]}),e})();var C=n(39717),M=n(12476);let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({providers:[],imports:[[r.CommonModule,b,a.o,C.q,s.FormsModule,s.ReactiveFormsModule,m.aw.forChild(),M.K]]}),e})()}}]);