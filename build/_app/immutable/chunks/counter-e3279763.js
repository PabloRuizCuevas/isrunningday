import{B as o}from"./index-09adf75e.js";const i=new Intl.DateTimeFormat("de",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3}),r=new Intl.DateTimeFormat("de",{hour:"2-digit",minute:"2-digit",second:"2-digit"});function n(){var t=864e5,e=new Date;return t-(e-e.getTimezoneOffset()*6e4)%t}function s(){let t=new Date-new Date("2023-01-01"),e=Math.floor(t/(1e3*60*60*24));return Boolean(e%2)}const a=n(),m=o(i.format(a)),c=o(r.format(a));console.log("hola");console.log(i.format(a));const f=o(s()),d=()=>{const t=l=>{m.set(i.format(n())),c.set(r.format(n())),f.set(s()),requestAnimationFrame(t)};return{start:()=>{requestAnimationFrame(t)},reset:Function.prototype}},g=d();export{c as a,m as b,f as i,g as t};
