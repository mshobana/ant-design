(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b65c6d4b"],{b65c6d4b:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return L;}});var n=t("777fffbe"),d=t("f19d2b93");t("959dc97e");var r=t("5b220c3d"),l=t("e22febe0"),s=t("a9d1a279"),i=n._(t("072ab8a9")),o=n._(t("738f1298")),c=n._(t("de3ef184"));i.default.extend(o.default);let{Panel:h}=s.Collapse,{TreeNode:x}=s.Tree,{TabPane:m}=s.Tabs,{Meta:u}=s.Card,{Link:p}=s.Anchor,{Text:j}=s.Typography,k=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,y=Array.from({length:20}).map((e,a)=>({key:a.toString(),title:`content${a+1}`,description:`description of content${a+1}`,disabled:a%3<1})),f=y.filter(e=>Number(e.key)%3>1).map(e=>e.key),g=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}],b=[{title:"Name",dataIndex:"name"},{title:"Borrow",dataIndex:"borrow"},{title:"Repayment",dataIndex:"repayment"}],C=[{key:"1",name:"John Brown",borrow:10,repayment:33},{key:"2",name:"Jim Green",borrow:100,repayment:0},{key:"3",name:"Joe Black",borrow:10,repayment:10},{key:"4",name:"Jim Red",borrow:75,repayment:45}],w=Array.from({length:3}).map((e,a)=>({key:a,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"})),T=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state",render:()=>(0,d.jsxs)("span",{children:[(0,d.jsx)(s.Badge,{status:"success"}),"Finished"]})},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation",render:()=>(0,d.jsxs)("span",{className:"table-operation",children:[(0,d.jsx)("a",{children:"Pause"}),(0,d.jsx)("a",{children:"Stop"}),(0,d.jsx)(s.Dropdown,{children:(0,d.jsxs)("a",{children:["More ",(0,d.jsx)(l.DownOutlined,{})]})})]})}],S=()=>(0,d.jsx)(s.Table,{columns:T,dataSource:w,pagination:!1}),I=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation",render:()=>(0,d.jsx)("a",{children:"Publish"})}],v=Array.from({length:3}).map((e,a)=>({key:a,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"})),N=[{title:"Full Name",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"Age",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"Column 1",dataIndex:"address",key:"1"},{title:"Column 2",dataIndex:"address",key:"2"},{title:"Column 3",dataIndex:"address",key:"3"},{title:"Column 4",dataIndex:"address",key:"4"},{title:"Column 5",dataIndex:"address",key:"5"},{title:"Column 6",dataIndex:"address",key:"6"},{title:"Column 7",dataIndex:"address",key:"7"},{title:"Column 8",dataIndex:"address",key:"8"},{title:"Action",key:"operation",fixed:"right",width:100,render:()=>(0,d.jsx)("a",{children:"action"})}],A=[{key:"1",name:"John Brown",age:32,address:"New York Park"},{key:"2",name:"Jim Green",age:40,address:"London Park"}],P=e=>{let{leftColumns:a,rightColumns:t,...n}=e;return(0,d.jsx)(s.Transfer,{...n,showSelectAll:!1,children:e=>{let{direction:n,filteredItems:r,onItemSelectAll:l,onItemSelect:i,selectedKeys:o,disabled:h}=e;return(0,d.jsx)(s.Table,{id:"components-transfer-table",rowSelection:{getCheckboxProps:e=>({disabled:h||e.disabled}),onSelectAll(e,a){let t=a.filter(e=>!e.disabled).map(({key:e})=>e),n=e?(0,c.default)(t,o):(0,c.default)(o,t);l(n,e);},onSelect({key:e},a){i(e,a);},selectedRowKeys:o},columns:("left"===n?a:t)??[],dataSource:r,size:"small",style:{pointerEvents:h?"none":"auto"},onRow:({key:e,disabled:a})=>({onClick:()=>{a||h||i(e,!o.includes(e));}})});}});},B=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:null,onFilter:(e,a)=>a.name.includes(e),sorter:(e,a)=>e.name.length-a.name.length,sortOrder:"ascend",ellipsis:!0},{title:"Age",dataIndex:"age",key:"age",sorter:!1,sortOrder:"ascend",ellipsis:!0},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:null,onFilter:(e,a)=>a.address.includes(e),sorter:!1,sortOrder:"ascend",ellipsis:!0}],J=[{dataIndex:"title",title:"Name"},{dataIndex:"description",title:"Description"}];var L=()=>{let[e,a]=(0,r.useState)(!1),[t,n]=(0,r.useState)(f),[o,c]=(0,r.useState)([]),[w,T]=(0,r.useState)(!1),[L,O]=(0,r.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Button,{type:"primary",onClick:()=>{a(!0);},children:"Open Modal"}),(0,d.jsxs)(s.Modal,{title:"Basic Modal",open:e,onOk:e=>{console.log(e),a(!1);},onCancel:e=>{console.log(e),a(!1);},children:[(0,d.jsx)(s.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:w,onChange:e=>{T(e);},style:{marginBottom:16}}),(0,d.jsxs)(s.Card,{title:"Card Title",children:[(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{hoverable:!1,children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"}),(0,d.jsx)(s.Card.Grid,{children:"Content"})]}),(0,d.jsxs)(s.Collapse,{children:[(0,d.jsx)(h,{header:"This is panel header 1",children:(0,d.jsx)(s.Collapse,{defaultActiveKey:"1",children:(0,d.jsx)(h,{header:"This is panel nest panel",children:(0,d.jsx)("p",{children:k})},"1")})},"1"),(0,d.jsx)(h,{header:"This is panel header 2",children:(0,d.jsx)("p",{children:k})},"2"),(0,d.jsx)(h,{header:"This is panel header 3",children:(0,d.jsx)("p",{children:k})},"3")]}),(0,d.jsx)(s.Transfer,{dataSource:y,titles:["Source","Target"],targetKeys:t,selectedKeys:o,onChange:e=>{n(e);},onSelectChange:(e,a)=>{c([...e,...a]);},render:e=>e.title,disabled:w}),(0,d.jsx)(P,{dataSource:y,targetKeys:t,disabled:w,showSearch:L,leftColumns:J,rightColumns:J,onChange:e=>{n(e);},filterOption:(e,a)=>{var t,n;return(null===(t=a.title)||void 0===t?void 0:t.includes(e))||(null===(n=a.tag)||void 0===n?void 0:n.includes(e));}}),(0,d.jsx)(s.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:w,onChange:e=>{T(e);},style:{marginTop:16}}),(0,d.jsx)(s.Switch,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:L,onChange:e=>{O(e);},style:{marginTop:16}}),(0,d.jsxs)(s.Anchor,{children:[(0,d.jsx)(p,{href:"#anchor-demo-basic",title:"Basic demo"}),(0,d.jsx)(p,{href:"#anchor-demo-static",title:"Static demo"}),(0,d.jsx)(p,{href:"#anchor-demo-basic",title:"Basic demo with Target",target:"_blank"}),(0,d.jsxs)(p,{href:"#API",title:"API",children:[(0,d.jsx)(p,{href:"#Anchor-Props",title:"Anchor Props"}),(0,d.jsx)(p,{href:"#Link-Props",title:"Link Props"})]})]}),(0,d.jsxs)(s.Tabs,{type:"card",children:[(0,d.jsx)(m,{tab:"Tab 1",children:"Content of Tab Pane 1"},"1"),(0,d.jsx)(m,{tab:"Tab 2",children:"Content of Tab Pane 2"},"2"),(0,d.jsx)(m,{tab:"Tab 3",children:"Content of Tab Pane 3"},"3")]}),(0,d.jsxs)(s.Timeline,{children:[(0,d.jsx)(s.Timeline.Item,{children:"Create a services site 2015-09-01"}),(0,d.jsx)(s.Timeline.Item,{children:"Solve initial network problems 2015-09-01"}),(0,d.jsx)(s.Timeline.Item,{dot:(0,d.jsx)(l.ClockCircleOutlined,{style:{fontSize:"16px"}}),color:"red",children:"Technical testing 2015-09-01"}),(0,d.jsx)(s.Timeline.Item,{children:"Network problems being solved 2015-09-01"})]}),(0,d.jsx)(s.Calendar,{}),(0,d.jsx)(s.Tree,{showLine:!0,switcherIcon:(0,d.jsx)(l.DownOutlined,{}),defaultExpandedKeys:["0-0-0"],children:(0,d.jsxs)(x,{title:"parent 1",children:[(0,d.jsxs)(x,{title:"parent 1-0",children:[(0,d.jsx)(x,{title:"leaf"},"0-0-0-0"),(0,d.jsx)(x,{title:"leaf"},"0-0-0-1"),(0,d.jsx)(x,{title:"leaf"},"0-0-0-2")]},"0-0-0"),(0,d.jsx)(x,{title:"parent 1-1",children:(0,d.jsx)(x,{title:"leaf"},"0-0-1-0")},"0-0-1"),(0,d.jsxs)(x,{title:"parent 1-2",children:[(0,d.jsx)(x,{title:"leaf"},"0-0-2-0"),(0,d.jsx)(x,{title:"leaf"},"0-0-2-1")]},"0-0-2")]},"0-0")}),(0,d.jsx)(s.Table,{columns:B,dataSource:g,footer:()=>"Footer"}),(0,d.jsx)(s.Table,{columns:b,dataSource:C,pagination:!1,id:"table-demo-summary",bordered:!0,summary:e=>{let a=0,t=0;return e.forEach(({borrow:e,repayment:n})=>{a+=e,t+=n;}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Total"}),(0,d.jsx)("td",{children:(0,d.jsx)(j,{type:"danger",children:a})}),(0,d.jsx)("td",{children:(0,d.jsx)(j,{children:t})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Balance"}),(0,d.jsx)("td",{colSpan:2,children:(0,d.jsx)(j,{type:"danger",children:a-t})})]})]});}}),(0,d.jsx)("br",{}),(0,d.jsx)(s.Table,{columns:I,expandable:{expandedRowRender:S},dataSource:v}),(0,d.jsx)(s.Table,{columns:N,dataSource:A,scroll:{x:1300,y:100}}),(0,d.jsx)(s.Card,{hoverable:!0,style:{width:240},cover:(0,d.jsx)("img",{draggable:!1,alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),children:(0,d.jsx)(u,{title:"Europe Street beat",description:"www.instagram.com"})}),(0,d.jsx)(s.Slider,{defaultValue:30}),(0,d.jsx)(s.DatePicker,{defaultValue:(0,i.default)("2015/01/01","YYYY/MM/DD"),format:"YYYY/MM/DD"}),(0,d.jsx)(s.Badge,{count:5,children:(0,d.jsx)("a",{href:"#",className:"head-example"})})]})]});};}}]);