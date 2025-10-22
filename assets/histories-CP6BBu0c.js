import{A as e,B as t,D as n,F as r,I as i,O as a,P as o,R as s,S as c,T as l,V as u,W as d,a as f,c as p,d as m,f as h,h as g,i as _,k as v,o as y,r as b,t as x}from"./index-CFNUP7SU.js";import{i as S,n as C,r as w,t as T}from"./colors-C0O_F-ka.js";import{t as E}from"./utils-ahtYqTut.js";var D=d(t()),O=d(u());function k(e,t,n){let r=n.initialDeps??[],i;function a(){var a;let o;n.key&&n.debug?.call(n)&&(o=Date.now());let s=e();if(!(s.length!==r.length||s.some((e,t)=>r[t]!==e)))return i;r=s;let c;if(n.key&&n.debug?.call(n)&&(c=Date.now()),i=t(...s),n.key&&n.debug?.call(n)){let e=Math.round((Date.now()-o)*100)/100,t=Math.round((Date.now()-c)*100)/100,r=t/16,i=(e,t)=>{for(e=String(e);e.length<t;)e=` `+e;return e};console.info(`%c⏱ ${i(t,5)} /${i(e,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`,n?.key)}return(a=n?.onChange)==null||a.call(n,i),i}return a.updateDeps=e=>{r=e},a}function A(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var j=(e,t)=>Math.abs(e-t)<1.01,M=(e,t,n)=>{let r;return function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)}},N=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},P=e=>e,F=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let e=t;e<=n;e++)r.push(e);return r},I=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(N(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(N(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},L={passive:!0},R=typeof window>`u`?!0:`onscrollend`in window,ee=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=0,a=e.options.useScrollendEvent&&R?()=>void 0:M(r,()=>{t(i,!1)},e.options.isScrollingResetDelay),o=r=>()=>{let{horizontal:o,isRtl:s}=e.options;i=o?n.scrollLeft*(s&&-1||1):n.scrollTop,a(),t(i,r)},s=o(!0),c=o(!1);c(),n.addEventListener(`scroll`,s,L);let l=e.options.useScrollendEvent&&R;return l&&n.addEventListener(`scrollend`,c,L),()=>{n.removeEventListener(`scroll`,s),l&&n.removeEventListener(`scrollend`,c)}},te=(e,t,n)=>{if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},ne=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;let o=e+t;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:o,behavior:n})},re=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{this._measureElement(e.target,e)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,n])=>{n===void 0&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:P,rangeExtractor:F,onChange:()=>{},measureElement:te,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=k(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}this.scrollElement=e,this.scrollElement&&`ownerDocument`in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,r=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let a=r.get(t.lane);if(a==null||t.end>a.end?r.set(t.lane,t):t.end<a.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=k(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,t,n,r,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i}),{key:!1}),this.getMeasurements=k(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i},a)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let o=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];let s=this.measurementsCache.slice(0,o);for(let i=o;i<e;i++){let e=r(i),o=this.options.lanes===1?s[i-1]:this.getFurthestMeasurement(s,i),c=o?o.end+this.options.gap:t+n,l=a.get(e),u=typeof l==`number`?l:this.options.estimateSize(i),d=c+u,f=o?o.lane:i%this.options.lanes;s[i]={index:i,start:c,size:u,end:d,key:e,lane:f}}return this.measurementsCache=s,s},{key:!1,debug:()=>this.options.debug}),this.calculateRange=k(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>this.range=e.length>0&&t>0?ie({measurements:e,outerSize:t,scrollOffset:n,lanes:r}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=k(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{let n=this.indexFromElement(e),r=this.measurementsCache[n];if(!r)return;let i=r.key,a=this.elementsCache.get(i);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(i,e)),e.isConnected&&this.resizeItem(n,this.options.measureElement(e,t,this))},this.resizeItem=(e,t)=>{let n=this.measurementsCache[e];if(!n)return;let r=this.itemSizeCache.get(n.key)??n.size,i=t-r;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?n.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(n,i,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,t)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}this._measureElement(e,void 0)},this.getVirtualItems=k(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=e[r],a=t[i];n.push(a)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length!==0)return A(t[z(0,t.length-1,e=>A(t[e]).start,e)])},this.getOffsetForAlignment=(e,t,n=0)=>{let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getTotalSize()+this.options.scrollMargin-r;return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.measurementsCache[e];if(!n)return;let r=this.getSize(),i=this.getScrollOffset();if(t===`auto`)if(n.end>=i+r-this.options.scrollPaddingEnd)t=`end`;else if(n.start<=i+this.options.scrollPaddingStart)t=`start`;else return[i,t];let a=t===`end`?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,n.size),t]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(e,{align:t=`start`,behavior:n}={})=>{n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:n})},this.scrollToIndex=(e,{align:t=`auto`,behavior:n}={})=>{n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e=Math.max(0,Math.min(e,this.options.count-1));let r=0,i=t=>{if(!this.targetWindow)return;let r=this.getOffsetForIndex(e,t);if(!r){console.warn(`Failed to get offset for index:`,e);return}let[i,o]=r;this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.targetWindow.requestAnimationFrame(()=>{let t=this.getScrollOffset(),n=this.getOffsetForIndex(e,o);if(!n){console.warn(`Failed to get offset for index:`,e);return}j(n[0],t)||a(o)})},a=t=>{this.targetWindow&&(r++,r<10?this.targetWindow.requestAnimationFrame(()=>i(t)):console.warn(`Failed to scroll to index ${e} after 10 attempts.`))};i(t)},this.scrollBy=(e,{behavior:t}={})=>{t===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1)t=e[e.length-1]?.end??0;else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e)}},z=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function ie({measurements:e,outerSize:t,scrollOffset:n,lanes:r}){let i=e.length-1,a=t=>e[t].start;if(e.length<=r)return{startIndex:0,endIndex:i};let o=z(0,i,a,n),s=o;if(r===1)for(;s<i&&e[s].end<n+t;)s++;else if(r>1){let a=Array(r).fill(0);for(;s<i&&a.some(e=>e<n+t);){let t=e[s];a[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(i,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var ae=typeof document<`u`?O.useLayoutEffect:O.useEffect;function oe(e){let t=O.useReducer(()=>({}),{})[1],n={...e,onChange:(n,r)=>{var i;r?(0,D.flushSync)(t):t(),(i=e.onChange)==null||i.call(e,n,r)}},[r]=O.useState(()=>new re(n));return r.setOptions(n),ae(()=>r._didMount(),[]),ae(()=>r._willUpdate()),r}function se(e){return oe({observeElementRect:I,observeElementOffset:ee,scrollToFn:ne,...e})}var B=d(s()),ce=v.div`
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(38, 161, 223, 0.1);
  margin-top: ${({theme:e})=>e.spacing[6]};
  height: ${({$height:e})=>e||`calc(100dvh - 380px)`};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeIn 0.6s ease-out 0.1s backwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &:hover {
    box-shadow:
      0 12px 40px rgba(38, 161, 223, 0.12),
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`,le=v.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,ue=v.div`
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid rgba(38, 161, 223, 0.1);
  position: sticky;
  top: 0;
  z-index: 2;
`;const de=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.gray[700]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  text-align: left;

  &:last-child {
    text-align: center;
  }
`;var fe=v.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`;const V=v.div`
  display: flex;
  border-bottom: 1px solid rgba(38, 161, 223, 0.05);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: rgba(38, 161, 223, 0.03);

    &::before {
      width: 4px;
    }
  }
`,H=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
  }
`;var pe=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[400]};
  font-size: 0.875rem;
  gap: ${({theme:e})=>e.spacing[4]};

  &::before {
    content: "📊";
    font-size: 4rem;
    opacity: 0.5;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`,me=v.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.gray[500]};
`,he=v.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
  padding: ${({theme:e})=>e.spacing[16]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @keyframes shimmer {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  animation: shimmer 1.5s ease-in-out infinite;
`;function U({data:e,columns:t,renderRow:n,rowHeight:r=56,overscan:i=5,height:a,isLoading:o=!1,loadingText:s=`Loading...`,emptyText:c=`No data`,getRowKey:l}){let u=(0,O.useRef)(null),d=se({count:e.length,getScrollElement:()=>u.current,estimateSize:()=>r,overscan:i});return(0,B.jsx)(ce,{$height:a,children:(0,B.jsxs)(le,{children:[(0,B.jsx)(ue,{children:t.map(e=>(0,B.jsx)(de,{width:e.width,children:e.label},e.key))}),o?(0,B.jsx)(fe,{children:(0,B.jsx)(he,{children:s})}):e.length>0?(0,B.jsx)(fe,{ref:u,children:(0,B.jsx)(`div`,{style:{height:`${d.getTotalSize()}px`,position:`relative`},children:d.getVirtualItems().map(t=>{let r=e[t.index];return(0,B.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,transform:`translateY(${t.start}px)`,height:`${t.size}px`},children:n(r,t)},l(r))})})}):(0,B.jsx)(pe,{children:(0,B.jsx)(me,{children:c})})]})})}var ge=v(H)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${V}:hover &::before {
    opacity: 1;
  }

  ${V}:hover & {
    color: #26a1df;
  }
`,_e=v(H)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace;
  font-size: 0.8125rem;
  white-space: nowrap;
`,ve=v(a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.base};
  border: 1px solid rgba(38, 161, 223, 0.3);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: ${({theme:e})=>e.blur.sm};

  &:hover {
    background: ${({theme:e})=>e.colors.primary[500]};
    border-color: ${({theme:e})=>e.colors.primary[500]};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
  }
`,ye=v(a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.base};
  border: 1px solid rgba(239, 68, 68, 0.3);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: ${({theme:e})=>e.blur.sm};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.error[500]};
    border-color: ${({theme:e})=>e.colors.error[500]};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,be=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,xe=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,Se=v.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,Ce=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,we=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid rgba(38, 161, 223, 0.2);
  box-shadow: ${({theme:e})=>e.shadows.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({theme:e})=>e.gradients.primary};
  }

  animation: fadeIn 0.5s ease-out;
`,Te=v.div`
  width: 80px;
  height: 80px;
  background: ${({theme:e})=>e.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[5]};
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.3);
  animation: pulse 2s ease-in-out infinite;

  svg {
    color: white;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`,Ee=v.h3`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,De=v.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 400px;
`;const W=({histories:e,isLoading:t=!1,onDelete:n})=>{let{t:r}=h(),i=o(),[s,c]=(0,O.useState)(!1),[u,d]=(0,O.useState)(null),f=(0,O.useMemo)(()=>({seasonName:void 0,date:`220px`,actions:`160px`}),[]),m=(0,O.useMemo)(()=>[{key:`seasonName`,label:r(`pages.historyDetail.columns.season`),width:f.seasonName},{key:`date`,label:r(`pages.historyDetail.columns.date`),width:f.date},{key:`actions`,label:r(`match.actions`),width:f.actions}],[r,f]),g=e=>{i({to:`/histories/${e}`})},_=(e,t)=>{d({uuid:e,seasonName:t}),c(!0)},v=()=>{c(!1),d(null)};return!t&&e.length===0?(0,B.jsxs)(we,{children:[(0,B.jsx)(Te,{children:(0,B.jsx)(l,{name:`history`,size:24})}),(0,B.jsx)(Ee,{children:r(`pages.histories.emptyState`)}),(0,B.jsx)(De,{children:r(`pages.histories.createFirstSeason`)})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(U,{data:e,columns:m,rowHeight:64,overscan:5,height:`calc(100dvh - 400px)`,isLoading:t,loadingText:r(`common.loading`),emptyText:r(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,B.jsxs)(V,{children:[(0,B.jsx)(ge,{width:f.seasonName,children:t.seasonName}),(0,B.jsx)(_e,{width:f.date,children:S(t.createdAt)}),(0,B.jsx)(H,{width:f.actions,children:(0,B.jsxs)(be,{children:[(0,B.jsx)(ve,{variant:`outline`,icon:(0,B.jsx)(l,{name:`detail`,size:16}),onClick:()=>g(n?`current`:t.uuid),title:r(`pages.histories.detail`)}),(0,B.jsx)(ye,{variant:`outline`,icon:(0,B.jsx)(l,{name:`delete`,size:16}),onClick:()=>_(t.uuid,t.seasonName),title:r(`pages.histories.delete`),disabled:n})]})})]})}}),(0,B.jsx)(p,{isOpen:s,onClose:v,title:r(`pages.histories.confirmDelete`),children:(0,B.jsxs)(xe,{children:[(0,B.jsx)(Se,{children:r(`pages.histories.deleteDescription`,{seasonName:u?.seasonName})}),(0,B.jsxs)(Ce,{children:[(0,B.jsx)(a,{variant:`outline`,onClick:v,children:r(`common.cancel`)}),(0,B.jsx)(a,{variant:`primary`,onClick:()=>{u&&(n(u.uuid),c(!1),d(null))},children:r(`character.confirmDelete`)})]})]})})]})};var Oe=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: fadeIn 0.5s ease-out;
`,G=v.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid rgba(38, 161, 223, 0.2);
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  padding: ${({theme:e})=>e.spacing[5]};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: all ${({theme:e})=>e.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({theme:e})=>e.gradients.primary};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.xl}, ${({theme:e})=>e.shadows.glow};
  }
`,K=v.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({theme:e})=>e.colors.gray[500]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,q=v.div`
  font-size: 1.875rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`,J=v.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,ke=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: rgba(239, 68, 68, 0.1);
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  color: ${({theme:e})=>e.colors.error[600]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  box-shadow: ${({theme:e})=>e.shadows.md};
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    margin-top: ${({theme:e})=>e.spacing[2]};
    background: none;
    border: none;
    color: ${({theme:e})=>e.colors.error[700]};
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color ${({theme:e})=>e.transitions.base};

    &:hover {
      color: ${({theme:e})=>e.colors.error[900]};
    }
  }
`,Ae=v.div`
  animation: fadeIn 0.5s ease-out 0.1s both;
`;const je=()=>{let{t:e,i18n:t}=h();m(e(`pages.histories.title`));let{histories:n,isLoading:r,error:i,getSortedHistories:a,deleteHistory:o,clearError:s}=C(),{matchRecords:c}=w(),l=a(),u=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`;return(0,B.jsxs)(b,{children:[(0,B.jsx)(y,{children:(0,B.jsx)(f,{children:e(`pages.histories.title`)})}),(0,B.jsx)(_,{children:e(`pages.histories.description`)}),i&&(0,B.jsxs)(ke,{children:[(0,B.jsxs)(`div`,{children:[e(`common.error`),`: `,i]}),(0,B.jsx)(`button`,{onClick:s,children:e(`common.close`)})]}),n.length>0&&(0,B.jsxs)(Oe,{children:[(0,B.jsxs)(G,{children:[(0,B.jsx)(K,{children:e(`pages.histories.stats`)}),(0,B.jsx)(q,{children:n.length}),(0,B.jsx)(J,{children:e(`pages.histories.totalSeasons`,{count:n.length})})]}),(0,B.jsxs)(G,{children:[(0,B.jsx)(K,{children:e(`pages.histories.latestCreated`)}),(0,B.jsx)(q,{children:new Date(l[0]?.createdAt).toLocaleDateString(u,{month:`numeric`,day:`numeric`})}),(0,B.jsx)(J,{children:new Date(l[0]?.createdAt).toLocaleDateString(u,{year:`numeric`,month:`long`,day:`numeric`})})]})]}),(0,B.jsx)(Ae,{children:(0,B.jsx)(W,{histories:l,isLoading:r,onDelete:e=>{let t=c.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=w.getState();t.forEach(e=>{n(e.uuid)}),o(e),x(`histories`,`delete`)}})})]})};var Y=e`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Me=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${Y} 0.6s ease-out;
`,X=v.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  border: 1px solid rgba(38, 161, 223, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 24px rgba(38, 161, 223, 0.15),
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`,Z=v.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[600]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Q=v.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  ${({theme:e,$type:t,$winRate:n})=>t===`win`?`color: ${e.colors.win[400]};`:t===`defeat`?`color: ${e.colors.defeat[400]};`:t===`winRate`&&n!==void 0?`color: ${T(n,e,400)};`:`
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,$=v.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[500]};
`,Ne=v(H)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${V}:hover & {
    color: #26a1df;
  }
`,Pe=v(H)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "Courier New", monospace;
  font-size: 0.8125rem;
  white-space: nowrap;
`,Fe=v(H)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ie=v.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.gray[600]};
  font-family: "Courier New", monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Le=v.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 60px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({$isWin:e})=>e?`linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.15) 100%)`:`linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)`};
  color: ${({theme:e,$isWin:t})=>t?e.colors.win[700]:e.colors.defeat[700]};
  border: 1px solid ${({$isWin:e})=>e?`rgba(34, 197, 94, 0.2)`:`rgba(239, 68, 68, 0.2)`};

  ${V}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`,Re=v(a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(239, 68, 68, 0.3);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.error[500]};
    border-color: ${({theme:e})=>e.colors.error[500]};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`,ze=v.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  display: flex;
  justify-content: space-between;
  animation: ${Y} 0.6s ease-out 0.2s backwards;
`,Be=v(a)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(38, 161, 223, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(38, 161, 223, 0.1);
    border-color: rgba(38, 161, 223, 0.3);
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.15);
  }
`;const Ve=()=>{let{t:e,i18n:t}=h(),{id:n}=r({from:`/histories/$id`}),i=o(),{getHistoryByUuid:a,getMatchRecordsForSeason:s,histories:u}=C(),{deleteMatchRecord:d}=w(),v=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,[x,T]=(0,O.useState)(!1),[D,k]=(0,O.useState)(null),A=n===`current`,j=(0,O.useMemo)(()=>u[0],[u]),M=(0,O.useMemo)(()=>A?j:a(n),[A,j,n,a]);m(M?e(`pages.historyDetail.title`,{seasonName:M.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let N=(0,O.useMemo)(()=>{if(A){let{matchRecords:e}=w.getState();return e}return s(n)},[A,n,s]),P=(0,O.useMemo)(()=>{if(!M)return[];let e=[];return N.forEach(t=>{let n=`不明`;if(A){let{characters:e}=w.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=M.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),A||M.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[M,N,A]),F=(0,O.useMemo)(()=>{let e=P.length,t=P.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[P]),I=(0,O.useMemo)(()=>{let e=E();return{character:void 0,job:`120px`,date:`180px`,result:A?`108px`:`${108+e}px`,actions:A?`${84+e}px`:`84px`}},[A]),L=(0,O.useMemo)(()=>{let t=[{key:`character`,label:e(`pages.historyDetail.columns.character`),width:I.character},{key:`job`,label:e(`pages.historyDetail.columns.job`),width:I.job},{key:`date`,label:e(`pages.historyDetail.columns.date`),width:I.date},{key:`result`,label:e(`pages.historyDetail.columns.result`),width:I.result}];return A&&t.push({key:`actions`,label:e(`match.actions`),width:I.actions}),t},[e,A,I]),R=(e,t,n)=>{k({uuid:e,characterName:t,date:n}),T(!0)};return M?(0,B.jsxs)(b,{children:[(0,B.jsx)(y,{children:(0,B.jsx)(f,{children:M.seasonName})}),(0,B.jsxs)(_,{children:[e(`pages.historyDetail.createdDate`),`: `,new Date(M.createdAt).toLocaleDateString(v,{year:`numeric`,month:`long`,day:`numeric`})]}),(0,B.jsxs)(Me,{children:[(0,B.jsxs)(X,{children:[(0,B.jsx)(Z,{children:e(`pages.historyDetail.matchesCount`)}),(0,B.jsx)(Q,{children:F.totalMatches}),(0,B.jsx)($,{children:e(`pages.historyDetail.totalMatches`,{count:F.totalMatches})})]}),(0,B.jsxs)(X,{children:[(0,B.jsx)(Z,{children:e(`pages.historyDetail.results.win`)}),(0,B.jsx)(Q,{$type:`win`,children:F.wins}),(0,B.jsx)($,{children:F.totalMatches>0?`${(F.wins/F.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,B.jsxs)(X,{children:[(0,B.jsx)(Z,{children:e(`pages.historyDetail.results.defeat`)}),(0,B.jsx)(Q,{$type:`defeat`,children:F.defeats}),(0,B.jsx)($,{children:F.totalMatches>0?`${(F.defeats/F.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,B.jsxs)(X,{children:[(0,B.jsx)(Z,{children:e(`pages.historyDetail.winRate`)}),(0,B.jsxs)(Q,{$type:`winRate`,$winRate:F.winRate,children:[F.winRate.toFixed(1),`%`]}),(0,B.jsx)($,{children:e(`pages.historyDetail.overall`)})]})]}),(0,B.jsx)(U,{data:P,columns:L,rowHeight:56,overscan:5,height:`calc(100dvh - 380px)`,emptyText:e(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>(0,B.jsxs)(V,{children:[(0,B.jsx)(Ne,{width:I.character,children:t.characterName}),(0,B.jsxs)(Fe,{width:I.job,children:[(0,B.jsx)(g,{job:t.job,size:24}),(0,B.jsx)(Ie,{children:c[t.job].shortName})]}),(0,B.jsx)(Pe,{width:I.date,children:S(t.recordedAt)}),(0,B.jsx)(H,{width:I.result,children:(0,B.jsx)(Le,{$isWin:t.isWin,children:t.isWin?e(`pages.historyDetail.results.win`):e(`pages.historyDetail.results.defeat`)})}),A&&(0,B.jsx)(H,{width:I.actions,children:(0,B.jsx)(Re,{variant:`outline`,icon:(0,B.jsx)(l,{name:`delete`,size:16}),onClick:()=>R(t.uuid,t.characterName,S(t.recordedAt)),title:e(`match.deleteMatch`)})})]})}),(0,B.jsx)(ze,{children:(0,B.jsxs)(Be,{variant:`outline`,size:`sm`,onClick:()=>i({to:`/histories`}),children:[(0,B.jsx)(l,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})}),A&&(0,B.jsx)(p,{isOpen:x,title:e(`match.confirmDelete`),confirmText:e(`match.confirmDeleteButton`),confirmType:`danger`,onClose:()=>{T(!1),k(null)},onConfirm:()=>{D&&A&&(d(D.uuid),T(!1),k(null))},children:e(`match.deleteConfirmation`,{characterName:D?.characterName,date:D?.date})})]}):(0,B.jsx)(b,{children:(0,B.jsx)(f,{children:e(`pages.historyDetail.notFound`)})})};var He=v.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
`,Ue=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,We=v.form`
  background-color: white;
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,Ge=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ke=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,qe=v.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.error[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.error[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`,Je=v.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.success[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.success[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`;const Ye=()=>{let{t:e}=h();m(e(`pages.newSeason.title`));let t=i(),{createHistory:r,error:o,clearError:s,getSortedHistories:c}=C(),[l,u]=(0,O.useState)(``),[d,g]=(0,O.useState)(!1),[v,y]=(0,O.useState)(``),[b,x]=(0,O.useState)(``),[S,w]=(0,O.useState)(!1),T=async t=>{t.preventDefault();let n=l.trim();if(!n){y(e(`pages.newSeason.validationRequired`));return}if(n.length>50){y(e(`pages.newSeason.validationMaxLength`));return}if(y(``),c().length>0){w(!0);return}await E()},E=async()=>{g(!0),s();try{let n=l.trim(),i=r({seasonName:n});x(e(`pages.newSeason.successMessage`,{seasonName:i.seasonName})),setTimeout(()=>{t.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{g(!1),w(!1)}},D=()=>{E()},k=()=>{w(!1)},A=()=>{history.back()},j=e=>{u(e.target.value),v&&y(``)},M=c()[0]?.seasonName||``;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p,{isOpen:S,onClose:k,title:e(`pages.newSeason.confirmTitle`),confirmText:e(`pages.newSeason.create`),cancelText:e(`pages.newSeason.cancel`),onConfirm:D,confirmType:`danger`,isLoading:d,children:e(`pages.newSeason.confirmDescription`,{seasonName:M})}),(0,B.jsxs)(He,{children:[(0,B.jsxs)(Ue,{children:[(0,B.jsx)(f,{children:e(`pages.newSeason.title`)}),(0,B.jsx)(_,{children:e(`pages.newSeason.description`)})]}),(0,B.jsxs)(We,{onSubmit:T,children:[(o||v)&&(0,B.jsx)(qe,{children:v||o}),b&&(0,B.jsx)(Je,{children:b}),(0,B.jsx)(Ge,{children:(0,B.jsx)(n,{label:e(`pages.newSeason.seasonName`),type:`text`,value:l,onChange:j,placeholder:e(`pages.newSeason.seasonNamePlaceholder`),disabled:d||!!b,fullWidth:!0,required:!0})}),(0,B.jsxs)(Ke,{children:[(0,B.jsx)(a,{type:`button`,variant:`outline`,onClick:A,disabled:d||!!b,children:e(`pages.newSeason.cancel`)}),(0,B.jsx)(a,{type:`submit`,disabled:d||!!b||!l.trim(),children:e(d?`pages.newSeason.creating`:`pages.newSeason.create`)})]})]})]})]})};export{je as HistoriesPage,Ve as HistoryDetailPage,W as HistoryTable,Ye as NewSeasonPage};