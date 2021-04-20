(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(118)),b={title:"\u4e8b\u4ef6"},i={unversionedId:"api/events",id:"api/events",isDocsHomePage:!1,title:"\u4e8b\u4ef6",description:"player \u5bf9\u8c61\u4f1a\u89e6\u53d1\u4e00\u4e9b\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 on\u3001once \u65b9\u6cd5\u8fdb\u884c\u76d1\u542c\uff0cemit \u65b9\u6cd5\u7528\u4e0e\u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6216\u5df2\u5b9a\u4e49\u4e8b\u4ef6\u3002NPlayer \u7684\u65f6\u95f4\u540d\u90fd\u662f\u5927\u9a7c\u5cf0\u7684\u5f62\u5f0f\u3002",source:"@site/docs/api/events.md",slug:"/api/events",permalink:"/docs/api/events",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/api/events.md",version:"current",sidebar:"api",previous:{title:"\u53c2\u6570",permalink:"/docs/api/config"},next:{title:"\u5c5e\u6027",permalink:"/docs/api/attrs"}},c=[{value:"\u4e8b\u4ef6\u5217\u8868",id:"\u4e8b\u4ef6\u5217\u8868",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"player")," \u5bf9\u8c61\u4f1a\u89e6\u53d1\u4e00\u4e9b\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"on"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"once")," \u65b9\u6cd5\u8fdb\u884c\u76d1\u542c\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"emit")," \u65b9\u6cd5\u7528\u4e0e\u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6216\u5df2\u5b9a\u4e49\u4e8b\u4ef6\u3002NPlayer \u7684\u65f6\u95f4\u540d\u90fd\u662f\u5927\u9a7c\u5cf0\u7684\u5f62\u5f0f\u3002"),Object(l.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Player \u7c7b\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"EVENT")," \u9759\u6001\u5c5e\u6027\u548c player \u5b9e\u4f8b\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"EVENT")," \u8bbf\u95ee\u8fd9\u4e9b\u5e38\u91cf\u4e8b\u4ef6\u540d\u5b57\u7b26\u4e32\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\n\nconsole.log(Player.EVENT.LOADING_SHOW)\nconsole.log((new Player()).EVENT.LOADING_SHOW)\nconsole.log('LoadingShow')\n// \u90fd\u662f\u8f93\u51fa\u76f8\u540c\u7684\u5b57\u7b26\u4e32\n")),Object(l.b)("h3",{id:"\u4e8b\u4ef6\u5217\u8868"},"\u4e8b\u4ef6\u5217\u8868"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EnterFullscreen"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u5168\u5c4f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ExitFullscreen"),Object(l.b)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5168\u5c4f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"WebEnterFullscreen"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u7f51\u9875\u5168\u5c4f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"WebExitFullscreen"),Object(l.b)("td",{parentName:"tr",align:null},"\u9000\u51fa\u7f51\u9875\u5168\u5c4f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LoadingShow"),Object(l.b)("td",{parentName:"tr",align:null},"\u89c6\u9891 loading \u663e\u793a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LoadingHide"),Object(l.b)("td",{parentName:"tr",align:null},"\u89c6\u9891 loading \u9690\u85cf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ControlShow"),Object(l.b)("td",{parentName:"tr",align:null},"\u63a7\u5236\u6761\u663e\u793a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ControlHide"),Object(l.b)("td",{parentName:"tr",align:null},"\u63a7\u5236\u6761\u9690\u85cf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"EnterPip"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u753b\u4e2d\u753b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ExitPip"),Object(l.b)("td",{parentName:"tr",align:null},"\u9000\u51fa\u753b\u4e2d\u753b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UpdateSize"),Object(l.b)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u64ad\u653e\u5668\u5c3a\u5bf8\uff0c\u6bd4\u5982 window resize \u4f1a\u89e6\u53d1\uff0c\u5f53\u5916\u90e8\u5c06\u64ad\u653e\u5668\u5143\u7d20\u5927\u5c0f\u53d8\u5316\u65f6\uff0c\u53ef\u4ee5\u624b\u52a8\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0c\u9632\u6b62\u64ad\u653e\u5668\u7ec4\u4ef6\u9519\u4f4d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"UpdateOptions"),Object(l.b)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u914d\u7f6e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AfterInit"),Object(l.b)("td",{parentName:"tr",align:null},"\u64ad\u653e\u5668\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mounted"),Object(l.b)("td",{parentName:"tr",align:null},"\u64ad\u653e\u5668\u6302\u8f7d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"BeforeDispose"),Object(l.b)("td",{parentName:"tr",align:null},"\u64ad\u653e\u5668\u9500\u6bc1\u524d\uff0c\u5f53\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"td"},"dispose")," \u65b9\u6cd5\u89e6\u53d1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OpenEdge"),Object(l.b)("td",{parentName:"tr",align:null},"\u5728 IE \u4e2d\u81ea\u52a8\u6253\u5f00 edge \u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee\u8be5\u7f51\u9875\u65f6\u89e6\u53d1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Play"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video play \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Pause"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video pause \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ended"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video ended \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Waiting"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video waiting \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Stalled"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video stalled \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Canplay"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video canplay \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LoadedMetadata"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video loadedmetadata \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Error"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video error \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Seeked"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video seeked \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"TimeUpdate"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video timeupdate \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"VolumeChange"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video volumechange \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"RateChange"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video ratechange \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DurationChange"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video durationchange \u4e8b\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Progress"),Object(l.b)("td",{parentName:"tr",align:null},"\u540c video progress \u4e8b\u4ef6")))))}o.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,O=d["".concat(b,".").concat(u)]||d[u]||m[u]||l;return n?r.a.createElement(O,i(i({ref:t},p),{},{components:n})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);