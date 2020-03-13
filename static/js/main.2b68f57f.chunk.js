(this["webpackJsonpwikidata-live-changes"]=this["webpackJsonpwikidata-live-changes"]||[]).push([[0],{289:function(t,e,a){t.exports=a(439)},294:function(t,e,a){},302:function(t,e,a){},438:function(t,e,a){},439:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),s=a(112),i=a.n(s),c=(a(294),a(74)),o=a(53),l=a(10),u=a(11),h=a(18),p=a(17),m=a(19),f=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this))).state=t,a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-md-5 text-left"},r.a.createElement("h1",{class:"text-left  display-3"},r.a.createElement("b",null,this.state.title)),r.a.createElement("h4",null,this.state.subtitle))}}]),e}(r.a.Component),d=(a(93),a(470)),g=a(471),v=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=window.location.href;return r.a.createElement(d.a,null,r.a.createElement(d.a.Collapse,null,r.a.createElement(g.a,null,r.a.createElement(g.a.Link,{as:c.b,to:"/",className:t.endsWith("/")?"nav-link--active":"nav-link"},"Home"),r.a.createElement(g.a.Link,{as:c.b,to:"/page",className:t.endsWith("/page")?"nav-link--active":"nav-link"},"Page"),r.a.createElement(g.a.Link,{as:c.b,to:"/feed",className:t.endsWith("/feed")?"nav-link--active":"nav-link"},"Feed"))))}}]),e}(n.Component),b=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,{history:this.state.history}),r.a.createElement(f,{title:"Wikidata Live",subtitle:"A web app to visualise recent changes to Wikidata in quasi real time."}))}}]),e}(n.Component),y=a(30),x=Object(y.a)(),k=a(16),w=a(9),O=a.n(w),j=function(){function t(e){var a=this;Object(l.a)(this,t),this.eventSource=new EventSource("https://stream.wikimedia.org/v2/stream/recentchange"),this.changes=[],this.maxItems=e,this.eventSource.addEventListener("message",(function(t){return a.handleMessage(t)}))}return Object(u.a)(t,[{key:"handleMessage",value:function(t){var e;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e=JSON.parse(t.data),this.changes.unshift(e),this.changes.length>this.maxItems&&this.changes.pop();case 3:case"end":return a.stop()}}),null,this)}}]),t}();a(302);var E=function(t){return Math.round(Math.abs((new Date).getTime()/1e3-t))},S=function(){var t=Object(n.useState)(new j(30)),e=Object(k.a)(t,1)[0],a=Object(n.useState)({items:e.changes}),s=Object(k.a)(a,2),i=s[0],c=s[1];return Object(n.useEffect)((function(){setInterval((function(){return c({items:e.changes})}),1e3)}),[e.changes]),r.a.createElement("div",null,r.a.createElement("h3",{class:"text-blue text-left"},"Most Recent Activity"),r.a.createElement("ul",{class:"list-group"},i.items.map((function(t,e){return r.a.createElement("li",{class:"list-group-item text-left",key:e},"User ".concat(t.user," did action ").concat(t.type," ").concat(t.title," ").concat(E(t.timestamp)," seconds ago"))}))))},C=a(121),D=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).onClick=function(){a.state.history.push(a.state.pageLink)},a.state={history:a.props.history,title:a.props.title,pageLink:a.props.pageLink,graph:a.props.graph},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(C.a,{onClick:this.onClick,tag:"a",className:"graph-card"},r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{className:"card-title"},this.state.title),this.state.graph))}}]),e}(n.Component),L=a(174),A=a(240),N=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(s)))).render=function(){return r.a.createElement("div",{className:"Graph-Container-Card"},r.a.createElement(A.a,{data:M,margin:{top:5,right:55,bottom:25,left:30},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"transportation",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"count",legendOffset:-40,legendPosition:"middle"},colors:{scheme:"accent"},pointSize:5,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]}))},a}return Object(m.a)(e,t),e}(n.Component),M=[{id:"japan",color:"hsl(187, 70%, 50%)",data:[{x:"plane",y:200},{x:"helicopter",y:90},{x:"boat",y:112},{x:"train",y:2},{x:"subway",y:271},{x:"bus",y:300},{x:"car",y:142},{x:"moto",y:197},{x:"bicycle",y:107},{x:"horse",y:140},{x:"skateboard",y:279},{x:"others",y:229}]}],P=N,G=a(113),B=a(250),T=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).tooltip=function(t,e){return r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:e+t.indexValue,className:"iframe",title:"tooltip-option-2"}))},a.loadData=function(){var t,e,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.props.settings.getData.bind(Object(G.a)(a)),r.next=3,O.a.awrap(t());case 3:e=r.sent,n=e.slice(0,a.state.fullGraph?30:10),a.setState({loaded:!0,data:n});case 6:case"end":return r.stop()}}))},a.state={loaded:!1,data:null,fullGraph:a.props.fullGraph},a.loadData(),a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.refreshInterval=setInterval((function(){var e;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.props.settings.refreshMethod.bind(t),a.next=3,O.a.awrap(e());case 3:case"end":return a.stop()}}))}),this.props.settings.refreshTime)}},{key:"render",value:function(){var t={},e=null,a="",n=null,s=!1,i=null;return this.state.fullGraph?(t={top:5,right:30,bottom:80,left:80},e=!0,a="full-graph-container",this.props.settings.onClick&&(n=this.props.settings.onClick,s=!0),this.props.settings.tooltip&&(i=this.props.settings.tooltip.bind(this))):(t={top:0,right:0,bottom:0,left:0},e=!1,a="Graph-Container-Card"),r.a.createElement("div",null,this.state.loaded?r.a.createElement("div",{className:a},r.a.createElement(B.a,{data:this.state.data,keys:this.props.settings.keys,indexBy:this.props.settings.index,margin:t,padding:.3,colors:{scheme:this.props.settings.colors},colorBy:"index",borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:30,legend:this.props.settings.xAxis,legendPosition:"start",legendOffset:40},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:this.props.settings.yAxis,legendPosition:"middle",legendOffset:-60},enableLabel:e,onClick:s?n:function(){},animate:e,isInteractive:e,motionStiffness:90,motionDamping:15,tooltip:i})):"Loading...")}}]),e}(n.Component),I=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history,graph:a.props.graph,title:a.props.name},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,{history:this.state.history}),r.a.createElement(f,{title:"",subtitle:this.props.name}),this.state.graph)}}]),e}(n.Component),W=function(){var t,e;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(t,e){return e.editcount-t.editcount},e=z({action:"query",format:"json",list:"allusers",auprop:"editcount|groups",aulimit:"max",auwitheditsonly:"1",auactiveusers:"1"},5).then((function(t){return t.query.allusers})).then((function(e){return e.sort(t)})),a.abrupt("return",e);case 4:case"end":return a.stop()}}))},R=function(){var t,e;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(t,e){return e.recentactions-t.recentactions},e=z({action:"query",format:"json",list:"allusers",auprop:"editcount|groups",aulimit:"max",auwitheditsonly:"1",auactiveusers:"1"},5).then((function(t){return t.query.allusers})).then((function(e){return e.sort(t)})),a.abrupt("return",e);case 4:case"end":return a.stop()}}))},U=function(t){var e,a,n,r,s;return O.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=H(t),a=Object(k.a)(e,2),n=a[0],r=a[1],s=n.then((function(t){return J(t)})).then((function(t){var e=t.map((function(t){return t.id}));return q(e).then((function(e){t.forEach((function(t){t.title=e[t.id]}))})),t})),i.next=4,O.a.awrap(s);case 4:return i.t0=i.sent,i.t1=r,i.abrupt("return",[i.t0,i.t1]);case 7:case"end":return i.stop()}}))},q=function(t){var e,a,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e={},a=null,a=t instanceof Array?V(t,50):[[t]],n=a.map((function(t){var a,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.join("|"),n={action:"wbgetentities",format:"json",ids:a,props:"labels",languages:"en"},r.abrupt("return",z(n,5).then((function(t){return t})).then((function(t){return t.entities})).then((function(a){t.forEach((function(t){var n=a[t].labels;n&&n.en&&(e[t]=n.en.value)}))})).catch((function(t){return null})));case 3:case"end":return r.stop()}}))})),r.next=6,O.a.awrap(Promise.all(n));case 6:return r.abrupt("return",e);case 7:case"end":return r.stop()}}))},z=function t(e,a){var n,r;return O.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n=new URLSearchParams(e).toString(),r="https://www.wikidata.org/w/api.php?"+n+"&origin=*",s.next=5,O.a.awrap(fetch(r).then((function(t){return t.json()})));case 5:return s.abrupt("return",s.sent);case 8:if(s.prev=8,s.t0=s.catch(0),1!==a){s.next=12;break}throw s.t0;case 12:return s.next=14,O.a.awrap(t(e,a-1));case 14:return s.abrupt("return",s.sent);case 15:case"end":return s.stop()}}),null,null,[[0,8]])},H=function(t){var e=new Date,a=e.toISOString();return e-=1e3,e=new Date(e).toISOString(),[z({action:"query",format:"json",list:"recentchanges",rcprop:"title|ids|timestamp|user",rclimit:"max",rcstart:e,rcend:t},5).then((function(t){return t.query.recentchanges})),a]},J=function(t){var e={};t.forEach((function(t){var a=e[t.title]||0;e[t.title]=a+1}));var a=Object.entries(e).map((function(t){var e=Object(k.a)(t,2);return{id:e[0],actions:e[1]}}));return a.sort((function(t,e){return e.actions-t.actions})),a},V=function(t,e){for(var a=[];t.length>0;)a.push(t.splice(0,e));return a},Y={getData:function(){var t;return O.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.awrap(R());case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}))},refreshTime:2e3,refreshMethod:function(){this.loadData()},keys:["recentactions"],index:"name",xAxis:"users",yAxis:"recent actions",colors:"set3",tooltip:function(t){return this.tooltip(t,"https://www.wikidata.org/wiki/User:")}},F=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(I,{graph:r.a.createElement(T,{fullGraph:!0,settings:Y}),name:"Most Active Users"})}}]),e}(n.Component),X={getData:function(){var t,e,a,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O.a.awrap(U((new Date).toISOString()));case 2:return t=r.sent,e=Object(k.a)(t,2),a=e[0],n=e[1],a=a.slice(0,50),this.setState({fullData:a,prevTimestamp:n}),r.abrupt("return",a);case 9:case"end":return r.stop()}}),null,this)},refreshTime:2e3,refreshMethod:function(){var t,e,a,n,r,s,i;return O.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.a.awrap(U(this.state.prevTimestamp));case 2:t=c.sent,e=Object(k.a)(t,2),a=e[0],n=e[1],this.setState({prevTimestamp:n}),a=a.slice(0,50),this.state.fullData?(r=this.state.fullData,a.forEach((function(t){for(var e=-1,a=0;a<r.length;a+=1)r[a].id===t.id&&(e=a);-1!==e?r[e].actions+=t.actions:r.push(t)})),r.sort((function(t,e){return e.actions-t.actions})),r.slice(0,50),s=r.slice(0,this.state.fullGraph?30:10),this.setState({fullData:r,data:s})):(i=a.slice(0,this.state.fullGraph?30:10),this.setState({data:i}));case 9:case"end":return c.stop()}}),null,this)},keys:["actions"],index:"id",xAxis:"pages",yAxis:"actions",colors:"pastel1",onClick:function(t){window.open("https://www.wikidata.org/wiki/"+t.indexValue,"_blank")},tooltip:function(t){return this.tooltip(t,"https://www.wikidata.org/wiki/")}},$=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(I,{graph:r.a.createElement(T,{fullGraph:!0,settings:X}),name:"Most Active Pages"})}}]),e}(n.Component),_={getData:function(){var t;return O.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.awrap(W());case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}))},refreshTime:2e3,refreshMethod:function(){this.loadData()},keys:["editcount"],index:"name",xAxis:"users",yAxis:"edit count",colors:"paired",tooltip:function(t){return this.tooltip(t,"https://www.wikidata.org/wiki/User:")}},K=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(I,{graph:r.a.createElement(T,{fullGraph:!0,settings:_}),name:"Users By Most Edits"})}}]),e}(n.Component),Q=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={history:a.props.history},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(v,null),r.a.createElement("div",{class:"row justify-content-left text-dark"},r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},r.a.createElement("div",{class:"feedContainer"},r.a.createElement(S,null))),r.a.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},r.a.createElement("div",{className:"deck-container"},r.a.createElement(L.a,{className:"deck"},r.a.createElement(D,{title:"Users by most edits",pageLink:"users-by-most-edits",history:this.state.history,graph:r.a.createElement(T,{fullGraph:!1,settings:_})}),r.a.createElement(D,{title:"Most Active Users",pageLink:"most-active-users",history:this.state.history,graph:r.a.createElement(T,{fullGraph:!1,settings:Y})})),r.a.createElement(L.a,{className:"deck"},r.a.createElement(D,{title:"Most Active Pages",pageLink:"most-active-pages",history:this.state.history,graph:r.a.createElement(T,{fullGraph:!1,settings:X})}),r.a.createElement(D,{title:"Sample Graph: link to home",pageLink:"",history:this.state.history,graph:r.a.createElement(P,null)}))))))}}]),e}(n.Component);a(438);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{history:x},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/wikidata-live-changes/",component:b}),r.a.createElement(o.a,{exact:!0,path:"/wikidata-live-changes/page",component:Q}),r.a.createElement(o.a,{exact:!0,path:"/users-by-most-edits",component:K}),r.a.createElement(o.a,{exact:!0,path:"/most-active-users",component:F}),r.a.createElement(o.a,{exact:!0,path:"/most-active-pages",component:$}),r.a.createElement(o.a,{exact:!0,path:"/feed",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[289,1,2]]]);
//# sourceMappingURL=main.2b68f57f.chunk.js.map