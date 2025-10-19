import{C as e,D as t,E as n,F as r,I as i,M as a,N as o,O as s,T as c,b as l,i as u,k as d,l as f,n as p,o as m,p as h,r as g,t as _,u as v,z as y}from"./index-DhA9AGh8.js";import{a as b,n as x,t as S}from"./stores-hPUjOHfi.js";var C=y(i()),w=y(a()),T=o.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
`,E=o.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`,D=o.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,O=o.th`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[700]};
  white-space: nowrap;

  &:last-child {
    text-align: center;
    width: 120px;
  }
`,k=o.tbody``,A=o.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }

  &:last-child {
    border-bottom: none;
  }
`,j=o.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};

  &:last-child {
    text-align: center;
  }
`,M=o(j)`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,N=o(j)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`,P=o(n)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
  }
`,F=o(n)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`,I=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
`,L=o.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,R=o.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,z=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,ee=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,te=o.div`
  width: 64px;
  height: 64px;
  background-color: ${({theme:e})=>e.colors.gray[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,ne=o.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,re=o.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ie=o(A)`
  &:hover {
    background-color: transparent;
  }
`,ae=o(j)`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
`;const oe=({histories:r,isLoading:i=!1,onDelete:a})=>{let{t:o}=v(),s=t(),[c,l]=(0,C.useState)(!1),[u,d]=(0,C.useState)(null),f=e=>{s({to:`/histories/${e}`})},p=(e,t)=>{d({uuid:e,seasonName:t}),l(!0)},h=()=>{l(!1),d(null)};return i?(0,w.jsx)(T,{children:(0,w.jsxs)(E,{children:[(0,w.jsx)(D,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(O,{children:o(`pages.historyDetail.columns.season`)}),(0,w.jsx)(O,{children:o(`pages.historyDetail.columns.date`)}),(0,w.jsx)(O,{children:o(`pages.histories.detail`)})]})}),(0,w.jsx)(k,{children:(0,w.jsx)(ie,{children:(0,w.jsx)(ae,{colSpan:3,children:o(`common.loading`)})})})]})}):r.length===0?(0,w.jsxs)(ee,{children:[(0,w.jsx)(te,{children:(0,w.jsx)(e,{name:`history`,size:24})}),(0,w.jsx)(ne,{children:o(`pages.histories.emptyState`)}),(0,w.jsx)(re,{children:o(`pages.histories.createFirstSeason`)})]}):(0,w.jsxs)(T,{children:[(0,w.jsxs)(E,{children:[(0,w.jsx)(D,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(O,{children:o(`pages.historyDetail.columns.season`)}),(0,w.jsx)(O,{children:o(`pages.historyDetail.columns.date`)}),(0,w.jsx)(O,{children:o(`match.actions`)})]})}),(0,w.jsx)(k,{children:r.map(t=>{let n=t.uuid===r[0]?.uuid;return(0,w.jsxs)(A,{children:[(0,w.jsx)(M,{children:t.seasonName}),(0,w.jsx)(N,{children:b(t.createdAt)}),(0,w.jsx)(j,{children:(0,w.jsxs)(I,{children:[(0,w.jsx)(P,{variant:`outline`,icon:(0,w.jsx)(e,{name:`detail`,size:16}),onClick:()=>f(n?`current`:t.uuid),title:o(`pages.histories.detail`)}),(0,w.jsx)(F,{variant:`outline`,icon:(0,w.jsx)(e,{name:`delete`,size:16}),onClick:()=>p(t.uuid,t.seasonName),title:o(`pages.histories.delete`),disabled:n})]})})]},t.uuid)})})]}),(0,w.jsx)(m,{isOpen:c,onClose:h,title:o(`pages.histories.confirmDelete`),children:(0,w.jsxs)(L,{children:[(0,w.jsx)(R,{children:o(`pages.histories.deleteDescription`,{seasonName:u?.seasonName})}),(0,w.jsxs)(z,{children:[(0,w.jsx)(n,{variant:`outline`,onClick:h,children:o(`common.cancel`)}),(0,w.jsx)(n,{variant:`primary`,onClick:()=>{u&&(a(u.uuid),l(!1),d(null))},children:o(`character.confirmDelete`)})]})]})})]})};var se=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,ce=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,B=o.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,V=o.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,H=o.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.error[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.error[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[500]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
`;const U=()=>{let{t:e}=v();f(e(`pages.histories.title`));let{histories:t,isLoading:n,error:r,getSortedHistories:i,deleteHistory:a,clearError:o}=S(),{matchRecords:s}=x(),c=i();return(0,w.jsxs)(_,{children:[(0,w.jsx)(u,{children:(0,w.jsx)(g,{children:e(`pages.histories.title`)})}),(0,w.jsx)(p,{children:e(`pages.histories.description`)}),r&&(0,w.jsxs)(H,{children:[(0,w.jsxs)(`div`,{children:[e(`common.error`),`: `,r]}),(0,w.jsx)(`button`,{onClick:o,style:{marginTop:`8px`,textDecoration:`underline`},children:e(`common.close`)})]}),(0,w.jsx)(se,{children:(0,w.jsxs)(ce,{children:[(0,w.jsx)(B,{children:e(`pages.histories.totalSeasons`,{count:t.length})}),t.length>0&&(0,w.jsxs)(B,{children:[e(`pages.histories.latestCreated`),`: `,(0,w.jsx)(V,{children:new Date(c[0]?.createdAt).toLocaleDateString(`ja-JP`)})]})]})}),(0,w.jsx)(oe,{histories:c,isLoading:n,onDelete:e=>{let t=s.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=x.getState();t.forEach(e=>{n(e.uuid)}),a(e)}})]})};function W(e,t,n){let r=n.initialDeps??[],i;function a(){var a;let o;n.key&&n.debug?.call(n)&&(o=Date.now());let s=e();if(!(s.length!==r.length||s.some((e,t)=>r[t]!==e)))return i;r=s;let c;if(n.key&&n.debug?.call(n)&&(c=Date.now()),i=t(...s),n.key&&n.debug?.call(n)){let e=Math.round((Date.now()-o)*100)/100,t=Math.round((Date.now()-c)*100)/100,r=t/16,i=(e,t)=>{for(e=String(e);e.length<t;)e=` `+e;return e};console.info(`%c⏱ ${i(t,5)} /${i(e,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`,n?.key)}return(a=n?.onChange)==null||a.call(n,i),i}return a.updateDeps=e=>{r=e},a}function G(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var le=(e,t)=>Math.abs(e-t)<1.01,ue=(e,t,n)=>{let r;return function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)}},K=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},de=e=>e,fe=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let e=t;e<=n;e++)r.push(e);return r},pe=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(K(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(K(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},q={passive:!0},J=typeof window>`u`?!0:`onscrollend`in window,me=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=0,a=e.options.useScrollendEvent&&J?()=>void 0:ue(r,()=>{t(i,!1)},e.options.isScrollingResetDelay),o=r=>()=>{let{horizontal:o,isRtl:s}=e.options;i=o?n.scrollLeft*(s&&-1||1):n.scrollTop,a(),t(i,r)},s=o(!0),c=o(!1);c(),n.addEventListener(`scroll`,s,q);let l=e.options.useScrollendEvent&&J;return l&&n.addEventListener(`scrollend`,c,q),()=>{n.removeEventListener(`scroll`,s),l&&n.removeEventListener(`scrollend`,c)}},he=(e,t,n)=>{if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},ge=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;let o=e+t;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:o,behavior:n})},_e=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{this._measureElement(e.target,e)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,n])=>{n===void 0&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:de,rangeExtractor:fe,onChange:()=>{},measureElement:he,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=W(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}this.scrollElement=e,this.scrollElement&&`ownerDocument`in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,r=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let a=r.get(t.lane);if(a==null||t.end>a.end?r.set(t.lane,t):t.end<a.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=W(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,t,n,r,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i}),{key:!1}),this.getMeasurements=W(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i},a)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let o=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];let s=this.measurementsCache.slice(0,o);for(let i=o;i<e;i++){let e=r(i),o=this.options.lanes===1?s[i-1]:this.getFurthestMeasurement(s,i),c=o?o.end+this.options.gap:t+n,l=a.get(e),u=typeof l==`number`?l:this.options.estimateSize(i),d=c+u,f=o?o.lane:i%this.options.lanes;s[i]={index:i,start:c,size:u,end:d,key:e,lane:f}}return this.measurementsCache=s,s},{key:!1,debug:()=>this.options.debug}),this.calculateRange=W(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>this.range=e.length>0&&t>0?ve({measurements:e,outerSize:t,scrollOffset:n,lanes:r}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=W(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{let n=this.indexFromElement(e),r=this.measurementsCache[n];if(!r)return;let i=r.key,a=this.elementsCache.get(i);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(i,e)),e.isConnected&&this.resizeItem(n,this.options.measureElement(e,t,this))},this.resizeItem=(e,t)=>{let n=this.measurementsCache[e];if(!n)return;let r=this.itemSizeCache.get(n.key)??n.size,i=t-r;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?n.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(n,i,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,t)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}this._measureElement(e,void 0)},this.getVirtualItems=W(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=e[r],a=t[i];n.push(a)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length!==0)return G(t[Y(0,t.length-1,e=>G(t[e]).start,e)])},this.getOffsetForAlignment=(e,t,n=0)=>{let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getTotalSize()+this.options.scrollMargin-r;return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.measurementsCache[e];if(!n)return;let r=this.getSize(),i=this.getScrollOffset();if(t===`auto`)if(n.end>=i+r-this.options.scrollPaddingEnd)t=`end`;else if(n.start<=i+this.options.scrollPaddingStart)t=`start`;else return[i,t];let a=t===`end`?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,n.size),t]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(e,{align:t=`start`,behavior:n}={})=>{n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:n})},this.scrollToIndex=(e,{align:t=`auto`,behavior:n}={})=>{n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e=Math.max(0,Math.min(e,this.options.count-1));let r=0,i=t=>{if(!this.targetWindow)return;let r=this.getOffsetForIndex(e,t);if(!r){console.warn(`Failed to get offset for index:`,e);return}let[i,o]=r;this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.targetWindow.requestAnimationFrame(()=>{let t=this.getScrollOffset(),n=this.getOffsetForIndex(e,o);if(!n){console.warn(`Failed to get offset for index:`,e);return}le(n[0],t)||a(o)})},a=t=>{this.targetWindow&&(r++,r<10?this.targetWindow.requestAnimationFrame(()=>i(t)):console.warn(`Failed to scroll to index ${e} after 10 attempts.`))};i(t)},this.scrollBy=(e,{behavior:t}={})=>{t===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1)t=e[e.length-1]?.end??0;else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e)}},Y=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function ve({measurements:e,outerSize:t,scrollOffset:n,lanes:r}){let i=e.length-1,a=t=>e[t].start;if(e.length<=r)return{startIndex:0,endIndex:i};let o=Y(0,i,a,n),s=o;if(r===1)for(;s<i&&e[s].end<n+t;)s++;else if(r>1){let a=Array(r).fill(0);for(;s<i&&a.some(e=>e<n+t);){let t=e[s];a[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(i,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var ye=y(r()),X=typeof document<`u`?C.useLayoutEffect:C.useEffect;function be(e){let t=C.useReducer(()=>({}),{})[1],n={...e,onChange:(n,r)=>{var i;r?(0,ye.flushSync)(t):t(),(i=e.onChange)==null||i.call(e,n,r)}},[r]=C.useState(()=>new _e(n));return r.setOptions(n),X(()=>r._didMount(),[]),X(()=>r._willUpdate()),r}function xe(e){return be({observeElementRect:pe,observeElementOffset:me,scrollToFn:ge,...e})}var Se=o.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  height: calc(100dvh - 216px);
  display: flex;
  flex-direction: column;
`,Ce=o.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,we=o.div`
  display: flex;
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 1;
`,Z=o.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[700]};
  white-space: nowrap;
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  text-align: left;

  &:last-child {
    text-align: center;
  }
`,Te=o.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`,Ee=o.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,Q=o.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
  }
`,De=o(Q)`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Oe=o(Q)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`,ke=o(Q)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ae=o.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[600]};
  font-family: "Courier New", monospace;
`,je=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 600;
  font-size: 0.75rem;
  background-color: ${({theme:e,$isWin:t})=>t?e.colors.win[100]:e.colors.defeat[100]};
  color: ${({theme:e,$isWin:t})=>t?e.colors.win[700]:e.colors.defeat[700]};
  width: 50px;
`,Me=o(n)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
`,Ne=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`,Pe=o.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  display: flex;
  justify-content: space-between;
`;const $=()=>{let{t:r}=v(),{id:i}=s({from:`/histories/$id`}),a=t(),{getHistoryByUuid:o,getMatchRecordsForSeason:c,histories:d}=S(),{deleteMatchRecord:y}=x(),T=(0,C.useRef)(null),[E,D]=(0,C.useState)(!1),[O,k]=(0,C.useState)(null),A=i===`current`,j=(0,C.useMemo)(()=>d[0],[d]),M=(0,C.useMemo)(()=>A?j:o(i),[A,j,i,o]);f(M?r(`pages.historyDetail.title`,{seasonName:M.seasonName}):r(`pages.historyDetail.title`,{seasonName:``}));let N=(0,C.useMemo)(()=>{if(A){let{matchRecords:e}=x.getState();return e}return c(i)},[A,i,c]),P=(0,C.useMemo)(()=>{if(!M)return[];let e=[];return N.forEach(t=>{let n=`不明`;if(A){let{characters:e}=x.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=M.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),A||M.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[M,N,A]),F=xe({count:P.length,getScrollElement:()=>T.current,estimateSize:()=>56,overscan:5}),I=(e,t,n)=>{k({uuid:e,characterName:t,date:n}),D(!0)};return M?(0,w.jsxs)(_,{children:[(0,w.jsx)(u,{children:(0,w.jsx)(g,{children:M.seasonName})}),(0,w.jsxs)(p,{children:[r(`pages.historyDetail.totalMatches`,{count:P.length}),` / `,r(`pages.historyDetail.createdDate`),`: `,new Date(M.createdAt).toLocaleDateString(`ja-JP`)]}),(0,w.jsx)(Se,{children:(0,w.jsxs)(Ce,{children:[(0,w.jsxs)(we,{children:[(0,w.jsx)(Z,{children:r(`pages.historyDetail.columns.character`)}),(0,w.jsx)(Z,{width:`120px`,children:r(`pages.historyDetail.columns.job`)}),(0,w.jsx)(Z,{width:`180px`,children:r(`pages.historyDetail.columns.date`)}),(0,w.jsx)(Z,{width:`100px`,children:r(`pages.historyDetail.columns.result`)}),A&&(0,w.jsx)(Z,{width:`80px`,children:r(`match.actions`)})]}),P.length>0?(0,w.jsx)(Te,{ref:T,children:(0,w.jsx)(`div`,{style:{height:`${F.getTotalSize()}px`,position:`relative`},children:F.getVirtualItems().map(t=>{let n=P[t.index];return(0,w.jsxs)(Ee,{style:{transform:`translateY(${t.start}px)`,height:`${t.size}px`},children:[(0,w.jsx)(De,{children:n.characterName}),(0,w.jsxs)(ke,{width:`120px`,children:[(0,w.jsx)(h,{job:n.job,size:24}),(0,w.jsx)(Ae,{children:l[n.job].shortName})]}),(0,w.jsx)(Oe,{width:`180px`,children:b(n.recordedAt)}),(0,w.jsx)(Q,{width:`100px`,children:(0,w.jsx)(je,{$isWin:n.isWin,children:n.isWin?r(`pages.historyDetail.results.win`):r(`pages.historyDetail.results.defeat`)})}),A&&(0,w.jsx)(Q,{width:`80px`,children:(0,w.jsx)(Me,{variant:`outline`,icon:(0,w.jsx)(e,{name:`delete`,size:16}),onClick:()=>I(n.uuid,n.characterName,b(n.recordedAt)),title:r(`match.deleteMatch`)})})]},n.uuid)})})}):(0,w.jsx)(Ne,{children:r(`pages.historyDetail.emptyState`)})]})}),(0,w.jsx)(Pe,{children:(0,w.jsxs)(n,{variant:`outline`,size:`sm`,onClick:()=>a({to:`/histories`}),children:[(0,w.jsx)(e,{name:`back`,size:16}),r(`pages.historyDetail.backToList`)]})}),A&&(0,w.jsx)(m,{isOpen:E,title:r(`match.confirmDelete`),confirmText:r(`match.confirmDeleteButton`),confirmType:`danger`,onClose:()=>{D(!1),k(null)},onConfirm:()=>{O&&A&&(y(O.uuid),D(!1),k(null))},children:r(`match.deleteConfirmation`,{characterName:O?.characterName,date:O?.date})})]}):(0,w.jsx)(_,{children:(0,w.jsx)(g,{children:r(`pages.historyDetail.notFound`)})})};var Fe=o.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
`,Ie=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,Le=o.form`
  background-color: white;
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,Re=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,ze=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,Be=o.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.error[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.error[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`,Ve=o.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.success[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.success[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`;const He=()=>{let{t:e}=v();f(e(`pages.newSeason.title`));let t=d(),{createHistory:r,error:i,clearError:a,getSortedHistories:o}=S(),[s,l]=(0,C.useState)(``),[u,h]=(0,C.useState)(!1),[_,y]=(0,C.useState)(``),[b,x]=(0,C.useState)(``),[T,E]=(0,C.useState)(!1),D=async t=>{t.preventDefault();let n=s.trim();if(!n){y(e(`pages.newSeason.validationRequired`));return}if(n.length>50){y(e(`pages.newSeason.validationMaxLength`));return}if(y(``),o().length>0){E(!0);return}await O()},O=async()=>{h(!0),a();try{let n=s.trim(),i=r({seasonName:n});x(e(`pages.newSeason.successMessage`,{seasonName:i.seasonName})),setTimeout(()=>{t.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{h(!1),E(!1)}},k=()=>{O()},A=()=>{E(!1)},j=()=>{history.back()},M=e=>{l(e.target.value),_&&y(``)},N=o()[0]?.seasonName||``;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{isOpen:T,onClose:A,title:e(`pages.newSeason.confirmTitle`),confirmText:e(`pages.newSeason.create`),cancelText:e(`pages.newSeason.cancel`),onConfirm:k,confirmType:`danger`,isLoading:u,children:e(`pages.newSeason.confirmDescription`,{seasonName:N})}),(0,w.jsxs)(Fe,{children:[(0,w.jsxs)(Ie,{children:[(0,w.jsx)(g,{children:e(`pages.newSeason.title`)}),(0,w.jsx)(p,{children:e(`pages.newSeason.description`)})]}),(0,w.jsxs)(Le,{onSubmit:D,children:[(i||_)&&(0,w.jsx)(Be,{children:_||i}),b&&(0,w.jsx)(Ve,{children:b}),(0,w.jsx)(Re,{children:(0,w.jsx)(c,{label:e(`pages.newSeason.seasonName`),type:`text`,value:s,onChange:M,placeholder:e(`pages.newSeason.seasonNamePlaceholder`),disabled:u||!!b,fullWidth:!0,required:!0})}),(0,w.jsxs)(ze,{children:[(0,w.jsx)(n,{type:`button`,variant:`outline`,onClick:j,disabled:u||!!b,children:e(`pages.newSeason.cancel`)}),(0,w.jsx)(n,{type:`submit`,disabled:u||!!b||!s.trim(),children:e(u?`pages.newSeason.creating`:`pages.newSeason.create`)})]})]})]})]})};export{$ as n,U as r,He as t};