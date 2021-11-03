(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{71:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(35),r=n.n(c),s=n(16),o=n(15),i=n(13),l=n(14),u=n(0);function d(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),d=s[0],h=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),v=b[0],m=b[1];return v?Object(u.jsx)(o.a,{to:{pathname:"sign-in",state:d}}):Object(u.jsxs)("div",{className:"emailBar",children:[Object(u.jsxs)("div",{className:"inputWrapper",children:[Object(u.jsx)("input",{onBlur:function(){return c(!1)},onFocus:function(){return c(!0)},onChange:function(e){return h(e.target.value.trim())},className:"inputWrapper__input",onKeyDown:function(e){return function(e){"Enter"===e.code&&(d.length>0?m(!0):m(!1))}(e)},type:"text"}),Object(u.jsx)("p",{className:n?"inputWrapper__placeholder add":"inputWrapper__placeholder",children:"Username or phone"})]}),Object(u.jsx)(l.b,{className:"sendBtn",to:{pathname:"/sign-in",state:d},children:"Get Started"})]})}function h(e){var t=e.custom;return Object(u.jsx)(l.b,{className:t?"logoCustom":"logoBrand",to:"/",children:"Netflix"})}function j(){return Object(u.jsx)("div",{className:"banner",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"banner__content",children:[Object(u.jsxs)("div",{className:"banner__content-header",children:[Object(u.jsx)(h,{}),Object(u.jsx)(l.b,{className:"banner__content-signin",to:"sign-in",children:"Sign in"})]}),Object(u.jsx)("div",{className:"banner__content-wrapperText",children:Object(u.jsxs)("div",{className:"banner__content-text",children:[Object(u.jsxs)("div",{className:"banner__content-mainText",children:[Object(u.jsx)("h5",{children:"Unlimited movies, TV shows, and more."}),Object(u.jsx)("h6",{children:"Watch anywhere. Cancel anytime."})]}),Object(u.jsxs)("div",{className:"banner__content-description",children:[Object(u.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(u.jsx)("div",{style:{textAlign:"center",marginTop:20},children:Object(u.jsx)(d,{})})]})]})})]})})})}function b(e){var t=e.title,n=e.description,a=e.img,c=(e.decor,e.video),r=e.reverse;return Object(u.jsx)("div",{className:"authContentPage__content",children:Object(u.jsxs)("div",{className:r?"authContentPage__content-wrapper reverse":"authContentPage__content-wrapper",children:[Object(u.jsxs)("div",{className:"authContentPage__content-text",children:[Object(u.jsx)("h5",{className:"authContentPage__content-title",children:t}),Object(u.jsx)("p",{className:"authContentPage__content-description",children:n})]}),Object(u.jsxs)("div",{className:"authContentPage__content-media",children:[a&&Object(u.jsx)("img",{src:a}),c&&Object(u.jsx)("div",{className:"authContentPage__content-video",children:Object(u.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:Object(u.jsx)("source",{src:c,type:"video/mp4"})})})]})]})})}var v=[{title:"What is Netflix?",content:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",secondContent:"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},{title:"How much does Netflix cost?",content:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 \u20ab to 260,000 \u20ab a month. No extra costs, no contracts."},{title:"Where can I watch?",secondContent:"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",content:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."},{title:"How do I cancel?",content:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account anytime."},{title:"What can I watch on Netflix?",content:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},{title:"Is Netflix good for kids?",secondContent:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\u2019t want kids to see.",content:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."}],m=[{video:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v?fbclid=IwAR0k2Mk4WZlYeb_5HKw7f_ZYssxeiGMiMw0Qz5W2zL3Ok4iYOPOQ4V0pb-4",title:"Enjoy on your TV.",description:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",img:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png?fbclid=IwAR3kXJMdN9ymijpBEFXI7zbDEez4q5mVg06M2aYWgWS82DZ-0b4MR1fR42w"},{reverse:!0,title:"Download your shows to watch offline.",description:"Save your favorites easily and always have something to watch.",img:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"},{title:"Watch everywhere.",description:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."},{reverse:!0,img:"https://occ-0-3687-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",title:"Create profiles for kids.",description:"Send kids on adventures with their favorite characters in a space made just for them\u2014free with your membership."}],p=[{title:"FAQ"},{title:"Investor Relations"},{title:"Privacy"},{title:"Speed Test"}],x=[{title:"Help Center"},{title:"Jobs"},{title:"Cookie Preferences"},{title:"Legal Notices"}],O=[{title:"Account"},{title:"Ways to Watch"},{title:"Corporate Information"},{title:"Only on Netflix"}],f=[{title:"Media Center"},{title:"Terms of Use"},{title:"Contact Us"}];function g(){return Object(u.jsx)("div",{className:"authContentPage",children:null===m||void 0===m?void 0:m.map((function(e,t){return Object(u.jsx)(b,{reverse:e.reverse&&e.reverse,img:e.img&&e.img,title:e.title,description:e.description,decor:e.decor&&e.decor,video:e.video&&e.video},t)}))})}var _=n(25),w=n(24);function N(e){var t=e.title,n=e.content,c=e.secondContent,r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"questionAuth__content-dropdown",children:[Object(u.jsxs)("div",{className:"questionAuth__content-main",children:[Object(u.jsx)("h6",{children:t}),Object(u.jsx)(_.a,{style:{cursor:"pointer"},onClick:function(){return l(!o)},icon:o?w.f:w.d,size:"lg",color:"white"})]}),Object(u.jsx)("div",{className:o?"questionAuth__content-description show":"questionAuth__content-description",children:Object(u.jsxs)("p",{children:[n,c&&Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," ",c]})]})})]})})}function y(){return Object(u.jsx)("div",{className:"questionAuth",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"questionAuth__content",children:[Object(u.jsx)("h6",{className:"questionAuth__content-title",children:"Frequently Asked Questions"}),null===v||void 0===v?void 0:v.map((function(e,t){return Object(u.jsx)(N,{secondContent:e.secondContent&&e.secondContent,title:e.title,content:e.content},t)}))]}),Object(u.jsxs)("div",{className:"questionAuth__email",children:[Object(u.jsx)("p",{className:"questionAuth__email-title",children:"Ready to watch? Enter your email to create or restart your membership."}),Object(u.jsx)(d,{})]})]})})}function T(){return Object(s.c)((function(e){return e.authReducer})).isLoggedIn?Object(u.jsx)(o.a,{to:{pathname:"/home"}}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(g,{}),Object(u.jsx)(y,{})]})}function k(e){var t=e.placeholder,n=e.onChangeText,c=e.text,r=e.passwordInput,s=e.showErr,o=e.onKeyDown,l=e.value,d=Object(a.useState)(!1),h=Object(i.a)(d,2),j=h[0],b=h[1],v=Object(a.useState)(!0),m=Object(i.a)(v,2),p=m[0],x=m[1];return Object(u.jsxs)("div",{className:"Ninput",children:[Object(u.jsx)("input",{className:s,type:r&&p?"password":"text",onFocus:function(){return b(!0)},onBlur:function(){(null===c||void 0===c?void 0:c.length)>0?b(!0):b(!1)},onChange:n,value:l,onKeyDown:o}),Object(u.jsx)("p",{className:j||(null===l||void 0===l?void 0:l.length)>0?"Ninput_placeholder add":"Ninput_placeholder",children:t}),r&&Object(u.jsx)("p",{onClick:function(){return x(!p)},className:"Ninput_password",children:p?"SHOW":"HIDE"})]})}var E=n(27),S=Object(E.b)({name:"auth",initialState:{isLoggedIn:!1,isLoading:!1,user:null,accountExist:!0,btnDisable:!1},reducers:{LoginRequest:function(e,t){},LoginSuccess:function(e){e.isLoggedIn=!0},logOutRequest:function(){},logOutSuccess:function(e){e.isLoggedIn=!1},startDisableBtn:function(e){e.btnDisable=!0},stopDisableBtn:function(e){e.btnDisable=!1},LoginFailed:function(e){e.isLoggedIn=!1},startLoading:function(e){e.isLoading=!0},stopLoading:function(e){e.isLoading=!1},getMeRequest:function(e,t){var n=t.payload;e.user=n},accountNotExist:function(e){e.accountExist=!1},accountExist:function(e){e.accountExist=!0},getUser:function(){}}}),R=S.actions,L=S.reducer;function A(e){var t,n,c=Object(a.useState)((null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.state)?null===e||void 0===e||null===(n=e.location)||void 0===n?void 0:n.state:""),r=Object(i.a)(c,2),l=r[0],d=r[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),v=b[0],m=b[1],p=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var t=!(e.length<2);r(t)}),[e]),c}(l),x=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var t=!(e.length<4);r(t)}),[e]),c}(v),O=Object(a.useState)(!1),f=Object(i.a)(O,2),g=f[0],_=f[1],w=Object(s.b)(),N=Object(s.c)((function(e){return e.authReducer})),y=N.accountExist,T=N.isLoggedIn,E=N.btnDisable,S=Object(a.useState)(!1),L=Object(i.a)(S,2),A=L[0],C=L[1],M=function(){return l.length>0&&v.length>0&&p&&x?(C(!1),w(R.LoginRequest({username:l,password:v})),!0):(C(!0),!1)};Object(a.useEffect)((function(){return function(){w(R.accountExist())}}),[]);var G=function(e,t){e(t.target.value.trim()),w(R.accountExist()),C(!1)},I=function(e){"Enter"===e.code&&M()};return T?Object(u.jsx)(o.a,{to:{pathname:"/home"}}):Object(u.jsx)("div",{className:"login",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"login__content",children:[Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"login__content-form",children:[Object(u.jsx)("h6",{className:"formTitle",children:"Sign In"}),Object(u.jsx)(k,{onKeyDown:function(e){return!E&&I(e)},value:l,showErr:l.length>0&&!p?"showErr":"",text:l,onChangeText:function(e){return G(d,e)},placeholder:"Username or phone number"}),l.length>0&&!p&&Object(u.jsx)("p",{className:"login__content-err",children:"Your email is invalid"}),Object(u.jsx)(k,{onKeyDown:function(e){return!E&&I(e)},value:v,showErr:v.length>0&&!x?"showErr":"",passwordInput:!0,text:v,onChangeText:function(e){return G(m,e)},placeholder:"Password"}),v.length>0&&!x&&Object(u.jsx)("p",{className:"login__content-err",children:"Your password is invalid"}),Object(u.jsx)("div",{onClick:function(){return!E&&void M()},className:E?"login__content-btn disable":"login__content-btn",children:Object(u.jsx)("p",{className:E?"disable":"",children:"Sign In"})}),A&&Object(u.jsx)("p",{className:"login__content-err",style:{textAlign:"center"},children:"Do not leave email and password empty"}),!y&&Object(u.jsx)("p",{className:"login__content-err",style:{textAlign:"center"},children:"Your username or password not existed"}),Object(u.jsxs)("p",{className:"login__content-register",children:["New to Netflix?",Object(u.jsx)("span",{onClick:function(){window.open("https://www.themoviedb.org/signup","newwindow","width=".concat(.8*window.innerWidth,"\n                                            ,height=").concat(1*window.innerHeight))},children:"Sign up now."})]}),Object(u.jsxs)("p",{className:"login__content-more",children:["This page is protected by Google reCAPTCHA to ensure you\\'re not a bot.",!g&&Object(u.jsx)("span",{onClick:function(){return _(!0)},children:"Learn more ."})]}),Object(u.jsx)("p",{className:g?"login__content-policy show":"login__content-policy",children:"The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google)."})]})]})})})}var C,M,G=Object(E.b)({name:"home",initialState:{trending:{},allMoviesTvshowsTrending:{movies:{},tvShows:{}},genresTv:[],genresMovie:[],allMovie:[],allTvshow:[],Loading:{trending:!1,popular:!1,genreTv:!1,genreMovie:!1}},reducers:{startLoadingPopuplar:function(e){e.Loading.popular=!0},stopLoadingPopular:function(e){e.Loading.popular=!1},startLoadingGenreTv:function(e){e.Loading.genreTv=!0},stopLoadingGenreTv:function(e){e.Loading.genreTv=!1},startLoadingGenreMovie:function(e){e.Loading.genreMovie=!0},stopLoadingGenreMovie:function(e){e.Loading.genreMovie=!1},getTvByGenreRequest:function(){},getTvByGenreSuccess:function(e,t){var n=t.payload;e.allTvshow=n},getMoviesByGenreRequest:function(){},getMoviesByGenreSuccess:function(e,t){var n=t.payload;e.allMovie=n},getGenresMovieRequest:function(){},getGenresTvRequest:function(){},getGenresMovieSuccess:function(e,t){var n=t.payload;e.genresMovie=n},getGenresTvSuccess:function(e,t){var n=t.payload;e.genresMovie=n},getTrendingRequest:function(){},trendingDataSuccess:function(e,t){var n=t.payload;e.trending=n},getTrendingMovieAndTvshowRequest:function(e){},getTrendingMovieAndTvshowDataSuccess:function(e,t){var n=t.payload;e.allMoviesTvshowsTrending=n}}}),I=G.actions,P=G.reducer;function D(e){var t=e.data;return Object(u.jsx)("div",{className:"home__banner",style:t&&{backgroundImage:"\n                linear-gradient(\n                    0deg,rgba(0,0,0,1) 0,rgba(0,0,0,0) 100%),\n                  url(".concat(M.TRENDING_BACKGROUND).concat(t.backdrop_path,")")},children:t&&Object(u.jsx)("div",{className:"home__banner-content",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h6",{className:"home__banner-title",children:"tv"===t.media_type?t.name:t.title}),Object(u.jsx)("p",{className:"home__banner-overview",children:t.overview&&t.overview}),Object(u.jsxs)("div",{className:"home__banner-btnGroup",children:[Object(u.jsxs)("div",{className:"home__banner-btnTrailer",children:[Object(u.jsx)(_.a,{style:{marginRight:"10px"},size:"sm",icon:w.c}),Object(u.jsx)("span",{children:"Trailer"})]}),Object(u.jsxs)("div",{className:"home__banner-btnDetail",children:[Object(u.jsx)(_.a,{style:{marginRight:"10px"},size:"sm",icon:w.b}),Object(u.jsx)("span",{children:"More info"})]})]})]})})})}!function(e){e.BASE="https://api.themoviedb.org/3/",e.MOVIE_POPULAR="movie/popular?",e.TV_POPULAR="tv/popular?",e.RECOMMENDATION="recommendations?",e.SEARCH="search/multi?",e.REQUEST_TOKEN="authentication/token/new?",e.REQUEST_LOGIN="authentication/token/validate_with_login?",e.CREATE_SESSION="authentication/session/new?",e.ACCOUNT="account?",e.TRENDING="trending/all/day?",e.LOG_OUT="authentication/session?",e.MOVIE_DETAIL="movie/",e.TV_DETAIL="tv/",e.GENRE_MOVIE="genre/movie/list?",e.GENRE_TV="genre/tv/list?",e.MOVIE_BY_GENRE="discover/movie?",e.TV_BY_GENRE="discover/tv?",e.FAVORITE_WATCHLIST="account/"}(C||(C={})),function(e){e.AVATAR="https://www.themoviedb.org/t/p/w150_and_h150_face/",e.TRENDING_BACKGROUND="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",e.POSTER="https://themoviedb.org/t/p/w355_and_h200_multi_faces/"}(M||(M={}));var q=n.p+"static/media/defaultPoster.22bff5ce.jpg";n(45);function V(e){var t,n,c,r,s,o=Object(a.useState)(!1),l=Object(i.a)(o,2);l[0],l[1];return Object(u.jsxs)("div",{className:"itemBox",children:[Object(u.jsx)("img",{className:"itemBox_img swiper-lazy","data-src":(null===(t=e.data)||void 0===t?void 0:t.backdrop_path)?"".concat(M.POSTER).concat(null===(n=e.data)||void 0===n?void 0:n.backdrop_path):q}),Object(u.jsx)("p",{className:"itemBox_title",children:(null===(c=e.data)||void 0===c?void 0:c.original_title)?null===(r=e.data)||void 0===r?void 0:r.original_title:null===(s=e.data)||void 0===s?void 0:s.original_name})]})}var B,W=n(94);!function(e){e.TV="tv",e.MOVIE="movie"}(B||(B={}));var U=n(18),F=n(95),Y=n(91),H=n(92),K=n(93),z=n(96);n(69),n(70);function Q(e){var t=e.Component;return F.a.use([Y.a,H.a,K.a]),Object(u.jsx)(z.a,Object(U.a)(Object(U.a)({},{navigation:!0,spaceBetween:2,watchOverflow:!0,lazy:!0,enabled:!0,pagination:{clickable:!1},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},400:{slidesPerView:2.45,slidesPerGroup:2},800:{slidesPerView:4.45,slidesPerGroup:4},992:{slidesPerView:5.45,slidesPerGroup:5,noSwiping:!0,noSwipingClass:"swiper-slide"}}}),{},{children:t}))}function J(e){var t,n,a=e.title,c=e.movies,r=e.tvShows,s=e.type;return Object(u.jsxs)("div",{className:"home__category",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"home__category-header",children:a})}),Object(u.jsxs)("div",{className:"home__category-content",children:[s===B.MOVIE&&Object(u.jsx)(Q,{Component:null===c||void 0===c||null===(t=c.results)||void 0===t?void 0:t.map((function(e){return Object(u.jsx)(W.a,{children:Object(u.jsx)(V,{type:s,data:e},e.id)},e.id)}))}),s===B.TV&&Object(u.jsx)(Q,{Component:null===r||void 0===r||null===(n=r.results)||void 0===n?void 0:n.map((function(e){return Object(u.jsx)(W.a,{children:Object(u.jsx)(V,{type:s,data:e},e.id)},e.id)}))})]})]})}var X=n(39);function Z(){return Object(u.jsx)(X.a,{baseColor:"#202020",highlightColor:"#444",children:Object(u.jsxs)("div",{className:"skeletonWrapper",children:[Object(u.jsx)(X.b,{className:"skeletonName"}),Object(u.jsx)(X.b,{className:"skeleton"})]})})}function $(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.homeReducer.trending})),n=Object(s.c)((function(e){return e.homeReducer.allMoviesTvshowsTrending})),c=Object(s.c)((function(e){return e.homeReducer})),r=c.allMovie,o=c.allTvshow,i=c.Loading,l=i.popular,d=i.genreMovie,h=i.genreTv,j=t.results,b=n.movies,v=n.tvShows;return Object(a.useEffect)((function(){e(I.getTrendingRequest()),e(I.getTrendingMovieAndTvshowRequest()),e(I.getMoviesByGenreRequest()),e(I.getTvByGenreRequest())}),[]),Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D,{data:j&&j[0]}),Object(u.jsx)("div",{className:"home__wrapper",children:Object(u.jsxs)("div",{className:"home__categoryContent",children:[l?Object(u.jsx)(Z,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{type:B.MOVIE,movies:b,title:"Popular Movies"}),Object(u.jsx)(J,{type:B.TV,tvShows:v,title:"Popular TvShows"})]}),d?Object(u.jsx)(Z,{}):null===r||void 0===r?void 0:r.map((function(e,t){return Object(u.jsx)(J,{type:B.MOVIE,movies:e,title:"".concat(e.genre," movies")},t)})),h?Object(u.jsx)(Z,{}):null===o||void 0===o?void 0:o.map((function(e,t){return Object(u.jsx)(J,{type:B.TV,tvShows:e,title:"".concat(e.genre," Tv shows")},t)}))]})})]})})}function ee(e){var t=e.contentData;return Object(u.jsx)("div",{className:"footerData",children:Object(u.jsx)("div",{className:"footerData__content",children:(null===t||void 0===t?void 0:t.length)>0&&(null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsx)("p",{className:"footerData__content-data",children:e.title},t)})))})})}function te(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"footer__content",children:[Object(u.jsx)("p",{className:"footer__content-title",children:"Questions? Contact us."}),Object(u.jsxs)("div",{className:"footer__content-category",children:[Object(u.jsx)(ee,{contentData:p}),Object(u.jsx)(ee,{contentData:x}),Object(u.jsx)(ee,{contentData:O}),Object(u.jsx)(ee,{contentData:f})]}),Object(u.jsx)("small",{className:"footer__content-brand",children:"Netflix"})]})})})}var ne=n(29);function ae(e){var t=e.component,n=e.auth,a=Object(ne.a)(e,["component","auth"]);return Object(u.jsx)(o.b,Object(U.a)(Object(U.a)({},a),{},{render:function(e){return n?Object(u.jsx)(t,Object(U.a)({},e)):Object(u.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))}function ce(){return Object(u.jsx)("div",{className:"loading"})}var re=n.p+"static/media/avatar.4c6f8b3d.png";function se(){var e=Object(s.c)((function(e){return e.authReducer})),t=e.user,n=e.btnDisable,c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=(r[0],r[1],Object(a.useState)(!1)),d=Object(i.a)(o,2),j=d[0],b=d[1],v=Object(a.useState)(!1),m=Object(i.a)(v,2),p=m[0],x=m[1],O=Object(a.useState)(!1),f=Object(i.a)(O,2),g=f[0],N=f[1],y=(Object(a.useRef)(null),Object(a.useRef)(null)),T=Object(s.b)();return function(e,t){Object(a.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(y,b),Object(a.useEffect)((function(){var e=function(){window.scrollY>0?N(!0):N(!1)};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[window.scrollY]),Object(u.jsxs)("div",{className:g?"home__header add":"home__header",children:[Object(u.jsxs)("div",{ref:y,className:"home__header-left",children:[Object(u.jsx)(_.a,{onClick:function(){return b(!j)},className:"home__header-mobileBtn",icon:w.a,size:"lg"}),Object(u.jsxs)("div",{className:j?"home__header-menuMobile open":"home__header-menuMobile",children:[Object(u.jsxs)("div",{className:"home__header-detailMobile",children:[Object(u.jsxs)("div",{className:"home__header-avatarMobile",children:[Object(u.jsx)("div",{className:"home__header-avatar",children:Object(u.jsx)("img",{src:t.avatar.tmdb.avatar_path?"".concat(M.AVATAR).concat(t.avatar.tmdb.avatar_path):re,alt:"avatar"})}),Object(u.jsx)("p",{className:"home__header-username",children:t.name?t.name:t.username})]}),Object(u.jsx)(l.b,{to:"/home",className:"home__header-detail",children:Object(u.jsx)("span",{children:"Account Detail"})}),Object(u.jsxs)("p",{className:"home__header-logoutMobile",children:[Object(u.jsx)("span",{onClick:function(){return!n&&T(R.logOutRequest())},children:"Log out"})," "]})]}),Object(u.jsxs)("ul",{className:"home__header-linkMobile",children:[Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"Home"}),Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"Tv shows"}),Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"Movies"}),Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"My list"})]})]}),Object(u.jsx)(h,{custom:!0}),Object(u.jsxs)("ul",{className:"home__header-menu",children:[Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"Home"}),Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"Tv shows"}),Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"Movies"}),Object(u.jsx)(l.b,{className:"home__header-link",to:"/home",children:"My list"})]})]}),Object(u.jsxs)("div",{className:"home__header-mobileSearchGroup",children:[Object(u.jsx)(_.a,{icon:w.e}),Object(u.jsx)("input",{placeholder:"Movie, Tvshow, Actor",className:"home__header-search mobile",type:"text"})]}),Object(u.jsxs)("div",{className:"home__header-right",children:[Object(u.jsxs)("div",{className:p?"home__header-searchGroup show":"home__header-searchGroup",children:[Object(u.jsx)(_.a,{onClick:function(){x(!p)},style:{cursor:"pointer"},icon:w.e}),Object(u.jsx)("input",{placeholder:"Movie, Tvshow, Actor",className:p?"home__header-search show":"home__header-search",type:"text"})]}),Object(u.jsxs)("div",{className:"home__header-avatarGroup",children:[Object(u.jsx)("div",{className:"home__header-avatar",children:Object(u.jsx)("img",{src:t.avatar.tmdb.avatar_path?"".concat(M.AVATAR).concat(t.avatar.tmdb.avatar_path):re,alt:"avatar"})}),Object(u.jsx)("span",{className:"home__header-triangle"}),Object(u.jsx)("p",{className:"home__header-username",children:t.name?t.name:t.username}),Object(u.jsxs)("div",{className:"home__header-dropdown",children:[Object(u.jsx)(l.b,{to:"/home",className:"home__header-detail",children:Object(u.jsx)("span",{children:"Account Detail"})}),Object(u.jsxs)("p",{className:"home__header-detail",children:[Object(u.jsx)("span",{onClick:function(){return!n&&T(R.logOutRequest())},children:"Log out"})," "]})]})]})]})]})}function oe(){var e=Object(s.c)((function(e){return e.authReducer})),t=e.isLoggedIn,n=e.isLoading,c=e.user,r=Object(s.b)();return Object(a.useEffect)((function(){r(R.getUser())}),[]),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)(l.a,{children:[t&&c&&Object(u.jsx)(se,{}),n?Object(u.jsx)(ce,{}):Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:T}),Object(u.jsx)(o.b,{exact:!0,path:"/sign-in",component:A}),Object(u.jsx)(ae,{exact:!0,path:"/home",component:c&&$,auth:t})]})]}),Object(u.jsx)(te,{})]})}n(71);var ie={authReducer:L,homeReducer:P},le=n(56),ue=n(8),de=n.n(ue),he=n(38),je=n(31),be=n(55),ve=n.n(be).a.create({baseURL:C.BASE,timeout:3e4,headers:{"Content-type":"application/json"}});ve.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),ve.interceptors.response.use((function(e){return e}),(function(e){return console.log(e.response),Promise.reject(e)}));var me=ve,pe="131c3841b70be2908cf7a3fabcaa002e",xe=function(){var e=Object(je.a)(de.a.mark((function e(t){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(je.a)(de.a.mark((function e(t){var n;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(t);case 3:return n=e.sent,e.abrupt("return",{movies:n[0],tvShows:n[1]});case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=me.get("".concat(C.REQUEST_TOKEN,"api_key=").concat(pe));return xe(e)},ge=function(e,t){var n=new FormData;return n.append("username",e.username.trim()),n.append("password",e.password.trim()),n.append("request_token",t),xe(me.post("".concat(C.REQUEST_LOGIN,"api_key=").concat(pe),n))},_e=function(e){var t=new FormData;return t.append("request_token",e),xe(me.post("".concat(C.CREATE_SESSION,"api_key=").concat(pe),t))},we=function(){return xe(me.get("".concat(C.TRENDING,"api_key=").concat(pe)))},Ne=function(e){var t=new FormData;return t.append("session_id",e),xe(me.delete("".concat(C.LOG_OUT,"api_key=").concat(pe),{data:t}))},ye=function(){var e=me.get("".concat(C.MOVIE_POPULAR,"api_key=").concat(pe)),t=me.get("".concat(C.TV_POPULAR,"api_key=").concat(pe));return Oe([e,t])},Te=function(){return xe(me.get("".concat(C.GENRE_MOVIE,"api_key=").concat(pe)))},ke=function(){return xe(me.get("".concat(C.GENRE_TV,"api_key=").concat(pe)))},Ee=function(){var e=Object(je.a)(de.a.mark((function e(){var t,n,a,c,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te();case 2:if(t=e.sent,n=[],200!==t.status){e.next=14;break}a=2;case 6:if(!(a<8)){e.next=14;break}return e.next=9,xe(me.get("".concat(C.MOVIE_BY_GENRE,"api_key=").concat(pe,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=").concat(t.data.genres[a].id)));case 9:200===(c=e.sent).status&&(r=Object(U.a)({genre:t.data.genres[a].name},c.data),n.push(r));case 11:a++,e.next=6;break;case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(je.a)(de.a.mark((function e(){var t,n,a,c,r;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke();case 2:if(t=e.sent,n=[],200!==t.status){e.next=14;break}a=0;case 6:if(!(a<8)){e.next=14;break}return e.next=9,xe(me.get("".concat(C.TV_BY_GENRE,"api_key=").concat(pe,"&language=en-US&sort_by=popularity.desc&page=1&with_genres=").concat(t.data.genres[a].id)));case 9:200===(c=e.sent).status&&(r=Object(U.a)({genre:t.data.genres[a].name},c.data),n.push(r));case 11:a++,e.next=6;break;case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=n(6),Le=de.a.mark(Ge),Ae=de.a.mark(Ie),Ce=de.a.mark(Pe),Me=de.a.mark(De);function Ge(e){var t,n,a,c,r,s,o,i,l;return de.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,u.next=3,Object(Re.b)(R.startDisableBtn());case 3:return u.prev=3,u.next=6,Object(Re.a)(fe);case 6:if(200!==(n=u.sent).status){u.next=33;break}return c=n.data.request_token,u.next=11,ge(t,c);case 11:if(!0!==(null===(r=u.sent)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.success)){u.next=29;break}return u.next=15,Object(Re.b)(R.accountExist());case 15:return u.next=17,_e(null===r||void 0===r||null===(s=r.data)||void 0===s?void 0:s.request_token);case 17:if(!0!==(null===(i=u.sent)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.success)){u.next=25;break}return u.next=21,localStorage.setItem("token",JSON.stringify(null===i||void 0===i||null===(l=i.data)||void 0===l?void 0:l.session_id));case 21:return u.next=23,Object(Re.b)(R.getUser());case 23:u.next=27;break;case 25:return u.next=27,Object(Re.b)(R.LoginFailed());case 27:u.next=33;break;case 29:return u.next=31,Object(Re.b)(R.accountNotExist());case 31:return u.next=33,Object(Re.b)(R.LoginFailed());case 33:u.next=40;break;case 35:return u.prev=35,u.t0=u.catch(3),console.log(u.t0),u.next=40,Object(Re.b)(R.LoginFailed());case 40:return u.prev=40,u.next=43,Object(Re.b)(R.stopDisableBtn());case 43:return u.finish(40);case 44:case"end":return u.stop()}}),Le,null,[[3,35,40,44]])}function Ie(){var e,t;return de.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Re.b)(R.startLoading());case 2:return n.next=4,localStorage.getItem("token");case 4:if(e=n.sent,n.prev=5,!e){n.next=21;break}return n.next=9,a=JSON.parse(e),xe(me.get("".concat(C.ACCOUNT,"api_key=").concat(pe,"&session_id=").concat(a)));case 9:if(200!==(t=n.sent).status){n.next=17;break}return n.next=13,Object(Re.b)(R.LoginSuccess());case 13:return n.next=15,Object(Re.b)(R.getMeRequest(t.data));case 15:n.next=19;break;case 17:return n.next=19,Object(Re.b)(R.LoginFailed());case 19:n.next=23;break;case 21:return n.next=23,Object(Re.b)(R.LoginFailed());case 23:n.next=28;break;case 25:n.prev=25,n.t0=n.catch(5),console.log(n.t0);case 28:return n.prev=28,n.next=31,Object(Re.b)(R.stopLoading());case 31:return n.finish(28);case 32:case"end":return n.stop()}var a}),Ae,null,[[5,25,28,32]])}function Pe(){var e;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Re.b)(R.startLoading());case 2:return t.next=4,localStorage.getItem("token");case 4:return e=t.sent,t.next=7,Object(Re.b)(R.startDisableBtn());case 7:if(t.prev=7,!e){t.next=17;break}return t.next=11,Object(Re.a)(Ne,JSON.parse(e));case 11:if(200!==t.sent.status){t.next=17;break}return t.next=15,localStorage.removeItem("token");case 15:return t.next=17,Object(Re.b)(R.logOutSuccess());case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(7),console.log(t.t0);case 22:return t.prev=22,t.next=25,Object(Re.b)(R.stopDisableBtn());case 25:return t.next=27,Object(Re.b)(R.stopLoading());case 27:return t.finish(22);case 28:case"end":return t.stop()}}),Ce,null,[[7,19,22,28]])}function De(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.c)(R.LoginRequest,Ge);case 2:return e.next=4,Object(Re.c)(R.getUser,Ie);case 4:return e.next=6,Object(Re.c)(R.logOutRequest,Pe);case 6:case"end":return e.stop()}}),Me)}var qe=De,Ve=de.a.mark(Ke),Be=de.a.mark(ze),We=de.a.mark(Qe),Ue=de.a.mark(Je),Fe=de.a.mark(Xe),Ye=de.a.mark(Ze),He=de.a.mark($e);function Ke(){var e;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Re.a)(we);case 3:if(200!==(null===(e=t.sent)||void 0===e?void 0:e.status)){t.next=7;break}return t.next=7,Object(Re.b)(I.trendingDataSuccess(e.data));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),Ve,null,[[0,9]])}function ze(){var e,t,n,a;return de.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Re.b)(I.startLoadingPopuplar());case 2:return c.prev=2,c.next=5,Object(Re.a)(ye);case 5:if(n=c.sent,200!==(null===(e=n.movies)||void 0===e?void 0:e.status)||200!==(null===(t=n.tvShows)||void 0===t?void 0:t.status)){c.next=10;break}return a={movies:n.movies.data,tvShows:n.tvShows.data},c.next=10,Object(Re.b)(I.getTrendingMovieAndTvshowDataSuccess(a));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(2),console.log(c.t0);case 15:return c.prev=15,c.next=18,Object(Re.b)(I.stopLoadingPopular());case 18:return c.finish(15);case 19:case"end":return c.stop()}}),Be,null,[[2,12,15,19]])}function Qe(){var e;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Re.a)(Te);case 3:if(200!==(null===(e=t.sent)||void 0===e?void 0:e.status)){t.next=7;break}return t.next=7,Object(Re.b)(I.getGenresMovieSuccess(e.data.genres));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),We,null,[[0,9]])}function Je(){var e;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Re.b)(I.startLoadingGenreTv());case 2:return t.prev=2,t.next=5,Object(Re.a)(ke);case 5:if(200!==(null===(e=t.sent)||void 0===e?void 0:e.status)){t.next=9;break}return t.next=9,Object(Re.b)(I.getGenresTvSuccess(e.data.genres));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:return t.prev=14,t.next=17,Object(Re.b)(I.stopLoadingGenreTv());case 17:return t.finish(14);case 18:case"end":return t.stop()}}),Ue,null,[[2,11,14,18]])}function Xe(){var e;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Re.b)(I.startLoadingGenreMovie());case 2:return t.next=4,Ee();case 4:if(e=t.sent,t.prev=5,!e){t.next=9;break}return t.next=9,Object(Re.b)(I.getMoviesByGenreSuccess(e));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.log(t.t0);case 14:return t.prev=14,t.next=17,Object(Re.b)(I.stopLoadingGenreMovie());case 17:return t.finish(14);case 18:case"end":return t.stop()}}),Fe,null,[[5,11,14,18]])}function Ze(){var e;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Se();case 2:if(e=t.sent,t.prev=3,!e){t.next=7;break}return t.next=7,Object(Re.b)(I.getTvByGenreSuccess(e));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0);case 12:return t.prev=12,t.finish(12);case 14:case"end":return t.stop()}}),Ye,null,[[3,9,12,14]])}function $e(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.c)(I.getTrendingRequest,Ke);case 2:return e.next=4,Object(Re.c)(I.getTrendingMovieAndTvshowRequest,ze);case 4:return e.next=6,Object(Re.c)(I.getGenresMovieRequest,Qe);case 6:return e.next=8,Object(Re.c)(I.getGenresTvRequest,Je);case 8:return e.next=10,Object(Re.c)(I.getMoviesByGenreRequest,Xe);case 10:return e.next=12,Object(Re.c)(I.getTvByGenreRequest,Ze);case 12:case"end":return e.stop()}}),He)}var et=$e,tt=de.a.mark(nt);function nt(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([qe(),et()]);case 2:case"end":return e.stop()}}),tt)}var at=Object(le.a)(),ct=Object(E.a)({reducer:ie,middleware:function(e){return e().concat(at)}});at.run(nt);var rt=ct;r.a.render(Object(u.jsx)(s.a,{store:rt,children:Object(u.jsx)(oe,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.733d1f9c.chunk.js.map