(this.webpackJsonptest_app=this.webpackJsonptest_app||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),l=a.n(r),o=a(7),i=a(2),c=a(3),m=a(5),d=a(4),p=a(6),u=a(12),h=function(){return s.a.createElement("span",{style:{color:"#ff3d00"}},"TIME IS UP!")},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={marked:""},a.onClickMark=function(){localStorage.getItem(a.props.i)?(a.setState({marked:""}),localStorage.removeItem(a.props.i,a.props.task)):(a.setState({marked:a.props.i}),localStorage.setItem(a.props.i,a.props.task))},a.remove=function(e){a.props.remove(a.props.i),a.props.removeDate(a.props.i),a.props.removeTime(a.props.i)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.date+"T"+this.props.time;return s.a.createElement("div",{className:"col s12 m6 l4"},s.a.createElement("div",{className:localStorage.getItem(this.props.i)?"card deep-orange lighten-1 ":"card blue-grey darken-2"},s.a.createElement("div",{className:"card-content white-text"},s.a.createElement("span",{className:"card-title"},this.props.task),s.a.createElement("p",null,"Deadline: "),s.a.createElement("p",{style:{fontSize:"18px",marginBottom:"10px"}},this.props.date," ",this.props.time),s.a.createElement("p",null,"Time remaining:"),s.a.createElement(u.a,{date:e,renderer:function(e){return s.a.createElement("p",{style:{fontSize:"18px"}},e.days>0&&e.days," ",e.days>0&&e.days<2&&"Day"," ",e.days>1&&"Days"," ",e.hours>0&&e.hours," ",e.hours>0&&"h"," ",e.minutes>0&&e.minutes+" min"," ",e.seconds>0&&e.seconds+" sec"," ",e.completed?s.a.createElement(h,null):"")}})),s.a.createElement("div",{className:"card-action"},s.a.createElement("button",{onClick:this.remove,style:{marginRight:"6px"},className:"waves-effect waves-light amber darken-1 btn-small"},"Remove"),s.a.createElement("button",{onClick:this.onClickMark,className:"amber darken-1 waves-light btn-small"},"Mark"))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"col s12 m12 l12"},s.a.createElement("div",{className:"card blue-grey darken-2"},s.a.createElement("div",{className:"card-content white-text"},s.a.createElement("span",{className:"card-title"},"You have no tasks!"),s.a.createElement("p",{style:{fontSize:"18px"}},"Use the form above to add new tasks or enjoy your free time!")),s.a.createElement("div",{className:"card-action"})))}}]),t}(n.Component),f=a(8),k=a.n(f),E=(new Date).getHours(),y=(new Date).getMinutes();y<10&&(y="0"+y),E<10&&(E="0"+E);var S=E+":"+y,b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onInputValChange=function(e){a.setState({inputVal:e.target.value})},a.onDateChange=function(e){a.setState({dateVal:a.dateVal.current.value})},a.onTimeChange=function(e){a.setState({timeVal:a.timeVal.current.value})},a.onButtonClick=function(e){e.preventDefault();var t=a.state,n=t.inputVal,s=t.dateVal,r=t.timeVal,l=t.tasks,i=t.dates,c=t.times,m=[].concat(Object(o.a)(l),[n]),d=[].concat(Object(o.a)(i),[s]),p=[].concat(Object(o.a)(c),[r]);""!==n&&""!==s&&""!==r&&a.setState({tasks:m,inputVal:"",dateVal:"",timeVal:"",dates:d,times:p})},a.removeTask=function(e){var t=a.state.tasks.splice(e,1),n=a.state.tasks.filter((function(e){return e!==t}));a.setState({tasks:n}),1===JSON.parse(localStorage.getItem("tasks")).length&&window.localStorage.clear()},a.removeDate=function(e){var t=a.state.dates.splice(e,1),n=a.state.dates.filter((function(e){return e!==t}));a.setState({dates:n})},a.removeTime=function(e){var t=a.state.times.splice(e,1),n=a.state.times.filter((function(e){return e!==t}));a.setState({times:n})},a.setLocalStorage=function(){localStorage.setItem("tasks",JSON.stringify(a.state.tasks)),localStorage.setItem("dates",JSON.stringify(a.state.dates)),localStorage.setItem("times",JSON.stringify(a.state.times))},a.state={inputVal:"",tasks:localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],dates:localStorage.getItem("dates")?JSON.parse(localStorage.getItem("dates")):[],times:localStorage.getItem("times")?JSON.parse(localStorage.getItem("times")):[],dateVal:(new Date).toLocaleDateString().split(".").reverse().join("-"),timeVal:S},a.dateVal=s.a.createRef(),a.timeVal=s.a.createRef(),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".datepicker");k.a.Datepicker.init(t,{minDate:new Date,format:"yyyy-mm-dd",onClose:e.onDateChange});var a=document.querySelectorAll(".timepicker");k.a.Timepicker.init(a,{twelveHour:!1,onCloseEnd:e.onTimeChange})}))}},{key:"componentDidUpdate",value:function(e,t){t!==this.state.tasks&&this.setLocalStorage()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{position:"relative",height:"100vh"}},s.a.createElement("div",{className:"row container",style:{marginTop:"20px"}},s.a.createElement("form",{className:"col s12"},s.a.createElement("div",{className:"input-field"},s.a.createElement("label",null,"Task"),s.a.createElement("input",{value:this.state.inputVal,onChange:this.onInputValChange,placeholder:"to do",id:"first_name",type:"text"})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{type:"text",ref:this.dateVal,onChange:this.onDateChange,value:this.state.dateVal,className:"datepicker",placeholder:"Deadline Date"}),s.a.createElement("label",null,"Deadline date")),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{type:"text",ref:this.timeVal,onChange:this.onTimeChange,value:this.state.timeVal,id:"time",placeholder:"Deadline Time",className:"timepicker"}),s.a.createElement("label",{htmlFor:"time"},"Deadline time"))),s.a.createElement("button",{onClick:this.onButtonClick,className:"amber darken-1 btn"},"Add task"))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.tasks&&this.state.tasks.map((function(t,a){return s.a.createElement(v,{task:t,key:a,i:a,time:e.state.times[a],date:e.state.dates[a],remove:e.removeTask,removeTime:e.removeTime,removeDate:e.removeDate})})),this.state.tasks&&0===this.state.tasks.length&&s.a.createElement(g,null))),s.a.createElement("div",{className:"footer",style:{position:"fixed",bottom:"0"}},s.a.createElement("p",null," Created by Kacper Makowka"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);l.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.3c310bb8.chunk.js.map