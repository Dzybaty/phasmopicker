(this.webpackJsonpphasmopicker=this.webpackJsonpphasmopicker||[]).push([[0],{111:function(e,t,n){e.exports=n(127)},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),i=n.n(o),s=n(14),c=n.n(s),u=n(19),l=n(28),d=n(91),p=(n(119),n(18)),m=function(e,t){return{type:"ENTER_APP",page:e,sessionId:t}},h=function(e){return{type:"SET_SESSION_KEY",sessionKey:e}},E=function(e){return{type:"SET_CLIENT_ID",clientId:e}},y=function(e){return{type:"CHANGE_PAGE",page:e}},f=function(e,t){return{type:"SET_PICKER_STATE",data:e,key:t}},b={page:"",sessionId:"",sessionKey:null,clientId:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":var n=t.page;return Object(p.a)({},e,{page:n});case"ENTER_APP":var a=t.page,r=t.sessionId;return{page:a,sessionId:r};case"SET_CLIENT_ID":var o=t.clientId;return Object(p.a)({},e,{clientId:o});case"RESET_SESSION_COMPLETE":return b;case"SET_SESSION_KEY":var i=t.sessionKey;return Object(p.a)({},e,{sessionKey:i});default:return e}},v=n(17),O=n(21),k="EMF",S=[{name:"Banshee",evidences:[k,"Fingerprints","Temperature"],strength:"Only targets one player at a time.",weakness:"Hates the Crucifix."},{name:"Demon",evidences:["Temperature","Ghost Writing","Spirit Box"],strength:"Extremely aggressive.",weakness:"Using right Ouija board questions does not drain sanity."},{name:"Jinn",evidences:[k,"Spirit Box","Ghost Orb"],strength:"Moves faster the further away you are from it.",weakness:"Cutting off the location\u2019s power supply will limit the Jinn\u2019s speed."},{name:"Mare",evidences:["Temperature","Spirit Box","Ghost Orb"],strength:"Attacks more frequently in the dark, tends to switch off lights.",weakness:"More passive when lights are on."},{name:"Oni",evidences:[k,"Ghost Writing","Spirit Box"],strength:"Extremely active and moves objects quickly.",weakness:"Extreme activity with lots of players nearby makes it easy to identify."},{name:"Phantom",evidences:[k,"Temperature","Ghost Orb"],strength:"Looking at the Phantom will reduce your sanity.",weakness:"Capturing a photo will cause it to disappear, not during a hunt."},{name:"Poltergeist",evidences:["Fingerprints","Spirit Box","Ghost Orb"],strength:"Throws multiple objects about at once.",weakness:"Rooms without any stuff in to throw."},{name:"Revenant",evidences:[k,"Fingerprints","Ghost Writing"],strength:"Attacks anyone, regardless of sanity levels.",weakness:"Moves extremely slowly when players hide."},{name:"Shade",evidences:[k,"Ghost Writing","Ghost Orb"],strength:"Minimal activity, hard to find and detect.",weakness:"Does not hunt if players are in a group."},{name:"Spirit",evidences:["Fingerprints","Ghost Writing","Spirit Box"],strength:"No strengths.",weakness:"Using smudge sticks prevent hunting for a long time."},{name:"Wraith",evidences:["Fingerprints","Temperature","Spirit Box"],strength:"Almost never touches the ground so it can't be tracked by footsteps.",weakness:"Salt is toxic for Wraith."},{name:"Yurei",evidences:["Temperature","Ghost Writing","Ghost Orb"],strength:"Drains player sanity especially quickly.",weakness:"Smudge stick in the same room will stop the Yurei from moving."},{name:"Yokai [BETA]",evidences:["Spirit Box","Ghost Orb","Ghost Writing"],strength:"Talking near a Yokai will anger it and increase it's chance of attacking.",weakness:"When hunting a Yokai can only hear voices close to it."},{name:"Hantu [BETA]",evidences:["Fingerprints","Ghost Orb","Ghost Writing"],strength:"Moves faster in cooler areas.",weakness:"Moves slower in warmer areas."}],x=n(93),j=new(n(92).a),w=function(e,t){return Object(O.filter)(e,(function(e){return 0===Object(O.difference)(t,e.evidences).length}))},T=function(e){j.set("sessionId",e,{maxAge:28800})},A=function(e,t){return Object(O.find)(t,(function(t){return t.sessionId===e}))||null},C=function(){return Object(x.a)("0123456789",6)()},_=function(){return Math.floor(Date.now()/1e3)},I={selectedEvidences:[],ghosts:S,evidenceButtons:(a={},Object(v.a)(a,k,!1),Object(v.a)(a,"Fingerprints",!1),Object(v.a)(a,"Temperature",!1),Object(v.a)(a,"Ghost Writing",!1),Object(v.a)(a,"Spirit Box",!1),Object(v.a)(a,"Ghost Orb",!1),a),questButtons:(r={},Object(v.a)(r,"Sink",!1),Object(v.a)(r,"Photo",!1),Object(v.a)(r,"Motion",!1),Object(v.a)(r,"Temperature",!1),Object(v.a)(r,"Crucifix",!1),Object(v.a)(r,"EMF",!1),Object(v.a)(r,"Smudge",!1),Object(v.a)(r,"Event",!1),Object(v.a)(r,"Candle",!1),Object(v.a)(r,"Salt",!1),Object(v.a)(r,"Sanity",!1),Object(v.a)(r,"Hunt",!1),Object(v.a)(r,"Repel",!1),r),talksToEveryOne:!1,ghostName:"",clients:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_GHOSTS":var n=t.evidence,a=t.isActive,r=e.selectedEvidences,o=Object(p.a)({},e.evidenceButtons,Object(v.a)({},n,a));if(a){r.push(n);var i=w(S,r);return Object(p.a)({},e,{ghosts:i,selectedEvidences:r,evidenceButtons:o})}Object(O.remove)(r,(function(e){return e===n}));var s=w(S,r);return Object(p.a)({},e,{ghosts:s,selectedEvidences:r,evidenceButtons:o});case"UPDATE_GHOST_NAME":var c=t.name;return Object(p.a)({},e,{ghostName:c});case"UPDATE_SELECTED_QUESTS":var u=t.quest,l=t.isActive;return Object(p.a)({},e,{questButtons:Object(p.a)({},e.questButtons,Object(v.a)({},u,l))});case"UPDATE_ANSWERS_EVERYONE_BUTTON":var d=t.isActive;return Object(p.a)({},e,{talksToEveryOne:d});case"RESET_PICKER":return Object(p.a)({},I,{selectedEvidences:[]});case"SET_PICKER_STATE":var m=t.data,h=Object(O.get)(m,"selectedEvidences",[]);return Object(p.a)({},e,{},m,{selectedEvidences:h,ghosts:w(S,h)});default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return!0;case"HIDE_LOADER":return!1;default:return e}},R=Object(l.combineReducers)({app:g,picker:W,loader:N}),B=n(34),P=n.n(B),D=n(15),H=n(80),G=n(81),q=n(62),F=(n(122),n(128),{apiKey:"AIzaSyBRfrPDPTF2URvsEiuHobKxvgiXEwovkrQ",authDomain:"phasmopicker.firebaseapp.com",databaseURL:"https://phasmopicker.firebaseio.com",projectId:"phasmopicker",storageBucket:"phasmopicker.appspot.com",messagingSenderId:"572824334723",appId:"1:572824334723:web:fdf84f63ca3a0d2ac586b6",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/phasmopicker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBRfrPDPTF2URvsEiuHobKxvgiXEwovkrQ",REACT_APP_FIREBASE_API_DOMAIN:"phasmopicker.firebaseapp.com",REACT_APP_FIREBASE_DB_URL:"https://phasmopicker.firebaseio.com",REACT_APP_FIREBASE_APPID:"1:572824334723:web:fdf84f63ca3a0d2ac586b6",REACT_APP_FIREBASE_PROJECT_ID:"phasmopicker",REACT_APP_FIREBASE_STORAGE_BUCKET:"phasmopicker.appspot.com",REACT_APP_FIREBASE_MESSANGING_SENDER_ID:"572824334723",REACT_APP_ENV:"prod"}).REACT_APP_FIREBASE_MEASUREMENT_ID});q.a.initializeApp(F),q.a.analytics();var M=q.a.database(),L=new(function(){function e(){Object(H.a)(this,e)}return Object(G.a)(e,[{key:"getSessionById",value:function(e){return M.ref().orderByChild("sessionId").equalTo(e).once("value")}},{key:"createSession",value:function(e){return M.ref().push(Object(p.a)({},e,{last_updated:_()}))}},{key:"updateSession",value:function(e,t){return M.ref().child(e).update(Object(p.a)({},t,{last_updated:_()}))}},{key:"removeSession",value:function(e){return M.ref().child(e).remove()}},{key:"getRef",value:function(){return M.ref()}}]),e}()),U=function(e){return e.app.page},K=function(e){return e.app.sessionId},Y=function(e){return e.app.sessionKey},J=function(e){return e.app.clientId},Q=function(e){return e.picker.clients},z=function(e){return e.picker},V=P.a.mark(ne),X=P.a.mark(ae),$=P.a.mark(re),Z=P.a.mark(oe),ee=Object(O.debounce)(L.updateSession,800),te=function(e,t){return{sessionId:t,selectedEvidences:e.selectedEvidences,evidenceButtons:e.evidenceButtons,questButtons:e.questButtons,talksToEveryOne:e.talksToEveryOne,ghostName:e.ghostName}};function ne(e){var t,n,a,r,o,i,s,c,u;return P.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.sessionId,n=C(),""===t){l.next=30;break}return l.next=5,Object(D.a)(L.getSessionById,t);case 5:if(a=l.sent,!(r=A(t,a.val()))){l.next=19;break}return o=Object.keys(a.val())[0],(i=Object(O.get)(r,"clients",[])).push(n),l.next=13,Object(D.a)(L.updateSession,o,Object(p.a)({},r,{clients:i}));case 13:return l.next=15,Object(D.b)(f(r));case 15:return l.next=17,Object(D.b)(h(o));case 17:l.next=28;break;case 19:return l.next=21,Object(D.c)(z);case 21:return s=l.sent,c=te(s,t),l.next=25,Object(D.a)(L.createSession,Object(p.a)({},c,{clients:[n]}));case 25:return u=l.sent,l.next=28,Object(D.b)(h(u.key));case 28:return l.next=30,Object(D.b)(E(n));case 30:case"end":return l.stop()}}),V)}function ae(){var e,t,n,a,r,o;return P.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(D.c)(K);case 2:if(""!==(e=i.sent)){i.next=9;break}return i.next=6,Object(D.b)({type:"RESET_SESSION_COMPLETE"});case 6:return i.next=8,Object(D.b)({type:"RESET_PICKER"});case 8:return i.abrupt("return");case 9:return i.next=11,Object(D.c)(J);case 11:return t=i.sent,i.next=14,Object(D.c)(Y);case 14:return n=i.sent,i.next=17,Object(D.c)(Q);case 17:if(!((a=i.sent).length<2)){i.next=23;break}return i.next=21,Object(D.a)(L.removeSession,n);case 21:i.next=30;break;case 23:return i.next=25,Object(D.c)(z);case 25:return r=i.sent,o=te(r,e),Object(O.remove)(a,(function(e){return e===t})),i.next=30,Object(D.a)(L.updateSession,n,Object(p.a)({},o,{clients:a}));case 30:return i.next=32,Object(D.b)({type:"RESET_SESSION_COMPLETE"});case 32:return i.next=34,Object(D.b)({type:"RESET_PICKER"});case 34:case"end":return i.stop()}}),X)}function re(){var e,t,n,a,r;return P.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(D.c)(Y);case 2:return e=o.sent,o.next=5,Object(D.c)(K);case 5:return t=o.sent,o.next=8,Object(D.c)(z);case 8:if(n=o.sent,a=te(n,t),!e||""===t){o.next=14;break}return o.next=13,Object(D.a)(ee,e,a);case 13:return o.abrupt("return");case 14:if(e||!(t.length>0)){o.next=20;break}return o.next=17,Object(D.a)(L.createSession,a);case 17:return r=o.sent,o.next=20,Object(D.b)(h(r.key));case 20:case"end":return o.stop()}}),$)}function oe(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)("ENTER_APP",ne);case 2:return e.next=4,Object(D.d)("RESET_SESSION",ae);case 4:return e.next=6,Object(D.e)(["UPDATE_GHOST_NAME","UPDATE_SELECTED_QUESTS","UPDATE_ANSWERS_EVERYONE_BUTTON","FILTER_GHOSTS","RESET_PICKER"],re);case 6:case"end":return e.stop()}}),Z)}var ie=oe,se=function(){var e=Object(d.a)(),t=Object(l.createStore)(R,Object(l.applyMiddleware)(e));return e.run(ie),t},ce=n(169),ue=n(33),le=n(83),de=n.n(le),pe=n(161),me=n(172),he=n(162),Ee=n(90),ye=n.n(Ee),fe=n(160),be=n(89),ge=n.n(be),ve=n(88),Oe=n.n(ve),ke=n(155),Se=Object(ke.a)({header:{display:"flex",height:40,width:"100%",background:"rgba(33, 33, 33, .6)",justifyContent:"space-between",position:"fixed",zIndex:10,color:"white"},navWrapper:{display:"flex",flexWrap:"nowrap"},sessionWrapper:{display:"flex",flexWrap:"nowrap"},sessionIdWrapper:{display:"flex",alignItems:"center",marginRight:5},headerButton:{borderRadius:5},btnActive:{color:"#f34423",borderBottom:"2px solid #f34423"}}),xe=function(e){var t=e.resetSession,n=Object(u.b)(),a=Se(),r=Object(u.c)((function(e){return K(e)})),s=Object(u.c)((function(e){return U(e)})),c=Object(o.useState)("Click to copy"),l=Object(ue.a)(c,2),d=l[0],p=l[1],m=function(e){n(y(e))};return i.a.createElement("div",{className:a.header},i.a.createElement("div",{className:a.navWrapper},i.a.createElement(me.a,{title:"Picker"},i.a.createElement(fe.a,{onClick:function(){return m("picker")},className:a.headerButton},i.a.createElement(Oe.a,{className:"picker"===s?a.btnActive:""}))),i.a.createElement(me.a,{title:"Questions"},i.a.createElement(fe.a,{onClick:function(){return m("questions")},className:a.headerButton},i.a.createElement(ge.a,{className:"questions"===s?a.btnActive:""})))),i.a.createElement("div",{className:a.sessionWrapper},""!==r&&i.a.createElement("div",{className:a.sessionIdWrapper},i.a.createElement(pe.a,null,"Session id:"),i.a.createElement(me.a,{title:d},i.a.createElement(he.a,{onClick:function(){de()(r).then((function(){p("Copied to clipboard!"),setTimeout((function(){p("Click to copy")}),5e3)}))},className:a.headerButton},r))),i.a.createElement(me.a,{title:"Exit room"},i.a.createElement(fe.a,{onClick:function(){return t()},className:a.headerButton},i.a.createElement(ye.a,null)))))},je=n(164),we=n(171),Te=n(170),Ae=n(94),Ce=Object(ke.a)({button:{color:function(e){return e.color},margin:"0 5px"},buttonSelected:{color:function(e){return e.color},border:"2px solid red",margin:"0 2px"}}),_e=function(e){var t=e.type,n=e.text,a=e.handleClick,r=Object(Ae.a)(e,["type","text","handleClick"]),o=Ce(r),s=Object(u.c)((function(e){return function(e,t,n){switch(t){case"evidence":return e.picker.evidenceButtons[n];case"quest":return e.picker.questButtons[n];case"talksToEveryOne":return e.picker.talksToEveryOne;default:return!1}}(e,t,n)}));return i.a.createElement(he.a,{className:s?o.buttonSelected:o.button,onClick:function(){return a(n,!s)}},n)},Ie=n(163),We=Object(ke.a)((function(){return{root:{width:200,padding:20},content:{display:"flex",alignItems:"center"},accent:{color:"green"},header:{color:"red"}}})),Ne=function(e){var t=e.data,n=e.selectedEvidences,a=Object(o.useState)(!1),r=Object(ue.a)(a,2),s=r[0],c=r[1],u=We(),l=t.name,d=t.strength,p=t.weakness,m=t.evidences;return Object(o.useEffect)((function(){return c(!0),function(){c(!1)}}),[]),i.a.createElement(Ie.a,{in:s,timeout:1e3},i.a.createElement(we.a,{className:u.root},i.a.createElement(pe.a,{variant:"h4",className:u.header},l),i.a.createElement(pe.a,{variant:"h6",color:"secondary"},"Evidences"),m.map((function(e){return i.a.createElement(we.a,{key:e},i.a.createElement(pe.a,{className:n.includes(e)?u.accent:""},e))})),i.a.createElement(pe.a,{variant:"h6"},"Strength"),i.a.createElement(pe.a,{className:u.content},d),i.a.createElement(pe.a,{variant:"h6"},"Weakness"),i.a.createElement(pe.a,{className:u.content},p)))},Re=Object(ke.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:0,background:t.primary.main,color:t.primary.contrastText},inputWrapper:{display:"flex",justifyContent:"center",padding:"20px 20px",flexWrap:"wrap"},evidencesButtonsWrapper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px px",flexWrap:"wrap"},ghostsWrapper:{display:"flex",flexWrap:"wrap",alignContent:"center",justifyContent:"center",padding:"0 50px"},noEvidenceWrapper:{padding:50},header:{width:"100%",display:"flex",justifyContent:"center",marginTop:40}}})),Be=function(){var e=Object(u.b)(),t=Re(),n=Object(u.c)((function(e){return z(e)})),a=Object(u.c)((function(e){return K(e)})),r=Object(u.c)((function(e){return Y(e)}));Object(o.useEffect)((function(){var t=function(){e({type:"RESET_SESSION"})};return window.addEventListener("beforeunload",t),function(){window.removeEventListener("beforeunload",t)}}),[e]),Object(o.useEffect)((function(){r&&L.getRef().child(r).on("value",(function(t){e(f(t.val()))}))}),[e,a,r]);var s=function(t,n){e(function(e,t){return{type:"FILTER_GHOSTS",evidence:e,isActive:t}}(t,n))},c=function(t,n){e(function(e,t){return{type:"UPDATE_SELECTED_QUESTS",quest:e,isActive:t}}(t,n))},l=n.ghostName,d=n.ghosts,p=n.selectedEvidences;return i.a.createElement(je.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(we.a,{className:t.wrapper},i.a.createElement(we.a,{className:t.header},i.a.createElement(pe.a,{variant:"h3"},"Ghost Picker")),i.a.createElement(we.a,{className:t.inputWrapper},i.a.createElement(Te.a,{id:"ghost-name",label:"Ghost Name",variant:"outlined",value:l,onChange:function(t){return n=t.target.value,void e(function(e){return{type:"UPDATE_GHOST_NAME",name:e}}(n));var n}}),i.a.createElement(_e,{type:"talksToEveryOne",color:"grey",text:"Answers everyone",handleClick:function(t,n){e(function(e){return{type:"UPDATE_ANSWERS_EVERYONE_BUTTON",isActive:e}}(n))}}),i.a.createElement(_e,{type:"reset",color:"grey",text:"Reset",handleClick:function(){e({type:"RESET_PICKER"})}})),i.a.createElement(pe.a,{variant:"h4"},"Evidences"),i.a.createElement(we.a,{className:t.evidencesButtonsWrapper},i.a.createElement(_e,{type:"evidence",color:"red",text:k,handleClick:s}),i.a.createElement(_e,{type:"evidence",color:"green",text:"Fingerprints",handleClick:s}),i.a.createElement(_e,{type:"evidence",color:"dodgerblue",text:"Temperature",handleClick:s}),i.a.createElement(_e,{type:"evidence",color:"purple",text:"Ghost Writing",handleClick:s}),i.a.createElement(_e,{type:"evidence",color:"cadetblue",text:"Spirit Box",handleClick:s}),i.a.createElement(_e,{type:"evidence",color:"brown",text:"Ghost Orb",handleClick:s})),i.a.createElement(pe.a,{variant:"h4"},"Quests"),i.a.createElement(we.a,{className:t.evidencesButtonsWrapper},i.a.createElement(_e,{type:"quest",color:"grey",text:"Crucifix",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Event",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Motion",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Photo",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"EMF",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Sink",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Smudge",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Temperature",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Candle",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Salt",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Sanity",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Hunt",handleClick:c}),i.a.createElement(_e,{type:"quest",color:"grey",text:"Repel",handleClick:c})),i.a.createElement(we.a,{className:t.ghostsWrapper},d.map((function(e){return i.a.createElement(Ne,{data:e,key:e.name,selectedEvidences:p})})),Object(O.isEmpty)(d)?i.a.createElement(we.a,{className:t.noEvidenceWrapper},i.a.createElement(pe.a,{variant:"h6"},"No ghosts with such combination of evidences")):null)))},Pe=n(68),De=Object(ke.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"100%",minHeight:"100%",padding:0,background:t.primary.main,color:t.primary.contrastText,overflowX:"hidden"},header:{width:"100%",display:"flex",justifyContent:"center",marginTop:40},pageLabel:{margin:"0 auto"},questionsWrapper:{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"space-around","@media screen and (max-width: 880px)":{justifyContent:"flex-start"}},columnWrapper:{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"0 30px"},questionHeader:{color:"red"}}})),He=function(){var e=De();return i.a.createElement(je.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(we.a,{className:e.wrapper},i.a.createElement(we.a,{className:e.header},i.a.createElement(pe.a,{variant:"h3",className:e.pageLabel},"Questions")),i.a.createElement(we.a,{className:e.questionsWrapper},Object.keys(Pe).map((function(t){return i.a.createElement(Ie.a,{in:!0,timeout:1e3,key:t},i.a.createElement(we.a,{className:e.columnWrapper,key:t},i.a.createElement(pe.a,{variant:"h4",className:e.questionHeader,key:t},t),Pe[t].map((function(e){return i.a.createElement(pe.a,{key:e},e)}))))})))))},Ge=n(167),qe=n(166),Fe=n(165),Me=Object(ke.a)({activeAbsolute:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",zIndex:20,backgroundColor:"rgba(0, 0, 0, .6)"},activeBox:{width:"100%"},disabled:{display:"none"}}),Le=function(e){var t=e.type,n=Me(),a=Object(u.c)((function(e){return function(e){return e.loader}(e)})),r="linear"===t?n.activeBox:n.activeAbsolute,o=a?"":n.disabled;return i.a.createElement("div",{className:"".concat(r," ").concat(o)},"linear"===t?i.a.createElement(Fe.a,null):i.a.createElement(qe.a,{color:"secondary"}))},Ue=Object(ke.a)((function(e){var t=e.palette;return{wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"100%",background:t.primary.main,color:t.primary.contrastText},subWrapper:{padding:5,backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:10},inputWrapper:{display:"flex",flexDirection:"column",margin:"10px 20px 10px 20px"},submitButton:{marginTop:5}}})),Ke=function(){var e=Object(u.b)(),t=Ue(),n=Object(o.useState)(""),a=Object(ue.a)(n,2),r=a[0],s=a[1],c=Object(o.useState)({}),l=Object(ue.a)(c,2),d=l[0],p=l[1],h=Object(o.useState)(null),E=Object(ue.a)(h,2),y=E[0],f=E[1],b=Object(o.useState)(!1),g=Object(ue.a)(b,2),v=g[0],k=g[1],S=j.get("sessionId");Object(o.useEffect)((function(){(S||""===S)&&e(m("picker",S))}),[e,S]),Object(o.useEffect)((function(){d&&!Object(O.isEmpty)(d)&&(T(r),e(m("picker",r)))})),Object(o.useEffect)((function(){d||f("Session not found")}),[d]);var x=function(e){k(e)};return i.a.createElement(we.a,{className:t.wrapper},i.a.createElement(we.a,{className:t.subWrapper},v?i.a.createElement(we.a,{className:t.inputWrapper},i.a.createElement(Te.a,{id:"sessionID",label:"Session ID",variant:"outlined",value:r,error:!!y,helperText:y,onChange:function(e){return t=e.target.value,p({}),f(null),void s(t);var t}}),i.a.createElement(he.a,{className:t.submitButton,onClick:function(){(6!==r.length?(f("Session id consists of 6 digits"),0):/^[0-9]+$/.test(r)||(f("Wrong ID format"),0))&&(e({type:"SHOW_LOADER"}),L.getSessionById(r).then((function(t){e({type:"HIDE_LOADER"}),p(t.val())})))}},"Join"),i.a.createElement(Ge.a,null),i.a.createElement(he.a,{className:t.submitButton,onClick:function(){return x(!1)}},"Back")):i.a.createElement(we.a,{className:t.inputWrapper},i.a.createElement(he.a,{className:t.submitButton,onClick:function(t){t.preventDefault();var n=C();e(m("picker",n)),T(n)}},"Create online session"),i.a.createElement(Ge.a,null),i.a.createElement(he.a,{className:t.submitButton,onClick:function(){return x(!0)}},"Join online session"),i.a.createElement(Ge.a,null),i.a.createElement(he.a,{className:t.submitButton,onClick:function(){T(""),e(m("picker",""))}},"Enter solo session")),i.a.createElement(Le,{type:"linear"})))},Ye=n(168),Je=n(69),Qe=n.n(Je),ze=Object(Ye.a)({palette:{type:"dark",primary:{main:Qe.a[900]},secondary:{main:Qe.a[50]}},overrides:{MuiTypography:{body1:{fontFamily:"SyneMono","@media screen and (max-width: 1000px)":{}},h3:{fontFamily:"Teko-Medium"},h4:{fontFamily:"Teko-Medium"},h5:{fontFamily:"Teko-Medium"},h6:{fontFamily:"Teko-Medium"}}}}),Ve=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return U(e)})),n=function(t){e(y(t))},a=function(){j.remove("sessionId"),e({type:"RESET_SESSION"})};return i.a.createElement(ce.a,{theme:ze},function(){switch(t){case"picker":return i.a.createElement(i.a.Fragment,null,i.a.createElement(xe,{resetSession:a}),i.a.createElement(Be,{changePage:n,resetSession:a}));case"questions":return i.a.createElement(i.a.Fragment,null,i.a.createElement(xe,{resetSession:a}),i.a.createElement(He,{changePage:n}));default:return i.a.createElement(Ke,null)}}())},Xe=(n(126),se());c.a.render(i.a.createElement(u.a,{store:Xe},i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ve,null))),document.getElementById("root"))},68:function(e){e.exports=JSON.parse('{"Common":["Anybody here?","Anybody in the room?","Anybody with us?","Are you angry?","Are you a boy?","Are you a child?","Are you a girl?","Are you a woman?","Are you close?","Are you female?","Are you friendly?","Are you here?","Are you male?","Are you male or female?","Are you old?","Are you with us?","Are you young?","Can we help?","Can you give me your name?","Can you show yourself?","Can you talk?","Do you want to hurt us?","Do you want us here?","Do you want us to leave?","Give us a sign!","Hello?","How old are you?","How young are you?","Is anyone here?","Is there a ghost here?","Is there a spirit here?","Let us know you are here.","Shall we leave?","Should we leave?","Show yourself!","Speak to us!","What are you?","What is your age?","What is your gender?","What is your location?","What is your name?","What do you want?","What should we do?","When were you born?","Where are you?","Who am I talking to?","Who are we talking to?","Who are you?","Who is this?","Why are you here?"],"Spirit Box":["Are there any ghosts?","Are you happy?","Are you here all the time?","Are you male or female?","Are you the only one here?","Are you waiting?","Can I ask you?","Can we speak?","Can you make a sound?","Can you speak?","Can you speak to us?","Do something.","Do you know who we are?","Do you want us to leave?","Give us a sign.","Is there anyone here?","Is there anyone with me?","Is there anything I can do?","Show me.","Show us.","Show us your presence.","Talk to me.","Talk to us.","Throw something.","Turn off the light.","Turn on the light.","We are friends.","We mean you no harm.","We would like to speak to you.","We would like to speak with you.","Would you like to talk?"],"Ouija Bord":["Who did you kill?","Who is your victim?","What is the name of the person you killed?","What is the name of the person you murdered?","What is your victim?","Did you murder?","Who did you murder?","Who died?","How old are you?","What is your age?","Are you old?","Are you young?","How long have you been dead?","How many years ago did you die?","How long have you been here?","How long ago did you die?","When did you die?","How many are in this room?","How many people are in this room?","How many people are in here?","How many ghosts are in this room?","How many ghosts are in here?","Are you alone?","Are we alone?","Who is here?","Who is in this room?","Where are you?","What is your favourite room?","Where is your room?","What is your room?","Are you here?","Are you close?","Are there any spirits?","Are you near?","Are you around?"]}')}},[[111,1,2]]]);
//# sourceMappingURL=main.05808cac.chunk.js.map