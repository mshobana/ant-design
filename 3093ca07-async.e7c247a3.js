(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["3093ca07"],{"3093ca07":function(e,l,n){"use strict";n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return r;}});var t=n("852bbaa9"),a=n("f19d2b93");n("32a4e1d5");var i=t._(n("5b220c3d")),o=n("e22febe0"),d=n("a9d1a279");let s=[{key:"sub1",label:"Navigation One Long Long Long Long",icon:(0,a.jsx)(o.MailOutlined,{}),children:[{key:"1",label:"Option 1"},{key:"2",label:"Option 2"},{key:"3",label:"Option 3"},{key:"4",label:"Option 4"}]},{key:"sub2",label:"Navigation Two",icon:(0,a.jsx)(o.AppstoreOutlined,{}),children:[{key:"5",label:"Option 5"},{key:"6",label:"Option 6"},{key:"sub3",label:"Submenu",children:[{key:"7",label:"Option 7"},{key:"8",label:"Option 8"}]}]},{key:"11",label:"Option 11"},{key:"12",label:"Option 12"}];var r=()=>{let[e,l]=(0,i.useState)("dark"),[n,t]=(0,i.useState)("1");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Switch,{checked:"dark"===e,onChange:e=>{l(e?"dark":"light");},checkedChildren:"Dark",unCheckedChildren:"Light"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Menu,{theme:e,onClick:e=>{console.log("click ",e),t(e.key);},selectedKeys:[n],mode:"inline",items:s,inlineCollapsed:!0,_internalRenderMenuItem:e=>i.default.cloneElement(e,{style:{...e.props.style,textDecoration:"underline"}}),_internalRenderSubMenuItem:e=>i.default.cloneElement(e,{style:{...e.props.style,background:"rgba(255, 255, 255, 0.3)"}}),_internalDisableMenuItemTitleTooltip:!0})]});};}}]);