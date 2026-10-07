import{B as e,C as t,F as n,G as r,K as i,P as a,R as o,S as s,U as c,V as l,W as u,Y as d,b as f,d as p,f as m,g as h,i as g,m as _,p as v,q as y,u as b,v as x,x as S,y as C}from"./jsx-runtime-tQlTBj1C.js";import{_ as w,a as T,c as ee,n as E,s as te}from"./errorBoundaries-CEB4FXJ-.js";var D=`application/x-www-form-urlencoded`;function O(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function ne(e){return O(e)&&e.tagName.toLowerCase()===`button`}function re(e){return O(e)&&e.tagName.toLowerCase()===`form`}function ie(e){return O(e)&&e.tagName.toLowerCase()===`input`}function ae(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oe(e,t){return e.button===0&&(!t||t===`_self`)&&!ae(e)}function se(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function ce(e,t){let n=se(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var k=null;function le(){if(k===null)try{new FormData(document.createElement(`form`),0),k=!1}catch{k=!0}return k}var ue=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function de(e){return e!=null&&!ue.has(e)?(r(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${D}"`),null):e}function fe(e,t){let n,r,i,a,o;if(re(e)){let o=e.getAttribute(`action`);r=o?l(o,t):null,n=e.getAttribute(`method`)||`get`,i=de(e.getAttribute(`enctype`))||D,a=new FormData(e)}else if(ne(e)||ie(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?l(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=de(e.getAttribute(`formenctype`))||de(o.getAttribute(`enctype`))||D,a=new FormData(o,e),!le()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(O(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=D,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}var A=d(y(),1),pe=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{pe&&(window.__reactRouterVersion=`8`)}catch{}function me({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=A.useState({action:n.action,location:n.location}),o=A.useCallback(e=>{r===!1?a(e):A.startTransition(()=>a(e))},[r]);return A.useLayoutEffect(()=>n.listen(o),[n,o]),A.createElement(g,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}me.displayName=`unstable_HistoryRouter`;var he=A.forwardRef(function({onClick:t,discover:n=`render`,prefetch:r=`none`,relative:s,reloadDocument:c,replace:l,mask:u,state:d,target:f,to:m,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:_,...v},y){let{basename:x,navigator:C,useTransitions:w}=A.useContext(S),E=typeof m==`string`&&i.test(m),D=o(m,x);m=D.to;let O=b(m,{relative:s}),ne=p(),re=null;if(u){let t=e(u,[],ne.mask?ne.mask.pathname:`/`,!0);x!==`/`&&(t.pathname=t.pathname===`/`?x:a([x,t.pathname])),re=C.createHref(t)}let[ie,ae,oe]=ee(r,v),se=Se(m,{replace:l,mask:u,state:d,target:f,preventScrollReset:h,relative:s,viewTransition:g,defaultShouldRevalidate:_,useTransitions:w});function ce(e){t&&t(e),e.defaultPrevented||se(e)}let k=!(D.isExternal||c),le=A.createElement(`a`,{...v,...oe,href:(k?re:void 0)||D.absoluteURL||O,onClick:k?ce:t,ref:te(y,ae),target:f,"data-discover":!E&&n===`render`?`true`:void 0});return ie&&!E?A.createElement(A.Fragment,null,le,A.createElement(T,{page:O})):le});he.displayName=`Link`;var ge=A.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},u){let d=h(a,{relative:c.relative}),m=p(),g=A.useContext(f),{navigator:_,basename:v}=A.useContext(S),y=g!=null&&Ne(d)&&o===!0,b=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,x=m.pathname,C=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;t||(x=x.toLowerCase(),C=C?C.toLowerCase():null,b=b.toLowerCase()),C&&v&&(C=l(C,v)||C);let w=b!==`/`&&b.endsWith(`/`)?b.length-1:b.length,T=x===b||!r&&x.startsWith(b)&&x.charAt(w)===`/`,ee=C!=null&&(C===b||!r&&C.startsWith(b)&&C.charAt(w)===`/`),E={isActive:T,isPending:ee,isTransitioning:y},te=T?e:void 0,D;D=typeof n==`function`?n(E):[n,T?`active`:null,ee?`pending`:null,y?`transitioning`:null].filter(Boolean).join(` `);let O=typeof i==`function`?i(E):i;return A.createElement(he,{...c,"aria-current":te,className:D,ref:u,style:O,to:a,viewTransition:o},typeof s==`function`?s(E):s)});ge.displayName=`NavLink`;var _e=A.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:o,method:s=`get`,action:c,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...m},h)=>{let{useTransitions:g}=A.useContext(S),_=Ee(),v=De(c,{relative:u}),y=s.toLowerCase()===`get`?`get`:`post`,b=typeof c==`string`&&i.test(c);return A.createElement(`form`,{ref:h,method:y,action:v,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,i=r?.getAttribute(`formmethod`)||s,c=()=>_(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:o,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});g&&n!==!1?A.startTransition(()=>c()):c()},...m,"data-discover":!b&&e===`render`?`true`:void 0})});_e.displayName=`Form`;function ve({getKey:e,storageKey:t,...n}){let r=A.useContext(E),{basename:i}=A.useContext(S),a=p(),o=m();Ae({getKey:e,storageKey:t});let s=A.useMemo(()=>{if(!r||!e)return null;let t=ke(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),A.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${w(JSON.stringify(t||Oe))}, ${w(JSON.stringify(s))})`}})}ve.displayName=`ScrollRestoration`;function ye(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function be(e){let t=A.useContext(C);return u(t,ye(e)),t}function xe(e){let t=A.useContext(f);return u(t,ye(e)),t}function Se(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l,useTransitions:u}={}){let d=v(),f=p(),m=h(e,{relative:o});return A.useCallback(p=>{if(oe(p,t)){p.preventDefault();let t=n===void 0?c(f)===c(m):n,h=()=>d(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l});u?A.startTransition(()=>h()):h()}},[f,d,m,n,r,i,t,e,a,o,s,l,u])}function Ce(e){r(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=A.useRef(se(e)),n=A.useRef(!1),i=p(),a=A.useMemo(()=>ce(i.search,n.current?null:t.current),[i.search]),o=v();return[a,A.useCallback((e,t)=>{let r=se(typeof e==`function`?e(new URLSearchParams(a)):e);n.current=!0,o(`?`+r,t)},[o,a])]}var we=0,Te=()=>`__${String(++we)}__`;function Ee(){let{router:e}=be(`useSubmit`),{basename:t}=A.useContext(S),n=x(),r=e.fetch,i=e.navigate;return A.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=fe(e,t);a.navigate===!1?await r(a.fetcherKey||Te(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function De(e,{relative:t}={}){let{basename:n}=A.useContext(S),r=A.useContext(s);u(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),o={...h(e||`.`,{relative:t})},l=p();if(e==null){o.search=l.search;let e=new URLSearchParams(o.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();o.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(o.pathname=o.pathname===`/`?n:a([n,o.pathname])),c(o)}var Oe=`react-router-scroll-positions`,j={};function ke(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:l(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Ae({getKey:e,storageKey:t}={}){let{router:n}=be(`useScrollRestoration`),{restoreScrollPosition:i,preventScrollReset:a}=xe(`useScrollRestoration`),{basename:o}=A.useContext(S),s=p(),c=m(),l=_();A.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Me(A.useCallback(e=>{e.persisted&&(window.history.scrollRestoration=`manual`)},[])),je(A.useCallback(()=>{if(l.state===`idle`){let t=ke(s,c,o,e);j[t]=window.scrollY}try{sessionStorage.setItem(t||Oe,JSON.stringify(j))}catch(e){r(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[l.state,e,o,s,c,t])),typeof document<`u`&&(A.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Oe);e&&(j=JSON.parse(e))}catch{}},[t]),A.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(j,()=>window.scrollY,e?(t,n)=>ke(t,n,o,e):void 0);return()=>t&&t()},[n,o,e]),A.useLayoutEffect(()=>{if(i!==!1){if(typeof i==`number`){window.scrollTo(0,i);return}try{if(s.hash){let e=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{r(!1,`"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}a!==!0&&window.scrollTo(0,0)}},[s,i,a]))}function je(e,t){let{capture:n}=t||{};A.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Me(e,t){let{capture:n}=t||{};A.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pageshow`,e,t),()=>{window.removeEventListener(`pageshow`,e,t)}},[e,n])}function Ne(e,{relative:r}={}){let i=A.useContext(t);u(i!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=be(`useViewTransitionState`),o=h(e,{relative:r});if(!i.isTransitioning)return!1;let s=l(i.currentLocation.pathname,a)||i.currentLocation.pathname,c=l(i.nextLocation.pathname,a)||i.nextLocation.pathname;return n(o.pathname,c)!=null||n(o.pathname,s)!=null}var Pe=`---\r
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
bullet: MFA thesis. A 30-minute webcam ballet game that teaches choreography, then opens into freestyle.\r
bullet: Full voiceover, an original score, based on authentic ballet experiences.\r
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
\r
Webcam overlay is stitched ontop of the screenshots to show player's movement at the time of gameplay capture. Gameplay begins and repeats in a studio environment and enters the stage for player performance.\r
\r
:::\r
\r
:::row\r
title: Designing for Dance & Screen\r
images: agtdesign3.jpg, agtdesign1.png, agtdesign2.png\r
side: left\r
bullet: Real training, condensed into repetition, multitasking, risk, and resilience.\r
bullet: The screen represents a studio mirror with harsh narrative events landing on the character, not the player.\r
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
bullet: Choreography is taught by screen area, so later steps already have a place to go. #design\r
bullet: The last level drops the body outline for expression, the way practice changes with age.\r
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
bullet: TouchDesigner VFX stream into Unity to coach movement, trimmed to what the GPU can hold. #tech #design\r
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
bullet: Webcam latency is inevitable, so looser particles make the body feel responsive anyway.\r
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
bullet: Any filmed dance can become a level: 2D frames, an outlineshader, with VFX and voice in a sequence. #realtime\r
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
bullet: Jira for priorities, Discord for tasks, then burndown sheets when the team got small. #production\r
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
bullet: Kensington Tallman and Crispin Freeman, directed by Sarah Elmaleh, with a live student orchestra.\r
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
bullet: Anna is hard on herself. Roth means well but pushes too far. #narrative\r
bullet: Three acts told through the environment, art shaders, and audio plays.\r
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
bullet: Playable on most normal webcams: Calibration walks you through the setup and a T-pose.\r
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
\r
Find my full thesis paper here: [USC Digital Library](https://digitallibrary.usc.edu/Share/57443u0n16lwkk8722itpt12o3g855j2).\r
:::\r
`,Fe=`---\r
title: become you / become better\r
description: Installation of two companion short films of a mother and her daughter.\r
image: becomeyou1.jpg\r
# Position on the experiments spectrum. x silly to whimsy, y strange to unhinged, z scrappy to sappy. Range -1 to 1.\r
spectrum: -0.5, -0.16, 0.9\r
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
bullet: Prototyped each act's intensity, then reimagined them as representations of blood, breath, and heart. #design\r
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
bullet: We use heart rate sensors and respiration belts.\r
bullet: A switch hands each visual from its idle loop to the live sensor.\r
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
bullet: A buttons screen, not MIDI, runs the linear show: cues, live biometrics, and the projector feed. #realtime\r
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
bullet: POPs replaced my SOP workarounds, learned operators Trail, Twist, Blend, and Field.\r
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
bullet: Rewrites Cho Chang, with music by Shirunyu Li, to reclaim girlhood from reductive stereotypes. #narrative\r
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
bullet: Performer splits the projected name "Cho Chang," then joins the audience as a new name takes the stage.\r
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
bullet: First digital pipeline, sketches to a Live2D rig to a stage test.\r
bullet: Kept the animation flat so it would contrast the live dancer.\r
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
bullet: A side character still shaped how it felt to grow up Asian. That gaze affects self-esteem.\r
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
# Position on the experiments spectrum. x silly to whimsy, y strange to unhinged, z scrappy to sappy. Range -1 to 1.\r
spectrum: -0.42, 0.9, 0.18\r
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
title: ESME\r
description: Driving simulator reuniting dancing star people.\r
image: Screenshot 2026-10-05 153822.png\r
# Position on the experiments spectrum. x silly to whimsy, y strange to unhinged, z scrappy to sappy. Range -1 to 1.\r
spectrum: 0.5, -0.9, 0.8\r
collaboration: Nile Imtiaz\r
roles: Technical Designer, Motion Capture Technician\r
tools: OptiTrack, Motive, Unity\r
play: https://bernwang.itch.io/esme\r
playlabel: play\r
hasLink: true\r
---\r
\r
:::row\r
title: \r
video: https://youtu.be/LSqop-yNQFM\r
side: full\r
\r
\r
:::\r
`,We=`---\r
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
bullet: Gallery piece about controlling a giant fish, up for two weeks at the Grand LA, across from Disney Hall.\r
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
bullet: Selfie lights and a floor mark made the webcam reliable in a dark gallery.\r
\r
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
`,Ge=`---\r
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
`,Ke=`---\r
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
\r
Climate change focused theme. A fantasy simulation of an ecosystem of animals taking down a coal factory together. All 3D art assets are modeled by the jam team. Made in six weeks.\r
:::\r
\r
\r
`,qe=`---\r
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
`,Je=`---\r
title: Labubu Couture\r
description: Labubus not in the consumerism way but in the “15+ hrs custom couture outfit” way.\r
image: centerlabubu.jpg\r
# Position on the experiments spectrum. x silly to whimsy, y strange to unhinged, z scrappy to sappy. Range -1 to 1.\r
spectrum: 0.9, -0.08, -0.86\r
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
image: bubu.jpg, maggie.png, swaggy.png, yoki.png, benoit.png, icee.png, nixie.png, pixie.png, bubus.jpg\r
side: full\r
bullet: Each Labubu gets a life story, and an outfit from scraps. #narrative\r
\r
I create a story and personality for each Labubu, imagining what they would wear or use in their daily life. It’s a great creative hobby for whimsy. I also often recycle everyday items, like a pen cap, bra insert, or the lone sock. #narrative\r
\r
People have told me sell the costumes but I could not predict where I would get the best materials next. Plus, each take an embarrassingly amount of time and brainspace.\r
:::\r
\r
:::row\r
title: Maggie\r
images: maggie.png, maggie1.jpg, maggie2.jpg, maggie3.jpg\r
side: right\r
bullet: A monocled enchantress. Sword from a barrette and washers, cape and suit hand sewn.\r
\r
A magical monocled swashbuckling enchantress. The sword is made from a barret clip and washers; the cape and brocade suit hand sewn. If siblings order is real, Maggie is an older sister.\r
\r
I would love her luxurious cape for myself, and peep the pom pom leaf boots.\r
:::\r
\r
:::row\r
title: Swaggy\r
images: swaggy.png, swaggy1.jpg, swaggy2.jpg, swaggy3.jpg\r
side: left\r
bullet: First upcycled outfit. Travel-Tabasco wine, yogurt-lid shades, the cool girl on the block.\r
\r
My first outfit I ever made by upcycling premade doll clothes. Swaggy is meant to be THE cool girl on the block: the wine bottle is made from a travel tabasco bottle and their shades from the back of a yogurt lid.\r
:::\r
\r
:::row\r
title: Yoki\r
images: yoki.png, yoki4.jpg, yoki2.jpg, yoki3.jpg\r
side: right\r
bullet: Commissioned to match her owner after KPop Demon Hunters: studs, beanie, tote, pierced ears.\r
\r
This character was commissioned by a friend who both wanted to match with her Labubu and had just watched Kpop Demon Hunters. Yoki has pierced ears, studs on leather, and chic beanie with casual tote bag combo - the ultimate modern Saja Boy. Actually, I tried making the gat, the Korean traditional hat, for Yoki but a beanie ended up looking better.\r
:::\r
\r
:::row\r
title: Benoit Blabubu\r
images: benoit.png, benoit1.jpg, benoit2.jpg, benoit3.jpg\r
side: left\r
bullet: A noir commission that became a Knives Out detective, trench coat with working pockets.\r
\r
Commissioned by another friend who is a big fan of the noir genre. It ended up closer to the Knives Out detective but features the most elaborate tailoring yet with a fully functional trench coat that ties and has hidden pockets. The hat is stitched from real leather scraps. Spot the details; there's even a rolled up newspaper in his coat.\r
:::\r
\r
:::row\r
title: Iccee\r
images: icee.png, icee2.jpg, icee3.jpg\r
side: right\r
bullet: My self-insert, in a Japanese handkerchief dress and a crown of broken earrings.\r
\r
Of the labubus, this one is my self insert. Iccee is iced out and wearing a dress made from a handkerchief I got during a Japanese exchange program. I loved the print, but never used it as a handkerchief. The crown is made from a single earring, a hoop earring, and other broken dangly jewelry bits.\r
\r
Canonically, Iccee carries a woven tote full of picnic foods and fruit.\r
:::\r
\r
:::row\r
title: Nixie & Pixie\r
side: full\r
\r
The twins, Nixie and Pixie, draw from my deepest love of fantasy, especially the classic mermaids and fairies. You can tell I grew up on the old Barbie movies. \r
\r
:::\r
\r
:::row\r
title: \r
images: nixie.png, nixie1.jpg, nixie2.jpg\r
side: left\r
\r
\r
Nixie’s tail and gills/ears are made from scrap interfacing and a single pant leg of a holographic yoga pant. \r
\r
:::\r
\r
:::row\r
title: \r
images: pixie.png, pixie.jpg, pixie1.jpg, pixie2.jpg\r
side: right\r
bullet: A space loving blueberry fairy with beads and tiny wings.\r
\r
Pixie features fully beaded ears, a crocheted crossbody, and scavenged acorn buckle. With such tiny wings, she can’t exactly fly but that doesn’t stop her longing for the stars and space. Her bright blue fit is made up of bra inserts.\r
\r
Pixie was originally light green but I wanted to try dyeing the plush... somehow, she ended up gray. The hat is what I'd like to wear if I was a Brimmed Hat in Witch Hat Atelier.\r
\r
:::\r
\r
`,Ye=`---\r
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
bullet: No CGI in post. Dance and effects are captured live on a see-through projected scrim. #realtime\r
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
\r
Some scenes required the dancer to match the visuals live, while others were made to match the dancer's set choreography. A few involved real time tracking.\r
:::\r
\r
:::row\r
title: Motion Capture\r
image: IMG_5895.png\r
side: right\r
bullet: Synced motion capture to the live dance so a partner can vanish into particles and reappear. #tech\r
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
\r
We projection mapped onto a giant scrim, on the floor from the ceiling, and directly onto the performer's face using infrared light camera.\r
:::\r
\r
:::row\r
title: Lighting On Set\r
image: IMG_1400.JPG\r
side: right \r
\r
\r
Each shot required meticulous lighting so that the visual and dancer are visible on camera but the scrim and set behind are not.\r
\r
Staging and spacing were also incredibly precise: one shot of a falling figure disappearing into the dancer on the ground required both the dancer and lightning crew to switch positions on the correct timing and hit the optimal angle.\r
:::\r
`,Xe=`---\r
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
\r
Documented findings and categorized design aspects per digital or physical prototype on Figma I focused mainly on the painting and creatures systems.\r
:::\r
`,Ze=`---\r
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
`,Qe=`---\r
title: Sylph\r
description: Phone AR experience with physical scrapbook.\r
image: sylph.jpg\r
# Position on the experiments spectrum. x silly to whimsy, y strange to unhinged, z scrappy to sappy. Range -1 to 1.\r
spectrum: 0.46, -0.84, -0.12\r
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
`,$e=`---\r
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
bullet: UCLA's biggest dance show back after COVID: 11 choreographers, 8 artists, 85 performers.\r
\r
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
bullet: Weekly testing across overlapping casts, plus a COVID compliance certification, so the stage could be shared.\r
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
bullet: Flagged obstacles/deadlines early and raised about $13k from four organizations. #production\r
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
bullet: Interviewed artists on overlapping ideas, how their mediums relate, and how they would cast.\r
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
\r
I enjoyed advocating and helping create a space for conversation and change. Social justice as a term is broad, but mainly we hoped students got a formal stage to express their personal real world experiences and perspectives. This was and is still incredibly relevant, as for performing artists their professional voice is creative and ther creative voice is political.\r
:::\r
`,et=`---\r
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
bullet: Blow into the mic as the wind to help the wisp replant a garden.\r
bullet: Grief mapped onto breath, from anger to acceptance, with spacebar as an accommodation.\r
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
bullet: Gameplay reaction caught on a stranger's stream.\r
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
bullet: Dropped grief-specific breathing patterns for simple blows and interactions\r
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
bullet: Complex breathing felt right, but the mic could not identify it. Focused instead on what player breath impacts in the world.\r
\r
I prototyped a first iteration, finding that box breathing, sustained breathing, and a sigh of relief felt effective to players. However, the microphone had trouble detecting patterns accurately enough, so we regrouped, tying the impact of a player's breathing to the emotion rather than the breathing itself. For example, blowing to break rocks is explosive and sudden - like anger. \r
:::\r
\r
\r
:::row\r
title: Tutorialization & Blockmesh\r
images: Screenshot 2026-10-03 003603.png, Screenshot 2026-10-03 003523.png, \r
side: left\r
bullet: A dandelion HUD appears only when the mic can change the world.\r
\r
Levels, particularly the first intro level that set up gameplay precedents, went through several iterations. I identified the aspects of the game we needed to teach the player, starting playtests early. I also brainstormed ways to show what can be blown in the world and how we can represent the blow type/stregnth. Along with the UX designer's iterations, this became a dandelion/flower HUD that appeared whenever the player could interact with the game world by mic.\r
:::\r
\r
:::row\r
title: \r
image:  Screenshot_2024-09-03_224646.png, Screenshot 2026-10-03 005121.png\r
side: full\r
bullet: Janky prototypes saved time and resources\r
bullet: Wisp autopathing read like a cutscene, and made it clear the player is the wind. #design\r
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
bullet: One-off camera zones were scripted with an engineer so mic polish stayed on track.\r
bullet: Camera framing carries the story instead of text.\r
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
\r
First digital mock up of the last quest, to retrieve the Lily of the Valley, the flower able to "unpetrify" stone. \r
:::\r
\r
:::row\r
title: \r
video: https://youtu.be/VeBhqaJvenw\r
side: full\r
bullet: The same level right before passing to Art for set dressing. \r
\r
\r
\r
I worked directly with another designer to finalize the level, combining a boat feature from another part of the game that got cut. We also documented our vision for Art and Audio, for the boat shader and musical details. The boat is meant to be part star, which explains how it too unpetrifies and flies carrying the wisp along. Unlike other levels, the wisp and the wind move together on a track.\r
:::\r
\r
:::row\r
title: Design & Narrative Control Scope\r
images: Screenshot 2026-10-03 005351.png, Screenshot 2026-10-03 005832.png\r
side: left\r
bullet: The director's paper boat combined with the dandelion feature, and scope creep disappeared. #production\r
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
bullet: we cut anything that was not confident, then creatively reshuffled narratie and design.\r
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
bullet: An Instagram-story animatic at the start of preproduction.\r
\r
During preproduction, so much felt unknown. I made an animatic out of Instagram stories to check my understanding of the director's vision. In hindsight, so much has evolved and it feels profoundly fulfilling to see the progression of the project.\r
:::\r
\r
:::row\r
title: With Other Leads & our Designers\r
images: Screenshot 2026-10-03 003736.png, Screenshot 2026-10-03 003801.png\r
side: right\r
bullet: I communciated via sketching, summarizing, mirroring, and more.\r
\r
I grew a great deal being on a large game team, as a lead and a designer. I enjoyed collaborating and facilitating, finding my strengths and weaknesses. I gathered an arsenal of different ways to communciate, from sketching to mirroring others to paintovers. I also felt well prepared for future productions; I got a lot of practice quickly summarizing the most relevant information different members of the team needed at that moment especially for the current task.\r
:::\r
\r
\r
`,tt=`/assets/000a1334-640-cf405773df-C-nc4to1.webp`,nt=`/assets/000a1334-1280-b56851c7de-C4MeL-t1.webp`,rt=`/assets/000a1334-1920-ebab5a79ca-D_hG3T7D.webp`,it={src:nt,large:rt,srcSet:[tt+` 640w`,nt+` 1280w`,rt+` 1920w`].join(`, `),width:6720,height:4480},at=`/assets/000a1482-640-1776c6ca3a-Dmik44y8.webp`,ot=`/assets/000a1482-1280-f304a83c04-VxPNioIa.webp`,st=`/assets/000a1482-1920-98e0ca7c3e-23lXYrCy.webp`,ct={src:ot,large:st,srcSet:[at+` 640w`,ot+` 1280w`,st+` 1920w`].join(`, `),width:6720,height:4480},lt=`/assets/000a1936-640-10e4124677-hOwc4tIa.webp`,ut=`/assets/000a1936-1280-c52833dfcc-BT5tLgJ8.webp`,dt=`/assets/000a1936-1920-455ee72c24-B6CsBgL8.webp`,ft={src:ut,large:dt,srcSet:[lt+` 640w`,ut+` 1280w`,dt+` 1920w`].join(`, `),width:4347,height:6520},pt=`/assets/20250314-art-fmnintrosetdressing-640-24ebbe779f-B6mgPx_v.webp`,mt=`/assets/20250314-art-fmnintrosetdressing-1280-66c482ea12-Bb85gUqb.webp`,ht=`/assets/20250314-art-fmnintrosetdressing-1516-e1865ac2fe-B4RBLRLe.webp`,gt={src:mt,large:ht,srcSet:[pt+` 640w`,mt+` 1280w`,ht+` 1516w`].join(`, `),width:1516,height:840},_t=`/assets/20250314-art-introhill-640-edfb87a7d5-CvKFd7Rt.webp`,vt=`/assets/20250314-art-introhill-1280-0ce4c52deb-DEdNQdw8.webp`,yt=`/assets/20250314-art-introhill-1515-905825d24d-CWzCCsMM.webp`,bt={src:vt,large:yt,srcSet:[_t+` 640w`,vt+` 1280w`,yt+` 1515w`].join(`, `),width:1515,height:842},xt=`/assets/buff-man-close-up-640-8404774f31-C0ETg1pK.webp`,St=`/assets/buff-man-close-up-1280-277cc240c4-DcIMc9Ud.webp`,Ct=`/assets/buff-man-close-up-1920-64d9fa01b1-CITdotkP.webp`,wt={src:St,large:Ct,srcSet:[xt+` 640w`,St+` 1280w`,Ct+` 1920w`].join(`, `),width:2388,height:1668},Tt=`/assets/copy-of-brain2-640-8446137a14-C80R5Vie.webp`,Et=`/assets/copy-of-brain2-1280-00a45b838f-DiSTphTE.webp`,Dt=`/assets/copy-of-brain2-1920-a76b134585-CAr80yQC.webp`,Ot={src:Et,large:Dt,srcSet:[Tt+` 640w`,Et+` 1280w`,Dt+` 1920w`].join(`, `),width:3840,height:2160},kt=`/assets/dsc04021-640-e265a616e9-nkY2Lcbr.webp`,At=`/assets/dsc04021-1280-96eb86b4d3-C742m3yC.webp`,jt=`/assets/dsc04021-1920-089104ab42-CwJh7kwK.webp`,Mt={src:At,large:jt,srcSet:[kt+` 640w`,At+` 1280w`,jt+` 1920w`].join(`, `),width:4240,height:2832},Nt=`/assets/dsc04022-640-b6ebe52104-CGBeQA0-.webp`,Pt=`/assets/dsc04022-1280-f92d9a3ed3-J1-zeypF.webp`,Ft=`/assets/dsc04022-1920-5ca2bb548a-Ci-eMLQj.webp`,It={src:Pt,large:Ft,srcSet:[Nt+` 640w`,Pt+` 1280w`,Ft+` 1920w`].join(`, `),width:4240,height:2832},Lt=`/assets/dsc04108-640-7798ba709c-CTm-Vd6j.webp`,Rt=`/assets/dsc04108-1280-6169faa508-CIr-0gmU.webp`,zt=`/assets/dsc04108-1920-6b678e62f5-_TSGYGSp.webp`,Bt={src:Rt,large:zt,srcSet:[Lt+` 640w`,Rt+` 1280w`,zt+` 1920w`].join(`, `),width:4240,height:2832},Vt=`/assets/dsc04158-640-41bc59a645-Dvc6bFkI.webp`,Ht=`/assets/dsc04158-1280-26c481932f-C4jtRNcv.webp`,Ut=`/assets/dsc04158-1920-4f9c27bd30-CgoSFk4N.webp`,Wt={src:Ht,large:Ut,srcSet:[Vt+` 640w`,Ht+` 1280w`,Ut+` 1920w`].join(`, `),width:4240,height:2832},Gt=`/assets/dsc05614-640-38dd558268-BRruM28i.webp`,Kt=`/assets/dsc05614-1280-a78d1722b3-Bk1ioibC.webp`,qt=`/assets/dsc05614-1920-94934732db-Bmq9TruX.webp`,Jt={src:Kt,large:qt,srcSet:[Gt+` 640w`,Kt+` 1280w`,qt+` 1920w`].join(`, `),width:7952,height:5304},Yt=`/assets/dsc05626-640-287ec2171e-B-l-Q0Ut.webp`,Xt=`/assets/dsc05626-1280-e5da30a0c4-Ddi6kZU7.webp`,Zt=`/assets/dsc05626-1920-22da2fa66e-ROgIrP4y.webp`,Qt={src:Xt,large:Zt,srcSet:[Yt+` 640w`,Xt+` 1280w`,Zt+` 1920w`].join(`, `),width:7952,height:5304},$t=`/assets/dsc06839-640-cbf346e2ff--imyIwzA.webp`,en=`/assets/dsc06839-1280-8992820e65-DHHTwozM.webp`,tn=`/assets/dsc06839-1920-e2fa836830-rzUkJEev.webp`,nn={src:en,large:tn,srcSet:[$t+` 640w`,en+` 1280w`,tn+` 1920w`].join(`, `),width:7952,height:5304},rn=`/assets/dsc06840-640-4d32aa7ce5-Ci4GXu0v.webp`,an=`/assets/dsc06840-1280-b99026cf17-B_G8Ox4y.webp`,on=`/assets/dsc06840-1920-673233e320-C07vtQLM.webp`,sn={src:an,large:on,srcSet:[rn+` 640w`,an+` 1280w`,on+` 1920w`].join(`, `),width:7952,height:5304},cn=`/assets/dsc06857-640-0f87056d48-CeXZIdPV.webp`,ln=`/assets/dsc06857-1280-ee5e332ea1-BmG4k3af.webp`,un=`/assets/dsc06857-1920-fef1678942-DsBHV8JH.webp`,dn={src:ln,large:un,srcSet:[cn+` 640w`,ln+` 1280w`,un+` 1920w`].join(`, `),width:6956,height:4640},fn=`/assets/dsc06892-640-a9c1733569-CxxMpVqY.webp`,pn=`/assets/dsc06892-1280-86fc2fc8d6-snjkDOZq.webp`,mn=`/assets/dsc06892-1920-ef11c37ced-OMTeJN1q.webp`,hn={src:pn,large:mn,srcSet:[fn+` 640w`,pn+` 1280w`,mn+` 1920w`].join(`, `),width:7952,height:5304},gn=`/assets/dsc08493-640-e7eedeaacd-CJ_772SL.webp`,_n=`/assets/dsc08493-1280-bf7a086f99-Cn8bwOi-.webp`,vn=`/assets/dsc08493-1920-1f52cb0a93-DyEG6_ZE.webp`,yn={src:_n,large:vn,srcSet:[gn+` 640w`,_n+` 1280w`,vn+` 1920w`].join(`, `),width:3600,height:2401},bn=`/assets/dsc08593-640-7ef7a92dee-DPPFwer5.webp`,xn=`/assets/dsc08593-1280-96ea07905d-DHnkb2o-.webp`,Sn=`/assets/dsc08593-1920-749a163285-Yvl902-l.webp`,Cn={src:xn,large:Sn,srcSet:[bn+` 640w`,xn+` 1280w`,Sn+` 1920w`].join(`, `),width:3600,height:2401},wn=`/assets/dsc08871-640-ec5a6a135a-DoXJG1ds.webp`,Tn=`/assets/dsc08871-1280-abde28f57f-CjUc2MG1.webp`,En=`/assets/dsc08871-1920-e40bc402e5-CI5bNxp3.webp`,Dn={src:Tn,large:En,srcSet:[wn+` 640w`,Tn+` 1280w`,En+` 1920w`].join(`, `),width:7952,height:5304},On=`/assets/dsc09118-640-ded5b8ad9d-Br5f9CNP.webp`,kn=`/assets/dsc09118-1280-abe1891f17-Cp05pxoA.webp`,An=`/assets/dsc09118-1920-938e06d59f-DAUPPgRN.webp`,jn={src:kn,large:An,srcSet:[On+` 640w`,kn+` 1280w`,An+` 1920w`].join(`, `),width:2401,height:3600},Mn=`/assets/dsc09299-640-560abbdcd8-CKRHbd0h.webp`,Nn=`/assets/dsc09299-1280-ccbea5415f-D4mu1b6F.webp`,Pn=`/assets/dsc09299-1920-6ac7546c79-C0p8mYl0.webp`,Fn={src:Nn,large:Pn,srcSet:[Mn+` 640w`,Nn+` 1280w`,Pn+` 1920w`].join(`, `),width:3600,height:2401},In=`/assets/img-0262-640-1e4560100e-DD52ytrc.webp`,Ln=`/assets/img-0262-1280-c4219c74e5-F4KIedhM.webp`,Rn=`/assets/img-0262-1920-e2fa02b991-CCXtq3tS.webp`,zn={src:Ln,large:Rn,srcSet:[In+` 640w`,Ln+` 1280w`,Rn+` 1920w`].join(`, `),width:6e3,height:3368},Bn=`/assets/img-0274-640-25fc688599-DCce6tEW.webp`,Vn=`/assets/img-0274-1280-c3b68693ba-B5GgcuZ8.webp`,Hn=`/assets/img-0274-1920-f29500f5e5-DNZIFnkR.webp`,Un={src:Vn,large:Hn,srcSet:[Bn+` 640w`,Vn+` 1280w`,Hn+` 1920w`].join(`, `),width:6e3,height:3368},Wn=`/assets/img-0328-640-821c156490-DhtKIHMP.webp`,Gn=`/assets/img-0328-1280-e223230c99-IdEcTsAS.webp`,Kn=`/assets/img-0328-1920-c33231f867-DcA420hd.webp`,qn={src:Gn,large:Kn,srcSet:[Wn+` 640w`,Gn+` 1280w`,Kn+` 1920w`].join(`, `),width:6e3,height:3368},Jn=`/assets/img-0926-640-8b866e55f2-CRB_QqTq.webp`,Yn=`/assets/img-0926-1280-d19779785b-Bfi4Nazb.webp`,Xn=`/assets/img-0926-1920-ff04bb9545-gKdbly1W.webp`,Zn={src:Yn,large:Xn,srcSet:[Jn+` 640w`,Yn+` 1280w`,Xn+` 1920w`].join(`, `),width:4032,height:3024},Qn=`/assets/img-1400-640-a82c8e5d57-SBcVcw_B.webp`,$n=`/assets/img-1400-1280-8beb83be63-C-TrAbKK.webp`,er=`/assets/img-1400-1920-885f0c8cdd-CLDeIvR1.webp`,tr={src:$n,large:er,srcSet:[Qn+` 640w`,$n+` 1280w`,er+` 1920w`].join(`, `),width:4032,height:3024},nr=`/assets/img-2161-640-0fc6e07aa6-DQJAc3kN.webp`,rr=`/assets/img-2161-1280-ae799d2dd3-CJ-vvqMw.webp`,ir=`/assets/img-2161-1920-a0f3609ead-B-CL3uP2.webp`,ar={src:rr,large:ir,srcSet:[nr+` 640w`,rr+` 1280w`,ir+` 1920w`].join(`, `),width:2900,height:1933},or=`/assets/img-2906-640-46c176c1a1-KMuClkRq.webp`,sr=`/assets/img-2906-1280-f254a39ef2-6XDx7RJz.webp`,cr=`/assets/img-2906-1920-fd9c77339f-iTzpTWwN.webp`,lr={src:sr,large:cr,srcSet:[or+` 640w`,sr+` 1280w`,cr+` 1920w`].join(`, `),width:3024,height:4032},ur=`/assets/img-3134-640-67441d635a-BTap33nv.webp`,dr=`/assets/img-3134-1280-fd813235c3-DrGu09XD.webp`,fr=`/assets/img-3134-1919-eab65fe7e8-rc099HMe.webp`,pr={src:dr,large:fr,srcSet:[ur+` 640w`,dr+` 1280w`,fr+` 1919w`].join(`, `),width:1919,height:1119},mr=`/assets/img-3135-640-1dec2b8d85-7MSFCZ3G.webp`,hr=`/assets/img-3135-1280-8209aa5b36-CY207Zz8.webp`,gr=`/assets/img-3135-1893-abeb4267df-DNQ7TcfW.webp`,_r={src:hr,large:gr,srcSet:[mr+` 640w`,hr+` 1280w`,gr+` 1893w`].join(`, `),width:1893,height:1103},vr=`/assets/img-3370-640-e240e73bc1-mClieTZp.webp`,yr=`/assets/img-3370-1280-4f0f198be3-elSfpu5z.webp`,br=`/assets/img-3370-1920-416b46f111-CLs5Bjom.webp`,xr={src:yr,large:br,srcSet:[vr+` 640w`,yr+` 1280w`,br+` 1920w`].join(`, `),width:3024,height:4032},Sr=`/assets/img-3432-640-48b62474bd--qXoZ62L.webp`,Cr=`/assets/img-3432-1280-5683dac2b9-CFiE0oSI.webp`,wr=`/assets/img-3432-1600-6dbb38ef3e-B_3PtGEq.webp`,Tr={src:Cr,large:wr,srcSet:[Sr+` 640w`,Cr+` 1280w`,wr+` 1600w`].join(`, `),width:1600,height:1200},Er=`/assets/img-5154-640-47c1f93c5f-B-i8xkSN.webp`,Dr=`/assets/img-5154-1280-078d3eadad-DFPw3RS6.webp`,Or=`/assets/img-5154-1920-b46a5d0028-DL1Fr5ZI.webp`,kr={src:Dr,large:Or,srcSet:[Er+` 640w`,Dr+` 1280w`,Or+` 1920w`].join(`, `),width:3024,height:4032},Ar=`/assets/img-5895-640-488226e54b-KpPxZJRM.webp`,jr=`/assets/img-5895-1280-3a758dd699-Cr5Np2JL.webp`,Mr=`/assets/img-5895-1920-5805490f4b-BMWYTp5f.webp`,Nr={src:jr,large:Mr,srcSet:[Ar+` 640w`,jr+` 1280w`,Mr+` 1920w`].join(`, `),width:2123,height:1206},Pr=`/assets/img-6983-640-c7869d41d0-C6PEGMtM.webp`,Fr=`/assets/img-6983-1280-271966c0dd-CwG0kDiS.webp`,Ir=`/assets/img-6983-1920-2b0a6c7cde-LDvRig-B.webp`,Lr={src:Fr,large:Ir,srcSet:[Pr+` 640w`,Fr+` 1280w`,Ir+` 1920w`].join(`, `),width:3508,height:2480},Rr=`/assets/img-7013-640-473dd16eb0-BodGG9Tn.webp`,zr=`/assets/img-7013-1280-17f2ff90a1-BtIct2-t.webp`,Br=`/assets/img-7013-1920-f328bd314c-7HNAK0Xg.webp`,Vr={src:zr,large:Br,srcSet:[Rr+` 640w`,zr+` 1280w`,Br+` 1920w`].join(`, `),width:2480,height:3508},Hr=`/assets/if-fish-could-swim-640-925f5efba5-CH3f2p2f.webp`,Ur=`/assets/if-fish-could-swim-1280-1b2dd01672-CGJ5GdVs.webp`,Wr=`/assets/if-fish-could-swim-1904-1fee797150-D2VhUg-o.webp`,Gr={src:Ur,large:Wr,srcSet:[Hr+` 640w`,Ur+` 1280w`,Wr+` 1904w`].join(`, `),width:1904,height:1063},Kr=`/assets/p1580272-640-50a39b60f6-CPyu4_Mg.webp`,qr=`/assets/p1580272-1280-c0a81da6d4-DRsSBh9R.webp`,Jr=`/assets/p1580272-1536-780fb92de8-dzWlwRbV.webp`,Yr={src:qr,large:Jr,srcSet:[Kr+` 640w`,qr+` 1280w`,Jr+` 1536w`].join(`, `),width:1536,height:1536},Xr=`/assets/p1580405-640-04e97f50b5-CJApaf9e.webp`,Zr=`/assets/p1580405-1280-08d3a2c43e-C1UF-fHe.webp`,Qr=`/assets/p1580405-1920-bc8ce48325-xXq3yVbI.webp`,$r={src:Zr,large:Qr,srcSet:[Xr+` 640w`,Zr+` 1280w`,Qr+` 1920w`].join(`, `),width:2048,height:1536},ei=`/assets/screenshot-2024-12-09-220745-640-e6b18d576b-DzuHIZTv.webp`,ti=`/assets/screenshot-2024-12-09-220745-1183-e2289e96dd-CWMm3M-D.webp`,ni={src:ti,large:ti,srcSet:[ei+` 640w`,ti+` 1183w`].join(`, `),width:1183,height:663},ri=`/assets/screenshot-2024-12-09-221058-640-aba1f005db-BZHHK_Pe.webp`,ii=`/assets/screenshot-2024-12-09-221058-1280-8a01e166d2-C9DYneC8.webp`,ai=`/assets/screenshot-2024-12-09-221058-1355-bc96a59ccc-DMFbNT9w.webp`,oi={src:ii,large:ai,srcSet:[ri+` 640w`,ii+` 1280w`,ai+` 1355w`].join(`, `),width:1355,height:1013},si=`/assets/screenshot-2026-03-03-123659-640-9e17abd3aa-BRNGboeF.webp`,ci=`/assets/screenshot-2026-03-03-123659-681-43d22c40c0-Bly1z5jm.webp`,li={src:ci,large:ci,srcSet:[si+` 640w`,ci+` 681w`].join(`, `),width:681,height:429},ui=`/assets/screenshot-2026-03-24-032121-640-d00fb639d3-DovjC4UX.webp`,di=`/assets/screenshot-2026-03-24-032121-1113-2b46a37725-Gyl0u8dY.webp`,fi={src:di,large:di,srcSet:[ui+` 640w`,di+` 1113w`].join(`, `),width:1113,height:735},pi=`/assets/screenshot-2026-04-01-181512-640-18369e3dd0-BuFC_qkG.webp`,mi=`/assets/screenshot-2026-04-01-181512-1280-d5bfecbfda-CT1bYFIU.webp`,hi=`/assets/screenshot-2026-04-01-181512-1919-0abed786a3-qfIdRHcF.webp`,gi={src:mi,large:hi,srcSet:[pi+` 640w`,mi+` 1280w`,hi+` 1919w`].join(`, `),width:1919,height:1062},_i=`/assets/screenshot-2026-04-13-164400-640-7b94218e0e-CsOhciaY.webp`,vi=`/assets/screenshot-2026-04-13-164400-1280-3096ce7610-BqK5uACK.webp`,yi=`/assets/screenshot-2026-04-13-164400-1919-897d234b2f-DOGrShzU.webp`,bi={src:vi,large:yi,srcSet:[_i+` 640w`,vi+` 1280w`,yi+` 1919w`].join(`, `),width:1919,height:1143},xi=`/assets/screenshot-2026-04-21-170922-640-7312525f30-ClYh5Ghe.webp`,Si=`/assets/screenshot-2026-04-21-170922-677-ce7b0e5991-By4S8wMW.webp`,Ci={src:Si,large:Si,srcSet:[xi+` 640w`,Si+` 677w`].join(`, `),width:677,height:415},wi=`/assets/screenshot-2026-05-07-050528-640-28ebcab643-dKA6VSo8.webp`,Ti=`/assets/screenshot-2026-05-07-050528-1280-ba05d8d35d-cAXBEx3g.webp`,Ei=`/assets/screenshot-2026-05-07-050528-1662-cc0945354b-BLubGd3-.webp`,Di={src:Ti,large:Ei,srcSet:[wi+` 640w`,Ti+` 1280w`,Ei+` 1662w`].join(`, `),width:1662,height:722},Oi=`/assets/screenshot-2026-05-07-072007-640-d2d4333a68-C_sqIh2k.webp`,ki=`/assets/screenshot-2026-05-07-072007-1075-72d34d54e2-Z6jvf__9.webp`,Ai={src:ki,large:ki,srcSet:[Oi+` 640w`,ki+` 1075w`].join(`, `),width:1075,height:662},ji=`data:image/webp;base64,UklGRvgHAABXRUJQVlA4IOwHAACQbQCdASqAApABPm02mEkkLCgkInFYUYANiWlu4XXxxjfXamPvBd8ocTzmMluxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsHxsBUpWHKh35n35n35n35n35n35n35nq4zRwTOPgzKT5VTIrVket7FUxXhSjzmMluxsHxsHxsHuSJhm3UyzirWMrQZyZH4xEaOxm+nfkRQ6lD52xRBRjf1zGS3Y2D42D42D42D3Kl6xBcPYEOUfV58+O77lSQ+omJTCPsCuzC1NkkLs0fxV6G69rC1o5zlzGe6u4mc8LPIJ5hPQI7lIo7B8bB8bB8bB8bB7mTQ/ziaQfzV23EL6azd9JX5e/f4SfvX/Id9wtXVGGhK4jGfeRjWNz05VfYlwq3HnMZLdjYPjYPc3pq0IQ2litVipVSPiHyP9z5ODFeFKD1W2w6a03sfHj1b3W5LD+oDMebhSjzmMluxsHxdD3wCr1RxWOb8oA+/M+/Jq4FVU/FS6XVxr114KUecxkt2Ng+LjDGuhqvgJt7D8UevenqU9foEzowMhnBNty97eTvClHnMZLdjHwvoHw3AvOn6P5ipgHlA2+6HNg5oKUQYvQkLpCYXdgeijr9X42D42D42D42DkgcOjju3AZfftacFm5Z6+N1D9SdTUa9LBNFs32OuEoyvO8+xo1EoRh+WKrFvzwYyiHYTWSrGQByjsH5jJbsbB8bB8bCeFkGAgIf3KipK4jQ/PD5zJltFNTVfx73XwALCPa1VjCPk+CYIyIvZgflk7LqEvkcC5TvfPS39LTpSD1KffmffmffmffmVfSD32jD1NvzSk2lmteqdedVeQbrVhJRe07W8OM2kDsTbis4GlsdTbp//RzeI+jmffmffmffmffmfft8qAyhEIfpR6P1bNpkqIlrcaMwzsyPFKE5jJbsbB8bB8bB8bB8cgX0DImYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPjYPcgA/v/MFgAAAAAAAAAAEOzGYv4YKaa+n5UZoff0cLBEvmMvZMBQFwUqGgU/OLGGMiofu56m46Q7ZyED/ZjH8quBHJrWJY2uXUINkvJwKkXdNY/MQ3rIdbZ8vwgK1VYz2pEr/3x6xbJKZ4xoIqCMaufmOofM8dVgQTpniZ0H7Xhm1aYtXcLqhgF2KtJ+NMTwaZ2vt5eYQMRmCACCtiT15XkeCw+CdALtckSWcxwRtVyLTDgdFvkB1SvfO8r2j/QbuNHKTcichileuX8TBqhb7AjF5rF3k8h3vqj/wgBwvmYIMQ3qD8TapPj+enQjkvnRR4UCd4mX2HPPQZQLD2bWe5lxPJdm6k/0bk2SAFCh4Yqu+wI0EcVeIfckAlWZoRmPIvAsd4n+4bLv3Rpv+5sGASHTlIOQrdfkIID+qHJzZsplzyjKvNZgfDs1GkwahN3GKqtdjkqFHNtA3iv8/U7R/ADNxDI9bgvdGhyfsQOZrHLufOKf8GmTW/qanhsD/8OMtNo0w63aAsp6uFx/8s9ST7XzeNtVamOR2TX/aLGS1r5idKm33T67hkeaoPH6cmSAwSXbxOKdhuYrFZtNuxzhh+PJtG2LuL32jw1/jQ6GLkJi+H07bp7+p0yDjg2BvCcIbTQJTJbxm+3q5SU9MHoKnBpNbvlrkibYNul/pB5B+ppdX465S4Az2ZrntsQ7JZIQcTCN4W30GV4npIdweEJsaludRo/gq/WzQzr7yf9rZBnl4BISwyg97gd+9vESqpWXw+drKaRPLKvz+WPkP7/A4LXd5yTvoGYjVle++c8v3RFJgBfiBoLFVWoqokhA2EE8k/EIr2ZEdO0Btj26jNLFz3u4pCh0JBcYB+LztEt18a8wg5mc8rZIq06MSmV9l+cBBgF3vsVWhb0VyHlB346/wgj8wZU9y/eWmfH9fVj7jNFkuebqXcprGa3xQgLRI939eYnxIgJ7r+4Irv5chbE30p+vAbCbIRDE5diACROctCfLUwMqKqHFk59ftTTwPKzPoHFD3lgfaUpP04p1WqSLK/iEZAKmdIKTG0CY6oc961HmMHrCQb+xnfxh3832BrXj0f98WmJtpzo479epEPN6mM81nmBDy4kM6RHpettGY4nVLSOJFRKcf3le7hANlSpE6TwzuLEBo/E8gXnU2jjQ25yhDh/uaW2EtVNOpA9hmHuuJKCyouB5A2+39at2mOTM5vRXbjgeRawDmT2PbLfT0f5rWsvS7IDbxmHLhsmqMHHf/7nTYb8z8AodhmLg9QZ3AxZanGMcDt/zj73pBpmNfXzyea+JndYpRAylneQBhoXkiKBnNDl8ge/t83xE54BJqlVXOe09mqWmjE6iIME5Z56cqZHMtH7KAtqHXF87Fy0LouSnxX0xBmQ4v2RbJSkmAAmMDMiGuyK60omPu7E2FQZv+0EVR05zrWFxa9GqX2RVX7TEdqkXyn7oPLx3v1EnUnTPjjxPX8RG+12WTSYuyK+/DHoLyHZXwnAAAAAAAAAAAAAAAAAAAAA=`,Mi=`/assets/screenshot-2026-09-11-231644-1280-d7de8500c9-BurMcqTW.webp`,Ni=`/assets/screenshot-2026-09-11-231644-1917-4e0a382198-B6c8p1bP.webp`,Pi={src:Mi,large:Ni,srcSet:[ji+` 640w`,Mi+` 1280w`,Ni+` 1917w`].join(`, `),width:1917,height:1198},Fi=`/assets/screenshot-2026-09-11-231723-640-94d38884bb-B07JzWmJ.webp`,Ii=`/assets/screenshot-2026-09-11-231723-1280-4d06093199-CLOJg6Kh.webp`,Li=`/assets/screenshot-2026-09-11-231723-1917-43cd27752a-euK_V5YL.webp`,Ri={src:Ii,large:Li,srcSet:[Fi+` 640w`,Ii+` 1280w`,Li+` 1917w`].join(`, `),width:1917,height:1130},zi=`/assets/screenshot-2026-09-11-231905-640-a59d4329db-DV38P3ty.webp`,Bi=`/assets/screenshot-2026-09-11-231905-1280-f8ab0baee4-gAQ1h4F4.webp`,Vi=`/assets/screenshot-2026-09-11-231905-1917-b120cda52a-D73L6SWQ.webp`,Hi={src:Bi,large:Vi,srcSet:[zi+` 640w`,Bi+` 1280w`,Vi+` 1917w`].join(`, `),width:1917,height:1032},Ui=`/assets/screenshot-2026-09-11-232019-640-ab50d945e8-DbrM3SgY.webp`,Wi=`/assets/screenshot-2026-09-11-232019-1280-b5531d67b3-CUmd_XVa.webp`,Gi=`/assets/screenshot-2026-09-11-232019-1917-d80456c2ac-Gwhk7Y8I.webp`,Ki={src:Wi,large:Gi,srcSet:[Ui+` 640w`,Wi+` 1280w`,Gi+` 1917w`].join(`, `),width:1917,height:1198},qi=`/assets/screenshot-2026-09-11-232614-640-ae1ef8f99e-H3uyx7d8.webp`,Ji=`/assets/screenshot-2026-09-11-232614-1280-2816aa1cd1-Dt1oti76.webp`,Yi=`/assets/screenshot-2026-09-11-232614-1916-8355395ee1-CIdSmnkB.webp`,Xi={src:Ji,large:Yi,srcSet:[qi+` 640w`,Ji+` 1280w`,Yi+` 1916w`].join(`, `),width:1916,height:1063},Zi=`/assets/screenshot-2026-09-11-233117-640-d51a6bb135-ItfUjKDK.webp`,Qi=`/assets/screenshot-2026-09-11-233117-1280-c7958fc6d9-DVUyJY2P.webp`,$i=`/assets/screenshot-2026-09-11-233117-1917-d428cc63a1-BVW0jJT3.webp`,ea={src:Qi,large:$i,srcSet:[Zi+` 640w`,Qi+` 1280w`,$i+` 1917w`].join(`, `),width:1917,height:1053},ta=`/assets/screenshot-2026-09-12-002502-640-d932825f18-B7ZCLhQH.webp`,na=`/assets/screenshot-2026-09-12-002502-1280-b11c18ab83-o3ZSqaPd.webp`,ra=`/assets/screenshot-2026-09-12-002502-1363-6d9783bf59-E33iNkvt.webp`,ia={src:na,large:ra,srcSet:[ta+` 640w`,na+` 1280w`,ra+` 1363w`].join(`, `),width:1363,height:1021},aa=`/assets/screenshot-2026-09-17-002031-640-31e9e3c02b-CTndjK4I.webp`,oa=`/assets/screenshot-2026-09-17-002031-1280-adfd0abea1-2LT1iRDw.webp`,sa=`/assets/screenshot-2026-09-17-002031-1892-2b7a258bff-BrgQx5jh.webp`,ca={src:oa,large:sa,srcSet:[aa+` 640w`,oa+` 1280w`,sa+` 1892w`].join(`, `),width:1892,height:1078},la=`/assets/screenshot-2026-09-17-002444-640-f9b1ad6ba5-CTjrgV2n.webp`,ua=`/assets/screenshot-2026-09-17-002444-1223-a0a716fb5e-C2dLIRsA.webp`,da={src:ua,large:ua,srcSet:[la+` 640w`,ua+` 1223w`].join(`, `),width:1223,height:817},fa=`/assets/screenshot-2026-09-22-213844-640-1775a8efe4-BsFq0EJI.webp`,pa=`/assets/screenshot-2026-09-22-213844-1280-0607a1803e-CmyEOvvI.webp`,ma=`/assets/screenshot-2026-09-22-213844-1862-ee758a8d79--80COBqP.webp`,ha={src:pa,large:ma,srcSet:[fa+` 640w`,pa+` 1280w`,ma+` 1862w`].join(`, `),width:1862,height:1047},ga=`/assets/screenshot-2026-09-22-214613-640-dcc85c8e7f-CV6DV45K.webp`,_a=`/assets/screenshot-2026-09-22-214613-1280-9c8287c8c7-CyXzxk8i.webp`,va=`/assets/screenshot-2026-09-22-214613-1917-f25b62d736-CUc7Ts4h.webp`,ya={src:_a,large:va,srcSet:[ga+` 640w`,_a+` 1280w`,va+` 1917w`].join(`, `),width:1917,height:1027},ba=`/assets/screenshot-2026-09-22-214753-640-f74645548e-BfrEW511.webp`,xa=`/assets/screenshot-2026-09-22-214753-1135-0781b150c7-DHwyPQz8.webp`,Sa={src:xa,large:xa,srcSet:[ba+` 640w`,xa+` 1135w`].join(`, `),width:1135,height:632},Ca=`/assets/screenshot-2026-09-22-214859-640-a690901e73-C2WP_-xU.webp`,wa=`/assets/screenshot-2026-09-22-214859-1280-b089149108-Dppr6rXm.webp`,Ta=`/assets/screenshot-2026-09-22-214859-1515-82a16d585f-DAfGsN_G.webp`,Ea={src:wa,large:Ta,srcSet:[Ca+` 640w`,wa+` 1280w`,Ta+` 1515w`].join(`, `),width:1515,height:678},Da=`/assets/screenshot-2026-09-22-215006-640-15eec678af-gybemmqW.webp`,Oa=`/assets/screenshot-2026-09-22-215006-1280-8493c1bd73-Bk_4QoPi.webp`,ka=`/assets/screenshot-2026-09-22-215006-1581-e5f08d70a1-CnCBJark.webp`,Aa={src:Oa,large:ka,srcSet:[Da+` 640w`,Oa+` 1280w`,ka+` 1581w`].join(`, `),width:1581,height:867},ja=`/assets/screenshot-2026-10-03-003523-640-052a11fad3-CWISMKET.webp`,Ma=`/assets/screenshot-2026-10-03-003523-1280-4e82bbadb7-CkJ9Nxhr.webp`,Na=`/assets/screenshot-2026-10-03-003523-1861-9ef6662d4e-CSqws-Ob.webp`,Pa={src:Ma,large:Na,srcSet:[ja+` 640w`,Ma+` 1280w`,Na+` 1861w`].join(`, `),width:1861,height:932},Fa=`/assets/screenshot-2026-10-03-003603-640-cb9507b048-xWkePd1U.webp`,Ia=`/assets/screenshot-2026-10-03-003603-1280-14733148b6-W_WGslBN.webp`,La=`/assets/screenshot-2026-10-03-003603-1878-3af0a91ae3-Dd1_U76I.webp`,Ra={src:Ia,large:La,srcSet:[Fa+` 640w`,Ia+` 1280w`,La+` 1878w`].join(`, `),width:1878,height:938},za=`/assets/screenshot-2026-10-03-003736-640-3d7da1bdd7-ctaCbO8B.webp`,Ba=`/assets/screenshot-2026-10-03-003736-912-aace722924-DFtjDstW.webp`,Va={src:Ba,large:Ba,srcSet:[za+` 640w`,Ba+` 912w`].join(`, `),width:912,height:755},Ha=`/assets/screenshot-2026-10-03-003801-640-6cf0dca2dd-DSBz_4D2.webp`,Ua=`/assets/screenshot-2026-10-03-003801-917-33d4f49203-E7O_Y7DN.webp`,Wa={src:Ua,large:Ua,srcSet:[Ha+` 640w`,Ua+` 917w`].join(`, `),width:917,height:642},Ga=`/assets/screenshot-2026-10-03-005121-640-9c1ca38818-CotpUAs5.webp`,Ka=`/assets/screenshot-2026-10-03-005121-1280-1a04f94653-shSUywVV.webp`,qa=`/assets/screenshot-2026-10-03-005121-1650-d46cf8b2ee-CHlw_crN.webp`,Ja={src:Ka,large:qa,srcSet:[Ga+` 640w`,Ka+` 1280w`,qa+` 1650w`].join(`, `),width:1650,height:755},Ya=`/assets/screenshot-2026-10-03-005313-640-790670e7d7-DU8RBQQJ.webp`,Xa=`/assets/screenshot-2026-10-03-005313-1215-e5fac99294-5quPl2OV.webp`,Za={src:Xa,large:Xa,srcSet:[Ya+` 640w`,Xa+` 1215w`].join(`, `),width:1215,height:742},Qa=`/assets/screenshot-2026-10-03-005351-640-6302ed9c18-D_fBtDTS.webp`,$a=`/assets/screenshot-2026-10-03-005351-1280-9f8d633ee2-DiQMwER4.webp`,eo=`/assets/screenshot-2026-10-03-005351-1847-37d7637eeb-BGi5z_2e.webp`,to={src:$a,large:eo,srcSet:[Qa+` 640w`,$a+` 1280w`,eo+` 1847w`].join(`, `),width:1847,height:537},no=`/assets/screenshot-2026-10-03-005412-640-17eaeac1f7-CMSIU5Eo.webp`,ro=`/assets/screenshot-2026-10-03-005412-1280-64dc79b12c-CEyaGAvB.webp`,io=`/assets/screenshot-2026-10-03-005412-1381-278ce31649-BH0r3Jda.webp`,ao={src:ro,large:io,srcSet:[no+` 640w`,ro+` 1280w`,io+` 1381w`].join(`, `),width:1381,height:805},oo=`/assets/screenshot-2026-10-03-005832-640-c03ed6147d-CpBLTgkz.webp`,so=`/assets/screenshot-2026-10-03-005832-1280-7d77aae305-D2Wxec0y.webp`,co=`/assets/screenshot-2026-10-03-005832-1327-50a07ec365-DcHLxFSr.webp`,lo={src:so,large:co,srcSet:[oo+` 640w`,so+` 1280w`,co+` 1327w`].join(`, `),width:1327,height:631},uo=`/assets/screenshot-2026-10-04-004443-640-49324df173-Ceq0mDAj.webp`,fo=`/assets/screenshot-2026-10-04-004443-1280-23179ae4fd-NEsVXxkw.webp`,po=`/assets/screenshot-2026-10-04-004443-1552-812d95b2cd-BUNJ1tBU.webp`,mo={src:fo,large:po,srcSet:[uo+` 640w`,fo+` 1280w`,po+` 1552w`].join(`, `),width:1552,height:796},ho=`/assets/screenshot-2026-10-04-214355-640-c12dc73d57-BvW0O7y1.webp`,go=`/assets/screenshot-2026-10-04-214355-1280-bffc9b0231-M4H9TL8k.webp`,_o=`/assets/screenshot-2026-10-04-214355-1611-a53cf15ffe-CbQCzi6K.webp`,vo={src:go,large:_o,srcSet:[ho+` 640w`,go+` 1280w`,_o+` 1611w`].join(`, `),width:1611,height:643},yo=`/assets/screenshot-2026-10-04-214440-640-d0c57735f7-DGqY1xa6.webp`,bo=`/assets/screenshot-2026-10-04-214440-1280-e9010dd692-76o8vLV7.webp`,xo=`/assets/screenshot-2026-10-04-214440-1641-49bc272a43-0xcJ9UCX.webp`,So={src:bo,large:xo,srcSet:[yo+` 640w`,bo+` 1280w`,xo+` 1641w`].join(`, `),width:1641,height:698},Co=`/assets/screenshot-2026-10-04-214526-640-27caac2872-Dj7BGwWi.webp`,wo=`/assets/screenshot-2026-10-04-214526-1107-43ef79312b-B3zXdj46.webp`,To={src:wo,large:wo,srcSet:[Co+` 640w`,wo+` 1107w`].join(`, `),width:1107,height:661},Eo=`/assets/screenshot-2026-10-04-214612-640-61d474ae70-DVPxTUN5.webp`,Do=`/assets/screenshot-2026-10-04-214612-1280-5707fbb319-ypGXKMIF.webp`,Oo=`/assets/screenshot-2026-10-04-214612-1327-2c706b639e-Cwd6-ABA.webp`,ko={src:Do,large:Oo,srcSet:[Eo+` 640w`,Do+` 1280w`,Oo+` 1327w`].join(`, `),width:1327,height:697},Ao=`/assets/screenshot-2026-10-04-214748-640-705696508a-BkKruMZV.webp`,jo=`/assets/screenshot-2026-10-04-214748-1280-5212830b8d-BqdgAHV3.webp`,Mo=`/assets/screenshot-2026-10-04-214748-1422-96bafbed76-BxJd0HKE.webp`,No={src:jo,large:Mo,srcSet:[Ao+` 640w`,jo+` 1280w`,Mo+` 1422w`].join(`, `),width:1422,height:807},Po=`/assets/screenshot-2026-10-04-214816-640-91989ac826-DL4F9uii.webp`,Fo=`/assets/screenshot-2026-10-04-214816-1280-cb8b273265-DR5JVxHu.webp`,Io=`/assets/screenshot-2026-10-04-214816-1371-125d22f00d-BgfeYV8R.webp`,Lo={src:Fo,large:Io,srcSet:[Po+` 640w`,Fo+` 1280w`,Io+` 1371w`].join(`, `),width:1371,height:796},Ro=`/assets/screenshot-2026-10-04-232833-640-a02a20da6a-BeWiUHX6.webp`,zo=`/assets/screenshot-2026-10-04-232833-1280-5d3c479b8e-DMb9a7Hn.webp`,Bo=`/assets/screenshot-2026-10-04-232833-1562-fde5941f1a-BmAvSezi.webp`,Vo={src:zo,large:Bo,srcSet:[Ro+` 640w`,zo+` 1280w`,Bo+` 1562w`].join(`, `),width:1562,height:881},Ho=`/assets/screenshot-2026-10-04-232902-640-e9375aeec8-bsI88Q3W.webp`,Uo=`/assets/screenshot-2026-10-04-232902-1280-4fa303d1da-BjMyL0X_.webp`,Wo=`/assets/screenshot-2026-10-04-232902-1566-1fd09480c8-K75pcbBy.webp`,Go={src:Uo,large:Wo,srcSet:[Ho+` 640w`,Uo+` 1280w`,Wo+` 1566w`].join(`, `),width:1566,height:875},Ko=`/assets/screenshot-2026-10-04-232924-640-9d2847a2e1-CWxgIrJH.webp`,qo=`/assets/screenshot-2026-10-04-232924-1280-0ae43dd1ea-Bke38zly.webp`,Jo=`/assets/screenshot-2026-10-04-232924-1573-e11114e569-B8G4x6y7.webp`,Yo={src:qo,large:Jo,srcSet:[Ko+` 640w`,qo+` 1280w`,Jo+` 1573w`].join(`, `),width:1573,height:876},Xo=`/assets/screenshot-2026-10-05-153822-640-561a261d9e-gZAjGqOO.webp`,Zo=`/assets/screenshot-2026-10-05-153822-1280-a39a3e7a38-BDF31cJ0.webp`,Qo=`/assets/screenshot-2026-10-05-153822-1591-687e9e26f2-CIJ6364C.webp`,$o={src:Zo,large:Qo,srcSet:[Xo+` 640w`,Zo+` 1280w`,Qo+` 1591w`].join(`, `),width:1591,height:765},es=`/assets/screenshot-2024-09-03-224646-640-31f5affbdc-lLCqBzE5.webp`,ts=`/assets/screenshot-2024-09-03-224646-1146-73c342b394-BzZy4lor.webp`,ns={src:ts,large:ts,srcSet:[es+` 640w`,ts+` 1146w`].join(`, `),width:1146,height:603},rs=`/assets/tdmovieout-12-640-bc52ea7fd1-C3SKu-an.webp`,is=`/assets/tdmovieout-12-1280-8e90eef049-D3oCWDqm.webp`,as={src:is,large:is,srcSet:[rs+` 640w`,is+` 1280w`].join(`, `),width:1280,height:720},os=`/assets/tdmovieout-18-640-9edd0f8a1b-6OxI-Cob.webp`,ss=`/assets/tdmovieout-18-1280-6ef3d533de-eS1pCHac.webp`,cs={src:ss,large:ss,srcSet:[os+` 640w`,ss+` 1280w`].join(`, `),width:1280,height:720},ls=`/assets/tdmovieout-23-640-b67c414a71-Djbr4DuY.webp`,us=`/assets/tdmovieout-23-1280-acc6b9c808-BDf5Ag0I.webp`,ds={src:us,large:us,srcSet:[ls+` 640w`,us+` 1280w`].join(`, `),width:1280,height:720},fs=`/assets/tdmovieout-27-640-9bcb867a7e-C5kgweWz.webp`,ps=`/assets/tdmovieout-27-1280-7da153ef07-DomEqhYM.webp`,ms={src:ps,large:ps,srcSet:[fs+` 640w`,ps+` 1280w`].join(`, `),width:1280,height:720},hs=`/assets/tdmovieout-3-640-9c9479fb14-BzKsW-18.webp`,gs=`/assets/tdmovieout-3-1280-254dbaf4db-DImgLfgD.webp`,_s={src:gs,large:gs,srcSet:[hs+` 640w`,gs+` 1280w`].join(`, `),width:1280,height:720},vs=`/assets/tdmovieout-31-640-6feeba0bb6-CMXKugH-.webp`,ys=`/assets/tdmovieout-31-1280-96d484bf9c-PnOyuh3v.webp`,bs={src:ys,large:ys,srcSet:[vs+` 640w`,ys+` 1280w`].join(`, `),width:1280,height:720},xs=`/assets/tdmovieout-37-640-8dd1e47a1f-BsZAHs7l.webp`,Ss=`/assets/tdmovieout-37-1280-5e7251db46-BmPVBxG0.webp`,Cs={src:Ss,large:Ss,srcSet:[xs+` 640w`,Ss+` 1280w`].join(`, `),width:1280,height:720},ws=`/assets/tdmovieout-41-640-387385ecf9-AAPLCdI5.webp`,Ts=`/assets/tdmovieout-41-1280-ea1829c971-DpUi2O5N.webp`,Es={src:Ts,large:Ts,srcSet:[ws+` 640w`,Ts+` 1280w`].join(`, `),width:1280,height:720},Ds=`/assets/tdmovieout-42-640-626104d42d-DQj-a3p4.webp`,Os=`/assets/tdmovieout-42-1280-403fe100d0-DFdlLOR2.webp`,ks={src:Os,large:Os,srcSet:[Ds+` 640w`,Os+` 1280w`].join(`, `),width:1280,height:720},As=`/assets/wacsmash1-640-3d150721c1-B_lddBQc.webp`,js=`/assets/wacsmash1-1280-ca886add14-DQImQWEI.webp`,Ms=`/assets/wacsmash1-1920-95655a1c69-BBg9yxKb.webp`,Ns={src:js,large:Ms,srcSet:[As+` 640w`,js+` 1280w`,Ms+` 1920w`].join(`, `),width:3600,height:2401},Ps=`/assets/windandthewisp-gameplay-screenshot-13-1920x1080-640-13d6152610-BrkBEOeH.webp`,Fs=`/assets/windandthewisp-gameplay-screenshot-13-1920x1080-1280-805f18d78e-CDITQcSl.webp`,Is=`/assets/windandthewisp-gameplay-screenshot-13-1920x1080-1920-25c7b58f34-DkdR8u4K.webp`,Ls={src:Fs,large:Is,srcSet:[Ps+` 640w`,Fs+` 1280w`,Is+` 1920w`].join(`, `),width:1920,height:1080},Rs=`/assets/windandthewisp-gameplay-screenshot-7-1920x1080-640-b13b53f90b-ndqkP0uM.webp`,zs=`/assets/windandthewisp-gameplay-screenshot-7-1920x1080-1280-9ec120d177-DLbgoq3m.webp`,Bs=`/assets/windandthewisp-gameplay-screenshot-7-1920x1080-1920-ece7f00e91-C7QJMatC.webp`,Vs={src:zs,large:Bs,srcSet:[Rs+` 640w`,zs+` 1280w`,Bs+` 1920w`].join(`, `),width:1920,height:1080},Hs=`/assets/aboutme-640-f94d8d4611-BBRbt1Sp.webp`,Us=`/assets/aboutme-1280-b6c9f42299-D0Z__DNV.webp`,Ws=`/assets/aboutme-1920-c154d4c140-CfdQIK-E.webp`,Gs={src:Us,large:Ws,srcSet:[Hs+` 640w`,Us+` 1280w`,Ws+` 1920w`].join(`, `),width:2360,height:1640},Ks=`/assets/agt-poster-640-987bf48263-Ds8vA0RA.webp`,qs=`/assets/agt-poster-1280-7422cef293-Cy-mfNTr.webp`,Js=`/assets/agt-poster-1920-149ccac13a-D0tkG1Qk.webp`,Ys={src:qs,large:Js,srcSet:[Ks+` 640w`,qs+` 1280w`,Js+` 1920w`].join(`, `),width:2900,height:3996},Xs=`/assets/agt10-640-373024895a-zwqnhnop.webp`,Zs=`/assets/agt10-1280-dc744693ab-DeGOe7SA.webp`,Qs=`/assets/agt10-1809-0c961d255f-C0MmrqfV.webp`,$s={src:Zs,large:Qs,srcSet:[Xs+` 640w`,Zs+` 1280w`,Qs+` 1809w`].join(`, `),width:1809,height:1206},ec=`/assets/agt11-640-dbc1d021fb-5eNmryBV.webp`,tc=`/assets/agt11-1280-02dcd96f1b-C_emU4-u.webp`,nc=`/assets/agt11-1809-065b3a3b64-C3t3SMFl.webp`,rc={src:tc,large:nc,srcSet:[ec+` 640w`,tc+` 1280w`,nc+` 1809w`].join(`, `),width:1809,height:1206},ic=`/assets/agt12-640-8cd3a450f3-DFIi09aH.webp`,ac=`/assets/agt12-1280-3d9fe865a2-21hXbGF3.webp`,oc=`/assets/agt12-1809-9f618d04ef-CLTaifjO.webp`,sc={src:ac,large:oc,srcSet:[ic+` 640w`,ac+` 1280w`,oc+` 1809w`].join(`, `),width:1809,height:1206},cc=`/assets/agt13-640-3261482054-DdcptvwV.webp`,lc=`/assets/agt13-1280-bcb50af198-CiU15k49.webp`,uc=`/assets/agt13-1809-35098683d7-BTUXm1WY.webp`,dc={src:lc,large:uc,srcSet:[cc+` 640w`,lc+` 1280w`,uc+` 1809w`].join(`, `),width:1809,height:1206},fc=`/assets/agt14-640-e651cfba97-CkaGXtY3.webp`,pc=`/assets/agt14-1280-9ce3294605-B367tKeL.webp`,mc=`/assets/agt14-1809-b0bb8566a8-B6paAJFR.webp`,hc={src:pc,large:mc,srcSet:[fc+` 640w`,pc+` 1280w`,mc+` 1809w`].join(`, `),width:1809,height:1206},gc=`/assets/agt15-640-4de20c9078-Dpy-QP4T.webp`,_c=`/assets/agt15-1280-2da84e85d7-DxXjnAMo.webp`,vc=`/assets/agt15-1809-0330df5f91-BEyxydJ8.webp`,yc={src:_c,large:vc,srcSet:[gc+` 640w`,_c+` 1280w`,vc+` 1809w`].join(`, `),width:1809,height:1206},bc=`/assets/agt16-640-58ddda1f42-B2rK62G_.webp`,xc=`/assets/agt16-1280-954d6d3035-Cc0v55mW.webp`,Sc=`/assets/agt16-1809-7d93232630-B00hG2Rb.webp`,Cc={src:xc,large:Sc,srcSet:[bc+` 640w`,xc+` 1280w`,Sc+` 1809w`].join(`, `),width:1809,height:1206},wc=`/assets/agt17-640-71861ff4df-BKJ6HNS9.webp`,Tc=`/assets/agt17-1280-97c39dbdb2-C3yJ4GAp.webp`,Ec=`/assets/agt17-1809-1e972fe6c4--UTTn0FH.webp`,Dc={src:Tc,large:Ec,srcSet:[wc+` 640w`,Tc+` 1280w`,Ec+` 1809w`].join(`, `),width:1809,height:1206},Oc=`/assets/agtanna-640-8188548343-Bn4zh7co.webp`,kc=`/assets/agtanna-1280-2009ae992a-Dju9YoLD.webp`,Ac=`/assets/agtanna-1920-6ffb1f030d-ek0iEkmf.webp`,jc={src:kc,large:Ac,srcSet:[Oc+` 640w`,kc+` 1280w`,Ac+` 1920w`].join(`, `),width:2286,height:1080},Mc=`/assets/agtdesign1-640-a856a56640-CaKwgi5X.webp`,Nc=`/assets/agtdesign1-1177-e7c0faa8f1-BJ-nIWAu.webp`,Pc={src:Nc,large:Nc,srcSet:[Mc+` 640w`,Nc+` 1177w`].join(`, `),width:1177,height:658},Fc=`/assets/agtdesign2-640-3381a5dcb8-CJDbZ5P9.webp`,Ic=`/assets/agtdesign2-1185-4835ea2f15-wilsLqiV.webp`,Lc={src:Ic,large:Ic,srcSet:[Fc+` 640w`,Ic+` 1185w`].join(`, `),width:1185,height:650},Rc=`/assets/agtdesign3-640-2677bc99b6-BgpsPjqa.webp`,zc=`/assets/agtdesign3-1187-76e3e60d91-uF5yqaxY.webp`,Bc={src:zc,large:zc,srcSet:[Rc+` 640w`,zc+` 1187w`].join(`, `),width:1187,height:553},Vc=`/assets/agtnarrative-640-c7fe9b9c1a-BWqVboWp.webp`,Hc=`/assets/agtnarrative-1280-0b42622a65-BVskxacM.webp`,Uc=`/assets/agtnarrative-1751-60e582e2b8-DFhnCVfn.webp`,Wc={src:Hc,large:Uc,srcSet:[Vc+` 640w`,Hc+` 1280w`,Uc+` 1751w`].join(`, `),width:1751,height:968},Gc=`/assets/agtpivot1-640-8e5f2d6908-BoJ80u6g.webp`,Kc=`/assets/agtpivot1-871-1083bb7cb0-Dv_Fscq1.webp`,qc={src:Kc,large:Kc,srcSet:[Gc+` 640w`,Kc+` 871w`].join(`, `),width:871,height:538},Jc=`/assets/agtpivot2-640-885f9d94d9-B5IKdCCX.webp`,Yc=`/assets/agtpivot2-1280-d39a8d3e07-dmu8S2dL.webp`,Xc=`/assets/agtpivot2-1600-0f73709ac2-Cjlredwj.webp`,Zc={src:Yc,large:Xc,srcSet:[Jc+` 640w`,Yc+` 1280w`,Xc+` 1600w`].join(`, `),width:1600,height:916},Qc=`/assets/agtplay-640-192065d572-BC6HA9nu.webp`,$c=`/assets/agtplay-1280-5f8ab0fb13-BXJ-zzWJ.webp`,el=`/assets/agtplay-1920-2d462faaca-CILDWw_S.webp`,tl={src:$c,large:el,srcSet:[Qc+` 640w`,$c+` 1280w`,el+` 1920w`].join(`, `),width:2622,height:1206},nl=`/assets/agtplay2-640-a84d27e22a-_VG4x_my.webp`,rl=`/assets/agtplay2-1280-a876df805e-DdtHKOcU.webp`,il=`/assets/agtplay2-1920-4f625cfa50-CjXzL0Jd.webp`,al={src:rl,large:il,srcSet:[nl+` 640w`,rl+` 1280w`,il+` 1920w`].join(`, `),width:2622,height:1206},ol=`/assets/agtsystem-640-e7cb64b33c-D5tnmnXX.webp`,sl=`/assets/agtsystem-1280-5b1790571a-D9GYIxbF.webp`,cl=`/assets/agtsystem-1920-cb4b2c7b27-C18e5uRl.webp`,ll={src:sl,large:cl,srcSet:[ol+` 640w`,sl+` 1280w`,cl+` 1920w`].join(`, `),width:2376,height:1060},ul=`/assets/agtusability-640-d5be8fab7d-nIFEuFzC.webp`,dl=`/assets/agtusability-1280-f1b4755982-ChjfPkDR.webp`,fl=`/assets/agtusability-1609-036f165abc-DMoKOGFs.webp`,pl={src:dl,large:fl,srcSet:[ul+` 640w`,dl+` 1280w`,fl+` 1609w`].join(`, `),width:1609,height:1934},ml=`/assets/arduino1-640-8d937301c7-sSRtdZg-.webp`,hl=`/assets/arduino1-1105-a7ab125ad8-DgRHKb2s.webp`,gl={src:hl,large:hl,srcSet:[ml+` 640w`,hl+` 1105w`].join(`, `),width:1105,height:1105},_l=`/assets/becomeyou1-640-6407c9e0c0-DbCs-SNY.webp`,vl=`/assets/becomeyou1-1280-19a5629f86-CjdywCsE.webp`,yl=`/assets/becomeyou1-1920-5e20c08a3c-BIf8i8ou.webp`,bl={src:vl,large:yl,srcSet:[_l+` 640w`,vl+` 1280w`,yl+` 1920w`].join(`, `),width:2028,height:1170},xl=`/assets/benoit-640-c5dd768128-B8BE2MS8.webp`,Sl=`/assets/benoit-1280-db9d3b29e0-BzFvtOQ9.webp`,Cl=`/assets/benoit-1920-5667adbd72-BQWbVbhv.webp`,wl={src:Sl,large:Cl,srcSet:[xl+` 640w`,Sl+` 1280w`,Cl+` 1920w`].join(`, `),width:2160,height:2880},Tl=`/assets/benoit1-640-2a2ff3ae87-LkcQQt6W.webp`,El=`/assets/benoit1-1280-13827a161e-XXf2_l1q.webp`,Dl=`/assets/benoit1-1920-e6b62777d0-Uiyymrxi.webp`,Ol={src:El,large:Dl,srcSet:[Tl+` 640w`,El+` 1280w`,Dl+` 1920w`].join(`, `),width:2160,height:2880},kl=`/assets/benoit2-640-86d87812f4-O1cNOZO8.webp`,Al=`/assets/benoit2-1280-02281e7f1c-D4lS_www.webp`,jl=`/assets/benoit2-1920-19703bc2ca-DbQ4XJBw.webp`,Ml={src:Al,large:jl,srcSet:[kl+` 640w`,Al+` 1280w`,jl+` 1920w`].join(`, `),width:2160,height:2880},Nl=`/assets/benoit3-640-dc611e08b1-BNau0fmY.webp`,Pl=`/assets/benoit3-1280-a98fa6863b-BFpTXVQR.webp`,Fl=`/assets/benoit3-1519-6199365532-CaJycYMj.webp`,Il={src:Pl,large:Fl,srcSet:[Nl+` 640w`,Pl+` 1280w`,Fl+` 1519w`].join(`, `),width:1519,height:2025},Ll=`/assets/berry-2-640-3d7f3b9a71-DD0IpTWp.webp`,Rl=`/assets/berry-2-1280-f5b81453fc-R9MjSgfA.webp`,zl=`/assets/berry-2-1920-f2a8b7eda7-DRXmLVvc.webp`,Bl={src:Rl,large:zl,srcSet:[Ll+` 640w`,Rl+` 1280w`,zl+` 1920w`].join(`, `),width:3840,height:2160},Vl=`/assets/berry-640-ae302b71e7-D01iW99s.webp`,Hl=`/assets/berry-1280-f17b404c09-DNnt6uDB.webp`,Ul=`/assets/berry-1528-d8e21ac1c9-C4U0mXHD.webp`,Wl={src:Hl,large:Ul,srcSet:[Vl+` 640w`,Hl+` 1280w`,Ul+` 1528w`].join(`, `),width:1528,height:925},Gl=`/assets/biosignal1-640-fd309d2a0f-DKxI7Kcr.webp`,Kl=`/assets/biosignal1-1280-c0856c7002-BNhpzPKy.webp`,ql=`/assets/biosignal1-1920-a5c2e96232-CbR2cLhV.webp`,Jl={src:Kl,large:ql,srcSet:[Gl+` 640w`,Kl+` 1280w`,ql+` 1920w`].join(`, `),width:6720,height:4480},Yl=`/assets/bubu-640-0317aea8bf-Zp1Sll94.webp`,Xl=`/assets/bubu-1280-0a6663a070-Co9h8pDb.webp`,Zl=`/assets/bubu-1385-f3474a2b45-BbtfakGt.webp`,Ql={src:Xl,large:Zl,srcSet:[Yl+` 640w`,Xl+` 1280w`,Zl+` 1385w`].join(`, `),width:1385,height:655},$l=`/assets/bubus-640-4dcfd3781e-1t6cv4Ll.webp`,eu=`/assets/bubus-1206-8537f044f1-DipiBMq-.webp`,tu={src:eu,large:eu,srcSet:[$l+` 640w`,eu+` 1206w`].join(`, `),width:1206,height:897},nu=`/assets/cahngee-640-b842cb472e-DLOMSygn.webp`,ru=`/assets/cahngee-1280-894ee0e46c-DPd4u_Z6.webp`,iu=`/assets/cahngee-1920-a8a303d3ed-DzIc4-EZ.webp`,au={src:ru,large:iu,srcSet:[nu+` 640w`,ru+` 1280w`,iu+` 1920w`].join(`, `),width:1920,height:1080},ou=`/assets/centerlabubu-640-2dc1e35239-BW-EyZuO.webp`,su=`/assets/centerlabubu-1280-4083b80958-CehWZtCq.webp`,cu=`/assets/centerlabubu-1920-8edc9b64c8-BauSfHvY.webp`,lu={src:su,large:cu,srcSet:[ou+` 640w`,su+` 1280w`,cu+` 1920w`].join(`, `),width:3840,height:2160},uu=`/assets/change-640-eeb9048e67-IRF-aAHx.webp`,du=`/assets/change-1280-cefdf26db8-8mK6JcFp.webp`,fu=`/assets/change-1920-7abe80b839-TnQ-_x4s.webp`,pu={src:du,large:fu,srcSet:[uu+` 640w`,du+` 1280w`,fu+` 1920w`].join(`, `),width:1920,height:1080},mu=`/assets/chochang1-640-6609e99a43-B8zupNr5.webp`,hu=`/assets/chochang1-1280-e049555bb2-B3dlAVJx.webp`,gu=`/assets/chochang1-1920-cb91d3c6b9-Bj1OKs5J.webp`,_u={src:hu,large:gu,srcSet:[mu+` 640w`,hu+` 1280w`,gu+` 1920w`].join(`, `),width:1950,height:1462},vu=`/assets/cover-640-81fac69983-C5s189rE.webp`,yu=`/assets/cover-1280-f31402a407-5UBu1cPt.webp`,bu=`/assets/cover-1920-6bf57c2e5c-D5F50Z-t.webp`,xu={src:yu,large:bu,srcSet:[vu+` 640w`,yu+` 1280w`,bu+` 1920w`].join(`, `),width:1920,height:1080},Su=`/assets/draconian1-640-205ff10760-C-8IE88u.webp`,Cu=`/assets/draconian1-1027-cc363529b8-CkvmNcCA.webp`,wu={src:Cu,large:Cu,srcSet:[Su+` 640w`,Cu+` 1027w`].join(`, `),width:1027,height:497},Tu=`/assets/draconian2-640-0a78828930-CTg6PegT.webp`,Eu=`/assets/draconian2-1280-88405570ad-C1hbIp9L.webp`,Du=`/assets/draconian2-1920-55bb796d8d-CSFZzWdZ.webp`,Ou={src:Eu,large:Du,srcSet:[Tu+` 640w`,Eu+` 1280w`,Du+` 1920w`].join(`, `),width:2048,height:1365},ku=`/assets/earthash1-640-35573632fa-BloVMjd9.webp`,Au=`/assets/earthash1-1280-6d7d4977e2-D30rr79w.webp`,ju=`/assets/earthash1-1920-fd9ef15116-XVk6AeVC.webp`,Mu={src:Au,large:ju,srcSet:[ku+` 640w`,Au+` 1280w`,ju+` 1920w`].join(`, `),width:3240,height:2160},Nu=`/assets/elliotfig1-640-f02ad3f76b-CSgwlnqs.webp`,Pu=`/assets/elliotfig1-1280-30a5f289f2-Dr-DSfDK.webp`,Fu=`/assets/elliotfig1-1662-b25b836e46-D4bM_cNy.webp`,Iu={src:Pu,large:Fu,srcSet:[Nu+` 640w`,Pu+` 1280w`,Fu+` 1662w`].join(`, `),width:1662,height:905},Lu=`/assets/fish1-640-2a5d860c7f-b7u2UjUB.webp`,Ru=`/assets/fish1-1280-4ab435af81-Df5Zxv06.webp`,zu=`/assets/fish1-1920-ddf1621570-BBOCEg3H.webp`,Bu={src:Ru,large:zu,srcSet:[Lu+` 640w`,Ru+` 1280w`,zu+` 1920w`].join(`, `),width:4032,height:3024},Vu=`/assets/fishes-640-978f06bf72-s2bRCK5b.webp`,Hu=`/assets/fishes-1280-71ce05c9c0-DU5gohJ4.webp`,Uu=`/assets/fishes-1600-a46aa643bb-CsADccNl.webp`,Wu={src:Hu,large:Uu,srcSet:[Vu+` 640w`,Hu+` 1280w`,Uu+` 1600w`].join(`, `),width:1600,height:1200},Gu=`/assets/fishesss-640-e9241740ab-CkUdJeCz.webp`,Ku=`/assets/fishesss-1200-824e0307d0-C7Op58TW.webp`,qu={src:Ku,large:Ku,srcSet:[Gu+` 640w`,Ku+` 1200w`].join(`, `),width:1200,height:1600},Ju=`/assets/forgetavoid1-640-58e0627dde-BXvjIGZY.webp`,Yu=`/assets/forgetavoid1-1280-83f3e2ca96-CiYB5Lsx.webp`,Xu=`/assets/forgetavoid1-1920-9342331639-Cagdu_51.webp`,Zu={src:Yu,large:Xu,srcSet:[Ju+` 640w`,Yu+` 1280w`,Xu+` 1920w`].join(`, `),width:4284,height:5712},Qu=`/assets/forgetavoid1-640-3282d0997e-B1OcNuxR.webp`,$u=`/assets/forgetavoid1-1280-25ae27b883-D_d8bMGj.webp`,ed=`/assets/forgetavoid1-1920-cefd032f5c-B0mYvcgq.webp`,td={src:$u,large:ed,srcSet:[Qu+` 640w`,$u+` 1280w`,ed+` 1920w`].join(`, `),width:2132,height:1206},nd=`/assets/gamejams1-640-b6927069fd-DSBpIPXH.webp`,rd=`/assets/gamejams1-1280-bf7a1df997-Bh9NgNrP.webp`,id=`/assets/gamejams1-1920-fbda7af0e3-BH7T0lCC.webp`,ad={src:rd,large:id,srcSet:[nd+` 640w`,rd+` 1280w`,id+` 1920w`].join(`, `),width:2699,height:2159},od=`/assets/gamejams2-640-ec72f79f60-CLNT5hEg.webp`,sd=`/assets/gamejams2-1280-f05a6248fe-n4OQK0Rl.webp`,cd=`/assets/gamejams2-1920-b10ada346b-DhnrDzbk.webp`,ld={src:sd,large:cd,srcSet:[od+` 640w`,sd+` 1280w`,cd+` 1920w`].join(`, `),width:2143,height:1205},ud=`/assets/gamejams3-640-dea7ce674c-CAyGv5aY.webp`,dd=`/assets/gamejams3-1280-203d7880d4-Cyl7aFHG.webp`,fd=`/assets/gamejams3-1611-144f220eb7-Cp44IAml.webp`,pd={src:dd,large:fd,srcSet:[ud+` 640w`,dd+` 1280w`,fd+` 1611w`].join(`, `),width:1611,height:910},md=`/assets/gulp-2-609-464e87d9a5-Brcqht8i.webp`,hd={src:md,large:md,srcSet:[md+` 609w`].join(`, `),width:609,height:1192},gd=`/assets/gulp-640-9cc06af593-CiI77Q3F.webp`,_d=`/assets/gulp-1280-023b74a4a3-C_0Tjk3C.webp`,vd=`/assets/gulp-1920-2b8b224b3f-vslginZk.webp`,yd={src:_d,large:vd,srcSet:[gd+` 640w`,_d+` 1280w`,vd+` 1920w`].join(`, `),width:1920,height:1080},bd=`/assets/heidi1-640-8616585a01-DK_GSAD7.webp`,xd=`/assets/heidi1-1280-c093987584-B2Qs1rh0.webp`,Sd=`/assets/heidi1-1920-af1e928d86-D5O-r3Bi.webp`,Cd={src:xd,large:Sd,srcSet:[bd+` 640w`,xd+` 1280w`,Sd+` 1920w`].join(`, `),width:3238,height:2160},wd=`/assets/icee-640-dd6cd709c5-Cxa9BdS0.webp`,Td=`/assets/icee-1280-3f455ea53e-DOfF79pI.webp`,Ed=`/assets/icee-1920-25f7a8fadb-B67HIZd_.webp`,Dd={src:Td,large:Ed,srcSet:[wd+` 640w`,Td+` 1280w`,Ed+` 1920w`].join(`, `),width:2160,height:2880},Od=`/assets/icee2-640-2862d287ca-C9n4nwfh.webp`,kd=`/assets/icee2-1280-93e1fc01fa-DMd1iiJ0.webp`,Ad=`/assets/icee2-1920-250f33c524-DTkqSLYi.webp`,jd={src:kd,large:Ad,srcSet:[Od+` 640w`,kd+` 1280w`,Ad+` 1920w`].join(`, `),width:2160,height:2880},Md=`/assets/icee3-640-97e3dcb596-LlqW_OEC.webp`,Nd=`/assets/icee3-1280-2d75674406-CTL88Pi-.webp`,Pd=`/assets/icee3-1920-9abf7fe62f-DS9sD2Xa.webp`,Fd={src:Nd,large:Pd,srcSet:[Md+` 640w`,Nd+` 1280w`,Pd+` 1920w`].join(`, `),width:2160,height:2880},Id=`/assets/kissingstone1-640-401107308f-_fhOXFw9.webp`,Ld=`/assets/kissingstone1-1280-5b594eff6b-B9HuFZL_.webp`,Rd=`/assets/kissingstone1-1920-cb608abe43-DxPfOaLg.webp`,zd={src:Ld,large:Rd,srcSet:[Id+` 640w`,Ld+` 1280w`,Rd+` 1920w`].join(`, `),width:2880,height:2160},Bd=`/assets/kissingstone2-640-4a77af8546-Bskhj_4G.webp`,Vd=`/assets/kissingstone2-1280-a668734d92-CdgDjamc.webp`,Hd=`/assets/kissingstone2-1920-7715d693cb-CxqKHkBd.webp`,Ud={src:Vd,large:Hd,srcSet:[Bd+` 640w`,Vd+` 1280w`,Hd+` 1920w`].join(`, `),width:2457,height:1843},Wd=`/assets/labubu-640-75abfa0014-BmNiukQ3.webp`,Gd=`/assets/labubu-1280-249e7b2248-Cc0hRFwJ.webp`,Kd=`/assets/labubu-1920-6b13600672-D9l3gpOj.webp`,qd={src:Gd,large:Kd,srcSet:[Wd+` 640w`,Gd+` 1280w`,Kd+` 1920w`].join(`, `),width:3840,height:2160},Jd=`/assets/labubu1-640-65b0109e06-BeqIRrZ_.webp`,Yd=`/assets/labubu1-1280-3b6aafebb1-C9i0o17d.webp`,Xd=`/assets/labubu1-1920-2c3f904d9b-DgL99Og9.webp`,Zd={src:Yd,large:Xd,srcSet:[Jd+` 640w`,Yd+` 1280w`,Xd+` 1920w`].join(`, `),width:2880,height:2160},Qd=`/assets/maggie-640-e8e9783519-CV7Yct89.webp`,$d=`/assets/maggie-1280-343a223952-Z4qYkxZ1.webp`,ef=`/assets/maggie-1920-22488be7d5-hTCH7YzL.webp`,tf={src:$d,large:ef,srcSet:[Qd+` 640w`,$d+` 1280w`,ef+` 1920w`].join(`, `),width:2160,height:2880},nf=`/assets/maggie1-640-32b71cd928-BA26h1lg.webp`,rf=`/assets/maggie1-1280-4d6930a1cc-ZIrakk15.webp`,af=`/assets/maggie1-1920-9013c983b6-DSEuqFLN.webp`,of={src:rf,large:af,srcSet:[nf+` 640w`,rf+` 1280w`,af+` 1920w`].join(`, `),width:2160,height:2880},sf=`/assets/labubu1-640-65b0109e06-BeqIRrZ_.webp`,cf=`/assets/labubu1-1280-3b6aafebb1-C9i0o17d.webp`,lf=`/assets/labubu1-1920-2c3f904d9b-DgL99Og9.webp`,uf={src:cf,large:lf,srcSet:[sf+` 640w`,cf+` 1280w`,lf+` 1920w`].join(`, `),width:2880,height:2160},df=`/assets/maggie3-640-5981bb2012-Cxiy2AaV.webp`,ff=`/assets/maggie3-1280-5799a8009b-TeRqaHHs.webp`,pf=`/assets/maggie3-1920-773accb307-DxN3swvV.webp`,mf={src:ff,large:pf,srcSet:[df+` 640w`,ff+` 1280w`,pf+` 1920w`].join(`, `),width:2880,height:2160},hf=`/assets/nirvana1-640-e36cd93be2-Dj-YvadH.webp`,gf=`/assets/nirvana1-1280-e0dcba691d-1zVJe92A.webp`,_f=`/assets/nirvana1-1920-9a8c64195a-BxvDs5Hj.webp`,vf={src:gf,large:_f,srcSet:[hf+` 640w`,gf+` 1280w`,_f+` 1920w`].join(`, `),width:4240,height:2832},yf=`/assets/nixie-640-f6223d39ce-B6Ejwg2_.webp`,bf=`/assets/nixie-1280-ea30fdad17-BJKzAL1y.webp`,xf=`/assets/nixie-1920-a8daab59bd--Sfjtq1u.webp`,Sf={src:bf,large:xf,srcSet:[yf+` 640w`,bf+` 1280w`,xf+` 1920w`].join(`, `),width:2160,height:2880},Cf=`/assets/nixie1-640-e2ba37b03b-DnkplE-W.webp`,wf=`/assets/nixie1-1280-6bac81934c-lELQfEyl.webp`,Tf=`/assets/nixie1-1920-a6bb815a09-CaZ8peBg.webp`,Ef={src:wf,large:Tf,srcSet:[Cf+` 640w`,wf+` 1280w`,Tf+` 1920w`].join(`, `),width:2160,height:2880},Df=`/assets/nixie2-640-6332afd0cd-C_HuyIDQ.webp`,Of=`/assets/nixie2-1280-2b861dab67-v3_vD8ni.webp`,kf=`/assets/nixie2-1801-6a659b79c7-Dn55gOkO.webp`,Af={src:Of,large:kf,srcSet:[Df+` 640w`,Of+` 1280w`,kf+` 1801w`].join(`, `),width:1801,height:2401},jf=`/assets/pixie-640-3b777504e6-9ZDZg8kO.webp`,Mf=`/assets/pixie-1280-465e06ca7c-CjeyrsIM.webp`,Nf=`/assets/pixie-1920-8e7fe77eca-QDeB4evD.webp`,Pf={src:Mf,large:Nf,srcSet:[jf+` 640w`,Mf+` 1280w`,Nf+` 1920w`].join(`, `),width:2160,height:2880},Ff=`/assets/pixie-640-163b36ccca-DVgJM7pJ.webp`,If=`/assets/pixie-1280-69352ecf1a-7pqP8nPd.webp`,Lf=`/assets/pixie-1920-65fddc30fa-BrAx8T0i.webp`,Rf={src:If,large:Lf,srcSet:[Ff+` 640w`,If+` 1280w`,Lf+` 1920w`].join(`, `),width:2160,height:2880},zf=`/assets/pixie1-640-04f1ab2ea4-B7-HC310.webp`,Bf=`/assets/pixie1-1280-e2fafb3fb7-BpM-PbRn.webp`,Vf=`/assets/pixie1-1660-8535d0381f-CZOuMh2l.webp`,Hf={src:Bf,large:Vf,srcSet:[zf+` 640w`,Bf+` 1280w`,Vf+` 1660w`].join(`, `),width:1660,height:2213},Uf=`/assets/pixie2-640-c5bba55179-7O5ZMf3q.webp`,Wf=`/assets/pixie2-1280-1e6cc06354-Cbar4koo.webp`,Gf=`/assets/pixie2-1920-4f047a840e-Brn7Loxw.webp`,Kf={src:Wf,large:Gf,srcSet:[Uf+` 640w`,Wf+` 1280w`,Gf+` 1920w`].join(`, `),width:2160,height:2880},qf=`/assets/portfolio-opened-640-00556318eb-BzQvExDl.webp`,Jf=`/assets/portfolio-opened-1280-1afc842ab4-DIo49PjX.webp`,Yf=`/assets/portfolio-opened-1920-777de7befa-Bw2pq5s1.webp`,Xf={src:Jf,large:Yf,srcSet:[qf+` 640w`,Jf+` 1280w`,Yf+` 1920w`].join(`, `),width:2360,height:1640},Zf=`/assets/portfolio-640-19880d541e-PqjpOY2A.webp`,Qf=`/assets/portfolio-1280-ef8fcfc2c0-9_AXZFav.webp`,$f=`/assets/portfolio-1920-42d1ee8a0e-ChMdW0kj.webp`,ep={src:Qf,large:$f,srcSet:[Zf+` 640w`,Qf+` 1280w`,$f+` 1920w`].join(`, `),width:2360,height:1640},tp=`/assets/project-640-61ebf3b39d-Bi2FV507.webp`,np=`/assets/project-1280-082f4057bb-BQV3Ozo_.webp`,rp=`/assets/project-1920-49a291a367-C7zbm7Pl.webp`,ip={src:np,large:rp,srcSet:[tp+` 640w`,np+` 1280w`,rp+` 1920w`].join(`, `),width:2360,height:1640},ap=`/assets/remfall-art-1-640-7e73e6732a-Ck81xOUl.webp`,op=`/assets/remfall-art-1-1201-55edd56787-BJOCyMR7.webp`,sp={src:op,large:op,srcSet:[ap+` 640w`,op+` 1201w`].join(`, `),width:1201,height:961},cp=`/assets/remfall-art-2-640-53350fec54-OuamYSvz.webp`,lp=`/assets/remfall-art-2-1280-4cf52c7ad1-BHb5B20-.webp`,up=`/assets/remfall-art-2-1920-2b34a7b86f-BIg3JtUM.webp`,dp={src:lp,large:up,srcSet:[cp+` 640w`,lp+` 1280w`,up+` 1920w`].join(`, `),width:1920,height:1080},fp=`/assets/remfall-art-640-eaec1e29cd-CApjL14-.webp`,pp=`/assets/remfall-art-1280-3c04c0df73-BG1r9Sqk.webp`,mp=`/assets/remfall-art-1920-95071839d5-Fde8_UdE.webp`,hp={src:pp,large:mp,srcSet:[fp+` 640w`,pp+` 1280w`,mp+` 1920w`].join(`, `),width:3022,height:1714},gp=`/assets/remfall1-640-5938044264--JJzYi-7.webp`,_p=`/assets/remfall1-1280-f716ca001f-CWxCOPr4.webp`,vp=`/assets/remfall1-1920-7f44a7c481-C_0lJxJz.webp`,yp={src:_p,large:vp,srcSet:[gp+` 640w`,_p+` 1280w`,vp+` 1920w`].join(`, `),width:1920,height:1080},bp=`/assets/smallheartbig-640-7a5a2c455a-DoQkKq4v.webp`,xp=`/assets/smallheartbig-1280-59ab44a95c-D12nVQx7.webp`,Sp=`/assets/smallheartbig-1637-8c3ce6b1fd-BZW7Z2Jk.webp`,Cp={src:xp,large:Sp,srcSet:[bp+` 640w`,xp+` 1280w`,Sp+` 1637w`].join(`, `),width:1637,height:912},wp=`/assets/space-cat-1-640-54cf238e39-DBd-szJr.webp`,Tp=`/assets/space-cat-1-1071-7d8461bb25-CNdkmrpr.webp`,Ep={src:Tp,large:Tp,srcSet:[wp+` 640w`,Tp+` 1071w`].join(`, `),width:1071,height:597},Dp=`/assets/space-cat-640-235d2e5933-D-G2rr7o.webp`,Op=`/assets/space-cat-1280-ba298114bc-Bh2IsHSC.webp`,kp=`/assets/space-cat-1920-6bd22fc4fa-CHh86JkQ.webp`,Ap={src:Op,large:kp,srcSet:[Dp+` 640w`,Op+` 1280w`,kp+` 1920w`].join(`, `),width:1920,height:1080},jp=`/assets/swaggy-640-b5fa5c42e8-CYdH6nrB.webp`,Mp=`/assets/swaggy-1280-5a62e8dcd7-Cpt1rJjt.webp`,Np=`/assets/swaggy-1920-8db8590db7-D5Kv68MD.webp`,Pp={src:Mp,large:Np,srcSet:[jp+` 640w`,Mp+` 1280w`,Np+` 1920w`].join(`, `),width:2160,height:2880},Fp=`/assets/swaggy1-640-ef93cd14ae-CqGgDKft.webp`,Ip=`/assets/swaggy1-1280-d0b95e57af-DPiAX_4N.webp`,Lp=`/assets/swaggy1-1920-7edd4a3929-CZbspkOQ.webp`,Rp={src:Ip,large:Lp,srcSet:[Fp+` 640w`,Ip+` 1280w`,Lp+` 1920w`].join(`, `),width:2160,height:2880},zp=`/assets/swaggy2-640-07aacbb52b-BZfiVux6.webp`,Bp=`/assets/swaggy2-1280-0f72eff33e-DFCl8avO.webp`,Vp=`/assets/swaggy2-1920-05e2f47722-Bf5HwMn7.webp`,Hp={src:Bp,large:Vp,srcSet:[zp+` 640w`,Bp+` 1280w`,Vp+` 1920w`].join(`, `),width:2160,height:2880},Up=`/assets/swaggy3-640-6e0a25b524-DMe5hUr1.webp`,Wp=`/assets/swaggy3-794-2ace7e7614-sOTMeBas.webp`,Gp={src:Wp,large:Wp,srcSet:[Up+` 640w`,Wp+` 794w`].join(`, `),width:794,height:1059},Kp=`/assets/sylph-640-056fcf6b9e-B3jOrD9D.webp`,qp=`/assets/sylph-1206-0996807867-jYN6QqQp.webp`,Jp={src:qp,large:qp,srcSet:[Kp+` 640w`,qp+` 1206w`].join(`, `),width:1206,height:915},Yp=`/assets/windwisp1-640-07cdafa980-DVHfI1kk.webp`,Xp=`/assets/windwisp1-1280-faadb07b4e-ho5FN1uY.webp`,Zp=`/assets/windwisp1-1920-1875ce554c-CyyMCb1I.webp`,Qp={src:Xp,large:Zp,srcSet:[Yp+` 640w`,Xp+` 1280w`,Zp+` 1920w`].join(`, `),width:6250,height:6250},$p=`/assets/yoki-640-6c88da71f8-Czkitj3I.webp`,em=`/assets/yoki-1280-7028007b2a-C36__UcI.webp`,tm=`/assets/yoki-1920-1d9c2e169d-D986RrsC.webp`,nm={src:em,large:tm,srcSet:[$p+` 640w`,em+` 1280w`,tm+` 1920w`].join(`, `),width:2160,height:2880},rm=`/assets/yoki2-640-da6fd93a86-ChgCzBaL.webp`,im=`/assets/yoki2-1280-6af6e9820a-Cy1aYqne.webp`,am=`/assets/yoki2-1920-2263661104-Ca6PWQho.webp`,om={src:im,large:am,srcSet:[rm+` 640w`,im+` 1280w`,am+` 1920w`].join(`, `),width:2160,height:2880},sm=`/assets/yoki3-640-2ce3652cc7-DZDJSBJo.webp`,cm=`/assets/yoki3-1280-ba1c727808-BiZHy90K.webp`,lm=`/assets/yoki3-1920-db288c6f5a-Ck-FmRzP.webp`,um={src:cm,large:lm,srcSet:[sm+` 640w`,cm+` 1280w`,lm+` 1920w`].join(`, `),width:2160,height:2880},dm=`/assets/yoki4-640-eb929ec9d3-CzuFdHrz.webp`,fm=`/assets/yoki4-1280-291362536c-DpMBLGY8.webp`,pm=`/assets/yoki4-1920-b72d950a39-CEDiWmmY.webp`,mm={src:fm,large:pm,srcSet:[dm+` 640w`,fm+` 1280w`,pm+` 1920w`].join(`, `),width:2160,height:2880};function hm(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var M=hm();function gm(e){M=e}var N={exec:()=>null};function P(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function F(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(I.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var _m=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),I={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:P(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:P(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:P(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:P(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:P(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:P(e=>RegExp(`^ {0,${e}}>`))},vm=/^(?:[ \t]*(?:\n|$))+/,ym=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,L=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,xm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Sm=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Cm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,wm=F(Cm).replace(/bull/g,Sm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Tm=F(Cm).replace(/bull/g,Sm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Em=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Dm=/^[^\n]+/,Om=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,km=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Om).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Am=F(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Sm).getRegex(),R=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,jm=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Mm=F(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,jm).replace(`tag`,R).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Nm=e=>F(Em).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),Pm=Nm(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Fm=Nm(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Im={blockquote:F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Fm).getRegex(),code:ym,def:km,fences:bm,heading:xm,hr:L,html:Mm,lheading:wm,list:Am,newline:vm,paragraph:Pm,table:N,text:Dm},Lm=F(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),Rm={...Im,lheading:Tm,table:Lm,paragraph:F(Em).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Lm).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex()},zm={...Im,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,jm).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:N,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(Em).replace(`hr`,L).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,wm).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Bm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Vm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Hm=/^( {2,}|\\)\n(?!\s*$)/,Um=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,z=/[\p{P}\p{S}]/u,B=/[\s\p{P}\p{S}]/u,V=/[^\s\p{P}\p{S}]/u,Wm=F(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,B).getRegex(),Gm=/[\p{Pi}\p{Ps}"']/u,Km=/(?!~)[\p{P}\p{S}]/u,qm=/(?!~)[\s\p{P}\p{S}]/u,Jm=/(?:[^\s\p{P}\p{S}]|~)/u,Ym=F(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,_m?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Xm=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Zm=F(Xm,`u`).replace(/punct/g,z).getRegex(),Qm=F(Xm,`u`).replace(/punct/g,Km).getRegex(),$m=F(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Gm).replace(/punct/g,z).getRegex(),eh=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,th=F(eh,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),nh=F(eh,`gu`).replace(/notPunctSpace/g,Jm).replace(/punctSpace/g,qm).replace(/punct/g,Km).getRegex(),rh=F(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),ih=F(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),ah=F(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),oh=F(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,z).getRegex(),sh=F(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),ch=F(/\\(punct)/,`gu`).replace(/punct/g,z).getRegex(),lh=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),uh=F(jm).replace(`(?:-->|$)`,`-->`).getRegex(),dh=F(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,uh).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),H=F(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,/\[(?:\\[\s\S]|[^\[\]\\])*\]/).getRegex(),fh=F(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,H).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ph=F(/^!?\[(label)\]\[(ref)\]/).replace(`label`,H).replace(`ref`,Om).getRegex(),mh=F(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Om).getRegex(),hh=F(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,ph).replace(`nolink`,mh).getRegex(),gh=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_h={_backpedal:N,anyPunctuation:ch,autolink:lh,blockSkip:Ym,br:Hm,code:Vm,del:N,delLDelim:N,delRDelim:N,emStrongLDelim:Zm,emStrongRDelimAst:th,emStrongRDelimUnd:ih,escape:Bm,link:fh,nolink:mh,punctuation:Wm,reflink:ph,reflinkSearch:hh,tag:dh,text:Um,url:N},vh={..._h,emStrongLDelim:$m,emStrongRDelimAst:rh,emStrongRDelimUnd:ah,link:F(/^!?\[(label)\]\((.*?)\)/).replace(`label`,H).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,H).getRegex()},yh={..._h,emStrongRDelimAst:nh,emStrongLDelim:Qm,delLDelim:oh,delRDelim:sh,url:F(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,gh).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:F(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,gh).getRegex()},bh={...yh,br:F(Hm).replace(`{2,}`,`*`).getRegex(),text:F(yh.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},U={normal:Im,gfm:Rm,pedantic:zm},W={normal:_h,gfm:yh,breaks:bh,pedantic:vh},xh={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Sh=e=>xh[e];function G(e,t){if(t){if(I.escapeTest.test(e))return e.replace(I.escapeReplace,Sh)}else if(I.escapeTestNoEncode.test(e))return e.replace(I.escapeReplaceNoEncode,Sh);return e}function Ch(e){try{e=encodeURI(e).replace(I.percentDecode,`%`)}catch{return null}return e}function wh(e,t){let n=e.replace(I.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(I.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(I.slashPipe,`|`);return n}function K(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Th(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&I.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Eh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Dh(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Oh(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function kh(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}var q=class{options;rules;lexer;constructor(e){this.options=e||M}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Th(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=kh(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=K(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:K(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Dh(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Th(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:K(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=wh(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:K(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(wh(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:K(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=K(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Eh(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Oh(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Oh(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}else if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},J=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||M,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:I,block:U.normal,inline:W.normal};this.options.pedantic?(t.block=U.pedantic,t.inline=W.pedantic):this.options.gfm&&(t.block=U.gfm,this.options.breaks?t.inline=W.breaks:t.inline=W.gfm),this.tokenizer.rules=t}static get rules(){return{block:U,inline:W}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(I.carriageReturn,`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(!(e.charAt(0)===`!`||!Object.hasOwn(this.tokens.links,e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Ah=class{options;parser;constructor(e){this.options=e||M}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(I.notSpaceStart)?.[0],i=e?e.replace(I.endingNewline,``)+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${G(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?G(n,!0):this.parser.parseInline(r),o=Ch(e);if(o===null)return a;e=G(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+G(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ch(e);if(i===null)return G(n);e=i;let a=`<img src="${G(e)}" alt="${G(n)}"`;return t&&(a+=` title="${G(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:G(e.text)}},jh=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Y=class e{options;renderer;textRenderer;constructor(e){this.options=e||M,this.options.renderer=this.options.renderer||new Ah,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new jh}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},X=class{options;block;constructor(e){this.options=e||M}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?J.lex:J.lexInline}provideParser(e=this.block){return e?Y.parse:Y.parseInline}},Z=new class{defaults=hm();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Y;Renderer=Ah;TextRenderer=jh;Lexer=J;Tokenizer=q;Hooks=X;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Ah(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new q(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new X;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];X.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&X.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return Y.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?J.lex:J.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?J.lex:J.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+G(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Z.parse(e,t)}Q.options=Q.setOptions=function(e){return Z.setOptions(e),Q.defaults=Z.defaults,gm(Q.defaults),Q},Q.getDefaults=hm,Q.defaults=M;function Mh(...e){return Z.use(...e),Q.defaults=Z.defaults,gm(Q.defaults),Q}Q.use=Mh,Q.walkTokens=function(e,t){return Z.walkTokens(e,t)},Q.parseInline=Z.parseInline,Q.Parser=Y,Q.parser=Y.parse,Q.Renderer=Ah,Q.TextRenderer=jh,Q.Lexer=J,Q.lexer=J.lex,Q.Tokenizer=q,Q.Hooks=X,Q.parse=Q,Q.options,Q.setOptions,Q.walkTokens,Q.parseInline,Y.parse,J.lex;var Nh={projects:[`wacsmash`,`cho-chang`,`nirvana`,`biosignal-blackout`,`fish`,`all-good-things`,`wind-wisp`,`remfall`,`game-jams`],experiments:[`sylph`,`become-you`,`labubus`,`draconian`,`esme`]},$=[`design`,`tech`,`realtime`,`narrative`,`production`],Ph=`(^|[^\\w/#])#(${$.join(`|`)})\\b`;function Fh(){return new RegExp(Ph,`gi`)}function Ih(e){return $.includes(e)}function Lh(e){let t=e.trim().toLowerCase();return $.find(e=>e===t)}function Rh(e){return`/system/${e}`}function zh(e){return`section-${e}`}function Bh(e,t){return`/project?${new URLSearchParams({title:e}).toString()}#${zh(t)}`}function Vh(e){if(!e)return;let t=e.trim().toLowerCase();if(/^\d+$/.test(t))return Number(t);let n=/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(t);if(!(!n||!n[1]&&!n[2]&&!n[3]))return Number(n[1]??0)*3600+Number(n[2]??0)*60+Number(n[3]??0)}function Hh(e){let t=e.hostname.replace(/^www\.|^m\./,``);if(t===`youtu.be`)return e.pathname.split(`/`).filter(Boolean)[0];if(t!==`youtube.com`&&t!==`youtube-nocookie.com`)return;let n=e.searchParams.get(`v`);if(n)return n;let r=e.pathname.split(`/`).filter(Boolean);if(r.length>=2&&[`embed`,`live`,`shorts`,`v`].includes(r[0]))return r[1]}function Uh(e){let t=e.hostname.replace(/^www\./,``);if(t!==`vimeo.com`&&t!==`player.vimeo.com`)return;let n=e.pathname.split(`/`).filter(Boolean),r=n.findIndex(e=>/^\d+$/.test(e));if(r===-1)return;let i=n[r+1];return{id:n[r],hash:e.searchParams.get(`h`)??(i&&/^[0-9a-f]+$/i.test(i)?i:void 0)}}function Wh(e){let t=e.trim();if(!t)return;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:`https://${t}`)}catch{return}let r=Hh(n);if(r){let e=new URLSearchParams({rel:`0`}),t=Vh(n.searchParams.get(`t`)??n.searchParams.get(`start`));t&&e.set(`start`,String(t));let i=n.searchParams.get(`list`);return i&&e.set(`list`,i),{provider:`youtube`,embedUrl:`https://www.youtube-nocookie.com/embed/${r}?${e}`}}let i=Uh(n);if(i){let e=new URLSearchParams({dnt:`1`});i.hash&&e.set(`h`,i.hash);let t=Vh(n.hash.replace(/^#t=/,``)||null);return{provider:`vimeo`,embedUrl:`https://player.vimeo.com/video/${i.id}?${e}${t?`#t=${t}s`:``}`}}}function Gh(e){let t=Wh(e);if(!t)throw Error(`Project video not recognized: "${e}". Use a YouTube or Vimeo link, e.g. https://youtu.be/ID or https://vimeo.com/123456789.`);return t}var Kh=new Set([`title`,`image`,`images`,`video`,`youtube`,`vimeo`,`side`,`collaboration`,`roles`,`role`,`tools`,`play`,`playlabel`,`play-label`,`haslink`,`bullet`,`summary`]);function qh(e){let t=e.indexOf(`:`);return t===-1?!1:Kh.has(e.slice(0,t).trim().toLowerCase())}function Jh(e){let t={side:`left`};for(let n of e.split(/\r?\n/)){let e=n.indexOf(`:`);if(e===-1)continue;let r=n.slice(0,e).trim().toLowerCase(),i=n.slice(e+1).trim().replace(/^["']|["']$/g,``);!r||!i||(r===`title`&&(t.title=i),(r===`image`||r===`images`)&&(t.images=[...t.images??[],...i.split(`,`).map(e=>e.trim()).filter(Boolean)]),(r===`video`||r===`youtube`||r===`vimeo`)&&(t.video=i),r===`side`&&(i===`left`||i===`right`||i===`full`)&&(t.side=i),r===`collaboration`&&(t.collaboration=i),(r===`roles`||r===`role`)&&(t.roles=i),r===`tools`&&(t.tools=i),r===`play`&&(t.play=i),(r===`playlabel`||r===`play-label`)&&(t.playlabel=i),(r===`bullet`||r===`summary`)&&(t.bullets=[...t.bullets??[],i]))}return t}function Yh(e){let t=new Set;for(let n of e.matchAll(Fh())){let e=n[2]?.toLowerCase();e&&Ih(e)&&t.add(e)}return $.filter(e=>t.has(e))}function Xh(e){return e.replace(Fh(),(e,t,n)=>{let r=n.toLowerCase();return`${t}<a href="${Rh(r)}" class="project-system project-system--${r}">#${r}</a>`})}function Zh(e){let t=e.trim();if(!t)return{textHtml:``,systems:[]};let n=Yh(t);return{textHtml:Q.parse(Xh(t),{async:!1}),systems:n}}function Qh(e){return Q.parseInline(Xh(e.trim()),{async:!1})}function $h(...e){let t=new Set(e.flat());return $.filter(e=>t.has(e))}function eg(e){let t=e.replace(/!\[[^\]]*]\([^)]*\)/g,` `).replace(/\[[^\]]*]\([^)]*\)/g,` `).replace(/https?:\/\/\S+/g,` `).replace(/[#>*_`[\]]/g,` `).toLowerCase().replace(/[^a-z\s]/g,` `).replace(/\s+/g,` `).trim();return t===``||t===`in progress`}function tg(e,t){let n=e.trim();if(!n)return[];let r=[],i=/^:::row\s*\r?\n([\s\S]*?)^:::\s*$/gm,a=0,o,s=e=>{let{textHtml:t,systems:n}=Zh(e);!t||eg(e)||r.push({id:zh(r.length),side:`left`,textHtml:t,bullets:[],reveal:!1,systems:n})};for(;(o=i.exec(n))!==null;){s(n.slice(a,o.index));let e=(o[1]??``).split(/\r?\n/),i=0;for(;i<e.length&&qh(e[i]);)i++;let c=Jh(e.slice(0,i).join(`
`)),l=e.slice(i).join(`
`),{textHtml:u,systems:d}=Zh(l),f=eg(l),p=(c.bullets??[]).map(Qh),m=c.images?.map(t)??[];r.push({id:zh(r.length),title:c.title,image:m.length===1?m[0]:void 0,images:m.length>1?m:void 0,video:c.video?Gh(c.video):void 0,side:c.side,textHtml:f?``:u,bullets:p,reveal:!f&&p.length>0&&u.length>0,systems:$h(d,Yh((c.bullets??[]).join(`
`))),collaboration:c.collaboration,roles:c.roles,tools:c.tools,playUrl:c.play,playLabel:c.playlabel}),a=o.index+o[0].length}return s(n.slice(a)),r.length===0&&s(n),r}function ng(e){if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.src==`string`&&t.src.length>0}function rg(e,t){if(ng(e))return{src:e.src,large:e.large||e.src,srcSet:e.srcSet??``,width:e.width??0,height:e.height??0};if(typeof e==`string`&&e.length>0)return{src:e,large:e,srcSet:``,width:0,height:0};throw Error(`Project image not found: "${t}". Put the file in content/assets/ and reference just the filename.`)}var ig=[`performance`,`creative tech`,`games`],ag=Object.assign({"../../content/projects/all-good-things.md":Pe,"../../content/projects/become-you.md":Fe,"../../content/projects/beepboop.md":Ie,"../../content/projects/biosignal-blackout.md":Le,"../../content/projects/cho-chang.md":Re,"../../content/projects/color-change.md":ze,"../../content/projects/draconian.md":Be,"../../content/projects/earthash.md":Ve,"../../content/projects/elliotfig.md":He,"../../content/projects/esme.md":Ue,"../../content/projects/fish.md":We,"../../content/projects/forget-avoid.md":Ge,"../../content/projects/game-jams.md":Ke,"../../content/projects/kissing-stone.md":qe,"../../content/projects/labubus.md":Je,"../../content/projects/nirvana.md":Ye,"../../content/projects/remfall.md":Xe,"../../content/projects/smallheartbig.md":Ze,"../../content/projects/sylph.md":Qe,"../../content/projects/wacsmash.md":$e,"../../content/projects/wind-wisp.md":et}),og=Object.assign({"../../content/assets/000A1334.jpg":it,"../../content/assets/000A1482.jpg":ct,"../../content/assets/000A1936.jpg":ft,"../../content/assets/20250314_Art_FMNIntroSetDressing.png":gt,"../../content/assets/20250314_Art_IntroHill.png":bt,"../../content/assets/Buff man close up.PNG":wt,"../../content/assets/Copy of brain2.png":Ot,"../../content/assets/DSC04021.jpg":Mt,"../../content/assets/DSC04022.jpg":It,"../../content/assets/DSC04108.jpg":Bt,"../../content/assets/DSC04158.jpg":Wt,"../../content/assets/DSC05614.JPG":Jt,"../../content/assets/DSC05626.JPG":Qt,"../../content/assets/DSC06839.JPG":nn,"../../content/assets/DSC06840.JPG":sn,"../../content/assets/DSC06857.jpg":dn,"../../content/assets/DSC06892.JPG":hn,"../../content/assets/DSC08493.JPG":yn,"../../content/assets/DSC08593.JPG":Cn,"../../content/assets/DSC08871.JPG":Dn,"../../content/assets/DSC09118.JPG":jn,"../../content/assets/DSC09299.JPG":Fn,"../../content/assets/IMG_0262.JPG":zn,"../../content/assets/IMG_0274.JPG":Un,"../../content/assets/IMG_0328.JPG":qn,"../../content/assets/IMG_0926.png":Zn,"../../content/assets/IMG_1400.JPG":tr,"../../content/assets/IMG_2161.png":ar,"../../content/assets/IMG_2906.jpg":lr,"../../content/assets/IMG_3134.PNG":pr,"../../content/assets/IMG_3135.PNG":_r,"../../content/assets/IMG_3370.png":xr,"../../content/assets/IMG_3432.JPG":Tr,"../../content/assets/IMG_5154.jpg":kr,"../../content/assets/IMG_5895.png":Nr,"../../content/assets/IMG_6983.PNG":Lr,"../../content/assets/IMG_7013.PNG":Vr,"../../content/assets/If Fish Could Swim.png":Gr,"../../content/assets/P1580272.jpg":Yr,"../../content/assets/P1580405.JPEG":$r,"../../content/assets/Screenshot 2024-12-09 220745.png":ni,"../../content/assets/Screenshot 2024-12-09 221058.png":oi,"../../content/assets/Screenshot 2026-03-03 123659.png":li,"../../content/assets/Screenshot 2026-03-24 032121.png":fi,"../../content/assets/Screenshot 2026-04-01 181512.png":gi,"../../content/assets/Screenshot 2026-04-13 164400.png":bi,"../../content/assets/Screenshot 2026-04-21 170922.png":Ci,"../../content/assets/Screenshot 2026-05-07 050528.png":Di,"../../content/assets/Screenshot 2026-05-07 072007.png":Ai,"../../content/assets/Screenshot 2026-09-11 231644.png":Pi,"../../content/assets/Screenshot 2026-09-11 231723.png":Ri,"../../content/assets/Screenshot 2026-09-11 231905.png":Hi,"../../content/assets/Screenshot 2026-09-11 232019.png":Ki,"../../content/assets/Screenshot 2026-09-11 232614.png":Xi,"../../content/assets/Screenshot 2026-09-11 233117.png":ea,"../../content/assets/Screenshot 2026-09-12 002502.png":ia,"../../content/assets/Screenshot 2026-09-17 002031.png":ca,"../../content/assets/Screenshot 2026-09-17 002444.png":da,"../../content/assets/Screenshot 2026-09-22 213844.png":ha,"../../content/assets/Screenshot 2026-09-22 214613.png":ya,"../../content/assets/Screenshot 2026-09-22 214753.png":Sa,"../../content/assets/Screenshot 2026-09-22 214859.png":Ea,"../../content/assets/Screenshot 2026-09-22 215006.png":Aa,"../../content/assets/Screenshot 2026-10-03 003523.png":Pa,"../../content/assets/Screenshot 2026-10-03 003603.png":Ra,"../../content/assets/Screenshot 2026-10-03 003736.png":Va,"../../content/assets/Screenshot 2026-10-03 003801.png":Wa,"../../content/assets/Screenshot 2026-10-03 005121.png":Ja,"../../content/assets/Screenshot 2026-10-03 005313.png":Za,"../../content/assets/Screenshot 2026-10-03 005351.png":to,"../../content/assets/Screenshot 2026-10-03 005412.png":ao,"../../content/assets/Screenshot 2026-10-03 005832.png":lo,"../../content/assets/Screenshot 2026-10-04 004443.png":mo,"../../content/assets/Screenshot 2026-10-04 214355.png":vo,"../../content/assets/Screenshot 2026-10-04 214440.png":So,"../../content/assets/Screenshot 2026-10-04 214526.png":To,"../../content/assets/Screenshot 2026-10-04 214612.png":ko,"../../content/assets/Screenshot 2026-10-04 214748.png":No,"../../content/assets/Screenshot 2026-10-04 214816.png":Lo,"../../content/assets/Screenshot 2026-10-04 232833.png":Vo,"../../content/assets/Screenshot 2026-10-04 232902.png":Go,"../../content/assets/Screenshot 2026-10-04 232924.png":Yo,"../../content/assets/Screenshot 2026-10-05 153822.png":$o,"../../content/assets/Screenshot_2024-09-03_224646.png":ns,"../../content/assets/TDMovieOut.12.png":as,"../../content/assets/TDMovieOut.18.png":cs,"../../content/assets/TDMovieOut.23.png":ds,"../../content/assets/TDMovieOut.27.png":ms,"../../content/assets/TDMovieOut.3.png":_s,"../../content/assets/TDMovieOut.31.png":bs,"../../content/assets/TDMovieOut.37.png":Cs,"../../content/assets/TDMovieOut.41.png":Es,"../../content/assets/TDMovieOut.42.png":ks,"../../content/assets/Wacsmash1.JPG":Ns,"../../content/assets/WindAndTheWisp-Gameplay-Screenshot-13-1920x1080.png":Ls,"../../content/assets/WindAndTheWisp-Gameplay-Screenshot-7-1920x1080.png":Vs,"../../content/assets/aboutme.png":Gs,"../../content/assets/agt-poster.PNG":Ys,"../../content/assets/agt10.jpg":$s,"../../content/assets/agt11.jpg":rc,"../../content/assets/agt12.jpg":sc,"../../content/assets/agt13.jpg":dc,"../../content/assets/agt14.jpg":hc,"../../content/assets/agt15.jpg":yc,"../../content/assets/agt16.jpg":Cc,"../../content/assets/agt17.jpg":Dc,"../../content/assets/agtanna.png":jc,"../../content/assets/agtdesign1.png":Pc,"../../content/assets/agtdesign2.png":Lc,"../../content/assets/agtdesign3.jpg":Bc,"../../content/assets/agtnarrative.png":Wc,"../../content/assets/agtpivot1.png":qc,"../../content/assets/agtpivot2.png":Zc,"../../content/assets/agtplay.jpg":tl,"../../content/assets/agtplay2.jpg":al,"../../content/assets/agtsystem.png":ll,"../../content/assets/agtusability.png":pl,"../../content/assets/arduino1.png":gl,"../../content/assets/becomeyou1.jpg":bl,"../../content/assets/benoit.png":wl,"../../content/assets/benoit1.jpg":Ol,"../../content/assets/benoit2.jpg":Ml,"../../content/assets/benoit3.jpg":Il,"../../content/assets/berry 2.png":Bl,"../../content/assets/berry.png":Wl,"../../content/assets/biosignal1.jpg":Jl,"../../content/assets/bubu.jpg":Ql,"../../content/assets/bubus.jpg":tu,"../../content/assets/cahngee.png":au,"../../content/assets/centerlabubu.jpg":lu,"../../content/assets/change.png":pu,"../../content/assets/chochang1.JPG":_u,"../../content/assets/cover.png":xu,"../../content/assets/draconian1.jpg":wu,"../../content/assets/draconian2.jpg":Ou,"../../content/assets/earthash1.jpg":Mu,"../../content/assets/elliotfig1.png":Iu,"../../content/assets/fish1.jpg":Bu,"../../content/assets/fishes.jpg":Wu,"../../content/assets/fishesss.jpg":qu,"../../content/assets/forgetavoid1.jpg":Zu,"../../content/assets/forgetavoid1.png":td,"../../content/assets/gamejams1.jpg":ad,"../../content/assets/gamejams2.jpg":ld,"../../content/assets/gamejams3.png":pd,"../../content/assets/gulp 2.png":hd,"../../content/assets/gulp.png":yd,"../../content/assets/heidi1.jpg":Cd,"../../content/assets/icee.png":Dd,"../../content/assets/icee2.jpg":jd,"../../content/assets/icee3.jpg":Fd,"../../content/assets/kissingstone1.jpg":zd,"../../content/assets/kissingstone2.jpg":Ud,"../../content/assets/labubu.jpg":qd,"../../content/assets/labubu1.jpg":Zd,"../../content/assets/maggie.png":tf,"../../content/assets/maggie1.jpg":of,"../../content/assets/maggie2.jpg":uf,"../../content/assets/maggie3.jpg":mf,"../../content/assets/nirvana1.jpg":vf,"../../content/assets/nixie.png":Sf,"../../content/assets/nixie1.jpg":Ef,"../../content/assets/nixie2.jpg":Af,"../../content/assets/pixie.jpg":Pf,"../../content/assets/pixie.png":Rf,"../../content/assets/pixie1.jpg":Hf,"../../content/assets/pixie2.jpg":Kf,"../../content/assets/portfolio-opened.png":Xf,"../../content/assets/portfolio.png":ep,"../../content/assets/project.png":ip,"../../content/assets/remfall art 1.png":sp,"../../content/assets/remfall art 2.png":dp,"../../content/assets/remfall art.png":hp,"../../content/assets/remfall1.png":yp,"../../content/assets/smallheartbig.png":Cp,"../../content/assets/space cat 1.png":Ep,"../../content/assets/space_cat.png":Ap,"../../content/assets/swaggy.png":Pp,"../../content/assets/swaggy1.jpg":Rp,"../../content/assets/swaggy2.jpg":Hp,"../../content/assets/swaggy3.jpg":Gp,"../../content/assets/sylph.jpg":Jp,"../../content/assets/windwisp1.png":Qp,"../../content/assets/yoki.png":nm,"../../content/assets/yoki2.jpg":om,"../../content/assets/yoki3.jpg":um,"../../content/assets/yoki4.jpg":mm});function sg(e){let t=`/${e.replace(/^\.\//,``).replace(/^assets\//,``).replace(/^content\/assets\//,``)}`.toLowerCase(),n=Object.entries(og).find(([e])=>e.toLowerCase().endsWith(t));if(!n)throw Error(`Project image not found: "${e}". Put the file in content/assets/ and reference just the filename.`);return rg(n[1],e)}function cg(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(e.trim());if(!t)return{data:{},body:e.trim()};let n={};for(let e of t[1].split(/\r?\n/)){let t=e.indexOf(`:`);if(t===-1)continue;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim().replace(/^["']|["']$/g,``);r&&(n[r]=i)}return{data:n,body:t[2].trim()}}function lg(e){return e?e.trim().toLowerCase()!==`false`:!0}function ug(e){let t=Number(e);return Number.isFinite(t)?Math.min(1,Math.max(-1,t)):null}function dg(e){if(!e?.trim())return null;let t=e.split(`,`).map(e=>e.trim()).filter(Boolean);if(t.length!==3)return null;let n=ug(t[0]),r=ug(t[1]),i=ug(t[2]);return n===null||r===null||i===null?null:{x:n,y:r,z:i}}function fg(e){if(!e)return[];let t=e.replace(/^\[|\]$/g,``).split(`,`).map(e=>e.trim().replace(/^["']|["']$/g,``).toLowerCase()).filter(Boolean),n=[];for(let e of t){let t=ig.find(t=>t===e);t&&!n.includes(t)&&n.push(t)}return n}function pg(e){return(e.split(`/`).pop()??e).replace(/\.md$/,``)}function mg(){return Object.entries(ag).map(([e,t])=>{let{data:n,body:r}=cg(t),i=pg(e),a=n.title??i,o=n.description??``,s=sg(n.image??`project.png`),c=n.collaboration??``,l=n.roles??n.role??``,u=n.tools??``,d=n.play??``,f=n.playlabel??n.playLabel??`play`,p=lg(n.hasLink??n.haslink),m=fg(n.tags),h=dg(n.spectrum);return{slug:i,title:a,description:o,image:s,collaboration:c,roles:l,tools:u,playUrl:d,playLabel:f,hasLink:p,body:r,bodyHtml:r?Q.parse(r,{async:!1}):``,sections:tg(r,sg),tags:m,spectrum:h}})}var hg=mg(),gg=Nh;function _g(e){let t=new Map(e.map((e,t)=>[e,t]));return hg.filter(e=>t.has(e.slug)).sort((e,n)=>(t.get(e.slug)??0)-(t.get(n.slug)??0))}var vg=_g(gg.projects),yg=_g(gg.experiments),bg=new Map(gg.projects.map((e,t)=>[e,t]));function xg(){return vg}function Sg(){return yg}function Cg(){return vg.map(e=>e.slug)}function wg(e){let t=e.trim().toLowerCase();return hg.find(e=>e.title.toLowerCase()===t)}function Tg(e){return e.replace(/\s+/g,`-`)}function Eg(e){let t=e.trim().toLowerCase().replace(/-/g,` `);return ig.find(e=>e===t)}function Dg(e){let t=vg.filter(t=>t.tags.includes(e)),n=hg.filter(t=>t.tags.includes(e)&&!bg.has(t.slug));return[...t,...n]}function Og(e){let t=[...vg,...hg.filter(e=>!bg.has(e.slug))],n=[];for(let r of t)r.sections.forEach((t,i)=>{t.systems.includes(e)&&n.push({projectTitle:r.title,projectSlug:r.slug,section:t,sectionIndex:i})});return n}function kg(e){return e!==`/experiments`}function Ag(){return typeof document<`u`&&!!document.querySelector(`.experiments-popup`)}function jg(e){typeof document>`u`||(document.documentElement.dataset.experimentsPopup=e)}function Mg(e,t){let n=Ag()&&kg(e),r=kg(t);return n&&r?`persist`:n&&!r?`fade-out`:`fade-in`}function Ng(e){return e!==`/`}function Pg(e){typeof document>`u`||(document.documentElement.dataset.topBar=e)}function Fg(e,t){let n=Ng(e),r=Ng(t);return n&&r?`persist`:n&&!r?`fade-out`:`fade-in`}function Ig(e,t){Pg(Fg(e,t)),jg(Mg(e,t))}export{Ne as _,Cg as a,Og as c,Bh as d,Lh as f,Ce as g,ve as h,wg as i,Eg as l,ge as m,ig as n,xg as o,he as p,Sg as r,Dg as s,Ig as t,Tg as u};