import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import rr from 'entities/lib/decode.js';
import lr from 'source-map-js';
import { h as createHooks, i as getContext, c as createError, k as toRouteMatcher, l as createRouter, m as defu, n as hasProtocol, o as joinURL, q as withQuery, s as sanitizeStatusCode, r as isScriptProtocol, v as executeAsync } from '../_/nitro.mjs';
import we$1 from 'node:stream';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

var e$7={exports:{}};

var r$b={};

var o$f={};

var r$a={};

var e$6=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{};

var r$9={};

var K$1;function at$1(){if(K$1)return r$9;K$1=1;/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/Object.defineProperty(r$9,"__esModule",{value:true});/*! #__NO_SIDE_EFFECTS__ */function p(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Y={},v=[],q=()=>{},$=()=>false,W=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),X=e=>e.startsWith("onUpdate:"),J=Object.assign,Z=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);},Q=Object.prototype.hasOwnProperty,ee=(e,t)=>Q.call(e,t),f=Array.isArray,k=e=>u(e)==="[object Map]",M=e=>u(e)==="[object Set]",S=e=>u(e)==="[object Date]",te=e=>u(e)==="[object RegExp]",g=e=>typeof e=="function",m=e=>typeof e=="string",h=e=>typeof e=="symbol",d=e=>e!==null&&typeof e=="object",ne=e=>(d(e)||g(e))&&g(e.then)&&g(e.catch),A=Object.prototype.toString,u=e=>A.call(e),oe=e=>u(e).slice(8,-1),R=e=>u(e)==="[object Object]",re=e=>m(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ie=p(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),se=p("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),y=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ae=/-(\w)/g,le=y(e=>e.replace(ae,(t,n)=>n?n.toUpperCase():"")),ce=/\B([A-Z])/g,L=y(e=>e.replace(ce,"-$1").toLowerCase()),C=y(e=>e.charAt(0).toUpperCase()+e.slice(1)),pe=y(e=>e?`on${C(e)}`:""),me=(e,t)=>!Object.is(e,t),de=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t);},fe=(e,t,n,r=false)=>{Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:r,value:n});},ue=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ge=e=>{const t=m(e)?Number(e):NaN;return isNaN(t)?e:t};let P;const he=()=>P||(P=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof e$6<"u"?e$6:{}),ye=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function Ee(e){return ye.test(e)?`__props.${e}`:`__props[${JSON.stringify(e)}]`}function Te(e,t){return e+JSON.stringify(t,(n,r)=>typeof r=="function"?r.toString():r)}const be={TEXT:1,1:"TEXT",CLASS:2,2:"CLASS",STYLE:4,4:"STYLE",PROPS:8,8:"PROPS",FULL_PROPS:16,16:"FULL_PROPS",NEED_HYDRATION:32,32:"NEED_HYDRATION",STABLE_FRAGMENT:64,64:"STABLE_FRAGMENT",KEYED_FRAGMENT:128,128:"KEYED_FRAGMENT",UNKEYED_FRAGMENT:256,256:"UNKEYED_FRAGMENT",NEED_PATCH:512,512:"NEED_PATCH",DYNAMIC_SLOTS:1024,1024:"DYNAMIC_SLOTS",DEV_ROOT_FRAGMENT:2048,2048:"DEV_ROOT_FRAGMENT",CACHED:-1,"-1":"CACHED",BAIL:-2,"-2":"BAIL"},Se={1:"TEXT",2:"CLASS",4:"STYLE",8:"PROPS",16:"FULL_PROPS",32:"NEED_HYDRATION",64:"STABLE_FRAGMENT",128:"KEYED_FRAGMENT",256:"UNKEYED_FRAGMENT",512:"NEED_PATCH",1024:"DYNAMIC_SLOTS",2048:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},Ae={ELEMENT:1,1:"ELEMENT",FUNCTIONAL_COMPONENT:2,2:"FUNCTIONAL_COMPONENT",STATEFUL_COMPONENT:4,4:"STATEFUL_COMPONENT",TEXT_CHILDREN:8,8:"TEXT_CHILDREN",ARRAY_CHILDREN:16,16:"ARRAY_CHILDREN",SLOTS_CHILDREN:32,32:"SLOTS_CHILDREN",TELEPORT:64,64:"TELEPORT",SUSPENSE:128,128:"SUSPENSE",COMPONENT_SHOULD_KEEP_ALIVE:256,256:"COMPONENT_SHOULD_KEEP_ALIVE",COMPONENT_KEPT_ALIVE:512,512:"COMPONENT_KEPT_ALIVE",COMPONENT:6,6:"COMPONENT"},Ne={STABLE:1,1:"STABLE",DYNAMIC:2,2:"DYNAMIC",FORWARDED:3,3:"FORWARDED"},Oe={1:"STABLE",2:"DYNAMIC",3:"FORWARDED"},w=p("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol"),_e=w,D=2;function xe(e,t=0,n=e.length){if(t=Math.max(0,Math.min(t,e.length)),n=Math.max(0,Math.min(n,e.length)),t>n)return "";let r=e.split(/(\r?\n)/);const s=r.filter((c,a)=>a%2===1);r=r.filter((c,a)=>a%2===0);let i=0;const l=[];for(let c=0;c<r.length;c++)if(i+=r[c].length+(s[c]&&s[c].length||0),i>=t){for(let a=c-D;a<=c+D||n>i;a++){if(a<0||a>=r.length)continue;const G=a+1;l.push(`${G}${" ".repeat(Math.max(3-String(G).length,0))}|  ${r[a]}`);const T=r[a].length,H=s[a]&&s[a].length||0;if(a===c){const b=t-(i-(T+H)),ot=Math.max(1,n>i?T-b:n-t);l.push("   |  "+" ".repeat(b)+"^".repeat(ot));}else if(a>c){if(n>i){const b=Math.max(Math.min(n-i,T),1);l.push("   |  "+"^".repeat(b));}i+=T+H;}}break}return l.join(`
`)}function N(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=m(r)?F(r):N(r);if(s)for(const i in s)t[i]=s[i];}return t}else if(m(e)||d(e))return e}const ke=/;(?![^(]*\))/g,Me=/:([^]+)/,Re=/\/\*[^]*?\*\//g;function F(e){const t={};return e.replace(Re,"").split(ke).forEach(n=>{if(n){const r=n.split(Me);r.length>1&&(t[r[0].trim()]=r[1].trim());}}),t}function Le(e){if(!e)return "";if(m(e))return e;let t="";for(const n in e){const r=e[n];if(m(r)||typeof r=="number"){const s=n.startsWith("--")?n:L(n);t+=`${s}:${r};`;}}return t}function O(e){let t="";if(m(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const r=O(e[n]);r&&(t+=r+" ");}else if(d(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ce(e){if(!e)return null;let{class:t,style:n}=e;return t&&!m(t)&&(e.class=O(t)),n&&(e.style=N(n)),e}const Pe="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",we="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",De="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Fe="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Ie=p(Pe),je=p(we),Ue=p(De),ze=p(Fe),I="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Be=p(I),Ge=p(I+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function He(e){return !!e||e===""}const Ve=/[>/="'\u0009\u000a\u000c\u0020]/,_={};function Ke(e){if(_.hasOwnProperty(e))return _[e];const t=Ve.test(e);return t&&console.error(`unsafe attribute name: ${e}`),_[e]=!t}const Ye={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},ve=p("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),qe=p("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"),$e=p("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");function We(e){if(e==null)return  false;const t=typeof e;return t==="string"||t==="number"||t==="boolean"}const Xe=/["'&<>]/;function Je(e){const t=""+e,n=Xe.exec(t);if(!n)return t;let r="",s,i,l=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#39;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}l!==i&&(r+=t.slice(l,i)),l=i+1,r+=s;}return l!==i?r+t.slice(l,i):r}const Ze=/^-?>|<!--|-->|--!>|<!-$/g;function Qe(e){return e.replace(Ze,"")}const j=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function et(e,t){return e.replace(j,n=>t?n==='"'?'\\\\\\"':`\\\\${n}`:`\\${n}`)}function tt(e,t){if(e.length!==t.length)return  false;let n=true;for(let r=0;n&&r<e.length;r++)n=E(e[r],t[r]);return n}function E(e,t){if(e===t)return  true;let n=S(e),r=S(t);if(n||r)return n&&r?e.getTime()===t.getTime():false;if(n=h(e),r=h(t),n||r)return e===t;if(n=f(e),r=f(t),n||r)return n&&r?tt(e,t):false;if(n=d(e),r=d(t),n||r){if(!n||!r)return  false;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return  false;for(const l in e){const c=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(c&&!a||!c&&a||!E(e[l],t[l]))return  false}}return String(e)===String(t)}function nt(e,t){return e.findIndex(n=>E(n,t))}const U=e=>!!(e&&e.__v_isRef===true),z=e=>m(e)?e:e==null?"":f(e)||d(e)&&(e.toString===A||!g(e.toString))?U(e)?z(e.value):JSON.stringify(e,B,2):String(e),B=(e,t)=>U(t)?B(e,t.value):k(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[x(r,i)+" =>"]=s,n),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>x(n))}:h(t)?x(t):d(t)&&!f(t)&&!R(t)?String(t):t,x=(e,t="")=>{var n;return h(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};return r$9.EMPTY_ARR=v,r$9.EMPTY_OBJ=Y,r$9.NO=$,r$9.NOOP=q,r$9.PatchFlagNames=Se,r$9.PatchFlags=be,r$9.ShapeFlags=Ae,r$9.SlotFlags=Ne,r$9.camelize=le,r$9.capitalize=C,r$9.cssVarNameEscapeSymbolsRE=j,r$9.def=fe,r$9.escapeHtml=Je,r$9.escapeHtmlComment=Qe,r$9.extend=J,r$9.genCacheKey=Te,r$9.genPropsAccessExp=Ee,r$9.generateCodeFrame=xe,r$9.getEscapedCssVarName=et,r$9.getGlobalThis=he,r$9.hasChanged=me,r$9.hasOwn=ee,r$9.hyphenate=L,r$9.includeBooleanAttr=He,r$9.invokeArrayFns=de,r$9.isArray=f,r$9.isBooleanAttr=Ge,r$9.isBuiltInDirective=se,r$9.isDate=S,r$9.isFunction=g,r$9.isGloballyAllowed=w,r$9.isGloballyWhitelisted=_e,r$9.isHTMLTag=Ie,r$9.isIntegerKey=re,r$9.isKnownHtmlAttr=ve,r$9.isKnownMathMLAttr=$e,r$9.isKnownSvgAttr=qe,r$9.isMap=k,r$9.isMathMLTag=Ue,r$9.isModelListener=X,r$9.isObject=d,r$9.isOn=W,r$9.isPlainObject=R,r$9.isPromise=ne,r$9.isRegExp=te,r$9.isRenderableAttrValue=We,r$9.isReservedProp=ie,r$9.isSSRSafeAttrName=Ke,r$9.isSVGTag=je,r$9.isSet=M,r$9.isSpecialBooleanAttr=Be,r$9.isString=m,r$9.isSymbol=h,r$9.isVoidTag=ze,r$9.looseEqual=E,r$9.looseIndexOf=nt,r$9.looseToNumber=ue,r$9.makeMap=p,r$9.normalizeClass=O,r$9.normalizeProps=Ce,r$9.normalizeStyle=N,r$9.objectToString=A,r$9.parseStringStyle=F,r$9.propsToAttrMap=Ye,r$9.remove=Z,r$9.slotFlagsText=Oe,r$9.stringifyStyle=Le,r$9.toDisplayString=z,r$9.toHandlerKey=pe,r$9.toNumber=ge,r$9.toRawType=oe,r$9.toTypeString=u,r$9}

var lib = {};

Object.defineProperty(lib, '__esModule', {
  value: true
});
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
class Position {
  constructor(line, col, index) {
    this.line = void 0;
    this.column = void 0;
    this.index = void 0;
    this.line = line;
    this.column = col;
    this.index = index;
  }
}
class SourceLocation {
  constructor(start, end) {
    this.start = void 0;
    this.end = void 0;
    this.filename = void 0;
    this.identifierName = void 0;
    this.start = start;
    this.end = end;
  }
}
function createPositionWithColumnOffset(position, columnOffset) {
  const {
    line,
    column,
    index
  } = position;
  return new Position(line, column + columnOffset, index + columnOffset);
}
const code = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
var ModuleErrors = {
  ImportMetaOutsideModule: {
    message: `globalThis._importMeta_ may appear only with 'sourceType: "module"'`,
    code
  },
  ImportOutsideModule: {
    message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
    code
  }
};
const NodeDescriptions = {
  ArrayPattern: "array destructuring pattern",
  AssignmentExpression: "assignment expression",
  AssignmentPattern: "assignment expression",
  ArrowFunctionExpression: "arrow function expression",
  ConditionalExpression: "conditional expression",
  CatchClause: "catch clause",
  ForOfStatement: "for-of statement",
  ForInStatement: "for-in statement",
  ForStatement: "for-loop",
  FormalParameters: "function parameter list",
  Identifier: "identifier",
  ImportSpecifier: "import specifier",
  ImportDefaultSpecifier: "import default specifier",
  ImportNamespaceSpecifier: "import namespace specifier",
  ObjectPattern: "object destructuring pattern",
  ParenthesizedExpression: "parenthesized expression",
  RestElement: "rest element",
  UpdateExpression: {
    true: "prefix operation",
    false: "postfix operation"
  },
  VariableDeclarator: "variable declaration",
  YieldExpression: "yield expression"
};
const toNodeDescription = node => node.type === "UpdateExpression" ? NodeDescriptions.UpdateExpression[`${node.prefix}`] : NodeDescriptions[node.type];
var StandardErrors = {
  AccessorIsGenerator: ({
    kind
  }) => `A ${kind}ter cannot be a generator.`,
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
  AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
  AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
  AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
  BadGetterArity: "A 'get' accessor must not have any formal parameters.",
  BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
  BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
  ConstructorClassField: "Classes may not have a field named 'constructor'.",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
  ConstructorIsAccessor: "Class constructor may not be an accessor.",
  ConstructorIsAsync: "Constructor can't be an async function.",
  ConstructorIsGenerator: "Constructor can't be a generator.",
  DeclarationMissingInitializer: ({
    kind
  }) => `Missing initializer in ${kind} declaration.`,
  DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
  DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
  DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
  DecoratorStaticBlock: "Decorators can't be used with a static block.",
  DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
  DeletePrivateField: "Deleting a private field is not allowed.",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class.",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: ({
    exportName
  }) => `\`${exportName}\` has already been exported. Exported identifiers must be unique.`,
  DuplicateProto: "Redefinition of __proto__ property.",
  DuplicateRegExpFlags: "Duplicate regular expression flag.",
  DynamicImportPhaseRequiresImportExpressions: ({
    phase
  }) => `'import.${phase}(...)' can only be parsed when using the 'createImportExpressions' option.`,
  ElementAfterRest: "Rest element must be last element.",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
  ExportBindingIsString: ({
    localName,
    exportName
  }) => `A string literal cannot be used as an exported binding without \`from\`.\n- Did you mean \`export { '${localName}' as '${exportName}' } from 'some-module'\`?`,
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
  ForInOfLoopInitializer: ({
    type
  }) => `'${type === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
  ForInUsing: "For-in loop may not start with 'using' declaration.",
  ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
  ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
  IllegalBreakContinue: ({
    type
  }) => `Unsyntactic ${type === "BreakStatement" ? "break" : "continue"}.`,
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
  IllegalReturn: "'return' outside of function.",
  ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",
  ImportBindingIsString: ({
    importName
  }) => `A string literal cannot be used as an imported binding.\n- Did you mean \`import { "${importName}" as foo }\`?`,
  ImportCallArity: `\`import()\` requires exactly one or two arguments.`,
  ImportCallNotNewExpression: "Cannot use new with import(...).",
  ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
  ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
  ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
  ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
  IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
  InvalidBigIntLiteral: "Invalid BigIntLiteral.",
  InvalidCodePoint: "Code point out of bounds.",
  InvalidCoverInitializedName: "Invalid shorthand property initializer.",
  InvalidDecimal: "Invalid decimal.",
  InvalidDigit: ({
    radix
  }) => `Expected number in radix ${radix}.`,
  InvalidEscapeSequence: "Bad character escape sequence.",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
  InvalidEscapedReservedWord: ({
    reservedWord
  }) => `Escape sequence in keyword ${reservedWord}.`,
  InvalidIdentifier: ({
    identifierName
  }) => `Invalid identifier ${identifierName}.`,
  InvalidLhs: ({
    ancestor
  }) => `Invalid left-hand side in ${toNodeDescription(ancestor)}.`,
  InvalidLhsBinding: ({
    ancestor
  }) => `Binding invalid left-hand side in ${toNodeDescription(ancestor)}.`,
  InvalidLhsOptionalChaining: ({
    ancestor
  }) => `Invalid optional chaining in the left-hand side of ${toNodeDescription(ancestor)}.`,
  InvalidNumber: "Invalid number.",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
  InvalidOrUnexpectedToken: ({
    unexpected
  }) => `Unexpected character '${unexpected}'.`,
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
  InvalidPrivateFieldResolution: ({
    identifierName
  }) => `Private name #${identifierName} is not defined.`,
  InvalidPropertyBindingPattern: "Binding member expression.",
  InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
  LabelRedeclaration: ({
    labelName
  }) => `Label '${labelName}' is already declared.`,
  LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
  MalformedRegExpFlags: "Invalid regular expression flag.",
  MissingClassName: "A class name is required.",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingSemicolon: "Missing semicolon.",
  MissingPlugin: ({
    missingPlugin
  }) => `This experimental syntax requires enabling the parser plugin: ${missingPlugin.map(name => JSON.stringify(name)).join(", ")}.`,
  MissingOneOfPlugins: ({
    missingPlugin
  }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${missingPlugin.map(name => JSON.stringify(name)).join(", ")}.`,
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
  ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
  ModuleAttributesWithDuplicateKeys: ({
    key
  }) => `Duplicate key "${key}" is not allowed in module attributes.`,
  ModuleExportNameHasLoneSurrogate: ({
    surrogateCharCode
  }) => `An export name cannot include a lone surrogate, found '\\u${surrogateCharCode.toString(16)}'.`,
  ModuleExportUndefined: ({
    localName
  }) => `Export '${localName}' is not defined.`,
  MultipleDefaultsInSwitch: "Multiple default clauses.",
  NewlineAfterThrow: "Illegal newline after throw.",
  NoCatchOrFinally: "Missing catch or finally clause.",
  NumberIdentifier: "Identifier directly after number.",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
  ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
  OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
  ParamDupe: "Argument name clash.",
  PatternHasAccessor: "Object pattern can't contain getter or setter.",
  PatternHasMethod: "Object pattern can't contain methods.",
  PrivateInExpectedIn: ({
    identifierName
  }) => `Private names are only allowed in property accesses (\`obj.#${identifierName}\`) or in \`in\` expressions (\`#${identifierName} in obj\`).`,
  PrivateNameRedeclaration: ({
    identifierName
  }) => `Duplicate private name #${identifierName}.`,
  RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  RecordNoProto: "'__proto__' is not allowed in Record expressions.",
  RestTrailingComma: "Unexpected trailing comma after rest element.",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
  SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
  SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
  StaticPrototype: "Classes may not have static property named prototype.",
  SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super.",
  TrailingDecorator: "Decorators must be attached to a class element.",
  TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
  UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
  UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
  UnexpectedKeyword: ({
    keyword
  }) => `Unexpected keyword '${keyword}'.`,
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
  UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
  UnexpectedPrivateField: "Unexpected private name.",
  UnexpectedReservedWord: ({
    reservedWord
  }) => `Unexpected reserved word '${reservedWord}'.`,
  UnexpectedSuper: "'super' is only allowed in object methods and classes.",
  UnexpectedToken: ({
    expected,
    unexpected
  }) => `Unexpected token${unexpected ? ` '${unexpected}'.` : ""}${expected ? `, expected "${expected}"` : ""}`,
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
  UnsupportedMetaProperty: ({
    target,
    onlyValidPropertyName
  }) => `The only valid meta property for ${target} is ${target}.${onlyValidPropertyName}.`,
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
  UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
  UnterminatedComment: "Unterminated comment.",
  UnterminatedRegExp: "Unterminated regular expression.",
  UnterminatedString: "Unterminated string constant.",
  UnterminatedTemplate: "Unterminated template.",
  UsingDeclarationExport: "Using declaration cannot be exported.",
  UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
  VarRedeclaration: ({
    identifierName
  }) => `Identifier '${identifierName}' has already been declared.`,
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
  YieldInParameter: "Yield expression is not allowed in formal parameters.",
  YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
};
var StrictModeErrors = {
  StrictDelete: "Deleting local variable in strict mode.",
  StrictEvalArguments: ({
    referenceName
  }) => `Assigning to '${referenceName}' in strict mode.`,
  StrictEvalArgumentsBinding: ({
    bindingName
  }) => `Binding '${bindingName}' in strict mode.`,
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
  StrictWith: "'with' in strict mode."
};
const UnparenthesizedPipeBodyDescriptions = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
var PipelineOperatorErrors = Object.assign({
  PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
  PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
  PipeTopicUnconfiguredToken: ({
    token
  }) => `Invalid topic token ${token}. In order to use ${token} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${token}" }.`,
  PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
  PipeUnparenthesizedBody: ({
    type
  }) => `Hack-style pipe body cannot be an unparenthesized ${toNodeDescription({
    type
  })}; please wrap it in parentheses.`
}, {
  PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
  PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
  PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
  PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
  PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
  PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
});
const _excluded = ["message"];
function defineHidden(obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: false,
    configurable: true,
    value
  });
}
function toParseErrorConstructor({
  toMessage,
  code,
  reasonCode,
  syntaxPlugin
}) {
  const hasMissingPlugin = reasonCode === "MissingPlugin" || reasonCode === "MissingOneOfPlugins";
  {
    const oldReasonCodes = {
      AccessorCannotDeclareThisParameter: "AccesorCannotDeclareThisParameter",
      AccessorCannotHaveTypeParameters: "AccesorCannotHaveTypeParameters",
      ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",
      SetAccessorCannotHaveOptionalParameter: "SetAccesorCannotHaveOptionalParameter",
      SetAccessorCannotHaveRestParameter: "SetAccesorCannotHaveRestParameter",
      SetAccessorCannotHaveReturnType: "SetAccesorCannotHaveReturnType"
    };
    if (oldReasonCodes[reasonCode]) {
      reasonCode = oldReasonCodes[reasonCode];
    }
  }
  return function constructor(loc, details) {
    const error = new SyntaxError();
    error.code = code;
    error.reasonCode = reasonCode;
    error.loc = loc;
    error.pos = loc.index;
    error.syntaxPlugin = syntaxPlugin;
    if (hasMissingPlugin) {
      error.missingPlugin = details.missingPlugin;
    }
    defineHidden(error, "clone", function clone(overrides = {}) {
      var _overrides$loc;
      const {
        line,
        column,
        index
      } = (_overrides$loc = overrides.loc) != null ? _overrides$loc : loc;
      return constructor(new Position(line, column, index), Object.assign({}, details, overrides.details));
    });
    defineHidden(error, "details", details);
    Object.defineProperty(error, "message", {
      configurable: true,
      get() {
        const message = `${toMessage(details)} (${loc.line}:${loc.column})`;
        this.message = message;
        return message;
      },
      set(value) {
        Object.defineProperty(this, "message", {
          value,
          writable: true
        });
      }
    });
    return error;
  };
}
function ParseErrorEnum(argument, syntaxPlugin) {
  if (Array.isArray(argument)) {
    return parseErrorTemplates => ParseErrorEnum(parseErrorTemplates, argument[0]);
  }
  const ParseErrorConstructors = {};
  for (const reasonCode of Object.keys(argument)) {
    const template = argument[reasonCode];
    const _ref = typeof template === "string" ? {
        message: () => template
      } : typeof template === "function" ? {
        message: template
      } : template,
      {
        message
      } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);
    const toMessage = typeof message === "string" ? () => message : message;
    ParseErrorConstructors[reasonCode] = toParseErrorConstructor(Object.assign({
      code: "BABEL_PARSER_SYNTAX_ERROR",
      reasonCode,
      toMessage
    }, syntaxPlugin ? {
      syntaxPlugin
    } : {}, rest));
  }
  return ParseErrorConstructors;
}
const Errors = Object.assign({}, ParseErrorEnum(ModuleErrors), ParseErrorEnum(StandardErrors), ParseErrorEnum(StrictModeErrors), ParseErrorEnum`pipelineOperator`(PipelineOperatorErrors));
function createDefaultOptions() {
  return {
    sourceType: "script",
    sourceFilename: undefined,
    startIndex: 0,
    startColumn: 0,
    startLine: 1,
    allowAwaitOutsideFunction: false,
    allowReturnOutsideFunction: false,
    allowNewTargetOutsideFunction: false,
    allowImportExportEverywhere: false,
    allowSuperOutsideMethod: false,
    allowUndeclaredExports: false,
    allowYieldOutsideFunction: false,
    plugins: [],
    strictMode: null,
    ranges: false,
    tokens: false,
    createImportExpressions: false,
    createParenthesizedExpressions: false,
    errorRecovery: false,
    attachComment: true,
    annexB: true
  };
}
function getOptions(opts) {
  const options = createDefaultOptions();
  if (opts == null) {
    return options;
  }
  if (opts.annexB != null && opts.annexB !== false) {
    throw new Error("The `annexB` option can only be set to `false`.");
  }
  for (const key of Object.keys(options)) {
    if (opts[key] != null) options[key] = opts[key];
  }
  if (options.startLine === 1) {
    if (opts.startIndex == null && options.startColumn > 0) {
      options.startIndex = options.startColumn;
    } else if (opts.startColumn == null && options.startIndex > 0) {
      options.startColumn = options.startIndex;
    }
  } else if (opts.startColumn == null || opts.startIndex == null) {
    if (opts.startIndex != null) {
      throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
    }
  }
  return options;
}
const {
  defineProperty
} = Object;
const toUnenumerable = (object, key) => {
  if (object) {
    defineProperty(object, key, {
      enumerable: false,
      value: object[key]
    });
  }
};
function toESTreeLocation(node) {
  toUnenumerable(node.loc.start, "index");
  toUnenumerable(node.loc.end, "index");
  return node;
}
var estree = superClass => class ESTreeParserMixin extends superClass {
  parse() {
    const file = toESTreeLocation(super.parse());
    if (this.optionFlags & 256) {
      file.tokens = file.tokens.map(toESTreeLocation);
    }
    return file;
  }
  parseRegExpLiteral({
    pattern,
    flags
  }) {
    let regex = null;
    try {
      regex = new RegExp(pattern, flags);
    } catch (_) {}
    const node = this.estreeParseLiteral(regex);
    node.regex = {
      pattern,
      flags
    };
    return node;
  }
  parseBigIntLiteral(value) {
    let bigInt;
    try {
      bigInt = BigInt(value);
    } catch (_unused) {
      bigInt = null;
    }
    const node = this.estreeParseLiteral(bigInt);
    node.bigint = String(node.value || value);
    return node;
  }
  parseDecimalLiteral(value) {
    const decimal = null;
    const node = this.estreeParseLiteral(decimal);
    node.decimal = String(node.value || value);
    return node;
  }
  estreeParseLiteral(value) {
    return this.parseLiteral(value, "Literal");
  }
  parseStringLiteral(value) {
    return this.estreeParseLiteral(value);
  }
  parseNumericLiteral(value) {
    return this.estreeParseLiteral(value);
  }
  parseNullLiteral() {
    return this.estreeParseLiteral(null);
  }
  parseBooleanLiteral(value) {
    return this.estreeParseLiteral(value);
  }
  directiveToStmt(directive) {
    const expression = directive.value;
    delete directive.value;
    expression.type = "Literal";
    expression.raw = expression.extra.raw;
    expression.value = expression.extra.expressionValue;
    const stmt = directive;
    stmt.type = "ExpressionStatement";
    stmt.expression = expression;
    stmt.directive = expression.extra.rawValue;
    delete expression.extra;
    return stmt;
  }
  initFunction(node, isAsync) {
    super.initFunction(node, isAsync);
    node.expression = false;
  }
  checkDeclaration(node) {
    if (node != null && this.isObjectProperty(node)) {
      this.checkDeclaration(node.value);
    } else {
      super.checkDeclaration(node);
    }
  }
  getObjectOrClassMethodParams(method) {
    return method.value.params;
  }
  isValidDirective(stmt) {
    var _stmt$expression$extr;
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) != null && _stmt$expression$extr.parenthesized);
  }
  parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
    super.parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse);
    const directiveStatements = node.directives.map(d => this.directiveToStmt(d));
    node.body = directiveStatements.concat(node.body);
    delete node.directives;
  }
  parsePrivateName() {
    const node = super.parsePrivateName();
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return node;
      }
    }
    return this.convertPrivateNameToPrivateIdentifier(node);
  }
  convertPrivateNameToPrivateIdentifier(node) {
    const name = super.getPrivateNameSV(node);
    node = node;
    delete node.id;
    node.name = name;
    node.type = "PrivateIdentifier";
    return node;
  }
  isPrivateName(node) {
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return super.isPrivateName(node);
      }
    }
    return node.type === "PrivateIdentifier";
  }
  getPrivateNameSV(node) {
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return super.getPrivateNameSV(node);
      }
    }
    return node.name;
  }
  parseLiteral(value, type) {
    const node = super.parseLiteral(value, type);
    node.raw = node.extra.raw;
    delete node.extra;
    return node;
  }
  parseFunctionBody(node, allowExpression, isMethod = false) {
    super.parseFunctionBody(node, allowExpression, isMethod);
    node.expression = node.body.type !== "BlockStatement";
  }
  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    let funcNode = this.startNode();
    funcNode.kind = node.kind;
    funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    funcNode.type = "FunctionExpression";
    delete funcNode.kind;
    node.value = funcNode;
    const {
      typeParameters
    } = node;
    if (typeParameters) {
      delete node.typeParameters;
      funcNode.typeParameters = typeParameters;
      this.resetStartLocationFromNode(funcNode, typeParameters);
    }
    if (type === "ClassPrivateMethod") {
      node.computed = false;
    }
    return this.finishNode(node, "MethodDefinition");
  }
  nameIsConstructor(key) {
    if (key.type === "Literal") return key.value === "constructor";
    return super.nameIsConstructor(key);
  }
  parseClassProperty(...args) {
    const propertyNode = super.parseClassProperty(...args);
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return propertyNode;
      }
    }
    {
      propertyNode.type = "PropertyDefinition";
    }
    return propertyNode;
  }
  parseClassPrivateProperty(...args) {
    const propertyNode = super.parseClassPrivateProperty(...args);
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return propertyNode;
      }
    }
    {
      propertyNode.type = "PropertyDefinition";
    }
    propertyNode.computed = false;
    return propertyNode;
  }
  parseClassAccessorProperty(node) {
    const accessorPropertyNode = super.parseClassAccessorProperty(node);
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return accessorPropertyNode;
      }
    }
    accessorPropertyNode.type = "AccessorProperty";
    return accessorPropertyNode;
  }
  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    const node = super.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor);
    if (node) {
      node.type = "Property";
      if (node.kind === "method") {
        node.kind = "init";
      }
      node.shorthand = false;
    }
    return node;
  }
  parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
    const node = super.parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors);
    if (node) {
      node.kind = "init";
      node.type = "Property";
    }
    return node;
  }
  isValidLVal(type, isUnparenthesizedInAssign, binding) {
    return type === "Property" ? "value" : super.isValidLVal(type, isUnparenthesizedInAssign, binding);
  }
  isAssignable(node, isBinding) {
    if (node != null && this.isObjectProperty(node)) {
      return this.isAssignable(node.value, isBinding);
    }
    return super.isAssignable(node, isBinding);
  }
  toAssignable(node, isLHS = false) {
    if (node != null && this.isObjectProperty(node)) {
      const {
        key,
        value
      } = node;
      if (this.isPrivateName(key)) {
        this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
      }
      this.toAssignable(value, isLHS);
    } else {
      super.toAssignable(node, isLHS);
    }
  }
  toAssignableObjectExpressionProp(prop, isLast, isLHS) {
    if (prop.type === "Property" && (prop.kind === "get" || prop.kind === "set")) {
      this.raise(Errors.PatternHasAccessor, prop.key);
    } else if (prop.type === "Property" && prop.method) {
      this.raise(Errors.PatternHasMethod, prop.key);
    } else {
      super.toAssignableObjectExpressionProp(prop, isLast, isLHS);
    }
  }
  finishCallExpression(unfinished, optional) {
    const node = super.finishCallExpression(unfinished, optional);
    if (node.callee.type === "Import") {
      var _ref, _ref2;
      node.type = "ImportExpression";
      node.source = node.arguments[0];
      node.options = (_ref = node.arguments[1]) != null ? _ref : null;
      node.attributes = (_ref2 = node.arguments[1]) != null ? _ref2 : null;
      delete node.arguments;
      delete node.callee;
    }
    return node;
  }
  toReferencedArguments(node) {
    if (node.type === "ImportExpression") {
      return;
    }
    super.toReferencedArguments(node);
  }
  parseExport(unfinished, decorators) {
    const exportStartLoc = this.state.lastTokStartLoc;
    const node = super.parseExport(unfinished, decorators);
    switch (node.type) {
      case "ExportAllDeclaration":
        node.exported = null;
        break;
      case "ExportNamedDeclaration":
        if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
          node.type = "ExportAllDeclaration";
          node.exported = node.specifiers[0].exported;
          delete node.specifiers;
        }
      case "ExportDefaultDeclaration":
        {
          var _declaration$decorato;
          const {
            declaration
          } = node;
          if ((declaration == null ? void 0 : declaration.type) === "ClassDeclaration" && ((_declaration$decorato = declaration.decorators) == null ? void 0 : _declaration$decorato.length) > 0 && declaration.start === node.start) {
            this.resetStartLocation(node, exportStartLoc);
          }
        }
        break;
    }
    return node;
  }
  parseSubscript(base, startLoc, noCalls, state) {
    const node = super.parseSubscript(base, startLoc, noCalls, state);
    if (state.optionalChainMember) {
      if (node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression") {
        node.type = node.type.substring(8);
      }
      if (state.stop) {
        const chain = this.startNodeAtNode(node);
        chain.expression = node;
        return this.finishNode(chain, "ChainExpression");
      }
    } else if (node.type === "MemberExpression" || node.type === "CallExpression") {
      node.optional = false;
    }
    return node;
  }
  isOptionalMemberExpression(node) {
    if (node.type === "ChainExpression") {
      return node.expression.type === "MemberExpression";
    }
    return super.isOptionalMemberExpression(node);
  }
  hasPropertyAsPrivateName(node) {
    if (node.type === "ChainExpression") {
      node = node.expression;
    }
    return super.hasPropertyAsPrivateName(node);
  }
  isObjectProperty(node) {
    return node.type === "Property" && node.kind === "init" && !node.method;
  }
  isObjectMethod(node) {
    return node.type === "Property" && (node.method || node.kind === "get" || node.kind === "set");
  }
  finishNodeAt(node, type, endLoc) {
    return toESTreeLocation(super.finishNodeAt(node, type, endLoc));
  }
  resetStartLocation(node, startLoc) {
    super.resetStartLocation(node, startLoc);
    toESTreeLocation(node);
  }
  resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
    super.resetEndLocation(node, endLoc);
    toESTreeLocation(node);
  }
};
class TokContext {
  constructor(token, preserveSpace) {
    this.token = void 0;
    this.preserveSpace = void 0;
    this.token = token;
    this.preserveSpace = !!preserveSpace;
  }
}
const types = {
  brace: new TokContext("{"),
  j_oTag: new TokContext("<tag"),
  j_cTag: new TokContext("</tag"),
  j_expr: new TokContext("<tag>...</tag>", true)
};
{
  types.template = new TokContext("`", true);
}
const beforeExpr = true;
const startsExpr = true;
const isLoop = true;
const isAssign = true;
const prefix = true;
const postfix = true;
class ExportedTokenType {
  constructor(label, conf = {}) {
    this.label = void 0;
    this.keyword = void 0;
    this.beforeExpr = void 0;
    this.startsExpr = void 0;
    this.rightAssociative = void 0;
    this.isLoop = void 0;
    this.isAssign = void 0;
    this.prefix = void 0;
    this.postfix = void 0;
    this.binop = void 0;
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.rightAssociative = !!conf.rightAssociative;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop != null ? conf.binop : null;
    {
      this.updateContext = null;
    }
  }
}
const keywords$1 = new Map();
function createKeyword(name, options = {}) {
  options.keyword = name;
  const token = createToken(name, options);
  keywords$1.set(name, token);
  return token;
}
function createBinop(name, binop) {
  return createToken(name, {
    beforeExpr,
    binop
  });
}
let tokenTypeCounter = -1;
const tokenTypes = [];
const tokenLabels = [];
const tokenBinops = [];
const tokenBeforeExprs = [];
const tokenStartsExprs = [];
const tokenPrefixes = [];
function createToken(name, options = {}) {
  var _options$binop, _options$beforeExpr, _options$startsExpr, _options$prefix;
  ++tokenTypeCounter;
  tokenLabels.push(name);
  tokenBinops.push((_options$binop = options.binop) != null ? _options$binop : -1);
  tokenBeforeExprs.push((_options$beforeExpr = options.beforeExpr) != null ? _options$beforeExpr : false);
  tokenStartsExprs.push((_options$startsExpr = options.startsExpr) != null ? _options$startsExpr : false);
  tokenPrefixes.push((_options$prefix = options.prefix) != null ? _options$prefix : false);
  tokenTypes.push(new ExportedTokenType(name, options));
  return tokenTypeCounter;
}
function createKeywordLike(name, options = {}) {
  var _options$binop2, _options$beforeExpr2, _options$startsExpr2, _options$prefix2;
  ++tokenTypeCounter;
  keywords$1.set(name, tokenTypeCounter);
  tokenLabels.push(name);
  tokenBinops.push((_options$binop2 = options.binop) != null ? _options$binop2 : -1);
  tokenBeforeExprs.push((_options$beforeExpr2 = options.beforeExpr) != null ? _options$beforeExpr2 : false);
  tokenStartsExprs.push((_options$startsExpr2 = options.startsExpr) != null ? _options$startsExpr2 : false);
  tokenPrefixes.push((_options$prefix2 = options.prefix) != null ? _options$prefix2 : false);
  tokenTypes.push(new ExportedTokenType("name", options));
  return tokenTypeCounter;
}
const tt$1 = {
  bracketL: createToken("[", {
    beforeExpr,
    startsExpr
  }),
  bracketHashL: createToken("#[", {
    beforeExpr,
    startsExpr
  }),
  bracketBarL: createToken("[|", {
    beforeExpr,
    startsExpr
  }),
  bracketR: createToken("]"),
  bracketBarR: createToken("|]"),
  braceL: createToken("{", {
    beforeExpr,
    startsExpr
  }),
  braceBarL: createToken("{|", {
    beforeExpr,
    startsExpr
  }),
  braceHashL: createToken("#{", {
    beforeExpr,
    startsExpr
  }),
  braceR: createToken("}"),
  braceBarR: createToken("|}"),
  parenL: createToken("(", {
    beforeExpr,
    startsExpr
  }),
  parenR: createToken(")"),
  comma: createToken(",", {
    beforeExpr
  }),
  semi: createToken(";", {
    beforeExpr
  }),
  colon: createToken(":", {
    beforeExpr
  }),
  doubleColon: createToken("::", {
    beforeExpr
  }),
  dot: createToken("."),
  question: createToken("?", {
    beforeExpr
  }),
  questionDot: createToken("?."),
  arrow: createToken("=>", {
    beforeExpr
  }),
  template: createToken("template"),
  ellipsis: createToken("...", {
    beforeExpr
  }),
  backQuote: createToken("`", {
    startsExpr
  }),
  dollarBraceL: createToken("${", {
    beforeExpr,
    startsExpr
  }),
  templateTail: createToken("...`", {
    startsExpr
  }),
  templateNonTail: createToken("...${", {
    beforeExpr,
    startsExpr
  }),
  at: createToken("@"),
  hash: createToken("#", {
    startsExpr
  }),
  interpreterDirective: createToken("#!..."),
  eq: createToken("=", {
    beforeExpr,
    isAssign
  }),
  assign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  slashAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  xorAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  moduloAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  incDec: createToken("++/--", {
    prefix,
    postfix,
    startsExpr
  }),
  bang: createToken("!", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  tilde: createToken("~", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  doubleCaret: createToken("^^", {
    startsExpr
  }),
  doubleAt: createToken("@@", {
    startsExpr
  }),
  pipeline: createBinop("|>", 0),
  nullishCoalescing: createBinop("??", 1),
  logicalOR: createBinop("||", 1),
  logicalAND: createBinop("&&", 2),
  bitwiseOR: createBinop("|", 3),
  bitwiseXOR: createBinop("^", 4),
  bitwiseAND: createBinop("&", 5),
  equality: createBinop("==/!=/===/!==", 6),
  lt: createBinop("</>/<=/>=", 7),
  gt: createBinop("</>/<=/>=", 7),
  relational: createBinop("</>/<=/>=", 7),
  bitShift: createBinop("<</>>/>>>", 8),
  bitShiftL: createBinop("<</>>/>>>", 8),
  bitShiftR: createBinop("<</>>/>>>", 8),
  plusMin: createToken("+/-", {
    beforeExpr,
    binop: 9,
    prefix,
    startsExpr
  }),
  modulo: createToken("%", {
    binop: 10,
    startsExpr
  }),
  star: createToken("*", {
    binop: 10
  }),
  slash: createBinop("/", 10),
  exponent: createToken("**", {
    beforeExpr,
    binop: 11,
    rightAssociative: true
  }),
  _in: createKeyword("in", {
    beforeExpr,
    binop: 7
  }),
  _instanceof: createKeyword("instanceof", {
    beforeExpr,
    binop: 7
  }),
  _break: createKeyword("break"),
  _case: createKeyword("case", {
    beforeExpr
  }),
  _catch: createKeyword("catch"),
  _continue: createKeyword("continue"),
  _debugger: createKeyword("debugger"),
  _default: createKeyword("default", {
    beforeExpr
  }),
  _else: createKeyword("else", {
    beforeExpr
  }),
  _finally: createKeyword("finally"),
  _function: createKeyword("function", {
    startsExpr
  }),
  _if: createKeyword("if"),
  _return: createKeyword("return", {
    beforeExpr
  }),
  _switch: createKeyword("switch"),
  _throw: createKeyword("throw", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _try: createKeyword("try"),
  _var: createKeyword("var"),
  _const: createKeyword("const"),
  _with: createKeyword("with"),
  _new: createKeyword("new", {
    beforeExpr,
    startsExpr
  }),
  _this: createKeyword("this", {
    startsExpr
  }),
  _super: createKeyword("super", {
    startsExpr
  }),
  _class: createKeyword("class", {
    startsExpr
  }),
  _extends: createKeyword("extends", {
    beforeExpr
  }),
  _export: createKeyword("export"),
  _import: createKeyword("import", {
    startsExpr
  }),
  _null: createKeyword("null", {
    startsExpr
  }),
  _true: createKeyword("true", {
    startsExpr
  }),
  _false: createKeyword("false", {
    startsExpr
  }),
  _typeof: createKeyword("typeof", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _void: createKeyword("void", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _delete: createKeyword("delete", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _do: createKeyword("do", {
    isLoop,
    beforeExpr
  }),
  _for: createKeyword("for", {
    isLoop
  }),
  _while: createKeyword("while", {
    isLoop
  }),
  _as: createKeywordLike("as", {
    startsExpr
  }),
  _assert: createKeywordLike("assert", {
    startsExpr
  }),
  _async: createKeywordLike("async", {
    startsExpr
  }),
  _await: createKeywordLike("await", {
    startsExpr
  }),
  _defer: createKeywordLike("defer", {
    startsExpr
  }),
  _from: createKeywordLike("from", {
    startsExpr
  }),
  _get: createKeywordLike("get", {
    startsExpr
  }),
  _let: createKeywordLike("let", {
    startsExpr
  }),
  _meta: createKeywordLike("meta", {
    startsExpr
  }),
  _of: createKeywordLike("of", {
    startsExpr
  }),
  _sent: createKeywordLike("sent", {
    startsExpr
  }),
  _set: createKeywordLike("set", {
    startsExpr
  }),
  _source: createKeywordLike("source", {
    startsExpr
  }),
  _static: createKeywordLike("static", {
    startsExpr
  }),
  _using: createKeywordLike("using", {
    startsExpr
  }),
  _yield: createKeywordLike("yield", {
    startsExpr
  }),
  _asserts: createKeywordLike("asserts", {
    startsExpr
  }),
  _checks: createKeywordLike("checks", {
    startsExpr
  }),
  _exports: createKeywordLike("exports", {
    startsExpr
  }),
  _global: createKeywordLike("global", {
    startsExpr
  }),
  _implements: createKeywordLike("implements", {
    startsExpr
  }),
  _intrinsic: createKeywordLike("intrinsic", {
    startsExpr
  }),
  _infer: createKeywordLike("infer", {
    startsExpr
  }),
  _is: createKeywordLike("is", {
    startsExpr
  }),
  _mixins: createKeywordLike("mixins", {
    startsExpr
  }),
  _proto: createKeywordLike("proto", {
    startsExpr
  }),
  _require: createKeywordLike("require", {
    startsExpr
  }),
  _satisfies: createKeywordLike("satisfies", {
    startsExpr
  }),
  _keyof: createKeywordLike("keyof", {
    startsExpr
  }),
  _readonly: createKeywordLike("readonly", {
    startsExpr
  }),
  _unique: createKeywordLike("unique", {
    startsExpr
  }),
  _abstract: createKeywordLike("abstract", {
    startsExpr
  }),
  _declare: createKeywordLike("declare", {
    startsExpr
  }),
  _enum: createKeywordLike("enum", {
    startsExpr
  }),
  _module: createKeywordLike("module", {
    startsExpr
  }),
  _namespace: createKeywordLike("namespace", {
    startsExpr
  }),
  _interface: createKeywordLike("interface", {
    startsExpr
  }),
  _type: createKeywordLike("type", {
    startsExpr
  }),
  _opaque: createKeywordLike("opaque", {
    startsExpr
  }),
  name: createToken("name", {
    startsExpr
  }),
  placeholder: createToken("%%", {
    startsExpr: true
  }),
  string: createToken("string", {
    startsExpr
  }),
  num: createToken("num", {
    startsExpr
  }),
  bigint: createToken("bigint", {
    startsExpr
  }),
  decimal: createToken("decimal", {
    startsExpr
  }),
  regexp: createToken("regexp", {
    startsExpr
  }),
  privateName: createToken("#name", {
    startsExpr
  }),
  eof: createToken("eof"),
  jsxName: createToken("jsxName"),
  jsxText: createToken("jsxText", {
    beforeExpr: true
  }),
  jsxTagStart: createToken("jsxTagStart", {
    startsExpr: true
  }),
  jsxTagEnd: createToken("jsxTagEnd")
};
function tokenIsIdentifier(token) {
  return token >= 93 && token <= 133;
}
function tokenKeywordOrIdentifierIsKeyword(token) {
  return token <= 92;
}
function tokenIsKeywordOrIdentifier(token) {
  return token >= 58 && token <= 133;
}
function tokenIsLiteralPropertyName(token) {
  return token >= 58 && token <= 137;
}
function tokenComesBeforeExpression(token) {
  return tokenBeforeExprs[token];
}
function tokenCanStartExpression(token) {
  return tokenStartsExprs[token];
}
function tokenIsAssignment(token) {
  return token >= 29 && token <= 33;
}
function tokenIsFlowInterfaceOrTypeOrOpaque(token) {
  return token >= 129 && token <= 131;
}
function tokenIsLoop(token) {
  return token >= 90 && token <= 92;
}
function tokenIsKeyword(token) {
  return token >= 58 && token <= 92;
}
function tokenIsOperator(token) {
  return token >= 39 && token <= 59;
}
function tokenIsPostfix(token) {
  return token === 34;
}
function tokenIsPrefix(token) {
  return tokenPrefixes[token];
}
function tokenIsTSTypeOperator(token) {
  return token >= 121 && token <= 123;
}
function tokenIsTSDeclarationStart(token) {
  return token >= 124 && token <= 130;
}
function tokenLabelName(token) {
  return tokenLabels[token];
}
function tokenOperatorPrecedence(token) {
  return tokenBinops[token];
}
function tokenIsRightAssociative(token) {
  return token === 57;
}
function tokenIsTemplate(token) {
  return token >= 24 && token <= 25;
}
function getExportedToken(token) {
  return tokenTypes[token];
}
{
  tokenTypes[8].updateContext = context => {
    context.pop();
  };
  tokenTypes[5].updateContext = tokenTypes[7].updateContext = tokenTypes[23].updateContext = context => {
    context.push(types.brace);
  };
  tokenTypes[22].updateContext = context => {
    if (context[context.length - 1] === types.template) {
      context.pop();
    } else {
      context.push(types.template);
    }
  };
  tokenTypes[143].updateContext = context => {
    context.push(types.j_expr, types.j_oTag);
  };
}
let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c8a\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7cd\ua7d0\ua7d1\ua7d3\ua7d5-\ua7dc\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0897-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  let pos = 0x10000;
  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }
  return false;
}
function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}
function isIteratorStart(current, next, next2) {
  return current === 64 && next === 64 && isIdentifierStart(next2);
}
const reservedWordLikeSet = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
function canBeReservedWord(word) {
  return reservedWordLikeSet.has(word);
}
class Scope {
  constructor(flags) {
    this.flags = 0;
    this.names = new Map();
    this.firstLexicalName = "";
    this.flags = flags;
  }
}
class ScopeHandler {
  constructor(parser, inModule) {
    this.parser = void 0;
    this.scopeStack = [];
    this.inModule = void 0;
    this.undefinedExports = new Map();
    this.parser = parser;
    this.inModule = inModule;
  }
  get inTopLevel() {
    return (this.currentScope().flags & 1) > 0;
  }
  get inFunction() {
    return (this.currentVarScopeFlags() & 2) > 0;
  }
  get allowSuper() {
    return (this.currentThisScopeFlags() & 16) > 0;
  }
  get allowDirectSuper() {
    return (this.currentThisScopeFlags() & 32) > 0;
  }
  get inClass() {
    return (this.currentThisScopeFlags() & 64) > 0;
  }
  get inClassAndNotInNonArrowFunction() {
    const flags = this.currentThisScopeFlags();
    return (flags & 64) > 0 && (flags & 2) === 0;
  }
  get inStaticBlock() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];
      if (flags & 128) {
        return true;
      }
      if (flags & (387 | 64)) {
        return false;
      }
    }
  }
  get inNonArrowFunction() {
    return (this.currentThisScopeFlags() & 2) > 0;
  }
  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }
  createScope(flags) {
    return new Scope(flags);
  }
  enter(flags) {
    this.scopeStack.push(this.createScope(flags));
  }
  exit() {
    const scope = this.scopeStack.pop();
    return scope.flags;
  }
  treatFunctionsAsVarInScope(scope) {
    return !!(scope.flags & (2 | 128) || !this.parser.inModule && scope.flags & 1);
  }
  declareName(name, bindingType, loc) {
    let scope = this.currentScope();
    if (bindingType & 8 || bindingType & 16) {
      this.checkRedeclarationInScope(scope, name, bindingType, loc);
      let type = scope.names.get(name) || 0;
      if (bindingType & 16) {
        type = type | 4;
      } else {
        if (!scope.firstLexicalName) {
          scope.firstLexicalName = name;
        }
        type = type | 2;
      }
      scope.names.set(name, type);
      if (bindingType & 8) {
        this.maybeExportDefined(scope, name);
      }
    } else if (bindingType & 4) {
      for (let i = this.scopeStack.length - 1; i >= 0; --i) {
        scope = this.scopeStack[i];
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        scope.names.set(name, (scope.names.get(name) || 0) | 1);
        this.maybeExportDefined(scope, name);
        if (scope.flags & 387) break;
      }
    }
    if (this.parser.inModule && scope.flags & 1) {
      this.undefinedExports.delete(name);
    }
  }
  maybeExportDefined(scope, name) {
    if (this.parser.inModule && scope.flags & 1) {
      this.undefinedExports.delete(name);
    }
  }
  checkRedeclarationInScope(scope, name, bindingType, loc) {
    if (this.isRedeclaredInScope(scope, name, bindingType)) {
      this.parser.raise(Errors.VarRedeclaration, loc, {
        identifierName: name
      });
    }
  }
  isRedeclaredInScope(scope, name, bindingType) {
    if (!(bindingType & 1)) return false;
    if (bindingType & 8) {
      return scope.names.has(name);
    }
    const type = scope.names.get(name);
    if (bindingType & 16) {
      return (type & 2) > 0 || !this.treatFunctionsAsVarInScope(scope) && (type & 1) > 0;
    }
    return (type & 2) > 0 && !(scope.flags & 8 && scope.firstLexicalName === name) || !this.treatFunctionsAsVarInScope(scope) && (type & 4) > 0;
  }
  checkLocalExport(id) {
    const {
      name
    } = id;
    const topLevelScope = this.scopeStack[0];
    if (!topLevelScope.names.has(name)) {
      this.undefinedExports.set(name, id.loc.start);
    }
  }
  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }
  currentVarScopeFlags() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];
      if (flags & 387) {
        return flags;
      }
    }
  }
  currentThisScopeFlags() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];
      if (flags & (387 | 64) && !(flags & 4)) {
        return flags;
      }
    }
  }
}
class FlowScope extends Scope {
  constructor(...args) {
    super(...args);
    this.declareFunctions = new Set();
  }
}
class FlowScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new FlowScope(flags);
  }
  declareName(name, bindingType, loc) {
    const scope = this.currentScope();
    if (bindingType & 2048) {
      this.checkRedeclarationInScope(scope, name, bindingType, loc);
      this.maybeExportDefined(scope, name);
      scope.declareFunctions.add(name);
      return;
    }
    super.declareName(name, bindingType, loc);
  }
  isRedeclaredInScope(scope, name, bindingType) {
    if (super.isRedeclaredInScope(scope, name, bindingType)) return true;
    if (bindingType & 2048 && !scope.declareFunctions.has(name)) {
      const type = scope.names.get(name);
      return (type & 4) > 0 || (type & 2) > 0;
    }
    return false;
  }
  checkLocalExport(id) {
    if (!this.scopeStack[0].declareFunctions.has(id.name)) {
      super.checkLocalExport(id);
    }
  }
}
class BaseParser {
  constructor() {
    this.sawUnambiguousESM = false;
    this.ambiguousScriptDifferentAst = false;
  }
  sourceToOffsetPos(sourcePos) {
    return sourcePos + this.startIndex;
  }
  offsetToSourcePos(offsetPos) {
    return offsetPos - this.startIndex;
  }
  hasPlugin(pluginConfig) {
    if (typeof pluginConfig === "string") {
      return this.plugins.has(pluginConfig);
    } else {
      const [pluginName, pluginOptions] = pluginConfig;
      if (!this.hasPlugin(pluginName)) {
        return false;
      }
      const actualOptions = this.plugins.get(pluginName);
      for (const key of Object.keys(pluginOptions)) {
        if ((actualOptions == null ? void 0 : actualOptions[key]) !== pluginOptions[key]) {
          return false;
        }
      }
      return true;
    }
  }
  getPluginOption(plugin, name) {
    var _this$plugins$get;
    return (_this$plugins$get = this.plugins.get(plugin)) == null ? void 0 : _this$plugins$get[name];
  }
}
function setTrailingComments(node, comments) {
  if (node.trailingComments === undefined) {
    node.trailingComments = comments;
  } else {
    node.trailingComments.unshift(...comments);
  }
}
function setLeadingComments(node, comments) {
  if (node.leadingComments === undefined) {
    node.leadingComments = comments;
  } else {
    node.leadingComments.unshift(...comments);
  }
}
function setInnerComments(node, comments) {
  if (node.innerComments === undefined) {
    node.innerComments = comments;
  } else {
    node.innerComments.unshift(...comments);
  }
}
function adjustInnerComments(node, elements, commentWS) {
  let lastElement = null;
  let i = elements.length;
  while (lastElement === null && i > 0) {
    lastElement = elements[--i];
  }
  if (lastElement === null || lastElement.start > commentWS.start) {
    setInnerComments(node, commentWS.comments);
  } else {
    setTrailingComments(lastElement, commentWS.comments);
  }
}
class CommentsParser extends BaseParser {
  addComment(comment) {
    if (this.filename) comment.loc.filename = this.filename;
    const {
      commentsLen
    } = this.state;
    if (this.comments.length !== commentsLen) {
      this.comments.length = commentsLen;
    }
    this.comments.push(comment);
    this.state.commentsLen++;
  }
  processComment(node) {
    const {
      commentStack
    } = this.state;
    const commentStackLength = commentStack.length;
    if (commentStackLength === 0) return;
    let i = commentStackLength - 1;
    const lastCommentWS = commentStack[i];
    if (lastCommentWS.start === node.end) {
      lastCommentWS.leadingNode = node;
      i--;
    }
    const {
      start: nodeStart
    } = node;
    for (; i >= 0; i--) {
      const commentWS = commentStack[i];
      const commentEnd = commentWS.end;
      if (commentEnd > nodeStart) {
        commentWS.containingNode = node;
        this.finalizeComment(commentWS);
        commentStack.splice(i, 1);
      } else {
        if (commentEnd === nodeStart) {
          commentWS.trailingNode = node;
        }
        break;
      }
    }
  }
  finalizeComment(commentWS) {
    const {
      comments
    } = commentWS;
    if (commentWS.leadingNode !== null || commentWS.trailingNode !== null) {
      if (commentWS.leadingNode !== null) {
        setTrailingComments(commentWS.leadingNode, comments);
      }
      if (commentWS.trailingNode !== null) {
        setLeadingComments(commentWS.trailingNode, comments);
      }
    } else {
      const {
        containingNode: node,
        start: commentStart
      } = commentWS;
      if (this.input.charCodeAt(this.offsetToSourcePos(commentStart) - 1) === 44) {
        switch (node.type) {
          case "ObjectExpression":
          case "ObjectPattern":
          case "RecordExpression":
            adjustInnerComments(node, node.properties, commentWS);
            break;
          case "CallExpression":
          case "OptionalCallExpression":
            adjustInnerComments(node, node.arguments, commentWS);
            break;
          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
            adjustInnerComments(node, node.params, commentWS);
            break;
          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            adjustInnerComments(node, node.elements, commentWS);
            break;
          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            adjustInnerComments(node, node.specifiers, commentWS);
            break;
          case "TSEnumDeclaration":
            {
              adjustInnerComments(node, node.members, commentWS);
            }
            break;
          case "TSEnumBody":
            adjustInnerComments(node, node.members, commentWS);
            break;
          default:
            {
              setInnerComments(node, comments);
            }
        }
      } else {
        setInnerComments(node, comments);
      }
    }
  }
  finalizeRemainingComments() {
    const {
      commentStack
    } = this.state;
    for (let i = commentStack.length - 1; i >= 0; i--) {
      this.finalizeComment(commentStack[i]);
    }
    this.state.commentStack = [];
  }
  resetPreviousNodeTrailingComments(node) {
    const {
      commentStack
    } = this.state;
    const {
      length
    } = commentStack;
    if (length === 0) return;
    const commentWS = commentStack[length - 1];
    if (commentWS.leadingNode === node) {
      commentWS.leadingNode = null;
    }
  }
  resetPreviousIdentifierLeadingComments(node) {
    const {
      commentStack
    } = this.state;
    const {
      length
    } = commentStack;
    if (length === 0) return;
    if (commentStack[length - 1].trailingNode === node) {
      commentStack[length - 1].trailingNode = null;
    } else if (length >= 2 && commentStack[length - 2].trailingNode === node) {
      commentStack[length - 2].trailingNode = null;
    }
  }
  takeSurroundingComments(node, start, end) {
    const {
      commentStack
    } = this.state;
    const commentStackLength = commentStack.length;
    if (commentStackLength === 0) return;
    let i = commentStackLength - 1;
    for (; i >= 0; i--) {
      const commentWS = commentStack[i];
      const commentEnd = commentWS.end;
      const commentStart = commentWS.start;
      if (commentStart === end) {
        commentWS.leadingNode = node;
      } else if (commentEnd === start) {
        commentWS.trailingNode = node;
      } else if (commentEnd < start) {
        break;
      }
    }
  }
}
const lineBreak = /\r\n|[\r\n\u2028\u2029]/;
const lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  switch (code) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;
    default:
      return false;
  }
}
function hasNewLine(input, start, end) {
  for (let i = start; i < end; i++) {
    if (isNewLine(input.charCodeAt(i))) {
      return true;
    }
  }
  return false;
}
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
const skipWhiteSpaceInLine = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
function isWhitespace(code) {
  switch (code) {
    case 0x0009:
    case 0x000b:
    case 0x000c:
    case 32:
    case 160:
    case 5760:
    case 0x2000:
    case 0x2001:
    case 0x2002:
    case 0x2003:
    case 0x2004:
    case 0x2005:
    case 0x2006:
    case 0x2007:
    case 0x2008:
    case 0x2009:
    case 0x200a:
    case 0x202f:
    case 0x205f:
    case 0x3000:
    case 0xfeff:
      return true;
    default:
      return false;
  }
}
class State {
  constructor() {
    this.flags = 1024;
    this.startIndex = void 0;
    this.curLine = void 0;
    this.lineStart = void 0;
    this.startLoc = void 0;
    this.endLoc = void 0;
    this.errors = [];
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = [];
    this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };
    this.labels = [];
    this.commentsLen = 0;
    this.commentStack = [];
    this.pos = 0;
    this.type = 140;
    this.value = null;
    this.start = 0;
    this.end = 0;
    this.lastTokEndLoc = null;
    this.lastTokStartLoc = null;
    this.context = [types.brace];
    this.firstInvalidTemplateEscapePos = null;
    this.strictErrors = new Map();
    this.tokensLength = 0;
  }
  get strict() {
    return (this.flags & 1) > 0;
  }
  set strict(v) {
    if (v) this.flags |= 1;else this.flags &= -2;
  }
  init({
    strictMode,
    sourceType,
    startIndex,
    startLine,
    startColumn
  }) {
    this.strict = strictMode === false ? false : strictMode === true ? true : sourceType === "module";
    this.startIndex = startIndex;
    this.curLine = startLine;
    this.lineStart = -startColumn;
    this.startLoc = this.endLoc = new Position(startLine, startColumn, startIndex);
  }
  get maybeInArrowParameters() {
    return (this.flags & 2) > 0;
  }
  set maybeInArrowParameters(v) {
    if (v) this.flags |= 2;else this.flags &= -3;
  }
  get inType() {
    return (this.flags & 4) > 0;
  }
  set inType(v) {
    if (v) this.flags |= 4;else this.flags &= -5;
  }
  get noAnonFunctionType() {
    return (this.flags & 8) > 0;
  }
  set noAnonFunctionType(v) {
    if (v) this.flags |= 8;else this.flags &= -9;
  }
  get hasFlowComment() {
    return (this.flags & 16) > 0;
  }
  set hasFlowComment(v) {
    if (v) this.flags |= 16;else this.flags &= -17;
  }
  get isAmbientContext() {
    return (this.flags & 32) > 0;
  }
  set isAmbientContext(v) {
    if (v) this.flags |= 32;else this.flags &= -33;
  }
  get inAbstractClass() {
    return (this.flags & 64) > 0;
  }
  set inAbstractClass(v) {
    if (v) this.flags |= 64;else this.flags &= -65;
  }
  get inDisallowConditionalTypesContext() {
    return (this.flags & 128) > 0;
  }
  set inDisallowConditionalTypesContext(v) {
    if (v) this.flags |= 128;else this.flags &= -129;
  }
  get soloAwait() {
    return (this.flags & 256) > 0;
  }
  set soloAwait(v) {
    if (v) this.flags |= 256;else this.flags &= -257;
  }
  get inFSharpPipelineDirectBody() {
    return (this.flags & 512) > 0;
  }
  set inFSharpPipelineDirectBody(v) {
    if (v) this.flags |= 512;else this.flags &= -513;
  }
  get canStartJSXElement() {
    return (this.flags & 1024) > 0;
  }
  set canStartJSXElement(v) {
    if (v) this.flags |= 1024;else this.flags &= -1025;
  }
  get containsEsc() {
    return (this.flags & 2048) > 0;
  }
  set containsEsc(v) {
    if (v) this.flags |= 2048;else this.flags &= -2049;
  }
  get hasTopLevelAwait() {
    return (this.flags & 4096) > 0;
  }
  set hasTopLevelAwait(v) {
    if (v) this.flags |= 4096;else this.flags &= -4097;
  }
  curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
  }
  clone() {
    const state = new State();
    state.flags = this.flags;
    state.startIndex = this.startIndex;
    state.curLine = this.curLine;
    state.lineStart = this.lineStart;
    state.startLoc = this.startLoc;
    state.endLoc = this.endLoc;
    state.errors = this.errors.slice();
    state.potentialArrowAt = this.potentialArrowAt;
    state.noArrowAt = this.noArrowAt.slice();
    state.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice();
    state.topicContext = this.topicContext;
    state.labels = this.labels.slice();
    state.commentsLen = this.commentsLen;
    state.commentStack = this.commentStack.slice();
    state.pos = this.pos;
    state.type = this.type;
    state.value = this.value;
    state.start = this.start;
    state.end = this.end;
    state.lastTokEndLoc = this.lastTokEndLoc;
    state.lastTokStartLoc = this.lastTokStartLoc;
    state.context = this.context.slice();
    state.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos;
    state.strictErrors = this.strictErrors;
    state.tokensLength = this.tokensLength;
    return state;
  }
}
var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};
const forbiddenNumericSeparatorSiblings = {
  decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
  hex: new Set([46, 88, 95, 120])
};
const isAllowedNumericSeparatorSibling = {
  bin: ch => ch === 48 || ch === 49,
  oct: ch => ch >= 48 && ch <= 55,
  dec: ch => ch >= 48 && ch <= 57,
  hex: ch => ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102
};
function readStringContents(type, input, pos, lineStart, curLine, errors) {
  const initialPos = pos;
  const initialLineStart = lineStart;
  const initialCurLine = curLine;
  let out = "";
  let firstInvalidLoc = null;
  let chunkStart = pos;
  const {
    length
  } = input;
  for (;;) {
    if (pos >= length) {
      errors.unterminated(initialPos, initialLineStart, initialCurLine);
      out += input.slice(chunkStart, pos);
      break;
    }
    const ch = input.charCodeAt(pos);
    if (isStringEnd(type, ch, input, pos)) {
      out += input.slice(chunkStart, pos);
      break;
    }
    if (ch === 92) {
      out += input.slice(chunkStart, pos);
      const res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
      if (res.ch === null && !firstInvalidLoc) {
        firstInvalidLoc = {
          pos,
          lineStart,
          curLine
        };
      } else {
        out += res.ch;
      }
      ({
        pos,
        lineStart,
        curLine
      } = res);
      chunkStart = pos;
    } else if (ch === 8232 || ch === 8233) {
      ++pos;
      ++curLine;
      lineStart = pos;
    } else if (ch === 10 || ch === 13) {
      if (type === "template") {
        out += input.slice(chunkStart, pos) + "\n";
        ++pos;
        if (ch === 13 && input.charCodeAt(pos) === 10) {
          ++pos;
        }
        ++curLine;
        chunkStart = lineStart = pos;
      } else {
        errors.unterminated(initialPos, initialLineStart, initialCurLine);
      }
    } else {
      ++pos;
    }
  }
  return {
    pos,
    str: out,
    firstInvalidLoc,
    lineStart,
    curLine,
    containsInvalid: !!firstInvalidLoc
  };
}
function isStringEnd(type, ch, input, pos) {
  if (type === "template") {
    return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
  }
  return ch === (type === "double" ? 34 : 39);
}
function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
  const throwOnInvalid = !inTemplate;
  pos++;
  const res = ch => ({
    pos,
    ch,
    lineStart,
    curLine
  });
  const ch = input.charCodeAt(pos++);
  switch (ch) {
    case 110:
      return res("\n");
    case 114:
      return res("\r");
    case 120:
      {
        let code;
        ({
          code,
          pos
        } = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors));
        return res(code === null ? null : String.fromCharCode(code));
      }
    case 117:
      {
        let code;
        ({
          code,
          pos
        } = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors));
        return res(code === null ? null : String.fromCodePoint(code));
      }
    case 116:
      return res("\t");
    case 98:
      return res("\b");
    case 118:
      return res("\u000b");
    case 102:
      return res("\f");
    case 13:
      if (input.charCodeAt(pos) === 10) {
        ++pos;
      }
    case 10:
      lineStart = pos;
      ++curLine;
    case 8232:
    case 8233:
      return res("");
    case 56:
    case 57:
      if (inTemplate) {
        return res(null);
      } else {
        errors.strictNumericEscape(pos - 1, lineStart, curLine);
      }
    default:
      if (ch >= 48 && ch <= 55) {
        const startPos = pos - 1;
        const match = /^[0-7]+/.exec(input.slice(startPos, pos + 2));
        let octalStr = match[0];
        let octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        pos += octalStr.length - 1;
        const next = input.charCodeAt(pos);
        if (octalStr !== "0" || next === 56 || next === 57) {
          if (inTemplate) {
            return res(null);
          } else {
            errors.strictNumericEscape(startPos, lineStart, curLine);
          }
        }
        return res(String.fromCharCode(octal));
      }
      return res(String.fromCharCode(ch));
  }
}
function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
  const initialPos = pos;
  let n;
  ({
    n,
    pos
  } = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid));
  if (n === null) {
    if (throwOnInvalid) {
      errors.invalidEscapeSequence(initialPos, lineStart, curLine);
    } else {
      pos = initialPos - 1;
    }
  }
  return {
    code: n,
    pos
  };
}
function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
  const start = pos;
  const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
  const isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
  let invalid = false;
  let total = 0;
  for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    const code = input.charCodeAt(pos);
    let val;
    if (code === 95 && allowNumSeparator !== "bail") {
      const prev = input.charCodeAt(pos - 1);
      const next = input.charCodeAt(pos + 1);
      if (!allowNumSeparator) {
        if (bailOnError) return {
          n: null,
          pos
        };
        errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
      } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
        if (bailOnError) return {
          n: null,
          pos
        };
        errors.unexpectedNumericSeparator(pos, lineStart, curLine);
      }
      ++pos;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (_isDigit(code)) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      if (val <= 9 && bailOnError) {
        return {
          n: null,
          pos
        };
      } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
        val = 0;
      } else if (forceLen) {
        val = 0;
        invalid = true;
      } else {
        break;
      }
    }
    ++pos;
    total = total * radix + val;
  }
  if (pos === start || len != null && pos - start !== len || invalid) {
    return {
      n: null,
      pos
    };
  }
  return {
    n: total,
    pos
  };
}
function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
  const ch = input.charCodeAt(pos);
  let code;
  if (ch === 123) {
    ++pos;
    ({
      code,
      pos
    } = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors));
    ++pos;
    if (code !== null && code > 0x10ffff) {
      if (throwOnInvalid) {
        errors.invalidCodePoint(pos, lineStart, curLine);
      } else {
        return {
          code: null,
          pos
        };
      }
    }
  } else {
    ({
      code,
      pos
    } = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors));
  }
  return {
    code,
    pos
  };
}
function buildPosition(pos, lineStart, curLine) {
  return new Position(curLine, pos - lineStart, pos);
}
const VALID_REGEX_FLAGS = new Set([103, 109, 115, 105, 121, 117, 100, 118]);
class Token {
  constructor(state) {
    const startIndex = state.startIndex || 0;
    this.type = state.type;
    this.value = state.value;
    this.start = startIndex + state.start;
    this.end = startIndex + state.end;
    this.loc = new SourceLocation(state.startLoc, state.endLoc);
  }
}
class Tokenizer extends CommentsParser {
  constructor(options, input) {
    super();
    this.isLookahead = void 0;
    this.tokens = [];
    this.errorHandlers_readInt = {
      invalidDigit: (pos, lineStart, curLine, radix) => {
        if (!(this.optionFlags & 2048)) return false;
        this.raise(Errors.InvalidDigit, buildPosition(pos, lineStart, curLine), {
          radix
        });
        return true;
      },
      numericSeparatorInEscapeSequence: this.errorBuilder(Errors.NumericSeparatorInEscapeSequence),
      unexpectedNumericSeparator: this.errorBuilder(Errors.UnexpectedNumericSeparator)
    };
    this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
      invalidEscapeSequence: this.errorBuilder(Errors.InvalidEscapeSequence),
      invalidCodePoint: this.errorBuilder(Errors.InvalidCodePoint)
    });
    this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
      strictNumericEscape: (pos, lineStart, curLine) => {
        this.recordStrictModeErrors(Errors.StrictNumericEscape, buildPosition(pos, lineStart, curLine));
      },
      unterminated: (pos, lineStart, curLine) => {
        throw this.raise(Errors.UnterminatedString, buildPosition(pos - 1, lineStart, curLine));
      }
    });
    this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
      strictNumericEscape: this.errorBuilder(Errors.StrictNumericEscape),
      unterminated: (pos, lineStart, curLine) => {
        throw this.raise(Errors.UnterminatedTemplate, buildPosition(pos, lineStart, curLine));
      }
    });
    this.state = new State();
    this.state.init(options);
    this.input = input;
    this.length = input.length;
    this.comments = [];
    this.isLookahead = false;
  }
  pushToken(token) {
    this.tokens.length = this.state.tokensLength;
    this.tokens.push(token);
    ++this.state.tokensLength;
  }
  next() {
    this.checkKeywordEscapes();
    if (this.optionFlags & 256) {
      this.pushToken(new Token(this.state));
    }
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  }
  eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  }
  match(type) {
    return this.state.type === type;
  }
  createLookaheadState(state) {
    return {
      pos: state.pos,
      value: null,
      type: state.type,
      start: state.start,
      end: state.end,
      context: [this.curContext()],
      inType: state.inType,
      startLoc: state.startLoc,
      lastTokEndLoc: state.lastTokEndLoc,
      curLine: state.curLine,
      lineStart: state.lineStart,
      curPosition: state.curPosition
    };
  }
  lookahead() {
    const old = this.state;
    this.state = this.createLookaheadState(old);
    this.isLookahead = true;
    this.nextToken();
    this.isLookahead = false;
    const curr = this.state;
    this.state = old;
    return curr;
  }
  nextTokenStart() {
    return this.nextTokenStartSince(this.state.pos);
  }
  nextTokenStartSince(pos) {
    skipWhiteSpace.lastIndex = pos;
    return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos;
  }
  lookaheadCharCode() {
    return this.input.charCodeAt(this.nextTokenStart());
  }
  nextTokenInLineStart() {
    return this.nextTokenInLineStartSince(this.state.pos);
  }
  nextTokenInLineStartSince(pos) {
    skipWhiteSpaceInLine.lastIndex = pos;
    return skipWhiteSpaceInLine.test(this.input) ? skipWhiteSpaceInLine.lastIndex : pos;
  }
  lookaheadInLineCharCode() {
    return this.input.charCodeAt(this.nextTokenInLineStart());
  }
  codePointAtPos(pos) {
    let cp = this.input.charCodeAt(pos);
    if ((cp & 0xfc00) === 0xd800 && ++pos < this.input.length) {
      const trail = this.input.charCodeAt(pos);
      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }
    return cp;
  }
  setStrict(strict) {
    this.state.strict = strict;
    if (strict) {
      this.state.strictErrors.forEach(([toParseError, at]) => this.raise(toParseError, at));
      this.state.strictErrors.clear();
    }
  }
  curContext() {
    return this.state.context[this.state.context.length - 1];
  }
  nextToken() {
    this.skipSpace();
    this.state.start = this.state.pos;
    if (!this.isLookahead) this.state.startLoc = this.state.curPosition();
    if (this.state.pos >= this.length) {
      this.finishToken(140);
      return;
    }
    this.getTokenFromCode(this.codePointAtPos(this.state.pos));
  }
  skipBlockComment(commentEnd) {
    let startLoc;
    if (!this.isLookahead) startLoc = this.state.curPosition();
    const start = this.state.pos;
    const end = this.input.indexOf(commentEnd, start + 2);
    if (end === -1) {
      throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
    }
    this.state.pos = end + commentEnd.length;
    lineBreakG.lastIndex = start + 2;
    while (lineBreakG.test(this.input) && lineBreakG.lastIndex <= end) {
      ++this.state.curLine;
      this.state.lineStart = lineBreakG.lastIndex;
    }
    if (this.isLookahead) return;
    const comment = {
      type: "CommentBlock",
      value: this.input.slice(start + 2, end),
      start: this.sourceToOffsetPos(start),
      end: this.sourceToOffsetPos(end + commentEnd.length),
      loc: new SourceLocation(startLoc, this.state.curPosition())
    };
    if (this.optionFlags & 256) this.pushToken(comment);
    return comment;
  }
  skipLineComment(startSkip) {
    const start = this.state.pos;
    let startLoc;
    if (!this.isLookahead) startLoc = this.state.curPosition();
    let ch = this.input.charCodeAt(this.state.pos += startSkip);
    if (this.state.pos < this.length) {
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
    }
    if (this.isLookahead) return;
    const end = this.state.pos;
    const value = this.input.slice(start + startSkip, end);
    const comment = {
      type: "CommentLine",
      value,
      start: this.sourceToOffsetPos(start),
      end: this.sourceToOffsetPos(end),
      loc: new SourceLocation(startLoc, this.state.curPosition())
    };
    if (this.optionFlags & 256) this.pushToken(comment);
    return comment;
  }
  skipSpace() {
    const spaceStart = this.state.pos;
    const comments = this.optionFlags & 4096 ? [] : null;
    loop: while (this.state.pos < this.length) {
      const ch = this.input.charCodeAt(this.state.pos);
      switch (ch) {
        case 32:
        case 160:
        case 9:
          ++this.state.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;
        case 47:
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              {
                const comment = this.skipBlockComment("*/");
                if (comment !== undefined) {
                  this.addComment(comment);
                  comments == null || comments.push(comment);
                }
                break;
              }
            case 47:
              {
                const comment = this.skipLineComment(2);
                if (comment !== undefined) {
                  this.addComment(comment);
                  comments == null || comments.push(comment);
                }
                break;
              }
            default:
              break loop;
          }
          break;
        default:
          if (isWhitespace(ch)) {
            ++this.state.pos;
          } else if (ch === 45 && !this.inModule && this.optionFlags & 8192) {
            const pos = this.state.pos;
            if (this.input.charCodeAt(pos + 1) === 45 && this.input.charCodeAt(pos + 2) === 62 && (spaceStart === 0 || this.state.lineStart > spaceStart)) {
              const comment = this.skipLineComment(3);
              if (comment !== undefined) {
                this.addComment(comment);
                comments == null || comments.push(comment);
              }
            } else {
              break loop;
            }
          } else if (ch === 60 && !this.inModule && this.optionFlags & 8192) {
            const pos = this.state.pos;
            if (this.input.charCodeAt(pos + 1) === 33 && this.input.charCodeAt(pos + 2) === 45 && this.input.charCodeAt(pos + 3) === 45) {
              const comment = this.skipLineComment(4);
              if (comment !== undefined) {
                this.addComment(comment);
                comments == null || comments.push(comment);
              }
            } else {
              break loop;
            }
          } else {
            break loop;
          }
      }
    }
    if ((comments == null ? void 0 : comments.length) > 0) {
      const end = this.state.pos;
      const commentWhitespace = {
        start: this.sourceToOffsetPos(spaceStart),
        end: this.sourceToOffsetPos(end),
        comments,
        leadingNode: null,
        trailingNode: null,
        containingNode: null
      };
      this.state.commentStack.push(commentWhitespace);
    }
  }
  finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    const prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;
    if (!this.isLookahead) {
      this.updateContext(prevType);
    }
  }
  replaceToken(type) {
    this.state.type = type;
    this.updateContext();
  }
  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter()) {
      return;
    }
    const nextPos = this.state.pos + 1;
    const next = this.codePointAtPos(nextPos);
    if (next >= 48 && next <= 57) {
      throw this.raise(Errors.UnexpectedDigitAfterHash, this.state.curPosition());
    }
    if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
      this.expectPlugin("recordAndTuple");
      if (this.getPluginOption("recordAndTuple", "syntaxType") === "bar") {
        throw this.raise(next === 123 ? Errors.RecordExpressionHashIncorrectStartSyntaxType : Errors.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
      }
      this.state.pos += 2;
      if (next === 123) {
        this.finishToken(7);
      } else {
        this.finishToken(1);
      }
    } else if (isIdentifierStart(next)) {
      ++this.state.pos;
      this.finishToken(139, this.readWord1(next));
    } else if (next === 92) {
      ++this.state.pos;
      this.finishToken(139, this.readWord1());
    } else {
      this.finishOp(27, 1);
    }
  }
  readToken_dot() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next >= 48 && next <= 57) {
      this.readNumber(true);
      return;
    }
    if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
      this.state.pos += 3;
      this.finishToken(21);
    } else {
      ++this.state.pos;
      this.finishToken(16);
    }
  }
  readToken_slash() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) {
      this.finishOp(31, 2);
    } else {
      this.finishOp(56, 1);
    }
  }
  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2) return false;
    let ch = this.input.charCodeAt(this.state.pos + 1);
    if (ch !== 33) return false;
    const start = this.state.pos;
    this.state.pos += 1;
    while (!isNewLine(ch) && ++this.state.pos < this.length) {
      ch = this.input.charCodeAt(this.state.pos);
    }
    const value = this.input.slice(start + 2, this.state.pos);
    this.finishToken(28, value);
    return true;
  }
  readToken_mult_modulo(code) {
    let type = code === 42 ? 55 : 54;
    let width = 1;
    let next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 42 && next === 42) {
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = 57;
    }
    if (next === 61 && !this.state.inType) {
      width++;
      type = code === 37 ? 33 : 30;
    }
    this.finishOp(type, width);
  }
  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === code) {
      if (this.input.charCodeAt(this.state.pos + 2) === 61) {
        this.finishOp(30, 3);
      } else {
        this.finishOp(code === 124 ? 41 : 42, 2);
      }
      return;
    }
    if (code === 124) {
      if (next === 62) {
        this.finishOp(39, 2);
        return;
      }
      if (this.hasPlugin("recordAndTuple") && next === 125) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
          throw this.raise(Errors.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
        }
        this.state.pos += 2;
        this.finishToken(9);
        return;
      }
      if (this.hasPlugin("recordAndTuple") && next === 93) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
          throw this.raise(Errors.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
        }
        this.state.pos += 2;
        this.finishToken(4);
        return;
      }
    }
    if (next === 61) {
      this.finishOp(30, 2);
      return;
    }
    this.finishOp(code === 124 ? 43 : 45, 1);
  }
  readToken_caret() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61 && !this.state.inType) {
      this.finishOp(32, 2);
    } else if (next === 94 && this.hasPlugin(["pipelineOperator", {
      proposal: "hack",
      topicToken: "^^"
    }])) {
      this.finishOp(37, 2);
      const lookaheadCh = this.input.codePointAt(this.state.pos);
      if (lookaheadCh === 94) {
        this.unexpected();
      }
    } else {
      this.finishOp(44, 1);
    }
  }
  readToken_atSign() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 64 && this.hasPlugin(["pipelineOperator", {
      proposal: "hack",
      topicToken: "@@"
    }])) {
      this.finishOp(38, 2);
    } else {
      this.finishOp(26, 1);
    }
  }
  readToken_plus_min(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === code) {
      this.finishOp(34, 2);
      return;
    }
    if (next === 61) {
      this.finishOp(30, 2);
    } else {
      this.finishOp(53, 1);
    }
  }
  readToken_lt() {
    const {
      pos
    } = this.state;
    const next = this.input.charCodeAt(pos + 1);
    if (next === 60) {
      if (this.input.charCodeAt(pos + 2) === 61) {
        this.finishOp(30, 3);
        return;
      }
      this.finishOp(51, 2);
      return;
    }
    if (next === 61) {
      this.finishOp(49, 2);
      return;
    }
    this.finishOp(47, 1);
  }
  readToken_gt() {
    const {
      pos
    } = this.state;
    const next = this.input.charCodeAt(pos + 1);
    if (next === 62) {
      const size = this.input.charCodeAt(pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(pos + size) === 61) {
        this.finishOp(30, size + 1);
        return;
      }
      this.finishOp(52, size);
      return;
    }
    if (next === 61) {
      this.finishOp(49, 2);
      return;
    }
    this.finishOp(48, 1);
  }
  readToken_eq_excl(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) {
      this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
      return;
    }
    if (code === 61 && next === 62) {
      this.state.pos += 2;
      this.finishToken(19);
      return;
    }
    this.finishOp(code === 61 ? 29 : 35, 1);
  }
  readToken_question() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    const next2 = this.input.charCodeAt(this.state.pos + 2);
    if (next === 63) {
      if (next2 === 61) {
        this.finishOp(30, 3);
      } else {
        this.finishOp(40, 2);
      }
    } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
      this.state.pos += 2;
      this.finishToken(18);
    } else {
      ++this.state.pos;
      this.finishToken(17);
    }
  }
  getTokenFromCode(code) {
    switch (code) {
      case 46:
        this.readToken_dot();
        return;
      case 40:
        ++this.state.pos;
        this.finishToken(10);
        return;
      case 41:
        ++this.state.pos;
        this.finishToken(11);
        return;
      case 59:
        ++this.state.pos;
        this.finishToken(13);
        return;
      case 44:
        ++this.state.pos;
        this.finishToken(12);
        return;
      case 91:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(Errors.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
          }
          this.state.pos += 2;
          this.finishToken(2);
        } else {
          ++this.state.pos;
          this.finishToken(0);
        }
        return;
      case 93:
        ++this.state.pos;
        this.finishToken(3);
        return;
      case 123:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(Errors.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
          }
          this.state.pos += 2;
          this.finishToken(6);
        } else {
          ++this.state.pos;
          this.finishToken(5);
        }
        return;
      case 125:
        ++this.state.pos;
        this.finishToken(8);
        return;
      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          this.finishOp(15, 2);
        } else {
          ++this.state.pos;
          this.finishToken(14);
        }
        return;
      case 63:
        this.readToken_question();
        return;
      case 96:
        this.readTemplateToken();
        return;
      case 48:
        {
          const next = this.input.charCodeAt(this.state.pos + 1);
          if (next === 120 || next === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (next === 111 || next === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (next === 98 || next === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this.readNumber(false);
        return;
      case 34:
      case 39:
        this.readString(code);
        return;
      case 47:
        this.readToken_slash();
        return;
      case 37:
      case 42:
        this.readToken_mult_modulo(code);
        return;
      case 124:
      case 38:
        this.readToken_pipe_amp(code);
        return;
      case 94:
        this.readToken_caret();
        return;
      case 43:
      case 45:
        this.readToken_plus_min(code);
        return;
      case 60:
        this.readToken_lt();
        return;
      case 62:
        this.readToken_gt();
        return;
      case 61:
      case 33:
        this.readToken_eq_excl(code);
        return;
      case 126:
        this.finishOp(36, 1);
        return;
      case 64:
        this.readToken_atSign();
        return;
      case 35:
        this.readToken_numberSign();
        return;
      case 92:
        this.readWord();
        return;
      default:
        if (isIdentifierStart(code)) {
          this.readWord(code);
          return;
        }
    }
    throw this.raise(Errors.InvalidOrUnexpectedToken, this.state.curPosition(), {
      unexpected: String.fromCodePoint(code)
    });
  }
  finishOp(type, size) {
    const str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    this.finishToken(type, str);
  }
  readRegexp() {
    const startLoc = this.state.startLoc;
    const start = this.state.start + 1;
    let escaped, inClass;
    let {
      pos
    } = this.state;
    for (;; ++pos) {
      if (pos >= this.length) {
        throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
      }
      const ch = this.input.charCodeAt(pos);
      if (isNewLine(ch)) {
        throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
      }
      if (escaped) {
        escaped = false;
      } else {
        if (ch === 91) {
          inClass = true;
        } else if (ch === 93 && inClass) {
          inClass = false;
        } else if (ch === 47 && !inClass) {
          break;
        }
        escaped = ch === 92;
      }
    }
    const content = this.input.slice(start, pos);
    ++pos;
    let mods = "";
    const nextPos = () => createPositionWithColumnOffset(startLoc, pos + 2 - start);
    while (pos < this.length) {
      const cp = this.codePointAtPos(pos);
      const char = String.fromCharCode(cp);
      if (VALID_REGEX_FLAGS.has(cp)) {
        if (cp === 118) {
          if (mods.includes("u")) {
            this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
          }
        } else if (cp === 117) {
          if (mods.includes("v")) {
            this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
          }
        }
        if (mods.includes(char)) {
          this.raise(Errors.DuplicateRegExpFlags, nextPos());
        }
      } else if (isIdentifierChar(cp) || cp === 92) {
        this.raise(Errors.MalformedRegExpFlags, nextPos());
      } else {
        break;
      }
      ++pos;
      mods += char;
    }
    this.state.pos = pos;
    this.finishToken(138, {
      pattern: content,
      flags: mods
    });
  }
  readInt(radix, len, forceLen = false, allowNumSeparator = true) {
    const {
      n,
      pos
    } = readInt(this.input, this.state.pos, this.state.lineStart, this.state.curLine, radix, len, forceLen, allowNumSeparator, this.errorHandlers_readInt, false);
    this.state.pos = pos;
    return n;
  }
  readRadixNumber(radix) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let isBigInt = false;
    this.state.pos += 2;
    const val = this.readInt(radix);
    if (val == null) {
      this.raise(Errors.InvalidDigit, createPositionWithColumnOffset(startLoc, 2), {
        radix
      });
    }
    const next = this.input.charCodeAt(this.state.pos);
    if (next === 110) {
      ++this.state.pos;
      isBigInt = true;
    } else if (next === 109) {
      throw this.raise(Errors.InvalidDecimal, startLoc);
    }
    if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
      throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
    }
    if (isBigInt) {
      const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(136, str);
      return;
    }
    this.finishToken(135, val);
  }
  readNumber(startsWithDot) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let isFloat = false;
    let isBigInt = false;
    let hasExponent = false;
    let isOctal = false;
    if (!startsWithDot && this.readInt(10) === null) {
      this.raise(Errors.InvalidNumber, this.state.curPosition());
    }
    const hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (hasLeadingZero) {
      const integer = this.input.slice(start, this.state.pos);
      this.recordStrictModeErrors(Errors.StrictOctalLiteral, startLoc);
      if (!this.state.strict) {
        const underscorePos = integer.indexOf("_");
        if (underscorePos > 0) {
          this.raise(Errors.ZeroDigitNumericSeparator, createPositionWithColumnOffset(startLoc, underscorePos));
        }
      }
      isOctal = hasLeadingZero && !/[89]/.test(integer);
    }
    let next = this.input.charCodeAt(this.state.pos);
    if (next === 46 && !isOctal) {
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }
    if ((next === 69 || next === 101) && !isOctal) {
      next = this.input.charCodeAt(++this.state.pos);
      if (next === 43 || next === 45) {
        ++this.state.pos;
      }
      if (this.readInt(10) === null) {
        this.raise(Errors.InvalidOrMissingExponent, startLoc);
      }
      isFloat = true;
      hasExponent = true;
      next = this.input.charCodeAt(this.state.pos);
    }
    if (next === 110) {
      if (isFloat || hasLeadingZero) {
        this.raise(Errors.InvalidBigIntLiteral, startLoc);
      }
      ++this.state.pos;
      isBigInt = true;
    }
    if (next === 109) {
      this.expectPlugin("decimal", this.state.curPosition());
      if (hasExponent || hasLeadingZero) {
        this.raise(Errors.InvalidDecimal, startLoc);
      }
      ++this.state.pos;
      var isDecimal = true;
    }
    if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
      throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
    }
    const str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");
    if (isBigInt) {
      this.finishToken(136, str);
      return;
    }
    if (isDecimal) {
      this.finishToken(137, str);
      return;
    }
    const val = isOctal ? parseInt(str, 8) : parseFloat(str);
    this.finishToken(135, val);
  }
  readCodePoint(throwOnInvalid) {
    const {
      code,
      pos
    } = readCodePoint(this.input, this.state.pos, this.state.lineStart, this.state.curLine, throwOnInvalid, this.errorHandlers_readCodePoint);
    this.state.pos = pos;
    return code;
  }
  readString(quote) {
    const {
      str,
      pos,
      curLine,
      lineStart
    } = readStringContents(quote === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
    this.state.pos = pos + 1;
    this.state.lineStart = lineStart;
    this.state.curLine = curLine;
    this.finishToken(134, str);
  }
  readTemplateContinuation() {
    if (!this.match(8)) {
      this.unexpected(null, 8);
    }
    this.state.pos--;
    this.readTemplateToken();
  }
  readTemplateToken() {
    const opening = this.input[this.state.pos];
    const {
      str,
      firstInvalidLoc,
      pos,
      curLine,
      lineStart
    } = readStringContents("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
    this.state.pos = pos + 1;
    this.state.lineStart = lineStart;
    this.state.curLine = curLine;
    if (firstInvalidLoc) {
      this.state.firstInvalidTemplateEscapePos = new Position(firstInvalidLoc.curLine, firstInvalidLoc.pos - firstInvalidLoc.lineStart, this.sourceToOffsetPos(firstInvalidLoc.pos));
    }
    if (this.input.codePointAt(pos) === 96) {
      this.finishToken(24, firstInvalidLoc ? null : opening + str + "`");
    } else {
      this.state.pos++;
      this.finishToken(25, firstInvalidLoc ? null : opening + str + "${");
    }
  }
  recordStrictModeErrors(toParseError, at) {
    const index = at.index;
    if (this.state.strict && !this.state.strictErrors.has(index)) {
      this.raise(toParseError, at);
    } else {
      this.state.strictErrors.set(index, [toParseError, at]);
    }
  }
  readWord1(firstCode) {
    this.state.containsEsc = false;
    let word = "";
    const start = this.state.pos;
    let chunkStart = this.state.pos;
    if (firstCode !== undefined) {
      this.state.pos += firstCode <= 0xffff ? 1 : 2;
    }
    while (this.state.pos < this.length) {
      const ch = this.codePointAtPos(this.state.pos);
      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) {
        this.state.containsEsc = true;
        word += this.input.slice(chunkStart, this.state.pos);
        const escStart = this.state.curPosition();
        const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;
        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          this.raise(Errors.MissingUnicodeEscape, this.state.curPosition());
          chunkStart = this.state.pos - 1;
          continue;
        }
        ++this.state.pos;
        const esc = this.readCodePoint(true);
        if (esc !== null) {
          if (!identifierCheck(esc)) {
            this.raise(Errors.EscapedCharNotAnIdentifier, escStart);
          }
          word += String.fromCodePoint(esc);
        }
        chunkStart = this.state.pos;
      } else {
        break;
      }
    }
    return word + this.input.slice(chunkStart, this.state.pos);
  }
  readWord(firstCode) {
    const word = this.readWord1(firstCode);
    const type = keywords$1.get(word);
    if (type !== undefined) {
      this.finishToken(type, tokenLabelName(type));
    } else {
      this.finishToken(132, word);
    }
  }
  checkKeywordEscapes() {
    const {
      type
    } = this.state;
    if (tokenIsKeyword(type) && this.state.containsEsc) {
      this.raise(Errors.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: tokenLabelName(type)
      });
    }
  }
  raise(toParseError, at, details = {}) {
    const loc = at instanceof Position ? at : at.loc.start;
    const error = toParseError(loc, details);
    if (!(this.optionFlags & 2048)) throw error;
    if (!this.isLookahead) this.state.errors.push(error);
    return error;
  }
  raiseOverwrite(toParseError, at, details = {}) {
    const loc = at instanceof Position ? at : at.loc.start;
    const pos = loc.index;
    const errors = this.state.errors;
    for (let i = errors.length - 1; i >= 0; i--) {
      const error = errors[i];
      if (error.loc.index === pos) {
        return errors[i] = toParseError(loc, details);
      }
      if (error.loc.index < pos) break;
    }
    return this.raise(toParseError, at, details);
  }
  updateContext(prevType) {}
  unexpected(loc, type) {
    throw this.raise(Errors.UnexpectedToken, loc != null ? loc : this.state.startLoc, {
      expected: type ? tokenLabelName(type) : null
    });
  }
  expectPlugin(pluginName, loc) {
    if (this.hasPlugin(pluginName)) {
      return true;
    }
    throw this.raise(Errors.MissingPlugin, loc != null ? loc : this.state.startLoc, {
      missingPlugin: [pluginName]
    });
  }
  expectOnePlugin(pluginNames) {
    if (!pluginNames.some(name => this.hasPlugin(name))) {
      throw this.raise(Errors.MissingOneOfPlugins, this.state.startLoc, {
        missingPlugin: pluginNames
      });
    }
  }
  errorBuilder(error) {
    return (pos, lineStart, curLine) => {
      this.raise(error, buildPosition(pos, lineStart, curLine));
    };
  }
}
class ClassScope {
  constructor() {
    this.privateNames = new Set();
    this.loneAccessors = new Map();
    this.undefinedPrivateNames = new Map();
  }
}
class ClassScopeHandler {
  constructor(parser) {
    this.parser = void 0;
    this.stack = [];
    this.undefinedPrivateNames = new Map();
    this.parser = parser;
  }
  current() {
    return this.stack[this.stack.length - 1];
  }
  enter() {
    this.stack.push(new ClassScope());
  }
  exit() {
    const oldClassScope = this.stack.pop();
    const current = this.current();
    for (const [name, loc] of Array.from(oldClassScope.undefinedPrivateNames)) {
      if (current) {
        if (!current.undefinedPrivateNames.has(name)) {
          current.undefinedPrivateNames.set(name, loc);
        }
      } else {
        this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
          identifierName: name
        });
      }
    }
  }
  declarePrivateName(name, elementType, loc) {
    const {
      privateNames,
      loneAccessors,
      undefinedPrivateNames
    } = this.current();
    let redefined = privateNames.has(name);
    if (elementType & 3) {
      const accessor = redefined && loneAccessors.get(name);
      if (accessor) {
        const oldStatic = accessor & 4;
        const newStatic = elementType & 4;
        const oldKind = accessor & 3;
        const newKind = elementType & 3;
        redefined = oldKind === newKind || oldStatic !== newStatic;
        if (!redefined) loneAccessors.delete(name);
      } else if (!redefined) {
        loneAccessors.set(name, elementType);
      }
    }
    if (redefined) {
      this.parser.raise(Errors.PrivateNameRedeclaration, loc, {
        identifierName: name
      });
    }
    privateNames.add(name);
    undefinedPrivateNames.delete(name);
  }
  usePrivateName(name, loc) {
    let classScope;
    for (classScope of this.stack) {
      if (classScope.privateNames.has(name)) return;
    }
    if (classScope) {
      classScope.undefinedPrivateNames.set(name, loc);
    } else {
      this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
        identifierName: name
      });
    }
  }
}
class ExpressionScope {
  constructor(type = 0) {
    this.type = type;
  }
  canBeArrowParameterDeclaration() {
    return this.type === 2 || this.type === 1;
  }
  isCertainlyParameterDeclaration() {
    return this.type === 3;
  }
}
class ArrowHeadParsingScope extends ExpressionScope {
  constructor(type) {
    super(type);
    this.declarationErrors = new Map();
  }
  recordDeclarationError(ParsingErrorClass, at) {
    const index = at.index;
    this.declarationErrors.set(index, [ParsingErrorClass, at]);
  }
  clearDeclarationError(index) {
    this.declarationErrors.delete(index);
  }
  iterateErrors(iterator) {
    this.declarationErrors.forEach(iterator);
  }
}
class ExpressionScopeHandler {
  constructor(parser) {
    this.parser = void 0;
    this.stack = [new ExpressionScope()];
    this.parser = parser;
  }
  enter(scope) {
    this.stack.push(scope);
  }
  exit() {
    this.stack.pop();
  }
  recordParameterInitializerError(toParseError, node) {
    const origin = node.loc.start;
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];
    while (!scope.isCertainlyParameterDeclaration()) {
      if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(toParseError, origin);
      } else {
        return;
      }
      scope = stack[--i];
    }
    this.parser.raise(toParseError, origin);
  }
  recordArrowParameterBindingError(error, node) {
    const {
      stack
    } = this;
    const scope = stack[stack.length - 1];
    const origin = node.loc.start;
    if (scope.isCertainlyParameterDeclaration()) {
      this.parser.raise(error, origin);
    } else if (scope.canBeArrowParameterDeclaration()) {
      scope.recordDeclarationError(error, origin);
    } else {
      return;
    }
  }
  recordAsyncArrowParametersError(at) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];
    while (scope.canBeArrowParameterDeclaration()) {
      if (scope.type === 2) {
        scope.recordDeclarationError(Errors.AwaitBindingIdentifier, at);
      }
      scope = stack[--i];
    }
  }
  validateAsPattern() {
    const {
      stack
    } = this;
    const currentScope = stack[stack.length - 1];
    if (!currentScope.canBeArrowParameterDeclaration()) return;
    currentScope.iterateErrors(([toParseError, loc]) => {
      this.parser.raise(toParseError, loc);
      let i = stack.length - 2;
      let scope = stack[i];
      while (scope.canBeArrowParameterDeclaration()) {
        scope.clearDeclarationError(loc.index);
        scope = stack[--i];
      }
    });
  }
}
function newParameterDeclarationScope() {
  return new ExpressionScope(3);
}
function newArrowHeadScope() {
  return new ArrowHeadParsingScope(1);
}
function newAsyncArrowScope() {
  return new ArrowHeadParsingScope(2);
}
function newExpressionScope() {
  return new ExpressionScope();
}
class ProductionParameterHandler {
  constructor() {
    this.stacks = [];
  }
  enter(flags) {
    this.stacks.push(flags);
  }
  exit() {
    this.stacks.pop();
  }
  currentFlags() {
    return this.stacks[this.stacks.length - 1];
  }
  get hasAwait() {
    return (this.currentFlags() & 2) > 0;
  }
  get hasYield() {
    return (this.currentFlags() & 1) > 0;
  }
  get hasReturn() {
    return (this.currentFlags() & 4) > 0;
  }
  get hasIn() {
    return (this.currentFlags() & 8) > 0;
  }
}
function functionFlags(isAsync, isGenerator) {
  return (isAsync ? 2 : 0) | (isGenerator ? 1 : 0);
}
class UtilParser extends Tokenizer {
  addExtra(node, key, value, enumerable = true) {
    if (!node) return;
    let {
      extra
    } = node;
    if (extra == null) {
      extra = {};
      node.extra = extra;
    }
    if (enumerable) {
      extra[key] = value;
    } else {
      Object.defineProperty(extra, key, {
        enumerable,
        value
      });
    }
  }
  isContextual(token) {
    return this.state.type === token && !this.state.containsEsc;
  }
  isUnparsedContextual(nameStart, name) {
    const nameEnd = nameStart + name.length;
    if (this.input.slice(nameStart, nameEnd) === name) {
      const nextCh = this.input.charCodeAt(nameEnd);
      return !(isIdentifierChar(nextCh) || (nextCh & 0xfc00) === 0xd800);
    }
    return false;
  }
  isLookaheadContextual(name) {
    const next = this.nextTokenStart();
    return this.isUnparsedContextual(next, name);
  }
  eatContextual(token) {
    if (this.isContextual(token)) {
      this.next();
      return true;
    }
    return false;
  }
  expectContextual(token, toParseError) {
    if (!this.eatContextual(token)) {
      if (toParseError != null) {
        throw this.raise(toParseError, this.state.startLoc);
      }
      this.unexpected(null, token);
    }
  }
  canInsertSemicolon() {
    return this.match(140) || this.match(8) || this.hasPrecedingLineBreak();
  }
  hasPrecedingLineBreak() {
    return hasNewLine(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
  }
  hasFollowingLineBreak() {
    return hasNewLine(this.input, this.state.end, this.nextTokenStart());
  }
  isLineTerminator() {
    return this.eat(13) || this.canInsertSemicolon();
  }
  semicolon(allowAsi = true) {
    if (allowAsi ? this.isLineTerminator() : this.eat(13)) return;
    this.raise(Errors.MissingSemicolon, this.state.lastTokEndLoc);
  }
  expect(type, loc) {
    if (!this.eat(type)) {
      this.unexpected(loc, type);
    }
  }
  tryParse(fn, oldState = this.state.clone()) {
    const abortSignal = {
      node: null
    };
    try {
      const node = fn((node = null) => {
        abortSignal.node = node;
        throw abortSignal;
      });
      if (this.state.errors.length > oldState.errors.length) {
        const failState = this.state;
        this.state = oldState;
        this.state.tokensLength = failState.tokensLength;
        return {
          node,
          error: failState.errors[oldState.errors.length],
          thrown: false,
          aborted: false,
          failState
        };
      }
      return {
        node,
        error: null,
        thrown: false,
        aborted: false,
        failState: null
      };
    } catch (error) {
      const failState = this.state;
      this.state = oldState;
      if (error instanceof SyntaxError) {
        return {
          node: null,
          error,
          thrown: true,
          aborted: false,
          failState
        };
      }
      if (error === abortSignal) {
        return {
          node: abortSignal.node,
          error: null,
          thrown: false,
          aborted: true,
          failState
        };
      }
      throw error;
    }
  }
  checkExpressionErrors(refExpressionErrors, andThrow) {
    if (!refExpressionErrors) return false;
    const {
      shorthandAssignLoc,
      doubleProtoLoc,
      privateKeyLoc,
      optionalParametersLoc
    } = refExpressionErrors;
    const hasErrors = !!shorthandAssignLoc || !!doubleProtoLoc || !!optionalParametersLoc || !!privateKeyLoc;
    if (!andThrow) {
      return hasErrors;
    }
    if (shorthandAssignLoc != null) {
      this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
    }
    if (doubleProtoLoc != null) {
      this.raise(Errors.DuplicateProto, doubleProtoLoc);
    }
    if (privateKeyLoc != null) {
      this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
    }
    if (optionalParametersLoc != null) {
      this.unexpected(optionalParametersLoc);
    }
  }
  isLiteralPropertyName() {
    return tokenIsLiteralPropertyName(this.state.type);
  }
  isPrivateName(node) {
    return node.type === "PrivateName";
  }
  getPrivateNameSV(node) {
    return node.id.name;
  }
  hasPropertyAsPrivateName(node) {
    return (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") && this.isPrivateName(node.property);
  }
  isObjectProperty(node) {
    return node.type === "ObjectProperty";
  }
  isObjectMethod(node) {
    return node.type === "ObjectMethod";
  }
  initializeScopes(inModule = this.options.sourceType === "module") {
    const oldLabels = this.state.labels;
    this.state.labels = [];
    const oldExportedIdentifiers = this.exportedIdentifiers;
    this.exportedIdentifiers = new Set();
    const oldInModule = this.inModule;
    this.inModule = inModule;
    const oldScope = this.scope;
    const ScopeHandler = this.getScopeHandler();
    this.scope = new ScopeHandler(this, inModule);
    const oldProdParam = this.prodParam;
    this.prodParam = new ProductionParameterHandler();
    const oldClassScope = this.classScope;
    this.classScope = new ClassScopeHandler(this);
    const oldExpressionScope = this.expressionScope;
    this.expressionScope = new ExpressionScopeHandler(this);
    return () => {
      this.state.labels = oldLabels;
      this.exportedIdentifiers = oldExportedIdentifiers;
      this.inModule = oldInModule;
      this.scope = oldScope;
      this.prodParam = oldProdParam;
      this.classScope = oldClassScope;
      this.expressionScope = oldExpressionScope;
    };
  }
  enterInitialScopes() {
    let paramFlags = 0;
    if (this.inModule) {
      paramFlags |= 2;
    }
    if (this.optionFlags & 32) {
      paramFlags |= 1;
    }
    this.scope.enter(1);
    this.prodParam.enter(paramFlags);
  }
  checkDestructuringPrivate(refExpressionErrors) {
    const {
      privateKeyLoc
    } = refExpressionErrors;
    if (privateKeyLoc !== null) {
      this.expectPlugin("destructuringPrivate", privateKeyLoc);
    }
  }
}
class ExpressionErrors {
  constructor() {
    this.shorthandAssignLoc = null;
    this.doubleProtoLoc = null;
    this.privateKeyLoc = null;
    this.optionalParametersLoc = null;
  }
}
class Node {
  constructor(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if ((parser == null ? void 0 : parser.optionFlags) & 128) this.range = [pos, 0];
    if (parser != null && parser.filename) this.loc.filename = parser.filename;
  }
}
const NodePrototype = Node.prototype;
{
  NodePrototype.__clone = function () {
    const newNode = new Node(undefined, this.start, this.loc.start);
    const keys = Object.keys(this);
    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];
      if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
        newNode[key] = this[key];
      }
    }
    return newNode;
  };
}
function clonePlaceholder(node) {
  return cloneIdentifier(node);
}
function cloneIdentifier(node) {
  const {
    type,
    start,
    end,
    loc,
    range,
    extra,
    name
  } = node;
  const cloned = Object.create(NodePrototype);
  cloned.type = type;
  cloned.start = start;
  cloned.end = end;
  cloned.loc = loc;
  cloned.range = range;
  cloned.extra = extra;
  cloned.name = name;
  if (type === "Placeholder") {
    cloned.expectedNode = node.expectedNode;
  }
  return cloned;
}
function cloneStringLiteral(node) {
  const {
    type,
    start,
    end,
    loc,
    range,
    extra
  } = node;
  if (type === "Placeholder") {
    return clonePlaceholder(node);
  }
  const cloned = Object.create(NodePrototype);
  cloned.type = type;
  cloned.start = start;
  cloned.end = end;
  cloned.loc = loc;
  cloned.range = range;
  if (node.raw !== undefined) {
    cloned.raw = node.raw;
  } else {
    cloned.extra = extra;
  }
  cloned.value = node.value;
  return cloned;
}
class NodeUtils extends UtilParser {
  startNode() {
    const loc = this.state.startLoc;
    return new Node(this, loc.index, loc);
  }
  startNodeAt(loc) {
    return new Node(this, loc.index, loc);
  }
  startNodeAtNode(type) {
    return this.startNodeAt(type.loc.start);
  }
  finishNode(node, type) {
    return this.finishNodeAt(node, type, this.state.lastTokEndLoc);
  }
  finishNodeAt(node, type, endLoc) {
    node.type = type;
    node.end = endLoc.index;
    node.loc.end = endLoc;
    if (this.optionFlags & 128) node.range[1] = endLoc.index;
    if (this.optionFlags & 4096) {
      this.processComment(node);
    }
    return node;
  }
  resetStartLocation(node, startLoc) {
    node.start = startLoc.index;
    node.loc.start = startLoc;
    if (this.optionFlags & 128) node.range[0] = startLoc.index;
  }
  resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
    node.end = endLoc.index;
    node.loc.end = endLoc;
    if (this.optionFlags & 128) node.range[1] = endLoc.index;
  }
  resetStartLocationFromNode(node, locationNode) {
    this.resetStartLocation(node, locationNode.loc.start);
  }
}
const reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
const FlowErrors = ParseErrorEnum`flow`({
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
  AssignReservedType: ({
    reservedType
  }) => `Cannot overwrite reserved type ${reservedType}.`,
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
  EnumBooleanMemberNotInitialized: ({
    memberName,
    enumName
  }) => `Boolean enum members need to be initialized. Use either \`${memberName} = true,\` or \`${memberName} = false,\` in enum \`${enumName}\`.`,
  EnumDuplicateMemberName: ({
    memberName,
    enumName
  }) => `Enum member names need to be unique, but the name \`${memberName}\` has already been used before in enum \`${enumName}\`.`,
  EnumInconsistentMemberValues: ({
    enumName
  }) => `Enum \`${enumName}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
  EnumInvalidExplicitType: ({
    invalidEnumType,
    enumName
  }) => `Enum type \`${invalidEnumType}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${enumName}\`.`,
  EnumInvalidExplicitTypeUnknownSupplied: ({
    enumName
  }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${enumName}\`.`,
  EnumInvalidMemberInitializerPrimaryType: ({
    enumName,
    memberName,
    explicitType
  }) => `Enum \`${enumName}\` has type \`${explicitType}\`, so the initializer of \`${memberName}\` needs to be a ${explicitType} literal.`,
  EnumInvalidMemberInitializerSymbolType: ({
    enumName,
    memberName
  }) => `Symbol enum members cannot be initialized. Use \`${memberName},\` in enum \`${enumName}\`.`,
  EnumInvalidMemberInitializerUnknownType: ({
    enumName,
    memberName
  }) => `The enum member initializer for \`${memberName}\` needs to be a literal (either a boolean, number, or string) in enum \`${enumName}\`.`,
  EnumInvalidMemberName: ({
    enumName,
    memberName,
    suggestion
  }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${memberName}\`, consider using \`${suggestion}\`, in enum \`${enumName}\`.`,
  EnumNumberMemberNotInitialized: ({
    enumName,
    memberName
  }) => `Number enum members need to be initialized, e.g. \`${memberName} = 1\` in enum \`${enumName}\`.`,
  EnumStringMemberInconsistentlyInitialized: ({
    enumName
  }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${enumName}\`.`,
  GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
  ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
  InexactVariance: "Explicit inexact syntax cannot have variance.",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
  PatternIsOptional: Object.assign({
    message: "A binding pattern parameter cannot be optional in an implementation signature."
  }, {
    reasonCode: "OptionalBindingPattern"
  }),
  SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
  SpreadVariance: "Spread properties cannot have variance.",
  ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
  ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
  ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
  ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
  ThisParamNoDefault: "The `this` parameter may not have a default value.",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
  UnexpectedReservedType: ({
    reservedType
  }) => `Unexpected reserved type ${reservedType}.`,
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
  UnsupportedDeclareExportKind: ({
    unsupportedExportKind,
    suggestion
  }) => `\`declare export ${unsupportedExportKind}\` is not supported. Use \`${suggestion}\` instead.`,
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
  UnterminatedFlowComment: "Unterminated flow-comment."
});
function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}
function hasTypeImportKind(node) {
  return node.importKind === "type" || node.importKind === "typeof";
}
const exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};
function partition(list, test) {
  const list1 = [];
  const list2 = [];
  for (let i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }
  return [list1, list2];
}
const FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
var flow = superClass => class FlowParserMixin extends superClass {
  constructor(...args) {
    super(...args);
    this.flowPragma = undefined;
  }
  getScopeHandler() {
    return FlowScopeHandler;
  }
  shouldParseTypes() {
    return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
  }
  finishToken(type, val) {
    if (type !== 134 && type !== 13 && type !== 28) {
      if (this.flowPragma === undefined) {
        this.flowPragma = null;
      }
    }
    super.finishToken(type, val);
  }
  addComment(comment) {
    if (this.flowPragma === undefined) {
      const matches = FLOW_PRAGMA_REGEX.exec(comment.value);
      if (!matches) ;else if (matches[1] === "flow") {
        this.flowPragma = "flow";
      } else if (matches[1] === "noflow") {
        this.flowPragma = "noflow";
      } else {
        throw new Error("Unexpected flow pragma");
      }
    }
    super.addComment(comment);
  }
  flowParseTypeInitialiser(tok) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(tok || 14);
    const type = this.flowParseType();
    this.state.inType = oldInType;
    return type;
  }
  flowParsePredicate() {
    const node = this.startNode();
    const moduloLoc = this.state.startLoc;
    this.next();
    this.expectContextual(110);
    if (this.state.lastTokStartLoc.index > moduloLoc.index + 1) {
      this.raise(FlowErrors.UnexpectedSpaceBetweenModuloChecks, moduloLoc);
    }
    if (this.eat(10)) {
      node.value = super.parseExpression();
      this.expect(11);
      return this.finishNode(node, "DeclaredPredicate");
    } else {
      return this.finishNode(node, "InferredPredicate");
    }
  }
  flowParseTypeAndPredicateInitialiser() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(14);
    let type = null;
    let predicate = null;
    if (this.match(54)) {
      this.state.inType = oldInType;
      predicate = this.flowParsePredicate();
    } else {
      type = this.flowParseType();
      this.state.inType = oldInType;
      if (this.match(54)) {
        predicate = this.flowParsePredicate();
      }
    }
    return [type, predicate];
  }
  flowParseDeclareClass(node) {
    this.next();
    this.flowParseInterfaceish(node, true);
    return this.finishNode(node, "DeclareClass");
  }
  flowParseDeclareFunction(node) {
    this.next();
    const id = node.id = this.parseIdentifier();
    const typeNode = this.startNode();
    const typeContainer = this.startNode();
    if (this.match(47)) {
      typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      typeNode.typeParameters = null;
    }
    this.expect(10);
    const tmp = this.flowParseFunctionTypeParams();
    typeNode.params = tmp.params;
    typeNode.rest = tmp.rest;
    typeNode.this = tmp._this;
    this.expect(11);
    [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
    typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
    id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
    this.resetEndLocation(id);
    this.semicolon();
    this.scope.declareName(node.id.name, 2048, node.id.loc.start);
    return this.finishNode(node, "DeclareFunction");
  }
  flowParseDeclare(node, insideModule) {
    if (this.match(80)) {
      return this.flowParseDeclareClass(node);
    } else if (this.match(68)) {
      return this.flowParseDeclareFunction(node);
    } else if (this.match(74)) {
      return this.flowParseDeclareVariable(node);
    } else if (this.eatContextual(127)) {
      if (this.match(16)) {
        return this.flowParseDeclareModuleExports(node);
      } else {
        if (insideModule) {
          this.raise(FlowErrors.NestedDeclareModule, this.state.lastTokStartLoc);
        }
        return this.flowParseDeclareModule(node);
      }
    } else if (this.isContextual(130)) {
      return this.flowParseDeclareTypeAlias(node);
    } else if (this.isContextual(131)) {
      return this.flowParseDeclareOpaqueType(node);
    } else if (this.isContextual(129)) {
      return this.flowParseDeclareInterface(node);
    } else if (this.match(82)) {
      return this.flowParseDeclareExportDeclaration(node, insideModule);
    } else {
      this.unexpected();
    }
  }
  flowParseDeclareVariable(node) {
    this.next();
    node.id = this.flowParseTypeAnnotatableIdentifier(true);
    this.scope.declareName(node.id.name, 5, node.id.loc.start);
    this.semicolon();
    return this.finishNode(node, "DeclareVariable");
  }
  flowParseDeclareModule(node) {
    this.scope.enter(0);
    if (this.match(134)) {
      node.id = super.parseExprAtom();
    } else {
      node.id = this.parseIdentifier();
    }
    const bodyNode = node.body = this.startNode();
    const body = bodyNode.body = [];
    this.expect(5);
    while (!this.match(8)) {
      let bodyNode = this.startNode();
      if (this.match(83)) {
        this.next();
        if (!this.isContextual(130) && !this.match(87)) {
          this.raise(FlowErrors.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc);
        }
        super.parseImport(bodyNode);
      } else {
        this.expectContextual(125, FlowErrors.UnsupportedStatementInDeclareModule);
        bodyNode = this.flowParseDeclare(bodyNode, true);
      }
      body.push(bodyNode);
    }
    this.scope.exit();
    this.expect(8);
    this.finishNode(bodyNode, "BlockStatement");
    let kind = null;
    let hasModuleExport = false;
    body.forEach(bodyElement => {
      if (isEsModuleType(bodyElement)) {
        if (kind === "CommonJS") {
          this.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
        }
        kind = "ES";
      } else if (bodyElement.type === "DeclareModuleExports") {
        if (hasModuleExport) {
          this.raise(FlowErrors.DuplicateDeclareModuleExports, bodyElement);
        }
        if (kind === "ES") {
          this.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
        }
        kind = "CommonJS";
        hasModuleExport = true;
      }
    });
    node.kind = kind || "CommonJS";
    return this.finishNode(node, "DeclareModule");
  }
  flowParseDeclareExportDeclaration(node, insideModule) {
    this.expect(82);
    if (this.eat(65)) {
      if (this.match(68) || this.match(80)) {
        node.declaration = this.flowParseDeclare(this.startNode());
      } else {
        node.declaration = this.flowParseType();
        this.semicolon();
      }
      node.default = true;
      return this.finishNode(node, "DeclareExportDeclaration");
    } else {
      if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !insideModule) {
        const label = this.state.value;
        throw this.raise(FlowErrors.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: label,
          suggestion: exportSuggestions[label]
        });
      }
      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131)) {
        node.declaration = this.flowParseDeclare(this.startNode());
        node.default = false;
        return this.finishNode(node, "DeclareExportDeclaration");
      } else if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131)) {
        node = this.parseExport(node, null);
        if (node.type === "ExportNamedDeclaration") {
          node.type = "ExportDeclaration";
          node.default = false;
          delete node.exportKind;
        }
        node.type = "Declare" + node.type;
        return node;
      }
    }
    this.unexpected();
  }
  flowParseDeclareModuleExports(node) {
    this.next();
    this.expectContextual(111);
    node.typeAnnotation = this.flowParseTypeAnnotation();
    this.semicolon();
    return this.finishNode(node, "DeclareModuleExports");
  }
  flowParseDeclareTypeAlias(node) {
    this.next();
    const finished = this.flowParseTypeAlias(node);
    finished.type = "DeclareTypeAlias";
    return finished;
  }
  flowParseDeclareOpaqueType(node) {
    this.next();
    const finished = this.flowParseOpaqueType(node, true);
    finished.type = "DeclareOpaqueType";
    return finished;
  }
  flowParseDeclareInterface(node) {
    this.next();
    this.flowParseInterfaceish(node, false);
    return this.finishNode(node, "DeclareInterface");
  }
  flowParseInterfaceish(node, isClass) {
    node.id = this.flowParseRestrictedIdentifier(!isClass, true);
    this.scope.declareName(node.id.name, isClass ? 17 : 8201, node.id.loc.start);
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }
    node.extends = [];
    if (this.eat(81)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (!isClass && this.eat(12));
    }
    if (isClass) {
      node.implements = [];
      node.mixins = [];
      if (this.eatContextual(117)) {
        do {
          node.mixins.push(this.flowParseInterfaceExtends());
        } while (this.eat(12));
      }
      if (this.eatContextual(113)) {
        do {
          node.implements.push(this.flowParseInterfaceExtends());
        } while (this.eat(12));
      }
    }
    node.body = this.flowParseObjectType({
      allowStatic: isClass,
      allowExact: false,
      allowSpread: false,
      allowProto: isClass,
      allowInexact: false
    });
  }
  flowParseInterfaceExtends() {
    const node = this.startNode();
    node.id = this.flowParseQualifiedTypeIdentifier();
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    } else {
      node.typeParameters = null;
    }
    return this.finishNode(node, "InterfaceExtends");
  }
  flowParseInterface(node) {
    this.flowParseInterfaceish(node, false);
    return this.finishNode(node, "InterfaceDeclaration");
  }
  checkNotUnderscore(word) {
    if (word === "_") {
      this.raise(FlowErrors.UnexpectedReservedUnderscore, this.state.startLoc);
    }
  }
  checkReservedType(word, startLoc, declaration) {
    if (!reservedTypes.has(word)) return;
    this.raise(declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, startLoc, {
      reservedType: word
    });
  }
  flowParseRestrictedIdentifier(liberal, declaration) {
    this.checkReservedType(this.state.value, this.state.startLoc, declaration);
    return this.parseIdentifier(liberal);
  }
  flowParseTypeAlias(node) {
    node.id = this.flowParseRestrictedIdentifier(false, true);
    this.scope.declareName(node.id.name, 8201, node.id.loc.start);
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }
    node.right = this.flowParseTypeInitialiser(29);
    this.semicolon();
    return this.finishNode(node, "TypeAlias");
  }
  flowParseOpaqueType(node, declare) {
    this.expectContextual(130);
    node.id = this.flowParseRestrictedIdentifier(true, true);
    this.scope.declareName(node.id.name, 8201, node.id.loc.start);
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }
    node.supertype = null;
    if (this.match(14)) {
      node.supertype = this.flowParseTypeInitialiser(14);
    }
    node.impltype = null;
    if (!declare) {
      node.impltype = this.flowParseTypeInitialiser(29);
    }
    this.semicolon();
    return this.finishNode(node, "OpaqueType");
  }
  flowParseTypeParameter(requireDefault = false) {
    const nodeStartLoc = this.state.startLoc;
    const node = this.startNode();
    const variance = this.flowParseVariance();
    const ident = this.flowParseTypeAnnotatableIdentifier();
    node.name = ident.name;
    node.variance = variance;
    node.bound = ident.typeAnnotation;
    if (this.match(29)) {
      this.eat(29);
      node.default = this.flowParseType();
    } else {
      if (requireDefault) {
        this.raise(FlowErrors.MissingTypeParamDefault, nodeStartLoc);
      }
    }
    return this.finishNode(node, "TypeParameter");
  }
  flowParseTypeParameterDeclaration() {
    const oldInType = this.state.inType;
    const node = this.startNode();
    node.params = [];
    this.state.inType = true;
    if (this.match(47) || this.match(143)) {
      this.next();
    } else {
      this.unexpected();
    }
    let defaultRequired = false;
    do {
      const typeParameter = this.flowParseTypeParameter(defaultRequired);
      node.params.push(typeParameter);
      if (typeParameter.default) {
        defaultRequired = true;
      }
      if (!this.match(48)) {
        this.expect(12);
      }
    } while (!this.match(48));
    this.expect(48);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterDeclaration");
  }
  flowInTopLevelContext(cb) {
    if (this.curContext() !== types.brace) {
      const oldContext = this.state.context;
      this.state.context = [oldContext[0]];
      try {
        return cb();
      } finally {
        this.state.context = oldContext;
      }
    } else {
      return cb();
    }
  }
  flowParseTypeParameterInstantiationInExpression() {
    if (this.reScan_lt() !== 47) return;
    return this.flowParseTypeParameterInstantiation();
  }
  flowParseTypeParameterInstantiation() {
    const node = this.startNode();
    const oldInType = this.state.inType;
    this.state.inType = true;
    node.params = [];
    this.flowInTopLevelContext(() => {
      this.expect(47);
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = false;
      while (!this.match(48)) {
        node.params.push(this.flowParseType());
        if (!this.match(48)) {
          this.expect(12);
        }
      }
      this.state.noAnonFunctionType = oldNoAnonFunctionType;
    });
    this.state.inType = oldInType;
    if (!this.state.inType && this.curContext() === types.brace) {
      this.reScan_lt_gt();
    }
    this.expect(48);
    return this.finishNode(node, "TypeParameterInstantiation");
  }
  flowParseTypeParameterInstantiationCallOrNew() {
    if (this.reScan_lt() !== 47) return;
    const node = this.startNode();
    const oldInType = this.state.inType;
    node.params = [];
    this.state.inType = true;
    this.expect(47);
    while (!this.match(48)) {
      node.params.push(this.flowParseTypeOrImplicitInstantiation());
      if (!this.match(48)) {
        this.expect(12);
      }
    }
    this.expect(48);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterInstantiation");
  }
  flowParseInterfaceType() {
    const node = this.startNode();
    this.expectContextual(129);
    node.extends = [];
    if (this.eat(81)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    }
    node.body = this.flowParseObjectType({
      allowStatic: false,
      allowExact: false,
      allowSpread: false,
      allowProto: false,
      allowInexact: false
    });
    return this.finishNode(node, "InterfaceTypeAnnotation");
  }
  flowParseObjectPropertyKey() {
    return this.match(135) || this.match(134) ? super.parseExprAtom() : this.parseIdentifier(true);
  }
  flowParseObjectTypeIndexer(node, isStatic, variance) {
    node.static = isStatic;
    if (this.lookahead().type === 14) {
      node.id = this.flowParseObjectPropertyKey();
      node.key = this.flowParseTypeInitialiser();
    } else {
      node.id = null;
      node.key = this.flowParseType();
    }
    this.expect(3);
    node.value = this.flowParseTypeInitialiser();
    node.variance = variance;
    return this.finishNode(node, "ObjectTypeIndexer");
  }
  flowParseObjectTypeInternalSlot(node, isStatic) {
    node.static = isStatic;
    node.id = this.flowParseObjectPropertyKey();
    this.expect(3);
    this.expect(3);
    if (this.match(47) || this.match(10)) {
      node.method = true;
      node.optional = false;
      node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.loc.start));
    } else {
      node.method = false;
      if (this.eat(17)) {
        node.optional = true;
      }
      node.value = this.flowParseTypeInitialiser();
    }
    return this.finishNode(node, "ObjectTypeInternalSlot");
  }
  flowParseObjectTypeMethodish(node) {
    node.params = [];
    node.rest = null;
    node.typeParameters = null;
    node.this = null;
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    this.expect(10);
    if (this.match(78)) {
      node.this = this.flowParseFunctionTypeParam(true);
      node.this.name = null;
      if (!this.match(11)) {
        this.expect(12);
      }
    }
    while (!this.match(11) && !this.match(21)) {
      node.params.push(this.flowParseFunctionTypeParam(false));
      if (!this.match(11)) {
        this.expect(12);
      }
    }
    if (this.eat(21)) {
      node.rest = this.flowParseFunctionTypeParam(false);
    }
    this.expect(11);
    node.returnType = this.flowParseTypeInitialiser();
    return this.finishNode(node, "FunctionTypeAnnotation");
  }
  flowParseObjectTypeCallProperty(node, isStatic) {
    const valueNode = this.startNode();
    node.static = isStatic;
    node.value = this.flowParseObjectTypeMethodish(valueNode);
    return this.finishNode(node, "ObjectTypeCallProperty");
  }
  flowParseObjectType({
    allowStatic,
    allowExact,
    allowSpread,
    allowProto,
    allowInexact
  }) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const nodeStart = this.startNode();
    nodeStart.callProperties = [];
    nodeStart.properties = [];
    nodeStart.indexers = [];
    nodeStart.internalSlots = [];
    let endDelim;
    let exact;
    let inexact = false;
    if (allowExact && this.match(6)) {
      this.expect(6);
      endDelim = 9;
      exact = true;
    } else {
      this.expect(5);
      endDelim = 8;
      exact = false;
    }
    nodeStart.exact = exact;
    while (!this.match(endDelim)) {
      let isStatic = false;
      let protoStartLoc = null;
      let inexactStartLoc = null;
      const node = this.startNode();
      if (allowProto && this.isContextual(118)) {
        const lookahead = this.lookahead();
        if (lookahead.type !== 14 && lookahead.type !== 17) {
          this.next();
          protoStartLoc = this.state.startLoc;
          allowStatic = false;
        }
      }
      if (allowStatic && this.isContextual(106)) {
        const lookahead = this.lookahead();
        if (lookahead.type !== 14 && lookahead.type !== 17) {
          this.next();
          isStatic = true;
        }
      }
      const variance = this.flowParseVariance();
      if (this.eat(0)) {
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }
        if (this.eat(0)) {
          if (variance) {
            this.unexpected(variance.loc.start);
          }
          nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
        } else {
          nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
        }
      } else if (this.match(10) || this.match(47)) {
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }
        if (variance) {
          this.unexpected(variance.loc.start);
        }
        nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
      } else {
        let kind = "init";
        if (this.isContextual(99) || this.isContextual(104)) {
          const lookahead = this.lookahead();
          if (tokenIsLiteralPropertyName(lookahead.type)) {
            kind = this.state.value;
            this.next();
          }
        }
        const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);
        if (propOrInexact === null) {
          inexact = true;
          inexactStartLoc = this.state.lastTokStartLoc;
        } else {
          nodeStart.properties.push(propOrInexact);
        }
      }
      this.flowObjectTypeSemicolon();
      if (inexactStartLoc && !this.match(8) && !this.match(9)) {
        this.raise(FlowErrors.UnexpectedExplicitInexactInObject, inexactStartLoc);
      }
    }
    this.expect(endDelim);
    if (allowSpread) {
      nodeStart.inexact = inexact;
    }
    const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
    this.state.inType = oldInType;
    return out;
  }
  flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact) {
    if (this.eat(21)) {
      const isInexactToken = this.match(12) || this.match(13) || this.match(8) || this.match(9);
      if (isInexactToken) {
        if (!allowSpread) {
          this.raise(FlowErrors.InexactInsideNonObject, this.state.lastTokStartLoc);
        } else if (!allowInexact) {
          this.raise(FlowErrors.InexactInsideExact, this.state.lastTokStartLoc);
        }
        if (variance) {
          this.raise(FlowErrors.InexactVariance, variance);
        }
        return null;
      }
      if (!allowSpread) {
        this.raise(FlowErrors.UnexpectedSpreadType, this.state.lastTokStartLoc);
      }
      if (protoStartLoc != null) {
        this.unexpected(protoStartLoc);
      }
      if (variance) {
        this.raise(FlowErrors.SpreadVariance, variance);
      }
      node.argument = this.flowParseType();
      return this.finishNode(node, "ObjectTypeSpreadProperty");
    } else {
      node.key = this.flowParseObjectPropertyKey();
      node.static = isStatic;
      node.proto = protoStartLoc != null;
      node.kind = kind;
      let optional = false;
      if (this.match(47) || this.match(10)) {
        node.method = true;
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }
        if (variance) {
          this.unexpected(variance.loc.start);
        }
        node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.loc.start));
        if (kind === "get" || kind === "set") {
          this.flowCheckGetterSetterParams(node);
        }
        if (!allowSpread && node.key.name === "constructor" && node.value.this) {
          this.raise(FlowErrors.ThisParamBannedInConstructor, node.value.this);
        }
      } else {
        if (kind !== "init") this.unexpected();
        node.method = false;
        if (this.eat(17)) {
          optional = true;
        }
        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
      }
      node.optional = optional;
      return this.finishNode(node, "ObjectTypeProperty");
    }
  }
  flowCheckGetterSetterParams(property) {
    const paramCount = property.kind === "get" ? 0 : 1;
    const length = property.value.params.length + (property.value.rest ? 1 : 0);
    if (property.value.this) {
      this.raise(property.kind === "get" ? FlowErrors.GetterMayNotHaveThisParam : FlowErrors.SetterMayNotHaveThisParam, property.value.this);
    }
    if (length !== paramCount) {
      this.raise(property.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, property);
    }
    if (property.kind === "set" && property.value.rest) {
      this.raise(Errors.BadSetterRestParameter, property);
    }
  }
  flowObjectTypeSemicolon() {
    if (!this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9)) {
      this.unexpected();
    }
  }
  flowParseQualifiedTypeIdentifier(startLoc, id) {
    startLoc != null ? startLoc : startLoc = this.state.startLoc;
    let node = id || this.flowParseRestrictedIdentifier(true);
    while (this.eat(16)) {
      const node2 = this.startNodeAt(startLoc);
      node2.qualification = node;
      node2.id = this.flowParseRestrictedIdentifier(true);
      node = this.finishNode(node2, "QualifiedTypeIdentifier");
    }
    return node;
  }
  flowParseGenericType(startLoc, id) {
    const node = this.startNodeAt(startLoc);
    node.typeParameters = null;
    node.id = this.flowParseQualifiedTypeIdentifier(startLoc, id);
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    }
    return this.finishNode(node, "GenericTypeAnnotation");
  }
  flowParseTypeofType() {
    const node = this.startNode();
    this.expect(87);
    node.argument = this.flowParsePrimaryType();
    return this.finishNode(node, "TypeofTypeAnnotation");
  }
  flowParseTupleType() {
    const node = this.startNode();
    node.types = [];
    this.expect(0);
    while (this.state.pos < this.length && !this.match(3)) {
      node.types.push(this.flowParseType());
      if (this.match(3)) break;
      this.expect(12);
    }
    this.expect(3);
    return this.finishNode(node, "TupleTypeAnnotation");
  }
  flowParseFunctionTypeParam(first) {
    let name = null;
    let optional = false;
    let typeAnnotation = null;
    const node = this.startNode();
    const lh = this.lookahead();
    const isThis = this.state.type === 78;
    if (lh.type === 14 || lh.type === 17) {
      if (isThis && !first) {
        this.raise(FlowErrors.ThisParamMustBeFirst, node);
      }
      name = this.parseIdentifier(isThis);
      if (this.eat(17)) {
        optional = true;
        if (isThis) {
          this.raise(FlowErrors.ThisParamMayNotBeOptional, node);
        }
      }
      typeAnnotation = this.flowParseTypeInitialiser();
    } else {
      typeAnnotation = this.flowParseType();
    }
    node.name = name;
    node.optional = optional;
    node.typeAnnotation = typeAnnotation;
    return this.finishNode(node, "FunctionTypeParam");
  }
  reinterpretTypeAsFunctionTypeParam(type) {
    const node = this.startNodeAt(type.loc.start);
    node.name = null;
    node.optional = false;
    node.typeAnnotation = type;
    return this.finishNode(node, "FunctionTypeParam");
  }
  flowParseFunctionTypeParams(params = []) {
    let rest = null;
    let _this = null;
    if (this.match(78)) {
      _this = this.flowParseFunctionTypeParam(true);
      _this.name = null;
      if (!this.match(11)) {
        this.expect(12);
      }
    }
    while (!this.match(11) && !this.match(21)) {
      params.push(this.flowParseFunctionTypeParam(false));
      if (!this.match(11)) {
        this.expect(12);
      }
    }
    if (this.eat(21)) {
      rest = this.flowParseFunctionTypeParam(false);
    }
    return {
      params,
      rest,
      _this
    };
  }
  flowIdentToTypeAnnotation(startLoc, node, id) {
    switch (id.name) {
      case "any":
        return this.finishNode(node, "AnyTypeAnnotation");
      case "bool":
      case "boolean":
        return this.finishNode(node, "BooleanTypeAnnotation");
      case "mixed":
        return this.finishNode(node, "MixedTypeAnnotation");
      case "empty":
        return this.finishNode(node, "EmptyTypeAnnotation");
      case "number":
        return this.finishNode(node, "NumberTypeAnnotation");
      case "string":
        return this.finishNode(node, "StringTypeAnnotation");
      case "symbol":
        return this.finishNode(node, "SymbolTypeAnnotation");
      default:
        this.checkNotUnderscore(id.name);
        return this.flowParseGenericType(startLoc, id);
    }
  }
  flowParsePrimaryType() {
    const startLoc = this.state.startLoc;
    const node = this.startNode();
    let tmp;
    let type;
    let isGroupedType = false;
    const oldNoAnonFunctionType = this.state.noAnonFunctionType;
    switch (this.state.type) {
      case 5:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: true,
          allowProto: false,
          allowInexact: true
        });
      case 6:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: true,
          allowSpread: true,
          allowProto: false,
          allowInexact: false
        });
      case 0:
        this.state.noAnonFunctionType = false;
        type = this.flowParseTupleType();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        return type;
      case 47:
        {
          const node = this.startNode();
          node.typeParameters = this.flowParseTypeParameterDeclaration();
          this.expect(10);
          tmp = this.flowParseFunctionTypeParams();
          node.params = tmp.params;
          node.rest = tmp.rest;
          node.this = tmp._this;
          this.expect(11);
          this.expect(19);
          node.returnType = this.flowParseType();
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
      case 10:
        {
          const node = this.startNode();
          this.next();
          if (!this.match(11) && !this.match(21)) {
            if (tokenIsIdentifier(this.state.type) || this.match(78)) {
              const token = this.lookahead().type;
              isGroupedType = token !== 17 && token !== 14;
            } else {
              isGroupedType = true;
            }
          }
          if (isGroupedType) {
            this.state.noAnonFunctionType = false;
            type = this.flowParseType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) {
              this.expect(11);
              return type;
            } else {
              this.eat(12);
            }
          }
          if (type) {
            tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
          } else {
            tmp = this.flowParseFunctionTypeParams();
          }
          node.params = tmp.params;
          node.rest = tmp.rest;
          node.this = tmp._this;
          this.expect(11);
          this.expect(19);
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
      case 134:
        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
      case 85:
      case 86:
        node.value = this.match(85);
        this.next();
        return this.finishNode(node, "BooleanLiteralTypeAnnotation");
      case 53:
        if (this.state.value === "-") {
          this.next();
          if (this.match(135)) {
            return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", node);
          }
          if (this.match(136)) {
            return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", node);
          }
          throw this.raise(FlowErrors.UnexpectedSubtractionOperand, this.state.startLoc);
        }
        this.unexpected();
        return;
      case 135:
        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
      case 136:
        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
      case 88:
        this.next();
        return this.finishNode(node, "VoidTypeAnnotation");
      case 84:
        this.next();
        return this.finishNode(node, "NullLiteralTypeAnnotation");
      case 78:
        this.next();
        return this.finishNode(node, "ThisTypeAnnotation");
      case 55:
        this.next();
        return this.finishNode(node, "ExistsTypeAnnotation");
      case 87:
        return this.flowParseTypeofType();
      default:
        if (tokenIsKeyword(this.state.type)) {
          const label = tokenLabelName(this.state.type);
          this.next();
          return super.createIdentifier(node, label);
        } else if (tokenIsIdentifier(this.state.type)) {
          if (this.isContextual(129)) {
            return this.flowParseInterfaceType();
          }
          return this.flowIdentToTypeAnnotation(startLoc, node, this.parseIdentifier());
        }
    }
    this.unexpected();
  }
  flowParsePostfixType() {
    const startLoc = this.state.startLoc;
    let type = this.flowParsePrimaryType();
    let seenOptionalIndexedAccess = false;
    while ((this.match(0) || this.match(18)) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startLoc);
      const optional = this.eat(18);
      seenOptionalIndexedAccess = seenOptionalIndexedAccess || optional;
      this.expect(0);
      if (!optional && this.match(3)) {
        node.elementType = type;
        this.next();
        type = this.finishNode(node, "ArrayTypeAnnotation");
      } else {
        node.objectType = type;
        node.indexType = this.flowParseType();
        this.expect(3);
        if (seenOptionalIndexedAccess) {
          node.optional = optional;
          type = this.finishNode(node, "OptionalIndexedAccessType");
        } else {
          type = this.finishNode(node, "IndexedAccessType");
        }
      }
    }
    return type;
  }
  flowParsePrefixType() {
    const node = this.startNode();
    if (this.eat(17)) {
      node.typeAnnotation = this.flowParsePrefixType();
      return this.finishNode(node, "NullableTypeAnnotation");
    } else {
      return this.flowParsePostfixType();
    }
  }
  flowParseAnonFunctionWithoutParens() {
    const param = this.flowParsePrefixType();
    if (!this.state.noAnonFunctionType && this.eat(19)) {
      const node = this.startNodeAt(param.loc.start);
      node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
      node.rest = null;
      node.this = null;
      node.returnType = this.flowParseType();
      node.typeParameters = null;
      return this.finishNode(node, "FunctionTypeAnnotation");
    }
    return param;
  }
  flowParseIntersectionType() {
    const node = this.startNode();
    this.eat(45);
    const type = this.flowParseAnonFunctionWithoutParens();
    node.types = [type];
    while (this.eat(45)) {
      node.types.push(this.flowParseAnonFunctionWithoutParens());
    }
    return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
  }
  flowParseUnionType() {
    const node = this.startNode();
    this.eat(43);
    const type = this.flowParseIntersectionType();
    node.types = [type];
    while (this.eat(43)) {
      node.types.push(this.flowParseIntersectionType());
    }
    return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
  }
  flowParseType() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const type = this.flowParseUnionType();
    this.state.inType = oldInType;
    return type;
  }
  flowParseTypeOrImplicitInstantiation() {
    if (this.state.type === 132 && this.state.value === "_") {
      const startLoc = this.state.startLoc;
      const node = this.parseIdentifier();
      return this.flowParseGenericType(startLoc, node);
    } else {
      return this.flowParseType();
    }
  }
  flowParseTypeAnnotation() {
    const node = this.startNode();
    node.typeAnnotation = this.flowParseTypeInitialiser();
    return this.finishNode(node, "TypeAnnotation");
  }
  flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
    const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
    if (this.match(14)) {
      ident.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(ident);
    }
    return ident;
  }
  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
    return node.expression;
  }
  flowParseVariance() {
    let variance = null;
    if (this.match(53)) {
      variance = this.startNode();
      if (this.state.value === "+") {
        variance.kind = "plus";
      } else {
        variance.kind = "minus";
      }
      this.next();
      return this.finishNode(variance, "Variance");
    }
    return variance;
  }
  parseFunctionBody(node, allowExpressionBody, isMethod = false) {
    if (allowExpressionBody) {
      this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
      return;
    }
    super.parseFunctionBody(node, false, isMethod);
  }
  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(14)) {
      const typeNode = this.startNode();
      [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
      node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
    }
    return super.parseFunctionBodyAndFinish(node, type, isMethod);
  }
  parseStatementLike(flags) {
    if (this.state.strict && this.isContextual(129)) {
      const lookahead = this.lookahead();
      if (tokenIsKeywordOrIdentifier(lookahead.type)) {
        const node = this.startNode();
        this.next();
        return this.flowParseInterface(node);
      }
    } else if (this.isContextual(126)) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }
    const stmt = super.parseStatementLike(flags);
    if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
      this.flowPragma = null;
    }
    return stmt;
  }
  parseExpressionStatement(node, expr, decorators) {
    if (expr.type === "Identifier") {
      if (expr.name === "declare") {
        if (this.match(80) || tokenIsIdentifier(this.state.type) || this.match(68) || this.match(74) || this.match(82)) {
          return this.flowParseDeclare(node);
        }
      } else if (tokenIsIdentifier(this.state.type)) {
        if (expr.name === "interface") {
          return this.flowParseInterface(node);
        } else if (expr.name === "type") {
          return this.flowParseTypeAlias(node);
        } else if (expr.name === "opaque") {
          return this.flowParseOpaqueType(node, false);
        }
      }
    }
    return super.parseExpressionStatement(node, expr, decorators);
  }
  shouldParseExportDeclaration() {
    const {
      type
    } = this.state;
    if (type === 126 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
      return !this.state.containsEsc;
    }
    return super.shouldParseExportDeclaration();
  }
  isExportDefaultSpecifier() {
    const {
      type
    } = this.state;
    if (type === 126 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
      return this.state.containsEsc;
    }
    return super.isExportDefaultSpecifier();
  }
  parseExportDefaultExpression() {
    if (this.isContextual(126)) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }
    return super.parseExportDefaultExpression();
  }
  parseConditional(expr, startLoc, refExpressionErrors) {
    if (!this.match(17)) return expr;
    if (this.state.maybeInArrowParameters) {
      const nextCh = this.lookaheadCharCode();
      if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
        this.setOptionalParametersError(refExpressionErrors);
        return expr;
      }
    }
    this.expect(17);
    const state = this.state.clone();
    const originalNoArrowAt = this.state.noArrowAt;
    const node = this.startNodeAt(startLoc);
    let {
      consequent,
      failed
    } = this.tryParseConditionalConsequent();
    let [valid, invalid] = this.getArrowLikeExpressions(consequent);
    if (failed || invalid.length > 0) {
      const noArrowAt = [...originalNoArrowAt];
      if (invalid.length > 0) {
        this.state = state;
        this.state.noArrowAt = noArrowAt;
        for (let i = 0; i < invalid.length; i++) {
          noArrowAt.push(invalid[i].start);
        }
        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
        [valid, invalid] = this.getArrowLikeExpressions(consequent);
      }
      if (failed && valid.length > 1) {
        this.raise(FlowErrors.AmbiguousConditionalArrow, state.startLoc);
      }
      if (failed && valid.length === 1) {
        this.state = state;
        noArrowAt.push(valid[0].start);
        this.state.noArrowAt = noArrowAt;
        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
      }
    }
    this.getArrowLikeExpressions(consequent, true);
    this.state.noArrowAt = originalNoArrowAt;
    this.expect(14);
    node.test = expr;
    node.consequent = consequent;
    node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(undefined, undefined));
    return this.finishNode(node, "ConditionalExpression");
  }
  tryParseConditionalConsequent() {
    this.state.noArrowParamsConversionAt.push(this.state.start);
    const consequent = this.parseMaybeAssignAllowIn();
    const failed = !this.match(14);
    this.state.noArrowParamsConversionAt.pop();
    return {
      consequent,
      failed
    };
  }
  getArrowLikeExpressions(node, disallowInvalid) {
    const stack = [node];
    const arrows = [];
    while (stack.length !== 0) {
      const node = stack.pop();
      if (node.type === "ArrowFunctionExpression" && node.body.type !== "BlockStatement") {
        if (node.typeParameters || !node.returnType) {
          this.finishArrowValidation(node);
        } else {
          arrows.push(node);
        }
        stack.push(node.body);
      } else if (node.type === "ConditionalExpression") {
        stack.push(node.consequent);
        stack.push(node.alternate);
      }
    }
    if (disallowInvalid) {
      arrows.forEach(node => this.finishArrowValidation(node));
      return [arrows, []];
    }
    return partition(arrows, node => node.params.every(param => this.isAssignable(param, true)));
  }
  finishArrowValidation(node) {
    var _node$extra;
    this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingCommaLoc, false);
    this.scope.enter(2 | 4);
    super.checkParams(node, false, true);
    this.scope.exit();
  }
  forwardNoArrowParamsConversionAt(node, parse) {
    let result;
    if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      result = parse();
      this.state.noArrowParamsConversionAt.pop();
    } else {
      result = parse();
    }
    return result;
  }
  parseParenItem(node, startLoc) {
    const newNode = super.parseParenItem(node, startLoc);
    if (this.eat(17)) {
      newNode.optional = true;
      this.resetEndLocation(node);
    }
    if (this.match(14)) {
      const typeCastNode = this.startNodeAt(startLoc);
      typeCastNode.expression = newNode;
      typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TypeCastExpression");
    }
    return newNode;
  }
  assertModuleNodeAllowed(node) {
    if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
      return;
    }
    super.assertModuleNodeAllowed(node);
  }
  parseExportDeclaration(node) {
    if (this.isContextual(130)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      if (this.match(5)) {
        node.specifiers = this.parseExportSpecifiers(true);
        super.parseExportFrom(node);
        return null;
      } else {
        return this.flowParseTypeAlias(declarationNode);
      }
    } else if (this.isContextual(131)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseOpaqueType(declarationNode, false);
    } else if (this.isContextual(129)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseInterface(declarationNode);
    } else if (this.isContextual(126)) {
      node.exportKind = "value";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(declarationNode);
    } else {
      return super.parseExportDeclaration(node);
    }
  }
  eatExportStar(node) {
    if (super.eatExportStar(node)) return true;
    if (this.isContextual(130) && this.lookahead().type === 55) {
      node.exportKind = "type";
      this.next();
      this.next();
      return true;
    }
    return false;
  }
  maybeParseExportNamespaceSpecifier(node) {
    const {
      startLoc
    } = this.state;
    const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);
    if (hasNamespace && node.exportKind === "type") {
      this.unexpected(startLoc);
    }
    return hasNamespace;
  }
  parseClassId(node, isStatement, optionalId) {
    super.parseClassId(node, isStatement, optionalId);
    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
  }
  parseClassMember(classBody, member, state) {
    const {
      startLoc
    } = this.state;
    if (this.isContextual(125)) {
      if (super.parseClassMemberFromModifier(classBody, member)) {
        return;
      }
      member.declare = true;
    }
    super.parseClassMember(classBody, member, state);
    if (member.declare) {
      if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty" && member.type !== "PropertyDefinition") {
        this.raise(FlowErrors.DeclareClassElement, startLoc);
      } else if (member.value) {
        this.raise(FlowErrors.DeclareClassFieldInitializer, member.value);
      }
    }
  }
  isIterator(word) {
    return word === "iterator" || word === "asyncIterator";
  }
  readIterator() {
    const word = super.readWord1();
    const fullWord = "@@" + word;
    if (!this.isIterator(word) || !this.state.inType) {
      this.raise(Errors.InvalidIdentifier, this.state.curPosition(), {
        identifierName: fullWord
      });
    }
    this.finishToken(132, fullWord);
  }
  getTokenFromCode(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 123 && next === 124) {
      this.finishOp(6, 2);
    } else if (this.state.inType && (code === 62 || code === 60)) {
      this.finishOp(code === 62 ? 48 : 47, 1);
    } else if (this.state.inType && code === 63) {
      if (next === 46) {
        this.finishOp(18, 2);
      } else {
        this.finishOp(17, 1);
      }
    } else if (isIteratorStart(code, next, this.input.charCodeAt(this.state.pos + 2))) {
      this.state.pos += 2;
      this.readIterator();
    } else {
      super.getTokenFromCode(code);
    }
  }
  isAssignable(node, isBinding) {
    if (node.type === "TypeCastExpression") {
      return this.isAssignable(node.expression, isBinding);
    } else {
      return super.isAssignable(node, isBinding);
    }
  }
  toAssignable(node, isLHS = false) {
    if (!isLHS && node.type === "AssignmentExpression" && node.left.type === "TypeCastExpression") {
      node.left = this.typeCastToParameter(node.left);
    }
    super.toAssignable(node, isLHS);
  }
  toAssignableList(exprList, trailingCommaLoc, isLHS) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];
      if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
        exprList[i] = this.typeCastToParameter(expr);
      }
    }
    super.toAssignableList(exprList, trailingCommaLoc, isLHS);
  }
  toReferencedList(exprList, isParenthesizedExpr) {
    for (let i = 0; i < exprList.length; i++) {
      var _expr$extra;
      const expr = exprList[i];
      if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) != null && _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
        this.raise(FlowErrors.TypeCastInPattern, expr.typeAnnotation);
      }
    }
    return exprList;
  }
  parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
    const node = super.parseArrayLike(close, canBePattern, isTuple, refExpressionErrors);
    if (canBePattern && !this.state.maybeInArrowParameters) {
      this.toReferencedList(node.elements);
    }
    return node;
  }
  isValidLVal(type, isParenthesized, binding) {
    return type === "TypeCastExpression" || super.isValidLVal(type, isParenthesized, binding);
  }
  parseClassProperty(node) {
    if (this.match(14)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }
    return super.parseClassProperty(node);
  }
  parseClassPrivateProperty(node) {
    if (this.match(14)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }
    return super.parseClassPrivateProperty(node);
  }
  isClassMethod() {
    return this.match(47) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(14) || super.isClassProperty();
  }
  isNonstaticConstructor(method) {
    return !this.match(14) && super.isNonstaticConstructor(method);
  }
  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    if (method.variance) {
      this.unexpected(method.variance.loc.start);
    }
    delete method.variance;
    if (this.match(47)) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
    if (method.params && isConstructor) {
      const params = method.params;
      if (params.length > 0 && this.isThisParam(params[0])) {
        this.raise(FlowErrors.ThisParamBannedInConstructor, method);
      }
    } else if (method.type === "MethodDefinition" && isConstructor && method.value.params) {
      const params = method.value.params;
      if (params.length > 0 && this.isThisParam(params[0])) {
        this.raise(FlowErrors.ThisParamBannedInConstructor, method);
      }
    }
  }
  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    if (method.variance) {
      this.unexpected(method.variance.loc.start);
    }
    delete method.variance;
    if (this.match(47)) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }
  parseClassSuper(node) {
    super.parseClassSuper(node);
    if (node.superClass && (this.match(47) || this.match(51))) {
      {
        node.superTypeParameters = this.flowParseTypeParameterInstantiationInExpression();
      }
    }
    if (this.isContextual(113)) {
      this.next();
      const implemented = node.implements = [];
      do {
        const node = this.startNode();
        node.id = this.flowParseRestrictedIdentifier(true);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }
        implemented.push(this.finishNode(node, "ClassImplements"));
      } while (this.eat(12));
    }
  }
  checkGetterSetterParams(method) {
    super.checkGetterSetterParams(method);
    const params = this.getObjectOrClassMethodParams(method);
    if (params.length > 0) {
      const param = params[0];
      if (this.isThisParam(param) && method.kind === "get") {
        this.raise(FlowErrors.GetterMayNotHaveThisParam, param);
      } else if (this.isThisParam(param)) {
        this.raise(FlowErrors.SetterMayNotHaveThisParam, param);
      }
    }
  }
  parsePropertyNamePrefixOperator(node) {
    node.variance = this.flowParseVariance();
  }
  parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    if (prop.variance) {
      this.unexpected(prop.variance.loc.start);
    }
    delete prop.variance;
    let typeParameters;
    if (this.match(47) && !isAccessor) {
      typeParameters = this.flowParseTypeParameterDeclaration();
      if (!this.match(10)) this.unexpected();
    }
    const result = super.parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
    if (typeParameters) {
      (result.value || result).typeParameters = typeParameters;
    }
    return result;
  }
  parseFunctionParamType(param) {
    if (this.eat(17)) {
      if (param.type !== "Identifier") {
        this.raise(FlowErrors.PatternIsOptional, param);
      }
      if (this.isThisParam(param)) {
        this.raise(FlowErrors.ThisParamMayNotBeOptional, param);
      }
      param.optional = true;
    }
    if (this.match(14)) {
      param.typeAnnotation = this.flowParseTypeAnnotation();
    } else if (this.isThisParam(param)) {
      this.raise(FlowErrors.ThisParamAnnotationRequired, param);
    }
    if (this.match(29) && this.isThisParam(param)) {
      this.raise(FlowErrors.ThisParamNoDefault, param);
    }
    this.resetEndLocation(param);
    return param;
  }
  parseMaybeDefault(startLoc, left) {
    const node = super.parseMaybeDefault(startLoc, left);
    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(FlowErrors.TypeBeforeInitializer, node.typeAnnotation);
    }
    return node;
  }
  checkImportReflection(node) {
    super.checkImportReflection(node);
    if (node.module && node.importKind !== "value") {
      this.raise(FlowErrors.ImportReflectionHasImportType, node.specifiers[0].loc.start);
    }
  }
  parseImportSpecifierLocal(node, specifier, type) {
    specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
    node.specifiers.push(this.finishImportSpecifier(specifier, type));
  }
  isPotentialImportPhase(isExport) {
    if (super.isPotentialImportPhase(isExport)) return true;
    if (this.isContextual(130)) {
      if (!isExport) return true;
      const ch = this.lookaheadCharCode();
      return ch === 123 || ch === 42;
    }
    return !isExport && this.isContextual(87);
  }
  applyImportPhase(node, isExport, phase, loc) {
    super.applyImportPhase(node, isExport, phase, loc);
    if (isExport) {
      if (!phase && this.match(65)) {
        return;
      }
      node.exportKind = phase === "type" ? phase : "value";
    } else {
      if (phase === "type" && this.match(55)) this.unexpected();
      node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
    }
  }
  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
    const firstIdent = specifier.imported;
    let specifierTypeKind = null;
    if (firstIdent.type === "Identifier") {
      if (firstIdent.name === "type") {
        specifierTypeKind = "type";
      } else if (firstIdent.name === "typeof") {
        specifierTypeKind = "typeof";
      }
    }
    let isBinding = false;
    if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
      const as_ident = this.parseIdentifier(true);
      if (specifierTypeKind !== null && !tokenIsKeywordOrIdentifier(this.state.type)) {
        specifier.imported = as_ident;
        specifier.importKind = specifierTypeKind;
        specifier.local = cloneIdentifier(as_ident);
      } else {
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = this.parseIdentifier();
      }
    } else {
      if (specifierTypeKind !== null && tokenIsKeywordOrIdentifier(this.state.type)) {
        specifier.imported = this.parseIdentifier(true);
        specifier.importKind = specifierTypeKind;
      } else {
        if (importedIsString) {
          throw this.raise(Errors.ImportBindingIsString, specifier, {
            importName: firstIdent.value
          });
        }
        specifier.imported = firstIdent;
        specifier.importKind = null;
      }
      if (this.eatContextual(93)) {
        specifier.local = this.parseIdentifier();
      } else {
        isBinding = true;
        specifier.local = cloneIdentifier(specifier.imported);
      }
    }
    const specifierIsTypeImport = hasTypeImportKind(specifier);
    if (isInTypeOnlyImport && specifierIsTypeImport) {
      this.raise(FlowErrors.ImportTypeShorthandOnlyInPureImport, specifier);
    }
    if (isInTypeOnlyImport || specifierIsTypeImport) {
      this.checkReservedType(specifier.local.name, specifier.local.loc.start, true);
    }
    if (isBinding && !isInTypeOnlyImport && !specifierIsTypeImport) {
      this.checkReservedWord(specifier.local.name, specifier.loc.start, true, true);
    }
    return this.finishImportSpecifier(specifier, "ImportSpecifier");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 78:
        return this.parseIdentifier(true);
      default:
        return super.parseBindingAtom();
    }
  }
  parseFunctionParams(node, isConstructor) {
    const kind = node.kind;
    if (kind !== "get" && kind !== "set" && this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    super.parseFunctionParams(node, isConstructor);
  }
  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);
    if (this.match(14)) {
      decl.id.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(decl.id);
    }
  }
  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(14)) {
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = true;
      node.returnType = this.flowParseTypeAnnotation();
      this.state.noAnonFunctionType = oldNoAnonFunctionType;
    }
    return super.parseAsyncArrowFromCallExpression(node, call);
  }
  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }
  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    var _jsx;
    let state = null;
    let jsx;
    if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;
      const currentContext = context[context.length - 1];
      if (currentContext === types.j_oTag || currentContext === types.j_expr) {
        context.pop();
      }
    }
    if ((_jsx = jsx) != null && _jsx.error || this.match(47)) {
      var _jsx2, _jsx3;
      state = state || this.state.clone();
      let typeParameters;
      const arrow = this.tryParse(abort => {
        var _arrowExpression$extr;
        typeParameters = this.flowParseTypeParameterDeclaration();
        const arrowExpression = this.forwardNoArrowParamsConversionAt(typeParameters, () => {
          const result = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
          this.resetStartLocationFromNode(result, typeParameters);
          return result;
        });
        if ((_arrowExpression$extr = arrowExpression.extra) != null && _arrowExpression$extr.parenthesized) abort();
        const expr = this.maybeUnwrapTypeCastExpression(arrowExpression);
        if (expr.type !== "ArrowFunctionExpression") abort();
        expr.typeParameters = typeParameters;
        this.resetStartLocationFromNode(expr, typeParameters);
        return arrowExpression;
      }, state);
      let arrowExpression = null;
      if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
        if (!arrow.error && !arrow.aborted) {
          if (arrow.node.async) {
            this.raise(FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction, typeParameters);
          }
          return arrow.node;
        }
        arrowExpression = arrow.node;
      }
      if ((_jsx2 = jsx) != null && _jsx2.node) {
        this.state = jsx.failState;
        return jsx.node;
      }
      if (arrowExpression) {
        this.state = arrow.failState;
        return arrowExpression;
      }
      if ((_jsx3 = jsx) != null && _jsx3.thrown) throw jsx.error;
      if (arrow.thrown) throw arrow.error;
      throw this.raise(FlowErrors.UnexpectedTokenAfterTypeParameter, typeParameters);
    }
    return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
  }
  parseArrow(node) {
    if (this.match(14)) {
      const result = this.tryParse(() => {
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        const typeNode = this.startNode();
        [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        if (this.canInsertSemicolon()) this.unexpected();
        if (!this.match(19)) this.unexpected();
        return typeNode;
      });
      if (result.thrown) return null;
      if (result.error) this.state = result.failState;
      node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
    }
    return super.parseArrow(node);
  }
  shouldParseArrow(params) {
    return this.match(14) || super.shouldParseArrow(params);
  }
  setArrowFunctionParameters(node, params) {
    if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
      node.params = params;
    } else {
      super.setArrowFunctionParameters(node, params);
    }
  }
  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    if (isArrowFunction && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
      return;
    }
    for (let i = 0; i < node.params.length; i++) {
      if (this.isThisParam(node.params[i]) && i > 0) {
        this.raise(FlowErrors.ThisParamMustBeFirst, node.params[i]);
      }
    }
    super.checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged);
  }
  parseParenAndDistinguishExpression(canBeArrow) {
    return super.parseParenAndDistinguishExpression(canBeArrow && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
  }
  parseSubscripts(base, startLoc, noCalls) {
    if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.includes(startLoc.index)) {
      this.next();
      const node = this.startNodeAt(startLoc);
      node.callee = base;
      node.arguments = super.parseCallExpressionArguments(11);
      base = this.finishNode(node, "CallExpression");
    } else if (base.type === "Identifier" && base.name === "async" && this.match(47)) {
      const state = this.state.clone();
      const arrow = this.tryParse(abort => this.parseAsyncArrowWithTypeParameters(startLoc) || abort(), state);
      if (!arrow.error && !arrow.aborted) return arrow.node;
      const result = this.tryParse(() => super.parseSubscripts(base, startLoc, noCalls), state);
      if (result.node && !result.error) return result.node;
      if (arrow.node) {
        this.state = arrow.failState;
        return arrow.node;
      }
      if (result.node) {
        this.state = result.failState;
        return result.node;
      }
      throw arrow.error || result.error;
    }
    return super.parseSubscripts(base, startLoc, noCalls);
  }
  parseSubscript(base, startLoc, noCalls, subscriptState) {
    if (this.match(18) && this.isLookaheadToken_lt()) {
      subscriptState.optionalChainMember = true;
      if (noCalls) {
        subscriptState.stop = true;
        return base;
      }
      this.next();
      const node = this.startNodeAt(startLoc);
      node.callee = base;
      node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
      this.expect(10);
      node.arguments = this.parseCallExpressionArguments(11);
      node.optional = true;
      return this.finishCallExpression(node, true);
    } else if (!noCalls && this.shouldParseTypes() && (this.match(47) || this.match(51))) {
      const node = this.startNodeAt(startLoc);
      node.callee = base;
      const result = this.tryParse(() => {
        node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
        this.expect(10);
        node.arguments = super.parseCallExpressionArguments(11);
        if (subscriptState.optionalChainMember) {
          node.optional = false;
        }
        return this.finishCallExpression(node, subscriptState.optionalChainMember);
      });
      if (result.node) {
        if (result.error) this.state = result.failState;
        return result.node;
      }
    }
    return super.parseSubscript(base, startLoc, noCalls, subscriptState);
  }
  parseNewCallee(node) {
    super.parseNewCallee(node);
    let targs = null;
    if (this.shouldParseTypes() && this.match(47)) {
      targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
    }
    node.typeArguments = targs;
  }
  parseAsyncArrowWithTypeParameters(startLoc) {
    const node = this.startNodeAt(startLoc);
    this.parseFunctionParams(node, false);
    if (!this.parseArrow(node)) return;
    return super.parseArrowExpression(node, undefined, true);
  }
  readToken_mult_modulo(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 42 && next === 47 && this.state.hasFlowComment) {
      this.state.hasFlowComment = false;
      this.state.pos += 2;
      this.nextToken();
      return;
    }
    super.readToken_mult_modulo(code);
  }
  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 124 && next === 125) {
      this.finishOp(9, 2);
      return;
    }
    super.readToken_pipe_amp(code);
  }
  parseTopLevel(file, program) {
    const fileNode = super.parseTopLevel(file, program);
    if (this.state.hasFlowComment) {
      this.raise(FlowErrors.UnterminatedFlowComment, this.state.curPosition());
    }
    return fileNode;
  }
  skipBlockComment() {
    if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
      if (this.state.hasFlowComment) {
        throw this.raise(FlowErrors.NestedFlowComment, this.state.startLoc);
      }
      this.hasFlowCommentCompletion();
      const commentSkip = this.skipFlowComment();
      if (commentSkip) {
        this.state.pos += commentSkip;
        this.state.hasFlowComment = true;
      }
      return;
    }
    return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
  }
  skipFlowComment() {
    const {
      pos
    } = this.state;
    let shiftToFirstNonWhiteSpace = 2;
    while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
      shiftToFirstNonWhiteSpace++;
    }
    const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
    const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);
    if (ch2 === 58 && ch3 === 58) {
      return shiftToFirstNonWhiteSpace + 2;
    }
    if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
      return shiftToFirstNonWhiteSpace + 12;
    }
    if (ch2 === 58 && ch3 !== 58) {
      return shiftToFirstNonWhiteSpace;
    }
    return false;
  }
  hasFlowCommentCompletion() {
    const end = this.input.indexOf("*/", this.state.pos);
    if (end === -1) {
      throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
    }
  }
  flowEnumErrorBooleanMemberNotInitialized(loc, {
    enumName,
    memberName
  }) {
    this.raise(FlowErrors.EnumBooleanMemberNotInitialized, loc, {
      memberName,
      enumName
    });
  }
  flowEnumErrorInvalidMemberInitializer(loc, enumContext) {
    return this.raise(!enumContext.explicitType ? FlowErrors.EnumInvalidMemberInitializerUnknownType : enumContext.explicitType === "symbol" ? FlowErrors.EnumInvalidMemberInitializerSymbolType : FlowErrors.EnumInvalidMemberInitializerPrimaryType, loc, enumContext);
  }
  flowEnumErrorNumberMemberNotInitialized(loc, details) {
    this.raise(FlowErrors.EnumNumberMemberNotInitialized, loc, details);
  }
  flowEnumErrorStringMemberInconsistentlyInitialized(node, details) {
    this.raise(FlowErrors.EnumStringMemberInconsistentlyInitialized, node, details);
  }
  flowEnumMemberInit() {
    const startLoc = this.state.startLoc;
    const endOfInit = () => this.match(12) || this.match(8);
    switch (this.state.type) {
      case 135:
        {
          const literal = this.parseNumericLiteral(this.state.value);
          if (endOfInit()) {
            return {
              type: "number",
              loc: literal.loc.start,
              value: literal
            };
          }
          return {
            type: "invalid",
            loc: startLoc
          };
        }
      case 134:
        {
          const literal = this.parseStringLiteral(this.state.value);
          if (endOfInit()) {
            return {
              type: "string",
              loc: literal.loc.start,
              value: literal
            };
          }
          return {
            type: "invalid",
            loc: startLoc
          };
        }
      case 85:
      case 86:
        {
          const literal = this.parseBooleanLiteral(this.match(85));
          if (endOfInit()) {
            return {
              type: "boolean",
              loc: literal.loc.start,
              value: literal
            };
          }
          return {
            type: "invalid",
            loc: startLoc
          };
        }
      default:
        return {
          type: "invalid",
          loc: startLoc
        };
    }
  }
  flowEnumMemberRaw() {
    const loc = this.state.startLoc;
    const id = this.parseIdentifier(true);
    const init = this.eat(29) ? this.flowEnumMemberInit() : {
      type: "none",
      loc
    };
    return {
      id,
      init
    };
  }
  flowEnumCheckExplicitTypeMismatch(loc, context, expectedType) {
    const {
      explicitType
    } = context;
    if (explicitType === null) {
      return;
    }
    if (explicitType !== expectedType) {
      this.flowEnumErrorInvalidMemberInitializer(loc, context);
    }
  }
  flowEnumMembers({
    enumName,
    explicitType
  }) {
    const seenNames = new Set();
    const members = {
      booleanMembers: [],
      numberMembers: [],
      stringMembers: [],
      defaultedMembers: []
    };
    let hasUnknownMembers = false;
    while (!this.match(8)) {
      if (this.eat(21)) {
        hasUnknownMembers = true;
        break;
      }
      const memberNode = this.startNode();
      const {
        id,
        init
      } = this.flowEnumMemberRaw();
      const memberName = id.name;
      if (memberName === "") {
        continue;
      }
      if (/^[a-z]/.test(memberName)) {
        this.raise(FlowErrors.EnumInvalidMemberName, id, {
          memberName,
          suggestion: memberName[0].toUpperCase() + memberName.slice(1),
          enumName
        });
      }
      if (seenNames.has(memberName)) {
        this.raise(FlowErrors.EnumDuplicateMemberName, id, {
          memberName,
          enumName
        });
      }
      seenNames.add(memberName);
      const context = {
        enumName,
        explicitType,
        memberName
      };
      memberNode.id = id;
      switch (init.type) {
        case "boolean":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "boolean");
            memberNode.init = init.value;
            members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
            break;
          }
        case "number":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "number");
            memberNode.init = init.value;
            members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
            break;
          }
        case "string":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "string");
            memberNode.init = init.value;
            members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
            break;
          }
        case "invalid":
          {
            throw this.flowEnumErrorInvalidMemberInitializer(init.loc, context);
          }
        case "none":
          {
            switch (explicitType) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(init.loc, context);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(init.loc, context);
                break;
              default:
                members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
            }
          }
      }
      if (!this.match(8)) {
        this.expect(12);
      }
    }
    return {
      members,
      hasUnknownMembers
    };
  }
  flowEnumStringMembers(initializedMembers, defaultedMembers, {
    enumName
  }) {
    if (initializedMembers.length === 0) {
      return defaultedMembers;
    } else if (defaultedMembers.length === 0) {
      return initializedMembers;
    } else if (defaultedMembers.length > initializedMembers.length) {
      for (const member of initializedMembers) {
        this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
          enumName
        });
      }
      return defaultedMembers;
    } else {
      for (const member of defaultedMembers) {
        this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
          enumName
        });
      }
      return initializedMembers;
    }
  }
  flowEnumParseExplicitType({
    enumName
  }) {
    if (!this.eatContextual(102)) return null;
    if (!tokenIsIdentifier(this.state.type)) {
      throw this.raise(FlowErrors.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
        enumName
      });
    }
    const {
      value
    } = this.state;
    this.next();
    if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
      this.raise(FlowErrors.EnumInvalidExplicitType, this.state.startLoc, {
        enumName,
        invalidEnumType: value
      });
    }
    return value;
  }
  flowEnumBody(node, id) {
    const enumName = id.name;
    const nameLoc = id.loc.start;
    const explicitType = this.flowEnumParseExplicitType({
      enumName
    });
    this.expect(5);
    const {
      members,
      hasUnknownMembers
    } = this.flowEnumMembers({
      enumName,
      explicitType
    });
    node.hasUnknownMembers = hasUnknownMembers;
    switch (explicitType) {
      case "boolean":
        node.explicitType = true;
        node.members = members.booleanMembers;
        this.expect(8);
        return this.finishNode(node, "EnumBooleanBody");
      case "number":
        node.explicitType = true;
        node.members = members.numberMembers;
        this.expect(8);
        return this.finishNode(node, "EnumNumberBody");
      case "string":
        node.explicitType = true;
        node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
          enumName
        });
        this.expect(8);
        return this.finishNode(node, "EnumStringBody");
      case "symbol":
        node.members = members.defaultedMembers;
        this.expect(8);
        return this.finishNode(node, "EnumSymbolBody");
      default:
        {
          const empty = () => {
            node.members = [];
            this.expect(8);
            return this.finishNode(node, "EnumStringBody");
          };
          node.explicitType = false;
          const boolsLen = members.booleanMembers.length;
          const numsLen = members.numberMembers.length;
          const strsLen = members.stringMembers.length;
          const defaultedLen = members.defaultedMembers.length;
          if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
            return empty();
          } else if (!boolsLen && !numsLen) {
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName
            });
            this.expect(8);
            return this.finishNode(node, "EnumStringBody");
          } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
            for (const member of members.defaultedMembers) {
              this.flowEnumErrorBooleanMemberNotInitialized(member.loc.start, {
                enumName,
                memberName: member.id.name
              });
            }
            node.members = members.booleanMembers;
            this.expect(8);
            return this.finishNode(node, "EnumBooleanBody");
          } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
            for (const member of members.defaultedMembers) {
              this.flowEnumErrorNumberMemberNotInitialized(member.loc.start, {
                enumName,
                memberName: member.id.name
              });
            }
            node.members = members.numberMembers;
            this.expect(8);
            return this.finishNode(node, "EnumNumberBody");
          } else {
            this.raise(FlowErrors.EnumInconsistentMemberValues, nameLoc, {
              enumName
            });
            return empty();
          }
        }
    }
  }
  flowParseEnumDeclaration(node) {
    const id = this.parseIdentifier();
    node.id = id;
    node.body = this.flowEnumBody(this.startNode(), id);
    return this.finishNode(node, "EnumDeclaration");
  }
  jsxParseOpeningElementAfterName(node) {
    if (this.shouldParseTypes()) {
      if (this.match(47) || this.match(51)) {
        node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
      }
    }
    return super.jsxParseOpeningElementAfterName(node);
  }
  isLookaheadToken_lt() {
    const next = this.nextTokenStart();
    if (this.input.charCodeAt(next) === 60) {
      const afterNext = this.input.charCodeAt(next + 1);
      return afterNext !== 60 && afterNext !== 61;
    }
    return false;
  }
  reScan_lt_gt() {
    const {
      type
    } = this.state;
    if (type === 47) {
      this.state.pos -= 1;
      this.readToken_lt();
    } else if (type === 48) {
      this.state.pos -= 1;
      this.readToken_gt();
    }
  }
  reScan_lt() {
    const {
      type
    } = this.state;
    if (type === 51) {
      this.state.pos -= 2;
      this.finishOp(47, 1);
      return 47;
    }
    return type;
  }
  maybeUnwrapTypeCastExpression(node) {
    return node.type === "TypeCastExpression" ? node.expression : node;
  }
};
const entities = {
  __proto__: null,
  quot: "\u0022",
  amp: "&",
  apos: "\u0027",
  lt: "<",
  gt: ">",
  nbsp: "\u00A0",
  iexcl: "\u00A1",
  cent: "\u00A2",
  pound: "\u00A3",
  curren: "\u00A4",
  yen: "\u00A5",
  brvbar: "\u00A6",
  sect: "\u00A7",
  uml: "\u00A8",
  copy: "\u00A9",
  ordf: "\u00AA",
  laquo: "\u00AB",
  not: "\u00AC",
  shy: "\u00AD",
  reg: "\u00AE",
  macr: "\u00AF",
  deg: "\u00B0",
  plusmn: "\u00B1",
  sup2: "\u00B2",
  sup3: "\u00B3",
  acute: "\u00B4",
  micro: "\u00B5",
  para: "\u00B6",
  middot: "\u00B7",
  cedil: "\u00B8",
  sup1: "\u00B9",
  ordm: "\u00BA",
  raquo: "\u00BB",
  frac14: "\u00BC",
  frac12: "\u00BD",
  frac34: "\u00BE",
  iquest: "\u00BF",
  Agrave: "\u00C0",
  Aacute: "\u00C1",
  Acirc: "\u00C2",
  Atilde: "\u00C3",
  Auml: "\u00C4",
  Aring: "\u00C5",
  AElig: "\u00C6",
  Ccedil: "\u00C7",
  Egrave: "\u00C8",
  Eacute: "\u00C9",
  Ecirc: "\u00CA",
  Euml: "\u00CB",
  Igrave: "\u00CC",
  Iacute: "\u00CD",
  Icirc: "\u00CE",
  Iuml: "\u00CF",
  ETH: "\u00D0",
  Ntilde: "\u00D1",
  Ograve: "\u00D2",
  Oacute: "\u00D3",
  Ocirc: "\u00D4",
  Otilde: "\u00D5",
  Ouml: "\u00D6",
  times: "\u00D7",
  Oslash: "\u00D8",
  Ugrave: "\u00D9",
  Uacute: "\u00DA",
  Ucirc: "\u00DB",
  Uuml: "\u00DC",
  Yacute: "\u00DD",
  THORN: "\u00DE",
  szlig: "\u00DF",
  agrave: "\u00E0",
  aacute: "\u00E1",
  acirc: "\u00E2",
  atilde: "\u00E3",
  auml: "\u00E4",
  aring: "\u00E5",
  aelig: "\u00E6",
  ccedil: "\u00E7",
  egrave: "\u00E8",
  eacute: "\u00E9",
  ecirc: "\u00EA",
  euml: "\u00EB",
  igrave: "\u00EC",
  iacute: "\u00ED",
  icirc: "\u00EE",
  iuml: "\u00EF",
  eth: "\u00F0",
  ntilde: "\u00F1",
  ograve: "\u00F2",
  oacute: "\u00F3",
  ocirc: "\u00F4",
  otilde: "\u00F5",
  ouml: "\u00F6",
  divide: "\u00F7",
  oslash: "\u00F8",
  ugrave: "\u00F9",
  uacute: "\u00FA",
  ucirc: "\u00FB",
  uuml: "\u00FC",
  yacute: "\u00FD",
  thorn: "\u00FE",
  yuml: "\u00FF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
const JsxErrors = ParseErrorEnum`jsx`({
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
  MissingClosingTagElement: ({
    openingTagName
  }) => `Expected corresponding JSX closing tag for <${openingTagName}>.`,
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
  UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
  UnexpectedToken: ({
    unexpected,
    HTMLEntity
  }) => `Unexpected token \`${unexpected}\`. Did you mean \`${HTMLEntity}\` or \`{'${unexpected}'}\`?`,
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
  UnterminatedJsxContent: "Unterminated JSX contents.",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
});
function isFragment(object) {
  return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
}
function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }
  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }
  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }
  throw new Error("Node had unexpected type: " + object.type);
}
var jsx = superClass => class JSXParserMixin extends superClass {
  jsxReadToken() {
    let out = "";
    let chunkStart = this.state.pos;
    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(JsxErrors.UnterminatedJsxContent, this.state.startLoc);
      }
      const ch = this.input.charCodeAt(this.state.pos);
      switch (ch) {
        case 60:
        case 123:
          if (this.state.pos === this.state.start) {
            if (ch === 60 && this.state.canStartJSXElement) {
              ++this.state.pos;
              this.finishToken(143);
            } else {
              super.getTokenFromCode(ch);
            }
            return;
          }
          out += this.input.slice(chunkStart, this.state.pos);
          this.finishToken(142, out);
          return;
        case 38:
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
          break;
        case 62:
        case 125:
        default:
          if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(true);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }
      }
    }
  }
  jsxReadNewLine(normalizeCRLF) {
    const ch = this.input.charCodeAt(this.state.pos);
    let out;
    ++this.state.pos;
    if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
      ++this.state.pos;
      out = normalizeCRLF ? "\n" : "\r\n";
    } else {
      out = String.fromCharCode(ch);
    }
    ++this.state.curLine;
    this.state.lineStart = this.state.pos;
    return out;
  }
  jsxReadString(quote) {
    let out = "";
    let chunkStart = ++this.state.pos;
    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(Errors.UnterminatedString, this.state.startLoc);
      }
      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;
      if (ch === 38) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadEntity();
        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadNewLine(false);
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
    out += this.input.slice(chunkStart, this.state.pos++);
    this.finishToken(134, out);
  }
  jsxReadEntity() {
    const startPos = ++this.state.pos;
    if (this.codePointAtPos(this.state.pos) === 35) {
      ++this.state.pos;
      let radix = 10;
      if (this.codePointAtPos(this.state.pos) === 120) {
        radix = 16;
        ++this.state.pos;
      }
      const codePoint = this.readInt(radix, undefined, false, "bail");
      if (codePoint !== null && this.codePointAtPos(this.state.pos) === 59) {
        ++this.state.pos;
        return String.fromCodePoint(codePoint);
      }
    } else {
      let count = 0;
      let semi = false;
      while (count++ < 10 && this.state.pos < this.length && !(semi = this.codePointAtPos(this.state.pos) === 59)) {
        ++this.state.pos;
      }
      if (semi) {
        const desc = this.input.slice(startPos, this.state.pos);
        const entity = entities[desc];
        ++this.state.pos;
        if (entity) {
          return entity;
        }
      }
    }
    this.state.pos = startPos;
    return "&";
  }
  jsxReadWord() {
    let ch;
    const start = this.state.pos;
    do {
      ch = this.input.charCodeAt(++this.state.pos);
    } while (isIdentifierChar(ch) || ch === 45);
    this.finishToken(141, this.input.slice(start, this.state.pos));
  }
  jsxParseIdentifier() {
    const node = this.startNode();
    if (this.match(141)) {
      node.name = this.state.value;
    } else if (tokenIsKeyword(this.state.type)) {
      node.name = tokenLabelName(this.state.type);
    } else {
      this.unexpected();
    }
    this.next();
    return this.finishNode(node, "JSXIdentifier");
  }
  jsxParseNamespacedName() {
    const startLoc = this.state.startLoc;
    const name = this.jsxParseIdentifier();
    if (!this.eat(14)) return name;
    const node = this.startNodeAt(startLoc);
    node.namespace = name;
    node.name = this.jsxParseIdentifier();
    return this.finishNode(node, "JSXNamespacedName");
  }
  jsxParseElementName() {
    const startLoc = this.state.startLoc;
    let node = this.jsxParseNamespacedName();
    if (node.type === "JSXNamespacedName") {
      return node;
    }
    while (this.eat(16)) {
      const newNode = this.startNodeAt(startLoc);
      newNode.object = node;
      newNode.property = this.jsxParseIdentifier();
      node = this.finishNode(newNode, "JSXMemberExpression");
    }
    return node;
  }
  jsxParseAttributeValue() {
    let node;
    switch (this.state.type) {
      case 5:
        node = this.startNode();
        this.setContext(types.brace);
        this.next();
        node = this.jsxParseExpressionContainer(node, types.j_oTag);
        if (node.expression.type === "JSXEmptyExpression") {
          this.raise(JsxErrors.AttributeIsEmpty, node);
        }
        return node;
      case 143:
      case 134:
        return this.parseExprAtom();
      default:
        throw this.raise(JsxErrors.UnsupportedJsxValue, this.state.startLoc);
    }
  }
  jsxParseEmptyExpression() {
    const node = this.startNodeAt(this.state.lastTokEndLoc);
    return this.finishNodeAt(node, "JSXEmptyExpression", this.state.startLoc);
  }
  jsxParseSpreadChild(node) {
    this.next();
    node.expression = this.parseExpression();
    this.setContext(types.j_expr);
    this.state.canStartJSXElement = true;
    this.expect(8);
    return this.finishNode(node, "JSXSpreadChild");
  }
  jsxParseExpressionContainer(node, previousContext) {
    if (this.match(8)) {
      node.expression = this.jsxParseEmptyExpression();
    } else {
      const expression = this.parseExpression();
      node.expression = expression;
    }
    this.setContext(previousContext);
    this.state.canStartJSXElement = true;
    this.expect(8);
    return this.finishNode(node, "JSXExpressionContainer");
  }
  jsxParseAttribute() {
    const node = this.startNode();
    if (this.match(5)) {
      this.setContext(types.brace);
      this.next();
      this.expect(21);
      node.argument = this.parseMaybeAssignAllowIn();
      this.setContext(types.j_oTag);
      this.state.canStartJSXElement = true;
      this.expect(8);
      return this.finishNode(node, "JSXSpreadAttribute");
    }
    node.name = this.jsxParseNamespacedName();
    node.value = this.eat(29) ? this.jsxParseAttributeValue() : null;
    return this.finishNode(node, "JSXAttribute");
  }
  jsxParseOpeningElementAt(startLoc) {
    const node = this.startNodeAt(startLoc);
    if (this.eat(144)) {
      return this.finishNode(node, "JSXOpeningFragment");
    }
    node.name = this.jsxParseElementName();
    return this.jsxParseOpeningElementAfterName(node);
  }
  jsxParseOpeningElementAfterName(node) {
    const attributes = [];
    while (!this.match(56) && !this.match(144)) {
      attributes.push(this.jsxParseAttribute());
    }
    node.attributes = attributes;
    node.selfClosing = this.eat(56);
    this.expect(144);
    return this.finishNode(node, "JSXOpeningElement");
  }
  jsxParseClosingElementAt(startLoc) {
    const node = this.startNodeAt(startLoc);
    if (this.eat(144)) {
      return this.finishNode(node, "JSXClosingFragment");
    }
    node.name = this.jsxParseElementName();
    this.expect(144);
    return this.finishNode(node, "JSXClosingElement");
  }
  jsxParseElementAt(startLoc) {
    const node = this.startNodeAt(startLoc);
    const children = [];
    const openingElement = this.jsxParseOpeningElementAt(startLoc);
    let closingElement = null;
    if (!openingElement.selfClosing) {
      contents: for (;;) {
        switch (this.state.type) {
          case 143:
            startLoc = this.state.startLoc;
            this.next();
            if (this.eat(56)) {
              closingElement = this.jsxParseClosingElementAt(startLoc);
              break contents;
            }
            children.push(this.jsxParseElementAt(startLoc));
            break;
          case 142:
            children.push(this.parseLiteral(this.state.value, "JSXText"));
            break;
          case 5:
            {
              const node = this.startNode();
              this.setContext(types.brace);
              this.next();
              if (this.match(21)) {
                children.push(this.jsxParseSpreadChild(node));
              } else {
                children.push(this.jsxParseExpressionContainer(node, types.j_expr));
              }
              break;
            }
          default:
            this.unexpected();
        }
      }
      if (isFragment(openingElement) && !isFragment(closingElement) && closingElement !== null) {
        this.raise(JsxErrors.MissingClosingTagFragment, closingElement);
      } else if (!isFragment(openingElement) && isFragment(closingElement)) {
        this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
          openingTagName: getQualifiedJSXName(openingElement.name)
        });
      } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
            openingTagName: getQualifiedJSXName(openingElement.name)
          });
        }
      }
    }
    if (isFragment(openingElement)) {
      node.openingFragment = openingElement;
      node.closingFragment = closingElement;
    } else {
      node.openingElement = openingElement;
      node.closingElement = closingElement;
    }
    node.children = children;
    if (this.match(47)) {
      throw this.raise(JsxErrors.UnwrappedAdjacentJSXElements, this.state.startLoc);
    }
    return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
  }
  jsxParseElement() {
    const startLoc = this.state.startLoc;
    this.next();
    return this.jsxParseElementAt(startLoc);
  }
  setContext(newContext) {
    const {
      context
    } = this.state;
    context[context.length - 1] = newContext;
  }
  parseExprAtom(refExpressionErrors) {
    if (this.match(143)) {
      return this.jsxParseElement();
    } else if (this.match(47) && this.input.charCodeAt(this.state.pos) !== 33) {
      this.replaceToken(143);
      return this.jsxParseElement();
    } else {
      return super.parseExprAtom(refExpressionErrors);
    }
  }
  skipSpace() {
    const curContext = this.curContext();
    if (!curContext.preserveSpace) super.skipSpace();
  }
  getTokenFromCode(code) {
    const context = this.curContext();
    if (context === types.j_expr) {
      this.jsxReadToken();
      return;
    }
    if (context === types.j_oTag || context === types.j_cTag) {
      if (isIdentifierStart(code)) {
        this.jsxReadWord();
        return;
      }
      if (code === 62) {
        ++this.state.pos;
        this.finishToken(144);
        return;
      }
      if ((code === 34 || code === 39) && context === types.j_oTag) {
        this.jsxReadString(code);
        return;
      }
    }
    if (code === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
      ++this.state.pos;
      this.finishToken(143);
      return;
    }
    super.getTokenFromCode(code);
  }
  updateContext(prevType) {
    const {
      context,
      type
    } = this.state;
    if (type === 56 && prevType === 143) {
      context.splice(-2, 2, types.j_cTag);
      this.state.canStartJSXElement = false;
    } else if (type === 143) {
      context.push(types.j_oTag);
    } else if (type === 144) {
      const out = context[context.length - 1];
      if (out === types.j_oTag && prevType === 56 || out === types.j_cTag) {
        context.pop();
        this.state.canStartJSXElement = context[context.length - 1] === types.j_expr;
      } else {
        this.setContext(types.j_expr);
        this.state.canStartJSXElement = true;
      }
    } else {
      this.state.canStartJSXElement = tokenComesBeforeExpression(type);
    }
  }
};
class TypeScriptScope extends Scope {
  constructor(...args) {
    super(...args);
    this.tsNames = new Map();
  }
}
class TypeScriptScopeHandler extends ScopeHandler {
  constructor(...args) {
    super(...args);
    this.importsStack = [];
  }
  createScope(flags) {
    this.importsStack.push(new Set());
    return new TypeScriptScope(flags);
  }
  enter(flags) {
    if (flags === 256) {
      this.importsStack.push(new Set());
    }
    super.enter(flags);
  }
  exit() {
    const flags = super.exit();
    if (flags === 256) {
      this.importsStack.pop();
    }
    return flags;
  }
  hasImport(name, allowShadow) {
    const len = this.importsStack.length;
    if (this.importsStack[len - 1].has(name)) {
      return true;
    }
    if (!allowShadow && len > 1) {
      for (let i = 0; i < len - 1; i++) {
        if (this.importsStack[i].has(name)) return true;
      }
    }
    return false;
  }
  declareName(name, bindingType, loc) {
    if (bindingType & 4096) {
      if (this.hasImport(name, true)) {
        this.parser.raise(Errors.VarRedeclaration, loc, {
          identifierName: name
        });
      }
      this.importsStack[this.importsStack.length - 1].add(name);
      return;
    }
    const scope = this.currentScope();
    let type = scope.tsNames.get(name) || 0;
    if (bindingType & 1024) {
      this.maybeExportDefined(scope, name);
      scope.tsNames.set(name, type | 16);
      return;
    }
    super.declareName(name, bindingType, loc);
    if (bindingType & 2) {
      if (!(bindingType & 1)) {
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        this.maybeExportDefined(scope, name);
      }
      type = type | 1;
    }
    if (bindingType & 256) {
      type = type | 2;
    }
    if (bindingType & 512) {
      type = type | 4;
    }
    if (bindingType & 128) {
      type = type | 8;
    }
    if (type) scope.tsNames.set(name, type);
  }
  isRedeclaredInScope(scope, name, bindingType) {
    const type = scope.tsNames.get(name);
    if ((type & 2) > 0) {
      if (bindingType & 256) {
        const isConst = !!(bindingType & 512);
        const wasConst = (type & 4) > 0;
        return isConst !== wasConst;
      }
      return true;
    }
    if (bindingType & 128 && (type & 8) > 0) {
      if (scope.names.get(name) & 2) {
        return !!(bindingType & 1);
      } else {
        return false;
      }
    }
    if (bindingType & 2 && (type & 1) > 0) {
      return true;
    }
    return super.isRedeclaredInScope(scope, name, bindingType);
  }
  checkLocalExport(id) {
    const {
      name
    } = id;
    if (this.hasImport(name)) return;
    const len = this.scopeStack.length;
    for (let i = len - 1; i >= 0; i--) {
      const scope = this.scopeStack[i];
      const type = scope.tsNames.get(name);
      if ((type & 1) > 0 || (type & 16) > 0) {
        return;
      }
    }
    super.checkLocalExport(id);
  }
}
const unwrapParenthesizedExpression = node => {
  return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
};
class LValParser extends NodeUtils {
  toAssignable(node, isLHS = false) {
    var _node$extra, _node$extra3;
    let parenthesized = undefined;
    if (node.type === "ParenthesizedExpression" || (_node$extra = node.extra) != null && _node$extra.parenthesized) {
      parenthesized = unwrapParenthesizedExpression(node);
      if (isLHS) {
        if (parenthesized.type === "Identifier") {
          this.expressionScope.recordArrowParameterBindingError(Errors.InvalidParenthesizedAssignment, node);
        } else if (parenthesized.type !== "MemberExpression" && !this.isOptionalMemberExpression(parenthesized)) {
          this.raise(Errors.InvalidParenthesizedAssignment, node);
        }
      } else {
        this.raise(Errors.InvalidParenthesizedAssignment, node);
      }
    }
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        for (let i = 0, length = node.properties.length, last = length - 1; i < length; i++) {
          var _node$extra2;
          const prop = node.properties[i];
          const isLast = i === last;
          this.toAssignableObjectExpressionProp(prop, isLast, isLHS);
          if (isLast && prop.type === "RestElement" && (_node$extra2 = node.extra) != null && _node$extra2.trailingCommaLoc) {
            this.raise(Errors.RestTrailingComma, node.extra.trailingCommaLoc);
          }
        }
        break;
      case "ObjectProperty":
        {
          const {
            key,
            value
          } = node;
          if (this.isPrivateName(key)) {
            this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
          }
          this.toAssignable(value, isLHS);
          break;
        }
      case "SpreadElement":
        {
          throw new Error("Internal @babel/parser error (this is a bug, please report it)." + " SpreadElement should be converted by .toAssignable's caller.");
        }
      case "ArrayExpression":
        node.type = "ArrayPattern";
        this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingCommaLoc, isLHS);
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(Errors.MissingEqInAssignment, node.left.loc.end);
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isLHS);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(parenthesized, isLHS);
        break;
    }
  }
  toAssignableObjectExpressionProp(prop, isLast, isLHS) {
    if (prop.type === "ObjectMethod") {
      this.raise(prop.kind === "get" || prop.kind === "set" ? Errors.PatternHasAccessor : Errors.PatternHasMethod, prop.key);
    } else if (prop.type === "SpreadElement") {
      prop.type = "RestElement";
      const arg = prop.argument;
      this.checkToRestConversion(arg, false);
      this.toAssignable(arg, isLHS);
      if (!isLast) {
        this.raise(Errors.RestTrailingComma, prop);
      }
    } else {
      this.toAssignable(prop, isLHS);
    }
  }
  toAssignableList(exprList, trailingCommaLoc, isLHS) {
    const end = exprList.length - 1;
    for (let i = 0; i <= end; i++) {
      const elt = exprList[i];
      if (!elt) continue;
      this.toAssignableListItem(exprList, i, isLHS);
      if (elt.type === "RestElement") {
        if (i < end) {
          this.raise(Errors.RestTrailingComma, elt);
        } else if (trailingCommaLoc) {
          this.raise(Errors.RestTrailingComma, trailingCommaLoc);
        }
      }
    }
  }
  toAssignableListItem(exprList, index, isLHS) {
    const node = exprList[index];
    if (node.type === "SpreadElement") {
      node.type = "RestElement";
      const arg = node.argument;
      this.checkToRestConversion(arg, true);
      this.toAssignable(arg, isLHS);
    } else {
      this.toAssignable(node, isLHS);
    }
  }
  isAssignable(node, isBinding) {
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        return true;
      case "ObjectExpression":
        {
          const last = node.properties.length - 1;
          return node.properties.every((prop, i) => {
            return prop.type !== "ObjectMethod" && (i === last || prop.type !== "SpreadElement") && this.isAssignable(prop);
          });
        }
      case "ObjectProperty":
        return this.isAssignable(node.value);
      case "SpreadElement":
        return this.isAssignable(node.argument);
      case "ArrayExpression":
        return node.elements.every(element => element === null || this.isAssignable(element));
      case "AssignmentExpression":
        return node.operator === "=";
      case "ParenthesizedExpression":
        return this.isAssignable(node.expression);
      case "MemberExpression":
      case "OptionalMemberExpression":
        return !isBinding;
      default:
        return false;
    }
  }
  toReferencedList(exprList, isParenthesizedExpr) {
    return exprList;
  }
  toReferencedListDeep(exprList, isParenthesizedExpr) {
    this.toReferencedList(exprList, isParenthesizedExpr);
    for (const expr of exprList) {
      if ((expr == null ? void 0 : expr.type) === "ArrayExpression") {
        this.toReferencedListDeep(expr.elements);
      }
    }
  }
  parseSpread(refExpressionErrors) {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, undefined);
    return this.finishNode(node, "SpreadElement");
  }
  parseRestBinding() {
    const node = this.startNode();
    this.next();
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 0:
        {
          const node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(3, 93, 1);
          return this.finishNode(node, "ArrayPattern");
        }
      case 5:
        return this.parseObjectLike(8, true);
    }
    return this.parseIdentifier();
  }
  parseBindingList(close, closeCharCode, flags) {
    const allowEmpty = flags & 1;
    const elts = [];
    let first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
      }
      if (allowEmpty && this.match(12)) {
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(21)) {
        let rest = this.parseRestBinding();
        if (this.hasPlugin("flow") || flags & 2) {
          rest = this.parseFunctionParamType(rest);
        }
        elts.push(rest);
        if (!this.checkCommaAfterRest(closeCharCode)) {
          this.expect(close);
          break;
        }
      } else {
        const decorators = [];
        if (flags & 2) {
          if (this.match(26) && this.hasPlugin("decorators")) {
            this.raise(Errors.UnsupportedParameterDecorator, this.state.startLoc);
          }
          while (this.match(26)) {
            decorators.push(this.parseDecorator());
          }
        }
        elts.push(this.parseBindingElement(flags, decorators));
      }
    }
    return elts;
  }
  parseBindingRestProperty(prop) {
    this.next();
    prop.argument = this.parseIdentifier();
    this.checkCommaAfterRest(125);
    return this.finishNode(prop, "RestElement");
  }
  parseBindingProperty() {
    const {
      type,
      startLoc
    } = this.state;
    if (type === 21) {
      return this.parseBindingRestProperty(this.startNode());
    }
    const prop = this.startNode();
    if (type === 139) {
      this.expectPlugin("destructuringPrivate", startLoc);
      this.classScope.usePrivateName(this.state.value, startLoc);
      prop.key = this.parsePrivateName();
    } else {
      this.parsePropertyName(prop);
    }
    prop.method = false;
    return this.parseObjPropValue(prop, startLoc, false, false, true, false);
  }
  parseBindingElement(flags, decorators) {
    const left = this.parseMaybeDefault();
    if (this.hasPlugin("flow") || flags & 2) {
      this.parseFunctionParamType(left);
    }
    const elt = this.parseMaybeDefault(left.loc.start, left);
    if (decorators.length) {
      left.decorators = decorators;
    }
    return elt;
  }
  parseFunctionParamType(param) {
    return param;
  }
  parseMaybeDefault(startLoc, left) {
    startLoc != null ? startLoc : startLoc = this.state.startLoc;
    left = left != null ? left : this.parseBindingAtom();
    if (!this.eat(29)) return left;
    const node = this.startNodeAt(startLoc);
    node.left = left;
    node.right = this.parseMaybeAssignAllowIn();
    return this.finishNode(node, "AssignmentPattern");
  }
  isValidLVal(type, isUnparenthesizedInAssign, binding) {
    switch (type) {
      case "AssignmentPattern":
        return "left";
      case "RestElement":
        return "argument";
      case "ObjectProperty":
        return "value";
      case "ParenthesizedExpression":
        return "expression";
      case "ArrayPattern":
        return "elements";
      case "ObjectPattern":
        return "properties";
    }
    return false;
  }
  isOptionalMemberExpression(expression) {
    return expression.type === "OptionalMemberExpression";
  }
  checkLVal(expression, ancestor, binding = 64, checkClashes = false, strictModeChanged = false, hasParenthesizedAncestor = false) {
    var _expression$extra;
    const type = expression.type;
    if (this.isObjectMethod(expression)) return;
    const isOptionalMemberExpression = this.isOptionalMemberExpression(expression);
    if (isOptionalMemberExpression || type === "MemberExpression") {
      if (isOptionalMemberExpression) {
        this.expectPlugin("optionalChainingAssign", expression.loc.start);
        if (ancestor.type !== "AssignmentExpression") {
          this.raise(Errors.InvalidLhsOptionalChaining, expression, {
            ancestor
          });
        }
      }
      if (binding !== 64) {
        this.raise(Errors.InvalidPropertyBindingPattern, expression);
      }
      return;
    }
    if (type === "Identifier") {
      this.checkIdentifier(expression, binding, strictModeChanged);
      const {
        name
      } = expression;
      if (checkClashes) {
        if (checkClashes.has(name)) {
          this.raise(Errors.ParamDupe, expression);
        } else {
          checkClashes.add(name);
        }
      }
      return;
    }
    const validity = this.isValidLVal(type, !(hasParenthesizedAncestor || (_expression$extra = expression.extra) != null && _expression$extra.parenthesized) && ancestor.type === "AssignmentExpression", binding);
    if (validity === true) return;
    if (validity === false) {
      const ParseErrorClass = binding === 64 ? Errors.InvalidLhs : Errors.InvalidLhsBinding;
      this.raise(ParseErrorClass, expression, {
        ancestor
      });
      return;
    }
    let key, isParenthesizedExpression;
    if (typeof validity === "string") {
      key = validity;
      isParenthesizedExpression = type === "ParenthesizedExpression";
    } else {
      [key, isParenthesizedExpression] = validity;
    }
    const nextAncestor = type === "ArrayPattern" || type === "ObjectPattern" ? {
      type
    } : ancestor;
    const val = expression[key];
    if (Array.isArray(val)) {
      for (const child of val) {
        if (child) {
          this.checkLVal(child, nextAncestor, binding, checkClashes, strictModeChanged, isParenthesizedExpression);
        }
      }
    } else if (val) {
      this.checkLVal(val, nextAncestor, binding, checkClashes, strictModeChanged, isParenthesizedExpression);
    }
  }
  checkIdentifier(at, bindingType, strictModeChanged = false) {
    if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(at.name, this.inModule) : isStrictBindOnlyReservedWord(at.name))) {
      if (bindingType === 64) {
        this.raise(Errors.StrictEvalArguments, at, {
          referenceName: at.name
        });
      } else {
        this.raise(Errors.StrictEvalArgumentsBinding, at, {
          bindingName: at.name
        });
      }
    }
    if (bindingType & 8192 && at.name === "let") {
      this.raise(Errors.LetInLexicalBinding, at);
    }
    if (!(bindingType & 64)) {
      this.declareNameFromIdentifier(at, bindingType);
    }
  }
  declareNameFromIdentifier(identifier, binding) {
    this.scope.declareName(identifier.name, binding, identifier.loc.start);
  }
  checkToRestConversion(node, allowPattern) {
    switch (node.type) {
      case "ParenthesizedExpression":
        this.checkToRestConversion(node.expression, allowPattern);
        break;
      case "Identifier":
      case "MemberExpression":
        break;
      case "ArrayExpression":
      case "ObjectExpression":
        if (allowPattern) break;
      default:
        this.raise(Errors.InvalidRestAssignmentPattern, node);
    }
  }
  checkCommaAfterRest(close) {
    if (!this.match(12)) {
      return false;
    }
    this.raise(this.lookaheadCharCode() === close ? Errors.RestTrailingComma : Errors.ElementAfterRest, this.state.startLoc);
    return true;
  }
}
function nonNull(x) {
  if (x == null) {
    throw new Error(`Unexpected ${x} value.`);
  }
  return x;
}
function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
}
const TSErrors = ParseErrorEnum`typescript`({
  AbstractMethodHasImplementation: ({
    methodName
  }) => `Method '${methodName}' cannot have an implementation because it is marked abstract.`,
  AbstractPropertyHasInitializer: ({
    propertyName
  }) => `Property '${propertyName}' cannot have an initializer because it is marked abstract.`,
  AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
  AccessorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
  AccessorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
  ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareAccessor: ({
    kind
  }) => `'declare' is not allowed in ${kind}ters.`,
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateAccessibilityModifier: ({
    modifier
  }) => `Accessibility modifier already seen.`,
  DuplicateModifier: ({
    modifier
  }) => `Duplicate modifier: '${modifier}'.`,
  EmptyHeritageClauseType: ({
    token
  }) => `'${token}' list cannot be empty.`,
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
  ImportAliasHasImportType: "An import alias can not use 'import type'.",
  ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
  IncompatibleModifiers: ({
    modifiers
  }) => `'${modifiers[0]}' modifier cannot be used with '${modifiers[1]}' modifier.`,
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
  IndexSignatureHasAccessibility: ({
    modifier
  }) => `Index signatures cannot have an accessibility modifier ('${modifier}').`,
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
  IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
  InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
  InvalidHeritageClauseType: ({
    token
  }) => `'${token}' list can only include identifiers or qualified-names with optional type arguments.`,
  InvalidModifierOnTypeMember: ({
    modifier
  }) => `'${modifier}' modifier cannot appear on a type member.`,
  InvalidModifierOnTypeParameter: ({
    modifier
  }) => `'${modifier}' modifier cannot appear on a type parameter.`,
  InvalidModifierOnTypeParameterPositions: ({
    modifier
  }) => `'${modifier}' modifier can only appear on a type parameter of a class, interface or type alias.`,
  InvalidModifiersOrder: ({
    orderedModifiers
  }) => `'${orderedModifiers[0]}' modifier must precede '${orderedModifiers[1]}' modifier.`,
  InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. " + "You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
  NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
  NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: ({
    modifier
  }) => `Private elements cannot have an accessibility modifier ('${modifier}').`,
  ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
  ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
  ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
  SetAccessorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
  SetAccessorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
  SetAccessorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
  SingleTypeParameterWithoutTrailingComma: ({
    typeParameterName
  }) => `Single type parameter ${typeParameterName} should have a trailing comma. Example usage: <${typeParameterName},>.`,
  StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
  TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
  TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
  TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: ({
    type
  }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${type}.`
});
function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";
    case "boolean":
      return "TSBooleanKeyword";
    case "bigint":
      return "TSBigIntKeyword";
    case "never":
      return "TSNeverKeyword";
    case "number":
      return "TSNumberKeyword";
    case "object":
      return "TSObjectKeyword";
    case "string":
      return "TSStringKeyword";
    case "symbol":
      return "TSSymbolKeyword";
    case "undefined":
      return "TSUndefinedKeyword";
    case "unknown":
      return "TSUnknownKeyword";
    default:
      return undefined;
  }
}
function tsIsAccessModifier(modifier) {
  return modifier === "private" || modifier === "public" || modifier === "protected";
}
function tsIsVarianceAnnotations(modifier) {
  return modifier === "in" || modifier === "out";
}
var typescript = superClass => class TypeScriptParserMixin extends superClass {
  constructor(...args) {
    super(...args);
    this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
      allowedModifiers: ["in", "out"],
      disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
      errorTemplate: TSErrors.InvalidModifierOnTypeParameter
    });
    this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
      allowedModifiers: ["const"],
      disallowedModifiers: ["in", "out"],
      errorTemplate: TSErrors.InvalidModifierOnTypeParameterPositions
    });
    this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
      allowedModifiers: ["in", "out", "const"],
      disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
      errorTemplate: TSErrors.InvalidModifierOnTypeParameter
    });
  }
  getScopeHandler() {
    return TypeScriptScopeHandler;
  }
  tsIsIdentifier() {
    return tokenIsIdentifier(this.state.type);
  }
  tsTokenCanFollowModifier() {
    return this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(139) || this.isLiteralPropertyName();
  }
  tsNextTokenOnSameLineAndCanFollowModifier() {
    this.next();
    if (this.hasPrecedingLineBreak()) {
      return false;
    }
    return this.tsTokenCanFollowModifier();
  }
  tsNextTokenCanFollowModifier() {
    if (this.match(106)) {
      this.next();
      return this.tsTokenCanFollowModifier();
    }
    return this.tsNextTokenOnSameLineAndCanFollowModifier();
  }
  tsParseModifier(allowedModifiers, stopOnStartOfClassStaticBlock) {
    if (!tokenIsIdentifier(this.state.type) && this.state.type !== 58 && this.state.type !== 75) {
      return undefined;
    }
    const modifier = this.state.value;
    if (allowedModifiers.includes(modifier)) {
      if (stopOnStartOfClassStaticBlock && this.tsIsStartOfStaticBlocks()) {
        return undefined;
      }
      if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
        return modifier;
      }
    }
    return undefined;
  }
  tsParseModifiers({
    allowedModifiers,
    disallowedModifiers,
    stopOnStartOfClassStaticBlock,
    errorTemplate = TSErrors.InvalidModifierOnTypeMember
  }, modified) {
    const enforceOrder = (loc, modifier, before, after) => {
      if (modifier === before && modified[after]) {
        this.raise(TSErrors.InvalidModifiersOrder, loc, {
          orderedModifiers: [before, after]
        });
      }
    };
    const incompatible = (loc, modifier, mod1, mod2) => {
      if (modified[mod1] && modifier === mod2 || modified[mod2] && modifier === mod1) {
        this.raise(TSErrors.IncompatibleModifiers, loc, {
          modifiers: [mod1, mod2]
        });
      }
    };
    for (;;) {
      const {
        startLoc
      } = this.state;
      const modifier = this.tsParseModifier(allowedModifiers.concat(disallowedModifiers != null ? disallowedModifiers : []), stopOnStartOfClassStaticBlock);
      if (!modifier) break;
      if (tsIsAccessModifier(modifier)) {
        if (modified.accessibility) {
          this.raise(TSErrors.DuplicateAccessibilityModifier, startLoc, {
            modifier
          });
        } else {
          enforceOrder(startLoc, modifier, modifier, "override");
          enforceOrder(startLoc, modifier, modifier, "static");
          enforceOrder(startLoc, modifier, modifier, "readonly");
          modified.accessibility = modifier;
        }
      } else if (tsIsVarianceAnnotations(modifier)) {
        if (modified[modifier]) {
          this.raise(TSErrors.DuplicateModifier, startLoc, {
            modifier
          });
        }
        modified[modifier] = true;
        enforceOrder(startLoc, modifier, "in", "out");
      } else {
        if (hasOwnProperty.call(modified, modifier)) {
          this.raise(TSErrors.DuplicateModifier, startLoc, {
            modifier
          });
        } else {
          enforceOrder(startLoc, modifier, "static", "readonly");
          enforceOrder(startLoc, modifier, "static", "override");
          enforceOrder(startLoc, modifier, "override", "readonly");
          enforceOrder(startLoc, modifier, "abstract", "override");
          incompatible(startLoc, modifier, "declare", "override");
          incompatible(startLoc, modifier, "static", "abstract");
        }
        modified[modifier] = true;
      }
      if (disallowedModifiers != null && disallowedModifiers.includes(modifier)) {
        this.raise(errorTemplate, startLoc, {
          modifier
        });
      }
    }
  }
  tsIsListTerminator(kind) {
    switch (kind) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(8);
      case "HeritageClauseElement":
        return this.match(5);
      case "TupleElementTypes":
        return this.match(3);
      case "TypeParametersOrArguments":
        return this.match(48);
    }
  }
  tsParseList(kind, parseElement) {
    const result = [];
    while (!this.tsIsListTerminator(kind)) {
      result.push(parseElement());
    }
    return result;
  }
  tsParseDelimitedList(kind, parseElement, refTrailingCommaPos) {
    return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true, refTrailingCommaPos));
  }
  tsParseDelimitedListWorker(kind, parseElement, expectSuccess, refTrailingCommaPos) {
    const result = [];
    let trailingCommaPos = -1;
    for (;;) {
      if (this.tsIsListTerminator(kind)) {
        break;
      }
      trailingCommaPos = -1;
      const element = parseElement();
      if (element == null) {
        return undefined;
      }
      result.push(element);
      if (this.eat(12)) {
        trailingCommaPos = this.state.lastTokStartLoc.index;
        continue;
      }
      if (this.tsIsListTerminator(kind)) {
        break;
      }
      if (expectSuccess) {
        this.expect(12);
      }
      return undefined;
    }
    if (refTrailingCommaPos) {
      refTrailingCommaPos.value = trailingCommaPos;
    }
    return result;
  }
  tsParseBracketedList(kind, parseElement, bracket, skipFirstToken, refTrailingCommaPos) {
    if (!skipFirstToken) {
      if (bracket) {
        this.expect(0);
      } else {
        this.expect(47);
      }
    }
    const result = this.tsParseDelimitedList(kind, parseElement, refTrailingCommaPos);
    if (bracket) {
      this.expect(3);
    } else {
      this.expect(48);
    }
    return result;
  }
  tsParseImportType() {
    const node = this.startNode();
    this.expect(83);
    this.expect(10);
    if (!this.match(134)) {
      this.raise(TSErrors.UnsupportedImportTypeArgument, this.state.startLoc);
      {
        node.argument = super.parseExprAtom();
      }
    } else {
      {
        node.argument = this.parseStringLiteral(this.state.value);
      }
    }
    if (this.eat(12) && !this.match(11)) {
      node.options = super.parseMaybeAssignAllowIn();
      this.eat(12);
    } else {
      node.options = null;
    }
    this.expect(11);
    if (this.eat(16)) {
      node.qualifier = this.tsParseEntityName(1 | 2);
    }
    if (this.match(47)) {
      {
        node.typeParameters = this.tsParseTypeArguments();
      }
    }
    return this.finishNode(node, "TSImportType");
  }
  tsParseEntityName(flags) {
    let entity;
    if (flags & 1 && this.match(78)) {
      if (flags & 2) {
        entity = this.parseIdentifier(true);
      } else {
        const node = this.startNode();
        this.next();
        entity = this.finishNode(node, "ThisExpression");
      }
    } else {
      entity = this.parseIdentifier(!!(flags & 1));
    }
    while (this.eat(16)) {
      const node = this.startNodeAtNode(entity);
      node.left = entity;
      node.right = this.parseIdentifier(!!(flags & 1));
      entity = this.finishNode(node, "TSQualifiedName");
    }
    return entity;
  }
  tsParseTypeReference() {
    const node = this.startNode();
    node.typeName = this.tsParseEntityName(1);
    if (!this.hasPrecedingLineBreak() && this.match(47)) {
      {
        node.typeParameters = this.tsParseTypeArguments();
      }
    }
    return this.finishNode(node, "TSTypeReference");
  }
  tsParseThisTypePredicate(lhs) {
    this.next();
    const node = this.startNodeAtNode(lhs);
    node.parameterName = lhs;
    node.typeAnnotation = this.tsParseTypeAnnotation(false);
    node.asserts = false;
    return this.finishNode(node, "TSTypePredicate");
  }
  tsParseThisTypeNode() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "TSThisType");
  }
  tsParseTypeQuery() {
    const node = this.startNode();
    this.expect(87);
    if (this.match(83)) {
      node.exprName = this.tsParseImportType();
    } else {
      {
        node.exprName = this.tsParseEntityName(1 | 2);
      }
    }
    if (!this.hasPrecedingLineBreak() && this.match(47)) {
      {
        node.typeParameters = this.tsParseTypeArguments();
      }
    }
    return this.finishNode(node, "TSTypeQuery");
  }
  tsParseTypeParameter(parseModifiers) {
    const node = this.startNode();
    parseModifiers(node);
    node.name = this.tsParseTypeParameterName();
    node.constraint = this.tsEatThenParseType(81);
    node.default = this.tsEatThenParseType(29);
    return this.finishNode(node, "TSTypeParameter");
  }
  tsTryParseTypeParameters(parseModifiers) {
    if (this.match(47)) {
      return this.tsParseTypeParameters(parseModifiers);
    }
  }
  tsParseTypeParameters(parseModifiers) {
    const node = this.startNode();
    if (this.match(47) || this.match(143)) {
      this.next();
    } else {
      this.unexpected();
    }
    const refTrailingCommaPos = {
      value: -1
    };
    node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, parseModifiers), false, true, refTrailingCommaPos);
    if (node.params.length === 0) {
      this.raise(TSErrors.EmptyTypeParameters, node);
    }
    if (refTrailingCommaPos.value !== -1) {
      this.addExtra(node, "trailingComma", refTrailingCommaPos.value);
    }
    return this.finishNode(node, "TSTypeParameterDeclaration");
  }
  tsFillSignature(returnToken, signature) {
    const returnTokenRequired = returnToken === 19;
    const paramsKey = "parameters";
    const returnTypeKey = "typeAnnotation";
    signature.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    this.expect(10);
    signature[paramsKey] = this.tsParseBindingListForSignature();
    if (returnTokenRequired) {
      signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    } else if (this.match(returnToken)) {
      signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    }
  }
  tsParseBindingListForSignature() {
    const list = super.parseBindingList(11, 41, 2);
    for (const pattern of list) {
      const {
        type
      } = pattern;
      if (type === "AssignmentPattern" || type === "TSParameterProperty") {
        this.raise(TSErrors.UnsupportedSignatureParameterKind, pattern, {
          type
        });
      }
    }
    return list;
  }
  tsParseTypeMemberSemicolon() {
    if (!this.eat(12) && !this.isLineTerminator()) {
      this.expect(13);
    }
  }
  tsParseSignatureMember(kind, node) {
    this.tsFillSignature(14, node);
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, kind);
  }
  tsIsUnambiguouslyIndexSignature() {
    this.next();
    if (tokenIsIdentifier(this.state.type)) {
      this.next();
      return this.match(14);
    }
    return false;
  }
  tsTryParseIndexSignature(node) {
    if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
      return;
    }
    this.expect(0);
    const id = this.parseIdentifier();
    id.typeAnnotation = this.tsParseTypeAnnotation();
    this.resetEndLocation(id);
    this.expect(3);
    node.parameters = [id];
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, "TSIndexSignature");
  }
  tsParsePropertyOrMethodSignature(node, readonly) {
    if (this.eat(17)) node.optional = true;
    const nodeAny = node;
    if (this.match(10) || this.match(47)) {
      if (readonly) {
        this.raise(TSErrors.ReadonlyForMethodSignature, node);
      }
      const method = nodeAny;
      if (method.kind && this.match(47)) {
        this.raise(TSErrors.AccessorCannotHaveTypeParameters, this.state.curPosition());
      }
      this.tsFillSignature(14, method);
      this.tsParseTypeMemberSemicolon();
      const paramsKey = "parameters";
      const returnTypeKey = "typeAnnotation";
      if (method.kind === "get") {
        if (method[paramsKey].length > 0) {
          this.raise(Errors.BadGetterArity, this.state.curPosition());
          if (this.isThisParam(method[paramsKey][0])) {
            this.raise(TSErrors.AccessorCannotDeclareThisParameter, this.state.curPosition());
          }
        }
      } else if (method.kind === "set") {
        if (method[paramsKey].length !== 1) {
          this.raise(Errors.BadSetterArity, this.state.curPosition());
        } else {
          const firstParameter = method[paramsKey][0];
          if (this.isThisParam(firstParameter)) {
            this.raise(TSErrors.AccessorCannotDeclareThisParameter, this.state.curPosition());
          }
          if (firstParameter.type === "Identifier" && firstParameter.optional) {
            this.raise(TSErrors.SetAccessorCannotHaveOptionalParameter, this.state.curPosition());
          }
          if (firstParameter.type === "RestElement") {
            this.raise(TSErrors.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
        }
        if (method[returnTypeKey]) {
          this.raise(TSErrors.SetAccessorCannotHaveReturnType, method[returnTypeKey]);
        }
      } else {
        method.kind = "method";
      }
      return this.finishNode(method, "TSMethodSignature");
    } else {
      const property = nodeAny;
      if (readonly) property.readonly = true;
      const type = this.tsTryParseTypeAnnotation();
      if (type) property.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(property, "TSPropertySignature");
    }
  }
  tsParseTypeMember() {
    const node = this.startNode();
    if (this.match(10) || this.match(47)) {
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
    }
    if (this.match(77)) {
      const id = this.startNode();
      this.next();
      if (this.match(10) || this.match(47)) {
        return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
      } else {
        node.key = this.createIdentifier(id, "new");
        return this.tsParsePropertyOrMethodSignature(node, false);
      }
    }
    this.tsParseModifiers({
      allowedModifiers: ["readonly"],
      disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
    }, node);
    const idx = this.tsTryParseIndexSignature(node);
    if (idx) {
      return idx;
    }
    super.parsePropertyName(node);
    if (!node.computed && node.key.type === "Identifier" && (node.key.name === "get" || node.key.name === "set") && this.tsTokenCanFollowModifier()) {
      node.kind = node.key.name;
      super.parsePropertyName(node);
    }
    return this.tsParsePropertyOrMethodSignature(node, !!node.readonly);
  }
  tsParseTypeLiteral() {
    const node = this.startNode();
    node.members = this.tsParseObjectTypeMembers();
    return this.finishNode(node, "TSTypeLiteral");
  }
  tsParseObjectTypeMembers() {
    this.expect(5);
    const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    this.expect(8);
    return members;
  }
  tsIsStartOfMappedType() {
    this.next();
    if (this.eat(53)) {
      return this.isContextual(122);
    }
    if (this.isContextual(122)) {
      this.next();
    }
    if (!this.match(0)) {
      return false;
    }
    this.next();
    if (!this.tsIsIdentifier()) {
      return false;
    }
    this.next();
    return this.match(58);
  }
  tsParseMappedType() {
    const node = this.startNode();
    this.expect(5);
    if (this.match(53)) {
      node.readonly = this.state.value;
      this.next();
      this.expectContextual(122);
    } else if (this.eatContextual(122)) {
      node.readonly = true;
    }
    this.expect(0);
    {
      const typeParameter = this.startNode();
      typeParameter.name = this.tsParseTypeParameterName();
      typeParameter.constraint = this.tsExpectThenParseType(58);
      node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
    }
    node.nameType = this.eatContextual(93) ? this.tsParseType() : null;
    this.expect(3);
    if (this.match(53)) {
      node.optional = this.state.value;
      this.next();
      this.expect(17);
    } else if (this.eat(17)) {
      node.optional = true;
    }
    node.typeAnnotation = this.tsTryParseType();
    this.semicolon();
    this.expect(8);
    return this.finishNode(node, "TSMappedType");
  }
  tsParseTupleType() {
    const node = this.startNode();
    node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let seenOptionalElement = false;
    node.elementTypes.forEach(elementNode => {
      const {
        type
      } = elementNode;
      if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
        this.raise(TSErrors.OptionalTypeBeforeRequired, elementNode);
      }
      seenOptionalElement || (seenOptionalElement = type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType");
    });
    return this.finishNode(node, "TSTupleType");
  }
  tsParseTupleElementType() {
    const restStartLoc = this.state.startLoc;
    const rest = this.eat(21);
    const {
      startLoc
    } = this.state;
    let labeled;
    let label;
    let optional;
    let type;
    const isWord = tokenIsKeywordOrIdentifier(this.state.type);
    const chAfterWord = isWord ? this.lookaheadCharCode() : null;
    if (chAfterWord === 58) {
      labeled = true;
      optional = false;
      label = this.parseIdentifier(true);
      this.expect(14);
      type = this.tsParseType();
    } else if (chAfterWord === 63) {
      optional = true;
      const wordName = this.state.value;
      const typeOrLabel = this.tsParseNonArrayType();
      if (this.lookaheadCharCode() === 58) {
        labeled = true;
        label = this.createIdentifier(this.startNodeAt(startLoc), wordName);
        this.expect(17);
        this.expect(14);
        type = this.tsParseType();
      } else {
        labeled = false;
        type = typeOrLabel;
        this.expect(17);
      }
    } else {
      type = this.tsParseType();
      optional = this.eat(17);
      labeled = this.eat(14);
    }
    if (labeled) {
      let labeledNode;
      if (label) {
        labeledNode = this.startNodeAt(startLoc);
        labeledNode.optional = optional;
        labeledNode.label = label;
        labeledNode.elementType = type;
        if (this.eat(17)) {
          labeledNode.optional = true;
          this.raise(TSErrors.TupleOptionalAfterType, this.state.lastTokStartLoc);
        }
      } else {
        labeledNode = this.startNodeAt(startLoc);
        labeledNode.optional = optional;
        this.raise(TSErrors.InvalidTupleMemberLabel, type);
        labeledNode.label = type;
        labeledNode.elementType = this.tsParseType();
      }
      type = this.finishNode(labeledNode, "TSNamedTupleMember");
    } else if (optional) {
      const optionalTypeNode = this.startNodeAt(startLoc);
      optionalTypeNode.typeAnnotation = type;
      type = this.finishNode(optionalTypeNode, "TSOptionalType");
    }
    if (rest) {
      const restNode = this.startNodeAt(restStartLoc);
      restNode.typeAnnotation = type;
      type = this.finishNode(restNode, "TSRestType");
    }
    return type;
  }
  tsParseParenthesizedType() {
    const node = this.startNode();
    this.expect(10);
    node.typeAnnotation = this.tsParseType();
    this.expect(11);
    return this.finishNode(node, "TSParenthesizedType");
  }
  tsParseFunctionOrConstructorType(type, abstract) {
    const node = this.startNode();
    if (type === "TSConstructorType") {
      node.abstract = !!abstract;
      if (abstract) this.next();
      this.next();
    }
    this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, node));
    return this.finishNode(node, type);
  }
  tsParseLiteralTypeNode() {
    const node = this.startNode();
    switch (this.state.type) {
      case 135:
      case 136:
      case 134:
      case 85:
      case 86:
        node.literal = super.parseExprAtom();
        break;
      default:
        this.unexpected();
    }
    return this.finishNode(node, "TSLiteralType");
  }
  tsParseTemplateLiteralType() {
    {
      const node = this.startNode();
      node.literal = super.parseTemplate(false);
      return this.finishNode(node, "TSLiteralType");
    }
  }
  parseTemplateSubstitution() {
    if (this.state.inType) return this.tsParseType();
    return super.parseTemplateSubstitution();
  }
  tsParseThisTypeOrThisTypePredicate() {
    const thisKeyword = this.tsParseThisTypeNode();
    if (this.isContextual(116) && !this.hasPrecedingLineBreak()) {
      return this.tsParseThisTypePredicate(thisKeyword);
    } else {
      return thisKeyword;
    }
  }
  tsParseNonArrayType() {
    switch (this.state.type) {
      case 134:
      case 135:
      case 136:
      case 85:
      case 86:
        return this.tsParseLiteralTypeNode();
      case 53:
        if (this.state.value === "-") {
          const node = this.startNode();
          const nextToken = this.lookahead();
          if (nextToken.type !== 135 && nextToken.type !== 136) {
            this.unexpected();
          }
          node.literal = this.parseMaybeUnary();
          return this.finishNode(node, "TSLiteralType");
        }
        break;
      case 78:
        return this.tsParseThisTypeOrThisTypePredicate();
      case 87:
        return this.tsParseTypeQuery();
      case 83:
        return this.tsParseImportType();
      case 5:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
      case 0:
        return this.tsParseTupleType();
      case 10:
        return this.tsParseParenthesizedType();
      case 25:
      case 24:
        return this.tsParseTemplateLiteralType();
      default:
        {
          const {
            type
          } = this.state;
          if (tokenIsIdentifier(type) || type === 88 || type === 84) {
            const nodeType = type === 88 ? "TSVoidKeyword" : type === 84 ? "TSNullKeyword" : keywordTypeFromName(this.state.value);
            if (nodeType !== undefined && this.lookaheadCharCode() !== 46) {
              const node = this.startNode();
              this.next();
              return this.finishNode(node, nodeType);
            }
            return this.tsParseTypeReference();
          }
        }
    }
    this.unexpected();
  }
  tsParseArrayTypeOrHigher() {
    const {
      startLoc
    } = this.state;
    let type = this.tsParseNonArrayType();
    while (!this.hasPrecedingLineBreak() && this.eat(0)) {
      if (this.match(3)) {
        const node = this.startNodeAt(startLoc);
        node.elementType = type;
        this.expect(3);
        type = this.finishNode(node, "TSArrayType");
      } else {
        const node = this.startNodeAt(startLoc);
        node.objectType = type;
        node.indexType = this.tsParseType();
        this.expect(3);
        type = this.finishNode(node, "TSIndexedAccessType");
      }
    }
    return type;
  }
  tsParseTypeOperator() {
    const node = this.startNode();
    const operator = this.state.value;
    this.next();
    node.operator = operator;
    node.typeAnnotation = this.tsParseTypeOperatorOrHigher();
    if (operator === "readonly") {
      this.tsCheckTypeAnnotationForReadOnly(node);
    }
    return this.finishNode(node, "TSTypeOperator");
  }
  tsCheckTypeAnnotationForReadOnly(node) {
    switch (node.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;
      default:
        this.raise(TSErrors.UnexpectedReadonly, node);
    }
  }
  tsParseInferType() {
    const node = this.startNode();
    this.expectContextual(115);
    const typeParameter = this.startNode();
    typeParameter.name = this.tsParseTypeParameterName();
    typeParameter.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType());
    node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
    return this.finishNode(node, "TSInferType");
  }
  tsParseConstraintForInferType() {
    if (this.eat(81)) {
      const constraint = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
      if (this.state.inDisallowConditionalTypesContext || !this.match(17)) {
        return constraint;
      }
    }
  }
  tsParseTypeOperatorOrHigher() {
    const isTypeOperator = tokenIsTSTypeOperator(this.state.type) && !this.state.containsEsc;
    return isTypeOperator ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
  }
  tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
    const node = this.startNode();
    const hasLeadingOperator = this.eat(operator);
    const types = [];
    do {
      types.push(parseConstituentType());
    } while (this.eat(operator));
    if (types.length === 1 && !hasLeadingOperator) {
      return types[0];
    }
    node.types = types;
    return this.finishNode(node, kind);
  }
  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
  }
  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
  }
  tsIsStartOfFunctionType() {
    if (this.match(47)) {
      return true;
    }
    return this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }
  tsSkipParameterStart() {
    if (tokenIsIdentifier(this.state.type) || this.match(78)) {
      this.next();
      return true;
    }
    if (this.match(5)) {
      const {
        errors
      } = this.state;
      const previousErrorCount = errors.length;
      try {
        this.parseObjectLike(8, true);
        return errors.length === previousErrorCount;
      } catch (_unused) {
        return false;
      }
    }
    if (this.match(0)) {
      this.next();
      const {
        errors
      } = this.state;
      const previousErrorCount = errors.length;
      try {
        super.parseBindingList(3, 93, 1);
        return errors.length === previousErrorCount;
      } catch (_unused2) {
        return false;
      }
    }
    return false;
  }
  tsIsUnambiguouslyStartOfFunctionType() {
    this.next();
    if (this.match(11) || this.match(21)) {
      return true;
    }
    if (this.tsSkipParameterStart()) {
      if (this.match(14) || this.match(12) || this.match(17) || this.match(29)) {
        return true;
      }
      if (this.match(11)) {
        this.next();
        if (this.match(19)) {
          return true;
        }
      }
    }
    return false;
  }
  tsParseTypeOrTypePredicateAnnotation(returnToken) {
    return this.tsInType(() => {
      const t = this.startNode();
      this.expect(returnToken);
      const node = this.startNode();
      const asserts = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
      if (asserts && this.match(78)) {
        let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();
        if (thisTypePredicate.type === "TSThisType") {
          node.parameterName = thisTypePredicate;
          node.asserts = true;
          node.typeAnnotation = null;
          thisTypePredicate = this.finishNode(node, "TSTypePredicate");
        } else {
          this.resetStartLocationFromNode(thisTypePredicate, node);
          thisTypePredicate.asserts = true;
        }
        t.typeAnnotation = thisTypePredicate;
        return this.finishNode(t, "TSTypeAnnotation");
      }
      const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
      if (!typePredicateVariable) {
        if (!asserts) {
          return this.tsParseTypeAnnotation(false, t);
        }
        node.parameterName = this.parseIdentifier();
        node.asserts = asserts;
        node.typeAnnotation = null;
        t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
        return this.finishNode(t, "TSTypeAnnotation");
      }
      const type = this.tsParseTypeAnnotation(false);
      node.parameterName = typePredicateVariable;
      node.typeAnnotation = type;
      node.asserts = asserts;
      t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
      return this.finishNode(t, "TSTypeAnnotation");
    });
  }
  tsTryParseTypeOrTypePredicateAnnotation() {
    if (this.match(14)) {
      return this.tsParseTypeOrTypePredicateAnnotation(14);
    }
  }
  tsTryParseTypeAnnotation() {
    if (this.match(14)) {
      return this.tsParseTypeAnnotation();
    }
  }
  tsTryParseType() {
    return this.tsEatThenParseType(14);
  }
  tsParseTypePredicatePrefix() {
    const id = this.parseIdentifier();
    if (this.isContextual(116) && !this.hasPrecedingLineBreak()) {
      this.next();
      return id;
    }
  }
  tsParseTypePredicateAsserts() {
    if (this.state.type !== 109) {
      return false;
    }
    const containsEsc = this.state.containsEsc;
    this.next();
    if (!tokenIsIdentifier(this.state.type) && !this.match(78)) {
      return false;
    }
    if (containsEsc) {
      this.raise(Errors.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      });
    }
    return true;
  }
  tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
    this.tsInType(() => {
      if (eatColon) this.expect(14);
      t.typeAnnotation = this.tsParseType();
    });
    return this.finishNode(t, "TSTypeAnnotation");
  }
  tsParseType() {
    assert(this.state.inType);
    const type = this.tsParseNonConditionalType();
    if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81)) {
      return type;
    }
    const node = this.startNodeAtNode(type);
    node.checkType = type;
    node.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType());
    this.expect(17);
    node.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType());
    this.expect(14);
    node.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType());
    return this.finishNode(node, "TSConditionalType");
  }
  isAbstractConstructorSignature() {
    return this.isContextual(124) && this.lookahead().type === 77;
  }
  tsParseNonConditionalType() {
    if (this.tsIsStartOfFunctionType()) {
      return this.tsParseFunctionOrConstructorType("TSFunctionType");
    }
    if (this.match(77)) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType");
    } else if (this.isAbstractConstructorSignature()) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType", true);
    }
    return this.tsParseUnionTypeOrHigher();
  }
  tsParseTypeAssertion() {
    if (this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
      this.raise(TSErrors.ReservedTypeAssertion, this.state.startLoc);
    }
    const node = this.startNode();
    node.typeAnnotation = this.tsInType(() => {
      this.next();
      return this.match(75) ? this.tsParseTypeReference() : this.tsParseType();
    });
    this.expect(48);
    node.expression = this.parseMaybeUnary();
    return this.finishNode(node, "TSTypeAssertion");
  }
  tsParseHeritageClause(token) {
    const originalStartLoc = this.state.startLoc;
    const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", () => {
      {
        const node = this.startNode();
        node.expression = this.tsParseEntityName(1 | 2);
        if (this.match(47)) {
          node.typeParameters = this.tsParseTypeArguments();
        }
        return this.finishNode(node, "TSExpressionWithTypeArguments");
      }
    });
    if (!delimitedList.length) {
      this.raise(TSErrors.EmptyHeritageClauseType, originalStartLoc, {
        token
      });
    }
    return delimitedList;
  }
  tsParseInterfaceDeclaration(node, properties = {}) {
    if (this.hasFollowingLineBreak()) return null;
    this.expectContextual(129);
    if (properties.declare) node.declare = true;
    if (tokenIsIdentifier(this.state.type)) {
      node.id = this.parseIdentifier();
      this.checkIdentifier(node.id, 130);
    } else {
      node.id = null;
      this.raise(TSErrors.MissingInterfaceName, this.state.startLoc);
    }
    node.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
    if (this.eat(81)) {
      node.extends = this.tsParseHeritageClause("extends");
    }
    const body = this.startNode();
    body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
    node.body = this.finishNode(body, "TSInterfaceBody");
    return this.finishNode(node, "TSInterfaceDeclaration");
  }
  tsParseTypeAliasDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkIdentifier(node.id, 2);
    node.typeAnnotation = this.tsInType(() => {
      node.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers);
      this.expect(29);
      if (this.isContextual(114) && this.lookahead().type !== 16) {
        const node = this.startNode();
        this.next();
        return this.finishNode(node, "TSIntrinsicKeyword");
      }
      return this.tsParseType();
    });
    this.semicolon();
    return this.finishNode(node, "TSTypeAliasDeclaration");
  }
  tsInTopLevelContext(cb) {
    if (this.curContext() !== types.brace) {
      const oldContext = this.state.context;
      this.state.context = [oldContext[0]];
      try {
        return cb();
      } finally {
        this.state.context = oldContext;
      }
    } else {
      return cb();
    }
  }
  tsInType(cb) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    try {
      return cb();
    } finally {
      this.state.inType = oldInType;
    }
  }
  tsInDisallowConditionalTypesContext(cb) {
    const oldInDisallowConditionalTypesContext = this.state.inDisallowConditionalTypesContext;
    this.state.inDisallowConditionalTypesContext = true;
    try {
      return cb();
    } finally {
      this.state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
    }
  }
  tsInAllowConditionalTypesContext(cb) {
    const oldInDisallowConditionalTypesContext = this.state.inDisallowConditionalTypesContext;
    this.state.inDisallowConditionalTypesContext = false;
    try {
      return cb();
    } finally {
      this.state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
    }
  }
  tsEatThenParseType(token) {
    if (this.match(token)) {
      return this.tsNextThenParseType();
    }
  }
  tsExpectThenParseType(token) {
    return this.tsInType(() => {
      this.expect(token);
      return this.tsParseType();
    });
  }
  tsNextThenParseType() {
    return this.tsInType(() => {
      this.next();
      return this.tsParseType();
    });
  }
  tsParseEnumMember() {
    const node = this.startNode();
    node.id = this.match(134) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(true);
    if (this.eat(29)) {
      node.initializer = super.parseMaybeAssignAllowIn();
    }
    return this.finishNode(node, "TSEnumMember");
  }
  tsParseEnumDeclaration(node, properties = {}) {
    if (properties.const) node.const = true;
    if (properties.declare) node.declare = true;
    this.expectContextual(126);
    node.id = this.parseIdentifier();
    this.checkIdentifier(node.id, node.const ? 8971 : 8459);
    {
      this.expect(5);
      node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
      this.expect(8);
    }
    return this.finishNode(node, "TSEnumDeclaration");
  }
  tsParseEnumBody() {
    const node = this.startNode();
    this.expect(5);
    node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
    this.expect(8);
    return this.finishNode(node, "TSEnumBody");
  }
  tsParseModuleBlock() {
    const node = this.startNode();
    this.scope.enter(0);
    this.expect(5);
    super.parseBlockOrModuleBlockBody(node.body = [], undefined, true, 8);
    this.scope.exit();
    return this.finishNode(node, "TSModuleBlock");
  }
  tsParseModuleOrNamespaceDeclaration(node, nested = false) {
    node.id = this.parseIdentifier();
    if (!nested) {
      this.checkIdentifier(node.id, 1024);
    }
    if (this.eat(16)) {
      const inner = this.startNode();
      this.tsParseModuleOrNamespaceDeclaration(inner, true);
      node.body = inner;
    } else {
      this.scope.enter(256);
      this.prodParam.enter(0);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    }
    return this.finishNode(node, "TSModuleDeclaration");
  }
  tsParseAmbientExternalModuleDeclaration(node) {
    if (this.isContextual(112)) {
      node.kind = "global";
      {
        node.global = true;
      }
      node.id = this.parseIdentifier();
    } else if (this.match(134)) {
      node.kind = "module";
      node.id = super.parseStringLiteral(this.state.value);
    } else {
      this.unexpected();
    }
    if (this.match(5)) {
      this.scope.enter(256);
      this.prodParam.enter(0);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    } else {
      this.semicolon();
    }
    return this.finishNode(node, "TSModuleDeclaration");
  }
  tsParseImportEqualsDeclaration(node, maybeDefaultIdentifier, isExport) {
    {
      node.isExport = isExport || false;
    }
    node.id = maybeDefaultIdentifier || this.parseIdentifier();
    this.checkIdentifier(node.id, 4096);
    this.expect(29);
    const moduleReference = this.tsParseModuleReference();
    if (node.importKind === "type" && moduleReference.type !== "TSExternalModuleReference") {
      this.raise(TSErrors.ImportAliasHasImportType, moduleReference);
    }
    node.moduleReference = moduleReference;
    this.semicolon();
    return this.finishNode(node, "TSImportEqualsDeclaration");
  }
  tsIsExternalModuleReference() {
    return this.isContextual(119) && this.lookaheadCharCode() === 40;
  }
  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(0);
  }
  tsParseExternalModuleReference() {
    const node = this.startNode();
    this.expectContextual(119);
    this.expect(10);
    if (!this.match(134)) {
      this.unexpected();
    }
    node.expression = super.parseExprAtom();
    this.expect(11);
    this.sawUnambiguousESM = true;
    return this.finishNode(node, "TSExternalModuleReference");
  }
  tsLookAhead(f) {
    const state = this.state.clone();
    const res = f();
    this.state = state;
    return res;
  }
  tsTryParseAndCatch(f) {
    const result = this.tryParse(abort => f() || abort());
    if (result.aborted || !result.node) return;
    if (result.error) this.state = result.failState;
    return result.node;
  }
  tsTryParse(f) {
    const state = this.state.clone();
    const result = f();
    if (result !== undefined && result !== false) {
      return result;
    }
    this.state = state;
  }
  tsTryParseDeclare(nany) {
    if (this.isLineTerminator()) {
      return;
    }
    let startType = this.state.type;
    let kind;
    if (this.isContextual(100)) {
      startType = 74;
      kind = "let";
    }
    return this.tsInAmbientContext(() => {
      switch (startType) {
        case 68:
          nany.declare = true;
          return super.parseFunctionStatement(nany, false, false);
        case 80:
          nany.declare = true;
          return this.parseClass(nany, true, false);
        case 126:
          return this.tsParseEnumDeclaration(nany, {
            declare: true
          });
        case 112:
          return this.tsParseAmbientExternalModuleDeclaration(nany);
        case 75:
        case 74:
          if (!this.match(75) || !this.isLookaheadContextual("enum")) {
            nany.declare = true;
            return this.parseVarStatement(nany, kind || this.state.value, true);
          }
          this.expect(75);
          return this.tsParseEnumDeclaration(nany, {
            const: true,
            declare: true
          });
        case 129:
          {
            const result = this.tsParseInterfaceDeclaration(nany, {
              declare: true
            });
            if (result) return result;
          }
        default:
          if (tokenIsIdentifier(startType)) {
            return this.tsParseDeclaration(nany, this.state.value, true, null);
          }
      }
    });
  }
  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.value, true, null);
  }
  tsParseExpressionStatement(node, expr, decorators) {
    switch (expr.name) {
      case "declare":
        {
          const declaration = this.tsTryParseDeclare(node);
          if (declaration) {
            declaration.declare = true;
          }
          return declaration;
        }
      case "global":
        if (this.match(5)) {
          this.scope.enter(256);
          this.prodParam.enter(0);
          const mod = node;
          mod.kind = "global";
          {
            node.global = true;
          }
          mod.id = expr;
          mod.body = this.tsParseModuleBlock();
          this.scope.exit();
          this.prodParam.exit();
          return this.finishNode(mod, "TSModuleDeclaration");
        }
        break;
      default:
        return this.tsParseDeclaration(node, expr.name, false, decorators);
    }
  }
  tsParseDeclaration(node, value, next, decorators) {
    switch (value) {
      case "abstract":
        if (this.tsCheckLineTerminator(next) && (this.match(80) || tokenIsIdentifier(this.state.type))) {
          return this.tsParseAbstractDeclaration(node, decorators);
        }
        break;
      case "module":
        if (this.tsCheckLineTerminator(next)) {
          if (this.match(134)) {
            return this.tsParseAmbientExternalModuleDeclaration(node);
          } else if (tokenIsIdentifier(this.state.type)) {
            node.kind = "module";
            return this.tsParseModuleOrNamespaceDeclaration(node);
          }
        }
        break;
      case "namespace":
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          node.kind = "namespace";
          return this.tsParseModuleOrNamespaceDeclaration(node);
        }
        break;
      case "type":
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          return this.tsParseTypeAliasDeclaration(node);
        }
        break;
    }
  }
  tsCheckLineTerminator(next) {
    if (next) {
      if (this.hasFollowingLineBreak()) return false;
      this.next();
      return true;
    }
    return !this.isLineTerminator();
  }
  tsTryParseGenericAsyncArrowFunction(startLoc) {
    if (!this.match(47)) return;
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = true;
    const res = this.tsTryParseAndCatch(() => {
      const node = this.startNodeAt(startLoc);
      node.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier);
      super.parseFunctionParams(node);
      node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
      this.expect(19);
      return node;
    });
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    if (!res) return;
    return super.parseArrowExpression(res, null, true);
  }
  tsParseTypeArgumentsInExpression() {
    if (this.reScan_lt() !== 47) return;
    return this.tsParseTypeArguments();
  }
  tsParseTypeArguments() {
    const node = this.startNode();
    node.params = this.tsInType(() => this.tsInTopLevelContext(() => {
      this.expect(47);
      return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
    }));
    if (node.params.length === 0) {
      this.raise(TSErrors.EmptyTypeArguments, node);
    } else if (!this.state.inType && this.curContext() === types.brace) {
      this.reScan_lt_gt();
    }
    this.expect(48);
    return this.finishNode(node, "TSTypeParameterInstantiation");
  }
  tsIsDeclarationStart() {
    return tokenIsTSDeclarationStart(this.state.type);
  }
  isExportDefaultSpecifier() {
    if (this.tsIsDeclarationStart()) return false;
    return super.isExportDefaultSpecifier();
  }
  parseBindingElement(flags, decorators) {
    const startLoc = this.state.startLoc;
    const modified = {};
    this.tsParseModifiers({
      allowedModifiers: ["public", "private", "protected", "override", "readonly"]
    }, modified);
    const accessibility = modified.accessibility;
    const override = modified.override;
    const readonly = modified.readonly;
    if (!(flags & 4) && (accessibility || readonly || override)) {
      this.raise(TSErrors.UnexpectedParameterModifier, startLoc);
    }
    const left = this.parseMaybeDefault();
    if (flags & 2) {
      this.parseFunctionParamType(left);
    }
    const elt = this.parseMaybeDefault(left.loc.start, left);
    if (accessibility || readonly || override) {
      const pp = this.startNodeAt(startLoc);
      if (decorators.length) {
        pp.decorators = decorators;
      }
      if (accessibility) pp.accessibility = accessibility;
      if (readonly) pp.readonly = readonly;
      if (override) pp.override = override;
      if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
        this.raise(TSErrors.UnsupportedParameterPropertyKind, pp);
      }
      pp.parameter = elt;
      return this.finishNode(pp, "TSParameterProperty");
    }
    if (decorators.length) {
      left.decorators = decorators;
    }
    return elt;
  }
  isSimpleParameter(node) {
    return node.type === "TSParameterProperty" && super.isSimpleParameter(node.parameter) || super.isSimpleParameter(node);
  }
  tsDisallowOptionalPattern(node) {
    for (const param of node.params) {
      if (param.type !== "Identifier" && param.optional && !this.state.isAmbientContext) {
        this.raise(TSErrors.PatternIsOptional, param);
      }
    }
  }
  setArrowFunctionParameters(node, params, trailingCommaLoc) {
    super.setArrowFunctionParameters(node, params, trailingCommaLoc);
    this.tsDisallowOptionalPattern(node);
  }
  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(14)) {
      node.returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
    }
    const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" || type === "ClassPrivateMethod" ? "TSDeclareMethod" : undefined;
    if (bodilessType && !this.match(5) && this.isLineTerminator()) {
      return this.finishNode(node, bodilessType);
    }
    if (bodilessType === "TSDeclareFunction" && this.state.isAmbientContext) {
      this.raise(TSErrors.DeclareFunctionHasImplementation, node);
      if (node.declare) {
        return super.parseFunctionBodyAndFinish(node, bodilessType, isMethod);
      }
    }
    this.tsDisallowOptionalPattern(node);
    return super.parseFunctionBodyAndFinish(node, type, isMethod);
  }
  registerFunctionStatementId(node) {
    if (!node.body && node.id) {
      this.checkIdentifier(node.id, 1024);
    } else {
      super.registerFunctionStatementId(node);
    }
  }
  tsCheckForInvalidTypeCasts(items) {
    items.forEach(node => {
      if ((node == null ? void 0 : node.type) === "TSTypeCastExpression") {
        this.raise(TSErrors.UnexpectedTypeAnnotation, node.typeAnnotation);
      }
    });
  }
  toReferencedList(exprList, isInParens) {
    this.tsCheckForInvalidTypeCasts(exprList);
    return exprList;
  }
  parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
    const node = super.parseArrayLike(close, canBePattern, isTuple, refExpressionErrors);
    if (node.type === "ArrayExpression") {
      this.tsCheckForInvalidTypeCasts(node.elements);
    }
    return node;
  }
  parseSubscript(base, startLoc, noCalls, state) {
    if (!this.hasPrecedingLineBreak() && this.match(35)) {
      this.state.canStartJSXElement = false;
      this.next();
      const nonNullExpression = this.startNodeAt(startLoc);
      nonNullExpression.expression = base;
      return this.finishNode(nonNullExpression, "TSNonNullExpression");
    }
    let isOptionalCall = false;
    if (this.match(18) && this.lookaheadCharCode() === 60) {
      if (noCalls) {
        state.stop = true;
        return base;
      }
      state.optionalChainMember = isOptionalCall = true;
      this.next();
    }
    if (this.match(47) || this.match(51)) {
      let missingParenErrorLoc;
      const result = this.tsTryParseAndCatch(() => {
        if (!noCalls && this.atPossibleAsyncArrow(base)) {
          const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startLoc);
          if (asyncArrowFn) {
            return asyncArrowFn;
          }
        }
        const typeArguments = this.tsParseTypeArgumentsInExpression();
        if (!typeArguments) return;
        if (isOptionalCall && !this.match(10)) {
          missingParenErrorLoc = this.state.curPosition();
          return;
        }
        if (tokenIsTemplate(this.state.type)) {
          const result = super.parseTaggedTemplateExpression(base, startLoc, state);
          {
            result.typeParameters = typeArguments;
          }
          return result;
        }
        if (!noCalls && this.eat(10)) {
          const node = this.startNodeAt(startLoc);
          node.callee = base;
          node.arguments = this.parseCallExpressionArguments(11);
          this.tsCheckForInvalidTypeCasts(node.arguments);
          {
            node.typeParameters = typeArguments;
          }
          if (state.optionalChainMember) {
            node.optional = isOptionalCall;
          }
          return this.finishCallExpression(node, state.optionalChainMember);
        }
        const tokenType = this.state.type;
        if (tokenType === 48 || tokenType === 52 || tokenType !== 10 && tokenCanStartExpression(tokenType) && !this.hasPrecedingLineBreak()) {
          return;
        }
        const node = this.startNodeAt(startLoc);
        node.expression = base;
        {
          node.typeParameters = typeArguments;
        }
        return this.finishNode(node, "TSInstantiationExpression");
      });
      if (missingParenErrorLoc) {
        this.unexpected(missingParenErrorLoc, 10);
      }
      if (result) {
        if (result.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40)) {
          this.raise(TSErrors.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc);
        }
        return result;
      }
    }
    return super.parseSubscript(base, startLoc, noCalls, state);
  }
  parseNewCallee(node) {
    var _callee$extra;
    super.parseNewCallee(node);
    const {
      callee
    } = node;
    if (callee.type === "TSInstantiationExpression" && !((_callee$extra = callee.extra) != null && _callee$extra.parenthesized)) {
      {
        node.typeParameters = callee.typeParameters;
      }
      node.callee = callee.expression;
    }
  }
  parseExprOp(left, leftStartLoc, minPrec) {
    let isSatisfies;
    if (tokenOperatorPrecedence(58) > minPrec && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (isSatisfies = this.isContextual(120)))) {
      const node = this.startNodeAt(leftStartLoc);
      node.expression = left;
      node.typeAnnotation = this.tsInType(() => {
        this.next();
        if (this.match(75)) {
          if (isSatisfies) {
            this.raise(Errors.UnexpectedKeyword, this.state.startLoc, {
              keyword: "const"
            });
          }
          return this.tsParseTypeReference();
        }
        return this.tsParseType();
      });
      this.finishNode(node, isSatisfies ? "TSSatisfiesExpression" : "TSAsExpression");
      this.reScan_lt_gt();
      return this.parseExprOp(node, leftStartLoc, minPrec);
    }
    return super.parseExprOp(left, leftStartLoc, minPrec);
  }
  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (!this.state.isAmbientContext) {
      super.checkReservedWord(word, startLoc, checkKeywords, isBinding);
    }
  }
  checkImportReflection(node) {
    super.checkImportReflection(node);
    if (node.module && node.importKind !== "value") {
      this.raise(TSErrors.ImportReflectionHasImportType, node.specifiers[0].loc.start);
    }
  }
  checkDuplicateExports() {}
  isPotentialImportPhase(isExport) {
    if (super.isPotentialImportPhase(isExport)) return true;
    if (this.isContextual(130)) {
      const ch = this.lookaheadCharCode();
      return isExport ? ch === 123 || ch === 42 : ch !== 61;
    }
    return !isExport && this.isContextual(87);
  }
  applyImportPhase(node, isExport, phase, loc) {
    super.applyImportPhase(node, isExport, phase, loc);
    if (isExport) {
      node.exportKind = phase === "type" ? "type" : "value";
    } else {
      node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
    }
  }
  parseImport(node) {
    if (this.match(134)) {
      node.importKind = "value";
      return super.parseImport(node);
    }
    let importNode;
    if (tokenIsIdentifier(this.state.type) && this.lookaheadCharCode() === 61) {
      node.importKind = "value";
      return this.tsParseImportEqualsDeclaration(node);
    } else if (this.isContextual(130)) {
      const maybeDefaultIdentifier = this.parseMaybeImportPhase(node, false);
      if (this.lookaheadCharCode() === 61) {
        return this.tsParseImportEqualsDeclaration(node, maybeDefaultIdentifier);
      } else {
        importNode = super.parseImportSpecifiersAndAfter(node, maybeDefaultIdentifier);
      }
    } else {
      importNode = super.parseImport(node);
    }
    if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
      this.raise(TSErrors.TypeImportCannotSpecifyDefaultAndNamed, importNode);
    }
    return importNode;
  }
  parseExport(node, decorators) {
    if (this.match(83)) {
      const nodeImportEquals = node;
      this.next();
      let maybeDefaultIdentifier = null;
      if (this.isContextual(130) && this.isPotentialImportPhase(false)) {
        maybeDefaultIdentifier = this.parseMaybeImportPhase(nodeImportEquals, false);
      } else {
        nodeImportEquals.importKind = "value";
      }
      const declaration = this.tsParseImportEqualsDeclaration(nodeImportEquals, maybeDefaultIdentifier, true);
      {
        return declaration;
      }
    } else if (this.eat(29)) {
      const assign = node;
      assign.expression = super.parseExpression();
      this.semicolon();
      this.sawUnambiguousESM = true;
      return this.finishNode(assign, "TSExportAssignment");
    } else if (this.eatContextual(93)) {
      const decl = node;
      this.expectContextual(128);
      decl.id = this.parseIdentifier();
      this.semicolon();
      return this.finishNode(decl, "TSNamespaceExportDeclaration");
    } else {
      return super.parseExport(node, decorators);
    }
  }
  isAbstractClass() {
    return this.isContextual(124) && this.lookahead().type === 80;
  }
  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const cls = this.startNode();
      this.next();
      cls.abstract = true;
      return this.parseClass(cls, true, true);
    }
    if (this.match(129)) {
      const result = this.tsParseInterfaceDeclaration(this.startNode());
      if (result) return result;
    }
    return super.parseExportDefaultExpression();
  }
  parseVarStatement(node, kind, allowMissingInitializer = false) {
    const {
      isAmbientContext
    } = this.state;
    const declaration = super.parseVarStatement(node, kind, allowMissingInitializer || isAmbientContext);
    if (!isAmbientContext) return declaration;
    for (const {
      id,
      init
    } of declaration.declarations) {
      if (!init) continue;
      if (kind !== "const" || !!id.typeAnnotation) {
        this.raise(TSErrors.InitializerNotAllowedInAmbientContext, init);
      } else if (!isValidAmbientConstInitializer(init, this.hasPlugin("estree"))) {
        this.raise(TSErrors.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, init);
      }
    }
    return declaration;
  }
  parseStatementContent(flags, decorators) {
    if (this.match(75) && this.isLookaheadContextual("enum")) {
      const node = this.startNode();
      this.expect(75);
      return this.tsParseEnumDeclaration(node, {
        const: true
      });
    }
    if (this.isContextual(126)) {
      return this.tsParseEnumDeclaration(this.startNode());
    }
    if (this.isContextual(129)) {
      const result = this.tsParseInterfaceDeclaration(this.startNode());
      if (result) return result;
    }
    return super.parseStatementContent(flags, decorators);
  }
  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }
  tsHasSomeModifiers(member, modifiers) {
    return modifiers.some(modifier => {
      if (tsIsAccessModifier(modifier)) {
        return member.accessibility === modifier;
      }
      return !!member[modifier];
    });
  }
  tsIsStartOfStaticBlocks() {
    return this.isContextual(106) && this.lookaheadCharCode() === 123;
  }
  parseClassMember(classBody, member, state) {
    const modifiers = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
    this.tsParseModifiers({
      allowedModifiers: modifiers,
      disallowedModifiers: ["in", "out"],
      stopOnStartOfClassStaticBlock: true,
      errorTemplate: TSErrors.InvalidModifierOnTypeParameterPositions
    }, member);
    const callParseClassMemberWithIsStatic = () => {
      if (this.tsIsStartOfStaticBlocks()) {
        this.next();
        this.next();
        if (this.tsHasSomeModifiers(member, modifiers)) {
          this.raise(TSErrors.StaticBlockCannotHaveModifier, this.state.curPosition());
        }
        super.parseClassStaticBlock(classBody, member);
      } else {
        this.parseClassMemberWithIsStatic(classBody, member, state, !!member.static);
      }
    };
    if (member.declare) {
      this.tsInAmbientContext(callParseClassMemberWithIsStatic);
    } else {
      callParseClassMemberWithIsStatic();
    }
  }
  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const idx = this.tsTryParseIndexSignature(member);
    if (idx) {
      classBody.body.push(idx);
      if (member.abstract) {
        this.raise(TSErrors.IndexSignatureHasAbstract, member);
      }
      if (member.accessibility) {
        this.raise(TSErrors.IndexSignatureHasAccessibility, member, {
          modifier: member.accessibility
        });
      }
      if (member.declare) {
        this.raise(TSErrors.IndexSignatureHasDeclare, member);
      }
      if (member.override) {
        this.raise(TSErrors.IndexSignatureHasOverride, member);
      }
      return;
    }
    if (!this.state.inAbstractClass && member.abstract) {
      this.raise(TSErrors.NonAbstractClassHasAbstractMethod, member);
    }
    if (member.override) {
      if (!state.hadSuperClass) {
        this.raise(TSErrors.OverrideNotInSubClass, member);
      }
    }
    super.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }
  parsePostMemberNameModifiers(methodOrProp) {
    const optional = this.eat(17);
    if (optional) methodOrProp.optional = true;
    if (methodOrProp.readonly && this.match(10)) {
      this.raise(TSErrors.ClassMethodHasReadonly, methodOrProp);
    }
    if (methodOrProp.declare && this.match(10)) {
      this.raise(TSErrors.ClassMethodHasDeclare, methodOrProp);
    }
  }
  parseExpressionStatement(node, expr, decorators) {
    const decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr, decorators) : undefined;
    return decl || super.parseExpressionStatement(node, expr, decorators);
  }
  shouldParseExportDeclaration() {
    if (this.tsIsDeclarationStart()) return true;
    return super.shouldParseExportDeclaration();
  }
  parseConditional(expr, startLoc, refExpressionErrors) {
    if (!this.match(17)) return expr;
    if (this.state.maybeInArrowParameters) {
      const nextCh = this.lookaheadCharCode();
      if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
        this.setOptionalParametersError(refExpressionErrors);
        return expr;
      }
    }
    return super.parseConditional(expr, startLoc, refExpressionErrors);
  }
  parseParenItem(node, startLoc) {
    const newNode = super.parseParenItem(node, startLoc);
    if (this.eat(17)) {
      newNode.optional = true;
      this.resetEndLocation(node);
    }
    if (this.match(14)) {
      const typeCastNode = this.startNodeAt(startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TSTypeCastExpression");
    }
    return node;
  }
  parseExportDeclaration(node) {
    if (!this.state.isAmbientContext && this.isContextual(125)) {
      return this.tsInAmbientContext(() => this.parseExportDeclaration(node));
    }
    const startLoc = this.state.startLoc;
    const isDeclare = this.eatContextual(125);
    if (isDeclare && (this.isContextual(125) || !this.shouldParseExportDeclaration())) {
      throw this.raise(TSErrors.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
    }
    const isIdentifier = tokenIsIdentifier(this.state.type);
    const declaration = isIdentifier && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(node);
    if (!declaration) return null;
    if (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare) {
      node.exportKind = "type";
    }
    if (isDeclare && declaration.type !== "TSImportEqualsDeclaration") {
      this.resetStartLocation(declaration, startLoc);
      declaration.declare = true;
    }
    return declaration;
  }
  parseClassId(node, isStatement, optionalId, bindingType) {
    if ((!isStatement || optionalId) && this.isContextual(113)) {
      return;
    }
    super.parseClassId(node, isStatement, optionalId, node.declare ? 1024 : 8331);
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
    if (typeParameters) node.typeParameters = typeParameters;
  }
  parseClassPropertyAnnotation(node) {
    if (!node.optional) {
      if (this.eat(35)) {
        node.definite = true;
      } else if (this.eat(17)) {
        node.optional = true;
      }
    }
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
  }
  parseClassProperty(node) {
    this.parseClassPropertyAnnotation(node);
    if (this.state.isAmbientContext && !(node.readonly && !node.typeAnnotation) && this.match(29)) {
      this.raise(TSErrors.DeclareClassFieldHasInitializer, this.state.startLoc);
    }
    if (node.abstract && this.match(29)) {
      const {
        key
      } = node;
      this.raise(TSErrors.AbstractPropertyHasInitializer, this.state.startLoc, {
        propertyName: key.type === "Identifier" && !node.computed ? key.name : `[${this.input.slice(this.offsetToSourcePos(key.start), this.offsetToSourcePos(key.end))}]`
      });
    }
    return super.parseClassProperty(node);
  }
  parseClassPrivateProperty(node) {
    if (node.abstract) {
      this.raise(TSErrors.PrivateElementHasAbstract, node);
    }
    if (node.accessibility) {
      this.raise(TSErrors.PrivateElementHasAccessibility, node, {
        modifier: node.accessibility
      });
    }
    this.parseClassPropertyAnnotation(node);
    return super.parseClassPrivateProperty(node);
  }
  parseClassAccessorProperty(node) {
    this.parseClassPropertyAnnotation(node);
    if (node.optional) {
      this.raise(TSErrors.AccessorCannotBeOptional, node);
    }
    return super.parseClassAccessorProperty(node);
  }
  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters && isConstructor) {
      this.raise(TSErrors.ConstructorHasTypeParameters, typeParameters);
    }
    const {
      declare = false,
      kind
    } = method;
    if (declare && (kind === "get" || kind === "set")) {
      this.raise(TSErrors.DeclareAccessor, method, {
        kind
      });
    }
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
  }
  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }
  declareClassPrivateMethodInScope(node, kind) {
    if (node.type === "TSDeclareMethod") return;
    if (node.type === "MethodDefinition" && !hasOwnProperty.call(node.value, "body")) {
      return;
    }
    super.declareClassPrivateMethodInScope(node, kind);
  }
  parseClassSuper(node) {
    super.parseClassSuper(node);
    if (node.superClass && (this.match(47) || this.match(51))) {
      {
        node.superTypeParameters = this.tsParseTypeArgumentsInExpression();
      }
    }
    if (this.eatContextual(113)) {
      node.implements = this.tsParseHeritageClause("implements");
    }
  }
  parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters) prop.typeParameters = typeParameters;
    return super.parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
  }
  parseFunctionParams(node, isConstructor) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters) node.typeParameters = typeParameters;
    super.parseFunctionParams(node, isConstructor);
  }
  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);
    if (decl.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35)) {
      decl.definite = true;
    }
    const type = this.tsTryParseTypeAnnotation();
    if (type) {
      decl.id.typeAnnotation = type;
      this.resetEndLocation(decl.id);
    }
  }
  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(14)) {
      node.returnType = this.tsParseTypeAnnotation();
    }
    return super.parseAsyncArrowFromCallExpression(node, call);
  }
  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    var _jsx, _jsx2, _typeCast, _jsx3, _typeCast2;
    let state;
    let jsx;
    let typeCast;
    if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;
      const currentContext = context[context.length - 1];
      if (currentContext === types.j_oTag || currentContext === types.j_expr) {
        context.pop();
      }
    }
    if (!((_jsx = jsx) != null && _jsx.error) && !this.match(47)) {
      return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
    }
    if (!state || state === this.state) state = this.state.clone();
    let typeParameters;
    const arrow = this.tryParse(abort => {
      var _expr$extra, _typeParameters;
      typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier);
      const expr = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
      if (expr.type !== "ArrowFunctionExpression" || (_expr$extra = expr.extra) != null && _expr$extra.parenthesized) {
        abort();
      }
      if (((_typeParameters = typeParameters) == null ? void 0 : _typeParameters.params.length) !== 0) {
        this.resetStartLocationFromNode(expr, typeParameters);
      }
      expr.typeParameters = typeParameters;
      return expr;
    }, state);
    if (!arrow.error && !arrow.aborted) {
      if (typeParameters) this.reportReservedArrowTypeParam(typeParameters);
      return arrow.node;
    }
    if (!jsx) {
      assert(!this.hasPlugin("jsx"));
      typeCast = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!typeCast.error) return typeCast.node;
    }
    if ((_jsx2 = jsx) != null && _jsx2.node) {
      this.state = jsx.failState;
      return jsx.node;
    }
    if (arrow.node) {
      this.state = arrow.failState;
      if (typeParameters) this.reportReservedArrowTypeParam(typeParameters);
      return arrow.node;
    }
    if ((_typeCast = typeCast) != null && _typeCast.node) {
      this.state = typeCast.failState;
      return typeCast.node;
    }
    throw ((_jsx3 = jsx) == null ? void 0 : _jsx3.error) || arrow.error || ((_typeCast2 = typeCast) == null ? void 0 : _typeCast2.error);
  }
  reportReservedArrowTypeParam(node) {
    var _node$extra2;
    if (node.params.length === 1 && !node.params[0].constraint && !((_node$extra2 = node.extra) != null && _node$extra2.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
      this.raise(TSErrors.ReservedArrowTypeParam, node);
    }
  }
  parseMaybeUnary(refExpressionErrors, sawUnary) {
    if (!this.hasPlugin("jsx") && this.match(47)) {
      return this.tsParseTypeAssertion();
    }
    return super.parseMaybeUnary(refExpressionErrors, sawUnary);
  }
  parseArrow(node) {
    if (this.match(14)) {
      const result = this.tryParse(abort => {
        const returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
        if (this.canInsertSemicolon() || !this.match(19)) abort();
        return returnType;
      });
      if (result.aborted) return;
      if (!result.thrown) {
        if (result.error) this.state = result.failState;
        node.returnType = result.node;
      }
    }
    return super.parseArrow(node);
  }
  parseFunctionParamType(param) {
    if (this.eat(17)) {
      param.optional = true;
    }
    const type = this.tsTryParseTypeAnnotation();
    if (type) param.typeAnnotation = type;
    this.resetEndLocation(param);
    return param;
  }
  isAssignable(node, isBinding) {
    switch (node.type) {
      case "TSTypeCastExpression":
        return this.isAssignable(node.expression, isBinding);
      case "TSParameterProperty":
        return true;
      default:
        return super.isAssignable(node, isBinding);
    }
  }
  toAssignable(node, isLHS = false) {
    switch (node.type) {
      case "ParenthesizedExpression":
        this.toAssignableParenthesizedExpression(node, isLHS);
        break;
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        if (isLHS) {
          this.expressionScope.recordArrowParameterBindingError(TSErrors.UnexpectedTypeCastInParameter, node);
        } else {
          this.raise(TSErrors.UnexpectedTypeCastInParameter, node);
        }
        this.toAssignable(node.expression, isLHS);
        break;
      case "AssignmentExpression":
        if (!isLHS && node.left.type === "TSTypeCastExpression") {
          node.left = this.typeCastToParameter(node.left);
        }
      default:
        super.toAssignable(node, isLHS);
    }
  }
  toAssignableParenthesizedExpression(node, isLHS) {
    switch (node.expression.type) {
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isLHS);
        break;
      default:
        super.toAssignable(node, isLHS);
    }
  }
  checkToRestConversion(node, allowPattern) {
    switch (node.type) {
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        this.checkToRestConversion(node.expression, false);
        break;
      default:
        super.checkToRestConversion(node, allowPattern);
    }
  }
  isValidLVal(type, isUnparenthesizedInAssign, binding) {
    switch (type) {
      case "TSTypeCastExpression":
        return true;
      case "TSParameterProperty":
        return "parameter";
      case "TSNonNullExpression":
        return "expression";
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
        return (binding !== 64 || !isUnparenthesizedInAssign) && ["expression", true];
      default:
        return super.isValidLVal(type, isUnparenthesizedInAssign, binding);
    }
  }
  parseBindingAtom() {
    if (this.state.type === 78) {
      return this.parseIdentifier(true);
    }
    return super.parseBindingAtom();
  }
  parseMaybeDecoratorArguments(expr, startLoc) {
    if (this.match(47) || this.match(51)) {
      const typeArguments = this.tsParseTypeArgumentsInExpression();
      if (this.match(10)) {
        const call = super.parseMaybeDecoratorArguments(expr, startLoc);
        {
          call.typeParameters = typeArguments;
        }
        return call;
      }
      this.unexpected(null, 10);
    }
    return super.parseMaybeDecoratorArguments(expr, startLoc);
  }
  checkCommaAfterRest(close) {
    if (this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === close) {
      this.next();
      return false;
    }
    return super.checkCommaAfterRest(close);
  }
  isClassMethod() {
    return this.match(47) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(35) || this.match(14) || super.isClassProperty();
  }
  parseMaybeDefault(startLoc, left) {
    const node = super.parseMaybeDefault(startLoc, left);
    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(TSErrors.TypeAnnotationAfterAssign, node.typeAnnotation);
    }
    return node;
  }
  getTokenFromCode(code) {
    if (this.state.inType) {
      if (code === 62) {
        this.finishOp(48, 1);
        return;
      }
      if (code === 60) {
        this.finishOp(47, 1);
        return;
      }
    }
    super.getTokenFromCode(code);
  }
  reScan_lt_gt() {
    const {
      type
    } = this.state;
    if (type === 47) {
      this.state.pos -= 1;
      this.readToken_lt();
    } else if (type === 48) {
      this.state.pos -= 1;
      this.readToken_gt();
    }
  }
  reScan_lt() {
    const {
      type
    } = this.state;
    if (type === 51) {
      this.state.pos -= 2;
      this.finishOp(47, 1);
      return 47;
    }
    return type;
  }
  toAssignableListItem(exprList, index, isLHS) {
    const node = exprList[index];
    if (node.type === "TSTypeCastExpression") {
      exprList[index] = this.typeCastToParameter(node);
    }
    super.toAssignableListItem(exprList, index, isLHS);
  }
  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
    return node.expression;
  }
  shouldParseArrow(params) {
    if (this.match(14)) {
      return params.every(expr => this.isAssignable(expr, true));
    }
    return super.shouldParseArrow(params);
  }
  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }
  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }
  jsxParseOpeningElementAfterName(node) {
    if (this.match(47) || this.match(51)) {
      const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
      if (typeArguments) {
        {
          node.typeParameters = typeArguments;
        }
      }
    }
    return super.jsxParseOpeningElementAfterName(node);
  }
  getGetterSetterExpectedParamCount(method) {
    const baseCount = super.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    const firstParam = params[0];
    const hasContextParam = firstParam && this.isThisParam(firstParam);
    return hasContextParam ? baseCount + 1 : baseCount;
  }
  parseCatchClauseParam() {
    const param = super.parseCatchClauseParam();
    const type = this.tsTryParseTypeAnnotation();
    if (type) {
      param.typeAnnotation = type;
      this.resetEndLocation(param);
    }
    return param;
  }
  tsInAmbientContext(cb) {
    const {
      isAmbientContext: oldIsAmbientContext,
      strict: oldStrict
    } = this.state;
    this.state.isAmbientContext = true;
    this.state.strict = false;
    try {
      return cb();
    } finally {
      this.state.isAmbientContext = oldIsAmbientContext;
      this.state.strict = oldStrict;
    }
  }
  parseClass(node, isStatement, optionalId) {
    const oldInAbstractClass = this.state.inAbstractClass;
    this.state.inAbstractClass = !!node.abstract;
    try {
      return super.parseClass(node, isStatement, optionalId);
    } finally {
      this.state.inAbstractClass = oldInAbstractClass;
    }
  }
  tsParseAbstractDeclaration(node, decorators) {
    if (this.match(80)) {
      node.abstract = true;
      return this.maybeTakeDecorators(decorators, this.parseClass(node, true, false));
    } else if (this.isContextual(129)) {
      if (!this.hasFollowingLineBreak()) {
        node.abstract = true;
        this.raise(TSErrors.NonClassMethodPropertyHasAbstractModifer, node);
        return this.tsParseInterfaceDeclaration(node);
      }
    } else {
      this.unexpected(null, 80);
    }
  }
  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope) {
    const method = super.parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    if (method.abstract) {
      const hasEstreePlugin = this.hasPlugin("estree");
      const methodFn = hasEstreePlugin ? method.value : method;
      if (methodFn.body) {
        const {
          key
        } = method;
        this.raise(TSErrors.AbstractMethodHasImplementation, method, {
          methodName: key.type === "Identifier" && !method.computed ? key.name : `[${this.input.slice(this.offsetToSourcePos(key.start), this.offsetToSourcePos(key.end))}]`
        });
      }
    }
    return method;
  }
  tsParseTypeParameterName() {
    const typeName = this.parseIdentifier();
    return typeName.name;
  }
  shouldParseAsAmbientContext() {
    return !!this.getPluginOption("typescript", "dts");
  }
  parse() {
    if (this.shouldParseAsAmbientContext()) {
      this.state.isAmbientContext = true;
    }
    return super.parse();
  }
  getExpression() {
    if (this.shouldParseAsAmbientContext()) {
      this.state.isAmbientContext = true;
    }
    return super.getExpression();
  }
  parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
    if (!isString && isMaybeTypeOnly) {
      this.parseTypeOnlyImportExportSpecifier(node, false, isInTypeExport);
      return this.finishNode(node, "ExportSpecifier");
    }
    node.exportKind = "value";
    return super.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly);
  }
  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
    if (!importedIsString && isMaybeTypeOnly) {
      this.parseTypeOnlyImportExportSpecifier(specifier, true, isInTypeOnlyImport);
      return this.finishNode(specifier, "ImportSpecifier");
    }
    specifier.importKind = "value";
    return super.parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, isInTypeOnlyImport ? 4098 : 4096);
  }
  parseTypeOnlyImportExportSpecifier(node, isImport, isInTypeOnlyImportExport) {
    const leftOfAsKey = isImport ? "imported" : "local";
    const rightOfAsKey = isImport ? "local" : "exported";
    let leftOfAs = node[leftOfAsKey];
    let rightOfAs;
    let hasTypeSpecifier = false;
    let canParseAsKeyword = true;
    const loc = leftOfAs.loc.start;
    if (this.isContextual(93)) {
      const firstAs = this.parseIdentifier();
      if (this.isContextual(93)) {
        const secondAs = this.parseIdentifier();
        if (tokenIsKeywordOrIdentifier(this.state.type)) {
          hasTypeSpecifier = true;
          leftOfAs = firstAs;
          rightOfAs = isImport ? this.parseIdentifier() : this.parseModuleExportName();
          canParseAsKeyword = false;
        } else {
          rightOfAs = secondAs;
          canParseAsKeyword = false;
        }
      } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
        canParseAsKeyword = false;
        rightOfAs = isImport ? this.parseIdentifier() : this.parseModuleExportName();
      } else {
        hasTypeSpecifier = true;
        leftOfAs = firstAs;
      }
    } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
      hasTypeSpecifier = true;
      if (isImport) {
        leftOfAs = this.parseIdentifier(true);
        if (!this.isContextual(93)) {
          this.checkReservedWord(leftOfAs.name, leftOfAs.loc.start, true, true);
        }
      } else {
        leftOfAs = this.parseModuleExportName();
      }
    }
    if (hasTypeSpecifier && isInTypeOnlyImportExport) {
      this.raise(isImport ? TSErrors.TypeModifierIsUsedInTypeImports : TSErrors.TypeModifierIsUsedInTypeExports, loc);
    }
    node[leftOfAsKey] = leftOfAs;
    node[rightOfAsKey] = rightOfAs;
    const kindKey = isImport ? "importKind" : "exportKind";
    node[kindKey] = hasTypeSpecifier ? "type" : "value";
    if (canParseAsKeyword && this.eatContextual(93)) {
      node[rightOfAsKey] = isImport ? this.parseIdentifier() : this.parseModuleExportName();
    }
    if (!node[rightOfAsKey]) {
      node[rightOfAsKey] = cloneIdentifier(node[leftOfAsKey]);
    }
    if (isImport) {
      this.checkIdentifier(node[rightOfAsKey], hasTypeSpecifier ? 4098 : 4096);
    }
  }
};
function isPossiblyLiteralEnum(expression) {
  if (expression.type !== "MemberExpression") return false;
  const {
    computed,
    property
  } = expression;
  if (computed && property.type !== "StringLiteral" && (property.type !== "TemplateLiteral" || property.expressions.length > 0)) {
    return false;
  }
  return isUncomputedMemberExpressionChain(expression.object);
}
function isValidAmbientConstInitializer(expression, estree) {
  var _expression$extra;
  const {
    type
  } = expression;
  if ((_expression$extra = expression.extra) != null && _expression$extra.parenthesized) {
    return false;
  }
  if (estree) {
    if (type === "Literal") {
      const {
        value
      } = expression;
      if (typeof value === "string" || typeof value === "boolean") {
        return true;
      }
    }
  } else {
    if (type === "StringLiteral" || type === "BooleanLiteral") {
      return true;
    }
  }
  if (isNumber(expression, estree) || isNegativeNumber(expression, estree)) {
    return true;
  }
  if (type === "TemplateLiteral" && expression.expressions.length === 0) {
    return true;
  }
  if (isPossiblyLiteralEnum(expression)) {
    return true;
  }
  return false;
}
function isNumber(expression, estree) {
  if (estree) {
    return expression.type === "Literal" && (typeof expression.value === "number" || "bigint" in expression);
  }
  return expression.type === "NumericLiteral" || expression.type === "BigIntLiteral";
}
function isNegativeNumber(expression, estree) {
  if (expression.type === "UnaryExpression") {
    const {
      operator,
      argument
    } = expression;
    if (operator === "-" && isNumber(argument, estree)) {
      return true;
    }
  }
  return false;
}
function isUncomputedMemberExpressionChain(expression) {
  if (expression.type === "Identifier") return true;
  if (expression.type !== "MemberExpression" || expression.computed) {
    return false;
  }
  return isUncomputedMemberExpressionChain(expression.object);
}
const PlaceholderErrors = ParseErrorEnum`placeholders`({
  ClassNameIsRequired: "A class name is required.",
  UnexpectedSpace: "Unexpected space in placeholder."
});
var placeholders = superClass => class PlaceholdersParserMixin extends superClass {
  parsePlaceholder(expectedNode) {
    if (this.match(133)) {
      const node = this.startNode();
      this.next();
      this.assertNoSpace();
      node.name = super.parseIdentifier(true);
      this.assertNoSpace();
      this.expect(133);
      return this.finishPlaceholder(node, expectedNode);
    }
  }
  finishPlaceholder(node, expectedNode) {
    let placeholder = node;
    if (!placeholder.expectedNode || !placeholder.type) {
      placeholder = this.finishNode(placeholder, "Placeholder");
    }
    placeholder.expectedNode = expectedNode;
    return placeholder;
  }
  getTokenFromCode(code) {
    if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
      this.finishOp(133, 2);
    } else {
      super.getTokenFromCode(code);
    }
  }
  parseExprAtom(refExpressionErrors) {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(refExpressionErrors);
  }
  parseIdentifier(liberal) {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(liberal);
  }
  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (word !== undefined) {
      super.checkReservedWord(word, startLoc, checkKeywords, isBinding);
    }
  }
  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
  }
  isValidLVal(type, isParenthesized, binding) {
    return type === "Placeholder" || super.isValidLVal(type, isParenthesized, binding);
  }
  toAssignable(node, isLHS) {
    if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
      node.expectedNode = "Pattern";
    } else {
      super.toAssignable(node, isLHS);
    }
  }
  chStartsBindingIdentifier(ch, pos) {
    if (super.chStartsBindingIdentifier(ch, pos)) {
      return true;
    }
    const nextToken = this.lookahead();
    if (nextToken.type === 133) {
      return true;
    }
    return false;
  }
  verifyBreakContinue(node, isBreak) {
    if (node.label && node.label.type === "Placeholder") return;
    super.verifyBreakContinue(node, isBreak);
  }
  parseExpressionStatement(node, expr) {
    var _expr$extra;
    if (expr.type !== "Placeholder" || (_expr$extra = expr.extra) != null && _expr$extra.parenthesized) {
      return super.parseExpressionStatement(node, expr);
    }
    if (this.match(14)) {
      const stmt = node;
      stmt.label = this.finishPlaceholder(expr, "Identifier");
      this.next();
      stmt.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration();
      return this.finishNode(stmt, "LabeledStatement");
    }
    this.semicolon();
    const stmtPlaceholder = node;
    stmtPlaceholder.name = expr.name;
    return this.finishPlaceholder(stmtPlaceholder, "Statement");
  }
  parseBlock(allowDirectives, createNewLexicalScope, afterBlockParse) {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(allowDirectives, createNewLexicalScope, afterBlockParse);
  }
  parseFunctionId(requireId) {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(requireId);
  }
  parseClass(node, isStatement, optionalId) {
    const type = isStatement ? "ClassDeclaration" : "ClassExpression";
    this.next();
    const oldStrict = this.state.strict;
    const placeholder = this.parsePlaceholder("Identifier");
    if (placeholder) {
      if (this.match(81) || this.match(133) || this.match(5)) {
        node.id = placeholder;
      } else if (optionalId || !isStatement) {
        node.id = null;
        node.body = this.finishPlaceholder(placeholder, "ClassBody");
        return this.finishNode(node, type);
      } else {
        throw this.raise(PlaceholderErrors.ClassNameIsRequired, this.state.startLoc);
      }
    } else {
      this.parseClassId(node, isStatement, optionalId);
    }
    super.parseClassSuper(node);
    node.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, type);
  }
  parseExport(node, decorators) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseExport(node, decorators);
    const node2 = node;
    if (!this.isContextual(98) && !this.match(12)) {
      node2.specifiers = [];
      node2.source = null;
      node2.declaration = this.finishPlaceholder(placeholder, "Declaration");
      return this.finishNode(node2, "ExportNamedDeclaration");
    }
    this.expectPlugin("exportDefaultFrom");
    const specifier = this.startNode();
    specifier.exported = placeholder;
    node2.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
    return super.parseExport(node2, decorators);
  }
  isExportDefaultSpecifier() {
    if (this.match(65)) {
      const next = this.nextTokenStart();
      if (this.isUnparsedContextual(next, "from")) {
        if (this.input.startsWith(tokenLabelName(133), this.nextTokenStartSince(next + 4))) {
          return true;
        }
      }
    }
    return super.isExportDefaultSpecifier();
  }
  maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier) {
    var _specifiers;
    if ((_specifiers = node.specifiers) != null && _specifiers.length) {
      return true;
    }
    return super.maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier);
  }
  checkExport(node) {
    const {
      specifiers
    } = node;
    if (specifiers != null && specifiers.length) {
      node.specifiers = specifiers.filter(node => node.exported.type === "Placeholder");
    }
    super.checkExport(node);
    node.specifiers = specifiers;
  }
  parseImport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseImport(node);
    node.specifiers = [];
    if (!this.isContextual(98) && !this.match(12)) {
      node.source = this.finishPlaceholder(placeholder, "StringLiteral");
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }
    const specifier = this.startNodeAtNode(placeholder);
    specifier.local = placeholder;
    node.specifiers.push(this.finishNode(specifier, "ImportDefaultSpecifier"));
    if (this.eat(12)) {
      const hasStarImport = this.maybeParseStarImportSpecifier(node);
      if (!hasStarImport) this.parseNamedImportSpecifiers(node);
    }
    this.expectContextual(98);
    node.source = this.parseImportSource();
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }
  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
  }
  assertNoSpace() {
    if (this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index)) {
      this.raise(PlaceholderErrors.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }
};
var v8intrinsic = superClass => class V8IntrinsicMixin extends superClass {
  parseV8Intrinsic() {
    if (this.match(54)) {
      const v8IntrinsicStartLoc = this.state.startLoc;
      const node = this.startNode();
      this.next();
      if (tokenIsIdentifier(this.state.type)) {
        const name = this.parseIdentifierName();
        const identifier = this.createIdentifier(node, name);
        identifier.type = "V8IntrinsicIdentifier";
        if (this.match(10)) {
          return identifier;
        }
      }
      this.unexpected(v8IntrinsicStartLoc);
    }
  }
  parseExprAtom(refExpressionErrors) {
    return this.parseV8Intrinsic() || super.parseExprAtom(refExpressionErrors);
  }
};
const PIPELINE_PROPOSALS = ["minimal", "fsharp", "hack", "smart"];
const TOPIC_TOKENS = ["^^", "@@", "^", "%", "#"];
function validatePlugins(pluginsMap) {
  if (pluginsMap.has("decorators")) {
    if (pluginsMap.has("decorators-legacy")) {
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    }
    const decoratorsBeforeExport = pluginsMap.get("decorators").decoratorsBeforeExport;
    if (decoratorsBeforeExport != null && typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
    }
    const allowCallParenthesized = pluginsMap.get("decorators").allowCallParenthesized;
    if (allowCallParenthesized != null && typeof allowCallParenthesized !== "boolean") {
      throw new Error("'allowCallParenthesized' must be a boolean.");
    }
  }
  if (pluginsMap.has("flow") && pluginsMap.has("typescript")) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }
  if (pluginsMap.has("placeholders") && pluginsMap.has("v8intrinsic")) {
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  }
  if (pluginsMap.has("pipelineOperator")) {
    var _pluginsMap$get;
    const proposal = pluginsMap.get("pipelineOperator").proposal;
    if (!PIPELINE_PROPOSALS.includes(proposal)) {
      const proposalList = PIPELINE_PROPOSALS.map(p => `"${p}"`).join(", ");
      throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${proposalList}.`);
    }
    const tupleSyntaxIsHash = ((_pluginsMap$get = pluginsMap.get("recordAndTuple")) == null ? void 0 : _pluginsMap$get.syntaxType) === "hash";
    if (proposal === "hack") {
      if (pluginsMap.has("placeholders")) {
        throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
      }
      if (pluginsMap.has("v8intrinsic")) {
        throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
      }
      const topicToken = pluginsMap.get("pipelineOperator").topicToken;
      if (!TOPIC_TOKENS.includes(topicToken)) {
        const tokenList = TOPIC_TOKENS.map(t => `"${t}"`).join(", ");
        throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${tokenList}.`);
      }
      if (topicToken === "#" && tupleSyntaxIsHash) {
        throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(["recordAndTuple", pluginsMap.get("recordAndTuple")])}\`.`);
      }
    } else if (proposal === "smart" && tupleSyntaxIsHash) {
      throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(["recordAndTuple", pluginsMap.get("recordAndTuple")])}\`.`);
    }
  }
  if (pluginsMap.has("moduleAttributes")) {
    {
      if (pluginsMap.has("deprecatedImportAssert") || pluginsMap.has("importAssertions")) {
        throw new Error("Cannot combine importAssertions, deprecatedImportAssert and moduleAttributes plugins.");
      }
      const moduleAttributesVersionPluginOption = pluginsMap.get("moduleAttributes").version;
      if (moduleAttributesVersionPluginOption !== "may-2020") {
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option," + " representing the last proposal update. Currently, the" + " only supported value is 'may-2020'.");
      }
    }
  }
  if (pluginsMap.has("importAssertions")) {
    if (pluginsMap.has("deprecatedImportAssert")) {
      throw new Error("Cannot combine importAssertions and deprecatedImportAssert plugins.");
    }
  }
  if (!pluginsMap.has("deprecatedImportAssert") && pluginsMap.has("importAttributes") && pluginsMap.get("importAttributes").deprecatedAssertSyntax) {
    {
      pluginsMap.set("deprecatedImportAssert", {});
    }
  }
  if (pluginsMap.has("recordAndTuple")) {
    const syntaxType = pluginsMap.get("recordAndTuple").syntaxType;
    if (syntaxType != null) {
      {
        const RECORD_AND_TUPLE_SYNTAX_TYPES = ["hash", "bar"];
        if (!RECORD_AND_TUPLE_SYNTAX_TYPES.includes(syntaxType)) {
          throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + RECORD_AND_TUPLE_SYNTAX_TYPES.map(p => `'${p}'`).join(", "));
        }
      }
    }
  }
  if (pluginsMap.has("asyncDoExpressions") && !pluginsMap.has("doExpressions")) {
    const error = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
    error.missingPlugins = "doExpressions";
    throw error;
  }
  if (pluginsMap.has("optionalChainingAssign") && pluginsMap.get("optionalChainingAssign").version !== "2023-07") {
    throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option," + " representing the last proposal update. Currently, the" + " only supported value is '2023-07'.");
  }
}
const mixinPlugins = {
  estree,
  jsx,
  flow,
  typescript,
  v8intrinsic,
  placeholders
};
const mixinPluginNames = Object.keys(mixinPlugins);
class ExpressionParser extends LValParser {
  checkProto(prop, isRecord, sawProto, refExpressionErrors) {
    if (prop.type === "SpreadElement" || this.isObjectMethod(prop) || prop.computed || prop.shorthand) {
      return sawProto;
    }
    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : key.value;
    if (name === "__proto__") {
      if (isRecord) {
        this.raise(Errors.RecordNoProto, key);
        return true;
      }
      if (sawProto) {
        if (refExpressionErrors) {
          if (refExpressionErrors.doubleProtoLoc === null) {
            refExpressionErrors.doubleProtoLoc = key.loc.start;
          }
        } else {
          this.raise(Errors.DuplicateProto, key);
        }
      }
      return true;
    }
    return sawProto;
  }
  shouldExitDescending(expr, potentialArrowAt) {
    return expr.type === "ArrowFunctionExpression" && this.offsetToSourcePos(expr.start) === potentialArrowAt;
  }
  getExpression() {
    this.enterInitialScopes();
    this.nextToken();
    const expr = this.parseExpression();
    if (!this.match(140)) {
      this.unexpected();
    }
    this.finalizeRemainingComments();
    expr.comments = this.comments;
    expr.errors = this.state.errors;
    if (this.optionFlags & 256) {
      expr.tokens = this.tokens;
    }
    return expr;
  }
  parseExpression(disallowIn, refExpressionErrors) {
    if (disallowIn) {
      return this.disallowInAnd(() => this.parseExpressionBase(refExpressionErrors));
    }
    return this.allowInAnd(() => this.parseExpressionBase(refExpressionErrors));
  }
  parseExpressionBase(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeAssign(refExpressionErrors);
    if (this.match(12)) {
      const node = this.startNodeAt(startLoc);
      node.expressions = [expr];
      while (this.eat(12)) {
        node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
      }
      this.toReferencedList(node.expressions);
      return this.finishNode(node, "SequenceExpression");
    }
    return expr;
  }
  parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse) {
    return this.disallowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
  }
  parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse) {
    return this.allowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
  }
  setOptionalParametersError(refExpressionErrors) {
    refExpressionErrors.optionalParametersLoc = this.state.startLoc;
  }
  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    const startLoc = this.state.startLoc;
    const isYield = this.isContextual(108);
    if (isYield) {
      if (this.prodParam.hasYield) {
        this.next();
        let left = this.parseYield(startLoc);
        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startLoc);
        }
        return left;
      }
    }
    let ownExpressionErrors;
    if (refExpressionErrors) {
      ownExpressionErrors = false;
    } else {
      refExpressionErrors = new ExpressionErrors();
      ownExpressionErrors = true;
    }
    const {
      type
    } = this.state;
    if (type === 10 || tokenIsIdentifier(type)) {
      this.state.potentialArrowAt = this.state.start;
    }
    let left = this.parseMaybeConditional(refExpressionErrors);
    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startLoc);
    }
    if (tokenIsAssignment(this.state.type)) {
      const node = this.startNodeAt(startLoc);
      const operator = this.state.value;
      node.operator = operator;
      if (this.match(29)) {
        this.toAssignable(left, true);
        node.left = left;
        const startIndex = startLoc.index;
        if (refExpressionErrors.doubleProtoLoc != null && refExpressionErrors.doubleProtoLoc.index >= startIndex) {
          refExpressionErrors.doubleProtoLoc = null;
        }
        if (refExpressionErrors.shorthandAssignLoc != null && refExpressionErrors.shorthandAssignLoc.index >= startIndex) {
          refExpressionErrors.shorthandAssignLoc = null;
        }
        if (refExpressionErrors.privateKeyLoc != null && refExpressionErrors.privateKeyLoc.index >= startIndex) {
          this.checkDestructuringPrivate(refExpressionErrors);
          refExpressionErrors.privateKeyLoc = null;
        }
      } else {
        node.left = left;
      }
      this.next();
      node.right = this.parseMaybeAssign();
      this.checkLVal(left, this.finishNode(node, "AssignmentExpression"));
      return node;
    } else if (ownExpressionErrors) {
      this.checkExpressionErrors(refExpressionErrors, true);
    }
    if (isYield) {
      const {
        type
      } = this.state;
      const startsExpr = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type) : tokenCanStartExpression(type) && !this.match(54);
      if (startsExpr && !this.isAmbiguousPrefixOrIdentifier()) {
        this.raiseOverwrite(Errors.YieldNotInGeneratorFunction, startLoc);
        return this.parseYield(startLoc);
      }
    }
    return left;
  }
  parseMaybeConditional(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprOps(refExpressionErrors);
    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }
    return this.parseConditional(expr, startLoc, refExpressionErrors);
  }
  parseConditional(expr, startLoc, refExpressionErrors) {
    if (this.eat(17)) {
      const node = this.startNodeAt(startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssignAllowIn();
      this.expect(14);
      node.alternate = this.parseMaybeAssign();
      return this.finishNode(node, "ConditionalExpression");
    }
    return expr;
  }
  parseMaybeUnaryOrPrivate(refExpressionErrors) {
    return this.match(139) ? this.parsePrivateName() : this.parseMaybeUnary(refExpressionErrors);
  }
  parseExprOps(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseMaybeUnaryOrPrivate(refExpressionErrors);
    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }
    return this.parseExprOp(expr, startLoc, -1);
  }
  parseExprOp(left, leftStartLoc, minPrec) {
    if (this.isPrivateName(left)) {
      const value = this.getPrivateNameSV(left);
      if (minPrec >= tokenOperatorPrecedence(58) || !this.prodParam.hasIn || !this.match(58)) {
        this.raise(Errors.PrivateInExpectedIn, left, {
          identifierName: value
        });
      }
      this.classScope.usePrivateName(value, left.loc.start);
    }
    const op = this.state.type;
    if (tokenIsOperator(op) && (this.prodParam.hasIn || !this.match(58))) {
      let prec = tokenOperatorPrecedence(op);
      if (prec > minPrec) {
        if (op === 39) {
          this.expectPlugin("pipelineOperator");
          if (this.state.inFSharpPipelineDirectBody) {
            return left;
          }
          this.checkPipelineAtInfixOperator(left, leftStartLoc);
        }
        const node = this.startNodeAt(leftStartLoc);
        node.left = left;
        node.operator = this.state.value;
        const logical = op === 41 || op === 42;
        const coalesce = op === 40;
        if (coalesce) {
          prec = tokenOperatorPrecedence(42);
        }
        this.next();
        if (op === 39 && this.hasPlugin(["pipelineOperator", {
          proposal: "minimal"
        }])) {
          if (this.state.type === 96 && this.prodParam.hasAwait) {
            throw this.raise(Errors.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
          }
        }
        node.right = this.parseExprOpRightExpr(op, prec);
        const finishedNode = this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
        const nextOp = this.state.type;
        if (coalesce && (nextOp === 41 || nextOp === 42) || logical && nextOp === 40) {
          throw this.raise(Errors.MixingCoalesceWithLogical, this.state.startLoc);
        }
        return this.parseExprOp(finishedNode, leftStartLoc, minPrec);
      }
    }
    return left;
  }
  parseExprOpRightExpr(op, prec) {
    const startLoc = this.state.startLoc;
    switch (op) {
      case 39:
        switch (this.getPluginOption("pipelineOperator", "proposal")) {
          case "hack":
            return this.withTopicBindingContext(() => {
              return this.parseHackPipeBody();
            });
          case "fsharp":
            return this.withSoloAwaitPermittingContext(() => {
              return this.parseFSharpPipelineBody(prec);
            });
        }
        if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
          return this.withTopicBindingContext(() => {
            if (this.prodParam.hasYield && this.isContextual(108)) {
              throw this.raise(Errors.PipeBodyIsTighter, this.state.startLoc);
            }
            return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(op, prec), startLoc);
          });
        }
      default:
        return this.parseExprOpBaseRightExpr(op, prec);
    }
  }
  parseExprOpBaseRightExpr(op, prec) {
    const startLoc = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startLoc, tokenIsRightAssociative(op) ? prec - 1 : prec);
  }
  parseHackPipeBody() {
    var _body$extra;
    const {
      startLoc
    } = this.state;
    const body = this.parseMaybeAssign();
    const requiredParentheses = UnparenthesizedPipeBodyDescriptions.has(body.type);
    if (requiredParentheses && !((_body$extra = body.extra) != null && _body$extra.parenthesized)) {
      this.raise(Errors.PipeUnparenthesizedBody, startLoc, {
        type: body.type
      });
    }
    if (!this.topicReferenceWasUsedInCurrentContext()) {
      this.raise(Errors.PipeTopicUnused, startLoc);
    }
    return body;
  }
  checkExponentialAfterUnary(node) {
    if (this.match(57)) {
      this.raise(Errors.UnexpectedTokenUnaryExponentiation, node.argument);
    }
  }
  parseMaybeUnary(refExpressionErrors, sawUnary) {
    const startLoc = this.state.startLoc;
    const isAwait = this.isContextual(96);
    if (isAwait && this.recordAwaitIfAllowed()) {
      this.next();
      const expr = this.parseAwait(startLoc);
      if (!sawUnary) this.checkExponentialAfterUnary(expr);
      return expr;
    }
    const update = this.match(34);
    const node = this.startNode();
    if (tokenIsPrefix(this.state.type)) {
      node.operator = this.state.value;
      node.prefix = true;
      if (this.match(72)) {
        this.expectPlugin("throwExpressions");
      }
      const isDelete = this.match(89);
      this.next();
      node.argument = this.parseMaybeUnary(null, true);
      this.checkExpressionErrors(refExpressionErrors, true);
      if (this.state.strict && isDelete) {
        const arg = node.argument;
        if (arg.type === "Identifier") {
          this.raise(Errors.StrictDelete, node);
        } else if (this.hasPropertyAsPrivateName(arg)) {
          this.raise(Errors.DeletePrivateField, node);
        }
      }
      if (!update) {
        if (!sawUnary) {
          this.checkExponentialAfterUnary(node);
        }
        return this.finishNode(node, "UnaryExpression");
      }
    }
    const expr = this.parseUpdate(node, update, refExpressionErrors);
    if (isAwait) {
      const {
        type
      } = this.state;
      const startsExpr = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type) : tokenCanStartExpression(type) && !this.match(54);
      if (startsExpr && !this.isAmbiguousPrefixOrIdentifier()) {
        this.raiseOverwrite(Errors.AwaitNotInAsyncContext, startLoc);
        return this.parseAwait(startLoc);
      }
    }
    return expr;
  }
  parseUpdate(node, update, refExpressionErrors) {
    if (update) {
      const updateExpressionNode = node;
      this.checkLVal(updateExpressionNode.argument, this.finishNode(updateExpressionNode, "UpdateExpression"));
      return node;
    }
    const startLoc = this.state.startLoc;
    let expr = this.parseExprSubscripts(refExpressionErrors);
    if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;
    while (tokenIsPostfix(this.state.type) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startLoc);
      node.operator = this.state.value;
      node.prefix = false;
      node.argument = expr;
      this.next();
      this.checkLVal(expr, expr = this.finishNode(node, "UpdateExpression"));
    }
    return expr;
  }
  parseExprSubscripts(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprAtom(refExpressionErrors);
    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }
    return this.parseSubscripts(expr, startLoc);
  }
  parseSubscripts(base, startLoc, noCalls) {
    const state = {
      optionalChainMember: false,
      maybeAsyncArrow: this.atPossibleAsyncArrow(base),
      stop: false
    };
    do {
      base = this.parseSubscript(base, startLoc, noCalls, state);
      state.maybeAsyncArrow = false;
    } while (!state.stop);
    return base;
  }
  parseSubscript(base, startLoc, noCalls, state) {
    const {
      type
    } = this.state;
    if (!noCalls && type === 15) {
      return this.parseBind(base, startLoc, noCalls, state);
    } else if (tokenIsTemplate(type)) {
      return this.parseTaggedTemplateExpression(base, startLoc, state);
    }
    let optional = false;
    if (type === 18) {
      if (noCalls) {
        this.raise(Errors.OptionalChainingNoNew, this.state.startLoc);
        if (this.lookaheadCharCode() === 40) {
          state.stop = true;
          return base;
        }
      }
      state.optionalChainMember = optional = true;
      this.next();
    }
    if (!noCalls && this.match(10)) {
      return this.parseCoverCallAndAsyncArrowHead(base, startLoc, state, optional);
    } else {
      const computed = this.eat(0);
      if (computed || optional || this.eat(16)) {
        return this.parseMember(base, startLoc, state, computed, optional);
      } else {
        state.stop = true;
        return base;
      }
    }
  }
  parseMember(base, startLoc, state, computed, optional) {
    const node = this.startNodeAt(startLoc);
    node.object = base;
    node.computed = computed;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(3);
    } else if (this.match(139)) {
      if (base.type === "Super") {
        this.raise(Errors.SuperPrivateField, startLoc);
      }
      this.classScope.usePrivateName(this.state.value, this.state.startLoc);
      node.property = this.parsePrivateName();
    } else {
      node.property = this.parseIdentifier(true);
    }
    if (state.optionalChainMember) {
      node.optional = optional;
      return this.finishNode(node, "OptionalMemberExpression");
    } else {
      return this.finishNode(node, "MemberExpression");
    }
  }
  parseBind(base, startLoc, noCalls, state) {
    const node = this.startNodeAt(startLoc);
    node.object = base;
    this.next();
    node.callee = this.parseNoCallExpr();
    state.stop = true;
    return this.parseSubscripts(this.finishNode(node, "BindExpression"), startLoc, noCalls);
  }
  parseCoverCallAndAsyncArrowHead(base, startLoc, state, optional) {
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    let refExpressionErrors = null;
    this.state.maybeInArrowParameters = true;
    this.next();
    const node = this.startNodeAt(startLoc);
    node.callee = base;
    const {
      maybeAsyncArrow,
      optionalChainMember
    } = state;
    if (maybeAsyncArrow) {
      this.expressionScope.enter(newAsyncArrowScope());
      refExpressionErrors = new ExpressionErrors();
    }
    if (optionalChainMember) {
      node.optional = optional;
    }
    if (optional) {
      node.arguments = this.parseCallExpressionArguments(11);
    } else {
      node.arguments = this.parseCallExpressionArguments(11, base.type !== "Super", node, refExpressionErrors);
    }
    let finishedNode = this.finishCallExpression(node, optionalChainMember);
    if (maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
      state.stop = true;
      this.checkDestructuringPrivate(refExpressionErrors);
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      finishedNode = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startLoc), finishedNode);
    } else {
      if (maybeAsyncArrow) {
        this.checkExpressionErrors(refExpressionErrors, true);
        this.expressionScope.exit();
      }
      this.toReferencedArguments(finishedNode);
    }
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return finishedNode;
  }
  toReferencedArguments(node, isParenthesizedExpr) {
    this.toReferencedListDeep(node.arguments, isParenthesizedExpr);
  }
  parseTaggedTemplateExpression(base, startLoc, state) {
    const node = this.startNodeAt(startLoc);
    node.tag = base;
    node.quasi = this.parseTemplate(true);
    if (state.optionalChainMember) {
      this.raise(Errors.OptionalChainingNoTemplate, startLoc);
    }
    return this.finishNode(node, "TaggedTemplateExpression");
  }
  atPossibleAsyncArrow(base) {
    return base.type === "Identifier" && base.name === "async" && this.state.lastTokEndLoc.index === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.offsetToSourcePos(base.start) === this.state.potentialArrowAt;
  }
  finishCallExpression(node, optional) {
    if (node.callee.type === "Import") {
      if (node.arguments.length === 0 || node.arguments.length > 2) {
        this.raise(Errors.ImportCallArity, node);
      } else {
        for (const arg of node.arguments) {
          if (arg.type === "SpreadElement") {
            this.raise(Errors.ImportCallSpreadArgument, arg);
          }
        }
      }
    }
    return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
  }
  parseCallExpressionArguments(close, allowPlaceholder, nodeForExtra, refExpressionErrors) {
    const elts = [];
    let first = true;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
        if (this.match(close)) {
          if (nodeForExtra) {
            this.addTrailingCommaExtraToNode(nodeForExtra);
          }
          this.next();
          break;
        }
      }
      elts.push(this.parseExprListItem(false, refExpressionErrors, allowPlaceholder));
    }
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return elts;
  }
  shouldParseAsyncArrow() {
    return this.match(19) && !this.canInsertSemicolon();
  }
  parseAsyncArrowFromCallExpression(node, call) {
    var _call$extra;
    this.resetPreviousNodeTrailingComments(call);
    this.expect(19);
    this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingCommaLoc);
    if (call.innerComments) {
      setInnerComments(node, call.innerComments);
    }
    if (call.callee.trailingComments) {
      setInnerComments(node, call.callee.trailingComments);
    }
    return node;
  }
  parseNoCallExpr() {
    const startLoc = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), startLoc, true);
  }
  parseExprAtom(refExpressionErrors) {
    let node;
    let decorators = null;
    const {
      type
    } = this.state;
    switch (type) {
      case 79:
        return this.parseSuper();
      case 83:
        node = this.startNode();
        this.next();
        if (this.match(16)) {
          return this.parseImportMetaProperty(node);
        }
        if (this.match(10)) {
          if (this.optionFlags & 512) {
            return this.parseImportCall(node);
          } else {
            return this.finishNode(node, "Import");
          }
        } else {
          this.raise(Errors.UnsupportedImport, this.state.lastTokStartLoc);
          return this.finishNode(node, "Import");
        }
      case 78:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");
      case 90:
        {
          return this.parseDo(this.startNode(), false);
        }
      case 56:
      case 31:
        {
          this.readRegexp();
          return this.parseRegExpLiteral(this.state.value);
        }
      case 135:
        return this.parseNumericLiteral(this.state.value);
      case 136:
        return this.parseBigIntLiteral(this.state.value);
      case 134:
        return this.parseStringLiteral(this.state.value);
      case 84:
        return this.parseNullLiteral();
      case 85:
        return this.parseBooleanLiteral(true);
      case 86:
        return this.parseBooleanLiteral(false);
      case 10:
        {
          const canBeArrow = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(canBeArrow);
        }
      case 2:
      case 1:
        {
          return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
        }
      case 0:
        {
          return this.parseArrayLike(3, true, false, refExpressionErrors);
        }
      case 6:
      case 7:
        {
          return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
        }
      case 5:
        {
          return this.parseObjectLike(8, false, false, refExpressionErrors);
        }
      case 68:
        return this.parseFunctionOrFunctionSent();
      case 26:
        decorators = this.parseDecorators();
      case 80:
        return this.parseClass(this.maybeTakeDecorators(decorators, this.startNode()), false);
      case 77:
        return this.parseNewOrNewTarget();
      case 25:
      case 24:
        return this.parseTemplate(false);
      case 15:
        {
          node = this.startNode();
          this.next();
          node.object = null;
          const callee = node.callee = this.parseNoCallExpr();
          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(Errors.UnsupportedBind, callee);
          }
        }
      case 139:
        {
          this.raise(Errors.PrivateInExpectedIn, this.state.startLoc, {
            identifierName: this.state.value
          });
          return this.parsePrivateName();
        }
      case 33:
        {
          return this.parseTopicReferenceThenEqualsSign(54, "%");
        }
      case 32:
        {
          return this.parseTopicReferenceThenEqualsSign(44, "^");
        }
      case 37:
      case 38:
        {
          return this.parseTopicReference("hack");
        }
      case 44:
      case 54:
      case 27:
        {
          const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");
          if (pipeProposal) {
            return this.parseTopicReference(pipeProposal);
          }
          this.unexpected();
          break;
        }
      case 47:
        {
          const lookaheadCh = this.input.codePointAt(this.nextTokenStart());
          if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
            this.expectOnePlugin(["jsx", "flow", "typescript"]);
          } else {
            this.unexpected();
          }
          break;
        }
      default:
        if (type === 137) {
          return this.parseDecimalLiteral(this.state.value);
        }
        if (tokenIsIdentifier(type)) {
          if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123) {
            return this.parseModuleExpression();
          }
          const canBeArrow = this.state.potentialArrowAt === this.state.start;
          const containsEsc = this.state.containsEsc;
          const id = this.parseIdentifier();
          if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
            const {
              type
            } = this.state;
            if (type === 68) {
              this.resetPreviousNodeTrailingComments(id);
              this.next();
              return this.parseAsyncFunctionExpression(this.startNodeAtNode(id));
            } else if (tokenIsIdentifier(type)) {
              if (this.lookaheadCharCode() === 61) {
                return this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(id));
              } else {
                return id;
              }
            } else if (type === 90) {
              this.resetPreviousNodeTrailingComments(id);
              return this.parseDo(this.startNodeAtNode(id), true);
            }
          }
          if (canBeArrow && this.match(19) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
          }
          return id;
        } else {
          this.unexpected();
        }
    }
  }
  parseTopicReferenceThenEqualsSign(topicTokenType, topicTokenValue) {
    const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");
    if (pipeProposal) {
      this.state.type = topicTokenType;
      this.state.value = topicTokenValue;
      this.state.pos--;
      this.state.end--;
      this.state.endLoc = createPositionWithColumnOffset(this.state.endLoc, -1);
      return this.parseTopicReference(pipeProposal);
    } else {
      this.unexpected();
    }
  }
  parseTopicReference(pipeProposal) {
    const node = this.startNode();
    const startLoc = this.state.startLoc;
    const tokenType = this.state.type;
    this.next();
    return this.finishTopicReference(node, startLoc, pipeProposal, tokenType);
  }
  finishTopicReference(node, startLoc, pipeProposal, tokenType) {
    if (this.testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType)) {
      if (pipeProposal === "hack") {
        if (!this.topicReferenceIsAllowedInCurrentContext()) {
          this.raise(Errors.PipeTopicUnbound, startLoc);
        }
        this.registerTopicReference();
        return this.finishNode(node, "TopicReference");
      } else {
        if (!this.topicReferenceIsAllowedInCurrentContext()) {
          this.raise(Errors.PrimaryTopicNotAllowed, startLoc);
        }
        this.registerTopicReference();
        return this.finishNode(node, "PipelinePrimaryTopicReference");
      }
    } else {
      throw this.raise(Errors.PipeTopicUnconfiguredToken, startLoc, {
        token: tokenLabelName(tokenType)
      });
    }
  }
  testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType) {
    switch (pipeProposal) {
      case "hack":
        {
          return this.hasPlugin(["pipelineOperator", {
            topicToken: tokenLabelName(tokenType)
          }]);
        }
      case "smart":
        return tokenType === 27;
      default:
        throw this.raise(Errors.PipeTopicRequiresHackPipes, startLoc);
    }
  }
  parseAsyncArrowUnaryFunction(node) {
    this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
    const params = [this.parseIdentifier()];
    this.prodParam.exit();
    if (this.hasPrecedingLineBreak()) {
      this.raise(Errors.LineTerminatorBeforeArrow, this.state.curPosition());
    }
    this.expect(19);
    return this.parseArrowExpression(node, params, true);
  }
  parseDo(node, isAsync) {
    this.expectPlugin("doExpressions");
    if (isAsync) {
      this.expectPlugin("asyncDoExpressions");
    }
    node.async = isAsync;
    this.next();
    const oldLabels = this.state.labels;
    this.state.labels = [];
    if (isAsync) {
      this.prodParam.enter(2);
      node.body = this.parseBlock();
      this.prodParam.exit();
    } else {
      node.body = this.parseBlock();
    }
    this.state.labels = oldLabels;
    return this.finishNode(node, "DoExpression");
  }
  parseSuper() {
    const node = this.startNode();
    this.next();
    if (this.match(10) && !this.scope.allowDirectSuper && !(this.optionFlags & 16)) {
      this.raise(Errors.SuperNotAllowed, node);
    } else if (!this.scope.allowSuper && !(this.optionFlags & 16)) {
      this.raise(Errors.UnexpectedSuper, node);
    }
    if (!this.match(10) && !this.match(0) && !this.match(16)) {
      this.raise(Errors.UnsupportedSuper, node);
    }
    return this.finishNode(node, "Super");
  }
  parsePrivateName() {
    const node = this.startNode();
    const id = this.startNodeAt(createPositionWithColumnOffset(this.state.startLoc, 1));
    const name = this.state.value;
    this.next();
    node.id = this.createIdentifier(id, name);
    return this.finishNode(node, "PrivateName");
  }
  parseFunctionOrFunctionSent() {
    const node = this.startNode();
    this.next();
    if (this.prodParam.hasYield && this.match(16)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "function");
      this.next();
      if (this.match(103)) {
        this.expectPlugin("functionSent");
      } else if (!this.hasPlugin("functionSent")) {
        this.unexpected();
      }
      return this.parseMetaProperty(node, meta, "sent");
    }
    return this.parseFunction(node);
  }
  parseMetaProperty(node, meta, propertyName) {
    node.meta = meta;
    const containsEsc = this.state.containsEsc;
    node.property = this.parseIdentifier(true);
    if (node.property.name !== propertyName || containsEsc) {
      this.raise(Errors.UnsupportedMetaProperty, node.property, {
        target: meta.name,
        onlyValidPropertyName: propertyName
      });
    }
    return this.finishNode(node, "MetaProperty");
  }
  parseImportMetaProperty(node) {
    const id = this.createIdentifier(this.startNodeAtNode(node), "import");
    this.next();
    if (this.isContextual(101)) {
      if (!this.inModule) {
        this.raise(Errors.ImportMetaOutsideModule, id);
      }
      this.sawUnambiguousESM = true;
    } else if (this.isContextual(105) || this.isContextual(97)) {
      const isSource = this.isContextual(105);
      this.expectPlugin(isSource ? "sourcePhaseImports" : "deferredImportEvaluation");
      if (!(this.optionFlags & 512)) {
        throw this.raise(Errors.DynamicImportPhaseRequiresImportExpressions, this.state.startLoc, {
          phase: this.state.value
        });
      }
      this.next();
      node.phase = isSource ? "source" : "defer";
      return this.parseImportCall(node);
    }
    return this.parseMetaProperty(node, id, "meta");
  }
  parseLiteralAtNode(value, type, node) {
    this.addExtra(node, "rawValue", value);
    this.addExtra(node, "raw", this.input.slice(this.offsetToSourcePos(node.start), this.state.end));
    node.value = value;
    this.next();
    return this.finishNode(node, type);
  }
  parseLiteral(value, type) {
    const node = this.startNode();
    return this.parseLiteralAtNode(value, type, node);
  }
  parseStringLiteral(value) {
    return this.parseLiteral(value, "StringLiteral");
  }
  parseNumericLiteral(value) {
    return this.parseLiteral(value, "NumericLiteral");
  }
  parseBigIntLiteral(value) {
    return this.parseLiteral(value, "BigIntLiteral");
  }
  parseDecimalLiteral(value) {
    return this.parseLiteral(value, "DecimalLiteral");
  }
  parseRegExpLiteral(value) {
    const node = this.startNode();
    this.addExtra(node, "raw", this.input.slice(this.offsetToSourcePos(node.start), this.state.end));
    node.pattern = value.pattern;
    node.flags = value.flags;
    this.next();
    return this.finishNode(node, "RegExpLiteral");
  }
  parseBooleanLiteral(value) {
    const node = this.startNode();
    node.value = value;
    this.next();
    return this.finishNode(node, "BooleanLiteral");
  }
  parseNullLiteral() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "NullLiteral");
  }
  parseParenAndDistinguishExpression(canBeArrow) {
    const startLoc = this.state.startLoc;
    let val;
    this.next();
    this.expressionScope.enter(newArrowHeadScope());
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.maybeInArrowParameters = true;
    this.state.inFSharpPipelineDirectBody = false;
    const innerStartLoc = this.state.startLoc;
    const exprList = [];
    const refExpressionErrors = new ExpressionErrors();
    let first = true;
    let spreadStartLoc;
    let optionalCommaStartLoc;
    while (!this.match(11)) {
      if (first) {
        first = false;
      } else {
        this.expect(12, refExpressionErrors.optionalParametersLoc === null ? null : refExpressionErrors.optionalParametersLoc);
        if (this.match(11)) {
          optionalCommaStartLoc = this.state.startLoc;
          break;
        }
      }
      if (this.match(21)) {
        const spreadNodeStartLoc = this.state.startLoc;
        spreadStartLoc = this.state.startLoc;
        exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartLoc));
        if (!this.checkCommaAfterRest(41)) {
          break;
        }
      } else {
        exprList.push(this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem));
      }
    }
    const innerEndLoc = this.state.lastTokEndLoc;
    this.expect(11);
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let arrowNode = this.startNodeAt(startLoc);
    if (canBeArrow && this.shouldParseArrow(exprList) && (arrowNode = this.parseArrow(arrowNode))) {
      this.checkDestructuringPrivate(refExpressionErrors);
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      this.parseArrowExpression(arrowNode, exprList, false);
      return arrowNode;
    }
    this.expressionScope.exit();
    if (!exprList.length) {
      this.unexpected(this.state.lastTokStartLoc);
    }
    if (optionalCommaStartLoc) this.unexpected(optionalCommaStartLoc);
    if (spreadStartLoc) this.unexpected(spreadStartLoc);
    this.checkExpressionErrors(refExpressionErrors, true);
    this.toReferencedListDeep(exprList, true);
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartLoc);
      val.expressions = exprList;
      this.finishNode(val, "SequenceExpression");
      this.resetEndLocation(val, innerEndLoc);
    } else {
      val = exprList[0];
    }
    return this.wrapParenthesis(startLoc, val);
  }
  wrapParenthesis(startLoc, expression) {
    if (!(this.optionFlags & 1024)) {
      this.addExtra(expression, "parenthesized", true);
      this.addExtra(expression, "parenStart", startLoc.index);
      this.takeSurroundingComments(expression, startLoc.index, this.state.lastTokEndLoc.index);
      return expression;
    }
    const parenExpression = this.startNodeAt(startLoc);
    parenExpression.expression = expression;
    return this.finishNode(parenExpression, "ParenthesizedExpression");
  }
  shouldParseArrow(params) {
    return !this.canInsertSemicolon();
  }
  parseArrow(node) {
    if (this.eat(19)) {
      return node;
    }
  }
  parseParenItem(node, startLoc) {
    return node;
  }
  parseNewOrNewTarget() {
    const node = this.startNode();
    this.next();
    if (this.match(16)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "new");
      this.next();
      const metaProp = this.parseMetaProperty(node, meta, "target");
      if (!this.scope.inNonArrowFunction && !this.scope.inClass && !(this.optionFlags & 4)) {
        this.raise(Errors.UnexpectedNewTarget, metaProp);
      }
      return metaProp;
    }
    return this.parseNew(node);
  }
  parseNew(node) {
    this.parseNewCallee(node);
    if (this.eat(10)) {
      const args = this.parseExprList(11);
      this.toReferencedList(args);
      node.arguments = args;
    } else {
      node.arguments = [];
    }
    return this.finishNode(node, "NewExpression");
  }
  parseNewCallee(node) {
    const isImport = this.match(83);
    const callee = this.parseNoCallExpr();
    node.callee = callee;
    if (isImport && (callee.type === "Import" || callee.type === "ImportExpression")) {
      this.raise(Errors.ImportCallNotNewExpression, callee);
    }
  }
  parseTemplateElement(isTagged) {
    const {
      start,
      startLoc,
      end,
      value
    } = this.state;
    const elemStart = start + 1;
    const elem = this.startNodeAt(createPositionWithColumnOffset(startLoc, 1));
    if (value === null) {
      if (!isTagged) {
        this.raise(Errors.InvalidEscapeSequenceTemplate, createPositionWithColumnOffset(this.state.firstInvalidTemplateEscapePos, 1));
      }
    }
    const isTail = this.match(24);
    const endOffset = isTail ? -1 : -2;
    const elemEnd = end + endOffset;
    elem.value = {
      raw: this.input.slice(elemStart, elemEnd).replace(/\r\n?/g, "\n"),
      cooked: value === null ? null : value.slice(1, endOffset)
    };
    elem.tail = isTail;
    this.next();
    const finishedNode = this.finishNode(elem, "TemplateElement");
    this.resetEndLocation(finishedNode, createPositionWithColumnOffset(this.state.lastTokEndLoc, endOffset));
    return finishedNode;
  }
  parseTemplate(isTagged) {
    const node = this.startNode();
    let curElt = this.parseTemplateElement(isTagged);
    const quasis = [curElt];
    const substitutions = [];
    while (!curElt.tail) {
      substitutions.push(this.parseTemplateSubstitution());
      this.readTemplateContinuation();
      quasis.push(curElt = this.parseTemplateElement(isTagged));
    }
    node.expressions = substitutions;
    node.quasis = quasis;
    return this.finishNode(node, "TemplateLiteral");
  }
  parseTemplateSubstitution() {
    return this.parseExpression();
  }
  parseObjectLike(close, isPattern, isRecord, refExpressionErrors) {
    if (isRecord) {
      this.expectPlugin("recordAndTuple");
    }
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    let sawProto = false;
    let first = true;
    const node = this.startNode();
    node.properties = [];
    this.next();
    while (!this.match(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
        if (this.match(close)) {
          this.addTrailingCommaExtraToNode(node);
          break;
        }
      }
      let prop;
      if (isPattern) {
        prop = this.parseBindingProperty();
      } else {
        prop = this.parsePropertyDefinition(refExpressionErrors);
        sawProto = this.checkProto(prop, isRecord, sawProto, refExpressionErrors);
      }
      if (isRecord && !this.isObjectProperty(prop) && prop.type !== "SpreadElement") {
        this.raise(Errors.InvalidRecordProperty, prop);
      }
      {
        if (prop.shorthand) {
          this.addExtra(prop, "shorthand", true);
        }
      }
      node.properties.push(prop);
    }
    this.next();
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let type = "ObjectExpression";
    if (isPattern) {
      type = "ObjectPattern";
    } else if (isRecord) {
      type = "RecordExpression";
    }
    return this.finishNode(node, type);
  }
  addTrailingCommaExtraToNode(node) {
    this.addExtra(node, "trailingComma", this.state.lastTokStartLoc.index);
    this.addExtra(node, "trailingCommaLoc", this.state.lastTokStartLoc, false);
  }
  maybeAsyncOrAccessorProp(prop) {
    return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
  }
  parsePropertyDefinition(refExpressionErrors) {
    let decorators = [];
    if (this.match(26)) {
      if (this.hasPlugin("decorators")) {
        this.raise(Errors.UnsupportedPropertyDecorator, this.state.startLoc);
      }
      while (this.match(26)) {
        decorators.push(this.parseDecorator());
      }
    }
    const prop = this.startNode();
    let isAsync = false;
    let isAccessor = false;
    let startLoc;
    if (this.match(21)) {
      if (decorators.length) this.unexpected();
      return this.parseSpread();
    }
    if (decorators.length) {
      prop.decorators = decorators;
      decorators = [];
    }
    prop.method = false;
    if (refExpressionErrors) {
      startLoc = this.state.startLoc;
    }
    let isGenerator = this.eat(55);
    this.parsePropertyNamePrefixOperator(prop);
    const containsEsc = this.state.containsEsc;
    this.parsePropertyName(prop, refExpressionErrors);
    if (!isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
      const {
        key
      } = prop;
      const keyName = key.name;
      if (keyName === "async" && !this.hasPrecedingLineBreak()) {
        isAsync = true;
        this.resetPreviousNodeTrailingComments(key);
        isGenerator = this.eat(55);
        this.parsePropertyName(prop);
      }
      if (keyName === "get" || keyName === "set") {
        isAccessor = true;
        this.resetPreviousNodeTrailingComments(key);
        prop.kind = keyName;
        if (this.match(55)) {
          isGenerator = true;
          this.raise(Errors.AccessorIsGenerator, this.state.curPosition(), {
            kind: keyName
          });
          this.next();
        }
        this.parsePropertyName(prop);
      }
    }
    return this.parseObjPropValue(prop, startLoc, isGenerator, isAsync, false, isAccessor, refExpressionErrors);
  }
  getGetterSetterExpectedParamCount(method) {
    return method.kind === "get" ? 0 : 1;
  }
  getObjectOrClassMethodParams(method) {
    return method.params;
  }
  checkGetterSetterParams(method) {
    var _params;
    const paramCount = this.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    if (params.length !== paramCount) {
      this.raise(method.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, method);
    }
    if (method.kind === "set" && ((_params = params[params.length - 1]) == null ? void 0 : _params.type) === "RestElement") {
      this.raise(Errors.BadSetterRestParameter, method);
    }
  }
  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    if (isAccessor) {
      const finishedProp = this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
      this.checkGetterSetterParams(finishedProp);
      return finishedProp;
    }
    if (isAsync || isGenerator || this.match(10)) {
      if (isPattern) this.unexpected();
      prop.kind = "method";
      prop.method = true;
      return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
    }
  }
  parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
    prop.shorthand = false;
    if (this.eat(14)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(refExpressionErrors);
      return this.finishNode(prop, "ObjectProperty");
    }
    if (!prop.computed && prop.key.type === "Identifier") {
      this.checkReservedWord(prop.key.name, prop.key.loc.start, true, false);
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startLoc, cloneIdentifier(prop.key));
      } else if (this.match(29)) {
        const shorthandAssignLoc = this.state.startLoc;
        if (refExpressionErrors != null) {
          if (refExpressionErrors.shorthandAssignLoc === null) {
            refExpressionErrors.shorthandAssignLoc = shorthandAssignLoc;
          }
        } else {
          this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
        }
        prop.value = this.parseMaybeDefault(startLoc, cloneIdentifier(prop.key));
      } else {
        prop.value = cloneIdentifier(prop.key);
      }
      prop.shorthand = true;
      return this.finishNode(prop, "ObjectProperty");
    }
  }
  parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors);
    if (!node) this.unexpected();
    return node;
  }
  parsePropertyName(prop, refExpressionErrors) {
    if (this.eat(0)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssignAllowIn();
      this.expect(3);
    } else {
      const {
        type,
        value
      } = this.state;
      let key;
      if (tokenIsKeywordOrIdentifier(type)) {
        key = this.parseIdentifier(true);
      } else {
        switch (type) {
          case 135:
            key = this.parseNumericLiteral(value);
            break;
          case 134:
            key = this.parseStringLiteral(value);
            break;
          case 136:
            key = this.parseBigIntLiteral(value);
            break;
          case 139:
            {
              const privateKeyLoc = this.state.startLoc;
              if (refExpressionErrors != null) {
                if (refExpressionErrors.privateKeyLoc === null) {
                  refExpressionErrors.privateKeyLoc = privateKeyLoc;
                }
              } else {
                this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
              }
              key = this.parsePrivateName();
              break;
            }
          default:
            if (type === 137) {
              key = this.parseDecimalLiteral(value);
              break;
            }
            this.unexpected();
        }
      }
      prop.key = key;
      if (type !== 139) {
        prop.computed = false;
      }
    }
  }
  initFunction(node, isAsync) {
    node.id = null;
    node.generator = false;
    node.async = isAsync;
  }
  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    this.initFunction(node, isAsync);
    node.generator = isGenerator;
    this.scope.enter(2 | 16 | (inClassScope ? 64 : 0) | (allowDirectSuper ? 32 : 0));
    this.prodParam.enter(functionFlags(isAsync, node.generator));
    this.parseFunctionParams(node, isConstructor);
    const finishedNode = this.parseFunctionBodyAndFinish(node, type, true);
    this.prodParam.exit();
    this.scope.exit();
    return finishedNode;
  }
  parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
    if (isTuple) {
      this.expectPlugin("recordAndTuple");
    }
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const node = this.startNode();
    this.next();
    node.elements = this.parseExprList(close, !isTuple, refExpressionErrors, node);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return this.finishNode(node, isTuple ? "TupleExpression" : "ArrayExpression");
  }
  parseArrowExpression(node, params, isAsync, trailingCommaLoc) {
    this.scope.enter(2 | 4);
    let flags = functionFlags(isAsync, false);
    if (!this.match(5) && this.prodParam.hasIn) {
      flags |= 8;
    }
    this.prodParam.enter(flags);
    this.initFunction(node, isAsync);
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    if (params) {
      this.state.maybeInArrowParameters = true;
      this.setArrowFunctionParameters(node, params, trailingCommaLoc);
    }
    this.state.maybeInArrowParameters = false;
    this.parseFunctionBody(node, true);
    this.prodParam.exit();
    this.scope.exit();
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return this.finishNode(node, "ArrowFunctionExpression");
  }
  setArrowFunctionParameters(node, params, trailingCommaLoc) {
    this.toAssignableList(params, trailingCommaLoc, false);
    node.params = params;
  }
  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    this.parseFunctionBody(node, false, isMethod);
    return this.finishNode(node, type);
  }
  parseFunctionBody(node, allowExpression, isMethod = false) {
    const isExpression = allowExpression && !this.match(5);
    this.expressionScope.enter(newExpressionScope());
    if (isExpression) {
      node.body = this.parseMaybeAssign();
      this.checkParams(node, false, allowExpression, false);
    } else {
      const oldStrict = this.state.strict;
      const oldLabels = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(this.prodParam.currentFlags() | 4);
      node.body = this.parseBlock(true, false, hasStrictModeDirective => {
        const nonSimple = !this.isSimpleParamList(node.params);
        if (hasStrictModeDirective && nonSimple) {
          this.raise(Errors.IllegalLanguageModeDirective, (node.kind === "method" || node.kind === "constructor") && !!node.key ? node.key.loc.end : node);
        }
        const strictModeChanged = !oldStrict && this.state.strict;
        this.checkParams(node, !this.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);
        if (this.state.strict && node.id) {
          this.checkIdentifier(node.id, 65, strictModeChanged);
        }
      });
      this.prodParam.exit();
      this.state.labels = oldLabels;
    }
    this.expressionScope.exit();
  }
  isSimpleParameter(node) {
    return node.type === "Identifier";
  }
  isSimpleParamList(params) {
    for (let i = 0, len = params.length; i < len; i++) {
      if (!this.isSimpleParameter(params[i])) return false;
    }
    return true;
  }
  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    const checkClashes = !allowDuplicates && new Set();
    const formalParameters = {
      type: "FormalParameters"
    };
    for (const param of node.params) {
      this.checkLVal(param, formalParameters, 5, checkClashes, strictModeChanged);
    }
  }
  parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
    const elts = [];
    let first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
        if (this.match(close)) {
          if (nodeForExtra) {
            this.addTrailingCommaExtraToNode(nodeForExtra);
          }
          this.next();
          break;
        }
      }
      elts.push(this.parseExprListItem(allowEmpty, refExpressionErrors));
    }
    return elts;
  }
  parseExprListItem(allowEmpty, refExpressionErrors, allowPlaceholder) {
    let elt;
    if (this.match(12)) {
      if (!allowEmpty) {
        this.raise(Errors.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        });
      }
      elt = null;
    } else if (this.match(21)) {
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(this.parseSpread(refExpressionErrors), spreadNodeStartLoc);
    } else if (this.match(17)) {
      this.expectPlugin("partialApplication");
      if (!allowPlaceholder) {
        this.raise(Errors.UnexpectedArgumentPlaceholder, this.state.startLoc);
      }
      const node = this.startNode();
      this.next();
      elt = this.finishNode(node, "ArgumentPlaceholder");
    } else {
      elt = this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem);
    }
    return elt;
  }
  parseIdentifier(liberal) {
    const node = this.startNode();
    const name = this.parseIdentifierName(liberal);
    return this.createIdentifier(node, name);
  }
  createIdentifier(node, name) {
    node.name = name;
    node.loc.identifierName = name;
    return this.finishNode(node, "Identifier");
  }
  parseIdentifierName(liberal) {
    let name;
    const {
      startLoc,
      type
    } = this.state;
    if (tokenIsKeywordOrIdentifier(type)) {
      name = this.state.value;
    } else {
      this.unexpected();
    }
    const tokenIsKeyword = tokenKeywordOrIdentifierIsKeyword(type);
    if (liberal) {
      if (tokenIsKeyword) {
        this.replaceToken(132);
      }
    } else {
      this.checkReservedWord(name, startLoc, tokenIsKeyword, false);
    }
    this.next();
    return name;
  }
  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (word.length > 10) {
      return;
    }
    if (!canBeReservedWord(word)) {
      return;
    }
    if (checkKeywords && isKeyword(word)) {
      this.raise(Errors.UnexpectedKeyword, startLoc, {
        keyword: word
      });
      return;
    }
    const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;
    if (reservedTest(word, this.inModule)) {
      this.raise(Errors.UnexpectedReservedWord, startLoc, {
        reservedWord: word
      });
      return;
    } else if (word === "yield") {
      if (this.prodParam.hasYield) {
        this.raise(Errors.YieldBindingIdentifier, startLoc);
        return;
      }
    } else if (word === "await") {
      if (this.prodParam.hasAwait) {
        this.raise(Errors.AwaitBindingIdentifier, startLoc);
        return;
      }
      if (this.scope.inStaticBlock) {
        this.raise(Errors.AwaitBindingIdentifierInStaticBlock, startLoc);
        return;
      }
      this.expressionScope.recordAsyncArrowParametersError(startLoc);
    } else if (word === "arguments") {
      if (this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(Errors.ArgumentsInClass, startLoc);
        return;
      }
    }
  }
  recordAwaitIfAllowed() {
    const isAwaitAllowed = this.prodParam.hasAwait || this.optionFlags & 1 && !this.scope.inFunction;
    if (isAwaitAllowed && !this.scope.inFunction) {
      this.state.hasTopLevelAwait = true;
    }
    return isAwaitAllowed;
  }
  parseAwait(startLoc) {
    const node = this.startNodeAt(startLoc);
    this.expressionScope.recordParameterInitializerError(Errors.AwaitExpressionFormalParameter, node);
    if (this.eat(55)) {
      this.raise(Errors.ObsoleteAwaitStar, node);
    }
    if (!this.scope.inFunction && !(this.optionFlags & 1)) {
      if (this.isAmbiguousPrefixOrIdentifier()) {
        this.ambiguousScriptDifferentAst = true;
      } else {
        this.sawUnambiguousESM = true;
      }
    }
    if (!this.state.soloAwait) {
      node.argument = this.parseMaybeUnary(null, true);
    }
    return this.finishNode(node, "AwaitExpression");
  }
  isAmbiguousPrefixOrIdentifier() {
    if (this.hasPrecedingLineBreak()) return true;
    const {
      type
    } = this.state;
    return type === 53 || type === 10 || type === 0 || tokenIsTemplate(type) || type === 102 && !this.state.containsEsc || type === 138 || type === 56 || this.hasPlugin("v8intrinsic") && type === 54;
  }
  parseYield(startLoc) {
    const node = this.startNodeAt(startLoc);
    this.expressionScope.recordParameterInitializerError(Errors.YieldInParameter, node);
    let delegating = false;
    let argument = null;
    if (!this.hasPrecedingLineBreak()) {
      delegating = this.eat(55);
      switch (this.state.type) {
        case 13:
        case 140:
        case 8:
        case 11:
        case 3:
        case 9:
        case 14:
        case 12:
          if (!delegating) break;
        default:
          argument = this.parseMaybeAssign();
      }
    }
    node.delegate = delegating;
    node.argument = argument;
    return this.finishNode(node, "YieldExpression");
  }
  parseImportCall(node) {
    this.next();
    node.source = this.parseMaybeAssignAllowIn();
    node.options = null;
    if (this.eat(12)) {
      if (!this.match(11)) {
        node.options = this.parseMaybeAssignAllowIn();
        if (this.eat(12) && !this.match(11)) {
          do {
            this.parseMaybeAssignAllowIn();
          } while (this.eat(12) && !this.match(11));
          this.raise(Errors.ImportCallArity, node);
        }
      }
    }
    this.expect(11);
    return this.finishNode(node, "ImportExpression");
  }
  checkPipelineAtInfixOperator(left, leftStartLoc) {
    if (this.hasPlugin(["pipelineOperator", {
      proposal: "smart"
    }])) {
      if (left.type === "SequenceExpression") {
        this.raise(Errors.PipelineHeadSequenceExpression, leftStartLoc);
      }
    }
  }
  parseSmartPipelineBodyInStyle(childExpr, startLoc) {
    if (this.isSimpleReference(childExpr)) {
      const bodyNode = this.startNodeAt(startLoc);
      bodyNode.callee = childExpr;
      return this.finishNode(bodyNode, "PipelineBareFunction");
    } else {
      const bodyNode = this.startNodeAt(startLoc);
      this.checkSmartPipeTopicBodyEarlyErrors(startLoc);
      bodyNode.expression = childExpr;
      return this.finishNode(bodyNode, "PipelineTopicExpression");
    }
  }
  isSimpleReference(expression) {
    switch (expression.type) {
      case "MemberExpression":
        return !expression.computed && this.isSimpleReference(expression.object);
      case "Identifier":
        return true;
      default:
        return false;
    }
  }
  checkSmartPipeTopicBodyEarlyErrors(startLoc) {
    if (this.match(19)) {
      throw this.raise(Errors.PipelineBodyNoArrow, this.state.startLoc);
    }
    if (!this.topicReferenceWasUsedInCurrentContext()) {
      this.raise(Errors.PipelineTopicUnused, startLoc);
    }
  }
  withTopicBindingContext(callback) {
    const outerContextTopicState = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 1,
      maxTopicIndex: null
    };
    try {
      return callback();
    } finally {
      this.state.topicContext = outerContextTopicState;
    }
  }
  withSmartMixTopicForbiddingContext(callback) {
    if (this.hasPlugin(["pipelineOperator", {
      proposal: "smart"
    }])) {
      const outerContextTopicState = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };
      try {
        return callback();
      } finally {
        this.state.topicContext = outerContextTopicState;
      }
    } else {
      return callback();
    }
  }
  withSoloAwaitPermittingContext(callback) {
    const outerContextSoloAwaitState = this.state.soloAwait;
    this.state.soloAwait = true;
    try {
      return callback();
    } finally {
      this.state.soloAwait = outerContextSoloAwaitState;
    }
  }
  allowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToSet = 8 & ~flags;
    if (prodParamToSet) {
      this.prodParam.enter(flags | 8);
      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }
    return callback();
  }
  disallowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToClear = 8 & flags;
    if (prodParamToClear) {
      this.prodParam.enter(flags & -9);
      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }
    return callback();
  }
  registerTopicReference() {
    this.state.topicContext.maxTopicIndex = 0;
  }
  topicReferenceIsAllowedInCurrentContext() {
    return this.state.topicContext.maxNumOfResolvableTopics >= 1;
  }
  topicReferenceWasUsedInCurrentContext() {
    return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
  }
  parseFSharpPipelineBody(prec) {
    const startLoc = this.state.startLoc;
    this.state.potentialArrowAt = this.state.start;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = true;
    const ret = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startLoc, prec);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return ret;
  }
  parseModuleExpression() {
    this.expectPlugin("moduleBlocks");
    const node = this.startNode();
    this.next();
    if (!this.match(5)) {
      this.unexpected(null, 5);
    }
    const program = this.startNodeAt(this.state.endLoc);
    this.next();
    const revertScopes = this.initializeScopes(true);
    this.enterInitialScopes();
    try {
      node.body = this.parseProgram(program, 8, "module");
    } finally {
      revertScopes();
    }
    return this.finishNode(node, "ModuleExpression");
  }
  parsePropertyNamePrefixOperator(prop) {}
}
const loopLabel = {
    kind: 1
  },
  switchLabel = {
    kind: 2
  };
const loneSurrogate = /[\uD800-\uDFFF]/u;
const keywordRelationalOperator = /in(?:stanceof)?/y;
function babel7CompatTokens(tokens, input, startIndex) {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const {
      type
    } = token;
    if (typeof type === "number") {
      {
        if (type === 139) {
          const {
            loc,
            start,
            value,
            end
          } = token;
          const hashEndPos = start + 1;
          const hashEndLoc = createPositionWithColumnOffset(loc.start, 1);
          tokens.splice(i, 1, new Token({
            type: getExportedToken(27),
            value: "#",
            start: start,
            end: hashEndPos,
            startLoc: loc.start,
            endLoc: hashEndLoc
          }), new Token({
            type: getExportedToken(132),
            value: value,
            start: hashEndPos,
            end: end,
            startLoc: hashEndLoc,
            endLoc: loc.end
          }));
          i++;
          continue;
        }
        if (tokenIsTemplate(type)) {
          const {
            loc,
            start,
            value,
            end
          } = token;
          const backquoteEnd = start + 1;
          const backquoteEndLoc = createPositionWithColumnOffset(loc.start, 1);
          let startToken;
          if (input.charCodeAt(start - startIndex) === 96) {
            startToken = new Token({
              type: getExportedToken(22),
              value: "`",
              start: start,
              end: backquoteEnd,
              startLoc: loc.start,
              endLoc: backquoteEndLoc
            });
          } else {
            startToken = new Token({
              type: getExportedToken(8),
              value: "}",
              start: start,
              end: backquoteEnd,
              startLoc: loc.start,
              endLoc: backquoteEndLoc
            });
          }
          let templateValue, templateElementEnd, templateElementEndLoc, endToken;
          if (type === 24) {
            templateElementEnd = end - 1;
            templateElementEndLoc = createPositionWithColumnOffset(loc.end, -1);
            templateValue = value === null ? null : value.slice(1, -1);
            endToken = new Token({
              type: getExportedToken(22),
              value: "`",
              start: templateElementEnd,
              end: end,
              startLoc: templateElementEndLoc,
              endLoc: loc.end
            });
          } else {
            templateElementEnd = end - 2;
            templateElementEndLoc = createPositionWithColumnOffset(loc.end, -2);
            templateValue = value === null ? null : value.slice(1, -2);
            endToken = new Token({
              type: getExportedToken(23),
              value: "${",
              start: templateElementEnd,
              end: end,
              startLoc: templateElementEndLoc,
              endLoc: loc.end
            });
          }
          tokens.splice(i, 1, startToken, new Token({
            type: getExportedToken(20),
            value: templateValue,
            start: backquoteEnd,
            end: templateElementEnd,
            startLoc: backquoteEndLoc,
            endLoc: templateElementEndLoc
          }), endToken);
          i += 2;
          continue;
        }
      }
      token.type = getExportedToken(type);
    }
  }
  return tokens;
}
class StatementParser extends ExpressionParser {
  parseTopLevel(file, program) {
    file.program = this.parseProgram(program);
    file.comments = this.comments;
    if (this.optionFlags & 256) {
      file.tokens = babel7CompatTokens(this.tokens, this.input, this.startIndex);
    }
    return this.finishNode(file, "File");
  }
  parseProgram(program, end = 140, sourceType = this.options.sourceType) {
    program.sourceType = sourceType;
    program.interpreter = this.parseInterpreterDirective();
    this.parseBlockBody(program, true, true, end);
    if (this.inModule) {
      if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0) {
        for (const [localName, at] of Array.from(this.scope.undefinedExports)) {
          this.raise(Errors.ModuleExportUndefined, at, {
            localName
          });
        }
      }
      this.addExtra(program, "topLevelAwait", this.state.hasTopLevelAwait);
    }
    let finishedProgram;
    if (end === 140) {
      finishedProgram = this.finishNode(program, "Program");
    } else {
      finishedProgram = this.finishNodeAt(program, "Program", createPositionWithColumnOffset(this.state.startLoc, -1));
    }
    return finishedProgram;
  }
  stmtToDirective(stmt) {
    const directive = stmt;
    directive.type = "Directive";
    directive.value = directive.expression;
    delete directive.expression;
    const directiveLiteral = directive.value;
    const expressionValue = directiveLiteral.value;
    const raw = this.input.slice(this.offsetToSourcePos(directiveLiteral.start), this.offsetToSourcePos(directiveLiteral.end));
    const val = directiveLiteral.value = raw.slice(1, -1);
    this.addExtra(directiveLiteral, "raw", raw);
    this.addExtra(directiveLiteral, "rawValue", val);
    this.addExtra(directiveLiteral, "expressionValue", expressionValue);
    directiveLiteral.type = "DirectiveLiteral";
    return directive;
  }
  parseInterpreterDirective() {
    if (!this.match(28)) {
      return null;
    }
    const node = this.startNode();
    node.value = this.state.value;
    this.next();
    return this.finishNode(node, "InterpreterDirective");
  }
  isLet() {
    if (!this.isContextual(100)) {
      return false;
    }
    return this.hasFollowingBindingAtom();
  }
  chStartsBindingIdentifier(ch, pos) {
    if (isIdentifierStart(ch)) {
      keywordRelationalOperator.lastIndex = pos;
      if (keywordRelationalOperator.test(this.input)) {
        const endCh = this.codePointAtPos(keywordRelationalOperator.lastIndex);
        if (!isIdentifierChar(endCh) && endCh !== 92) {
          return false;
        }
      }
      return true;
    } else if (ch === 92) {
      return true;
    } else {
      return false;
    }
  }
  chStartsBindingPattern(ch) {
    return ch === 91 || ch === 123;
  }
  hasFollowingBindingAtom() {
    const next = this.nextTokenStart();
    const nextCh = this.codePointAtPos(next);
    return this.chStartsBindingPattern(nextCh) || this.chStartsBindingIdentifier(nextCh, next);
  }
  hasInLineFollowingBindingIdentifierOrBrace() {
    const next = this.nextTokenInLineStart();
    const nextCh = this.codePointAtPos(next);
    return nextCh === 123 || this.chStartsBindingIdentifier(nextCh, next);
  }
  startsUsingForOf() {
    const {
      type,
      containsEsc
    } = this.lookahead();
    if (type === 102 && !containsEsc) {
      return false;
    } else if (tokenIsIdentifier(type) && !this.hasFollowingLineBreak()) {
      this.expectPlugin("explicitResourceManagement");
      return true;
    }
  }
  startsAwaitUsing() {
    let next = this.nextTokenInLineStart();
    if (this.isUnparsedContextual(next, "using")) {
      next = this.nextTokenInLineStartSince(next + 5);
      const nextCh = this.codePointAtPos(next);
      if (this.chStartsBindingIdentifier(nextCh, next)) {
        this.expectPlugin("explicitResourceManagement");
        return true;
      }
    }
    return false;
  }
  parseModuleItem() {
    return this.parseStatementLike(1 | 2 | 4 | 8);
  }
  parseStatementListItem() {
    return this.parseStatementLike(2 | 4 | (!this.options.annexB || this.state.strict ? 0 : 8));
  }
  parseStatementOrSloppyAnnexBFunctionDeclaration(allowLabeledFunction = false) {
    let flags = 0;
    if (this.options.annexB && !this.state.strict) {
      flags |= 4;
      if (allowLabeledFunction) {
        flags |= 8;
      }
    }
    return this.parseStatementLike(flags);
  }
  parseStatement() {
    return this.parseStatementLike(0);
  }
  parseStatementLike(flags) {
    let decorators = null;
    if (this.match(26)) {
      decorators = this.parseDecorators(true);
    }
    return this.parseStatementContent(flags, decorators);
  }
  parseStatementContent(flags, decorators) {
    const startType = this.state.type;
    const node = this.startNode();
    const allowDeclaration = !!(flags & 2);
    const allowFunctionDeclaration = !!(flags & 4);
    const topLevel = flags & 1;
    switch (startType) {
      case 60:
        return this.parseBreakContinueStatement(node, true);
      case 63:
        return this.parseBreakContinueStatement(node, false);
      case 64:
        return this.parseDebuggerStatement(node);
      case 90:
        return this.parseDoWhileStatement(node);
      case 91:
        return this.parseForStatement(node);
      case 68:
        if (this.lookaheadCharCode() === 46) break;
        if (!allowFunctionDeclaration) {
          this.raise(this.state.strict ? Errors.StrictFunction : this.options.annexB ? Errors.SloppyFunctionAnnexB : Errors.SloppyFunction, this.state.startLoc);
        }
        return this.parseFunctionStatement(node, false, !allowDeclaration && allowFunctionDeclaration);
      case 80:
        if (!allowDeclaration) this.unexpected();
        return this.parseClass(this.maybeTakeDecorators(decorators, node), true);
      case 69:
        return this.parseIfStatement(node);
      case 70:
        return this.parseReturnStatement(node);
      case 71:
        return this.parseSwitchStatement(node);
      case 72:
        return this.parseThrowStatement(node);
      case 73:
        return this.parseTryStatement(node);
      case 96:
        if (!this.state.containsEsc && this.startsAwaitUsing()) {
          if (!this.recordAwaitIfAllowed()) {
            this.raise(Errors.AwaitUsingNotInAsyncContext, node);
          } else if (!allowDeclaration) {
            this.raise(Errors.UnexpectedLexicalDeclaration, node);
          }
          this.next();
          return this.parseVarStatement(node, "await using");
        }
        break;
      case 107:
        if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace()) {
          break;
        }
        this.expectPlugin("explicitResourceManagement");
        if (!this.scope.inModule && this.scope.inTopLevel) {
          this.raise(Errors.UnexpectedUsingDeclaration, this.state.startLoc);
        } else if (!allowDeclaration) {
          this.raise(Errors.UnexpectedLexicalDeclaration, this.state.startLoc);
        }
        return this.parseVarStatement(node, "using");
      case 100:
        {
          if (this.state.containsEsc) {
            break;
          }
          const next = this.nextTokenStart();
          const nextCh = this.codePointAtPos(next);
          if (nextCh !== 91) {
            if (!allowDeclaration && this.hasFollowingLineBreak()) break;
            if (!this.chStartsBindingIdentifier(nextCh, next) && nextCh !== 123) {
              break;
            }
          }
        }
      case 75:
        {
          if (!allowDeclaration) {
            this.raise(Errors.UnexpectedLexicalDeclaration, this.state.startLoc);
          }
        }
      case 74:
        {
          const kind = this.state.value;
          return this.parseVarStatement(node, kind);
        }
      case 92:
        return this.parseWhileStatement(node);
      case 76:
        return this.parseWithStatement(node);
      case 5:
        return this.parseBlock();
      case 13:
        return this.parseEmptyStatement(node);
      case 83:
        {
          const nextTokenCharCode = this.lookaheadCharCode();
          if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
            break;
          }
        }
      case 82:
        {
          if (!(this.optionFlags & 8) && !topLevel) {
            this.raise(Errors.UnexpectedImportExport, this.state.startLoc);
          }
          this.next();
          let result;
          if (startType === 83) {
            result = this.parseImport(node);
          } else {
            result = this.parseExport(node, decorators);
          }
          this.assertModuleNodeAllowed(result);
          return result;
        }
      default:
        {
          if (this.isAsyncFunction()) {
            if (!allowDeclaration) {
              this.raise(Errors.AsyncFunctionInSingleStatementContext, this.state.startLoc);
            }
            this.next();
            return this.parseFunctionStatement(node, true, !allowDeclaration && allowFunctionDeclaration);
          }
        }
    }
    const maybeName = this.state.value;
    const expr = this.parseExpression();
    if (tokenIsIdentifier(startType) && expr.type === "Identifier" && this.eat(14)) {
      return this.parseLabeledStatement(node, maybeName, expr, flags);
    } else {
      return this.parseExpressionStatement(node, expr, decorators);
    }
  }
  assertModuleNodeAllowed(node) {
    if (!(this.optionFlags & 8) && !this.inModule) {
      this.raise(Errors.ImportOutsideModule, node);
    }
  }
  decoratorsEnabledBeforeExport() {
    if (this.hasPlugin("decorators-legacy")) return true;
    return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== false;
  }
  maybeTakeDecorators(maybeDecorators, classNode, exportNode) {
    if (maybeDecorators) {
      var _classNode$decorators;
      if ((_classNode$decorators = classNode.decorators) != null && _classNode$decorators.length) {
        if (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") !== "boolean") {
          this.raise(Errors.DecoratorsBeforeAfterExport, classNode.decorators[0]);
        }
        classNode.decorators.unshift(...maybeDecorators);
      } else {
        classNode.decorators = maybeDecorators;
      }
      this.resetStartLocationFromNode(classNode, maybeDecorators[0]);
      if (exportNode) this.resetStartLocationFromNode(exportNode, classNode);
    }
    return classNode;
  }
  canHaveLeadingDecorator() {
    return this.match(80);
  }
  parseDecorators(allowExport) {
    const decorators = [];
    do {
      decorators.push(this.parseDecorator());
    } while (this.match(26));
    if (this.match(82)) {
      if (!allowExport) {
        this.unexpected();
      }
      if (!this.decoratorsEnabledBeforeExport()) {
        this.raise(Errors.DecoratorExportClass, this.state.startLoc);
      }
    } else if (!this.canHaveLeadingDecorator()) {
      throw this.raise(Errors.UnexpectedLeadingDecorator, this.state.startLoc);
    }
    return decorators;
  }
  parseDecorator() {
    this.expectOnePlugin(["decorators", "decorators-legacy"]);
    const node = this.startNode();
    this.next();
    if (this.hasPlugin("decorators")) {
      const startLoc = this.state.startLoc;
      let expr;
      if (this.match(10)) {
        const startLoc = this.state.startLoc;
        this.next();
        expr = this.parseExpression();
        this.expect(11);
        expr = this.wrapParenthesis(startLoc, expr);
        const paramsStartLoc = this.state.startLoc;
        node.expression = this.parseMaybeDecoratorArguments(expr, startLoc);
        if (this.getPluginOption("decorators", "allowCallParenthesized") === false && node.expression !== expr) {
          this.raise(Errors.DecoratorArgumentsOutsideParentheses, paramsStartLoc);
        }
      } else {
        expr = this.parseIdentifier(false);
        while (this.eat(16)) {
          const node = this.startNodeAt(startLoc);
          node.object = expr;
          if (this.match(139)) {
            this.classScope.usePrivateName(this.state.value, this.state.startLoc);
            node.property = this.parsePrivateName();
          } else {
            node.property = this.parseIdentifier(true);
          }
          node.computed = false;
          expr = this.finishNode(node, "MemberExpression");
        }
        node.expression = this.parseMaybeDecoratorArguments(expr, startLoc);
      }
    } else {
      node.expression = this.parseExprSubscripts();
    }
    return this.finishNode(node, "Decorator");
  }
  parseMaybeDecoratorArguments(expr, startLoc) {
    if (this.eat(10)) {
      const node = this.startNodeAt(startLoc);
      node.callee = expr;
      node.arguments = this.parseCallExpressionArguments(11);
      this.toReferencedList(node.arguments);
      return this.finishNode(node, "CallExpression");
    }
    return expr;
  }
  parseBreakContinueStatement(node, isBreak) {
    this.next();
    if (this.isLineTerminator()) {
      node.label = null;
    } else {
      node.label = this.parseIdentifier();
      this.semicolon();
    }
    this.verifyBreakContinue(node, isBreak);
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  }
  verifyBreakContinue(node, isBreak) {
    let i;
    for (i = 0; i < this.state.labels.length; ++i) {
      const lab = this.state.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === 1)) {
          break;
        }
        if (node.label && isBreak) break;
      }
    }
    if (i === this.state.labels.length) {
      const type = isBreak ? "BreakStatement" : "ContinueStatement";
      this.raise(Errors.IllegalBreakContinue, node, {
        type
      });
    }
  }
  parseDebuggerStatement(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  }
  parseHeaderExpression() {
    this.expect(10);
    const val = this.parseExpression();
    this.expect(11);
    return val;
  }
  parseDoWhileStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
    this.state.labels.pop();
    this.expect(92);
    node.test = this.parseHeaderExpression();
    this.eat(13);
    return this.finishNode(node, "DoWhileStatement");
  }
  parseForStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    let awaitAt = null;
    if (this.isContextual(96) && this.recordAwaitIfAllowed()) {
      awaitAt = this.state.startLoc;
      this.next();
    }
    this.scope.enter(0);
    this.expect(10);
    if (this.match(13)) {
      if (awaitAt !== null) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node, null);
    }
    const startsWithLet = this.isContextual(100);
    {
      const startsWithAwaitUsing = this.isContextual(96) && this.startsAwaitUsing();
      const starsWithUsingDeclaration = startsWithAwaitUsing || this.isContextual(107) && this.startsUsingForOf();
      const isLetOrUsing = startsWithLet && this.hasFollowingBindingAtom() || starsWithUsingDeclaration;
      if (this.match(74) || this.match(75) || isLetOrUsing) {
        const initNode = this.startNode();
        let kind;
        if (startsWithAwaitUsing) {
          kind = "await using";
          if (!this.recordAwaitIfAllowed()) {
            this.raise(Errors.AwaitUsingNotInAsyncContext, this.state.startLoc);
          }
          this.next();
        } else {
          kind = this.state.value;
        }
        this.next();
        this.parseVar(initNode, true, kind);
        const init = this.finishNode(initNode, "VariableDeclaration");
        const isForIn = this.match(58);
        if (isForIn && starsWithUsingDeclaration) {
          this.raise(Errors.ForInUsing, init);
        }
        if ((isForIn || this.isContextual(102)) && init.declarations.length === 1) {
          return this.parseForIn(node, init, awaitAt);
        }
        if (awaitAt !== null) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      }
    }
    const startsWithAsync = this.isContextual(95);
    const refExpressionErrors = new ExpressionErrors();
    const init = this.parseExpression(true, refExpressionErrors);
    const isForOf = this.isContextual(102);
    if (isForOf) {
      if (startsWithLet) {
        this.raise(Errors.ForOfLet, init);
      }
      if (awaitAt === null && startsWithAsync && init.type === "Identifier") {
        this.raise(Errors.ForOfAsync, init);
      }
    }
    if (isForOf || this.match(58)) {
      this.checkDestructuringPrivate(refExpressionErrors);
      this.toAssignable(init, true);
      const type = isForOf ? "ForOfStatement" : "ForInStatement";
      this.checkLVal(init, {
        type
      });
      return this.parseForIn(node, init, awaitAt);
    } else {
      this.checkExpressionErrors(refExpressionErrors, true);
    }
    if (awaitAt !== null) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init);
  }
  parseFunctionStatement(node, isAsync, isHangingDeclaration) {
    this.next();
    return this.parseFunction(node, 1 | (isHangingDeclaration ? 2 : 0) | (isAsync ? 8 : 0));
  }
  parseIfStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    node.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration();
    node.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null;
    return this.finishNode(node, "IfStatement");
  }
  parseReturnStatement(node) {
    if (!this.prodParam.hasReturn && !(this.optionFlags & 2)) {
      this.raise(Errors.IllegalReturn, this.state.startLoc);
    }
    this.next();
    if (this.isLineTerminator()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }
    return this.finishNode(node, "ReturnStatement");
  }
  parseSwitchStatement(node) {
    this.next();
    node.discriminant = this.parseHeaderExpression();
    const cases = node.cases = [];
    this.expect(5);
    this.state.labels.push(switchLabel);
    this.scope.enter(0);
    let cur;
    for (let sawDefault; !this.match(8);) {
      if (this.match(61) || this.match(65)) {
        const isCase = this.match(61);
        if (cur) this.finishNode(cur, "SwitchCase");
        cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raise(Errors.MultipleDefaultsInSwitch, this.state.lastTokStartLoc);
          }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(14);
      } else {
        if (cur) {
          cur.consequent.push(this.parseStatementListItem());
        } else {
          this.unexpected();
        }
      }
    }
    this.scope.exit();
    if (cur) this.finishNode(cur, "SwitchCase");
    this.next();
    this.state.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  }
  parseThrowStatement(node) {
    this.next();
    if (this.hasPrecedingLineBreak()) {
      this.raise(Errors.NewlineAfterThrow, this.state.lastTokEndLoc);
    }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  }
  parseCatchClauseParam() {
    const param = this.parseBindingAtom();
    this.scope.enter(this.options.annexB && param.type === "Identifier" ? 8 : 0);
    this.checkLVal(param, {
      type: "CatchClause"
    }, 9);
    return param;
  }
  parseTryStatement(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.match(62)) {
      const clause = this.startNode();
      this.next();
      if (this.match(10)) {
        this.expect(10);
        clause.param = this.parseCatchClauseParam();
        this.expect(11);
      } else {
        clause.param = null;
        this.scope.enter(0);
      }
      clause.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false));
      this.scope.exit();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(67) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer) {
      this.raise(Errors.NoCatchOrFinally, node);
    }
    return this.finishNode(node, "TryStatement");
  }
  parseVarStatement(node, kind, allowMissingInitializer = false) {
    this.next();
    this.parseVar(node, false, kind, allowMissingInitializer);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  }
  parseWhileStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    this.state.labels.push(loopLabel);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
    this.state.labels.pop();
    return this.finishNode(node, "WhileStatement");
  }
  parseWithStatement(node) {
    if (this.state.strict) {
      this.raise(Errors.StrictWith, this.state.startLoc);
    }
    this.next();
    node.object = this.parseHeaderExpression();
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
    return this.finishNode(node, "WithStatement");
  }
  parseEmptyStatement(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  }
  parseLabeledStatement(node, maybeName, expr, flags) {
    for (const label of this.state.labels) {
      if (label.name === maybeName) {
        this.raise(Errors.LabelRedeclaration, expr, {
          labelName: maybeName
        });
      }
    }
    const kind = tokenIsLoop(this.state.type) ? 1 : this.match(71) ? 2 : null;
    for (let i = this.state.labels.length - 1; i >= 0; i--) {
      const label = this.state.labels[i];
      if (label.statementStart === node.start) {
        label.statementStart = this.sourceToOffsetPos(this.state.start);
        label.kind = kind;
      } else {
        break;
      }
    }
    this.state.labels.push({
      name: maybeName,
      kind: kind,
      statementStart: this.sourceToOffsetPos(this.state.start)
    });
    node.body = flags & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(true) : this.parseStatement();
    this.state.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  }
  parseExpressionStatement(node, expr, decorators) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  }
  parseBlock(allowDirectives = false, createNewLexicalScope = true, afterBlockParse) {
    const node = this.startNode();
    if (allowDirectives) {
      this.state.strictErrors.clear();
    }
    this.expect(5);
    if (createNewLexicalScope) {
      this.scope.enter(0);
    }
    this.parseBlockBody(node, allowDirectives, false, 8, afterBlockParse);
    if (createNewLexicalScope) {
      this.scope.exit();
    }
    return this.finishNode(node, "BlockStatement");
  }
  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
  }
  parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
    const body = node.body = [];
    const directives = node.directives = [];
    this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end, afterBlockParse);
  }
  parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
    const oldStrict = this.state.strict;
    let hasStrictModeDirective = false;
    let parsedNonDirective = false;
    while (!this.match(end)) {
      const stmt = topLevel ? this.parseModuleItem() : this.parseStatementListItem();
      if (directives && !parsedNonDirective) {
        if (this.isValidDirective(stmt)) {
          const directive = this.stmtToDirective(stmt);
          directives.push(directive);
          if (!hasStrictModeDirective && directive.value.value === "use strict") {
            hasStrictModeDirective = true;
            this.setStrict(true);
          }
          continue;
        }
        parsedNonDirective = true;
        this.state.strictErrors.clear();
      }
      body.push(stmt);
    }
    afterBlockParse == null || afterBlockParse.call(this, hasStrictModeDirective);
    if (!oldStrict) {
      this.setStrict(false);
    }
    this.next();
  }
  parseFor(node, init) {
    node.init = init;
    this.semicolon(false);
    node.test = this.match(13) ? null : this.parseExpression();
    this.semicolon(false);
    node.update = this.match(11) ? null : this.parseExpression();
    this.expect(11);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, "ForStatement");
  }
  parseForIn(node, init, awaitAt) {
    const isForIn = this.match(58);
    this.next();
    if (isForIn) {
      if (awaitAt !== null) this.unexpected(awaitAt);
    } else {
      node.await = awaitAt !== null;
    }
    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || !this.options.annexB || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(Errors.ForInOfLoopInitializer, init, {
        type: isForIn ? "ForInStatement" : "ForOfStatement"
      });
    }
    if (init.type === "AssignmentPattern") {
      this.raise(Errors.InvalidLhs, init, {
        ancestor: {
          type: "ForStatement"
        }
      });
    }
    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
    this.expect(11);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
  }
  parseVar(node, isFor, kind, allowMissingInitializer = false) {
    const declarations = node.declarations = [];
    node.kind = kind;
    for (;;) {
      const decl = this.startNode();
      this.parseVarId(decl, kind);
      decl.init = !this.eat(29) ? null : isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
      if (decl.init === null && !allowMissingInitializer) {
        if (decl.id.type !== "Identifier" && !(isFor && (this.match(58) || this.isContextual(102)))) {
          this.raise(Errors.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
            kind: "destructuring"
          });
        } else if ((kind === "const" || kind === "using" || kind === "await using") && !(this.match(58) || this.isContextual(102))) {
          this.raise(Errors.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
            kind
          });
        }
      }
      declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(12)) break;
    }
    return node;
  }
  parseVarId(decl, kind) {
    const id = this.parseBindingAtom();
    if (kind === "using" || kind === "await using") {
      if (id.type === "ArrayPattern" || id.type === "ObjectPattern") {
        this.raise(Errors.UsingDeclarationHasBindingPattern, id.loc.start);
      }
    }
    this.checkLVal(id, {
      type: "VariableDeclarator"
    }, kind === "var" ? 5 : 8201);
    decl.id = id;
  }
  parseAsyncFunctionExpression(node) {
    return this.parseFunction(node, 8);
  }
  parseFunction(node, flags = 0) {
    const hangingDeclaration = flags & 2;
    const isDeclaration = !!(flags & 1);
    const requireId = isDeclaration && !(flags & 4);
    const isAsync = !!(flags & 8);
    this.initFunction(node, isAsync);
    if (this.match(55)) {
      if (hangingDeclaration) {
        this.raise(Errors.GeneratorInSingleStatementContext, this.state.startLoc);
      }
      this.next();
      node.generator = true;
    }
    if (isDeclaration) {
      node.id = this.parseFunctionId(requireId);
    }
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = false;
    this.scope.enter(2);
    this.prodParam.enter(functionFlags(isAsync, node.generator));
    if (!isDeclaration) {
      node.id = this.parseFunctionId();
    }
    this.parseFunctionParams(node, false);
    this.withSmartMixTopicForbiddingContext(() => {
      this.parseFunctionBodyAndFinish(node, isDeclaration ? "FunctionDeclaration" : "FunctionExpression");
    });
    this.prodParam.exit();
    this.scope.exit();
    if (isDeclaration && !hangingDeclaration) {
      this.registerFunctionStatementId(node);
    }
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return node;
  }
  parseFunctionId(requireId) {
    return requireId || tokenIsIdentifier(this.state.type) ? this.parseIdentifier() : null;
  }
  parseFunctionParams(node, isConstructor) {
    this.expect(10);
    this.expressionScope.enter(newParameterDeclarationScope());
    node.params = this.parseBindingList(11, 41, 2 | (isConstructor ? 4 : 0));
    this.expressionScope.exit();
  }
  registerFunctionStatementId(node) {
    if (!node.id) return;
    this.scope.declareName(node.id.name, !this.options.annexB || this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, node.id.loc.start);
  }
  parseClass(node, isStatement, optionalId) {
    this.next();
    const oldStrict = this.state.strict;
    this.state.strict = true;
    this.parseClassId(node, isStatement, optionalId);
    this.parseClassSuper(node);
    node.body = this.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  }
  isClassProperty() {
    return this.match(29) || this.match(13) || this.match(8);
  }
  isClassMethod() {
    return this.match(10);
  }
  nameIsConstructor(key) {
    return key.type === "Identifier" && key.name === "constructor" || key.type === "StringLiteral" && key.value === "constructor";
  }
  isNonstaticConstructor(method) {
    return !method.computed && !method.static && this.nameIsConstructor(method.key);
  }
  parseClassBody(hadSuperClass, oldStrict) {
    this.classScope.enter();
    const state = {
      hadConstructor: false,
      hadSuperClass
    };
    let decorators = [];
    const classBody = this.startNode();
    classBody.body = [];
    this.expect(5);
    this.withSmartMixTopicForbiddingContext(() => {
      while (!this.match(8)) {
        if (this.eat(13)) {
          if (decorators.length > 0) {
            throw this.raise(Errors.DecoratorSemicolon, this.state.lastTokEndLoc);
          }
          continue;
        }
        if (this.match(26)) {
          decorators.push(this.parseDecorator());
          continue;
        }
        const member = this.startNode();
        if (decorators.length) {
          member.decorators = decorators;
          this.resetStartLocationFromNode(member, decorators[0]);
          decorators = [];
        }
        this.parseClassMember(classBody, member, state);
        if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
          this.raise(Errors.DecoratorConstructor, member);
        }
      }
    });
    this.state.strict = oldStrict;
    this.next();
    if (decorators.length) {
      throw this.raise(Errors.TrailingDecorator, this.state.startLoc);
    }
    this.classScope.exit();
    return this.finishNode(classBody, "ClassBody");
  }
  parseClassMemberFromModifier(classBody, member) {
    const key = this.parseIdentifier(true);
    if (this.isClassMethod()) {
      const method = member;
      method.kind = "method";
      method.computed = false;
      method.key = key;
      method.static = false;
      this.pushClassMethod(classBody, method, false, false, false, false);
      return true;
    } else if (this.isClassProperty()) {
      const prop = member;
      prop.computed = false;
      prop.key = key;
      prop.static = false;
      classBody.body.push(this.parseClassProperty(prop));
      return true;
    }
    this.resetPreviousNodeTrailingComments(key);
    return false;
  }
  parseClassMember(classBody, member, state) {
    const isStatic = this.isContextual(106);
    if (isStatic) {
      if (this.parseClassMemberFromModifier(classBody, member)) {
        return;
      }
      if (this.eat(5)) {
        this.parseClassStaticBlock(classBody, member);
        return;
      }
    }
    this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }
  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const publicMethod = member;
    const privateMethod = member;
    const publicProp = member;
    const privateProp = member;
    const accessorProp = member;
    const method = publicMethod;
    const publicMember = publicMethod;
    member.static = isStatic;
    this.parsePropertyNamePrefixOperator(member);
    if (this.eat(55)) {
      method.kind = "method";
      const isPrivateName = this.match(139);
      this.parseClassElementName(method);
      if (isPrivateName) {
        this.pushClassPrivateMethod(classBody, privateMethod, true, false);
        return;
      }
      if (this.isNonstaticConstructor(publicMethod)) {
        this.raise(Errors.ConstructorIsGenerator, publicMethod.key);
      }
      this.pushClassMethod(classBody, publicMethod, true, false, false, false);
      return;
    }
    const isContextual = !this.state.containsEsc && tokenIsIdentifier(this.state.type);
    const key = this.parseClassElementName(member);
    const maybeContextualKw = isContextual ? key.name : null;
    const isPrivate = this.isPrivateName(key);
    const maybeQuestionTokenStartLoc = this.state.startLoc;
    this.parsePostMemberNameModifiers(publicMember);
    if (this.isClassMethod()) {
      method.kind = "method";
      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        return;
      }
      const isConstructor = this.isNonstaticConstructor(publicMethod);
      let allowsDirectSuper = false;
      if (isConstructor) {
        publicMethod.kind = "constructor";
        if (state.hadConstructor && !this.hasPlugin("typescript")) {
          this.raise(Errors.DuplicateConstructor, key);
        }
        if (isConstructor && this.hasPlugin("typescript") && member.override) {
          this.raise(Errors.OverrideOnConstructor, key);
        }
        state.hadConstructor = true;
        allowsDirectSuper = state.hadSuperClass;
      }
      this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
    } else if (this.isClassProperty()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else if (maybeContextualKw === "async" && !this.isLineTerminator()) {
      this.resetPreviousNodeTrailingComments(key);
      const isGenerator = this.eat(55);
      if (publicMember.optional) {
        this.unexpected(maybeQuestionTokenStartLoc);
      }
      method.kind = "method";
      const isPrivate = this.match(139);
      this.parseClassElementName(method);
      this.parsePostMemberNameModifiers(publicMember);
      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(Errors.ConstructorIsAsync, publicMethod.key);
        }
        this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
      }
    } else if ((maybeContextualKw === "get" || maybeContextualKw === "set") && !(this.match(55) && this.isLineTerminator())) {
      this.resetPreviousNodeTrailingComments(key);
      method.kind = maybeContextualKw;
      const isPrivate = this.match(139);
      this.parseClassElementName(publicMethod);
      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(Errors.ConstructorIsAccessor, publicMethod.key);
        }
        this.pushClassMethod(classBody, publicMethod, false, false, false, false);
      }
      this.checkGetterSetterParams(publicMethod);
    } else if (maybeContextualKw === "accessor" && !this.isLineTerminator()) {
      this.expectPlugin("decoratorAutoAccessors");
      this.resetPreviousNodeTrailingComments(key);
      const isPrivate = this.match(139);
      this.parseClassElementName(publicProp);
      this.pushClassAccessorProperty(classBody, accessorProp, isPrivate);
    } else if (this.isLineTerminator()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else {
      this.unexpected();
    }
  }
  parseClassElementName(member) {
    const {
      type,
      value
    } = this.state;
    if ((type === 132 || type === 134) && member.static && value === "prototype") {
      this.raise(Errors.StaticPrototype, this.state.startLoc);
    }
    if (type === 139) {
      if (value === "constructor") {
        this.raise(Errors.ConstructorClassPrivateField, this.state.startLoc);
      }
      const key = this.parsePrivateName();
      member.key = key;
      return key;
    }
    this.parsePropertyName(member);
    return member.key;
  }
  parseClassStaticBlock(classBody, member) {
    var _member$decorators;
    this.scope.enter(64 | 128 | 16);
    const oldLabels = this.state.labels;
    this.state.labels = [];
    this.prodParam.enter(0);
    const body = member.body = [];
    this.parseBlockOrModuleBlockBody(body, undefined, false, 8);
    this.prodParam.exit();
    this.scope.exit();
    this.state.labels = oldLabels;
    classBody.body.push(this.finishNode(member, "StaticBlock"));
    if ((_member$decorators = member.decorators) != null && _member$decorators.length) {
      this.raise(Errors.DecoratorStaticBlock, member);
    }
  }
  pushClassProperty(classBody, prop) {
    if (!prop.computed && this.nameIsConstructor(prop.key)) {
      this.raise(Errors.ConstructorClassField, prop.key);
    }
    classBody.body.push(this.parseClassProperty(prop));
  }
  pushClassPrivateProperty(classBody, prop) {
    const node = this.parseClassPrivateProperty(prop);
    classBody.body.push(node);
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), 0, node.key.loc.start);
  }
  pushClassAccessorProperty(classBody, prop, isPrivate) {
    if (!isPrivate && !prop.computed && this.nameIsConstructor(prop.key)) {
      this.raise(Errors.ConstructorClassField, prop.key);
    }
    const node = this.parseClassAccessorProperty(prop);
    classBody.body.push(node);
    if (isPrivate) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), 0, node.key.loc.start);
    }
  }
  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
  }
  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
    classBody.body.push(node);
    const kind = node.kind === "get" ? node.static ? 6 : 2 : node.kind === "set" ? node.static ? 5 : 1 : 0;
    this.declareClassPrivateMethodInScope(node, kind);
  }
  declareClassPrivateMethodInScope(node, kind) {
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), kind, node.key.loc.start);
  }
  parsePostMemberNameModifiers(methodOrProp) {}
  parseClassPrivateProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassPrivateProperty");
  }
  parseClassProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassProperty");
  }
  parseClassAccessorProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassAccessorProperty");
  }
  parseInitializer(node) {
    this.scope.enter(64 | 16);
    this.expressionScope.enter(newExpressionScope());
    this.prodParam.enter(0);
    node.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null;
    this.expressionScope.exit();
    this.prodParam.exit();
    this.scope.exit();
  }
  parseClassId(node, isStatement, optionalId, bindingType = 8331) {
    if (tokenIsIdentifier(this.state.type)) {
      node.id = this.parseIdentifier();
      if (isStatement) {
        this.declareNameFromIdentifier(node.id, bindingType);
      }
    } else {
      if (optionalId || !isStatement) {
        node.id = null;
      } else {
        throw this.raise(Errors.MissingClassName, this.state.startLoc);
      }
    }
  }
  parseClassSuper(node) {
    node.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
  }
  parseExport(node, decorators) {
    const maybeDefaultIdentifier = this.parseMaybeImportPhase(node, true);
    const hasDefault = this.maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier);
    const parseAfterDefault = !hasDefault || this.eat(12);
    const hasStar = parseAfterDefault && this.eatExportStar(node);
    const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
    const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(12));
    const isFromRequired = hasDefault || hasStar;
    if (hasStar && !hasNamespace) {
      if (hasDefault) this.unexpected();
      if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.parseExportFrom(node, true);
      this.sawUnambiguousESM = true;
      return this.finishNode(node, "ExportAllDeclaration");
    }
    const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);
    if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers) {
      this.unexpected(null, 5);
    }
    if (hasNamespace && parseAfterNamespace) {
      this.unexpected(null, 98);
    }
    let hasDeclaration;
    if (isFromRequired || hasSpecifiers) {
      hasDeclaration = false;
      if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.parseExportFrom(node, isFromRequired);
    } else {
      hasDeclaration = this.maybeParseExportDeclaration(node);
    }
    if (isFromRequired || hasSpecifiers || hasDeclaration) {
      var _node2$declaration;
      const node2 = node;
      this.checkExport(node2, true, false, !!node2.source);
      if (((_node2$declaration = node2.declaration) == null ? void 0 : _node2$declaration.type) === "ClassDeclaration") {
        this.maybeTakeDecorators(decorators, node2.declaration, node2);
      } else if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.sawUnambiguousESM = true;
      return this.finishNode(node2, "ExportNamedDeclaration");
    }
    if (this.eat(65)) {
      const node2 = node;
      const decl = this.parseExportDefaultExpression();
      node2.declaration = decl;
      if (decl.type === "ClassDeclaration") {
        this.maybeTakeDecorators(decorators, decl, node2);
      } else if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.checkExport(node2, true, true);
      this.sawUnambiguousESM = true;
      return this.finishNode(node2, "ExportDefaultDeclaration");
    }
    this.unexpected(null, 5);
  }
  eatExportStar(node) {
    return this.eat(55);
  }
  maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier) {
    if (maybeDefaultIdentifier || this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom", maybeDefaultIdentifier == null ? void 0 : maybeDefaultIdentifier.loc.start);
      const id = maybeDefaultIdentifier || this.parseIdentifier(true);
      const specifier = this.startNodeAtNode(id);
      specifier.exported = id;
      node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      return true;
    }
    return false;
  }
  maybeParseExportNamespaceSpecifier(node) {
    if (this.isContextual(93)) {
      var _ref, _ref$specifiers;
      (_ref$specifiers = (_ref = node).specifiers) != null ? _ref$specifiers : _ref.specifiers = [];
      const specifier = this.startNodeAt(this.state.lastTokStartLoc);
      this.next();
      specifier.exported = this.parseModuleExportName();
      node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
      return true;
    }
    return false;
  }
  maybeParseExportNamedSpecifiers(node) {
    if (this.match(5)) {
      const node2 = node;
      if (!node2.specifiers) node2.specifiers = [];
      const isTypeExport = node2.exportKind === "type";
      node2.specifiers.push(...this.parseExportSpecifiers(isTypeExport));
      node2.source = null;
      if (this.hasPlugin("importAssertions")) {
        node2.assertions = [];
      } else {
        node2.attributes = [];
      }
      node2.declaration = null;
      return true;
    }
    return false;
  }
  maybeParseExportDeclaration(node) {
    if (this.shouldParseExportDeclaration()) {
      node.specifiers = [];
      node.source = null;
      if (this.hasPlugin("importAssertions")) {
        node.assertions = [];
      } else {
        node.attributes = [];
      }
      node.declaration = this.parseExportDeclaration(node);
      return true;
    }
    return false;
  }
  isAsyncFunction() {
    if (!this.isContextual(95)) return false;
    const next = this.nextTokenInLineStart();
    return this.isUnparsedContextual(next, "function");
  }
  parseExportDefaultExpression() {
    const expr = this.startNode();
    if (this.match(68)) {
      this.next();
      return this.parseFunction(expr, 1 | 4);
    } else if (this.isAsyncFunction()) {
      this.next();
      this.next();
      return this.parseFunction(expr, 1 | 4 | 8);
    }
    if (this.match(80)) {
      return this.parseClass(expr, true, true);
    }
    if (this.match(26)) {
      if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === true) {
        this.raise(Errors.DecoratorBeforeExport, this.state.startLoc);
      }
      return this.parseClass(this.maybeTakeDecorators(this.parseDecorators(false), this.startNode()), true, true);
    }
    if (this.match(75) || this.match(74) || this.isLet()) {
      throw this.raise(Errors.UnsupportedDefaultExport, this.state.startLoc);
    }
    const res = this.parseMaybeAssignAllowIn();
    this.semicolon();
    return res;
  }
  parseExportDeclaration(node) {
    if (this.match(80)) {
      const node = this.parseClass(this.startNode(), true, false);
      return node;
    }
    return this.parseStatementListItem();
  }
  isExportDefaultSpecifier() {
    const {
      type
    } = this.state;
    if (tokenIsIdentifier(type)) {
      if (type === 95 && !this.state.containsEsc || type === 100) {
        return false;
      }
      if ((type === 130 || type === 129) && !this.state.containsEsc) {
        const {
          type: nextType
        } = this.lookahead();
        if (tokenIsIdentifier(nextType) && nextType !== 98 || nextType === 5) {
          this.expectOnePlugin(["flow", "typescript"]);
          return false;
        }
      }
    } else if (!this.match(65)) {
      return false;
    }
    const next = this.nextTokenStart();
    const hasFrom = this.isUnparsedContextual(next, "from");
    if (this.input.charCodeAt(next) === 44 || tokenIsIdentifier(this.state.type) && hasFrom) {
      return true;
    }
    if (this.match(65) && hasFrom) {
      const nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
      return nextAfterFrom === 34 || nextAfterFrom === 39;
    }
    return false;
  }
  parseExportFrom(node, expect) {
    if (this.eatContextual(98)) {
      node.source = this.parseImportSource();
      this.checkExport(node);
      this.maybeParseImportAttributes(node);
      this.checkJSONModuleImport(node);
    } else if (expect) {
      this.unexpected();
    }
    this.semicolon();
  }
  shouldParseExportDeclaration() {
    const {
      type
    } = this.state;
    if (type === 26) {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      if (this.hasPlugin("decorators")) {
        if (this.getPluginOption("decorators", "decoratorsBeforeExport") === true) {
          this.raise(Errors.DecoratorBeforeExport, this.state.startLoc);
        }
        return true;
      }
    }
    if (this.isContextual(107)) {
      this.raise(Errors.UsingDeclarationExport, this.state.startLoc);
      return true;
    }
    if (this.isContextual(96) && this.startsAwaitUsing()) {
      this.raise(Errors.UsingDeclarationExport, this.state.startLoc);
      return true;
    }
    return type === 74 || type === 75 || type === 68 || type === 80 || this.isLet() || this.isAsyncFunction();
  }
  checkExport(node, checkNames, isDefault, isFrom) {
    if (checkNames) {
      var _node$specifiers;
      if (isDefault) {
        this.checkDuplicateExports(node, "default");
        if (this.hasPlugin("exportDefaultFrom")) {
          var _declaration$extra;
          const declaration = node.declaration;
          if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !((_declaration$extra = declaration.extra) != null && _declaration$extra.parenthesized)) {
            this.raise(Errors.ExportDefaultFromAsIdentifier, declaration);
          }
        }
      } else if ((_node$specifiers = node.specifiers) != null && _node$specifiers.length) {
        for (const specifier of node.specifiers) {
          const {
            exported
          } = specifier;
          const exportName = exported.type === "Identifier" ? exported.name : exported.value;
          this.checkDuplicateExports(specifier, exportName);
          if (!isFrom && specifier.local) {
            const {
              local
            } = specifier;
            if (local.type !== "Identifier") {
              this.raise(Errors.ExportBindingIsString, specifier, {
                localName: local.value,
                exportName
              });
            } else {
              this.checkReservedWord(local.name, local.loc.start, true, false);
              this.scope.checkLocalExport(local);
            }
          }
        }
      } else if (node.declaration) {
        const decl = node.declaration;
        if (decl.type === "FunctionDeclaration" || decl.type === "ClassDeclaration") {
          const {
            id
          } = decl;
          if (!id) throw new Error("Assertion failure");
          this.checkDuplicateExports(node, id.name);
        } else if (decl.type === "VariableDeclaration") {
          for (const declaration of decl.declarations) {
            this.checkDeclaration(declaration.id);
          }
        }
      }
    }
  }
  checkDeclaration(node) {
    if (node.type === "Identifier") {
      this.checkDuplicateExports(node, node.name);
    } else if (node.type === "ObjectPattern") {
      for (const prop of node.properties) {
        this.checkDeclaration(prop);
      }
    } else if (node.type === "ArrayPattern") {
      for (const elem of node.elements) {
        if (elem) {
          this.checkDeclaration(elem);
        }
      }
    } else if (node.type === "ObjectProperty") {
      this.checkDeclaration(node.value);
    } else if (node.type === "RestElement") {
      this.checkDeclaration(node.argument);
    } else if (node.type === "AssignmentPattern") {
      this.checkDeclaration(node.left);
    }
  }
  checkDuplicateExports(node, exportName) {
    if (this.exportedIdentifiers.has(exportName)) {
      if (exportName === "default") {
        this.raise(Errors.DuplicateDefaultExport, node);
      } else {
        this.raise(Errors.DuplicateExport, node, {
          exportName
        });
      }
    }
    this.exportedIdentifiers.add(exportName);
  }
  parseExportSpecifiers(isInTypeExport) {
    const nodes = [];
    let first = true;
    this.expect(5);
    while (!this.eat(8)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
        if (this.eat(8)) break;
      }
      const isMaybeTypeOnly = this.isContextual(130);
      const isString = this.match(134);
      const node = this.startNode();
      node.local = this.parseModuleExportName();
      nodes.push(this.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly));
    }
    return nodes;
  }
  parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
    if (this.eatContextual(93)) {
      node.exported = this.parseModuleExportName();
    } else if (isString) {
      node.exported = cloneStringLiteral(node.local);
    } else if (!node.exported) {
      node.exported = cloneIdentifier(node.local);
    }
    return this.finishNode(node, "ExportSpecifier");
  }
  parseModuleExportName() {
    if (this.match(134)) {
      const result = this.parseStringLiteral(this.state.value);
      const surrogate = loneSurrogate.exec(result.value);
      if (surrogate) {
        this.raise(Errors.ModuleExportNameHasLoneSurrogate, result, {
          surrogateCharCode: surrogate[0].charCodeAt(0)
        });
      }
      return result;
    }
    return this.parseIdentifier(true);
  }
  isJSONModuleImport(node) {
    if (node.assertions != null) {
      return node.assertions.some(({
        key,
        value
      }) => {
        return value.value === "json" && (key.type === "Identifier" ? key.name === "type" : key.value === "type");
      });
    }
    return false;
  }
  checkImportReflection(node) {
    const {
      specifiers
    } = node;
    const singleBindingType = specifiers.length === 1 ? specifiers[0].type : null;
    if (node.phase === "source") {
      if (singleBindingType !== "ImportDefaultSpecifier") {
        this.raise(Errors.SourcePhaseImportRequiresDefault, specifiers[0].loc.start);
      }
    } else if (node.phase === "defer") {
      if (singleBindingType !== "ImportNamespaceSpecifier") {
        this.raise(Errors.DeferImportRequiresNamespace, specifiers[0].loc.start);
      }
    } else if (node.module) {
      var _node$assertions;
      if (singleBindingType !== "ImportDefaultSpecifier") {
        this.raise(Errors.ImportReflectionNotBinding, specifiers[0].loc.start);
      }
      if (((_node$assertions = node.assertions) == null ? void 0 : _node$assertions.length) > 0) {
        this.raise(Errors.ImportReflectionHasAssertion, specifiers[0].loc.start);
      }
    }
  }
  checkJSONModuleImport(node) {
    if (this.isJSONModuleImport(node) && node.type !== "ExportAllDeclaration") {
      const {
        specifiers
      } = node;
      if (specifiers != null) {
        const nonDefaultNamedSpecifier = specifiers.find(specifier => {
          let imported;
          if (specifier.type === "ExportSpecifier") {
            imported = specifier.local;
          } else if (specifier.type === "ImportSpecifier") {
            imported = specifier.imported;
          }
          if (imported !== undefined) {
            return imported.type === "Identifier" ? imported.name !== "default" : imported.value !== "default";
          }
        });
        if (nonDefaultNamedSpecifier !== undefined) {
          this.raise(Errors.ImportJSONBindingNotDefault, nonDefaultNamedSpecifier.loc.start);
        }
      }
    }
  }
  isPotentialImportPhase(isExport) {
    if (isExport) return false;
    return this.isContextual(105) || this.isContextual(97) || this.isContextual(127);
  }
  applyImportPhase(node, isExport, phase, loc) {
    if (isExport) {
      return;
    }
    if (phase === "module") {
      this.expectPlugin("importReflection", loc);
      node.module = true;
    } else if (this.hasPlugin("importReflection")) {
      node.module = false;
    }
    if (phase === "source") {
      this.expectPlugin("sourcePhaseImports", loc);
      node.phase = "source";
    } else if (phase === "defer") {
      this.expectPlugin("deferredImportEvaluation", loc);
      node.phase = "defer";
    } else if (this.hasPlugin("sourcePhaseImports")) {
      node.phase = null;
    }
  }
  parseMaybeImportPhase(node, isExport) {
    if (!this.isPotentialImportPhase(isExport)) {
      this.applyImportPhase(node, isExport, null);
      return null;
    }
    const phaseIdentifier = this.parseIdentifier(true);
    const {
      type
    } = this.state;
    const isImportPhase = tokenIsKeywordOrIdentifier(type) ? type !== 98 || this.lookaheadCharCode() === 102 : type !== 12;
    if (isImportPhase) {
      this.resetPreviousIdentifierLeadingComments(phaseIdentifier);
      this.applyImportPhase(node, isExport, phaseIdentifier.name, phaseIdentifier.loc.start);
      return null;
    } else {
      this.applyImportPhase(node, isExport, null);
      return phaseIdentifier;
    }
  }
  isPrecedingIdImportPhase(phase) {
    const {
      type
    } = this.state;
    return tokenIsIdentifier(type) ? type !== 98 || this.lookaheadCharCode() === 102 : type !== 12;
  }
  parseImport(node) {
    if (this.match(134)) {
      return this.parseImportSourceAndAttributes(node);
    }
    return this.parseImportSpecifiersAndAfter(node, this.parseMaybeImportPhase(node, false));
  }
  parseImportSpecifiersAndAfter(node, maybeDefaultIdentifier) {
    node.specifiers = [];
    const hasDefault = this.maybeParseDefaultImportSpecifier(node, maybeDefaultIdentifier);
    const parseNext = !hasDefault || this.eat(12);
    const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
    if (parseNext && !hasStar) this.parseNamedImportSpecifiers(node);
    this.expectContextual(98);
    return this.parseImportSourceAndAttributes(node);
  }
  parseImportSourceAndAttributes(node) {
    var _node$specifiers2;
    (_node$specifiers2 = node.specifiers) != null ? _node$specifiers2 : node.specifiers = [];
    node.source = this.parseImportSource();
    this.maybeParseImportAttributes(node);
    this.checkImportReflection(node);
    this.checkJSONModuleImport(node);
    this.semicolon();
    this.sawUnambiguousESM = true;
    return this.finishNode(node, "ImportDeclaration");
  }
  parseImportSource() {
    if (!this.match(134)) this.unexpected();
    return this.parseExprAtom();
  }
  parseImportSpecifierLocal(node, specifier, type) {
    specifier.local = this.parseIdentifier();
    node.specifiers.push(this.finishImportSpecifier(specifier, type));
  }
  finishImportSpecifier(specifier, type, bindingType = 8201) {
    this.checkLVal(specifier.local, {
      type
    }, bindingType);
    return this.finishNode(specifier, type);
  }
  parseImportAttributes() {
    this.expect(5);
    const attrs = [];
    const attrNames = new Set();
    do {
      if (this.match(8)) {
        break;
      }
      const node = this.startNode();
      const keyName = this.state.value;
      if (attrNames.has(keyName)) {
        this.raise(Errors.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: keyName
        });
      }
      attrNames.add(keyName);
      if (this.match(134)) {
        node.key = this.parseStringLiteral(keyName);
      } else {
        node.key = this.parseIdentifier(true);
      }
      this.expect(14);
      if (!this.match(134)) {
        throw this.raise(Errors.ModuleAttributeInvalidValue, this.state.startLoc);
      }
      node.value = this.parseStringLiteral(this.state.value);
      attrs.push(this.finishNode(node, "ImportAttribute"));
    } while (this.eat(12));
    this.expect(8);
    return attrs;
  }
  parseModuleAttributes() {
    const attrs = [];
    const attributes = new Set();
    do {
      const node = this.startNode();
      node.key = this.parseIdentifier(true);
      if (node.key.name !== "type") {
        this.raise(Errors.ModuleAttributeDifferentFromType, node.key);
      }
      if (attributes.has(node.key.name)) {
        this.raise(Errors.ModuleAttributesWithDuplicateKeys, node.key, {
          key: node.key.name
        });
      }
      attributes.add(node.key.name);
      this.expect(14);
      if (!this.match(134)) {
        throw this.raise(Errors.ModuleAttributeInvalidValue, this.state.startLoc);
      }
      node.value = this.parseStringLiteral(this.state.value);
      attrs.push(this.finishNode(node, "ImportAttribute"));
    } while (this.eat(12));
    return attrs;
  }
  maybeParseImportAttributes(node) {
    let attributes;
    {
      var useWith = false;
    }
    if (this.match(76)) {
      if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40) {
        return;
      }
      this.next();
      if (this.hasPlugin("moduleAttributes")) {
        attributes = this.parseModuleAttributes();
        this.addExtra(node, "deprecatedWithLegacySyntax", true);
      } else {
        attributes = this.parseImportAttributes();
      }
      {
        useWith = true;
      }
    } else if (this.isContextual(94) && !this.hasPrecedingLineBreak()) {
      if (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions")) {
        this.raise(Errors.ImportAttributesUseAssert, this.state.startLoc);
      }
      if (!this.hasPlugin("importAssertions")) {
        this.addExtra(node, "deprecatedAssertSyntax", true);
      }
      this.next();
      attributes = this.parseImportAttributes();
    } else {
      attributes = [];
    }
    if (!useWith && this.hasPlugin("importAssertions")) {
      node.assertions = attributes;
    } else {
      node.attributes = attributes;
    }
  }
  maybeParseDefaultImportSpecifier(node, maybeDefaultIdentifier) {
    if (maybeDefaultIdentifier) {
      const specifier = this.startNodeAtNode(maybeDefaultIdentifier);
      specifier.local = maybeDefaultIdentifier;
      node.specifiers.push(this.finishImportSpecifier(specifier, "ImportDefaultSpecifier"));
      return true;
    } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
      this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier");
      return true;
    }
    return false;
  }
  maybeParseStarImportSpecifier(node) {
    if (this.match(55)) {
      const specifier = this.startNode();
      this.next();
      this.expectContextual(93);
      this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier");
      return true;
    }
    return false;
  }
  parseNamedImportSpecifiers(node) {
    let first = true;
    this.expect(5);
    while (!this.eat(8)) {
      if (first) {
        first = false;
      } else {
        if (this.eat(14)) {
          throw this.raise(Errors.DestructureNamedImport, this.state.startLoc);
        }
        this.expect(12);
        if (this.eat(8)) break;
      }
      const specifier = this.startNode();
      const importedIsString = this.match(134);
      const isMaybeTypeOnly = this.isContextual(130);
      specifier.imported = this.parseModuleExportName();
      const importSpecifier = this.parseImportSpecifier(specifier, importedIsString, node.importKind === "type" || node.importKind === "typeof", isMaybeTypeOnly, undefined);
      node.specifiers.push(importSpecifier);
    }
  }
  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
    if (this.eatContextual(93)) {
      specifier.local = this.parseIdentifier();
    } else {
      const {
        imported
      } = specifier;
      if (importedIsString) {
        throw this.raise(Errors.ImportBindingIsString, specifier, {
          importName: imported.value
        });
      }
      this.checkReservedWord(imported.name, specifier.loc.start, true, true);
      if (!specifier.local) {
        specifier.local = cloneIdentifier(imported);
      }
    }
    return this.finishImportSpecifier(specifier, "ImportSpecifier", bindingType);
  }
  isThisParam(param) {
    return param.type === "Identifier" && param.name === "this";
  }
}
class Parser extends StatementParser {
  constructor(options, input, pluginsMap) {
    options = getOptions(options);
    super(options, input);
    this.options = options;
    this.initializeScopes();
    this.plugins = pluginsMap;
    this.filename = options.sourceFilename;
    this.startIndex = options.startIndex;
    let optionFlags = 0;
    if (options.allowAwaitOutsideFunction) {
      optionFlags |= 1;
    }
    if (options.allowReturnOutsideFunction) {
      optionFlags |= 2;
    }
    if (options.allowImportExportEverywhere) {
      optionFlags |= 8;
    }
    if (options.allowSuperOutsideMethod) {
      optionFlags |= 16;
    }
    if (options.allowUndeclaredExports) {
      optionFlags |= 64;
    }
    if (options.allowNewTargetOutsideFunction) {
      optionFlags |= 4;
    }
    if (options.allowYieldOutsideFunction) {
      optionFlags |= 32;
    }
    if (options.ranges) {
      optionFlags |= 128;
    }
    if (options.tokens) {
      optionFlags |= 256;
    }
    if (options.createImportExpressions) {
      optionFlags |= 512;
    }
    if (options.createParenthesizedExpressions) {
      optionFlags |= 1024;
    }
    if (options.errorRecovery) {
      optionFlags |= 2048;
    }
    if (options.attachComment) {
      optionFlags |= 4096;
    }
    if (options.annexB) {
      optionFlags |= 8192;
    }
    this.optionFlags = optionFlags;
  }
  getScopeHandler() {
    return ScopeHandler;
  }
  parse() {
    this.enterInitialScopes();
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    file.errors = null;
    this.parseTopLevel(file, program);
    file.errors = this.state.errors;
    file.comments.length = this.state.commentsLen;
    return file;
  }
}
function parse(input, options) {
  var _options;
  if (((_options = options) == null ? void 0 : _options.sourceType) === "unambiguous") {
    options = Object.assign({}, options);
    try {
      options.sourceType = "module";
      const parser = getParser(options, input);
      const ast = parser.parse();
      if (parser.sawUnambiguousESM) {
        return ast;
      }
      if (parser.ambiguousScriptDifferentAst) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch (_unused) {}
      } else {
        ast.program.sourceType = "script";
      }
      return ast;
    } catch (moduleError) {
      try {
        options.sourceType = "script";
        return getParser(options, input).parse();
      } catch (_unused2) {}
      throw moduleError;
    }
  } else {
    return getParser(options, input).parse();
  }
}
function parseExpression(input, options) {
  const parser = getParser(options, input);
  if (parser.options.strictMode) {
    parser.state.strict = true;
  }
  return parser.getExpression();
}
function generateExportedTokenTypes(internalTokenTypes) {
  const tokenTypes = {};
  for (const typeName of Object.keys(internalTokenTypes)) {
    tokenTypes[typeName] = getExportedToken(internalTokenTypes[typeName]);
  }
  return tokenTypes;
}
const tokTypes = generateExportedTokenTypes(tt$1);
function getParser(options, input) {
  let cls = Parser;
  const pluginsMap = new Map();
  if (options != null && options.plugins) {
    for (const plugin of options.plugins) {
      let name, opts;
      if (typeof plugin === "string") {
        name = plugin;
      } else {
        [name, opts] = plugin;
      }
      if (!pluginsMap.has(name)) {
        pluginsMap.set(name, opts || {});
      }
    }
    validatePlugins(pluginsMap);
    cls = getParserClass(pluginsMap);
  }
  return new cls(options, input, pluginsMap);
}
const parserClassCache = new Map();
function getParserClass(pluginsMap) {
  const pluginList = [];
  for (const name of mixinPluginNames) {
    if (pluginsMap.has(name)) {
      pluginList.push(name);
    }
  }
  const key = pluginList.join("|");
  let cls = parserClassCache.get(key);
  if (!cls) {
    cls = Parser;
    for (const plugin of pluginList) {
      cls = mixinPlugins[plugin](cls);
    }
    parserClassCache.set(key, cls);
  }
  return cls;
}
lib.parse = parse;
lib.parseExpression = parseExpression;
lib.tokTypes = tokTypes;

var e$5={exports:{}};

var d$5=e$5.exports,f$2;function g$3(){return f$2?e$5.exports:(f$2=1,function(w,v){(function(u,n){n(v);})(d$5,function(u){class n{constructor(){this.should_skip=false,this.should_remove=false,this.replacement=null,this.context={skip:()=>this.should_skip=true,remove:()=>this.should_remove=true,replace:e=>this.replacement=e};}replace(e,s,l,h){e&&(l!==null?e[s][l]=h:e[s]=h);}remove(e,s,l){e&&(l!==null?e[s].splice(l,1):delete e[s]);}}class _ extends n{constructor(e,s){super(),this.enter=e,this.leave=s;}visit(e,s,l,h){if(e){if(this.enter){const r=this.should_skip,t=this.should_remove,i=this.replacement;this.should_skip=false,this.should_remove=false,this.replacement=null,this.enter.call(this.context,e,s,l,h),this.replacement&&(e=this.replacement,this.replace(s,l,h,e)),this.should_remove&&this.remove(s,l,h);const a=this.should_skip,m=this.should_remove;if(this.should_skip=r,this.should_remove=t,this.replacement=i,a)return e;if(m)return null}for(const r in e){const t=e[r];if(typeof t=="object")if(Array.isArray(t))for(let i=0;i<t.length;i+=1)t[i]!==null&&typeof t[i].type=="string"&&(this.visit(t[i],e,r,i)||i--);else t!==null&&typeof t.type=="string"&&this.visit(t,e,r,null);}if(this.leave){const r=this.replacement,t=this.should_remove;this.replacement=null,this.should_remove=false,this.leave.call(this.context,e,s,l,h),this.replacement&&(e=this.replacement,this.replace(s,l,h,e)),this.should_remove&&this.remove(s,l,h);const i=this.should_remove;if(this.replacement=r,this.should_remove=t,i)return null}}return e}}class p extends n{constructor(e,s){super(),this.enter=e,this.leave=s;}async visit(e,s,l,h){if(e){if(this.enter){const r=this.should_skip,t=this.should_remove,i=this.replacement;this.should_skip=false,this.should_remove=false,this.replacement=null,await this.enter.call(this.context,e,s,l,h),this.replacement&&(e=this.replacement,this.replace(s,l,h,e)),this.should_remove&&this.remove(s,l,h);const a=this.should_skip,m=this.should_remove;if(this.should_skip=r,this.should_remove=t,this.replacement=i,a)return e;if(m)return null}for(const r in e){const t=e[r];if(typeof t=="object")if(Array.isArray(t))for(let i=0;i<t.length;i+=1)t[i]!==null&&typeof t[i].type=="string"&&(await this.visit(t[i],e,r,i)||i--);else t!==null&&typeof t.type=="string"&&await this.visit(t,e,r,null);}if(this.leave){const r=this.replacement,t=this.should_remove;this.replacement=null,this.should_remove=false,await this.leave.call(this.context,e,s,l,h),this.replacement&&(e=this.replacement,this.replace(s,l,h,e)),this.should_remove&&this.remove(s,l,h);const i=this.should_remove;if(this.replacement=r,this.should_remove=t,i)return null}}return e}}function k(o,{enter:e,leave:s}){return new _(e,s).visit(o,null)}async function y(o,{enter:e,leave:s}){return await new p(e,s).visit(o,null)}u.asyncWalk=y,u.walk=k,Object.defineProperty(u,"__esModule",{value:true});});}(e$5,e$5.exports),e$5.exports)}

var Oi;function dr(){if(Oi)return r$a;Oi=1;/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/Object.defineProperty(r$a,"__esModule",{value:true});var m=at$1(),me=rr,Ae=lib,Ci=g$3(),bi=lr;const Oe=Symbol(""),Ce=Symbol(""),Je=Symbol(""),De=Symbol(""),vt=Symbol(""),pe=Symbol(""),Pt=Symbol(""),Lt=Symbol(""),Ke=Symbol(""),We=Symbol(""),be=Symbol(""),Ye=Symbol(""),Mt=Symbol(""),ke=Symbol(""),ze=Symbol(""),Qe=Symbol(""),Ze=Symbol(""),et=Symbol(""),tt=Symbol(""),Dt=Symbol(""),kt=Symbol(""),st=Symbol(""),Ve=Symbol(""),it=Symbol(""),nt=Symbol(""),Re=Symbol(""),ve=Symbol(""),rt=Symbol(""),at=Symbol(""),ns=Symbol(""),ot=Symbol(""),Fe=Symbol(""),rs=Symbol(""),as=Symbol(""),lt=Symbol(""),$e=Symbol(""),we=Symbol(""),ct=Symbol(""),Vt=Symbol(""),W={[Oe]:"Fragment",[Ce]:"Teleport",[Je]:"Suspense",[De]:"KeepAlive",[vt]:"BaseTransition",[pe]:"openBlock",[Pt]:"createBlock",[Lt]:"createElementBlock",[Ke]:"createVNode",[We]:"createElementVNode",[be]:"createCommentVNode",[Ye]:"createTextVNode",[Mt]:"createStaticVNode",[ke]:"resolveComponent",[ze]:"resolveDynamicComponent",[Qe]:"resolveDirective",[Ze]:"resolveFilter",[et]:"withDirectives",[tt]:"renderList",[Dt]:"renderSlot",[kt]:"createSlots",[st]:"toDisplayString",[Ve]:"mergeProps",[it]:"normalizeClass",[nt]:"normalizeStyle",[Re]:"normalizeProps",[ve]:"guardReactiveProps",[rt]:"toHandlers",[at]:"camelize",[ns]:"capitalize",[ot]:"toHandlerKey",[Fe]:"setBlockTracking",[rs]:"pushScopeId",[as]:"popScopeId",[lt]:"withCtx",[$e]:"unref",[we]:"isRef",[ct]:"withMemo",[Vt]:"isMemoSame"};function Ri(e){Object.getOwnPropertySymbols(e).forEach(t=>{W[t]=e[t];});}const vi={HTML:0,0:"HTML",SVG:1,1:"SVG",MATH_ML:2,2:"MATH_ML"},Pi={ROOT:0,0:"ROOT",ELEMENT:1,1:"ELEMENT",TEXT:2,2:"TEXT",COMMENT:3,3:"COMMENT",SIMPLE_EXPRESSION:4,4:"SIMPLE_EXPRESSION",INTERPOLATION:5,5:"INTERPOLATION",ATTRIBUTE:6,6:"ATTRIBUTE",DIRECTIVE:7,7:"DIRECTIVE",COMPOUND_EXPRESSION:8,8:"COMPOUND_EXPRESSION",IF:9,9:"IF",IF_BRANCH:10,10:"IF_BRANCH",FOR:11,11:"FOR",TEXT_CALL:12,12:"TEXT_CALL",VNODE_CALL:13,13:"VNODE_CALL",JS_CALL_EXPRESSION:14,14:"JS_CALL_EXPRESSION",JS_OBJECT_EXPRESSION:15,15:"JS_OBJECT_EXPRESSION",JS_PROPERTY:16,16:"JS_PROPERTY",JS_ARRAY_EXPRESSION:17,17:"JS_ARRAY_EXPRESSION",JS_FUNCTION_EXPRESSION:18,18:"JS_FUNCTION_EXPRESSION",JS_CONDITIONAL_EXPRESSION:19,19:"JS_CONDITIONAL_EXPRESSION",JS_CACHE_EXPRESSION:20,20:"JS_CACHE_EXPRESSION",JS_BLOCK_STATEMENT:21,21:"JS_BLOCK_STATEMENT",JS_TEMPLATE_LITERAL:22,22:"JS_TEMPLATE_LITERAL",JS_IF_STATEMENT:23,23:"JS_IF_STATEMENT",JS_ASSIGNMENT_EXPRESSION:24,24:"JS_ASSIGNMENT_EXPRESSION",JS_SEQUENCE_EXPRESSION:25,25:"JS_SEQUENCE_EXPRESSION",JS_RETURN_STATEMENT:26,26:"JS_RETURN_STATEMENT"},Li={ELEMENT:0,0:"ELEMENT",COMPONENT:1,1:"COMPONENT",SLOT:2,2:"SLOT",TEMPLATE:3,3:"TEMPLATE"},Mi={NOT_CONSTANT:0,0:"NOT_CONSTANT",CAN_SKIP_PATCH:1,1:"CAN_SKIP_PATCH",CAN_CACHE:2,2:"CAN_CACHE",CAN_STRINGIFY:3,3:"CAN_STRINGIFY"},B={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function os(e,t=""){return {type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:B}}function Pe(e,t,s,i,n,a,r,o=false,l=false,c=false,u=B){return e&&(o?(e.helper(pe),e.helper(ge(e.inSSR,c))):e.helper(_e(e.inSSR,c)),r&&e.helper(et)),{type:13,tag:t,props:s,children:i,patchFlag:n,dynamicProps:a,directives:r,isBlock:o,disableTracking:l,isComponent:c,loc:u}}function ue(e,t=B){return {type:17,loc:t,elements:e}}function z(e,t=B){return {type:15,loc:t,properties:e}}function x(e,t){return {type:16,loc:B,key:m.isString(e)?I(e,true):e,value:t}}function I(e,t=false,s=B,i=0){return {type:4,loc:s,content:e,isStatic:t,constType:t?3:i}}function Di(e,t){return {type:5,loc:t,content:m.isString(e)?I(e,false,t):e}}function Q(e,t=B){return {type:8,loc:t,children:e}}function X(e,t=[],s=B){return {type:14,loc:s,callee:e,arguments:t}}function Se(e,t=void 0,s=false,i=false,n=B){return {type:18,params:e,returns:t,newline:s,isSlot:i,loc:n}}function ft(e,t,s,i=true){return {type:19,test:e,consequent:t,alternate:s,newline:i,loc:B}}function ls(e,t,s=false,i=false){return {type:20,index:e,value:t,needPauseTracking:s,inVOnce:i,needArraySpread:false,loc:B}}function cs(e){return {type:21,body:e,loc:B}}function ki(e){return {type:22,elements:e,loc:B}}function Vi(e,t,s){return {type:23,test:e,consequent:t,alternate:s,loc:B}}function Fi(e,t){return {type:24,left:e,right:t,loc:B}}function $i(e){return {type:25,expressions:e,loc:B}}function wi(e){return {type:26,returns:e,loc:B}}function _e(e,t){return e||t?Ke:We}function ge(e,t){return e||t?Pt:Lt}function pt(e,{helper:t,removeHelper:s,inSSR:i}){e.isBlock||(e.isBlock=true,s(_e(i,e.isComponent)),t(pe),t(ge(i,e.isComponent)));}const fs=new Uint8Array([123,123]),ps=new Uint8Array([125,125]);function us(e){return e>=97&&e<=122||e>=65&&e<=90}function Z(e){return e===32||e===10||e===9||e===12||e===13}function he(e){return e===47||e===62||Z(e)}function ut(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}const H={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class xi{constructor(t,s){this.stack=t,this.cbs=s,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=false,this.inXML=false,this.inVPre=false,this.newlines=[],this.mode=0,this.delimiterOpen=fs,this.delimiterClose=ps,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0,this.entityDecoder=new me.EntityDecoder(me.htmlDecodeTree,(i,n)=>this.emitCodePoint(i,n));}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=false,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=fs,this.delimiterClose=ps;}getPos(t){let s=1,i=t+1;for(let n=this.newlines.length-1;n>=0;n--){const a=this.newlines[n];if(t>a){s=n+2,i=t-a;break}}return {column:i,line:s,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):t===38?this.startEntity():!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t));}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const s=this.index+1-this.delimiterOpen.length;s>this.sectionStart&&this.cbs.ontext(this.sectionStart,s),this.state=3,this.sectionStart=s;}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t));}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t));}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t));}stateSpecialStartSequence(t){const s=this.sequenceIndex===this.currentSequence.length;if(!(s?he(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=false;else if(!s){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t);}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||Z(t)){const s=this.index-this.currentSequence.length;if(this.sectionStart<s){const i=this.index;this.index=s,this.cbs.ontext(this.sectionStart,s),this.index=i;}this.sectionStart=s+2,this.stateInClosingTagName(t),this.inRCDATA=false;return}this.sequenceIndex=0;}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===H.TitleEnd||this.currentSequence===H.TextareaEnd&&!this.inSFCRoot?t===38?this.startEntity():!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60);}stateCDATASequence(t){t===H.Cdata[this.sequenceIndex]?++this.sequenceIndex===H.Cdata.length&&(this.state=28,this.currentSequence=H.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t));}fastForwardTo(t){for(;++this.index<this.buffer.length;){const s=this.buffer.charCodeAt(this.index);if(s===10&&this.newlines.push(this.index),s===t)return  true}return this.index=this.buffer.length-1,false}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===H.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0);}startSpecial(t,s){this.enterRCDATA(t,s),this.state=31;}enterRCDATA(t,s){this.inRCDATA=true,this.currentSequence=t,this.sequenceIndex=s;}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):us(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t));}stateInTagName(t){he(t)&&this.handleTagName(t);}stateInSFCRootTagName(t){if(he(t)){const s=this.buffer.slice(this.sectionStart,this.index);s!=="template"&&this.enterRCDATA(ut("</"+s),0),this.handleTagName(t);}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t);}stateBeforeClosingTagName(t){Z(t)||(t===62?(this.cbs.onerr(14,this.index),this.state=1,this.sectionStart=this.index+1):(this.state=us(t)?9:27,this.sectionStart=this.index));}stateInClosingTagName(t){(t===62||Z(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t));}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1);}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?(this.state=7,this.peek()!==62&&this.cbs.onerr(22,this.index)):t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Z(t)||(t===61&&this.cbs.onerr(19,this.index),this.handleAttrStart(t));}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index);}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=false):Z(t)||(this.state=11,this.stateBeforeAttrName(t));}stateInAttrName(t){t===61||he(t)?(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):(t===34||t===39||t===60)&&this.cbs.onerr(17,this.index);}stateInDirName(t){t===61||he(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1);}stateInDirArg(t){t===61||he(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1);}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||he(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t),this.cbs.onerr(27,this.index));}stateInDirModifier(t){t===61||he(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1);}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t);}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):Z(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t));}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):Z(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t));}handleInAttrValue(t,s){t===s?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(s===34?3:2,this.index+1),this.state=11):t===38&&this.startEntity();}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34);}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39);}stateInAttrValueNoQuotes(t){Z(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):t===34||t===39||t===60||t===61||t===96?this.cbs.onerr(18,this.index):t===38&&this.startEntity();}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23;}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1);}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1);}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=H.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23;}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1);}stateBeforeSpecialS(t){t===H.ScriptEnd[3]?this.startSpecial(H.ScriptEnd,4):t===H.StyleEnd[3]?this.startSpecial(H.StyleEnd,4):(this.state=6,this.stateInTagName(t));}stateBeforeSpecialT(t){t===H.TitleEnd[3]?this.startSpecial(H.TitleEnd,4):t===H.TextareaEnd[3]?this.startSpecial(H.TextareaEnd,4):(this.state=6,this.stateInTagName(t));}startEntity(){this.baseState=this.state,this.state=33,this.entityStart=this.index,this.entityDecoder.startEntity(this.baseState===1||this.baseState===32?me.DecodingMode.Legacy:me.DecodingMode.Attribute);}stateInEntity(){{const t=this.entityDecoder.write(this.buffer,this.index);t>=0?(this.state=this.baseState,t===0&&(this.index=this.entityStart)):this.index=this.buffer.length-1;}}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const s=this.buffer.charCodeAt(this.index);switch(s===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(s);break}case 2:{this.stateInterpolationOpen(s);break}case 3:{this.stateInterpolation(s);break}case 4:{this.stateInterpolationClose(s);break}case 31:{this.stateSpecialStartSequence(s);break}case 32:{this.stateInRCDATA(s);break}case 26:{this.stateCDATASequence(s);break}case 19:{this.stateInAttrValueDoubleQuotes(s);break}case 12:{this.stateInAttrName(s);break}case 13:{this.stateInDirName(s);break}case 14:{this.stateInDirArg(s);break}case 15:{this.stateInDynamicDirArg(s);break}case 16:{this.stateInDirModifier(s);break}case 28:{this.stateInCommentLike(s);break}case 27:{this.stateInSpecialComment(s);break}case 11:{this.stateBeforeAttrName(s);break}case 6:{this.stateInTagName(s);break}case 34:{this.stateInSFCRootTagName(s);break}case 9:{this.stateInClosingTagName(s);break}case 5:{this.stateBeforeTagName(s);break}case 17:{this.stateAfterAttrName(s);break}case 20:{this.stateInAttrValueSingleQuotes(s);break}case 18:{this.stateBeforeAttrValue(s);break}case 8:{this.stateBeforeClosingTagName(s);break}case 10:{this.stateAfterClosingTagName(s);break}case 29:{this.stateBeforeSpecialS(s);break}case 30:{this.stateBeforeSpecialT(s);break}case 21:{this.stateInAttrValueNoQuotes(s);break}case 7:{this.stateInSelfClosingTag(s);break}case 23:{this.stateInDeclaration(s);break}case 22:{this.stateBeforeDeclaration(s);break}case 25:{this.stateBeforeComment(s);break}case 24:{this.stateInProcessingInstruction(s);break}case 33:{this.stateInEntity();break}}this.index++;}this.cleanup(),this.finish();}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index));}finish(){this.state===33&&(this.entityDecoder.end(),this.state=this.baseState),this.handleTrailingData(),this.cbs.onend();}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===H.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t));}emitCodePoint(t,s){this.baseState!==1&&this.baseState!==32?(this.sectionStart<this.entityStart&&this.cbs.onattribdata(this.sectionStart,this.entityStart),this.sectionStart=this.entityStart+s,this.index=this.sectionStart-1,this.cbs.onattribentity(me.fromCodePoint(t),this.entityStart,this.sectionStart)):(this.sectionStart<this.entityStart&&this.cbs.ontext(this.sectionStart,this.entityStart),this.sectionStart=this.entityStart+s,this.index=this.sectionStart-1,this.cbs.ontextentity(me.fromCodePoint(t),this.entityStart,this.sectionStart));}}const Ui={COMPILER_IS_ON_ELEMENT:"COMPILER_IS_ON_ELEMENT",COMPILER_V_BIND_SYNC:"COMPILER_V_BIND_SYNC",COMPILER_V_BIND_OBJECT_ORDER:"COMPILER_V_BIND_OBJECT_ORDER",COMPILER_V_ON_NATIVE:"COMPILER_V_ON_NATIVE",COMPILER_V_IF_V_FOR_PRECEDENCE:"COMPILER_V_IF_V_FOR_PRECEDENCE",COMPILER_NATIVE_TEMPLATE:"COMPILER_NATIVE_TEMPLATE",COMPILER_INLINE_TEMPLATE:"COMPILER_INLINE_TEMPLATE",COMPILER_FILTERS:"COMPILER_FILTERS"},Bi={COMPILER_IS_ON_ELEMENT:{message:'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',link:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"},COMPILER_V_BIND_SYNC:{message:e=>`.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,link:"https://v3-migration.vuejs.org/breaking-changes/v-model.html"},COMPILER_V_BIND_OBJECT_ORDER:{message:'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',link:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html"},COMPILER_V_ON_NATIVE:{message:".native modifier for v-on has been removed as is no longer necessary.",link:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"},COMPILER_V_IF_V_FOR_PRECEDENCE:{message:"v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",link:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"},COMPILER_NATIVE_TEMPLATE:{message:"<template> with no special directives will render as a native template element instead of its inner content in Vue 3."},COMPILER_INLINE_TEMPLATE:{message:'"inline-template" has been removed in Vue 3.',link:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"},COMPILER_FILTERS:{message:'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',link:"https://v3-migration.vuejs.org/breaking-changes/filters.html"}};function Ft(e,{compatConfig:t}){const s=t&&t[e];return e==="MODE"?s||3:s}function Te(e,t){const s=Ft("MODE",t),i=Ft(e,t);return s===3?i===true:i!==false}function xe(e,t,s,...i){return Te(e,t)}function Xi(e,t,s,...i){if(Ft(e,t)==="suppress-warning")return;const{message:a,link:r}=Bi[e],o=`(deprecation ${e}) ${typeof a=="function"?a(...i):a}${r?`
  Details: ${r}`:""}`,l=new SyntaxError(o);l.code=e,s&&(l.loc=s),t.onWarn(l);}function $t(e){throw e}function hs(e){}function L(e,t,s,i){const n=(s||Es)[e]+(i||""),a=new SyntaxError(String(n));return a.code=e,a.loc=t,a}const Hi={ABRUPT_CLOSING_OF_EMPTY_COMMENT:0,0:"ABRUPT_CLOSING_OF_EMPTY_COMMENT",CDATA_IN_HTML_CONTENT:1,1:"CDATA_IN_HTML_CONTENT",DUPLICATE_ATTRIBUTE:2,2:"DUPLICATE_ATTRIBUTE",END_TAG_WITH_ATTRIBUTES:3,3:"END_TAG_WITH_ATTRIBUTES",END_TAG_WITH_TRAILING_SOLIDUS:4,4:"END_TAG_WITH_TRAILING_SOLIDUS",EOF_BEFORE_TAG_NAME:5,5:"EOF_BEFORE_TAG_NAME",EOF_IN_CDATA:6,6:"EOF_IN_CDATA",EOF_IN_COMMENT:7,7:"EOF_IN_COMMENT",EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT:8,8:"EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",EOF_IN_TAG:9,9:"EOF_IN_TAG",INCORRECTLY_CLOSED_COMMENT:10,10:"INCORRECTLY_CLOSED_COMMENT",INCORRECTLY_OPENED_COMMENT:11,11:"INCORRECTLY_OPENED_COMMENT",INVALID_FIRST_CHARACTER_OF_TAG_NAME:12,12:"INVALID_FIRST_CHARACTER_OF_TAG_NAME",MISSING_ATTRIBUTE_VALUE:13,13:"MISSING_ATTRIBUTE_VALUE",MISSING_END_TAG_NAME:14,14:"MISSING_END_TAG_NAME",MISSING_WHITESPACE_BETWEEN_ATTRIBUTES:15,15:"MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",NESTED_COMMENT:16,16:"NESTED_COMMENT",UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME:17,17:"UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE:18,18:"UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME:19,19:"UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",UNEXPECTED_NULL_CHARACTER:20,20:"UNEXPECTED_NULL_CHARACTER",UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME:21,21:"UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",UNEXPECTED_SOLIDUS_IN_TAG:22,22:"UNEXPECTED_SOLIDUS_IN_TAG",X_INVALID_END_TAG:23,23:"X_INVALID_END_TAG",X_MISSING_END_TAG:24,24:"X_MISSING_END_TAG",X_MISSING_INTERPOLATION_END:25,25:"X_MISSING_INTERPOLATION_END",X_MISSING_DIRECTIVE_NAME:26,26:"X_MISSING_DIRECTIVE_NAME",X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END:27,27:"X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",X_V_IF_NO_EXPRESSION:28,28:"X_V_IF_NO_EXPRESSION",X_V_IF_SAME_KEY:29,29:"X_V_IF_SAME_KEY",X_V_ELSE_NO_ADJACENT_IF:30,30:"X_V_ELSE_NO_ADJACENT_IF",X_V_FOR_NO_EXPRESSION:31,31:"X_V_FOR_NO_EXPRESSION",X_V_FOR_MALFORMED_EXPRESSION:32,32:"X_V_FOR_MALFORMED_EXPRESSION",X_V_FOR_TEMPLATE_KEY_PLACEMENT:33,33:"X_V_FOR_TEMPLATE_KEY_PLACEMENT",X_V_BIND_NO_EXPRESSION:34,34:"X_V_BIND_NO_EXPRESSION",X_V_ON_NO_EXPRESSION:35,35:"X_V_ON_NO_EXPRESSION",X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET:36,36:"X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",X_V_SLOT_MIXED_SLOT_USAGE:37,37:"X_V_SLOT_MIXED_SLOT_USAGE",X_V_SLOT_DUPLICATE_SLOT_NAMES:38,38:"X_V_SLOT_DUPLICATE_SLOT_NAMES",X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN:39,39:"X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",X_V_SLOT_MISPLACED:40,40:"X_V_SLOT_MISPLACED",X_V_MODEL_NO_EXPRESSION:41,41:"X_V_MODEL_NO_EXPRESSION",X_V_MODEL_MALFORMED_EXPRESSION:42,42:"X_V_MODEL_MALFORMED_EXPRESSION",X_V_MODEL_ON_SCOPE_VARIABLE:43,43:"X_V_MODEL_ON_SCOPE_VARIABLE",X_V_MODEL_ON_PROPS:44,44:"X_V_MODEL_ON_PROPS",X_INVALID_EXPRESSION:45,45:"X_INVALID_EXPRESSION",X_KEEP_ALIVE_INVALID_CHILDREN:46,46:"X_KEEP_ALIVE_INVALID_CHILDREN",X_PREFIX_ID_NOT_SUPPORTED:47,47:"X_PREFIX_ID_NOT_SUPPORTED",X_MODULE_MODE_NOT_SUPPORTED:48,48:"X_MODULE_MODE_NOT_SUPPORTED",X_CACHE_HANDLER_NOT_SUPPORTED:49,49:"X_CACHE_HANDLER_NOT_SUPPORTED",X_SCOPE_ID_NOT_SUPPORTED:50,50:"X_SCOPE_ID_NOT_SUPPORTED",X_VNODE_HOOKS:51,51:"X_VNODE_HOOKS",X_V_BIND_INVALID_SAME_NAME_ARGUMENT:52,52:"X_V_BIND_INVALID_SAME_NAME_ARGUMENT",__EXTEND_POINT__:53,53:"__EXTEND_POINT__"},Es={0:"Illegal comment.",1:"CDATA section is allowed only in XML context.",2:"Duplicate attribute.",3:"End tag cannot have attributes.",4:"Illegal '/' in tags.",5:"Unexpected EOF in tag.",6:"Unexpected EOF in CDATA section.",7:"Unexpected EOF in comment.",8:"Unexpected EOF in script.",9:"Unexpected EOF in tag.",10:"Incorrectly closed comment.",11:"Incorrectly opened comment.",12:"Illegal tag name. Use '&lt;' to print '<'.",13:"Attribute value was expected.",14:"End tag name was expected.",15:"Whitespace was expected.",16:"Unexpected '<!--' in comment.",17:`Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,18:"Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",19:"Attribute name cannot start with '='.",21:"'<?' is allowed only in XML context.",20:"Unexpected null character.",22:"Illegal '/' in tags.",23:"Invalid end tag.",24:"Element is missing end tag.",25:"Interpolation end sign was not found.",27:"End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",26:"Legal directive name was expected.",28:"v-if/v-else-if is missing expression.",29:"v-if/else branches must use unique keys.",30:"v-else/v-else-if has no adjacent v-if or v-else-if.",31:"v-for is missing expression.",32:"v-for has invalid expression.",33:"<template v-for> key should be placed on the <template> tag.",34:"v-bind is missing expression.",52:"v-bind with same-name shorthand only allows static argument.",35:"v-on is missing expression.",36:"Unexpected custom directive on <slot> outlet.",37:"Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",38:"Duplicate slot names found. ",39:"Extraneous children found when component already has explicitly named default slot. These children will be ignored.",40:"v-slot can only be used on components or <template> tags.",41:"v-model is missing expression.",42:"v-model value must be a valid JavaScript member expression.",43:"v-model cannot be used on v-for or v-slot scope variables because they are not writable.",44:`v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,45:"Error parsing JavaScript expression: ",46:"<KeepAlive> expects exactly one child component.",51:"@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",47:'"prefixIdentifiers" option is not supported in this build of compiler.',48:"ES module mode is not supported in this build of compiler.",49:'"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',50:'"scopeId" option is only supported in module mode.',53:""};function ds(e,t,s=false,i=[],n=Object.create(null)){const a=e.type==="Program"?e.body[0].type==="ExpressionStatement"&&e.body[0].expression:e;Ci.walk(e,{enter(r,o){if(o&&i.push(o),o&&o.type.startsWith("TS")&&!Bt.includes(o.type))return this.skip();if(r.type==="Identifier"){const l=!!n[r.name],c=ms(r,o,i);(s||c&&!l)&&t(r,o,i,c,l);}else if(r.type==="ObjectProperty"&&o?.type==="ObjectPattern")r.inPattern=true;else if(Ns(r))r.scopeIds?r.scopeIds.forEach(l=>xt(l,n)):_s(r,l=>ht(r,l,n));else if(r.type==="BlockStatement")r.scopeIds?r.scopeIds.forEach(l=>xt(l,n)):gs(r,l=>ht(r,l,n));else if(r.type==="CatchClause"&&r.param)for(const l of re(r.param))ht(r,l,n);else Ts(r)&&ys(r,false,l=>ht(r,l,n));},leave(r,o){if(o&&i.pop(),r!==a&&r.scopeIds)for(const l of r.scopeIds)n[l]--,n[l]===0&&delete n[l];}});}function ms(e,t,s){if(!t)return  true;if(e.name==="arguments")return  false;if(ji(e,t))return  true;switch(t.type){case "AssignmentExpression":case "AssignmentPattern":return  true;case "ObjectPattern":case "ArrayPattern":return wt(t,s)}return  false}function wt(e,t){if(e&&(e.type==="ObjectProperty"||e.type==="ArrayPattern")){let s=t.length;for(;s--;){const i=t[s];if(i.type==="AssignmentExpression")return  true;if(i.type!=="ObjectProperty"&&!i.type.endsWith("Pattern"))break}}return  false}function Ss(e){let t=e.length;for(;t--;){const s=e[t];if(s.type==="NewExpression")return  true;if(s.type!=="MemberExpression")break}return  false}function _s(e,t){for(const s of e.params)for(const i of re(s))t(i);}function gs(e,t){for(const s of e.body)if(s.type==="VariableDeclaration"){if(s.declare)continue;for(const i of s.declarations)for(const n of re(i.id))t(n);}else if(s.type==="FunctionDeclaration"||s.type==="ClassDeclaration"){if(s.declare||!s.id)continue;t(s.id);}else Ts(s)&&ys(s,true,t);}function Ts(e){return e.type==="ForOfStatement"||e.type==="ForInStatement"||e.type==="ForStatement"}function ys(e,t,s){const i=e.type==="ForStatement"?e.init:e.left;if(i&&i.type==="VariableDeclaration"&&(i.kind==="var"?t:!t))for(const n of i.declarations)for(const a of re(n.id))s(a);}function re(e,t=[]){switch(e.type){case "Identifier":t.push(e);break;case "MemberExpression":let s=e;for(;s.type==="MemberExpression";)s=s.object;t.push(s);break;case "ObjectPattern":for(const i of e.properties)i.type==="RestElement"?re(i.argument,t):re(i.value,t);break;case "ArrayPattern":e.elements.forEach(i=>{i&&re(i,t);});break;case "RestElement":re(e.argument,t);break;case "AssignmentPattern":re(e.left,t);break}return t}function xt(e,t){e in t?t[e]++:t[e]=1;}function ht(e,t,s){const{name:i}=t;e.scopeIds&&e.scopeIds.has(i)||(xt(i,s),(e.scopeIds||(e.scopeIds=new Set)).add(i));}const Ns=e=>/Function(?:Expression|Declaration)$|Method$/.test(e.type),Ut=e=>e&&(e.type==="ObjectProperty"||e.type==="ObjectMethod")&&!e.computed,Is=(e,t)=>Ut(t)&&t.key===e;function ji(e,t,s){switch(t.type){case "MemberExpression":case "OptionalMemberExpression":return t.property===e?!!t.computed:t.object===e;case "JSXMemberExpression":return t.object===e;case "VariableDeclarator":return t.init===e;case "ArrowFunctionExpression":return t.body===e;case "PrivateName":return  false;case "ClassMethod":case "ClassPrivateMethod":case "ObjectMethod":return t.key===e?!!t.computed:false;case "ObjectProperty":return t.key===e?!!t.computed:true;case "ClassProperty":return t.key===e?!!t.computed:true;case "ClassPrivateProperty":return t.key!==e;case "ClassDeclaration":case "ClassExpression":return t.superClass===e;case "AssignmentExpression":return t.right===e;case "AssignmentPattern":return t.right===e;case "LabeledStatement":return  false;case "CatchClause":return  false;case "RestElement":return  false;case "BreakStatement":case "ContinueStatement":return  false;case "FunctionDeclaration":case "FunctionExpression":return  false;case "ExportNamespaceSpecifier":case "ExportDefaultSpecifier":return  false;case "ExportSpecifier":return t.local===e;case "ImportDefaultSpecifier":case "ImportNamespaceSpecifier":case "ImportSpecifier":return  false;case "ImportAttribute":return  false;case "JSXAttribute":return  false;case "ObjectPattern":case "ArrayPattern":return  false;case "MetaProperty":return  false;case "ObjectTypeProperty":return t.key!==e;case "TSEnumMember":return t.id!==e;case "TSPropertySignature":return t.key===e?!!t.computed:true}return  true}const Bt=["TSAsExpression","TSTypeAssertion","TSNonNullExpression","TSInstantiationExpression","TSSatisfiesExpression"];function Et(e){return Bt.includes(e.type)?Et(e.expression):e}const se=e=>e.type===4&&e.isStatic;function Xt(e){switch(e){case "Teleport":case "teleport":return Ce;case "Suspense":case "suspense":return Je;case "KeepAlive":case "keep-alive":return De;case "BaseTransition":case "base-transition":return vt}}const qi=/^\d|[^\$\w\xA0-\uFFFF]/,oe=e=>!qi.test(e),Gi=/[A-Za-z_$\xA0-\uFFFF]/,Ji=/[\.\?\w$\xA0-\uFFFF]/,Ki=/\s+[.[]\s*|\s*[.[]\s+/g,dt=e=>e.type===4?e.content:e.loc.source,Wi=e=>{const t=dt(e).trim().replace(Ki,o=>o.trim());let s=0,i=[],n=0,a=0,r=null;for(let o=0;o<t.length;o++){const l=t.charAt(o);switch(s){case 0:if(l==="[")i.push(s),s=1,n++;else if(l==="(")i.push(s),s=2,a++;else if(!(o===0?Gi:Ji).test(l))return  false;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(s),s=3,r=l):l==="["?n++:l==="]"&&(--n||(s=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(s),s=3,r=l;else if(l==="(")a++;else if(l===")"){if(o===t.length-1)return  false;--a||(s=i.pop());}break;case 3:l===r&&(s=i.pop(),r=null);break}}return !n&&!a},As=(e,t)=>{try{let s=e.ast||Ae.parseExpression(dt(e),{plugins:t.expressionPlugins?[...t.expressionPlugins,"typescript"]:["typescript"]});return s=Et(s),s.type==="MemberExpression"||s.type==="OptionalMemberExpression"||s.type==="Identifier"&&s.name!=="undefined"}catch{return  false}},Ht=As,Yi=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,zi=e=>Yi.test(dt(e)),Os=(e,t)=>{try{let s=e.ast||Ae.parseExpression(dt(e),{plugins:t.expressionPlugins?[...t.expressionPlugins,"typescript"]:["typescript"]});return s.type==="Program"&&(s=s.body[0],s.type==="ExpressionStatement"&&(s=s.expression)),s=Et(s),s.type==="FunctionExpression"||s.type==="ArrowFunctionExpression"}catch{return  false}},Cs=Os;function jt(e,t,s=t.length){return qt({offset:e.offset,line:e.line,column:e.column},t,s)}function qt(e,t,s=t.length){let i=0,n=-1;for(let a=0;a<s;a++)t.charCodeAt(a)===10&&(i++,n=a);return e.offset+=s,e.line+=i,e.column=n===-1?e.column+s:s-n,e}function Qi(e,t){if(!e)throw new Error(t||"unexpected compiler condition")}function J(e,t,s=false){for(let i=0;i<e.props.length;i++){const n=e.props[i];if(n.type===7&&(s||n.exp)&&(m.isString(t)?n.name===t:t.test(n.name)))return n}}function Ue(e,t,s=false,i=false){for(let n=0;n<e.props.length;n++){const a=e.props[n];if(a.type===6){if(s)continue;if(a.name===t&&(a.value||i))return a}else if(a.name==="bind"&&(a.exp||i)&&Ee(a.arg,t))return a}}function Ee(e,t){return !!(e&&se(e)&&e.content===t)}function Zi(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function mt(e){return e.type===5||e.type===2}function Gt(e){return e.type===7&&e.name==="slot"}function Le(e){return e.type===1&&e.tagType===3}function Be(e){return e.type===1&&e.tagType===2}const en=new Set([Re,ve]);function bs(e,t=[]){if(e&&!m.isString(e)&&e.type===14){const s=e.callee;if(!m.isString(s)&&en.has(s))return bs(e.arguments[0],t.concat(e))}return [e,t]}function Xe(e,t,s){let i,n=e.type===13?e.props:e.arguments[2],a=[],r;if(n&&!m.isString(n)&&n.type===14){const o=bs(n);n=o[0],a=o[1],r=a[a.length-1];}if(n==null||m.isString(n))i=z([t]);else if(n.type===14){const o=n.arguments[0];!m.isString(o)&&o.type===15?Rs(t,o)||o.properties.unshift(t):n.callee===rt?i=X(s.helper(Ve),[z([t]),n]):n.arguments.unshift(z([t])),!i&&(i=n);}else n.type===15?(Rs(t,n)||n.properties.unshift(t),i=n):(i=X(s.helper(Ve),[z([t]),n]),r&&r.callee===ve&&(r=a[a.length-2]));e.type===13?r?r.arguments[0]=i:e.props=i:r?r.arguments[0]=i:e.arguments[2]=i;}function Rs(e,t){let s=false;if(e.key.type===4){const i=e.key.content;s=t.properties.some(n=>n.key.type===4&&n.key.content===i);}return s}function ye(e,t){return `_${t}_${e.replace(/[^\w]/g,(s,i)=>s==="-"?"_":e.charCodeAt(i).toString())}`}function Y(e,t){if(!e||Object.keys(t).length===0)return  false;switch(e.type){case 1:for(let s=0;s<e.props.length;s++){const i=e.props[s];if(i.type===7&&(Y(i.arg,t)||Y(i.exp,t)))return  true}return e.children.some(s=>Y(s,t));case 11:return Y(e.source,t)?true:e.children.some(s=>Y(s,t));case 9:return e.branches.some(s=>Y(s,t));case 10:return Y(e.condition,t)?true:e.children.some(s=>Y(s,t));case 4:return !e.isStatic&&oe(e.content)&&!!t[e.content];case 8:return e.children.some(s=>m.isObject(s)&&Y(s,t));case 5:case 12:return Y(e.content,t);case 2:case 3:case 20:return  false;default:return  false}}function vs(e){return e.type===14&&e.callee===ct?e.arguments[1].returns:e}const Ps=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,Ls={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:m.NO,isPreTag:m.NO,isIgnoreNewlineTag:m.NO,isCustomElement:m.NO,onError:$t,onWarn:hs,comments:false,prefixIdentifiers:false};let v=Ls,He=null,le="",G=null,O=null,te="",ce=-1,Ne=-1,Jt=0,de=false,Kt=null;const w=[],D=new xi(w,{onerr:K,ontext(e,t){St(j(e,t),e,t);},ontextentity(e,t,s){St(e,t,s);},oninterpolation(e,t){if(de)return St(j(e,t),e,t);let s=e+D.delimiterOpen.length,i=t-D.delimiterClose.length;for(;Z(le.charCodeAt(s));)s++;for(;Z(le.charCodeAt(i-1));)i--;let n=j(s,i);n.includes("&")&&(n=me.decodeHTML(n)),Wt({type:5,content:gt(n,false,U(s,i)),loc:U(e,t)});},onopentagname(e,t){const s=j(e,t);G={type:1,tag:s,ns:v.getNamespace(s,w[0],v.ns),tagType:0,props:[],children:[],loc:U(e-1,t),codegenNode:void 0};},onopentagend(e){Ds(e);},onclosetag(e,t){const s=j(e,t);if(!v.isVoidTag(s)){let i=false;for(let n=0;n<w.length;n++)if(w[n].tag.toLowerCase()===s.toLowerCase()){i=true,n>0&&K(24,w[0].loc.start.offset);for(let r=0;r<=n;r++){const o=w.shift();_t(o,t,r<n);}break}i||K(23,ks(e,60));}},onselfclosingtag(e){const t=G.tag;G.isSelfClosing=true,Ds(e),w[0]&&w[0].tag===t&&_t(w.shift(),e);},onattribname(e,t){O={type:6,name:j(e,t),nameLoc:U(e,t),value:void 0,loc:U(e)};},ondirname(e,t){const s=j(e,t),i=s==="."||s===":"?"bind":s==="@"?"on":s==="#"?"slot":s.slice(2);if(!de&&i===""&&K(26,e),de||i==="")O={type:6,name:s,nameLoc:U(e,t),value:void 0,loc:U(e)};else if(O={type:7,name:i,rawName:s,exp:void 0,arg:void 0,modifiers:s==="."?[I("prop")]:[],loc:U(e)},i==="pre"){de=D.inVPre=true,Kt=G;const n=G.props;for(let a=0;a<n.length;a++)n[a].type===7&&(n[a]=un(n[a]));}},ondirarg(e,t){if(e===t)return;const s=j(e,t);if(de)O.name+=s,Ie(O.nameLoc,t);else {const i=s[0]!=="[";O.arg=gt(i?s:s.slice(1,-1),i,U(e,t),i?3:0);}},ondirmodifier(e,t){const s=j(e,t);if(de)O.name+="."+s,Ie(O.nameLoc,t);else if(O.name==="slot"){const i=O.arg;i&&(i.content+="."+s,Ie(i.loc,t));}else {const i=I(s,true,U(e,t));O.modifiers.push(i);}},onattribdata(e,t){te+=j(e,t),ce<0&&(ce=e),Ne=t;},onattribentity(e,t,s){te+=e,ce<0&&(ce=t),Ne=s;},onattribnameend(e){const t=O.loc.start.offset,s=j(t,e);O.type===7&&(O.rawName=s),G.props.some(i=>(i.type===7?i.rawName:i.name)===s)&&K(2,t);},onattribend(e,t){if(G&&O){if(Ie(O.loc,t),e!==0)if(O.type===6)O.name==="class"&&(te=$s(te).trim()),e===1&&!te&&K(13,t),O.value={type:2,content:te,loc:e===1?U(ce,Ne):U(ce-1,Ne+1)},D.inSFCRoot&&G.tag==="template"&&O.name==="lang"&&te&&te!=="html"&&D.enterRCDATA(ut("</template"),0);else {let s=0;O.name==="for"?s=3:O.name==="slot"?s=1:O.name==="on"&&te.includes(";")&&(s=2),O.exp=gt(te,false,U(ce,Ne),0,s),O.name==="for"&&(O.forParseResult=sn(O.exp));let i=-1;O.name==="bind"&&(i=O.modifiers.findIndex(n=>n.content==="sync"))>-1&&xe("COMPILER_V_BIND_SYNC",v,O.loc,O.rawName)&&(O.name="model",O.modifiers.splice(i,1));}(O.type!==7||O.name!=="pre")&&G.props.push(O);}te="",ce=Ne=-1;},oncomment(e,t){v.comments&&Wt({type:3,content:j(e,t),loc:U(e-4,t+3)});},onend(){const e=le.length;if(D.state!==1)switch(D.state){case 5:case 8:K(5,e);break;case 3:case 4:K(25,D.sectionStart);break;case 28:D.currentSequence===H.CdataEnd?K(6,e):K(7,e);break;case 6:case 7:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:K(9,e);break}for(let t=0;t<w.length;t++)_t(w[t],e-1),K(24,w[t].loc.start.offset);},oncdata(e,t){w[0].ns!==0?St(j(e,t),e,t):K(1,e-9);},onprocessinginstruction(e){(w[0]?w[0].ns:v.ns)===0&&K(21,e-1);}}),Ms=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,tn=/^\(|\)$/g;function sn(e){const t=e.loc,s=e.content,i=s.match(Ps);if(!i)return;const[,n,a]=i,r=(p,S,E=false)=>{const y=t.start.offset+S,h=y+p.length;return gt(p,false,U(y,h),0,E?1:0)},o={source:r(a.trim(),s.indexOf(a,n.length)),value:void 0,key:void 0,index:void 0,finalized:false};let l=n.trim().replace(tn,"").trim();const c=n.indexOf(l),u=l.match(Ms);if(u){l=l.replace(Ms,"").trim();const p=u[1].trim();let S;if(p&&(S=s.indexOf(p,c+l.length),o.key=r(p,S,true)),u[2]){const E=u[2].trim();E&&(o.index=r(E,s.indexOf(E,o.key?S+p.length:c+l.length),true));}}return l&&(o.value=r(l,c,true)),o}function j(e,t){return le.slice(e,t)}function Ds(e){D.inSFCRoot&&(G.innerLoc=U(e+1,e+1)),Wt(G);const{tag:t,ns:s}=G;s===0&&v.isPreTag(t)&&Jt++,v.isVoidTag(t)?_t(G,e):(w.unshift(G),(s===1||s===2)&&(D.inXML=true)),G=null;}function St(e,t,s){const i=w[0]||He,n=i.children[i.children.length-1];n&&n.type===2?(n.content+=e,Ie(n.loc,s)):i.children.push({type:2,content:e,loc:U(t,s)});}function _t(e,t,s=false){s?Ie(e.loc,ks(t,60)):Ie(e.loc,nn(t,62)+1),D.inSFCRoot&&(e.children.length?e.innerLoc.end=m.extend({},e.children[e.children.length-1].loc.end):e.innerLoc.end=m.extend({},e.innerLoc.start),e.innerLoc.source=j(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:i,ns:n,children:a}=e;if(de||(i==="slot"?e.tagType=2:Vs(e)?e.tagType=3:an(e)&&(e.tagType=1)),D.inRCDATA||(e.children=Fs(a)),n===0&&v.isIgnoreNewlineTag(i)){const r=a[0];r&&r.type===2&&(r.content=r.content.replace(/^\r?\n/,""));}n===0&&v.isPreTag(i)&&Jt--,Kt===e&&(de=D.inVPre=false,Kt=null),D.inXML&&(w[0]?w[0].ns:v.ns)===0&&(D.inXML=false);{const r=e.props;if(!D.inSFCRoot&&Te("COMPILER_NATIVE_TEMPLATE",v)&&e.tag==="template"&&!Vs(e)){const l=w[0]||He,c=l.children.indexOf(e);l.children.splice(c,1,...e.children);}const o=r.find(l=>l.type===6&&l.name==="inline-template");o&&xe("COMPILER_INLINE_TEMPLATE",v,o.loc)&&e.children.length&&(o.value={type:2,content:j(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:o.loc});}}function nn(e,t){let s=e;for(;le.charCodeAt(s)!==t&&s<le.length-1;)s++;return s}function ks(e,t){let s=e;for(;le.charCodeAt(s)!==t&&s>=0;)s--;return s}const rn=new Set(["if","else","else-if","for","slot"]);function Vs({tag:e,props:t}){if(e==="template"){for(let s=0;s<t.length;s++)if(t[s].type===7&&rn.has(t[s].name))return  true}return  false}function an({tag:e,props:t}){if(v.isCustomElement(e))return  false;if(e==="component"||on(e.charCodeAt(0))||Xt(e)||v.isBuiltInComponent&&v.isBuiltInComponent(e)||v.isNativeTag&&!v.isNativeTag(e))return  true;for(let s=0;s<t.length;s++){const i=t[s];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return  true;if(xe("COMPILER_IS_ON_ELEMENT",v,i.loc))return  true}}else if(i.name==="bind"&&Ee(i.arg,"is")&&xe("COMPILER_IS_ON_ELEMENT",v,i.loc))return  true}return  false}function on(e){return e>64&&e<91}const ln=/\r\n/g;function Fs(e,t){const s=v.whitespace!=="preserve";let i=false;for(let n=0;n<e.length;n++){const a=e[n];if(a.type===2)if(Jt)a.content=a.content.replace(ln,`
`);else if(cn(a.content)){const r=e[n-1]&&e[n-1].type,o=e[n+1]&&e[n+1].type;!r||!o||s&&(r===3&&(o===3||o===1)||r===1&&(o===3||o===1&&fn(a.content)))?(i=true,e[n]=null):a.content=" ";}else s&&(a.content=$s(a.content));}return i?e.filter(Boolean):e}function cn(e){for(let t=0;t<e.length;t++)if(!Z(e.charCodeAt(t)))return  false;return  true}function fn(e){for(let t=0;t<e.length;t++){const s=e.charCodeAt(t);if(s===10||s===13)return  true}return  false}function $s(e){let t="",s=false;for(let i=0;i<e.length;i++)Z(e.charCodeAt(i))?s||(t+=" ",s=true):(t+=e[i],s=false);return t}function Wt(e){(w[0]||He).children.push(e);}function U(e,t){return {start:D.getPos(e),end:t==null?t:D.getPos(t),source:t==null?t:j(e,t)}}function pn(e){return U(e.start.offset,e.end.offset)}function Ie(e,t){e.end=D.getPos(t),e.source=j(e.start.offset,t);}function un(e){const t={type:6,name:e.rawName,nameLoc:U(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const s=e.exp.loc;s.end.offset<e.loc.end.offset&&(s.start.offset--,s.start.column--,s.end.offset++,s.end.column++),t.value={type:2,content:e.exp.content,loc:s};}return t}function gt(e,t=false,s,i=0,n=0){const a=I(e,t,s,i);if(!t&&v.prefixIdentifiers&&n!==3&&e.trim()){if(oe(e))return a.ast=null,a;try{const r=v.expressionPlugins,o={plugins:r?[...r,"typescript"]:["typescript"]};n===2?a.ast=Ae.parse(` ${e} `,o).program:n===1?a.ast=Ae.parseExpression(`(${e})=>{}`,o):a.ast=Ae.parseExpression(`(${e})`,o);}catch(r){a.ast=false,K(45,s.start.offset,r.message);}}return a}function K(e,t,s){v.onError(L(e,U(t,t),void 0,s));}function hn(){D.reset(),G=null,O=null,te="",ce=-1,Ne=-1,w.length=0;}function ws(e,t){if(hn(),le=e,v=m.extend({},Ls),t){let n;for(n in t)t[n]!=null&&(v[n]=t[n]);}D.mode=v.parseMode==="html"?1:v.parseMode==="sfc"?2:0,D.inXML=v.ns===1||v.ns===2;const s=t&&t.delimiters;s&&(D.delimiterOpen=ut(s[0]),D.delimiterClose=ut(s[1]));const i=He=os([],e);return D.parse(le),i.loc=U(0,e.length),i.children=Fs(i.children),He=null,i}function En(e,t){Tt(e,void 0,t,xs(e,e.children[0]));}function xs(e,t){const{children:s}=e;return s.length===1&&t.type===1&&!Be(t)}function Tt(e,t,s,i=false,n=false){const{children:a}=e,r=[];for(let u=0;u<a.length;u++){const p=a[u];if(p.type===1&&p.tagType===0){const S=i?0:ee(p,s);if(S>0){if(S>=2){p.codegenNode.patchFlag=-1,r.push(p);continue}}else {const E=p.codegenNode;if(E.type===13){const y=E.patchFlag;if((y===void 0||y===512||y===1)&&Bs(p,s)>=2){const h=Xs(p);h&&(E.props=s.hoist(h));}E.dynamicProps&&(E.dynamicProps=s.hoist(E.dynamicProps));}}}else if(p.type===12&&(i?0:ee(p,s))>=2){r.push(p);continue}if(p.type===1){const S=p.tagType===1;S&&s.scopes.vSlot++,Tt(p,e,s,false,n),S&&s.scopes.vSlot--;}else if(p.type===11)Tt(p,e,s,p.children.length===1,true);else if(p.type===9)for(let S=0;S<p.branches.length;S++)Tt(p.branches[S],e,s,p.branches[S].children.length===1,n);}let o=false;if(r.length===a.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&m.isArray(e.codegenNode.children))e.codegenNode.children=l(ue(e.codegenNode.children)),o=true;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!m.isArray(e.codegenNode.children)&&e.codegenNode.children.type===15){const u=c(e.codegenNode,"default");u&&(u.returns=l(ue(u.returns)),o=true);}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!m.isArray(t.codegenNode.children)&&t.codegenNode.children.type===15){const u=J(e,"slot",true),p=u&&u.arg&&c(t.codegenNode,u.arg);p&&(p.returns=l(ue(p.returns)),o=true);}}if(!o)for(const u of r)u.codegenNode=s.cache(u.codegenNode);function l(u){const p=s.cache(u);return n&&s.hmr&&(p.needArraySpread=true),p}function c(u,p){if(u.children&&!m.isArray(u.children)&&u.children.type===15){const S=u.children.properties.find(E=>E.key===p||E.key.content===p);return S&&S.value}}r.length&&s.transformHoist&&s.transformHoist(a,s,e);}function ee(e,t){const{constantCache:s}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const i=s.get(e);if(i!==void 0)return i;const n=e.codegenNode;if(n.type!==13||n.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject"&&e.tag!=="math")return 0;if(n.patchFlag===void 0){let r=3;const o=Bs(e,t);if(o===0)return s.set(e,0),0;o<r&&(r=o);for(let l=0;l<e.children.length;l++){const c=ee(e.children[l],t);if(c===0)return s.set(e,0),0;c<r&&(r=c);}if(r>1)for(let l=0;l<e.props.length;l++){const c=e.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const u=ee(c.exp,t);if(u===0)return s.set(e,0),0;u<r&&(r=u);}}if(n.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return s.set(e,0),0;t.removeHelper(pe),t.removeHelper(ge(t.inSSR,n.isComponent)),n.isBlock=false,t.helper(_e(t.inSSR,n.isComponent));}return s.set(e,r),r}else return s.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return ee(e.content,t);case 4:return e.constType;case 8:let a=3;for(let r=0;r<e.children.length;r++){const o=e.children[r];if(m.isString(o)||m.isSymbol(o))continue;const l=ee(o,t);if(l===0)return 0;l<a&&(a=l);}return a;case 20:return 2;default:return 0}}const dn=new Set([it,nt,Re,ve]);function Us(e,t){if(e.type===14&&!m.isString(e.callee)&&dn.has(e.callee)){const s=e.arguments[0];if(s.type===4)return ee(s,t);if(s.type===14)return Us(s,t)}return 0}function Bs(e,t){let s=3;const i=Xs(e);if(i&&i.type===15){const{properties:n}=i;for(let a=0;a<n.length;a++){const{key:r,value:o}=n[a],l=ee(r,t);if(l===0)return l;l<s&&(s=l);let c;if(o.type===4?c=ee(o,t):o.type===14?c=Us(o,t):c=0,c===0)return c;c<s&&(s=c);}}return s}function Xs(e){const t=e.codegenNode;if(t.type===13)return t.props}function Hs(e,{filename:t="",prefixIdentifiers:s=false,hoistStatic:i=false,hmr:n=false,cacheHandlers:a=false,nodeTransforms:r=[],directiveTransforms:o={},transformHoist:l=null,isBuiltInComponent:c=m.NOOP,isCustomElement:u=m.NOOP,expressionPlugins:p=[],scopeId:S=null,slotted:E=true,ssr:y=false,inSSR:h=false,ssrCssVars:d="",bindingMetadata:g=m.EMPTY_OBJ,inline:T=false,isTS:b=false,onError:P=$t,onWarn:F=hs,compatConfig:ae}){const ie=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),A={filename:t,selfName:ie&&m.capitalize(m.camelize(ie[1])),prefixIdentifiers:s,hoistStatic:i,hmr:n,cacheHandlers:a,nodeTransforms:r,directiveTransforms:o,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:p,scopeId:S,slotted:E,ssr:y,inSSR:h,ssrCssVars:d,bindingMetadata:g,inline:T,isTS:b,onError:P,onWarn:F,compatConfig:ae,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:false,helper(_){const N=A.helpers.get(_)||0;return A.helpers.set(_,N+1),_},removeHelper(_){const N=A.helpers.get(_);if(N){const C=N-1;C?A.helpers.set(_,C):A.helpers.delete(_);}},helperString(_){return `_${W[A.helper(_)]}`},replaceNode(_){A.parent.children[A.childIndex]=A.currentNode=_;},removeNode(_){const N=A.parent.children,C=_?N.indexOf(_):A.currentNode?A.childIndex:-1;!_||_===A.currentNode?(A.currentNode=null,A.onNodeRemoved()):A.childIndex>C&&(A.childIndex--,A.onNodeRemoved()),A.parent.children.splice(C,1);},onNodeRemoved:m.NOOP,addIdentifiers(_){m.isString(_)?R(_):_.identifiers?_.identifiers.forEach(R):_.type===4&&R(_.content);},removeIdentifiers(_){m.isString(_)?M(_):_.identifiers?_.identifiers.forEach(M):_.type===4&&M(_.content);},hoist(_){m.isString(_)&&(_=I(_)),A.hoists.push(_);const N=I(`_hoisted_${A.hoists.length}`,false,_.loc,2);return N.hoisted=_,N},cache(_,N=false,C=false){const $=ls(A.cached.length,_,N,C);return A.cached.push($),$}};A.filters=new Set;function R(_){const{identifiers:N}=A;N[_]===void 0&&(N[_]=0),N[_]++;}function M(_){A.identifiers[_]--;}return A}function js(e,t){const s=Hs(e,t);je(e,s),t.hoistStatic&&En(e,s),t.ssr||mn(e,s),e.helpers=new Set([...s.helpers.keys()]),e.components=[...s.components],e.directives=[...s.directives],e.imports=s.imports,e.hoists=s.hoists,e.temps=s.temps,e.cached=s.cached,e.transformed=true,e.filters=[...s.filters];}function mn(e,t){const{helper:s}=t,{children:i}=e;if(i.length===1){const n=i[0];if(xs(e,n)&&n.codegenNode){const a=n.codegenNode;a.type===13&&pt(a,t),e.codegenNode=a;}else e.codegenNode=n;}else if(i.length>1){let n=64;e.codegenNode=Pe(t,s(Oe),void 0,e.children,n,void 0,void 0,true,void 0,false);}}function Sn(e,t){let s=0;const i=()=>{s--;};for(;s<e.children.length;s++){const n=e.children[s];m.isString(n)||(t.grandParent=t.parent,t.parent=e,t.childIndex=s,t.onNodeRemoved=i,je(n,t));}}function je(e,t){t.currentNode=e;const{nodeTransforms:s}=t,i=[];for(let a=0;a<s.length;a++){const r=s[a](e,t);if(r&&(m.isArray(r)?i.push(...r):i.push(r)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(be);break;case 5:t.ssr||t.helper(st);break;case 9:for(let a=0;a<e.branches.length;a++)je(e.branches[a],t);break;case 10:case 11:case 1:case 0:Sn(e,t);break}t.currentNode=e;let n=i.length;for(;n--;)i[n]();}function Yt(e,t){const s=m.isString(e)?i=>i===e:i=>e.test(i);return (i,n)=>{if(i.type===1){const{props:a}=i;if(i.tagType===3&&a.some(Gt))return;const r=[];for(let o=0;o<a.length;o++){const l=a[o];if(l.type===7&&s(l.name)){a.splice(o,1),o--;const c=t(i,l,n);c&&r.push(c);}}return r}}}const yt="/*@__PURE__*/",Nt=e=>`${W[e]}: _${W[e]}`;function qs(e,{mode:t="function",prefixIdentifiers:s=t==="module",sourceMap:i=false,filename:n="template.vue.html",scopeId:a=null,optimizeImports:r=false,runtimeGlobalName:o="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=false,isTS:p=false,inSSR:S=false}){const E={mode:t,prefixIdentifiers:s,sourceMap:i,filename:n,scopeId:a,optimizeImports:r,runtimeGlobalName:o,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:p,inSSR:S,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:false,map:void 0,helper(d){return `_${W[d]}`},push(d,g=-2,T){if(E.code+=d,E.map){if(T){let b;if(T.type===4&&!T.isStatic){const P=T.content.replace(/^_ctx\./,"");P!==T.content&&oe(P)&&(b=P);}h(T.loc.start,b);}g===-3?qt(E,d):(E.offset+=d.length,g===-2?E.column+=d.length:(g===-1&&(g=d.length-1),E.line++,E.column=d.length-g)),T&&T.loc!==B&&h(T.loc.end);}},indent(){y(++E.indentLevel);},deindent(d=false){d?--E.indentLevel:y(--E.indentLevel);},newline(){y(E.indentLevel);}};function y(d){E.push(`
`+"  ".repeat(d),0);}function h(d,g=null){const{_names:T,_mappings:b}=E.map;g!==null&&!T.has(g)&&T.add(g),b.add({originalLine:d.line,originalColumn:d.column-1,generatedLine:E.line,generatedColumn:E.column-1,source:n,name:g});}return i&&(E.map=new bi.SourceMapGenerator,E.map.setSourceContent(n,E.source),E.map._sources.add(n)),E}function Gs(e,t={}){const s=qs(e,t);t.onContextCreated&&t.onContextCreated(s);const{mode:i,push:n,prefixIdentifiers:a,indent:r,deindent:o,newline:l,scopeId:c,ssr:u}=s,p=Array.from(e.helpers),S=p.length>0,E=!a&&i!=="module",y=c!=null&&i==="module",h=!!t.inline,d=h?qs(e,t):s;i==="module"?gn(e,d,y,h):_n(e,d);const g=u?"ssrRender":"render",T=u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"];t.bindingMetadata&&!t.inline&&T.push("$props","$setup","$data","$options");const b=t.isTS?T.map(P=>`${P}: any`).join(","):T.join(", ");if(n(h?`(${b}) => {`:`function ${g}(${b}) {`),r(),E&&(n("with (_ctx) {"),r(),S&&(n(`const { ${p.map(Nt).join(", ")} } = _Vue
`,-1),l())),e.components.length&&(zt(e.components,"component",s),(e.directives.length||e.temps>0)&&l()),e.directives.length&&(zt(e.directives,"directive",s),e.temps>0&&l()),e.filters&&e.filters.length&&(l(),zt(e.filters,"filter",s),l()),e.temps>0){n("let ");for(let P=0;P<e.temps;P++)n(`${P>0?", ":""}_temp${P}`);}return (e.components.length||e.directives.length||e.temps)&&(n(`
`,0),l()),u||n("return "),e.codegenNode?V(e.codegenNode,s):n("null"),E&&(o(),n("}")),o(),n("}"),{ast:e,code:s.code,preamble:h?d.code:"",map:s.map?s.map.toJSON():void 0}}function _n(e,t){const{ssr:s,prefixIdentifiers:i,push:n,newline:a,runtimeModuleName:r,runtimeGlobalName:o,ssrRuntimeModuleName:l}=t,c=s?`require(${JSON.stringify(r)})`:o,u=Array.from(e.helpers);if(u.length>0){if(i)n(`const { ${u.map(Nt).join(", ")} } = ${c}
`,-1);else if(n(`const _Vue = ${c}
`,-1),e.hoists.length){const p=[Ke,We,be,Ye,Mt].filter(S=>u.includes(S)).map(Nt).join(", ");n(`const { ${p} } = _Vue
`,-1);}}e.ssrHelpers&&e.ssrHelpers.length&&n(`const { ${e.ssrHelpers.map(Nt).join(", ")} } = require("${l}")
`,-1),Js(e.hoists,t),a(),n("return ");}function gn(e,t,s,i){const{push:n,newline:a,optimizeImports:r,runtimeModuleName:o,ssrRuntimeModuleName:l}=t;if(e.helpers.size){const c=Array.from(e.helpers);r?(n(`import { ${c.map(u=>W[u]).join(", ")} } from ${JSON.stringify(o)}
`,-1),n(`
// Binding optimization for webpack code-split
const ${c.map(u=>`_${W[u]} = ${W[u]}`).join(", ")}
`,-1)):n(`import { ${c.map(u=>`${W[u]} as _${W[u]}`).join(", ")} } from ${JSON.stringify(o)}
`,-1);}e.ssrHelpers&&e.ssrHelpers.length&&n(`import { ${e.ssrHelpers.map(c=>`${W[c]} as _${W[c]}`).join(", ")} } from "${l}"
`,-1),e.imports.length&&(Tn(e.imports,t),a()),Js(e.hoists,t),a(),i||n("export ");}function zt(e,t,{helper:s,push:i,newline:n,isTS:a}){const r=s(t==="filter"?Ze:t==="component"?ke:Qe);for(let o=0;o<e.length;o++){let l=e[o];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${ye(l,t)} = ${r}(${JSON.stringify(l)}${c?", true":""})${a?"!":""}`),o<e.length-1&&n();}}function Js(e,t){if(!e.length)return;t.pure=true;const{push:s,newline:i}=t;i();for(let n=0;n<e.length;n++){const a=e[n];a&&(s(`const _hoisted_${n+1} = `),V(a,t),i());}t.pure=false;}function Tn(e,t){e.length&&e.forEach(s=>{t.push("import "),V(s.exp,t),t.push(` from '${s.path}'`),t.newline();});}function yn(e){return m.isString(e)||e.type===4||e.type===2||e.type===5||e.type===8}function It(e,t){const s=e.length>3||e.some(i=>m.isArray(i)||!yn(i));t.push("["),s&&t.indent(),Me(e,t,s),s&&t.deindent(),t.push("]");}function Me(e,t,s=false,i=true){const{push:n,newline:a}=t;for(let r=0;r<e.length;r++){const o=e[r];m.isString(o)?n(o,-3):m.isArray(o)?It(o,t):V(o,t),r<e.length-1&&(s?(i&&n(","),a()):i&&n(", "));}}function V(e,t){if(m.isString(e)){t.push(e,-3);return}if(m.isSymbol(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:V(e.codegenNode,t);break;case 2:Nn(e,t);break;case 4:Ks(e,t);break;case 5:In(e,t);break;case 12:V(e.codegenNode,t);break;case 8:Ws(e,t);break;case 3:On(e,t);break;case 13:Cn(e,t);break;case 14:Rn(e,t);break;case 15:vn(e,t);break;case 17:Pn(e,t);break;case 18:Ln(e,t);break;case 19:Mn(e,t);break;case 20:Dn(e,t);break;case 21:Me(e.body,t,true,false);break;case 22:kn(e,t);break;case 23:Ys(e,t);break;case 24:Vn(e,t);break;case 25:Fn(e,t);break;case 26:$n(e,t);break}}function Nn(e,t){t.push(JSON.stringify(e.content),-3,e);}function Ks(e,t){const{content:s,isStatic:i}=e;t.push(i?JSON.stringify(s):s,-3,e);}function In(e,t){const{push:s,helper:i,pure:n}=t;n&&s(yt),s(`${i(st)}(`),V(e.content,t),s(")");}function Ws(e,t){for(let s=0;s<e.children.length;s++){const i=e.children[s];m.isString(i)?t.push(i,-3):V(i,t);}}function An(e,t){const{push:s}=t;if(e.type===8)s("["),Ws(e,t),s("]");else if(e.isStatic){const i=oe(e.content)?e.content:JSON.stringify(e.content);s(i,-2,e);}else s(`[${e.content}]`,-3,e);}function On(e,t){const{push:s,helper:i,pure:n}=t;n&&s(yt),s(`${i(be)}(${JSON.stringify(e.content)})`,-3,e);}function Cn(e,t){const{push:s,helper:i,pure:n}=t,{tag:a,props:r,children:o,patchFlag:l,dynamicProps:c,directives:u,isBlock:p,disableTracking:S,isComponent:E}=e;let y;l&&(y=String(l)),u&&s(i(et)+"("),p&&s(`(${i(pe)}(${S?"true":""}), `),n&&s(yt);const h=p?ge(t.inSSR,E):_e(t.inSSR,E);s(i(h)+"(",-2,e),Me(bn([a,r,o,y,c]),t),s(")"),p&&s(")"),u&&(s(", "),V(u,t),s(")"));}function bn(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(s=>s||"null")}function Rn(e,t){const{push:s,helper:i,pure:n}=t,a=m.isString(e.callee)?e.callee:i(e.callee);n&&s(yt),s(a+"(",-2,e),Me(e.arguments,t),s(")");}function vn(e,t){const{push:s,indent:i,deindent:n,newline:a}=t,{properties:r}=e;if(!r.length){s("{}",-2,e);return}const o=r.length>1||r.some(l=>l.value.type!==4);s(o?"{":"{ "),o&&i();for(let l=0;l<r.length;l++){const{key:c,value:u}=r[l];An(c,t),s(": "),V(u,t),l<r.length-1&&(s(","),a());}o&&n(),s(o?"}":" }");}function Pn(e,t){It(e.elements,t);}function Ln(e,t){const{push:s,indent:i,deindent:n}=t,{params:a,returns:r,body:o,newline:l,isSlot:c}=e;c&&s(`_${W[lt]}(`),s("(",-2,e),m.isArray(a)?Me(a,t):a&&V(a,t),s(") => "),(l||o)&&(s("{"),i()),r?(l&&s("return "),m.isArray(r)?It(r,t):V(r,t)):o&&V(o,t),(l||o)&&(n(),s("}")),c&&(e.isNonScopedSlot&&s(", undefined, true"),s(")"));}function Mn(e,t){const{test:s,consequent:i,alternate:n,newline:a}=e,{push:r,indent:o,deindent:l,newline:c}=t;if(s.type===4){const p=!oe(s.content);p&&r("("),Ks(s,t),p&&r(")");}else r("("),V(s,t),r(")");a&&o(),t.indentLevel++,a||r(" "),r("? "),V(i,t),t.indentLevel--,a&&c(),a||r(" "),r(": ");const u=n.type===19;u||t.indentLevel++,V(n,t),u||t.indentLevel--,a&&l(true);}function Dn(e,t){const{push:s,helper:i,indent:n,deindent:a,newline:r}=t,{needPauseTracking:o,needArraySpread:l}=e;l&&s("[...("),s(`_cache[${e.index}] || (`),o&&(n(),s(`${i(Fe)}(-1`),e.inVOnce&&s(", true"),s("),"),r(),s("(")),s(`_cache[${e.index}] = `),V(e.value,t),o&&(s(`).cacheIndex = ${e.index},`),r(),s(`${i(Fe)}(1),`),r(),s(`_cache[${e.index}]`),a()),s(")"),l&&s(")]");}function kn(e,t){const{push:s,indent:i,deindent:n}=t;s("`");const a=e.elements.length,r=a>3;for(let o=0;o<a;o++){const l=e.elements[o];m.isString(l)?s(l.replace(/(`|\$|\\)/g,"\\$1"),-3):(s("${"),r&&i(),V(l,t),r&&n(),s("}"));}s("`");}function Ys(e,t){const{push:s,indent:i,deindent:n}=t,{test:a,consequent:r,alternate:o}=e;s("if ("),V(a,t),s(") {"),i(),V(r,t),n(),s("}"),o&&(s(" else "),o.type===23?Ys(o,t):(s("{"),i(),V(o,t),n(),s("}")));}function Vn(e,t){V(e.left,t),t.push(" = "),V(e.right,t);}function Fn(e,t){t.push("("),Me(e.expressions,t),t.push(")");}function $n({returns:e},t){t.push("return "),m.isArray(e)?It(e,t):V(e,t);}const wn=m.makeMap("true,false,null,this"),zs=(e,t)=>{if(e.type===5)e.content=q(e.content,t);else if(e.type===1){const s=J(e,"memo");for(let i=0;i<e.props.length;i++){const n=e.props[i];if(n.type===7&&n.name!=="for"){const a=n.exp,r=n.arg;a&&a.type===4&&!(n.name==="on"&&r)&&!(s&&r&&r.type===4&&r.content==="key")&&(n.exp=q(a,t,n.name==="slot")),r&&r.type===4&&!r.isStatic&&(n.arg=q(r,t));}}}};function q(e,t,s=false,i=false,n=Object.create(t.identifiers)){if(!t.prefixIdentifiers||!e.content.trim())return e;const{inline:a,bindingMetadata:r}=t,o=(h,d,g)=>{const T=m.hasOwn(r,h)&&r[h];if(a){const b=d&&d.type==="AssignmentExpression"&&d.left===g,P=d&&d.type==="UpdateExpression"&&d.argument===g,F=d&&wt(d,p),ae=d&&Ss(p),ie=A=>{const R=`${t.helperString($e)}(${A})`;return ae?`(${R})`:R};if(Qs(T)||T==="setup-reactive-const"||n[h])return h;if(T==="setup-ref")return `${h}.value`;if(T==="setup-maybe-ref")return b||P||F?`${h}.value`:ie(h);if(T==="setup-let")if(b){const{right:A,operator:R}=d,M=l.slice(A.start-1,A.end-1),_=Qt(q(I(M,false),t,false,false,S));return `${t.helperString(we)}(${h})${t.isTS?` //@ts-ignore
`:""} ? ${h}.value ${R} ${_} : ${h}`}else if(P){g.start=d.start,g.end=d.end;const{prefix:A,operator:R}=d,M=A?R:"",_=A?"":R;return `${t.helperString(we)}(${h})${t.isTS?` //@ts-ignore
`:""} ? ${M}${h}.value${_} : ${M}${h}${_}`}else return F?h:ie(h);else {if(T==="props")return m.genPropsAccessExp(h);if(T==="props-aliased")return m.genPropsAccessExp(r.__propsAliases[h])}}else {if(T&&T.startsWith("setup")||T==="literal-const")return `$setup.${h}`;if(T==="props-aliased")return `$props['${r.__propsAliases[h]}']`;if(T)return `$${T}.${h}`}return `_ctx.${h}`},l=e.content;let c=e.ast;if(c===false)return e;if(c===null||!c&&oe(l)){const h=t.identifiers[l],d=m.isGloballyAllowed(l),g=wn(l);return !s&&!h&&!g&&(!d||r[l])?(Qs(r[l])&&(e.constType=1),e.content=o(l)):h||(g?e.constType=3:e.constType=2),e}if(!c){const h=i?` ${l} `:`(${l})${s?"=>{}":""}`;try{c=Ae.parseExpression(h,{sourceType:"module",plugins:t.expressionPlugins});}catch(d){return t.onError(L(45,e.loc,void 0,d.message)),e}}const u=[],p=[],S=Object.create(t.identifiers);ds(c,(h,d,g,T,b)=>{if(Is(h,d)||h.name.startsWith("_filter_"))return;const P=T&&xn(h);P&&!b?(Ut(d)&&d.shorthand&&(h.prefix=`${h.name}: `),h.name=o(h.name,d,h),u.push(h)):(!(P&&b)&&(!d||d.type!=="CallExpression"&&d.type!=="NewExpression"&&d.type!=="MemberExpression")&&(h.isConstant=true),u.push(h));},true,p,S);const E=[];u.sort((h,d)=>h.start-d.start),u.forEach((h,d)=>{const g=h.start-1,T=h.end-1,b=u[d-1],P=l.slice(b?b.end-1:0,g);(P.length||h.prefix)&&E.push(P+(h.prefix||""));const F=l.slice(g,T);E.push(I(h.name,false,{start:jt(e.loc.start,F,g),end:jt(e.loc.start,F,T),source:F},h.isConstant?3:0)),d===u.length-1&&T<l.length&&E.push(l.slice(T));});let y;return E.length?(y=Q(E,e.loc),y.ast=c):(y=e,y.constType=3),y.identifiers=Object.keys(S),y}function xn(e){return !(m.isGloballyAllowed(e.name)||e.name==="require")}function Qt(e){return m.isString(e)?e:e.type===4?e.content:e.children.map(Qt).join("")}function Qs(e){return e==="setup-const"||e==="literal-const"}const Un=Yt(/^(if|else|else-if)$/,(e,t,s)=>Zs(e,t,s,(i,n,a)=>{const r=s.parent.children;let o=r.indexOf(i),l=0;for(;o-->=0;){const c=r[o];c&&c.type===9&&(l+=c.branches.length);}return ()=>{if(a)i.codegenNode=ti(n,l,s);else {const c=Xn(i.codegenNode);c.alternate=ti(n,l+i.branches.length-1,s);}}}));function Zs(e,t,s,i){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const n=t.exp?t.exp.loc:e.loc;s.onError(L(28,t.loc)),t.exp=I("true",false,n);}if(s.prefixIdentifiers&&t.exp&&(t.exp=q(t.exp,s)),t.name==="if"){const n=ei(e,t),a={type:9,loc:pn(e.loc),branches:[n]};if(s.replaceNode(a),i)return i(a,n,true)}else {const n=s.parent.children;let a=n.indexOf(e);for(;a-->=-1;){const r=n[a];if(r&&r.type===3){s.removeNode(r);continue}if(r&&r.type===2&&!r.content.trim().length){s.removeNode(r);continue}if(r&&r.type===9){t.name==="else-if"&&r.branches[r.branches.length-1].condition===void 0&&s.onError(L(30,e.loc)),s.removeNode();const o=ei(e,t);{const c=o.userKey;c&&r.branches.forEach(({userKey:u})=>{Bn(u,c)&&s.onError(L(29,o.userKey.loc));});}r.branches.push(o);const l=i&&i(r,o,false);je(o,s),l&&l(),s.currentNode=null;}else s.onError(L(30,e.loc));break}}}function ei(e,t){const s=e.tagType===3;return {type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:s&&!J(e,"for")?e.children:[e],userKey:Ue(e,"key"),isTemplateIf:s}}function ti(e,t,s){return e.condition?ft(e.condition,si(e,t,s),X(s.helper(be),['""',"true"])):si(e,t,s)}function si(e,t,s){const{helper:i}=s,n=x("key",I(`${t}`,false,B,2)),{children:a}=e,r=a[0];if(a.length!==1||r.type!==1)if(a.length===1&&r.type===11){const l=r.codegenNode;return Xe(l,n,s),l}else return Pe(s,i(Oe),z([n]),a,64,void 0,void 0,true,false,false,e.loc);else {const l=r.codegenNode,c=vs(l);return c.type===13&&pt(c,s),Xe(c,n,s),l}}function Bn(e,t){if(!e||e.type!==t.type)return  false;if(e.type===6){if(e.value.content!==t.value.content)return  false}else {const s=e.exp,i=t.exp;if(s.type!==i.type||s.type!==4||s.isStatic!==i.isStatic||s.content!==i.content)return  false}return  true}function Xn(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value);}const ii=(e,t,s)=>{const{modifiers:i,loc:n}=e,a=e.arg;let{exp:r}=e;if(r&&r.type===4&&!r.content.trim())return s.onError(L(34,n)),{props:[x(a,I("",true,n))]};if(!r){if(a.type!==4||!a.isStatic)return s.onError(L(52,a.loc)),{props:[x(a,I("",true,n))]};ni(e,s),r=e.exp;}return a.type!==4?(a.children.unshift("("),a.children.push(') || ""')):a.isStatic||(a.content=`${a.content} || ""`),i.some(o=>o.content==="camel")&&(a.type===4?a.isStatic?a.content=m.camelize(a.content):a.content=`${s.helperString(at)}(${a.content})`:(a.children.unshift(`${s.helperString(at)}(`),a.children.push(")"))),s.inSSR||(i.some(o=>o.content==="prop")&&ri(a,"."),i.some(o=>o.content==="attr")&&ri(a,"^")),{props:[x(a,r)]}},ni=(e,t)=>{const s=e.arg,i=m.camelize(s.content);e.exp=I(i,false,s.loc),e.exp=q(e.exp,t);},ri=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"));},Hn=Yt("for",(e,t,s)=>{const{helper:i,removeHelper:n}=s;return ai(e,t,s,a=>{const r=X(i(tt),[a.source]),o=Le(e),l=J(e,"memo"),c=Ue(e,"key",false,true),u=c&&c.type===7;u&&!c.exp&&ni(c,s);let p=c&&(c.type===6?c.value?I(c.value.content,true):void 0:c.exp);l&&p&&u&&(c.exp=p=q(p,s));const S=c&&p?x("key",p):null;o&&(l&&(l.exp=q(l.exp,s)),S&&c.type!==6&&(S.value=q(S.value,s)));const E=a.source.type===4&&a.source.constType>0,y=E?64:c?128:256;return a.codegenNode=Pe(s,i(Oe),void 0,r,y,void 0,void 0,true,!E,false,e.loc),()=>{let h;const{children:d}=a;o&&e.children.some(b=>{if(b.type===1){const P=Ue(b,"key");if(P)return s.onError(L(33,P.loc)),true}});const g=d.length!==1||d[0].type!==1,T=Be(e)?e:o&&e.children.length===1&&Be(e.children[0])?e.children[0]:null;if(T?(h=T.codegenNode,o&&S&&Xe(h,S,s)):g?h=Pe(s,i(Oe),S?z([S]):void 0,e.children,64,void 0,void 0,true,void 0,false):(h=d[0].codegenNode,o&&S&&Xe(h,S,s),h.isBlock!==!E&&(h.isBlock?(n(pe),n(ge(s.inSSR,h.isComponent))):n(_e(s.inSSR,h.isComponent))),h.isBlock=!E,h.isBlock?(i(pe),i(ge(s.inSSR,h.isComponent))):i(_e(s.inSSR,h.isComponent))),l){const b=Se(At(a.parseResult,[I("_cached")]));b.body=cs([Q(["const _memo = (",l.exp,")"]),Q(["if (_cached",...p?[" && _cached.key === ",p]:[],` && ${s.helperString(Vt)}(_cached, _memo)) return _cached`]),Q(["const _item = ",h]),I("_item.memo = _memo"),I("return _item")]),r.arguments.push(b,I("_cache"),I(String(s.cached.length))),s.cached.push(null);}else r.arguments.push(Se(At(a.parseResult),h,true));}})});function ai(e,t,s,i){if(!t.exp){s.onError(L(31,t.loc));return}const n=t.forParseResult;if(!n){s.onError(L(32,t.loc));return}Zt(n,s);const{addIdentifiers:a,removeIdentifiers:r,scopes:o}=s,{source:l,value:c,key:u,index:p}=n,S={type:11,loc:t.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:p,parseResult:n,children:Le(e)?e.children:[e]};s.replaceNode(S),o.vFor++,s.prefixIdentifiers&&(c&&a(c),u&&a(u),p&&a(p));const E=i&&i(S);return ()=>{o.vFor--,s.prefixIdentifiers&&(c&&r(c),u&&r(u),p&&r(p)),E&&E();}}function Zt(e,t){e.finalized||(t.prefixIdentifiers&&(e.source=q(e.source,t),e.key&&(e.key=q(e.key,t,true)),e.index&&(e.index=q(e.index,t,true)),e.value&&(e.value=q(e.value,t,true))),e.finalized=true);}function At({value:e,key:t,index:s},i=[]){return jn([e,t,s,...i])}function jn(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((s,i)=>s||I("_".repeat(i+1),false))}const oi=I("undefined",false),li=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const s=J(e,"slot");if(s){const i=s.exp;return t.prefixIdentifiers&&i&&t.addIdentifiers(i),t.scopes.vSlot++,()=>{t.prefixIdentifiers&&i&&t.removeIdentifiers(i),t.scopes.vSlot--;}}}},ci=(e,t)=>{let s;if(Le(e)&&e.props.some(Gt)&&(s=J(e,"for"))){const i=s.forParseResult;if(i){Zt(i,t);const{value:n,key:a,index:r}=i,{addIdentifiers:o,removeIdentifiers:l}=t;return n&&o(n),a&&o(a),r&&o(r),()=>{n&&l(n),a&&l(a),r&&l(r);}}}},qn=(e,t,s,i)=>Se(e,s,false,true,s.length?s[0].loc:i);function fi(e,t,s=qn){t.helper(lt);const{children:i,loc:n}=e,a=[],r=[];let o=t.scopes.vSlot>0||t.scopes.vFor>0;!t.ssr&&t.prefixIdentifiers&&(o=Y(e,t.identifiers));const l=J(e,"slot",true);if(l){const{arg:d,exp:g}=l;d&&!se(d)&&(o=true),a.push(x(d||I("default",true),s(g,void 0,i,n)));}let c=false,u=false;const p=[],S=new Set;let E=0;for(let d=0;d<i.length;d++){const g=i[d];let T;if(!Le(g)||!(T=J(g,"slot",true))){g.type!==3&&p.push(g);continue}if(l){t.onError(L(37,T.loc));break}c=true;const{children:b,loc:P}=g,{arg:F=I("default",true),exp:ae,loc:ie}=T;let A;se(F)?A=F?F.content:"default":o=true;const R=J(g,"for"),M=s(ae,R,b,P);let _,N;if(_=J(g,"if"))o=true,r.push(ft(_.exp,Ot(F,M,E++),oi));else if(N=J(g,/^else(-if)?$/,true)){let C=d,$;for(;C--&&($=i[C],$.type===3););if($&&Le($)&&J($,/^(else-)?if$/)){let k=r[r.length-1];for(;k.alternate.type===19;)k=k.alternate;k.alternate=N.exp?ft(N.exp,Ot(F,M,E++),oi):Ot(F,M,E++);}else t.onError(L(30,N.loc));}else if(R){o=true;const C=R.forParseResult;C?(Zt(C,t),r.push(X(t.helper(tt),[C.source,Se(At(C),Ot(F,M),true)]))):t.onError(L(32,R.loc));}else {if(A){if(S.has(A)){t.onError(L(38,ie));continue}S.add(A),A==="default"&&(u=true);}a.push(x(F,M));}}if(!l){const d=(g,T)=>{const b=s(g,void 0,T,n);return t.compatConfig&&(b.isNonScopedSlot=true),x("default",b)};c?p.length&&p.some(g=>pi(g))&&(u?t.onError(L(39,p[0].loc)):a.push(d(void 0,p))):a.push(d(void 0,i));}const y=o?2:Ct(e.children)?3:1;let h=z(a.concat(x("_",I(y+"",false))),n);return r.length&&(h=X(t.helper(kt),[h,ue(r)])),{slots:h,hasDynamicSlots:o}}function Ot(e,t,s){const i=[x("name",e),x("fn",t)];return s!=null&&i.push(x("key",I(String(s),true))),z(i)}function Ct(e){for(let t=0;t<e.length;t++){const s=e[t];switch(s.type){case 1:if(s.tagType===2||Ct(s.children))return  true;break;case 9:if(Ct(s.branches))return  true;break;case 10:case 11:if(Ct(s.children))return  true;break}}return  false}function pi(e){return e.type!==2&&e.type!==12?true:e.type===2?!!e.content.trim():pi(e.content)}const ui=new WeakMap,hi=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:i,props:n}=e,a=e.tagType===1;let r=a?Ei(e,t):`"${i}"`;const o=m.isObject(r)&&r.callee===ze;let l,c,u=0,p,S,E,y=o||r===Ce||r===Je||!a&&(i==="svg"||i==="foreignObject"||i==="math");if(n.length>0){const h=ts(e,t,void 0,a,o);l=h.props,u=h.patchFlag,S=h.dynamicPropNames;const d=h.directives;E=d&&d.length?ue(d.map(g=>mi(g,t))):void 0,h.shouldUseBlock&&(y=true);}if(e.children.length>0)if(r===De&&(y=true,u|=1024),a&&r!==Ce&&r!==De){const{slots:d,hasDynamicSlots:g}=fi(e,t);c=d,g&&(u|=1024);}else if(e.children.length===1&&r!==Ce){const d=e.children[0],g=d.type,T=g===5||g===8;T&&ee(d,t)===0&&(u|=1),T||g===2?c=d:c=e.children;}else c=e.children;S&&S.length&&(p=Jn(S)),e.codegenNode=Pe(t,r,l,c,u===0?void 0:u,p,E,!!y,false,a,e.loc);};function Ei(e,t,s=false){let{tag:i}=e;const n=ss(i),a=Ue(e,"is",false,true);if(a)if(n||Te("COMPILER_IS_ON_ELEMENT",t)){let o;if(a.type===6?o=a.value&&I(a.value.content,true):(o=a.exp,o||(o=I("is",false,a.arg.loc),o=a.exp=q(o,t))),o)return X(t.helper(ze),[o])}else a.type===6&&a.value.content.startsWith("vue:")&&(i=a.value.content.slice(4));const r=Xt(i)||t.isBuiltInComponent(i);if(r)return s||t.helper(r),r;{const o=es(i,t);if(o)return o;const l=i.indexOf(".");if(l>0){const c=es(i.slice(0,l),t);if(c)return c+i.slice(l)}}return t.selfName&&m.capitalize(m.camelize(i))===t.selfName?(t.helper(ke),t.components.add(i+"__self"),ye(i,"component")):(t.helper(ke),t.components.add(i),ye(i,"component"))}function es(e,t){const s=t.bindingMetadata;if(!s||s.__isScriptSetup===false)return;const i=m.camelize(e),n=m.capitalize(i),a=c=>{if(s[e]===c)return e;if(s[i]===c)return i;if(s[n]===c)return n},r=a("setup-const")||a("setup-reactive-const")||a("literal-const");if(r)return t.inline?r:`$setup[${JSON.stringify(r)}]`;const o=a("setup-let")||a("setup-ref")||a("setup-maybe-ref");if(o)return t.inline?`${t.helperString($e)}(${o})`:`$setup[${JSON.stringify(o)}]`;const l=a("props");if(l)return `${t.helperString($e)}(${t.inline?"__props":"$props"}[${JSON.stringify(l)}])`}function ts(e,t,s=e.props,i,n,a=false){const{tag:r,loc:o,children:l}=e;let c=[];const u=[],p=[],S=l.length>0;let E=false,y=0,h=false,d=false,g=false,T=false,b=false,P=false;const F=[],ae=M=>{c.length&&(u.push(z(di(c),o)),c=[]),M&&u.push(M);},ie=()=>{t.scopes.vFor>0&&c.push(x(I("ref_for",true),I("true")));},A=({key:M,value:_})=>{if(se(M)){const N=M.content,C=m.isOn(N);if(C&&(!i||n)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!m.isReservedProp(N)&&(T=true),C&&m.isReservedProp(N)&&(P=true),C&&_.type===14&&(_=_.arguments[0]),_.type===20||(_.type===4||_.type===8)&&ee(_,t)>0)return;N==="ref"?h=true:N==="class"?d=true:N==="style"?g=true:N!=="key"&&!F.includes(N)&&F.push(N),i&&(N==="class"||N==="style")&&!F.includes(N)&&F.push(N);}else b=true;};for(let M=0;M<s.length;M++){const _=s[M];if(_.type===6){const{loc:N,name:C,nameLoc:$,value:k}=_;let fe=true;if(C==="ref"&&(h=true,ie(),k&&t.inline)){const ne=t.bindingMetadata[k.content];(ne==="setup-let"||ne==="setup-ref"||ne==="setup-maybe-ref")&&(fe=false,c.push(x(I("ref_key",true),I(k.content,true,k.loc))));}if(C==="is"&&(ss(r)||k&&k.content.startsWith("vue:")||Te("COMPILER_IS_ON_ELEMENT",t)))continue;c.push(x(I(C,true,$),I(k?k.content:"",fe,k?k.loc:N)));}else {const{name:N,arg:C,exp:$,loc:k,modifiers:fe}=_,ne=N==="bind",Rt=N==="on";if(N==="slot"){i||t.onError(L(40,k));continue}if(N==="once"||N==="memo"||N==="is"||ne&&Ee(C,"is")&&(ss(r)||Te("COMPILER_IS_ON_ELEMENT",t))||Rt&&a)continue;if((ne&&Ee(C,"key")||Rt&&S&&Ee(C,"vue:before-update"))&&(E=true),ne&&Ee(C,"ref")&&ie(),!C&&(ne||Rt)){if(b=true,$)if(ne){if(ie(),ae(),Te("COMPILER_V_BIND_OBJECT_ORDER",t)){u.unshift($);continue}u.push($);}else ae({type:14,loc:k,callee:t.helper(rt),arguments:i?[$]:[$,"true"]});else t.onError(L(ne?34:35,k));continue}ne&&fe.some(Ge=>Ge.content==="prop")&&(y|=32);const Ai=t.directiveTransforms[N];if(Ai){const{props:Ge,needRuntime:is}=Ai(_,e,t);!a&&Ge.forEach(A),Rt&&C&&!se(C)?ae(z(Ge,o)):c.push(...Ge),is&&(p.push(_),m.isSymbol(is)&&ui.set(_,is));}else m.isBuiltInDirective(N)||(p.push(_),S&&(E=true));}}let R;if(u.length?(ae(),u.length>1?R=X(t.helper(Ve),u,o):R=u[0]):c.length&&(R=z(di(c),o)),b?y|=16:(d&&!i&&(y|=2),g&&!i&&(y|=4),F.length&&(y|=8),T&&(y|=32)),!E&&(y===0||y===32)&&(h||P||p.length>0)&&(y|=512),!t.inSSR&&R)switch(R.type){case 15:let M=-1,_=-1,N=false;for(let k=0;k<R.properties.length;k++){const fe=R.properties[k].key;se(fe)?fe.content==="class"?M=k:fe.content==="style"&&(_=k):fe.isHandlerKey||(N=true);}const C=R.properties[M],$=R.properties[_];N?R=X(t.helper(Re),[R]):(C&&!se(C.value)&&(C.value=X(t.helper(it),[C.value])),$&&(g||$.value.type===4&&$.value.content.trim()[0]==="["||$.value.type===17)&&($.value=X(t.helper(nt),[$.value])));break;case 14:break;default:R=X(t.helper(Re),[X(t.helper(ve),[R])]);break}return {props:R,directives:p,patchFlag:y,dynamicPropNames:F,shouldUseBlock:E}}function di(e){const t=new Map,s=[];for(let i=0;i<e.length;i++){const n=e[i];if(n.key.type===8||!n.key.isStatic){s.push(n);continue}const a=n.key.content,r=t.get(a);r?(a==="style"||a==="class"||m.isOn(a))&&Gn(r,n):(t.set(a,n),s.push(n));}return s}function Gn(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=ue([e.value,t.value],e.loc);}function mi(e,t){const s=[],i=ui.get(e);if(i)s.push(t.helperString(i));else {const a=es("v-"+e.name,t);a?s.push(a):(t.helper(Qe),t.directives.add(e.name),s.push(ye(e.name,"directive")));}const{loc:n}=e;if(e.exp&&s.push(e.exp),e.arg&&(e.exp||s.push("void 0"),s.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||s.push("void 0"),s.push("void 0"));const a=I("true",false,n);s.push(z(e.modifiers.map(r=>x(r,a)),n));}return ue(s,e.loc)}function Jn(e){let t="[";for(let s=0,i=e.length;s<i;s++)t+=JSON.stringify(e[s]),s<i-1&&(t+=", ");return t+"]"}function ss(e){return e==="component"||e==="Component"}const Kn=(e,t)=>{if(Be(e)){const{children:s,loc:i}=e,{slotName:n,slotProps:a}=Si(e,t),r=[t.prefixIdentifiers?"_ctx.$slots":"$slots",n,"{}","undefined","true"];let o=2;a&&(r[2]=a,o=3),s.length&&(r[3]=Se([],s,false,false,i),o=4),t.scopeId&&!t.slotted&&(o=5),r.splice(o),e.codegenNode=X(t.helper(Dt),r,i);}};function Si(e,t){let s='"default"',i;const n=[];for(let a=0;a<e.props.length;a++){const r=e.props[a];if(r.type===6)r.value&&(r.name==="name"?s=JSON.stringify(r.value.content):(r.name=m.camelize(r.name),n.push(r)));else if(r.name==="bind"&&Ee(r.arg,"name")){if(r.exp)s=r.exp;else if(r.arg&&r.arg.type===4){const o=m.camelize(r.arg.content);s=r.exp=I(o,false,r.arg.loc),s=r.exp=q(r.exp,t);}}else r.name==="bind"&&r.arg&&se(r.arg)&&(r.arg.content=m.camelize(r.arg.content)),n.push(r);}if(n.length>0){const{props:a,directives:r}=ts(e,t,n,false,false);i=a,r.length&&t.onError(L(36,r[0].loc));}return {slotName:s,slotProps:i}}const _i=(e,t,s,i)=>{const{loc:n,modifiers:a,arg:r}=e;!e.exp&&!a.length&&s.onError(L(35,n));let o;if(r.type===4)if(r.isStatic){let p=r.content;p.startsWith("vue:")&&(p=`vnode-${p.slice(4)}`);const S=t.tagType!==0||p.startsWith("vnode")||!/[A-Z]/.test(p)?m.toHandlerKey(m.camelize(p)):`on:${p}`;o=I(S,true,r.loc);}else o=Q([`${s.helperString(ot)}(`,r,")"]);else o=r,o.children.unshift(`${s.helperString(ot)}(`),o.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let c=s.cacheHandlers&&!l&&!s.inVOnce;if(l){const p=Ht(l,s),S=!(p||Cs(l,s)),E=l.content.includes(";");s.prefixIdentifiers&&(S&&s.addIdentifiers("$event"),l=e.exp=q(l,s,false,E),S&&s.removeIdentifiers("$event"),c=s.cacheHandlers&&!s.inVOnce&&!(l.type===4&&l.constType>0)&&!(p&&t.tagType===1)&&!Y(l,s.identifiers),c&&p&&(l.type===4?l.content=`${l.content} && ${l.content}(...args)`:l.children=[...l.children," && ",...l.children,"(...args)"])),(S||c&&p)&&(l=Q([`${S?s.isTS?"($event: any)":"$event":`${s.isTS?`
//@ts-ignore
`:""}(...args)`} => ${E?"{":"("}`,l,E?"}":")"]));}let u={props:[x(o,l||I("() => {}",false,n))]};return i&&(u=i(u)),c&&(u.props[0].value=s.cache(u.props[0].value)),u.props.forEach(p=>p.key.isHandlerKey=true),u},Wn=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return ()=>{const s=e.children;let i,n=false;for(let a=0;a<s.length;a++){const r=s[a];if(mt(r)){n=true;for(let o=a+1;o<s.length;o++){const l=s[o];if(mt(l))i||(i=s[a]=Q([r],r.loc)),i.children.push(" + ",l),s.splice(o,1),o--;else {i=void 0;break}}}}if(!(!n||s.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(a=>a.type===7&&!t.directiveTransforms[a.name])&&e.tag!=="template")))for(let a=0;a<s.length;a++){const r=s[a];if(mt(r)||r.type===8){const o=[];(r.type!==2||r.content!==" ")&&o.push(r),!t.ssr&&ee(r,t)===0&&o.push("1"),s[a]={type:12,content:r,loc:r.loc,codegenNode:X(t.helper(Ye),o)};}}}},gi=new WeakSet,Yn=(e,t)=>{if(e.type===1&&J(e,"once",true))return gi.has(e)||t.inVOnce||t.inSSR?void 0:(gi.add(e),t.inVOnce=true,t.helper(Fe),()=>{t.inVOnce=false;const s=t.currentNode;s.codegenNode&&(s.codegenNode=t.cache(s.codegenNode,true,true));})},Ti=(e,t,s)=>{const{exp:i,arg:n}=e;if(!i)return s.onError(L(41,e.loc)),qe();const a=i.loc.source.trim(),r=i.type===4?i.content:a,o=s.bindingMetadata[a];if(o==="props"||o==="props-aliased")return s.onError(L(44,i.loc)),qe();const l=s.inline&&(o==="setup-let"||o==="setup-ref"||o==="setup-maybe-ref");if(!r.trim()||!Ht(i,s)&&!l)return s.onError(L(42,i.loc)),qe();if(s.prefixIdentifiers&&oe(r)&&s.identifiers[r])return s.onError(L(43,i.loc)),qe();const c=n||I("modelValue",true),u=n?se(n)?`onUpdate:${m.camelize(n.content)}`:Q(['"onUpdate:" + ',n]):"onUpdate:modelValue";let p;const S=s.isTS?"($event: any)":"$event";if(l)if(o==="setup-ref")p=Q([`${S} => ((`,I(a,false,i.loc),").value = $event)"]);else {const y=o==="setup-let"?`${a} = $event`:"null";p=Q([`${S} => (${s.helperString(we)}(${a}) ? (`,I(a,false,i.loc),`).value = $event : ${y})`]);}else p=Q([`${S} => ((`,i,") = $event)"]);const E=[x(c,e.exp),x(u,p)];if(s.prefixIdentifiers&&!s.inVOnce&&s.cacheHandlers&&!Y(i,s.identifiers)&&(E[1].value=s.cache(E[1].value)),e.modifiers.length&&t.tagType===1){const y=e.modifiers.map(d=>d.content).map(d=>(oe(d)?d:JSON.stringify(d))+": true").join(", "),h=n?se(n)?`${n.content}Modifiers`:Q([n,' + "Modifiers"']):"modelModifiers";E.push(x(h,I(`{ ${y} }`,false,e.loc,2)));}return qe(E)};function qe(e=[]){return {props:e}}const zn=/[\w).+\-_$\]]/,Qn=(e,t)=>{Te("COMPILER_FILTERS",t)&&(e.type===5?bt(e.content,t):e.type===1&&e.props.forEach(s=>{s.type===7&&s.name!=="for"&&s.exp&&bt(s.exp,t);}));};function bt(e,t){if(e.type===4)yi(e,t);else for(let s=0;s<e.children.length;s++){const i=e.children[s];typeof i=="object"&&(i.type===4?yi(i,t):i.type===8?bt(e,t):i.type===5&&bt(i.content,t));}}function yi(e,t){const s=e.content;let i=false,n=false,a=false,r=false,o=0,l=0,c=0,u=0,p,S,E,y,h=[];for(E=0;E<s.length;E++)if(S=p,p=s.charCodeAt(E),i)p===39&&S!==92&&(i=false);else if(n)p===34&&S!==92&&(n=false);else if(a)p===96&&S!==92&&(a=false);else if(r)p===47&&S!==92&&(r=false);else if(p===124&&s.charCodeAt(E+1)!==124&&s.charCodeAt(E-1)!==124&&!o&&!l&&!c)y===void 0?(u=E+1,y=s.slice(0,E).trim()):d();else {switch(p){case 34:n=true;break;case 39:i=true;break;case 96:a=true;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:o++;break;case 125:o--;break}if(p===47){let g=E-1,T;for(;g>=0&&(T=s.charAt(g),T===" ");g--);(!T||!zn.test(T))&&(r=true);}}y===void 0?y=s.slice(0,E).trim():u!==0&&d();function d(){h.push(s.slice(u,E).trim()),u=E+1;}if(h.length){for(E=0;E<h.length;E++)y=Zn(y,h[E],t);e.content=y,e.ast=void 0;}}function Zn(e,t,s){s.helper(Ze);const i=t.indexOf("(");if(i<0)return s.filters.add(t),`${ye(t,"filter")}(${e})`;{const n=t.slice(0,i),a=t.slice(i+1);return s.filters.add(n),`${ye(n,"filter")}(${e}${a!==")"?","+a:a}`}}const Ni=new WeakSet,er=(e,t)=>{if(e.type===1){const s=J(e,"memo");return !s||Ni.has(e)?void 0:(Ni.add(e),()=>{const i=e.codegenNode||t.currentNode.codegenNode;i&&i.type===13&&(e.tagType!==1&&pt(i,t),e.codegenNode=X(t.helper(ct),[s.exp,Se(void 0,i),"_cache",String(t.cached.length)]),t.cached.push(null));})}};function Ii(e){return [[Yn,Un,er,Hn,Qn,...e?[ci,zs]:[],Kn,hi,li,Wn],{on:_i,bind:ii,model:Ti}]}function tr(e,t={}){const s=t.onError||$t,i=t.mode==="module",n=t.prefixIdentifiers===true||i;!n&&t.cacheHandlers&&s(L(49)),t.scopeId&&!i&&s(L(50));const a=m.extend({},t,{prefixIdentifiers:n}),r=m.isString(e)?ws(e,a):e,[o,l]=Ii(n);if(t.isTS){const{expressionPlugins:c}=t;(!c||!c.includes("typescript"))&&(t.expressionPlugins=[...c||[],"typescript"]);}return js(r,m.extend({},a,{nodeTransforms:[...o,...t.nodeTransforms||[]],directiveTransforms:m.extend({},l,t.directiveTransforms||{})})),Gs(r,a)}const sr={DATA:"data",PROPS:"props",PROPS_ALIASED:"props-aliased",SETUP_LET:"setup-let",SETUP_CONST:"setup-const",SETUP_REACTIVE_CONST:"setup-reactive-const",SETUP_MAYBE_REF:"setup-maybe-ref",SETUP_REF:"setup-ref",OPTIONS:"options",LITERAL_CONST:"literal-const"},ir=()=>({props:[]});return r$a.generateCodeFrame=m.generateCodeFrame,r$a.BASE_TRANSITION=vt,r$a.BindingTypes=sr,r$a.CAMELIZE=at,r$a.CAPITALIZE=ns,r$a.CREATE_BLOCK=Pt,r$a.CREATE_COMMENT=be,r$a.CREATE_ELEMENT_BLOCK=Lt,r$a.CREATE_ELEMENT_VNODE=We,r$a.CREATE_SLOTS=kt,r$a.CREATE_STATIC=Mt,r$a.CREATE_TEXT=Ye,r$a.CREATE_VNODE=Ke,r$a.CompilerDeprecationTypes=Ui,r$a.ConstantTypes=Mi,r$a.ElementTypes=Li,r$a.ErrorCodes=Hi,r$a.FRAGMENT=Oe,r$a.GUARD_REACTIVE_PROPS=ve,r$a.IS_MEMO_SAME=Vt,r$a.IS_REF=we,r$a.KEEP_ALIVE=De,r$a.MERGE_PROPS=Ve,r$a.NORMALIZE_CLASS=it,r$a.NORMALIZE_PROPS=Re,r$a.NORMALIZE_STYLE=nt,r$a.Namespaces=vi,r$a.NodeTypes=Pi,r$a.OPEN_BLOCK=pe,r$a.POP_SCOPE_ID=as,r$a.PUSH_SCOPE_ID=rs,r$a.RENDER_LIST=tt,r$a.RENDER_SLOT=Dt,r$a.RESOLVE_COMPONENT=ke,r$a.RESOLVE_DIRECTIVE=Qe,r$a.RESOLVE_DYNAMIC_COMPONENT=ze,r$a.RESOLVE_FILTER=Ze,r$a.SET_BLOCK_TRACKING=Fe,r$a.SUSPENSE=Je,r$a.TELEPORT=Ce,r$a.TO_DISPLAY_STRING=st,r$a.TO_HANDLERS=rt,r$a.TO_HANDLER_KEY=ot,r$a.TS_NODE_TYPES=Bt,r$a.UNREF=$e,r$a.WITH_CTX=lt,r$a.WITH_DIRECTIVES=et,r$a.WITH_MEMO=ct,r$a.advancePositionWithClone=jt,r$a.advancePositionWithMutation=qt,r$a.assert=Qi,r$a.baseCompile=tr,r$a.baseParse=ws,r$a.buildDirectiveArgs=mi,r$a.buildProps=ts,r$a.buildSlots=fi,r$a.checkCompatEnabled=xe,r$a.convertToBlock=pt,r$a.createArrayExpression=ue,r$a.createAssignmentExpression=Fi,r$a.createBlockStatement=cs,r$a.createCacheExpression=ls,r$a.createCallExpression=X,r$a.createCompilerError=L,r$a.createCompoundExpression=Q,r$a.createConditionalExpression=ft,r$a.createForLoopParams=At,r$a.createFunctionExpression=Se,r$a.createIfStatement=Vi,r$a.createInterpolation=Di,r$a.createObjectExpression=z,r$a.createObjectProperty=x,r$a.createReturnStatement=wi,r$a.createRoot=os,r$a.createSequenceExpression=$i,r$a.createSimpleExpression=I,r$a.createStructuralDirectiveTransform=Yt,r$a.createTemplateLiteral=ki,r$a.createTransformContext=Hs,r$a.createVNodeCall=Pe,r$a.errorMessages=Es,r$a.extractIdentifiers=re,r$a.findDir=J,r$a.findProp=Ue,r$a.forAliasRE=Ps,r$a.generate=Gs,r$a.getBaseTransformPreset=Ii,r$a.getConstantType=ee,r$a.getMemoedVNodeCall=vs,r$a.getVNodeBlockHelper=ge,r$a.getVNodeHelper=_e,r$a.hasDynamicKeyVBind=Zi,r$a.hasScopeRef=Y,r$a.helperNameMap=W,r$a.injectProp=Xe,r$a.isCoreComponent=Xt,r$a.isFnExpression=Cs,r$a.isFnExpressionBrowser=zi,r$a.isFnExpressionNode=Os,r$a.isFunctionType=Ns,r$a.isInDestructureAssignment=wt,r$a.isInNewExpression=Ss,r$a.isMemberExpression=Ht,r$a.isMemberExpressionBrowser=Wi,r$a.isMemberExpressionNode=As,r$a.isReferencedIdentifier=ms,r$a.isSimpleIdentifier=oe,r$a.isSlotOutlet=Be,r$a.isStaticArgOf=Ee,r$a.isStaticExp=se,r$a.isStaticProperty=Ut,r$a.isStaticPropertyKey=Is,r$a.isTemplateNode=Le,r$a.isText=mt,r$a.isVSlot=Gt,r$a.locStub=B,r$a.noopDirectiveTransform=ir,r$a.processExpression=q,r$a.processFor=ai,r$a.processIf=Zs,r$a.processSlotOutlet=Si,r$a.registerRuntimeHelpers=Ri,r$a.resolveComponentType=Ei,r$a.stringifyExpression=Qt,r$a.toValidAssetId=ye,r$a.trackSlotScopes=li,r$a.trackVForSlotScopes=ci,r$a.transform=js,r$a.transformBind=ii,r$a.transformElement=hi,r$a.transformExpression=zs,r$a.transformModel=Ti,r$a.transformOn=_i,r$a.traverseNode=je,r$a.unwrapTSNode=Et,r$a.walkBlockDeclarations=gs,r$a.walkFunctionParams=_s,r$a.walkIdentifiers=ds,r$a.warnDeprecation=Xi,r$a}

/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var $$1;function Ee(){return $$1?o$f:($$1=1,function(p){Object.defineProperty(p,"__esModule",{value:true});var a=dr(),c=at$1();const T=Symbol(""),S=Symbol(""),y=Symbol(""),O=Symbol(""),h=Symbol(""),N=Symbol(""),M=Symbol(""),I=Symbol(""),C=Symbol(""),D=Symbol("");a.registerRuntimeHelpers({[T]:"vModelRadio",[S]:"vModelCheckbox",[y]:"vModelText",[O]:"vModelSelect",[h]:"vModelDynamic",[N]:"withModifiers",[M]:"withKeys",[I]:"vShow",[C]:"Transition",[D]:"TransitionGroup"});const v={parseMode:"html",isVoidTag:c.isVoidTag,isNativeTag:e=>c.isHTMLTag(e)||c.isSVGTag(e)||c.isMathMLTag(e),isPreTag:e=>e==="pre",isIgnoreNewlineTag:e=>e==="pre"||e==="textarea",decodeEntities:void 0,isBuiltInComponent:e=>{if(e==="Transition"||e==="transition")return C;if(e==="TransitionGroup"||e==="transition-group")return D},getNamespace(e,t,r){let o=t?t.ns:r;if(t&&o===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(i=>i.type===6&&i.name==="encoding"&&i.value!=null&&(i.value.content==="text/html"||i.value.content==="application/xhtml+xml"))&&(o=0);}else /^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(o=0);else t&&o===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(o=0);if(o===0){if(e==="svg")return 1;if(e==="math")return 2}return o}},X=e=>{e.type===1&&e.props.forEach((t,r)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[r]={type:7,name:"bind",arg:a.createSimpleExpression("style",true,t.loc),exp:U(t.value.content,t.loc),modifiers:[],loc:t.loc});});},U=(e,t)=>{const r=c.parseStringStyle(e);return a.createSimpleExpression(JSON.stringify(r),false,t,3)};function E(e,t){return a.createCompilerError(e,t,b)}const j={X_V_HTML_NO_EXPRESSION:53,53:"X_V_HTML_NO_EXPRESSION",X_V_HTML_WITH_CHILDREN:54,54:"X_V_HTML_WITH_CHILDREN",X_V_TEXT_NO_EXPRESSION:55,55:"X_V_TEXT_NO_EXPRESSION",X_V_TEXT_WITH_CHILDREN:56,56:"X_V_TEXT_WITH_CHILDREN",X_V_MODEL_ON_INVALID_ELEMENT:57,57:"X_V_MODEL_ON_INVALID_ELEMENT",X_V_MODEL_ARG_ON_ELEMENT:58,58:"X_V_MODEL_ARG_ON_ELEMENT",X_V_MODEL_ON_FILE_INPUT_ELEMENT:59,59:"X_V_MODEL_ON_FILE_INPUT_ELEMENT",X_V_MODEL_UNNECESSARY_VALUE:60,60:"X_V_MODEL_UNNECESSARY_VALUE",X_V_SHOW_NO_EXPRESSION:61,61:"X_V_SHOW_NO_EXPRESSION",X_TRANSITION_INVALID_CHILDREN:62,62:"X_TRANSITION_INVALID_CHILDREN",X_IGNORED_SIDE_EFFECT_TAG:63,63:"X_IGNORED_SIDE_EFFECT_TAG",__EXTEND_POINT__:64,64:"__EXTEND_POINT__"},b={53:"v-html is missing expression.",54:"v-html will override element children.",55:"v-text is missing expression.",56:"v-text will override element children.",57:"v-model can only be used on <input>, <textarea> and <select> elements.",58:"v-model argument is not supported on plain elements.",59:"v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",60:"Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",61:"v-show is missing expression.",62:"<Transition> expects exactly one child element or component.",63:"Tags with side effect (<script> and <style>) are ignored in client component templates."},K=(e,t,r)=>{const{exp:o,loc:i}=e;return o||r.onError(E(53,i)),t.children.length&&(r.onError(E(54,i)),t.children.length=0),{props:[a.createObjectProperty(a.createSimpleExpression("innerHTML",true,i),o||a.createSimpleExpression("",true))]}},G=(e,t,r)=>{const{exp:o,loc:i}=e;return o||r.onError(E(55,i)),t.children.length&&(r.onError(E(56,i)),t.children.length=0),{props:[a.createObjectProperty(a.createSimpleExpression("textContent",true),o?a.getConstantType(o,r)>0?o:a.createCallExpression(r.helperString(a.TO_DISPLAY_STRING),[o],i):a.createSimpleExpression("",true))]}},W=(e,t,r)=>{const o=a.transformModel(e,t,r);if(!o.props.length||t.tagType===1)return o;e.arg&&r.onError(E(58,e.arg.loc));const{tag:i}=t,s=r.isCustomElement(i);if(i==="input"||i==="textarea"||i==="select"||s){let n=y,f=false;if(i==="input"||s){const l=a.findProp(t,"type");if(l){if(l.type===7)n=h;else if(l.value)switch(l.value.content){case "radio":n=T;break;case "checkbox":n=S;break;case "file":f=true,r.onError(E(59,e.loc));break}}else a.hasDynamicKeyVBind(t)&&(n=h);}else i==="select"&&(n=O);f||(o.needRuntime=r.helper(n));}else r.onError(E(57,e.loc));return o.props=o.props.filter(n=>!(n.key.type===4&&n.key.content==="modelValue")),o},F=c.makeMap("passive,once,capture"),q=c.makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Y=c.makeMap("left,right"),H=c.makeMap("onkeyup,onkeydown,onkeypress"),z=(e,t,r,o)=>{const i=[],s=[],n=[];for(let f=0;f<t.length;f++){const l=t[f].content;l==="native"&&a.checkCompatEnabled("COMPILER_V_ON_NATIVE",r,o)||F(l)?n.push(l):Y(l)?a.isStaticExp(e)?H(e.content.toLowerCase())?i.push(l):s.push(l):(i.push(l),s.push(l)):q(l)?s.push(l):i.push(l);}return {keyModifiers:i,nonKeyModifiers:s,eventOptionModifiers:n}},A=(e,t)=>a.isStaticExp(e)&&e.content.toLowerCase()==="onclick"?a.createSimpleExpression(t,true):e.type!==4?a.createCompoundExpression(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,B=(e,t,r)=>a.transformOn(e,t,r,o=>{const{modifiers:i}=e;if(!i.length)return o;let{key:s,value:n}=o.props[0];const{keyModifiers:f,nonKeyModifiers:l,eventOptionModifiers:_}=z(s,i,r,e.loc);if(l.includes("right")&&(s=A(s,"onContextmenu")),l.includes("middle")&&(s=A(s,"onMouseup")),l.length&&(n=a.createCallExpression(r.helper(N),[n,JSON.stringify(l)])),f.length&&(!a.isStaticExp(s)||H(s.content.toLowerCase()))&&(n=a.createCallExpression(r.helper(M),[n,JSON.stringify(f)])),_.length){const g=_.map(c.capitalize).join("");s=a.isStaticExp(s)?a.createSimpleExpression(`${s.content}${g}`,true):a.createCompoundExpression(["(",s,`) + "${g}"`]);}return {props:[a.createObjectProperty(s,n)]}}),J=(e,t,r)=>{const{exp:o,loc:i}=e;return o||r.onError(E(61,i)),{props:[],needRuntime:r.helper(I)}},Q=/__VUE_EXP_START__(.*?)__VUE_EXP_END__/g,Z=(e,t,r)=>{if(t.scopes.vSlot>0)return;const o=r.type===1&&r.codegenNode&&r.codegenNode.type===13&&r.codegenNode.children&&!c.isArray(r.codegenNode.children)&&r.codegenNode.children.type===20;let i=0,s=0;const n=[],f=_=>{if(i>=20||s>=5){const g=a.createCallExpression(t.helper(a.CREATE_STATIC),[JSON.stringify(n.map(d=>L(d,t)).join("")).replace(Q,'" + $1 + "'),String(n.length)]),u=n.length-1;if(o)e.splice(_-n.length,n.length,g);else if(n[0].codegenNode.value=g,n.length>1){e.splice(_-n.length+1,u);const d=t.cached.indexOf(n[n.length-1].codegenNode);if(d>-1){for(let V=d;V<t.cached.length;V++){const x=t.cached[V];x&&(x.index-=u);}t.cached.splice(d-u+1,u);}}return u}return 0};let l=0;for(;l<e.length;l++){const _=e[l];if(o||ee(_)){const u=ie(_);if(u){i+=u[0],s+=u[1],n.push(_);continue}}l-=f(l),i=0,s=0,n.length=0;}f(l);},ee=e=>{if((e.type===1&&e.tagType===0||e.type===12)&&e.codegenNode&&e.codegenNode.type===20)return e.codegenNode},te=/^(data|aria)-/,P=(e,t)=>(t===0?c.isKnownHtmlAttr(e):t===1?c.isKnownSvgAttr(e):t===2?c.isKnownMathMLAttr(e):false)||te.test(e),re=c.makeMap("caption,thead,tr,th,tbody,td,tfoot,colgroup,col");function ie(e){if(e.type===1&&re(e.tag))return  false;if(e.type===12)return [1,0];let t=1,r=e.props.length>0?1:0,o=false;const i=()=>(o=true,false);function s(n){const f=n.tag==="option"&&n.ns===0;for(let l=0;l<n.props.length;l++){const _=n.props[l];if(_.type===6&&!P(_.name,n.ns)||_.type===7&&_.name==="bind"&&(_.arg&&(_.arg.type===8||_.arg.isStatic&&!P(_.arg.content,n.ns))||_.exp&&(_.exp.type===8||_.exp.constType<3)||f&&a.isStaticArgOf(_.arg,"value")&&_.exp&&!_.exp.isStatic))return i()}for(let l=0;l<n.children.length;l++){t++;const _=n.children[l];if(_.type===1&&(_.props.length>0&&r++,s(_),o))return  false}return  true}return s(e)?[t,r]:false}function L(e,t){if(c.isString(e))return e;if(c.isSymbol(e))return "";switch(e.type){case 1:return ne(e,t);case 2:return c.escapeHtml(e.content);case 3:return `<!--${c.escapeHtml(e.content)}-->`;case 5:return c.escapeHtml(c.toDisplayString(m(e.content)));case 8:return c.escapeHtml(m(e));case 12:return L(e.content,t);default:return ""}}function ne(e,t){let r=`<${e.tag}`,o="";for(let i=0;i<e.props.length;i++){const s=e.props[i];if(s.type===6)r+=` ${s.name}`,s.value&&(r+=`="${c.escapeHtml(s.value.content)}"`);else if(s.type===7)if(s.name==="bind"){const n=s.exp;if(n.content[0]==="_"){r+=` ${s.arg.content}="__VUE_EXP_START__${n.content}__VUE_EXP_END__"`;continue}if(c.isBooleanAttr(s.arg.content)&&n.content==="false")continue;let f=m(n);if(f!=null){const l=s.arg&&s.arg.content;l==="class"?f=c.normalizeClass(f):l==="style"&&(f=c.stringifyStyle(c.normalizeStyle(f))),r+=` ${s.arg.content}="${c.escapeHtml(f)}"`;}}else s.name==="html"?o=m(s.exp):s.name==="text"&&(o=c.escapeHtml(c.toDisplayString(m(s.exp))));}if(t.scopeId&&(r+=` ${t.scopeId}`),r+=">",o)r+=o;else for(let i=0;i<e.children.length;i++)r+=L(e.children[i],t);return c.isVoidTag(e.tag)||(r+=`</${e.tag}>`),r}function m(e){if(e.type===4)return new Function(`return (${e.content})`)();{let t="";return e.children.forEach(r=>{c.isString(r)||c.isSymbol(r)||(r.type===2?t+=r.content:r.type===5?t+=c.toDisplayString(m(r.content)):t+=m(r));}),t}}const se=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode();},w=[X],k={cloak:a.noopDirectiveTransform,html:K,text:G,model:W,on:B,show:J};function oe(e,t={}){return a.baseCompile(e,c.extend({},v,t,{nodeTransforms:[se,...w,...t.nodeTransforms||[]],directiveTransforms:c.extend({},k,t.directiveTransforms||{}),transformHoist:Z}))}function le(e,t={}){return a.baseParse(e,c.extend({},v,t))}p.DOMDirectiveTransforms=k,p.DOMErrorCodes=j,p.DOMErrorMessages=b,p.DOMNodeTransforms=w,p.TRANSITION=C,p.TRANSITION_GROUP=D,p.V_MODEL_CHECKBOX=S,p.V_MODEL_DYNAMIC=h,p.V_MODEL_RADIO=T,p.V_MODEL_SELECT=O,p.V_MODEL_TEXT=y,p.V_ON_WITH_KEYS=M,p.V_ON_WITH_MODIFIERS=N,p.V_SHOW=I,p.compile=oe,p.createDOMCompilerError=E,p.parse=le,p.parserOptions=v,p.transformStyle=X,Object.keys(a).forEach(function(e){e!=="default"&&!Object.prototype.hasOwnProperty.call(p,e)&&(p[e]=a[e]);});}(o$f),o$f)}

var r$8={};

var r$7={};

var r$6={};

/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var Yt$1;function Ve$1(){if(Yt$1)return r$6;Yt$1=1,Object.defineProperty(r$6,"__esModule",{value:true});var c=at$1();let w;class wt{constructor(e=false){this.detached=e,this._active=true,this.effects=[],this.cleanups=[],this._isPaused=false,this.parent=w,!e&&w&&(this.index=(w.scopes||(w.scopes=[])).push(this)-1);}get active(){return this._active}pause(){if(this._active){this._isPaused=true;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause();}}resume(){if(this._active&&this._isPaused){this._isPaused=false;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume();}}run(e){if(this._active){const s=w;try{return w=this,e()}finally{w=s;}}}on(){w=this;}off(){w=this.parent;}stop(e){if(this._active){this._active=false;let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(this.effects.length=0,s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(true);this.scopes.length=0;}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index);}this.parent=void 0;}}}function Gt(t){return new wt(t)}function St(){return w}function Ut(t,e=false){w&&w.cleanups.push(t);}let d;const Bt={ACTIVE:1,1:"ACTIVE",RUNNING:2,2:"RUNNING",TRACKING:4,4:"TRACKING",NOTIFIED:8,8:"NOTIFIED",DIRTY:16,16:"DIRTY",ALLOW_RECURSE:32,32:"ALLOW_RECURSE",PAUSED:64,64:"PAUSED"},it=new WeakSet;class W{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,w&&w.active&&w.effects.push(this);}pause(){this.flags|=64;}resume(){this.flags&64&&(this.flags&=-65,it.has(this)&&(it.delete(this),this.trigger()));}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bt(this);}run(){if(!(this.flags&1))return this.fn();this.flags|=2,At(this),Tt(this);const e=d,s=b;d=this,b=true;try{return this.fn()}finally{Et(this),d=e,b=s,this.flags&=-3;}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)at(e);this.deps=this.depsTail=void 0,At(this),this.onStop&&this.onStop(),this.flags&=-2;}}trigger(){this.flags&64?it.add(this):this.scheduler?this.scheduler():this.runIfDirty();}runIfDirty(){ot(this)&&this.run();}get dirty(){return ot(this)}}let yt=0,j,H;function bt(t,e=false){if(t.flags|=8,e){t.next=H,H=t;return}t.next=j,j=t;}function rt(){yt++;}function nt(){if(--yt>0)return;if(H){let e=H;for(H=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s;}}let t;for(;j;){let e=j;for(j=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger();}catch(r){t||(t=r);}e=s;}}if(t)throw t}function Tt(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e;}function Et(t){let e,s=t.depsTail,r=s;for(;r;){const i=r.prevDep;r.version===-1?(r===s&&(s=i),at(r),qt(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i;}t.deps=e,t.depsTail=s;}function ot(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mt(e.dep.computed)||e.dep.version!==e.version))return  true;return !!t._dirty}function mt(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===N))return;t.globalVersion=N;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ot(t)){t.flags&=-3;return}const s=d,r=b;d=t,b=true;try{Tt(t);const i=t.fn(t._value);(e.version===0||c.hasChanged(i,t._value))&&(t._value=i,e.version++);}catch(i){throw e.version++,i}finally{d=s,b=r,Et(t),t.flags&=-3;}}function at(t,e=false){const{dep:s,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),s.subs===t&&(s.subs=r,!r&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)at(n,true);}!e&&!--s.sc&&s.map&&s.map.delete(s.key);}function qt(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0);}function zt(t,e){t.effect instanceof W&&(t=t.effect.fn);const s=new W(t);e&&c.extend(s,e);try{s.run();}catch(i){throw s.stop(),i}const r=s.run.bind(s);return r.effect=s,r}function Jt(t){t.effect.stop();}let b=true;const ct=[];function ft(){ct.push(b),b=false;}function Qt(){ct.push(b),b=true;}function lt(){const t=ct.pop();b=t===void 0?true:t;}function Xt(t,e=false){d instanceof W&&(d.cleanup=t);}function At(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=d;d=void 0;try{e();}finally{d=s;}}}let N=0;class Zt{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0;}}class Y{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0;}track(e){if(!d||!b||d===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==d)s=this.activeLink=new Zt(d,this),d.deps?(s.prevDep=d.depsTail,d.depsTail.nextDep=s,d.depsTail=s):d.deps=d.depsTail=s,xt(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const r=s.nextDep;r.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=r),s.prevDep=d.depsTail,s.nextDep=void 0,d.depsTail.nextDep=s,d.depsTail=s,d.deps===s&&(d.deps=r);}return s}trigger(e){this.version++,N++,this.notify(e);}notify(e){rt();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify();}finally{nt();}}}function xt(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xt(r);}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t;}}const G=new WeakMap,I=Symbol(""),U=Symbol(""),P=Symbol("");function S(t,e,s){if(b&&d){let r=G.get(t);r||G.set(t,r=new Map);let i=r.get(s);i||(r.set(s,i=new Y),i.map=r,i.key=s),i.track();}}function m(t,e,s,r,i,n){const o=G.get(t);if(!o){N++;return}const a=l=>{l&&l.trigger();};if(rt(),e==="clear")o.forEach(a);else {const l=c.isArray(t),v=l&&c.isIntegerKey(s);if(l&&s==="length"){const u=Number(r);o.forEach((_,g)=>{(g==="length"||g===P||!c.isSymbol(g)&&g>=u)&&a(_);});}else switch((s!==void 0||o.has(void 0))&&a(o.get(s)),v&&a(o.get(P)),e){case "add":l?v&&a(o.get("length")):(a(o.get(I)),c.isMap(t)&&a(o.get(U)));break;case "delete":l||(a(o.get(I)),c.isMap(t)&&a(o.get(U)));break;case "set":c.isMap(t)&&a(o.get(I));break}}nt();}function $t(t,e){const s=G.get(t);return s&&s.get(e)}function O(t){const e=h(t);return e===t?e:(S(e,"iterate",P),T(t)?e:e.map(R))}function B(t){return S(t=h(t),"iterate",P),t}const kt={__proto__:null,[Symbol.iterator](){return ut(this,Symbol.iterator,R)},concat(...t){return O(this).concat(...t.map(e=>c.isArray(e)?O(e):e))},entries(){return ut(this,"entries",t=>(t[1]=R(t[1]),t))},every(t,e){return A(this,"every",t,e,void 0,arguments)},filter(t,e){return A(this,"filter",t,e,s=>s.map(R),arguments)},find(t,e){return A(this,"find",t,e,R,arguments)},findIndex(t,e){return A(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return A(this,"findLast",t,e,R,arguments)},findLastIndex(t,e){return A(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return A(this,"forEach",t,e,void 0,arguments)},includes(...t){return ht(this,"includes",t)},indexOf(...t){return ht(this,"indexOf",t)},join(t){return O(this).join(t)},lastIndexOf(...t){return ht(this,"lastIndexOf",t)},map(t,e){return A(this,"map",t,e,void 0,arguments)},pop(){return F(this,"pop")},push(...t){return F(this,"push",t)},reduce(t,...e){return It(this,"reduce",t,e)},reduceRight(t,...e){return It(this,"reduceRight",t,e)},shift(){return F(this,"shift")},some(t,e){return A(this,"some",t,e,void 0,arguments)},splice(...t){return F(this,"splice",t)},toReversed(){return O(this).toReversed()},toSorted(t){return O(this).toSorted(t)},toSpliced(...t){return O(this).toSpliced(...t)},unshift(...t){return F(this,"unshift",t)},values(){return ut(this,"values",R)}};function ut(t,e,s){const r=B(t),i=r[e]();return r!==t&&!T(t)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.value&&(n.value=s(n.value)),n}),i}const te=Array.prototype;function A(t,e,s,r,i,n){const o=B(t),a=o!==t&&!T(t),l=o[e];if(l!==te[e]){const _=l.apply(t,n);return a?R(_):_}let v=s;o!==t&&(a?v=function(_,g){return s.call(this,R(_),g,t)}:s.length>2&&(v=function(_,g){return s.call(this,_,g,t)}));const u=l.call(o,v,r);return a&&i?i(u):u}function It(t,e,s,r){const i=B(t);let n=s;return i!==t&&(T(t)?s.length>3&&(n=function(o,a,l){return s.call(this,o,a,l,t)}):n=function(o,a,l){return s.call(this,o,R(a),l,t)}),i[e](n,...r)}function ht(t,e,s){const r=h(t);S(r,"iterate",P);const i=r[e](...s);return (i===-1||i===false)&&jt(s[0])?(s[0]=h(s[0]),r[e](...s)):i}function F(t,e,s=[]){ft(),rt();const r=h(t)[e].apply(t,s);return nt(),lt(),r}const ee=c.makeMap("__proto__,__v_isRef,__isVue"),Ct=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(c.isSymbol));function se(t){c.isSymbol(t)||(t=String(t));const e=h(this);return S(e,"has",t),e.hasOwnProperty(t)}class Dt{constructor(e=false,s=false){this._isReadonly=e,this._isShallow=s;}get(e,s,r){if(s==="__v_skip")return e.__v_skip;const i=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return !i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return n;if(s==="__v_raw")return r===(i?n?Wt:Kt:n?Lt:Pt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=c.isArray(e);if(!i){let l;if(o&&(l=kt[s]))return l;if(s==="hasOwnProperty")return se}const a=Reflect.get(e,s,y(e)?e:r);return (c.isSymbol(s)?Ct.has(s):ee(s))||(i||S(e,"get",s),n)?a:y(a)?o&&c.isIntegerKey(s)?a:a.value:c.isObject(a)?i?_t(a):dt(a):a}}class Ot extends Dt{constructor(e=false){super(false,e);}set(e,s,r,i){let n=e[s];if(!this._isShallow){const l=C(n);if(!T(r)&&!C(r)&&(n=h(n),r=h(r)),!c.isArray(e)&&y(n)&&!y(r))return l?false:(n.value=r,true)}const o=c.isArray(e)&&c.isIntegerKey(s)?Number(s)<e.length:c.hasOwn(e,s),a=Reflect.set(e,s,r,y(e)?e:i);return e===h(i)&&(o?c.hasChanged(r,n)&&m(e,"set",s,r):m(e,"add",s,r)),a}deleteProperty(e,s){const r=c.hasOwn(e,s);e[s];const i=Reflect.deleteProperty(e,s);return i&&r&&m(e,"delete",s,void 0),i}has(e,s){const r=Reflect.has(e,s);return (!c.isSymbol(s)||!Ct.has(s))&&S(e,"has",s),r}ownKeys(e){return S(e,"iterate",c.isArray(e)?"length":I),Reflect.ownKeys(e)}}class Mt extends Dt{constructor(e=false){super(true,e);}set(e,s){return  true}deleteProperty(e,s){return  true}}const ie=new Ot,re=new Mt,ne=new Ot(true),oe=new Mt(true),pt=t=>t,q=t=>Reflect.getPrototypeOf(t);function ae(t,e,s){return function(...r){const i=this.__v_raw,n=h(i),o=c.isMap(n),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,v=i[t](...r),u=s?pt:e?X:R;return !e&&S(n,"iterate",l?U:I),{next(){const{value:_,done:g}=v.next();return g?{value:_,done:g}:{value:a?[u(_[0]),u(_[1])]:u(_),done:g}},[Symbol.iterator](){return this}}}}function z(t){return function(...e){return t==="delete"?false:t==="clear"?void 0:this}}function ce(t,e){const s={get(i){const n=this.__v_raw,o=h(n),a=h(i);t||(c.hasChanged(i,a)&&S(o,"get",i),S(o,"get",a));const{has:l}=q(o),v=e?pt:t?X:R;if(l.call(o,i))return v(n.get(i));if(l.call(o,a))return v(n.get(a));n!==o&&n.get(i);},get size(){const i=this.__v_raw;return !t&&S(h(i),"iterate",I),Reflect.get(i,"size",i)},has(i){const n=this.__v_raw,o=h(n),a=h(i);return t||(c.hasChanged(i,a)&&S(o,"has",i),S(o,"has",a)),i===a?n.has(i):n.has(i)||n.has(a)},forEach(i,n){const o=this,a=o.__v_raw,l=h(a),v=e?pt:t?X:R;return !t&&S(l,"iterate",I),a.forEach((u,_)=>i.call(n,v(u),v(_),o))}};return c.extend(s,t?{add:z("add"),set:z("set"),delete:z("delete"),clear:z("clear")}:{add(i){!e&&!T(i)&&!C(i)&&(i=h(i));const n=h(this);return q(n).has.call(n,i)||(n.add(i),m(n,"add",i,i)),this},set(i,n){!e&&!T(n)&&!C(n)&&(n=h(n));const o=h(this),{has:a,get:l}=q(o);let v=a.call(o,i);v||(i=h(i),v=a.call(o,i));const u=l.call(o,i);return o.set(i,n),v?c.hasChanged(n,u)&&m(o,"set",i,n):m(o,"add",i,n),this},delete(i){const n=h(this),{has:o,get:a}=q(n);let l=o.call(n,i);l||(i=h(i),l=o.call(n,i)),a&&a.call(n,i);const v=n.delete(i);return l&&m(n,"delete",i,void 0),v},clear(){const i=h(this),n=i.size!==0,o=i.clear();return n&&m(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=ae(i,t,e);}),s}function J(t,e){const s=ce(t,e);return (r,i,n)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(c.hasOwn(s,i)&&i in r?s:r,i,n)}const fe={get:J(false,false)},le={get:J(false,true)},ue={get:J(true,false)},he={get:J(true,true)},Pt=new WeakMap,Lt=new WeakMap,Kt=new WeakMap,Wt=new WeakMap;function pe(t){switch(t){case "Object":case "Array":return 1;case "Map":case "Set":case "WeakMap":case "WeakSet":return 2;default:return 0}}function de(t){return t.__v_skip||!Object.isExtensible(t)?0:pe(c.toRawType(t))}function dt(t){return C(t)?t:Q(t,false,ie,fe,Pt)}function _e(t){return Q(t,false,ne,le,Lt)}function _t(t){return Q(t,true,re,ue,Kt)}function ve(t){return Q(t,true,oe,he,Wt)}function Q(t,e,s,r,i){if(!c.isObject(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const n=i.get(t);if(n)return n;const o=de(t);if(o===0)return t;const a=new Proxy(t,o===2?r:s);return i.set(t,a),a}function L(t){return C(t)?L(t.__v_raw):!!(t&&t.__v_isReactive)}function C(t){return !!(t&&t.__v_isReadonly)}function T(t){return !!(t&&t.__v_isShallow)}function jt(t){return t?!!t.__v_raw:false}function h(t){const e=t&&t.__v_raw;return e?h(e):t}function ge(t){return !c.hasOwn(t,"__v_skip")&&Object.isExtensible(t)&&c.def(t,"__v_skip",true),t}const R=t=>c.isObject(t)?dt(t):t,X=t=>c.isObject(t)?_t(t):t;function y(t){return t?t.__v_isRef===true:false}function Ht(t){return Nt(t,false)}function Re(t){return Nt(t,true)}function Nt(t,e){return y(t)?t:new we(t,e)}class we{constructor(e,s){this.dep=new Y,this.__v_isRef=true,this.__v_isShallow=false,this._rawValue=s?e:h(e),this._value=s?e:R(e),this.__v_isShallow=s;}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,r=this.__v_isShallow||T(e)||C(e);e=r?e:h(e),c.hasChanged(e,s)&&(this._rawValue=e,this._value=r?e:R(e),this.dep.trigger());}}function Se(t){t.dep&&t.dep.trigger();}function vt(t){return y(t)?t.value:t}function ye(t){return c.isFunction(t)?t():vt(t)}const be={get:(t,e,s)=>e==="__v_raw"?t:vt(Reflect.get(t,e,s)),set:(t,e,s,r)=>{const i=t[e];return y(i)&&!y(s)?(i.value=s,true):Reflect.set(t,e,s,r)}};function Te(t){return L(t)?t:new Proxy(t,be)}class Ee{constructor(e){this.__v_isRef=true,this._value=void 0;const s=this.dep=new Y,{get:r,set:i}=e(s.track.bind(s),s.trigger.bind(s));this._get=r,this._set=i;}get value(){return this._value=this._get()}set value(e){this._set(e);}}function me(t){return new Ee(t)}function Ae(t){const e=c.isArray(t)?new Array(t.length):{};for(const s in t)e[s]=Ft(t,s);return e}class xe{constructor(e,s,r){this._object=e,this._key=s,this._defaultValue=r,this.__v_isRef=true,this._value=void 0;}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e;}get dep(){return $t(h(this._object),this._key)}}class Ie{constructor(e){this._getter=e,this.__v_isRef=true,this.__v_isReadonly=true,this._value=void 0;}get value(){return this._value=this._getter()}}function Ce(t,e,s){return y(t)?t:c.isFunction(t)?new Ie(t):c.isObject(t)&&arguments.length>1?Ft(t,e,s):Ht(t)}function Ft(t,e,s){const r=t[e];return y(r)?r:new xe(t,e,s)}class De{constructor(e,s,r){this.fn=e,this.setter=s,this._value=void 0,this.dep=new Y(this),this.__v_isRef=true,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=N-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=r;}notify(){if(this.flags|=16,!(this.flags&8)&&d!==this)return bt(this,true),true}get value(){const e=this.dep.track();return mt(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e);}}function Oe(t,e,s=false){let r,i;return c.isFunction(t)?r=t:(r=t.get,i=t.set),new De(r,i,s)}const Me={GET:"get",HAS:"has",ITERATE:"iterate"},Pe={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},Le={SKIP:"__v_skip",IS_REACTIVE:"__v_isReactive",IS_READONLY:"__v_isReadonly",IS_SHALLOW:"__v_isShallow",RAW:"__v_raw",IS_REF:"__v_isRef"},Ke={WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP"},Z={},$=new WeakMap;let D;function We(){return D}function Vt(t,e=false,s=D){if(s){let r=$.get(s);r||$.set(s,r=[]),r.push(t);}}function je(t,e,s=c.EMPTY_OBJ){const{immediate:r,deep:i,once:n,scheduler:o,augmentJob:a,call:l}=s,v=p=>i?p:T(p)||i===false||i===0?x(p,1):x(p);let u,_,g,k,tt=false,et=false;if(y(t)?(_=()=>t.value,tt=T(t)):L(t)?(_=()=>v(t),tt=true):c.isArray(t)?(et=true,tt=t.some(p=>L(p)||T(p)),_=()=>t.map(p=>{if(y(p))return p.value;if(L(p))return v(p);if(c.isFunction(p))return l?l(p,2):p()})):c.isFunction(t)?e?_=l?()=>l(t,2):t:_=()=>{if(g){ft();try{g();}finally{lt();}}const p=D;D=u;try{return l?l(t,3,[k]):t(k)}finally{D=p;}}:_=c.NOOP,e&&i){const p=_,E=i===true?1/0:i;_=()=>x(p(),E);}const gt=St(),K=()=>{u.stop(),gt&&gt.active&&c.remove(gt.effects,u);};if(n&&e){const p=e;e=(...E)=>{p(...E),K();};}let M=et?new Array(t.length).fill(Z):Z;const V=p=>{if(!(!(u.flags&1)||!u.dirty&&!p))if(e){const E=u.run();if(i||tt||(et?E.some((Rt,st)=>c.hasChanged(Rt,M[st])):c.hasChanged(E,M))){g&&g();const Rt=D;D=u;try{const st=[E,M===Z?void 0:et&&M[0]===Z?[]:M,k];l?l(e,3,st):e(...st),M=E;}finally{D=Rt;}}}else u.run();};return a&&a(V),u=new W(_),u.scheduler=o?()=>o(V,false):V,k=p=>Vt(p,false,u),g=u.onStop=()=>{const p=$.get(u);if(p){if(l)l(p,4);else for(const E of p)E();$.delete(u);}},e?r?V(true):M=u.run():o?o(V.bind(null,true),true):u.run(),K.pause=u.pause.bind(u),K.resume=u.resume.bind(u),K.stop=K,K}function x(t,e=1/0,s){if(e<=0||!c.isObject(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,y(t))x(t.value,e,s);else if(c.isArray(t))for(let r=0;r<t.length;r++)x(t[r],e,s);else if(c.isSet(t)||c.isMap(t))t.forEach(r=>{x(r,e,s);});else if(c.isPlainObject(t)){for(const r in t)x(t[r],e,s);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&x(t[r],e,s);}return t}return r$6.ARRAY_ITERATE_KEY=P,r$6.EffectFlags=Bt,r$6.EffectScope=wt,r$6.ITERATE_KEY=I,r$6.MAP_KEY_ITERATE_KEY=U,r$6.ReactiveEffect=W,r$6.ReactiveFlags=Le,r$6.TrackOpTypes=Me,r$6.TriggerOpTypes=Pe,r$6.WatchErrorCodes=Ke,r$6.computed=Oe,r$6.customRef=me,r$6.effect=zt,r$6.effectScope=Gt,r$6.enableTracking=Qt,r$6.getCurrentScope=St,r$6.getCurrentWatcher=We,r$6.isProxy=jt,r$6.isReactive=L,r$6.isReadonly=C,r$6.isRef=y,r$6.isShallow=T,r$6.markRaw=ge,r$6.onEffectCleanup=Xt,r$6.onScopeDispose=Ut,r$6.onWatcherCleanup=Vt,r$6.pauseTracking=ft,r$6.proxyRefs=Te,r$6.reactive=dt,r$6.reactiveReadArray=O,r$6.readonly=_t,r$6.ref=Ht,r$6.resetTracking=lt,r$6.shallowReactive=_e,r$6.shallowReadArray=B,r$6.shallowReadonly=ve,r$6.shallowRef=Re,r$6.stop=Jt,r$6.toRaw=h,r$6.toReactive=R,r$6.toReadonly=X,r$6.toRef=Ce,r$6.toRefs=Ae,r$6.toValue=ye,r$6.track=S,r$6.traverse=x,r$6.trigger=m,r$6.triggerRef=Se,r$6.unref=vt,r$6.watch=je,r$6}

var Wr;function oi(){if(Wr)return r$7;Wr=1;/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/Object.defineProperty(r$7,"__esModule",{value:true});var B=Ve$1(),i=at$1();function qr(e){}function Gr(){}function Qr(e,t){}const Xr={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Zr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function De(e,t,n,r){try{return r?e(...r):e()}catch(s){Be(s,t,n);}}function _e(e,t,n,r){if(i.isFunction(e)){const s=De(e,t,n,r);return s&&i.isPromise(s)&&s.catch(l=>{Be(l,t,n);}),s}if(i.isArray(e)){const s=[];for(let l=0;l<e.length;l++)s.push(_e(e[l],t,n,r));return s}}function Be(e,t,n,r=true){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||i.EMPTY_OBJ;if(t){let f=t.parent;const u=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;f;){const d=f.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](e,u,p)===false)return}f=f.parent;}if(l){B.pauseTracking(),De(l,null,10,[e,u,p]),B.resetTracking();return}}zr(e,n,s,r,o);}function zr(e,t,n,r=true,s=false){if(s)throw e;console.error(e);}const ue=[];let xe=-1;const je=[];let Pe=null,Ye=0;const mn=Promise.resolve();let gt=null;function _n(e){const t=gt||mn;return e?t.then(this?e.bind(this):e):t}function es(e){let t=xe+1,n=ue.length;for(;t<n;){const r=t+n>>>1,s=ue[r],l=Qe(s);l<e||l===e&&s.flags&2?t=r+1:n=r;}return t}function St(e){if(!(e.flags&1)){const t=Qe(e),n=ue[ue.length-1];!n||!(e.flags&2)&&t>=Qe(n)?ue.push(e):ue.splice(es(t),0,e),e.flags|=1,bn();}}function bn(){gt||(gt=mn.then(xn));}function pt(e){i.isArray(e)?je.push(...e):Pe&&e.id===-1?Pe.splice(Ye+1,0,e):e.flags&1||(je.push(e),e.flags|=1),bn();}function Tn(e,t,n=xe+1){for(;n<ue.length;n++){const r=ue[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ue.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2);}}}function yt(e){if(je.length){const t=[...new Set(je)].sort((n,r)=>Qe(n)-Qe(r));if(je.length=0,Pe){Pe.push(...t);return}for(Pe=t,Ye=0;Ye<Pe.length;Ye++){const n=Pe[Ye];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2;}Pe=null,Ye=0;}}const Qe=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xn(e){try{for(xe=0;xe<ue.length;xe++){const t=ue[xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),De(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2));}}finally{for(;xe<ue.length;xe++){const t=ue[xe];t&&(t.flags&=-2);}xe=-1,ue.length=0,yt(),gt=null,(ue.length||je.length)&&xn();}}let re=null,mt=null;function Xe(e){const t=re;return re=e,mt=e&&e.type.__scopeId||null,t}function ts(e){mt=e;}function ns(){mt=null;}const rs=e=>Ht;function Ht(e,t=re,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&sn(-1);const l=Xe(t);let o;try{o=e(...s);}finally{Xe(l),r._d&&sn(1);}return o};return r._n=true,r._c=true,r._d=true,r}function ss(e,t){if(re===null)return e;const n=at(re),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,o,f,u=i.EMPTY_OBJ]=t[s];l&&(i.isFunction(l)&&(l={mounted:l,updated:l}),l.deep&&B.traverse(o),r.push({dir:l,instance:n,value:o,oldValue:void 0,arg:f,modifiers:u}));}return e}function Oe(e,t,n,r){const s=e.dirs,l=t&&t.dirs;for(let o=0;o<s.length;o++){const f=s[o];l&&(f.oldValue=l[o].value);let u=f.dir[r];u&&(B.pauseTracking(),_e(u,n,8,[e.el,f,e,t]),B.resetTracking());}}const On=Symbol("_vte"),En=e=>e.__isTeleport,Ze=e=>e&&(e.disabled||e.disabled===""),Cn=e=>e&&(e.defer||e.defer===""),vn=e=>typeof SVGElement<"u"&&e instanceof SVGElement,An=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Lt=(e,t)=>{const n=e&&e.to;return i.isString(n)?t?t(n):null:n},Fn={name:"Teleport",__isTeleport:true,process(e,t,n,r,s,l,o,f,u,p){const{mc:d,pc:h,pbc:x,o:{insert:_,querySelector:P,createText:O,createComment:L}}=p,N=Ze(t.props);let{shapeFlag:S,children:y,dynamicChildren:E}=t;if(e==null){const b=t.el=O(""),M=t.anchor=O("");_(b,n,r),_(M,n,r);const j=(F,k)=>{S&16&&(s&&s.isCE&&(s.ce._teleportTarget=F),d(y,F,k,s,l,o,f,u));},U=()=>{const F=t.target=Lt(t.props,P),k=Pn(F,t,O,_);F&&(o!=="svg"&&vn(F)?o="svg":o!=="mathml"&&An(F)&&(o="mathml"),N||(j(F,k),bt(t,false)));};N&&(j(n,M),bt(t,true)),Cn(t.props)?le(()=>{U(),t.el.__isMounted=true;},l):U();}else {if(Cn(t.props)&&!e.el.__isMounted){le(()=>{Fn.process(e,t,n,r,s,l,o,f,u,p),delete e.el.__isMounted;},l);return}t.el=e.el,t.targetStart=e.targetStart;const b=t.anchor=e.anchor,M=t.target=e.target,j=t.targetAnchor=e.targetAnchor,U=Ze(e.props),F=U?n:M,k=U?b:j;if(o==="svg"||vn(M)?o="svg":(o==="mathml"||An(M))&&(o="mathml"),E?(x(e.dynamicChildren,E,F,s,l,o,f),tn(e,t,true)):u||h(e,t,F,k,s,l,o,f,false),N)U?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):_t(t,n,b,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const $=t.target=Lt(t.props,P);$&&_t(t,$,null,p,0);}else U&&_t(t,M,j,p,1);bt(t,N);}},remove(e,t,n,{um:r,o:{remove:s}},l){const{shapeFlag:o,children:f,anchor:u,targetStart:p,targetAnchor:d,target:h,props:x}=e;if(h&&(s(p),s(d)),l&&s(u),o&16){const _=l||!Ze(x);for(let P=0;P<f.length;P++){const O=f[P];r(O,t,n,_,!!O.dynamicChildren);}}},move:_t,hydrate:ls};function _t(e,t,n,{o:{insert:r},m:s},l=2){l===0&&r(e.targetAnchor,t,n);const{el:o,anchor:f,shapeFlag:u,children:p,props:d}=e,h=l===2;if(h&&r(o,t,n),(!h||Ze(d))&&u&16)for(let x=0;x<p.length;x++)s(p[x],t,n,2);h&&r(f,t,n);}function ls(e,t,n,r,s,l,{o:{nextSibling:o,parentNode:f,querySelector:u,insert:p,createText:d}},h){const x=t.target=Lt(t.props,u);if(x){const _=Ze(t.props),P=x._lpa||x.firstChild;if(t.shapeFlag&16)if(_)t.anchor=h(o(e),t,f(e),n,r,s,l),t.targetStart=P,t.targetAnchor=P&&o(P);else {t.anchor=o(e);let O=P;for(;O;){if(O&&O.nodeType===8){if(O.data==="teleport start anchor")t.targetStart=O;else if(O.data==="teleport anchor"){t.targetAnchor=O,x._lpa=t.targetAnchor&&o(t.targetAnchor);break}}O=o(O);}t.targetAnchor||Pn(x,t,d,p),h(P&&o(P),t,x,n,r,s,l);}bt(t,_);}return t.anchor&&o(t.anchor)}const is=Fn;function bt(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut();}}function Pn(e,t,n,r){const s=t.targetStart=n(""),l=t.targetAnchor=n("");return s[On]=l,e&&(r(s,e),r(l,e)),l}const ke=Symbol("_leaveCb"),Tt=Symbol("_enterCb");function kn(){return {isMounted:false,isLeaving:false,isUnmounting:false,leavingVNodes:new Map}}const me=[Function,Array],Rn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:me,onEnter:me,onAfterEnter:me,onEnterCancelled:me,onBeforeLeave:me,onLeave:me,onAfterLeave:me,onLeaveCancelled:me,onBeforeAppear:me,onAppear:me,onAfterAppear:me,onAppearCancelled:me},Mn=e=>{const t=e.subTree;return t.component?Mn(t.component):t},os={name:"BaseTransition",props:Rn,setup(e,{slots:t}){const n=Ne(),r=kn();return ()=>{const s=t.default&&Vt(t.default(),true);if(!s||!s.length)return;const l=wn(s),o=B.toRaw(e),{mode:f}=o;if(r.isLeaving)return Ut(l);const u=Bn(l);if(!u)return Ut(l);let p=xt(u,o,r,n,h=>p=h);u.type!==ne&&Ie(u,p);let d=n.subTree&&Bn(n.subTree);if(d&&d.type!==ne&&!be(u,d)&&Mn(n).type!==ne){let h=xt(d,o,r,n);if(Ie(d,h),f==="out-in"&&u.type!==ne)return r.isLeaving=true,h.afterLeave=()=>{r.isLeaving=false,n.job.flags&8||n.update(),delete h.afterLeave,d=void 0;},Ut(l);f==="in-out"&&u.type!==ne?h.delayLeave=(x,_,P)=>{const O=Nn(r,d);O[String(d.key)]=d,x[ke]=()=>{_(),x[ke]=void 0,delete p.delayedLeave,d=void 0;},p.delayedLeave=()=>{P(),delete p.delayedLeave,d=void 0;};}:d=void 0;}else d&&(d=void 0);return l}}};function wn(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ne){t=n;break}}return t}const cs=os;function Nn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function xt(e,t,n,r,s){const{appear:l,mode:o,persisted:f=false,onBeforeEnter:u,onEnter:p,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:x,onLeave:_,onAfterLeave:P,onLeaveCancelled:O,onBeforeAppear:L,onAppear:N,onAfterAppear:S,onAppearCancelled:y}=t,E=String(e.key),b=Nn(n,e),M=(F,k)=>{F&&_e(F,r,9,k);},j=(F,k)=>{const $=k[1];M(F,k),i.isArray(F)?F.every(W=>W.length<=1)&&$():F.length<=1&&$();},U={mode:o,persisted:f,beforeEnter(F){let k=u;if(!n.isMounted)if(l)k=L||u;else return;F[ke]&&F[ke](true);const $=b[E];$&&be(e,$)&&$.el[ke]&&$.el[ke](),M(k,[F]);},enter(F){let k=p,$=d,W=h;if(!n.isMounted)if(l)k=N||p,$=S||d,W=y||h;else return;let G=false;const z=F[Tt]=te=>{G||(G=true,te?M(W,[F]):M($,[F]),U.delayedLeave&&U.delayedLeave(),F[Tt]=void 0);};k?j(k,[F,z]):z();},leave(F,k){const $=String(e.key);if(F[Tt]&&F[Tt](true),n.isUnmounting)return k();M(x,[F]);let W=false;const G=F[ke]=z=>{W||(W=true,k(),z?M(O,[F]):M(P,[F]),F[ke]=void 0,b[$]===e&&delete b[$]);};b[$]=e,_?j(_,[F,G]):G();},clone(F){const k=xt(F,t,n,r,s);return s&&s(k),k}};return U}function Ut(e){if(et(e))return e=Ee(e),e.children=null,e}function Bn(e){if(!et(e))return En(e.type)&&e.children?wn(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&i.isFunction(n.default))return n.default()}}function Ie(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ie(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;}function Vt(e,t=false,n){let r=[],s=0;for(let l=0;l<e.length;l++){let o=e[l];const f=n==null?o.key:String(n)+String(o.key!=null?o.key:l);o.type===oe?(o.patchFlag&128&&s++,r=r.concat(Vt(o.children,t,f))):(t||o.type!==ne)&&r.push(f!=null?Ee(o,{key:f}):o);}if(s>1)for(let l=0;l<r.length;l++)r[l].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function In(e,t){return i.isFunction(e)?i.extend({name:e.name},t,{setup:e}):e}function fs(){const e=Ne();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Dt(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0];}function us(e){const t=Ne(),n=B.shallowRef(null);if(t){const s=t.refs===i.EMPTY_OBJ?t.refs={}:t.refs;Object.defineProperty(s,e,{enumerable:true,get:()=>n.value,set:l=>n.value=l});}return n}function ze(e,t,n,r,s=false){if(i.isArray(e)){e.forEach((P,O)=>ze(P,t&&(i.isArray(t)?t[O]:t),n,r,s));return}if(Re(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ze(e,t,n,r.component.subTree);return}const l=r.shapeFlag&4?at(r.component):r.el,o=s?null:l,{i:f,r:u}=e,p=t&&t.r,d=f.refs===i.EMPTY_OBJ?f.refs={}:f.refs,h=f.setupState,x=B.toRaw(h),_=h===i.EMPTY_OBJ?()=>false:P=>i.hasOwn(x,P);if(p!=null&&p!==u&&(i.isString(p)?(d[p]=null,_(p)&&(h[p]=null)):B.isRef(p)&&(p.value=null)),i.isFunction(u))De(u,f,12,[o,d]);else {const P=i.isString(u),O=B.isRef(u);if(P||O){const L=()=>{if(e.f){const N=P?_(u)?h[u]:d[u]:u.value;s?i.isArray(N)&&i.remove(N,l):i.isArray(N)?N.includes(l)||N.push(l):P?(d[u]=[l],_(u)&&(h[u]=d[u])):(u.value=[l],e.k&&(d[e.k]=u.value));}else P?(d[u]=o,_(u)&&(h[u]=o)):O&&(u.value=o,e.k&&(d[e.k]=o));};o?(L.id=-1,le(L,n)):L();}}}let Sn=false;const $e=()=>{Sn||(console.error("Hydration completed but contains mismatches."),Sn=true);},as=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",ds=e=>e.namespaceURI.includes("MathML"),Ot=e=>{if(e.nodeType===1){if(as(e))return "svg";if(ds(e))return "mathml"}},Ke=e=>e.nodeType===8;function hs(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:l,parentNode:o,remove:f,insert:u,createComment:p}}=e,d=(y,E)=>{if(!E.hasChildNodes()){n(null,y,E),yt(),E._vnode=y;return}h(E.firstChild,y,null,null,null),yt(),E._vnode=y;},h=(y,E,b,M,j,U=false)=>{U=U||!!E.dynamicChildren;const F=Ke(y)&&y.data==="[",k=()=>O(y,E,b,M,j,F),{type:$,ref:W,shapeFlag:G,patchFlag:z}=E;let te=y.nodeType;E.el=y,z===-2&&(U=false,E.dynamicChildren=null);let V=null;switch($){case Me:te!==3?E.children===""?(u(E.el=s(""),o(y),y),V=y):V=k():(y.data!==E.children&&($e(),y.data=E.children),V=l(y));break;case ne:S(y)?(V=l(y),N(E.el=y.content.firstChild,y,b)):te!==8||F?V=k():V=l(y);break;case We:if(F&&(y=l(y),te=y.nodeType),te===1||te===3){V=y;const q=!E.children.length;for(let Y=0;Y<E.staticCount;Y++)q&&(E.children+=V.nodeType===1?V.outerHTML:V.data),Y===E.staticCount-1&&(E.anchor=V),V=l(V);return F?l(V):V}else k();break;case oe:F?V=P(y,E,b,M,j,U):V=k();break;default:if(G&1)(te!==1||E.type.toLowerCase()!==y.tagName.toLowerCase())&&!S(y)?V=k():V=x(y,E,b,M,j,U);else if(G&6){E.slotScopeIds=j;const q=o(y);if(F?V=L(y):Ke(y)&&y.data==="teleport start"?V=L(y,y.data,"teleport end"):V=l(y),t(E,q,null,b,M,Ot(q),U),Re(E)&&!E.type.__asyncResolved){let Y;F?(Y=ee(oe),Y.anchor=V?V.previousSibling:q.lastChild):Y=y.nodeType===3?on(""):ee("div"),Y.el=y,E.component.subTree=Y;}}else G&64?te!==8?V=k():V=E.type.hydrate(y,E,b,M,j,U,e,_):G&128&&(V=E.type.hydrate(y,E,b,M,Ot(o(y)),j,U,e,h));}return W!=null&&ze(W,null,M,E),V},x=(y,E,b,M,j,U)=>{U=U||!!E.dynamicChildren;const{type:F,props:k,patchFlag:$,shapeFlag:W,dirs:G,transition:z}=E,te=F==="input"||F==="option";if(te||$!==-1){G&&Oe(E,null,b,"created");let V=false;if(S(y)){V=_r(null,z)&&b&&b.vnode.props&&b.vnode.props.appear;const Y=y.content.firstChild;V&&z.beforeEnter(Y),N(Y,y,b),E.el=y=Y;}if(W&16&&!(k&&(k.innerHTML||k.textContent))){let Y=_(y.firstChild,E,y,b,M,j,U);for(;Y;){Et(y,1)||$e();const ie=Y;Y=Y.nextSibling,f(ie);}}else if(W&8){let Y=E.children;Y[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(Y=Y.slice(1)),y.textContent!==Y&&(Et(y,0)||$e(),y.textContent=E.children);}if(k){if(te||!U||$&48){const Y=y.tagName.includes("-");for(const ie in k)(te&&(ie.endsWith("value")||ie==="indeterminate")||i.isOn(ie)&&!i.isReservedProp(ie)||ie[0]==="."||Y)&&r(y,ie,null,k[ie],void 0,b);}else if(k.onClick)r(y,"onClick",null,k.onClick,void 0,b);else if($&4&&B.isReactive(k.style))for(const Y in k.style)k.style[Y];}let q;(q=k&&k.onVnodeBeforeMount)&&he(q,b,E),G&&Oe(E,null,b,"beforeMount"),((q=k&&k.onVnodeMounted)||G||V)&&kr(()=>{q&&he(q,b,E),V&&z.enter(y),G&&Oe(E,null,b,"mounted");},M);}return y.nextSibling},_=(y,E,b,M,j,U,F)=>{F=F||!!E.dynamicChildren;const k=E.children,$=k.length;for(let W=0;W<$;W++){const G=F?k[W]:k[W]=de(k[W]),z=G.type===Me;y?(z&&!F&&W+1<$&&de(k[W+1]).type===Me&&(u(s(y.data.slice(G.children.length)),b,l(y)),y.data=G.children),y=h(y,G,M,j,U,F)):z&&!G.children?u(G.el=s(""),b):(Et(b,1)||$e(),n(null,G,b,null,M,j,Ot(b),U));}return y},P=(y,E,b,M,j,U)=>{const{slotScopeIds:F}=E;F&&(j=j?j.concat(F):F);const k=o(y),$=_(l(y),E,k,b,M,j,U);return $&&Ke($)&&$.data==="]"?l(E.anchor=$):($e(),u(E.anchor=p("]"),k,$),$)},O=(y,E,b,M,j,U)=>{if(Et(y.parentElement,1)||$e(),E.el=null,U){const $=L(y);for(;;){const W=l(y);if(W&&W!==$)f(W);else break}}const F=l(y),k=o(y);return f(y),n(null,E,k,F,b,M,Ot(k),j),b&&(b.vnode.el=E.el,kt(b,E.el)),F},L=(y,E="[",b="]")=>{let M=0;for(;y;)if(y=l(y),y&&Ke(y)&&(y.data===E&&M++,y.data===b)){if(M===0)return l(y);M--;}return y},N=(y,E,b)=>{const M=E.parentNode;M&&M.replaceChild(y,E);let j=b;for(;j;)j.vnode.el===E&&(j.vnode.el=j.subTree.el=y),j=j.parent;},S=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return [d,h]}const Hn="data-allow-mismatch",gs={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Et(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Hn);)e=e.parentElement;const n=e&&e.getAttribute(Hn);if(n==null)return  false;if(n==="")return  true;{const r=n.split(",");return t===0&&r.includes("children")?true:n.split(",").includes(gs[t])}}const ps=i.getGlobalThis().requestIdleCallback||(e=>setTimeout(e,1)),ys=i.getGlobalThis().cancelIdleCallback||(e=>clearTimeout(e)),ms=(e=1e4)=>t=>{const n=ps(t,{timeout:e});return ()=>ys(n)};function _s(e){const{top:t,left:n,bottom:r,right:s}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:o}=void 0;return (t>0&&t<l||r>0&&r<l)&&(n>0&&n<o||s>0&&s<o)}const bs=e=>(t,n)=>{const r=new IntersectionObserver(s=>{for(const l of s)if(l.isIntersecting){r.disconnect(),t();break}},e);return n(s=>{if(s instanceof Element){if(_s(s))return t(),r.disconnect(),false;r.observe(s);}}),()=>r.disconnect()},Ts=e=>t=>{if(e){const n=matchMedia(e);if(n.matches)t();else return n.addEventListener("change",t,{once:true}),()=>n.removeEventListener("change",t)}},xs=(e=[])=>(t,n)=>{i.isString(e)&&(e=[e]);let r=false;const s=o=>{r||(r=true,l(),t(),o.target.dispatchEvent(new o.constructor(o.type,o)));},l=()=>{n(o=>{for(const f of e)o.removeEventListener(f,s);});};return n(o=>{for(const f of e)o.addEventListener(f,s,{once:true});}),l};function Os(e,t){if(Ke(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===false)break}else if(Ke(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling;}}else t(e);}const Re=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Es(e){i.isFunction(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:l,timeout:o,suspensible:f=true,onError:u}=e;let p=null,d,h=0;const x=()=>(h++,p=null,_()),_=()=>{let P;return p||(P=p=t().catch(O=>{if(O=O instanceof Error?O:new Error(String(O)),u)return new Promise((L,N)=>{u(O,()=>L(x()),()=>N(O),h+1);});throw O}).then(O=>P!==p&&p?p:(O&&(O.__esModule||O[Symbol.toStringTag]==="Module")&&(O=O.default),d=O,O)))};return In({name:"AsyncComponentWrapper",__asyncLoader:_,__asyncHydrate(P,O,L){const N=l?()=>{const S=l(L,y=>Os(P,y));S&&(O.bum||(O.bum=[])).push(S);}:L;d?N():_().then(()=>!O.isUnmounted&&N());},get __asyncResolved(){return d},setup(){const P=se;if(Dt(P),d)return ()=>jt(d,P);const O=y=>{p=null,Be(y,P,13,!r);};if(f&&P.suspense||qe)return _().then(y=>()=>jt(y,P)).catch(y=>(O(y),()=>r?ee(r,{error:y}):null));const L=B.ref(false),N=B.ref(),S=B.ref(!!s);return s&&setTimeout(()=>{S.value=false;},s),o!=null&&setTimeout(()=>{if(!L.value&&!N.value){const y=new Error(`Async component timed out after ${o}ms.`);O(y),N.value=y;}},o),_().then(()=>{L.value=true,P.parent&&et(P.parent.vnode)&&P.parent.update();}).catch(y=>{O(y),N.value=y;}),()=>{if(L.value&&d)return jt(d,P);if(N.value&&r)return ee(r,{error:N.value});if(n&&!S.value)return ee(n)}}})}function jt(e,t){const{ref:n,props:r,children:s,ce:l}=t.vnode,o=ee(e,r,s);return o.ref=n,o.ce=l,delete t.vnode.ce,o}const et=e=>e.type.__isKeepAlive,Cs={name:"KeepAlive",__isKeepAlive:true,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Ne(),r=n.ctx;if(!r.renderer)return ()=>{const L=t.default&&t.default();return L&&L.length===1?L[0]:L};const s=new Map,l=new Set;let o=null;const f=n.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:h}}}=r,x=h("div");r.activate=(L,N,S,y,E)=>{const b=L.component;p(L,N,S,0,f),u(b.vnode,L,N,S,b,f,y,L.slotScopeIds,E),le(()=>{b.isDeactivated=false,b.a&&i.invokeArrayFns(b.a);const M=L.props&&L.props.onVnodeMounted;M&&he(M,b.parent,L);},f);},r.deactivate=L=>{const N=L.component;At(N.m),At(N.a),p(L,x,null,1,f),le(()=>{N.da&&i.invokeArrayFns(N.da);const S=L.props&&L.props.onVnodeUnmounted;S&&he(S,N.parent,L),N.isDeactivated=true;},f);};function _(L){Dn(L),d(L,n,f,true);}function P(L){s.forEach((N,S)=>{const y=hn(N.type);y&&!L(y)&&O(S);});}function O(L){const N=s.get(L);N&&(!o||!be(N,o))?_(N):o&&Dn(o),s.delete(L),l.delete(L);}return it(()=>[e.include,e.exclude],([L,N])=>{L&&P(S=>tt(L,S)),N&&P(S=>!tt(N,S));},{flush:"post",deep:true}),()=>{if(!t.default)return o=null;const L=t.default(),N=L[0];if(L.length>1)return o=null,L;if(!Fe(N)||!(N.shapeFlag&4)&&!(N.shapeFlag&128))return o=null,N;let S=As(N);if(S.type===ne)return o=null,S;const y=S.type,E=hn(Re(S)?S.type.__asyncResolved||{}:y),{include:b,exclude:M,max:j}=e;if(b&&(!E||!tt(b,E))||M&&E&&tt(M,E))return S.shapeFlag&=-257,o=S,N;const U=S.key==null?y:S.key,F=s.get(U);return S.el&&(S=Ee(S),N.shapeFlag&128&&(N.ssContent=S)),F?(S.el=F.el,S.component=F.component,S.transition&&Ie(S,S.transition),S.shapeFlag|=512,l.delete(U),l.add(U)):(l.add(U),j&&l.size>parseInt(j,10)&&O(l.values().next().value)),S.shapeFlag|=256,o=S,nn(N.type)?N:S}}};function tt(e,t){return i.isArray(e)?e.some(n=>tt(n,t)):i.isString(e)?e.split(",").includes(t):i.isRegExp(e)?(e.lastIndex=0,e.test(t)):false}function Ln(e,t){Vn(e,"a",t);}function Un(e,t){Vn(e,"da",t);}function Vn(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent;}return e()});if(Ct(t,r,n),n){let s=n.parent;for(;s&&s.parent;)et(s.parent.vnode)&&vs(r,t,n,s),s=s.parent;}}function vs(e,t,n,r){Ct(t,e,r,true);}function Dn(e){e.shapeFlag&=-257,e.shapeFlag&=-513;}function As(e){return e.shapeFlag&128?e.ssContent:e}function Ct(e,t,n=se,r=false){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{B.pauseTracking();const f=Ue(n),u=_e(t,n,e,o);return f(),B.resetTracking(),u});return r?s.unshift(l):s.push(l),l}}const Ae=e=>(t,n=se)=>{(!qe||e==="sp")&&Ct(e,(...r)=>t(...r),n);},jn=Ae("bm"),Yn=Ae("m"),$n=Ae("bu"),Kn=Ae("u"),Jn=Ae("bum"),Wn=Ae("um"),qn=Ae("sp"),Gn=Ae("rtg"),Qn=Ae("rtc");function Xn(e,t=se){Ct("ec",e,t);}const Yt="components",Fs="directives";function Ps(e,t){return $t(Yt,e,true,t)||e}const Zn=Symbol.for("v-ndc");function ks(e){return i.isString(e)?$t(Yt,e,false)||e:e||Zn}function Rs(e){return $t(Fs,e)}function $t(e,t,n=true,r=false){const s=re||se;if(s){const l=s.type;if(e===Yt){const f=hn(l,false);if(f&&(f===t||f===i.camelize(t)||f===i.capitalize(i.camelize(t))))return l}const o=zn(s[e]||l[e],t)||zn(s.appContext[e],t);return !o&&r?l:o}}function zn(e,t){return e&&(e[t]||e[i.camelize(t)]||e[i.capitalize(i.camelize(t))])}function Ms(e,t,n,r){let s;const l=n&&n[r],o=i.isArray(e);if(o||i.isString(e)){const f=o&&B.isReactive(e);let u=false;f&&(u=!B.isShallow(e),e=B.shallowReadArray(e)),s=new Array(e.length);for(let p=0,d=e.length;p<d;p++)s[p]=t(u?B.toReactive(e[p]):e[p],p,void 0,l&&l[p]);}else if(typeof e=="number"){s=new Array(e);for(let f=0;f<e;f++)s[f]=t(f+1,f,void 0,l&&l[f]);}else if(i.isObject(e))if(e[Symbol.iterator])s=Array.from(e,(f,u)=>t(f,u,void 0,l&&l[u]));else {const f=Object.keys(e);s=new Array(f.length);for(let u=0,p=f.length;u<p;u++){const d=f[u];s[u]=t(e[d],d,u,l&&l[u]);}}else s=[];return n&&(n[r]=s),s}function ws(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(i.isArray(r))for(let s=0;s<r.length;s++)e[r[s].name]=r[s].fn;else r&&(e[r.name]=r.key?(...s)=>{const l=r.fn(...s);return l&&(l.key=r.key),l}:r.fn);}return e}function Ns(e,t,n={},r,s){if(re.ce||re.parent&&Re(re.parent)&&re.parent.ce)return t!=="default"&&(n.name=t),ut(),Rt(oe,null,[ee("slot",n,r&&r())],64);let l=e[t];l&&l._c&&(l._d=false),ut();const o=l&&Kt(l(n)),f=n.key||o&&o.key,u=Rt(oe,{key:(f&&!i.isSymbol(f)?f:`_${t}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&e._===1?64:-2);return !s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),l&&l._c&&(l._d=true),u}function Kt(e){return e.some(t=>Fe(t)?!(t.type===ne||t.type===oe&&!Kt(t.children)):true)?e:null}function Bs(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:i.toHandlerKey(r)]=e[r];return n}const Jt=e=>e?Sr(e)?at(e):Jt(e.parent):null,nt=i.extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jt(e.parent),$root:e=>Jt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Qt(e),$forceUpdate:e=>e.f||(e.f=()=>{St(e.update);}),$nextTick:e=>e.n||(e.n=_n.bind(e.proxy)),$watch:e=>gl.bind(e)}),Wt=(e,t)=>e!==i.EMPTY_OBJ&&!e.__isScriptSetup&&i.hasOwn(e,t),qt={get({_:e},t){if(t==="__v_skip")return  true;const{ctx:n,setupState:r,data:s,props:l,accessCache:o,type:f,appContext:u}=e;let p;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else {if(Wt(r,t))return o[t]=1,r[t];if(s!==i.EMPTY_OBJ&&i.hasOwn(s,t))return o[t]=2,s[t];if((p=e.propsOptions[0])&&i.hasOwn(p,t))return o[t]=3,l[t];if(n!==i.EMPTY_OBJ&&i.hasOwn(n,t))return o[t]=4,n[t];Gt&&(o[t]=0);}}const d=nt[t];let h,x;if(d)return t==="$attrs"&&B.track(e.attrs,"get",""),d(e);if((h=f.__cssModules)&&(h=h[t]))return h;if(n!==i.EMPTY_OBJ&&i.hasOwn(n,t))return o[t]=4,n[t];if(x=u.config.globalProperties,i.hasOwn(x,t))return x[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:l}=e;return Wt(s,t)?(s[t]=n,true):r!==i.EMPTY_OBJ&&i.hasOwn(r,t)?(r[t]=n,true):i.hasOwn(e.props,t)||t[0]==="$"&&t.slice(1)in e?false:(l[t]=n,true)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:l}},o){let f;return !!n[o]||e!==i.EMPTY_OBJ&&i.hasOwn(e,o)||Wt(t,o)||(f=l[0])&&i.hasOwn(f,o)||i.hasOwn(r,o)||i.hasOwn(nt,o)||i.hasOwn(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:i.hasOwn(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Is=i.extend({},qt,{get(e,t){if(t!==Symbol.unscopables)return qt.get(e,t,e)},has(e,t){return t[0]!=="_"&&!i.isGloballyAllowed(t)}});function Ss(){return null}function Hs(){return null}function Ls(e){}function Us(e){}function Vs(){return null}function Ds(){}function js(e,t){return null}function Ys(){return er().slots}function $s(){return er().attrs}function er(){const e=Ne();return e.setupContext||(e.setupContext=Ur(e))}function rt(e){return i.isArray(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Ks(e,t){const n=rt(e);for(const r in t){if(r.startsWith("__skip"))continue;let s=n[r];s?i.isArray(s)||i.isFunction(s)?s=n[r]={type:s,default:t[r]}:s.default=t[r]:s===null&&(s=n[r]={default:t[r]}),s&&t[`__skip_${r}`]&&(s.skipFactory=true);}return n}function Js(e,t){return !e||!t?e||t:i.isArray(e)&&i.isArray(t)?e.concat(t):i.extend({},rt(e),rt(t))}function Ws(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:true,get:()=>e[r]});return n}function qs(e){const t=Ne();let n=e();return un(),i.isPromise(n)&&(n=n.catch(r=>{throw Ue(t),r})),[n,()=>Ue(t)]}let Gt=true;function Gs(e){const t=Qt(e),n=e.proxy,r=e.ctx;Gt=false,t.beforeCreate&&tr(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:o,watch:f,provide:u,inject:p,created:d,beforeMount:h,mounted:x,beforeUpdate:_,updated:P,activated:O,deactivated:L,beforeDestroy:N,beforeUnmount:S,destroyed:y,unmounted:E,render:b,renderTracked:M,renderTriggered:j,errorCaptured:U,serverPrefetch:F,expose:k,inheritAttrs:$,components:W,directives:G,filters:z}=t;if(p&&Qs(p,r,null),o)for(const q in o){const Y=o[q];i.isFunction(Y)&&(r[q]=Y.bind(n));}if(s){const q=s.call(n,n);i.isObject(q)&&(e.data=B.reactive(q));}if(Gt=true,l)for(const q in l){const Y=l[q],ie=i.isFunction(Y)?Y.bind(n,n):i.isFunction(Y.get)?Y.get.bind(n,n):i.NOOP,Bt=!i.isFunction(Y)&&i.isFunction(Y.set)?Y.set.bind(n):i.NOOP,Ve=Vr({get:ie,set:Bt});Object.defineProperty(r,q,{enumerable:true,configurable:true,get:()=>Ve.value,set:Ce=>Ve.value=Ce});}if(f)for(const q in f)nr(f[q],r,n,q);if(u){const q=i.isFunction(u)?u.call(n):u;Reflect.ownKeys(q).forEach(Y=>{ir(Y,q[Y]);});}d&&tr(d,e,"c");function V(q,Y){i.isArray(Y)?Y.forEach(ie=>q(ie.bind(n))):Y&&q(Y.bind(n));}if(V(jn,h),V(Yn,x),V($n,_),V(Kn,P),V(Ln,O),V(Un,L),V(Xn,U),V(Qn,M),V(Gn,j),V(Jn,S),V(Wn,E),V(qn,F),i.isArray(k))if(k.length){const q=e.exposed||(e.exposed={});k.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:ie=>n[Y]=ie});});}else e.exposed||(e.exposed={});b&&e.render===i.NOOP&&(e.render=b),$!=null&&(e.inheritAttrs=$),W&&(e.components=W),G&&(e.directives=G),F&&Dt(e);}function Qs(e,t,n=i.NOOP){i.isArray(e)&&(e=Xt(e));for(const r in e){const s=e[r];let l;i.isObject(s)?"default"in s?l=lt(s.from||r,s.default,true):l=lt(s.from||r):l=lt(s),B.isRef(l)?Object.defineProperty(t,r,{enumerable:true,configurable:true,get:()=>l.value,set:o=>l.value=o}):t[r]=l;}}function tr(e,t,n){_e(i.isArray(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n);}function nr(e,t,n,r){let s=r.includes(".")?Er(n,r):()=>n[r];if(i.isString(e)){const l=t[e];i.isFunction(l)&&it(s,l);}else if(i.isFunction(e))it(s,e.bind(n));else if(i.isObject(e))if(i.isArray(e))e.forEach(l=>nr(l,t,n,r));else {const l=i.isFunction(e.handler)?e.handler.bind(n):t[e.handler];i.isFunction(l)&&it(s,l,e);}}function Qt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,f=l.get(t);let u;return f?u=f:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(p=>vt(u,p,o,true)),vt(u,t,o)),i.isObject(t)&&l.set(t,u),u}function vt(e,t,n,r=false){const{mixins:s,extends:l}=t;l&&vt(e,l,n,true),s&&s.forEach(o=>vt(e,o,n,true));for(const o in t)if(!(r&&o==="expose")){const f=Xs[o]||n&&n[o];e[o]=f?f(e[o],t[o]):t[o];}return e}const Xs={data:rr,props:sr,emits:sr,methods:st,computed:st,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:st,directives:st,watch:zs,provide:rr,inject:Zs};function rr(e,t){return t?e?function(){return i.extend(i.isFunction(e)?e.call(this,this):e,i.isFunction(t)?t.call(this,this):t)}:t:e}function Zs(e,t){return st(Xt(e),Xt(t))}function Xt(e){if(i.isArray(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?i.extend(Object.create(null),e,t):t}function sr(e,t){return e?i.isArray(e)&&i.isArray(t)?[...new Set([...e,...t])]:i.extend(Object.create(null),rt(e),rt(t??{})):t}function zs(e,t){if(!e)return t;if(!t)return e;const n=i.extend(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function lr(){return {app:null,config:{isNativeTag:i.NO,performance:false,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let el=0;function tl(e,t){return function(r,s=null){i.isFunction(r)||(r=i.extend({},r)),s!=null&&!i.isObject(s)&&(s=null);const l=lr(),o=new WeakSet,f=[];let u=false;const p=l.app={_uid:el++,_component:r,_props:s,_container:null,_context:l,_instance:null,version:jr,get config(){return l.config},set config(d){},use(d,...h){return o.has(d)||(d&&i.isFunction(d.install)?(o.add(d),d.install(p,...h)):i.isFunction(d)&&(o.add(d),d(p,...h))),p},mixin(d){return l.mixins.includes(d)||l.mixins.push(d),p},component(d,h){return h?(l.components[d]=h,p):l.components[d]},directive(d,h){return h?(l.directives[d]=h,p):l.directives[d]},mount(d,h,x){if(!u){const _=p._ceVNode||ee(r,s);return _.appContext=l,x===true?x="svg":x===false&&(x=void 0),h&&t?t(_,d):e(_,d,x),u=true,p._container=d,d.__vue_app__=p,at(_.component)}},onUnmount(d){f.push(d);},unmount(){u&&(_e(f,p._instance,16),e(null,p._container),delete p._container.__vue_app__);},provide(d,h){return l.provides[d]=h,p},runWithContext(d){const h=Se;Se=p;try{return d()}finally{Se=h;}}};return p}}let Se=null;function ir(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t;}}function lt(e,t,n=false){const r=se||re;if(r||Se){const s=Se?Se._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&i.isFunction(t)?t.call(r&&r.proxy):t}}function nl(){return !!(se||re||Se)}const or={},cr=()=>Object.create(or),fr=e=>Object.getPrototypeOf(e)===or;function rl(e,t,n,r=false){const s={},l=cr();e.propsDefaults=Object.create(null),ur(e,t,s,l);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:B.shallowReactive(s):e.type.props?e.props=s:e.props=l,e.attrs=l;}function sl(e,t,n,r){const{props:s,attrs:l,vnode:{patchFlag:o}}=e,f=B.toRaw(s),[u]=e.propsOptions;let p=false;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let x=d[h];if(Ft(e.emitsOptions,x))continue;const _=t[x];if(u)if(i.hasOwn(l,x))_!==l[x]&&(l[x]=_,p=true);else {const P=i.camelize(x);s[P]=Zt(u,f,P,_,e,false);}else _!==l[x]&&(l[x]=_,p=true);}}}else {ur(e,t,s,l)&&(p=true);let d;for(const h in f)(!t||!i.hasOwn(t,h)&&((d=i.hyphenate(h))===h||!i.hasOwn(t,d)))&&(u?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=Zt(u,f,h,void 0,e,true)):delete s[h]);if(l!==f)for(const h in l)(!t||!i.hasOwn(t,h))&&(delete l[h],p=true);}p&&B.trigger(e.attrs,"set","");}function ur(e,t,n,r){const[s,l]=e.propsOptions;let o=false,f;if(t)for(let u in t){if(i.isReservedProp(u))continue;const p=t[u];let d;s&&i.hasOwn(s,d=i.camelize(u))?!l||!l.includes(d)?n[d]=p:(f||(f={}))[d]=p:Ft(e.emitsOptions,u)||(!(u in r)||p!==r[u])&&(r[u]=p,o=true);}if(l){const u=B.toRaw(n),p=f||i.EMPTY_OBJ;for(let d=0;d<l.length;d++){const h=l[d];n[h]=Zt(s,u,h,p[h],e,!i.hasOwn(p,h));}}return o}function Zt(e,t,n,r,s,l){const o=e[n];if(o!=null){const f=i.hasOwn(o,"default");if(f&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&i.isFunction(u)){const{propsDefaults:p}=s;if(n in p)r=p[n];else {const d=Ue(s);r=p[n]=u.call(null,t),d();}}else r=u;s.ce&&s.ce._setProp(n,r);}o[0]&&(l&&!f?r=false:o[1]&&(r===""||r===i.hyphenate(n))&&(r=true));}return r}const ll=new WeakMap;function ar(e,t,n=false){const r=n?ll:t.propsCache,s=r.get(e);if(s)return s;const l=e.props,o={},f=[];let u=false;if(!i.isFunction(e)){const d=h=>{u=true;const[x,_]=ar(h,t,true);i.extend(o,x),_&&f.push(..._);};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d);}if(!l&&!u)return i.isObject(e)&&r.set(e,i.EMPTY_ARR),i.EMPTY_ARR;if(i.isArray(l))for(let d=0;d<l.length;d++){const h=i.camelize(l[d]);dr(h)&&(o[h]=i.EMPTY_OBJ);}else if(l)for(const d in l){const h=i.camelize(d);if(dr(h)){const x=l[d],_=o[h]=i.isArray(x)||i.isFunction(x)?{type:x}:i.extend({},x),P=_.type;let O=false,L=true;if(i.isArray(P))for(let N=0;N<P.length;++N){const S=P[N],y=i.isFunction(S)&&S.name;if(y==="Boolean"){O=true;break}else y==="String"&&(L=false);}else O=i.isFunction(P)&&P.name==="Boolean";_[0]=O,_[1]=L,(O||i.hasOwn(_,"default"))&&f.push(h);}}const p=[o,f];return i.isObject(e)&&r.set(e,p),p}function dr(e){return e[0]!=="$"&&!i.isReservedProp(e)}const hr=e=>e[0]==="_"||e==="$stable",zt=e=>i.isArray(e)?e.map(de):[de(e)],il=(e,t,n)=>{if(t._n)return t;const r=Ht((...s)=>zt(t(...s)),n);return r._c=false,r},gr=(e,t,n)=>{const r=e._ctx;for(const s in e){if(hr(s))continue;const l=e[s];if(i.isFunction(l))t[s]=il(s,l,r);else if(l!=null){const o=zt(l);t[s]=()=>o;}}},pr=(e,t)=>{const n=zt(t);e.slots.default=()=>n;},yr=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r]);},ol=(e,t,n)=>{const r=e.slots=cr();if(e.vnode.shapeFlag&32){const s=t._;s?(yr(r,t,n),n&&i.def(r,"_",s,true)):gr(t,r);}else t&&pr(e,t);},cl=(e,t,n)=>{const{vnode:r,slots:s}=e;let l=true,o=i.EMPTY_OBJ;if(r.shapeFlag&32){const f=t._;f?n&&f===1?l=false:yr(s,t,n):(l=!t.$stable,gr(t,s)),o=t;}else t&&(pr(e,t),o={default:1});if(l)for(const f in s)!hr(f)&&o[f]==null&&delete s[f];},le=kr;function fl(e){return mr(e)}function ul(e){return mr(e,hs)}function mr(e,t){const n=i.getGlobalThis();n.__VUE__=true;const{insert:r,remove:s,patchProp:l,createElement:o,createText:f,createComment:u,setText:p,setElementText:d,parentNode:h,nextSibling:x,setScopeId:_=i.NOOP,insertStaticContent:P}=e,O=(c,a,m,v=null,T=null,C=null,I=void 0,w=null,R=!!a.dynamicChildren)=>{if(c===a)return;c&&!be(c,a)&&(v=It(c),Ce(c,T,C,true),c=null),a.patchFlag===-2&&(R=false,a.dynamicChildren=null);const{type:A,ref:K,shapeFlag:H}=a;switch(A){case Me:L(c,a,m,v);break;case ne:N(c,a,m,v);break;case We:c==null&&S(a,m,v,I);break;case oe:W(c,a,m,v,T,C,I,w,R);break;default:H&1?b(c,a,m,v,T,C,I,w,R):H&6?G(c,a,m,v,T,C,I,w,R):(H&64||H&128)&&A.process(c,a,m,v,T,C,I,w,R,Ge);}K!=null&&T&&ze(K,c&&c.ref,C,a||c,!a);},L=(c,a,m,v)=>{if(c==null)r(a.el=f(a.children),m,v);else {const T=a.el=c.el;a.children!==c.children&&p(T,a.children);}},N=(c,a,m,v)=>{c==null?r(a.el=u(a.children||""),m,v):a.el=c.el;},S=(c,a,m,v)=>{[c.el,c.anchor]=P(c.children,a,m,v,c.el,c.anchor);},y=({el:c,anchor:a},m,v)=>{let T;for(;c&&c!==a;)T=x(c),r(c,m,v),c=T;r(a,m,v);},E=({el:c,anchor:a})=>{let m;for(;c&&c!==a;)m=x(c),s(c),c=m;s(a);},b=(c,a,m,v,T,C,I,w,R)=>{a.type==="svg"?I="svg":a.type==="math"&&(I="mathml"),c==null?M(a,m,v,T,C,I,w,R):F(c,a,T,C,I,w,R);},M=(c,a,m,v,T,C,I,w)=>{let R,A;const{props:K,shapeFlag:H,transition:D,dirs:J}=c;if(R=c.el=o(c.type,C,K&&K.is,K),H&8?d(R,c.children):H&16&&U(c.children,R,null,v,T,en(c,C),I,w),J&&Oe(c,null,v,"created"),j(R,c,c.scopeId,I,v),K){for(const Z in K)Z!=="value"&&!i.isReservedProp(Z)&&l(R,Z,null,K[Z],C,v);"value"in K&&l(R,"value",null,K.value,C),(A=K.onVnodeBeforeMount)&&he(A,v,c);}J&&Oe(c,null,v,"beforeMount");const Q=_r(T,D);Q&&D.beforeEnter(R),r(R,a,m),((A=K&&K.onVnodeMounted)||Q||J)&&le(()=>{A&&he(A,v,c),Q&&D.enter(R),J&&Oe(c,null,v,"mounted");},T);},j=(c,a,m,v,T)=>{if(m&&_(c,m),v)for(let C=0;C<v.length;C++)_(c,v[C]);if(T){let C=T.subTree;if(a===C||nn(C.type)&&(C.ssContent===a||C.ssFallback===a)){const I=T.vnode;j(c,I,I.scopeId,I.slotScopeIds,T.parent);}}},U=(c,a,m,v,T,C,I,w,R=0)=>{for(let A=R;A<c.length;A++){const K=c[A]=w?we(c[A]):de(c[A]);O(null,K,a,m,v,T,C,I,w);}},F=(c,a,m,v,T,C,I)=>{const w=a.el=c.el;let{patchFlag:R,dynamicChildren:A,dirs:K}=a;R|=c.patchFlag&16;const H=c.props||i.EMPTY_OBJ,D=a.props||i.EMPTY_OBJ;let J;if(m&&He(m,false),(J=D.onVnodeBeforeUpdate)&&he(J,m,a,c),K&&Oe(a,c,m,"beforeUpdate"),m&&He(m,true),(H.innerHTML&&D.innerHTML==null||H.textContent&&D.textContent==null)&&d(w,""),A?k(c.dynamicChildren,A,w,m,v,en(a,T),C):I||Y(c,a,w,null,m,v,en(a,T),C,false),R>0){if(R&16)$(w,H,D,m,T);else if(R&2&&H.class!==D.class&&l(w,"class",null,D.class,T),R&4&&l(w,"style",H.style,D.style,T),R&8){const Q=a.dynamicProps;for(let Z=0;Z<Q.length;Z++){const X=Q[Z],ge=H[X],fe=D[X];(fe!==ge||X==="value")&&l(w,X,ge,fe,T,m);}}R&1&&c.children!==a.children&&d(w,a.children);}else !I&&A==null&&$(w,H,D,m,T);((J=D.onVnodeUpdated)||K)&&le(()=>{J&&he(J,m,a,c),K&&Oe(a,c,m,"updated");},v);},k=(c,a,m,v,T,C,I)=>{for(let w=0;w<a.length;w++){const R=c[w],A=a[w],K=R.el&&(R.type===oe||!be(R,A)||R.shapeFlag&70)?h(R.el):m;O(R,A,K,null,v,T,C,I,true);}},$=(c,a,m,v,T)=>{if(a!==m){if(a!==i.EMPTY_OBJ)for(const C in a)!i.isReservedProp(C)&&!(C in m)&&l(c,C,a[C],null,T,v);for(const C in m){if(i.isReservedProp(C))continue;const I=m[C],w=a[C];I!==w&&C!=="value"&&l(c,C,w,I,T,v);}"value"in m&&l(c,"value",a.value,m.value,T);}},W=(c,a,m,v,T,C,I,w,R)=>{const A=a.el=c?c.el:f(""),K=a.anchor=c?c.anchor:f("");let{patchFlag:H,dynamicChildren:D,slotScopeIds:J}=a;J&&(w=w?w.concat(J):J),c==null?(r(A,m,v),r(K,m,v),U(a.children||[],m,K,T,C,I,w,R)):H>0&&H&64&&D&&c.dynamicChildren?(k(c.dynamicChildren,D,m,T,C,I,w),(a.key!=null||T&&a===T.subTree)&&tn(c,a,true)):Y(c,a,m,K,T,C,I,w,R);},G=(c,a,m,v,T,C,I,w,R)=>{a.slotScopeIds=w,c==null?a.shapeFlag&512?T.ctx.activate(a,m,v,I,R):z(a,m,v,T,C,I,R):te(c,a,R);},z=(c,a,m,v,T,C,I)=>{const w=c.component=Ir(c,v,T);if(et(c)&&(w.ctx.renderer=Ge),Hr(w,false,I),w.asyncDep){if(T&&T.registerDep(w,V,I),!c.el){const R=w.subTree=ee(ne);N(null,R,a,m);}}else V(w,c,a,m,T,C,I);},te=(c,a,m)=>{const v=a.component=c.component;if(Tl(c,a,m))if(v.asyncDep&&!v.asyncResolved){q(v,a,m);return}else v.next=a,v.update();else a.el=c.el,v.vnode=a;},V=(c,a,m,v,T,C,I)=>{const w=()=>{if(c.isMounted){let{next:H,bu:D,u:J,parent:Q,vnode:Z}=c;{const pe=br(c);if(pe){H&&(H.el=Z.el,q(c,H,I)),pe.asyncDep.then(()=>{c.isUnmounted||w();});return}}let X=H,ge;He(c,false),H?(H.el=Z.el,q(c,H,I)):H=Z,D&&i.invokeArrayFns(D),(ge=H.props&&H.props.onVnodeBeforeUpdate)&&he(ge,Q,H,Z),He(c,true);const fe=Pt(c),Te=c.subTree;c.subTree=fe,O(Te,fe,h(Te.el),It(Te),c,T,C),H.el=fe.el,X===null&&kt(c,fe.el),J&&le(J,T),(ge=H.props&&H.props.onVnodeUpdated)&&le(()=>he(ge,Q,H,Z),T);}else {let H;const{el:D,props:J}=a,{bm:Q,m:Z,parent:X,root:ge,type:fe}=c,Te=Re(a);if(He(c,false),Q&&i.invokeArrayFns(Q),!Te&&(H=J&&J.onVnodeBeforeMount)&&he(H,X,a),He(c,true),D&&yn){const pe=()=>{c.subTree=Pt(c),yn(D,c.subTree,c,T,null);};Te&&fe.__asyncHydrate?fe.__asyncHydrate(D,c,pe):pe();}else {ge.ce&&ge.ce._injectChildStyle(fe);const pe=c.subTree=Pt(c);O(null,pe,m,v,c,T,C),a.el=pe.el;}if(Z&&le(Z,T),!Te&&(H=J&&J.onVnodeMounted)){const pe=a;le(()=>he(H,X,pe),T);}(a.shapeFlag&256||X&&Re(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&le(c.a,T),c.isMounted=true,a=m=v=null;}};c.scope.on();const R=c.effect=new B.ReactiveEffect(w);c.scope.off();const A=c.update=R.run.bind(R),K=c.job=R.runIfDirty.bind(R);K.i=c,K.id=c.uid,R.scheduler=()=>St(K),He(c,true),A();},q=(c,a,m)=>{a.component=c;const v=c.vnode.props;c.vnode=a,c.next=null,sl(c,a.props,v,m),cl(c,a.children,m),B.pauseTracking(),Tn(c),B.resetTracking();},Y=(c,a,m,v,T,C,I,w,R=false)=>{const A=c&&c.children,K=c?c.shapeFlag:0,H=a.children,{patchFlag:D,shapeFlag:J}=a;if(D>0){if(D&128){Bt(A,H,m,v,T,C,I,w,R);return}else if(D&256){ie(A,H,m,v,T,C,I,w,R);return}}J&8?(K&16&&dt(A,T,C),H!==A&&d(m,H)):K&16?J&16?Bt(A,H,m,v,T,C,I,w,R):dt(A,T,C,true):(K&8&&d(m,""),J&16&&U(H,m,v,T,C,I,w,R));},ie=(c,a,m,v,T,C,I,w,R)=>{c=c||i.EMPTY_ARR,a=a||i.EMPTY_ARR;const A=c.length,K=a.length,H=Math.min(A,K);let D;for(D=0;D<H;D++){const J=a[D]=R?we(a[D]):de(a[D]);O(c[D],J,m,null,T,C,I,w,R);}A>K?dt(c,T,C,true,false,H):U(a,m,v,T,C,I,w,R,H);},Bt=(c,a,m,v,T,C,I,w,R)=>{let A=0;const K=a.length;let H=c.length-1,D=K-1;for(;A<=H&&A<=D;){const J=c[A],Q=a[A]=R?we(a[A]):de(a[A]);if(be(J,Q))O(J,Q,m,null,T,C,I,w,R);else break;A++;}for(;A<=H&&A<=D;){const J=c[H],Q=a[D]=R?we(a[D]):de(a[D]);if(be(J,Q))O(J,Q,m,null,T,C,I,w,R);else break;H--,D--;}if(A>H){if(A<=D){const J=D+1,Q=J<K?a[J].el:v;for(;A<=D;)O(null,a[A]=R?we(a[A]):de(a[A]),m,Q,T,C,I,w,R),A++;}}else if(A>D)for(;A<=H;)Ce(c[A],T,C,true),A++;else {const J=A,Q=A,Z=new Map;for(A=Q;A<=D;A++){const ye=a[A]=R?we(a[A]):de(a[A]);ye.key!=null&&Z.set(ye.key,A);}let X,ge=0;const fe=D-Q+1;let Te=false,pe=0;const ht=new Array(fe);for(A=0;A<fe;A++)ht[A]=0;for(A=J;A<=H;A++){const ye=c[A];if(ge>=fe){Ce(ye,T,C,true);continue}let ve;if(ye.key!=null)ve=Z.get(ye.key);else for(X=Q;X<=D;X++)if(ht[X-Q]===0&&be(ye,a[X])){ve=X;break}ve===void 0?Ce(ye,T,C,true):(ht[ve-Q]=A+1,ve>=pe?pe=ve:Te=true,O(ye,a[ve],m,null,T,C,I,w,R),ge++);}const Kr=Te?al(ht):i.EMPTY_ARR;for(X=Kr.length-1,A=fe-1;A>=0;A--){const ye=Q+A,ve=a[ye],Jr=ye+1<K?a[ye+1].el:v;ht[A]===0?O(null,ve,m,Jr,T,C,I,w,R):Te&&(X<0||A!==Kr[X]?Ve(ve,m,Jr,2):X--);}}},Ve=(c,a,m,v,T=null)=>{const{el:C,type:I,transition:w,children:R,shapeFlag:A}=c;if(A&6){Ve(c.component.subTree,a,m,v);return}if(A&128){c.suspense.move(a,m,v);return}if(A&64){I.move(c,a,m,Ge);return}if(I===oe){r(C,a,m);for(let H=0;H<R.length;H++)Ve(R[H],a,m,v);r(c.anchor,a,m);return}if(I===We){y(c,a,m);return}if(v!==2&&A&1&&w)if(v===0)w.beforeEnter(C),r(C,a,m),le(()=>w.enter(C),T);else {const{leave:H,delayLeave:D,afterLeave:J}=w,Q=()=>r(C,a,m),Z=()=>{H(C,()=>{Q(),J&&J();});};D?D(C,Q,Z):Z();}else r(C,a,m);},Ce=(c,a,m,v=false,T=false)=>{const{type:C,props:I,ref:w,children:R,dynamicChildren:A,shapeFlag:K,patchFlag:H,dirs:D,cacheIndex:J}=c;if(H===-2&&(T=false),w!=null&&ze(w,null,m,c,true),J!=null&&(a.renderCache[J]=void 0),K&256){a.ctx.deactivate(c);return}const Q=K&1&&D,Z=!Re(c);let X;if(Z&&(X=I&&I.onVnodeBeforeUnmount)&&he(X,a,c),K&6)Xl(c.component,m,v);else {if(K&128){c.suspense.unmount(m,v);return}Q&&Oe(c,null,a,"beforeUnmount"),K&64?c.type.remove(c,a,m,Ge,v):A&&!A.hasOnce&&(C!==oe||H>0&&H&64)?dt(A,a,m,false,true):(C===oe&&H&384||!T&&K&16)&&dt(R,a,m),v&&Yr(c);}(Z&&(X=I&&I.onVnodeUnmounted)||Q)&&le(()=>{X&&he(X,a,c),Q&&Oe(c,null,a,"unmounted");},m);},Yr=c=>{const{type:a,el:m,anchor:v,transition:T}=c;if(a===oe){Ql(m,v);return}if(a===We){E(c);return}const C=()=>{s(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave();};if(c.shapeFlag&1&&T&&!T.persisted){const{leave:I,delayLeave:w}=T,R=()=>I(m,C);w?w(c.el,C,R):R();}else C();},Ql=(c,a)=>{let m;for(;c!==a;)m=x(c),s(c),c=m;s(a);},Xl=(c,a,m)=>{const{bum:v,scope:T,job:C,subTree:I,um:w,m:R,a:A}=c;At(R),At(A),v&&i.invokeArrayFns(v),T.stop(),C&&(C.flags|=8,Ce(I,c,a,m)),w&&le(w,a),le(()=>{c.isUnmounted=true;},a),a&&a.pendingBranch&&!a.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve());},dt=(c,a,m,v=false,T=false,C=0)=>{for(let I=C;I<c.length;I++)Ce(c[I],a,m,v,T);},It=c=>{if(c.shapeFlag&6)return It(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const a=x(c.anchor||c.el),m=a&&a[On];return m?x(m):a};let gn=false;const $r=(c,a,m)=>{c==null?a._vnode&&Ce(a._vnode,null,null,true):O(a._vnode||null,c,a,null,null,null,m),a._vnode=c,gn||(gn=true,Tn(),yt(),gn=false);},Ge={p:O,um:Ce,m:Ve,r:Yr,mt:z,mc:U,pc:Y,pbc:k,n:It,o:e};let pn,yn;return t&&([pn,yn]=t(Ge)),{render:$r,hydrate:pn,createApp:tl($r,pn)}}function en({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function He({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5);}function _r(e,t){return (!e||e&&!e.pendingBranch)&&t&&!t.persisted}function tn(e,t,n=false){const r=e.children,s=t.children;if(i.isArray(r)&&i.isArray(s))for(let l=0;l<r.length;l++){const o=r[l];let f=s[l];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[l]=we(s[l]),f.el=o.el),!n&&f.patchFlag!==-2&&tn(o,f)),f.type===Me&&(f.el=o.el);}}function al(e){const t=e.slice(),n=[0];let r,s,l,o,f;const u=e.length;for(r=0;r<u;r++){const p=e[r];if(p!==0){if(s=n[n.length-1],e[s]<p){t[r]=s,n.push(r);continue}for(l=0,o=n.length-1;l<o;)f=l+o>>1,e[n[f]]<p?l=f+1:o=f;p<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r);}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function br(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:br(t)}function At(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8;}const Tr=Symbol.for("v-scx"),xr=()=>lt(Tr);function dl(e,t){return ot(e,null,t)}function hl(e,t){return ot(e,null,{flush:"post"})}function Or(e,t){return ot(e,null,{flush:"sync"})}function it(e,t,n){return ot(e,t,n)}function ot(e,t,n=i.EMPTY_OBJ){const{immediate:r,deep:s,flush:l,once:o}=n,f=i.extend({},n),u=t&&r||!t&&l!=="post";let p;if(qe){if(l==="sync"){const _=xr();p=_.__watcherHandles||(_.__watcherHandles=[]);}else if(!u){const _=()=>{};return _.stop=i.NOOP,_.resume=i.NOOP,_.pause=i.NOOP,_}}const d=se;f.call=(_,P,O)=>_e(_,d,P,O);let h=false;l==="post"?f.scheduler=_=>{le(_,d&&d.suspense);}:l!=="sync"&&(h=true,f.scheduler=(_,P)=>{P?_():St(_);}),f.augmentJob=_=>{t&&(_.flags|=4),h&&(_.flags|=2,d&&(_.id=d.uid,_.i=d));};const x=B.watch(e,t,f);return qe&&(p?p.push(x):u&&x()),x}function gl(e,t,n){const r=this.proxy,s=i.isString(e)?e.includes(".")?Er(r,e):()=>r[e]:e.bind(r,r);let l;i.isFunction(t)?l=t:(l=t.handler,n=t);const o=Ue(this),f=ot(s,l.bind(r),n);return o(),f}function Er(e,t){const n=t.split(".");return ()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function pl(e,t,n=i.EMPTY_OBJ){const r=Ne(),s=i.camelize(t),l=i.hyphenate(t),o=Cr(e,s),f=B.customRef((u,p)=>{let d,h=i.EMPTY_OBJ,x;return Or(()=>{const _=e[s];i.hasChanged(d,_)&&(d=_,p());}),{get(){return u(),n.get?n.get(d):d},set(_){const P=n.set?n.set(_):_;if(!i.hasChanged(P,d)&&!(h!==i.EMPTY_OBJ&&i.hasChanged(_,h)))return;const O=r.vnode.props;O&&(t in O||s in O||l in O)&&(`onUpdate:${t}`in O||`onUpdate:${s}`in O||`onUpdate:${l}`in O)||(d=_,p()),r.emit(`update:${t}`,P),i.hasChanged(_,P)&&i.hasChanged(_,h)&&!i.hasChanged(P,x)&&p(),h=_,x=P;}}});return f[Symbol.iterator]=()=>{let u=0;return {next(){return u<2?{value:u++?o||i.EMPTY_OBJ:f,done:false}:{done:true}}}},f}const Cr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${i.camelize(t)}Modifiers`]||e[`${i.hyphenate(t)}Modifiers`];function yl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.EMPTY_OBJ;let s=n;const l=t.startsWith("update:"),o=l&&Cr(r,t.slice(7));o&&(o.trim&&(s=n.map(d=>i.isString(d)?d.trim():d)),o.number&&(s=n.map(i.looseToNumber)));let f,u=r[f=i.toHandlerKey(t)]||r[f=i.toHandlerKey(i.camelize(t))];!u&&l&&(u=r[f=i.toHandlerKey(i.hyphenate(t))]),u&&_e(u,e,6,s);const p=r[f+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=true,_e(p,e,6,s);}}function vr(e,t,n=false){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const l=e.emits;let o={},f=false;if(!i.isFunction(e)){const u=p=>{const d=vr(p,t,true);d&&(f=true,i.extend(o,d));};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u);}return !l&&!f?(i.isObject(e)&&r.set(e,null),null):(i.isArray(l)?l.forEach(u=>o[u]=null):i.extend(o,l),i.isObject(e)&&r.set(e,o),o)}function Ft(e,t){return !e||!i.isOn(t)?false:(t=t.slice(2).replace(/Once$/,""),i.hasOwn(e,t[0].toLowerCase()+t.slice(1))||i.hasOwn(e,i.hyphenate(t))||i.hasOwn(e,t))}function Pt(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[l],slots:o,attrs:f,emit:u,render:p,renderCache:d,props:h,data:x,setupState:_,ctx:P,inheritAttrs:O}=e,L=Xe(e);let N,S;try{if(n.shapeFlag&4){const E=s||r,b=E;N=de(p.call(b,E,d,h,_,x,P)),S=f;}else {const E=t;N=de(E.length>1?E(h,{attrs:f,slots:o,emit:u}):E(h,null)),S=t.props?f:_l(f);}}catch(E){ft.length=0,Be(E,e,1),N=ee(ne);}let y=N;if(S&&O!==false){const E=Object.keys(S),{shapeFlag:b}=y;E.length&&b&7&&(l&&E.some(i.isModelListener)&&(S=bl(S,l)),y=Ee(y,S,false,true));}return n.dirs&&(y=Ee(y,null,false,true),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Ie(y,n.transition),N=y,Xe(L),N}function ml(e,t=true){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Fe(s)){if(s.type!==ne||s.children==="v-if"){if(n)return;n=s;}}else return}return n}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||i.isOn(n))&&((t||(t={}))[n]=e[n]);return t},bl=(e,t)=>{const n={};for(const r in e)(!i.isModelListener(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:s,component:l}=e,{props:o,children:f,patchFlag:u}=t,p=l.emitsOptions;if(t.dirs||t.transition)return  true;if(n&&u>=0){if(u&1024)return  true;if(u&16)return r?Ar(r,o,p):!!o;if(u&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const x=d[h];if(o[x]!==r[x]&&!Ft(p,x))return  true}}}else return (s||f)&&(!f||!f.$stable)?true:r===o?false:r?o?Ar(r,o,p):true:!!o;return  false}function Ar(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return  true;for(let s=0;s<r.length;s++){const l=r[s];if(t[l]!==e[l]&&!Ft(n,l))return  true}return  false}function kt({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const nn=e=>e.__isSuspense;let rn=0;const xl={name:"Suspense",__isSuspense:true,process(e,t,n,r,s,l,o,f,u,p){if(e==null)Ol(t,n,r,s,l,o,f,u,p);else {if(l&&l.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}El(e,t,n,r,s,o,f,u,p);}},hydrate:Cl,normalize:vl};function ct(e,t){const n=e.props&&e.props[t];i.isFunction(n)&&n();}function Ol(e,t,n,r,s,l,o,f,u){const{p,o:{createElement:d}}=u,h=d("div"),x=e.suspense=Fr(e,s,r,t,h,n,l,o,f,u);p(null,x.pendingBranch=e.ssContent,h,null,r,x,l,o),x.deps>0?(ct(e,"onPending"),ct(e,"onFallback"),p(null,e.ssFallback,t,n,r,null,l,o),Je(x,e.ssFallback)):x.resolve(false,true);}function El(e,t,n,r,s,l,o,f,{p:u,um:p,o:{createElement:d}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const x=t.ssContent,_=t.ssFallback,{activeBranch:P,pendingBranch:O,isInFallback:L,isHydrating:N}=h;if(O)h.pendingBranch=x,be(x,O)?(u(O,x,h.hiddenContainer,null,s,h,l,o,f),h.deps<=0?h.resolve():L&&(N||(u(P,_,n,r,s,null,l,o,f),Je(h,_)))):(h.pendingId=rn++,N?(h.isHydrating=false,h.activeBranch=O):p(O,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=d("div"),L?(u(null,x,h.hiddenContainer,null,s,h,l,o,f),h.deps<=0?h.resolve():(u(P,_,n,r,s,null,l,o,f),Je(h,_))):P&&be(x,P)?(u(P,x,n,r,s,h,l,o,f),h.resolve(true)):(u(null,x,h.hiddenContainer,null,s,h,l,o,f),h.deps<=0&&h.resolve()));else if(P&&be(x,P))u(P,x,n,r,s,h,l,o,f),Je(h,x);else if(ct(t,"onPending"),h.pendingBranch=x,x.shapeFlag&512?h.pendingId=x.component.suspenseId:h.pendingId=rn++,u(null,x,h.hiddenContainer,null,s,h,l,o,f),h.deps<=0)h.resolve();else {const{timeout:S,pendingId:y}=h;S>0?setTimeout(()=>{h.pendingId===y&&h.fallback(_);},S):S===0&&h.fallback(_);}}function Fr(e,t,n,r,s,l,o,f,u,p,d=false){const{p:h,m:x,um:_,n:P,o:{parentNode:O,remove:L}}=p;let N;const S=Al(e);S&&t&&t.pendingBranch&&(N=t.pendingId,t.deps++);const y=e.props?i.toNumber(e.props.timeout):void 0,E=l,b={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:rn++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:false,effects:[],resolve(M=false,j=false){const{vnode:U,activeBranch:F,pendingBranch:k,pendingId:$,effects:W,parentComponent:G,container:z}=b;let te=false;b.isHydrating?b.isHydrating=false:M||(te=F&&k.transition&&k.transition.mode==="out-in",te&&(F.transition.afterLeave=()=>{$===b.pendingId&&(x(k,z,l===E?P(F):l,0),pt(W));}),F&&(O(F.el)===z&&(l=P(F)),_(F,G,b,true)),te||x(k,z,l,0)),Je(b,k),b.pendingBranch=null,b.isInFallback=false;let V=b.parent,q=false;for(;V;){if(V.pendingBranch){V.effects.push(...W),q=true;break}V=V.parent;}!q&&!te&&pt(W),b.effects=[],S&&t&&t.pendingBranch&&N===t.pendingId&&(t.deps--,t.deps===0&&!j&&t.resolve()),ct(U,"onResolve");},fallback(M){if(!b.pendingBranch)return;const{vnode:j,activeBranch:U,parentComponent:F,container:k,namespace:$}=b;ct(j,"onFallback");const W=P(U),G=()=>{b.isInFallback&&(h(null,M,k,W,F,null,$,f,u),Je(b,M));},z=M.transition&&M.transition.mode==="out-in";z&&(U.transition.afterLeave=G),b.isInFallback=true,_(U,F,null,true),z||G();},move(M,j,U){b.activeBranch&&x(b.activeBranch,M,j,U),b.container=M;},next(){return b.activeBranch&&P(b.activeBranch)},registerDep(M,j,U){const F=!!b.pendingBranch;F&&b.deps++;const k=M.vnode.el;M.asyncDep.catch($=>{Be($,M,0);}).then($=>{if(M.isUnmounted||b.isUnmounted||b.pendingId!==M.suspenseId)return;M.asyncResolved=true;const{vnode:W}=M;an(M,$,false),k&&(W.el=k);const G=!k&&M.subTree.el;j(M,W,O(k||M.subTree.el),k?null:P(M.subTree),b,o,U),G&&L(G),kt(M,W.el),F&&--b.deps===0&&b.resolve();});},unmount(M,j){b.isUnmounted=true,b.activeBranch&&_(b.activeBranch,n,M,j),b.pendingBranch&&_(b.pendingBranch,n,M,j);}};return b}function Cl(e,t,n,r,s,l,o,f,u){const p=t.suspense=Fr(t,r,n,e.parentNode,(void 0).createElement("div"),null,s,l,o,f,true),d=u(e,p.pendingBranch=t.ssContent,n,p,l,o);return p.deps===0&&p.resolve(false,true),d}function vl(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Pr(r?n.default:n),e.ssFallback=r?Pr(n.fallback):ee(ne);}function Pr(e){let t;if(i.isFunction(e)){const n=Le&&e._c;n&&(e._d=false,ut()),e=e(),n&&(e._d=true,t=ce,Rr());}return i.isArray(e)&&(e=ml(e)),e=de(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function kr(e,t){t&&t.pendingBranch?i.isArray(e)?t.effects.push(...e):t.effects.push(e):pt(e);}function Je(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,kt(r,s));}function Al(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==false}const oe=Symbol.for("v-fgt"),Me=Symbol.for("v-txt"),ne=Symbol.for("v-cmt"),We=Symbol.for("v-stc"),ft=[];let ce=null;function ut(e=false){ft.push(ce=e?null:[]);}function Rr(){ft.pop(),ce=ft[ft.length-1]||null;}let Le=1;function sn(e,t=false){Le+=e,e<0&&ce&&t&&(ce.hasOnce=true);}function Mr(e){return e.dynamicChildren=Le>0?ce||i.EMPTY_ARR:null,Rr(),Le>0&&ce&&ce.push(e),e}function Fl(e,t,n,r,s,l){return Mr(ln(e,t,n,r,s,l,true))}function Rt(e,t,n,r,s){return Mr(ee(e,t,n,r,s,true))}function Fe(e){return e?e.__v_isVNode===true:false}function be(e,t){return e.type===t.type&&e.key===t.key}function Pl(e){}const wr=({key:e})=>e??null,Mt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?i.isString(e)||B.isRef(e)||i.isFunction(e)?{i:re,r:e,k:t,f:!!n}:e:null);function ln(e,t=null,n=null,r=0,s=null,l=e===oe?0:1,o=false,f=false){const u={__v_isVNode:true,__v_skip:true,type:e,props:t,key:t&&wr(t),ref:t&&Mt(t),scopeId:mt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:re};return f?(cn(u,n),l&128&&e.normalize(u)):n&&(u.shapeFlag|=i.isString(n)?8:16),Le>0&&!o&&ce&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&ce.push(u),u}const ee=kl;function kl(e,t=null,n=null,r=0,s=null,l=false){if((!e||e===Zn)&&(e=ne),Fe(e)){const f=Ee(e,t,true);return n&&cn(f,n),Le>0&&!l&&ce&&(f.shapeFlag&6?ce[ce.indexOf(e)]=f:ce.push(f)),f.patchFlag=-2,f}if(Ll(e)&&(e=e.__vccOpts),t){t=Nr(t);let{class:f,style:u}=t;f&&!i.isString(f)&&(t.class=i.normalizeClass(f)),i.isObject(u)&&(B.isProxy(u)&&!i.isArray(u)&&(u=i.extend({},u)),t.style=i.normalizeStyle(u));}const o=i.isString(e)?1:nn(e)?128:En(e)?64:i.isObject(e)?4:i.isFunction(e)?2:0;return ln(e,t,n,r,s,o,l,true)}function Nr(e){return e?B.isProxy(e)||fr(e)?i.extend({},e):e:null}function Ee(e,t,n=false,r=false){const{props:s,ref:l,patchFlag:o,children:f,transition:u}=e,p=t?Br(s||{},t):s,d={__v_isVNode:true,__v_skip:true,type:e.type,props:p,key:p&&wr(p),ref:t&&t.ref?n&&l?i.isArray(l)?l.concat(Mt(t)):[l,Mt(t)]:Mt(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:f,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ee(e.ssContent),ssFallback:e.ssFallback&&Ee(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Ie(d,u.clone(d)),d}function on(e=" ",t=0){return ee(Me,null,e,t)}function Rl(e,t){const n=ee(We,null,e);return n.staticCount=t,n}function Ml(e="",t=false){return t?(ut(),Rt(ne,null,e)):ee(ne,null,e)}function de(e){return e==null||typeof e=="boolean"?ee(ne):i.isArray(e)?ee(oe,null,e.slice()):Fe(e)?we(e):ee(Me,null,String(e))}function we(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ee(e)}function cn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(i.isArray(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=false),cn(e,s()),s._c&&(s._d=true));return}else {n=32;const s=t._;!s&&!fr(t)?t._ctx=re:s===3&&re&&(re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024));}else i.isFunction(t)?(t={default:t,_ctx:re},n=32):(t=String(t),r&64?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n;}function Br(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=i.normalizeClass([t.class,r.class]));else if(s==="style")t.style=i.normalizeStyle([t.style,r.style]);else if(i.isOn(s)){const l=t[s],o=r[s];o&&l!==o&&!(i.isArray(l)&&l.includes(o))&&(t[s]=l?[].concat(l,o):o);}else s!==""&&(t[s]=r[s]);}return t}function he(e,t,n,r=null){_e(e,t,7,[n,r]);}const wl=lr();let Nl=0;function Ir(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||wl,l={uid:Nl++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new B.EffectScope(true),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ar(r,s),emitsOptions:vr(r,s),emit:null,emitted:null,propsDefaults:i.EMPTY_OBJ,inheritAttrs:r.inheritAttrs,ctx:i.EMPTY_OBJ,data:i.EMPTY_OBJ,props:i.EMPTY_OBJ,attrs:i.EMPTY_OBJ,slots:i.EMPTY_OBJ,refs:i.EMPTY_OBJ,setupState:i.EMPTY_OBJ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:false,isMounted:false,isUnmounted:false,isDeactivated:false,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=yl.bind(null,l),e.ce&&e.ce(l),l}let se=null;const Ne=()=>se||re;let wt,fn;{const e=i.getGlobalThis(),t=(n,r)=>{let s;return (s=e[n])||(s=e[n]=[]),s.push(r),l=>{s.length>1?s.forEach(o=>o(l)):s[0](l);}};wt=t("__VUE_INSTANCE_SETTERS__",n=>se=n),fn=t("__VUE_SSR_SETTERS__",n=>qe=n);}const Ue=e=>{const t=se;return wt(e),e.scope.on(),()=>{e.scope.off(),wt(t);}},un=()=>{se&&se.scope.off(),wt(null);};function Sr(e){return e.vnode.shapeFlag&4}let qe=false;function Hr(e,t=false,n=false){t&&fn(t);const{props:r,children:s}=e.vnode,l=Sr(e);rl(e,r,l,t),ol(e,s,n);const o=l?Bl(e,t):void 0;return t&&fn(false),o}function Bl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qt);const{setup:r}=n;if(r){B.pauseTracking();const s=e.setupContext=r.length>1?Ur(e):null,l=Ue(e),o=De(r,e,0,[e.props,s]),f=i.isPromise(o);if(B.resetTracking(),l(),(f||e.sp)&&!Re(e)&&Dt(e),f){if(o.then(un,un),t)return o.then(u=>{an(e,u,t);}).catch(u=>{Be(u,e,0);});e.asyncDep=o;}else an(e,o,t);}else Lr(e,t);}function an(e,t,n){i.isFunction(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:i.isObject(t)&&(e.setupState=B.proxyRefs(t)),Lr(e,n);}let Nt,dn;function Il(e){Nt=e,dn=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Is));};}const Sl=()=>!Nt;function Lr(e,t,n){const r=e.type;if(!e.render){if(!t&&Nt&&!r.render){const s=r.template||Qt(e).template;if(s){const{isCustomElement:l,compilerOptions:o}=e.appContext.config,{delimiters:f,compilerOptions:u}=r,p=i.extend(i.extend({isCustomElement:l,delimiters:f},o),u);r.render=Nt(s,p);}}e.render=r.render||i.NOOP,dn&&dn(e);}{const s=Ue(e);B.pauseTracking();try{Gs(e);}finally{B.resetTracking(),s();}}}const Hl={get(e,t){return B.track(e,"get",""),e[t]}};function Ur(e){const t=n=>{e.exposed=n||{};};return {attrs:new Proxy(e.attrs,Hl),slots:e.slots,emit:e.emit,expose:t}}function at(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(B.proxyRefs(B.markRaw(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nt)return nt[n](e)},has(t,n){return n in t||n in nt}})):e.proxy}function hn(e,t=true){return i.isFunction(e)?e.displayName||e.name:e.name||t&&e.__name}function Ll(e){return i.isFunction(e)&&"__vccOpts"in e}const Vr=(e,t)=>B.computed(e,t,qe);function Ul(e,t,n){const r=arguments.length;return r===2?i.isObject(t)&&!i.isArray(t)?Fe(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fe(n)&&(n=[n]),ee(e,t,n))}function Vl(){}function Dl(e,t,n,r){const s=n[r];if(s&&Dr(s,e))return s;const l=t();return l.memo=e.slice(),l.cacheIndex=r,n[r]=l}function Dr(e,t){const n=e.memo;if(n.length!=t.length)return  false;for(let r=0;r<n.length;r++)if(i.hasChanged(n[r],t[r]))return  false;return Le>0&&ce&&ce.push(e),true}const jr="3.5.13",jl=i.NOOP,Yl=Zr,$l=void 0,Kl=i.NOOP,Jl={createComponentInstance:Ir,setupComponent:Hr,renderComponentRoot:Pt,setCurrentRenderingInstance:Xe,isVNode:Fe,normalizeVNode:de,getComponentPublicInstance:at,ensureValidVNode:Kt,pushWarningContext:qr,popWarningContext:Gr},Wl=null,ql=null,Gl=null;return r$7.EffectScope=B.EffectScope,r$7.ReactiveEffect=B.ReactiveEffect,r$7.TrackOpTypes=B.TrackOpTypes,r$7.TriggerOpTypes=B.TriggerOpTypes,r$7.customRef=B.customRef,r$7.effect=B.effect,r$7.effectScope=B.effectScope,r$7.getCurrentScope=B.getCurrentScope,r$7.getCurrentWatcher=B.getCurrentWatcher,r$7.isProxy=B.isProxy,r$7.isReactive=B.isReactive,r$7.isReadonly=B.isReadonly,r$7.isRef=B.isRef,r$7.isShallow=B.isShallow,r$7.markRaw=B.markRaw,r$7.onScopeDispose=B.onScopeDispose,r$7.onWatcherCleanup=B.onWatcherCleanup,r$7.proxyRefs=B.proxyRefs,r$7.reactive=B.reactive,r$7.readonly=B.readonly,r$7.ref=B.ref,r$7.shallowReactive=B.shallowReactive,r$7.shallowReadonly=B.shallowReadonly,r$7.shallowRef=B.shallowRef,r$7.stop=B.stop,r$7.toRaw=B.toRaw,r$7.toRef=B.toRef,r$7.toRefs=B.toRefs,r$7.toValue=B.toValue,r$7.triggerRef=B.triggerRef,r$7.unref=B.unref,r$7.camelize=i.camelize,r$7.capitalize=i.capitalize,r$7.normalizeClass=i.normalizeClass,r$7.normalizeProps=i.normalizeProps,r$7.normalizeStyle=i.normalizeStyle,r$7.toDisplayString=i.toDisplayString,r$7.toHandlerKey=i.toHandlerKey,r$7.BaseTransition=cs,r$7.BaseTransitionPropsValidators=Rn,r$7.Comment=ne,r$7.DeprecationTypes=Gl,r$7.ErrorCodes=Xr,r$7.ErrorTypeStrings=Yl,r$7.Fragment=oe,r$7.KeepAlive=Cs,r$7.Static=We,r$7.Suspense=xl,r$7.Teleport=is,r$7.Text=Me,r$7.assertNumber=Qr,r$7.callWithAsyncErrorHandling=_e,r$7.callWithErrorHandling=De,r$7.cloneVNode=Ee,r$7.compatUtils=ql,r$7.computed=Vr,r$7.createBlock=Rt,r$7.createCommentVNode=Ml,r$7.createElementBlock=Fl,r$7.createElementVNode=ln,r$7.createHydrationRenderer=ul,r$7.createPropsRestProxy=Ws,r$7.createRenderer=fl,r$7.createSlots=ws,r$7.createStaticVNode=Rl,r$7.createTextVNode=on,r$7.createVNode=ee,r$7.defineAsyncComponent=Es,r$7.defineComponent=In,r$7.defineEmits=Hs,r$7.defineExpose=Ls,r$7.defineModel=Ds,r$7.defineOptions=Us,r$7.defineProps=Ss,r$7.defineSlots=Vs,r$7.devtools=$l,r$7.getCurrentInstance=Ne,r$7.getTransitionRawChildren=Vt,r$7.guardReactiveProps=Nr,r$7.h=Ul,r$7.handleError=Be,r$7.hasInjectionContext=nl,r$7.hydrateOnIdle=ms,r$7.hydrateOnInteraction=xs,r$7.hydrateOnMediaQuery=Ts,r$7.hydrateOnVisible=bs,r$7.initCustomFormatter=Vl,r$7.inject=lt,r$7.isMemoSame=Dr,r$7.isRuntimeOnly=Sl,r$7.isVNode=Fe,r$7.mergeDefaults=Ks,r$7.mergeModels=Js,r$7.mergeProps=Br,r$7.nextTick=_n,r$7.onActivated=Ln,r$7.onBeforeMount=jn,r$7.onBeforeUnmount=Jn,r$7.onBeforeUpdate=$n,r$7.onDeactivated=Un,r$7.onErrorCaptured=Xn,r$7.onMounted=Yn,r$7.onRenderTracked=Qn,r$7.onRenderTriggered=Gn,r$7.onServerPrefetch=qn,r$7.onUnmounted=Wn,r$7.onUpdated=Kn,r$7.openBlock=ut,r$7.popScopeId=ns,r$7.provide=ir,r$7.pushScopeId=ts,r$7.queuePostFlushCb=pt,r$7.registerRuntimeCompiler=Il,r$7.renderList=Ms,r$7.renderSlot=Ns,r$7.resolveComponent=Ps,r$7.resolveDirective=Rs,r$7.resolveDynamicComponent=ks,r$7.resolveFilter=Wl,r$7.resolveTransitionHooks=xt,r$7.setBlockTracking=sn,r$7.setDevtoolsHook=Kl,r$7.setTransitionHooks=Ie,r$7.ssrContextKey=Tr,r$7.ssrUtils=Jl,r$7.toHandlers=Bs,r$7.transformVNodeArgs=Pl,r$7.useAttrs=$s,r$7.useId=fs,r$7.useModel=pl,r$7.useSSRContext=xr,r$7.useSlots=Ys,r$7.useTemplateRef=us,r$7.useTransitionState=kn,r$7.version=jr,r$7.warn=jl,r$7.watch=it,r$7.watchEffect=dl,r$7.watchPostEffect=hl,r$7.watchSyncEffect=Or,r$7.withAsyncContext=qs,r$7.withCtx=Ht,r$7.withDefaults=js,r$7.withDirectives=ss,r$7.withMemo=Dl,r$7.withScopeId=rs,r$7}

var Gt$1;function We$1(){return Gt$1?r$8:(Gt$1=1,function(h){/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/Object.defineProperty(h,"__esModule",{value:true});var p=oi(),c=at$1();const Y=t=>t,Wt="http://www.w3.org/2000/svg",Jt="http://www.w3.org/1998/Math/MathML",v=null,Z=v,Xt={insert:(t,e,n)=>{e.insertBefore(t,n||null);},remove:t=>{const e=t.parentNode;e&&e.removeChild(t);},createElement:(t,e,n,s)=>{const i=e==="svg"?v.createElementNS(Wt,t):e==="mathml"?v.createElementNS(Jt,t):n?v.createElement(t,{is:n}):v.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>v.createTextNode(t),createComment:t=>v.createComment(t),setText:(t,e)=>{t.nodeValue=e;},setElementText:(t,e)=>{t.textContent=e;},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>v.querySelector(t),setScopeId(t,e){t.setAttribute(e,"");},insertStaticContent(t,e,n,s,i,o){const r=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(true),n),!(i===o||!(i=i.nextSibling)););else {Z.innerHTML=Y(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Z.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l);}e.insertBefore(a,n);}return [r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},y="transition",O="animation",M=Symbol("_vtc"),Q={name:String,type:String,css:{type:Boolean,default:true},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},k=c.extend({},p.BaseTransitionPropsValidators,Q),Yt=(t=>(t.displayName="Transition",t.props=k,t))((t,{slots:e})=>p.h(p.BaseTransition,et(t),e)),A=(t,e=[])=>{c.isArray(t)?t.forEach(n=>n(...e)):t&&t(...e);},tt=t=>t?c.isArray(t)?t.some(e=>e.length>1):t.length>1:false;function et(t){const e={};for(const u in t)u in Q||(e[u]=t[u]);if(t.css===false)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:f=r,appearToClass:d=a,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=t,N=Zt(i),De=N&&N[0],Ie=N&&N[1],{onBeforeEnter:Bt,onEnter:Kt,onEnterCancelled:qt,onLeave:xt,onLeaveCancelled:Ve,onBeforeAppear:$e=Bt,onAppear:He=Kt,onAppearCancelled:je=qt}=e,J=(u,g,w,K)=>{u._enterCancelled=K,T(u,g?d:a),T(u,g?f:r),w&&w();},Ft=(u,g)=>{u._isLeaving=false,T(u,m),T(u,R),T(u,_),g&&g();},Ut=u=>(g,w)=>{const K=u?He:Kt,zt=()=>J(g,u,w);A(K,[g,zt]),nt(()=>{T(g,u?l:o),b(g,u?d:a),tt(K)||st(g,s,De,zt);});};return c.extend(e,{onBeforeEnter(u){A(Bt,[u]),b(u,o),b(u,r);},onBeforeAppear(u){A($e,[u]),b(u,l),b(u,f);},onEnter:Ut(false),onAppear:Ut(true),onLeave(u,g){u._isLeaving=true;const w=()=>Ft(u,g);b(u,m),u._enterCancelled?(b(u,_),x()):(x(),b(u,_)),nt(()=>{u._isLeaving&&(T(u,m),b(u,R),tt(xt)||st(u,s,Ie,w));}),A(xt,[u,w]);},onEnterCancelled(u){J(u,false,void 0,true),A(qt,[u]);},onAppearCancelled(u){J(u,true,void 0,true),A(je,[u]);},onLeaveCancelled(u){Ft(u),A(Ve,[u]);}})}function Zt(t){if(t==null)return null;if(c.isObject(t))return [q(t.enter),q(t.leave)];{const e=q(t);return [e,e]}}function q(t){return c.toNumber(t)}function b(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[M]||(t[M]=new Set)).add(e);}function T(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[M];n&&(n.delete(e),n.size||(t[M]=void 0));}function nt(t){requestAnimationFrame(()=>{requestAnimationFrame(t);});}let Qt=0;function st(t,e,n,s){const i=t._endId=++Qt,o=()=>{i===t._endId&&s();};if(n!=null)return setTimeout(o,n);const{type:r,timeout:a,propCount:l}=it(t,e);if(!r)return s();const f=r+"end";let d=0;const m=()=>{t.removeEventListener(f,_),o();},_=R=>{R.target===t&&++d>=l&&m();};setTimeout(()=>{d<l&&m();},a+1),t.addEventListener(f,_);}function it(t,e){const n=(void 0).getComputedStyle(t),s=N=>(n[N]||"").split(", "),i=s(`${y}Delay`),o=s(`${y}Duration`),r=ot(i,o),a=s(`${O}Delay`),l=s(`${O}Duration`),f=ot(a,l);let d=null,m=0,_=0;e===y?r>0&&(d=y,m=r,_=o.length):e===O?f>0&&(d=O,m=f,_=l.length):(m=Math.max(r,f),d=m>0?r>f?y:O:null,_=d?d===y?o.length:l.length:0);const R=d===y&&/\b(transform|all)(,|$)/.test(s(`${y}Property`).toString());return {type:d,timeout:m,propCount:_,hasTransform:R}}function ot(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>rt(n)+rt(t[s])))}function rt(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function x(){return (void 0).body.offsetHeight}function kt(t,e,n){const s=t[M];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e;}const I=Symbol("_vod"),ct=Symbol("_vsh"),at={beforeMount(t,{value:e},{transition:n}){t[I]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):L(t,e);},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t);},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),L(t,true),s.enter(t)):s.leave(t,()=>{L(t,false);}):L(t,e));},beforeUnmount(t,{value:e}){L(t,e);}};function L(t,e){t.style.display=e?t[I]:"none",t[ct]=!e;}function te(){at.getSSRProps=({value:t})=>{if(!t)return {style:{display:"none"}}};}const ee=Symbol("");function ne(t){}const se=/(^|;)\s*display\s*:/;function ie(t,e,n){const s=t.style,i=c.isString(n);let o=false;if(n&&!i){if(e)if(c.isString(e))for(const r of e.split(";")){const a=r.slice(0,r.indexOf(":")).trim();n[a]==null&&V(s,a,"");}else for(const r in e)n[r]==null&&V(s,r,"");for(const r in n)r==="display"&&(o=true),V(s,r,n[r]);}else if(i){if(e!==n){const r=s[ee];r&&(n+=";"+r),s.cssText=n,o=se.test(n);}}else e&&t.removeAttribute("style");I in t&&(t[I]=o?s.display:"",t[ct]&&(s.display="none"));}const lt=/\s*!important$/;function V(t,e,n){if(c.isArray(n))n.forEach(s=>V(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else {const s=oe(t,e);lt.test(n)?t.setProperty(c.hyphenate(s),n.replace(lt,""),"important"):t[s]=n;}}const ut=["Webkit","Moz","ms"],F={};function oe(t,e){const n=F[e];if(n)return n;let s=p.camelize(e);if(s!=="filter"&&s in t)return F[e]=s;s=c.capitalize(s);for(let i=0;i<ut.length;i++){const o=ut[i]+s;if(o in t)return F[e]=o}return e}const ft="http://www.w3.org/1999/xlink";function dt(t,e,n,s,i,o=c.isSpecialBooleanAttr(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ft,e.slice(6,e.length)):t.setAttributeNS(ft,e,n):n==null||o&&!c.includeBooleanAttr(n)?t.removeAttribute(e):t.setAttribute(e,o?"":c.isSymbol(n)?String(n):n);}function pt(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Y(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let r=false;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=c.includeBooleanAttr(n):n==null&&a==="string"?(n="",r=true):a==="number"&&(n=0,r=true);}try{t[e]=n;}catch{}r&&t.removeAttribute(i||e);}function C(t,e,n,s){t.addEventListener(e,n,s);}function re(t,e,n,s){t.removeEventListener(e,n,s);}const ht=Symbol("_vei");function ce(t,e,n,s,i=null){const o=t[ht]||(t[ht]={}),r=o[e];if(s&&r)r.value=s;else {const[a,l]=ae(e);if(s){const f=o[e]=fe(s,i);C(t,a,f,l);}else r&&(re(t,a,r,l),o[e]=void 0);}}const mt=/(?:Once|Passive|Capture)$/;function ae(t){let e;if(mt.test(t)){e={};let s;for(;s=t.match(mt);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=true;}return [t[2]===":"?t.slice(3):c.hyphenate(t.slice(2)),e]}let U=0;const le=Promise.resolve(),ue=()=>U||(le.then(()=>U=0),U=Date.now());function fe(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;p.callWithAsyncErrorHandling(de(s,n.value),e,5,[s]);};return n.value=t,n.attached=ue(),n}function de(t,e){if(c.isArray(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=true;},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _t=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pe=(t,e,n,s,i,o)=>{const r=i==="svg";e==="class"?kt(t,s,r):e==="style"?ie(t,n,s):c.isOn(e)?c.isModelListener(e)||ce(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),true):e[0]==="^"?(e=e.slice(1),false):he(t,e,s,r))?(pt(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dt(t,e,s,r,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!c.isString(s))?pt(t,c.camelize(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dt(t,e,s,r));};function he(t,e,n,s){if(s)return !!(e==="innerHTML"||e==="textContent"||e in t&&_t(e)&&c.isFunction(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return  false;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return  false}return _t(e)&&c.isString(n)?false:e in t}const gt={};/*! #__NO_SIDE_EFFECTS__ */function St(t,e,n){const s=p.defineComponent(t,e);c.isPlainObject(s)&&c.extend(s,e);class i extends ${constructor(r){super(s,r,n);}}return i.def=s,i}/*! #__NO_SIDE_EFFECTS__ */const me=(t,e)=>St(t,e,Vt),_e=typeof HTMLElement<"u"?HTMLElement:class{};class $ extends _e{constructor(e,n={},s=W){super(),this._def=e,this._props=n,this._createApp=s,this._isVueCE=true,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=false,this._resolved=false,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&s!==W?this._root=this.shadowRoot:e.shadowRoot!==false?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def);}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=true;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof $){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef();}):this._resolveDef());}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides);}disconnectedCallback(){this._connected=false,p.nextTick(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null);});}_resolveDef(){if(this._pendingResolve)return;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName);}),this._ob.observe(this,{attributes:true});const e=(s,i=false)=>{this._resolved=true,this._pendingResolve=void 0;const{props:o,styles:r}=s;let a;if(o&&!c.isArray(o))for(const l in o){const f=o[l];(f===Number||f&&f.type===Number)&&(l in this._props&&(this._props[l]=c.toNumber(this._props[l])),(a||(a=Object.create(null)))[c.camelize(l)]=true);}this._numberProps=a,i&&this._resolveProps(s),this.shadowRoot&&this._applyStyles(r),this._mount(s);},n=this._def.__asyncLoader;n?this._pendingResolve=n().then(s=>e(this._def=s,true)):e(this._def);}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const s in n)c.hasOwn(this,s)||Object.defineProperty(this,s,{get:()=>p.unref(n[s])});}_resolveProps(e){const{props:n}=e,s=c.isArray(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&s.includes(i)&&this._setProp(i,this[i]);for(const i of s.map(c.camelize))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(o){this._setProp(i,o,true,true);}});}_setAttr(e){if(e.startsWith("data-v-"))return;const n=this.hasAttribute(e);let s=n?this.getAttribute(e):gt;const i=c.camelize(e);n&&this._numberProps&&this._numberProps[i]&&(s=c.toNumber(s)),this._setProp(i,s,false,true);}_getProp(e){return this._props[e]}_setProp(e,n,s=true,i=false){if(n!==this._props[e]&&(n===gt?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),i&&this._instance&&this._update(),s)){const o=this._ob;o&&o.disconnect(),n===true?this.setAttribute(c.hyphenate(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(c.hyphenate(e),n+""):n||this.removeAttribute(c.hyphenate(e)),o&&o.observe(this,{attributes:true});}}_update(){It(this._createVNode(),this._root);}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const n=p.createVNode(this._def,c.extend(e,this._props));return this._instance||(n.ce=s=>{this._instance=s,s.ce=this,s.isCE=true;const i=(o,r)=>{this.dispatchEvent(new CustomEvent(o,c.isPlainObject(r[0])?c.extend({detail:r},r[0]):{detail:r}));};s.emit=(o,...r)=>{i(o,r),c.hyphenate(o)!==o&&i(c.hyphenate(o),r);},this._setParent();}),n}_applyStyles(e,n){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n);}const s=this._nonce;for(let i=e.length-1;i>=0;i--){const o=(void 0).createElement("style");s&&o.setAttribute("nonce",s),o.textContent=e[i],this.shadowRoot.prepend(o);}}_parseSlots(){const e=this._slots={};let n;for(;n=this.firstChild;){const s=n.nodeType===1&&n.getAttribute("slot")||"default";(e[s]||(e[s]=[])).push(n),this.removeChild(n);}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),n=this._instance.type.__scopeId;for(let s=0;s<e.length;s++){const i=e[s],o=i.getAttribute("name")||"default",r=this._slots[o],a=i.parentNode;if(r)for(const l of r){if(n&&l.nodeType===1){const f=n+"-s",d=(void 0).createTreeWalker(l,1);l.setAttribute(f,"");let m;for(;m=d.nextNode();)m.setAttribute(f,"");}a.insertBefore(l,i);}else for(;i.firstChild;)a.insertBefore(i.firstChild,i);a.removeChild(i);}}_injectChildStyle(e){this._applyStyles(e.styles,e);}_removeChildStyle(e){}}function bt(t){const e=p.getCurrentInstance(),n=e&&e.ce;return n||null}function ge(){const t=bt();return t&&t.shadowRoot}function Se(t="$style"){{const e=p.getCurrentInstance();if(!e)return c.EMPTY_OBJ;const n=e.type.__cssModules;if(!n)return c.EMPTY_OBJ;const s=n[t];return s||c.EMPTY_OBJ}}const Ct=new WeakMap,vt=new WeakMap,H=Symbol("_moveCb"),yt=Symbol("_enterCb"),be=(t=>(delete t.props.mode,t))({name:"TransitionGroup",props:c.extend({},k,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=p.getCurrentInstance(),s=p.useTransitionState();let i,o;return p.onUpdated(()=>{if(!i.length)return;const r=t.moveClass||`${t.name||"v"}-move`;if(!Te(i[0].el,n.vnode.el,r))return;i.forEach(Ce),i.forEach(ve);const a=i.filter(ye);x(),a.forEach(l=>{const f=l.el,d=f.style;b(f,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=f[H]=_=>{_&&_.target!==f||(!_||/transform$/.test(_.propertyName))&&(f.removeEventListener("transitionend",m),f[H]=null,T(f,r));};f.addEventListener("transitionend",m);});}),()=>{const r=p.toRaw(t),a=et(r);let l=r.tag||p.Fragment;if(i=[],o)for(let f=0;f<o.length;f++){const d=o[f];d.el&&d.el instanceof Element&&(i.push(d),p.setTransitionHooks(d,p.resolveTransitionHooks(d,a,s,n)),Ct.set(d,d.el.getBoundingClientRect()));}o=e.default?p.getTransitionRawChildren(e.default()):[];for(let f=0;f<o.length;f++){const d=o[f];d.key!=null&&p.setTransitionHooks(d,p.resolveTransitionHooks(d,a,s,n));}return p.createVNode(l,null,o)}}});function Ce(t){const e=t.el;e[H]&&e[H](),e[yt]&&e[yt]();}function ve(t){vt.set(t,t.el.getBoundingClientRect());}function ye(t){const e=Ct.get(t),n=vt.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${i}px)`,o.transitionDuration="0s",t}}function Te(t,e,n){const s=t.cloneNode(),i=t[M];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l));}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(s);const{hasTransform:r}=it(s);return o.removeChild(s),r}const E=t=>{const e=t.props["onUpdate:modelValue"]||false;return c.isArray(e)?n=>c.invokeArrayFns(e,n):e};function Ee(t){t.target.composing=true;}function Tt(t){const e=t.target;e.composing&&(e.composing=false,e.dispatchEvent(new Event("input")));}const S=Symbol("_assign"),j={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[S]=E(i);const o=s||i.props&&i.props.type==="number";C(t,e?"change":"input",r=>{if(r.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=c.looseToNumber(a)),t[S](a);}),n&&C(t,"change",()=>{t.value=t.value.trim();}),e||(C(t,"compositionstart",Ee),C(t,"compositionend",Tt),C(t,"change",Tt));},mounted(t,{value:e}){t.value=e??"";},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:o}},r){if(t[S]=E(r),t.composing)return;const a=(o||t.type==="number")&&!/^0\d/.test(t.value)?c.looseToNumber(t.value):t.value,l=e??"";a!==l&&((void 0).activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l));}},z={deep:true,created(t,e,n){t[S]=E(n),C(t,"change",()=>{const s=t._modelValue,i=P(t),o=t.checked,r=t[S];if(c.isArray(s)){const a=c.looseIndexOf(s,i),l=a!==-1;if(o&&!l)r(s.concat(i));else if(!o&&l){const f=[...s];f.splice(a,1),r(f);}}else if(c.isSet(s)){const a=new Set(s);o?a.add(i):a.delete(i),r(a);}else r(Mt(t,o));});},mounted:Et,beforeUpdate(t,e,n){t[S]=E(n),Et(t,e,n);}};function Et(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(c.isArray(e))i=c.looseIndexOf(e,s.props.value)>-1;else if(c.isSet(e))i=e.has(s.props.value);else {if(e===n)return;i=c.looseEqual(e,Mt(t,true));}t.checked!==i&&(t.checked=i);}const G={created(t,{value:e},n){t.checked=c.looseEqual(e,n.props.value),t[S]=E(n),C(t,"change",()=>{t[S](P(t));});},beforeUpdate(t,{value:e,oldValue:n},s){t[S]=E(s),e!==n&&(t.checked=c.looseEqual(e,s.props.value));}},At={deep:true,created(t,{value:e,modifiers:{number:n}},s){const i=c.isSet(e);C(t,"change",()=>{const o=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>n?c.looseToNumber(P(r)):P(r));t[S](t.multiple?i?new Set(o):o:o[0]),t._assigning=true,p.nextTick(()=>{t._assigning=false;});}),t[S]=E(s);},mounted(t,{value:e}){wt(t,e);},beforeUpdate(t,e,n){t[S]=E(n);},updated(t,{value:e}){t._assigning||wt(t,e);}};function wt(t,e){const n=t.multiple,s=c.isArray(e);if(!(n&&!s&&!c.isSet(e))){for(let i=0,o=t.options.length;i<o;i++){const r=t.options[i],a=P(r);if(n)if(s){const l=typeof a;l==="string"||l==="number"?r.selected=e.some(f=>String(f)===String(a)):r.selected=c.looseIndexOf(e,a)>-1;}else r.selected=e.has(a);else if(c.looseEqual(P(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1);}}function P(t){return "_value"in t?t._value:t.value}function Mt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pt={created(t,e,n){B(t,e,n,null,"created");},mounted(t,e,n){B(t,e,n,null,"mounted");},beforeUpdate(t,e,n,s){B(t,e,n,s,"beforeUpdate");},updated(t,e,n,s){B(t,e,n,s,"updated");}};function Rt(t,e){switch(t){case "SELECT":return At;case "TEXTAREA":return j;default:switch(e){case "checkbox":return z;case "radio":return G;default:return j}}}function B(t,e,n,s,i){const r=Rt(t.tagName,n.props&&n.props.type)[i];r&&r(t,e,n,s);}function Ae(){j.getSSRProps=({value:t})=>({value:t}),G.getSSRProps=({value:t},e)=>{if(e.props&&c.looseEqual(e.props.value,t))return {checked:true}},z.getSSRProps=({value:t},e)=>{if(c.isArray(t)){if(e.props&&c.looseIndexOf(t,e.props.value)>-1)return {checked:true}}else if(c.isSet(t)){if(e.props&&t.has(e.props.value))return {checked:true}}else if(t)return {checked:true}},Pt.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Rt(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)};}const we=["ctrl","shift","alt","meta"],Me={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>we.some(n=>t[`${n}Key`]&&!e.includes(n))},Pe=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...o)=>{for(let r=0;r<e.length;r++){const a=Me[e[r]];if(a&&a(i,e))return}return t(i,...o)})},Re={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ne=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const o=c.hyphenate(i.key);if(e.some(r=>r===o||Re[r]===o))return t(i)})},Nt=c.extend({patchProp:pe},Xt);let D,Ot=false;function Lt(){return D||(D=p.createRenderer(Nt))}function Dt(){return D=Ot?D:p.createHydrationRenderer(Nt),Ot=true,D}const It=(...t)=>{Lt().render(...t);},Oe=(...t)=>{Dt().hydrate(...t);},W=(...t)=>{const e=Lt().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ht(s);if(!i)return;const o=e._component;!c.isFunction(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,false,$t(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e},Vt=(...t)=>{const e=Dt().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ht(s);if(i)return n(i,true,$t(i))},e};function $t(t){if(t instanceof SVGElement)return "svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return "mathml"}function Ht(t){return c.isString(t)?(void 0).querySelector(t):t}let jt=false;const Le=()=>{jt||(jt=true,Ae(),te());};h.Transition=Yt,h.TransitionGroup=be,h.VueElement=$,h.createApp=W,h.createSSRApp=Vt,h.defineCustomElement=St,h.defineSSRCustomElement=me,h.hydrate=Oe,h.initDirectivesForSSR=Le,h.render=It,h.useCssModule=Se,h.useCssVars=ne,h.useHost=bt,h.useShadowRoot=ge,h.vModelCheckbox=z,h.vModelDynamic=Pt,h.vModelRadio=G,h.vModelSelect=At,h.vModelText=j,h.vShow=at,h.withKeys=Ne,h.withModifiers=Pe,Object.keys(p).forEach(function(t){t!=="default"&&!Object.prototype.hasOwnProperty.call(h,t)&&(h[t]=p[t]);});}(r$8),r$8)}

var d$4;function E$2(){return d$4?r$b:(d$4=1,function(i){/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/Object.defineProperty(i,"__esModule",{value:true});var l=Ee(),c=We$1(),o=at$1();function p(e){var r=Object.create(null);if(e)for(var n in e)r[n]=e[n];return r.default=e,Object.freeze(r)}var j=p(c);const _=Object.create(null);function f(e,r){if(!o.isString(e))if(e.nodeType)e=e.innerHTML;else return o.NOOP;const n=o.genCacheKey(e,r),m=_[n];if(m)return m;if(e[0]==="#"){const t=(void 0).querySelector(e);e=t?t.innerHTML:"";}const u=o.extend({hoistStatic:true,onError:void 0,onWarn:o.NOOP},r);!u.isCustomElement&&typeof customElements<"u"&&(u.isCustomElement=t=>!!customElements.get(t));const{code:v}=l.compile(e,u),a=new Function("Vue",v)(j);return a._rc=true,_[n]=a}c.registerRuntimeCompiler(f),i.compile=f,Object.keys(c).forEach(function(e){e!=="default"&&!Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=c[e]);});}(r$b),r$b)}

var e$4;function _$6(){return e$4?e$7.exports:(e$4=1,e$7.exports=E$2(),e$7.exports)}

var o$e=_$6();

const n$2=false,t$9={componentName:"NuxtLink"},a$8="nuxt-app";

function v(e=a$8){return getContext(e,{asyncContext:false})}const g$2="__nuxt_plugin";function R(e){let n=0;const t={_id:e.id||a$8||"nuxt-app",_scope:o$e.effectScope(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return "3.16.2"},get vue(){return t.vueApp.version}},payload:o$e.shallowReactive({...e.ssrContext?.payload||{},data:o$e.shallowReactive({}),state:o$e.reactive({}),once:new Set,_errors:o$e.shallowReactive({})}),static:{data:{}},runWithContext(s){return t._scope.active&&!o$e.getCurrentScope()?t._scope.run(()=>x$1(t,s)):x$1(t,s)},isHydrating:false,deferHydration(){if(!t.isHydrating)return ()=>{};n++;let s=false;return ()=>{if(!s&&(s=true,n--,n===0))return t.isHydrating=false,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:o$e.shallowReactive({}),_payloadRevivers:{},...e};t.payload.serverRendered=true,t.ssrContext&&(t.payload.path=t.ssrContext.url,t.ssrContext.nuxt=t,t.ssrContext.payload=t.payload,t.ssrContext.config={public:t.ssrContext.runtimeConfig.public,app:t.ssrContext.runtimeConfig.app}),t.hooks=createHooks(),t.hook=t.hooks.hook;{const s=async function(r,a){for(const f of r)await t.runWithContext(()=>f(...a));};t.hooks.callHook=(r,...a)=>t.hooks.callHookWith(s,r,...a);}t.callHook=t.hooks.callHook,t.provide=(s,r)=>{const a="$"+s;p$4(t,a,r),p$4(t.vueApp.config.globalProperties,a,r);},p$4(t.vueApp,"$nuxt",t),p$4(t.vueApp.config.globalProperties,"$nuxt",t);const i=e.ssrContext.runtimeConfig;return t.provide("config",i),t}function k$3(e,n){n.hooks&&e.hooks.addHooks(n.hooks);}async function _$5(e,n){if(typeof n=="function"){const{provide:t}=await e.runWithContext(()=>n(e))||{};if(t&&typeof t=="object")for(const i in t)e.provide(i,t[i]);}}async function I(e,n){const t=[],i=[],s=[],r=[];let a=0;async function f(o){const d=o.dependsOn?.filter(u=>n.some(l=>l._name===u)&&!t.includes(u))??[];if(d.length>0)i.push([new Set(d),o]);else {const u=_$5(e,o).then(async()=>{o._name&&(t.push(o._name),await Promise.all(i.map(async([l,C])=>{l.has(o._name)&&(l.delete(o._name),l.size===0&&(a++,await f(C)));})));});o.parallel?s.push(u.catch(l=>r.push(l))):await u;}}for(const o of n)e.ssrContext?.islandContext&&o.env?.islands===false||k$3(e,o);for(const o of n)e.ssrContext?.islandContext&&o.env?.islands===false||await f(o);if(await Promise.all(s),a)for(let o=0;o<a;o++)await Promise.all(s);if(r.length)throw r[0]}function W$2(e){if(typeof e=="function")return e;const n=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[g$2]:true,_name:n})}function x$1(e,n,t){const i=()=>n(),s=v(e._id);return e.vueApp.runWithContext(()=>s.callAsync(e,i))}function w$1(e){let n;return o$e.hasInjectionContext()&&(n=o$e.getCurrentInstance()?.appContext.app.$nuxt),n||=v(e).tryUse(),n||null}function P(e){const n=w$1(e);if(!n)throw new Error("[nuxt] instance unavailable");return n}function $(e){return P().$config}function p$4(e,n,t){Object.defineProperty(e,n,{get:()=>t});}

const e$3="__nuxt_error",a$7=()=>o$e.toRef(P().payload,"error"),l$3=r=>{const t=u$2(r);try{const p=P(),s=a$7();s.value||=t;}catch{throw t}return t},x=r=>!!r&&typeof r=="object"&&e$3 in r,u$2=r=>{const t=createError(r);return Object.defineProperty(t,e$3,{value:true,configurable:false,writable:false}),t};

const t$8=W$2({name:"nuxt:head",enforce:"pre",setup(e){const a=e.ssrContext.head;e.vueApp.use(a);}});

function o$d(r){return Array.isArray(r)?r:[r]}

async function a$6(t){const e=typeof t=="string"?t:t.path;{P().ssrContext._preloadManifest=true;const o=toRouteMatcher(createRouter({routes:$().nitro.routeRules}));return defu({},...o.matchAll(e).reverse())}}

const o$c=Symbol("route");

const d$3=()=>P()?.$router,T$2=()=>o$e.hasInjectionContext()?o$e.inject(o$c,P()._route):P()._route;function N(e){return e}const C$1=()=>{try{if(P()._processingMiddleware)return !0}catch{return  false}return  false},E$1=/"/g,O$1=(e,r)=>{e||="/";const t=typeof e=="string"?e:"path"in e?L$1(e):d$3().resolve(e).href,u=hasProtocol(t,{acceptRelative:true}),n=r?.external||u;if(n){if(!r?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:o}=new URL(t,"http://localhost");if(o&&isScriptProtocol(o))throw new Error(`Cannot navigate to a URL with '${o}' protocol.`)}const c=C$1(),i=d$3(),a=P();if(a.ssrContext){const o=typeof e=="string"||n?t:i.resolve(e).fullPath||"/",f=n?t:joinURL($().app.baseURL,o),h=async function(l){await a.callHook("app:redirected");const m=f.replace(E$1,"%22"),R=_$4(f,u);return a.ssrContext._renderResponse={statusCode:sanitizeStatusCode(r?.redirectCode||302,302),body:`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${m}"></head></html>`,headers:{location:R}},l};return !n&&c?(i.afterEach(l=>l.fullPath===o?h(false):void 0),e):h(c?false:void 0)}return n?(a._scope.stop(),r?.replace?(void 0).replace(t):(void 0).href=t,c?a.isHydrating?new Promise(()=>{}):false:Promise.resolve()):r?.replace?i.replace(e):i.push(e)};function L$1(e){return withQuery(e.path||"",e.query||{})+(e.hash||"")}function _$4(e,r=false){const t=new URL(e,"http://localhost");return r?e.startsWith("//")?t.toString().replace(t.protocol,""):t.toString():t.pathname+t.search+t.hash}

const t$7={layout:"default"};

function n$1(e,o){}const r$5=[{name:"index",path:"/",meta:t$7||{},component:()=>import('./index.vue.mjs')}];

function Me(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ye(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Me(e.default)}const k$2=Object.assign;function re(e,t){const n={};for(const r in t){const s=t[r];n[r]=T$1(s)?s.map(e):e(s);}return n}const W$1=()=>{},T$1=Array.isArray;const je=/#/g,Ze=/&/g,Xe=/\//g,et=/=/g,tt=/\?/g,Ge=/\+/g,nt=/%5B/g,rt=/%5D/g,He=/%5E/g,ot=/%60/g,Ue=/%7B/g,st=/%7C/g,qe$1=/%7D/g,it=/%20/g;function he(e){return encodeURI(""+e).replace(st,"|").replace(nt,"[").replace(rt,"]")}function at(e){return he(e).replace(Ue,"{").replace(qe$1,"}").replace(He,"^")}function ae$1(e){return he(e).replace(Ge,"%2B").replace(it,"+").replace(je,"%23").replace(Ze,"%26").replace(ot,"`").replace(Ue,"{").replace(qe$1,"}").replace(He,"^")}function ct(e){return ae$1(e).replace(et,"%3D")}function ut(e){return he(e).replace(je,"%23").replace(tt,"%3F")}function lt(e){return e==null?"":ut(e).replace(Xe,"%2F")}function Q$1(e){try{return decodeURIComponent(""+e)}catch{}return ""+e}const ft=/\/$/,ht=e=>e.replace(ft,"");function oe$1(e,t,n="/"){let r,s={},h="",l="";const d=t.indexOf("#");let a=t.indexOf("?");return d<a&&d>=0&&(a=-1),a>-1&&(r=t.slice(0,a),h=t.slice(a+1,d>-1?d:t.length),s=e(h)),d>-1&&(r=r||t.slice(0,d),l=t.slice(d,t.length)),r=mt(r??t,n),{fullPath:r+(h&&"?")+h+l,path:r,query:s,hash:Q$1(l)}}function pt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function we(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z$1(t.matched[r],n.matched[s])&&ze$1(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z$1(e,t){return (e.aliasOf||e)===(t.aliasOf||t)}function ze$1(e,t){if(Object.keys(e).length!==Object.keys(t).length)return  false;for(const n in e)if(!dt(e[n],t[n]))return  false;return  true}function dt(e,t){return T$1(e)?be(e,t):T$1(t)?be(t,e):e===t}function be(e,t){return T$1(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function mt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let h=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],d!==".")if(d==="..")h>1&&h--;else break;return n.slice(0,h).join("/")+"/"+r.slice(l).join("/")}const U$1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var F$1;(function(e){e.pop="pop",e.push="push";})(F$1||(F$1={}));var Z$1;(function(e){e.back="back",e.forward="forward",e.unknown="";})(Z$1||(Z$1={}));const se$1="";function gt(e){return e||(e="/"),e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ht(e)}const vt=/^[^#]+#/;function Et(e,t){return e.replace(vt,"#")+t}function Xt(e=""){let t=[],n=[se$1],r=0;e=gt(e);function s(d){r++,r!==n.length&&n.splice(r),n.push(d);}function h(d,a,{direction:f,delta:u}){const i={direction:f,delta:u,type:F$1.pop};for(const p of t)p(d,a,i);}const l={location:se$1,state:{},base:e,createHref:Et.bind(null,e),replace(d){n.splice(r--,1),s(d);},push(d,a){s(d);},listen(d){return t.push(d),()=>{const a=t.indexOf(d);a>-1&&t.splice(a,1);}},destroy(){t=[],n=[se$1],r=0;},go(d,a=true){const f=this.location,u=d<0?Z$1.back:Z$1.forward;r=Math.max(0,Math.min(r+d,n.length-1)),a&&h(this.location,f,{direction:u,delta:d});}};return Object.defineProperty(l,"location",{enumerable:true,get:()=>n[r]}),l}function pe(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const ce$1=Symbol("");var _e;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated";})(_e||(_e={}));function K(e,t){return k$2(new Error,{type:e,[ce$1]:true},t)}function M(e,t){return e instanceof Error&&ce$1 in e&&(t==null||!!(e.type&t))}const Pe="[^/]+?",wt={sensitive:false,strict:false,start:true,end:true},bt=/[.+*?^${}()[\]/\\]/g;function _t(e,t){const n=k$2({},wt,t),r=[];let s=n.start?"^":"";const h=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let i=0;i<f.length;i++){const p=f[i];let c=40+(n.sensitive?.25:0);if(p.type===0)i||(s+="/"),s+=p.value.replace(bt,"\\$&"),c+=40;else if(p.type===1){const{value:P,repeatable:N,optional:S,regexp:$}=p;h.push({name:P,repeatable:N,optional:S});const y=$||Pe;if(y!==Pe){c+=10;try{new RegExp(`(${y})`);}catch(V){throw new Error(`Invalid custom RegExp for param "${P}" (${y}): `+V.message)}}let b=N?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;i||(b=S&&f.length<2?`(?:/${b})`:"/"+b),S&&(b+="?"),s+=b,c+=20,S&&(c+=-8),N&&(c+=-20),y===".*"&&(c+=-50);}u.push(c);}r.push(u);}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001;}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const l=new RegExp(s,n.sensitive?"":"i");function d(f){const u=f.match(l),i={};if(!u)return null;for(let p=1;p<u.length;p++){const c=u[p]||"",P=h[p-1];i[P.name]=c&&P.repeatable?c.split("/"):c;}return i}function a(f){let u="",i=false;for(const p of e){(!i||!u.endsWith("/"))&&(u+="/"),i=false;for(const c of p)if(c.type===0)u+=c.value;else if(c.type===1){const{value:P,repeatable:N,optional:S}=c,$=P in f?f[P]:"";if(T$1($)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const y=T$1($)?$.join("/"):$;if(!y)if(S)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):i=true);else throw new Error(`Missing required param "${P}"`);u+=y;}}return u||"/"}return {re:l,score:r,keys:h,parse:d,stringify:a}}function Pt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++;}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Be(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const h=Pt(r[n],s[n]);if(h)return h;n++;}if(Math.abs(s.length-r.length)===1){if(Oe(r))return 1;if(Oe(s))return  -1}return s.length-r.length}function Oe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ot={type:0,value:""},kt=/[a-zA-Z0-9_]/;function $t(e){if(!e)return [[]];if(e==="/")return [[Ot]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(c){throw new Error(`ERR (${n})/"${f}": ${c}`)}let n=0,r=n;const s=[];let h;function l(){h&&s.push(h),h=[];}let d=0,a,f="",u="";function i(){f&&(n===0?h.push({type:0,value:f}):n===1||n===2||n===3?(h.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),h.push({type:1,value:f,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="");}function p(){f+=a;}for(;d<e.length;){if(a=e[d++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&i(),l()):a===":"?(i(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:kt.test(a)?p():(i(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&d--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:i(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&d--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),i(),l(),s}function At(e,t,n){const r=_t($t(e.path),n);const s=k$2(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function St(e,t){const n=[],r=new Map;t=Se({strict:false,end:true,sensitive:false},t);function s(i){return r.get(i)}function h(i,p,c){const P=!c,N=$e(i);N.aliasOf=c&&c.record;const S=Se(t,i),$=[N];if("alias"in i){const V=typeof i.alias=="string"?[i.alias]:i.alias;for(const I of V)$.push($e(k$2({},N,{components:c?c.record.components:N.components,path:I,aliasOf:c?c.record:N})));}let y,b;for(const V of $){const{path:I}=V;if(p&&I[0]!=="/"){const j=p.record.path,x=j[j.length-1]==="/"?"":"/";V.path=p.record.path+(I&&x+I);}if(y=At(V,p,S),c?(c.alias.push(y),"production"!=="production"):(b=b||y,b!==y&&b.alias.push(y),P&&i.name&&!Ae(y)&&(l(i.name))),Le(y)&&a(y),N.children){const j=N.children;for(let x=0;x<j.length;x++)h(j[x],y,c&&c.children[x]);}c=c||y;}return b?()=>{l(b);}:W$1}function l(i){if(Ke(i)){const p=r.get(i);p&&(r.delete(i),n.splice(n.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l));}else {const p=n.indexOf(i);p>-1&&(n.splice(p,1),i.record.name&&r.delete(i.record.name),i.children.forEach(l),i.alias.forEach(l));}}function d(){return n}function a(i){const p=Mt(i,n);n.splice(p,0,i),i.record.name&&!Ae(i)&&r.set(i.record.name,i);}function f(i,p){let c,P={},N,S;if("name"in i&&i.name){if(c=r.get(i.name),!c)throw K(1,{location:i});S=c.record.name,P=k$2(ke(p.params,c.keys.filter(b=>!b.optional).concat(c.parent?c.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),i.params&&ke(i.params,c.keys.map(b=>b.name))),N=c.stringify(P);}else if(i.path!=null)N=i.path,c=n.find(b=>b.re.test(N)),c&&(P=c.parse(N),S=c.record.name);else {if(c=p.name?r.get(p.name):n.find(b=>b.re.test(p.path)),!c)throw K(1,{location:i,currentLocation:p});S=c.record.name,P=k$2({},p.params,i.params),N=c.stringify(P);}const $=[];let y=c;for(;y;)$.unshift(y.record),y=y.parent;return {name:S,path:N,params:P,matched:$,meta:Dt($)}}e.forEach(i=>h(i));function u(){n.length=0,r.clear();}return {addRoute:h,resolve:f,removeRoute:l,clearRoutes:u,getRoutes:d,getRecordMatcher:s}}function ke(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function $e(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ct(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ct(e){const t={},n=e.props||false;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ae(e){for(;e;){if(e.record.aliasOf)return  true;e=e.parent;}return  false}function Dt(e){return e.reduce((t,n)=>k$2(t,n.meta),{})}function Se(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Mt(e,t){let n=0,r=t.length;for(;n!==r;){const h=n+r>>1;Be(e,t[h])<0?r=h:n=h+1;}const s=jt(e);return s&&(r=t.lastIndexOf(s,r-1),"production"!=="production"),r}function jt(e){let t=e;for(;t=t.parent;)if(Le(t)&&Be(e,t)===0)return t}function Le({record:e}){return !!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Gt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const h=r[s].replace(Ge," "),l=h.indexOf("="),d=Q$1(l<0?h:h.slice(0,l)),a=l<0?null:Q$1(h.slice(l+1));if(d in t){let f=t[d];T$1(f)||(f=t[d]=[f]),f.push(a);}else t[d]=a;}return t}function Ce(e){let t="";for(let n in e){const r=e[n];if(n=ct(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(T$1(r)?r.map(h=>h&&ae$1(h)):[r&&ae$1(r)]).forEach(h=>{h!==void 0&&(t+=(t.length?"&":"")+n,h!=null&&(t+="="+h));});}return t}function Ht(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=T$1(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r);}return t}const Ut=Symbol(""),De=Symbol(""),de=Symbol(""),We=Symbol(""),le=Symbol("");function L(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1);}}function n(){e=[];}return {add:t,list:()=>e.slice(),reset:n}}function G(e,t,n,r,s,h=l=>l()){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return ()=>new Promise((d,a)=>{const f=p=>{p===false?a(K(4,{from:n,to:t})):p instanceof Error?a(p):pe(p)?a(K(2,{from:t,to:p})):(l&&r.enterCallbacks[s]===l&&typeof p=="function"&&l.push(p),d());},u=h(()=>e.call(r&&r.instances[s],t,n,f));let i=Promise.resolve(u);if(e.length<3&&(i=i.then(f)),"production"!=="production");i.catch(p=>a(p));})}function ie$1(e,t,n,r,s=h=>h()){const h=[];for(const l of e){for(const d in l.components){let a=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Me(a)){const u=(a.__vccOpts||a)[t];u&&h.push(G(u,n,r,l,d,s));}else {let f=a();h.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${d}" at "${l.path}"`);const i=Ye(u)?u.default:u;l.mods[d]=u,l.components[d]=i;const c=(i.__vccOpts||i)[t];return c&&G(c,n,r,l,d,s)()}));}}}return h}function Ve(e){const t=o$e.inject(de),n=o$e.inject(We);const h=o$e.computed(()=>{const u=o$e.unref(e.to);return t.resolve(u)}),l=o$e.computed(()=>{const{matched:u}=h.value,{length:i}=u,p=u[i-1],c=n.matched;if(!p||!c.length)return  -1;const P=c.findIndex(z$1.bind(null,p));if(P>-1)return P;const N=xe(u[i-2]);return i>1&&xe(p)===N&&c[c.length-1].path!==N?c.findIndex(z$1.bind(null,u[i-2])):P}),d=o$e.computed(()=>l.value>-1&&Wt(n.params,h.value.params)),a=o$e.computed(()=>l.value>-1&&l.value===n.matched.length-1&&ze$1(n.params,h.value.params));function f(u={}){if(Lt(u)){const i=t[o$e.unref(e.replace)?"replace":"push"](o$e.unref(e.to)).catch(W$1);return e.viewTransition,i}return Promise.resolve()}return {route:h,href:o$e.computed(()=>h.value.href),isActive:d,isExactActive:a,navigate:f}}function zt(e){return e.length===1?e[0]:e}const Kt=o$e.defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:true},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ve,setup(e,{slots:t}){const n=o$e.reactive(Ve(e)),{options:r}=o$e.inject(de),s=o$e.computed(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return ()=>{const h=t.default&&zt(t.default(n));return e.custom?h:o$e.h("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},h)}}}),Bt=Kt;function Lt(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),true}}function Wt(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return  false}else if(!T$1(s)||s.length!==r.length||r.some((h,l)=>h!==s[l]))return  false}return  true}function xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e??t??n,Qt=o$e.defineComponent({name:"RouterView",inheritAttrs:false,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=o$e.inject(le),s=o$e.computed(()=>e.route||r.value),h=o$e.inject(De,0),l=o$e.computed(()=>{let f=o$e.unref(h);const{matched:u}=s.value;let i;for(;(i=u[f])&&!i.components;)f++;return f}),d=o$e.computed(()=>s.value.matched[l.value]);o$e.provide(De,o$e.computed(()=>l.value+1)),o$e.provide(Ut,d),o$e.provide(le,s);const a=o$e.ref();return o$e.watch(()=>[a.value,d.value,e.name],([f,u,i],[p,c,P])=>{u&&(u.instances[i]=f,c&&c!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=c.leaveGuards),u.updateGuards.size||(u.updateGuards=c.updateGuards))),f&&u&&(!c||!z$1(u,c)||!p)&&(u.enterCallbacks[i]||[]).forEach(N=>N(f));},{flush:"post"}),()=>{const f=s.value,u=e.name,i=d.value,p=i&&i.components[u];if(!p)return Ie(n.default,{Component:p,route:f});const c=i.props[u],P=c?c===true?f.params:typeof c=="function"?c(f):c:null,N=$=>{$.component.isUnmounted&&(i.instances[u]=null);},S=o$e.h(p,k$2({},P,t,{onVnodeUnmounted:N,ref:a}));return Ie(n.default,{Component:S,route:f})||S}}});function Ie(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ft=Qt;function en(e){const t=St(e.routes,e),n=e.parseQuery||Gt,r=e.stringifyQuery||Ce,s=e.history;const h=L(),l=L(),d=L(),a=o$e.shallowRef(U$1);let f=U$1;const u=re.bind(null,o=>""+o),i=re.bind(null,lt),p=re.bind(null,Q$1);function c(o,g){let m,v;return Ke(o)?(m=t.getRecordMatcher(o),v=g):v=o,t.addRoute(v,m)}function P(o){const g=t.getRecordMatcher(o);g?t.removeRoute(g):"production"!=="production";}function N(){return t.getRoutes().map(o=>o.record)}function S(o){return !!t.getRecordMatcher(o)}function $(o,g){if(g=k$2({},g||a.value),typeof o=="string"){const E=oe$1(n,o,g.path),A=t.resolve({path:E.path},g),H=s.createHref(E.fullPath);return k$2(E,A,{params:p(A.params),hash:Q$1(E.hash),redirectedFrom:void 0,href:H})}let m;if(o.path!=null)m=k$2({},o,{path:oe$1(n,o.path,g.path).path});else {const E=k$2({},o.params);for(const A in E)E[A]==null&&delete E[A];m=k$2({},o,{params:i(E)}),g.params=i(g.params);}const v=t.resolve(m,g),O=o.hash||"";v.params=u(p(v.params));const C=pt(r,k$2({},o,{hash:at(O),path:v.path})),_=s.createHref(C);return k$2({fullPath:C,hash:O,query:r===Ce?Ht(o.query):o.query||{}},v,{redirectedFrom:void 0,href:_})}function y(o){return typeof o=="string"?oe$1(n,o,a.value.path):k$2({},o)}function b(o,g){if(f!==o)return K(8,{from:g,to:o})}function V(o){return x(o)}function I(o){return V(k$2(y(o),{replace:true}))}function j(o){const g=o.matched[o.matched.length-1];if(g&&g.redirect){const{redirect:m}=g;let v=typeof m=="function"?m(o):m;if(typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=y(v):{path:v},v.params={}),"production"!=="production");return k$2({query:o.query,hash:o.hash,params:v.path!=null?{}:o.params},v)}}function x(o,g){const m=f=$(o),v=a.value,O=o.state,C=o.force,_=o.replace===true,E=j(m);if(E)return x(k$2(y(E),{state:typeof E=="object"?k$2({},O,E.state):O,force:C,replace:_}),g||m);const A=m;A.redirectedFrom=g;let H;return !C&&we(r,v,m)&&(H=K(16,{to:A,from:v}),Ne()),(H?Promise.resolve(H):me(A,v)).catch(D=>M(D)?M(D,2)?D:te(D):ye(D,A,v)).then(D=>{if(D){if(M(D,2))return x(k$2({replace:_},y(D.to),{state:typeof D.to=="object"?k$2({},O,D.to.state):O,force:C}),g||A)}else D=ve(A,v,true,_,O);return ge(A,v,D),D})}function Qe(o,g){const m=b(o,g);return m?Promise.reject(m):Promise.resolve()}function X(o){const g=Y.values().next().value;return g&&typeof g.runWithContext=="function"?g.runWithContext(o):o()}function me(o,g){let m;const[v,O,C]=Yt(o,g);m=ie$1(v.reverse(),"beforeRouteLeave",o,g);for(const E of v)E.leaveGuards.forEach(A=>{m.push(G(A,o,g));});const _=Qe.bind(null,o,g);return m.push(_),q(m).then(()=>{m=[];for(const E of h.list())m.push(G(E,o,g));return m.push(_),q(m)}).then(()=>{m=ie$1(O,"beforeRouteUpdate",o,g);for(const E of O)E.updateGuards.forEach(A=>{m.push(G(A,o,g));});return m.push(_),q(m)}).then(()=>{m=[];for(const E of C)if(E.beforeEnter)if(T$1(E.beforeEnter))for(const A of E.beforeEnter)m.push(G(A,o,g));else m.push(G(E.beforeEnter,o,g));return m.push(_),q(m)}).then(()=>(o.matched.forEach(E=>E.enterCallbacks={}),m=ie$1(C,"beforeRouteEnter",o,g,X),m.push(_),q(m))).then(()=>{m=[];for(const E of l.list())m.push(G(E,o,g));return m.push(_),q(m)}).catch(E=>M(E,8)?E:Promise.reject(E))}function ge(o,g,m){d.list().forEach(v=>X(()=>v(o,g,m)));}function ve(o,g,m,v,O){const C=b(o,g);if(C)return C;const _=g===U$1,E={};m&&(v||_?s.replace(o.fullPath,k$2({scroll:_&&E&&E.scroll},O)):s.push(o.fullPath,O)),a.value=o,Ne(),te();}let B;function Fe(){B||(B=s.listen((o,g,m)=>{if(!Re.listening)return;const v=$(o),O=j(v);if(O){x(k$2(O,{replace:true,force:true}),v).catch(W$1);return}f=v;const C=a.value;me(v,C).catch(_=>M(_,12)?_:M(_,2)?(x(k$2(y(_.to),{force:true}),v).then(E=>{M(E,20)&&!m.delta&&m.type===F$1.pop&&s.go(-1,false);}).catch(W$1),Promise.reject()):(m.delta&&s.go(-m.delta,false),ye(_,v,C))).then(_=>{_=_||ve(v,C,false),_&&(m.delta&&!M(_,8)?s.go(-m.delta,false):m.type===F$1.pop&&M(_,20)&&s.go(-1,false)),ge(v,C,_);}).catch(W$1);}));}let ee=L(),Ee=L(),J;function ye(o,g,m){te(o);const v=Ee.list();return v.length?v.forEach(O=>O(o,g,m)):(console.error(o)),Promise.reject(o)}function Je(){return J&&a.value!==U$1?Promise.resolve():new Promise((o,g)=>{ee.add([o,g]);})}function te(o){return J||(J=!o,Fe(),ee.list().forEach(([g,m])=>o?m(o):g()),ee.reset()),o}function Ne(o,g,m,v){const{scrollBehavior:O}=e;return Promise.resolve()}const ne=o=>s.go(o),Y=new Set,Re={currentRoute:a,listening:true,addRoute:c,removeRoute:P,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:N,resolve:$,options:e,push:V,replace:I,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:h.add,beforeResolve:l.add,afterEach:d.add,onError:Ee.add,isReady:Je,install(o){const g=this;o.component("RouterLink",Bt),o.component("RouterView",Ft),o.config.globalProperties.$router=g,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:true,get:()=>o$e.unref(a)});const m={};for(const O in U$1)Object.defineProperty(m,O,{get:()=>a.value[O],enumerable:true});o.provide(de,g),o.provide(We,o$e.shallowReactive(m)),o.provide(le,a);const v=o.unmount;Y.add(o),o.unmount=function(){Y.delete(o),Y.size<1&&(f=U$1,B&&B(),B=null,a.value=U$1,J=false),v();};}};function q(o){return o.reduce((g,m)=>g.then(()=>X(m)),Promise.resolve())}return Re}function Yt(e,t){const n=[],r=[],s=[],h=Math.max(t.matched.length,e.matched.length);for(let l=0;l<h;l++){const d=t.matched[l];d&&(e.matched.find(f=>z$1(f,d))?r.push(d):n.push(d));const a=e.matched[l];a&&(t.matched.find(f=>z$1(f,a))||s.push(a));}return [n,r,s]}

const s$3=/(:\w+)\([^)]+\)/g,p$3=/(:\w+)[?+*]/g,E=/:\w+/g;function r$4(e){const n=e?.meta.key??e.path.replace(s$3,"$1").replace(p$3,"$1").replace(E,t=>e.params[t.slice(1)]?.toString()||"");return typeof n=="function"?n(e):n}function _$3(e,n){return e===n||n===U$1?false:r$4(e)!==r$4(n)?true:!e.matched.every((a,c)=>a.components&&a.components.default===n.matched[c]?.components?.default)}

const y={scrollBehavior(e,o,t){const s=P(),l=d$3().options?.scrollBehaviorType??"auto";let r=t||void 0;const p=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,o):e.meta.scrollToTop;if(!r&&o&&e&&p!==false&&_$3(e,o)&&(r={left:0,top:0}),e.path===o.path)return o.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:i(e.hash),behavior:l}:false;const n=a=>!!(a.meta.pageTransition??n$2),h=n(o)&&n(e)?"page:transition:finish":"page:loading:end";return new Promise(a=>{s.hooks.hookOnce(h,()=>{requestAnimationFrame(()=>a(T(e,"instant",r)));});})}};function i(e){try{const o=(void 0).querySelector(e);if(o)return (Number.parseFloat(getComputedStyle(o).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop)||0)}catch{}return 0}function T(e,o,t){return t||(e.hash?{el:e.hash,top:i(e.hash),behavior:o}:{left:0,top:0,behavior:o})}

const t$6={hashMode:false,scrollBehaviorType:"auto"},e$2={...t$6,...y};

const _$2=N(async e=>{let r,s;if(!e.meta?.validate)return;const o=P(),a=d$3(),t=([r,s]=executeAsync(()=>Promise.resolve(e.meta.validate(e))),r=await r,s(),r);if(t===true)return;const u=u$2({statusCode:t&&t.statusCode||404,statusMessage:t&&t.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),n=a.beforeResolve(i=>{if(n(),i===e){const f=a.afterEach(async()=>{f(),await o.runWithContext(()=>l$3(u));});return  false}});});

const u$1=N(async r=>{});

const a$5=[_$2,u$1],d$2={};

const A=W$2({name:"nuxt:router",enforce:"pre",async setup(e){let i,d,_=$().app.baseURL;const O=e$2.history?.(_)??Xt(_),W=e$2.routes?([i,d]=executeAsync(()=>e$2.routes(r$5)),i=await i,d(),i??r$5):r$5;let E;const r=en({...e$2,scrollBehavior:(t,l,s)=>{if(l===U$1){E=s;return}if(e$2.scrollBehavior){if(r.options.scrollBehavior=e$2.scrollBehavior,"scrollRestoration"in(void 0).history){const a=r.beforeEach(()=>{a(),(void 0).history.scrollRestoration="manual";});}return e$2.scrollBehavior(t,U$1,E||s)}},history:O,routes:W});n$1(r,e$2.routes?e$2.routes:t=>t),e.vueApp.use(r);const M=o$e.shallowRef(r.currentRoute.value);r.afterEach((t,l)=>{M.value=l;}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>M.value});const w=e.ssrContext.url,y=o$e.shallowRef(r.currentRoute.value),v=()=>{y.value=r.currentRoute.value;};e.hook("page:finish",v),r.afterEach((t,l)=>{t.matched[0]?.components?.default===l.matched[0]?.components?.default&&v();});const b={};for(const t in y.value)Object.defineProperty(b,t,{get:()=>y.value[t],enumerable:true});e._route=o$e.shallowReactive(b),e._middleware||={global:[],named:{}},a$7(),e.ssrContext?.islandContext||r.afterEach(async(t,l,s)=>{delete e._processingMiddleware,s&&await e.callHook("page:loading:end"),s?.type!==4&&t.redirectedFrom&&t.fullPath!==w&&await e.runWithContext(()=>O$1(t.fullPath||"/"));});try{[i,d]=executeAsync(()=>r.push(w)),await i,d(),[i,d]=executeAsync(()=>r.isReady()),await i,d();}catch(t){[i,d]=executeAsync(()=>e.runWithContext(()=>l$3(t))),await i,d();}const g=r.currentRoute.value;if(v(),e.ssrContext?.islandContext)return {provide:{router:r}};const P=e.payload.state._layout;return r.beforeEach(async(t,l)=>{if(await e.callHook("page:loading:start"),t.meta=o$e.reactive(t.meta),e.isHydrating&&P&&!o$e.isReadonly(t.meta.layout)&&(t.meta.layout=P),e._processingMiddleware=true,!e.ssrContext?.islandContext){const s=new Set([...a$5,...e._middleware.global]);for(const a of t.matched){const c=a.meta.middleware;if(c)for(const o of o$d(c))s.add(o);}{const a=await e.runWithContext(()=>a$6({path:t.path}));if(a.appMiddleware)for(const c in a.appMiddleware)a.appMiddleware[c]?s.add(c):s.delete(c);}for(const a of s){const c=typeof a=="string"?e._middleware.named[a]||await d$2[a]?.().then(o=>o.default||o):a;if(!c)throw new Error(`Unknown route middleware: '${a}'.`);try{const o=await e.runWithContext(()=>c(t,l));if(o===!1||o instanceof Error){const u=o||createError({statusCode:404,statusMessage:`Page Not Found: ${w}`});return await e.runWithContext(()=>l$3(u)),!1}if(o===!0)continue;if(o===!1)return o;if(o)return x(o)&&o.fatal&&await e.runWithContext(()=>l$3(o)),o}catch(o){const u=createError(o);return u.fatal&&await e.runWithContext(()=>l$3(u)),u}}}}),r.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end");}),r.afterEach(async(t,l)=>{t.matched.length===0&&await e.runWithContext(()=>l$3(createError({statusCode:404,fatal:false,statusMessage:`Page not found: ${t.fullPath}`,data:{path:t.fullPath}})));}),e.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await r.replace({...g,force:!0}),r.options.scrollBehavior=e$2.scrollBehavior;}catch(t){await e.runWithContext(()=>l$3(t));}}),{provide:{router:r}}}});

function m$2(o,e){P().ssrContext._payloadReducers[o]=e;}

const s$2=[["NuxtError",e=>x(e)&&e.toJSON()],["EmptyShallowRef",e=>o$e.isRef(e)&&o$e.isShallow(e)&&!e.value&&(typeof e.value=="bigint"?"0n":JSON.stringify(e.value)||"_")],["EmptyRef",e=>o$e.isRef(e)&&!e.value&&(typeof e.value=="bigint"?"0n":JSON.stringify(e.value)||"_")],["ShallowRef",e=>o$e.isRef(e)&&o$e.isShallow(e)&&e.value],["ShallowReactive",e=>o$e.isReactive(e)&&o$e.isShallow(e)&&o$e.toRaw(e)],["Ref",e=>o$e.isRef(e)&&e.value],["Reactive",e=>o$e.isReactive(e)&&o$e.toRaw(e)]],n=W$2({name:"nuxt:revive-payload:server",setup(){for(const[e,o]of s$2)m$2(e,o);}});

/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let S;const w=e=>S=e,Q=Symbol();function O(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var k$1;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function";})(k$1||(k$1={}));function ae(){const e=o$e.effectScope(true),i=e.run(()=>o$e.ref({}));let n=[],o=[];const a=o$e.markRaw({install(u){w(a),a._a=u,u.provide(Q,a),u.config.globalProperties.$pinia=a,o.forEach(p=>n.push(p)),o=[];},use(u){return this._a?n.push(u):o.push(u),this},_p:n,_a:null,_e:e,_s:new Map,state:i});return a}const Y=()=>{};function B(e,i,n,o=Y){e.push(i);const a=()=>{const u=e.indexOf(i);u>-1&&(e.splice(u,1),o());};return !n&&o$e.getCurrentScope()&&o$e.onScopeDispose(a),a}function D(e,...i){e.slice().forEach(n=>{n(...i);});}const te=e=>e(),J=Symbol(),F=Symbol();function U(e,i){e instanceof Map&&i instanceof Map?i.forEach((n,o)=>e.set(o,n)):e instanceof Set&&i instanceof Set&&i.forEach(e.add,e);for(const n in i){if(!i.hasOwnProperty(n))continue;const o=i[n],a=e[n];O(a)&&O(o)&&e.hasOwnProperty(n)&&!o$e.isRef(o)&&!o$e.isReactive(o)?e[n]=U(a,o):e[n]=o;}return e}const oe=Symbol();function se(e){return !O(e)||!e.hasOwnProperty(oe)}const{assign:b}=Object;function q(e){return !!(o$e.isRef(e)&&e.effect)}function z(e,i,n,o){const{state:a,actions:u,getters:p}=i,l=n.state.value[e];let m;function E(){!l&&("production"==="production")&&(n.state.value[e]=a?a():{});const _=o$e.toRefs(n.state.value[e]);return b(_,u,Object.keys(p||{}).reduce((N,v)=>(N[v]=o$e.markRaw(o$e.computed(()=>{w(n);const y=n._s.get(e);return p[v].call(y,y)})),N),{}))}return m=W(e,E,i,n,o,true),m}function W(e,i,n={},o,a,u){let p;const l=b({actions:{}},n);const m={deep:true};let E,_,N=[],v=[],y;const g=o.state.value[e];!u&&!g&&("production"==="production")&&(o.state.value[e]={});const x=o$e.ref({});let H;function M(s){let t;E=_=false,typeof s=="function"?(s(o.state.value[e]),t={type:k$1.patchFunction,storeId:e,events:y}):(U(o.state.value[e],s),t={type:k$1.patchObject,payload:s,storeId:e,events:y});const f=H=Symbol();o$e.nextTick().then(()=>{H===f&&(E=true);}),_=true,D(N,t,o.state.value[e]);}const Z=u?function(){const{state:t}=n,f=t?t():{};this.$patch(h=>{b(h,f);});}:Y;function G(){p.stop(),N=[],v=[],o._s.delete(e);}const I=(s,t="")=>{if(J in s)return s[F]=t,s;const f=function(){w(o);const h=Array.from(arguments),R=[],A=[];function K(d){R.push(d);}function ee(d){A.push(d);}D(v,{args:h,name:f[F],store:r,after:K,onError:ee});let j;try{j=s.apply(this&&this.$id===e?this:r,h);}catch(d){throw D(A,d),d}return j instanceof Promise?j.then(d=>(D(R,d),d)).catch(d=>(D(A,d),Promise.reject(d))):(D(R,j),j)};return f[J]=true,f[F]=t,f};o$e.markRaw({actions:{},getters:{},state:[],hotState:x});const T={_p:o,$id:e,$onAction:B.bind(null,v),$patch:M,$reset:Z,$subscribe(s,t={}){const f=B(N,s,t.detached,()=>h()),h=p.run(()=>o$e.watch(()=>o.state.value[e],R=>{(t.flush==="sync"?_:E)&&s({storeId:e,type:k$1.direct,events:y},R);},b({},m,t)));return f},$dispose:G},r=o$e.reactive(T);o._s.set(e,r);const V=(o._a&&o._a.runWithContext||te)(()=>o._e.run(()=>(p=o$e.effectScope()).run(()=>i({action:I}))));for(const s in V){const t=V[s];if(o$e.isRef(t)&&!q(t)||o$e.isReactive(t))u||(g&&se(t)&&(o$e.isRef(t)?t.value=g[s]:U(t,g[s])),o.state.value[e][s]=t);else if(typeof t=="function"){const f=I(t,s);V[s]=f,l.actions[s]=t;}else ;}return b(r,V),b(o$e.toRaw(r),V),Object.defineProperty(r,"$state",{get:()=>o.state.value[e],set:s=>{M(t=>{b(t,s);});}}),o._p.forEach(s=>{b(r,p.run(()=>s({store:r,app:o._a,pinia:o,options:l})));}),g&&u&&n.hydrate&&n.hydrate(r.$state,g),E=true,_=true,r}/*! #__NO_SIDE_EFFECTS__ */function ie(e,i,n){let o,a;const u=typeof i=="function";o=e,a=u?n:i;function p(l,m){const E=o$e.hasInjectionContext();if(l=(l)||(E?o$e.inject(Q,null):null),l&&w(l),"production"!=="production");l=S,l._s.has(o)||(u?W(o,i,a,l):z(o,a,l),"production"!=="production");const _=l._s.get(o);return _}return p.$id=o,p}

const l$2=W$2({name:"pinia",setup(t){const i=ae();return t.vueApp.use(i),w(i),t.payload.pinia=i.state.value,{provide:{pinia:i}}}});

const t$5=W$2({name:"nuxt:global-components"});

const a$4=()=>{};

const l$1=[t$8,A,n,l$2,t$5,a$4];

var r$3={};

var r$2={};

/**
* @vue/compiler-ssr v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var ce;function ze(){if(ce)return r$2;ce=1,Object.defineProperty(r$2,"__esModule",{value:true});var s=Ee(),E=at$1();const v=Symbol("ssrInterpolate"),B=Symbol("ssrRenderVNode"),j=Symbol("ssrRenderComponent"),F=Symbol("ssrRenderSlot"),G=Symbol("ssrRenderSlotInner"),W=Symbol("ssrRenderClass"),q=Symbol("ssrRenderStyle"),D=Symbol("ssrRenderAttrs"),U=Symbol("ssrRenderAttr"),H=Symbol("ssrRenderDynamicAttr"),Y=Symbol("ssrRenderList"),A=Symbol("ssrIncludeBooleanAttr"),I=Symbol("ssrLooseEqual"),k=Symbol("ssrLooseContain"),J=Symbol("ssrRenderDynamicModel"),K=Symbol("ssrGetDynamicModelProps"),Q=Symbol("ssrRenderTeleport"),z=Symbol("ssrRenderSuspense"),X=Symbol("ssrGetDirectiveProps"),M={[v]:"ssrInterpolate",[B]:"ssrRenderVNode",[j]:"ssrRenderComponent",[F]:"ssrRenderSlot",[G]:"ssrRenderSlotInner",[W]:"ssrRenderClass",[q]:"ssrRenderStyle",[D]:"ssrRenderAttrs",[U]:"ssrRenderAttr",[H]:"ssrRenderDynamicAttr",[Y]:"ssrRenderList",[A]:"ssrIncludeBooleanAttr",[I]:"ssrLooseEqual",[k]:"ssrLooseContain",[J]:"ssrRenderDynamicModel",[K]:"ssrGetDynamicModelProps",[Q]:"ssrRenderTeleport",[z]:"ssrRenderSuspense",[X]:"ssrGetDirectiveProps"};s.registerRuntimeHelpers(M);const fe=s.createStructuralDirectiveTransform(/^(if|else|else-if)$/,s.processIf);function ue(e,r,t=false,n=false){const[i]=e.branches,o=s.createIfStatement(i.condition,Z(i,r,t));r.pushStatement(o);let a=o;for(let l=1;l<e.branches.length;l++){const c=e.branches[l],u=Z(c,r,t);c.condition?a=a.alternate=s.createIfStatement(c.condition,u):a.alternate=u;}!a.alternate&&!n&&(a.alternate=s.createBlockStatement([s.createCallExpression("_push",["`<!---->`"])]));}function Z(e,r,t=false){const{children:n}=e,i=!t&&(n.length!==1||n[0].type!==1)&&!(n.length===1&&n[0].type===11);return C(e,r,i)}const he=s.createStructuralDirectiveTransform("for",s.processFor);function me(e,r,t=false){const n=!t&&(e.children.length!==1||e.children[0].type!==1),i=s.createFunctionExpression(s.createForLoopParams(e.parseResult));i.body=C(e,r,n),t||r.pushStringPart("<!--[-->"),r.pushStatement(s.createCallExpression(r.helper(Y),[e.source,i])),t||r.pushStringPart("<!--]-->");}const Se=(e,r)=>{if(s.isSlotOutlet(e)){const{slotName:t,slotProps:n}=s.processSlotOutlet(e,r),i=["_ctx.$slots",t,n||"{}","null","_push","_parent"];r.scopeId&&r.slotted!==false&&i.push(`"${r.scopeId}-s"`);let o=F,a=r.parent;if(a){const l=a.children;a.type===10&&(a=r.grandParent);let c;a.type===1&&a.tagType===1&&((c=s.resolveComponentType(a,r,true))===s.TRANSITION||c===s.TRANSITION_GROUP)&&l.filter(u=>u.type===1).length===1&&(o=G,r.scopeId&&r.slotted!==false||i.push("null"),i.push("true"));}e.ssrCodegenNode=s.createCallExpression(r.helper(o),i);}};function Ee$1(e,r){const t=e.ssrCodegenNode;if(e.children.length){const n=s.createFunctionExpression([]);n.body=C(e,r),t.arguments[3]=n;}if(r.withSlotScopeId){const n=t.arguments[6];t.arguments[6]=n?`${n} + _scopeId`:"_scopeId";}r.pushStatement(e.ssrCodegenNode);}function P(e,r){return s.createCompilerError(e,r,ge)}const ge={65:"Unsafe attribute name for SSR.",66:"Missing the 'to' prop on teleport element.",67:"Invalid AST node during SSR transform."};function de(e,r){const t=s.findProp(e,"to");if(!t){r.onError(P(66,e.loc));return}let n;if(t.type===6?n=t.value&&s.createSimpleExpression(t.value.content,true):n=t.exp,!n){r.onError(P(66,t.loc));return}const i=s.findProp(e,"disabled",false,true),o=i?i.type===6?"true":i.exp||"false":"false",a=s.createFunctionExpression(["_push"],void 0,true,false,e.loc);a.body=C(e,r),r.pushStatement(s.createCallExpression(r.helper(Q),["_push",a,n,o,"_parent"]));}const ee=new WeakMap;function ye(e,r){return ()=>{if(e.children.length){const t={slotsExp:null,wipSlots:[]};ee.set(e,t),t.slotsExp=s.buildSlots(e,r,(n,i,o,a)=>{const l=s.createFunctionExpression([],void 0,true,false,a);return t.wipSlots.push({fn:l,children:o}),l}).slots;}}}function Te(e,r){const t=ee.get(e);if(!t)return;const{slotsExp:n,wipSlots:i}=t;for(let o=0;o<i.length;o++){const a=i[o];a.fn.body=C(a,r);}r.pushStatement(s.createCallExpression(r.helper(z),["_push",n]));}const b=new WeakMap,Re=(e,r)=>{if(!(e.type!==1||e.tagType!==0))return function(){const n=[`<${e.tag}`],i=e.tag==="textarea"||e.tag.indexOf("-")>0,o=s.hasDynamicKeyVBind(e),a=e.props.some(f=>f.type===7&&!E.isBuiltInDirective(f.name)),l=o||a;if(l){const{props:f,directives:p}=s.buildProps(e,r,e.props,false,false,true);if(f||p.length){const S=w(f,p,r),y=s.createCallExpression(r.helper(D),[S]);if(e.tag==="textarea"){const d=e.children[0];if(!d||d.type!==5){const m=`_temp${r.temps++}`;y.arguments=[s.createAssignmentExpression(s.createSimpleExpression(m,false),S)],b.set(e,s.createCallExpression(r.helper(v),[s.createConditionalExpression(s.createSimpleExpression(`"value" in ${m}`,false),s.createSimpleExpression(`${m}.value`,false),s.createSimpleExpression(d?d.content:"",true),false)]));}}else if(e.tag==="input"){const d=be(e);if(d){const m=`_temp${r.temps++}`,R=s.createSimpleExpression(m,false);y.arguments=[s.createSequenceExpression([s.createAssignmentExpression(R,S),s.createCallExpression(r.helper(s.MERGE_PROPS),[R,s.createCallExpression(r.helper(K),[R,d.exp])])])];}}else if(p.length&&!e.children.length&&!s.findDir(e,"text")){const m=`_temp${r.temps++}`;y.arguments=[s.createAssignmentExpression(s.createSimpleExpression(m,false),S)],b.set(e,s.createConditionalExpression(s.createSimpleExpression(`"textContent" in ${m}`,false),s.createCallExpression(r.helper(v),[s.createSimpleExpression(`${m}.textContent`,false)]),s.createSimpleExpression(`${m}.innerHTML ?? ''`,false),false));}i&&y.arguments.push(`"${e.tag}"`),n.push(y);}}let c,u,h;for(let f=0;f<e.props.length;f++){const p=e.props[f];if(!(e.tag==="input"&&Ce(p)))if(p.type===7){if(p.name==="html"&&p.exp)b.set(e,s.createCompoundExpression(["(",p.exp,") ?? ''"]));else if(p.name==="text"&&p.exp)e.children=[s.createInterpolation(p.exp,p.loc)];else if(p.name==="slot")r.onError(s.createCompilerError(40,p.loc));else if(_e(e,p)&&p.exp)l||(e.children=[s.createInterpolation(p.exp,p.loc)]);else if(!l&&p.name!=="on"){const S=r.directiveTransforms[p.name];if(S){const{props:y,ssrTagParts:d}=S(p,e,r);d&&n.push(...d);for(let m=0;m<y.length;m++){const{key:R,value:_}=y[m];if(s.isStaticExp(R)){let g=R.content;if(g==="key"||g==="ref")continue;g==="class"?n.push(' class="',c=s.createCallExpression(r.helper(W),[_]),'"'):g==="style"?h?re(h,_):n.push(' style="',h=s.createCallExpression(r.helper(q),[_]),'"'):(g=e.tag.indexOf("-")>0?g:E.propsToAttrMap[g]||g.toLowerCase(),E.isBooleanAttr(g)?n.push(s.createConditionalExpression(s.createCallExpression(r.helper(A),[_]),s.createSimpleExpression(" "+g,true),s.createSimpleExpression("",true),false)):E.isSSRSafeAttrName(g)?n.push(s.createCallExpression(r.helper(U),[R,_])):r.onError(P(65,R.loc)));}else {const g=[R,_];i&&g.push(`"${e.tag}"`),n.push(s.createCallExpression(r.helper(H),g));}}}}}else {const S=p.name;if(e.tag==="textarea"&&S==="value"&&p.value)b.set(e,E.escapeHtml(p.value.content));else if(!l){if(S==="key"||S==="ref")continue;S==="class"&&p.value&&(u=JSON.stringify(p.value.content)),n.push(` ${p.name}`+(p.value?`="${E.escapeHtml(p.value.content)}"`:""));}}}c&&u&&(re(c,u),Pe(n,"class")),r.scopeId&&n.push(` ${r.scopeId}`),e.ssrCodegenNode=s.createTemplateLiteral(n);}};function w(e,r,t){let n=[];if(e&&(e.type===14?n=e.arguments:n.push(e)),r.length)for(const i of r)n.push(s.createCallExpression(t.helper(X),["_ctx",...s.buildDirectiveArgs(i,t).elements]));return n.length>1?s.createCallExpression(t.helper(s.MERGE_PROPS),n):n[0]}function Ce(e){return e.type===7?e.name==="bind"&&e.arg&&s.isStaticExp(e.arg)&&(e.arg.content==="true-value"||e.arg.content==="false-value"):e.name==="true-value"||e.name==="false-value"}function _e(e,r){return !!(e.tag==="textarea"&&r.name==="bind"&&s.isStaticArgOf(r.arg,"value"))}function re(e,r){const t=e.arguments[0];t.type===17?t.elements.push(r):e.arguments[0]=s.createArrayExpression([t,r]);}function Pe(e,r){const t=new RegExp(`^ ${r}=".+"$`),n=e.findIndex(i=>typeof i=="string"&&t.test(i));n>-1&&e.splice(n,1);}function be(e){return e.props.find(r=>r.type===7&&r.name==="model"&&r.exp)}function ve(e,r){const t=r.options.isVoidTag||E.NO,n=e.ssrCodegenNode.elements;for(let o=0;o<n.length;o++)r.pushStringPart(n[o]);r.withSlotScopeId&&r.pushStringPart(s.createSimpleExpression("_scopeId",false)),r.pushStringPart(">");const i=b.get(e);i?r.pushStringPart(i):e.children.length&&T(e,r),t(e.tag)||r.pushStringPart(`</${e.tag}>`);}const se=new WeakMap;function Ie(e,r){return ()=>{const t=s.findProp(e,"tag");if(t){const n=e.props.filter(l=>l!==t),{props:i,directives:o}=s.buildProps(e,r,n,true,false,true);let a=null;(i||o.length)&&(a=s.createCallExpression(r.helper(D),[w(i,o,r)])),se.set(e,{tag:t,propsExp:a,scopeId:r.scopeId||null});}}}function Oe(e,r){const t=se.get(e);if(t){const{tag:n,propsExp:i,scopeId:o}=t;n.type===7?(r.pushStringPart("<"),r.pushStringPart(n.exp),i&&r.pushStringPart(i),o&&r.pushStringPart(` ${o}`),r.pushStringPart(">"),T(e,r,false,true,true),r.pushStringPart("</"),r.pushStringPart(n.exp),r.pushStringPart(">")):(r.pushStringPart(`<${n.value.content}`),i&&r.pushStringPart(i),o&&r.pushStringPart(` ${o}`),r.pushStringPart(">"),T(e,r,false,true,true),r.pushStringPart(`</${n.value.content}>`));}else T(e,r,true,true,true);}const te=new WeakMap;function Ne(e,r){return ()=>{const t=s.findProp(e,"appear",false,true);te.set(e,!!t);}}function De(e,r){e.children=e.children.filter(n=>n.type!==3),te.get(e)?(r.pushStringPart("<template>"),T(e,r,false,true),r.pushStringPart("</template>")):T(e,r,false,true);}const ne=new WeakMap,ie=Symbol(),ae=new WeakMap,Ae=(e,r)=>{if(e.type!==1||e.tagType!==1)return;const t=s.resolveComponentType(e,r,true),n=E.isObject(t)&&t.callee===s.RESOLVE_DYNAMIC_COMPONENT;if(ae.set(e,t),E.isSymbol(t))return t===s.SUSPENSE?ye(e,r):t===s.TRANSITION_GROUP?Ie(e,r):t===s.TRANSITION?Ne(e):void 0;const i=[],o=x(e);return function(){o.children.length&&s.buildSlots(o,r,(f,p,S)=>(i.push($e(f,p,S,r)),s.createFunctionExpression(void 0)));let l="null";if(e.props.length){const{props:f,directives:p}=s.buildProps(e,r,void 0,true,n);(f||p.length)&&(l=w(f,p,r));}const c=[];ne.set(e,c);const u=(f,p,S,y)=>{const d=f&&s.stringifyExpression(f)||"_",m=s.createFunctionExpression([d,"_push","_parent","_scopeId"],void 0,true,true,y);return c.push({type:ie,fn:m,children:S,vnodeBranch:i[c.length]}),m},h=e.children.length?s.buildSlots(e,r,u).slots:"null";typeof t!="string"?e.ssrCodegenNode=s.createCallExpression(r.helper(B),["_push",s.createCallExpression(r.helper(s.CREATE_VNODE),[t,l,h]),"_parent"]):e.ssrCodegenNode=s.createCallExpression(r.helper(j),[t,l,h,"_parent"]);}};function ke(e,r,t){const n=ae.get(e);if(e.ssrCodegenNode){const i=ne.get(e)||[];for(let o=0;o<i.length;o++){const{fn:a,vnodeBranch:l}=i[o];a.body=s.createIfStatement(s.createSimpleExpression("_push",false),C(i[o],r,false,true),l);}r.withSlotScopeId&&e.ssrCodegenNode.arguments.push("_scopeId"),typeof n=="string"?r.pushStatement(s.createCallExpression("_push",[e.ssrCodegenNode])):r.pushStatement(e.ssrCodegenNode);}else {if(n===s.TELEPORT)return de(e,r);if(n===s.SUSPENSE)return Te(e,r);if(n===s.TRANSITION_GROUP)return Oe(e,r);if(t.type===ie&&r.pushStringPart(""),n===s.TRANSITION)return De(e,r);T(e,r);}}const le=new WeakMap,[Me,we]=s.getBaseTransformPreset(true),xe=[...Me,...s.DOMNodeTransforms],Le={...we,...s.DOMDirectiveTransforms};function $e(e,r,t,n){const i=le.get(n.root),o={...i,nodeTransforms:[...xe,...i.nodeTransforms||[]],directiveTransforms:{...Le,...i.directiveTransforms||{}}},a=[];e&&a.push({type:7,name:"slot",exp:e,arg:void 0,modifiers:[],loc:s.locStub}),r&&a.push(E.extend({},r));const l={type:1,ns:0,tag:"template",tagType:3,props:a,children:t,loc:s.locStub,codegenNode:void 0};return Ve(l,o,n),s.createReturnStatement(t)}function Ve(e,r,t){const n=s.createRoot([e]),i=s.createTransformContext(n,r);i.ssr=false,i.scopes={...t.scopes},i.identifiers={...t.identifiers},i.imports=t.imports,s.traverseNode(n,i),["helpers","components","directives"].forEach(o=>{i[o].forEach((a,l)=>{if(o==="helpers"){const c=t.helpers.get(l);c===void 0?t.helpers.set(l,a):t.helpers.set(l,a+c);}else t[o].add(a);});});}function x(e){if(E.isArray(e))return e.map(x);if(E.isPlainObject(e)){const r={};for(const t in e)r[t]=x(e[t]);return r}else return e}function Be(e,r){const t=oe(e,r);if(r.ssrCssVars){const i=s.createTransformContext(s.createRoot([]),r),o=s.processExpression(s.createSimpleExpression(r.ssrCssVars,false),i);t.body.push(s.createCompoundExpression(["const _cssVars = { style: ",o,"}"])),Array.from(i.helpers.keys()).forEach(a=>{e.helpers.add(a);});}const n=e.children.length>1&&e.children.some(i=>!s.isText(i));T(e,t,n),e.codegenNode=s.createBlockStatement(t.body),e.ssrHelpers=Array.from(new Set([...Array.from(e.helpers).filter(i=>i in M),...t.helpers])),e.helpers=new Set(Array.from(e.helpers).filter(i=>!(i in M)));}function oe(e,r,t=new Set,n=false){const i=[];let o=null;return {root:e,options:r,body:i,helpers:t,withSlotScopeId:n,onError:r.onError||(a=>{throw a}),helper(a){return t.add(a),a},pushStringPart(a){if(!o){const u=s.createCallExpression("_push");i.push(u),o=s.createTemplateLiteral([]),u.arguments.push(o);}const l=o.elements,c=l[l.length-1];E.isString(a)&&E.isString(c)?l[l.length-1]+=a:l.push(a);},pushStatement(a){o=null,i.push(a);}}}function je(e,r=e.withSlotScopeId){return oe(e.root,e.options,e.helpers,r)}function T(e,r,t=false,n=false,i=false){t&&r.pushStringPart("<!--[-->");const{children:o}=e;for(let a=0;a<o.length;a++){const l=o[a];switch(l.type){case 1:switch(l.tagType){case 0:ve(l,r);break;case 1:ke(l,r,e);break;case 2:Ee$1(l,r);break;case 3:break;default:return r.onError(P(67,l.loc)),l}break;case 2:r.pushStringPart(E.escapeHtml(l.content));break;case 3:i||r.pushStringPart(`<!--${l.content}-->`);break;case 5:r.pushStringPart(s.createCallExpression(r.helper(v),[l.content]));break;case 9:ue(l,r,n,i);break;case 11:me(l,r,n);break;case 10:break;case 12:case 8:break;default:return r.onError(P(67,l.loc)),l}}t&&r.pushStringPart("<!--]-->");}function C(e,r,t=false,n=r.withSlotScopeId){const i=je(r,n);return T(e,i,t),s.createBlockStatement(i.body)}const Fe=(e,r,t)=>{const n=e.exp;function i(){const a=s.findProp(r,"value");a&&t.onError(s.createDOMCompilerError(60,a.loc));}function o(a){if(a.tag==="option"){if(a.props.findIndex(l=>l.name==="selected")===-1){const l=pe(a);a.ssrCodegenNode.elements.push(s.createConditionalExpression(s.createCallExpression(t.helper(A),[s.createConditionalExpression(s.createCallExpression("Array.isArray",[n]),s.createCallExpression(t.helper(k),[n,l]),s.createCallExpression(t.helper(I),[n,l]))]),s.createSimpleExpression(" selected",true),s.createSimpleExpression("",true),false));}}else a.tag==="optgroup"&&a.children.forEach(l=>o(l));}if(r.tagType===0){const a={props:[]},l=[s.createObjectProperty("value",n)];if(r.tag==="input"){const c=s.findProp(r,"type");if(c){const u=pe(r);if(c.type===7)a.ssrTagParts=[s.createCallExpression(t.helper(J),[c.exp,n,u])];else if(c.value)switch(c.value.content){case "radio":a.props=[s.createObjectProperty("checked",s.createCallExpression(t.helper(I),[n,u]))];break;case "checkbox":const h=s.findProp(r,"true-value");if(h){const f=h.type===6?JSON.stringify(h.value.content):h.exp;a.props=[s.createObjectProperty("checked",s.createCallExpression(t.helper(I),[n,f]))];}else a.props=[s.createObjectProperty("checked",s.createConditionalExpression(s.createCallExpression("Array.isArray",[n]),s.createCallExpression(t.helper(k),[n,u]),n))];break;case "file":t.onError(s.createDOMCompilerError(59,e.loc));break;default:i(),a.props=l;break}}else s.hasDynamicKeyVBind(r)||(i(),a.props=l);}else if(r.tag==="textarea")i(),r.children=[s.createInterpolation(n,n.loc)];else if(r.tag==="select"){const c=u=>{u.forEach(h=>{h.type===1?o(h):h.type===11?c(h.children):h.type===9&&h.branches.forEach(f=>c(f.children));});};c(r.children);}else t.onError(s.createDOMCompilerError(57,e.loc));return a}else return s.transformModel(e,r,t)};function pe(e){const r=s.findProp(e,"value");return r?r.type===7?r.exp:s.createSimpleExpression(r.value.content,true):s.createSimpleExpression("null",false)}const Ge=(e,r,t)=>(e.exp||t.onError(s.createDOMCompilerError(61)),{props:[s.createObjectProperty("style",s.createConditionalExpression(e.exp,s.createSimpleExpression("null",false),s.createObjectExpression([s.createObjectProperty("display",s.createSimpleExpression("none",true))]),false))]}),L=e=>e.children.filter(r=>r.type!==3),$=e=>L(e).length===1,We=(e,r)=>{if(e.type===0&&(r.identifiers._attrs=1),e.type===1&&e.tagType===1&&(e.tag==="transition"||e.tag==="Transition"||e.tag==="KeepAlive"||e.tag==="keep-alive")){const n=L(r.root);if(n.length===1&&n[0]===e){$(e)&&V(e.children[0]);return}}const t=r.parent;if(!(!t||t.type!==0))if(e.type===10&&$(e)){let n=false;for(const i of L(t))if(i.type===9||i.type===1&&s.findDir(i,"if")){if(n)return;n=true;}else if(!n||!(i.type===1&&s.findDir(i,/else/,true)))return;V(e.children[0]);}else $(t)&&V(e);};function V(e){e.type===1&&(e.tagType===0||e.tagType===1)&&!s.findDir(e,"for")&&e.props.push({type:7,name:"bind",arg:void 0,exp:s.createSimpleExpression("_attrs",false),modifiers:[],loc:s.locStub});}const qe=(e,r)=>{if(!r.ssrCssVars)return;e.type===0&&(r.identifiers._cssVars=1);const t=r.parent;if(!(!t||t.type!==0))if(e.type===10)for(const n of e.children)O(n);else O(e);};function O(e){if(e.type===1&&(e.tagType===0||e.tagType===1)&&!s.findDir(e,"for"))if(e.tag==="suspense"||e.tag==="Suspense")for(const r of e.children)r.type===1&&r.tagType===3?r.children.forEach(O):O(r);else e.props.push({type:7,name:"bind",arg:void 0,exp:s.createSimpleExpression("_cssVars",false),modifiers:[],loc:s.locStub});}function Ue(e,r={}){r={...r,...s.parserOptions,ssr:true,inSSR:true,scopeId:r.mode==="function"?null:r.scopeId,prefixIdentifiers:true,cacheHandlers:false,hoistStatic:false};const t=typeof e=="string"?s.baseParse(e,r):e;return le.set(t,r),s.transform(t,{...r,hoistStatic:false,nodeTransforms:[fe,he,s.trackVForSlotScopes,s.transformExpression,Se,We,qe,Re,Ae,s.trackSlotScopes,s.transformStyle,...r.nodeTransforms||[]],directiveTransforms:{bind:s.transformBind,on:s.transformOn,model:Fe,show:Ge,cloak:s.noopDirectiveTransform,once:s.noopDirectiveTransform,memo:s.noopDirectiveTransform,...r.directiveTransforms||{}}}),Be(t,r),s.generate(t,r)}return r$2.compile=Ue,r$2}

/**
* @vue/server-renderer v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var Z;function qe(){if(Z)return r$3;Z=1,Object.defineProperty(r$3,"__esModule",{value:true});var f=E$2(),o=at$1(),ee=ze();function re(e){var r=Object.create(null);if(e)for(var s in e)r[s]=e[s];return r.default=e,Object.freeze(r)}var te=re(f);const se=o.makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");function v(e,r){let s="";for(const t in e){if(se(t)||o.isOn(t)||r==="textarea"&&t==="value")continue;const n=e[t];t==="class"?s+=` class="${A(n)}"`:t==="style"?s+=` style="${P(n)}"`:t==="className"?s+=` class="${String(n)}"`:s+=w(t,n,r);}return s}function w(e,r,s){if(!o.isRenderableAttrValue(r))return "";const t=s&&(s.indexOf("-")>0||o.isSVGTag(s))?e:o.propsToAttrMap[e]||e.toLowerCase();return o.isBooleanAttr(t)?o.includeBooleanAttr(r)?` ${t}`:"":o.isSSRSafeAttrName(t)?r===""?` ${t}`:` ${t}="${o.escapeHtml(r)}"`:(console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${t}`),"")}function N(e,r){return o.isRenderableAttrValue(r)?` ${e}="${o.escapeHtml(r)}"`:""}function A(e){return o.escapeHtml(o.normalizeClass(e))}function P(e){if(!e)return "";if(o.isString(e))return o.escapeHtml(e);const r=o.normalizeStyle(e);return o.escapeHtml(o.stringifyStyle(r))}function B(e,r=null,s=null,t=null,n){return T(f.createVNode(e,r,s),t,n)}const{ensureValidVNode:ne}=f.ssrUtils;function q(e,r,s,t,n,i,l){n("<!--[-->"),V(e,r,s,t,n,i,l),n("<!--]-->");}function V(e,r,s,t,n,i,l,a){const p=e[r];if(p){const u=[],d=p(s,y=>{u.push(y);},i,l?" "+l:"");if(o.isArray(d)){const y=ne(d);y?C(n,y,i,l):t&&t();}else {let y=true;if(a)y=false;else for(let h=0;h<u.length;h++)if(!le(u[h])){y=false;break}if(y)t&&t();else {let h=0,g=u.length;a&&u[0]==="<!--[-->"&&u[g-1]==="<!--]-->"&&(h++,g--);for(let $=h;$<g;$++)n(u[$]);}}}else t&&t();}const oe=/^<!--[\s\S]*-->$/,ie=/<!--[^]*?-->/gm;function le(e){return typeof e!="string"||!oe.test(e)?false:e.length<=8?true:!e.replace(ie,"").trim()}function O(e,r,s,t,n){e("<!--teleport start-->");const i=n.appContext.provides[f.ssrContextKey],l=i.__teleportBuffers||(i.__teleportBuffers={}),a=l[s]||(l[s]=[]),p=a.length;let u;if(t)r(e),u="<!--teleport start anchor--><!--teleport anchor-->";else {const{getBuffer:m,push:d}=I();d("<!--teleport start anchor-->"),r(d),d("<!--teleport anchor-->"),u=m();}a.splice(p,0,u),e("<!--teleport end-->");}function x(e){return o.escapeHtml(o.toDisplayString(e))}function E(e,r){if(o.isArray(e)||o.isString(e))for(let s=0,t=e.length;s<t;s++)r(e[s],s);else if(typeof e=="number")for(let s=0;s<e;s++)r(s+1,s);else if(o.isObject(e))if(e[Symbol.iterator]){const s=Array.from(e);for(let t=0,n=s.length;t<n;t++)r(s[t],t);}else {const s=Object.keys(e);for(let t=0,n=s.length;t<n;t++){const i=s[t];r(e[i],i,t);}}}async function H(e,{default:r}){r?r():e("<!---->");}function W(e,r,s,t,n={}){return typeof r!="function"&&r.getSSRProps?r.getSSRProps({dir:r,instance:f.ssrUtils.getComponentPublicInstance(e.$),value:s,oldValue:void 0,arg:t,modifiers:n},null)||{}:{}}const k=o.looseEqual;function _(e,r){return o.looseIndexOf(e,r)>-1}function D(e,r,s){switch(e){case "radio":return o.looseEqual(r,s)?" checked":"";case "checkbox":return (o.isArray(r)?_(r,s):r)?" checked":"";default:return N("value",r)}}function j(e={},r){const{type:s,value:t}=e;switch(s){case "radio":return o.looseEqual(r,t)?{checked:true}:null;case "checkbox":return (o.isArray(r)?_(r,t):r)?{checked:true}:null;default:return {value:r}}}var ae=Object.freeze({__proto__:null,ssrGetDirectiveProps:W,ssrGetDynamicModelProps:j,ssrIncludeBooleanAttr:o.includeBooleanAttr,ssrInterpolate:x,ssrLooseContain:_,ssrLooseEqual:k,ssrRenderAttr:N,ssrRenderAttrs:v,ssrRenderClass:A,ssrRenderComponent:B,ssrRenderDynamicAttr:w,ssrRenderDynamicModel:D,ssrRenderList:E,ssrRenderSlot:q,ssrRenderSlotInner:V,ssrRenderStyle:P,ssrRenderSuspense:H,ssrRenderTeleport:O,ssrRenderVNode:S});const M=Object.create(null);function ce(e,r){const s=r.type,{isCustomElement:t,compilerOptions:n}=r.appContext.config,{delimiters:i,compilerOptions:l}=s,a=o.extend(o.extend({isCustomElement:t,delimiters:i},n),l);a.isCustomElement=a.isCustomElement||o.NO,a.isNativeTag=a.isNativeTag||o.NO;const p=JSON.stringify({template:e,compilerOptions:a},(h,g)=>o.isFunction(g)?g.toString():g),u=M[p];if(u)return u;a.onError=h=>{throw h};const{code:m}=ee.compile(e,a),d={vue:te,"vue/server-renderer":ae},y=h=>d[h];return M[p]=Function("require",m)(y)}const{createComponentInstance:fe,setCurrentRenderingInstance:L,setupComponent:ue,renderComponentRoot:G,normalizeVNode:de,pushWarningContext:Ne,popWarningContext:Ae}=f.ssrUtils;function I(){let e=false;const r=[];return {getBuffer(){return r},push(s){const t=o.isString(s);if(e&&t){r[r.length-1]+=s;return}r.push(s),e=t,(o.isPromise(s)||o.isArray(s)&&s.hasAsync)&&(r.hasAsync=true);}}}function T(e,r=null,s){const t=e.component=fe(e,r,null),n=ue(t,true),i=o.isPromise(n);let l=t.sp;return i||l?Promise.resolve(n).then(()=>{if(i&&(l=t.sp),l)return Promise.all(l.map(p=>p.call(t.proxy)))}).catch(o.NOOP).then(()=>U(t,s)):U(t,s)}function U(e,r){const s=e.type,{getBuffer:t,push:n}=I();if(o.isFunction(s)){let i=G(e);if(!s.props)for(const l in e.attrs)l.startsWith("data-v-")&&((i.props||(i.props={}))[l]="");S(n,e.subTree=i,e,r);}else {(!e.render||e.render===o.NOOP)&&!e.ssrRender&&!s.ssrRender&&o.isString(s.template)&&(s.ssrRender=ce(s.template,e));const i=e.ssrRender||s.ssrRender;if(i){let l=e.inheritAttrs!==false?e.attrs:void 0,a=false,p=e;for(;;){const m=p.vnode.scopeId;m&&(a||(l={...l},a=true),l[m]="");const d=p.parent;if(d&&d.subTree&&d.subTree===p.vnode)p=d;else break}if(r){a||(l={...l});const m=r.trim().split(" ");for(let d=0;d<m.length;d++)l[m[d]]="";}const u=L(e);try{i(e.proxy,n,e,l,e.props,e.setupState,e.data,e.ctx);}finally{L(u);}}else if(e.render&&e.render!==o.NOOP)S(n,e.subTree=G(e),e,r);else {const l=s.name||s.__file||"<Anonymous>";f.warn(`Component ${l} is missing template or render function.`),n("<!---->");}}return t()}function S(e,r,s,t){const{type:n,shapeFlag:i,children:l,dirs:a,props:p}=r;switch(a&&(r.props=me(r,p,a)),n){case f.Text:e(o.escapeHtml(l));break;case f.Comment:e(l?`<!--${o.escapeHtmlComment(l)}-->`:"<!---->");break;case f.Static:e(l);break;case f.Fragment:r.slotScopeIds&&(t=(t?t+" ":"")+r.slotScopeIds.join(" ")),e("<!--[-->"),C(e,l,s,t),e("<!--]-->");break;default:i&1?pe(e,r,s,t):i&6?e(T(r,s,t)):i&64?ye(e,r,s,t):i&128?S(e,r.ssContent,s,t):f.warn("[@vue/server-renderer] Invalid VNode type:",n,`(${typeof n})`);}}function C(e,r,s,t){for(let n=0;n<r.length;n++)S(e,de(r[n]),s,t);}function pe(e,r,s,t){const n=r.type;let{props:i,children:l,shapeFlag:a,scopeId:p}=r,u=`<${n}`;i&&(u+=v(i,n)),p&&(u+=` ${p}`);let m=s,d=r;for(;m&&d===m.subTree;)d=m.vnode,d.scopeId&&(u+=` ${d.scopeId}`),m=m.parent;if(t&&(u+=` ${t}`),e(u+">"),!o.isVoidTag(n)){let y=false;i&&(i.innerHTML?(y=true,e(i.innerHTML)):i.textContent?(y=true,e(o.escapeHtml(i.textContent))):n==="textarea"&&i.value&&(y=true,e(o.escapeHtml(i.value)))),y||(a&8?e(o.escapeHtml(l)):a&16&&C(e,l,s,t)),e(`</${n}>`);}}function me(e,r,s){const t=[];for(let n=0;n<s.length;n++){const i=s[n],{dir:{getSSRProps:l}}=i;if(l){const a=l(i,e);a&&t.push(a);}}return f.mergeProps(r||{},...t)}function ye(e,r,s,t){const n=r.props&&r.props.to,i=r.props&&r.props.disabled;if(!n)return i||f.warn("[@vue/server-renderer] Teleport is missing target prop."),[];if(!o.isString(n))return f.warn("[@vue/server-renderer] Teleport target must be a query selector string."),[];O(e,l=>{C(l,r.children,s,t);},n,i||i==="",s);}const{isVNode:he}=f.ssrUtils;function b(e,r,s){if(!e.hasAsync)return r+K(e);let t=r;for(let n=s;n<e.length;n+=1){const i=e[n];if(o.isString(i)){t+=i;continue}if(o.isPromise(i))return i.then(a=>(e[n]=a,b(e,t,n)));const l=b(i,t,0);if(o.isPromise(l))return l.then(a=>(e[n]=a,b(e,"",n)));t=l;}return t}function z(e){return b(e,"",0)}function K(e){let r="";for(let s=0;s<e.length;s++){let t=e[s];o.isString(t)?r+=t:r+=K(t);}return r}async function F(e,r={}){if(he(e))return F(f.createApp({render:()=>e}),r);const s=f.createVNode(e._component,e._props);s.appContext=e._context,e.provide(f.ssrContextKey,r);const t=await T(s),n=await z(t);if(await J(r),r.__watcherHandles)for(const i of r.__watcherHandles)i();return n}async function J(e){if(e.__teleportBuffers){e.teleports=e.teleports||{};for(const r in e.__teleportBuffers)e.teleports[r]=await z(await Promise.all([e.__teleportBuffers[r]]));}}const{isVNode:ge}=f.ssrUtils;async function Q(e,r){if(e.hasAsync)for(let s=0;s<e.length;s++){let t=e[s];o.isPromise(t)&&(t=await t),o.isString(t)?r.push(t):await Q(t,r);}else X(e,r);}function X(e,r){for(let s=0;s<e.length;s++){let t=e[s];o.isString(t)?r.push(t):X(t,r);}}function R(e,r,s){if(ge(e))return R(f.createApp({render:()=>e}),r,s);const t=f.createVNode(e._component,e._props);return t.appContext=e._context,e.provide(f.ssrContextKey,r),Promise.resolve(T(t)).then(n=>Q(n,s)).then(()=>J(r)).then(()=>{if(r.__watcherHandles)for(const n of r.__watcherHandles)n();}).then(()=>s.push(null)).catch(n=>{s.destroy(n);}),s}function Se(e,r={}){return console.warn("[@vue/server-renderer] renderToStream is deprecated - use renderToNodeStream instead."),Y(e,r)}function Y(e,r={}){const s=new we$1.Readable({read(){}});if(!s)throw new Error("ESM build of renderToStream() does not support renderToNodeStream(). Use pipeToNodeWritable() with an existing Node.js Writable stream instance instead.");return R(e,r,s)}function Re(e,r={},s){R(e,r,{push(t){t!=null?s.write(t):s.end();},destroy(t){s.destroy(t);}});}function _e(e,r={}){if(typeof ReadableStream!="function")throw new Error("ReadableStream constructor is not available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead.");const s=new TextEncoder;let t=false;return new ReadableStream({start(n){R(e,r,{push(i){t||(i!=null?n.enqueue(s.encode(i)):n.close());},destroy(i){n.error(i);}});},cancel(){t=true;}})}function Te(e,r={},s){const t=s.getWriter(),n=new TextEncoder;let i=false;try{i=o.isPromise(t.ready);}catch{}R(e,r,{async push(l){return i&&await t.ready,l!=null?t.write(n.encode(l)):t.close()},destroy(l){console.log(l),t.close();}});}return f.initDirectivesForSSR(),r$3.ssrIncludeBooleanAttr=o.includeBooleanAttr,r$3.pipeToNodeWritable=Re,r$3.pipeToWebWritable=Te,r$3.renderToNodeStream=Y,r$3.renderToSimpleStream=R,r$3.renderToStream=Se,r$3.renderToString=F,r$3.renderToWebStream=_e,r$3.ssrGetDirectiveProps=W,r$3.ssrGetDynamicModelProps=j,r$3.ssrInterpolate=x,r$3.ssrLooseContain=_,r$3.ssrLooseEqual=k,r$3.ssrRenderAttr=N,r$3.ssrRenderAttrs=v,r$3.ssrRenderClass=A,r$3.ssrRenderComponent=B,r$3.ssrRenderDynamicAttr=w,r$3.ssrRenderDynamicModel=D,r$3.ssrRenderList=E,r$3.ssrRenderSlot=q,r$3.ssrRenderSlotInner=V,r$3.ssrRenderStyle=P,r$3.ssrRenderSuspense=H,r$3.ssrRenderTeleport=O,r$3.ssrRenderVNode=S,r$3}

var s$1=qe();

const t$4=publicAssetsURL("/images/bannersup.mp4");

const m$1=o$e.defineComponent({__name:"TopBanner",__ssrInlineRender:true,setup(n){return (p,s,i,t)=>{s(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({class:"w-full h-[45px] bg-blue-700"},t))}><div class="mx-auto h-full w-full flex items-center justify-center"><video width="100%"${s$1.ssrRenderAttr("src",t$4)} autoplay muted loop class="h-full object-contain"></video></div></div>`);}}});

const o$b=publicAssetsURL("/images/banner-top.jpg");

const c$3=o$e.defineComponent({__name:"Navigation",__ssrInlineRender:true,setup(a){return (n,r,i,t)=>{r(`<nav${s$1.ssrRenderAttrs(o$e.mergeProps({class:"bg-white shadow-sm py-4"},t))}><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between"><div class="flex-shrink-0"><img class="h-12 w-auto"${s$1.ssrRenderAttr("src",o$b)} alt="La Economía Droguería"></div><div class="flex-1 max-w-[760px] mx-6"><div class="relative"><input type="text" placeholder="Buscar por productos, marcas y más..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="absolute right-3 top-1/2 transform -translate-y-1/2"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></div></div><div class="flex items-center space-x-6"><div class="flex items-center text-gray-700"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>Barranquilla</span></div><div class="flex items-center text-gray-700"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span>Edgardo</span></div><div class="flex items-center text-gray-700"><svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg><span>Cupones</span></div><div class="relative"><svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span></div></div></div></div></nav>`);}}});

const t$3=publicAssetsURL("/assets/icons/down.svg");

const k=o$e.defineComponent({__name:"MainMenu",__ssrInlineRender:true,setup(c){const r=[{title:"Medicamentos",columns:[[{title:"Vitaminas Minerales y Suplementos",links:[{text:"Multivitamínicos",url:"/categoria/vitaminas-minerales-y-suplementos/multivitaminicos"},{text:"Vitaminas",url:"/categoria/vitaminas-minerales-y-suplementos/vitaminas"},{text:"Suplemento nutricional",url:"/categoria/vitaminas-minerales-y-suplementos/suplemento-nutricional"}]},{title:"Dermatológicos",links:[{text:"Antimicóticos",url:"/categoria/dermatologicos/antimicoticos"},{text:"Antipiojos",url:"/categoria/dermatologicos/antipiojos"},{text:"Irritación",url:"/categoria/dermatologicos/irritacion"}]}]]},{title:"Botiquín",columns:[[{title:"Alivio del dolor",links:[{text:"Cabeza y general",url:"/categoria/alivio-del-dolor/cabeza-y-general"},{text:"Muscular y articular",url:"/categoria/alivio-del-dolor/muscular-y-articular"}]},{title:"Gripa, tos",links:[{text:"Tos",url:"/categoria/gripa,-tos/tos"},{text:"Malestar gripa",url:"/categoria/gripa,-tos/malestar-gripa"},{text:"Garganta",url:"/categoria/gripa,-tos/garganta"}]}]]},{title:"Salud y belleza",columns:[[{title:"Cuidado de la piel",links:[{text:"Tratamiento facial",url:"/categoria/cuidado-de-la-piel/tratamiento-facial"},{text:"Bloqueador",url:"/categoria/cuidado-de-la-piel/bloqueador"}]},{title:"Maquillaje",links:[{text:"Bases y polvos",url:"/categoria/maquillaje/bases-y-polvos"},{text:"Labiales",url:"/categoria/maquillaje/labiales"}]}]]},{title:"Cuidado del bebé",columns:[[{title:"Cuidado del bebé",links:[{text:"Fórmulas infantiles",url:"/categoria/cuidado-del-bebe/formulas-infantiles"},{text:"Pañales",url:"/categoria/cuidado-del-bebe/panales"},{text:"Leches infantiles",url:"/categoria/cuidado-del-bebe/leches-infantiles"},{text:"Pañitos húmedos",url:"/categoria/cuidado-del-bebe/panitos-humedos"}]}]]},{title:"Alimentos y bebidas",columns:[[{title:"Bebidas",links:[{text:"Agua",url:"/categoria/bebidas/agua"},{text:"Gaseosas",url:"/categoria/bebidas/gaseosas"},{text:"Jugos",url:"/categoria/bebidas/jugos"}]},{title:"Alimentos",links:[{text:"Víveres",url:"/categoria/alimentos/viveres"},{text:"Snacks",url:"/categoria/alimentos/snack"}]}]]},{title:"Varios",columns:[[{title:"Aseo hogar",links:[{text:"Aseo hogar",url:"/categoria/aseo-hogar/aseo-hogar"}]},{title:"Mascotas",links:[{text:"Aseo",url:"/categoria/mascotas/aseo"}]}]]}];return (u,e,m,o)=>{e(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({class:"w-full bg-primary text-white"},o))} data-v-fbbe8fa1><div class="max-w-7xl mx-auto" data-v-fbbe8fa1><nav class="flex" data-v-fbbe8fa1><!--[-->`),s$1.ssrRenderList(r,(t,b)=>{e(`<div class="group relative" data-v-fbbe8fa1><button class="flex items-center px-4 py-3 text-sm hover:bg-primary-600" data-v-fbbe8fa1><span data-v-fbbe8fa1>${s$1.ssrInterpolate(t.title)}</span><img${s$1.ssrRenderAttr("src",t$3)} alt="down" class="w-5 h-5 ml-1 invert" data-v-fbbe8fa1></button><div class="absolute left-0 hidden group-hover:block w-[300px] bg-white shadow-lg z-50" data-v-fbbe8fa1><div class="h-1 bg-primary" data-v-fbbe8fa1></div><div class="p-4" data-v-fbbe8fa1><!--[-->`),s$1.ssrRenderList(t.columns,(n,g)=>{e("<div data-v-fbbe8fa1><!--[-->"),s$1.ssrRenderList(n,(i,v)=>{e(`<div class="mb-6 last:mb-0" data-v-fbbe8fa1><h3 class="font-bold text-primary mb-3" data-v-fbbe8fa1>${s$1.ssrInterpolate(i.title)}</h3><div class="flex flex-col space-y-3" data-v-fbbe8fa1><!--[-->`),s$1.ssrRenderList(i.links,(s,f)=>{e(`<a${s$1.ssrRenderAttr("href",s.url)} class="text-sm text-gray-600 hover:text-primary" data-v-fbbe8fa1>${s$1.ssrInterpolate(s.text)}</a>`);}),e("<!--]--></div></div>");}),e("<!--]--></div>");}),e("<!--]--></div></div></div>");}),e("<!--]--></nav></div></div>");}}});

const s=(t,e)=>{const o=t.__vccOpts||t;for(const[r,c]of e)o[r]=c;return o};

const o$a=k.setup;k.setup=(s,n)=>{const e=o$e.useSSRContext();return (e.modules||(e.modules=new Set)).add("components/MainMenu.vue"),o$a?o$a(s,n):void 0};const c$2=s(k,[["__scopeId","data-v-fbbe8fa1"]]);

const o$9=publicAssetsURL("/assets/icons/chevron-left.svg");

const o$8=publicAssetsURL("/assets/icons/chevron-right.svg");

const g$1=o$e.defineComponent({__name:"PromoSlider",__ssrInlineRender:true,setup(f){const a=[{image:"/images/slider1.png",alt:"Día de la Economía - Hasta 20% de descuento"},{image:"/images/slider2.png",alt:"Ofertas especiales en medicamentos"},{image:"/images/slider3.png",alt:"Productos para el cuidado de la salud"},{image:"/images/slider2.png",alt:"Descuentos en productos seleccionados"}],l=o$e.ref(0);return o$e.ref(null),(m,t,u,o)=>{t(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({class:"relative w-full h-[420px] overflow-hidden"},o))} data-v-e20f686b><div class="flex transition-transform duration-500 ease-in-out h-full" style="${s$1.ssrRenderStyle({transform:`translateX(-${l.value*100}%)`})}" data-v-e20f686b><!--[-->`),s$1.ssrRenderList(a,(s,n)=>{t(`<div class="w-full h-full flex-shrink-0" data-v-e20f686b><img${s$1.ssrRenderAttr("src",s.image)}${s$1.ssrRenderAttr("alt",s.alt)} class="w-full h-full object-cover" data-v-e20f686b></div>`);}),t(`<!--]--></div><button class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 focus:outline-none" data-v-e20f686b><img${s$1.ssrRenderAttr("src",o$9)} alt="Previous" class="w-6 h-6 invert" data-v-e20f686b></button><button class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 focus:outline-none" data-v-e20f686b><img${s$1.ssrRenderAttr("src",o$8)} alt="Next" class="w-6 h-6 invert" data-v-e20f686b></button><div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" data-v-e20f686b><!--[-->`),s$1.ssrRenderList(a,(s,n)=>{t(`<button class="${s$1.ssrRenderClass([n===l.value?"bg-primary":"bg-white","w-3 h-3 rounded-full transition-colors duration-200"])}" data-v-e20f686b></button>`);}),t("<!--]--></div></div>");}}});

const e$1=g$1.setup;g$1.setup=(s,r)=>{const t=o$e.useSSRContext();return (t.modules||(t.modules=new Set)).add("components/PromoSlider.vue"),e$1?e$1(s,r):void 0};const f$1=s(g$1,[["__scopeId","data-v-e20f686b"]]);

const o$7=230,d$1=5,g=o$e.defineComponent({__name:"FeaturedProducts",__ssrInlineRender:true,setup(c){const s=[{title:"Productos Estrella",image:"/assets/icons/start/productos-estrella.png",url:"/busqueda/[banner]741"},{title:"Dermocosmética",image:"/assets/icons/start/dermocosmetica.png",url:"/busqueda/[code]142284142285142286142287142288142289142290142291141989142271142275297017297018043048511630511632270048270046270049000708810979109796953421386104386101386102386106386103386105386108386107384322"},{title:"Antigripales",image:"/assets/icons/start/antigripales.png",url:"/categoria/gripa,-tos/malestar-gripa"},{title:"Snacks",image:"/assets/icons/start/snacks.png",url:"/categoria/alimentos/snack"},{title:"Mejores Ofertas",image:"/assets/icons/start/mejores-ofertas.png",url:"/busqueda/[sales]"},{title:"Día de salud y bienestar",image:"/assets/icons/start/dia-de-salud-y-bienestar-gris.png",url:"/#"}],n=o$e.ref(0);return o$e.computed(()=>Math.max(0,(s.length-d$1)*o$7)),(f,r,m,l)=>{r(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({class:"w-full bg-white py-8"},l))} data-v-e60f4efe><div class="max-w-7xl mx-auto px-4" data-v-e60f4efe><div class="relative" data-v-e60f4efe><div class="flex overflow-hidden" data-v-e60f4efe><div class="flex transition-transform duration-500 ease-in-out" style="${s$1.ssrRenderStyle({transform:`translateX(-${n.value}px)`})}" data-v-e60f4efe><!--[-->`),s$1.ssrRenderList(s,(t,i)=>{r(`<div class="w-[220px] mr-2" data-v-e60f4efe><a${s$1.ssrRenderAttr("href",t.url)} class="h-full mt-5 relative flex flex-col items-center text-center" data-v-e60f4efe><div class="circle" data-v-e60f4efe></div><img${s$1.ssrRenderAttr("src",t.image)}${s$1.ssrRenderAttr("alt",t.title)} class="${s$1.ssrRenderClass([{grayscale:i===s.length-1},"img-promo hover:scale-110 transition-transform duration-300"])}" data-v-e60f4efe><span class="${s$1.ssrRenderClass([{"text-gray-400":i===s.length-1,"text-gray-800":i!==s.length-1},"text-sm text-center font-medium"])}" data-v-e60f4efe>${s$1.ssrInterpolate(t.title)}</span></a></div>`);}),r("<!--]--></div></div></div></div></div>");}}});

const o$6=g.setup;g.setup=(s,r)=>{const e=o$e.useSSRContext();return (e.modules||(e.modules=new Set)).add("components/FeaturedProducts.vue"),o$6?o$6(s,r):void 0};const a$3=s(g,[["__scopeId","data-v-e60f4efe"]]);

const a$2=publicAssetsURL("/assets/icons/alarma.png");

const o$5=publicAssetsURL("/assets/icons/cart-button.svg");

const o$4=publicAssetsURL("/assets/icons/left.svg");

const o$3=publicAssetsURL("/assets/icons/right.svg");

/* empty css                                *//* empty css                                            */const _$1=o$e.defineComponent({__name:"ProductSlider",__ssrInlineRender:true,setup(v){const i=o$e.ref([{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true},{id:"370180",title:"Crema Pond’s Clarant B3 Piel Normal A Grasa Porte x 100G",price:29300,content:"unidad a 2,441.67",image:"assets/products/product_1.png",url:"/products/product1/370180",available:true}]),e=s=>new Intl.NumberFormat("es-CO").format(s);return (s,a,u,c)=>{a(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({class:"banner"},c))} data-v-1ccd1fdd><div class="titulo-grande pb-5 font-semibold cursor-default flex justify-start items-center" data-v-1ccd1fdd>Las mejores ofertas <div class="icono" data-v-1ccd1fdd><img${s$1.ssrRenderAttr("src",a$2)} alt="" style="${s$1.ssrRenderStyle({width:"24px"})}" data-v-1ccd1fdd></div> <div class="vertodo" onclick="parent.location=&#39;/busqueda/[sales]&#39;" data-v-1ccd1fdd>Ver todos</div></div><div class="swiper" data-v-1ccd1fdd><div class="swiper-wrapper" data-v-1ccd1fdd><!--[-->`),s$1.ssrRenderList(i.value,t=>{a(`<div class="swiper-slide slide-product" data-v-1ccd1fdd><div class="${s$1.ssrRenderClass([{agotado:!t.available},"product-item"])}" data-v-1ccd1fdd><div class="item" data-v-1ccd1fdd><div class="image" data-v-1ccd1fdd><a${s$1.ssrRenderAttr("href",t.url)} data-v-1ccd1fdd><img${s$1.ssrRenderAttr("src",t.image)}${s$1.ssrRenderAttr("alt",t.title)} data-v-1ccd1fdd></a></div><div class="info" data-v-1ccd1fdd><a${s$1.ssrRenderAttr("href",t.url)} data-v-1ccd1fdd><div class="titulo" data-v-1ccd1fdd>${s$1.ssrInterpolate(t.title)}</div><div class="precio" data-v-1ccd1fdd>$${s$1.ssrInterpolate(e(t.price))}</div>`),t.oldPrice?a(`<div class="antes" data-v-1ccd1fdd>$${s$1.ssrInterpolate(e(t.oldPrice))}</div>`):a("<!---->"),a(`<div class="contenido" data-v-1ccd1fdd>${s$1.ssrInterpolate(t.content)}</div>`),t.discount?a(`<div class="descuento" data-v-1ccd1fdd><b data-v-1ccd1fdd>${s$1.ssrInterpolate(t.discount)}%</b></div>`):a("<!---->"),t.available?a("<!---->"):a('<div class="descuento" data-v-1ccd1fdd>No disponible</div>'),a(`</a><div class="button-add" data-v-1ccd1fdd><button data-v-1ccd1fdd><img${s$1.ssrRenderAttr("src",o$5)} alt="" style="${s$1.ssrRenderStyle({width:"20px","padding-right":"7px"})}" data-v-1ccd1fdd>Agregar </button></div></div></div></div></div>`);}),a(`<!--]--></div><div class="swiper-button-prev-eco bg-primary" data-v-1ccd1fdd><img${s$1.ssrRenderAttr("src",o$4)} alt="" style="${s$1.ssrRenderStyle({width:"20px"})}" data-v-1ccd1fdd></div><div class="swiper-button-next-eco bg-primary" data-v-1ccd1fdd><img${s$1.ssrRenderAttr("src",o$3)} alt="" style="${s$1.ssrRenderStyle({width:"20px"})}" data-v-1ccd1fdd></div></div></div>`);}}});

const e=_$1.setup;_$1.setup=(s,r)=>{const o=o$e.useSSRContext();return (o.modules||(o.modules=new Set)).add("components/ProductSlider.vue"),e?e(s,r):void 0};const f=s(_$1,[["__scopeId","data-v-1ccd1fdd"]]);

const m=publicAssetsURL("/images/banner-medium.png");

const r$1={};function c$1(t,e,s,m$1){e(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({class:"w-full"},m$1))}><img${s$1.ssrRenderAttr("src",m)} alt="Banner Medium" class="w-full h-auto"></div>`);}const o$2=r$1.setup;r$1.setup=(t,e)=>{const s=o$e.useSSRContext();return (s.modules||(s.modules=new Set)).add("components/BannerMedium.vue"),o$2?o$2(t,e):void 0};const l=s(r$1,[["ssrRender",c$1]]);

const o$1=publicAssetsURL("/assets/qr.png");

const t$2=publicAssetsURL("/assets/logo-corto.svg");

const o=publicAssetsURL("/assets/youtube.svg");

const a$1=publicAssetsURL("/assets/instagram.svg");

const t$1=publicAssetsURL("/assets/facebook.svg");

const p$2=publicAssetsURL("/assets/whatsapp.svg");

const t=publicAssetsURL("/assets/mooba.svg");

const r={};function _(s,a,t$3,o$2){a(`<div${s$1.ssrRenderAttrs(o$e.mergeProps({id:"footer bg-white"},o$2))} data-v-f38ee54e><div class="max-w-[1200px] mx-auto" data-v-f38ee54e><div class="flex items-start mb-[30px]" data-v-f38ee54e><div id="links" class="flex justify-between flex-1" data-v-f38ee54e><div data-v-f38ee54e><h3 class="border title" data-v-f38ee54e>La empresa</h3><ul data-v-f38ee54e><li data-v-f38ee54e><a target="_blank" targe="" href="https://www.eticos.com/nosotros?__hstc=143955626.7f7e1381c6b0a7a69a03d52b98203f12.1744666709548.1745360015457.1745380304934.6&amp;__hssc=143955626.5.1745380304934&amp;__hsfp=1053277053" data-v-f38ee54e>Quiénes Somos</a></li><li data-v-f38ee54e><a target="_blank" href="https://www.eticos.com/nosotros?__hstc=143955626.7f7e1381c6b0a7a69a03d52b98203f12.1744666709548.1745360015457.1745380304934.6&amp;__hssc=143955626.5.1745380304934&amp;__hsfp=1053277053" data-v-f38ee54e>Misión, Visión e Historia</a></li><li data-v-f38ee54e><a href="/empresa/etica" data-v-f38ee54e>Ética</a></li><li data-v-f38ee54e><a href="/empresa/sucursales" data-v-f38ee54e>Nuestras Sucursales</a></li></ul></div><div data-v-f38ee54e><h3 class="border title" data-v-f38ee54e>Información</h3><ul data-v-f38ee54e><li data-v-f38ee54e><a href="/empresa/privacidad" data-v-f38ee54e>Aviso de Privacidad</a></li><li data-v-f38ee54e><a href="/empresa/habeas" data-v-f38ee54e>Habeas Data</a></li><li data-v-f38ee54e><a href="/empresa/tyc-campanas" data-v-f38ee54e>Términos y condiciones de promociones</a></li></ul></div><div data-v-f38ee54e><h3 class="border title" data-v-f38ee54e>Club Vida Sana</h3><ul data-v-f38ee54e><li data-v-f38ee54e><a href="/vidasana" data-v-f38ee54e>Beneficios del Club</a></li><li data-v-f38ee54e><a href="/ley2300" data-v-f38ee54e>Ley 2300</a></li><li data-v-f38ee54e><a href="/validarvs" data-v-f38ee54e>Consulta Aliados</a></li></ul></div><div data-v-f38ee54e><h3 class="border title" data-v-f38ee54e>Contacto</h3><ul data-v-f38ee54e><li data-v-f38ee54e><a href="tel:+573157823477" data-v-f38ee54e>315 782 3477</a></li><li data-v-f38ee54e><a href="/pqrs" data-v-f38ee54e>Radicar PQRS</a></li><li data-v-f38ee54e><a href="mailto:servicioalcliente@droguerialaeconomia.com" data-v-f38ee54e><small data-v-f38ee54e>servicioalcliente<br data-v-f38ee54e>@droguerialaeconomia.com</small></a></li></ul></div></div><div class="qr-cont" data-v-f38ee54e><div id="qr-pc" data-v-f38ee54e><h3 class="tx-c" data-v-f38ee54e>¡Descarga gratis la APP!</h3><div class="flex justify-center p-5 rounded-xl shadow-sm" data-v-f38ee54e><img${s$1.ssrRenderAttr("src",o$1)} alt="" style="${s$1.ssrRenderStyle({width:"80px"})}" data-v-f38ee54e><div style="${s$1.ssrRenderStyle({width:"20px"})}" data-v-f38ee54e></div><img${s$1.ssrRenderAttr("src",t$2)} alt="" style="${s$1.ssrRenderStyle({width:"80px"})}" data-v-f38ee54e></div></div><div id="redes" data-v-f38ee54e><h4 style="${s$1.ssrRenderStyle({"margin-bottom":"5px"})}" data-v-f38ee54e>Síguenos en:</h4><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@droguerialaeconomia9474" data-v-f38ee54e><img${s$1.ssrRenderAttr("src",o)} alt="youtube" data-v-f38ee54e></a><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/droguerialaeconomia/" data-v-f38ee54e><img${s$1.ssrRenderAttr("src",a$1)} alt="instagram" data-v-f38ee54e></a><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/drogueriaslaeconomia" data-v-f38ee54e><img${s$1.ssrRenderAttr("src",t$1)} alt="facebook" data-v-f38ee54e></a><a target="_blank" rel="noopener noreferrer" href="https://wa.link/fd1qo8" data-v-f38ee54e><img${s$1.ssrRenderAttr("src",p$2)} alt="whatsapp" data-v-f38ee54e></a></div></div></div><div id="copyright" class="flex items-center justify-between" data-v-f38ee54e><div data-v-f38ee54e> © 2024 Droguería La Economía. Todos los derechos reservados. v5.1 - <a href="/empresa/politicas" style="${s$1.ssrRenderStyle({"text-decoration":"underline"})}" data-v-f38ee54e><b data-v-f38ee54e>Política de privacidad</b></a></div><div id="powered" data-v-f38ee54e><div data-v-f38ee54e>powered by</div><div style="${s$1.ssrRenderStyle({width:"10px"})}" data-v-f38ee54e></div><a href="https://mooba.co/" target="_blank" data-v-f38ee54e><img${s$1.ssrRenderAttr("src",t)} alt="mooba" style="${s$1.ssrRenderStyle({"margin-top":"-8px"})}" data-v-f38ee54e></a></div></div><div class="h-[30px]" data-v-f38ee54e></div></div></div>`);}const d=r.setup;r.setup=(s,a)=>{const t=o$e.useSSRContext();return (t.modules||(t.modules=new Set)).add("components/Footer.vue"),d?d(s,a):void 0};const C=s(r,[["ssrRender",_],["__scopeId","data-v-f38ee54e"]]);

const j=o$e.defineComponent({__name:"app",__ssrInlineRender:true,setup(c){return (p,n,o,R)=>{n('<!--[--><div class="bg-slate-50">'),n(s$1.ssrRenderComponent(m$1,null,null,o)),n(s$1.ssrRenderComponent(c$3,null,null,o)),n(s$1.ssrRenderComponent(c$2,null,null,o)),n('<div class="container mx-auto">'),n(s$1.ssrRenderComponent(f$1,null,null,o)),n(s$1.ssrRenderComponent(a$3,null,null,o)),n(s$1.ssrRenderComponent(l,null,null,o)),n(s$1.ssrRenderComponent(f,null,null,o)),n(s$1.ssrRenderComponent(f$1,null,null,o)),n("</div></div>"),n(s$1.ssrRenderComponent(C,null,null,o)),n("<!--]-->");}}});

const p$1={__name:"nuxt-error-page",__ssrInlineRender:true,props:{error:Object},setup(r){const e=r.error;e.stack&&e.stack.split(`
`).splice(1).map(s=>({text:s.replace("webpack:/","").replace(".vue",".js").trim(),internal:s.includes("node_modules")&&!s.includes(".cache")||s.includes("internal")||s.includes("new Promise")})).map(s=>`<span class="stack${s.internal?" internal":""}">${s.text}</span>`).join(`
`);const o=Number(e.statusCode||500),a=o===404,d=e.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=e.message||e.toString(),m=void 0,l=o$e.defineAsyncComponent(()=>import('./error-404.vue.mjs')),_=o$e.defineAsyncComponent(()=>import('./error-500.vue.mjs')),f=a?l:_;return (s,c,x,g)=>{c(s$1.ssrRenderComponent(o$e.unref(f),o$e.mergeProps({statusCode:o$e.unref(o),statusMessage:o$e.unref(d),description:o$e.unref(i),stack:o$e.unref(m)},g),null,x));}}},u=p$1.setup;p$1.setup=(r,n)=>{const e=o$e.useSSRContext();return (e.modules||(e.modules=new Set)).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue"),u?u(r,n):void 0};

const c={__name:"nuxt-root",__ssrInlineRender:true,setup(f){const l=()=>null,r=P();r.deferHydration(),r.ssrContext.url;const m=false;o$e.provide(o$c,T$2()),r.hooks.callHookWith(t=>t.map(o=>o()),"vue:setup");const d=a$7(),a=d.value&&!r.ssrContext.error;o$e.onErrorCaptured((t,o,n)=>{r.hooks.callHook("vue:error",t,o,n).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u));{const u=r.runWithContext(()=>l$3(t));return o$e.onServerPrefetch(()=>u),false}});const i=r.ssrContext.islandContext;return (t,o,n,u)=>{s$1.ssrRenderSuspense(o,{default:()=>{o$e.unref(a)?o("<div></div>"):o$e.unref(d)?o(s$1.ssrRenderComponent(o$e.unref(p$1),{error:o$e.unref(d)},null,n)):o$e.unref(i)?o(s$1.ssrRenderComponent(o$e.unref(l),{context:o$e.unref(i)},null,n)):o$e.unref(m)?s$1.ssrRenderVNode(o,o$e.createVNode(o$e.resolveDynamicComponent(o$e.unref(m)),null,null),n):o(s$1.ssrRenderComponent(o$e.unref(j),null,null,n));},_:1});}}},p=c.setup;c.setup=(f,l)=>{const r=o$e.useSSRContext();return (r.modules||(r.modules=new Set)).add("node_modules/nuxt/dist/app/components/nuxt-root.vue"),p?p(f,l):void 0};

let a;a=async function(t){const o=o$e.createApp(c),r=R({vueApp:o,ssrContext:t});try{await I(r,l$1),await r.hooks.callHook("app:created",o);}catch(p){await r.hooks.callHook("app:error",p),r.payload.error||=u$2(p);}if(t?._renderResponse)throw new Error("skipping render");return o};const h=e=>a(e);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: h
});

export { $, L$1 as L, O$1 as O, P, s$1 as a, server as b, d$3 as d, ie as i, o$e as o, s, t$9 as t, w$1 as w };
//# sourceMappingURL=server.mjs.map
