webpackJsonp([1],{IE7d:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),i=s("Jrax"),a=s.n(i),o=s("BO1k"),c=s.n(o),r=s("Gu7T"),l=s.n(r),p=s("J0ux"),m={name:"vue-swing",props:["config"],data:function(){return{stack:null,cards:[],observer:null}},mounted:function(){var e=this;this.stack=p.Stack(this.config||{}),[].concat(l()(this.$el.children)).forEach(function(t){e.cards.push(e.stack.createCard(t))}),this.observer=new MutationObserver(function(t){var s=[],n=[];t.forEach(function(e){var t=e.addedNodes,i=e.removedNodes;s.push.apply(s,l()(t)),n.push.apply(n,l()(i))}),s.forEach(function(t){var s=n.indexOf(t);-1===s?null==e.stack.getCard(t)&&e.cards.push(e.stack.createCard(t)):n.splice(s,1)}),n.forEach(function(t){var s=e.stack.getCard(t);null!=s&&(e.cards.splice(e.cards.indexOf(s),1),e.stack.destroyCard(s))})}),this.observer.observe(this.$el,{childList:!0});var t=function(t){e.stack.on(t,function(s){e.$emit(t,s)})},s=!0,n=!1,i=void 0;try{for(var a,o=c()(["throwout","throwoutend","throwoutdown","throwoutleft","throwoutright","throwoutup","throwin","throwinend","dragstart","dragmove","dragend","destroyCard"]);!(s=(a=o.next()).done);s=!0){t(a.value)}}catch(e){n=!0,i=e}finally{try{!s&&o.return&&o.return()}finally{if(n)throw i}}},beforeDestroy:function(){this.observer.disconnect()},Card:p.Card,Direction:p.Direction,Stack:p.Stack},d={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)},staticRenderFns:[]};var u=s("VU/8")(m,d,!1,function(e){s("koC8")},null,null).exports,w={name:"Cards",props:{element:{type:Object,required:!0}}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"preview",style:{backgroundImage:"url("+e.element.preview+")"}}),e._v(" "),s("h2",{staticClass:"name"},[e._v(e._s(e.element.name))]),e._v(" "),s("p",{staticClass:"detail"},[s("a",{attrs:{href:e.element.link,target:"_blank",rel:"noopener"}},[s("img",{staticClass:"source",attrs:{src:e.element.source,alt:"🔗"}})]),e._v("\n      "+e._s(e.element.detail)+"\n  ")])])},staticRenderFns:[]};var f={name:"Actions",data:function(){return{actions:[{keep:"Keep",sweep:"Sweep"},{keep:"Neat",sweep:"Delete"},{keep:"Shantay",sweep:"Sashay"},{keep:"Love",sweep:"Shove"}]}},methods:{keep:function(){this.$emit("keep")},sweep:function(){this.$emit("sweep")}},computed:{randomLabel:function(){return a()(this.actions)[0]}}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"actions"},[s("button",{staticClass:"sweep",on:{click:e.sweep}},[e._v(e._s(e.randomLabel.sweep))]),e._v(" "),s("button",{staticClass:"keep",on:{click:e.keep}},[e._v(e._s(e.randomLabel.keep))])])},staticRenderFns:[]};var v={name:"App",components:{Cards:s("VU/8")(w,h,!1,function(e){s("upTS")},"data-v-48980b75",null).exports,Actions:s("VU/8")(f,g,!1,function(e){s("IE7d")},"data-v-7b99b7e7",null).exports},data:function(){return{config:{allowedDirections:[u.Direction.LEFT,u.Direction.RIGHT],isThrowOut:function(e,t,s,n){return n>.5}}}},props:{elements:{type:Array,required:!0}},methods:{keep:function(){var e=this.$refs.cardstack.cards;e.length>0&&e[e.length-1].throwOut(1,0)},sweep:function(){var e=this.$refs.cardstack.cards;e.length>0&&e[e.length-1].throwOut(-1,0)},next:function(e){e&&this.delete(),this.elements.pop()},delete:function(){},refresh:function(){location.reload()},keyListener:function(e){32!==e.keyCode&&39!==e.keyCode&&13!==e.keyCode||this.keep(),46!==e.keyCode&&37!==e.keyCode||this.sweep()}},created:function(){document.addEventListener("keyup",this.keyListener)},destroyed:function(){document.removeEventListener("keyup",this.keyListener)}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app",role:"main"}},[s("h1",[e._v("Keep or Sweep")]),e._v(" "),s("div",{staticClass:"container"},[s("vue-swing",{ref:"cardstack",staticClass:"card-container",attrs:{config:e.config},on:{throwoutleft:function(t){e.next(!0)},throwoutright:function(t){e.next(!1)}}},e._l(e.elements,function(t){return t?s("Cards",{key:t.id,attrs:{element:t}}):e._e()})),e._v(" "),s("div",{staticClass:"card-empty"},[s("button",{staticClass:"refresh",attrs:{"aria-label":"Refresh"},on:{click:e.refresh}}),e._v(" "),s("h2",[e._v("All done!")]),e._v(" "),s("p",[e._v("Refresh to keep or sweep again!")])])],1),e._v(" "),s("Actions",{on:{keep:e.keep,sweep:e.sweep}})],1)},staticRenderFns:[]};var b=s("VU/8")(v,k,!1,function(e){s("sGF+")},null,null).exports,y=[{id:"B00ECCLV6E",preview:"https://images-na.ssl-images-amazon.com/images/I/31vMFrUhtFL.jpg",name:"Microsoft Sculpt Ergonomic Desktop (Set mit Maus und Tastatur, deutsches QWERTZ Tastaturlayout, schwarz, ergonomisch, kabellos)",detail:"97,79 €, on wishlist",source:"https://www.amazon.de/favicon.ico",link:"https://www.amazon.de/dp/B00ECCLV6E/"},{id:"B002NFHQ3E",preview:"https://images-na.ssl-images-amazon.com/images/I/31Mw94gKNuL.jpg",name:"Dr. Bronners Flüssigseife Eukalyptus 944 ml - Naturseife",detail:"23,80 €, on wishlist",source:"https://www.amazon.de/favicon.ico",link:"https://www.amazon.de/dp/B002NFHQ3E/"},{id:"B078HZG7GB",preview:"https://images-na.ssl-images-amazon.com/images/I/91y9f6FZjWL._SL1500_.jpg",name:"HYDROPHIL nachhaltige Zahnbürste aus Bambus blau extraweich 4er Pack weich",detail:"13,90 €, on wishlist",source:"https://www.amazon.de/favicon.ico",link:"https://www.amazon.de/dp/B078HZG7GB/"}],_=[{id:"235",preview:"Hey dear how are you? We haven’t heard from you in a few weeks, it would be great if you would call us some time. Cheers and kisses, your parents",name:"Call us some time",detail:"from your parents",source:"https://www.google.com/inbox/assets/images/common/logo-nav.png",link:"https://www.google.com/inbox/"},{id:"143",preview:"",name:"Invest in Bitcoin",detail:"from promo@bitcoinbros.com",source:"https://www.google.com/inbox/assets/images/common/logo-nav.png",link:"https://www.google.com/inbox/"},{id:"134",preview:"",name:"YOU WON 1.5 Million!",detail:"from spam@example.com",source:"https://www.google.com/inbox/assets/images/common/logo-nav.png",link:"https://www.google.com/inbox/"}],x=[{id:"241266",preview:"https://avatars2.githubusercontent.com/u/241266?s=400&v=4",name:"Camila",detail:"Brazilian Software Engineer living in Berlin.",source:"https://github.com/favicon.ico",link:"https://github.com/camilasan/"}],C=[{id:"junkdrawer",preview:"https://c1.staticflickr.com/4/3549/3467650188_38a5aed632.jpg",name:"Junk drawer",detail:"In your kitchen",source:"https://image.flaticon.com/icons/svg/23/23665.svg",link:"https://www.flickr.com/photos/candyheartsandpaperflowers/3467650188"},{id:"officedesk",preview:"https://www.publicdomainpictures.net/pictures/190000/velka/messy-desk-no-messages.jpg",name:"Your desk",detail:"In the office",source:"https://image.flaticon.com/icons/svg/23/23665.svg",link:"https://www.publicdomainpictures.net/en/view-image.php?image=183434&picture=messy-desk-no-messages"},{id:"clothes",preview:"https://images.unsplash.com/photo-1472666260353-23210544cdf1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1735ca87150a9a98aeb3c21612b7433c&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",name:"Clothes you never wear",detail:"Donate them",source:"https://image.flaticon.com/icons/svg/23/23665.svg",link:"https://www.netflix.com/watch/80048218"}],E=[{id:"BmEsgz-A-_5",preview:"https://instagram.fham1-1.fna.fbcdn.net/vp/14ba4a6f59cc8b6cef40300925190ec6/5C0FFF13/t51.2885-15/e35/37894789_448968982250440_2716276290247196672_n.jpg",name:"Ready to go! #breakbrake17 #raw",detail:"39 likes, 0 comments",source:"https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",link:"https://www.instagram.com/p/BmEsgz-A-_5/"},{id:"BmEHgD5AjS2",preview:"https://instagram.fham1-1.fna.fbcdn.net/vp/248b33740b0d9c488479a439dee347c7/5C029173/t51.2885-15/e35/38023378_2140119756312330_5690523692275073024_n.jpg",name:"Beer is really not helping 🙄🍺 #criticalengineering",detail:"10 likes, 0 comments",source:"https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",link:"https://www.instagram.com/p/BmEHgD5AjS2/"},{id:"BmD2csggFSI",preview:"https://instagram.fham1-1.fna.fbcdn.net/vp/6dfe13d50c16771cd3ce87f6cd7c6f76/5BED7042/t51.2885-15/e35/37720833_272773736878266_7376601168329310208_n.jpg",name:"❤️Berlin",detail:"10 likes, 0 comments",source:"https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",link:"https://www.instagram.com/p/BmD2csggFSI/"}],B=[{id:"80115896",preview:"https://occ-0-1555-1556.1.nflxso.net/art/67f98/423f0d2877838a69bbe75deca5e09f52f0b67f98.jpg",name:"Rupaul’s Drag Race",detail:"My List",source:"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",link:"https://www.netflix.com/watch/80115896"},{id:"80004448",preview:"https://occ-0-1555-1556.1.nflxso.net/art/faf12/1d1b752783606344ebd685439dd04c871b0faf12.jpg",name:"Cosmos",detail:"My List",source:"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",link:"https://www.netflix.com/watch/80004448"},{id:"80048218",preview:"https://occ-0-1555-1556.1.nflxso.net/art/5d8e1/f81fbcc2029f95fb3fd52cece4a7556b5db5d8e1.jpg",name:"He Named Me Malala",detail:"My List",source:"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",link:"https://www.netflix.com/watch/80048218"}],j=[{id:"740212043492495360",preview:"Getting involved in open source is difficult enough. So- be welcoming\n- have a Code of Conduct\n- don’t be afraid to exclude toxic people\n:)",name:"Tweet from you",detail:"🗨️ 0 🔁 43 ❤️ 83, 7 Jun 2016",source:"https://twitter.com/favicon.ico",link:"https://twitter.com/jancborchardt/status/740212043492495360"},{id:"439531056316686336",preview:"https://pbs.twimg.com/profile_images/439531056316686336/F8Vpmwrg_400x400.jpeg",name:"Martin",detail:"Follows you back",source:"https://twitter.com/favicon.ico",link:"https://twitter.com/xmartin"},{id:"859307085254799360",preview:"https://pbs.twimg.com/profile_images/859307085254799360/DxXInTiZ_400x400.jpg",name:"Regina",detail:"Follows you back",source:"https://twitter.com/favicon.ico",link:"https://twitter.com/reginasipos/"},{id:"907693741577789440",preview:"https://pbs.twimg.com/profile_images/907693741577789440/_LzuruZ9_400x400.jpg",name:"Max",detail:"Follows you back",source:"https://twitter.com/favicon.ico",link:"https://twitter.com/shelldaemon"}];n.a.component("vue-swing",u),n.a.config.productionTip=!1,new n.a({el:"#app-content",components:{App:b},template:'<App :elements="elements" />',data:{elements:[]},methods:{},created:function(){this.elements=this.elements.concat(y,_,x,C,E,B,j),this.elements=a()(this.elements)}})},koC8:function(e,t){},"sGF+":function(e,t){},upTS:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.js.map