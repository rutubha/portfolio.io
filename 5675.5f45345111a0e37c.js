"use strict";(self.webpackChunkportfolio_io=self.webpackChunkportfolio_io||[]).push([[5675],{5675:(D,E,f)=>{f.r(E),f.d(E,{ion_nav:()=>V,ion_nav_link:()=>O});var m=f(5861),g=f(6953),T=f(278),d=f(544),v=f(8354),b=f(7876),k=f(9439);class _{constructor(t,n){this.component=t,this.params=n,this.state=1}init(t){var n=this;return(0,m.Z)(function*(){if(n.state=2,!n.element){const i=n.component;n.element=yield(0,k.a)(n.delegate,t,i,["ion-page","ion-page-invisible"],n.params)}})()}_destroy(){(0,d.o)(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const B=(e,t,n)=>!(!e||e.component!==t)&&(0,d.s)(e.params,n),I=(e,t)=>e?e instanceof _?e:new _(e,t):null,V=class{constructor(e){(0,g.r)(this,e),this.ionNavWillLoad=(0,g.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,g.d)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,g.d)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&!1!==this.didLoad&&(this.useRouter||void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,b.b)(this);this.swipeGesture=b.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,m.Z)(function*(){e.didLoad=!0,e.rootChanged(),e.gesture=(yield f.e(8592).then(f.bind(f,4666))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)(0,v.l)(e.element,v.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,i){return this.insert(-1,e,t,n,i)}insert(e,t,n,i,s){return this.insertPages(e,[{component:t,componentProps:n}],i,s)}insertPages(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,i){return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}setRoot(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}setPages(e,t,n){return t??(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,i){const s=this.getActiveSync();if(B(s,e,t))return Promise.resolve({changed:!1,element:s.element});let r;const a=new Promise(l=>r=l);let o;const c={updateURL:!1,viewIsReady:l=>{let h;const p=new Promise(u=>h=u);return r({changed:!0,element:l,markVisible:(u=(0,m.Z)(function*(){h(),yield o}),function(){return u.apply(this,arguments)})}),p;var u}};if("root"===n)o=this.setRoot(e,t,c);else{const l=this.views.find(h=>B(h,e,t));l?o=this.popTo(l,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:i})):"forward"===n?o=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:i})):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:i})))}return a}getRouteId(){var e=this;return(0,m.Z)(function*(){const t=e.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}})()}getActive(){var e=this;return(0,m.Z)(function*(){return e.getActiveSync()})()}getByIndex(e){var t=this;return(0,m.Z)(function*(){return t.views[e]})()}canGoBack(e){var t=this;return(0,m.Z)(function*(){return t.canGoBackSync(e)})()}getPrevious(e){var t=this;return(0,m.Z)(function*(){return t.getPreviousSync(e)})()}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){var n=this;return(0,m.Z)(function*(){var i,s;if(n.isTransitioning&&null!==(i=e.opts)&&void 0!==i&&i.skipIfBusy)return!1;const r=new Promise((a,o)=>{e.resolve=a,e.reject=o});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&n.useRouter){const a=document.querySelector("ion-router");if(a){const o=yield a.canTransition();if(!1===o)return!1;if("string"==typeof o)return a.push(o,e.opts.direction||"back"),!1}}return 0===(null===(s=e.insertViews)||void 0===s?void 0:s.length)&&(e.insertViews=void 0),n.transInstr.push(e),n.nextTrns(),r})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,m.Z)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const n=t.getActiveSync(),i=t.getEnteringView(e,n);if(!n&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&(yield i.init(t.el)),t.postViewInit(i,n,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==n;let r;s&&e.opts&&n&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i?.animationBuilder),n.animationBuilder=e.opts.animationBuilder),r=s?yield t.transition(i,n,e):{hasCompleted:!0,requiresTransition:!1},t.success(r,e),t.ionNavDidChange.emit()}catch(n){t.failed(n,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){var t,n,i;const s=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(n=(i=e.opts).delegate)&&void 0!==n||(i.delegate=this.delegate),void 0!==e.removeView){(0,d.o)(void 0!==e.removeStart,"removeView needs removeStart"),(0,d.o)(void 0!==e.removeCount,"removeView needs removeCount");const o=this.views.indexOf(e.removeView);if(o<0)throw new Error("removeView was not found");e.removeStart+=o}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=s-1),e.removeCount<0&&(e.removeCount=s-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===s),e.insertViews&&((e.insertStart<0||e.insertStart>s)&&(e.insertStart=s),e.enteringRequiresTransition=e.insertStart===s);const r=e.insertViews;if(!r)return;(0,d.o)(r.length>0,"length can not be zero");const a=(e=>e.map(t=>t instanceof _?t:"component"in t?I(t.component,null===t.componentProps?void 0:t.componentProps):I(t,void 0)).filter(t=>null!==t))(r);if(0===a.length)throw new Error("invalid views to insert");for(const o of a){o.delegate=e.opts.delegate;const c=o.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===o.state)throw new Error("inserted view was already destroyed")}e.insertViews=a}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const i=e.removeStart;if(void 0!==i){const s=this.views,r=i+e.removeCount;for(let a=s.length-1;a>=0;a--){const o=s[a];if((a<i||a>=r)&&o!==t)return o}}}postViewInit(e,t,n){var i,s,r;(0,d.o)(t||e,"Both leavingView and enteringView are null"),(0,d.o)(n.resolve,"resolve must be valid"),(0,d.o)(n.reject,"reject must be valid");const a=n.opts,{insertViews:o,removeStart:c,removeCount:l}=n;let h;if(void 0!==c&&void 0!==l){(0,d.o)(c>=0,"removeStart can not be negative"),(0,d.o)(l>=0,"removeCount can not be negative"),h=[];for(let u=c;u<c+l;u++){const w=this.views[u];void 0!==w&&w!==e&&w!==t&&h.push(w)}null!==(i=a.direction)&&void 0!==i||(a.direction="back")}const p=this.views.length+(null!==(s=o?.length)&&void 0!==s?s:0)-(l??0);if((0,d.o)(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){let u=n.insertStart;for(const w of o)this.insertViewAt(w,u),u++;n.enteringRequiresTransition&&(null!==(r=a.direction)&&void 0!==r||(a.direction="forward"))}if(h&&h.length>0){for(const u of h)(0,v.l)(u.element,v.b),(0,v.l)(u.element,v.c),(0,v.l)(u.element,v.d);for(const u of h)this.destroyView(u)}}transition(e,t,n){var i=this;return(0,m.Z)(function*(){const s=n.opts,r=s.progressAnimation?p=>i.sbAni=p:void 0,a=(0,b.b)(i),o=e.element,c=t&&t.element,l=Object.assign(Object.assign({mode:a,showGoBack:i.canGoBackSync(e),baseEl:i.el,progressCallback:r,animated:i.animated&&b.c.getBoolean("animated",!0),enteringEl:o,leavingEl:c},s),{animationBuilder:s.animationBuilder||i.animation||b.c.get("navAnimation")}),{hasCompleted:h}=yield(0,v.t)(l);return i.transitionFinish(h,e,t,s)})()}transitionFinish(e,t,n,i){const s=e?t:n;return s&&this.unmountInactiveViews(s),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}insertViewAt(e,t){const n=this.views,i=n.indexOf(e);i>-1?((0,d.o)(e.nav===this,"view is not part of the nav"),n.splice(i,1),n.splice(t,0,e)):((0,d.o)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,d.o)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,d.o)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let i=t.length-1;i>=0;i--){const s=t[i],r=s.element;r&&(i>n?((0,v.l)(r,v.d),this.destroyView(s)):i<n&&(0,v.s)(r,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let i=e?-.001:.001;e?i+=(0,T.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=(0,T.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,n)}}render(){return(0,g.h)("slot",null)}get el(){return(0,g.f)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};V.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const O=class{constructor(e){(0,g.r)(this,e),this.onClick=()=>((e,t,n,i,s)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0,animationBuilder:s})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0,animationBuilder:s})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:s});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return(0,g.h)(g.H,{onClick:this.onClick})}get el(){return(0,g.f)(this)}}}}]);