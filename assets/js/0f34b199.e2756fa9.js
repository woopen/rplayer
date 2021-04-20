(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,d=b["".concat(c,".").concat(s)]||b[s]||m[s]||a;return n?i.a.createElement(d,o(o({ref:t},p),{},{components:n})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(118)),c={title:"\u53f3\u952e\u83dc\u5355"},o={unversionedId:"contextmenu",id:"contextmenu",isDocsHomePage:!1,title:"\u53f3\u952e\u83dc\u5355",description:"\u53f3\u952e\u83dc\u5355\u662f\u5728\u64ad\u653e\u5668\u4e0a\u5355\u51fb\u53f3\u952e\u65f6\u51fa\u73b0\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u3002",source:"@site/docs/contextmenu.md",slug:"/contextmenu",permalink:"/docs/contextmenu",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/contextmenu.md",version:"current",sidebar:"docs",previous:{title:"\u5feb\u6377\u952e",permalink:"/docs/shortcut"},next:{title:"\u63a7\u5236\u6761",permalink:"/docs/control"}},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u81ea\u5b9a\u4e49\u83dc\u5355\u9879",id:"\u81ea\u5b9a\u4e49\u83dc\u5355\u9879",children:[]},{value:"\u83b7\u53d6\u548c\u6ce8\u518c\u83dc\u5355\u9879",id:"\u83b7\u53d6\u548c\u6ce8\u518c\u83dc\u5355\u9879",children:[{value:"registerContextMenuItem(item: ContextMenuItem, id?: string)",id:"registercontextmenuitemitem-contextmenuitem-id-string",children:[]},{value:"getContextMenuItem(id: string): ContextMenuItem | null",id:"getcontextmenuitemid-string-contextmenuitem--null",children:[]}]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u53f3\u952e\u83dc\u5355\u662f\u5728\u64ad\u653e\u5668\u4e0a\u5355\u51fb\u53f3\u952e\u65f6\u51fa\u73b0\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u3002"),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"contextMenus")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"contextMenuToggle")," \u6765\u63a7\u5236\u53f3\u952e\u83dc\u5355\uff0c\u5b83\u4eec\u7684\u9ed8\u8ba4\u503c\u5982\u4e0b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n  contextMenus: ['loop', 'pip', 'version'],\n  contextMenuToggle: true,\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"contextMenus")," \u9ed8\u8ba4\u6709\u4e09\u4e2a\u83dc\u5355\u9879\uff0c\u5206\u522b\u662f\u5faa\u73af\u64ad\u653e\u3001\u753b\u4e2d\u753b\u548c\u64ad\u653e\u5668\u7248\u672c\u3002\u53ef\u4ee5\u66f4\u6539\u5b83\u7684\u987a\u5e8f\u6765\u66f4\u6539 UI \u7684\u987a\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u79fb\u9664\u5b57\u7b26\u4e32\uff0c\u6765\u79fb\u9664\u83dc\u5355\u9879\uff0c\u5f53\u4f20\u5165\u4e00\u4e2a\u7a7a\u6570\u7ec4\u65f6\uff0c\u5355\u51fb\u53f3\u952e\u5c06\u4e0d\u4f1a\u51fa\u73b0\u53f3\u952e\u83dc\u5355\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"contextMenuToggle")," \u662f\u7528\u4e8e\u914d\u7f6e\u662f\u5426\u663e\u793a\u539f\u751f\u53f3\u952e\u83dc\u5355\uff0c\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5c06\u5728\u5076\u6570\u6b21\u5355\u51fb\u65f6\u663e\u793a\u6d4f\u89c8\u5668\u7684\u53f3\u952e\u83dc\u5355\uff0c\u800c\u4e0d\u662f\u64ad\u653e\u5668\u53f3\u952e\u83dc\u5355\u3002\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0c\u5c06\u59cb\u7ec8\u4e0d\u663e\u793a\u6d4f\u89c8\u5668\u53f3\u952e\u83dc\u5355\u3002"),Object(a.b)("h2",{id:"\u81ea\u5b9a\u4e49\u83dc\u5355\u9879"},"\u81ea\u5b9a\u4e49\u83dc\u5355\u9879"),Object(a.b)("p",null,"\u83dc\u5355\u9879\u5bf9\u8c61\u7b7e\u540d\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"interface ContextMenuItem {\n  id?: string; // \u83dc\u5355\u9879 id \u4e00\u822c\u53ea\u5728\u83dc\u5355\u9879\u4e2d\u624d\u4f1a\u4f7f\u7528\n  html?: string; // \u83dc\u5355\u6587\u5b57\uff0c\u53ef\u4ee5\u4f7f\u7528 html \u5b57\u7b26\u4e32\n  disabled?: boolean; // \u662f\u5426\u7981\u7528\n  invisible?: boolean; // \u662f\u5426\u53ef\u89c1\n  checked?: boolean; // \u662f\u5426\u662f\u9009\u4e2d\u72b6\u6001\n  init?: (player: Player, item: ContextMenuItem) => void; // \u521d\u59cb\u5316\u65f6\u4f1a\u8c03\u7528\u4e00\u6b21\n  show?: (player: Player, item: ContextMenuItem) => void; // \u6bcf\u6b21\u53f3\u952e\u83dc\u5355\u5c55\u793a\u65f6\u4f1a\u8c03\u7528\n  click?: (player: Player, item: ContextMenuItem) => void; // \u7528\u6237\u5355\u51fb\u8be5\u9879\u4f1a\u8c03\u7528\n}\n")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},"html")," \u5c5e\u6027\uff0c\u4f1a\u76f4\u63a5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"innerHTML")," \u8bbe\u7f6e\u5230 DOM\uff0c\u4e0d\u4f1a\u7ecf\u8fc7\u5b89\u5168\u5904\u7406\u3002\u9700\u8981\u81ea\u5df1\u4fdd\u969c\u5b83\u4e0d\u4f1a\u5305\u542b\u6076\u610f\u4ee3\u7801\u3002 "))),Object(a.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a\u753b\u4e2d\u753b\u83dc\u5355\u9879\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const MyPIP = {\n  html: '\u6211\u7684\u753b\u4e2d\u753b',\n  init() {\n    this.invisible = !('pictureInPictureEnabled' in document);\n    // \u521d\u59cb\u5316\u662f\u5224\u65ad\u6d4f\u89c8\u5668\u662f\u5426\u4e0d\u652f\u6301\uff0c\u4e0d\u652f\u6301\u5219\u9690\u85cf\u81ea\u5df1\n  },\n  click(player) {\n    if (player.video.readyState < 3) return; // \u89c6\u9891\u8fd8\u6ca1\u52a0\u8f7d\u6210\u529f\n    if ((document as any).pictureInPictureElement !== player.video) {\n      (player.video as any).requestPictureInPicture();\n    } else {\n      (document as any).exitPictureInPicture();\n    }\n  },\n}\n\nnew Player({\n  contextMenus: ['loop', 'pip', MyPIP, 'version'],\n})\n")),Object(a.b)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e86\u4e00\u4e2a\u81ea\u5df1\u7684\u753b\u4e2d\u753b\u9879\u76ee\uff0c\u7136\u540e\u628a\u5b83\u52a0\u5165\u5230\u81ea\u5e26\u753b\u4e2d\u753b\u6309\u94ae\u4e0b\u65b9\u3002"),Object(a.b)("h2",{id:"\u83b7\u53d6\u548c\u6ce8\u518c\u83dc\u5355\u9879"},"\u83b7\u53d6\u548c\u6ce8\u518c\u83dc\u5355\u9879"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"player")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u65b9\u6cd5\u6765\u6ce8\u518c\u548c\u83b7\u53d6\u83dc\u5355\u9879\u5bf9\u8c61\u3002"),Object(a.b)("h3",{id:"registercontextmenuitemitem-contextmenuitem-id-string"},"registerContextMenuItem(item: ContextMenuItem, id?: string)"),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u6ce8\u518c\u83dc\u5355\u9879\u76ee\uff0c\u4e00\u822c\u53ea\u4f1a\u5728\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4e2d\u4f1a\u4f7f\u7528\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(a.b)("a",{parentName:"p",href:"/docs/plugin"},"\u63d2\u4ef6\u7ae0\u8282"),"\u3002"),Object(a.b)("h3",{id:"getcontextmenuitemid-string-contextmenuitem--null"},"getContextMenuItem(id: string): ContextMenuItem | null"),Object(a.b)("p",null,"\u4f60\u53ef\u4ee5\u7528\u8be5\u65b9\u6cd5\u83b7\u53d6\u6307\u5b9a id \u7684\u83dc\u5355\u9879\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const player = new Player()\nconst pip = player.getContextMenuItem('pip')\n\nif (pip) {\n  pip.disabled = true\n  pip.html = '\u6211\u7684PIP'\n}\n")),Object(a.b)("p",null,"\u5bf9\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"contenxtmenu")," \u7684\u914d\u7f6e\u9879\uff0c\u4f60\u53ef\u4ee5\u968f\u4fbf\u4fee\u6539\u5b83\u7684\u5b57\u6bb5\uff0c\u5728\u4e0b\u4e00\u6b21\u5c55\u793a\u53f3\u952e\u83dc\u5355\u65f6\uff0c\u4f1a\u4f7f\u7528\u6700\u65b0\u7684\u503c\u3002"),Object(a.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("p",null,"\u70b9\u51fb\u4e0b\u9762\u94fe\u63a5\u67e5\u770b\u5bf9\u5e94\u53f3\u952e\u83dc\u5355\u4f8b\u5b50\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/examples/screenshot"},"\u89c6\u9891\u622a\u56fe"))))}u.isMDXComponent=!0}}]);