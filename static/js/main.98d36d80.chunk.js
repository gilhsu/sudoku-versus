(this["webpackJsonpsudoku-versus"]=this["webpackJsonpsudoku-versus"]||[]).push([[0],{43:function(e,t,r){},44:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),c=r.n(a),i=r(13),o=r.n(i),s=(r(43),r(71)),u=(r(44),r(4)),l=r(9),f=r.n(l),d=Object(a.createContext)(["0",function(){},[],function(){},f()(),function(){},!1,function(){},-1,function(){},[],function(){},!1,function(){},null,function(){}]),b=function(e){var t=e.children,r=Object(a.useState)("0"),c=Object(u.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)([]),l=Object(u.a)(s,2),b=l[0],h=l[1],j=Object(a.useState)(f()()),v=Object(u.a)(j,2),_=v[0],m=v[1],g=Object(a.useState)(!1),O=Object(u.a)(g,2),p=O[0],x=O[1],y=Object(a.useState)(-1),C=Object(u.a)(y,2),S=C[0],k=C[1],N=Object(a.useState)([]),w=Object(u.a)(N,2),A=w[0],T=w[1],I=Object(a.useState)(!1),M=Object(u.a)(I,2),E=M[0],G=M[1],B=Object(a.useState)(null),D=Object(u.a)(B,2),F=D[0],P=D[1];return Object(n.jsx)(d.Provider,{value:{numberSelected:i,setNumberSelected:o,gameArray:b,setGameArray:h,timeGameStarted:_,setTimeGameStarted:m,fastMode:p,setFastMode:x,cellSelected:S,setCellSelected:k,initArray:A,setInitArray:T,won:E,setWon:G,colorFlash:F,setColorFlash:P},children:t})},h=function(){return Object(a.useContext)(d)},j=r(22),v=r.n(j),_=r(29),m=function(e){var t=[0,1,2,3,4,5,6,7,8],r=h(),a=r.gameArray,c=r.cellSelected,i=r.initArray,o=r.colorFlash;function s(t,r,a,c){return"0"!==r?"0"===i[t]?c?Object(n.jsx)("td",{className:"game__cell game__cell--userfilled game__cell--".concat(c,"selected"),children:r},t):Object(n.jsx)("td",{className:"game__cell game__cell--userfilled game__cell--".concat(a,"selected"),children:r},t):Object(n.jsx)("td",{className:"game__cell game__cell--filled game__cell--".concat(a,"selected"),onClick:function(){return e.onClick(t)},children:r},t):Object(n.jsx)("td",{className:"game__cell game__cell--".concat(a,"selected"),onClick:function(){return e.onClick(t)},children:r},t)}function u(t,r){if("0"!==r)return"0"===i[t]?Object(n.jsx)("td",{className:"game__cell game__cell--userfilled",children:r},t):Object(n.jsx)("td",{className:"game__cell game__cell--filled",children:r},t);return Object(n.jsx)("td",{className:"game__cell",onClick:function(){return function(t){o||e.onClick(t)}(t)},children:r},t)}return Object(n.jsx)("section",{className:"game",children:Object(n.jsx)("table",{className:"game__board",children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)("tr",{className:"game__row",children:t.map((function(t){var r=9*e+t,n=a[r];return c===r?s(r,n,"highlight",o):-1!==c&&function(e,t){return c===9*e+t||"0"!==a[c]&&void 0}(e,t)?s(r,n,""):u(r,n)}))},e)}))})})})},g="EASY",O="MEDIUM",p="HARD",x=Object(a.createContext)([g,function(){},f()(),function(){},[],function(){},{},function(){},function(){},f()(),function(){},30,function(){}]),y=function(e){var t=e.children,r=Object(a.useState)(g),c=Object(u.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)(f()()),l=Object(u.a)(s,2),d=l[0],b=l[1],h=Object(a.useState)([{id:0,name:"Player 1"},{id:1,name:"Player 2"},{id:3,name:"Player 3"}]),j=Object(u.a)(h,2),v=j[0],_=j[1],m=Object(a.useState)(v[0]),O=Object(u.a)(m,2),p=O[0],y=O[1];var C=Object(a.useState)(f()()),S=Object(u.a)(C,2),k=S[0],N=S[1],w=Object(a.useState)(30),A=Object(u.a)(w,2),T=A[0],I=A[1];return Object(n.jsx)(x.Provider,{value:{difficulty:i,setDifficulty:o,timeTurnStarted:d,setTimeTurnStarted:b,players:v,setPlayers:_,currentPlayer:p,setCurrentPlayer:y,nextPlayer:function(){p.id<v.length-1?y(v[p.id+1]):y(v[0])},currentTime:k,setCurrentTime:N,timeSetting:T,setTimeSetting:I},children:t})},C=function(){return Object(a.useContext)(x)},S=function(e){var t=h().won,r=C(),c=r.timeTurnStarted,i=r.setTimeTurnStarted,o=r.currentPlayer,s=r.nextPlayer,u=r.currentTime,l=r.setCurrentTime,d=r.timeSetting;Object(a.useEffect)((function(){t||setTimeout((function(){l(f()())}),1e3)}),[u,l,t]);var b,j=d-u.diff(c,"seconds");return Object(a.useEffect)((function(){j<0&&(s(),i(f()()))}),[i,s,j]),b=0===o.id?{backgroundColor:"#afc7de"}:1===o.id?{backgroundColor:"#d9a0c7"}:{backgroundColor:"#a4e0b4"},Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{style:b,children:["Current Player: ",o.name]}),Object(n.jsx)("div",{className:"status__time",onClick:function(){},children:j})]})},k=function(e){var t=h().numberSelected;return Object(n.jsx)("div",{className:"status__numbers",children:[1,2,3,4,5,6,7,8,9].map((function(r){return t===r.toString()?Object(n.jsx)("div",{className:"status__number status__number--selected",onClick:function(){return e.onClickNumber(r.toString())},children:r},r):Object(n.jsx)("div",{className:"status__number",onClick:function(){return e.onClickNumber(r.toString())},children:r},r)}))})},N=function(e){return Object(n.jsxs)("section",{className:"status",children:[Object(n.jsx)("h2",{onClick:e.onClickNewGame,children:"New Game"}),Object(n.jsx)(S,{}),Object(n.jsx)(k,{onClickNumber:function(t){return e.onClickNumber(t)}})]})},w=r(30),A={DIGITS:"123456789"},T="ABCDEFGHI",I=A.DIGITS,M=null,E=null,G=null,B=null,D={easy:62,medium:53,hard:44,"very-hard":35,insane:26,inhuman:17};A.BLANK_CHAR=".",A.BLANK_BOARD=".................................................................................",A.generate=function(e,t){"string"!==typeof e&&"undefined"!==typeof e||(e=D[e]||D.easy),e=A._force_range(e,82,17),t=t||!0;for(var r="",n=0;n<81;++n)r+=".";var a=A._get_candidates_map(r),c=A._shuffle(M);for(var i in c){var o=c[i],s=A._rand_range(a[o].length),u=a[o][s];if(!A._assign(a,o,u))break;var l=[];for(i in M)1===a[o=M[i]].length&&l.push(a[o]);if(l.length>=e&&A._strip_dups(l).length>=8){var f="",d=[];for(n in M)1===a[o=M[n]].length?(f+=a[o],d.push(n)):f+=A.BLANK_CHAR;var b=d.length;if(b>e)for(d=A._shuffle(d),n=0;n<b-e;++n){var h=parseInt(d[n]);f=f.substr(0,h)+A.BLANK_CHAR+f.substr(h+1)}if(A.solve(f))return f}}return A.generate(e)},A.solve=function(e,t){var r=A.validate_board(e);if(!0!==r)throw r;var n=0;for(var a in e)e[a]!==A.BLANK_CHAR&&A._in(e[a],A.DIGITS)&&++n;if(n<17)throw"Too few givens. Minimum givens is 17";t=t||!1;var c=A._get_candidates_map(e),i=A._search(c,t);if(i){var o="";for(var s in i)o+=i[s];return o}return!1},A.get_candidates=function(e){var t=A.validate_board(e);if(!0!==t)throw t;var r=A._get_candidates_map(e);if(!r)return!1;var n=[],a=[],c=0;for(var i in r){var o=r[i];a.push(o),c%9===8&&(n.push(a),a=[]),++c}return n},A._get_candidates_map=function(e){var t=A.validate_board(e);if(!0!==t)throw t;var r={},n=A._get_square_vals_map(e);for(var a in M)r[M[a]]=A.DIGITS;for(var c in n){var i=n[c];if(A._in(i,A.DIGITS))if(!A._assign(r,c,i))return!1}return r},A._search=function(e,t){if(!e)return!1;t=t||!1;var r=0;for(var n in M){var a=M[n],c=e[a].length;c>r&&(r=c,a)}if(1===r)return e;var i=10,o=null;for(n in M)(c=e[a=M[n]].length)<i&&c>1&&(i=c,o=a);var s=e[o];if(t){for(u=s.length-1;u>=0;--u)if(l=s[u],f=JSON.parse(JSON.stringify(e)),d=A._search(A._assign(f,o,l),t))return d}else for(var u in s){var l=s[u],f=JSON.parse(JSON.stringify(e)),d=A._search(A._assign(f,o,l));if(d)return d}return!1},A._assign=function(e,t,r){var n=e[t].replace(r,"");for(var a in n){var c=n[a];if(!A._eliminate(e,t,c))return!1}return e},A._eliminate=function(e,t,r){if(!A._in(r,e[t]))return e;e[t]=e[t].replace(r,"");var n=e[t].length;if(1===n){var a=e[t];for(var c in B[t]){var i=B[t][c],o=A._eliminate(e,i,a);if(!o)return!1}}if(0===n)return!1;for(var s in G[t]){var u=G[t][s],l=[];for(var f in u){var d=u[f];A._in(r,e[d])&&l.push(d)}if(0===l.length)return!1;if(1===l.length&&!(o=A._assign(e,l[0],r)))return!1}return e},A._get_square_vals_map=function(e){var t={};if(e.length!==M.length)throw"Board/squares length mismatch.";for(var r in M)t[M[r]]=e[r];return t},A._get_square_units_map=function(e,t){var r={};for(var n in e){var a=e[n],c=[];for(var i in t){var o=t[i];-1!==o.indexOf(a)&&c.push(o)}r[a]=c}return r},A._get_square_peers_map=function(e,t){var r={};for(var n in e){var a=e[n],c=t[a],i=[];for(var o in c){var s=c[o];for(var u in s){var l=s[u];-1===i.indexOf(l)&&l!==a&&i.push(l)}}r[a]=i}return r},A._get_all_units=function(e,t){var r=[];for(var n in e)r.push(A._cross(e[n],t));for(var a in t)r.push(A._cross(e,t[a]));var c=["ABC","DEF","GHI"],i=["123","456","789"];for(var o in c)for(var s in i)r.push(A._cross(c[o],i[s]));return r},A.board_string_to_grid=function(e){var t=[],r=[];for(var n in e)r.push(e[n]),n%9===8&&(t.push(r),r=[]);return t},A.board_grid_to_string=function(e){for(var t="",r=0;r<9;++r)for(var n=0;n<9;++n)t+=e[r][n];return t},A.print_board=function(e){var t=A.validate_board(e);if(!0!==t)throw t;var r="";for(var n in e){r+=e[n]+" ",n%3===2&&(r+="  "),n%9===8&&(r+="\n"),n%27===26&&(r+="\n")}console.log(r)},A.validate_board=function(e){if(!e)return"Empty board";if(81!==e.length)return"Invalid board size. Board must be exactly 81 squares.";for(var t in e)if(!A._in(e[t],A.DIGITS)&&e[t]!==A.BLANK_CHAR)return"Invalid board character encountered at index "+t+": "+e[t];return!0},A._cross=function(e,t){var r=[];for(var n in e)for(var a in t)r.push(e[n]+t[a]);return r},A._in=function(e,t){return-1!==t.indexOf(e)},A._first_true=function(e){for(var t in e)if(e[t])return e[t];return!1},A._shuffle=function(e){for(var t=[],r=0;r<e.length;++r)t.push(!1);for(r in e){for(var n=A._rand_range(e.length);t[n];)n=n+1>e.length-1?0:n+1;t[n]=e[r]}return t},A._rand_range=function(e,t){if(t=t||0,e)return Math.floor(Math.random()*(e-t))+t;throw"Range undefined"},A._strip_dups=function(e){var t=[],r={};for(var n in e){var a=e[n];r[a]||(t.push(a),r[a]=!0)}return t},A._force_range=function(e,t,r){return(e=e||0)<(r=r||0)?r:e>t?t:e},M=A._cross(T,I),E=A._get_all_units(T,I),G=A._get_square_units_map(M,E),B=A._get_square_peers_map(M,G);var F=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];function P(e,t){var r=function(e){switch(e){case 0:return[1,1];case 1:return[1,4];case 2:return[1,7];case 3:return[4,1];case 4:return[4,4];case 5:return[4,7];case 6:return[7,1];case 7:return[7,4];case 8:return[7,7]}}(e),n=Object(u.a)(r,2),a=n[0],c=n[1];switch(t){case 0:a--,c--;break;case 1:a--;break;case 2:a--,c++;break;case 3:c--;break;case 4:break;case 5:c++;break;case 6:a++,c--;break;case 7:a++;break;case 8:a++,c++}return 9*a+c}function R(e,t,r){return"0"===e[P(t,r)]?0:1}var H=function(e,t){var r=F.slice(),n=F.slice(),a=A,c=a.generate(60);return Object(w.a)(c).forEach((function(e,t){r[t]="."===e?"0":e})),c=a.solve(c),Object(w.a)(c).forEach((function(e,t){n[t]=e})),[r=function(e,t,r){var n,a,c,i,o=t,s=F.slice(),u=[0,0,0,0,0,0,0,0,0],l=[],f=[];r&&(o=r),"EASY"===o?(n=3,a=7,c=45):"MEDIUM"===o?(n=2,a=6,c=40):(n=1,a=5,c=30);for(var d=0;d<9;d++)u[d]=R(s,d,0)+R(s,d,1)+R(s,d,2)+R(s,d,3)+R(s,d,4)+R(s,d,5)+R(s,d,6)+R(s,d,7)+R(s,d,8);for(var b=0;b<c;b++){l=[];for(var h=0;h<9;h++)u[h]<n&&l.push(h);if(l)for(var j=0;j<9;j++)u[j]<a&&l.push(j);i=l[Math.random()*l.length|0],f=[];for(var v=0;v<9;v++)"0"===s[P(i,v)]&&f.push(v);var _=P(i,f[Math.random()*f.length|0]);s[_]=e[_],u[i]++}return s}(n,e,t),n]},q=r(70),K=r(75),U=r(73),J=r(74),L=r(35),W=r(72),Y=Object(L.a)({typography:{fontFamily:'"Viga", sans-serif'}}),z=Object(q.a)((function(e){return console.log("theme",e),{title:{flexGrow:1,fontSize:40}}})),V=function(e){var t=e.children,r=z();return Object(n.jsx)(s.a,{theme:Y,children:Object(n.jsx)(W.a,{className:r.title,color:"primary",children:t})})},$=Object(q.a)((function(e){return{button:{marginRight:20,cursor:"pointer","&:hover":{color:e.palette.primary.main,backgroundColor:"transparent"}}}})),Q=function(e){var t=e.title,r=e.handleClick,a=e.difficulty,c=$(),i=t===a?"primary":"secondary";return Object(n.jsx)(J.a,{color:i,className:c.button,onClick:r,children:t})},X=Object(q.a)((function(e){return{button:{marginRight:20,cursor:"pointer","&:hover":{color:e.palette.primary.main,backgroundColor:"transparent"}}}})),Z=function(){var e=X();return Object(n.jsx)(J.a,{color:"secondary",className:e.button,onClick:function(){return alert("you just bought me $1M of coffee!")},children:"BUY ME COFFEE"})},ee=Object(q.a)((function(e){return{root:{flexGrow:1},header:{borderBottom:"1px solid lightgray",minHeight:"100px"},subheader:{borderBottom:"1px solid lightgray",minHeight:"50px"},subheaderButton:{"&:hover":{color:e.palette.primary.main,backgroundColor:"transparent"}},difficultyContainer:{flexGrow:1}}})),te=function(e){var t=e.difficulty,r=e.onChangeDifficulty,a=ee();return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(K.a,{position:"static",color:"transparent",elevation:0,children:Object(n.jsxs)(U.a,{className:a.header,children:[Object(n.jsx)(V,{children:"SUDOKU VERSUS"}),Object(n.jsx)(J.a,{size:"large",variant:"contained",color:"primary",disableElevation:!0,children:"Rules"})]})}),Object(n.jsx)(K.a,{position:"static",color:"transparent",elevation:0,children:Object(n.jsxs)(U.a,{className:a.subheader,children:[Object(n.jsxs)("div",{className:a.difficultyContainer,children:[Object(n.jsx)(Q,{title:g,difficulty:t,handleClick:function(){return r(g)}}),Object(n.jsx)(Q,{title:O,difficulty:t,handleClick:function(){return r(O)}}),Object(n.jsx)(Q,{title:p,difficulty:t,handleClick:function(){return r(p)}})]}),Object(n.jsx)(Z,{})]})})]})},re=function(){var e=h(),t=e.numberSelected,r=e.setNumberSelected,c=e.gameArray,i=e.setGameArray,o=e.setTimeGameStarted,s=e.fastMode,l=e.setFastMode,d=e.cellSelected,b=e.setCellSelected,j=e.initArray,g=e.setInitArray,O=e.setWon,p=e.setColorFlash,x=C(),y=x.difficulty,S=x.setDifficulty,k=Object(a.useState)(!0),w=Object(u.a)(k,2),A=w[0],T=w[1],I=Object(a.useState)([]),M=Object(u.a)(I,2),E=M[0],G=M[1],B=Object(a.useState)([]),D=Object(u.a)(B,2),F=D[0],P=D[1],R=Object(a.useState)(!1),q=Object(u.a)(R,2),K=q[0],U=q[1];function J(e){var t=H(y,e),n=Object(u.a)(t,2),a=n[0],c=n[1];g(a),i(a),P(c),r("0"),o(f()()),b(-1),G([]),O(!1)}function L(e,t){if("0"===j[e]){var r=c.slice(),n=E.slice();n.push(c.slice()),G(n),r[e]=t,i(r),function(e,t){return!!c.every((function(r,n){return n===e?t===F[n]:r===F[n]}))}(e,t)&&(U(!0),O(!0))}}function W(){p(null),X(),b(-1)}function Y(){return(Y=Object(_.a)(v.a.mark((function e(t,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p("red"),L(t,r),e.next=4,setTimeout((function(){return W()}),2e3);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){p(null),L(e,t),b(-1)}function V(){return(V=Object(_.a)(v.a.mark((function e(t,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p("green"),L(t,r),e.next=4,setTimeout((function(){return z()}),1e3);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){A?t===F[e]?function(e,t){V.apply(this,arguments)}(e,t):function(e,t){Y.apply(this,arguments)}(e,t):alert("error! cell not filled correctly! check mistakesMode state")}function Q(e){S(e),J(e)}function X(){-1!==d&&"0"===c[d]&&L(d,"0")}return Object(a.useEffect)((function(){J()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(te,{onChangeDifficulty:Q,difficulty:y}),Object(n.jsx)("div",{className:K?"container blur":"container",children:Object(n.jsxs)("div",{className:"innercontainer",children:[Object(n.jsx)(m,{onClick:function(e){return function(e){s&&"0"!==t&&$(e,t),b(e)}(e)}}),Object(n.jsx)(N,{onClickNewGame:function(){J()},onClickNumber:function(e){return function(e){s?r(e):-1!==d&&$(d,e)}(e)},onChange:function(e){return Q(e)},onClickUndo:function(){if(E.length){var e=E.slice(),t=e.pop();G(e),i(t)}},onClickErase:X,onClickHint:function(){-1!==d&&L(d,F[d])},onClickMistakesMode:function(){T(!A)},onClickFastMode:function(){s&&r("0"),b(-1),l(!s)}})]})}),Object(n.jsx)("div",{className:K?"overlay overlay--visible":"overlay",onClick:function(){U(!1),J()},children:Object(n.jsxs)("h2",{className:"overlay__text",children:["You ",Object(n.jsx)("span",{className:"overlay__textspan1",children:"solved"})," ",Object(n.jsx)("span",{className:"overlay__textspan2",children:"it!"})]})})]})},ne=r(34),ae=r.n(ne),ce=Object(L.a)({palette:{secondary:{main:ae.a[500]}}});var ie=function(){return Object(n.jsx)(s.a,{theme:ce,children:Object(n.jsx)(b,{children:Object(n.jsx)(y,{children:Object(n.jsx)(re,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.98d36d80.chunk.js.map