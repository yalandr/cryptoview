"use strict";(self["webpackChunkcryptoview"]=self["webpackChunkcryptoview"]||[]).push([[516],{757:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var r=t(3673),l=t(2323);const s={class:"q-pa-md"},n={class:"q-pa-xs col-xs-12"},o={class:"text-h7 curr-name"};function c(e,a,t,c,i,d){const p=(0,r.up)("q-icon"),u=(0,r.up)("q-input"),m=(0,r.up)("q-card-section"),w=(0,r.up)("q-btn"),f=(0,r.up)("q-card-actions"),h=(0,r.up)("q-card"),b=(0,r.up)("q-table"),g=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(g,{class:""},{default:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r.Wm)(b,{grid:"",title:"",rows:e.coins,columns:e.columns,"row-key":"name",filter:e.filter,"hide-header":"",pagination:{rowsPerPage:10},"rows-per-page-options":[10,20,50,100]},{"top-right":(0,r.w5)((()=>[(0,r.Wm)(u,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filter=a),placeholder:"Search"},{append:(0,r.w5)((()=>[(0,r.Wm)(p,{name:"search"})])),_:1},8,["modelValue"])])),item:(0,r.w5)((a=>[(0,r._)("div",n,[(0,r.Wm)(h,{class:"row flex-center justify-between"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{class:"border-right col-xs-7"},{default:(0,r.w5)((()=>[(0,r._)("span",o,(0,l.zw)(a.row.name),1)])),_:2},1024),(0,r.Wm)(m,{class:"flex flex-center text-center uppercase border-right col-xs-3 text-green-5 curr-code"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(a.row.symbol),1)])),_:2},1024),(0,r.Wm)(f,{class:"flex flex-center col-xs-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,{size:"lg",color:"deep-purple-6",class:"view-btn",label:"View",onClick:t=>e.navToCryptoDetails(a.row.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])])),_:1},8,["rows","columns","filter"])])])),_:1})}const i=(0,r.aZ)({name:"PageIndex",data:()=>({coins:[],columns:[{name:"name",align:"center",label:"Name",field:"name"},{name:"symbol",align:"center",label:"Symbol",field:"symbol"}],filter:""}),async created(){try{const e=await this.$api.get("coins/list");200===e.status?this.coins=e.data:alert("Fetching Error")}catch(e){alert("Fetching Error")}},methods:{navToCryptoDetails(e){this.$router.push({name:"CryptoDetails",params:{id:e}})}}});var d=t(4260),p=t(4379),u=t(4979),m=t(4842),w=t(4554),f=t(151),h=t(5589),b=t(9367),g=t(8240),x=t(7518),y=t.n(x);const q=(0,d.Z)(i,[["render",c]]),C=q;y()(i,"components",{QPage:p.Z,QTable:u.Z,QInput:m.Z,QIcon:w.Z,QCard:f.Z,QCardSection:h.Z,QCardActions:b.Z,QBtn:g.Z})}}]);