"use strict";(self["webpackChunkcomputer_security"]=self["webpackChunkcomputer_security"]||[]).push([[405],{8156:function(e,l,r){r.r(l),r.d(l,{default:function(){return S}});var a=r(285),o=r(9132),t=r(6660),n=r(8253),s=r(7164),c=r(1080);const u={class:"form-group"},d={class:"form-group"},p={class:"form-group"},i={class:"form-group form-group--two-columns"},k={class:"form-group"},m={class:"form-group"},v={class:"form-group"},L={class:"form-group"},f={key:0,class:"container-decrypt"},y={class:"form information-container"},h={class:"form-group"},_={class:"form-group"},b={class:"form-group"},g={class:"form-group"},C={class:"form-group"},w={class:"form-group"},x={class:"form-group"},R={class:"btn btn-md btn-primary"},K={key:0,class:"form information-container information-container--decrypt"},D={class:"form-group"},J={class:"form-group"},V={class:"form-group"},A={class:"form-group"},E={class:"form-group"};var U={__name:"ExpressCipherPage",setup(e){const l=(0,n.KR)(""),r=(0,n.KR)(""),U=(0,n.KR)(""),W=(0,n.KR)(""),j=(0,n.KR)(""),S=(0,n.KR)(""),N=(0,n.KR)(""),T=(0,n.KR)(null),H=(0,n.KR)(null),B=(0,n.KR)(""),I=async()=>{try{const e=await s.A.post("https://recipehub-api-main.vercel.app/encrypt",{key:l.value,name:r.value,email:U.value,phone:W.value,address:j.value,credit_card:S.value,password:N.value});T.value=e.data}catch(e){console.error("Error al cifrar los datos:",e)}},M=async()=>{try{const e=await s.A.post("https://recipehub-api-main.vercel.app/decrypt",{key:l.value,encrypted_name:T.value.encrypted_name,encrypted_email:T.value.encrypted_email,encrypted_phone:T.value.encrypted_phone,encrypted_address:T.value.encrypted_address,encrypted_credit_card:T.value.encrypted_credit_card});H.value=e.data,console.log(H.value)}catch(e){console.error("Error al descifrar los datos:",e)}};return(e,s)=>((0,a.uX)(),(0,a.CE)("section",{class:(0,o.C4)(["container-django",{"container-django--two-columns":T.value}])},[(0,a.Lk)("form",{class:"form form-encrypt",onSubmit:(0,t.D$)(I,["prevent"])},[s[15]||(s[15]=(0,a.Lk)("h1",{class:"form-title text-center mb-bg"},"Cifrado de datos en Express",-1)),(0,a.Lk)("div",u,[s[8]||(s[8]=(0,a.Lk)("div",{class:"form-group form-label--help"},[(0,a.Lk)("label",{for:"key"},"Clave para descifrar"),(0,a.Lk)("span",null,"?")],-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",placeholder:"MySecretPassword123@@","onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),id:"key"},null,512),[[t.Jo,l.value]])]),(0,a.Lk)("div",d,[s[9]||(s[9]=(0,a.Lk)("label",{for:"name"},"Nombre",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",placeholder:"Jane Doe","onUpdate:modelValue":s[1]||(s[1]=e=>r.value=e),id:"name"},null,512),[[t.Jo,r.value]])]),(0,a.Lk)("div",p,[s[10]||(s[10]=(0,a.Lk)("label",{for:"email"},"Correo Electrónico",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email",class:"form-control",placeholder:"jane_doe@outlook.com","onUpdate:modelValue":s[2]||(s[2]=e=>U.value=e),id:"email"},null,512),[[t.Jo,U.value]])]),(0,a.Lk)("div",i,[(0,a.Lk)("div",k,[s[11]||(s[11]=(0,a.Lk)("label",{for:"phone_number"},"Télefono",-1)),(0,a.bo)((0,a.Lk)("input",{type:"phone",class:"form-control",placeholder:"239 555 0108","onUpdate:modelValue":s[3]||(s[3]=e=>W.value=e),id:"phone_number"},null,512),[[t.Jo,W.value]])]),(0,a.Lk)("div",m,[s[12]||(s[12]=(0,a.Lk)("label",{for:"address"},"Dirección",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",placeholder:"234 Fake Street","onUpdate:modelValue":s[4]||(s[4]=e=>j.value=e),id:"address"},null,512),[[t.Jo,j.value]])])]),(0,a.Lk)("div",v,[s[13]||(s[13]=(0,a.Lk)("label",{for:"credit_card"},"Tarjeta de crédito",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",placeholder:"4024 0071 7677 8545","onUpdate:modelValue":s[5]||(s[5]=e=>S.value=e),id:"credit_card"},null,512),[[t.Jo,S.value]])]),(0,a.Lk)("div",L,[s[14]||(s[14]=(0,a.Lk)("label",{for:"password"},"Contraseña",-1)),(0,a.bo)((0,a.Lk)("input",{type:"password",class:"form-control",placeholder:"***************","onUpdate:modelValue":s[6]||(s[6]=e=>N.value=e),id:"password"},null,512),[[t.Jo,N.value]])]),s[16]||(s[16]=(0,a.Lk)("button",{class:"btn btn-md btn-primary mt-bg"},[(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"icon"},[(0,a.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"})]),(0,a.eW)(" Cifrar datos ")],-1))],32),T.value?((0,a.uX)(),(0,a.CE)("div",f,[(0,a.Lk)("article",y,[s[23]||(s[23]=(0,a.Lk)("h2",{class:"information-title text-center title-sticky"}," Datos cifrados ",-1)),s[24]||(s[24]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("div",h,[s[17]||(s[17]=(0,a.Lk)("h3",null,[(0,a.eW)("Nombre: "),(0,a.Lk)("span",{class:"text-primary"},"(RC6)")],-1)),(0,a.Lk)("p",null,(0,o.v_)(T.value.encrypted_name||""),1)]),s[25]||(s[25]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("div",_,[s[18]||(s[18]=(0,a.Lk)("h3",null,[(0,a.eW)("Correo electrónico: "),(0,a.Lk)("span",{class:"text-primary"},"(RC6)")],-1)),(0,a.Lk)("p",null,(0,o.v_)(T.value.encrypted_email||""),1)]),s[26]||(s[26]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("div",b,[s[19]||(s[19]=(0,a.Lk)("h3",null,[(0,a.eW)("Teléfono: "),(0,a.Lk)("span",{class:"text-primary"},"(RABIN)")],-1)),(0,a.Lk)("p",null,(0,o.v_)(T.value.encrypted_phone||""),1)]),s[27]||(s[27]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("div",g,[s[20]||(s[20]=(0,a.Lk)("h3",null,[(0,a.eW)("Dirección: "),(0,a.Lk)("span",{class:"text-primary"},"(RC6)")],-1)),(0,a.Lk)("p",null,(0,o.v_)(T.value.encrypted_address||""),1)]),s[28]||(s[28]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("div",C,[s[21]||(s[21]=(0,a.Lk)("h3",null,[(0,a.eW)("Tarjeta de crédito: "),(0,a.Lk)("span",{class:"text-primary"},"(RABIN)")],-1)),(0,a.Lk)("p",null,(0,o.v_)(T.value.encrypted_credit_card||""),1)]),s[29]||(s[29]=(0,a.Lk)("hr",null,null,-1)),(0,a.Lk)("div",w,[s[22]||(s[22]=(0,a.Lk)("h3",null,[(0,a.eW)("Contraseña: "),(0,a.Lk)("span",{class:"text-primary"},"(HASH)")],-1)),(0,a.Lk)("p",null,(0,o.v_)(T.value.encrypted_password||""),1)])]),(0,a.Lk)("form",{onSubmit:(0,t.D$)(M,["prevent"]),class:"form form-decrypt"},[(0,a.Lk)("div",x,[s[30]||(s[30]=(0,a.Lk)("h2",{class:"text-center"},"Clave secreta para descifrar",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",placeholder:"MySecretPassword123@","onUpdate:modelValue":s[7]||(s[7]=e=>B.value=e)},null,512),[[t.Jo,B.value]])]),(0,a.Lk)("button",R,[(0,a.bF)((0,n.R1)(c.A),{class:"icon"}),s[31]||(s[31]=(0,a.eW)(" Descifrar datos "))])],32),H.value?((0,a.uX)(),(0,a.CE)("article",K,[s[37]||(s[37]=(0,a.Lk)("h2",{class:"information-title text-center title-sticky"}," Datos descifrados ",-1)),(0,a.Lk)("div",D,[s[32]||(s[32]=(0,a.Lk)("h4",null,"Nombre:",-1)),(0,a.Lk)("p",null,(0,o.v_)(H.value.decrypted_name),1)]),(0,a.Lk)("div",J,[s[33]||(s[33]=(0,a.Lk)("h4",null,"Correo electrónico:",-1)),(0,a.Lk)("p",null,(0,o.v_)(H.value.decrypted_email),1)]),(0,a.Lk)("div",V,[s[34]||(s[34]=(0,a.Lk)("h4",null,"Teléfono:",-1)),(0,a.Lk)("p",null,(0,o.v_)(H.value.decrypted_phone),1)]),(0,a.Lk)("div",A,[s[35]||(s[35]=(0,a.Lk)("h4",null,"Dirección:",-1)),(0,a.Lk)("p",null,(0,o.v_)(H.value.decrypted_address),1)]),(0,a.Lk)("div",E,[s[36]||(s[36]=(0,a.Lk)("h4",null,"Tarjeta de crédito:",-1)),(0,a.Lk)("p",null,(0,o.v_)(H.value.decrypted_credit_card),1)]),s[38]||(s[38]=(0,a.Lk)("div",{class:"form-group"},[(0,a.Lk)("h4",null,"Contraseña:"),(0,a.Lk)("p",null,"No es posible descifrar una contraseña en HASH")],-1))])):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0)],2))}},W=r(4307);const j=(0,W.A)(U,[["__scopeId","data-v-005057a4"]]);var S=j}}]);
//# sourceMappingURL=cifradoExpress.514e1731.js.map