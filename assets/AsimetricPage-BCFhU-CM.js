import{r as s,c as b,a as e,w as d,v as i,g as p,d as k,t,z as N,u as S,A as C,n as T,o as x}from"./index-DSM4_-3t.js";import{r as U,a as D}from"./LockOpenIcon-Dxp6Aj1l.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"form-group"},B={class:"form-group"},E={class:"form-group"},H={class:"form-group form-group--two-columns"},M={class:"form-group"},R={class:"form-group"},P={class:"form-group"},I={class:"form-group"},z={key:0,class:"container-decrypt"},F={class:"form information-container"},J={class:"form-group"},Z={class:"form-group"},q={class:"form-group"},G={class:"form-group"},K={class:"form-group"},L={class:"form-group"},O={class:"form-group"},Q={class:"btn btn-md btn-primary"},W={key:0,class:"form information-container information-container--decrypt"},X={class:"form-group"},Y={class:"form-group"},$={class:"form-group"},h={class:"form-group"},ee={class:"form-group"},oe={__name:"AsimetricPage",setup(re){const u=s(""),m=s(""),v=s(""),c=s(""),f=s(""),y=s(""),g=s(""),l=s(null),n=s(null),w=s(""),_=async()=>{try{const a=await D.post("https://recipehub-api-main.vercel.app/encrypt",{key:u.value,name:m.value,email:v.value,phone:c.value,address:f.value,credit_card:y.value,password:g.value});l.value=a.data}catch(a){console.error("Error al cifrar los datos:",a)}},V=async()=>{try{const a=await D.post("https://recipehub-api-main.vercel.app/decrypt",{key:u.value,encrypted_name:l.value.encrypted_name,encrypted_email:l.value.encrypted_email,encrypted_phone:l.value.encrypted_phone,encrypted_address:l.value.encrypted_address,encrypted_credit_card:l.value.encrypted_credit_card});n.value=a.data,console.log(n.value)}catch(a){console.error("Error al descifrar los datos:",a)}};return(a,o)=>(x(),b("section",{class:T(["container-django",{"container-django--two-columns":l.value}])},[e("form",{class:"form form-encrypt",onSubmit:k(_,["prevent"])},[o[15]||(o[15]=e("h1",{class:"form-title text-center mb-bg"},"Cifrado de datos en Express",-1)),e("div",A,[o[8]||(o[8]=e("div",{class:"form-group form-label--help"},[e("label",{for:"key"},"Clave para descifrar"),e("span",null,"?")],-1)),d(e("input",{type:"text",class:"form-control",placeholder:"MySecretPassword123@@","onUpdate:modelValue":o[0]||(o[0]=r=>u.value=r),id:"key"},null,512),[[i,u.value]])]),e("div",B,[o[9]||(o[9]=e("label",{for:"name"},"Nombre",-1)),d(e("input",{type:"text",class:"form-control",placeholder:"Jane Doe","onUpdate:modelValue":o[1]||(o[1]=r=>m.value=r),id:"name"},null,512),[[i,m.value]])]),e("div",E,[o[10]||(o[10]=e("label",{for:"email"},"Correo Electrónico",-1)),d(e("input",{type:"email",class:"form-control",placeholder:"jane_doe@outlook.com","onUpdate:modelValue":o[2]||(o[2]=r=>v.value=r),id:"email"},null,512),[[i,v.value]])]),e("div",H,[e("div",M,[o[11]||(o[11]=e("label",{for:"phone_number"},"Télefono",-1)),d(e("input",{type:"phone",class:"form-control",placeholder:"239 555 0108","onUpdate:modelValue":o[3]||(o[3]=r=>c.value=r),id:"phone_number"},null,512),[[i,c.value]])]),e("div",R,[o[12]||(o[12]=e("label",{for:"address"},"Dirección",-1)),d(e("input",{type:"text",class:"form-control",placeholder:"234 Fake Street","onUpdate:modelValue":o[4]||(o[4]=r=>f.value=r),id:"address"},null,512),[[i,f.value]])])]),e("div",P,[o[13]||(o[13]=e("label",{for:"credit_card"},"Tarjeta de crédito",-1)),d(e("input",{type:"text",class:"form-control",placeholder:"4024 0071 7677 8545","onUpdate:modelValue":o[5]||(o[5]=r=>y.value=r),id:"credit_card"},null,512),[[i,y.value]])]),e("div",I,[o[14]||(o[14]=e("label",{for:"password"},"Contraseña",-1)),d(e("input",{type:"password",class:"form-control",placeholder:"***************","onUpdate:modelValue":o[6]||(o[6]=r=>g.value=r),id:"password"},null,512),[[i,g.value]])]),o[16]||(o[16]=e("button",{class:"btn btn-md btn-primary mt-bg"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"})]),p(" Cifrar datos ")],-1))],32),l.value?(x(),b("div",z,[e("article",F,[o[23]||(o[23]=e("h2",{class:"information-title text-center title-sticky"}," Datos cifrados ",-1)),o[24]||(o[24]=e("hr",null,null,-1)),e("div",J,[o[17]||(o[17]=e("h3",null,[p("Nombre: "),e("span",{class:"text-primary"},"(RC6)")],-1)),e("p",null,t(l.value.encrypted_name||""),1)]),o[25]||(o[25]=e("hr",null,null,-1)),e("div",Z,[o[18]||(o[18]=e("h3",null,[p("Correo electrónico: "),e("span",{class:"text-primary"},"(RC6)")],-1)),e("p",null,t(l.value.encrypted_email||""),1)]),o[26]||(o[26]=e("hr",null,null,-1)),e("div",q,[o[19]||(o[19]=e("h3",null,[p("Teléfono: "),e("span",{class:"text-primary"},"(RABIN)")],-1)),e("p",null,t(l.value.encrypted_phone||""),1)]),o[27]||(o[27]=e("hr",null,null,-1)),e("div",G,[o[20]||(o[20]=e("h3",null,[p("Dirección: "),e("span",{class:"text-primary"},"(RC6)")],-1)),e("p",null,t(l.value.encrypted_address||""),1)]),o[28]||(o[28]=e("hr",null,null,-1)),e("div",K,[o[21]||(o[21]=e("h3",null,[p("Tarjeta de crédito: "),e("span",{class:"text-primary"},"(RABIN)")],-1)),e("p",null,t(l.value.encrypted_credit_card||""),1)]),o[29]||(o[29]=e("hr",null,null,-1)),e("div",L,[o[22]||(o[22]=e("h3",null,[p("Contraseña: "),e("span",{class:"text-primary"},"(HASH)")],-1)),e("p",null,t(l.value.encrypted_password||""),1)])]),e("form",{onSubmit:k(V,["prevent"]),class:"form form-decrypt"},[e("div",O,[o[30]||(o[30]=e("h2",{class:"text-center"},"Clave secreta para descifrar",-1)),d(e("input",{type:"text",class:"form-control",placeholder:"MySecretPassword123@","onUpdate:modelValue":o[7]||(o[7]=r=>w.value=r)},null,512),[[i,w.value]])]),e("button",Q,[N(S(U),{class:"icon"}),o[31]||(o[31]=p(" Descifrar datos "))])],32),n.value?(x(),b("article",W,[o[37]||(o[37]=e("h2",{class:"information-title text-center title-sticky"}," Datos descifrados ",-1)),e("div",X,[o[32]||(o[32]=e("h4",null,"Nombre: ",-1)),e("p",null,t(n.value.decrypted_name),1)]),e("div",Y,[o[33]||(o[33]=e("h4",null,"Correo electrónico:",-1)),e("p",null,t(n.value.decrypted_email),1)]),e("div",$,[o[34]||(o[34]=e("h4",null,"Teléfono:",-1)),e("p",null,t(n.value.decrypted_phone),1)]),e("div",h,[o[35]||(o[35]=e("h4",null,"Dirección:",-1)),e("p",null,t(n.value.decrypted_address),1)]),e("div",ee,[o[36]||(o[36]=e("h4",null,"Tarjeta de crédito:",-1)),e("p",null,t(n.value.decrypted_credit_card),1)]),o[38]||(o[38]=e("div",{class:"form-group"},[e("h4",null,"Contraseña:"),e("p",null,"No es posible descifrar una contraseña en HASH")],-1))])):C("",!0)])):C("",!0)],2))}},ne=j(oe,[["__scopeId","data-v-33e06845"]]);export{ne as default};