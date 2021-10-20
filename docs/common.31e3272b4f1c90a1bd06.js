"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[592],{755:(a,i,r)=>{r.d(i,{s:()=>e});var t=r(2340),_=r(7716),d=r(1841);let e=(()=>{class o{constructor(n){this.http=n,this.endPoint="products"}getAllProducts(){return this.http.get(`${t.N.ApiUrl}/${this.endPoint}`)}getAllProductsWithLimit(n){return this.http.get(`${t.N.ApiUrl}/${this.endPoint}?limit=${n}`)}getAllProductsWithSort(n){return this.http.get(`${t.N.ApiUrl}/${this.endPoint}?sort==${n}`)}getSingleProducts(n){return this.http.get(`${t.N.ApiUrl}/${this.endPoint}/${n}`)}addNewProduct(n){return this.http.post(`${t.N.ApiUrl}/${this.endPoint}`,n)}updateProduct(n,p){return this.http.put(`${t.N.ApiUrl}/${this.endPoint}/${n}`,p)}deleteProduct(n){return this.http.delete(`${t.N.ApiUrl}/${this.endPoint}/${n}`)}}return o.\u0275fac=function(n){return new(n||o)(_.LFG(d.eN))},o.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},4049:(a,i,r)=>{r.d(i,{Y:()=>d});var t=r(7716),_=r(8583);let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-card"]],inputs:{product:"product"},decls:19,vars:8,consts:[[1,"product__card"],[1,"card__container"],[1,"title"],["alt","",1,"card__image",3,"src"],[1,"body"],[1,"product__title"],[1,"product__price"],[1,"footer"],[1,"rating"],[1,"star"],["fill","none","height","12","viewBox","0 0 12 12","width","12","xmlns","http://www.w3.org/2000/svg",1,"oneStar"],["d","M11.7519 5.34021L9.33396 7.42268C9.19635 7.54639 9.11772 7.75258 9.17669 7.93814L9.90404 11.0722C10.0023 11.5876 9.64848 12 9.23567 12C9.11772 12 8.98011 11.9588 8.86217 11.8763L6.22801 10.1649C6.07075 10.0619 5.87417 10.0619 5.7169 10.1649L3.1024 11.8557C2.98446 11.9381 2.84685 11.9794 2.7289 11.9794C2.31609 11.9794 1.92293 11.567 2.06053 11.0515L2.78788 7.91753C2.82719 7.73196 2.76822 7.52577 2.63061 7.40206L0.252007 5.34021C-0.23944 4.90722 0.0357703 4.06186 0.664823 4.02062L3.75111 3.79381C3.92803 3.7732 4.0853 3.64948 4.16393 3.48454L5.3434 0.474227C5.46135 0.164949 5.73656 0 6.01177 0C6.28698 0 6.56219 0.164949 6.68014 0.474227L7.85961 3.48454C7.93825 3.6701 8.09551 3.79381 8.27243 3.79381L11.3587 4.02062C11.9485 4.06186 12.2433 4.90722 11.7519 5.34021Z","fill","#f5a523"],[1,"rate"],[1,"counter"]],template:function(c,n){1&c&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t._UZ(4,"p",4),t.TgZ(5,"p",5),t._uU(6),t.qZA(),t.TgZ(7,"p",6),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"span",9),t.O4$(),t.TgZ(13,"svg",10),t._UZ(14,"path",11),t.qZA(),t.qZA(),t.kcU(),t.TgZ(15,"span",12),t._uU(16),t.qZA(),t.TgZ(17,"span",13),t._uU(18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(3),t.Q6J("src",n.product.image,t.LSH),t.xp6(3),t.Oqu(n.product.title),t.xp6(2),t.Oqu(t.xi3(9,5,n.product.price,"EGP")),t.xp6(8),t.Oqu(n.product.rating.rate),t.xp6(2),t.hij("(",n.product.rating.count,")"))},pipes:[_.H9],styles:[".product__card[_ngcontent-%COMP%]{min-height:350px;height:400px;max-height:450px;width:100%;background:#ffffff;transition:all .2s ease-in-out;border-radius:12px}.product__card[_ngcontent-%COMP%]:hover{box-shadow:0 15px 25px #00000029}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-evenly;flex-flow:column;flex-wrap:nowrap;height:100%;width:100%;padding:.6rem}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-end;flex-flow:row;flex-wrap:nowrap}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .card__image[_ngcontent-%COMP%]{width:175px;height:200px;max-height:250px}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .product__title[_ngcontent-%COMP%]{font-size:var(--font-size-18, 1.125rem);font-weight:700;color:#404553}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .product__price[_ngcontent-%COMP%]{font-size:var(--font-size-16, 1rem);font-weight:700;color:#404553}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{text-align:end}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]{color:#f5a523;font-weight:700;margin-inline:.2rem}.product__card[_ngcontent-%COMP%]   .card__container[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{color:#b2b8ca;white-space:nowrap}"],changeDetection:0}),e})()},57:(a,i,r)=>{r.d(i,{$:()=>d});var t=r(8583),_=r(7716);let d=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({imports:[[t.ez]]}),e})()}}]);