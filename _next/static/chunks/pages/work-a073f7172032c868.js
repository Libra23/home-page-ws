(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{6242:function(e,r,i){"use strict";i.d(r,{Z:function(){return h}});var t=i(7462),n=i(3366),o=i(7294),a=i(6010),s=i(7192),c=i(1496),m=i(7623),l=i(5113),d=i(8979);function u(e){return(0,d.Z)("MuiCard",e)}(0,i(6087).Z)("MuiCard",["root"]);var p=i(5893);const g=["className","raised"],f=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var h=o.forwardRef((function(e,r){const i=(0,m.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=i,l=(0,n.Z)(i,g),d=(0,t.Z)({},i,{raised:c}),h=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},u,r)})(d);return(0,p.jsx)(f,(0,t.Z)({className:(0,a.Z)(h.root,o),elevation:c?8:void 0,ref:r,ownerState:d},l))}))},4267:function(e,r,i){"use strict";i.d(r,{Z:function(){return f}});var t=i(7462),n=i(3366),o=i(7294),a=i(6010),s=i(7192),c=i(1496),m=i(7623),l=i(8979);function d(e){return(0,l.Z)("MuiCardContent",e)}(0,i(6087).Z)("MuiCardContent",["root"]);var u=i(5893);const p=["className","component"],g=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var f=o.forwardRef((function(e,r){const i=(0,m.Z)({props:e,name:"MuiCardContent"}),{className:o,component:c="div"}=i,l=(0,n.Z)(i,p),f=(0,t.Z)({},i,{component:c}),h=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},d,r)})(f);return(0,u.jsx)(g,(0,t.Z)({as:c,className:(0,a.Z)(h.root,o),ownerState:f,ref:r},l))}))},251:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return i(3342)}])},3342:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return X}});var t=i(5893),n=i(1664),o=i.n(n),a=i(3366),s=i(7462),c=i(7294),m=i(6010),l=i(5408),d=i(9707),u=i(7192),p=i(1496),g=i(7623);var f=c.createContext(),h=i(8979),x=i(6087);function w(e){return(0,h.Z)("MuiGrid",e)}const v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var Z=(0,x.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...v.map((e=>`grid-xs-${e}`)),...v.map((e=>`grid-sm-${e}`)),...v.map((e=>`grid-md-${e}`)),...v.map((e=>`grid-lg-${e}`)),...v.map((e=>`grid-xl-${e}`))]);const S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function $(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function b(e,r,i={}){if(!r||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[i[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:t,sm:n,md:o,lg:a,xl:s}=e;return[Number(t)>0&&(i[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(n)>0&&(i[`spacing-sm-${String(n)}`]||`spacing-sm-${String(n)}`),Number(o)>0&&(i[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(i[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(i[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const M=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{container:i,direction:t,item:n,lg:o,md:a,sm:s,spacing:c,wrap:m,xl:l,xs:d,zeroMinWidth:u}=e.ownerState;return[r.root,i&&r.container,n&&r.item,u&&r.zeroMinWidth,...b(c,i,r),"row"!==t&&r[`direction-xs-${String(t)}`],"wrap"!==m&&r[`wrap-xs-${String(m)}`],!1!==d&&r[`grid-xs-${String(d)}`],!1!==s&&r[`grid-sm-${String(s)}`],!1!==a&&r[`grid-md-${String(a)}`],!1!==o&&r[`grid-lg-${String(o)}`],!1!==l&&r[`grid-xl-${String(l)}`]]}})((({ownerState:e})=>(0,s.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:r}){const i=(0,l.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},i,(e=>{const r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${Z.item}`]={maxWidth:"none"}),r}))}),(function({theme:e,ownerState:r}){const{container:i,rowSpacing:t}=r;let n={};if(i&&0!==t){const r=(0,l.P$)({values:t,breakpoints:e.breakpoints.values});n=(0,l.k9)({theme:e},r,(r=>{const i=e.spacing(r);return"0px"!==i?{marginTop:`-${$(i)}`,[`& > .${Z.item}`]:{paddingTop:$(i)}}:{}}))}return n}),(function({theme:e,ownerState:r}){const{container:i,columnSpacing:t}=r;let n={};if(i&&0!==t){const r=(0,l.P$)({values:t,breakpoints:e.breakpoints.values});n=(0,l.k9)({theme:e},r,(r=>{const i=e.spacing(r);return"0px"!==i?{width:`calc(100% + ${$(i)})`,marginLeft:`-${$(i)}`,[`& > .${Z.item}`]:{paddingLeft:$(i)}}:{}}))}return n}),(function({theme:e,ownerState:r}){let i;return e.breakpoints.keys.reduce(((t,n)=>{let o={};if(r[n]&&(i=r[n]),!i)return t;if(!0===i)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=(0,l.P$)({values:r.columns,breakpoints:e.breakpoints.values}),c="object"===typeof a?a[n]:a;if(void 0===c||null===c)return t;const m=Math.round(i/c*1e8)/1e6+"%";let d={};if(r.container&&r.item&&0!==r.columnSpacing){const i=e.spacing(r.columnSpacing);if("0px"!==i){const e=`calc(${m} + ${$(i)})`;d={flexBasis:e,maxWidth:e}}}o=(0,s.Z)({flexBasis:m,flexGrow:0,maxWidth:m},d)}return 0===e.breakpoints.values[n]?Object.assign(t,o):t[e.breakpoints.up(n)]=o,t}),{})}));var k=c.forwardRef((function(e,r){const i=(0,g.Z)({props:e,name:"MuiGrid"}),n=(0,d.Z)(i),{className:o,columns:l,columnSpacing:p,component:h="div",container:x=!1,direction:v="row",item:Z=!1,lg:$=!1,md:k=!1,rowSpacing:C,sm:N=!1,spacing:j=0,wrap:_="wrap",xl:y=!1,xs:W=!1,zeroMinWidth:R=!1}=n,P=(0,a.Z)(n,S),z=C||j,A=p||j,B=c.useContext(f),H=x?l||12:B,O=(0,s.Z)({},n,{columns:H,container:x,direction:v,item:Z,lg:$,md:k,sm:N,rowSpacing:z,columnSpacing:A,wrap:_,xl:y,xs:W,zeroMinWidth:R}),G=(e=>{const{classes:r,container:i,direction:t,item:n,lg:o,md:a,sm:s,spacing:c,wrap:m,xl:l,xs:d,zeroMinWidth:p}=e,g={root:["root",i&&"container",n&&"item",p&&"zeroMinWidth",...b(c,i),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==m&&`wrap-xs-${String(m)}`,!1!==d&&`grid-xs-${String(d)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==l&&`grid-xl-${String(l)}`]};return(0,u.Z)(g,w,r)})(O);return(0,t.jsx)(f.Provider,{value:H,children:(0,t.jsx)(M,(0,s.Z)({ownerState:O,className:(0,m.Z)(G.root,o),as:h,ref:r},P))})}));function C(e){return(0,h.Z)("MuiCardActionArea",e)}var N=(0,x.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),j=i(7739);const _=["children","className","focusVisibleClassName"],y=(0,p.ZP)(j.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,r)=>r.root})((({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${N.focusHighlight}`]:{opacity:e.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${N.focusVisible} .${N.focusHighlight}`]:{opacity:e.palette.action.focusOpacity}}))),W=(0,p.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,r)=>r.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})));var R=c.forwardRef((function(e,r){const i=(0,g.Z)({props:e,name:"MuiCardActionArea"}),{children:n,className:o,focusVisibleClassName:c}=i,l=(0,a.Z)(i,_),d=i,p=(e=>{const{classes:r}=e;return(0,u.Z)({root:["root"],focusHighlight:["focusHighlight"]},C,r)})(d);return(0,t.jsxs)(y,(0,s.Z)({className:(0,m.Z)(p.root,o),focusVisibleClassName:(0,m.Z)(c,p.focusVisible),ref:r,ownerState:d},l,{children:[n,(0,t.jsx)(W,{className:p.focusHighlight,ownerState:d})]}))}));function P(e){return(0,h.Z)("MuiCardMedia",e)}(0,x.Z)("MuiCardMedia",["root","media","img"]);const z=["children","className","component","image","src","style"],A=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{isMediaComponent:t,isImageComponent:n}=i;return[r.root,t&&r.media,n&&r.img]}})((({ownerState:e})=>(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),B=["video","audio","picture","iframe","img"],H=["picture","img"];var O=c.forwardRef((function(e,r){const i=(0,g.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:o,component:c="div",image:l,src:d,style:p}=i,f=(0,a.Z)(i,z),h=-1!==B.indexOf(c),x=!h&&l?(0,s.Z)({backgroundImage:`url("${l}")`},p):p,w=(0,s.Z)({},i,{component:c,isMediaComponent:h,isImageComponent:-1!==H.indexOf(c)}),v=(e=>{const{classes:r,isMediaComponent:i,isImageComponent:t}=e,n={root:["root",i&&"media",t&&"img"]};return(0,u.Z)(n,P,r)})(w);return(0,t.jsx)(A,(0,s.Z)({className:(0,m.Z)(v.root,o),as:c,role:!h&&l?"img":void 0,ref:r,style:x,ownerState:w,src:h?l||d:void 0},f,{children:n}))})),G=i(7357),E=i(5861),I=i(6242),V=i(4267),F=i(6986),T=i.n(F),L=[{url:"https://miauchi.com/art-works/scratching-flippers-1/",img:"/img/work/scratching_flippers_1.jpg",title:"Scratching Flippers \u2160",text:"was designed by modern artist, Yuri Miauchi. Several motors control flippers motion by use of a microcomputer. Max/MSP enables to collaborate between motion and music."},{url:"/work/",img:"/img/work/profile_movie.png",title:"ProfileMovie",text:"was presented to my family. It is first time to make video."}],X=function(){return(0,t.jsxs)(G.Z,{children:[(0,t.jsx)(G.Z,{component:"img",className:T().img,src:"/img/work/cover.jpg"}),(0,t.jsxs)(G.Z,{component:"main",className:T().main,children:[(0,t.jsx)(E.Z,{gutterBottom:!0,variant:"h4",children:"Work"}),(0,t.jsx)(k,{container:!0,spacing:3,children:L.map((function(e,r){return(0,t.jsx)(k,{item:!0,className:T().grid,children:(0,t.jsx)(I.Z,{children:(0,t.jsx)(o(),{href:e.url,children:(0,t.jsxs)(R,{children:[(0,t.jsx)(O,{component:"img",image:e.img}),(0,t.jsxs)(V.Z,{children:[(0,t.jsx)(E.Z,{gutterBottom:!0,variant:"h5",children:e.title}),(0,t.jsx)(E.Z,{variant:"body2",color:"text.secondary",children:e.text})]})]})})})},e.title)}))})]})]})}},6986:function(e){e.exports={img:"Work_img__9Bnls",main:"Work_main__fHfnL",grid:"Work_grid__NPwBS"}}},function(e){e.O(0,[774,888,179],(function(){return r=251,e(e.s=r);var r}));var r=e.O();_N_E=r}]);