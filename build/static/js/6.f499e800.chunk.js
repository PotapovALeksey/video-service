(window["webpackJsonpvideo-services"]=window["webpackJsonpvideo-services"]||[]).push([[6],{105:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(23),s=a(110),i=a.n(s);t.a=function(e){var t=e.label,a=e.link;return r.a.createElement(o.b,{to:a,className:i.a.button},t)}},108:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(99),s=a(100),i=a(111),c=a.n(i);t.a=function(e){var t=e.views,a=e.comments;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"miniText".concat(" ",c.a.views," ").concat(c.a.iconWrap)},r.a.createElement(o.a,{className:c.a.icon,icon:s.i}),t),r.a.createElement("span",{className:"miniText".concat(" ",c.a.iconWrap)},r.a.createElement(o.a,{className:c.a.icon,icon:s.e}),a))}},110:function(e,t,a){e.exports={button:"ButtonLink_button__3oQ7m"}},111:function(e,t,a){e.exports={views:"ViewsAndComments_views__mtUaX",icon:"ViewsAndComments_icon__qaDwm",iconWrap:"ViewsAndComments_iconWrap__bGp-a"}},134:function(e,t,a){"use strict";a.d(t,"a",function(){return k});var n=a(13),r=a(15),o=a(29),s=a(28),i=a(30),c=a(1),l=a.n(c),p=a(23),m=a(136),u=a.n(m),d=a(139),h=a.n(d),f=a(107),v=a(108),g=a(105),b=a(135),_=a.n(b),w=a(102),E=0,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).listRef=Object(c.createRef)(),a.handleScroll=function(){a.props.onScroll&&a.props.onScroll(a.listRef.current)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.videos,a=e.title,n=e.buttonLabel,r=e.buttonLink;return l.a.createElement("div",{className:_.a.wrap},l.a.createElement("div",{className:_.a.top},l.a.createElement("h3",{className:_.a.title},a),r&&l.a.createElement(g.a,{label:n,link:r})),l.a.createElement("div",{className:_.a.list,ref:this.listRef},t&&0!==t.length&&l.a.createElement(u.a,null,t.map(function(e){return l.a.createElement(h.a,{xl:3,md:4,sm:6,xs:6,className:_.a.item,key:e.link+ ++E},l.a.createElement(f.a,{img:w.a,link:"/watch/".concat(e.link),altImg:e.name,like:e.likes_count,duration:e.duration}),l.a.createElement(p.b,{className:"imgTitleB ".concat(_.a.imgTitle),to:"/watch/".concat(e.link)},e.name),l.a.createElement(v.a,{comments:e.comments_count,views:e.views}))}))))}}]),t}(c.Component)},135:function(e,t,a){e.exports={title:"VideosList_title__zjBE4",top:"VideosList_top__2jMBt",imgTitle:"VideosList_imgTitle__39gXs",list:"VideosList_list__2Jc4G",item:"VideosList_item__MS8iv"}},151:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(33),s=a(152),i=a.n(s),c={display:"block",margin:"0 auto",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"};t.a=function(e){var t=e.load;return r.a.createElement("div",{className:i.a.wrap},r.a.createElement(o.FadeLoader,{css:c,sizeUnit:"px",size:100,color:"#36D7B7",loading:t}))}},152:function(e,t,a){e.exports={wrap:"CategoryLoaded_wrap__2sZ6b"}},312:function(e,t,a){e.exports={content:"Category_content__3w1OF",loadMore:"Category_loadMore__1nmAW"}},320:function(e,t,a){"use strict";a.r(t);var n,r=a(2),o=a.n(r),s=a(5),i=a(13),c=a(15),l=a(29),p=a(28),m=a(30),u=a(1),d=a.n(u),h=a(22),f=function(e,t){var a;return function(){var n=arguments,r=this;a||(e.apply(r,n),a=!0,setTimeout(function(){return a=!1},t))}},v=a(134),g=a(117),b=a(127),_=a(128),w=a(126),E=a(18),k=a(125),y=a(151),L=a(312),O=a.n(L),C=1,j=Object(h.b)("store")(n=Object(h.c)(n=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={page:C},a.incrementPage=function(){return a.setState({page:a.state.page+1})},a.handleClear=function(){return a.props.store.stores.data.clear()},a.handleGetAllData=function(e){return a.props.store.stores.data.handleGetCategoryPage(e)},a.handleAddLoading=Object(s.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.id,n=a.state.page,e.next=4,a.props.store.stores.data.getCategoryAddLoading(t,n);case 4:a.incrementPage();case 5:case"end":return e.stop()}},e)})),a.throthleLoadMore=f(a.handleAddLoading,1e3),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,this.handleClear();case 3:this.handleGetAllData(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props.match.params.id,t.match.params.id===a){e.next=8;break}return this.setState({page:C}),n=this.state.page,this.props.store.stores.data.toggleLoadedCategory(),e.next=7,this.props.store.stores.data.getCategoryID(a,n);case 7:this.incrementPage();case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.store.stores.data,t=e.topCategories,a=e.categories,n=e.promotedVideo,r=e.topVideos,o=e.latestVideos,s=e.categoryVideos,i=e.popularVideos,c=e.categoryIsLoaded,l=this.props.store.stores.view,p=l.isOpenedSidebar,m=l.toggleSidebar,u=l.openModal,h=l.closeModal,f=l.isOpenedModal,L=t&&a&&n&&r&&o&&s&&0!==s.length&&i,C=this.props.match.params.id;return L?d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,{toggleSidebar:m,openModal:u}),f&&d.a.createElement(k.a,{onClose:h}),d.a.createElement("div",{className:"wrap"},d.a.createElement(_.a,{topCategories:t,categories:a,isOpenedSidebar:p}),d.a.createElement("div",{className:O.a.content},d.a.createElement(v.a,{videos:s,title:C}),c&&d.a.createElement(y.a,null),d.a.createElement("button",{className:O.a.loadMore,onClick:this.throthleLoadMore},"Load more")),d.a.createElement(w.a,{promoted:n,latestVideos:o,topVideos:r})),d.a.createElement(b.a,{populars:i,latests:o,categories:a,popularCategories:t})):d.a.createElement(E.a,{load:!L})}}]),t}(u.Component))||n)||n;t.default=j}}]);
//# sourceMappingURL=6.f499e800.chunk.js.map