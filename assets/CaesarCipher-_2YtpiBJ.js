import{r as c,c as k,a as e,w as d,v as g,n as v,u as r,b as h,t as x,d as S,o as j}from"./index-DLyUGR0F.js";import{u as z,r as T}from"./index-DuZdS_PJ.js";const U={class:"container"},D={class:"form-group"},V={class:"form-group"},B={for:"shift",class:"form-label"},E={class:"form-group btn-group"},q=["disabled"],A={class:"container-answer"},W={class:"text-result"},N={__name:"CaesarCipher",setup(Z){const o=c(""),l=c(""),n=c(1),t=z({inputMessage:{required:T,alphaWithSpaces:i=>/^[a-zA-Z\s]*$/.test(i)}},{inputMessage:o}),C=async()=>{if(t.value.$invalid){t.value.$touch();return}},y=()=>{l.value=f(o.value,n.value)},M=()=>{l.value=f(o.value,-n.value)},f=(i,s)=>{const a="abcdefghijklmnopqrstuvwxyz";return i.split("").map(u=>{const _=u===u.toUpperCase(),$=u.toLowerCase(),m=a.indexOf($);if(m===-1)return u;let p=(m+s)%a.length;p<0&&(p=a.length+p);const b=a[p];return _?b.toUpperCase():b}).join("")},w=async()=>{try{await navigator.clipboard.writeText(l.value),alert("Texto copiado al portapapeles")}catch{alert("Error al copiar el texto")}};return(i,s)=>(j(),k("div",U,[e("form",{class:"container-caeser",onSubmit:S(C,["prevent"])},[s[3]||(s[3]=e("h1",{class:"title"},"Cifrado César",-1)),e("div",D,[s[2]||(s[2]=e("label",{for:"message",class:"form-label"}," Mensaje a cifrar: ",-1)),d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),id:"message",type:"text",autocomplete:"off",placeholder:"Ej. Hola esto es cifrado de cesar",class:v(["form-control",{"form-error":r(t).inputMessage.$invalid&&o.value.length}])},null,2),[[g,o.value]]),d(e("span",{class:v({"text-error":r(t).inputMessage.$invalid})}," Solo se permiten letras (A-Z y a-z) ",2),[[h,r(t).inputMessage.$invalid&&o.value.length]])]),e("div",V,[e("label",B," Desplazamiento: "+x(n.value),1),d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),type:"range",min:"1",max:"25",id:"shift",class:"form-slider"},null,512),[[g,n.value,void 0,{number:!0}]])]),e("div",E,[e("button",{onClick:y,class:v(["btn btn-primary",{disabled:r(t).inputMessage.$invalid}]),disabled:r(t).inputMessage.$invalid}," Cifrar ",10,q),e("button",{onClick:M,class:"btn btn-texted"}," Descifrar ")])],32),d(e("div",A,[s[4]||(s[4]=e("h3",{class:"title"},"Texto cifrado:",-1)),s[5]||(s[5]=e("hr",{class:"divider"},null,-1)),e("p",W,x(l.value),1),s[6]||(s[6]=e("hr",{class:"divider"},null,-1)),e("button",{class:"btn btn-texted btn-texted--link",onClick:w}," Copiar mensaje ")],512),[[h,l.value&&!r(t).inputMessage.$error]])]))}};export{N as default};
