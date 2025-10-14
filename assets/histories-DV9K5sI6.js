import{D as e,E as t,L as n,M as r,N as i,O as a,P as o,S as s,T as c,c as l,d as u,f as d,i as f,j as p,n as m,p as h,r as g,s as _,t as v,w as y,x as b}from"./index-BEj-8du9.js";import{t as x}from"./usePageTitle-BX_2NIdR.js";var S=n(o()),C=n(p()),w=r.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
`,T=r.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`,E=r.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,D=r.th`
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
`,O=r.tbody``,k=r.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }

  &:last-child {
    border-bottom: none;
  }
`,A=r.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};

  &:last-child {
    text-align: center;
  }
`,j=r(A)`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,M=r(A)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`,N=r(c)`
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
`,P=r(c)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.error[500]};
  }
`,F=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
`,ee=r.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,te=r.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,ne=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,re=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,ie=r.div`
  width: 64px;
  height: 64px;
  background-color: ${({theme:e})=>e.colors.gray[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,ae=r.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,oe=r.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,se=r(k)`
  &:hover {
    background-color: transparent;
  }
`,ce=r(A)`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
`;const I=({histories:e,isLoading:n=!1,onDelete:r})=>{let i=t(),[a,o]=(0,S.useState)(!1),[l,f]=(0,S.useState)(null),p=t=>{let n=e[0]?.uuid;i(t===n?{to:`/`}:{to:`/histories/${t}`})},m=(e,t)=>{f({uuid:e,seasonName:t}),o(!0)},h=()=>{o(!1),f(null)};return n?(0,C.jsx)(w,{children:(0,C.jsxs)(T,{children:[(0,C.jsx)(E,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(D,{children:`シーズン名`}),(0,C.jsx)(D,{children:`作成日時`}),(0,C.jsx)(D,{children:`詳細`})]})}),(0,C.jsx)(O,{children:(0,C.jsx)(se,{children:(0,C.jsx)(ce,{colSpan:3,children:`読み込み中...`})})})]})}):e.length===0?(0,C.jsxs)(re,{children:[(0,C.jsx)(ie,{children:(0,C.jsx)(s,{name:`history`,size:24})}),(0,C.jsx)(ae,{children:`履歴がありません`}),(0,C.jsxs)(oe,{children:[`シーズンの履歴がまだ作成されていません。`,(0,C.jsx)(`br`,{}),`新しいシーズンを作成してください。`]})]}):(0,C.jsxs)(w,{children:[(0,C.jsxs)(T,{children:[(0,C.jsx)(E,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(D,{children:`シーズン名`}),(0,C.jsx)(D,{children:`作成日時`}),(0,C.jsx)(D,{children:`操作`})]})}),(0,C.jsx)(O,{children:e.map(e=>(0,C.jsxs)(k,{children:[(0,C.jsx)(j,{children:e.seasonName}),(0,C.jsx)(M,{children:u(e.createdAt)}),(0,C.jsx)(A,{children:(0,C.jsxs)(F,{children:[(0,C.jsx)(N,{variant:`outline`,icon:(0,C.jsx)(s,{name:`detail`,size:16}),onClick:()=>p(e.uuid),title:`${e.seasonName}の詳細を表示`}),(0,C.jsx)(P,{variant:`outline`,icon:(0,C.jsx)(s,{name:`delete`,size:16}),onClick:()=>m(e.uuid,e.seasonName),title:`${e.seasonName}を削除`})]})})]},e.uuid))})]}),(0,C.jsx)(d,{isOpen:a,onClose:h,title:`シーズンの削除`,children:(0,C.jsxs)(ee,{children:[(0,C.jsxs)(te,{children:[`「`,l?.seasonName,`」を削除してもよろしいですか？`,(0,C.jsx)(`br`,{}),`この操作は取り消すことができません。`]}),(0,C.jsxs)(ne,{children:[(0,C.jsx)(c,{variant:`outline`,onClick:h,children:`キャンセル`}),(0,C.jsx)(c,{variant:`primary`,onClick:()=>{l&&(r(l.uuid),o(!1),f(null))},children:`削除する`})]})]})})]})};var L=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,R=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,z=r.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,B=r.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,V=r.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.error[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.error[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[500]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
`;const H=()=>{x(`シーズン履歴`);let{histories:e,isLoading:t,error:n,getSortedHistories:r,deleteHistory:i,clearError:a}=_(),{matchRecords:o}=l(),s=r();return(0,C.jsxs)(v,{children:[(0,C.jsx)(f,{children:(0,C.jsx)(g,{children:`シーズン履歴一覧`})}),(0,C.jsx)(m,{children:`過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。`}),n&&(0,C.jsxs)(V,{children:[(0,C.jsxs)(`div`,{children:[`エラー: `,n]}),(0,C.jsx)(`button`,{onClick:a,style:{marginTop:`8px`,textDecoration:`underline`},children:`エラーを閉じる`})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(R,{children:[(0,C.jsxs)(z,{children:[`総シーズン数: `,(0,C.jsxs)(B,{children:[e.length,`件`]})]}),e.length>0&&(0,C.jsxs)(z,{children:[`最新作成: `,(0,C.jsx)(B,{children:new Date(s[0]?.createdAt).toLocaleDateString(`ja-JP`)})]})]})}),(0,C.jsx)(I,{histories:s,isLoading:t,onDelete:e=>{let t=o.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=l.getState();t.forEach(e=>{n(e.uuid)}),i(e)}})]})};function U(e,t,n){let r=n.initialDeps??[],i;function a(){var a;let o;n.key&&n.debug?.call(n)&&(o=Date.now());let s=e();if(!(s.length!==r.length||s.some((e,t)=>r[t]!==e)))return i;r=s;let c;if(n.key&&n.debug?.call(n)&&(c=Date.now()),i=t(...s),n.key&&n.debug?.call(n)){let e=Math.round((Date.now()-o)*100)/100,t=Math.round((Date.now()-c)*100)/100,r=t/16,i=(e,t)=>{for(e=String(e);e.length<t;)e=` `+e;return e};console.info(`%c⏱ ${i(t,5)} /${i(e,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`,n?.key)}return(a=n?.onChange)==null||a.call(n,i),i}return a.updateDeps=e=>{r=e},a}function W(e,t){if(e===void 0)throw Error(`Unexpected undefined${t?`: ${t}`:``}`);return e}var G=(e,t)=>Math.abs(e-t)<1.01,le=(e,t,n)=>{let r;return function(...i){e.clearTimeout(r),r=e.setTimeout(()=>t.apply(this,i),n)}},K=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},ue=e=>e,de=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1),r=[];for(let e=t;e<=n;e++)r.push(e);return r},fe=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(K(n)),!r.ResizeObserver)return()=>{};let a=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(e?.borderBoxSize){let t=e.borderBoxSize[0];if(t){i({width:t.inlineSize,height:t.blockSize});return}}i(K(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return a.observe(n,{box:`border-box`}),()=>{a.unobserve(n)}},q={passive:!0},J=typeof window>`u`?!0:`onscrollend`in window,pe=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=0,a=e.options.useScrollendEvent&&J?()=>void 0:le(r,()=>{t(i,!1)},e.options.isScrollingResetDelay),o=r=>()=>{let{horizontal:o,isRtl:s}=e.options;i=o?n.scrollLeft*(s&&-1||1):n.scrollTop,a(),t(i,r)},s=o(!0),c=o(!1);c(),n.addEventListener(`scroll`,s,q);let l=e.options.useScrollendEvent&&J;return l&&n.addEventListener(`scrollend`,c,q),()=>{n.removeEventListener(`scroll`,s),l&&n.removeEventListener(`scrollend`,c)}},me=(e,t,n)=>{if(t?.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?`inlineSize`:`blockSize`])}return e[n.options.horizontal?`offsetWidth`:`offsetHeight`]},he=(e,{adjustments:t=0,behavior:n},r)=>{var i,a;let o=e+t;(a=(i=r.scrollElement)?.scrollTo)==null||a.call(i,{[r.options.horizontal?`left`:`top`]:o,behavior:n})},ge=class{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null,t=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{this._measureElement(e.target,e)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}));return{disconnect:()=>{var n;(n=t())==null||n.disconnect(),e=null},observe:e=>t()?.observe(e,{box:`border-box`}),unobserve:e=>t()?.unobserve(e)}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([t,n])=>{n===void 0&&delete e[t]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:ue,rangeExtractor:de,onChange:()=>{},measureElement:me,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:`data-index`,initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var t,n;(n=(t=this.options).onChange)==null||n.call(t,this,e)},this.maybeNotify=U(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{let e=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==e){if(this.cleanup(),!e){this.maybeNotify();return}this.scrollElement=e,this.scrollElement&&`ownerDocument`in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=this.scrollElement?.window??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<e?`forward`:`backward`:null,this.scrollOffset=e,this.isScrolling=t,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?`width`:`height`]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset==`function`?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,r=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let a=r.get(t.lane);if(a==null||t.end>a.end?r.set(t.lane,t):t.end<a.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=U(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,t,n,r,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i}),{key:!1}),this.getMeasurements=U(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i},a)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let o=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];let s=this.measurementsCache.slice(0,o);for(let i=o;i<e;i++){let e=r(i),o=this.options.lanes===1?s[i-1]:this.getFurthestMeasurement(s,i),c=o?o.end+this.options.gap:t+n,l=a.get(e),u=typeof l==`number`?l:this.options.estimateSize(i),d=c+u,f=o?o.lane:i%this.options.lanes;s[i]={index:i,start:c,size:u,end:d,key:e,lane:f}}return this.measurementsCache=s,s},{key:!1,debug:()=>this.options.debug}),this.calculateRange=U(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>this.range=e.length>0&&t>0?_e({measurements:e,outerSize:t,scrollOffset:n,lanes:r}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=U(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>r===null||i===null?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this._measureElement=(e,t)=>{let n=this.indexFromElement(e),r=this.measurementsCache[n];if(!r)return;let i=r.key,a=this.elementsCache.get(i);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(i,e)),e.isConnected&&this.resizeItem(n,this.options.measureElement(e,t,this))},this.resizeItem=(e,t)=>{let n=this.measurementsCache[e];if(!n)return;let r=this.itemSizeCache.get(n.key)??n.size,i=t-r;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange===void 0?n.start<this.getScrollOffset()+this.scrollAdjustments:this.shouldAdjustScrollPositionOnItemSizeChange(n,i,this))&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(n.index),this.itemSizeCache=new Map(this.itemSizeCache.set(n.key,t)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});return}this._measureElement(e,void 0)},this.getVirtualItems=U(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=e[r],a=t[i];n.push(a)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(t.length!==0)return W(t[Y(0,t.length-1,e=>W(t[e]).start,e)])},this.getOffsetForAlignment=(e,t,n=0)=>{let r=this.getSize(),i=this.getScrollOffset();t===`auto`&&(t=e>=i+r?`end`:`start`),t===`center`?e+=(n-r)/2:t===`end`&&(e-=r);let a=this.getTotalSize()+this.options.scrollMargin-r;return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,t=`auto`)=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.measurementsCache[e];if(!n)return;let r=this.getSize(),i=this.getScrollOffset();if(t===`auto`)if(n.end>=i+r-this.options.scrollPaddingEnd)t=`end`;else if(n.start<=i+this.options.scrollPaddingStart)t=`start`;else return[i,t];let a=t===`end`?n.end+this.options.scrollPaddingEnd:n.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,t,n.size),t]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(e,{align:t=`start`,behavior:n}={})=>{n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,t),{adjustments:void 0,behavior:n})},this.scrollToIndex=(e,{align:t=`auto`,behavior:n}={})=>{n===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e=Math.max(0,Math.min(e,this.options.count-1));let r=0,i=t=>{if(!this.targetWindow)return;let r=this.getOffsetForIndex(e,t);if(!r){console.warn(`Failed to get offset for index:`,e);return}let[i,o]=r;this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.targetWindow.requestAnimationFrame(()=>{let t=this.getScrollOffset(),n=this.getOffsetForIndex(e,o);if(!n){console.warn(`Failed to get offset for index:`,e);return}G(n[0],t)||a(o)})},a=t=>{this.targetWindow&&(r++,r<10?this.targetWindow.requestAnimationFrame(()=>i(t)):console.warn(`Failed to scroll to index ${e} after 10 attempts.`))};i(t)},this.scrollBy=(e,{behavior:t}={})=>{t===`smooth`&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:t})},this.getTotalSize=()=>{let e=this.getMeasurements(),t;if(e.length===0)t=this.options.paddingStart;else if(this.options.lanes===1)t=e[e.length-1]?.end??0;else{let n=Array(this.options.lanes).fill(null),r=e.length-1;for(;r>=0&&n.some(e=>e===null);){let t=e[r];n[t.lane]===null&&(n[t.lane]=t.end),r--}t=Math.max(...n.filter(e=>e!==null))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(e)}},Y=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,a=n(i);if(a<r)e=i+1;else if(a>r)t=i-1;else return i}return e>0?e-1:0};function _e({measurements:e,outerSize:t,scrollOffset:n,lanes:r}){let i=e.length-1,a=t=>e[t].start;if(e.length<=r)return{startIndex:0,endIndex:i};let o=Y(0,i,a,n),s=o;if(r===1)for(;s<i&&e[s].end<n+t;)s++;else if(r>1){let a=Array(r).fill(0);for(;s<i&&a.some(e=>e<n+t);){let t=e[s];a[t.lane]=t.end,s++}let c=Array(r).fill(n+t);for(;o>=0&&c.some(e=>e>=n);){let t=e[o];c[t.lane]=t.start,o--}o=Math.max(0,o-o%r),s=Math.min(i,s+(r-1-s%r))}return{startIndex:o,endIndex:s}}var ve=n(i()),X=typeof document<`u`?S.useLayoutEffect:S.useEffect;function ye(e){let t=S.useReducer(()=>({}),{})[1],n={...e,onChange:(n,r)=>{var i;r?(0,ve.flushSync)(t):t(),(i=e.onChange)==null||i.call(e,n,r)}},[r]=S.useState(()=>new ge(n));return r.setOptions(n),X(()=>r._didMount(),[]),X(()=>r._willUpdate()),r}function be(e){return ye({observeElementRect:fe,observeElementOffset:pe,scrollToFn:he,...e})}var xe=r.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  height: calc(100dvh - 216px);
  display: flex;
  flex-direction: column;
`,Se=r.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Ce=r.div`
  display: flex;
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 1;
`,Z=r.div`
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
`,we=r.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`,Te=r.div`
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
`,Q=r.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
  }
`,Ee=r(Q)`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,De=r(Q)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`,$=r(Q)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Oe=r.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[600]};
  font-family: "Courier New", monospace;
`,ke=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 600;
  font-size: 0.75rem;
  background-color: ${({theme:e,$isWin:t})=>t?e.colors.success[100]:e.colors.error[100]};
  color: ${({theme:e,$isWin:t})=>t?e.colors.success[700]:e.colors.error[700]};
  width: 50px;
`,Ae=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`,je=r.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  display: flex;
  justify-content: space-between;
`;const Me=()=>{let{id:n}=e({from:`/histories/$id`}),r=t(),{getHistoryByUuid:i,getMatchRecordsForSeason:a}=_(),o=(0,S.useRef)(null),l=(0,S.useMemo)(()=>i(n),[n,i]);x(l?`${l.seasonName} 詳細`:`シーズン詳細`);let d=(0,S.useMemo)(()=>a(n),[n,a]),p=(0,S.useMemo)(()=>{if(!l)return[];let e=[];return d.forEach(t=>{let n=l.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),l.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[l,d]),y=be({count:p.length,getScrollElement:()=>o.current,estimateSize:()=>56,overscan:5});return l?(0,C.jsxs)(v,{children:[(0,C.jsx)(f,{children:(0,C.jsx)(g,{children:l.seasonName})}),(0,C.jsxs)(m,{children:[p.length,`試合の戦績 / 作成日: `,new Date(l.createdAt).toLocaleDateString(`ja-JP`)]}),(0,C.jsx)(xe,{children:(0,C.jsxs)(Se,{children:[(0,C.jsxs)(Ce,{children:[(0,C.jsx)(Z,{children:`キャラクター名`}),(0,C.jsx)(Z,{width:`120px`,children:`使用ジョブ`}),(0,C.jsx)(Z,{width:`180px`,children:`作成日時`}),(0,C.jsx)(Z,{width:`100px`,children:`勝敗`})]}),p.length>0?(0,C.jsx)(we,{ref:o,children:(0,C.jsx)(`div`,{style:{height:`${y.getTotalSize()}px`,position:`relative`},children:y.getVirtualItems().map(e=>{let t=p[e.index];return(0,C.jsxs)(Te,{style:{transform:`translateY(${e.start}px)`,height:`${e.size}px`},children:[(0,C.jsx)(Ee,{children:t.characterName}),(0,C.jsxs)($,{width:`120px`,children:[(0,C.jsx)(h,{job:t.job,size:24}),(0,C.jsx)(Oe,{children:b[t.job].shortName})]}),(0,C.jsx)(De,{width:`180px`,children:u(t.recordedAt)}),(0,C.jsx)(Q,{width:`100px`,children:(0,C.jsx)(ke,{$isWin:t.isWin,children:t.isWin?`Win`:`Lose`})})]},t.uuid)})})}):(0,C.jsx)(Ae,{children:`戦績が記録されていません`})]})}),(0,C.jsx)(je,{children:(0,C.jsxs)(c,{variant:`outline`,size:`sm`,onClick:()=>r({to:`/histories`}),children:[(0,C.jsx)(s,{name:`back`,size:16}),`一覧に戻る`]})})]}):(0,C.jsx)(v,{children:(0,C.jsx)(g,{children:`履歴が見つかりません`})})};var Ne=r.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
`,Pe=r.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,Fe=r.form`
  background-color: white;
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,Ie=r.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Le=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,Re=r.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.error[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.error[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`,ze=r.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.success[500]}20;
  border: 1px solid ${({theme:e})=>e.colors.success[500]}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`;const Be=()=>{x(`新シーズン作成`);let e=a(),{createHistory:t,error:n,clearError:r,getSortedHistories:i}=_(),[o,s]=(0,S.useState)(``),[l,u]=(0,S.useState)(!1),[f,p]=(0,S.useState)(``),[h,v]=(0,S.useState)(``),[b,w]=(0,S.useState)(!1),T=async e=>{e.preventDefault();let t=o.trim();if(!t){p(`シーズン名を入力してください`);return}if(t.length>50){p(`シーズン名は50文字以内で入力してください`);return}if(p(``),i().length>0){w(!0);return}await E()},E=async()=>{u(!0),r();try{let n=o.trim(),r=t({seasonName:n});v(`シーズン「${r.seasonName}」を作成しました`),setTimeout(()=>{e.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{u(!1),w(!1)}},D=()=>{E()},O=()=>{w(!1)},k=()=>{history.back()},A=e=>{s(e.target.value),f&&p(``)},j=i()[0]?.seasonName||``;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(d,{isOpen:b,onClose:O,title:`シーズン作成の確認`,confirmText:`作成する`,cancelText:`キャンセル`,onConfirm:D,confirmType:`danger`,isLoading:l,children:[`新しいシーズンを作成すると「`,j,`」の戦績データは過去のシーズンとしてアーカイブされ、新しい戦績の入力が開始されます。よろしいでしょうか?`]}),(0,C.jsxs)(Ne,{children:[(0,C.jsxs)(Pe,{children:[(0,C.jsx)(g,{children:`新規シーズン作成`}),(0,C.jsx)(m,{children:`新しいシーズンを作成します。シーズン名を入力してください。`})]}),(0,C.jsxs)(Fe,{onSubmit:T,children:[(n||f)&&(0,C.jsx)(Re,{children:f||n}),h&&(0,C.jsx)(ze,{children:h}),(0,C.jsx)(Ie,{children:(0,C.jsx)(y,{label:`シーズン名`,type:`text`,value:o,onChange:A,placeholder:`例: シーズン1`,disabled:l||!!h,fullWidth:!0,required:!0})}),(0,C.jsxs)(Le,{children:[(0,C.jsx)(c,{type:`button`,variant:`outline`,onClick:k,disabled:l||!!h,children:`キャンセル`}),(0,C.jsx)(c,{type:`submit`,disabled:l||!!h||!o.trim(),children:l?`作成中...`:`作成する`})]})]})]})]})};export{Me as n,H as r,Be as t};