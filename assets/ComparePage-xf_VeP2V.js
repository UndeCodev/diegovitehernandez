import{_ as E,r as m,u as k,a as S,b as e,w as i,v as _,n as h,d,e as x,t as n,f as D,i as c,o as U,h as V}from"./index-BZJx1hyy.js";const A={class:"container"},B={class:"form-group"},N={class:"form-group"},T={for:"shift",class:"form-label"},I={class:"form-group"},P={for:"shift",class:"form-label"},W=["max"],Z={class:"form-group btn-group d-grid"},F=["disabled"],G={class:"container-wrapper"},L={class:"container-answer"},O={class:"text-result text-bold"},H={class:"text-normal"},J={class:"text-result text-bold"},K={class:"text-normal"},Q={class:"text-result text-bold"},R={class:"text-normal"},X={class:"container-wrapper"},Y={class:"container-answer"},ee={class:"text-result text-bold"},se={class:"text-normal"},te={class:"text-result text-bold"},ae={class:"text-normal"},oe={class:"text-result text-bold"},le={class:"text-normal"},ne={__name:"ComparePage",setup(re){const a=m(""),f=m(""),b=m(""),p=m(1),r=m(1),o=k({inputMessage:{required:V,alphaWithSpaces:u=>/^[a-zA-Z\s]*$/.test(u)}},{inputMessage:a}),w=async()=>{if(o.value.$invalid){o.value.$touch();return}},y=()=>{z(),q()},z=()=>{f.value=$(a.value,p.value)},$=(u,s)=>{const t="abcdefghijklmnopqrstuvwxyz";return u.split("").map(l=>{const v=l===l.toUpperCase(),j=l.toLowerCase(),C=t.indexOf(j);if(C===-1)return l;let g=(C+s)%t.length;g<0&&(g=t.length+g);const M=t[g];return v?M.toUpperCase():M}).join("")},q=()=>{const u=Math.ceil(a.value.length/r.value);let s="";for(let t=0;t<r.value;t++)for(let l=0;l<u;l++){const v=l*r.value+t;v<a.value.length&&(s+=a.value[v])}b.value=s};return(u,s)=>(U(),S("div",A,[e("form",{class:"container-caeser",onSubmit:D(w,["prevent"])},[s[4]||(s[4]=e("h2",{class:"title"},"Comparación de cifrados",-1)),e("div",B,[s[3]||(s[3]=e("label",{for:"message",class:"form-label"}," Mensaje a cifrar: ",-1)),i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),id:"message",type:"text",autocomplete:"off",placeholder:"Texto a cifrar",class:h(["form-control",{"form-error":d(o).inputMessage.$invalid&&a.value.length}])},null,2),[[_,a.value]]),i(e("span",{class:h({"text-error":d(o).inputMessage.$invalid})}," Solo se permiten letras (A-Z y a-z) ",2),[[x,d(o).inputMessage.$invalid&&a.value.length]])]),e("div",N,[e("label",T," Desplazamiento (César): "+n(p.value),1),i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>p.value=t),type:"range",min:"1",max:"25",id:"shift",class:"form-slider"},null,512),[[_,p.value,void 0,{number:!0}]])]),e("div",I,[e("label",P," No. de columnas (Escítala): "+n(r.value),1),i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>r.value=t),type:"range",min:"1",max:a.value.length,id:"shift",class:"form-slider"},null,8,W),[[_,r.value]])]),e("div",Z,[e("button",{onClick:y,class:h(["btn btn-primary",{disabled:d(o).inputMessage.$invalid}]),disabled:d(o).inputMessage.$invalid}," Comparar ",10,F)])],32),i(e("div",G,[e("div",L,[s[8]||(s[8]=e("h3",{class:"title"},"Cifrado César o desplazamiento.",-1)),e("p",O,[s[5]||(s[5]=c("Mensaje sin cifrar: ")),e("span",H,n(a.value),1)]),e("p",J,[s[6]||(s[6]=c("Mensaje cifrado: ")),e("span",K,n(f.value),1)]),e("p",Q,[s[7]||(s[7]=c("Desplazamiento: ")),e("span",R,n(p.value),1)])]),s[9]||(s[9]=e("div",{class:"container-answer bg-blue"},[e("h3",{class:"title text-blue-dark"},"Descripción del cifrado."),e("p",{class:"text-body text-blue-dark description"},"El cifrado César es un método de sustitución que desplaza las letras del alfabeto por un número fijo de posiciones. Es extremadamente inseguro, ya que puede romperse fácilmente con un ataque de fuerza bruta, probando los 25 posibles desplazamientos, o mediante un análisis de frecuencia. Aunque es sencillo de implementar, su seguridad es prácticamente nula en contextos moderno")],-1))],512),[[x,f.value&&!d(o).inputMessage.$error]]),i(e("div",X,[i(e("div",Y,[s[13]||(s[13]=e("h3",{class:"title"},"Cifrado de Escítala.",-1)),e("p",ee,[s[10]||(s[10]=c("Mensaje sin cifrar: ")),e("span",se,n(a.value),1)]),e("p",te,[s[11]||(s[11]=c("Mensaje cifrado: ")),e("span",ae,n(b.value),1)]),e("p",oe,[s[12]||(s[12]=c("Columnas: ")),e("span",le,n(r.value),1)])],512),[[x,b.value]]),s[14]||(s[14]=e("div",{class:"container-answer bg-yellow"},[e("h3",{class:"title text-yellow-dark"},"Descripción del cifrado."),e("p",{class:"text-body text-yellow-dark description"},"El cifrado Escítala es una técnica de transposición utilizada en la antigua Grecia, que requería una tira de cuero enrollada en un bastón. Su seguridad depende del grosor del bastón, pero es vulnerable a deducción de patrones y análisis de transposición. Aunque más complejo que el César, también es inseguro y obsoleto frente a las técnicas criptográficas actuales. ")],-1))],512),[[x,f.value&&!d(o).inputMessage.$error]])]))}},ce=E(ne,[["__scopeId","data-v-90da2348"]]);export{ce as default};
