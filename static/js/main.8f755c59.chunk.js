(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(240)},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);a(156),a(206);var n=a(1),c=a.n(n),i=a(28),r=a.n(i),l=a(38),o=a.n(l),s=a(84),u=a(85),d=a(95),m=a(86),p=a(96),h=a(11),f=(a(238),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.h,{id:t},c.a.createElement(h.i,null,"Example"),n&&c.a.createElement(h.d,{title:"User Data Fetched with VK Connect"},c.a.createElement(h.g,{before:n.photo_200?c.a.createElement(h.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(h.d,{title:"Navigation Example"},c.a.createElement(h.c,null,c.a.createElement(h.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"))))}),E=a(92),b=a.n(E),g=(a(239),a(93)),k=a.n(g),v=a(94),w=a.n(v),y=Object(h.k)(),U=function(e){return c.a.createElement(h.h,{id:e.id},c.a.createElement(h.i,{left:c.a.createElement(h.e,{onClick:e.go,"data-to":"home"},y===h.f?c.a.createElement(k.a,null):c.a.createElement(w.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(h.j,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(U,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(j,null),document.getElementById("root"))},92:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[155,1,2]]]);
//# sourceMappingURL=main.8f755c59.chunk.js.map