(this.webpackJsonpphasmopicker=this.webpackJsonpphasmopicker||[]).push([[0],{114:function(e,t,n){e.exports=n(129)},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),i=n.n(o),s=n(14),c=n.n(s),u=n(20),l=n(27),d=n(92),p=n(80),m=n(18),h=function(e,t){return{type:"ENTER_APP",page:e,sessionId:t}},y=function(e){return{type:"SET_SESSION_KEY",sessionKey:e}},E=function(e){return{type:"SET_CLIENT_ID",clientId:e}},f=function(e,t){return{type:"SET_PICKER_STATE",data:e,key:t}},b={page:"",sessionId:"",sessionKey:null,clientId:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":var n=t.page;return Object(m.a)({},e,{page:n});case"ENTER_APP":var a=t.page,r=t.sessionId;return{page:a,sessionId:r};case"SET_CLIENT_ID":var o=t.clientId;return Object(m.a)({},e,{clientId:o});case"RESET_SESSION_COMPLETE":return b;case"SET_SESSION_KEY":var i=t.sessionKey;return Object(m.a)({},e,{sessionKey:i});default:return e}},v=n(17),O=n(21),k="EMF",S=[{name:"Banshee",evidences:[k,"Fingerprints","Temperature"],strength:"Only targets one player at a time",weakness:"Hates the Crucifix"},{name:"Demon",evidences:["Temperature","Ghost Writing","Spirit Box"],strength:"Extremely aggressive",weakness:"Using the Ouija board to ask questions does not drain sanity"},{name:"Jinn",evidences:[k,"Spirit Box","Ghost Orb"],strength:"Moves faster the further away you are from it",weakness:"Cutting off the location\u2019s power supply will limit the Jinn\u2019s speed"},{name:"Mare",evidences:["Temperature","Spirit Box","Ghost Orb"],strength:"Attacks more frequently in the dark, tends to switch off lights",weakness:"Keeping the lights on"},{name:"Oni",evidences:[k,"Ghost Writing","Spirit Box"],strength:"Extremely active and moves objects quickly",weakness:"Extreme activity with lots of players nearby makes it easy to identify"},{name:"Phantom",evidences:[k,"Temperature","Ghost Orb"],strength:"Looking at the Phantom will reduce your sanity",weakness:"Capturing a photo will cause it to disappear, not during a hunt"},{name:"Poltergeist",evidences:["Fingerprints","Spirit Box","Ghost Orb"],strength:"Throws multiple objects about at once",weakness:"Rooms without any stuff in to throw"},{name:"Revenant",evidences:[k,"Fingerprints","Ghost Writing"],strength:"Attacks anyone, regardless of sanity levels",weakness:"Moves extremely slowly when players hide"},{name:"Shade",evidences:[k,"Ghost Writing","Ghost Orb"],strength:"Minimal activity, hard to find and detect",weakness:"Does not hunt if players are in a group"},{name:"Spirit",evidences:["Fingerprints","Ghost Writing","Spirit Box"],strength:"No strengths",weakness:"Using smudge sticks stops from starting for a long time"},{name:"Wraith",evidences:["Fingerprints","Temperature","Spirit Box"],strength:"Can fly through walls and does not leave footprints",weakness:"Salt is toxic for Wraith"},{name:"Yurei",evidences:["Temperature","Ghost Writing","Ghost Orb"],strength:"Drains player sanity especially quickly",weakness:"Smudge stick in the same room will stop the Yurei from moving"}],x=n(94),j=new(n(93).a),w=function(e,t){return Object(O.filter)(e,(function(e){return 0===Object(O.difference)(t,e.evidences).length}))},T=function(e){j.set("sessionId",e,{maxAge:28800})},C=function(e,t){return Object(O.find)(t,(function(t){return t.sessionId===e}))||null},A=function(){return Object(x.a)("0123456789",6)()},_=function(){return Math.floor(Date.now()/1e3)},I={selectedEvidences:[],ghosts:S,evidenceButtons:(a={},Object(v.a)(a,k,!1),Object(v.a)(a,"Fingerprints",!1),Object(v.a)(a,"Temperature",!1),Object(v.a)(a,"Ghost Writing",!1),Object(v.a)(a,"Spirit Box",!1),Object(v.a)(a,"Ghost Orb",!1),a),questButtons:(r={},Object(v.a)(r,"Sink",!1),Object(v.a)(r,"Photo",!1),Object(v.a)(r,"Motion",!1),Object(v.a)(r,"Temperature",!1),Object(v.a)(r,"Crucifix",!1),Object(v.a)(r,"EMF",!1),Object(v.a)(r,"Smudge",!1),Object(v.a)(r,"Event",!1),Object(v.a)(r,"Candle",!1),Object(v.a)(r,"Salt",!1),Object(v.a)(r,"Sanity",!1),Object(v.a)(r,"Hunt",!1),Object(v.a)(r,"Repel",!1),r),talksToEveryOne:!1,ghostName:"",clients:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_GHOSTS":var n=t.evidence,a=t.isActive,r=e.selectedEvidences,o=Object(m.a)({},e.evidenceButtons,Object(v.a)({},n,a));if(a){r.push(n);var i=w(S,r);return Object(m.a)({},e,{ghosts:i,selectedEvidences:r,evidenceButtons:o})}Object(O.remove)(r,(function(e){return e===n}));var s=w(S,r);return Object(m.a)({},e,{ghosts:s,selectedEvidences:r,evidenceButtons:o});case"UPDATE_GHOST_NAME":var c=t.name;return Object(m.a)({},e,{ghostName:c});case"UPDATE_SELECTED_QUESTS":var u=t.quest,l=t.isActive;return Object(m.a)({},e,{questButtons:Object(m.a)({},e.questButtons,Object(v.a)({},u,l))});case"UPDATE_ANSWERS_EVERYONE_BUTTON":var d=t.isActive;return Object(m.a)({},e,{talksToEveryOne:d});case"RESET_PICKER":return Object(m.a)({},I,{selectedEvidences:[]});case"SET_PICKER_STATE":var p=t.data,h=Object(O.get)(p,"selectedEvidences",[]);return Object(m.a)({},e,{},p,{selectedEvidences:h,ghosts:w(S,h)});default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return!0;case"HIDE_LOADER":return!1;default:return e}},R=Object(l.combineReducers)({app:g,picker:W,loader:N}),P=n(34),B=n.n(P),D=n(15),H=n(81),q=n(82),G=n(62);n(124),n(130);G.a.initializeApp({apiKey:"AIzaSyBRfrPDPTF2URvsEiuHobKxvgiXEwovkrQ",authDomain:"phasmopicker.firebaseapp.com",databaseURL:"https://phasmopicker.firebaseio.com",projectId:"phasmopicker",storageBucket:"phasmopicker.appspot.com",messagingSenderId:"572824334723",appId:"1:572824334723:web:fdf84f63ca3a0d2ac586b6"}),G.a.analytics();var F=G.a.database(),M=new(function(){function e(){Object(H.a)(this,e)}return Object(q.a)(e,[{key:"getSessionById",value:function(e){return F.ref().orderByChild("sessionId").equalTo(e).once("value")}},{key:"createSession",value:function(e){return F.ref().push(Object(m.a)({},e,{last_updated:_()}))}},{key:"updateSession",value:function(e,t){return F.ref().child(e).update(Object(m.a)({},t,{last_updated:_()}))}},{key:"removeSession",value:function(e){return F.ref().child(e).remove()}},{key:"getRef",value:function(){return F.ref()}}]),e}()),L=function(e){return e.app.sessionId},U=function(e){return e.app.sessionKey},K=function(e){return e.app.clientId},J=function(e){return e.picker.clients},Y=function(e){return e.picker},Q=B.a.mark(ee),z=B.a.mark(te),V=B.a.mark(ne),X=B.a.mark(ae),$=Object(O.debounce)(M.updateSession,800),Z=function(e,t){return{sessionId:t,selectedEvidences:e.selectedEvidences,evidenceButtons:e.evidenceButtons,questButtons:e.questButtons,talksToEveryOne:e.talksToEveryOne,ghostName:e.ghostName}};function ee(e){var t,n,a,r,o,i,s,c,u;return B.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.sessionId,n=A(),""===t){l.next=30;break}return l.next=5,Object(D.a)(M.getSessionById,t);case 5:if(a=l.sent,!(r=C(t,a.val()))){l.next=19;break}return o=Object.keys(a.val())[0],(i=Object(O.get)(r,"clients",[])).push(n),l.next=13,Object(D.a)(M.updateSession,o,Object(m.a)({},r,{clients:i}));case 13:return l.next=15,Object(D.b)(f(r));case 15:return l.next=17,Object(D.b)(y(o));case 17:l.next=28;break;case 19:return l.next=21,Object(D.c)(Y);case 21:return s=l.sent,c=Z(s,t),l.next=25,Object(D.a)(M.createSession,Object(m.a)({},c,{clients:[n]}));case 25:return u=l.sent,l.next=28,Object(D.b)(y(u.key));case 28:return l.next=30,Object(D.b)(E(n));case 30:case"end":return l.stop()}}),Q)}function te(){var e,t,n,a,r,o;return B.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(D.c)(L);case 2:if(""!==(e=i.sent)){i.next=9;break}return i.next=6,Object(D.b)({type:"RESET_SESSION_COMPLETE"});case 6:return i.next=8,Object(D.b)({type:"RESET_PICKER"});case 8:return i.abrupt("return");case 9:return i.next=11,Object(D.c)(K);case 11:return t=i.sent,i.next=14,Object(D.c)(U);case 14:return n=i.sent,i.next=17,Object(D.c)(J);case 17:if(!((a=i.sent).length<2)){i.next=23;break}return i.next=21,Object(D.a)(M.removeSession,n);case 21:i.next=30;break;case 23:return i.next=25,Object(D.c)(Y);case 25:return r=i.sent,o=Z(r,e),Object(O.remove)(a,(function(e){return e===t})),i.next=30,Object(D.a)(M.updateSession,n,Object(m.a)({},o,{clients:a}));case 30:return i.next=32,Object(D.b)({type:"RESET_SESSION_COMPLETE"});case 32:return i.next=34,Object(D.b)({type:"RESET_PICKER"});case 34:case"end":return i.stop()}}),z)}function ne(){var e,t,n,a,r;return B.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(D.c)(U);case 2:return e=o.sent,o.next=5,Object(D.c)(L);case 5:return t=o.sent,o.next=8,Object(D.c)(Y);case 8:if(n=o.sent,a=Z(n,t),!e||""===t){o.next=14;break}return o.next=13,Object(D.a)($,e,a);case 13:return o.abrupt("return");case 14:if(e||!(t.length>0)){o.next=20;break}return o.next=17,Object(D.a)(M.createSession,a);case 17:return r=o.sent,o.next=20,Object(D.b)(y(r.key));case 20:case"end":return o.stop()}}),V)}function ae(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("ENTER_APP",ee);case 2:return e.next=4,Object(D.d)("RESET_SESSION",te);case 4:return e.next=6,Object(D.e)(["UPDATE_GHOST_NAME","UPDATE_SELECTED_QUESTS","UPDATE_ANSWERS_EVERYONE_BUTTON","FILTER_GHOSTS","RESET_PICKER"],ne);case 6:case"end":return e.stop()}}),X)}var re=ae,oe=function(){var e=Object(d.a)(),t=Object(l.createStore)(R,"dev"===Object({NODE_ENV:"production",PUBLIC_URL:"/phasmopicker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBRfrPDPTF2URvsEiuHobKxvgiXEwovkrQ",REACT_APP_FIREBASE_API_DOMAIN:"phasmopicker.firebaseapp.com",REACT_APP_FIREBASE_DB_URL:"https://phasmopicker.firebaseio.com",REACT_APP_FIREBASE_APPID:"1:572824334723:web:fdf84f63ca3a0d2ac586b6",REACT_APP_FIREBASE_PROJECT_ID:"phasmopicker",REACT_APP_FIREBASE_STORAGE_BUCKET:"phasmopicker.appspot.com",REACT_APP_FIREBASE_MESSANGING_SENDER_ID:"572824334723"}).REACT_APP_ENV?Object(p.composeWithDevTools)(Object(l.applyMiddleware)(e)):Object(l.applyMiddleware)(e));return e.run(re),t},ie=n(169),se=n(33),ce=n(84),ue=n.n(ce),le=n(161),de=n(171),pe=n(170),me=n(160),he=n(164),ye=n(157),Ee=n(172),fe=n(90),be=n.n(fe),ge=n(89),ve=n.n(ge),Oe=n(95),ke=n(155),Se=Object(ke.a)({button:{color:function(e){return e.color},margin:"0 5px"},buttonSelected:{color:function(e){return e.color},border:"2px solid red",margin:"0 2px"}}),xe=function(e){var t=e.type,n=e.text,a=e.handleClick,r=Object(Oe.a)(e,["type","text","handleClick"]),o=Se(r),s=Object(u.c)((function(e){return function(e,t,n){switch(t){case"evidence":return e.picker.evidenceButtons[n];case"quest":return e.picker.questButtons[n];case"talksToEveryOne":return e.picker.talksToEveryOne;default:return!1}}(e,t,n)}));return i.a.createElement(ye.a,{className:s?o.buttonSelected:o.button,onClick:function(){return a(n,!s)}},n)},je=n(159),we=Object(ke.a)((function(){return{root:{width:200,padding:20},content:{display:"flex",alignItems:"center"},accent:{color:"green"},header:{color:"red"}}})),Te=function(e){var t=e.data,n=e.selectedEvidences,a=Object(o.useState)(!1),r=Object(se.a)(a,2),s=r[0],c=r[1],u=we(),l=t.name,d=t.strength,p=t.weakness,m=t.evidences;return Object(o.useEffect)((function(){return c(!0),function(){c(!1)}}),[]),i.a.createElement(je.a,{in:s,timeout:1e3},i.a.createElement(de.a,{className:u.root},i.a.createElement(me.a,{variant:"h4",className:u.header},l),i.a.createElement(me.a,{variant:"h6",color:"secondary"},"Evidences"),m.map((function(e){return i.a.createElement(de.a,{key:e},i.a.createElement(me.a,{className:n.includes(e)?u.accent:""},e))})),i.a.createElement(me.a,{variant:"h6"},"Strength"),i.a.createElement(me.a,{className:u.content},d),i.a.createElement(me.a,{variant:"h6"},"Weakness"),i.a.createElement(me.a,{className:u.content},p)))},Ce=Object(ke.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:0,background:t.primary.main,color:t.primary.contrastText},inputWrapper:{display:"flex",justifyContent:"center",padding:"20px 20px",flexWrap:"wrap"},evidencesButtonsWrapper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px px",flexWrap:"wrap"},ghostsWrapper:{display:"flex",flexWrap:"wrap",alignContent:"center",justifyContent:"center",padding:"0 50px"},noEvidenceWrapper:{padding:50},header:{width:"100%",display:"flex",justifyContent:"center",marginTop:40},sessionControls:{display:"flex",height:40,width:"100%",background:"rgba(33, 33, 33, .6)",justifyContent:"flex-end",position:"fixed",zIndex:10},sessionIdWrapper:{display:"flex",alignItems:"center",marginRight:5}}})),Ae=function(e){var t=e.changePage,n=e.resetSession,a=Object(u.b)(),r=Ce(),s=Object(u.c)((function(e){return Y(e)})),c=Object(u.c)((function(e){return L(e)})),l=Object(u.c)((function(e){return U(e)})),d=Object(o.useState)("Click to copy"),p=Object(se.a)(d,2),m=p[0],h=p[1];Object(o.useEffect)((function(){var e=function(){a({type:"RESET_SESSION"})};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[a]),Object(o.useEffect)((function(){l&&M.getRef().child(l).on("value",(function(e){a(f(e.val()))}))}),[a,c,l]);var y=function(e,t){a(function(e,t){return{type:"FILTER_GHOSTS",evidence:e,isActive:t}}(e,t))},E=function(e,t){a(function(e,t){return{type:"UPDATE_SELECTED_QUESTS",quest:e,isActive:t}}(e,t))},b=s.ghostName,g=s.ghosts,v=s.selectedEvidences;return i.a.createElement(le.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(de.a,{className:r.wrapper},i.a.createElement(de.a,{className:r.sessionControls},""!==c&&i.a.createElement(de.a,{className:r.sessionIdWrapper},i.a.createElement(me.a,null,"Session id:"),i.a.createElement(Ee.a,{title:m},i.a.createElement(ye.a,{onClick:function(){ue()(c).then((function(){h("Copied to clipboard!"),setTimeout((function(){h("Click to copy")}),5e3)}))}},c))),i.a.createElement(Ee.a,{title:"Exit room"},i.a.createElement(he.a,{onClick:function(){return n()}},i.a.createElement(ve.a,null))),i.a.createElement(Ee.a,{title:"To questions"},i.a.createElement(he.a,{onClick:function(){return t("questions")}},i.a.createElement(be.a,null)))),i.a.createElement(de.a,{className:r.header},i.a.createElement(me.a,{variant:"h3"},"Ghost Picker")),i.a.createElement(de.a,{className:r.inputWrapper},i.a.createElement(pe.a,{id:"ghost-name",label:"Ghost Name",variant:"outlined",value:b,onChange:function(e){return t=e.target.value,void a(function(e){return{type:"UPDATE_GHOST_NAME",name:e}}(t));var t}}),i.a.createElement(xe,{type:"talksToEveryOne",color:"grey",text:"Answers everyone",handleClick:function(e,t){a(function(e){return{type:"UPDATE_ANSWERS_EVERYONE_BUTTON",isActive:e}}(t))}}),i.a.createElement(xe,{type:"reset",color:"grey",text:"Reset",handleClick:function(){a({type:"RESET_PICKER"})}})),i.a.createElement(me.a,{variant:"h4"},"Evidences"),i.a.createElement(de.a,{className:r.evidencesButtonsWrapper},i.a.createElement(xe,{type:"evidence",color:"red",text:k,handleClick:y}),i.a.createElement(xe,{type:"evidence",color:"green",text:"Fingerprints",handleClick:y}),i.a.createElement(xe,{type:"evidence",color:"dodgerblue",text:"Temperature",handleClick:y}),i.a.createElement(xe,{type:"evidence",color:"purple",text:"Ghost Writing",handleClick:y}),i.a.createElement(xe,{type:"evidence",color:"cadetblue",text:"Spirit Box",handleClick:y}),i.a.createElement(xe,{type:"evidence",color:"brown",text:"Ghost Orb",handleClick:y})),i.a.createElement(me.a,{variant:"h4"},"Quests"),i.a.createElement(de.a,{className:r.evidencesButtonsWrapper},i.a.createElement(xe,{type:"quest",color:"grey",text:"Crucifix",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Event",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Motion",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Photo",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"EMF",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Sink",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Smudge",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Temperature",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Candle",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Salt",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Sanity",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Hunt",handleClick:E}),i.a.createElement(xe,{type:"quest",color:"grey",text:"Repel",handleClick:E})),i.a.createElement(de.a,{className:r.ghostsWrapper},g.map((function(e){return i.a.createElement(Te,{data:e,key:e.name,selectedEvidences:v})})),Object(O.isEmpty)(g)?i.a.createElement(de.a,{className:r.noEvidenceWrapper},i.a.createElement(me.a,{variant:"h6"},"No ghosts with such combination of evidences")):null)))},_e=n(91),Ie=n.n(_e),We=Object(ke.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:0,background:t.primary.main,color:t.primary.contrastText,overflowX:"hidden"},sessionControls:{display:"flex",height:40,width:"100%",background:"rgba(33, 33, 33, .6)",justifyContent:"flex-start",position:"fixed",zIndex:10},header:{width:"100%",display:"flex",justifyContent:"center",marginTop:40},pageLabel:{margin:"0 auto"},questionsWrapper:{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"space-around","@media screen and (max-width: 880px)":{justifyContent:"flex-start"}},columnWrapper:{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"0 30px"},questionHeader:{color:"red"}}})),Ne=n(67),Re=function(e){var t=e.changePage,n=We();return i.a.createElement(le.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(de.a,{className:n.wrapper},i.a.createElement(de.a,{className:n.sessionControls},i.a.createElement(Ee.a,{title:"To Picker"},i.a.createElement(he.a,{onClick:function(){return t("picker")}},i.a.createElement(Ie.a,null)))),i.a.createElement(de.a,{className:n.header},i.a.createElement(me.a,{variant:"h3",className:n.pageLabel},"Questions")),i.a.createElement(de.a,{className:n.questionsWrapper},Object.keys(Ne).map((function(e){return i.a.createElement(je.a,{in:!0,timeout:1e3,key:e},i.a.createElement(de.a,{className:n.columnWrapper,key:e},i.a.createElement(me.a,{variant:"h4",className:n.questionHeader,key:e},e),Ne[e].map((function(e){return i.a.createElement(me.a,{key:e},e)}))))})))))},Pe=n(167),Be=n(166),De=n(165),He=Object(ke.a)({activeAbsolute:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",zIndex:20,backgroundColor:"rgba(0, 0, 0, .6)"},activeBox:{width:"100%"},disabled:{display:"none"}}),qe=function(e){var t=e.type,n=He(),a=Object(u.c)((function(e){return function(e){return e.loader}(e)})),r="linear"===t?n.activeBox:n.activeAbsolute,o=a?"":n.disabled;return i.a.createElement("div",{className:"".concat(r," ").concat(o)},"linear"===t?i.a.createElement(De.a,null):i.a.createElement(Be.a,{color:"secondary"}))},Ge=Object(ke.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"100%",background:t.primary.main,color:t.primary.contrastText},subWrapper:{padding:5,backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:10},inputWrapper:{display:"flex",flexDirection:"column",margin:"10px 20px 10px 20px"},submitButton:{marginTop:5}}})),Fe=function(){var e=Object(u.b)(),t=Ge(),n=Object(o.useState)(""),a=Object(se.a)(n,2),r=a[0],s=a[1],c=Object(o.useState)({}),l=Object(se.a)(c,2),d=l[0],p=l[1],m=Object(o.useState)(null),y=Object(se.a)(m,2),E=y[0],f=y[1],b=Object(o.useState)(!1),g=Object(se.a)(b,2),v=g[0],k=g[1],S=j.get("sessionId");Object(o.useEffect)((function(){(S||""===S)&&e(h("picker",S))}),[e,S]),Object(o.useEffect)((function(){d&&!Object(O.isEmpty)(d)&&(T(r),e(h("picker",r)))})),Object(o.useEffect)((function(){d||f("Session not found")}),[d]);var x=function(e){k(e)};return i.a.createElement(de.a,{className:t.wrapper},i.a.createElement(de.a,{className:t.subWrapper},v?i.a.createElement(de.a,{className:t.inputWrapper},i.a.createElement(pe.a,{id:"sessionID",label:"Session ID",variant:"outlined",value:r,error:!!E,helperText:E,onChange:function(e){return t=e.target.value,p({}),f(null),void s(t);var t}}),i.a.createElement(ye.a,{className:t.submitButton,onClick:function(){(6!==r.length?(f("Session id consists of 6 digits"),0):/^[0-9]+$/.test(r)||(f("Wrong ID format"),0))&&(e({type:"SHOW_LOADER"}),M.getSessionById(r).then((function(t){e({type:"HIDE_LOADER"}),p(t.val())})))}},"Join"),i.a.createElement(Pe.a,null),i.a.createElement(ye.a,{className:t.submitButton,onClick:function(){return x(!1)}},"Back")):i.a.createElement(de.a,{className:t.inputWrapper},i.a.createElement(ye.a,{className:t.submitButton,onClick:function(t){t.preventDefault();var n=A();e(h("picker",n)),T(n)}},"Create online session"),i.a.createElement(Pe.a,null),i.a.createElement(ye.a,{className:t.submitButton,onClick:function(){return x(!0)}},"Join online session"),i.a.createElement(Pe.a,null),i.a.createElement(ye.a,{className:t.submitButton,onClick:function(){T(""),e(h("picker",""))}},"Enter solo session")),i.a.createElement(qe,{type:"linear"})))},Me=n(168),Le=n(68),Ue=n.n(Le),Ke=Object(Me.a)({palette:{type:"dark",primary:{main:Ue.a[900]},secondary:{main:Ue.a[50]}},overrides:{MuiTypography:{body1:{fontFamily:"SyneMono","@media screen and (max-width: 1000px)":{}},h3:{fontFamily:"Teko-Medium"},h4:{fontFamily:"Teko-Medium"},h5:{fontFamily:"Teko-Medium"},h6:{fontFamily:"Teko-Medium"}}}}),Je=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return function(e){return e.app.page}(e)})),n=function(t){e(function(e){return{type:"CHANGE_PAGE",page:e}}(t))},a=function(){j.remove("sessionId"),e({type:"RESET_SESSION"})};return i.a.createElement(ie.a,{theme:Ke},function(){switch(t){case"picker":return i.a.createElement(Ae,{changePage:n,resetSession:a});case"questions":return i.a.createElement(Re,{changePage:n});default:return i.a.createElement(Fe,null)}}())},Ye=(n(128),oe());c.a.render(i.a.createElement(u.a,{store:Ye},i.a.createElement(i.a.StrictMode,null,i.a.createElement(Je,null))),document.getElementById("root"))},67:function(e){e.exports=JSON.parse('{"Common":["Anybody here?","Anybody in the room?","Anybody with us?","Are you angry?","Are you a boy?","Are you a child?","Are you a girl?","Are you a woman?","Are you close?","Are you female?","Are you friendly?","Are you here?","Are you male?","Are you male or female?","Are you old?","Are you with us?","Are you young?","Can we help?","Can you give me your name?","Can you show yourself?","Can you talk?","Do you want to hurt us?","Do you want us here?","Do you want us to leave?","Give us a sign!","Hello?","How old are you?","How young are you?","Is anyone here?","Is there a ghost here?","Is there a spirit here?","Let us know you are here.","Shall we leave?","Should we leave?","Show yourself!","Speak to us!","What are you?","What is your age?","What is your gender?","What is your location?","What is your name?","What do you want?","What should we do?","When were you born?","Where are you?","Who am I talking to?","Who are we talking to?","Who are you?","Who is this?","Why are you here?"],"Spirit Box":["Are there any ghosts?","Are you happy?","Are you here all the time?","Are you male or female?","Are you the only one here?","Are you waiting?","Can I ask you?","Can we speak?","Can you make a sound?","Can you speak?","Can you speak to us?","Do something.","Do you know who we are?","Do you want us to leave?","Give us a sign.","Is there anyone here?","Is there anyone with me?","Is there anything I can do?","Show me.","Show us.","Show us your presence.","Talk to me.","Talk to us.","Throw something.","Turn off the light.","Turn on the light.","We are friends.","We mean you no harm.","We would like to speak to you.","We would like to speak with you.","Would you like to talk?"],"Ouija Bord":["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favourite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"]}')}},[[114,1,2]]]);
//# sourceMappingURL=main.60a5638e.chunk.js.map