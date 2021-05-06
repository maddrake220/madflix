(this.webpackJsonpmadflix=this.webpackJsonpmadflix||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,j,p,u,b,h,g,x,m,O,v,f,_,y,w,k,S,T,M,U,R,z,I,C,P,A,F,B,N,V,K,D,L,q,E,H,J=n(0),G=n.n(J),Q=n(25),W=n.n(Q),X=n(15),Y=n(16),Z=n(19),$=n(18),ee=n(46),te=n(23),ne=n(7),re=n(13),ae=n.n(re),ie=n(21),ce=n(5),oe=n(3),se=n(20),le=n(1),de=oe.c.div(r||(r=Object(ce.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]))),je=oe.c.span(a||(a=Object(ce.a)(["\n    font-size:14px;\n    font-weight:600;\n"]))),pe=oe.c.div(i||(i=Object(ce.a)(["\n    margin-top: 25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap: 10px;\n"]))),ue=function(e){var t=e.title,n=e.children;return Object(le.jsxs)(de,{children:[Object(le.jsx)(je,{children:t}),Object(le.jsx)(pe,{children:n})]})},be=oe.c.div(c||(c=Object(ce.a)(["\n    height:100vh;\n    width:100vw;\n    display:flex;\n    justify-content:center;\n    font-size:28px;\n    margin-top:20px;\n"]))),he=function(){return Object(le.jsx)(be,{children:Object(le.jsx)("span",{role:"img","aria-lable":"Loading",children:"\u23f0"})})},ge=oe.c.div(o||(o=Object(ce.a)(["\n    width:100vw;\n    display:flex;\n    justify-content: center;\n"]))),xe=oe.c.span(s||(s=Object(ce.a)(["\n    color: ",";\n"])),(function(e){return e.color})),me=function(e){var t=e.text,n=e.color;return Object(le.jsx)(ge,{children:Object(le.jsx)(xe,{color:n,children:t})})},Oe=oe.c.div(l||(l=Object(ce.a)(["\n    font-size: 12px;\n"]))),ve=oe.c.div(d||(d=Object(ce.a)(["\n    background-image:url(",");\n    height:180px;\n    background-size: cover;\n    border-radius: 2px;\n    background-position:center center;\n    transition:opacity 0.15s linear;\n"])),(function(e){return e.bgUrl})),fe=oe.c.span(j||(j=Object(ce.a)(["\n    bottom: 5px;\n    right : 6px;\n    position:absolute;\n    opacity:0;\n    color: white;\n"]))),_e=oe.c.span(p||(p=Object(ce.a)(["\n    top: 5px;\n    left : 6px;\n    margin : 15px;\n    display: block;\n    position:absolute;\n    margin-bottom: 3px;\n    opacity: 0;\n    color: white;\n"]))),ye=oe.c.div(u||(u=Object(ce.a)(["\n    margin-bottom: 5px;\n    position:relative;\n    &:hover{\n        "," {\n            opacity: 0.2;\n        }\n        "," {\n            opacity: 1;\n        }\n        "," {\n            opacity: 1;\n        }\n    }\n"])),ve,fe,_e),we=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(le.jsx)(te.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object(le.jsx)(Oe,{children:Object(le.jsxs)(ye,{children:[Object(le.jsx)(ve,{bgUrl:r?"https://image.tmdb.org/t/p/w500".concat(r):n(39).default}),Object(le.jsxs)(_e,{children:[a.length>18?"".concat(a.substring(0,18),"..."):a," (",c,")"]}),Object(le.jsxs)(fe,{children:[Object(le.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"})," ",Math.floor(i/2*10)/10,"/5"]})]})})})},ke=oe.c.div(b||(b=Object(ce.a)(["\npadding: 20px;\n"]))),Se=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(se.a,{children:Object(le.jsx)("title",{children:"Movies | Madflix"})}),i?Object(le.jsx)(he,{}):Object(le.jsxs)(ke,{children:[t&&t.length>0&&Object(le.jsx)(ue,{title:"Now Playing",children:t.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(le.jsx)(ue,{title:"Upcoming Movies",children:n.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(le.jsx)(ue,{title:"Popular Movies",children:r.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),a&&Object(le.jsx)(me,{color:"#e74c3c",text:a})]})]})},Te=n(62),Me=n.n(Te).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a127a7776848f42bc0b876f6e53c9203",language:"ko"}}),Ue=function(){return Me.get("movie/now_playing")},Re=function(){return Me.get("movie/upcoming")},ze=function(){return Me.get("movie/popular")},Ie=function(e){return Me.get("movie/".concat(e),{params:{append_to_response:"videos,credits,similar"}})},Ce=function(e){return Me.get("search/movie",{params:{query:encodeURIComponent(e)}})},Pe=function(){return Me.get("tv/top_rated")},Ae=function(){return Me.get("tv/airing_today")},Fe=function(){return Me.get("tv/popular")},Be=function(e){return Me.get("tv/".concat(e),{params:{append_to_response:"videos,credits,similar"}})},Ne=function(e){return Me.get("search/tv",{params:{query:encodeURIComponent(e)}})},Ve=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(X.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ae.a.mark((function e(){var t,n,r,a,i,c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ue();case 3:return t=e.sent,n=t.data.results,e.next=7,Re();case 7:return r=e.sent,a=r.data.results,e.next=11,ze();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(le.jsx)(Se,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(G.a.Component),Ke=oe.c.div(h||(h=Object(ce.a)(["\n    padding: 0px 20px;\n"]))),De=oe.c.form(g||(g=Object(ce.a)(["\n    margin-bottom: 50px;\n    width:100%;\n"]))),Le=oe.c.input(x||(x=Object(ce.a)(["\n    all:unset;\n    font-size: 28px;\n    width:100%;\n"]))),qe=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm,s=e.pastTerm;return Object(le.jsxs)(Ke,{children:[Object(le.jsx)(se.a,{children:Object(le.jsx)("title",{children:"Search | Madflix"})}),Object(le.jsx)(De,{onSubmit:c,children:Object(le.jsx)(Le,{placeholder:"Search Movies or TV Show...",value:r,onChange:o})}),i?Object(le.jsx)(he,{}):Object(le.jsxs)(le.Fragment,{children:[t&&t.length>0&&Object(le.jsx)(ue,{title:"Movie Results",children:t.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(le.jsx)(ue,{title:"TV Show Results",children:n.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(le.jsx)(me,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(le.jsx)(me,{text:"Nothing Found for: ".concat(s),color:"#95a5a6"})]})]})},Ee=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(X.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1,pastTerm:null},e.handleSubmit=function(t){t.preventDefault();var n=e.state.searchTerm;""!==n&&e.searchByTerm(n)},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(ie.a)(ae.a.mark((function t(){var n,r,a,i,c;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,t.next=4,Ce(n);case 4:return r=t.sent,a=r.data.results,t.next=8,Ne(n);case 8:i=t.sent,c=i.data.results,e.setState({pastTerm:n,movieResults:a,tvResults:c,loading:!0}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.setState({error:"Can't find results"});case 16:return t.prev=16,e.setState({loading:!1}),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))),e}return Object(Y.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.pastTerm;return Object(le.jsx)(qe,{movieResults:t,tvResults:n,searchTerm:r,pastTerm:c,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(G.a.Component),He=oe.c.div(m||(m=Object(ce.a)(["\n    padding: 20px;\n"]))),Je=function(e){var t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(se.a,{children:Object(le.jsx)("title",{children:" TV Shows | Madflix"})}),i?Object(le.jsx)(he,{}):Object(le.jsxs)(He,{children:[t&&t.length>0&&Object(le.jsx)(ue,{title:"Top Rated Shows",children:t.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(le.jsx)(ue,{title:"Airing Today",children:n.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(le.jsx)(ue,{title:"Popular Shows",children:r.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),a&&Object(le.jsx)(me,{color:"#e74c3c",text:a})]})]})},Ge=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(X.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,error:null,isloading:!0},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ae.a.mark((function e(){var t,n,r,a,i,c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Pe();case 3:return t=e.sent,n=t.data.results,e.next=7,Fe();case 7:return r=e.sent,a=r.data.results,e.next=11,Ae();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(le.jsx)(Je,{topRated:t,airingToday:n,popular:r,error:a,loading:i})}}]),n}(G.a.Component),Qe=oe.c.header(O||(O=Object(ce.a)(["\n    color: white;\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height: 50px;\n    display:flex;\n    align-items: center;\n    padding: 0px 10px;\n    background-color:rgba(20,20,20,1);\n    z-index: 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  "]))),We=oe.c.ul(v||(v=Object(ce.a)(["\n    display:flex;\n    &:hover{\n        backgroud-color:blue;\n    }"]))),Xe=oe.c.li(f||(f=Object(ce.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom:5px solid \n    ",";\n    transition:border-bottom .5s ease-in-out;\n  "])),(function(e){return e.current?"#3498db":"transparent"})),Ye=Object(oe.c)(te.b)(_||(_=Object(ce.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "]))),Ze=Object(ne.g)((function(e){var t=e.location.pathname;return Object(le.jsx)(Qe,{children:Object(le.jsxs)(We,{children:[Object(le.jsx)(Xe,{current:"/"===t,children:Object(le.jsx)(Ye,{to:"/",children:"Movies"})}),Object(le.jsx)(Xe,{current:"/tv"===t,children:Object(le.jsx)(Ye,{to:"/tv",children:"TV"})}),Object(le.jsx)(Xe,{current:"/search"===t,children:Object(le.jsx)(Ye,{to:"/search",children:"Search"})})]})})})),$e=n(36),et=n(31),tt=n(63),nt=n(64),rt=n(65),at=n(43),it=n(44),ct=n(66),ot=n(45),st=n(71),lt=n(32),dt=(n(120),oe.c.div(y||(y=Object(ce.a)(["\n    font-size: 12px;\n"])))),jt=oe.c.div(w||(w=Object(ce.a)(["\n    background-image:url(",");\n    width: 110px;\n    height:180px;\n    background-size: cover;\n    border-radius: 2px;\n    background-position:center center;\n"])),(function(e){return e.bgUrl})),pt=oe.c.h2(k||(k=Object(ce.a)(["\n    position:relative;\n    margin-bottom: 3px;\n"]))),ut=oe.c.h3(S||(S=Object(ce.a)(["\n    position:relative;\n    margin-bottom: 3px;\n"]))),bt=oe.c.div(T||(T=Object(ce.a)(["\n    margin-bottom: 5px;\n    position:relative;\n"]))),ht=oe.c.div(M||(M=Object(ce.a)(["\n"]))),gt=function(e){var t=e.imageUrl,r=e.name,a=e.character_name;return Object(le.jsxs)(dt,{children:[Object(le.jsxs)(bt,{children:[Object(le.jsx)(jt,{bgUrl:t?"https://image.tmdb.org/t/p/original".concat(t):n(39).default}),Object(le.jsxs)(pt,{children:["* ",r]}),Object(le.jsxs)(ut,{children:["- ",a]})]}),Object(le.jsx)(ht,{})]})},xt=(n(121),Object(et.withBaseIcon)({size:12,style:{color:"yellow"}})),mt=Object(et.withBaseIcon)({size:12,style:{color:"Red"}}),Ot=Object(et.withBaseIcon)({size:12,style:{color:"Grey"}}),vt=oe.c.span(U||(U=Object(ce.a)(["\n  margin-left : 15px;\n"]))),ft=oe.c.div(R||(R=Object(ce.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),_t=oe.c.div(z||(z=Object(ce.a)(["\n  position: relative;\n  margin-top : 35px;\n  margin-left : 10px;\n"]))),yt=oe.c.div(I||(I=Object(ce.a)(["\n  margin-top : 100px;\n"]))),wt=oe.c.div(C||(C=Object(ce.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),kt=oe.c.div(P||(P=Object(ce.a)(["\n    background-image:url(",");\n    width: auto;\n    height:50px;\n    background-size: 100% 100%;\n    border-radius: 1px; \n"])),(function(e){return e.bgImage})),St=oe.c.div(A||(A=Object(ce.a)(["\n  margin-left : 15px;\n  margin-top : 30px;\n"]))),Tt=oe.c.div(F||(F=Object(ce.a)(["\n  margin-top : 15px;\n  margin-left : 30px;\n  font-size: 14px;\n"]))),Mt=oe.c.div(B||(B=Object(ce.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Ut=oe.c.div(N||(N=Object(ce.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),Rt=oe.c.div(V||(V=Object(ce.a)(["\n    \n    width: 50%;\n    margin-left: 40px;\n"]))),zt=oe.c.h3(K||(K=Object(ce.a)(["\n    font-size : 42px;\n    margin-left : 10px;\n    margin-top : 20px;\n    margin-bottom : 10px;\n"]))),It=oe.c.span(D||(D=Object(ce.a)(["\n  font-size : 14px;\n"]))),Ct=oe.c.div(L||(L=Object(ce.a)(["\n  margin-top : 20px;\n  margin-left: 20px;\n"]))),Pt=oe.c.div(q||(q=Object(ce.a)(["\n  margin:20px 0;\n"]))),At=oe.c.span(E||(E=Object(ce.a)(["\n    margin: 0 10px;\n"]))),Ft=oe.c.p(H||(H=Object(ce.a)(["\n    font-size:13px;\n    opacity:0.7;\n    line-height:1.5;\n    width:60%;\n"])));var Bt,Nt=function(e){var t=e.result,r=e.loading,a=e.error,i=[{width:1,itemsToShow:1},{width:250,itemsToShow:2,itemsToScroll:2},{width:348,itemsToShow:3},{width:560,itemsToShow:4},{width:720,itemsToShow:5}];return r?Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(se.a,{children:Object(le.jsx)("title",{children:"Loading | Madflix"})}),Object(le.jsx)(he,{})]}):a?Object(le.jsx)(me,{}):Object(le.jsxs)(ft,{children:[Object(le.jsx)(se.a,{children:Object(le.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," | Madflix"]})}),Object(le.jsx)(wt,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(le.jsxs)(Mt,{children:[Object(le.jsx)(Ut,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(39)}),Object(le.jsxs)(Rt,{children:[Object(le.jsxs)(zt,{children:[t.original_title?t.original_title:t.original_name,Object(le.jsx)(vt,{children:t.imdb_id?Object(le.jsx)("a",{target:"_blank",href:"https://www.imdb.com/title/".concat(t.imdb_id),children:Object(le.jsx)(mt,{icon:at.film})}):Object(le.jsx)(Ot,{icon:at.film})}),Object(le.jsx)(vt,{children:t.homepage?Object(le.jsx)("a",{target:"_blank",href:t.homepage,children:Object(le.jsx)(mt,{icon:it.home})}):Object(le.jsx)(Ot,{icon:it.home})})]}),Object(le.jsx)(_t,{children:Object(le.jsxs)(st.a,{defaultActiveKey:"home",transition:!1,id:"noanim-tab-example",children:[Object(le.jsxs)(lt.a,{eventKey:"home",title:"\uc601\ud654\uc815\ubcf4",children:[Object(le.jsxs)(Pt,{children:[Object(le.jsx)(It,{children:t.release_date?t.release_date&&t.release_date.substring(0,4):t.first_air_date&&t.first_air_date.substring(0,4)}),Object(le.jsx)(At,{children:"."}),Object(le.jsxs)(It,{children:[t.runtime?t.runtime:t.episode_run_time&&t.episode_run_time[0]," \ubd84"]}),Object(le.jsx)(At,{children:"."}),Object(le.jsx)(It,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name,"/")}))}),Object(le.jsx)(At,{children:"."}),Object(le.jsxs)(It,{children:[Object($e.a)(Array(parseInt(Math.floor(t.vote_average/2*10)/10))).map((function(e,t){return Object(le.jsx)(xt,{icon:tt.starFull})})),Object($e.a)(Array(t.vote_average%2>=.5?1:0)).map((function(e,t){return Object(le.jsx)(xt,{icon:nt.starHalf})})),Object($e.a)(Array(t.vote_average%2>=.5?4-parseInt(Math.floor(t.vote_average/2*10)/10):5-parseInt(Math.floor(t.vote_average/2*10)/10))).map((function(e,t){return Object(le.jsx)(xt,{icon:rt.starEmpty})}))," ",Math.floor(t.vote_average/2*10)/10,"/5"]}),Object(le.jsx)("h3",{children:Object(le.jsx)(It,{children:t.production_countries&&t.production_countries.map((function(e){return"[".concat(e.name,"]")}))})})]}),Object(le.jsx)(Ft,{children:t.overview})]}),Object(le.jsx)(lt.a,{eventKey:"profile",title:"\uc81c\uc791\uc0ac/\ucd9c\uc5f0\uc9c4",children:Object(le.jsxs)(St,{children:[Object(le.jsx)(ue,{title:"\uc81c\uc791\uc0ac",children:t.production_companies.map((function(e){return e.logo_path?Object(le.jsx)(kt,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.logo_path)}):console.log(e.logo_path)}))}),"\ucd9c\uc5f0\uc9c4",Object(le.jsx)(ot.a,{breakPoints:i,children:t.credits.cast.map((function(e){return"Acting"===e.known_for_department&&e.profile_path?Object(le.jsx)(gt,{imageUrl:e.profile_path,name:e.original_name,character_name:e.character}):console.log(e.profile_path)}))})]})}),Object(le.jsx)(lt.a,{eventKey:"Clip",title:"\uad00\ub828\ud074\ub9bd",children:Object(le.jsx)(Ct,{children:t.videos.results[0]?Object(le.jsx)(ct.a,{videoId:t.videos.results[0]?t.videos.results[0].key:console.log(t.videos.results),opts:{height:"390",width:"640",playerVars:{autoplay:0}}}):Object(le.jsx)("h5",{children:"\uad00\ub828 \ud074\ub9bd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4 ! "})})}),t.original_name?Object(le.jsx)(lt.a,{eventKey:"Series",title:"\uc2dc\ub9ac\uc988",children:Object(le.jsx)(Tt,{children:Object(le.jsx)(ot.a,{breakPoints:i,children:t.seasons.map((function(e){return e.name?Object(le.jsx)(gt,{imageUrl:e.poster_path,name:e.name,character_name:e.air_date&&e.air_date.substring(0,4)}):console.log(e.profile_path)}))})})}):console.log(t.original_name)]})})]})]}),Object(le.jsx)(yt,{children:Object(le.jsx)(ue,{title:"\uc720\uc0ac\ud55c \uc601\uc0c1\ub4e4",children:t.original_title?t.similar.results.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)})):t.similar.results.map((function(e){return Object(le.jsx)(we,{id:e.id,title:e.original_name,imageUrl:e.backdrop_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))})})]})},Vt=function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(e){var r;Object(X.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ae.a.mark((function e(){var t,n,r,a,i,c,o,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,Ie(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,Be(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything"});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(le.jsx)(Nt,{result:t,error:n,loading:r})}}]),n}(G.a.Component),Kt=function(){return Object(le.jsx)(te.a,{children:Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Ze,{}),Object(le.jsxs)(ne.d,{children:[Object(le.jsx)(ne.b,{path:"/",exact:"exact",component:Ve}),Object(le.jsx)(ne.b,{path:"/search",exact:"exact",component:Ee}),Object(le.jsx)(ne.b,{path:"/tv",exact:"exact",component:Ge}),Object(le.jsx)(ne.b,{path:"/movie/:id",render:function(e){return Object(le.jsx)(Vt,Object(ee.a)({},e),e.match.params.id)}}),Object(le.jsx)(ne.b,{path:"/show/:id",render:function(e){return Object(le.jsx)(Vt,Object(ee.a)({},e),e.match.params.id)}}),Object(le.jsx)(ne.a,{from:"*",to:"/"})]})]})})},Dt=n(70),Lt=Object(oe.a)(Bt||(Bt=Object(ce.a)(["\n    ","\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n    "])),Dt.a),qt=(n(126),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"render",value:function(){return Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Kt,{}),Object(le.jsx)(Lt,{})]})}}]),n}(J.Component));W.a.render(Object(le.jsx)(G.a.StrictMode,{children:Object(le.jsx)(qt,{})}),document.getElementById("root"))},39:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/NoPosterSmall.d7656969.png"}},[[142,1,2]]]);
//# sourceMappingURL=main.72331953.chunk.js.map