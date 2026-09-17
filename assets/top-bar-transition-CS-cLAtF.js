import{B as e,C as t,F as n,G as r,K as i,P as a,R as o,S as s,U as c,V as l,W as u,Y as d,b as f,d as p,f as m,g as h,i as g,m as _,p as v,q as y,u as b,v as x,x as S,y as C}from"./jsx-runtime-tQlTBj1C.js";import{a as ee,c as w,g as T,n as E,s as te}from"./errorBoundaries-DTU3uq2_.js";var D=`application/x-www-form-urlencoded`;function O(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function ne(e){return O(e)&&e.tagName.toLowerCase()===`button`}function re(e){return O(e)&&e.tagName.toLowerCase()===`form`}function ie(e){return O(e)&&e.tagName.toLowerCase()===`input`}function ae(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oe(e,t){return e.button===0&&(!t||t===`_self`)&&!ae(e)}function k(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function se(e,t){let n=k(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var A=null;function ce(){if(A===null)try{new FormData(document.createElement(`form`),0),A=!1}catch{A=!0}return A}var le=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function ue(e){return e!=null&&!le.has(e)?(r(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${D}"`),null):e}function de(e,t){let n,r,i,a,o;if(re(e)){let o=e.getAttribute(`action`);r=o?l(o,t):null,n=e.getAttribute(`method`)||`get`,i=ue(e.getAttribute(`enctype`))||D,a=new FormData(e)}else if(ne(e)||ie(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?l(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||`get`,i=ue(e.getAttribute(`formenctype`))||ue(o.getAttribute(`enctype`))||D,a=new FormData(o,e),!ce()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(O(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=`get`,r=null,i=D,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}var j=d(y(),1),fe=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{fe&&(window.__reactRouterVersion=`8`)}catch{}function pe({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=j.useState({action:n.action,location:n.location}),o=j.useCallback(e=>{r===!1?a(e):j.startTransition(()=>a(e))},[r]);return j.useLayoutEffect(()=>n.listen(o),[n,o]),j.createElement(g,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}pe.displayName=`unstable_HistoryRouter`;var me=j.forwardRef(function({onClick:t,discover:n=`render`,prefetch:r=`none`,relative:s,reloadDocument:c,replace:l,mask:u,state:d,target:f,to:m,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:_,...v},y){let{basename:x,navigator:C,useTransitions:T}=j.useContext(S),E=typeof m==`string`&&i.test(m),D=o(m,x);m=D.to;let O=b(m,{relative:s}),ne=p(),re=null;if(u){let t=e(u,[],ne.mask?ne.mask.pathname:`/`,!0);x!==`/`&&(t.pathname=t.pathname===`/`?x:a([x,t.pathname])),re=C.createHref(t)}let[ie,ae,oe]=w(r,v),k=xe(m,{replace:l,mask:u,state:d,target:f,preventScrollReset:h,relative:s,viewTransition:g,defaultShouldRevalidate:_,useTransitions:T});function se(e){t&&t(e),e.defaultPrevented||k(e)}let A=!(D.isExternal||c),ce=j.createElement(`a`,{...v,...oe,href:(A?re:void 0)||D.absoluteURL||O,onClick:A?se:t,ref:te(y,ae),target:f,"data-discover":!E&&n===`render`?`true`:void 0});return ie&&!E?j.createElement(j.Fragment,null,ce,j.createElement(ee,{page:O})):ce});me.displayName=`Link`;var he=j.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},u){let d=h(a,{relative:c.relative}),m=p(),g=j.useContext(f),{navigator:_,basename:v}=j.useContext(S),y=g!=null&&Ne(d)&&o===!0,b=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,x=m.pathname,C=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;t||(x=x.toLowerCase(),C=C?C.toLowerCase():null,b=b.toLowerCase()),C&&v&&(C=l(C,v)||C);let ee=b!==`/`&&b.endsWith(`/`)?b.length-1:b.length,w=x===b||!r&&x.startsWith(b)&&x.charAt(ee)===`/`,T=C!=null&&(C===b||!r&&C.startsWith(b)&&C.charAt(ee)===`/`),E={isActive:w,isPending:T,isTransitioning:y},te=w?e:void 0,D;D=typeof n==`function`?n(E):[n,w?`active`:null,T?`pending`:null,y?`transitioning`:null].filter(Boolean).join(` `);let O=typeof i==`function`?i(E):i;return j.createElement(me,{...c,"aria-current":te,className:D,ref:u,style:O,to:a,viewTransition:o},typeof s==`function`?s(E):s)});he.displayName=`NavLink`;var ge=j.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:o,method:s=`get`,action:c,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p,...m},h)=>{let{useTransitions:g}=j.useContext(S),_=Te(),v=Ee(c,{relative:u}),y=s.toLowerCase()===`get`?`get`:`post`,b=typeof c==`string`&&i.test(c);return j.createElement(`form`,{ref:h,method:y,action:v,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,i=r?.getAttribute(`formmethod`)||s,c=()=>_(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:o,relative:u,preventScrollReset:d,viewTransition:f,defaultShouldRevalidate:p});g&&n!==!1?j.startTransition(()=>c()):c()},...m,"data-discover":!b&&e===`render`?`true`:void 0})});ge.displayName=`Form`;function _e({getKey:e,storageKey:t,...n}){let r=j.useContext(E),{basename:i}=j.useContext(S),a=p(),o=m();Ae({getKey:e,storageKey:t});let s=j.useMemo(()=>{if(!r||!e)return null;let t=ke(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),j.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${T(JSON.stringify(t||De))}, ${T(JSON.stringify(s))})`}})}_e.displayName=`ScrollRestoration`;function ve(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ye(e){let t=j.useContext(C);return u(t,ve(e)),t}function be(e){let t=j.useContext(f);return u(t,ve(e)),t}function xe(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l,useTransitions:u}={}){let d=v(),f=p(),m=h(e,{relative:o});return j.useCallback(p=>{if(oe(p,t)){p.preventDefault();let t=n===void 0?c(f)===c(m):n,h=()=>d(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:l});u?j.startTransition(()=>h()):h()}},[f,d,m,n,r,i,t,e,a,o,s,l,u])}function Se(e){r(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=j.useRef(k(e)),n=j.useRef(!1),i=p(),a=j.useMemo(()=>se(i.search,n.current?null:t.current),[i.search]),o=v();return[a,j.useCallback((e,t)=>{let r=k(typeof e==`function`?e(new URLSearchParams(a)):e);n.current=!0,o(`?`+r,t)},[o,a])]}var Ce=0,we=()=>`__${String(++Ce)}__`;function Te(){let{router:e}=ye(`useSubmit`),{basename:t}=j.useContext(S),n=x(),r=e.fetch,i=e.navigate;return j.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=de(e,t);a.navigate===!1?await r(a.fetcherKey||we(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,relative:a.relative,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ee(e,{relative:t}={}){let{basename:n}=j.useContext(S),r=j.useContext(s);u(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),o={...h(e||`.`,{relative:t})},l=p();if(e==null){o.search=l.search;let e=new URLSearchParams(o.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();o.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(o.pathname=o.pathname===`/`?n:a([n,o.pathname])),c(o)}var De=`react-router-scroll-positions`,Oe={};function ke(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:l(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Ae({getKey:e,storageKey:t}={}){let{router:n}=ye(`useScrollRestoration`),{restoreScrollPosition:i,preventScrollReset:a}=be(`useScrollRestoration`),{basename:o}=j.useContext(S),s=p(),c=m(),l=_();j.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Me(j.useCallback(e=>{e.persisted&&(window.history.scrollRestoration=`manual`)},[])),je(j.useCallback(()=>{if(l.state===`idle`){let t=ke(s,c,o,e);Oe[t]=window.scrollY}try{sessionStorage.setItem(t||De,JSON.stringify(Oe))}catch(e){r(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[l.state,e,o,s,c,t])),typeof document<`u`&&(j.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||De);e&&(Oe=JSON.parse(e))}catch{}},[t]),j.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Oe,()=>window.scrollY,e?(t,n)=>ke(t,n,o,e):void 0);return()=>t&&t()},[n,o,e]),j.useLayoutEffect(()=>{if(i!==!1){if(typeof i==`number`){window.scrollTo(0,i);return}try{if(s.hash){let e=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{r(!1,`"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}a!==!0&&window.scrollTo(0,0)}},[s,i,a]))}function je(e,t){let{capture:n}=t||{};j.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Me(e,t){let{capture:n}=t||{};j.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pageshow`,e,t),()=>{window.removeEventListener(`pageshow`,e,t)}},[e,n])}function Ne(e,{relative:r}={}){let i=j.useContext(t);u(i!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ye(`useViewTransitionState`),o=h(e,{relative:r});if(!i.isTransitioning)return!1;let s=l(i.currentLocation.pathname,a)||i.currentLocation.pathname,c=l(i.nextLocation.pathname,a)||i.nextLocation.pathname;return n(o.pathname,c)!=null||n(o.pathname,s)!=null}var Pe=`---
title: All Good Things
description: A selected body of work exploring form, material, and narrative.
image: agt-poster.PNG
tags: creative tech, games
collaboration: Studio North, Lumen Games
roles: Product Designer, Art Director
tools: Figma, Blender, Unity
play: https://example.com/all-good-things
playlabel: play
hasLink: true
---

:::row
title: Form and material
image: project.png
side: left

All Good Things is a selected body of work exploring form, material, and narrative across print and object. #design

The pieces sit between sculpture and page — tactile, quiet, and paced for close looking. Surfaces hold light differently depending on grain, ink load, and how the paper was folded into the room.
:::

:::row
title: Spatial studies
image: portfolio.png
side: right

Later studies pushed the same language into spatial arrangements, testing how objects hold a room. #realtime

Scale shifts from hand-held to architectural: a poster becomes a wall, a seam becomes a corridor. Visitors move through the work as much as they look at it.
:::

:::row
title: Tools and prototypes
image: portfolio-opened.png
side: left

Early prototypes mixed CNC-cut frames with hand-bound signatures. #tech A small firmware sketch drove LED pulses that matched the pacing of the printed sequence.

The goal was not spectacle — just enough motion to make the still work feel alive when someone paused beside it.
:::

:::row
title: Narrative thread
image: aboutme.png
side: right

Each piece carries a short caption that can be read in any order. #narrative Together they sketch a day that never quite happened: morning light, a misplaced letter, an empty chair by the window. #production
:::

:::row
title: Notes

Edition sizes stayed small so each copy could keep a slight variation — a stamp, a fold, a torn edge left intentional. #design #narrative
:::
`,Fe=`---
title: become you / become better
description: Installation of two companion short films of a mother and her daughter.
image: becomeyou1.jpg
collaboration: Temp Film Studio
roles: Director, Editor
tools: Premiere, DaVinci Resolve
play: https://example.com/become-you
playlabel: play
hasLink: false
---

:::row
title: Concept & Story
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,Ie=`---
title: beep boop boop & a root
description: Highlights from ongoing and completed series.
image: heidi1.jpg
tags: performance
collaboration: Temp Lab, Pulse Works
roles: Performer, Hardware Designer
tools: Arduino, Max, Sensors
play: https://example.com/biosignal-blackout
playlabel: play
hasLink: false
---

:::row
title: Highlights
image: project.png
side: left

Highlights from ongoing and completed series. #narrative This page gathers the pieces that still feel unfinished in a useful way — work that keeps asking questions after it leaves the studio.
:::

:::row
title: Soft mechanics
image: aboutme.png
side: right

A playable pamphlet where turning pages advances a tiny state machine. #tech Readers choose folds; the story branches without screens — close in spirit to a game, even when the object looks like a book. #realtime
:::

:::row
title: Material scores
image: portfolio-opened.png
side: left

Scores written for fabric, wire, and found wood. #design Performers follow diagrams rather than notes, so each staging is a new arrangement of the same instructions. #realtime
:::

:::row
title: Field recordings

Ambient tracks recorded in empty galleries after install. #narrative They sit under later video pieces as a quiet clock — proof that the rooms once held people.
:::

:::row
title: Ongoing threads

Three series remain open: a color study, a walking game, and a set of posters that change with each reprint. #tech #design Closing them is less interesting than letting them keep mutating.
:::
`,Le=`---
title: Biosignal Blackout
description: Realtime performance visuals using dancers' biometric data.
image: biosignal1.jpg
tags: creative tech, performance
collaboration: Mirrored Glass, Shawescape, Andy Arts Center, Ari Sol
roles: Interaction Designer, Touchdesigner Artist & Technician
tools: Touchdesigner, Python, Respiration Belt & Heartrate Sensors
play: https://www.instagram.com/reel/DcRZfeUzQ6J/?stkn=MTc0aHB1aGJhaGtmYQ==
playlabel: preview
hasLink: true
---

:::row
title: Visual Sketches + Design Prototyping
image: Screenshot 2026-09-17 002444.png
side: left

in progress
:::

:::row
title: Receiving & Visualizing Biometric Data
image: 000A1936.jpg
side: right

in progress
:::

:::row
title: Showrunner System
image: Screenshot 2026-09-17 002031.png
side: left

in progress
:::

:::row
title: Touchdesigner POPs
image: 000A1334.jpg
side: right

in progress
:::

:::row
title: Projection Mapping & Installation
image: 000A1482.jpg
side: left

in progress
:::
`,Re=`---
title: Cho Chang
description: Live interdisciplinary performance that explores the model minority myth.

image: chochang1.JPG
tags: performance
collaboration: Shirunyu Li (composer)
roles: Choreographer, Artist/Writer
tools: Live2D, Procreate
play: https://www.youtube.com/live/seXAqQ9vWmw?si=LdtV1wqKdyrdasTF&t=2546
playlabel: watch
hasLink: true
---

:::row
title: Concept & Personal Story
image: IMG_6983.PNG
side: left

This piece presents personal commentary on the representation of Asian characters in the West, with original musical composition by Shirunyu (Rainnie) Li. Chang Cho zeros in on what Cho Chang, the token East Asian character in Harry Potter, meant to a young child wanting to belong. Chang Cho aims to translate the complex introspection and bitterness of acculturation, while - quite literally - rewriting a literary character to reclaim girlhood.
:::

:::row
title: Interdisciplinary Elements
image: P1580405.JPEG
side: right

in progress
:::

:::row
title: Live2D
image: IMG_7013.PNG
side: left

in progress
:::

:::row
title: Psychology of the Model Minority Myth
image: P1580272.jpg
side: right

in progress
:::
`,ze=`---
title: Arudinos
description: Designer focused on tactile process and digital craft.
image: arduino1.png
tags: creative tech
collaboration: Temp Hardware Club
roles: Electronics Designer
tools: Arduino, Processing
play: https://example.com/color-change
playlabel: play
hasLink: false
---

:::row
title: Intro
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,Be=`---
title: Draconian
description: Fanfic ARG
image: draconian2.jpg
collaboration: Temp Atelier
roles: Costume Designer
tools: Needle, Thread, Photoshop
play: https://example.com/labubus
playlabel: play
hasLink: false
---

:::row
title: Intro
image: aboutme.png
side: left

I create a story and personality for each Labubu, imagining what they would wear or use in their daily life. It’s a great creative hobby for whimsy. I also often recycle everyday items, like a pen cap, bra insert, or the lone sock. #narrative
:::

:::row
title: Maggie
image: portfolio.png
side: right

A magical monocled swashbuckling enchantress. The sword is made from a barret clip and washers; the cape and brocade suit hand sewn.
:::

:::row
title: Swaggy

My first outfit I ever made by upcycling premade clothes. Swaggy is meant to be THE cool girl on the block: the wine bottle is made from a travel tabasco bottle and their shades from the back of a yogurt lid.
:::

:::row
title: Yoki
image: portfolio-opened.png
side: left

This character was commissioned by a friend who both wanted to match with her Labubu and had just watched Kpop Demon Hunters. Yoki has pierced ears, studs on leather, and chic beanie with casual tote bag combo - the ultimate modern Saja Boy.
:::

:::row
title: Benoit Blabubu

Commissioned by another friend who is a big fan of the noir genre. It ended up closer to the Knives Out detective but features the most elaborate tailoring yet with a fully functional trench coat that ties and has hidden pockets. The hat is stitched from real leather scraps.
:::

:::row
title: Iccee

Of the labubus, this one is my self insert. Iccee is iced out and wearing a dress made from a handkerchief I got during a Japanese exchange program. I loved the print, but never used it as a handkerchief. The crown is made from a single earring, a hoop earring, and other broken dangly jewelry bits.
:::

:::row
title: Nixie & Pixie

The twins, Nixie and Pixie, draw from my deepest love of fantasy, especially the classic mermaids and fairies. You can tell I grew up on the old Barbie movies. Nixie’s tail and gills/ears are made from scrap interfacing and a single pant leg of a holographic yoga pant. Pixie features fully beaded ears, a crocheted crossbody, and scavenged acorn buckle. With such tiny wings, she can’t exactly fly but that doesn’t stop her longing for the stars and space.

:::
`,Ve=`---
title: Earth & Ash
description: Highlights from ongoing and completed series.
image: earthash1.jpg
tags: performance
collaboration: Temp Lab, Pulse Works
roles: Performer, Hardware Designer
tools: Arduino, Max, Sensors
play: https://example.com/biosignal-blackout
playlabel: play
hasLink: false
---

:::row
title: Highlights
image: project.png
side: left

Highlights from ongoing and completed series. #narrative This page gathers the pieces that still feel unfinished in a useful way — work that keeps asking questions after it leaves the studio.
:::

:::row
title: Soft mechanics
image: aboutme.png
side: right

A playable pamphlet where turning pages advances a tiny state machine. #tech Readers choose folds; the story branches without screens — close in spirit to a game, even when the object looks like a book. #realtime
:::

:::row
title: Material scores
image: portfolio-opened.png
side: left

Scores written for fabric, wire, and found wood. #design Performers follow diagrams rather than notes, so each staging is a new arrangement of the same instructions. #realtime
:::

:::row
title: Field recordings

Ambient tracks recorded in empty galleries after install. #narrative They sit under later video pieces as a quiet clock — proof that the rooms once held people.
:::

:::row
title: Ongoing threads

Three series remain open: a color study, a walking game, and a set of posters that change with each reprint. #tech #design Closing them is less interesting than letting them keep mutating.
:::
`,He=`---
title: the Journey and Drinks of Elliot Fig
description: Designer focused on tactile process and digital craft.
image: elliotfig1.png
tags: games
collaboration: Temp Windworks
roles: Narrative Designer, Programmer
tools: Unity, Twine, FMOD
play: https://example.com/wind-wisp
playlabel: play
hasLink: true
---

:::row
title: Intro
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,Ue=`---
title: If Fish Could Scream
description: Interactive webcam tracked gallery at the Grand LA.
image: fish1.jpg
tags: creative tech
collaboration: Zeping Sun, Jay Borgwardt, the Grand LA
roles: Designer
tools: Touchdesigner, Mediapipe
play: https://vimeo.com/1111814252?fl=pl&fe=sh
playlabel: view
hasLink: true
---

:::row
title: Concept & Theme
image: IMG_3370.png
side: left

in progress
:::

:::row
title: Mediapipe for Webcam Detection
image: IMG_2161.png
side: right

in progress
:::

:::row
title: Projection Mapping & Installation
image: IMG_3432.JPG
side: left

in progress
:::

:::row
title: Touchdesigner System
image: IMG_3134.PNG
side: right

in progress
:::

`,We=`---
title: I Forget to Avoid
description: Highlights from ongoing and completed series.
image: copy of brain2.png
tags: creative tech
collaboration: Temp Lab, Pulse Works
roles: Performer, Hardware Designer
tools: Arduino, Max, Sensors
play: https://example.com/biosignal-blackout
playlabel: play
hasLink: true
---

:::row
title: Highlights
image: project.png
side: left

Highlights from ongoing and completed series. #narrative This page gathers the pieces that still feel unfinished in a useful way — work that keeps asking questions after it leaves the studio.
:::

:::row
title: Soft mechanics
image: aboutme.png
side: right

A playable pamphlet where turning pages advances a tiny state machine. #tech Readers choose folds; the story branches without screens — close in spirit to a game, even when the object looks like a book. #realtime
:::

:::row
title: Material scores
image: portfolio-opened.png
side: left

Scores written for fabric, wire, and found wood. #design Performers follow diagrams rather than notes, so each staging is a new arrangement of the same instructions. #realtime
:::

:::row
title: Field recordings

Ambient tracks recorded in empty galleries after install. #narrative They sit under later video pieces as a quiet clock — proof that the rooms once held people.
:::

:::row
title: Ongoing threads

Three series remain open: a color study, a walking game, and a set of posters that change with each reprint. #tech #design Closing them is less interesting than letting them keep mutating.
:::
`,Ge=`---
title: Game Jams
description: Designer focused on tactile process and digital craft.
image: space_cat.png
tags: games
collaboration: Temp Jam Team
roles: Game Designer, Artist
tools: Unity, Aseprite, Godot
play: https://example.com/game-jams
playlabel: play
hasLink: true
---

:::row
title: Intro
image: aboutme.png
side: left
roles: Game Designer, Artist
tools: Unity, Aseprite, Godot
collaboration: Temp Jam Team
play: https://example.com/game-jams
playlabel: play

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right
roles: Game Designer, Artist
tools: Unity, Aseprite, Godot
collaboration: Temp Jam Team
play: https://example.com/game-jams
playlabel: play

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes
roles: Game Designer, Artist
tools: Unity, Aseprite, Godot
collaboration: Temp Jam Team

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left
roles: Game Designer, Artist
tools: Unity, Aseprite, Godot
collaboration: Temp Jam Team
play: https://example.com/game-jams
playlabel: play

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere
roles: Game Designer, Artist
tools: Unity, Aseprite, Godot
collaboration: Temp Jam Team

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,Ke=`---
title: Kissing Stone
description: Designer focused on tactile process and digital craft.
image: kissingstone2.jpg
tags: creative tech
collaboration: Temp Field Studio
roles: Installation Artist
tools: Blender, Rhino, Cinema4D
play: https://example.com/kissing-stone
playlabel: play
hasLink: false
---

:::row
title: Intro
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,qe=`---
title: Labubu Couture
description: Labubus not in the consumerism way but in the “15+ hrs custom couture outfit” way.
image: labubu1.jpg
collaboration: Temp Atelier
roles: Costume Designer
tools: Needle, Thread, Photoshop
play: https://example.com/labubus
playlabel: play
hasLink: false
---

:::row
title: Intro
image: aboutme.png
side: left

I create a story and personality for each Labubu, imagining what they would wear or use in their daily life. It’s a great creative hobby for whimsy. I also often recycle everyday items, like a pen cap, bra insert, or the lone sock. #narrative
:::

:::row
title: Maggie
image: portfolio.png
side: right

A magical monocled swashbuckling enchantress. The sword is made from a barret clip and washers; the cape and brocade suit hand sewn.
:::

:::row
title: Swaggy

My first outfit I ever made by upcycling premade clothes. Swaggy is meant to be THE cool girl on the block: the wine bottle is made from a travel tabasco bottle and their shades from the back of a yogurt lid.
:::

:::row
title: Yoki
image: portfolio-opened.png
side: left

This character was commissioned by a friend who both wanted to match with her Labubu and had just watched Kpop Demon Hunters. Yoki has pierced ears, studs on leather, and chic beanie with casual tote bag combo - the ultimate modern Saja Boy.
:::

:::row
title: Benoit Blabubu

Commissioned by another friend who is a big fan of the noir genre. It ended up closer to the Knives Out detective but features the most elaborate tailoring yet with a fully functional trench coat that ties and has hidden pockets. The hat is stitched from real leather scraps.
:::

:::row
title: Iccee

Of the labubus, this one is my self insert. Iccee is iced out and wearing a dress made from a handkerchief I got during a Japanese exchange program. I loved the print, but never used it as a handkerchief. The crown is made from a single earring, a hoop earring, and other broken dangly jewelry bits.
:::

:::row
title: Nixie & Pixie

The twins, Nixie and Pixie, draw from my deepest love of fantasy, especially the classic mermaids and fairies. You can tell I grew up on the old Barbie movies. Nixie’s tail and gills/ears are made from scrap interfacing and a single pant leg of a holographic yoga pant. Pixie features fully beaded ears, a crocheted crossbody, and scavenged acorn buckle. With such tiny wings, she can’t exactly fly but that doesn’t stop her longing for the stars and space.

:::
`,Je=`---
title: Nirvana
description: Projection mapping and dance film of a woman enduring heartbreak.
image: nirvana1.jpg
tags: performance
collaboration: Angela Wenyang Hou (director)
roles: Motion Capture Choreographer/Consultant, Performer
tools: OptiTrack, Motive, Touchdesigner
play: https://www.instagram.com/p/DJZwniKys50/?utm_source=ig_web_button_share_sheet
playlabel: preview
hasLink: true
---

:::row
title: Experimental & Multimedia
image: Screenshot 2026-09-11 232614.png
side: left

in progress
:::

:::row
title: Motion Capture
image: IMG_5895.png
side: right

in progress
:::

:::row
title: On Set
image: IMG_0926.png
side: left

in progress
:::

:::row
title: Projection Mapping & Lighting 
image: IMG_1400.JPG
side: right 

in progress
:::
`,Ye=`---
title: Remfall
description: Designer focused on tactile process and digital craft.
image: remfall1.png
tags: games
collaboration: Temp Nightshift
roles: Game Designer, Writer
tools: Unity, Photoshop, Audacity
play: https://example.com/remfall
playlabel: play
hasLink: true
---

:::row
title: Intro
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,Xe=`---
title: I'm Small but my Heart is Big!
description: Designer focused on tactile process and digital craft.
image: smallheartbig.png
tags: games
collaboration: Temp Windworks
roles: Narrative Designer, Programmer
tools: Unity, Twine, FMOD
play: https://example.com/wind-wisp
playlabel: play
hasLink: true
---

:::row
title: Intro
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,Ze=`---
title: Sylph
description: Phone AR experience.
image: sylph.jpg
collaboration: Temp Atelier
roles: Costume Designer
tools: Needle, Thread, Photoshop
play: https://example.com/labubus
playlabel: play
hasLink: false
---

:::row
title: Intro
image: aboutme.png
side: left

I create a story and personality for each Labubu, imagining what they would wear or use in their daily life. It’s a great creative hobby for whimsy. I also often recycle everyday items, like a pen cap, bra insert, or the lone sock. #narrative
:::

:::row
title: Maggie
image: portfolio.png
side: right

A magical monocled swashbuckling enchantress. The sword is made from a barret clip and washers; the cape and brocade suit hand sewn.
:::

:::row
title: Swaggy

My first outfit I ever made by upcycling premade clothes. Swaggy is meant to be THE cool girl on the block: the wine bottle is made from a travel tabasco bottle and their shades from the back of a yogurt lid.
:::

:::row
title: Yoki
image: portfolio-opened.png
side: left

This character was commissioned by a friend who both wanted to match with her Labubu and had just watched Kpop Demon Hunters. Yoki has pierced ears, studs on leather, and chic beanie with casual tote bag combo - the ultimate modern Saja Boy.
:::

:::row
title: Benoit Blabubu

Commissioned by another friend who is a big fan of the noir genre. It ended up closer to the Knives Out detective but features the most elaborate tailoring yet with a fully functional trench coat that ties and has hidden pockets. The hat is stitched from real leather scraps.
:::

:::row
title: Iccee

Of the labubus, this one is my self insert. Iccee is iced out and wearing a dress made from a handkerchief I got during a Japanese exchange program. I loved the print, but never used it as a handkerchief. The crown is made from a single earring, a hoop earring, and other broken dangly jewelry bits.
:::

:::row
title: Nixie & Pixie

The twins, Nixie and Pixie, draw from my deepest love of fantasy, especially the classic mermaids and fairies. You can tell I grew up on the old Barbie movies. Nixie’s tail and gills/ears are made from scrap interfacing and a single pant leg of a holographic yoga pant. Pixie features fully beaded ears, a crocheted crossbody, and scavenged acorn buckle. With such tiny wings, she can’t exactly fly but that doesn’t stop her longing for the stars and space.

:::
`,Qe=`---
title: WACsmash
description: Live dance show confronting relevant social topics post 2020.
image: Wacsmash1.JPG
tags: performance
collaboration: UCLA, various
roles: Lead Producer

play: https://www.youtube.com/live/wEE9_GrA2xg?si=fLv2mPoYgye2Iawj
playlabel: watch
hasLink: true
---

:::row
title: Managing 90+ Cast & Crew
image: DSC08493.JPG
side: left

WACsmash returned to its 20 years long tradition after the COVID-19 pandemic, as UCLA's largest annual dance show and gallery. This year featured 11 choreographers, 8 visual artists, and 85 total performers, in addition to lighting, video, and production crew. 

As a producer, I facilitated and led year long communcations between each section, often anticipating problems before they arose and navigating conflicting needs between production and individuals.

:::

:::row
title: COVID Challenges
image: DSC09299.JPG
side: right

Returning to the live magic of in person shows required unprecedented coordination and new considerations, including weekly testing and hybrid accomodations.

For rehearsals, I tracked in person attendance and organized COVID-19 testing each week. Because each of the 11 dance pieces included different and overlapping casts with separate rehearsal times, I maintained meticulous monitoring and eventually sought a COVID-19 Compliance Officer certification from Health Education Services to inform future decisions. 

I felt strongly commited to these guidelines so that the community could share the stage again. 

:::

:::row
title: Long Term Logistics
image: DSC09118.JPG
side: left

We successfully held two evening performances, a matinee, and livestream. The hour and half long shows were a culmination of many peoples' hard work over a year's time.

On my end, I began with the other producers during the summer before production began. We concepted several themes, discussing which would resonate yet offer enough possibilities to our geneneration of creatives. We chose "To Whom It May Concern" an open call to share underrepresented stories and voices in the performing arts. 

Then, we started the processes to cast choreographers, dancers, artists, and guest performers. I researched the past dates of these action items and reached out to alumni for feedback on the timing. With more information, I adjusted both our internal and external deadlines to best serve the community. For example, it was important to give choreographers enough time to review dancers submissions but retain time after initial decisions to balance casting, all the while communicating via website and socials on progress. 

One of my key roles ended up being the person to flag major and minor obstacles in advance, looking ahead to ensure smooth sailing. I took extra care to remind contributors to document costs early, collecting receipts for our Financial Advisor's eventual reimbursements. In addition, I headed our fundraising and grant applications, attending funding hearings with our Student Finances Manager raising approximately 13k from four separate organizations. #production

:::

:::row
title: Artist Selection & Collaboration
image: DSC08871.JPG
side: right

For artist and choreographer selections, I held audition and interview slots. Some questions we asked our choreographers: 

What do you bring to the table when someone has the same idea/subject as you?

If multiple mediums, please describe the relationship between elements.

How do you plan to select your dancers at our auditions?

:::

:::row
title: Real World Voices
image: DSC08593.JPG
side: left

I enjoyed advocating and helping create a space for conversation and change. Social justice as a term is broad, but mainly we hoped students got a formal stage to express their personal real world experiences and perspectives. This was and is still incredibly relevant, as for performing artists their professional voice is creative and ther creative voice is political.
:::
`,$e=`---
title: the Wind and the Wisp
description: Designer focused on tactile process and digital craft.
image: windwisp1.png
tags: games
collaboration: Temp Windworks
roles: Narrative Designer, Programmer
tools: Unity, Twine, FMOD
play: https://example.com/wind-wisp
playlabel: play
hasLink: true
---

:::row
title: Intro
image: aboutme.png
side: left

Bernice is a designer focused on tactile process and digital craft. #design This temporary page holds notes that may migrate into a longer about section later.
:::

:::row
title: Practice
image: portfolio.png
side: right

The practice moves between print, object, and small-scale performance. #realtime Tools range from letterpress and binding to microcontrollers and soft sensors. #tech
:::

:::row
title: Themes

Recurring questions: how a story sits in a room, how touch changes pacing, and when digital layers should stay almost invisible. #narrative #design
:::

:::row
title: Working notes
image: portfolio-opened.png
side: left

Studio days usually start with paper before screens. #design If an idea cannot survive a rough fold or a bad photocopy, it is not ready for code or fabrication. #tech
:::

:::row
title: Elsewhere

Selected work also appears under All Good Things, Portfolio, and Studio Work. #narrative Follow those pages for finished pieces; this one stays a scratch pad.
:::
`,et=`/assets/000A1334-cXfDEhGv.jpg`,tt=`/assets/000A1482-ubE-nvZG.jpg`,nt=`/assets/000A1936-DiOyMkiw.jpg`,rt=`/assets/Copy%20of%20brain2-BzfP8SR3.png`,it=`/assets/DSC08493-gzrExA5N.JPG`,at=`/assets/DSC08593-cngcxTQT.JPG`,ot=`/assets/DSC08871-CwzK-94o.JPG`,st=`/assets/DSC09118-icZEXuwf.JPG`,ct=`/assets/DSC09299-BZ7unHFo.JPG`,lt=`/assets/IMG_0926-E-8hLd7-.png`,ut=`/assets/IMG_1400-KlYd9Eyo.JPG`,dt=`/assets/IMG_2161-DoneqWlB.png`,ft=`/assets/IMG_3134-BZkV2YJC.PNG`,pt=`/assets/IMG_3370-Cj2wbhqt.png`,mt=`/assets/IMG_3432-DrY8aKoc.JPG`,ht=`/assets/IMG_5895-Bao64Pab.png`,gt=`/assets/IMG_6983-C3wtEatp.PNG`,_t=`/assets/IMG_7013-Bf_eT_TM.PNG`,vt=`/assets/P1580272-2oF-w1YT.jpg`,yt=`/assets/P1580405-DlPy0tsx.JPEG`,bt=`/assets/Screenshot%202026-09-11%20232614-g2tXpxEB.png`,xt=`/assets/Screenshot%202026-09-17%20002031-BAW0bj9r.png`,St=`/assets/Screenshot%202026-09-17%20002444-DS7LS-qw.png`,Ct=`/assets/Wacsmash1-90LbhWqr.JPG`,wt=`/assets/aboutme-BFs_A9lw.png`,Tt=`/assets/agt-poster-Dto1EbHG.PNG`,Et=`/assets/arduino1-CUaIGBlK.png`,Dt=`/assets/becomeyou1-CKrrJaJp.jpg`,Ot=`/assets/biosignal1-Cruq6J9C.jpg`,kt=`/assets/chochang1-BolLvSAM.JPG`,At=`/assets/draconian1-D6HaZOYb.jpg`,jt=`/assets/draconian2-Cc6AXok_.jpg`,Mt=`/assets/earthash1-DpKiKR3y.jpg`,Nt=`/assets/elliotfig1-6mMOPFnT.png`,Pt=`/assets/fish1-BAsGZ9ew.jpg`,Ft=`/assets/forgetavoid1-Rk3ZJeE8.jpg`,It=`/assets/forgetavoid1-DpYAiBca.png`,Lt=`/assets/gamejams1-DPiGAFqj.jpg`,Rt=`/assets/gamejams2-3F6pJhZl.jpg`,zt=`/assets/gamejams3-kKGT0nFM.png`,Bt=`/assets/heidi1-D4KqB8Xg.jpg`,Vt=`/assets/kissingstone1-C3NFeX4V.jpg`,Ht=`/assets/kissingstone2-BVLwLcKT.jpg`,Ut=`/assets/labubu1-B6JBH8Th.jpg`,Wt=`/assets/nirvana1-_aXLcdYv.jpg`,Gt=`/assets/portfolio-opened-DbmJ7Zax.png`,Kt=`/assets/portfolio-qY9hcGlh.png`,qt=`/assets/project-CvLSYTbk.png`,Jt=`/assets/remfall1-BMIrEhb1.png`,Yt=`/assets/smallheartbig-yp8o8Tp8.png`,Xt=`/assets/space_cat-BtKP6rQ-.png`,Zt=`/assets/sylph-BqQZ5LVS.jpg`,Qt=`/assets/windwisp1-BhOZ7KOE.png`;function $t(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var M=$t();function en(e){M=e}var N={exec:()=>null};function P(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function F(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(I.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var tn=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),I={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:P(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:P(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:P(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:P(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:P(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:P(e=>RegExp(`^ {0,${e}}>`))},nn=/^(?:[ \t]*(?:\n|$))+/,rn=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,an=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,L=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,on=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,cn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ln=F(cn).replace(/bull/g,sn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),un=F(cn).replace(/bull/g,sn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),dn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,fn=/^[^\n]+/,pn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,mn=F(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,pn).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),hn=F(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,sn).getRegex(),R=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,gn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_n=F(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,gn).replace(`tag`,R).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),vn=e=>F(dn).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),yn=vn(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),bn=vn(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),xn={blockquote:F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,bn).getRegex(),code:rn,def:mn,fences:an,heading:on,hr:L,html:_n,lheading:ln,list:hn,newline:nn,paragraph:yn,table:N,text:fn},Sn=F(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex(),Cn={...xn,lheading:un,table:Sn,paragraph:F(dn).replace(`hr`,L).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Sn).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,R).getRegex()},wn={...xn,html:F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,gn).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:N,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:F(dn).replace(`hr`,L).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ln).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Tn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,En=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Dn=/^( {2,}|\\)\n(?!\s*$)/,On=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,z=/[\p{P}\p{S}]/u,B=/[\s\p{P}\p{S}]/u,V=/[^\s\p{P}\p{S}]/u,kn=F(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,B).getRegex(),An=/[\p{Pi}\p{Ps}"']/u,jn=/(?!~)[\p{P}\p{S}]/u,Mn=/(?!~)[\s\p{P}\p{S}]/u,Nn=/(?:[^\s\p{P}\p{S}]|~)/u,Pn=F(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,tn?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Fn=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,In=F(Fn,`u`).replace(/punct/g,z).getRegex(),Ln=F(Fn,`u`).replace(/punct/g,jn).getRegex(),Rn=F(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,An).replace(/punct/g,z).getRegex(),zn=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Bn=F(zn,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Vn=F(zn,`gu`).replace(/notPunctSpace/g,Nn).replace(/punctSpace/g,Mn).replace(/punct/g,jn).getRegex(),Hn=F(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Un=F(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Wn=F(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),Gn=F(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,z).getRegex(),Kn=F(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,V).replace(/punctSpace/g,B).replace(/punct/g,z).getRegex(),qn=F(/\\(punct)/,`gu`).replace(/punct/g,z).getRegex(),Jn=F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Yn=F(gn).replace(`(?:-->|$)`,`-->`).getRegex(),Xn=F(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Yn).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),H=F(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,/\[(?:\\[\s\S]|[^\[\]\\])*\]/).getRegex(),Zn=F(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,H).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Qn=F(/^!?\[(label)\]\[(ref)\]/).replace(`label`,H).replace(`ref`,pn).getRegex(),$n=F(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,pn).getRegex(),er=F(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Qn).replace(`nolink`,$n).getRegex(),tr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,nr={_backpedal:N,anyPunctuation:qn,autolink:Jn,blockSkip:Pn,br:Dn,code:En,del:N,delLDelim:N,delRDelim:N,emStrongLDelim:In,emStrongRDelimAst:Bn,emStrongRDelimUnd:Un,escape:Tn,link:Zn,nolink:$n,punctuation:kn,reflink:Qn,reflinkSearch:er,tag:Xn,text:On,url:N},rr={...nr,emStrongLDelim:Rn,emStrongRDelimAst:Hn,emStrongRDelimUnd:Wn,link:F(/^!?\[(label)\]\((.*?)\)/).replace(`label`,H).getRegex(),reflink:F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,H).getRegex()},ir={...nr,emStrongRDelimAst:Vn,emStrongLDelim:Ln,delLDelim:Gn,delRDelim:Kn,url:F(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,tr).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:F(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,tr).getRegex()},ar={...ir,br:F(Dn).replace(`{2,}`,`*`).getRegex(),text:F(ir.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},U={normal:xn,gfm:Cn,pedantic:wn},W={normal:nr,gfm:ir,breaks:ar,pedantic:rr},or={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},sr=e=>or[e];function G(e,t){if(t){if(I.escapeTest.test(e))return e.replace(I.escapeReplace,sr)}else if(I.escapeTestNoEncode.test(e))return e.replace(I.escapeReplaceNoEncode,sr);return e}function cr(e){try{e=encodeURI(e).replace(I.percentDecode,`%`)}catch{return null}return e}function lr(e,t){let n=e.replace(I.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(I.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(I.slashPipe,`|`);return n}function K(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function ur(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&I.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function dr(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function fr(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function pr(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function mr(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}var q=class{options;rules;lexer;constructor(e){this.options=e||M}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:ur(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=mr(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=K(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:K(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=fr(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=ur(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:K(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=lr(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:K(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(lr(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:K(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=K(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=dr(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),pr(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return pr(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}else if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},J=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||M,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:I,block:U.normal,inline:W.normal};this.options.pedantic?(t.block=U.pedantic,t.inline=W.pedantic):this.options.gfm&&(t.block=U.gfm,this.options.breaks?t.inline=W.breaks:t.inline=W.gfm),this.tokenizer.rules=t}static get rules(){return{block:U,inline:W}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(I.carriageReturn,`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(!(e.charAt(0)===`!`||!Object.hasOwn(this.tokens.links,e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Y=class{options;parser;constructor(e){this.options=e||M}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(I.notSpaceStart)?.[0],i=e?e.replace(I.endingNewline,``)+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${G(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?G(n,!0):this.parser.parseInline(r),o=cr(e);if(o===null)return a;e=G(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+G(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=cr(e);if(i===null)return G(n);e=i;let a=`<img src="${G(e)}" alt="${G(n)}"`;return t&&(a+=` title="${G(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:G(e.text)}},hr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},X=class e{options;renderer;textRenderer;constructor(e){this.options=e||M,this.options.renderer=this.options.renderer||new Y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new hr}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Z=class{options;block;constructor(e){this.options=e||M}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?J.lex:J.lexInline}provideParser(e=this.block){return e?X.parse:X.parseInline}},Q=new class{defaults=$t();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=X;Renderer=Y;TextRenderer=hr;Lexer=J;Tokenizer=q;Hooks=Z;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Y(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new q(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Z;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Z.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Z.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return X.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?J.lex:J.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?X.parse:X.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?J.lex:J.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?X.parse:X.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+G(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Q.parse(e,t)}$.options=$.setOptions=function(e){return Q.setOptions(e),$.defaults=Q.defaults,en($.defaults),$},$.getDefaults=$t,$.defaults=M;function gr(...e){return Q.use(...e),$.defaults=Q.defaults,en($.defaults),$}$.use=gr,$.walkTokens=function(e,t){return Q.walkTokens(e,t)},$.parseInline=Q.parseInline,$.Parser=X,$.parser=X.parse,$.Renderer=Y,$.TextRenderer=hr,$.Lexer=J,$.lexer=J.lex,$.Tokenizer=q,$.Hooks=Z,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,X.parse,J.lex;var _r={projects:[`wacsmash`,`cho-chang`,`nirvana`,`biosignal-blackout`,`fish`,`all-good-things`,`wind-wisp`,`remfall`,`game-jams`],experiments:[`sylph`,`become-you`,`labubus`,`draconian`]},vr=[`design`,`tech`,`realtime`,`narrative`,`production`],yr=`(^|[^\\w/#])#(${vr.join(`|`)})\\b`;function br(){return new RegExp(yr,`gi`)}function xr(e){return vr.includes(e)}function Sr(e){let t=e.trim().toLowerCase();return vr.find(e=>e===t)}function Cr(e){return`/system/${e}`}function wr(e){return`section-${e}`}function Tr(e,t){return`/project?${new URLSearchParams({title:e}).toString()}#${wr(t)}`}function Er(e){let t={side:`left`};for(let n of e.split(/\r?\n/)){let e=n.indexOf(`:`);if(e===-1)continue;let r=n.slice(0,e).trim().toLowerCase(),i=n.slice(e+1).trim().replace(/^["']|["']$/g,``);!r||!i||(r===`title`&&(t.title=i),r===`image`&&(t.image=i),r===`side`&&(i===`left`||i===`right`)&&(t.side=i),r===`collaboration`&&(t.collaboration=i),(r===`roles`||r===`role`)&&(t.roles=i),r===`tools`&&(t.tools=i),r===`play`&&(t.play=i),(r===`playlabel`||r===`play-label`)&&(t.playlabel=i))}return t}function Dr(e){let t=new Set;for(let n of e.matchAll(br())){let e=n[2]?.toLowerCase();e&&xr(e)&&t.add(e)}return vr.filter(e=>t.has(e))}function Or(e){return e.replace(br(),(e,t,n)=>{let r=n.toLowerCase();return`${t}<a href="${Cr(r)}" class="project-system project-system--${r}">#${r}</a>`})}function kr(e){let t=e.trim();if(!t)return{textHtml:``,systems:[]};let n=Dr(t);return{textHtml:$.parse(Or(t),{async:!1}),systems:n}}function Ar(e,t){let n=e.trim();if(!n)return[];let r=[],i=/^:::row\s*\r?\n([\s\S]*?)^:::\s*$/gm,a=0,o,s=e=>{let{textHtml:t,systems:n}=kr(e);t&&r.push({id:wr(r.length),side:`left`,textHtml:t,systems:n})};for(;(o=i.exec(n))!==null;){s(n.slice(a,o.index));let e=o[1]??``,i=/\r?\n\r?\n/.exec(e),c,l;if(i){let t=e.slice(0,i.index);t.split(/\r?\n/).every(e=>!e.trim()||/^[\w-]+\s*:/.test(e))?(c=Er(t),l=e.slice(i.index+i[0].length)):(c={side:`left`},l=e)}else/^[\w-]+\s*:/.test(e.trim())?(c=Er(e),l=``):(c={side:`left`},l=e);let{textHtml:u,systems:d}=kr(l);r.push({id:wr(r.length),title:c.title,image:c.image?t(c.image):void 0,side:c.side,textHtml:u,systems:d,collaboration:c.collaboration,roles:c.roles,tools:c.tools,playUrl:c.play,playLabel:c.playlabel}),a=o.index+o[0].length}return s(n.slice(a)),r.length===0&&s(n),r}var jr=[`performance`,`creative tech`,`games`],Mr=Object.assign({"../../content/projects/all-good-things.md":Pe,"../../content/projects/become-you.md":Fe,"../../content/projects/beepboop.md":Ie,"../../content/projects/biosignal-blackout.md":Le,"../../content/projects/cho-chang.md":Re,"../../content/projects/color-change.md":ze,"../../content/projects/draconian.md":Be,"../../content/projects/earthash.md":Ve,"../../content/projects/elliotfig.md":He,"../../content/projects/fish.md":Ue,"../../content/projects/forget-avoid.md":We,"../../content/projects/game-jams.md":Ge,"../../content/projects/kissing-stone.md":Ke,"../../content/projects/labubus.md":qe,"../../content/projects/nirvana.md":Je,"../../content/projects/remfall.md":Ye,"../../content/projects/smallheartbig.md":Xe,"../../content/projects/sylph.md":Ze,"../../content/projects/wacsmash.md":Qe,"../../content/projects/wind-wisp.md":$e}),Nr=Object.assign({"../../content/assets/000A1334.jpg":et,"../../content/assets/000A1482.jpg":tt,"../../content/assets/000A1936.jpg":nt,"../../content/assets/Copy of brain2.png":rt,"../../content/assets/DSC08493.JPG":it,"../../content/assets/DSC08593.JPG":at,"../../content/assets/DSC08871.JPG":ot,"../../content/assets/DSC09118.JPG":st,"../../content/assets/DSC09299.JPG":ct,"../../content/assets/IMG_0926.png":lt,"../../content/assets/IMG_1400.JPG":ut,"../../content/assets/IMG_2161.png":dt,"../../content/assets/IMG_3134.PNG":ft,"../../content/assets/IMG_3370.png":pt,"../../content/assets/IMG_3432.JPG":mt,"../../content/assets/IMG_5895.png":ht,"../../content/assets/IMG_6983.PNG":gt,"../../content/assets/IMG_7013.PNG":_t,"../../content/assets/P1580272.jpg":vt,"../../content/assets/P1580405.JPEG":yt,"../../content/assets/Screenshot 2026-09-11 232614.png":bt,"../../content/assets/Screenshot 2026-09-17 002031.png":xt,"../../content/assets/Screenshot 2026-09-17 002444.png":St,"../../content/assets/Wacsmash1.JPG":Ct,"../../content/assets/aboutme.png":wt,"../../content/assets/agt-poster.PNG":Tt,"../../content/assets/arduino1.png":Et,"../../content/assets/becomeyou1.jpg":Dt,"../../content/assets/biosignal1.jpg":Ot,"../../content/assets/chochang1.JPG":kt,"../../content/assets/draconian1.jpg":At,"../../content/assets/draconian2.jpg":jt,"../../content/assets/earthash1.jpg":Mt,"../../content/assets/elliotfig1.png":Nt,"../../content/assets/fish1.jpg":Pt,"../../content/assets/forgetavoid1.jpg":Ft,"../../content/assets/forgetavoid1.png":It,"../../content/assets/gamejams1.jpg":Lt,"../../content/assets/gamejams2.jpg":Rt,"../../content/assets/gamejams3.png":zt,"../../content/assets/heidi1.jpg":Bt,"../../content/assets/kissingstone1.jpg":Vt,"../../content/assets/kissingstone2.jpg":Ht,"../../content/assets/labubu1.jpg":Ut,"../../content/assets/nirvana1.jpg":Wt,"../../content/assets/portfolio-opened.png":Gt,"../../content/assets/portfolio.png":Kt,"../../content/assets/project.png":qt,"../../content/assets/remfall1.png":Jt,"../../content/assets/smallheartbig.png":Yt,"../../content/assets/space_cat.png":Xt,"../../content/assets/sylph.jpg":Zt,"../../content/assets/windwisp1.png":Qt});function Pr(e){let t=`/${e.replace(/^\.\//,``).replace(/^assets\//,``).replace(/^content\/assets\//,``)}`.toLowerCase(),n=Object.entries(Nr).find(([e])=>e.toLowerCase().endsWith(t));if(!n)throw Error(`Project image not found: "${e}". Put the file in content/assets/ and reference just the filename.`);return n[1]}function Fr(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(e.trim());if(!t)return{data:{},body:e.trim()};let n={};for(let e of t[1].split(/\r?\n/)){let t=e.indexOf(`:`);if(t===-1)continue;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim().replace(/^["']|["']$/g,``);r&&(n[r]=i)}return{data:n,body:t[2].trim()}}function Ir(e){return e?e.trim().toLowerCase()!==`false`:!0}function Lr(e){if(!e)return[];let t=e.replace(/^\[|\]$/g,``).split(`,`).map(e=>e.trim().replace(/^["']|["']$/g,``).toLowerCase()).filter(Boolean),n=[];for(let e of t){let t=jr.find(t=>t===e);t&&!n.includes(t)&&n.push(t)}return n}function Rr(e){return(e.split(`/`).pop()??e).replace(/\.md$/,``)}function zr(){return Object.entries(Mr).map(([e,t])=>{let{data:n,body:r}=Fr(t),i=Rr(e),a=n.title??i,o=n.description??``,s=Pr(n.image??`project.png`),c=n.collaboration??``,l=n.roles??n.role??``,u=n.tools??``,d=n.play??``,f=n.playlabel??n.playLabel??`play`,p=Ir(n.hasLink??n.haslink),m=Lr(n.tags);return{slug:i,title:a,description:o,image:s,collaboration:c,roles:l,tools:u,playUrl:d,playLabel:f,hasLink:p,body:r,bodyHtml:r?$.parse(r,{async:!1}):``,sections:Ar(r,Pr),tags:m}})}var Br=zr(),Vr=_r;function Hr(e){let t=new Map(e.map((e,t)=>[e,t]));return Br.filter(e=>t.has(e.slug)).sort((e,n)=>(t.get(e.slug)??0)-(t.get(n.slug)??0))}var Ur=Hr(Vr.projects),Wr=Hr(Vr.experiments),Gr=new Map(Vr.projects.map((e,t)=>[e,t]));function Kr(){return Ur}function qr(){return Wr}function Jr(){return Ur.map(e=>e.slug)}function Yr(e){let t=e.trim().toLowerCase();return Br.find(e=>e.title.toLowerCase()===t)}function Xr(e){return e.replace(/\s+/g,`-`)}function Zr(e){let t=e.trim().toLowerCase().replace(/-/g,` `);return jr.find(e=>e===t)}function Qr(e){return Br.filter(t=>t.tags.includes(e))}function $r(e){let t=[...Ur,...Br.filter(e=>!Gr.has(e.slug))],n=[];for(let r of t)r.sections.forEach((t,i)=>{t.systems.includes(e)&&n.push({projectTitle:r.title,projectSlug:r.slug,section:t,sectionIndex:i})});return n}function ei(e){return e!==`/experiments`}function ti(){return typeof document<`u`&&!!document.querySelector(`.experiments-popup`)}function ni(e){typeof document>`u`||(document.documentElement.dataset.experimentsPopup=e)}function ri(e,t){let n=ti()&&ei(e),r=ei(t);return n&&r?`persist`:n&&!r?`fade-out`:`fade-in`}function ii(e){return e!==`/`}function ai(e){typeof document>`u`||(document.documentElement.dataset.topBar=e)}function oi(e,t){let n=ii(e),r=ii(t);return n&&r?`persist`:n&&!r?`fade-out`:`fade-in`}function si(e,t){ai(oi(e,t)),ni(ri(e,t))}export{Ne as _,Jr as a,$r as c,Tr as d,Sr as f,Se as g,_e as h,Yr as i,Zr as l,he as m,jr as n,Kr as o,me as p,qr as r,Qr as s,si as t,Xr as u};