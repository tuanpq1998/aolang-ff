(this.webpackJsonpaolangff=this.webpackJsonpaolangff||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),l=s(10),i=s.n(l),c=(s(26),s(27),s(2)),o=s(3),r=s(4),d=s(8),u=s(6),h=s(5),b="8p_1v1",j=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},p=function(e){switch(e){case b:for(var t={},s={},n=1;n<=8;n++)t["t".concat(n)]={teamName:"Team ".concat(n),location:{x:3,y:3+4*(n-1)},image:"",disable:!1,color:j()},n%2===0&&((s={})["t".concat(n-1)]="t".concat(n-1),s["t".concat(n)]="t".concat(n),t["w".concat(n-1).concat(n)]={child:s,result:"",pen:"",won:"",color:"",location:{x:t["t".concat(n-1)].location.x+3+4,y:(t["t".concat(n-1)].location.y+t["t".concat(n)].location.y)/2}}),n%4===0&&((s={})["w".concat(n-3).concat(n-2)]="",s["w".concat(n-1).concat(n)]="",t["w".concat(n-3).concat(n-2).concat(n-1).concat(n)]={child:s,result:"0-0",pen:"",won:"",color:"",location:{x:t["w".concat(n-3).concat(n-2)].location.x+3+4,y:(t["w".concat(n-3).concat(n-2)].location.y+t["w".concat(n-1).concat(n)].location.y)/2}});return t.w={child:{w1234:"",w5678:""},result:"0-0",pen:"",isFinal:!0,won:"",color:"",location:{x:t.w1234.location.x+3+4,y:(t.w1234.location.y+t.w5678.location.y)/2}},t.t1.next="w12",t.t2.next="w12",t.t3.next="w34",t.t4.next="w34",t.t5.next="w56",t.t6.next="w56",t.t7.next="w78",t.t8.next="w78",t.w12.next="w1234",t.w34.next="w1234",t.w56.next="w5678",t.w78.next="w5678",t.w1234.next="w",t.w5678.next="w",t}},m=s(20),f=s(52),O=s(0),x=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.model.child.map((function(e){return e.location})),t=Object(m.a)(e,2),s=t[0],n=t[1],a=""!==this.props.model.won?this.props.model.result:"",l=""!==a?Object(O.jsx)("div",{className:"result",children:Object(O.jsx)("p",{children:a.split("-").map((function(e){return Object(O.jsx)("span",{children:e},Object(f.a)())}))})}):"",i={x:s.x+4,y:s.y+1},c={x:n.x+4,y:n.y+1},o={gridColumnStart:i.x,gridRow:"".concat(i.y,"/").concat(c.y)},r={gridColumn:"".concat(i.x+1,"/ span 2"),gridRowStart:"".concat((i.y+c.y)/2)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:o,className:"line-p1"}),Object(O.jsx)("div",{style:r,className:"line-p2",children:this.props.showResult?l:""})]})}}]),s}(n.Component),v=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.location,t=e.x,s=e.y,n={gridColumn:"".concat(t,"/").concat(t+4),gridRow:"".concat(s,"/").concat(s+2),borderLeft:"6px solid ".concat(this.props.borderColor),textDecoration:this.props.disable?"line-through":"none"};return Object(O.jsx)("div",{onClick:this.props.onClick,style:n,className:"team",children:this.props.teamName})}}]),s}(n.Component),g=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e=this.props.location,t=e.x,s=e.y,n=this.props.model,a={gridColumn:"".concat(t,"/span ").concat(4),gridRow:"".concat(s,"/span ").concat(2),borderLeft:null!=n?"0.41vw solid ".concat(n.color):null,color:this.props.isFinal?"gold":null};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{onClick:this.props.onClick,style:a,className:"team",children:[this.props.isFinal?Object(O.jsx)("span",{className:"material-icons-outlined md-36 gold",children:"emoji_events"}):"",null!==n?n.teamName:""]})})}}]),s}(n.Component),y=s(9),N=s(7),k=s.n(N),S=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={teamName:"",color:"",disable:0},n.initState=n.initState.bind(Object(d.a)(n)),n.handleCheckbox=n.handleCheckbox.bind(Object(d.a)(n)),n}return Object(r.a)(s,[{key:"handleInput",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.submit(Object(c.a)(Object(c.a)({},this.props.model),{},{teamName:""===this.state.teamName?this.props.model.teamName:this.state.teamName,color:""===this.state.color?this.props.model.color:this.state.color,disable:this.state.disable})),this.props.close()}},{key:"handleCheckbox",value:function(){this.setState({disable:0===this.state.disable?!this.props.model.disable:!this.state.disable})}},{key:"initState",value:function(){this.setState({teamName:"",color:"",disable:0})}},{key:"render",value:function(){var e=this,t=this.props.model?this.props.model:{teamName:"",color:"",disable:0},s=t.teamName,n=t.color,a=t.disable;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(k.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,onAfterClose:this.initState,className:"modal",closeTimeoutMS:500,overlayClassName:"overlay",children:Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsx)("div",{className:"box_header",children:"Input"}),Object(O.jsxs)("div",{className:"box_body",children:[Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Name: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"teamName",maxLength:"16",onInput:function(t){return e.handleInput(t)},defaultValue:s})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Color: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"color",name:"color",onInput:function(t){return e.handleInput(t)},defaultValue:n})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Image: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"image",disabled:!0})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Disable: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:a,onChange:this.handleCheckbox,type:"checkbox",name:"disable",value:"1"})})]})]}),Object(O.jsxs)("div",{className:"box_footer",children:[Object(O.jsx)("button",{onClick:this.props.close,className:"btn btn-cancel",type:"button",children:"Cancel"}),Object(O.jsx)("input",{className:"btn",type:"submit",value:"Submit"})]})]})})})}}]),s}(n.Component),w=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={won:"",result:[null,null]},n.initState=n.initState.bind(Object(d.a)(n)),n.t0Check=a.a.createRef(),n.t1Check=a.a.createRef(),n}return Object(r.a)(s,[{key:"handleInput",value:function(e){this.setState({won:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.won&&this.props.submit(Object(c.a)(Object(c.a)({},this.props.model),{},{won:this.state.won,result:this.state.result.map((function(e){return null==e||""===e?0:e})).join("-")})),this.props.close()}},{key:"handleResInput",value:function(e,t){var s=this.state.result;s[t]=e.target.value;var n="";s[0]!==s[1]&&(Number(null==s[0]?0:s[0])>Number(null==s[1]?0:s[1])?(n=this.props.model.child[0].id,this.t0Check.current.checked=!0,this.t1Check.current.checked=!1):(n=this.props.model.child[1].id,this.t0Check.current.checked=!1,this.t1Check.current.checked=!0)),this.setState({result:s,won:n})}},{key:"initState",value:function(){this.setState({won:"",result:this.props.model&&""!==this.props.model.result?this.props.model.result.split("-"):[null,null]})}},{key:"render",value:function(){var e=this,t=this.props.model&&2===this.props.model.child.length?this.props.model.child:null,s=this.props.model?this.props.model.won:"",n=this.props.model?this.props.model.result:"",a=this.state.won,l=t?"Select":"Error",i=t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsxs)("div",{className:"left-select",children:[Object(O.jsx)("input",{ref:this.t0Check,id:"sbd-".concat(t[0].id),defaultChecked:t[0].id===a||s===t[0].id,type:"radio",onInput:function(t){return e.handleInput(t)},name:"won",value:t[0].id},"sbd-".concat(t[0].id)),Object(O.jsx)("label",{className:"team",style:{borderLeft:"6px solid ".concat(t[0].color)},htmlFor:"sbd-".concat(t[0].id),children:t[0].teamName})]}),Object(O.jsxs)("div",{className:"right-select",children:[Object(O.jsx)("input",{ref:this.t1Check,id:"sbd-".concat(t[1].id),defaultChecked:t[1].id===a||s===t[1].id,type:"radio",onInput:function(t){return e.handleInput(t)},name:"won",value:t[1].id},"sbd-".concat(t[1].id)),Object(O.jsx)("label",{className:"team",style:{borderLeft:"6px solid ".concat(t[1].color)},htmlFor:"sbd-".concat(t[1].id),children:t[1].teamName})]})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsxs)("div",{className:"left-select",children:[Object(O.jsx)("label",{htmlFor:"",style:{padding:"10px"},children:"Result"}),Object(O.jsx)("input",{defaultValue:n.split("-")[0],onInput:function(t){return e.handleResInput(t,0)},min:0,type:"number",style:{float:"right"},name:"res"})]}),Object(O.jsx)("div",{className:"right-select",children:Object(O.jsx)("input",{defaultValue:n.split("-")[1],onInput:function(t){return e.handleResInput(t,1)},min:0,type:"number",name:"res"})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsxs)("div",{className:"left-select",children:[Object(O.jsx)("label",{htmlFor:"",style:{padding:"10px"},children:"Penalty"}),Object(O.jsx)("input",{disabled:!0,min:0,type:"number",style:{float:"right"},name:"res"})]}),Object(O.jsx)("div",{className:"right-select",children:Object(O.jsx)("input",{disabled:!0,min:0,type:"number",name:"res"})})]})]}):Object(O.jsx)("p",{children:"Ch\u01b0a nh\u1eadp \u0111\u1ee7 k\u1ebft qu\u1ea3!"}),c=t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{onClick:this.props.close,className:"btn btn-cancel",type:"button",children:"Cancel"}),Object(O.jsx)("input",{className:"btn",type:"submit",value:"Submit"})]}):Object(O.jsx)("button",{className:"btn",onClick:this.props.close,children:"Cancel"});return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(k.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,className:"modal",onAfterClose:this.initState,overlayClassName:"overlay",children:Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsx)("div",{className:"box_header",children:l}),Object(O.jsx)("div",{className:"box_body",style:{padding:"20px 30px"},children:i}),Object(O.jsx)("div",{className:"box_footer",children:c})]})})})}}]),s}(n.Component),A=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"nav-choose",style:{display:this.props.hasFinalResult?null:"none"},onClick:this.props.showFinalResult,children:Object(O.jsx)("span",{title:"Show result",className:"material-icons-outlined md-36 fade",children:" equalizer "})}),Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.export,children:Object(O.jsx)("span",{title:"Export to JPG",className:"material-icons-outlined md-36 fade",children:" download "})}),Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.reset,children:Object(O.jsx)("span",{title:"Reset all team!",className:"material-icons-outlined md-36 fade",children:" restart_alt "})}),Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.setting,children:Object(O.jsx)("span",{title:"Setting",className:"material-icons-outlined md-36 fade",children:" settings "})}),Object(O.jsx)("div",{className:"nav-choose",onClick:this.props.showAboutMe,children:Object(O.jsx)("span",{title:"About me",className:"material-icons-outlined md-36 fade",children:" info "})})]}),this.props.showTitle&&this.props.title.length+this.props.subTitle.length>0?Object(O.jsxs)("div",{className:"heading-container",children:[Object(O.jsx)("div",{className:"heading",children:this.props.title}),Object(O.jsx)("div",{className:"subhead",children:this.props.subTitle})]}):null]})}}]),s}(n.Component),C=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={title:null,subTitle:null,background:null,showResult:0,showTitle:0,remember:0},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){if(this.props.setting){var e=this.props.setting,t=e.title,s=e.subTitle,n=e.background,a=e.showResult,l=e.showTitle,i=e.remember;this.setState({title:t,subTitle:s,background:n,showResult:a,showTitle:l,remember:i})}}},{key:"handleInput",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleShowResultCheckBox",value:function(){this.setState({showResult:!this.state.showResult})}},{key:"handleShowTitleCheckBox",value:function(){this.setState({showTitle:!this.state.showTitle})}},{key:"handleRememberCheckBox",value:function(){this.setState({remember:!this.state.remember})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:null!=this.state.title?this.state.title:this.props.setting.title,subTitle:null!=this.state.subTitle?this.state.subTitle:this.props.setting.subTitle,background:null!=this.state.background?this.state.background:this.props.setting.background,showResult:this.state.showResult,showTitle:this.state.showTitle,remember:this.state.remember};this.props.submit(t),this.props.close()}},{key:"render",value:function(){var e=this,t=this.props.setting,s=t.title,n=t.subTitle,a=t.background,l=t.showResult,i=t.showTitle,c=t.remember;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(k.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,className:"modal",overlayClassName:"overlay",closeTimeoutMS:500,children:Object(O.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(O.jsx)("div",{className:"box_header",children:"Setting"}),Object(O.jsxs)("div",{className:"box_body",style:{padding:"20px 30px"},children:[Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Title: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"title",maxLength:"11",onInput:function(t){return e.handleInput(t)},defaultValue:s})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"SubTitle: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"text",name:"subTitle",maxLength:"9",onInput:function(t){return e.handleInput(t)},defaultValue:n})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Show title: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:i,onChange:function(){return e.handleShowTitleCheckBox()},type:"checkbox",name:"showTitle",value:"1"})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Background Image URL: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{type:"url",name:"background",onInput:function(t){return e.handleInput(t)},defaultValue:a})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Show result: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:l,onChange:function(){return e.handleShowResultCheckBox()},type:"checkbox",name:"showResult",value:"1"})})]}),Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"left",children:Object(O.jsx)("label",{htmlFor:"",children:"Remember setting & data: "})}),Object(O.jsx)("div",{className:"right",children:Object(O.jsx)("input",{defaultChecked:c,onChange:function(){return e.handleRememberCheckBox()},type:"checkbox",name:"remember",value:"1"})})]})]}),Object(O.jsxs)("div",{className:"box_footer",children:[Object(O.jsx)("button",{onClick:this.props.close,className:"btn btn-cancel",type:"button",children:"Cancel"}),Object(O.jsx)("input",{className:"btn",type:"submit",value:"Submit"})]})]})})})}}]),s}(n.Component),D=s(18),T=s(19),I=s.n(T),R=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).getWidthOfText=function(e,t,s){var n=document.getElementById("Test");return n.innerHTML=e,n.style.fontSize="1.5vw",n.style.fontFamily="Oswald",n.clientWidth+1},e}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.displayAboutMe)return Object(O.jsx)(k.a,{isOpen:this.props.displayAboutMe,shouldFocusAfterRender:!0,onRequestClose:this.props.closeAboutMe,className:"modal",closeTimeoutMS:500,overlayClassName:"overlay",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{className:"box_header",children:"About me"}),Object(O.jsxs)("div",{className:"box_body about-me",children:[Object(O.jsx)("p",{children:"Author: Pham Quang Tuan (with \ud83d\udc96 & reactjs)"}),Object(O.jsxs)("p",{children:["Git: ",Object(O.jsx)("a",{href:"https://github.com/tuanpq1998",children:"tuanpq1998"})]}),Object(O.jsx)("p",{children:"More:"}),Object(O.jsx)("img",{className:"qr-image",alt:"qr-image",src:"data:image/png;base64,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"})]})]})});if(this.props.displayFinalResult){var e=this.props.result,t=e.child.find((function(t){return t.id===e.won})).teamName,s=e.child.find((function(t){return t.id!==e.won})).teamName,n="1.5vw",a="Oswald",l={top:"170px",left:"".concat(164.5-Number(this.getWidthOfText(t,n,a))/2,"px"),fontSize:n,fontFamily:a},i={top:"230px",right:"".concat(146.5-Number(this.getWidthOfText(s,n,a))/2,"px"),fontSize:n,fontFamily:a};return I.a.screen(),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(k.a,{isOpen:this.props.displayFinalResult,shouldFocusAfterRender:!0,onRequestClose:this.props.closeFinalResult,className:"modal-result",closeTimeoutMS:500,overlayClassName:"overlay",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{className:"box_header",children:"Result"}),Object(O.jsxs)("div",{className:"box_body",children:[Object(O.jsx)("span",{style:l,id:"first",children:t}),Object(O.jsx)("span",{style:i,id:"second",children:s}),Object(O.jsx)("img",{className:"result-img",src:"https://i.imgur.com/tHXdl7T.png",alt:"result-img"})]})]})})})}return Object(O.jsx)(k.a,{isOpen:this.props.display,shouldFocusAfterRender:!0,onRequestClose:this.props.close,className:"modal",overlayClassName:"overlay",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{className:"box_header",children:"Error"}),Object(O.jsx)("div",{className:"box_body",children:Object(O.jsx)("p",{children:"Cannot disable two team in same branch!"})}),Object(O.jsx)("div",{className:"box_footer",children:Object(O.jsx)("div",{onClick:this.props.close,className:"btn",children:"OK"})})]})})}}]),s}(n.Component),z=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleClickInputBoard=function(e){n.setState({displayInputDialog:!0,editingId:e})},n.handleClickSettingIcon=function(){n.setState({displaySettingDialog:!0})},n.handleClickSelectBoard=function(e){n.setState({displaySelectDialog:!0,editingId:e})},n.handleCloseInputDialog=function(){n.setState({displayInputDialog:!1})},n.handleCloseSelectDialog=function(){n.setState({displaySelectDialog:!1})},n.handleCloseSettingDialog=function(){n.setState({displaySettingDialog:!1})},n.handleCloseAlertDialog=function(){n.setState({displayAlertDialog:!1})},n.handleSubmitInputDialog=function(e){var t=n.state.data,s=e.id;if(t[s].teamName=e.teamName,t[s].color=e.color,t[s].disable=e.disable,e.disable){var a=t[s].next;if(t[Object.keys(t[a].child).find((function(e){return e!==s}))].disable)return t[s].disable=!1,void n.setState({displayAlertDialog:!0});t[a].won=Object.keys(t[a].child).find((function(e){return e!==s})),t[a].result="",t[t[a].next].child[a]=t[a].won}n.setState({data:t}),n.saveTeamData()},n.handleSubmitSelectDialog=function(e){var t=n.state.data,s=e.id;t[s].won=e.won,t[s].result=e.result;var a=t[s].next;a&&(t[a].child[s]=e.won),e.isFinal&&n.setState({displayFinalResultDialog:!0}),n.setState({data:t}),n.saveTeamData()},n.handleClickShowFinalResultDialog=function(){n.setState({displayFinalResultDialog:!0})},n.handleClickAboutMeDialog=function(){n.setState({displayAboutMeDialog:!0})},n.handleCloseAboutMeDialog=function(){n.setState({displayAboutMeDialog:!1})},n.handleCloseFinalResultDialog=function(){n.setState({displayFinalResultDialog:!1})},n.handleSubmitSettingDialog=function(e){n.setState({setting:Object(c.a)(Object(c.a)({},n.state.setting),e)},(function(){e.remember?(n.saveTeamData(),n.saveSettingData()):localStorage.clear()}))},n.resetAllTeams=function(){n.setState({data:p(b)},(function(){return n.saveTeamData()}))},n.state={data:p(b),displayInputDialog:!1,displaySettingDialog:!1,editingId:"",displaySelectDialog:!1,setting:{title:"League",subTitle:"2021",background:"https://i.imgur.com/JWYyjZB.jpg",showResult:!0,theme:"",type:"",remember:!0,showTitle:!0},displayAlertDialog:!1,displayFinalResultDialog:!1,displayAboutMeDialog:!1},n.handleSubmitInputDialog=n.handleSubmitInputDialog.bind(Object(d.a)(n)),n.handleSubmitSettingDialog=n.handleSubmitSettingDialog.bind(Object(d.a)(n)),n.componentRef=a.a.createRef(),n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=null!==JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):p(b),t=null!==JSON.parse(localStorage.getItem("setting"))?JSON.parse(localStorage.getItem("setting")):{title:"League",subTitle:"2021",background:"https://i.imgur.com/JWYyjZB.jpg",showResult:!0,theme:"",type:"",remember:!0,showTitle:!0};this.setState({data:e,setting:t})}},{key:"saveTeamData",value:function(){localStorage.setItem("data",JSON.stringify(this.state.data))}},{key:"saveSettingData",value:function(){localStorage.setItem("setting",JSON.stringify(this.state.setting))}},{key:"render",value:function(){var e=this,t=this.state.setting,s=t.title,n=t.subTitle,a=t.background,l=t.showResult,i=t.showTitle,o=this.state,r=o.editingId,d=o.data,u=o.displayInputDialog,h=o.displaySelectDialog,b=o.displaySettingDialog,j=o.displayAlertDialog,p=o.displayFinalResultDialog,m=o.displayAboutMeDialog,y=u?Object(c.a)(Object(c.a)({},d[r]),{},{id:r}):null,N=h?Object(c.a)(Object(c.a)({},d[r]),{},{id:r,child:Object.values(d[r].child).filter((function(e){return""!==e})).map((function(e){return Object(c.a)({id:e},d[e])}))}):null,k=""!==d.w.won,T=p?Object(c.a)(Object(c.a)({},d.w),{},{child:Object.values(d.w.child).filter((function(e){return""!==e})).map((function(e){return Object(c.a)({id:e},d[e])}))}):null;return Object(O.jsxs)("div",{ref:this.componentRef,children:[Object(O.jsx)(A,{reset:this.resetAllTeams,setting:function(){return e.handleClickSettingIcon()},hasFinalResult:k,showFinalResult:function(){return e.handleClickShowFinalResultDialog()},export:function(){return Object(D.exportComponentAsJPEG)(e.componentRef,{fileName:"".concat(s," - ").concat(n,".jpg")})},title:s,subTitle:n,showTitle:i,showAboutMe:this.handleClickAboutMeDialog}),Object(O.jsxs)("div",{id:"main-board",style:{backgroundImage:"url(".concat(a,")")},children:[Object(O.jsx)(C,{display:b,close:this.handleCloseSettingDialog,setting:this.state.setting,submit:this.handleSubmitSettingDialog}),Object(O.jsx)(R,{display:j,close:this.handleCloseAlertDialog,result:T,displayFinalResult:p,closeFinalResult:this.handleCloseFinalResultDialog,displayAboutMe:m,closeAboutMe:this.handleCloseAboutMeDialog}),Object(O.jsx)(S,{close:this.handleCloseInputDialog,display:u,model:y,submit:this.handleSubmitInputDialog}),Object(O.jsx)(w,{model:N,close:this.handleCloseSelectDialog,display:h,submit:this.handleSubmitSelectDialog}),Object.keys(d).filter((function(e){return e.startsWith("t")})).map((function(t){return Object(O.jsx)(v,{onClick:function(){return e.handleClickInputBoard(t)},disable:d[t].disable,location:d[t].location,teamName:d[t].teamName,borderColor:d[t].color},Object(f.a)())})),Object.keys(d).filter((function(e){return e.startsWith("w")})).map((function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{showResult:l,model:Object(c.a)(Object(c.a)({},d[t]),{},{child:Object.keys(d[t].child).map((function(e){return d[e]}))})},Object(f.a)()),Object(O.jsx)(g,{isFinal:d[t].isFinal,model:""!==d[t].won?d[d[t].won]:null,onClick:function(){return e.handleClickSelectBoard(t)},location:d[t].location},Object(f.a)())]})}))]}),Object(O.jsx)("div",{className:"footer",children:(new Date).toLocaleDateString()})]})}}]),s}(n.Component);var F=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(z,{})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),l(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),k.a.setAppElement("#root"),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.1961f064.chunk.js.map