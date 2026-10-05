import{B as e,C as t,F as n,G as r,K as i,P as a,R as o,S as s,U as c,V as l,W as u,Y as d,b as f,d as p,f as m,g as h,i as g,m as _,p as v,q as y,u as b,v as x,x as S,y as C}from"./jsx-runtime-tQlTBj1C.js";import{a as ee,c as w,g as T,n as E,s as te}from"./errorBoundaries-DTU3uq2_.js";var D=`application/x-www-form-urlencoded`;function O(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function ne(e){return O(e)&&e.tagName.toLowerCase()===`button`}function re(e){return O(e)&&e.tagName.toLowerCase()===`form`}function ie(e){return O(e)&&e.tagName.toLowerCase()===`input`}function ae(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oe(e,t){return e.button===0&&(!t||t===`_self`)&&!ae(e)}function k(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function se(e,t){let n=k(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var A=null;function ce(){if(A===null)try{new FormData(document.createElement(`form`),0),A=!1}catch{A=!0}return A}var le=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function ue(e){return e!=null&&!le.has(e)?(r(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${D}"`),null):e}function de(e,t){let n,r,i,a,o;if(re(e)){let o=e.getAttribute(`action`);r=o?l(o,t):null,n=e.getAttribute(`method`)||`get`,i=ue(e.getAttribute(`enctype`))||D,a=new FormData(e)}else if(ne(e)||ie(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?l(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=ue(e.getAttribute(`formenctype`))||ue(o.getAttribute(`enctype`))||D,a=new FormData(o,e),!ce()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(O(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=D,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}var j=d(y(),1),fe=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{fe&&(window.__reactRouterVersion=`8`)}catch{}function pe({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=j.useState({action:n.action,location:n.location}),o=j.useCallback(e=>{r===!1?a(e):j.startTransition(()=>a(e))},[r]);return j.useLayoutEffect(()=>n.listen(o),[n,o]),j.createElement(g,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}pe.displayName=`unstable_HistoryRouter`;var me=j.forwardRef(function({onClick:t,discover:n=`render`,prefetch:r=`none`,relative:s,reloadDocument:c,replace:l,mask:u,state:d,target:f,to:m,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:_,...v},y){let{basename:x,navigator:C,useTransitions:T}=j.useContext(S),E=typeof m==`string`&&i.test(m),D=o(m,x);m=D.to;let O=b(m,{relative:s}),ne=p(),re=null;if(u){let t=e(u,[],ne.mask?ne.mask.pathname:`/`,!0);x!==`/`&&(t.pathname=t.pathname===`/`?x:a([x,t.pathname])),re=C.createHref(t)}let[ie,ae,oe]=w(r,v),k=xe(m,{replace:l,mask:u,state:d,target:f,preventScrollReset:h,relative:s,viewTransition:g,defaultShouldRevalidate:_,useTransitions:T});function se(e){t&&t(e),e.defaultPrevented||k(e)}let A=!(D.isExternal||c),ce=j.createElement(`a`,{...v,...oe,href:(A?re:void 0)||D.absoluteURL||O,onClick:A?se:t,ref:te(y,ae),target:f,"data-discover":!E&&n===`render`?`true`:void 0});return ie&&!E?j.createElement(j.Fragment,null,ce,j.createElement(ee,{page:O})):ce});me.displayName=`Link`;var he=j.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},u){let d=h(a,{relative:c.relative}),m=p(),g=j.useContext(f),{navigator:_,basename:v}=j.useContext(S),y=g!=null&&Ne(d)&&o===!0,b=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,x=m.pathname,C=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;t||(x=x.toLowerCase(),C=C?C.toLowerCase():null,b=b.toLowerCase()),C&&v&&(C=l(C,v)||C);let ee=b!==`/`&&b.endsWith(`/`)?b.length-1:b.length,w=x===b||!r&&x.startsWith(b)&&x.charAt(ee)===`/`,T=C!=null&&(C===b||!r&&C.startsWith(b)&&C.charAt(ee)===`/`),E={isActive:w,isPending:T,isTransitioning:y},te=w?e:void 0,D;D=typeof n==`function`?n(E):[n,w?`active`:null,T?`pending`:null,y?`transitioning`:null].filter(Boolean).join(` `);let O=typeof i==`function`?i(E):i;return j.createElement(me,{...c,"aria-current":te,className:D,ref:u,style:O,to:a,viewTransition:o},typeof s==`function`?s(E):s)});he.displayName=`NavLink`;var ge=j.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:o,method:s=`get`,action:c,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...m},h)=>{let{useTransitions:g}=j.useContext(S),_=Te(),v=Ee(c,{relative:u}),y=s.toLowerCase()===`get`?`get`:`post`,b=typeof c==`string`&&i.test(c);return j.createElement(`form`,{ref:h,method:y,action:v,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,i=r?.getAttribute(`formmethod`)||s,c=()=>_(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:o,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});g&&n!==!1?j.startTransition(()=>c()):c()},...m,"data-discover":!b&&e===`render`?`true`:void 0})});ge.displayName=`Form`;function _e({getKey:e,storageKey:t,...n}){let r=j.useContext(E),{basename:i}=j.useContext(S),a=p(),o=m();Ae({getKey:e,storageKey:t});let s=j.useMemo(()=>{if(!r||!e)return null;let t=ke(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),j.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${T(JSON.stringify(t||De))}, ${T(JSON.stringify(s))})`}})}_e.displayName=`ScrollRestoration`;function ve(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ye(e){let t=j.useContext(C);return u(t,ve(e)),t}function be(e){let t=j.useContext(f);return u(t,ve(e)),t}function xe(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l,useTransitions:u}={}){let d=v(),f=p(),m=h(e,{relative:o});return j.useCallback(p=>{if(oe(p,t)){p.preventDefault();let t=n===void 0?c(f)===c(m):n,h=()=>d(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l});u?j.startTransition(()=>h()):h()}},[f,d,m,n,r,i,t,e,a,o,s,l,u])}function Se(e){r(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=j.useRef(k(e)),n=j.useRef(!1),i=p(),a=j.useMemo(()=>se(i.search,n.current?null:t.current),[i.search]),o=v();return[a,j.useCallback((e,t)=>{let r=k(typeof e==`function`?e(new URLSearchParams(a)):e);n.current=!0,o(`?`+r,t)},[o,a])]}var Ce=0,we=()=>`__${String(++Ce)}__`;function Te(){let{router:e}=ye(`useSubmit`),{basename:t}=j.useContext(S),n=x(),r=e.fetch,i=e.navigate;return j.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=de(e,t);a.navigate===!1?await r(a.fetcherKey||we(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ee(e,{relative:t}={}){let{basename:n}=j.useContext(S),r=j.useContext(s);u(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),o={...h(e||`.`,{relative:t})},l=p();if(e==null){o.search=l.search;let e=new URLSearchParams(o.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();o.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(o.pathname=o.pathname===`/`?n:a([n,o.pathname])),c(o)}var De=`react-router-scroll-positions`,Oe={};function ke(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:l(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Ae({getKey:e,storageKey:t}={}){let{router:n}=ye(`useScrollRestoration`),{restoreScrollPosition:i,preventScrollReset:a}=be(`useScrollRestoration`),{basename:o}=j.useContext(S),s=p(),c=m(),l=_();j.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Me(j.useCallback(e=>{e.persisted&&(window.history.scrollRestoration=`manual`)},[])),je(j.useCallback(()=>{if(l.state===`idle`){let t=ke(s,c,o,e);Oe[t]=window.scrollY}try{sessionStorage.setItem(t||De,JSON.stringify(Oe))}catch(e){r(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[l.state,e,o,s,c,t])),typeof document<`u`&&(j.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||De);e&&(Oe=JSON.parse(e))}catch{}},[t]),j.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Oe,()=>window.scrollY,e?(t,n)=>ke(t,n,o,e):void 0);return()=>t&&t()},[n,o,e]),j.useLayoutEffect(()=>{if(i!==!1){if(typeof i==`number`){window.scrollTo(0,i);return}try{if(s.hash){let e=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{r(!1,`"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}a!==!0&&window.scrollTo(0,0)}},[s,i,a]))}function je(e,t){let{capture:n}=t||{};j.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Me(e,t){let{capture:n}=t||{};j.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pageshow`,e,t),()=>{window.removeEventListener(`pageshow`,e,t)}},[e,n])}function Ne(e,{relative:r}={}){let i=j.useContext(t);u(i!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ye(`useViewTransitionState`),o=h(e,{relative:r});if(!i.isTransitioning)return!1;let s=l(i.currentLocation.pathname,a)||i.currentLocation.pathname,c=l(i.nextLocation.pathname,a)||i.nextLocation.pathname;return n(o.pathname,c)!=null||n(o.pathname,s)!=null}var Pe=`---\r
title: All Good Things\r
description: Dance as Anna, an aspiring ballerina, in this "body as alt control" webcam tracked game with realtime VFX.\r
image: agt-poster.PNG\r
tags: creative tech, games\r
collaboration: USC Games, various\r
roles: Designer, Touchdesigner Artist, Technical Producer, Writer, Creative Director\r
tools: Unity, Touchdesigner, Mediapipe, WWise, Jira, Github\r
play: https://wangbern.github.io/Scheherazade-Games/allgoodthings/\r
playlabel: website\r
hasLink: true\r
---\r
\r
:::row\r
title: Whiplash meets Black Swan meets Just Dance\r
video: https://youtu.be/Rfpc91IXwlc?si=27mieBn-n1xX2EmX\r
side: right\r
\r
All Good Things is my MFA thesis work at USC. It combines many of my passions, both professional and personal: dance, movement, mental health, education, the magical girl genre, and experimental design.\r
\r
The game culminates in about 30 minute of standing gameplay, and it aims to teach a short phrase of ballet like movement, eventually leading up to players being able to freestyle. The gameplay introduces real dance techniques that both beginners and pros work on, such as use of head, coordination with lower body with upper, and emotional/artistic intention.\r
\r
Beyond the dance based gameplay, the narrative and world building remains accurate to the highly expectant and strict atmosphere of the ballet space I grew up in.\r
\r
This labor of love features full voice acting, orignal music, and a lot of thoughtful and difficult art/tech/design work; the full fantastic team can be found on the game's website.\r
:::\r
\r
:::row\r
title: Game Screenshots Gallery\r
images: agt10.jpg, agt11.jpg, agt12.jpg, agt14.jpg, agt13.jpg, agt16.jpg, agt17.jpg\r
side: full\r
\r
Webcam overlay is stitched ontop of the screenshots to show player's movement at the time of gameplay capture. Gameplay begins and repeats in a studio environment and enters the stage for player performance.\r
\r
:::\r
\r
:::row\r
title: Designing for Dance & Screen\r
images: agtdesign3.jpg, agtdesign1.png, agtdesign2.png\r
side: left\r
\r
How could we condense the investment and time of authentic dance training into a repeatable short experience?\r
\r
I broke the idea of mastery into core aspects: repetition, multitasking, accumulation, risk, and resilience. These traits could sum up what it means to be really great at something. Our game design scaffolds each aspect in sequence so that players iterate, learn, and improve.\r
\r
We use the game screen like a mirror that you would scrutinize in a ballet studio. \r
\r
The avatar shows the player where they are in space and their pose accuracy but does not represent their one to one likeness. Because the narrative and ballet can be extremely tough or serious, I was careful to direct the events towards the character, not the player themselves.\r
:::\r
\r
:::row\r
title: Major Pivots in Development\r
images: agtpivot1.png, agtpivot2.png, Screenshot 2026-05-07 050528.png, Screenshot 2026-04-13 164400.png, Screenshot 2026-04-01 181512.png\r
side: right\r
\r
Because we're already using the screen as a mirror, we deepened the association between screen space and dance moves. Instead of teaching linear, we teach in choreography sections made distinct by the area of the screen (Yichen Pan, Lead Design). When players reach the lower body gameplay, they are primed to move to the correct space with the correct movement. #design\r
\r
In the last level of the game, we removed the body contour guidance, leaving only hand animated lines. This pivot is meant to keep the last level physically accessible, non punitive, and more about expression than technique. The design choice mirrors what happens to many dancers as they get older.\r
\r
:::\r
\r
:::row\r
title: Experimental Pipelines: Unity + Touchdesigner\r
image: agtsystem.png, Screenshot 2026-09-22 213844.png\r
side: left\r
\r
We stream key Touchdesigner VFX to the Unity game scene. These VFX interactions are designed to improve or help player's movement quality or artistic intention. #tech #design\r
\r
In tech art, we found it best to only keep strictly neccessary real time VFX and assets in Touchdesigner for performance on GPU. We had started development before the POPs operators update from Derivative so many of our TD assets are optimized as SOPs or GLSLs.\r
\r
:::\r
\r
:::row\r
title: Player Controller Avatar\r
video: https://youtu.be/r_pR5W2oai8\r
side: right\r
\r
Technology wise, we found latency from the webcam to be unavoidable. We considered multiple changes to the playercontroller, like Live2D or image segmentation. \r
\r
Instead, we loosened the particles surrounding the 3D model as a power-up (pictured later in the video), so that the controller feels better to move even if there is a delay. \r
\r
:::\r
\r
:::row\r
title: a System that Translates & Teaches Dance\r
images: Screenshot 2026-03-03 123659.png, Screenshot 2026-03-24 032121.png, Screenshot 2026-04-21 170922.png\r
side: full\r
\r
Our pipeline for turning dance into a "level" actually could be used on any kind of dance.\r
\r
A video filmed of the dancer is turned into 2D black and white animation frames via script. \r
\r
The frames are filled step by step in a csv, which downloads via script as a scriptable object in Unity. An art shader turns the grames into an outline, with several informational effects.\r
\r
Another much more complicated csv refers to the previous scriptable object, dictating dance moves in sequence with the appropriate realtime VFX, voiceover, and more. #realtime\r
\r
As a result, we have created a high effort but packageable way to translate and experience dance digitally and imaginatively at an unexpected depth.\r
\r
:::\r
\r
:::row\r
title: Production Tools\r
images: Screenshot 2026-09-22 214753.png, Screenshot 2026-09-22 214859.png, Screenshot 2026-09-22 215006.png\r
side: left\r
\r
As lead producer, I managed distribution of information, deadlines, delegation, and work well-being. Alongside an art producer and engineering producer, we managed overall priorities and blockers on Jira but delivered tasks via organized Discord threads. We found this to be most effective for general members' productivity and understanding, reducing as much friction as possible between meetings.\r
\r
We released sprint announcements every two months, detailing the overall goals and time span of the sprints. When the working team got smaller towards the end of each major deadline, we used burndown charts and daily color coded sheets to track progress and to do lists. #production\r
:::\r
\r
:::row\r
title: Production: Full Voiceover &  Orchestra\r
images: IMG_0262.JPG, IMG_0274.JPG, IMG_0328.JPG, Screenshot 2026-09-22 214613.png\r
side: right\r
\r
We are incredibly lucky to have Kensington Tallman voice ANNA and Crispin Freeman voice ROTH, with Sarah Elmaleh as voice director, casting, and external advisor.\r
\r
We also are so honored to partner with Music in Games Society (MGS) for talented musicians to play the original game score.\r
:::\r
\r
:::row\r
title: Psychology of Characters Roth & Anna\r
images: agtnarrative.png, agtanna.png\r
side: full\r
\r
Anna is a talented young ballerina who loves dance but is hard on herself. Roth is her traditionally strict teacher, who sees Anna as his next ballet star. He may mean well, but how much can Anna take before it's too much? #narrative\r
\r
The player as Anna experiences a traditional three act narrative structure, though abstract. The emotional intensity and story events are told through environment art, Anna's 3D model shaders, and audio play.\r
\r
Both writer Darcy and I have core memories and nuanced takeaways about ballet training. We worked initially by reflecting on our shared experiences, writing short specific moments that Anna might experience in class or on stage. We iterate on the dialogue to keep Roth and Anna's motivations and personalities consistent. The script is then further shaped to meet design needs, with voiceover lines categorized as narrative, instructional, or efforts.\r
:::\r
\r
:::row\r
title: Webcam Limits & Accessibility Thoughts\r
images: Screenshot 2026-05-07 072007.png, agtusability.png\r
side: right\r
\r
Using computer webcam presents a lot of limitations, like lighting, set up, tracking fidelity, etc. A core requirement I set for my thesis is that the game needs to be accesible and packageable, specificially playable without additional expensive hardware. \r
\r
We try to mitigate the limitations through a thorough calibration process that smoothly leads players through set up and T-posing. \r
:::\r
\r
:::row\r
title: \r
images: agtplay.jpg, agtplay2.jpg\r
side: full\r
\r
However, the game is best experienced in an installation format with a large screen, lights, and curtains with non black clothing.\r
:::\r
\r
:::row\r
title: Thesis Paper\r
\r
Find my full thesis paper here: https://digitallibrary.usc.edu/Share/57443u0n16lwkk8722itpt12o3g855j2.\r
:::\r
`,Fe=`---\r
title: become you / become better\r
description: Installation of two companion short films of a mother and her daughter.\r
image: becomeyou1.jpg\r
collaboration: Gurmukhi Bevli\r
roles: Director, Editor\r
tools: Premiere, DaVinci Resolve\r
play: https://example.com/become-you\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title:\r
image: \r
side: left\r
\r
In progress.\r
:::\r
`,Ie=`---\r
title: beep boop boop & a root\r
description: Guerilla pop up dance and game about improvisational practices and audience input.\r
image: heidi1.jpg\r
tags: performance\r
collaboration: Heidi Duckler Dance Company, Gurmukhi Bevli\r
roles: Performer, Game Designer\r
tools: Godot\r
play: https://www.gurmukhibevli.com/work-1/beep-boop-boop-and-a-root\r
playlabel: view\r
hasLink: true\r
---\r
\r
:::row\r
title: Day Of Pop Up\r
images: DSC05614.JPG, DSC05626.JPG, DSC06839.JPG, DSC06840.JPG, DSC06857.jpg, DSC06892.JPG\r
side: full\r
\r
:::\r
\r
:::row\r
title: Ebb and Flow Festival Intro\r
video: https://youtube.com/shorts/Gzupv_y8tAk?feature=share\r
side: left\r
\r
:::\r
\r
:::row\r
title: Audience Interaction\r
video: https://youtu.be/4a4Llz_qpW0\r
side: right\r
\r
:::\r
\r
:::row\r
title: \r
images: Screenshot 2026-10-04 232833.png, Screenshot 2026-10-04 232902.png, Screenshot 2026-10-04 232924.png\r
side: left\r
\r
\r
:::\r
`,Le=`---\r
title: Biosignal Blackout\r
description: Realtime performance visuals using dancers' biometric data.\r
image: biosignal1.jpg\r
tags: creative tech, performance\r
collaboration: Mirrored Glass, Shawescape, Andy Arts Center, Ari Sol\r
roles: Interaction Designer, Touchdesigner Artist & Technician\r
tools: Touchdesigner, Python, Respiration Belt & Heartrate Sensors\r
play: https://www.instagram.com/reel/DcRZfeUzQ6J/?stkn=MTc0aHB1aGJhaGtmYQ==\r
playlabel: preview\r
hasLink: true\r
---\r
\r
:::row\r
title: Visual Sketches + Design Prototyping\r
image: Screenshot 2026-09-17 002444.png\r
side: left\r
\r
Working with the lead technologist, I created fast visual sketches based on the DJ's references, and the artistic director's written script.\r
\r
I broke down the available content into dynamics and intensity across time, act 1, act 2, etc. I tested colors and different levels of visual simulatation, pairing them to different acts. For example, because act is meant to be "groovy and light" I sketched soft powdery visuals that move gently. #design\r
\r
In response to these initial prototypes, collaborators expressed their preference for more literal representations for the blood, breath, and heart. \r
\r
:::\r
\r
:::row\r
title: Receiving & Visualizing Biometric Data\r
image: 000A1936.jpg\r
side: right\r
\r
Going towards that direction, I made visuals less abstract: blood cells, ribcage, human shapes, particles that breathe, muscle-like textures with movement like pulsing, spreading, or contracting.\r
\r
We used a respiration belt to measure breathing force. The force was then mapped to a few ranges that powered the visuals. For example, a full breath out rotated and blended 3D models which gave color shifting particles different shapes to move to. Shorter inhales or exhales further changed the rotation and blend.\r
\r
For heart rate measurements, we used Verity Sense Optical Heart Rate Sensor. We only used its heart rate frequency to power things like pulsing color, restarting smear effects, and subtly expanding blood cell sizes. I found that the heart rate data looks persistent and strong if used aggressively and wanted to find ways where it just feels like a heartbeat rather than being too dizzy and stimulating.\r
\r
I included a resting switch that allowed visuals to transition from their idle animation to the live data from sensors.\r
\r
Smaller composite details such as bloom or camera FOV are also affected by the biometric data, giving visuals a more lifelike and subtle feeling when directly powered by performers. #tech\r
:::\r
\r
:::row\r
title: Final Visuals (color pre-adjusted for event site's projectors/lights)\r
images: TDMovieOut.3.png, TDMovieOut.12.png, TDMovieOut.23.png, TDMovieOut.27.png, TDMovieOut.31.png, TDMovieOut.37.png, TDMovieOut.41.png\r
side: full\r
\r
Color, shape, rhythm, and movement of each visuals are driven by the dancers' breathing and heartrates. Adjustment to how intense the mapping is could be made on the fly via the show system during the show. \r
:::\r
\r
:::row\r
title: Showrunner System\r
image: Screenshot 2026-09-17 002031.png\r
side: left\r
\r
I created a showrunner UI screen that links to the entire visual system. The person running the visuals during the show can simply press the respective buttons for each progression; they would also not need to deselect previous buttons. They are also able to view the live biometric data and switch from idle to live (green) for each sensor. Intensity for the sensors can also be adjusted via the sliders. For ease, they also can see what is going out to the projector.\r
\r
At their request, I also included their preshow and end show motion graphics set to loop automatically. I also created a brief logic chop system to catch other use cases, ie. deselecting buttons, preshow or endshow needing to always start at the beginning.\r
\r
All transitions use preset with the Trigger node in Touchdesigner. The clients and I discussed using Midi versus buttons, and buttons were most suitable for the straightforward and linear nature of the show run. #realtime\r
:::\r
\r
:::row\r
title: Touchdesigner POPs\r
image: 000A1334.jpg\r
side: right\r
\r
Touchdesigner came out with the niftiest operator family this past year. It has made using 3D models or instancing significantly more efficient and very fun. Previously, I had been using "hacky" ways like SOPS or images or modeling with points/copy trying to avoid using CPU.\r
\r
With this project, I used POPs operators to try and learn more. In particular, I used Trail, Twist, Blend, and Field.\r
:::\r
\r
:::row\r
title: Projection Mapping & Installation\r
image: 000A1482.jpg\r
side: left\r
\r
Part of role involved advising on projection mapping and installation. I guided on what questions to ask the venue, which physical preparations needed to be considered, and what settings or equipment was necessary depending on their vision. #production\r
\r
I also provided tutorials or explanations as needed on the show system as well as live trouble shooting when not on site.\r
:::\r
`,Re=`---\r
title: Chang Cho\r
description: Live interdisciplinary performance that explores the model minority myth.\r
\r
image: chochang1.JPG\r
tags: performance\r
collaboration: Shirunyu Li (composer)\r
roles: Choreographer, Animator, Writer\r
tools: Live2D Cubism, Procreate, Premiere Pro\r
play: https://www.youtube.com/live/seXAqQ9vWmw?si=LdtV1wqKdyrdasTF&t=2546\r
playlabel: watch\r
hasLink: true\r
---\r
\r
:::row\r
title: Concept & Personal Story\r
image: IMG_6983.PNG\r
side: left\r
\r
This piece presents personal commentary on the representation of Asian characters in the West, with original musical composition by Shirunyu (Rainnie) Li. \r
\r
"Chang Cho" zeros in on what Cho Chang, the token East Asian character in Harry Potter, meant to a young child wanting to belong. "Chang Cho" aims to translate the complex introspection and bitterness of acculturation, while - quite literally - rewriting a literary character to reclaim girlhood. #narrative\r
:::\r
\r
:::row\r
title: Interdisciplinary Elements\r
image: P1580405.JPEG\r
side: right\r
\r
The approximately 8 minute long piece is made up of animation, a monologue, and dance. \r
\r
It begins with a giant projection of a stylized 2D girl commenting on her life and name, Cho Chang being "a few syllables off from a slur." The animation becomes hesitant and confused, quickly fading away when a real performer drops to the stage floor.\r
\r
The performer pushes projected large letters spelling "Cho Chang" apart, using weighted and physical effort. She launches into a heart to heart at the audience, describing how as a kid she wanted to be Hermione Granger or cool Ginny Weasley, instead Cho Chang despite obvious similarities. \r
\r
Her dance grows traditional Chinese characters on screen, and by the end, the performer joins the audience to watch Cho Chang, the character, smile and step away leaving the new name on stage. \r
\r
\r
:::\r
\r
:::row\r
title: Live2D\r
image: IMG_7013.PNG\r
side: left\r
\r
I mainly did traditional art in addition to ballet. This was my first attempt at digital work. I learned firsthand about pipeline: from concept sketches, to separating out the layers for export, to rigging in Live2D, recording key frame animation, and testing the projection on stage. \r
\r
This project foreshadowed my interest in movement and interactive work: I felt fascinated by Live2D's uses (using 2D layers to look 3D and/or VTubing) but decided on keeping the flat 2D animation to better contrast against the dancer.\r
\r
I found the mouth the hardest to rig and animate. And if my goal in the future was for the character to look natural and alive - unlike in this project - I would take and use a lot more video references!\r
\r
\r
:::\r
\r
:::row\r
title: Psychology of the Model Minority Myth\r
image: P1580272.jpg\r
side: right\r
\r
During this quarter long project, I took classes on child development and Asian American studies for one of my double majors, psychology. \r
\r
What I took from the research presented, is that how Asian Americans view ourselves and how we understand other ethnic groups view us impacts our life satisfaction, hopelessness, and self esteem. Though this is an oversimplification, institutions and products like Harry Potter absolutely influences development of the self. \r
\r
Cho Chang, despite being a side character, felt integral to child me and played a part in the otherness I felt growing up Asian. \r
\r
:::\r
`,ze=`---\r
title: Arudinos\r
description: Color changing sensor recognizes objects' colors.\r
image: arduino1.png\r
tags: creative tech\r
collaboration: Solo Project\r
roles: Designer\r
tools: Arduino\r
play: https://example.com/color-change\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: \r
image: \r
side: left\r
\r
In progress.\r
:::\r
\r
`,Be=`---\r
title: Draconian\r
description: Fanfic ARG across platforms Ao3, etsy, Pinterest, and hotmail.\r
image: draconian2.jpg\r
collaboration: Solo Project\r
roles: Writer\r
tools: the Internet\r
play: https://example.com/labubus\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: \r
image: \r
side: left\r
\r
In progress.\r
:::\r
`,Ve=`---\r
title: Earth & Ash\r
description: Death ritual installation experience.\r
image: earthash1.jpg\r
tags: performance\r
collaboration: Christopher Bowles\r
roles: Lead Designer, Writer, Performer\r
tools: Metalwork\r
play: https://example.com/biosignal-blackout\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: \r
image: \r
side: left\r
\r
In progress.\r
:::\r
`,He=`---\r
title: the Journey and Drinks of Elliot Fig\r
description: 2.5D game about a fig headed bartender making friends in space.\r
image: elliotfig1.png\r
tags: games\r
collaboration: Shelby Zhang, Cecil B., Robin Wang\r
roles: Narrative Designer, Programmer\r
tools: Unity\r
play: https://example.com/wind-wisp\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: \r
image: \r
side: left\r
\r
In progress.\r
:::\r
\r
`,Ue=`---\r
title: If Fish Could Scream\r
description: Interactive webcam tracked gallery at the Grand LA.\r
image: fish1.jpg\r
tags: creative tech\r
collaboration: Zeping Sun, the Grand LA\r
roles: Designer\r
tools: Touchdesigner, Mediapipe\r
play: https://vimeo.com/1111814252?fl=pl&fe=sh\r
playlabel: view\r
hasLink: true\r
---\r
\r
:::row\r
title: Concept & Theme\r
image: IMG_3370.png\r
side: left\r
\r
If Fish Could Scream presents the audience a choice: control the fish swimming in water or allow it to peacefully exist. It is often instinctive to impose our will on the beautiful, the trivial, and the ephemeral especially in the pursuit of our dreams...but if a fish could speak, would it scream? \r
\r
This interactive installation uses webcam tracking to call into question how focus and ambition controls our lives.\r
\r
The piece was a part of a greater annual exhibition at the Grand LA, Concrete Oasis, with creative director and professor Lisa Mann.\r
\r
Right across the Walt Disney Concert Hall, the exhibition stayed up for about two weeks, open to the public for two evenings. \r
:::\r
\r
:::row\r
title: Mediapipe for Webcam Detection\r
image: IMG_2161.png\r
side: right\r
\r
The fish swims idlly in place. When the webcam detects a hand, the water darkens and distorts, following the hand's (x, y). If the hand pinches, the fish will deepen in saturation and follow the hand pinch gesture.\r
\r
I use Mediapipe in Touchdesigner and logic nodes connect to the color, noise (water), and fish look at systems. #tech\r
:::\r
\r
:::row\r
title: Touchdesigner System\r
video: https://youtu.be/hgUqKJtW9DY\r
side: left\r
\r
We use a bullet solver CHOP for the fish following pinch gesture.\r
\r
Sprinkle SOP, noise TOP, displace TOP, ramps and feedback loops for the water and fish visuals.\r
\r
This was pre-POPs era, meaning initial use of ParticleGPU slowed down the real time interaction considerably. We amended with SOPs instead during the testing process. #realtime\r
\r
:::\r
\r
:::row\r
title: Emergent Play\r
video: https://youtube.com/shorts/r3c8S2_vnbY?feature=share\r
side: right\r
\r
People begin to play with each other without prompting or instruction: one at the screen, and the other at the webcam.\r
\r
Eventually, people even began to play "monkey in the middle" chasing the fish and water distortion, while their friend avoided them on the webcam control. #design\r
:::\r
\r
:::row\r
title: Projection Mapping & Installation\r
image: IMG_2906.jpg\r
side: left\r
\r
To maximize the webcam detection, I set up selfie lights and marked the area on the floor for guests to step on. This helped the interaction go smoothly as the lights helped the webcam see in the dark gallery (especially at night) and the lines on floor set the distance guests could expect the "magic" to work.\r
\r
We used katanmapper to fill the space. In the future, I rather stick to stoner to keep resolution as sharp as possible. The piece looked best when filling the space from the lights to floor. We worked around sloped floors, and wall fixtures that we covered with white tape.\r
\r
The Grand LA gave us generous time to test pre opening week and we got to test more with the fish's color and shape for visibility and projector distance before finalizing.\r
:::\r
\r
:::row\r
title: Pinch & Move to Interact with the Fish\r
video: https://vimeo.com/1080342827?fl=pl&fe=sh\r
side: full\r
\r
Gallery guest tries out the interaction for the first time.\r
:::\r
\r
:::row\r
title: Gallery\r
images: IMG_3134.PNG, IMG_3135.PNG, If Fish Could Swim.png\r
side: full\r
\r
:::\r
\r
\r
`,We=`---\r
title: I Forget to Avoid\r
description: Geidai Tokyo exchange program and exhibition using webcam tracking tech.\r
image: copy of brain2.png\r
tags: creative tech\r
collaboration: Tokyo Geidai, Samuel Tang\r
roles: Designer, Producer\r
tools: p5js\r
play: https://bernwang.itch.io/i-forget-to-avoid\r
playlabel: play\r
hasLink: true\r
---\r
\r
:::row\r
title: \r
image:\r
side: left\r
\r
In progress.\r
:::\r
`,Ge=`---\r
title: Game Jams\r
description: Great chances in short time to explore new disciplines and fresh fun ideas.\r
image: space_cat.png\r
tags: games\r
collaboration: various\r
roles: various\r
tools: Unity, Godot, Procreate\r
play: https://bernwang.itch.io/\r
playlabel: play\r
hasLink: true\r
---\r
\r
:::row\r
title: the way a berry can vary\r
images: berry 2.png, berry.png\r
side: left\r
roles: Game Designer, Artist\r
tools: Godot, Procreate\r
collaboration: Samuel Tang\r
play: https://bernwang.itch.io/the-way-a-berry-can-vary\r
playlabel: play\r
\r
Endless sidescroller of a transforming blueberry with many selves. Made in four days. #design\r
:::\r
\r
:::row\r
title: Gulp.\r
images: gulp.png, gulp 2.png\r
side: right\r
roles: Level Designer, Producer\r
tools: Godot\r
collaboration: Aeon Walker, Nile Imtiaz, Shelby Zhang, Oliver Mei, Samuel Tang\r
play: https://bernwang.itch.io/gulp\r
playlabel: play\r
\r
Local co-op or PVP of trapped divers who must ingest air and survive until the top. The twist being eat too many fish  transforms you into a sea creature that dies when breathing air. Made in three days.\r
:::\r
\r
:::row\r
title: Serial Killers Anonymous\r
images: cover.png, Buff man close up.PNG\r
side: left\r
roles: Narrative, Producer, Technical Designer\r
tools: Unity, Yarnspinner\r
collaboration: Global Game Jam, various\r
play: https://bernwang.itch.io/serial-killers-anonymous\r
playlabel: play\r
\r
Serial killers attend a support group for those now committed to the legal life. The game starts with a murder, that none of the ex murderers claim. A whodunit where everyone could have done it. Made in three days. #narrative\r
:::\r
\r
:::row\r
title: My Roommate \r
image: Screenshot 2024-12-09 221058.png, Screenshot 2026-09-12 002502.png\r
side: right\r
roles: Main Artist, Writer\r
tools: Godot, Procreate\r
collaboration: USC CTIN 544\r
play: https://shelbziqi.itch.io/my-roommate\r
playlabel: play\r
\r
Each participant switched to their weakest discipline, mine being art. A horror experience where player returns items to the correct dimension to free the ghost and the girl. Made in three days.\r
:::\r
\r
:::row\r
title: a Mishap of Cosmic Proportions\r
images: Screenshot 2024-12-09 220745.png, space cat 1.png\r
side: left\r
roles: Designer\r
tools: Unity\r
collaboration: Shelby Zhang, Oliver Mei, Nile Imtiaz\r
play: https://ariverinegypt.itch.io/a-mishap-of-cosmic-proportions\r
playlabel: play\r
\r
My first game jam ever. Catch the space cat who has taken off with the protagonist's head while avoiding obstacles and switching between the Sky and Land. Made in two days.\r
:::\r
\r
:::row\r
title: Changelings\r
images: cahngee.png, change.png\r
side: right\r
roles: 3D Artist, 2D Artist, Designer\r
tools: Unity\r
collaboration: Indiecade Internship\r
play: https://bernwang.itch.io/changelings\r
playlabel: play\r
\r
Climate change focused theme. A fantasy simulation of an ecosystem of animals taking down a coal factory together. All 3D art assets are modeled by the jam team. Made in six weeks.\r
:::\r
\r
\r
`,Ke=`---\r
title: Kissing Stone\r
description: Tiny installation and projection mapping of movement generated visuals.\r
image: kissingstone2.jpg\r
tags: creative tech\r
collaboration: Solo Project\r
roles: Installation Artist\r
tools: Touchdesigner, Mediapipe, ComplexOp\r
play: https://example.com/kissing-stone\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: \r
image: \r
side: left\r
\r
In progress.\r
:::\r
`,qe=`---\r
title: Labubu Couture\r
description: Labubus not in the consumerism way but in the “15+ hrs custom couture outfit” way.\r
image: labubu1.jpg\r
collaboration: Solo Project\r
roles: Costume Designer\r
tools: recycling, sewing, crafting\r
play: https://example.com/labubus\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: Intro\r
image:\r
side: left\r
\r
I create a story and personality for each Labubu, imagining what they would wear or use in their daily life. It’s a great creative hobby for whimsy. I also often recycle everyday items, like a pen cap, bra insert, or the lone sock. #narrative\r
:::\r
\r
:::row\r
title: Maggie\r
image:\r
side: right\r
\r
A magical monocled swashbuckling enchantress. The sword is made from a barret clip and washers; the cape and brocade suit hand sewn.\r
:::\r
\r
:::row\r
title: Swaggy\r
\r
My first outfit I ever made by upcycling premade clothes. Swaggy is meant to be THE cool girl on the block: the wine bottle is made from a travel tabasco bottle and their shades from the back of a yogurt lid.\r
:::\r
\r
:::row\r
title: Yoki\r
image: \r
side: left\r
\r
This character was commissioned by a friend who both wanted to match with her Labubu and had just watched Kpop Demon Hunters. Yoki has pierced ears, studs on leather, and chic beanie with casual tote bag combo - the ultimate modern Saja Boy.\r
:::\r
\r
:::row\r
title: Benoit Blabubu\r
\r
Commissioned by another friend who is a big fan of the noir genre. It ended up closer to the Knives Out detective but features the most elaborate tailoring yet with a fully functional trench coat that ties and has hidden pockets. The hat is stitched from real leather scraps.\r
:::\r
\r
:::row\r
title: Iccee\r
\r
Of the labubus, this one is my self insert. Iccee is iced out and wearing a dress made from a handkerchief I got during a Japanese exchange program. I loved the print, but never used it as a handkerchief. The crown is made from a single earring, a hoop earring, and other broken dangly jewelry bits.\r
:::\r
\r
:::row\r
title: Nixie & Pixie\r
\r
The twins, Nixie and Pixie, draw from my deepest love of fantasy, especially the classic mermaids and fairies. You can tell I grew up on the old Barbie movies. Nixie’s tail and gills/ears are made from scrap interfacing and a single pant leg of a holographic yoga pant. Pixie features fully beaded ears, a crocheted crossbody, and scavenged acorn buckle. With such tiny wings, she can’t exactly fly but that doesn’t stop her longing for the stars and space.\r
\r
:::\r
`,Je=`---\r
title: Nirvana\r
description: Projection mapping and dance film of a woman enduring heartbreak.\r
image: nirvana1.jpg\r
tags: performance\r
collaboration: Angela Wenyang Hou (director)\r
roles: Motion Capture Choreographer/Consultant, Performer\r
tools: OptiTrack, Motive, Touchdesigner\r
play: https://www.instagram.com/p/DJZwniKys50/?utm_source=ig_web_button_share_sheet\r
playlabel: preview\r
hasLink: true\r
---\r
\r
:::row\r
title: Experimental & Multimedia\r
image: Screenshot 2026-09-11 232614.png\r
side: left\r
\r
Nirvana is a film that uses zero CGI in post production. All effects and dance scenes are captured on the camera as seen in real life. \r
\r
Strong projections turn a giant scrim into a see through screen, behind which the performer engages with the visuals. The visuals throughout the film use a variety of techniques, including face tracking, motion capture, audio reactivity, and 2D animation. #realtime\r
\r
:::\r
\r
:::row\r
title: Gallery\r
images: Screenshot 2026-09-11 231644.png, Screenshot 2026-09-11 231723.png, Screenshot 2026-09-11 231905.png, Screenshot 2026-09-11 232019.png, DSC04158.jpg, DSC04021.jpg, Screenshot 2026-09-11 233117.png, DSC04108.jpg\r
side: full\r
\r
Some scenes required the dancer to match the visuals live, while others were made to match the dancer's set choreography. A few involved real time tracking.\r
:::\r
\r
:::row\r
title: Motion Capture\r
image: IMG_5895.png\r
side: right\r
\r
Months in advance to the filming week, the director and I worked on several sequences coordinating the staging, different tracks of choreography, and visuals.\r
\r
In particular, I broke down the logistics of 1. the meeting: when two dancers meet and one continually bursts into particles, and 2. the "group" dance: where the performer moves between giant women dancers.\r
\r
For example, we recorded the dancers staying in several posed embraces for motion capture. However, the in-person choreography has the male dancer ducking out of sight before strategically returning to a new position. \r
\r
The motion capture animation then syncs with the in-person dance, creating the illusion that the male dancer disappears into particles and reappears elsewhere. #tech\r
:::\r
\r
:::row\r
title: Projection Mapping\r
image: IMG_0926.png\r
side: left\r
\r
We projection mapped onto a giant scrim, on the floor from the ceiling, and directly onto the performer's face using infrared light camera.\r
:::\r
\r
:::row\r
title: Lighting On Set\r
image: IMG_1400.JPG\r
side: right \r
\r
Each shot required meticulous lighting so that the visual and dancer are visible on camera but the scrim and set behind are not.\r
\r
Staging and spacing were also incredibly precise: one shot of a falling figure disappearing into the dancer on the ground required both the dancer and lightning crew to switch positions on the correct timing and hit the optimal angle.\r
:::\r
`,Ye=`---\r
title: Remfall\r
description: Two person flying co-op with procedural and painting mechanics\r
image: remfall1.png\r
tags: games\r
collaboration: Samuel Tang, USC Games, various\r
roles: Technical Designer, Writer, Concept Artist\r
tools: Unity\r
play: \r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title: In Preproduction\r
images: remfall art.png, remfall art 2.png, remfall art 1.png\r
side: full\r
\r
The game is currently starting production in 2026. Though my role on the team is narrative and design, I also did some concept art at the start of preproduction.\r
:::\r
\r
:::row\r
title: World Building\r
images: Screenshot 2026-10-04 214816.png, Screenshot 2026-10-04 214748.png, Screenshot 2026-10-04 214612.png, Screenshot 2026-10-04 214526.png\r
side: full\r
\r
\r
I gathered references for the game specifically to flesh out the main coloring mechanic, possible narrative, and how the world could look or feel. I blockmeshed a first level to guage scope, engineering needs, and check map size.\r
:::\r
\r
:::row\r
title: Designing for Connection & Creatures\r
images: Screenshot 2026-10-04 214440.png, Screenshot 2026-10-04 214355.png\r
side: full\r
\r
Documented findings and categorized design aspects per digital or physical prototype on Figma I focused mainly on the painting and creatures systems.\r
:::\r
`,Xe=`---\r
title: I'm Small but my Heart is Big!\r
description: Small elf Maia on fast moving snail falls in love and saves giant tree nymph Opal.\r
image: smallheartbig.png\r
tags: games\r
collaboration: Oliver Mei, USC CTIN 532\r
roles: Designer, Programmer\r
tools: Unity, FMOD\r
play: https://bernwang.itch.io/im-small-but-my-heart-is-big-demo\r
playlabel: demo\r
hasLink: true\r
---\r
\r
:::row\r
title: \r
image:\r
side: left\r
\r
In progress.\r
:::\r
`,Ze=`---\r
title: Sylph\r
description: Phone AR experience with physical scrapbook.\r
image: sylph.jpg\r
collaboration: USC CTIN 583\r
roles: Developer\r
tools: Unity, Motive, OptiTrack\r
play: https://example.com/labubus\r
playlabel: play\r
hasLink: false\r
---\r
\r
:::row\r
title:\r
image: \r
side: left\r
\r
In progress,\r
:::\r
`,Qe=`---\r
title: WACsmash\r
description: Series of dance shows confronting relevant social topics post 2020.\r
image: Wacsmash1.JPG\r
tags: performance\r
collaboration: UCLA, various\r
roles: Lead Producer\r
\r
play: https://www.youtube.com/live/wEE9_GrA2xg?si=fLv2mPoYgye2Iawj\r
playlabel: watch\r
hasLink: true\r
---\r
\r
:::row\r
title: Managing 90+ Cast & Crew\r
image: DSC08493.JPG\r
side: left\r
\r
WACsmash returned to its 20 years long tradition after the COVID-19 pandemic, as UCLA's largest annual dance show and gallery. This year featured 11 choreographers, 8 visual artists, and 85 total performers, in addition to lighting, video, and production crew. \r
\r
As a producer, I facilitated and led year long communcations between each section, often anticipating problems before they arose and navigating conflicting needs between production and individuals.\r
\r
:::\r
\r
:::row\r
title: COVID Challenges\r
image: DSC09299.JPG\r
side: right\r
\r
Returning to the live magic of in person shows required unprecedented coordination and new considerations, including weekly testing and hybrid accomodations.\r
\r
For rehearsals, I tracked in person attendance and organized COVID-19 testing each week. Because each of the 11 dance pieces included different and overlapping casts with separate rehearsal times, I maintained meticulous monitoring and eventually sought a COVID-19 Compliance Officer certification from Health Education Services to inform future decisions. \r
\r
I felt strongly commited to these guidelines so that the community could share the stage again. \r
\r
:::\r
\r
:::row\r
title: Long Term Logistics\r
image: DSC09118.JPG\r
side: left\r
\r
We successfully held two evening performances, a matinee, and livestream. The hour and half long shows were a culmination of many peoples' hard work over a year's time.\r
\r
On my end, I began with the other producers during the summer before production began. We concepted several themes, discussing which would resonate yet offer enough possibilities to our geneneration of creatives. We chose "To Whom It May Concern" an open call to share underrepresented stories and voices in the performing arts. \r
\r
Then, we started the processes to cast choreographers, dancers, artists, and guest performers. I researched the past dates of these action items and reached out to alumni for feedback on the timing. With more information, I adjusted both our internal and external deadlines to best serve the community. For example, it was important to give choreographers enough time to review dancers submissions but retain time after initial decisions to balance casting, all the while communicating via website and socials on progress. \r
\r
One of my key roles ended up being the person to flag major and minor obstacles in advance, looking ahead to ensure smooth sailing. I took extra care to remind contributors to document costs early, collecting receipts for our Financial Advisor's eventual reimbursements. In addition, I headed our fundraising and grant applications, attending funding hearings with our Student Finances Manager raising approximately 13k from four separate organizations. #production\r
\r
:::\r
\r
:::row\r
title: Artist Selection & Collaboration\r
image: DSC08871.JPG\r
side: right\r
\r
For artist and choreographer selections, I held audition and interview slots. Some questions we asked our choreographers: \r
\r
What do you bring to the table when someone has the same idea/subject as you?\r
\r
If multiple mediums, please describe the relationship between elements.\r
\r
How do you plan to select your dancers at our auditions?\r
\r
:::\r
\r
:::row\r
title: Real World Voices\r
image: DSC08593.JPG\r
side: left\r
\r
I enjoyed advocating and helping create a space for conversation and change. Social justice as a term is broad, but mainly we hoped students got a formal stage to express their personal real world experiences and perspectives. This was and is still incredibly relevant, as for performing artists their professional voice is creative and ther creative voice is political.\r
:::\r
`,$e=`---\r
title: the Wind and the Wisp\r
description: Grief game where players blow via microphone to help rebuild a garden.\r
image: windwisp1.png\r
tags: games\r
collaboration: Sammy Chuang, USC Games, various\r
roles: Lead Designer\r
tools: Unity, ClickUp\r
play: https://store.steampowered.com/app/3729770/The_Wind_and_the_Wisp/\r
playlabel: play\r
hasLink: true\r
---\r
\r
:::row\r
title: Concept & Experience Goals\r
images: Screenshot 2026-10-04 004443.png, WindAndTheWisp-Gameplay-Screenshot-7-1920x1080.png, 20250314_Art_IntroHill.png, 20250314_Art_FMNIntroSetDressing.png, WindAndTheWisp-Gameplay-Screenshot-13-1920x1080.png\r
side: full\r
\r
The game uses the microphone as its core interaction: blowing manifests in the world as the wind personified, helping a ghost character, the Wisp, rebuild a dilapidated garden. The wisp and the wind find flowers and replant them in their garden together.\r
\r
The game director Sammy Chuang focused the team on how phyiscal breathing connects with emotions involved in the process of grief, including depression, anger, numbness, and acceptance. You can play fully with blowing or pressing space bar as an accomodation. \r
\r
As design lead, I also had a personal connection with the concept, having lost a friend to self exit. The team researched and worked to translate somatic feelings of personal grief into a game experience, using minimal text and dialogue. It was also important to us to express a positive outlook on life after loss.\r
:::\r
\r
:::row\r
title: A Streamer Reacts to Our Final Level\r
video: https://youtu.be/DV452pMwaVM?si=U5BYfybH2ywBkEuk&t=1110\r
side: full\r
\r
Thumbnail used by the streamer and streamer playthrough is NOT affiliated with the Wind and the Wisp dev team! \r
\r
Found video with delight one day when scrolling Youtube. \r
\r
This last level represents acceptance or the sigh of relief that happens when you reach an end. I had the scene of Narnia's Reepicheep paddling to the world's end amongst miles of lilies in mind from the conception to finish of the level. I hoped to create feelings of wonder, bittersweetness, and joy in the player. \r
:::\r
\r
:::row\r
title: Designing Within Microphone Limitations\r
video: https://youtube.com/shorts/GyZ3IQIq778 \r
side: right\r
\r
The final interactions and puzzles using blowing are simple, physical obstacles, lock and key, etc. Originally, we had plans to track different breathing rhythms associated with each flower and its grief emotion. Players would blow to trigger the wind, but to trigger a flower's unique ability had to breathe in the correct pattern, such as box breathing (in for four, hold for four, out for four).\r
\r
\r
:::\r
\r
:::row\r
title: \r
image: Screenshot 2026-10-03 005412.png\r
side: full\r
\r
I prototyped a first iteration, finding that box breathing, sustained breathing, and a sigh of relief felt effective to players. However, the microphone had trouble detecting patterns accurately enough, so we regrouped, tying the impact of a player's breathing to the emotion rather than the breathing itself. For example, blowing to break rocks is explosive and sudden - like anger. \r
:::\r
\r
\r
:::row\r
title: Tutorialization & Blockmesh\r
images: Screenshot 2026-10-03 003603.png, Screenshot 2026-10-03 003523.png, \r
side: left\r
\r
Levels, particularly the first intro level that set up gameplay precedents, went through several iterations. I identified the aspects of the game we needed to teach the player, starting playtests early. I also brainstormed ways to show what can be blown in the world and how we can represent the blow type/stregnth. Along with the UX designer's iterations, this became a dandelion/flower HUD that appeared whenever the player could interact with the game world by mic.\r
:::\r
\r
:::row\r
title: \r
image:  Screenshot_2024-09-03_224646.png, Screenshot 2026-10-03 005121.png\r
side: full\r
\r
For level design, we did a lot of internal playtests between designers to check understanding and experience goals, communicating with sketches and notes overtop screenshots. As levels (or features) strengthened, I passed levels to the director and lead usability along with prepped design questions for players to answer. \r
\r
The director and I were also quick to eliminate tutorialization ideas that proved unproductive; I often did physical or "janky" fast first digital prototypes to check the idea's potential - before using any of our limited resources.\r
\r
My suggestion for wisp's autopathing was an effective example of this. It became clear very fast that people thought the wisp's movement meant a cutscene and this issue led to a large forumlative discussion during production: are players the wind or the wisp or both? In hindsight the answer is obvious (players are the wind), but the prototype clarified and unified the team. #design\r
:::\r
\r
:::row\r
title: Level Iteration & Camera Work\r
images: Screenshot 2026-10-03 005313.png\r
side: right\r
\r
On top of the gameplay iteration, designers came up with new ideas that often required more internal tooling. Part of my responsibility involved documenting and prioritizing tool needs for engineers. \r
\r
For example, the "forget me not" level had unique camera zone needs: the designer needed to place several overlapping zones but this tooling would not serve the rest of the game. Instead, we placed the designer directly with an engineer for the final level iterations and directly turned zones on and off via script during gameplay. This way, we wouldn't place more pressure on engineering already focused on polishing the mic detection.\r
\r
Because the game is linear with little text, much of the storytelling comes from the camera. I took great care in showing details with framing or more extreme emotions with camera movement. For example, showing an empty sky before the level begins to end the level on a shot full of stars. \r
\r
\r
:::\r
\r
:::row\r
title: \r
video: https://youtu.be/0spRb1ex4QU\r
side: full\r
\r
First digital mock up of the last quest, to retrieve the Lily of the Valley, the flower able to "unpetrify" stone. \r
:::\r
\r
:::row\r
title: \r
video: https://youtu.be/VeBhqaJvenw\r
side: full\r
\r
The same level right before passing to Art for set dressing. \r
\r
I worked directly with another designer to finalize the level, combining a boat feature from another part of the game that got cut. We also documented our vision for Art and Audio, for the boat shader and musical details. The boat is meant to be part star, which explains how it too unpetrifies and flies carrying the wisp along. Unlike other levels, the wisp and the wind move together on a track.\r
:::\r
\r
:::row\r
title: Design & Narrative Control Scope\r
images: Screenshot 2026-10-03 005351.png, Screenshot 2026-10-03 005832.png\r
side: left\r
\r
One of my favorite things I learned during this production is how design controls scope. As indie and student devs, we had such limited resources and time with a lot of ambitious experience goals. We wanted to progress the garden rebuilding, the wind and the wisp's friendship, the breathing mechanic's evolution, the different worlds of the flower, and more - all without using text or dialgoue. \r
\r
I learned to make informed compromises and trust my gut regarding cutting or combining features, finding a taste for elegant and subtractive design. #production One of my strongest choices involved combining a paper boat point of interest, a huge favorite of the director's, with our existing dandelion feature. We used it's spline to carry the wisp into the air on a track. This took out our scope creep (having to iterate on the boat's control and location), while strengthing the experience and story.\r
:::\r
\r
:::row\r
title: With the Director\r
image: IMG_5154.jpg \r
side: right\r
\r
Towards the end of production, the director and I made a huge cut: anything that had not reached a certain level of confidence or done-ness got nixed. This left some holes in the narrative and design that took some creative rearranging to solve. We discussed different concerns and I proposed a few options of reshuffled levels and puzzles, including further simplifying some design to alleviate any extra burdens on engineering and art. \r
\r
I made a simple documentation for designers detailing the action steps of the entire final game.\r
\r
Throughout the year, including the last stages of production, I sketched during meetings while I talked to better explain thoughts and proposals to the director or other collaborators. In this way, people could easily circle or point at the sketches.\r
:::\r
\r
:::row\r
title: \r
video: https://youtu.be/YmSrlb7GSpM\r
side: full\r
\r
During preproduction, so much felt unknown. I made an animatic out of Instagram stories to check my understanding of the director's vision. In hindsight, so much has evolved and it feels profoundly fulfilling to see the progression of the project.\r
:::\r
\r
:::row\r
title: With Other Leads & our Designers\r
images: Screenshot 2026-10-03 003736.png, Screenshot 2026-10-03 003801.png\r
side: right\r
\r
I grew a great deal being on a large game team, as a lead and a designer. I enjoyed collaborating and facilitating, finding my strengths and weaknesses. I gathered an arsenal of different ways to communciate, from sketching to mirroring others to paintovers. I also felt well prepared for future productions; I got a lot of practice quickly summarizing the most relevant information different members of the team needed at that moment especially for the current task.\r
:::\r
\r
\r
`,et=`/assets/000A1334-cXfDEhGv.jpg`,tt=`/assets/000A1482-ubE-nvZG.jpg`,nt=`/assets/000A1936-DiOyMkiw.jpg`,rt=`/assets/20250314_Art_FMNIntroSetDressing-B15dPS5t.png`,it=`/assets/20250314_Art_IntroHill-CZIlGgn8.png`,at=`/assets/Buff%20man%20close%20up-B-h0iUrX.PNG`,ot=`/assets/Copy%20of%20brain2-BzfP8SR3.png`,st=`/assets/DSC04021-Dv4LuQWf.jpg`,ct=`/assets/DSC04022-C73fRovW.jpg`,lt=`/assets/DSC04108-B55Cjvi9.jpg`,ut=`/assets/DSC04158-qFNzLALT.jpg`,dt=`/assets/DSC05614-BgczwbiN.JPG`,ft=`/assets/DSC05626-D1XvHolX.JPG`,pt=`/assets/DSC06839-_pWj3o8F.JPG`,mt=`/assets/DSC06840-DAezf5yz.JPG`,ht=`/assets/DSC06857-DhpVUr5I.jpg`,gt=`/assets/DSC06892-DZdnyp3G.JPG`,_t=`/assets/DSC08493-gzrExA5N.JPG`,vt=`/assets/DSC08593-cngcxTQT.JPG`,yt=`/assets/DSC08871-CwzK-94o.JPG`,bt=`/assets/DSC09118-icZEXuwf.JPG`,xt=`/assets/DSC09299-BZ7unHFo.JPG`,St=`/assets/IMG_0262-OwL-8hpq.JPG`,Ct=`/assets/IMG_0274-Bvgm4GHj.JPG`,wt=`/assets/IMG_0328-DMvT1lG5.JPG`,Tt=`/assets/IMG_0926-E-8hLd7-.png`,Et=`/assets/IMG_1400-KlYd9Eyo.JPG`,Dt=`/assets/IMG_2161-DoneqWlB.png`,Ot=`/assets/IMG_2906-ml8NBomS.jpg`,kt=`/assets/IMG_3134-BZkV2YJC.PNG`,At=`/assets/IMG_3135-ClWzK9As.PNG`,jt=`/assets/IMG_3370-Cj2wbhqt.png`,Mt=`/assets/IMG_3432-DrY8aKoc.JPG`,Nt=`/assets/IMG_5154-DvivrpuZ.jpg`,Pt=`/assets/IMG_5895-Bao64Pab.png`,Ft=`/assets/IMG_6983-C3wtEatp.PNG`,It=`/assets/IMG_7013-Bf_eT_TM.PNG`,Lt=`/assets/If%20Fish%20Could%20Swim-TEmxvx2m.png`,Rt=`/assets/P1580272-2oF-w1YT.jpg`,zt=`/assets/P1580405-DlPy0tsx.JPEG`,Bt=`/assets/Screenshot%202024-12-09%20220745-CTHqqeBy.png`,Vt=`/assets/Screenshot%202024-12-09%20221058-Duls4hPQ.png`,Ht=`/assets/Screenshot%202026-03-03%20123659-DJq9aCVG.png`,Ut=`/assets/Screenshot%202026-03-24%20032121-C2hzuHla.png`,Wt=`/assets/Screenshot%202026-04-01%20181512-vfxTjvHU.png`,Gt=`/assets/Screenshot%202026-04-13%20164400-BXx5Ij6P.png`,Kt=`/assets/Screenshot%202026-04-21%20170922-D4qihfTN.png`,qt=`/assets/Screenshot%202026-05-07%20050528-CFEOQNbq.png`,Jt=`/assets/Screenshot%202026-05-07%20072007-DRjIwtIT.png`,Yt=`/assets/Screenshot%202026-09-11%20231644-D0eJnLVU.png`,Xt=`/assets/Screenshot%202026-09-11%20231723-DFmVXH1O.png`,Zt=`/assets/Screenshot%202026-09-11%20231905-gjfLHAM1.png`,Qt=`/assets/Screenshot%202026-09-11%20232019-DA0CTSEM.png`,$t=`/assets/Screenshot%202026-09-11%20232614-g2tXpxEB.png`,en=`/assets/Screenshot%202026-09-11%20233117-ByhgNlRW.png`,tn=`/assets/Screenshot%202026-09-12%20002502-o9tW_1l7.png`,nn=`/assets/Screenshot%202026-09-17%20002031-BAW0bj9r.png`,rn=`/assets/Screenshot%202026-09-17%20002444-DS7LS-qw.png`,an=`/assets/Screenshot%202026-09-22%20213844-VjzjBBxN.png`,on=`/assets/Screenshot%202026-09-22%20214613-BxHcNxr-.png`,sn=`/assets/Screenshot%202026-09-22%20214753-DrT7SeNb.png`,cn=`/assets/Screenshot%202026-09-22%20214859-BOerdV0g.png`,ln=`/assets/Screenshot%202026-09-22%20215006-CTgOui5Q.png`,un=`/assets/Screenshot%202026-10-03%20003523-DjeKEdfQ.png`,dn=`/assets/Screenshot%202026-10-03%20003603-tgtgqI1y.png`,fn=`/assets/Screenshot%202026-10-03%20003736-Ci-KGtmt.png`,pn=`/assets/Screenshot%202026-10-03%20003801-CSPNjond.png`,mn=`/assets/Screenshot%202026-10-03%20005121-C0W5izJZ.png`,hn=`/assets/Screenshot%202026-10-03%20005313-8CxH5IZ7.png`,gn=`/assets/Screenshot%202026-10-03%20005351-DIg9Lpuc.png`,_n=`/assets/Screenshot%202026-10-03%20005412-ffxU4dbT.png`,vn=`/assets/Screenshot%202026-10-03%20005832-IhIFEb9r.png`,yn=`/assets/Screenshot%202026-10-04%20004443-4yTUn6DQ.png`,bn=`/assets/Screenshot%202026-10-04%20214355-DdGjeLQ_.png`,xn=`/assets/Screenshot%202026-10-04%20214440-DaJGBQzP.png`,Sn=`/assets/Screenshot%202026-10-04%20214526-DEIhXc-z.png`,Cn=`/assets/Screenshot%202026-10-04%20214612-B0G2ic3u.png`,wn=`/assets/Screenshot%202026-10-04%20214748-C0Poo_As.png`,Tn=`/assets/Screenshot%202026-10-04%20214816-DhLiuO3X.png`,En=`/assets/Screenshot%202026-10-04%20232833-CpB-E4BG.png`,Dn=`/assets/Screenshot%202026-10-04%20232902-9df2l2N9.png`,On=`/assets/Screenshot%202026-10-04%20232924-DV775EDx.png`,kn=`/assets/Screenshot_2024-09-03_224646-ChmhopQb.png`,An=`/assets/TDMovieOut.12-Bv9iIv_g.png`,jn=`/assets/TDMovieOut.18-HXYR0kj7.png`,Mn=`/assets/TDMovieOut.23-BOO_ol0U.png`,Nn=`/assets/TDMovieOut.27-CTnAr5O5.png`,Pn=`/assets/TDMovieOut.3-DfJ3oPQO.png`,Fn=`/assets/TDMovieOut.31-C68LllLZ.png`,In=`/assets/TDMovieOut.37-BUlXMahC.png`,Ln=`/assets/TDMovieOut.41-C56i24JQ.png`,Rn=`/assets/TDMovieOut.42-BUA08FLI.png`,zn=`/assets/Wacsmash1-90LbhWqr.JPG`,Bn=`/assets/WindAndTheWisp-Gameplay-Screenshot-13-1920x1080-Bj_xYVxh.png`,Vn=`/assets/WindAndTheWisp-Gameplay-Screenshot-7-1920x1080-DWjFOPav.png`,Hn=`/assets/aboutme-BFs_A9lw.png`,Un=`/assets/agt-poster-Dto1EbHG.PNG`,Wn=`/assets/agt10-d4eI7q3f.jpg`,Gn=`/assets/agt11-8Z2MUbsy.jpg`,Kn=`/assets/agt12-BzcvCaqc.jpg`,qn=`/assets/agt13-BUKrQxys.jpg`,Jn=`/assets/agt14-i6i1CY6j.jpg`,Yn=`/assets/agt15-Do9x_0BD.jpg`,Xn=`/assets/agt16-CkqRxOn_.jpg`,Zn=`/assets/agt17-Nbgs2eBx.jpg`,Qn=`/assets/agtanna-X2OHVlqq.png`,$n=`/assets/agtdesign1-WUq5XhJ2.png`,er=`/assets/agtdesign2-BHf4kXNA.png`,tr=`/assets/agtdesign3-CVLZotLd.jpg`,nr=`/assets/agtnarrative-Sj58d_9u.png`,rr=`/assets/agtpivot1-DOU9RiE9.png`,ir=`/assets/agtpivot2-Cgt3YEO4.png`,ar=`/assets/agtplay-DiUOyJhm.jpg`,or=`/assets/agtplay2-Cp3PKbYP.jpg`,sr=`/assets/agtsystem-C_SA8hAj.png`,cr=`/assets/agtusability-FS5SP549.png`,lr=`/assets/arduino1-CUaIGBlK.png`,ur=`/assets/becomeyou1-CKrrJaJp.jpg`,dr=`/assets/berry%202-VbUEoOmA.png`,fr=`/assets/berry-FbQJ8wd9.png`,pr=`/assets/biosignal1-Cruq6J9C.jpg`,mr=`/assets/cahngee-BNDSd4Vi.png`,hr=`/assets/change-C3ldupbd.png`,gr=`/assets/chochang1-BolLvSAM.JPG`,_r=`/assets/cover-B3AAWIzC.png`,vr=`/assets/draconian1-D6HaZOYb.jpg`,yr=`/assets/draconian2-Cc6AXok_.jpg`,br=`/assets/earthash1-DpKiKR3y.jpg`,xr=`/assets/elliotfig1-6mMOPFnT.png`,Sr=`/assets/fish1-BAsGZ9ew.jpg`,Cr=`/assets/fishes-DYFQiSB0.jpg`,wr=`/assets/fishesss-Bpgn5QRY.jpg`,Tr=`/assets/forgetavoid1-Rk3ZJeE8.jpg`,Er=`/assets/forgetavoid1-DpYAiBca.png`,Dr=`/assets/gamejams1-DPiGAFqj.jpg`,Or=`/assets/gamejams2-3F6pJhZl.jpg`,kr=`/assets/gamejams3-kKGT0nFM.png`,Ar=`/assets/gulp%202-D_stX5u2.png`,jr=`/assets/gulp-MvxYLXas.png`,Mr=`/assets/heidi1-D4KqB8Xg.jpg`,Nr=`/assets/kissingstone1-C3NFeX4V.jpg`,Pr=`/assets/kissingstone2-BVLwLcKT.jpg`,Fr=`/assets/labubu1-B6JBH8Th.jpg`,Ir=`/assets/nirvana1-_aXLcdYv.jpg`,Lr=`/assets/portfolio-opened-DbmJ7Zax.png`,Rr=`/assets/portfolio-qY9hcGlh.png`,zr=`/assets/project-CvLSYTbk.png`,Br=`/assets/remfall%20art%201-MozGI0TA.png`,Vr=`/assets/remfall%20art%202-Dnabw7pk.png`,Hr=`/assets/remfall%20art-CDdfNtKy.png`,Ur=`/assets/remfall1-BMIrEhb1.png`,Wr=`/assets/smallheartbig-yp8o8Tp8.png`,Gr=`/assets/space%20cat%201-lIjrpRPE.png`,Kr=`/assets/space_cat-BtKP6rQ-.png`,qr=`/assets/sylph-BqQZ5LVS.jpg`,Jr=`/assets/windwisp1-BhOZ7KOE.png`;function Yr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var M=Yr();function Xr(e){M=e}var N={exec:()=>null};function P(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function F(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(I.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Zr=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),I={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:P(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:P(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:P(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:P(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:P(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:P(e=>RegExp(`^ {0,${e}}>`))},Qr=/^(?:[ \t]*(?:\n|$))+/,$r=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ei=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,L=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ti=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ni=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ri=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ii=F(ri).replace(/bull/g,ni).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ai=F(ri).replace(/bull/g,ni).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),oi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,si=/^[^\n]+/,ci=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,li=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,ci).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ui=F(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,ni).getRegex(),R=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,di=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,fi=F(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,di).replace(`tag`,R).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pi=e=>F(oi).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),mi=pi(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),hi=pi(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),gi={blockquote:F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,hi).getRegex(),code:$r,def:li,fences:ei,heading:ti,hr:L,html:fi,lheading:ii,list:ui,newline:Qr,paragraph:mi,table:N,text:si},_i=F(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),vi={...gi,lheading:ai,table:_i,paragraph:F(oi).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,_i).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex()},yi={...gi,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,di).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:N,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(oi).replace(`hr`,L).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ii).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},bi=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xi=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Si=/^( {2,}|\\)\n(?!\s*$)/,Ci=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,z=/[\p{P}\p{S}]/u,B=/[\s\p{P}\p{S}]/u,V=/[^\s\p{P}\p{S}]/u,wi=F(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,B).getRegex(),Ti=/[\p{Pi}\p{Ps}"']/u,Ei=/(?!~)[\p{P}\p{S}]/u,Di=/(?!~)[\s\p{P}\p{S}]/u,Oi=/(?:[^\s\p{P}\p{S}]|~)/u,ki=F(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Zr?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ai=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ji=F(Ai,`u`).replace(/punct/g,z).getRegex(),Mi=F(Ai,`u`).replace(/punct/g,Ei).getRegex(),Ni=F(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Ti).replace(/punct/g,z).getRegex(),Pi=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Fi=F(Pi,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Ii=F(Pi,`gu`).replace(/notPunctSpace/g,Oi).replace(/punctSpace/g,Di).replace(/punct/g,Ei).getRegex(),Li=F(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Ri=F(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),zi=F(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Bi=F(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,z).getRegex(),Vi=F(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Hi=F(/\\(punct)/,`gu`).replace(/punct/g,z).getRegex(),Ui=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Wi=F(di).replace(`(?:-->|$)`,`-->`).getRegex(),Gi=F(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Wi).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),H=F(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,/\[(?:\\[\s\S]|[^\[\]\\])*\]/).getRegex(),Ki=F(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,H).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qi=F(/^!?\[(label)\]\[(ref)\]/).replace(`label`,H).replace(`ref`,ci).getRegex(),Ji=F(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,ci).getRegex(),Yi=F(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,qi).replace(`nolink`,Ji).getRegex(),Xi=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Zi={_backpedal:N,anyPunctuation:Hi,autolink:Ui,blockSkip:ki,br:Si,code:xi,del:N,delLDelim:N,delRDelim:N,emStrongLDelim:ji,emStrongRDelimAst:Fi,emStrongRDelimUnd:Ri,escape:bi,link:Ki,nolink:Ji,punctuation:wi,reflink:qi,reflinkSearch:Yi,tag:Gi,text:Ci,url:N},Qi={...Zi,emStrongLDelim:Ni,emStrongRDelimAst:Li,emStrongRDelimUnd:zi,link:F(/^!?\[(label)\]\((.*?)\)/).replace(`label`,H).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,H).getRegex()},$i={...Zi,emStrongRDelimAst:Ii,emStrongLDelim:Mi,delLDelim:Bi,delRDelim:Vi,url:F(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Xi).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:F(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Xi).getRegex()},ea={...$i,br:F(Si).replace(`{2,}`,`*`).getRegex(),text:F($i.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},U={normal:gi,gfm:vi,pedantic:yi},W={normal:Zi,gfm:$i,breaks:ea,pedantic:Qi},ta={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},na=e=>ta[e];function G(e,t){if(t){if(I.escapeTest.test(e))return e.replace(I.escapeReplace,na)}else if(I.escapeTestNoEncode.test(e))return e.replace(I.escapeReplaceNoEncode,na);return e}function ra(e){try{e=encodeURI(e).replace(I.percentDecode,`%`)}catch{return null}return e}function ia(e,t){let n=e.replace(I.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(I.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(I.slashPipe,`|`);return n}function K(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function aa(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&I.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function oa(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function sa(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function ca(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function la(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}var q=class{options;rules;lexer;constructor(e){this.options=e||M}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:aa(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=la(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=K(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:K(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:K(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=K(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=sa(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=aa(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:K(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ia(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:K(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ia(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:K(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=K(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=oa(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ca(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return ca(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}else if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},J=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||M,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:I,block:U.normal,inline:W.normal};this.options.pedantic?(t.block=U.pedantic,t.inline=W.pedantic):this.options.gfm&&(t.block=U.gfm,this.options.breaks?t.inline=W.breaks:t.inline=W.gfm),this.tokenizer.rules=t}static get rules(){return{block:U,inline:W}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(I.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(I.tabCharGlobal,`    `).replace(I.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(!(e.charAt(0)===`!`||!Object.hasOwn(this.tokens.links,e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},ua=class{options;parser;constructor(e){this.options=e||M}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(I.notSpaceStart)?.[0],i=e?e.replace(I.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+G(r)+`">`+(n?i:G(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:G(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${G(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?G(n,!0):this.parser.parseInline(r),o=ra(e);if(o===null)return a;e=G(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+G(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=ra(e);if(i===null)return G(n);e=i;let a=`<img src="${G(e)}" alt="${G(n)}"`;return t&&(a+=` title="${G(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:G(e.text)}},da=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Y=class e{options;renderer;textRenderer;constructor(e){this.options=e||M,this.options.renderer=this.options.renderer||new ua,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new da}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},X=class{options;block;constructor(e){this.options=e||M}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?J.lex:J.lexInline}provideParser(e=this.block){return e?Y.parse:Y.parseInline}},Z=new class{defaults=Yr();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Y;Renderer=ua;TextRenderer=da;Lexer=J;Tokenizer=q;Hooks=X;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new ua(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new q(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new X;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];X.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&X.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return Y.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?J.lex:J.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?J.lex:J.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+G(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Z.parse(e,t)}Q.options=Q.setOptions=function(e){return Z.setOptions(e),Q.defaults=Z.defaults,Xr(Q.defaults),Q},Q.getDefaults=Yr,Q.defaults=M;function fa(...e){return Z.use(...e),Q.defaults=Z.defaults,Xr(Q.defaults),Q}Q.use=fa,Q.walkTokens=function(e,t){return Z.walkTokens(e,t)},Q.parseInline=Z.parseInline,Q.Parser=Y,Q.parser=Y.parse,Q.Renderer=ua,Q.TextRenderer=da,Q.Lexer=J,Q.lexer=J.lex,Q.Tokenizer=q,Q.Hooks=X,Q.parse=Q,Q.options,Q.setOptions,Q.walkTokens,Q.parseInline,Y.parse,J.lex;var pa={projects:[`wacsmash`,`cho-chang`,`nirvana`,`biosignal-blackout`,`fish`,`all-good-things`,`wind-wisp`,`remfall`,`game-jams`],experiments:[`sylph`,`become-you`,`labubus`,`draconian`]},$=[`design`,`tech`,`realtime`,`narrative`,`production`],ma=`(^|[^\\w/#])#(${$.join(`|`)})\\b`;function ha(){return new RegExp(ma,`gi`)}function ga(e){return $.includes(e)}function _a(e){let t=e.trim().toLowerCase();return $.find(e=>e===t)}function va(e){return`/system/${e}`}function ya(e){return`section-${e}`}function ba(e,t){return`/project?${new URLSearchParams({title:e}).toString()}#${ya(t)}`}function xa(e){if(!e)return;let t=e.trim().toLowerCase();if(/^\d+$/.test(t))return Number(t);let n=/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(t);if(!(!n||!n[1]&&!n[2]&&!n[3]))return Number(n[1]??0)*3600+Number(n[2]??0)*60+Number(n[3]??0)}function Sa(e){let t=e.hostname.replace(/^www\.|^m\./,``);if(t===`youtu.be`)return e.pathname.split(`/`).filter(Boolean)[0];if(t!==`youtube.com`&&t!==`youtube-nocookie.com`)return;let n=e.searchParams.get(`v`);if(n)return n;let r=e.pathname.split(`/`).filter(Boolean);if(r.length>=2&&[`embed`,`live`,`shorts`,`v`].includes(r[0]))return r[1]}function Ca(e){let t=e.hostname.replace(/^www\./,``);if(t!==`vimeo.com`&&t!==`player.vimeo.com`)return;let n=e.pathname.split(`/`).filter(Boolean),r=n.findIndex(e=>/^\d+$/.test(e));if(r===-1)return;let i=n[r+1];return{id:n[r],hash:e.searchParams.get(`h`)??(i&&/^[0-9a-f]+$/i.test(i)?i:void 0)}}function wa(e){let t=e.trim();if(!t)return;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:`https://${t}`)}catch{return}let r=Sa(n);if(r){let e=new URLSearchParams({rel:`0`}),t=xa(n.searchParams.get(`t`)??n.searchParams.get(`start`));t&&e.set(`start`,String(t));let i=n.searchParams.get(`list`);return i&&e.set(`list`,i),{provider:`youtube`,embedUrl:`https://www.youtube-nocookie.com/embed/${r}?${e}`}}let i=Ca(n);if(i){let e=new URLSearchParams({dnt:`1`});i.hash&&e.set(`h`,i.hash);let t=xa(n.hash.replace(/^#t=/,``)||null);return{provider:`vimeo`,embedUrl:`https://player.vimeo.com/video/${i.id}?${e}${t?`#t=${t}s`:``}`}}}function Ta(e){let t=wa(e);if(!t)throw Error(`Project video not recognized: "${e}". Use a YouTube or Vimeo link, e.g. https://youtu.be/ID or https://vimeo.com/123456789.`);return t}var Ea=new Set([`title`,`image`,`images`,`video`,`youtube`,`vimeo`,`side`,`collaboration`,`roles`,`role`,`tools`,`play`,`playlabel`,`play-label`,`haslink`]);function Da(e){let t=e.indexOf(`:`);return t===-1?!1:Ea.has(e.slice(0,t).trim().toLowerCase())}function Oa(e){let t={side:`left`};for(let n of e.split(/\r?\n/)){let e=n.indexOf(`:`);if(e===-1)continue;let r=n.slice(0,e).trim().toLowerCase(),i=n.slice(e+1).trim().replace(/^["']|["']$/g,``);!r||!i||(r===`title`&&(t.title=i),(r===`image`||r===`images`)&&(t.images=[...t.images??[],...i.split(`,`).map(e=>e.trim()).filter(Boolean)]),(r===`video`||r===`youtube`||r===`vimeo`)&&(t.video=i),r===`side`&&(i===`left`||i===`right`||i===`full`)&&(t.side=i),r===`collaboration`&&(t.collaboration=i),(r===`roles`||r===`role`)&&(t.roles=i),r===`tools`&&(t.tools=i),r===`play`&&(t.play=i),(r===`playlabel`||r===`play-label`)&&(t.playlabel=i))}return t}function ka(e){let t=new Set;for(let n of e.matchAll(ha())){let e=n[2]?.toLowerCase();e&&ga(e)&&t.add(e)}return $.filter(e=>t.has(e))}function Aa(e){return e.replace(ha(),(e,t,n)=>{let r=n.toLowerCase();return`${t}<a href="${va(r)}" class="project-system project-system--${r}">#${r}</a>`})}function ja(e){let t=e.trim();if(!t)return{textHtml:``,systems:[]};let n=ka(t);return{textHtml:Q.parse(Aa(t),{async:!1}),systems:n}}function Ma(e,t){let n=e.trim();if(!n)return[];let r=[],i=/^:::row\s*\r?\n([\s\S]*?)^:::\s*$/gm,a=0,o,s=e=>{let{textHtml:t,systems:n}=ja(e);t&&r.push({id:ya(r.length),side:`left`,textHtml:t,systems:n})};for(;(o=i.exec(n))!==null;){s(n.slice(a,o.index));let e=(o[1]??``).split(/\r?\n/),i=0;for(;i<e.length&&Da(e[i]);)i++;let c=Oa(e.slice(0,i).join(`
`)),{textHtml:l,systems:u}=ja(e.slice(i).join(`
`)),d=c.images?.map(t)??[];r.push({id:ya(r.length),title:c.title,image:d.length===1?d[0]:void 0,images:d.length>1?d:void 0,video:c.video?Ta(c.video):void 0,side:c.side,textHtml:l,systems:u,collaboration:c.collaboration,roles:c.roles,tools:c.tools,playUrl:c.play,playLabel:c.playlabel}),a=o.index+o[0].length}return s(n.slice(a)),r.length===0&&s(n),r}var Na=[`performance`,`creative tech`,`games`],Pa=Object.assign({"../../content/projects/all-good-things.md":Pe,"../../content/projects/become-you.md":Fe,"../../content/projects/beepboop.md":Ie,"../../content/projects/biosignal-blackout.md":Le,"../../content/projects/cho-chang.md":Re,"../../content/projects/color-change.md":ze,"../../content/projects/draconian.md":Be,"../../content/projects/earthash.md":Ve,"../../content/projects/elliotfig.md":He,"../../content/projects/fish.md":Ue,"../../content/projects/forget-avoid.md":We,"../../content/projects/game-jams.md":Ge,"../../content/projects/kissing-stone.md":Ke,"../../content/projects/labubus.md":qe,"../../content/projects/nirvana.md":Je,"../../content/projects/remfall.md":Ye,"../../content/projects/smallheartbig.md":Xe,"../../content/projects/sylph.md":Ze,"../../content/projects/wacsmash.md":Qe,"../../content/projects/wind-wisp.md":$e}),Fa=Object.assign({"../../content/assets/000A1334.jpg":et,"../../content/assets/000A1482.jpg":tt,"../../content/assets/000A1936.jpg":nt,"../../content/assets/20250314_Art_FMNIntroSetDressing.png":rt,"../../content/assets/20250314_Art_IntroHill.png":it,"../../content/assets/Buff man close up.PNG":at,"../../content/assets/Copy of brain2.png":ot,"../../content/assets/DSC04021.jpg":st,"../../content/assets/DSC04022.jpg":ct,"../../content/assets/DSC04108.jpg":lt,"../../content/assets/DSC04158.jpg":ut,"../../content/assets/DSC05614.JPG":dt,"../../content/assets/DSC05626.JPG":ft,"../../content/assets/DSC06839.JPG":pt,"../../content/assets/DSC06840.JPG":mt,"../../content/assets/DSC06857.jpg":ht,"../../content/assets/DSC06892.JPG":gt,"../../content/assets/DSC08493.JPG":_t,"../../content/assets/DSC08593.JPG":vt,"../../content/assets/DSC08871.JPG":yt,"../../content/assets/DSC09118.JPG":bt,"../../content/assets/DSC09299.JPG":xt,"../../content/assets/IMG_0262.JPG":St,"../../content/assets/IMG_0274.JPG":Ct,"../../content/assets/IMG_0328.JPG":wt,"../../content/assets/IMG_0926.png":Tt,"../../content/assets/IMG_1400.JPG":Et,"../../content/assets/IMG_2161.png":Dt,"../../content/assets/IMG_2906.jpg":Ot,"../../content/assets/IMG_3134.PNG":kt,"../../content/assets/IMG_3135.PNG":At,"../../content/assets/IMG_3370.png":jt,"../../content/assets/IMG_3432.JPG":Mt,"../../content/assets/IMG_5154.jpg":Nt,"../../content/assets/IMG_5895.png":Pt,"../../content/assets/IMG_6983.PNG":Ft,"../../content/assets/IMG_7013.PNG":It,"../../content/assets/If Fish Could Swim.png":Lt,"../../content/assets/P1580272.jpg":Rt,"../../content/assets/P1580405.JPEG":zt,"../../content/assets/Screenshot 2024-12-09 220745.png":Bt,"../../content/assets/Screenshot 2024-12-09 221058.png":Vt,"../../content/assets/Screenshot 2026-03-03 123659.png":Ht,"../../content/assets/Screenshot 2026-03-24 032121.png":Ut,"../../content/assets/Screenshot 2026-04-01 181512.png":Wt,"../../content/assets/Screenshot 2026-04-13 164400.png":Gt,"../../content/assets/Screenshot 2026-04-21 170922.png":Kt,"../../content/assets/Screenshot 2026-05-07 050528.png":qt,"../../content/assets/Screenshot 2026-05-07 072007.png":Jt,"../../content/assets/Screenshot 2026-09-11 231644.png":Yt,"../../content/assets/Screenshot 2026-09-11 231723.png":Xt,"../../content/assets/Screenshot 2026-09-11 231905.png":Zt,"../../content/assets/Screenshot 2026-09-11 232019.png":Qt,"../../content/assets/Screenshot 2026-09-11 232614.png":$t,"../../content/assets/Screenshot 2026-09-11 233117.png":en,"../../content/assets/Screenshot 2026-09-12 002502.png":tn,"../../content/assets/Screenshot 2026-09-17 002031.png":nn,"../../content/assets/Screenshot 2026-09-17 002444.png":rn,"../../content/assets/Screenshot 2026-09-22 213844.png":an,"../../content/assets/Screenshot 2026-09-22 214613.png":on,"../../content/assets/Screenshot 2026-09-22 214753.png":sn,"../../content/assets/Screenshot 2026-09-22 214859.png":cn,"../../content/assets/Screenshot 2026-09-22 215006.png":ln,"../../content/assets/Screenshot 2026-10-03 003523.png":un,"../../content/assets/Screenshot 2026-10-03 003603.png":dn,"../../content/assets/Screenshot 2026-10-03 003736.png":fn,"../../content/assets/Screenshot 2026-10-03 003801.png":pn,"../../content/assets/Screenshot 2026-10-03 005121.png":mn,"../../content/assets/Screenshot 2026-10-03 005313.png":hn,"../../content/assets/Screenshot 2026-10-03 005351.png":gn,"../../content/assets/Screenshot 2026-10-03 005412.png":_n,"../../content/assets/Screenshot 2026-10-03 005832.png":vn,"../../content/assets/Screenshot 2026-10-04 004443.png":yn,"../../content/assets/Screenshot 2026-10-04 214355.png":bn,"../../content/assets/Screenshot 2026-10-04 214440.png":xn,"../../content/assets/Screenshot 2026-10-04 214526.png":Sn,"../../content/assets/Screenshot 2026-10-04 214612.png":Cn,"../../content/assets/Screenshot 2026-10-04 214748.png":wn,"../../content/assets/Screenshot 2026-10-04 214816.png":Tn,"../../content/assets/Screenshot 2026-10-04 232833.png":En,"../../content/assets/Screenshot 2026-10-04 232902.png":Dn,"../../content/assets/Screenshot 2026-10-04 232924.png":On,"../../content/assets/Screenshot_2024-09-03_224646.png":kn,"../../content/assets/TDMovieOut.12.png":An,"../../content/assets/TDMovieOut.18.png":jn,"../../content/assets/TDMovieOut.23.png":Mn,"../../content/assets/TDMovieOut.27.png":Nn,"../../content/assets/TDMovieOut.3.png":Pn,"../../content/assets/TDMovieOut.31.png":Fn,"../../content/assets/TDMovieOut.37.png":In,"../../content/assets/TDMovieOut.41.png":Ln,"../../content/assets/TDMovieOut.42.png":Rn,"../../content/assets/Wacsmash1.JPG":zn,"../../content/assets/WindAndTheWisp-Gameplay-Screenshot-13-1920x1080.png":Bn,"../../content/assets/WindAndTheWisp-Gameplay-Screenshot-7-1920x1080.png":Vn,"../../content/assets/aboutme.png":Hn,"../../content/assets/agt-poster.PNG":Un,"../../content/assets/agt10.jpg":Wn,"../../content/assets/agt11.jpg":Gn,"../../content/assets/agt12.jpg":Kn,"../../content/assets/agt13.jpg":qn,"../../content/assets/agt14.jpg":Jn,"../../content/assets/agt15.jpg":Yn,"../../content/assets/agt16.jpg":Xn,"../../content/assets/agt17.jpg":Zn,"../../content/assets/agtanna.png":Qn,"../../content/assets/agtdesign1.png":$n,"../../content/assets/agtdesign2.png":er,"../../content/assets/agtdesign3.jpg":tr,"../../content/assets/agtnarrative.png":nr,"../../content/assets/agtpivot1.png":rr,"../../content/assets/agtpivot2.png":ir,"../../content/assets/agtplay.jpg":ar,"../../content/assets/agtplay2.jpg":or,"../../content/assets/agtsystem.png":sr,"../../content/assets/agtusability.png":cr,"../../content/assets/arduino1.png":lr,"../../content/assets/becomeyou1.jpg":ur,"../../content/assets/berry 2.png":dr,"../../content/assets/berry.png":fr,"../../content/assets/biosignal1.jpg":pr,"../../content/assets/cahngee.png":mr,"../../content/assets/change.png":hr,"../../content/assets/chochang1.JPG":gr,"../../content/assets/cover.png":_r,"../../content/assets/draconian1.jpg":vr,"../../content/assets/draconian2.jpg":yr,"../../content/assets/earthash1.jpg":br,"../../content/assets/elliotfig1.png":xr,"../../content/assets/fish1.jpg":Sr,"../../content/assets/fishes.jpg":Cr,"../../content/assets/fishesss.jpg":wr,"../../content/assets/forgetavoid1.jpg":Tr,"../../content/assets/forgetavoid1.png":Er,"../../content/assets/gamejams1.jpg":Dr,"../../content/assets/gamejams2.jpg":Or,"../../content/assets/gamejams3.png":kr,"../../content/assets/gulp 2.png":Ar,"../../content/assets/gulp.png":jr,"../../content/assets/heidi1.jpg":Mr,"../../content/assets/kissingstone1.jpg":Nr,"../../content/assets/kissingstone2.jpg":Pr,"../../content/assets/labubu1.jpg":Fr,"../../content/assets/nirvana1.jpg":Ir,"../../content/assets/portfolio-opened.png":Lr,"../../content/assets/portfolio.png":Rr,"../../content/assets/project.png":zr,"../../content/assets/remfall art 1.png":Br,"../../content/assets/remfall art 2.png":Vr,"../../content/assets/remfall art.png":Hr,"../../content/assets/remfall1.png":Ur,"../../content/assets/smallheartbig.png":Wr,"../../content/assets/space cat 1.png":Gr,"../../content/assets/space_cat.png":Kr,"../../content/assets/sylph.jpg":qr,"../../content/assets/windwisp1.png":Jr});function Ia(e){let t=`/${e.replace(/^\.\//,``).replace(/^assets\//,``).replace(/^content\/assets\//,``)}`.toLowerCase(),n=Object.entries(Fa).find(([e])=>e.toLowerCase().endsWith(t));if(!n)throw Error(`Project image not found: "${e}". Put the file in content/assets/ and reference just the filename.`);return n[1]}function La(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(e.trim());if(!t)return{data:{},body:e.trim()};let n={};for(let e of t[1].split(/\r?\n/)){let t=e.indexOf(`:`);if(t===-1)continue;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim().replace(/^["']|["']$/g,``);r&&(n[r]=i)}return{data:n,body:t[2].trim()}}function Ra(e){return e?e.trim().toLowerCase()!==`false`:!0}function za(e){if(!e)return[];let t=e.replace(/^\[|\]$/g,``).split(`,`).map(e=>e.trim().replace(/^["']|["']$/g,``).toLowerCase()).filter(Boolean),n=[];for(let e of t){let t=Na.find(t=>t===e);t&&!n.includes(t)&&n.push(t)}return n}function Ba(e){return(e.split(`/`).pop()??e).replace(/\.md$/,``)}function Va(){return Object.entries(Pa).map(([e,t])=>{let{data:n,body:r}=La(t),i=Ba(e),a=n.title??i,o=n.description??``,s=Ia(n.image??`project.png`),c=n.collaboration??``,l=n.roles??n.role??``,u=n.tools??``,d=n.play??``,f=n.playlabel??n.playLabel??`play`,p=Ra(n.hasLink??n.haslink),m=za(n.tags);return{slug:i,title:a,description:o,image:s,collaboration:c,roles:l,tools:u,playUrl:d,playLabel:f,hasLink:p,body:r,bodyHtml:r?Q.parse(r,{async:!1}):``,sections:Ma(r,Ia),tags:m}})}var Ha=Va(),Ua=pa;function Wa(e){let t=new Map(e.map((e,t)=>[e,t]));return Ha.filter(e=>t.has(e.slug)).sort((e,n)=>(t.get(e.slug)??0)-(t.get(n.slug)??0))}var Ga=Wa(Ua.projects),Ka=Wa(Ua.experiments),qa=new Map(Ua.projects.map((e,t)=>[e,t]));function Ja(){return Ga}function Ya(){return Ka}function Xa(){return Ga.map(e=>e.slug)}function Za(e){let t=e.trim().toLowerCase();return Ha.find(e=>e.title.toLowerCase()===t)}function Qa(e){return e.replace(/\s+/g,`-`)}function $a(e){let t=e.trim().toLowerCase().replace(/-/g,` `);return Na.find(e=>e===t)}function eo(e){return Ha.filter(t=>t.tags.includes(e))}function to(e){let t=[...Ga,...Ha.filter(e=>!qa.has(e.slug))],n=[];for(let r of t)r.sections.forEach((t,i)=>{t.systems.includes(e)&&n.push({projectTitle:r.title,projectSlug:r.slug,section:t,sectionIndex:i})});return n}function no(e){return e!==`/experiments`}function ro(){return typeof document<`u`&&!!document.querySelector(`.experiments-popup`)}function io(e){typeof document>`u`||(document.documentElement.dataset.experimentsPopup=e)}function ao(e,t){let n=ro()&&no(e),r=no(t);return n&&r?`persist`:n&&!r?`fade-out`:`fade-in`}function oo(e){return e!==`/`}function so(e){typeof document>`u`||(document.documentElement.dataset.topBar=e)}function co(e,t){let n=oo(e),r=oo(t);return n&&r?`persist`:n&&!r?`fade-out`:`fade-in`}function lo(e,t){so(co(e,t)),io(ao(e,t))}export{Ne as _,Xa as a,to as c,ba as d,_a as f,Se as g,_e as h,Za as i,$a as l,he as m,Na as n,Ja as o,me as p,Ya as r,eo as s,lo as t,Qa as u};