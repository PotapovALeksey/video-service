(window["webpackJsonpvideo-services"]=window["webpackJsonpvideo-services"]||[]).push([[6],{105:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(24),s=a(110),i=a.n(s);t.a=function(e){var t=e.label,a=e.link;return r.a.createElement(o.b,{to:a,className:i.a.button},t)}},108:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(100),s=a(101),i=a(111),c=a.n(i);t.a=function(e){var t=e.views,a=e.comments;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"miniText".concat(" ",c.a.views," ").concat(c.a.iconWrap)},r.a.createElement(o.a,{className:c.a.icon,icon:s.h}),t),r.a.createElement("span",{className:"miniText".concat(" ",c.a.iconWrap)},r.a.createElement(o.a,{className:c.a.icon,icon:s.e}),a))}},110:function(e,t,a){e.exports={button:"ButtonLink_button__3oQ7m"}},111:function(e,t,a){e.exports={views:"LikesAndComments_views__mtUaX",icon:"LikesAndComments_icon__qaDwm",iconWrap:"LikesAndComments_iconWrap__bGp-a"}},134:function(e,t,a){"use strict";a.d(t,"a",function(){return k});var n=a(14),r=a(16),o=a(30),s=a(29),i=a(31),c=a(1),l=a.n(c),p=a(24),m=a(9),d=a(136),u=a.n(d),h=a(139),f=a.n(h),v=a(107),g=a(108),b=a(105),_=a(135),w=a.n(_),E=0,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).listRef=Object(c.createRef)(),a.handleScroll=function(){a.props.onScroll&&a.props.onScroll(a.listRef.current)},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.videos,a=e.title,n=e.buttonLabel,r=e.buttonLink;return l.a.createElement("div",{className:w.a.wrap},l.a.createElement("div",{className:w.a.top},l.a.createElement("h3",{className:w.a.title},a),r&&l.a.createElement(b.a,{label:n,link:r})),l.a.createElement("div",{className:w.a.list,ref:this.listRef},t&&0!==t.length&&l.a.createElement(u.a,null,t.map(function(e){return l.a.createElement(f.a,{xl:3,md:4,sm:6,xs:6,className:w.a.item,key:e.link+ ++E},l.a.createElement(v.a,{img:m.c+e.preview_images[0],link:"/"+m.d+e.link,altImg:e.name,like:e.likes_count,duration:e.duration}),l.a.createElement(p.b,{className:"imgTitleB ".concat(w.a.imgTitle),to:"/"+m.d+e.link},e.name),l.a.createElement(g.a,{comments:e.comments_count,views:e.views}))}))))}}]),t}(c.Component)},135:function(e,t,a){e.exports={title:"VideosList_title__zjBE4",top:"VideosList_top__2jMBt",imgTitle:"VideosList_imgTitle__39gXs",list:"VideosList_list__2Jc4G",item:"VideosList_item__MS8iv"}},151:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(34),s=a(152),i=a.n(s),c={display:"block",margin:"0 auto",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"};t.a=function(e){var t=e.load;return r.a.createElement("div",{className:i.a.wrap},r.a.createElement(o.FadeLoader,{css:c,sizeUnit:"px",size:100,color:"#36D7B7",loading:t}))}},152:function(e,t,a){e.exports={wrap:"CategoryLoaded_wrap__2sZ6b"}},309:function(e,t,a){e.exports={content:"Category_content__3w1OF",loadMore:"Category_loadMore__1nmAW"}},317:function(e,t,a){"use strict";a.r(t);var n,r=a(2),o=a.n(r),s=a(5),i=a(14),c=a(16),l=a(30),p=a(29),m=a(31),d=a(1),u=a.n(d),h=a(23),f=function(e,t){var a;return function(){var n=arguments,r=this;a||(e.apply(r,n),a=!0,setTimeout(function(){return a=!1},t))}},v=a(134),g=a(121),b=a(129),_=a(131),w=a(130),E=a(19),k=a(114),y=a(151),L=a(309),O=a.n(L),C=1,j=Object(h.b)("store")(n=Object(h.c)(n=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={page:C},a.incrementPage=function(){return a.setState({page:a.state.page+1})},a.handleClear=function(){return a.props.store.stores.data.clear()},a.handleGetAllData=function(e){return a.props.store.stores.data.handleGetCategoryPage(e)},a.handleAddLoading=Object(s.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.id,n=a.state.page,e.next=4,a.props.store.stores.data.getCategoryAddLoading(t,n);case 4:a.incrementPage();case 5:case"end":return e.stop()}},e)})),a.throthleLoadMore=f(a.handleAddLoading,1e3),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,this.handleClear();case 3:this.handleGetAllData(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props.match.params.id,t.match.params.id===a){e.next=8;break}return this.setState({page:C}),n=this.state.page,this.props.store.stores.data.toggleLoadedCategory(),e.next=7,this.props.store.stores.data.getCategoryID(a,n);case 7:this.incrementPage();case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.store.stores.data,t=e.topCategories,a=e.categories,n=e.promotedVideo,r=e.topVideos,o=e.latestVideos,s=e.categoryVideos,i=e.popularVideos,c=e.categoryIsLoaded,l=this.props.store.stores.view,p=l.isOpenedSidebar,m=l.toggleSidebar,d=l.openModal,h=l.closeModal,f=l.isOpenedModal,L=t&&a&&n&&r&&o&&s&&0!==s.length&&i,C=this.props.match.params.id;return L?u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{toggleSidebar:m,openModal:d}),f&&u.a.createElement(k.a,{onClose:h}),u.a.createElement("div",{className:"wrap"},u.a.createElement(_.a,{topCategories:t,categories:a,isOpenedSidebar:p}),u.a.createElement("div",{className:O.a.content},u.a.createElement(v.a,{videos:s,title:C}),c&&u.a.createElement(y.a,null),u.a.createElement("button",{className:O.a.loadMore,onClick:this.throthleLoadMore},"Load more")),u.a.createElement(w.a,{promoted:n,latestVideos:o,topVideos:r})),u.a.createElement(b.a,{populars:i,latests:o,categories:a,popularCategories:t})):u.a.createElement(E.a,{load:!L})}}]),t}(d.Component))||n)||n;t.default=j}}]);
//# sourceMappingURL=6.f91dc0c1.chunk.js.map