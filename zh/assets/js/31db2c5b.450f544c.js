"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),h=i,c=m["".concat(s,".").concat(h)]||m[h]||k[h]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={slug:"/guides/custody-tool-description",title:"Custody Tool Description"},l=void 0,o={unversionedId:"guides/custody/custody-tool-description",id:"guides/custody/custody-tool-description",title:"Custody Tool Description",description:"The majority of Chia Network Inc's prefarm is being held in a cold wallet, secured by a complex set of custodial rules. This document will describe the details of the custodial arrangement. A moderate level of technical proficiency is probably needed to understand the details. For a high-level overview of the custody wallet, see our blog post.",source:"@site/docs/guides/custody/custody-tool-description.md",sourceDirName:"guides/custody",slug:"/guides/custody-tool-description",permalink:"/zh/guides/custody-tool-description",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/custody/custody-tool-description.md",tags:[],version:"current",frontMatter:{slug:"/guides/custody-tool-description",title:"Custody Tool Description"},sidebar:"guides",previous:{title:"CR-CAT Creation Tutorial",permalink:"/zh/guides/cr-CAT-tutorial"},next:{title:"Custody Tool User Guide",permalink:"/zh/guides/custody-tool-user-guide"}},s={},d=[{value:"Singleton Structure",id:"singleton-structure",level:2},{value:"Singleton Settings",id:"singleton-settings",level:2},{value:"Permanent layer",id:"permanent-layer",level:3},{value:"Non-permanent layer",id:"non-permanent-layer",level:3},{value:"Allowed Actions",id:"allowed-actions",level:2},{value:"Withdrawal",id:"withdrawal",level:3},{value:"Withdrawal Timelock",id:"withdrawal-timelock",level:4},{value:"Drop Coin",id:"drop-coin",level:4},{value:"Rekey",id:"rekey",level:3},{value:"Initiation",id:"initiation",level:4},{value:"Drop Coin",id:"drop-coin-1",level:4},{value:"Lock Level Increase",id:"lock-level-increase",level:3},{value:"When are Normal Rekey, Slow Rekey and Lock Level Increase needed?",id:"when-are-normal-rekey-slow-rekey-and-lock-level-increase-needed",level:3},{value:"Source Code",id:"source-code",level:2},{value:"Public Configuration",id:"public-configuration",level:3},{value:"Private Configuration",id:"private-configuration",level:3}],p={toc:d},m="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The majority of Chia Network Inc's prefarm is being held in a cold wallet, secured by a complex set of custodial rules. This document will describe the details of the custodial arrangement. A moderate level of technical proficiency is probably needed to understand the details. For a high-level overview of the custody wallet, see our ",(0,i.kt)("a",{parentName:"p",href:"https://www.chia.net/2022/10/29/a-new-home-for-the-prefarm/"},"blog post"),"."),(0,i.kt)("p",null,"Other relevant documents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:a(1846).Z},"Flow chart")," to visualize how the custody tool works"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/guides/custody-tool-user-guide"},"User guide")," to help you get up and running"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/custody-tool"},"CLI reference")," for all custody commands used in this tutorial")),(0,i.kt)("h2",{id:"singleton-structure"},"Singleton Structure"),(0,i.kt)("p",null,"The prefarm uses a ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/singletons",title:"Description of Chia singletons"},"singleton")," with the following features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Multisig")," -- required to perform actions on the singleton, where:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The total number of keys in the multisig is initially set to 5, which will be referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," for the rest of this document. ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," can be changed with a rekey (explained later)"),(0,i.kt)("li",{parentName:"ul"},"Initially, 3 keys will be required to perform withdrawals and standard rekeys. This number will be referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," for the rest of this document. ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," can be thought of as the ",(0,i.kt)("em",{parentName:"li"},"security level")," for the wallet. This variable can be modified to be as large as ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),". For the prefarm, it can be as small as 1, though other custodial wallets could set the minimum to a larger number")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Merkle root")," -- Chialisp puzzles representing the ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," keys are stored in a Merkle tree, where:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Puzzles representing every combination of keys, from 1 to ",(0,i.kt)("inlineCode",{parentName:"li"},"m"),", are stored. If the keys are A, B, C, D and E, and ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," is 3, then the combinations to be stored are ABC, ABD, ABE, ACD, ACE, ADE, BCD, BCE, BDE, CDE, AB, AC, AD, AE, BC, BD, BE, CD, CE, DE, A, B, C, D and E"),(0,i.kt)("li",{parentName:"ul"},"The Merkle root of this tree is curried (pre-committed) into the singleton"),(0,i.kt)("li",{parentName:"ul"},"The Merkle root of a tree containing puzzles of all possible combinations for ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," + 1 is also curried into the singleton. This is required in case of a lock level increase (explained later). This root is recursive, in that it contains puzzles that have combinations for ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," + 2 committed to them, leading up to the level where ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,i.kt)("li",{parentName:"ul"},"In order to spend a coin from this wallet, a node in the Merkle tree, along with a Proof of Inclusion, are required to be passed into the singleton's solution. The Proof of Inclusion must prove the node's existence in the current Merkle root in order for the spend to succeed"),(0,i.kt)("li",{parentName:"ul"},"The Merkle tree is stored in multiple private locations. However, even if a copy is stolen, the thief will not gain access to the wallet because ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," digital signatures are still required (see below for a more detailed analysis)"),(0,i.kt)("li",{parentName:"ul"},"The Merkle tree is generated deterministically, based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," pubkeys. Therefore, if the Merkle tree is lost, it can be regenerated by using the ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," pubkeys")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Withdrawal Timelock")," -- This is a timelock on initiating a withdrawal, referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"wt")," for the rest of this document. The value of ",(0,i.kt)("inlineCode",{parentName:"p"},"wt")," is set upon the wallet's creation and can never be changed. It will be explained in detail below.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rekey Timelock")," -- This is a timelock on initiating a rekey, referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"rt")," for the rest of this document. The value of ",(0,i.kt)("inlineCode",{parentName:"p"},"rt")," is set upon the wallet's creation and can never be changed. It will be explained in detail below."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"singleton-settings"},"Singleton Settings"),(0,i.kt)("p",null,"The singleton comes in two layers -- one permanent and one non-permanent."),(0,i.kt)("h3",{id:"permanent-layer"},"Permanent layer"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Prefarm Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"wt")),(0,i.kt)("td",{parentName:"tr",align:"left"},"30 days"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Withdrawal Timelock -- When attempting to begin a withdrawal, this is the minimum number of seconds that must have elapsed since the last withdrawal, rekey or clawback.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pc")),(0,i.kt)("td",{parentName:"tr",align:"left"},"90 days"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Payment Clawback -- The minimum number of seconds that must elapse after initiating a withdrawal before the withdrawal can be completed. Clawbacks are possible during this window.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rt")),(0,i.kt)("td",{parentName:"tr",align:"left"},"15 days"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rekey Timelock -- When attempting to begin a standard rekey, this is the minimum number of seconds that must have elapsed since the last withdrawal, rekey or clawback. For a slow rekey, this amount gets added for each key less than ",(0,i.kt)("inlineCode",{parentName:"td"},"m")," (in addition to the amount of time that would have been required in a standard rekey).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rc")),(0,i.kt)("td",{parentName:"tr",align:"left"},"30 days"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rekey Clawback -- The minimum number of seconds that must elapse after initiating a rekey before the rekey can be completed. Clawbacks are possible during this window.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sp")),(0,i.kt)("td",{parentName:"tr",align:"left"},"45 days"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Slow rekey Penalty -- This amount gets added to the Rekey Timelock when a slow rekey is being performed.")))),(0,i.kt)("h3",{id:"non-permanent-layer"},"Non-permanent layer"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Initial",(0,i.kt)("br",null),"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"m")),(0,i.kt)("td",{parentName:"tr",align:"left"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The initial number of pubkeys required to do a withdrawal or standard rekey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"n")),(0,i.kt)("td",{parentName:"tr",align:"left"},"5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum number of pubkeys required to do a withdrawal or standard rekey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pks")),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"A comma separated list of pubkey files that will control this money")))),(0,i.kt)("h2",{id:"allowed-actions"},"Allowed Actions"),(0,i.kt)("p",null,"Three separate actions are allowed on the wallet's singleton: withdrawals, rekeys (normal and slow) and lock level increases. Each of these actions will be discussed in detail in this section."),(0,i.kt)("h3",{id:"withdrawal"},"Withdrawal"),(0,i.kt)("p",null,"This action removes money from the wallet. In order for a withdrawal to be initiated, exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," signatures are required."),(0,i.kt)("p",null,"Two phases must be completed to perform a withdrawal: a ",(0,i.kt)("em",{parentName:"p"},"withdrawal timelock")," and a ",(0,i.kt)("em",{parentName:"p"},"drop coin"),"."),(0,i.kt)("h4",{id:"withdrawal-timelock"},"Withdrawal Timelock"),(0,i.kt)("p",null,"Even though this is called a ",(0,i.kt)("em",{parentName:"p"},"timelock"),", it acts more like a ",(0,i.kt)("em",{parentName:"p"},"gateway"),", which either allows or disallows the singleton to begin the withdrawal process. It has the following rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wt")," seconds must have elapsed since any actions (other than a lock level increase) have been performed on the singleton"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"wt")," condition either has, or has not, been met"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wt")," is part of the singleton's permanent layer, so it can never be modified")),(0,i.kt)("p",null,"If the withdrawal timelock condition has not been met, then a withdrawal may not be initiated. If it has been met, then a withdrawal may be initiated. The next phase is the ",(0,i.kt)("em",{parentName:"p"},"drop coin"),"."),(0,i.kt)("h4",{id:"drop-coin"},"Drop Coin"),(0,i.kt)("p",null,"Upon entering this phase, the singleton creates a ",(0,i.kt)("em",{parentName:"p"},"drop coin")," of the amount of XCH to be withdrawn. A drop coin has several rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It has a curried XCH payout address, to where the money is flagged to be withdrawn"),(0,i.kt)("li",{parentName:"ul"},"It has a payment clawback timelock, referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"pc")," for the rest of this document"),(0,i.kt)("li",{parentName:"ul"},"Because the drop coin cannot be spent for ",(0,i.kt)("inlineCode",{parentName:"li"},"pc")," seconds, it functions as a permissionless escrow"),(0,i.kt)("li",{parentName:"ul"},"The drop coin contains the same Merkle root that was used in the singleton"),(0,i.kt)("li",{parentName:"ul"},"At any point before the drop coin has been spent, ",(0,i.kt)("em",{parentName:"li"},"clawback")," is allowed. Clawback has the following features:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It cancels the withdrawal and returns the money to the custodial wallet's singleton. It uses ",(0,i.kt)("inlineCode",{parentName:"li"},"p2_singleton")," to accomplish this, so there is further action needed for the funds to be absorbed into the singleton"),(0,i.kt)("li",{parentName:"ul"},"It requires ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," signatures"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," signatures don't have to be the same as the ones that initiated the withdrawal. In other words, different people could claw back the withdrawal than those who initiated it"))),(0,i.kt)("li",{parentName:"ul"},"After ",(0,i.kt)("inlineCode",{parentName:"li"},"pc")," seconds, if a clawback has not been performed, ",(0,i.kt)("em",{parentName:"li"},"completion")," becomes possible. Completion has the following features:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It completes the withdrawal to a pre-specified XCH address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Anyone")," is allowed to perform a completion"),(0,i.kt)("li",{parentName:"ul"},"Even though a completion can be performed by anyone, it is secure because the withdrawal address is not changeable")))),(0,i.kt)("h3",{id:"rekey"},"Rekey"),(0,i.kt)("p",null,"This action changes the keys associated with the wallet's singleton."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"k")," keys are required for a rekey, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a ",(0,i.kt)("em",{parentName:"li"},"standard")," rekey, ",(0,i.kt)("inlineCode",{parentName:"li"},"k = m")),(0,i.kt)("li",{parentName:"ul"},"For a ",(0,i.kt)("em",{parentName:"li"},"slow")," rekey, ",(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k < m"),". (By default, a slow rekey could be performed with just one key.)")),(0,i.kt)("p",null,"Either type of rekey can also modify ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," if desired. We'll discuss the circumstances where each type of rekey will be performed later in this section."),(0,i.kt)("p",null,"Two phases must be completed to perform a rekey, an ",(0,i.kt)("em",{parentName:"p"},"initiation timelock")," and a ",(0,i.kt)("em",{parentName:"p"},"drop coin"),"."),(0,i.kt)("h4",{id:"initiation"},"Initiation"),(0,i.kt)("p",null,"Before a rekey can begin, a certain amount of time must have elapsed since the last action (other than a lock level increase) was performed on the singleton. This is a ",(0,i.kt)("em",{parentName:"p"},"de facto")," gateway; the time condition either has, or has not been met."),(0,i.kt)("p",null,"The amount of time before the rekey can begin depends on the number of keys used. In order to calculate this time, several factors must be considered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start by calculating ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"x = m - k + 1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", then it's a standard rekey (",(0,i.kt)("inlineCode",{parentName:"li"},"k = m"),")"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"x > 1"),", then it's a slow rekey. ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," represents the gap between the ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," keys being used with this rekey and ",(0,i.kt)("inlineCode",{parentName:"li"},"m + 1")," (the number of keys required for a lock level increase, as explained below)"))),(0,i.kt)("li",{parentName:"ul"},"For a standard rekey, the initiation timelock duration is ",(0,i.kt)("inlineCode",{parentName:"li"},"rt"),". As discussed above, ",(0,i.kt)("inlineCode",{parentName:"li"},"rt")," is stored in the singleton and can never be changed"),(0,i.kt)("li",{parentName:"ul"},"For a slow rekey, a time penalty ",(0,i.kt)("inlineCode",{parentName:"li"},"sp")," seconds is automatically applied. The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"sp")," also can never be changed"),(0,i.kt)("li",{parentName:"ul"},"The duration of the initiation timelock of a slow rekey is ",(0,i.kt)("inlineCode",{parentName:"li"},"sp + rt*x")," seconds. In other words, a penalty of ",(0,i.kt)("inlineCode",{parentName:"li"},"rt")," seconds gets added for each key less than ",(0,i.kt)("inlineCode",{parentName:"li"},"m"))),(0,i.kt)("p",null,"The following table illustrates a few examples of initiation timelock lengths, for various values of ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),". For this table, ",(0,i.kt)("inlineCode",{parentName:"p"},"rt")," is set to 15 days and ",(0,i.kt)("inlineCode",{parentName:"p"},"sp")," is set to 45 days (these are both denominated in seconds). The table assumes that ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," (5) and the minimum ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," (1) have not been modified from their default values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"m")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"th"},"k")),(0,i.kt)("th",{parentName:"tr",align:"center"},"Days"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard rekey, no penalty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"75"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Slow rekey, ",(0,i.kt)("inlineCode",{parentName:"td"},"sp")," day penalty + 2 ","*"," standard ",(0,i.kt)("inlineCode",{parentName:"td"},"rt")," days")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"90"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Slow rekey, ",(0,i.kt)("inlineCode",{parentName:"td"},"sp")," day penalty + 3 ","*"," ",(0,i.kt)("inlineCode",{parentName:"td"},"rt")," days")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This is a case where, after a prior rekey, ",(0,i.kt)("inlineCode",{parentName:"td"},"m")," was reduced to 1. There is no penalty, even with a single key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"90"),(0,i.kt)("td",{parentName:"tr",align:"left"},"In this case, a lock level increase has been performed, so 5 of 5 keys are required to avoid a penalty")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"120"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This is the longest possible initiation timelock duration when ",(0,i.kt)("inlineCode",{parentName:"td"},"n")," is 5 and the minimum ",(0,i.kt)("inlineCode",{parentName:"td"},"k")," is 1. In this case, ",(0,i.kt)("inlineCode",{parentName:"td"},"m")," has been increased to 5, and 1 key is being used for the rekey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Other combinations for ",(0,i.kt)("inlineCode",{parentName:"td"},"m")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"k")," are possible, but not shown here")))),(0,i.kt)("p",null,"If the singleton has been modified within the timelock's required number of seconds, then the initiation timelock condition has not been met, and a rekey may not be initiated. If the initiation timelock condition has been met, then a withdrawal may be initiated. The next phase is the ",(0,i.kt)("em",{parentName:"p"},"drop coin"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," is carried over to this phase."),(0,i.kt)("h4",{id:"drop-coin-1"},"Drop Coin"),(0,i.kt)("p",null,"Upon entering this phase, the singleton creates a ",(0,i.kt)("em",{parentName:"p"},"drop coin")," with 0 value. This drop coin has several rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It has a hard-coded timelock, hereafter referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"rc")),(0,i.kt)("li",{parentName:"ul"},"The same Merkle root that was used in the singleton is curried into the drop coin"),(0,i.kt)("li",{parentName:"ul"},"A new Merkle root is also curried into the drop coin. After the rekey has completed, this will become the Merkle root of the puzzles representing the new keys. Therefore, the new keys, along with the new Merkle tree, must have been generated before the drop coin was created"),(0,i.kt)("li",{parentName:"ul"},"At any point before the drop coin has been spent, ",(0,i.kt)("em",{parentName:"li"},"clawback")," is allowed. Clawback has the following features:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It cancels the rekey; the custodial wallet's singleton is left unmodified"),(0,i.kt)("li",{parentName:"ul"},"It requires ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," signatures (the number of keys that initiated the rekey)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"k")," signatures don't have to be the same as the ones that initiated the rekey. In other words, different people could claw back the rekey than those who initiated it"))),(0,i.kt)("li",{parentName:"ul"},"After ",(0,i.kt)("inlineCode",{parentName:"li"},"rc")," seconds, if a clawback has not been performed, ",(0,i.kt)("em",{parentName:"li"},"completion")," becomes possible. Completion has the following features:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It spends the drop coin, which creates a puzzle announcement for the singleton to use"),(0,i.kt)("li",{parentName:"ul"},"It also spends the singleton, which asserts the puzzle announcement from the drop coin, and recreates itself with the new Merkle root curried in"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m")," and/or ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," could be set to different numbers in the new singleton"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Anyone")," is allowed to perform the completion"),(0,i.kt)("li",{parentName:"ul"},"Even though the completion can be performed by anyone, it is secure because the new Merkle root has already been committed to")))),(0,i.kt)("p",null,"Note that because ",(0,i.kt)("inlineCode",{parentName:"p"},"rc")," is hard-coded, a second rekey can't overtake a rekey that has already been initiated. If rekey A is in progress and someone attempts rekey B, then A will succeed and B will fail."),(0,i.kt)("h3",{id:"lock-level-increase"},"Lock Level Increase"),(0,i.kt)("p",null,"This action increases the wallet's security (",(0,i.kt)("inlineCode",{parentName:"p"},"m"),") by 1. It has the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m + 1")," keys are required to perform a lock level increase"),(0,i.kt)("li",{parentName:"ul"},"The effect is immediate -- there is no timelock"),(0,i.kt)("li",{parentName:"ul"},"The keys themselves don't change"),(0,i.kt)("li",{parentName:"ul"},"This action is secure because the new Merkle root has been pre-committed"),(0,i.kt)("li",{parentName:"ul"},"In running this action, the singleton is spent and a new copy is created, with a new Merkle root curried in. This new root is taken from a Merkle tree containing every possible combination of keys from the new ",(0,i.kt)("inlineCode",{parentName:"li"},"m")," down to 1"),(0,i.kt)("li",{parentName:"ul"},"This action automatically invalidates all outstanding rekey attempts because the Merkle root has changed in the new copy of the singleton"),(0,i.kt)("li",{parentName:"ul"},"This action does ",(0,i.kt)("em",{parentName:"li"},"not")," invalidate outstanding withdrawal attempts")),(0,i.kt)("h3",{id:"when-are-normal-rekey-slow-rekey-and-lock-level-increase-needed"},"When are Normal Rekey, Slow Rekey and Lock Level Increase needed?"),(0,i.kt)("p",null,"Normally, each of the keys will be in a Secure state. This means that the original owner still possesses the key, and no adversaries have gained access to it."),(0,i.kt)("p",null,"Keys have three other possible states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sniffed -- An adversary has gained access to the key. The owner still has a copy"),(0,i.kt)("li",{parentName:"ul"},"Stolen -- An adversary has gained access to the key. The owner no longer has a copy"),(0,i.kt)("li",{parentName:"ul"},"Lost -- The owner has lost the key. Nobody else has gained access to it")),(0,i.kt)("p",null,"If a sufficient number of keys are sniffed, stolen or lost, there are three potential catastrophic consequences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deadlocked -- The owner and adversary each attempt to rekey and claw back those attempts. Neither side obtains the funds until the other side gives up"),(0,i.kt)("li",{parentName:"ul"},"Drained -- An adversary is able to steal the funds"),(0,i.kt)("li",{parentName:"ul"},"Bricked -- Nobody is able to access the funds")),(0,i.kt)("p",null,"Any time one or more keys have been sniffed, stolen or lost, a rekey will be performed if possible."),(0,i.kt)("p",null,"The Merkle tree is needed to perform withdrawals, rekeys and lock level increases. Multiple copies of the tree will be kept in private locations. The assumption is that if any of the keys are sniffed, stolen or lost, the Merkle tree has been sniffed."),(0,i.kt)("p",null,"The following table lists the action/consequence, given the current value of ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," and the state of the keys:"),(0,i.kt)("br",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"th"},"m")),(0,i.kt)("th",{parentName:"tr",align:"left"},"Keys Sniffed"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Keys Stolen"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Keys Lost"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-2: normal rekey ",(0,i.kt)("br",null)," 3: lock level increase to 4, normal rekey ",(0,i.kt)("br",null)," 4: lock level increase to 5, normal rekey ",(0,i.kt)("br",null)," 5: deadlocked"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-2: normal rekey ",(0,i.kt)("br",null)," 3-5: drained"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-2: normal rekey ",(0,i.kt)("br",null)," 3-4: slow rekey ",(0,i.kt)("br",null)," 5: bricked")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-3: normal rekey ",(0,i.kt)("br",null)," 4: lock level increase to 5, normal rekey ",(0,i.kt)("br",null)," 5: deadlocked"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-1: normal rekey ",(0,i.kt)("br",null)," 2: slow rekey ",(0,i.kt)("br",null)," 3-5: drained"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-1: normal rekey ",(0,i.kt)("br",null)," 2-4: slow rekey ",(0,i.kt)("br",null)," 5: bricked")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-4: normal rekey ",(0,i.kt)("br",null)," 5: deadlocked"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0: normal rekey ",(0,i.kt)("br",null)," 1-2: slow rekey ",(0,i.kt)("br",null)," 3-5: drained"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0: normal rekey ",(0,i.kt)("br",null)," 1-4: slow rekey ",(0,i.kt)("br",null)," 5: bricked")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"The source code for the custody solution is in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/internal-custody",title:"Chia internal custody solution"},"internal-custody GitHub repository"),"."),(0,i.kt)("p",null,"There are two configuration files, one public (for observers) and one private."),(0,i.kt)("h3",{id:"public-configuration"},"Public Configuration"),(0,i.kt)("p",null,"An observer can track the prefarm's configuration information from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/internal-custody/blob/main/cic/drivers/prefarm_info.py#L8-L18",title:"public configuration information"},"prefarm_info.py"),", which contains the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"launcher_id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"bytes32")," -- This is pre-set; the user cannot change it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"puzzle_root"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"bytes32")," -- This is pre-set; the user cannot change it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawal_timelock"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint64")," -- For how long must the singleton remain unspent in order to initiate a withdrawal?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payment_clawback_period"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint64")," -- How much time do signers have to claw back a payment?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rekey_clawback_period"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint64")," -- How much time do signers have to claw back a rekey?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slow_rekey_timelock"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint64")," -- What is the penalty P that is applied to the singleton timelock when initiating a slow rekey?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rekey_increments"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint64")," -- What is the timelock increment for using fewer keys?")),(0,i.kt)("h3",{id:"private-configuration"},"Private Configuration"),(0,i.kt)("p",null,"The necessary information to spend the prefarm is located in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/internal-custody/blob/main/cic/drivers/puzzle_root_construction.py#L26-L34",title:"private configuration information"},"puzzle_root_construction.py"),". This information is considered private. However, if an attacker obtained this information, it would still be insufficient to spend the prefarm because valid signatures would be required. However, the Merkle tree would be considered sniffed, so a rekey would be required."),(0,i.kt)("p",null,"This code contains the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefarm_info"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PrefarmInfo")," -- The info from the public file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pubkey_list"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"List[G1Element]")," -- What are the set of pubkeys?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required_pubkeys"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint32")," -- How many keys are required for payments and standard rekeys (",(0,i.kt)("inlineCode",{parentName:"li"},"m")," initially is 3 for the prefarm)?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maximum_pubkeys"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint32")," -- What is the maximum lock level (",(0,i.kt)("inlineCode",{parentName:"li"},"n")," is 5 for the prefarm)?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minimum_pubkeys"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"uint32")," -- What is the minimum number of keys required for a slow rekey (1 for the prefarm, but could be higher if so desired)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next_root"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Optional[bytes32]")," -- What will the root key be in the event of a rekey?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter_proofs"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ProofType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"leaf_proofs"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ProofType"))))}k.isMDXComponent=!0},1846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/chia-custody-tool-5e6e2f18e8f98c0faaf11bdf5fea5971.png"}}]);