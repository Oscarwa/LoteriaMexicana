(this.webpackJsonploteria=this.webpackJsonploteria||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),l=(n(25),n(3)),s=n(4),i=n(6),u=n(5),d=(n(26),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.className,a=e.style;return r.a.createElement("img",{src:t,className:n,alt:"?",style:a})}}]),n}(a.Component));d.defaultProps={className:"card_image"};var f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.downside,n=e.skew,a=e.offset,o="LoteriaMexicana/img/"+e.id+".png",c={};return t?o="LoteriaMexicana/img/B.png":c={transform:"rotate(".concat(n,"deg)"),right:"".concat(a.x,"rem"),top:"".concat(a.y,"rem")},r.a.createElement("div",{className:t?"back":"card",style:c},r.a.createElement(d,{src:o}))}}]),n}(a.Component);f.defaultProps={skew:0,offset:{x:0,y:0}};var m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.cards,a=t.list;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"list"},n&&n.map((function(e,t){return r.a.createElement(f,{key:e.id,id:e.id,downside:!1,offset:{x:-10*t,y:0}})}))):r.a.createElement("div",{className:"stack"},n&&n.map((function(t){return r.a.createElement(f,{key:t.id,id:t.id,downside:e.props.downside,skew:t.skew,offset:t.offset})}))))}}]),n}(a.Component);m.defaultProps={list:!1};var h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cards:[],opened:[],closed:[],review:[]},e.rnd=function(e,t){return Math.random()*(t-e)+e},e.refresh=function(t){e.shuffle(t),console.log(t)},e.shuffle=function(t){var n=0,a=0,r=null;for(n=t.length-1;n>0;n-=1)a=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[a],t[a]=r;e.setState({cards:t,closed:t})},e.next=function(){for(var t=e.state,n=t.opened,a=t.closed,r=t.review;r.length;){var o=r.pop();n.push(o)}var c=a.pop();n.push(c),e.setState({closed:a,opened:n,review:r})},e.review=function(){var t=e.state,n=t.opened,a=t.review;if(!(a.length>=8)){var r=n.pop();a.push(r),e.setState({opened:n,review:a})}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<54;t++)e.push({id:t+1,skew:this.rnd(-10,10),offset:{x:this.rnd(-5,5),y:this.rnd(-5,5)}});this.refresh(e)}},{key:"render",value:function(){var e=this.state,t=e.opened,n=e.closed,a=e.review;return r.a.createElement("div",{className:"deck"},r.a.createElement("div",{className:"closed",onClick:this.next},r.a.createElement(m,{cards:n,downside:!0})),r.a.createElement("div",{className:"opened",onClick:this.review},r.a.createElement(m,{cards:t})),r.a.createElement("div",{className:"review"},r.a.createElement(m,{cards:a,list:!0})))}}]),n}(a.Component),p=n(12),v=n(1),g=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).rnd=function(e,t){return Math.random()*(t-e)+e},e.state={offset:{x:e.rnd(1,4),y:e.rnd(3,10),deg:e.rnd(0,360)}},e.toggleToken=function(){e.setState({token:!e.state.token})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.card,n=e.token,a=e.fn,o=this.state.offset,c={transform:"rotate(".concat(o.deg,"deg)"),left:"".concat(o.x,"vh"),top:"".concat(o.y,"vh")};return r.a.createElement("div",{onClick:a,className:"board_tile"},r.a.createElement(d,{src:t.src,className:"board_image"}),n?r.a.createElement(d,{src:"LoteriaMexicana/img/token.png",className:"token",style:c}):null)}}]),n}(a.Component),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tokens:Array(16).fill(!1)},e.toggleToken=function(t){var n=e.state.tokens;n[t]=!n[t],e.setState({tokens:n})},e.restart=function(){e.setState({tokens:Array(16).fill(!1)})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.boardCards,n=this.state.tokens;return r.a.createElement(r.a.Fragment,null,t&&t.length&&r.a.createElement("div",{className:"board"},r.a.createElement("div",null,r.a.createElement(g,{card:t[0],token:n[0],fn:function(){e.toggleToken(0)}}),r.a.createElement(g,{card:t[1],token:n[1],fn:function(){e.toggleToken(1)}}),r.a.createElement(g,{card:t[2],token:n[2],fn:function(){e.toggleToken(2)}}),r.a.createElement(g,{card:t[3],token:n[3],fn:function(){e.toggleToken(3)}})),r.a.createElement("div",null,r.a.createElement(g,{card:t[4],token:n[4],fn:function(){e.toggleToken(4)}}),r.a.createElement(g,{card:t[5],token:n[5],fn:function(){e.toggleToken(5)}}),r.a.createElement(g,{card:t[6],token:n[6],fn:function(){e.toggleToken(6)}}),r.a.createElement(g,{card:t[7],token:n[7],fn:function(){e.toggleToken(7)}})),r.a.createElement("div",null,r.a.createElement(g,{card:t[8],token:n[8],fn:function(){e.toggleToken(8)}}),r.a.createElement(g,{card:t[9],token:n[9],fn:function(){e.toggleToken(9)}}),r.a.createElement(g,{card:t[10],token:n[10],fn:function(){e.toggleToken(10)}}),r.a.createElement(g,{card:t[11],token:n[11],fn:function(){e.toggleToken(11)}})),r.a.createElement("div",null,r.a.createElement(g,{card:t[12],token:n[12],fn:function(){e.toggleToken(12)}}),r.a.createElement(g,{card:t[13],token:n[13],fn:function(){e.toggleToken(13)}}),r.a.createElement(g,{card:t[14],token:n[14],fn:function(){e.toggleToken(14)}}),r.a.createElement(g,{card:t[15],token:n[15],fn:function(){e.toggleToken(15)}}))),r.a.createElement("button",{onClick:this.restart},"Reiniciar"))}}]),n}(a.Component),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cards:[],boardCards:[]},e.generateBoard=function(){var t=e.state.cards,n=0,a=0,r=null;for(n=t.length-1;n>0;n-=1)a=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[a],t[a]=r;var o=t.slice(0,16);e.setState({boardCards:o})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=[],n=0;n<54;n++)t.push({id:n+1,src:"LoteriaMexicana/img/".concat(n+1,".png")});this.setState({cards:t},(function(){e.generateBoard()}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{boardCards:this.state.boardCards}),r.a.createElement("button",{onClick:this.generateBoard},"Cambiar"))}}]),n}(a.Component),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/host"},r.a.createElement(h,null)),r.a.createElement(v.a,{path:"/player"},r.a.createElement(E,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement("div",{className:"start"},r.a.createElement(p.b,{to:"/host",className:"main-btn"},"Anfitrion"),r.a.createElement(p.b,{to:"/player",className:"main-btn"},"Jugador")))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.caccec56.chunk.js.map