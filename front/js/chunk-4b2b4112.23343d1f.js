(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b2b4112"],{"9bd4":function(e,t,n){"use strict";var a=n("16d6"),c=n("bc3a"),o=n.n(c),r=n("5be7"),s=(new a["a"],function(){function e(){}return e.prototype.getData=function(){return o.a.get(a["a"].vueInstance.axios.defaults.baseURL+"/message",Object(r["a"])())},e.prototype.edit=function(e){return o.a.get(a["a"].vueInstance.axios.defaults.baseURL+"/message/"+e,Object(r["a"])())},e.prototype.create=function(e){return o.a.post(a["a"].vueInstance.axios.defaults.baseURL+"/message",e,Object(r["a"])())},e.prototype.update=function(e,t){return o.a.patch(a["a"].vueInstance.axios.defaults.baseURL+"/message/"+e,t,Object(r["a"])())},e.prototype.updateOrder=function(e){return o.a.post(a["a"].vueInstance.axios.defaults.baseURL+"/message/update-order",e,Object(r["a"])())},e.prototype.destroy=function(e){return o.a.delete(a["a"].vueInstance.axios.defaults.baseURL+"/message/"+e,Object(r["a"])())},e.prototype.changeStatus=function(e,t){return o.a.patch(a["a"].vueInstance.axios.defaults.baseURL+"/message/"+e+"/status",t,Object(r["a"])())},e}());t["a"]=s},ea1e:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"d-flex-flex-column mt-10"},o={class:"toolbar py-5 pt-lg-0",id:"kt_toolbar"},r={id:"kt_toolbar_container",class:"container-xxl d-flex flex-stack flex-wrap"},s={class:"page-title d-flex flex-column me-3"},l=Object(a["createElementVNode"])("h1",{class:"d-flex text-gray-900 fw-bolder my-1 fs-3"},"Mensajes",-1),i={class:"breadcrumb breadcrumb-line fw-bold fs-7 my-1"},d=Object(a["createElementVNode"])("li",{class:"breadcrumb-item text-gray-700"},[Object(a["createElementVNode"])("span",{class:"text-gray-700 text-hover-primary"},"Dashboard")],-1),b={class:"breadcrumb-item text-gray-700"},u=Object(a["createTextVNode"])(" Bloques "),m=Object(a["createElementVNode"])("li",{class:"breadcrumb-item text-primary"},"Mensajes",-1),f={class:"d-flex align-items-center py-3 py-md-1"},O=Object(a["createTextVNode"])(" Agregar nuevo "),j={class:"d-flex flex-column-fluid align-items-start container-xxl"},p={class:"col-12"},h={class:"card card-xl-stretch mb-5 mb-xl-8"},g=Object(a["createElementVNode"])("div",{class:"card-header py-6"},[Object(a["createElementVNode"])("h3",{class:"card-title align-items-start flex-column"},[Object(a["createElementVNode"])("span",{class:"card-label fw-bolder fs-3 mb-1"},"Mensajes")])],-1),x={class:"card-body py-3"},V={class:"table-responsive"},N={class:"table align-middle gs-0 gy-5"},v=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",{class:"fw-bolder text-muted bg-light"},[Object(a["createElementVNode"])("th",{class:"ps-4 rounded-start text-center"},"Orden"),Object(a["createElementVNode"])("th",{class:""},"Mensaje"),Object(a["createElementVNode"])("th",{class:"min-w-125px"},"Concesionario"),Object(a["createElementVNode"])("th",{class:"min-w-125px"},"Sede"),Object(a["createElementVNode"])("th",{class:"min-w-125px text-center"},"Visible"),Object(a["createElementVNode"])("th",{class:"pe-4 min-w-200px text-end rounded-end"})])],-1),E={class:"ps-4 text-center"},C=["textContent"],w=["textContent"],y={class:""},k=["textContent"],L={class:""},B=["textContent"],M={class:"text-center d-flex justify-content-center"},_={class:"form-check form-switch form-check-custom form-check-solid"},D=["onUpdate:modelValue","onClick"],S={class:"text-end pe-4"},U=Object(a["createElementVNode"])("span",{class:"svg-icon svg-icon-3"},[Object(a["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[Object(a["createElementVNode"])("path",{opacity:"0.3",d:"M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z",fill:"black"}),Object(a["createElementVNode"])("path",{d:"M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z",fill:"black"})])],-1),I=["onClick"],T=Object(a["createElementVNode"])("span",{class:"svg-icon svg-icon-3"},[Object(a["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[Object(a["createElementVNode"])("path",{d:"M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z",fill:"black"}),Object(a["createElementVNode"])("path",{opacity:"0.5",d:"M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z",fill:"black"}),Object(a["createElementVNode"])("path",{opacity:"0.5",d:"M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z",fill:"black"})])],-1),H=[T],R={key:0},Z=Object(a["createElementVNode"])("td",{colspan:"6",class:"text-center"},[Object(a["createElementVNode"])("span",{class:"text-muted fw-bold d-block fs-7"},"No se encontraron registros.")],-1),q=[Z];function z(e,t,n,T,Z,z){var J=Object(a["resolveComponent"])("loader"),A=Object(a["resolveComponent"])("router-link"),G=Object(a["resolveComponent"])("draggable");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(J,{show:e.show},null,8,["show"]),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",s,[l,Object(a["createElementVNode"])("ul",i,[d,Object(a["createElementVNode"])("li",b,[Object(a["createVNode"])(A,{to:{name:"blocks-blocks"},class:"text-gray-700 text-hover-primary"},{default:Object(a["withCtx"])((function(){return[u]})),_:1})]),m])]),Object(a["createElementVNode"])("div",f,[Object(a["createVNode"])(A,{to:{name:"blocks-messages-create"},class:"btn btn btn-dark"},{default:Object(a["withCtx"])((function(){return[O]})),_:1})])])]),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",h,[g,Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("table",N,[v,Object(a["createElementVNode"])("tbody",null,[Object(a["createVNode"])(G,{modelValue:e.messages,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.messages=t}),tag:"transition-group","item-key":"id","ghost-class":"ghost",onStart:t[1]||(t[1]=function(t){return e.drag=!0}),onEnd:t[2]||(t[2]=function(t){return e.drag=!1}),onChange:e.changeOrder},{item:Object(a["withCtx"])((function(t){var n=t.element;return[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("td",E,[Object(a["createElementVNode"])("span",{class:"text-dark fw-bolder text-hover-primary fs-6",textContent:Object(a["toDisplayString"])(n.order)},null,8,C)]),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("span",{class:"text-dark fw-bolder text-hover-primary fs-6",textContent:Object(a["toDisplayString"])(n.message)},null,8,w)]),Object(a["createElementVNode"])("td",y,[Object(a["createElementVNode"])("span",{class:"text-muted fw-bold d-block fs-7",textContent:Object(a["toDisplayString"])(n.concessionary_name?n.concessionary_name:"Todos los concesionarios ")},null,8,k)]),Object(a["createElementVNode"])("td",L,[Object(a["createElementVNode"])("span",{class:"text-muted fw-bold d-block fs-7",textContent:Object(a["toDisplayString"])(n.site_name?n.site_name:"Todas las sedes ")},null,8,B)]),Object(a["createElementVNode"])("td",M,[Object(a["createElementVNode"])("label",_,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",value:"1",checked:"checked","onUpdate:modelValue":function(e){return n.visible=e},onClick:function(t){return e.changeValue(t,n)}},null,8,D),[[a["vModelCheckbox"],n.visible]])])]),Object(a["createElementVNode"])("td",S,[Object(a["createVNode"])(A,{to:{name:"blocks-messages-edit",params:{id:n.id}},class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"},{default:Object(a["withCtx"])((function(){return[U]})),_:2},1032,["to"]),Object(a["createElementVNode"])("button",{class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm",onClick:function(t){return e.deleteData(n.id)}},H,8,I)])])]})),_:1},8,["modelValue","onChange"]),0==e.messages.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",R,q)):Object(a["createCommentVNode"])("",!0)])])])])])])])])}var J=n("6c02"),A=n("9bd4"),G=n("3dd1"),F=n.n(G),K=n("b76a"),P=n.n(K),Q=n("af56"),W=Object(a["defineComponent"])({name:"Messages",components:{draggable:P.a},setup:function(){Object(J["d"])();var e=new A["a"],t=Object(a["ref"])([]),n=(Object(a["ref"])(!1),Object(Q["a"])({position:"bottom-left"})),c=function(){t.value=[],e.getData().then((function(e){e.data.forEach((function(e){e.visible=1==e.visible})),t.value=e.data})).catch((function(e){}))},o=function(t){return e.changeStatus(t.id,t).then((function(e){F.a.fire("Confirmación!","Información actualizada","success")})).catch((function(e){F.a.fire("Oh no!","No se guardaron los cambios","error")}))},r=function(e,n){F.a.fire({title:"Confirmación!",text:"¿Esta seguro que desea cambiar el estado?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Guardar",cancelButtonText:"No, Cancelar",reverseButtons:!0}).then((function(e){e.isConfirmed?o(n):t.value.forEach((function(e,a){e.id==n.id&&(t.value[a].visible=!n.visible)}))}))},s=function(t){F.a.fire({title:"Confirmación!",text:"¿Esta seguro que desea eliminar el registro seleccionado?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar",cancelButtonText:"No, Cancelar",reverseButtons:!0}).then((function(n){n.isConfirmed&&e.destroy(t).then((function(e){F.a.fire("Confirmación!","Información eliminada exitosamente","success").then((function(e){c()}))})).catch((function(e){F.a.fire("Oh no!","No se completo la operación","error")}))}))},l=function(){t.value.forEach((function(e,n){t.value[n].order=n+1})),d(i())},i=function(){var e=[];return t.value.forEach((function(t,n){e.push({id:t.id,order:t.order})})),e},d=function(t){e.updateOrder({data:t}).then((function(e){n.success("Orden actualizo")})).catch((function(e){n.error("No se guardaron los cambios")}))};return Object(a["onMounted"])((function(){c()})),{messages:t,changeValue:r,deleteData:s,changeOrder:l}}}),X=n("6b0d"),Y=n.n(X);const $=Y()(W,[["render",z]]);t["default"]=$}}]);
//# sourceMappingURL=chunk-4b2b4112.23343d1f.js.map