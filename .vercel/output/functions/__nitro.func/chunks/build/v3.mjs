import { w, o } from './server.mjs';
import { u as useHead, h as headSymbol } from '../routes/renderer.mjs';

function a(e){const t=e||w();return t?.ssrContext?.head||t?.runWithContext(()=>{if(o.hasInjectionContext())return o.inject(headSymbol)})}function d(e,t={}){const n=a(t.nuxt);if(n)return useHead(e,{head:n,...t})}

export { d };
//# sourceMappingURL=v3.mjs.map
