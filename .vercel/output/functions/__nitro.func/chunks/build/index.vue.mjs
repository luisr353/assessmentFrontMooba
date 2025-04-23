import { o as o$1, a as s$1, i as ie } from './server.mjs';
import 'entities/lib/decode.js';
import 'source-map-js';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:stream';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/utils';
import '@vue/compiler-dom';
import '@vue/runtime-dom';
import '@vue/shared';
import '@vue/server-renderer';
import 'devalue';
import 'unhead/plugins';

const n=o$1.defineComponent({__name:"Features",__ssrInlineRender:true,setup(r){return (i,t,o,s)=>{t(`<div${s$1.ssrRenderAttrs(o$1.mergeProps({class:"py-12 bg-white"},s))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">Características</h2><p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Una mejor manera de trabajar </p><p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"> Descubre cómo nuestras soluciones pueden transformar tu negocio y mejorar la eficiencia de tu equipo. </p></div><div class="mt-10"><div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"><div class="relative"><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></div><div class="ml-16"><h3 class="text-lg leading-6 font-medium text-gray-900">Soluciones personalizadas</h3><p class="mt-2 text-base text-gray-500"> Desarrollamos soluciones a medida que se adaptan perfectamente a las necesidades específicas de tu negocio. </p></div></div><div class="relative"><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div class="ml-16"><h3 class="text-lg leading-6 font-medium text-gray-900">Alto rendimiento</h3><p class="mt-2 text-base text-gray-500"> Optimizamos cada aspecto para garantizar el máximo rendimiento y eficiencia en todas las operaciones. </p></div></div></div></div></div></div>`);}}});

const o=ie("counter",{state:()=>({count:0}),actions:{increment(){this.count++;},decrement(){this.count--;}}});

const d=o$1.defineComponent({__name:"Counter",__ssrInlineRender:true,setup(p){const t=o();return (a,s,u,o)=>{s(`<div${s$1.ssrRenderAttrs(o$1.mergeProps({class:"flex items-center space-x-4"},o))}><button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"> - </button><span class="text-xl font-bold">${s$1.ssrInterpolate(o$1.unref(t).count)}</span><button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"> + </button></div>`);}}});

const x=o$1.defineComponent({__name:"index",__ssrInlineRender:true,setup(i){return (p,r,n$1,o)=>{r(`<div${s$1.ssrRenderAttrs(o)}><div class="container mx-auto px-4 py-8">`),r(s$1.ssrRenderComponent(d,null,null,n$1)),r("</div>"),r(s$1.ssrRenderComponent(n,null,null,n$1)),r("</div>");}}});

const s=x.setup;x.setup=(o,u)=>{const e=o$1.useSSRContext();return (e.modules||(e.modules=new Set)).add("pages/index.vue"),s?s(o,u):void 0};

export { x as default };
//# sourceMappingURL=index.vue.mjs.map
