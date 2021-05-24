(this.webpackJsonpmadflix=this.webpackJsonpmadflix||[]).push([[0],{122:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,j=n(0),p=n.n(j),b=n(25),u=n.n(b),h=n(14),g=n(15),x=n(18),m=n(17),O=n(27),v=n(21),f=n(7),y=n(9),_=n.n(y),w=n(16),k=n(4),T=n(3),S=n(20),M=n(1),z=T.c.div(r||(r=Object(k.a)(["\n    height:100vh;\n    width:100vw;\n    display:flex;\n    justify-content:center;\n    font-size:28px;\n    margin-top:20px;\n"]))),U=function(){return Object(M.jsx)(z,{children:Object(M.jsx)("span",{role:"img","aria-lable":"Loading",children:"\u23f0"})})},R=T.c.div(a||(a=Object(k.a)(["\n    width:100vw;\n    display:flex;\n    justify-content: center;\n"]))),I=T.c.span(i||(i=Object(k.a)(["\n    color: ",";\n"])),(function(e){return e.color})),C=function(e){var t=e.text,n=e.color;return Object(M.jsx)(R,{children:Object(M.jsx)(I,{color:n,children:t})})},A=T.c.div(c||(c=Object(k.a)(["\n    font-size: 12px;\n"]))),F=T.c.div(o||(o=Object(k.a)(["\n    background-image:url(",");\n    height:480px;\n    background-size: cover;\n    border-radius: 5px;\n    background-position:center center;\n    transition:opacity 0.15s linear;\n"])),(function(e){return e.bgUrl})),B=T.c.span(s||(s=Object(k.a)(["\n    bottom: 5px;\n    right : 6px;\n    position:absolute;\n    opacity:0;\n    color: white;\n"]))),P=T.c.span(l||(l=Object(k.a)(["\n    top: 5px;\n    left : 6px;\n    margin : 15px;\n    display: block;\n    position:absolute;\n    margin-bottom: 3px;\n    opacity: 0;\n    color: white;\n"]))),D=T.c.div(d||(d=Object(k.a)(["\n    margin-bottom: 5px;\n    position:relative;\n    overflow:hidden ;\n    &:hover{\n        "," { \n            transform: scale(1.3);\n            opacity: 1;\n        }\n        "," {\n            opacity: 1;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"])),F,B,P),V=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(M.jsx)(v.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(M.jsx)(A,{children:Object(M.jsxs)(D,{children:[Object(M.jsx)(F,{bgUrl:r?"https://image.tmdb.org/t/p/w500".concat(r):n(35).default}),Object(M.jsxs)(P,{children:[a&&a.length>18?"".concat(a.substring(0,18),"..."):a," (",c,")"]}),Object(M.jsxs)(B,{children:[Object(M.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",Math.floor(i/2*10)/10,"/5"]})]})})})},K=n(43),E=n.n(K),N=n(76),q=n(64),L=n.n(q).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a127a7776848f42bc0b876f6e53c9203",language:"ko"}}),G=function(){return L.get("movie/now_playing")},J=function(){return L.get("movie/upcoming")},H=function(){return L.get("movie/popular")},W=function(e){return L.get("movie/".concat(e),{params:{append_to_response:"videos,credits,similar"}})},Q=function(e){return L.get("search/movie",{params:{query:encodeURIComponent(e)}})},X=function(){return L.get("tv/top_rated")},Y=function(){return L.get("tv/airing_today")},Z=function(){return L.get("tv/popular")},$=function(e){return L.get("tv/".concat(e),{params:{append_to_response:"videos,credits,similar"}})},ee=function(e){return L.get("search/tv",{params:{query:encodeURIComponent(e)}})},te=function(){return L.get("trending/all/week")};var ne,re,ae,ie,ce,oe,se,le,de,je,pe,be,ue,he,ge,xe,me,Oe,ve,fe,ye,_e,we,ke,Te,Se,Me,ze,Ue,Re,Ie,Ce,Ae,Fe,Be,Pe,De,Ve,Ke,Ee,Ne,qe,Le,Ge,Je,He=function(e,t){var n=Object(j.useState)(""),r=Object(N.a)(n,2),a=r[0],i=r[1];function c(){return(c=Object(w.a)(_.a.mark((function n(){var r,a,c,o;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=parseInt(e),a=null,n.prev=2,console.log(t),"movie"!==t){n.next=12;break}return n.next=7,W(r);case 7:c=n.sent,a=c.data,i(a.videos.results[0].key),n.next=17;break;case 12:return n.next=14,$(r);case 14:o=n.sent,a=o.data,i(a.videos.results[0].key);case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),console.log(n.t0);case 22:return n.prev=22,n.finish(22);case 24:case"end":return n.stop()}}),n,null,[[2,19,22,24]])})))).apply(this,arguments)}return Object(j.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[e]),a},We=(n(120),n(121),n(122),T.c.div(ne||(ne=Object(k.a)(["\nmargin-top: 910px;\npadding: 20px;\n"])))),Qe=T.c.div(re||(re=Object(k.a)(["\n    font-size: 13px;\n    padding-bottom: 16px;\n"]))),Xe={dots:!0,infinite:!0,speed:1e3,slidesToShow:6,slidesToScroll:4},Ye=T.c.div(ae||(ae=Object(k.a)(["\n    padding-right: 10px;\n"]))),Ze=function(e){var t=e.weeklyTrending,n=e.error,r=e.loading,a=e.random;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:"Movies | Madflix"})}),r?Object(M.jsx)(U,{}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{class:"video-background",children:Object(M.jsxs)("div",{class:"video-foreground",children:[t&&t.length>0?Object(M.jsx)("iframe",{class:"ww",src:"https://www.youtube-nocookie.com/embed/".concat(He(t[a].id,t[a].media_type),"?autoplay=1&autopause=0&mute=0&loop=1&playlist=").concat(He(t[a].id,t[a].media_type),"&controls=0&vq=hd1080"),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):Object(M.jsx)(U,{}),"  "]})}),Object(M.jsx)("div",{id:"vidtop-content",children:Object(M.jsxs)("div",{class:"vid-info",children:[Object(M.jsx)("h1",{children:t&&t[a].original_title?t[a].original_title:t[a].name}),Object(M.jsx)("p",{children:t&&t[a].overview}),Object(M.jsx)(v.b,{to:"/".concat("movie"===t[a].media_type?"/movie":"/show","/").concat(t[a].id),children:" \uc0c1\uc138 \uc815\ubcf4"})]})}),Object(M.jsxs)(We,{children:[Object(M.jsx)(Qe,{children:"\uc774\ubc88\uc8fc \uc778\uae30 \ucf58\ud150\uce20"}),t&&t.length>0&&Object(M.jsx)(E.a,Object(O.a)(Object(O.a)({},Xe),{},{children:t.map((function(e){return Object(M.jsx)(Ye,{children:Object(M.jsx)(V,{id:e.id,title:e.original_title?e.original_title:e.name,isMovie:"movie"===e.media_type,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)})}))})),n&&Object(M.jsx)(C,{color:"#e74c3c",text:n})]})]})]})},$e=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={weeklyTrending:null,error:null,loading:!0,random:null},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(_.a.mark((function e(){var t,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(20*Math.random()),this.setState({random:t}),e.prev=2,e.next=5,te();case 5:n=e.sent,r=n.data.results,this.setState({weeklyTrending:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.setState({error:"Can't find movies information."});case 13:return e.prev=13,this.setState({loading:!1}),e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.weeklyTrending,n=e.error,r=e.loading,a=e.random;return Object(M.jsx)(Ze,{weeklyTrending:t,error:n,loading:r,random:a})}}]),n}(p.a.Component),et=T.c.div(ie||(ie=Object(k.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]))),tt=T.c.span(ce||(ce=Object(k.a)(["\n    font-size:14px;\n    font-weight:600;\n"]))),nt=T.c.div(oe||(oe=Object(k.a)(["\n    margin-top: 25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap: 10px;\n"]))),rt=function(e){var t=e.title,n=e.children;return Object(M.jsxs)(et,{children:[Object(M.jsx)(tt,{children:t}),Object(M.jsx)(nt,{children:n})]})},at=T.c.div(se||(se=Object(k.a)(["\n    font-size: 12px;\n"]))),it=T.c.div(le||(le=Object(k.a)(["\n    background-image:url(",");\n    height:210px;\n    background-size: cover;\n    border-radius: 2px;\n    background-position:center center;\n    transition:opacity 0.15s linear;\n"])),(function(e){return e.bgUrl})),ct=T.c.span(de||(de=Object(k.a)(["\n    bottom: 5px;\n    right : 6px;\n    position:absolute;\n    opacity:0;\n    color: white;\n"]))),ot=T.c.span(je||(je=Object(k.a)(["\n    top: 5px;\n    left : 6px;\n    margin : 15px;\n    display: block;\n    position:absolute;\n    margin-bottom: 3px;\n    opacity: 0;\n    color: white;\n"]))),st=T.c.div(pe||(pe=Object(k.a)(["\n    margin-bottom: 5px;\n    position:relative;\n    &:hover{\n        "," {\n            opacity: 0.2;\n        }\n        "," {\n            opacity: 1;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"])),it,ct,ot),lt=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(M.jsx)(v.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(M.jsx)(at,{children:Object(M.jsxs)(st,{children:[Object(M.jsx)(it,{bgUrl:r?"https://image.tmdb.org/t/p/w500".concat(r):n(35).default}),Object(M.jsxs)(ot,{children:[a.length>18?"".concat(a.substring(0,18),"..."):a," (",c,")"]}),Object(M.jsxs)(ct,{children:[Object(M.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",Math.floor(i/2*10)/10,"/5"]})]})})})},dt=T.c.div(be||(be=Object(k.a)(["\n    padding: 0px 20px;\n"]))),jt=T.c.form(ue||(ue=Object(k.a)(["\n    margin-bottom: 50px;\n    width:100%;\n"]))),pt=T.c.input(he||(he=Object(k.a)(["\n    all:unset;\n    font-size: 28px;\n    width:100%;\n"]))),bt=T.c.div(ge||(ge=Object(k.a)(["\n    font-size: 20px;\n    margin-bottom: 30px;\n    position: relative;\n    color: yellow;\n"]))),ut=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm,s=e.pastTerm;return Object(M.jsxs)(dt,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:"Search | Madflix"})}),Object(M.jsx)(jt,{onSubmit:c,children:Object(M.jsx)(pt,{placeholder:"\uac80\uc0c9\ud558\uace0 \uc2f6\uc740 \uc601\ud654, TV\uc2dc\ub9ac\uc988\ub97c \uc785\ub825\ud558\uc138\uc694",value:r,onChange:o})}),i?Object(M.jsx)(U,{}):Object(M.jsxs)(M.Fragment,{children:[s?Object(M.jsxs)(bt,{children:["'",s,"' \uc804\uccb4 \uac80\uc0c9\uacb0\uacfc\uac00 ",t.length+n.length,"\uac74 \uc788\uc2b5\ub2c8\ub2e4."]}):s,t&&t.length>0&&Object(M.jsx)(rt,{title:"\uc601\ud654 \uac80\uc0c9\uacb0\uacfc",children:t.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(M.jsx)(rt,{title:"TV\ud504\ub85c\uadf8\ub7a8 \uac80\uc0c9\uacb0\uacfc",children:n.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(M.jsx)(C,{color:"#e74c3c",text:a})]})]})},ht=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1,pastTerm:null},e.handleSubmit=function(t){t.preventDefault();var n=e.state.searchTerm;""!==n&&e.searchByTerm(n)},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(w.a)(_.a.mark((function t(){var n,r,a,i,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,t.next=4,Q(n);case 4:return r=t.sent,a=r.data.results,t.next=8,ee(n);case 8:i=t.sent,c=i.data.results,e.setState({pastTerm:n,movieResults:a,tvResults:c,loading:!0}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.setState({error:"Can't find results"});case 16:return t.prev=16,e.setState({loading:!1}),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))),e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.pastTerm;return Object(M.jsx)(ut,{movieResults:t,tvResults:n,searchTerm:r,pastTerm:c,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(p.a.Component),gt=T.c.div(xe||(xe=Object(k.a)(["\n    padding: 40px;\n"]))),xt=function(e){var t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:" TV Shows | Madflix"})}),i?Object(M.jsx)(U,{}):Object(M.jsxs)(gt,{children:[t&&t.length>0&&Object(M.jsx)(rt,{title:"\ucd5c\uace0 \ud3c9\uc810 \uc2dc\ub9ac\uc988",children:t.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(M.jsx)(rt,{title:"\uc624\ub298 \ubc29\uc601 \uc2dc\ub9ac\uc988",children:n.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(M.jsx)(rt,{title:"\uc778\uae30 \uc2dc\ub9ac\uc988",children:r.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(M.jsx)(C,{color:"#e74c3c",text:a})]})]})},mt=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,error:null,isloading:!0},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(_.a.mark((function e(){var t,n,r,a,i,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:return t=e.sent,n=t.data.results,e.next=7,Z();case 7:return r=e.sent,a=r.data.results,e.next=11,Y();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(M.jsx)(xt,{topRated:t,airingToday:n,popular:r,error:a,loading:i})}}]),n}(p.a.Component),Ot=n(65),vt=n(66),ft=n(26),yt=Object(ft.withBaseIcon)({size:27,style:{color:"White"}}),_t=T.c.header(me||(me=Object(k.a)(["\n    \n    color: white;\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height: 60px;\n    align-items: center;\n    padding: 0px 10px;\n    background-color:rgba(0,0,0,1);\n    z-index: 10;\n    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.8);\n    opacity:0.7;\n  "]))),wt=T.c.div(Oe||(Oe=Object(k.a)([" \n    padding-right: 25px;\n    float: right;\n    display: flex;\n    font-size: 20px;\n"]))),kt=T.c.ul(ve||(ve=Object(k.a)(["\n    float: left;\n    display:flex;\n    \n"]))),Tt=T.c.li(fe||(fe=Object(k.a)(["\n    width: 90px;\n    height: 60px;\n    text-align: center;\n    border-bottom:5px solid \n    ",";\n    transition:border-bottom .5s ease-in-out;\n    \n  "])),(function(e){return e.current?"RED":"transparent"})),St=Object(T.c)(v.b)(ye||(ye=Object(k.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    &:hover{\n        opacity: 0.9;\n    }\n  "]))),Mt=Object(f.g)((function(e){var t=e.location.pathname;return Object(M.jsxs)(_t,{children:[Object(M.jsxs)(kt,{children:[Object(M.jsx)(Tt,{current:"/"===t,children:Object(M.jsx)(St,{to:"/",children:Object(M.jsx)(yt,{icon:Ot.home3})})}),Object(M.jsx)(Tt,{current:"/movie"===t,children:Object(M.jsx)(St,{to:"/movie",children:"\uc601\ud654"})}),Object(M.jsx)(Tt,{current:"/tv"===t,children:Object(M.jsx)(St,{to:"/tv",children:"TV\uc2dc\ub9ac\uc988"})})]}),Object(M.jsx)(wt,{children:Object(M.jsx)(St,{to:"/search",children:Object(M.jsx)(yt,{icon:vt.search})})})]})})),zt=n(40),Ut=n(67),Rt=n(68),It=n(69),Ct=n(47),At=n(48),Ft=n(70),Bt=n(77),Pt=n(75),Dt=n(34),Vt=(n(144),T.c.div(_e||(_e=Object(k.a)(["\n    font-size: 12px;\n"])))),Kt=T.c.div(we||(we=Object(k.a)(["\n    background-image:url(",");\n    width: 110px;\n    height:180px;\n    background-size: cover;\n    border-radius: 2px;\n    background-position:center center;\n"])),(function(e){return e.bgUrl})),Et=T.c.h2(ke||(ke=Object(k.a)(["\n    position:relative;\n    margin-bottom: 3px;\n"]))),Nt=T.c.h3(Te||(Te=Object(k.a)(["\n    position:relative;\n    margin-bottom: 3px;\n"]))),qt=T.c.div(Se||(Se=Object(k.a)(["\n    margin-bottom: 5px;\n    position:relative;\n"]))),Lt=T.c.div(Me||(Me=Object(k.a)(["\n"]))),Gt=function(e){var t=e.imageUrl,r=e.name,a=e.character_name;return Object(M.jsxs)(Vt,{children:[Object(M.jsxs)(qt,{children:[Object(M.jsx)(Kt,{bgUrl:t?"https://image.tmdb.org/t/p/original".concat(t):n(35).default}),Object(M.jsxs)(Et,{children:["* ",r]}),Object(M.jsxs)(Nt,{children:["- ",a]})]}),Object(M.jsx)(Lt,{})]})},Jt=Object(T.c)(Bt.a)(ze||(ze=Object(k.a)(["\n  .rec.rec-arrow {\n      border-radius: 0;\n      background-color: rgba(114, 114, 114, 0.2);\n  }\n  \n  .rec.rec-dot {\n    \n      background-color: rgba(114, 114, 114, 0.2);\n      \n  }\n  .rec.rec-dot_active {\n      border-color: black;\n      background-color: black;\n       \n    }\n  /* round buttons on hover */\n  .rec.rec-arrow:hover {\n      border-radius: 50%;\n      background-color: black;\n  }\n  /* hide disabled buttons */\n  .rec.rec-arrow:disabled {\n      visibility: hidden;\n  }\n  .rec-carousel-item:focus {\n    outline: none;\n    box-shadow: inset 0 0 1px 1px lightgrey;\n    \n}\n\n"]))),Ht=Object(ft.withBaseIcon)({size:12,style:{color:"yellow"}}),Wt=Object(ft.withBaseIcon)({size:22,style:{color:"Red"}}),Qt=Object(ft.withBaseIcon)({size:22,style:{color:"Grey"}}),Xt=T.c.span(Ue||(Ue=Object(k.a)(["\n  margin-left : 15px;\n"]))),Yt=T.c.div(Re||(Re=Object(k.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Zt=T.c.div(Ie||(Ie=Object(k.a)(["\n  position: relative;\n  margin-top : 35px;\n  margin-left : 10px;\n"]))),$t=T.c.div(Ce||(Ce=Object(k.a)(["\n  margin-top : 100px;\n"]))),en=T.c.div(Ae||(Ae=Object(k.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),tn=T.c.div(Fe||(Fe=Object(k.a)(["\n    background-image:url(",");\n    width: auto;\n    height:50px;\n    background-size: 100% 100%;\n    border-radius: 1px; \n"])),(function(e){return e.bgImage})),nn=T.c.div(Be||(Be=Object(k.a)(["\n  margin-left : 15px;\n  margin-top : 30px;\n"]))),rn=T.c.div(Pe||(Pe=Object(k.a)(["\n  margin-top : 15px;\n  margin-left : 30px;\n  font-size: 14px;\n"]))),an=T.c.div(De||(De=Object(k.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),cn=T.c.div(Ve||(Ve=Object(k.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),on=T.c.div(Ke||(Ke=Object(k.a)(["\n    \n    width: 50%;\n    margin-left: 40px;\n"]))),sn=T.c.h3(Ee||(Ee=Object(k.a)(["\n    font-size : 42px;\n    margin-left : 10px;\n    margin-top : 20px;\n    margin-bottom : 10px;\n"]))),ln=T.c.span(Ne||(Ne=Object(k.a)(["\n  font-size : 14px;\n"]))),dn=T.c.div(qe||(qe=Object(k.a)(["\n  margin-top : 20px;\n  margin-left: 20px;\n"]))),jn=T.c.div(Le||(Le=Object(k.a)(["\n  margin:20px 0;\n  font-size: 12px;\n"]))),pn=T.c.span(Ge||(Ge=Object(k.a)(["\n    margin: 0 10px;\n"]))),bn=T.c.p(Je||(Je=Object(k.a)(["\n    font-size:13px;\n    opacity:0.7;\n    line-height:1.5;\n    width:60%;\n"])));var un,hn,gn=function(e){var t=e.result,r=e.loading,a=e.error;return r?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:"Loading | Madflix"})}),Object(M.jsx)(U,{})]}):a?Object(M.jsx)(C,{}):Object(M.jsxs)(Yt,{children:[Object(M.jsx)(S.a,{children:Object(M.jsxs)("title",{children:[t.original_title?t.title:t.name," | Madflix"]})}),Object(M.jsx)(en,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(M.jsxs)(an,{children:[Object(M.jsx)(cn,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(35)}),Object(M.jsxs)(on,{children:[Object(M.jsxs)(sn,{children:[t.original_title?t.title:t.name,Object(M.jsx)(Xt,{children:t.imdb_id?Object(M.jsx)("a",{target:"_blank",href:"https://www.imdb.com/title/".concat(t.imdb_id),children:Object(M.jsx)(Wt,{icon:Ct.clapperboard})}):Object(M.jsx)(Qt,{icon:Ct.clapperboard})}),Object(M.jsx)(Xt,{children:t.homepage?Object(M.jsx)("a",{target:"_blank",href:t.homepage,children:Object(M.jsx)(Wt,{icon:At.home})}):Object(M.jsx)(Qt,{icon:At.home})})]}),Object(M.jsx)(Zt,{children:Object(M.jsxs)(Pt.a,{defaultActiveKey:"home",transition:!1,id:"noanim-tab-example",children:[Object(M.jsxs)(Dt.a,{eventKey:"home",title:"\uc601\ud654\uc815\ubcf4",children:[Object(M.jsxs)(jn,{children:[Object(M.jsx)(ln,{children:t.release_date?t.release_date&&t.release_date.substring(0,4):t.first_air_date&&t.first_air_date.substring(0,4)}),Object(M.jsx)(pn,{children:"."}),Object(M.jsxs)(ln,{children:[t.runtime?t.runtime:t.episode_run_time&&t.episode_run_time[0]," \ubd84"]}),Object(M.jsx)(pn,{children:"."}),Object(M.jsx)(ln,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name,"/")}))}),Object(M.jsx)(pn,{children:"."}),Object(M.jsxs)(ln,{children:[Object(zt.a)(Array(parseInt(Math.floor(t.vote_average/2*10)/10))).map((function(e,t){return Object(M.jsx)(Ht,{icon:Ut.starFull})})),Object(zt.a)(Array(t.vote_average%2>=.5?1:0)).map((function(e,t){return Object(M.jsx)(Ht,{icon:Rt.starHalf})})),Object(zt.a)(Array(t.vote_average%2>=.5?4-parseInt(Math.floor(t.vote_average/2*10)/10):5-parseInt(Math.floor(t.vote_average/2*10)/10))).map((function(e,t){return Object(M.jsx)(Ht,{icon:It.starEmpty})}))," ",Math.floor(t.vote_average/2*10)/10,"/5"]}),Object(M.jsx)("h3",{children:Object(M.jsx)(ln,{children:t.production_countries&&t.production_countries.map((function(e){return"[".concat(e.name,"]")}))})})]}),Object(M.jsx)(bn,{children:t.overview})]}),Object(M.jsx)(Dt.a,{eventKey:"profile",title:"\uc81c\uc791\uc0ac/\ucd9c\uc5f0\uc9c4",children:Object(M.jsxs)(nn,{children:[Object(M.jsx)(rt,{title:"\uc81c\uc791\uc0ac",children:t.production_companies.map((function(e){return e.logo_path?Object(M.jsx)(tn,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.logo_path)}):console.log(e.logo_path)}))}),"\ucd9c\uc5f0\uc9c4",Object(M.jsx)(Jt,{breakPoints:[{width:1,itemsToShow:1},{width:250,itemsToShow:2,itemsToScroll:2},{width:348,itemsToShow:3},{width:560,itemsToShow:4},{width:720,itemsToShow:5}],children:t.credits.cast.map((function(e){return"Acting"===e.known_for_department&&e.profile_path?Object(M.jsx)(Gt,{imageUrl:e.profile_path,name:e.original_name,character_name:e.character}):console.log(e.profile_path)}))})]})}),Object(M.jsx)(Dt.a,{eventKey:"Clip",title:"\uad00\ub828\ud074\ub9bd",children:Object(M.jsx)(dn,{children:t.videos.results[0]?Object(M.jsx)(Ft.a,{videoId:t.videos.results[0]?t.videos.results[0].key:console.log(t.videos.results),opts:{height:"390",width:"640",playerVars:{autoplay:0}}}):Object(M.jsx)("h5",{children:"\uad00\ub828 \uc601\uc0c1\ud074\ub9bd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4 ! "})})}),t.original_name?Object(M.jsx)(Dt.a,{eventKey:"Series",title:"\uc2dc\ub9ac\uc988",children:Object(M.jsx)(rn,{children:Object(M.jsx)(rt,{children:t.seasons.map((function(e){return e.name?Object(M.jsx)(Gt,{imageUrl:e.poster_path,name:e.name,character_name:e.air_date&&e.air_date.substring(0,4)}):console.log(e.profile_path)}))})})}):console.log(t.original_name)]})})]})]}),Object(M.jsx)($t,{children:Object(M.jsx)(rt,{title:"\uad00\ub828 \uc788\ub294 \uc791\ud488\ub4e4",children:t.original_title?t.similar.results.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)})):t.similar.results.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.name,imageUrl:e.backdrop_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))})})]})},xn=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(e){var r;Object(h.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(_.a.mark((function e(){var t,n,r,a,i,c,o,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,W(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,$(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything"});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(M.jsx)(gn,{result:t,error:n,loading:r})}}]),n}(p.a.Component),mn=T.c.div(un||(un=Object(k.a)(["\n    padding: 40px;\n"]))),On=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:"Movies | Madflix"})}),i?Object(M.jsx)(U,{}):Object(M.jsxs)(mn,{children:[t&&t.length>0&&Object(M.jsx)(rt,{title:"\ud604\uc7ac \uc0c1\uc601\uc911",children:t.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(M.jsx)(rt,{title:"\uc0c1\uc601 \uc608\uc815",children:n.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(M.jsx)(rt,{title:"\uc778\uae30 \uc601\ud654",children:r.map((function(e){return Object(M.jsx)(lt,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),a&&Object(M.jsx)(C,{color:"#e74c3c",text:a})]})]})},vn=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(_.a.mark((function e(){var t,n,r,a,i,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:return t=e.sent,n=t.data.results,e.next=7,J();case 7:return r=e.sent,a=r.data.results,e.next=11,H();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(M.jsx)(On,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(p.a.Component),fn=function(){return Object(M.jsx)(v.a,{children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Mt,{}),Object(M.jsxs)(f.d,{children:[Object(M.jsx)(f.b,{path:"/",exact:"exact",component:$e}),Object(M.jsx)(f.b,{path:"/movie",exact:"exact",component:vn}),Object(M.jsx)(f.b,{path:"/search",exact:"exact",component:ht}),Object(M.jsx)(f.b,{path:"/tv",exact:"exact",component:mt}),Object(M.jsx)(f.b,{path:"/movie/:id",render:function(e){return Object(M.jsx)(xn,Object(O.a)({},e),e.match.params.id)}}),Object(M.jsx)(f.b,{path:"/show/:id",render:function(e){return Object(M.jsx)(xn,Object(O.a)({},e),e.match.params.id)}}),Object(M.jsx)(f.a,{from:"*",to:"/"})]})]})})},yn=n(74),_n=Object(T.a)(hn||(hn=Object(k.a)(["\n    ","\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: 'Nanum Gothic';\n        font-style: normal;\n        font-weight: 700;\n        font-size:12px;\n        background-color:rgba(0, 0, 0, 1);\n        color:white;\n        padding-top:50px;\n    }\n    "])),yn.a),wn=function(e){Object(x.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(fn,{}),Object(M.jsx)(_n,{})]})}}]),n}(j.Component);u.a.render(Object(M.jsx)(p.a.StrictMode,{children:Object(M.jsx)(wn,{})}),document.getElementById("root"))},35:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/NoPosterSmall.d7656969.png"}},[[149,1,2]]]);
//# sourceMappingURL=main.bd35d2f2.chunk.js.map