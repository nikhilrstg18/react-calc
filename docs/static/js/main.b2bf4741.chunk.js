(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,a,t){e.exports=t(598)},169:function(e,a,t){},595:function(e,a,t){},598:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t.n(l),i=t(162),c=t.n(i),r=(t(169),t(39)),o=t(40),s=t(42),u=t(41),h=t(43),k=t(163),C=t.n(k),b=t(104),d=t.n(b),m=(t(595),function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data.join("");return n.a.createElement("div",{className:"Display"}," ",e," ")}}]),a}(l.Component)),p=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{onClick:this.props.onClick,className:"Button","data-size":this.props.size,"data-value":this.props.value},this.props.label)}}]),a}(l.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Buttons"}," ",this.props.children," ")}}]),a}(l.Component),E=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).calculateOperations=function(){var a=e.state.operations.join("");a&&(a=d.a.eval(a),a=d.a.format(a,{precision:14}),e.setState({operations:[a]}))},e.handleClick=function(a){var t=a.target.getAttribute("data-value");switch(t){case"clear":e.setState({operations:[]});break;case"equal":e.calculateOperations();break;default:var l=C()(e.state.operations,{$push:[t]});e.setState({operations:l})}},e.state={operations:[]},e}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m,{data:this.state.operations}),n.a.createElement(v,null,n.a.createElement(p,{onClick:this.handleClick,label:"CE",value:"clear"}),n.a.createElement(p,{onClick:this.handleClick,label:"7",value:"7"}),n.a.createElement(p,{onClick:this.handleClick,label:"4",value:"4"}),n.a.createElement(p,{onClick:this.handleClick,label:"1",value:"1"}),n.a.createElement(p,{onClick:this.handleClick,label:".",value:"."}),n.a.createElement(p,{onClick:this.handleClick,label:"C",value:"clear"}),n.a.createElement(p,{onClick:this.handleClick,label:"8",value:"8"}),n.a.createElement(p,{onClick:this.handleClick,label:"5",value:"5"}),n.a.createElement(p,{onClick:this.handleClick,label:"2",value:"2"}),n.a.createElement(p,{onClick:this.handleClick,label:"0",value:"0"}),n.a.createElement(p,{onClick:this.handleClick,label:"^",value:"^"}),n.a.createElement(p,{onClick:this.handleClick,label:"9",value:"9"}),n.a.createElement(p,{onClick:this.handleClick,label:"6",value:"6"}),n.a.createElement(p,{onClick:this.handleClick,label:"3",value:"3"}),n.a.createElement(p,{onClick:this.handleClick,label:"00",value:"00"}),n.a.createElement(p,{onClick:this.handleClick,label:"/",value:"/"}),n.a.createElement(p,{onClick:this.handleClick,label:"*",value:"*"}),n.a.createElement(p,{onClick:this.handleClick,label:"-",value:"-"}),n.a.createElement(p,{onClick:this.handleClick,label:"+",value:"+"}),n.a.createElement(p,{onClick:this.handleClick,label:"=",value:"equal"})))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,2,1]]]);
//# sourceMappingURL=main.b2bf4741.chunk.js.map