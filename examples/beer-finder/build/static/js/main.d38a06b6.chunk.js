(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(312)},123:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),s=n.n(c),i=(n(123),n(12)),l=n(110),o=n.n(l),u=n(113),p=n.n(u),m=n(30),f=n.n(m),d=n(47),b=n(112),h=30,g=n.n(b).a.create({baseURL:"https://api.punkapi.com/v2"});function E(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/beers",{params:{food:t||void 0,per_page:h}});case 2:return n=e.sent,(a=n.data).forEach(j),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function j(e){e.image_url&&-1===e.image_url.indexOf("keg.png")||(e.image_url="http://www.patternpictures.com/wp-content/uploads/2015/11/PP07301706-Close-up-of-draft-beer-foam.jpg")}var v=Object(i.a)({beers:[],fetchBeers:function(){var e=Object(d.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v.isLoading=!0,e.next=3,E(t);case 3:v.beers=e.sent,v.isLoading=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),O=v,k=Object(i.b)(function(){return r.a.createElement("div",{className:"searchbar"},r.a.createElement(o.a,{onRequestSearch:O.fetchBeers,placeholder:"Add some food ..."}),O.isLoading&&r.a.createElement(p.a,null))}),y=n(45),x=n(46),_=n(49),N=n(5),L=n(48),B=n(114),C=n.n(B),A=n(115),D=n.n(A),J=n(116),P=n.n(J),R=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(_.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).store=Object(i.a)({details:!1}),n.toggleDetails=function(){return n.store.details=!n.store.details},n}return Object(L.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.image_url,a=e.food_pairing,c=e.description,s=this.store.details;return r.a.createElement(C.a,{onClick:this.toggleDetails,className:"beer"},!s&&r.a.createElement(D.a,{image:n,className:"media"}),r.a.createElement(P.a,null,r.a.createElement("h3",null,t),s?r.a.createElement("p",null,c):r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("li",{key:e},e)}))))}}]),t}(a.Component),q=Object(i.b)(R),F=Object(i.b)(function(){return r.a.createElement("div",{className:"beerlist"},O.beers.length?O.beers.map(function(e){return r.a.createElement(q,Object.assign({key:e.name},e))}):r.a.createElement("h3",null,"No matching beers found!"))});s.a.render(r.a.createElement(function(){return r.a.createElement(a.Fragment,null,r.a.createElement(k,null),r.a.createElement(F,null))},null),document.getElementById("root"))}},[[118,2,1]]]);
//# sourceMappingURL=main.d38a06b6.chunk.js.map