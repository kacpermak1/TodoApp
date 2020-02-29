(this.webpackJsonptest_app=this.webpackJsonptest_app||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(11),i=a.n(r),o=a(7),l=a(2),c=a(3),m=a(5),p=a(4),d=a(6),u=a(12),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={marked:""},a.onClickMark=function(){localStorage.getItem(a.props.time+a.props.date)?(a.setState({marked:""}),localStorage.removeItem(a.props.time+a.props.date,a.props.task)):(a.setState({marked:a.props.i}),localStorage.setItem(a.props.time+a.props.date,a.props.task))},a.removeMarkedTask=function(){localStorage.getItem(a.props.time+a.props.date)&&localStorage.getItem(a.props.time+a.props.date)===a.props.task&&localStorage.removeItem(a.props.time+a.props.date,a.props.task)},a.remove=function(e){a.props.remove(a.props.i),a.props.removeDate(a.props.i),a.props.removeTime(a.props.i),a.removeMarkedTask()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.date+"T"+this.props.time;e=!(!localStorage.getItem(this.props.time+this.props.date)||localStorage.getItem(this.props.time+this.props.date)!==this.props.task);var s=function(){return n.a.createElement("span",{style:{color:e?"#263238":"#ff3d00"}},"TIME IS UP!")};return n.a.createElement("div",{className:"col s12 m6 l6 xl4"},n.a.createElement("div",{className:e?"card deep-orange lighten-1 ":"card blue-grey darken-2",style:{zIndex:"2"}},n.a.createElement("div",{className:"card-content white-text"},n.a.createElement("span",{className:"card-title"},this.props.task),n.a.createElement("p",null,"Deadline: "),n.a.createElement("div",{style:{fontSize:"18px",display:"flex",flexDirection:"row",alignItems:"center"}},n.a.createElement("i",{className:"material-icons",style:{fontSize:"18px",marginRight:"2px"}},"date_range")," ",n.a.createElement("p",null,this.props.date.split("-").reverse().join("."))),n.a.createElement("div",{style:{fontSize:"18px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center"}},n.a.createElement("i",{className:"material-icons",style:{fontSize:"18px",marginRight:"2px"}},"query_builder")," ",n.a.createElement("p",null,this.props.time)),n.a.createElement("p",null,"Time remaining:"),n.a.createElement(u.a,{date:a,renderer:function(e){return n.a.createElement("p",{style:{fontSize:"18px"}},e.days>0&&e.days,e.days>0&&e.days<2&&"Day",e.days>1&&"Days"," ",e.hours>0&&e.hours,e.hours>0&&"h"," ",e.minutes>0&&e.minutes+"min"," ",e.seconds>0&&e.seconds+"sec"," ",e.completed?n.a.createElement(s,null):"")}})),n.a.createElement("div",{className:"card-action"},n.a.createElement("button",{className:"btn-floating halfway-fab waves-effect waves-light blue-grey lighten-2",onClick:this.onClickMark},n.a.createElement("i",{className:"material-icons"},"add")),n.a.createElement("button",{onClick:this.remove,style:{marginRight:"6px"},className:"waves-effect waves-light amber darken-1 btn-small"},"Remove"),n.a.createElement("button",{onClick:function(e){return t.props.prioritize(t.props.i)},className:"amber darken-1 waves-light btn-small"},"Prioritize"))))}}]),t}(s.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col s12 m12 l12"},n.a.createElement("div",{className:"card blue-grey darken-2"},n.a.createElement("div",{className:"card-content white-text"},n.a.createElement("span",{className:"card-title"},"You have no tasks!"),n.a.createElement("p",{style:{fontSize:"18px"}},"Use the form above to add new tasks or enjoy your free time!")),n.a.createElement("div",{className:"card-action"})))}}]),t}(s.Component),g=a(8),f=a.n(g),k=(new Date).getHours(),E=(new Date).getMinutes();E<10&&(E="0"+E),k<10&&(k="0"+k);var y=k+":"+E,S=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(m.a)(this,Object(p.a)(t).call(this,e))).onInputValChange=function(e){s.setState({inputVal:e.target.value})},s.onDateChange=function(e){s.setState({dateVal:s.dateVal.current.value})},s.onTimeChange=function(e){s.setState({timeVal:s.timeVal.current.value})},s.onButtonClick=function(e){e.preventDefault();var t=s.state,a=t.inputVal,n=t.dateVal,r=t.timeVal,i=t.tasks,l=t.dates,c=t.times,m=t.incompleteFormAttempt,p=[].concat(Object(o.a)(i),[a]),d=[].concat(Object(o.a)(l),[n]),u=[].concat(Object(o.a)(c),[r]);""!==a&&""!==n&&""!==r?s.setState({tasks:p,inputVal:"",dateVal:"",timeVal:"",dates:d,times:u,incompleteFormAttempt:!1}):s.setState({incompleteFormAttempt:!m})},s.removeTask=function(e){var t=s.state.tasks.splice(e,1),a=s.state.tasks.filter((function(e){return e!==t}));s.setState({tasks:a}),1===JSON.parse(localStorage.getItem("tasks")).length&&window.localStorage.clear()},s.removeDate=function(e){var t=s.state.dates.splice(e,1),a=s.state.dates.filter((function(e){return e!==t}));s.setState({dates:a})},s.removeTime=function(e){var t=s.state.times.splice(e,1),a=s.state.times.filter((function(e){return e!==t}));s.setState({times:a})},s.setLocalStorage=function(){localStorage.setItem("tasks",JSON.stringify(s.state.tasks)),localStorage.setItem("dates",JSON.stringify(s.state.dates)),localStorage.setItem("times",JSON.stringify(s.state.times))},s.prioritizeTask=function(e){var t=s.state,n=t.tasks,r=t.dates,i=t.times,o=a(22),l=o(n,e,0),c=o(r,e,0),m=o(i,e,0);s.setState({tasks:l,dates:c,times:m})},s.state={inputVal:"",tasks:localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],dates:localStorage.getItem("dates")?JSON.parse(localStorage.getItem("dates")):[],times:localStorage.getItem("times")?JSON.parse(localStorage.getItem("times")):[],dateVal:(new Date).toLocaleDateString().split(".").reverse().join("-"),timeVal:y,incompleteFormAttempt:!1},s.dateVal=n.a.createRef(),s.timeVal=n.a.createRef(),s}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".datepicker");f.a.Datepicker.init(t,{minDate:new Date,format:"yyyy-mm-dd",onClose:e.onDateChange});var a=document.querySelectorAll(".timepicker");f.a.Timepicker.init(a,{twelveHour:!1,onCloseEnd:e.onTimeChange})}))}},{key:"componentDidUpdate",value:function(e,t){t!==this.state.tasks&&this.setLocalStorage()}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"background"},n.a.createElement("div",{className:"main_content",style:{height:"100vh",overflow:"scroll",paddingBottom:window.innerWidth<=1024?"120px":"40px"}},n.a.createElement("div",{className:"row container",style:{marginTop:"20px"}},n.a.createElement("form",{className:"col s12"},n.a.createElement("div",{className:"input-field"},n.a.createElement("label",null,"Task"),n.a.createElement("input",{value:this.state.inputVal,onChange:this.onInputValChange,placeholder:"to do",id:"first_name",type:"text"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{type:"text",ref:this.dateVal,onChange:this.onDateChange,value:this.state.dateVal,className:"datepicker",placeholder:"Deadline Date"}),n.a.createElement("label",null,"Deadline date")),n.a.createElement("div",{className:"input-field col s6"},n.a.createElement("input",{type:"text",ref:this.timeVal,onChange:this.onTimeChange,value:this.state.timeVal,id:"time",placeholder:"Deadline Time",className:"timepicker"}),n.a.createElement("label",{htmlFor:"time"},"Deadline time"))),n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("button",{onClick:this.onButtonClick,className:"amber darken-1 btn"},"Add task"),this.state.incompleteFormAttempt?n.a.createElement("p",{className:"form_message"},"Fill all the inputs above"):""))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.tasks&&this.state.tasks.map((function(t,a){return n.a.createElement(h,{task:t,key:a,i:a,time:e.state.times[a],date:e.state.dates[a],remove:e.removeTask,removeTime:e.removeTime,removeDate:e.removeDate,prioritize:e.prioritizeTask})})),this.state.tasks&&0===this.state.tasks.length&&n.a.createElement(v,null)))),n.a.createElement("div",{className:"footer",style:{position:"fixed",bottom:"0"}},n.a.createElement("p",null," Created by Kacper Makowka"))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.6a2a52ce.chunk.js.map