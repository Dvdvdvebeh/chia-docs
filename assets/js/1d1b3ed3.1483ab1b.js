"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,m=c["".concat(d,".").concat(u)]||c[u]||f[u]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),d=a(1980),s=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function f(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=f(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,s]=m({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=d??c;return u({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var g=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:o,selectValue:d,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),f=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==o&&(c(t),d(n))},u=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:f},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},9407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const l={sidebar_label:"CAT Admin",title:"CAT Admin CLI",slug:"/cat-admin-cli"},i=void 0,o={unversionedId:"cli-reference/cat-admin",id:"cli-reference/cat-admin",title:"CAT Admin CLI",description:"Intro",source:"@site/docs/cli-reference/cat-admin.md",sourceDirName:"cli-reference",slug:"/cat-admin-cli",permalink:"/cat-admin-cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cli-reference/cat-admin.md",tags:[],version:"current",frontMatter:{sidebar_label:"CAT Admin",title:"CAT Admin CLI",slug:"/cat-admin-cli"},sidebar:"tutorialSidebar",previous:{title:"Wallet",permalink:"/wallet-cli"},next:{title:"Clawback",permalink:"/clawback-cli"}},d={},s=[{value:"Intro",id:"intro",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>cats</code>",id:"cats",level:3},{value:"<code>secure_the_bag</code>",id:"secure_the_bag",level:3},{value:"<code>unwind_the_bag</code>",id:"unwind_the_bag",level:3}],p={toc:s},c="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This document is a reference guide for Chia's CAT Admin Tool, located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/CAT-admin-tool"},"CAT-admin-tool")," repository."),(0,r.kt)("p",null,"To set up your environment (including installing this tool), follow our ",(0,r.kt)("a",{parentName:"p",href:"/guides/cat-creation-tutorial"},"CAT Creation Tutorial"),"."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"cats"},(0,r.kt)("inlineCode",{parentName:"h3"},"cats")),(0,r.kt)("p",null,"Functionality: Create and administer Chia Asset Tokens (CATs)"),(0,r.kt)("p",null,"Usage: cats ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--tail"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The TAIL program to launch this CAT with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--curry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An argument to curry into the TAIL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--solution"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The solution to the TAIL program ","[default: ()]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-t"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--send-to"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address these CATs will appear at once they are issued")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount to issue in mojos (regular XCH will be used to fund this)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The fees for the transaction, in mojos ","[default: 0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-d"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--authorized-provider"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A trusted DID that can issue VCs that are allowed to trade the CAT. Specifying this option will make the CAT a CR (credential restricted) CAT. Requires specifying either ",(0,r.kt)("inlineCode",{parentName:"td"},"--proofs-checker")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"--cr-flag"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-r"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--proofs-checker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The program that checks the proofs of a VC for a CR-CAT. Specifying this option requires a value for ",(0,r.kt)("inlineCode",{parentName:"td"},"--authorized-providers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-v"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--cr-flag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify a list of flags to check a VC for in order to authorize this CR-CAT. Specifying this option requires a value for ",(0,r.kt)("inlineCode",{parentName:"td"},"--authorized-providers"),". Cannot be used if a custom ",(0,r.kt)("inlineCode",{parentName:"td"},"--proofs-checker")," is specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet fingerprint to use as funds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-sig"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--signature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A signature to aggregate with the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-as"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--spend"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An additional spend to aggregate with the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--as-bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output the spend bundle as a sequence of bytes instead of JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-sc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--select-coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stop the process once a coin from the wallet has been selected and return the coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-q"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--quiet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Quiet mode will not ask to push transaction to the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--push"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Automatically push transaction to the network in quiet mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--root-path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The root folder where the config lies ","[default: ~/.chia/mainnet]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The RPC port the wallet service is running on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example 1 - select a coin from the wallet with a value of at least 1 XCH (1 trillion mojos)"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to txch1jk4r06xsj0fnwqk57322yjqzkdyx7kh8h8kvxus3l68tjnkf05aqd9uevs --amount 1000000000000 --as-bytes --select-coin\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "amount": 1999731499999,\n    "parent_coin_info": "0x3179dd9b38f7c4e4de532e346cfefb33affda1f2860ed68aeb0e70c38a5c9f6e",\n    "puzzle_hash": "0x74fcdd0e27ead17559cf9eaf791c62a6517c0c4fcf5ac3a6f014857571fc7608"\n}\nName: 345dd430bcd7a413f8feed25c382d83855edd6ccceb41d1dbc293ca8e49e6b2d\n')),(0,r.kt)("p",null,'The "parent_coin_info", "puzzle_hash", and "amount" values are hashed together to create the coin\'s "Name".')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example 2 - Push a transaction to the network, currying an inner puzzle hash into the TAIL"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to txch19k6cl5syzvxgkgulr7m49v2r57yh0aanm23hrffgd89j4nj3ywhqxadyqr --amount 1000000000000 --as-bytes --curry 0x8f4dbff8df3f6aa9303eb47625cf8f09d885f1ad6a2d440582cb6bd45f53d2e8\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The transaction has been created, would you like to push it to the network? (Y/N)y\nSuccessfully pushed the transaction to the network\nAsset ID: 9c39398afb1d7ffa03a589f60e5e39f2ae4572ff7048e689fe3128c339581b2d\nEve Coin ID: 9fe3e95308949cb9c49333f829922dc7118cd3e2fdf365cde669b47852ce3a7b\n")),(0,r.kt)("p",null,"After pushing the transaction, the new ID and Eve Coin (singleton parent coin) will be shown.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example 3 - Mint a new CR-CAT"),(0,r.kt)("p",null,"First, select a coin to use for the minting. Flags included in this example (CR-specific flags are in ",(0,r.kt)("strong",{parentName:"p"},"bold"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tail"),": The tail to use; in this case we'll use a single-issuance TAIL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--send-to"),": The address to send the CR-CATs to upon minting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"--authorized-provider"),": The DID that is authorized to issue VCs containing the required proof(s) for this CAT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"--cr-flag"),": The proof(s) required for owning this CR-CAT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--amount"),": The number of mojos for this issuance (1 million mojos = 1 thousand CR-CATs)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-m"),": The transaction fee, in mojos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--as-bytes"),": Use bytes instead of JSON"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--select-coin"),": Instead of minting the CAT, just select a coin to use for the isuance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to txch1ek6ln2ejdsec6l734x8tggk9j5sepl8nfqjer5yt2dr905f04prqmcjcc5 --authorized-provider did:chia:1x23lnyd2xjefnfly075ngk79duf0yxna35cp86mgnnp4t33senfs4cah7u --cr-flag "test_proof1" --amount 1000000 -m 1000 --as-bytes --select-coin\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "amount": 999694993543,\n    "parent_coin_info": "0x3ad9ec3ab9039047106476b4b23d05c46a7f02a6114c4eaf82792c3229e74416",\n    "puzzle_hash": "0xa8180f3997eeda1804508c1f4dbe55ef17808fe2df970bba408807b10e7dd9ba"\n}\nName: c5519ac8ef55043b23bef45b1326d445f2c4af579f13dc0cdec10335ccb0a809\n')),(0,r.kt)("p",null,"In the above repsonse, ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," is the ID of the coin to be used for the minting. Next, run the same command again, but remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"--select-coin")," flag and add ",(0,r.kt)("inlineCode",{parentName:"p"},"--curry 0x<coin ID>")," (the ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," is required and important here):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to txch1ek6ln2ejdsec6l734x8tggk9j5sepl8nfqjer5yt2dr905f04prqmcjcc5 --authorized-provider did:chia:1x23lnyd2xjefnfly075ngk79duf0yxna35cp86mgnnp4t33senfs4cah7u --cr-flag "test_proof1" --amount 1000000 -m 1000 --as-bytes --curry 0xc5519ac8ef55043b23bef45b1326d445f2c4af579f13dc0cdec10335ccb0a809\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Successfully pushed the transaction to the network\nAsset ID: 262a2c2cbb09414652006c4da139a186b3a110bb57cd5d76b6785e4811f1c77c\nEve Coin ID: 692a4f63c56815a33510088a255d695aea472d0f03bb9f0d5cdd5c91a82821f2\n")),(0,r.kt)("p",null,"Just as with standard CATs, the CR-CAT has been minted and sent to its destination address. ",(0,r.kt)("inlineCode",{parentName:"p"},"Asset ID")," can now be added in the destination wallet."),(0,r.kt)("p",null,"In this case, the destination wallet is the holder of a VC with the proof required to hold this CR-CAT. To verify this, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"vcs get")," CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet vcs get\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Proofs:\n- f063e22557705b14425b8fca60018796b4364eb6354f45d0b99431a71d3043e5\n  - test_proof1\n  - test_proof2\n\nLauncher ID: 1e3cd9da1d4545700c8c26fb7ba452cf28b1c7d78b5fa7434307d32a435718c8\nCoin ID: addf46fac52aac510b31a7dc025528411b5013d89c81174f4726b63a5dc0d395\nInner Address: txch166pzqd55p2emp9sqaflvyc8x2s4qn4eexrxgrlfwf8khuefp5fqswe84mu\nProof Hash: f063e22557705b14425b8fca60018796b4364eb6354f45d0b99431a71d3043e5\n")),(0,r.kt)("p",null,"This VC contains the proof that was added to the CR-CAT (",(0,r.kt)("inlineCode",{parentName:"p"},"test_proof1"),"). Once the CR-CAT has been added to this Chia wallet, it will be displayed as type ",(0,r.kt)("inlineCode",{parentName:"p"},"CRCAT"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CAT 262a2c2cbb094146...:\n   -Total Balance:                      1000.0  (1000000 mojo)\n   -Balance Pending VC Approval:        0.0  (0 mojo)\n   -Pending Total Balance:              1000.0  (1000000 mojo)\n   -Spendable:                          1000.0  (1000000 mojo)\n   -Type:                               CRCAT\n   -Asset ID:                           262a2c2cbb09414652006c4da139a186b3a110bb57cd5d76b6785e4811f1c77c\n   -Wallet ID:                          5\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"secure_the_bag"},(0,r.kt)("inlineCode",{parentName:"h3"},"secure_the_bag")),(0,r.kt)("p",null,"Functionality: Create a tree of coins from a .csv file containing puzzlehash:amount pairs. Useful for setting up CAT airdrops."),(0,r.kt)("p",null,"Usage: secure_the_bag ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--curry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An argument to curry into the TAIL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount to issue in mojos (regular XCH will be used to fund this)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-stbtp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--secure-the-bag-targets-path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to CSV file containing targets of secure the bag (inner puzzle hash + amount). The total value of the coins in this file must match the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," flag. If they don't match, an error will be thrown."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-lw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--leaf-width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure the bag leaf width ","[default: 100]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-pr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--prefix"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address prefix ","[default: xch]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NONE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create a coin tree from a CSV file, currying a coin ID that was obtained from the cats command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"secure_the_bag --tail .\\reference_tails\\genesis_by_coin_id.clsp.hex --amount 1000000000000 --secure-the-bag-targets-path C:\\Users\\User\\Downloads\\spacebucks.csv --prefix txch --curry 0x8f4dbff8df3f6aa9303eb47625cf8f09d885f1ad6a2d440582cb6bd45f53d2e8\n")),(0,r.kt)("p",null,"The response will be a list of coins created in the tree. The command's progress will also be displayed. The last two lines of the output will be the root puzzle hash and address of the tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\nSecure the bag root puzzle hash: 17060adf6856d2904c4fe90c9690b710cf758aee5968718e2fbfd12f7b9d817f\nSecure the bag root address: txch19k6cl5syzvxgkgulr7m49v2r57yh0aanm23hrffgd89j4nj3ywhqxadyqr\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unwind_the_bag"},(0,r.kt)("inlineCode",{parentName:"h3"},"unwind_the_bag")),(0,r.kt)("p",null,"Functionality: Given a coin tree, airdrop CATs to a set of pre-committed puzzle hashes obtained from a .csv file. Requires a coin tree obtained as a result of running the ",(0,r.kt)("inlineCode",{parentName:"p"},"secure_the_bag")," command."),(0,r.kt)("p",null,"Usage: secure_the_bag ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-ecid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--eve-coin-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of coin that was spent to create secured bag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-th"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--tail-hash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TAIL hash / Asset ID of CAT to unwind from secured bag of CATs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-stbtp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--secure-the-bag-targets-path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to CSV file containing targets of secure the bag (inner puzzle hash + amount)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-utph,"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--unwind-target-puzzle-hash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Puzzle hash of target to unwind from secured bag. This is a useful option for testing a single unwind")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-wi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--wallet-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet id to use (typically ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet fingerprint to use as funds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-uf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--unwind-fee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fee paid for each unwind spend. Enough mojos must be available to cover all spends ","[default: 500000]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-lw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--leaf-width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure the bag leaf width (number of tokens to unwind in one block) ","[default: 100]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NONE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Unwind a bag that has been secured with the above example, using a puzzle hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unwind_the_bag --eve-coin-id 9fe3e95308949cb9c49333f829922dc7118cd3e2fdf365cde669b47852ce3a7b --tail-hash 9c39398afb1d7ffa03a589f60e5e39f2ae4572ff7048e689fe3128c339581b2d --secure-the-bag-targets-path C:\\Users\\User\\Downloads\\spacebucks.csv --unwind-fee 500000 --wallet-id 1 --unwind-target-puzzle-hash af85d83ff01ec4b6f37d85d038e68736adc6cc9bb2c48c9d0973605448f73f3f\n")),(0,r.kt)("p",null,"This example will airdrop the appropriate number of coins to the given puzzle hash. You will need to confirm each coin as it is dropped.")))}f.isMDXComponent=!0}}]);