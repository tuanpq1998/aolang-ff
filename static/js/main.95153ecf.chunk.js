(this.webpackJsonpaolangff=this.webpackJsonpaolangff||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),l=s(10),i=s.n(l),c=(s(26),s(27),s(2)),o=s(3),r=s(4),d=s(8),h=s(6),u=s(5),b="8p_1v1",j=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},m=function(e){switch(e){case b:for(var t={},s={},n=1;n<=8;n++)t["t".concat(n)]={teamName:"Team ".concat(n),location:{x:3,y:3+4*(n-1)},image:"",disable:!1,color:j()},n%2===0&&((s={})["t".concat(n-1)]="t".concat(n-1),s["t".concat(n)]="t".concat(n),t["w".concat(n-1).concat(n)]={child:s,result:"0-0",pen:"",won:"",color:"",location:{x:t["t".concat(n-1)].location.x+3+4,y:(t["t".concat(n-1)].location.y+t["t".concat(n)].location.y)/2}}),n%4===0&&((s={})["w".concat(n-3).concat(n-2)]="",s["w".concat(n-1).concat(n)]="",t["w".concat(n-3).concat(n-2).concat(n-1).concat(n)]={child:s,result:"0-0",pen:"",won:"",color:"",location:{x:t["w".concat(n-3).concat(n-2)].location.x+3+4,y:(t["w".concat(n-3).concat(n-2)].location.y+t["w".concat(n-1).concat(n)].location.y)/2}});return t.w={child:{w1234:"",w5678:""},result:"0-0",pen:"",isFinal:!0,won:"",color:"",location:{x:t.w1234.location.x+3+4,y:(t.w1234.location.y+t.w5678.location.y)/2}},t.t1.next="w12",t.t2.next="w12",t.t3.next="w34",t.t4.next="w34",t.t5.next="w56",t.t6.next="w56",t.t7.next="w78",t.t8.next="w78",t.w12.next="w1234",t.w34.next="w1234",t.w56.next="w5678",t.w78.next="w5678",t.w1234.next="w",t.w5678.next="w",t}},p=s(20),x=s(52),O=s(0),f=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.model.child.map((function(e){return e.location})),t=Object(p.a)(e,2),s=t[0],n=t[1],a=""!==this.props.model.won?this.props.model.result:"",l=""!==a?Object(O.jsx)("div",{className:"result",children:Object(O.jsx)("p",{children:a.split("-").map((function(e){return Object(O.jsx)("span",{children:e},Object(x.a)())}))})}):"",i={x:s.x+4,y:s.y+1},c={x:n.x+4,y:n.y+1},o={gridColumnStart:i.x,gridRow:"".concat(i.y,"/").concat(c.y)},r={gridColumn:"".concat(i.x+1,"/ span 2"),gridRowStart:"".concat((i.y+c.y)/2)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:o,className:"line-p1"}),Object(O.jsx)("div",{style:r,className:"line-p2",children:this.props.showResult?l:""})]})}}]),s}(n.Component),g=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.location,t=e.x,s=e.y,n={gridColumn:"".concat(t,"/").concat(t+4),gridRow:"".concat(s,"/").concat(s+2),borderLeft:"6px solid ".concat(this.props.borderColor),textDecoration:this.props.disable?"line-through":"none"};return Object(O.jsx)("div",{onClick:this.props.onClick,style:n,className:"team",children:this.props.teamName})}}]),s}(n.Component),v=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.location,t=e.x,s=e.y,n=this.props.model,a={gridColumn:"".concat(t,"/span ").concat(4),gridRow:"".concat(s,"/span ").concat(2),borderLeft:null!=n?"0.41vw solid ".concat(n.color):null,color:this.props.isFinal?"gold":null};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{onClick:this.props.onClick,style:a,className:"team",children:[this.props.isFinal?Object(O.jsx)("span",{className:"material-icons-outlined md-36 gold",children:"emoji_events"}):"",null!==n?n.teamName:""]})})}}]),s}(n.Component),y=s(9),N=s(7),S=s.n(N),w=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={teamName:"",color:"",disable:0},n.initState=n.initState.bind(Object(d.a)(n)),n.handleCheckbox=n.handleCheckbox.bind(Object(d.a)(n)),n}return Object(r.a)(s,[{key:"handleInput",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.submit(Object(c.a)(Object(c.a)({},this.props.model),{},{teamName:""===this.state.teamName?this.props.model.teamName:this.state.teamName,color:""===this.state.color?this.props.model.color:this.state.color,disable:this.state.disable})),this.props.close()}},{key:"handleCheckbox",value:function(){this.setState({disable:0===this.state.disable?!this.props.model.disable:!this.state.disable})}},{key:"initState",value:function(){this.setState({teamName:"",color:"",disable:0})}},{key:"render",value:function(){var e=this,t=this.props.model?this.props.model:{teamName:"",color:"",disable:0},s=t.teamName,n=t.color,a=t.disable;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,onAfterClose:this.initState,className:"modal",closeTimeoutMS:500,overlayClassName:"overlay",children:Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsx)("div",{className:"box_header",children:"Input"}),Object(O.jsxs)("div",{className:"box_body",children:[Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Name: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"teamName",maxLength:"16",onInput:function(t){return e.handleInput(t)},defaultValue:s})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Color: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"color",name:"color",onInput:function(t){return e.handleInput(t)},defaultValue:n})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Image: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"image",disabled:!0})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Disable: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:a,onChange:this.handleCheckbox,type:"checkbox",name:"disable",value:"1"})})]})]}),Object(O.jsxs)("div",{className:"box_footer",children:[Object(O.jsx)("button",{onClick:this.props.close,className:"btn btn-cancel",type:"button",children:"Cancel"}),Object(O.jsx)("input",{className:"btn",type:"submit",value:"Submit"})]})]})})})}}]),s}(n.Component),k=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={won:"",result:[null,null]},n.initState=n.initState.bind(Object(d.a)(n)),n.t0Check=a.a.createRef(),n.t1Check=a.a.createRef(),n}return Object(r.a)(s,[{key:"handleInput",value:function(e){this.setState({won:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.won&&this.props.submit(Object(c.a)(Object(c.a)({},this.props.model),{},{won:this.state.won,result:this.state.result.map((function(e){return null==e||""===e?0:e})).join("-")})),this.props.close()}},{key:"handleResInput",value:function(e,t){var s=this.state.result;s[t]=e.target.value;var n="";s[0]!==s[1]&&(Number(null==s[0]?0:s[0])>Number(null==s[1]?0:s[1])?(n=this.props.model.child[0].id,this.t0Check.current.checked=!0,this.t1Check.current.checked=!1):(n=this.props.model.child[1].id,this.t0Check.current.checked=!1,this.t1Check.current.checked=!0)),this.setState({result:s,won:n})}},{key:"initState",value:function(){this.setState({won:"",result:this.props.model&&""!==this.props.model.result?this.props.model.result.split("-"):[null,null]})}},{key:"render",value:function(){var e=this,t=this.props.model&&2===this.props.model.child.length?this.props.model.child:null,s=this.props.model?this.props.model.won:"",n=this.props.model?this.props.model.result:"",a=this.state.won,l=t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsxs)("div",{className:"left-select",children:[Object(O.jsx)("input",{ref:this.t0Check,id:"sbd-".concat(t[0].id),defaultChecked:t[0].id===a||s===t[0].id,type:"radio",onInput:function(t){return e.handleInput(t)},name:"won",value:t[0].id},"sbd-".concat(t[0].id)),Object(O.jsx)("label",{className:"team",style:{borderLeft:"6px solid ".concat(t[0].color)},htmlFor:"sbd-".concat(t[0].id),children:t[0].teamName})]}),Object(O.jsxs)("div",{className:"right-select",children:[Object(O.jsx)("input",{ref:this.t1Check,id:"sbd-".concat(t[1].id),defaultChecked:t[1].id===a||s===t[1].id,type:"radio",onInput:function(t){return e.handleInput(t)},name:"won",value:t[1].id},"sbd-".concat(t[1].id)),Object(O.jsx)("label",{className:"team",style:{borderLeft:"6px solid ".concat(t[1].color)},htmlFor:"sbd-".concat(t[1].id),children:t[1].teamName})]})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsxs)("div",{className:"left-select",children:[Object(O.jsx)("label",{htmlFor:"",style:{padding:"10px"},children:"Result"}),Object(O.jsx)("input",{defaultValue:n.split("-")[0],onInput:function(t){return e.handleResInput(t,0)},min:0,type:"number",style:{float:"right"},name:"res"})]}),Object(O.jsx)("div",{className:"right-select",children:Object(O.jsx)("input",{defaultValue:n.split("-")[1],onInput:function(t){return e.handleResInput(t,1)},min:0,type:"number",name:"res"})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsxs)("div",{className:"left-select",children:[Object(O.jsx)("label",{htmlFor:"",style:{padding:"10px"},children:"Penalty"}),Object(O.jsx)("input",{disabled:!0,min:0,type:"number",style:{float:"right"},name:"res"})]}),Object(O.jsx)("div",{className:"right-select",children:Object(O.jsx)("input",{disabled:!0,min:0,type:"number",name:"res"})})]})]}):Object(O.jsx)("p",{children:"Ch\u01b0a nh\u1eadp \u0111\u1ee7 k\u1ebft qu\u1ea3!"}),i=t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{onClick:this.props.close,className:"btn btn-cancel",type:"button",children:"Cancel"}),Object(O.jsx)("input",{className:"btn",type:"submit",value:"Submit"})]}):Object(O.jsx)("button",{className:"btn",onClick:this.props.close,children:"Cancel"});return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,className:"modal",onAfterClose:this.initState,overlayClassName:"overlay",children:Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsx)("div",{className:"box_header",children:"Select Winner"}),Object(O.jsx)("div",{className:"box_body",style:{padding:"20px 30px"},children:l}),Object(O.jsx)("div",{className:"box_footer",children:i})]})})})}}]),s}(n.Component),C=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.setting,children:Object(O.jsx)("span",{title:"Setting",className:"material-icons-outlined md-36",children:" settings "})}),Object(O.jsx)("div",{className:"nav-choose",style:{display:this.props.hasFinalResult?null:"none"},onClick:this.props.showFinalResult,children:Object(O.jsx)("span",{title:"Result",className:"material-icons-outlined md-36",children:" equalizer "})}),Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.reset,children:Object(O.jsx)("span",{title:"Reset all team!",className:"material-icons-outlined md-36",children:" restart_alt "})}),Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.export,children:Object(O.jsx)("span",{title:"Export",className:"material-icons-outlined md-36",children:" download "})})]}),this.props.showTitle&&this.props.title.length+this.props.subTitle.length>0?Object(O.jsxs)("div",{className:"heading-container",children:[Object(O.jsx)("div",{className:"heading",children:this.props.title}),Object(O.jsx)("div",{className:"subhead",children:this.props.subTitle})]}):null]})}}]),s}(n.Component),R=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={title:null,subTitle:null,background:null,showResult:0,showTitle:0,remember:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){if(this.props.setting){var e=this.props.setting,t=e.title,s=e.subTitle,n=e.background,a=e.showResult,l=e.showTitle,i=e.remember;this.setState({title:t,subTitle:s,background:n,showResult:a,showTitle:l,remember:i})}}},{key:"handleInput",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleShowResultCheckBox",value:function(){this.setState({showResult:!this.state.showResult})}},{key:"handleShowTitleCheckBox",value:function(){this.setState({showTitle:!this.state.showTitle})}},{key:"handleRememberCheckBox",value:function(){this.setState({remember:!this.state.remember})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:null!=this.state.title?this.state.title:this.props.setting.title,subTitle:null!=this.state.subTitle?this.state.subTitle:this.props.setting.subTitle,background:null!=this.state.background?this.state.background:this.props.setting.background,showResult:this.state.showResult,showTitle:this.state.showTitle,remember:this.state.remember};this.props.submit(t),this.props.close()}},{key:"render",value:function(){var e=this,t=this.props.setting,s=t.title,n=t.subTitle,a=t.background,l=t.showResult,i=t.showTitle,c=t.remember;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,className:"modal",overlayClassName:"overlay",closeTimeoutMS:500,children:Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsx)("div",{className:"box_header",children:"Setting"}),Object(O.jsxs)("div",{className:"box_body",style:{padding:"20px 30px"},children:[Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Title: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"title",maxLength:"11",onInput:function(t){return e.handleInput(t)},defaultValue:s})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"SubTitle: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"subTitle",maxLength:"9",onInput:function(t){return e.handleInput(t)},defaultValue:n})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Show title: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:i,onChange:function(){return e.handleShowTitleCheckBox()},type:"checkbox",name:"showTitle",value:"1"})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Background Image URL: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"url",name:"background",onInput:function(t){return e.handleInput(t)},defaultValue:a})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Show result: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:l,onChange:function(){return e.handleShowResultCheckBox()},type:"checkbox",name:"showResult",value:"1"})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Remember setting & data: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:c,onChange:function(){return e.handleRememberCheckBox()},type:"checkbox",name:"remember",value:"1"})})]})]}),Object(O.jsxs)("div",{className:"box_footer",children:[Object(O.jsx)("button",{onClick:this.props.close,className:"btn btn-cancel",type:"button",children:"Cancel"}),Object(O.jsx)("input",{className:"btn",type:"submit",value:"Submit"})]})]})})})}}]),s}(n.Component),F=s(18),D=s(19),I=s.n(D),T=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).getWidthOfText=function(e,t,s){var n=document.getElementById("Test");return n.innerHTML=e,n.style.fontSize="1.5vw",n.style.fontFamily="Oswald",n.clientWidth+1},e}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.displayFinalResult){var e=this.props.result,t=e.child.find((function(t){return t.id===e.won})).teamName,s=e.child.find((function(t){return t.id!==e.won})).teamName,n="1.5vw",a="Oswald",l={top:"170px",left:"".concat(164.5-Number(this.getWidthOfText(t,n,a))/2,"px"),fontSize:n,fontFamily:a},i={top:"230px",right:"".concat(146.5-Number(this.getWidthOfText(s,n,a))/2,"px"),fontSize:n,fontFamily:a};return I.a.screen(),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S.a,{isOpen:this.props.displayFinalResult,shouldFocusAfterRender:!0,onRequestClose:this.props.closeFinalResult,className:"modal-result",closeTimeoutMS:500,overlayClassName:"overlay",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{className:"box_header",children:"Result"}),Object(O.jsxs)("div",{className:"box_body",children:[Object(O.jsx)("span",{style:l,id:"first",children:t}),Object(O.jsx)("span",{style:i,id:"second",children:s}),Object(O.jsx)("img",{className:"result-img",src:"https://i.imgur.com/tHXdl7T.png",alt:"result-img"})]})]})})})}return Object(O.jsx)(S.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,className:"modal",overlayClassName:"overlay",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{className:"box_header",children:"Error"}),Object(O.jsx)("div",{className:"box_body",children:Object(O.jsx)("p",{children:"Kh\xf4ng th\u1ec3 lo\u1ea1i c\u1ea3 2!"})}),Object(O.jsx)("div",{className:"box_footer",children:Object(O.jsx)("div",{onClick:this.props.close,className:"btn",children:"OK"})})]})})}}]),s}(n.Component),A=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleClickInputBoard=function(e){n.setState({displayInputDialog:!0,editingId:e})},n.handleClickSettingIcon=function(){n.setState({displaySettingDialog:!0})},n.handleClickSelectBoard=function(e){n.setState({displaySelectDialog:!0,editingId:e})},n.handleCloseInputDialog=function(){n.setState({displayInputDialog:!1})},n.handleCloseSelectDialog=function(){n.setState({displaySelectDialog:!1})},n.handleCloseSettingDialog=function(){n.setState({displaySettingDialog:!1})},n.handleCloseAlertDialog=function(){n.setState({displayAlertDialog:!1})},n.handleSubmitInputDialog=function(e){var t=n.state.data,s=e.id;if(t[s].teamName=e.teamName,t[s].color=e.color,t[s].disable=e.disable,e.disable){var a=t[s].next;if(t[Object.keys(t[a].child).find((function(e){return e!==s}))].disable)return t[s].disable=!1,void n.setState({displayAlertDialog:!0});t[a].won=Object.keys(t[a].child).find((function(e){return e!==s})),t[a].result="",t[t[a].next].child[a]=t[a].won}n.setState({data:t}),n.saveTeamData()},n.handleSubmitSelectDialog=function(e){var t=n.state.data,s=e.id;t[s].won=e.won,t[s].result=e.result;var a=t[s].next;a&&(t[a].child[s]=e.won),e.isFinal&&n.setState({displayFinalResultDialog:!0}),n.setState({data:t}),n.saveTeamData()},n.handleClickShowFinalResultDialog=function(){n.setState({displayFinalResultDialog:!0})},n.handleCloseFinalResultDialog=function(){n.setState({displayFinalResultDialog:!1})},n.handleSubmitSettingDialog=function(e){n.setState({setting:Object(c.a)(Object(c.a)({},n.state.setting),e)},(function(){e.remember?(n.saveTeamData(),n.saveSettingData()):localStorage.clear()}))},n.resetAllTeams=function(){n.setState({data:m(b)})},n.state={data:m(b),displayInputDialog:!1,displaySettingDialog:!1,editingId:"",displaySelectDialog:!1,setting:{title:"League",subTitle:"2021",background:"https://i.imgur.com/JWYyjZB.jpg",showResult:!0,theme:"",type:"",remember:!0,showTitle:!0},displayAlertDialog:!1,displayFinalResultDialog:!1},n.handleSubmitInputDialog=n.handleSubmitInputDialog.bind(Object(d.a)(n)),n.handleSubmitSettingDialog=n.handleSubmitSettingDialog.bind(Object(d.a)(n)),n.componentRef=a.a.createRef(),n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){console.log("did mount");var e=null!==JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):m(b),t=null!==JSON.parse(localStorage.getItem("setting"))?JSON.parse(localStorage.getItem("setting")):{title:"League",subTitle:"2021",background:"https://i.imgur.com/JWYyjZB.jpg",showResult:!0,theme:"",type:"",remember:!0,showTitle:!0};this.setState({data:e,setting:t})}},{key:"saveTeamData",value:function(){localStorage.setItem("data",JSON.stringify(this.state.data))}},{key:"saveSettingData",value:function(){localStorage.setItem("setting",JSON.stringify(this.state.setting))}},{key:"render",value:function(){var e=this,t=this.state.setting,s=t.title,n=t.subTitle,a=t.background,l=t.showResult,i=t.showTitle,o=this.state,r=o.editingId,d=o.data,h=o.displayInputDialog,u=o.displaySelectDialog,b=o.displaySettingDialog,j=o.displayAlertDialog,m=o.displayFinalResultDialog,p=h?Object(c.a)(Object(c.a)({},d[r]),{},{id:r}):null,y=u?Object(c.a)(Object(c.a)({},d[r]),{},{id:r,child:Object.values(d[r].child).filter((function(e){return""!==e})).map((function(e){return Object(c.a)({id:e},d[e])}))}):null,N=""!==d.w.won,S=m?Object(c.a)(Object(c.a)({},d.w),{},{child:Object.values(d.w.child).filter((function(e){return""!==e})).map((function(e){return Object(c.a)({id:e},d[e])}))}):null;return Object(O.jsxs)("div",{ref:this.componentRef,children:[Object(O.jsx)(C,{reset:this.resetAllTeams,setting:function(){return e.handleClickSettingIcon()},hasFinalResult:N,showFinalResult:function(){return e.handleClickShowFinalResultDialog()},export:function(){return Object(F.exportComponentAsJPEG)(e.componentRef,{fileName:"".concat(s," - ").concat(n,".jpg")})},title:s,subTitle:n,showTitle:i}),Object(O.jsxs)("div",{id:"main-board",style:{backgroundImage:"url(".concat(a,")")},children:[Object(O.jsx)(R,{display:b,close:this.handleCloseSettingDialog,setting:this.state.setting,submit:this.handleSubmitSettingDialog}),Object(O.jsx)(T,{display:j,close:this.handleCloseAlertDialog,result:S,displayFinalResult:m,closeFinalResult:this.handleCloseFinalResultDialog}),Object(O.jsx)(w,{close:this.handleCloseInputDialog,display:h,model:p,submit:this.handleSubmitInputDialog}),Object(O.jsx)(k,{model:y,close:this.handleCloseSelectDialog,display:u,submit:this.handleSubmitSelectDialog}),Object.keys(d).filter((function(e){return e.startsWith("t")})).map((function(t){return Object(O.jsx)(g,{onClick:function(){return e.handleClickInputBoard(t)},disable:d[t].disable,location:d[t].location,teamName:d[t].teamName,borderColor:d[t].color},Object(x.a)())})),Object.keys(d).filter((function(e){return e.startsWith("w")})).map((function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{showResult:l,model:Object(c.a)(Object(c.a)({},d[t]),{},{child:Object.keys(d[t].child).map((function(e){return d[e]}))})},Object(x.a)()),Object(O.jsx)(v,{isFinal:d[t].isFinal,model:""!==d[t].won?d[d[t].won]:null,onClick:function(){return e.handleClickSelectBoard(t)},location:d[t].location},Object(x.a)())]})}))]})]})}}]),s}(n.Component);var B=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(A,{})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),l(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),S.a.setAppElement("#root"),_()}},[[51,1,2]]]);
//# sourceMappingURL=main.95153ecf.chunk.js.map