(this.webpackJsonpphasmopicker=this.webpackJsonpphasmopicker||[]).push([[0],{113:function(e,t,n){e.exports=n(128)},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),s=n.n(o),i=n(14),c=n.n(i),u=n(20),l=n(26),d=n(91),p=n(80),m=n(18),h=function(e,t){return{type:"ENTER_APP",page:e,sessionId:t}},E=function(e){return{type:"SET_SESSION_KEY",sessionKey:e}},y=function(e){return{type:"SET_CLIENT_ID",clientId:e}},f=function(e,t){return{type:"SET_PICKER_STATE",data:e,key:t}},b={page:"",sessionId:"",sessionKey:null,clientId:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":var n=t.page;return Object(m.a)({},e,{page:n});case"ENTER_APP":var a=t.page,r=t.sessionId;return{page:a,sessionId:r};case"SET_CLIENT_ID":var o=t.clientId;return Object(m.a)({},e,{clientId:o});case"RESET_SESSION_COMPLETE":return b;case"SET_SESSION_KEY":var s=t.sessionKey;return Object(m.a)({},e,{sessionKey:s});default:return e}},v=n(17),O=n(21),k="EMF",S=[{name:"Banshee",evidences:[k,"Fingerprints","Temperature"],strength:"Only targets one player at a time",weakness:"Hates the Crucifix"},{name:"Demon",evidences:["Temperature","Ghost Writing","Spirit Box"],strength:"Extremely aggressive",weakness:"Using the Ouija board to ask questions does not drain sanity"},{name:"Jinn",evidences:[k,"Spirit Box","Ghost Orb"],strength:"Moves faster the further away you are from it",weakness:"Cutting off the location\u2019s power supply will limit the Jinn\u2019s speed"},{name:"Mare",evidences:["Temperature","Spirit Box","Ghost Orb"],strength:"Attacks more frequently in the dark, tends to switch off lights",weakness:"Keeping the lights on"},{name:"Oni",evidences:[k,"Ghost Writing","Spirit Box"],strength:"Extremely active and moves objects quickly",weakness:"Extreme activity with lots of players nearby makes it easy to identify"},{name:"Phantom",evidences:[k,"Temperature","Ghost Orb"],strength:"Looking at the Phantom will reduce your sanity",weakness:"Capturing a photo will cause it to disappear, not during a hunt"},{name:"Poltergeist",evidences:["Fingerprints","Spirit Box","Ghost Orb"],strength:"Throws multiple objects about at once",weakness:"Rooms without any stuff in to throw"},{name:"Revenant",evidences:[k,"Fingerprints","Ghost Writing"],strength:"Attacks anyone, regardless of sanity levels",weakness:"Moves extremely slowly when players hide"},{name:"Shade",evidences:[k,"Ghost Writing","Ghost Orb"],strength:"Minimal activity, hard to find and detect",weakness:"Does not hunt if players are in a group"},{name:"Spirit",evidences:["Fingerprints","Ghost Writing","Spirit Box"],strength:"No strengths",weakness:"Using smudge sticks stops from starting for a long time"},{name:"Wraith",evidences:["Fingerprints","Temperature","Spirit Box"],strength:"Can fly through walls and does not leave footprints",weakness:"Salt is toxic for Wraith"},{name:"Yurei",evidences:["Temperature","Ghost Writing","Ghost Orb"],strength:"Drains player sanity especially quickly",weakness:"Smudge stick in the same room will stop the Yurei from moving"}],x=n(93),j=new(n(92).a),w=function(e,t){return Object(O.filter)(e,(function(e){return 0===Object(O.difference)(t,e.evidences).length}))},T=function(e){j.set("sessionId",e,{maxAge:28800})},A=function(e,t){return Object(O.find)(t,(function(t){return t.sessionId===e}))||null},C=function(){return Object(x.a)("0123456789",8)()},_={selectedEvidences:[],ghosts:S,evidenceButtons:(a={},Object(v.a)(a,k,!1),Object(v.a)(a,"Fingerprints",!1),Object(v.a)(a,"Temperature",!1),Object(v.a)(a,"Ghost Writing",!1),Object(v.a)(a,"Spirit Box",!1),Object(v.a)(a,"Ghost Orb",!1),a),questButtons:(r={},Object(v.a)(r,"Sink",!1),Object(v.a)(r,"Photo",!1),Object(v.a)(r,"Motion",!1),Object(v.a)(r,"Temperature",!1),Object(v.a)(r,"Crucifix",!1),Object(v.a)(r,"EMF",!1),Object(v.a)(r,"Smudge",!1),Object(v.a)(r,"Event",!1),r),talksToEveryOne:!1,ghostName:"",clients:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_GHOSTS":var n=t.evidence,a=t.isActive,r=e.selectedEvidences,o=Object(m.a)({},e.evidenceButtons,Object(v.a)({},n,a));if(a){r.push(n);var s=w(S,r);return Object(m.a)({},e,{ghosts:s,selectedEvidences:r,evidenceButtons:o})}Object(O.remove)(r,(function(e){return e===n}));var i=w(S,r);return Object(m.a)({},e,{ghosts:i,selectedEvidences:r,evidenceButtons:o});case"UPDATE_GHOST_NAME":var c=t.name;return Object(m.a)({},e,{ghostName:c});case"UPDATE_SELECTED_QUESTS":var u=t.quest,l=t.isActive;return Object(m.a)({},e,{questButtons:Object(m.a)({},e.questButtons,Object(v.a)({},u,l))});case"UPDATE_ANSWERS_EVERYONE_BUTTON":var d=t.isActive;return Object(m.a)({},e,{talksToEveryOne:d});case"RESET_PICKER":return Object(m.a)({},_,{selectedEvidences:[]});case"SET_PICKER_STATE":var p=t.data,h=Object(O.get)(p,"selectedEvidences",[]);return Object(m.a)({},e,{},p,{selectedEvidences:h,ghosts:w(S,h)});default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return!0;case"HIDE_LOADER":return!1;default:return e}},N=Object(l.combineReducers)({app:g,picker:I,loader:W}),R=n(32),P=n.n(R),B=n(15),D=n(81),H=n(82),G=n(66);n(123);G.a.initializeApp({apiKey:"AIzaSyBRfrPDPTF2URvsEiuHobKxvgiXEwovkrQ",authDomain:"phasmopicker.firebaseapp.com",databaseURL:"https://phasmopicker.firebaseio.com",projectId:"phasmopicker",storageBucket:"phasmopicker.appspot.com",messagingSenderId:"572824334723",appId:"1:572824334723:web:fdf84f63ca3a0d2ac586b6"});var q=G.a.database(),F=new(function(){function e(){Object(D.a)(this,e)}return Object(H.a)(e,[{key:"getSessionById",value:function(e){return q.ref().orderByChild("sessionId").equalTo(e).once("value")}},{key:"createSession",value:function(e){return q.ref().push(e)}},{key:"updateSession",value:function(e,t){return q.ref().child(e).update(t)}},{key:"removeSession",value:function(e){return q.ref().child(e).remove()}},{key:"getRef",value:function(){return q.ref()}}]),e}()),M=function(e){return e.app.sessionId},L=function(e){return e.app.sessionKey},U=function(e){return e.app.clientId},K=function(e){return e.picker.clients},J=function(e){return e.picker},Y=P.a.mark(Z),Q=P.a.mark(ee),z=P.a.mark(te),V=P.a.mark(ne),X=Object(O.debounce)(F.updateSession,800),$=function(e,t){return{sessionId:t,selectedEvidences:e.selectedEvidences,evidenceButtons:e.evidenceButtons,questButtons:e.questButtons,talksToEveryOne:e.talksToEveryOne,ghostName:e.ghostName}};function Z(e){var t,n,a,r,o,s,i,c,u;return P.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.sessionId,n=C(),""===t){l.next=30;break}return l.next=5,Object(B.a)(F.getSessionById,t);case 5:if(a=l.sent,!(r=A(t,a.val()))){l.next=19;break}return o=Object.keys(a.val())[0],(s=Object(O.get)(r,"clients",[])).push(n),l.next=13,Object(B.a)(F.updateSession,o,Object(m.a)({},r,{clients:s}));case 13:return l.next=15,Object(B.b)(f(r));case 15:return l.next=17,Object(B.b)(E(o));case 17:l.next=28;break;case 19:return l.next=21,Object(B.c)(J);case 21:return i=l.sent,c=$(i,t),l.next=25,Object(B.a)(F.createSession,Object(m.a)({},c,{clients:[n]}));case 25:return u=l.sent,l.next=28,Object(B.b)(E(u.key));case 28:return l.next=30,Object(B.b)(y(n));case 30:case"end":return l.stop()}}),Y)}function ee(){var e,t,n,a,r,o;return P.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(B.c)(M);case 2:if(""!==(e=s.sent)){s.next=9;break}return s.next=6,Object(B.b)({type:"RESET_SESSION_COMPLETE"});case 6:return s.next=8,Object(B.b)({type:"RESET_PICKER"});case 8:return s.abrupt("return");case 9:return s.next=11,Object(B.c)(U);case 11:return t=s.sent,s.next=14,Object(B.c)(L);case 14:return n=s.sent,s.next=17,Object(B.c)(K);case 17:if(!((a=s.sent).length<2)){s.next=23;break}return s.next=21,Object(B.a)(F.removeSession,n);case 21:s.next=30;break;case 23:return s.next=25,Object(B.c)(J);case 25:return r=s.sent,o=$(r,e),Object(O.remove)(a,(function(e){return e===t})),s.next=30,Object(B.a)(F.updateSession,n,Object(m.a)({},o,{clients:a}));case 30:return s.next=32,Object(B.b)({type:"RESET_SESSION_COMPLETE"});case 32:return s.next=34,Object(B.b)({type:"RESET_PICKER"});case 34:case"end":return s.stop()}}),Q)}function te(){var e,t,n,a,r;return P.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(B.c)(L);case 2:return e=o.sent,o.next=5,Object(B.c)(M);case 5:return t=o.sent,o.next=8,Object(B.c)(J);case 8:if(n=o.sent,a=$(n,t),!e||""===t){o.next=14;break}return o.next=13,Object(B.a)(X,e,a);case 13:return o.abrupt("return");case 14:if(e||!(t.length>0)){o.next=20;break}return o.next=17,Object(B.a)(F.createSession,a);case 17:return r=o.sent,o.next=20,Object(B.b)(E(r.key));case 20:case"end":return o.stop()}}),z)}function ne(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)("ENTER_APP",Z);case 2:return e.next=4,Object(B.d)("RESET_SESSION",ee);case 4:return e.next=6,Object(B.e)(["UPDATE_GHOST_NAME","UPDATE_SELECTED_QUESTS","UPDATE_ANSWERS_EVERYONE_BUTTON","FILTER_GHOSTS","RESET_PICKER"],te);case 6:case"end":return e.stop()}}),V)}var ae=ne,re=function(){var e=Object(d.a)(),t=Object(l.createStore)(N,"dev"===Object({NODE_ENV:"production",PUBLIC_URL:"/phasmopicker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBRfrPDPTF2URvsEiuHobKxvgiXEwovkrQ",REACT_APP_FIREBASE_API_DOMAIN:"phasmopicker.firebaseapp.com",REACT_APP_FIREBASE_DB_URL:"https://phasmopicker.firebaseio.com",REACT_APP_FIREBASE_APPID:"1:572824334723:web:fdf84f63ca3a0d2ac586b6",REACT_APP_FIREBASE_PROJECT_ID:"phasmopicker",REACT_APP_FIREBASE_STORAGE_BUCKET:"phasmopicker.appspot.com",REACT_APP_FIREBASE_MESSANGING_SENDER_ID:"572824334723"}).REACT_APP_ENV?Object(p.composeWithDevTools)(Object(l.applyMiddleware)(e)):Object(l.applyMiddleware)(e));return e.run(ae),t},oe=n(165),se=n(31),ie=n(83),ce=n.n(ie),ue=n(158),le=n(167),de=n(166),pe=n(157),me=n(161),he=n(154),Ee=n(168),ye=n(89),fe=n.n(ye),be=n(88),ge=n.n(be),ve=n(94),Oe=n(152),ke=Object(Oe.a)({button:{color:function(e){return e.color},margin:"0 5px"},buttonSelected:{color:function(e){return e.color},border:"2px solid red",margin:"0 2px"}}),Se=function(e){var t=e.type,n=e.text,a=e.handleClick,r=Object(ve.a)(e,["type","text","handleClick"]),o=ke(r),i=Object(u.c)((function(e){return function(e,t,n){switch(t){case"evidence":return e.picker.evidenceButtons[n];case"quest":return e.picker.questButtons[n];case"talksToEveryOne":return e.picker.talksToEveryOne;default:return!1}}(e,t,n)}));return s.a.createElement(he.a,{className:i?o.buttonSelected:o.button,onClick:function(){return a(n,!i)}},n)},xe=n(156),je=Object(Oe.a)((function(){return{root:{width:200,padding:20},content:{display:"flex",alignItems:"center"},accent:{color:"green"},header:{color:"red"}}})),we=function(e){var t=e.data,n=e.selectedEvidences,a=Object(o.useState)(!1),r=Object(se.a)(a,2),i=r[0],c=r[1],u=je(),l=t.name,d=t.strength,p=t.weakness,m=t.evidences;return Object(o.useEffect)((function(){return c(!0),function(){c(!1)}}),[]),s.a.createElement(xe.a,{in:i,timeout:1e3},s.a.createElement(le.a,{className:u.root},s.a.createElement(pe.a,{variant:"h4",className:u.header},l),s.a.createElement(pe.a,{variant:"h6",color:"secondary"},"Evidences"),m.map((function(e){return s.a.createElement(le.a,{key:e},s.a.createElement(pe.a,{className:n.includes(e)?u.accent:""},e))})),s.a.createElement(pe.a,{variant:"h6"},"Strength"),s.a.createElement(pe.a,{className:u.content},d),s.a.createElement(pe.a,{variant:"h6"},"Weakness"),s.a.createElement(pe.a,{className:u.content},p)))},Te=Object(Oe.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:0,background:t.primary.main,color:t.primary.contrastText},inputWrapper:{display:"flex",justifyContent:"center",padding:"20px 20px",flexWrap:"wrap"},evidencesButtonsWrapper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px px",flexWrap:"wrap"},ghostsWrapper:{display:"flex",flexWrap:"wrap",alignContent:"center",justifyContent:"center",padding:"0 50px"},noEvidenceWrapper:{padding:50},header:{width:"100%",display:"flex",justifyContent:"center",marginTop:40},sessionControls:{display:"flex",height:40,width:"100%",background:"rgba(33, 33, 33, .6)",justifyContent:"flex-end",position:"fixed",zIndex:10},sessionIdWrapper:{display:"flex",alignItems:"center",marginRight:5}}})),Ae=function(e){var t=e.changePage,n=e.resetSession,a=Object(u.b)(),r=Te(),i=Object(u.c)((function(e){return J(e)})),c=Object(u.c)((function(e){return M(e)})),l=Object(o.useState)("Click to copy"),d=Object(se.a)(l,2),p=d[0],m=d[1],h=function(e,t){a(function(e,t){return{type:"FILTER_GHOSTS",evidence:e,isActive:t}}(e,t))},E=function(e,t){a(function(e,t){return{type:"UPDATE_SELECTED_QUESTS",quest:e,isActive:t}}(e,t))},y=i.ghostName,f=i.ghosts,b=i.selectedEvidences;return s.a.createElement(ue.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0},s.a.createElement(le.a,{className:r.wrapper},s.a.createElement(le.a,{className:r.sessionControls},""!==c&&s.a.createElement(le.a,{className:r.sessionIdWrapper},s.a.createElement(pe.a,null,"Session id:"),s.a.createElement(Ee.a,{title:p},s.a.createElement(he.a,{onClick:function(){ce()(c).then((function(){m("Copied to clipboard!"),setTimeout((function(){m("Click to copy")}),5e3)}))}},c))),s.a.createElement(Ee.a,{title:"Exit room"},s.a.createElement(me.a,{onClick:function(){return n()}},s.a.createElement(ge.a,null))),s.a.createElement(Ee.a,{title:"To questions"},s.a.createElement(me.a,{onClick:function(){return t("questions")}},s.a.createElement(fe.a,null)))),s.a.createElement(le.a,{className:r.header},s.a.createElement(pe.a,{variant:"h3"},"Ghost Picker")),s.a.createElement(le.a,{className:r.inputWrapper},s.a.createElement(de.a,{id:"ghost-name",label:"Ghost Name",variant:"outlined",value:y,onChange:function(e){return t=e.target.value,void a(function(e){return{type:"UPDATE_GHOST_NAME",name:e}}(t));var t}}),s.a.createElement(Se,{type:"talksToEveryOne",color:"grey",text:"Answers everyone",handleClick:function(e,t){a(function(e){return{type:"UPDATE_ANSWERS_EVERYONE_BUTTON",isActive:e}}(t))}}),s.a.createElement(Se,{type:"reset",color:"grey",text:"Reset",handleClick:function(){a({type:"RESET_PICKER"})}})),s.a.createElement(pe.a,{variant:"h4"},"Evidences"),s.a.createElement(le.a,{className:r.evidencesButtonsWrapper},s.a.createElement(Se,{type:"evidence",color:"red",text:k,handleClick:h}),s.a.createElement(Se,{type:"evidence",color:"green",text:"Fingerprints",handleClick:h}),s.a.createElement(Se,{type:"evidence",color:"dodgerblue",text:"Temperature",handleClick:h}),s.a.createElement(Se,{type:"evidence",color:"purple",text:"Ghost Writing",handleClick:h}),s.a.createElement(Se,{type:"evidence",color:"cadetblue",text:"Spirit Box",handleClick:h}),s.a.createElement(Se,{type:"evidence",color:"brown",text:"Ghost Orb",handleClick:h})),s.a.createElement(pe.a,{variant:"h4"},"Quests"),s.a.createElement(le.a,{className:r.evidencesButtonsWrapper},s.a.createElement(Se,{type:"quest",color:"grey",text:"Crucifix",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"Event",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"Motion",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"Photo",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"EMF",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"Sink",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"Smudge",handleClick:E}),s.a.createElement(Se,{type:"quest",color:"grey",text:"Temperature",handleClick:E})),s.a.createElement(le.a,{className:r.ghostsWrapper},f.map((function(e){return s.a.createElement(we,{data:e,key:e.name,selectedEvidences:b})})),Object(O.isEmpty)(f)?s.a.createElement(le.a,{className:r.noEvidenceWrapper},s.a.createElement(pe.a,{variant:"h6"},"No ghosts with such combination of evidences")):null)))},Ce=n(90),_e=n.n(Ce),Ie=Object(Oe.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:0,background:t.primary.main,color:t.primary.contrastText,overflowX:"hidden"},sessionControls:{display:"flex",height:40,width:"100%",background:"rgba(33, 33, 33, .6)",justifyContent:"flex-start",position:"fixed",zIndex:10},header:{width:"100%",display:"flex",justifyContent:"center",marginTop:40},pageLabel:{margin:"0 auto"},questionsWrapper:{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"space-around","@media screen and (max-width: 880px)":{justifyContent:"flex-start"}},columnWrapper:{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"0 30px"},questionHeader:{color:"red"}}})),We=n(67),Ne=function(e){var t=e.changePage,n=Ie();return s.a.createElement(ue.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0},s.a.createElement(le.a,{className:n.wrapper},s.a.createElement(le.a,{className:n.sessionControls},s.a.createElement(Ee.a,{title:"To Picker"},s.a.createElement(me.a,{onClick:function(){return t("picker")}},s.a.createElement(_e.a,null)))),s.a.createElement(le.a,{className:n.header},s.a.createElement(pe.a,{variant:"h3",className:n.pageLabel},"Questions")),s.a.createElement(le.a,{className:n.questionsWrapper},Object.keys(We).map((function(e){return s.a.createElement(xe.a,{in:!0,timeout:1e3,key:e},s.a.createElement(le.a,{className:n.columnWrapper,key:e},s.a.createElement(pe.a,{variant:"h4",className:n.questionHeader,key:e},e),We[e].map((function(e){return s.a.createElement(pe.a,{key:e},e)}))))})))))},Re=n(163),Pe=n(162),Be=Object(Oe.a)({active:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",zIndex:20,backgroundColor:"rgba(0, 0, 0, .6)"},disabled:{display:"none"}}),De=function(){var e=Be(),t=Object(u.c)((function(e){return function(e){return e.loader}(e)}))?e.active:e.disabled;return s.a.createElement("div",{className:t},s.a.createElement(Pe.a,{color:"secondary"}))},He=Object(Oe.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"100%",background:t.primary.main,color:t.primary.contrastText},subWrapper:{padding:5,backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:10},inputWrapper:{display:"flex",flexDirection:"column",margin:"10px 20px 10px 20px"},submitButton:{marginTop:5}}})),Ge=function(){var e=Object(u.b)(),t=He(),n=Object(o.useState)(""),a=Object(se.a)(n,2),r=a[0],i=a[1],c=Object(o.useState)({}),l=Object(se.a)(c,2),d=l[0],p=l[1],m=Object(o.useState)(null),E=Object(se.a)(m,2),y=E[0],f=E[1],b=Object(o.useState)(!1),g=Object(se.a)(b,2),v=g[0],k=g[1],S=j.get("sessionId");Object(o.useEffect)((function(){(S||""===S)&&e(h("picker",S))}),[e,S]),Object(o.useEffect)((function(){d&&!Object(O.isEmpty)(d)&&(T(r),e(h("picker",r)))})),Object(o.useEffect)((function(){d||f("Session not found")}),[d]);var x=function(e){k(e)};return s.a.createElement(le.a,{className:t.wrapper},s.a.createElement(le.a,{className:t.subWrapper},v?s.a.createElement(le.a,{className:t.inputWrapper},s.a.createElement(de.a,{id:"sessionID",label:"Session ID",variant:"outlined",value:r,error:!!y,helperText:y,onChange:function(e){return t=e.target.value,p({}),f(null),void i(t);var t}}),s.a.createElement(he.a,{className:t.submitButton,onClick:function(){(8!==r.length?(f("Session id consists of 8 symbols"),0):/^[0-9]+$/.test(r)||(f("Wrong ID format"),0))&&(e({type:"SHOW_LOADER"}),F.getSessionById(r).then((function(t){e({type:"HIDE_LOADER"}),p(t.val())})))}},"Join"),s.a.createElement(Re.a,null),s.a.createElement(he.a,{className:t.submitButton,onClick:function(){return x(!1)}},"Back")):s.a.createElement(le.a,{className:t.inputWrapper},s.a.createElement(he.a,{className:t.submitButton,onClick:function(t){t.preventDefault();var n=C();e(h("picker",n)),T(n)}},"Create online session"),s.a.createElement(Re.a,null),s.a.createElement(he.a,{className:t.submitButton,onClick:function(){return x(!0)}},"Join online session"),s.a.createElement(Re.a,null),s.a.createElement(he.a,{className:t.submitButton,onClick:function(){T(""),e(h("picker",""))}},"Enter solo session"))),s.a.createElement(De,null))},qe=n(164),Fe=n(68),Me=n.n(Fe),Le=Object(qe.a)({palette:{type:"dark",primary:{main:Me.a[900]},secondary:{main:Me.a[50]}},overrides:{MuiTypography:{body1:{fontFamily:"SyneMono","@media screen and (max-width: 1000px)":{}},h3:{fontFamily:"Teko-Medium"},h4:{fontFamily:"Teko-Medium"},h5:{fontFamily:"Teko-Medium"},h6:{fontFamily:"Teko-Medium"}}}}),Ue=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return function(e){return e.app.page}(e)})),n=Object(u.c)((function(e){return M(e)})),a=Object(u.c)((function(e){return L(e)}));Object(o.useEffect)((function(){var t=function(){return e({type:"RESET_SESSION"}),"unloading"};return window.addEventListener("beforeunload",t),function(){window.removeEventListener("beforeunload",t)}}),[e,n]),Object(o.useEffect)((function(){a&&F.getRef().child(a).on("value",(function(t){e(f(t.val()))}))}),[e,n,a]);var r=function(t){e(function(e){return{type:"CHANGE_PAGE",page:e}}(t))},i=function(){j.remove("sessionId"),e({type:"RESET_SESSION"})};return s.a.createElement(oe.a,{theme:Le},function(){switch(t){case"picker":return s.a.createElement(Ae,{changePage:r,resetSession:i});case"questions":return s.a.createElement(Ne,{changePage:r});default:return s.a.createElement(Ge,null)}}())},Ke=(n(127),re());c.a.render(s.a.createElement(u.a,{store:Ke},s.a.createElement(s.a.StrictMode,null,s.a.createElement(Ue,null))),document.getElementById("root"))},67:function(e){e.exports=JSON.parse('{"Common":["Anybody here?","Anybody in the room?","Anybody with us?","Are you angry?","Are you a boy?","Are you a child?","Are you a girl?","Are you a woman?","Are you close?","Are you female?","Are you friendly?","Are you here?","Are you male?","Are you male or female?","Are you old?","Are you with us?","Are you young?","Can we help?","Can you give me your name?","Can you show yourself?","Can you talk?","Do you want to hurt us?","Do you want us here?","Do you want us to leave?","Give us a sign!","Hello?","How old are you?","How young are you?","Is anyone here?","Is there a ghost here?","Is there a spirit here?","Let us know you are here.","Shall we leave?","Should we leave?","Show yourself!","Speak to us!","What are you?","What is your age?","What is your gender?","What is your location?","What is your name?","What do you want?","What should we do?","When were you born?","Where are you?","Who am I talking to?","Who are we talking to?","Who are you?","Who is this?","Why are you here?"],"Spirit Box":["Are there any ghosts?","Are you happy?","Are you here all the time?","Are you male or female?","Are you the only one here?","Are you waiting?","Can I ask you?","Can we speak?","Can you make a sound?","Can you speak?","Can you speak to us?","Do something.","Do you know who we are?","Do you want us to leave?","Give us a sign.","Is there anyone here?","Is there anyone with me?","Is there anything I can do?","Show me.","Show us.","Show us your presence.","Talk to me.","Talk to us.","Throw something.","Turn off the light.","Turn on the light.","We are friends.","We mean you no harm.","We would like to speak to you.","We would like to speak with you.","Would you like to talk?"],"Ouija Bord":["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favourite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"]}')}},[[113,1,2]]]);
//# sourceMappingURL=main.718ed0fa.chunk.js.map