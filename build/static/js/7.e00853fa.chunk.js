(window["webpackJsonpvideo-services"]=window["webpackJsonpvideo-services"]||[]).push([[7],{105:function(e,t,a){"use strict";var n=a(1),i=a.n(n),s=a(23),r=a(110),c=a.n(r);t.a=function(e){var t=e.label,a=e.link;return i.a.createElement(s.b,{to:a,className:c.a.button},t)}},108:function(e,t,a){"use strict";var n=a(1),i=a.n(n),s=a(99),r=a(100),c=a(111),o=a.n(c);t.a=function(e){var t=e.views,a=e.comments;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"miniText".concat(" ",o.a.views," ").concat(o.a.iconWrap)},i.a.createElement(s.a,{className:o.a.icon,icon:r.i}),t),i.a.createElement("span",{className:"miniText".concat(" ",o.a.iconWrap)},i.a.createElement(s.a,{className:o.a.icon,icon:r.e}),a))}},110:function(e,t,a){e.exports={button:"ButtonLink_button__3oQ7m"}},111:function(e,t,a){e.exports={views:"ViewsAndComments_views__mtUaX",icon:"ViewsAndComments_icon__qaDwm",iconWrap:"ViewsAndComments_iconWrap__bGp-a"}},129:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(7),i=a(13),s=a(15),r=a(29),c=a(28),o=a(30),l=a(1),m=a.n(l),d=a(23),u=a(130),p=a.n(u),v=(a(131),a(132),a(99)),_=a(100),k=a(105),b=a(107),f=a(108),E=a(102),w=a(133),h=a.n(w),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).settings={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}}]},a.slider=m.a.createRef(),a.next=function(){a.slider.current.slickNext()},a.previous=function(){a.slider.current.slickPrev()},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.videos,a=e.title,i=e.link;return m.a.createElement("div",{className:"".concat(h.a.wrap)},m.a.createElement("div",{className:h.a.wrapButton},m.a.createElement("div",{className:h.a.titleWrap},m.a.createElement("h4",{className:h.a.title},a),i&&m.a.createElement(k.a,{label:"Show all",link:i})),m.a.createElement("div",{className:h.a.buttonWrap},m.a.createElement("button",{className:"".concat(h.a.slickButton," ").concat(h.a.slickPrev),onClick:this.previous},m.a.createElement(v.a,{icon:_.c,className:h.a.icon})),m.a.createElement("button",{className:"".concat(h.a.slickButton," ").concat(h.a.slickNext),onClick:this.next},m.a.createElement(v.a,{icon:_.d,className:h.a.icon})))),m.a.createElement(p.a,Object(n.a)({},this.settings,{className:h.a.slickList,ref:this.slider}),(t||[]).map(function(e){return m.a.createElement("div",{className:h.a.item,key:e.link},m.a.createElement("div",{className:h.a.imageWrap},m.a.createElement(b.a,{img:E.a,link:"/watch/".concat(e.link),altImg:e.name,like:e.likes_count,duration:e.duration}),m.a.createElement("div",null,m.a.createElement(d.b,{to:"/watch/".concat(e.link),className:"imgTitleB ".concat(h.a.imgTitle)},e.name)),m.a.createElement("div",{className:h.a.text},e.descr.slice(0,83)," ..."),m.a.createElement(f.a,{comments:e.comments_count,views:e.views})))})))}}]),t}(m.a.Component)},133:function(e,t,a){e.exports={wrap:"VIdeosSlider_wrap__3OvrE",imgTitle:"VIdeosSlider_imgTitle__3pGY_",title:"VIdeosSlider_title__1VW_p",text:"VIdeosSlider_text__1tr74",item:"VIdeosSlider_item__3z4ek",slickList:"VIdeosSlider_slickList__1rNIf",wrapButton:"VIdeosSlider_wrapButton__2cOcR",slickButton:"VIdeosSlider_slickButton__2Weti",slickPrev:"VIdeosSlider_slickPrev__briJs",titleWrap:"VIdeosSlider_titleWrap__2_ZWJ"}},313:function(e,t,a){e.exports={content:"Categories_content__3OVRy"}},317:function(e,t,a){"use strict";a.r(t);var n,i=a(2),s=a.n(i),r=a(5),c=a(13),o=a(15),l=a(29),m=a(28),d=a(30),u=a(1),p=a.n(u),v=a(22),_=a(129),k=a(117),b=a(127),f=a(128),E=a(126),w=a(18),h=a(125),g=a(313),N=a.n(g),V=Object(v.b)("store")(n=Object(v.c)(n=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClear=function(){return a.props.store.stores.data.clear()},a.handleGetAllData=function(){(0,a.props.store.stores.data.handleGetCategoriesPage)()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.handleClear();case 2:this.handleGetAllData();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.store.stores.view,t=e.isOpenedSidebar,a=e.toggleSidebar,n=e.openModal,i=e.closeModal,s=e.isOpenedModal,r=this.props.store.stores.data,c=r.topCategories,o=r.categories,l=r.promotedVideo,m=r.topVideos,d=r.latestVideos,u=r.popularVideos,v=r.categoryVideosAll,g=c&&o&&l&&m&&d&&u&&v;return g?p.a.createElement(p.a.Fragment,null,p.a.createElement(k.a,{toggleSidebar:a,openModal:n}),s&&p.a.createElement(h.a,{onClose:i}),p.a.createElement("div",{className:"wrap"},p.a.createElement(f.a,{topCategories:c,categories:o,isOpenedSidebar:t}),p.a.createElement("div",{className:N.a.content},v.map(function(e){var t=e.videos,a=e.name,n=e.link;return p.a.createElement(_.a,{key:n,videos:t,title:a,link:"categories/".concat(n)})})),p.a.createElement(E.a,{promoted:l,latestVideos:d,topVideos:m})),p.a.createElement(b.a,{populars:u,latests:d,categories:o,popularCategories:c})):p.a.createElement(w.a,{load:!g})}}]),t}(u.Component))||n)||n;t.default=V}}]);
//# sourceMappingURL=7.e00853fa.chunk.js.map