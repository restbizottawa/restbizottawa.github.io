"use strict";(self.webpackChunkomega_cli=self.webpackChunkomega_cli||[]).push([[72],{72:(O,s,i)=>{i.d(s,{t2:()=>b});var g=i(5e3),d=i(1135),p=i(9300);const r="primary";class o{constructor(e){Object.assign(this,e)}}let b=(()=>{class t{constructor(){this.spinnerObservable=new d.X(null)}getSpinner(n){return this.spinnerObservable.asObservable().pipe((0,p.h)(l=>l&&l.name===n))}show(n=r,l){return new Promise((a,c)=>{setTimeout(()=>{l&&Object.keys(l).length?(l.name=n,this.spinnerObservable.next(new o(Object.assign(Object.assign({},l),{show:!0}))),a(!0)):(this.spinnerObservable.next(new o({name:n,show:!0})),a(!0))},10)})}hide(n=r,l=10){return new Promise((a,c)=>{setTimeout(()=>{this.spinnerObservable.next(new o({name:n,show:!1})),a(!0)},l)})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);