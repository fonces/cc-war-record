import{i as e}from"./rolldown-runtime-CescaEWC.js";import{Ot as t,a as n,c as r,d as i,f as a,i as o,kt as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./vendor-CfpF3efx.js";import{b as _}from"./vendor-react-Dqtmilgm.js";import{n as v,o as y}from"./vendor-styled-zRjDkof3.js";import{B as b,C as x,D as S,M as ee,N as C,O as w,T,b as E,dt as D,ft as O,l as k,mt as A,pt as j,s as M,ut as N,v as te,x as ne,y as re}from"./index-C5jF5Hv-.js";import{n as ie}from"./stores-C0mYd_Ps.js";import{b as ae,c as oe,d as se,o as P,s as F,u as ce,y as le}from"./vendor-recharts-CltENXDe.js";import{t as I}from"./obsLayoutStore-VWYliVl_.js";var L=e(_()),R=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  height: fit-content;
  max-height: calc(100dvh - 200px);
  overflow: hidden;
`,ue=v.div`
  padding: ${({theme:e})=>e.spacing[4]};
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;

  /* カスタムスクロールバー */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.surface};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
    border-radius: 3px;

    &:hover {
      background: ${({theme:e})=>e.colors.gray[400]};
    }
  }
`,de=v.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};
`,fe=v.button`
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing[3]};
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  color: ${({theme:e})=>e.colors.textSecondary};
  aspect-ratio: 1;
  opacity: ${({$isDragging:e})=>e?.5:1};

  &:active {
    cursor: grabbing;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
    border-color: ${({theme:e})=>e.colors.primary[300]};
    color: ${({theme:e})=>e.colors.text};
  }
`,pe=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  svg {
    cursor: grab;
  }
`;function me({type:e,icon:t,labelKey:n}){let{t:r}=C(),{attributes:i,listeners:a,setNodeRef:o,transform:s,isDragging:c}=g({id:`new-${e}`,data:{type:e,isNew:!0}}),u=s?{transform:l.Translate.toString(s)}:void 0;return(0,L.jsx)(fe,{ref:o,style:u,$isDragging:c,title:r(n),...a,...i,children:(0,L.jsx)(pe,{children:(0,L.jsx)(N,{name:t,size:20})})})}function he(){return(0,L.jsx)(R,{children:(0,L.jsx)(ue,{children:(0,L.jsx)(de,{children:[{type:`winCount`,icon:`trophy`,labelKey:`obs.winCount`},{type:`loseCount`,icon:`xCircle`,labelKey:`obs.loseCount`},{type:`winRate`,icon:`percent`,labelKey:`obs.winRate`},{type:`totalMatches`,icon:`hash`,labelKey:`obs.totalMatches`},{type:`plainText`,icon:`text`,labelKey:`obs.elementType.plainText`},{type:`variableText`,icon:`function`,labelKey:`obs.elementType.variableText`},{type:`statsCombo`,icon:`grid`,labelKey:`obs.elementType.statsCombo`},{type:`line`,icon:`minus`,labelKey:`obs.elementType.line`},{type:`rectangle`,icon:`square`,labelKey:`obs.elementType.rectangle`},{type:`todayTrendChart`,icon:`chart`,labelKey:`obs.elementType.todayTrendChart`}].map(e=>(0,L.jsx)(me,{...e},e.type))})})})}var ge=e(t()),_e=v.div`
  position: fixed;
  top: 16px;
  right: 16px;
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  padding: ${({theme:e})=>e.spacing[4]};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  opacity: ${({$visible:e})=>e?1:.7};
  transition: opacity ${({theme:e})=>e.transitions.base};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:hover {
    opacity: 1;
  }
`,ve=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: ${({theme:e})=>e.spacing[3]};
  padding-top: ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  width: 100%;
`;function ye({editMode:e,onToggleEditMode:t,onResetLayout:n,onOpenTemplates:r}){let{t:i}=C(),{screenSize:a}=I(),o=()=>{let e=`${window.location.origin}/cc-war-record/obs/window`,t=[`width=${a.width}`,`height=${a.height}`,`location=no`,`menubar=no`,`toolbar=no`,`status=no`,`scrollbars=no`,`resizable=no`].join(`,`);window.open(e,`OBS Browser Source`,t)};return(0,ge.createPortal)((0,L.jsxs)(_e,{$visible:e,children:[(0,L.jsxs)(j,{direction:`horizontal`,children:[(0,L.jsx)(k,{icon:(0,L.jsx)(N,{name:e?`accept`:`edit`}),$type:e?`default`:`secondary`,size:`sm`,onClick:t,"aria-label":i(e?`obs.editMode.disable`:`obs.editMode.enable`),title:i(e?`obs.editMode.disable`:`obs.editMode.enable`)}),(0,L.jsx)(k,{icon:(0,L.jsx)(N,{name:`grid`}),size:`sm`,onClick:r,"aria-label":i(`obs.templates.button`),title:i(`obs.templates.button`)}),(0,L.jsx)(k,{icon:(0,L.jsx)(N,{name:`window`}),size:`sm`,onClick:o,"aria-label":i(`obs.browserSource.open`),title:i(`obs.browserSource.open`),disabled:e}),(0,L.jsx)(k,{icon:(0,L.jsx)(N,{name:`revert`}),size:`sm`,onClick:n,"aria-label":i(`obs.resetLayout`),title:i(`obs.resetLayout`),disabled:!e})]}),e&&(0,L.jsx)(ve,{children:i(`obs.editMode.instruction`)})]}),document.body)}var z=e(s());function be(e){let{updateElementSize:t,updateElementPosition:n}=I(),[r,i]=(0,z.useState)(!1);return{isResizing:r,handleResizeStart:(r,a)=>{r.stopPropagation(),i(!0);let o=r.clientX,s=r.clientY,c=e.size?.width||(r.currentTarget.parentElement?.offsetWidth??200),l=e.size?.height||(r.currentTarget.parentElement?.offsetHeight??50),u=e.position.x,d=e.position.y,f=r=>{let i=r.clientX-o,f=r.clientY-s,p=c,m=l,h=u,g=d;a.includes(`e`)&&(p=Math.max(100,c+i)),a.includes(`w`)&&(p=Math.max(100,c-i),h=u+(c-p)),a.includes(`s`)&&(m=Math.max(50,l+f)),a.includes(`n`)&&(m=Math.max(50,l-f),g=d+(l-m)),t(e.id,{width:p,height:m}),(h!==u||g!==d)&&n(e.id,{x:h,y:g})},p=()=>{i(!1),document.removeEventListener(`mousemove`,f),document.removeEventListener(`mouseup`,p)};document.addEventListener(`mousemove`,f),document.addEventListener(`mouseup`,p)}}}var xe=v.div`
  position: fixed;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  padding: ${({theme:e})=>e.spacing[1]};
  z-index: 10000;
  min-width: 160px;
`,Se=v.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background: transparent;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  text-align: left;

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
  }

  &.danger {
    color: ${({theme:e})=>e.colors.error};

    &:hover {
      background: ${({theme:e})=>e.colors.error}15;
    }
  }
`;function Ce({x:e,y:t,onEdit:n,onDelete:r,onClose:i}){let{t:a}=C(),o=(0,z.useRef)(null);return(0,z.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&i()},t=e=>{e.key===`Escape`&&i()};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[i]),(0,z.useEffect)(()=>{if(o.current){let n=o.current.getBoundingClientRect(),r=window.innerWidth,i=window.innerHeight,a=e,s=t;n.right>r&&(a=r-n.width-8),n.bottom>i&&(s=i-n.height-8),(a!==e||s!==t)&&(o.current.style.left=`${a}px`,o.current.style.top=`${s}px`)}},[e,t]),(0,L.jsxs)(xe,{ref:o,$x:e,$y:t,children:[(0,L.jsxs)(Se,{onClick:()=>{n(),i()},children:[(0,L.jsx)(N,{name:`edit`,size:16}),a(`common.edit`)]}),(0,L.jsxs)(Se,{className:`danger`,onClick:()=>{r(),i()},children:[(0,L.jsx)(N,{name:`delete`,size:16}),a(`common.delete`)]})]})}var we=v.div`
  font-size: 0.5em;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 4px;
`,Te=v.div`
  font-size: 1.25em;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`,Ee=v.span`
  font-size: 0.625em;
  margin-left: 4px;
  color: ${({theme:e})=>e.colors.textSecondary};
`,De=v.div`
  color: ${({$color:e,theme:t})=>e||t.colors.text};
  white-space: pre-wrap;
  text-align: ${({$textAlign:e})=>e||`left`};
`,Oe=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ke=v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
`,Ae=v.div`
  font-size: 0.75em;
  color: ${({theme:e})=>e.colors.textSecondary};
`,je=v.div`
  font-size: 1em;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`,Me=v.div`
  background-color: ${({$color:e})=>e};
  ${({$orientation:e,$thickness:t})=>e===`horizontal`?`
    width: 100%;
    height: ${t}px;
  `:`
    width: ${t}px;
    height: 100%;
  `}
`,Ne=v.div`
  width: 100%;
  height: 100%;
  background-color: ${({$fillColor:e})=>e||`transparent`};
  border: ${({$borderWidth:e,$borderColor:t})=>e&&t?`${e}px solid ${t}`:`none`};
  border-radius: ${({$borderRadius:e})=>e||0}px;
`,Pe=v.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;function Fe({element:e}){let{t}=C(),n=y(),r=I(e=>e.obsRecordingStartTime),i=ie(e=>e.matchRecords),a=r?i.filter(e=>new Date(e.createdAt)>=new Date(r)):i,o=a.filter(e=>e.isWin).length,s=a.filter(e=>!e.isWin).length,c=o+s,l=c>0?o/c*100:0,u=()=>{switch(e.type){case`winCount`:return{label:t(`obs.winCount`),value:o.toString(),unit:t(`obs.matches`)};case`loseCount`:return{label:t(`obs.loseCount`),value:s.toString(),unit:t(`obs.matches`)};case`winRate`:return{label:t(`obs.winRate`),value:l.toFixed(1),unit:`%`};case`totalMatches`:return{label:t(`obs.totalMatches`),value:c.toString(),unit:t(`obs.matches`)};default:return{label:``,value:`-`,unit:``}}},d=e=>{switch(e){case`winCount`:return{label:t(`obs.winCount`),value:o.toString(),unit:t(`obs.matches`)};case`loseCount`:return{label:t(`obs.loseCount`),value:s.toString(),unit:t(`obs.matches`)};case`winRate`:return{label:t(`obs.winRate`),value:l.toFixed(1),unit:`%`};case`totalMatches`:return{label:t(`obs.totalMatches`),value:c.toString(),unit:t(`obs.matches`)};default:return{label:``,value:`-`,unit:``}}};if(e.type===`plainText`)return(0,L.jsx)(De,{$color:e.textColor,$textAlign:e.textAlign,children:e.text||t(`obs.plainText.placeholder`)});if(e.type===`variableText`){let t=e.text||``,n={"{winCount}":o.toString(),"{loseCount}":s.toString(),"{winRate}":l.toFixed(1),"{totalMatches}":c.toString(),"{winStreak}":`0`,"{loseStreak}":`0`};return Object.entries(n).forEach(([e,n])=>{t=t.replace(new RegExp(e.replace(/[{}]/g,`\\$&`),`g`),n)}),(0,L.jsx)(De,{$color:e.textColor,$textAlign:e.textAlign,children:t})}if(e.type===`line`)return(0,L.jsx)(Me,{$orientation:e.lineOrientation||`horizontal`,$thickness:e.lineThickness||2,$color:e.lineColor||`#ffffff`});if(e.type===`rectangle`)return(0,L.jsx)(Ne,{$fillColor:e.rectangleFillColor,$borderColor:e.rectangleBorderColor,$borderWidth:e.rectangleBorderWidth,$borderRadius:e.rectangleBorderRadius});if(e.type===`todayTrendChart`){let e=new Date().toISOString().split(`T`)[0],t=[...a.filter(t=>new Date(t.createdAt).toISOString().split(`T`)[0]===e)].sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),r=0,i=t.map((e,t)=>(e.isWin?r++:r--,{matchNumber:t+1,wins:r,isWin:e.isWin})),o=i.length>0?i:[{matchNumber:0,wins:0,isWin:!1}];return(0,L.jsx)(Pe,{children:(0,L.jsx)(le,{width:`100%`,height:`100%`,children:(0,L.jsxs)(P,{data:o,margin:{top:20,right:20,left:20,bottom:20},children:[(0,L.jsx)(`defs`,{children:(0,L.jsxs)(`linearGradient`,{id:`colorTodayWins`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,L.jsx)(`stop`,{offset:`0%`,stopColor:`#26A1DF`}),(0,L.jsx)(`stop`,{offset:`100%`,stopColor:`#F36346`})]})}),(0,L.jsx)(se,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,L.jsx)(oe,{dataKey:`matchNumber`,tick:{fontSize:12,fill:n.colors.gray[600]}}),(0,L.jsx)(F,{allowDecimals:!1,tick:{fill:n.colors.gray[600]},width:40}),(0,L.jsx)(ae,{contentStyle:{background:n.colors.surface,border:`1px solid ${n.colors.border}`,borderRadius:`8px`,padding:`8px 12px`}}),(0,L.jsx)(ce,{type:`monotone`,dataKey:()=>0,stroke:n.colors.gray[400],strokeWidth:2,strokeDasharray:`5 5`,dot:!1,isAnimationActive:!1}),(0,L.jsx)(ce,{type:`monotone`,dataKey:`wins`,stroke:`url(#colorTodayWins)`,strokeWidth:3,dot:(0,L.jsx)(e=>{let{cx:t,cy:r,payload:i}=e;return t===void 0||r===void 0||!i||i.matchNumber===0?null:(0,L.jsx)(`circle`,{cx:t,cy:r,r:6,fill:i.isWin?n.colors.win[400]:n.colors.defeat[400],stroke:`#fff`,strokeWidth:2})},{}),isAnimationActive:!1})]})})})}if(e.type===`statsCombo`){let t=e.comboItems||[`winCount`,`loseCount`,`winRate`];return(0,L.jsx)(Oe,{children:t.map(e=>{let{label:t,value:n,unit:r}=d(e);return(0,L.jsxs)(ke,{children:[(0,L.jsx)(Ae,{children:t}),(0,L.jsxs)(je,{children:[n,r]})]},e)})})}let{label:f,value:p,unit:m}=u();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(we,{children:f}),(0,L.jsxs)(Te,{children:[p,(0,L.jsx)(Ee,{children:m})]})]})}var B=v.div`
  position: absolute;
  z-index: 10;
  transition: all 0.2s ease;

  ${({$direction:e})=>{if(e.length===2){let t=e.includes(`n`),n=e.includes(`s`),r=e.includes(`w`),i=e.includes(`e`),a=t?`-2px`:`auto`,o=n?`-2px`:`auto`,s=r?`-2px`:`auto`,c=i?`-2px`:`auto`,l=``;return(e===`ne`||e===`sw`)&&(l=`nesw-resize`),(e===`nw`||e===`se`)&&(l=`nwse-resize`),`
        top: ${a};
        bottom: ${o};
        left: ${s};
        right: ${c};
        width: 8px;
        height: 8px;
        background: transparent;
        border: 2px solid transparent;
        border-radius: 50%;
        cursor: ${l};
      `}return e===`n`||e===`s`?`
        ${e===`n`?`top: -4px;`:`bottom: -4px;`}
        left: 0;
        right: 0;
        height: 8px;
        background: transparent;
        border-radius: 2px;
        cursor: ns-resize;
      `:`
        ${e===`w`?`left: -4px;`:`right: -4px;`}
        top: 0;
        bottom: 0;
        width: 8px;
        background: transparent;
        border-radius: 2px;
        cursor: ew-resize;
      `}}
`;function Ie({onResizeStart:e,lineOrientation:t}){return t===`horizontal`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(B,{$direction:`e`,onMouseDown:t=>e(t,`e`)}),(0,L.jsx)(B,{$direction:`w`,onMouseDown:t=>e(t,`w`)})]}):t===`vertical`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(B,{$direction:`n`,onMouseDown:t=>e(t,`n`)}),(0,L.jsx)(B,{$direction:`s`,onMouseDown:t=>e(t,`s`)})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(B,{$direction:`n`,onMouseDown:t=>e(t,`n`)}),(0,L.jsx)(B,{$direction:`s`,onMouseDown:t=>e(t,`s`)}),(0,L.jsx)(B,{$direction:`e`,onMouseDown:t=>e(t,`e`)}),(0,L.jsx)(B,{$direction:`w`,onMouseDown:t=>e(t,`w`)}),(0,L.jsx)(B,{$direction:`ne`,onMouseDown:t=>e(t,`ne`)}),(0,L.jsx)(B,{$direction:`nw`,onMouseDown:t=>e(t,`nw`)}),(0,L.jsx)(B,{$direction:`se`,onMouseDown:t=>e(t,`se`)}),(0,L.jsx)(B,{$direction:`sw`,onMouseDown:t=>e(t,`sw`)})]})}var Le=v.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  width: ${({$width:e})=>e?`${e}px`:`auto`};
  height: ${({$height:e})=>e?`${e}px`:`auto`};
  min-width: ${({$width:e})=>e?`unset`:`200px`};
  background: ${({$backgroundColor:e,theme:t,$editMode:n})=>e||(n?`${t.colors.background}ee`:`${t.colors.background}cc`)};
  border-radius: 8px;
  padding: ${({$padding:e})=>e===void 0?`16px 24px`:`${e}px`};
  cursor: ${({$editMode:e})=>e?`move`:`default`};
  user-select: none;
  opacity: ${({$isDragging:e,$visible:t})=>e?.5:t===!1?.1:1};
  box-shadow: ${({$boxShadow:e})=>e||`0 2px 8px rgba(0, 0, 0, 0.2)`};
  font-size: ${({$fontSize:e})=>e?`${e}px`:`16px`};
  transform-origin: top left;

  /* GPU アクセラレーションを有効化 */
  will-change: width, height, transform;
  backface-visibility: hidden;

  /* 選択された要素のみoutlineを表示 */
  ${({theme:e,$isSelected:t})=>t&&`
    outline: 2px solid ${e.colors.primary[300]};
  `}

  &:hover {
    ${({theme:e,$editMode:t,$isSelected:n})=>t&&!n&&`
      outline: 2px solid ${e.colors.primary[200]};
    `}
  }

  &:focus,
  &:active {
    outline: 2px solid ${({theme:e})=>e.colors.primary[500]};
  }

  &:focus:not(:focus-visible) {
    outline: ${({$isSelected:e,theme:t})=>e?`2px solid ${t.colors.primary[300]}`:`none`};
  }
`,Re=v.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  width: ${({$width:e})=>e?`${e}px`:`auto`};
  height: ${({$height:e})=>e?`${e}px`:`auto`};
  cursor: ${({$editMode:e})=>e?`move`:`default`};
  user-select: none;
  opacity: ${({$isDragging:e,$visible:t})=>e?.5:t===!1?.1:1};
  transform-origin: top left;

  /* Line要素を選択しやすくするためのpadding */
  padding: ${({$orientation:e})=>e===`horizontal`?`8px 0`:`0 8px`};

  /* GPU アクセラレーションを有効化 */
  will-change: width, height, transform;
  backface-visibility: hidden;

  /* 選択された要素のみoutlineを表示 */
  ${({theme:e,$isSelected:t})=>t&&`
    outline: 2px solid ${e.colors.primary[300]};
  `}

  &:hover {
    ${({theme:e,$editMode:t,$isSelected:n})=>t&&!n&&`
      outline: 2px solid ${e.colors.primary[200]};
    `}
  }

  &:focus,
  &:active {
    outline: 2px solid ${({theme:e})=>e.colors.primary[500]};
  }

  &:focus:not(:focus-visible) {
    outline: ${({$isSelected:e,theme:t})=>e?`2px solid ${t.colors.primary[300]}`:`none`};
  }
`;function ze({element:e,editMode:t,isDraggingGroup:n,activeId:r,groupDragDelta:i}){let{selectElement:a,selectedElementId:o,selectedElementIds:s,toggleSelectElement:c,setEditingElement:u,removeElement:d}=I(),{isResizing:f,handleResizeStart:p}=be(e),[m,h]=(0,z.useState)(null),{attributes:_,listeners:v,setNodeRef:y,transform:b,isDragging:x}=g({id:e.id,disabled:!t||f}),S=o===e.id||s.includes(e.id),ee=n&&S&&r!==e.id&&i,C=e.scale&&e.scale!==1?`scale(${e.scale})`:``,w=``;b?w=l.Translate.toString(b)||``:ee&&i&&(w=`translate3d(${i.x}px, ${i.y}px, 0)`);let T=w||C?{transform:`${w}${w&&C?` `:``}${C}`.trim()}:void 0,E=e=>{t&&(e.preventDefault(),e.stopPropagation(),h({x:e.clientX,y:e.clientY}))},D=n=>{t&&(n.stopPropagation(),n.ctrlKey||n.metaKey?c(e.id):a(e.id))},O=e=>{t&&(e.stopPropagation(),k())},k=()=>{a(e.id),u(e.id)},A=()=>{d(e.id)},j=()=>{h(null)},M=e.type===`line`;return(0,L.jsxs)(L.Fragment,{children:[M?(0,L.jsxs)(Re,{ref:y,style:T,$x:e.position.x,$y:e.position.y,$width:e.size?.width,$height:e.size?.height,$isDragging:x,$editMode:t,$isSelected:S,$scale:e.scale,$orientation:e.lineOrientation,$visible:e.visible,onClick:D,onDoubleClick:O,onContextMenu:E,"data-element-id":e.id,...v,..._,children:[(0,L.jsx)(Fe,{element:e}),(0,L.jsx)(Ie,{onResizeStart:p,lineOrientation:e.lineOrientation})]}):(0,L.jsxs)(Le,{ref:y,style:T,$x:e.position.x,$y:e.position.y,$width:e.size?.width,$height:e.size?.height,$isDragging:x,$editMode:t,$isSelected:S,$fontSize:e.fontSize,$backgroundColor:e.backgroundColor,$scale:e.scale,$boxShadow:e.boxShadow,$visible:e.visible,$padding:e.padding,onClick:D,onDoubleClick:O,onContextMenu:E,"data-element-id":e.id,...v,..._,children:[(0,L.jsx)(Fe,{element:e}),(0,L.jsx)(Ie,{onResizeStart:p})]}),m&&(0,L.jsx)(Ce,{x:m.x,y:m.y,onEdit:k,onDelete:A,onClose:j})]})}var Be=v.div`
  position: relative;
  width: 100%;
  height: calc(100dvh - 200px);
  overflow: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  box-shadow: ${({theme:e})=>e.shadows.lg};

  /* スクロールバーのカスタマイズ */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.surface};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
    border-radius: 4px;

    &:hover {
      background: ${({theme:e})=>e.colors.textSecondary};
    }
  }

  /* Firefox用 */
  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>e.colors.border} ${({theme:e})=>e.colors.surface};
`,Ve=v.div`
  position: relative;
  width: ${({$width:e})=>e}px;
  height: ${({$height:e})=>e}px;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  flex-shrink: 0;
`;function He({children:e,onClick:t,containerRef:n,width:r,height:a}){let{setNodeRef:o}=i({id:`obs-container`}),s=(0,z.useRef)(null);return(0,z.useEffect)(()=>{let e=s.current;if(!e)return;let t=!1,n=0,r=0,i=0,a=0,o=o=>{o.target.closest(`.obs-container > *`)||(t=!0,n=o.pageX-e.offsetLeft,r=o.pageY-e.offsetTop,i=e.scrollLeft,a=e.scrollTop,e.style.cursor=`grabbing`,e.style.userSelect=`none`)},c=o=>{if(!t)return;o.preventDefault();let s=o.pageX-e.offsetLeft,c=o.pageY-e.offsetTop,l=(s-n)*1.5,u=(c-r)*1.5;e.scrollLeft=i-l,e.scrollTop=a-u},l=()=>{t=!1,e.style.cursor=`grab`,e.style.userSelect=``},u=()=>{t=!1,e.style.cursor=`grab`,e.style.userSelect=``};return e.addEventListener(`mousedown`,o),e.addEventListener(`mousemove`,c),e.addEventListener(`mouseup`,l),e.addEventListener(`mouseleave`,u),e.style.cursor=`grab`,()=>{e.removeEventListener(`mousedown`,o),e.removeEventListener(`mousemove`,c),e.removeEventListener(`mouseup`,l),e.removeEventListener(`mouseleave`,u)}},[]),(0,L.jsx)(Be,{ref:s,children:(0,L.jsx)(Ve,{ref:e=>{o(e),n.current=e},className:`obs-container`,onClick:t,$width:r,$height:a,children:e})})}var Ue=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,V=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,H=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,We=v.div`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,Ge=v.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,Ke=v.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,qe=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Je=v.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(to right, transparent 0%, currentColor 100%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,Ye=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function Xe({element:e,onUpdate:t,getBackgroundColorParts:n,hexToRgba:r}){let{t:i}=C();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:i(`obs.editPanel.text`)}),(0,L.jsx)(D,{value:e.text||``,onChange:e=>t({text:e.target.value}),placeholder:i(`obs.plainText.placeholder`),rows:3})]}),(0,L.jsxs)(Ue,{children:[(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:i(`obs.editPanel.textColor`)}),(0,L.jsx)(Ke,{type:`color`,value:e.textColor||`#ffffff`,onChange:e=>t({textColor:e.target.value})})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:i(`obs.editPanel.fontSize`)}),(0,L.jsx)(O,{type:`number`,value:e.fontSize||16,onChange:e=>t({fontSize:parseInt(e.target.value,10)}),min:`8`,max:`200`})]})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:i(`obs.editPanel.textAlign`)}),(0,L.jsxs)(We,{children:[(0,L.jsxs)(Ge,{children:[(0,L.jsx)(S,{checked:e.textAlign===`left`||!e.textAlign,onChange:()=>t({textAlign:`left`})}),i(`obs.editPanel.alignLeft`)]}),(0,L.jsxs)(Ge,{children:[(0,L.jsx)(S,{checked:e.textAlign===`center`,onChange:()=>t({textAlign:`center`})}),i(`obs.editPanel.alignCenter`)]}),(0,L.jsxs)(Ge,{children:[(0,L.jsx)(S,{checked:e.textAlign===`right`,onChange:()=>t({textAlign:`right`})}),i(`obs.editPanel.alignRight`)]})]})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:i(`obs.editPanel.backgroundColor`)}),(0,L.jsxs)(qe,{children:[(0,L.jsx)(Ke,{type:`color`,value:n().hex,onChange:e=>{let i=n().alpha;t({backgroundColor:r(e.target.value,i)})}}),(0,L.jsxs)(Ye,{children:[(0,L.jsx)(`span`,{children:i(`obs.editPanel.opacity`)}),(0,L.jsxs)(`span`,{children:[Math.round(n().alpha*100),`%`]})]}),(0,L.jsx)(Je,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:n().alpha,onChange:e=>{let{hex:i}=n();t({backgroundColor:r(i,parseFloat(e.target.value))})}})]})]})]})}var Ze=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,U=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,W=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Qe=v.div`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,$e=v.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,et=v.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,tt=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,nt=v.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(to right, transparent 0%, currentColor 100%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,rt=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,it=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: ${({theme:e})=>e.spacing[1]};
  line-height: 1.4;
`,at=v.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
  }

  svg {
    transition: transform 0.2s;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`,ot=v.div`
  max-height: ${({$isOpen:e})=>e?`500px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,st=v.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
`,G=v.div`
  display: flex;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[1]} 0;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
  padding: ${({theme:e})=>e.spacing[2]};
  margin: ${({theme:e})=>e.spacing[1]} 0;

  &:hover {
    background: ${({theme:e})=>e.colors.background};
  }

  code {
    font-family: monospace;
    background: ${({theme:e})=>e.colors.background};
    padding: 2px 6px;
    border-radius: 4px;
    color: ${({theme:e})=>e.colors.primary[500]};
  }
`;function ct({element:e,onUpdate:t,getBackgroundColorParts:n,hexToRgba:r}){let{t:i}=C(),[a,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(``),d=async e=>{try{await navigator.clipboard.writeText(e),u(e),c(!0)}catch(e){console.error(`Failed to copy variable:`,e)}};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(U,{children:[(0,L.jsx)(W,{children:i(`obs.editPanel.text`)}),(0,L.jsx)(D,{value:e.text||``,onChange:e=>t({text:e.target.value}),placeholder:`{winCount}勝 {loseCount}敗 勝率{winRate}%`,rows:3}),(0,L.jsxs)(it,{children:[`変数を使用できます。例: `,`{winCount}`,` → 勝利数`]})]}),(0,L.jsxs)(U,{children:[(0,L.jsxs)(at,{type:`button`,onClick:()=>o(!a),"aria-expanded":a,children:[(0,L.jsx)(`span`,{children:`使用可能な変数`}),(0,L.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`currentColor`,children:(0,L.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,L.jsx)(ot,{$isOpen:a,children:(0,L.jsxs)(st,{children:[(0,L.jsxs)(G,{onClick:()=>d(`{winCount}`),children:[(0,L.jsx)(`code`,{children:`{winCount}`}),(0,L.jsx)(`span`,{children:`勝利数`})]}),(0,L.jsxs)(G,{onClick:()=>d(`{loseCount}`),children:[(0,L.jsx)(`code`,{children:`{loseCount}`}),(0,L.jsx)(`span`,{children:`敗北数`})]}),(0,L.jsxs)(G,{onClick:()=>d(`{winRate}`),children:[(0,L.jsx)(`code`,{children:`{winRate}`}),(0,L.jsx)(`span`,{children:`勝率（%）`})]}),(0,L.jsxs)(G,{onClick:()=>d(`{totalMatches}`),children:[(0,L.jsx)(`code`,{children:`{totalMatches}`}),(0,L.jsx)(`span`,{children:`総試合数`})]})]})})]}),(0,L.jsxs)(Ze,{children:[(0,L.jsxs)(U,{children:[(0,L.jsx)(W,{children:i(`obs.editPanel.textColor`)}),(0,L.jsx)(et,{type:`color`,value:e.textColor||`#ffffff`,onChange:e=>t({textColor:e.target.value})})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)(W,{children:i(`obs.editPanel.fontSize`)}),(0,L.jsx)(O,{type:`number`,value:e.fontSize||16,onChange:e=>t({fontSize:parseInt(e.target.value,10)}),min:`8`,max:`200`})]})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)(W,{children:i(`obs.editPanel.textAlign`)}),(0,L.jsxs)(Qe,{children:[(0,L.jsxs)($e,{children:[(0,L.jsx)(S,{checked:e.textAlign===`left`||!e.textAlign,onChange:()=>t({textAlign:`left`})}),i(`obs.editPanel.alignLeft`)]}),(0,L.jsxs)($e,{children:[(0,L.jsx)(S,{checked:e.textAlign===`center`,onChange:()=>t({textAlign:`center`})}),i(`obs.editPanel.alignCenter`)]}),(0,L.jsxs)($e,{children:[(0,L.jsx)(S,{checked:e.textAlign===`right`,onChange:()=>t({textAlign:`right`})}),i(`obs.editPanel.alignRight`)]})]})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)(W,{children:i(`obs.editPanel.backgroundColor`)}),(0,L.jsxs)(tt,{children:[(0,L.jsx)(et,{type:`color`,value:n().hex,onChange:e=>{let i=n().alpha;t({backgroundColor:r(e.target.value,i)})}}),(0,L.jsxs)(rt,{children:[(0,L.jsx)(`span`,{children:i(`obs.editPanel.opacity`)}),(0,L.jsxs)(`span`,{children:[Math.round(n().alpha*100),`%`]})]}),(0,L.jsx)(nt,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:n().alpha,onChange:e=>{let{hex:i}=n();t({backgroundColor:r(i,parseFloat(e.target.value))})}})]})]}),(0,L.jsx)(M,{open:s,message:`${l} をコピーしました`,autoHideDuration:2e3,onClose:()=>c(!1)})]})}var lt=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ut=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,dt=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,ft=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,pt=v.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,mt=v.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,ht=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,gt=v.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(to right, transparent 0%, currentColor 100%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,_t=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function vt({element:e,onUpdate:t,getBackgroundColorParts:n,hexToRgba:r,getElementName:i}){let{t:a}=C(),o=[`winCount`,`loseCount`,`winRate`,`totalMatches`],s=n=>{let r=e.comboItems||[],i=r.includes(n)?r.filter(e=>e!==n):[...r,n];t({comboItems:i})};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(ut,{children:[(0,L.jsx)(dt,{children:a(`obs.editPanel.comboItems`)}),(0,L.jsx)(ft,{children:o.map(t=>(0,L.jsxs)(pt,{children:[(0,L.jsx)(S,{checked:(e.comboItems||[]).includes(t),onChange:()=>s(t)}),i(t)]},t))})]}),(0,L.jsxs)(lt,{children:[(0,L.jsxs)(ut,{children:[(0,L.jsx)(dt,{children:a(`obs.editPanel.fontSize`)}),(0,L.jsx)(O,{type:`number`,value:e.fontSize||16,onChange:e=>t({fontSize:parseInt(e.target.value,10)}),min:`8`,max:`200`})]}),(0,L.jsxs)(ut,{children:[(0,L.jsx)(dt,{children:a(`obs.editPanel.backgroundColor`)}),(0,L.jsxs)(ht,{children:[(0,L.jsx)(mt,{type:`color`,value:n().hex,onChange:e=>{let i=n().alpha;t({backgroundColor:r(e.target.value,i)})}}),(0,L.jsxs)(_t,{children:[(0,L.jsx)(`span`,{children:a(`obs.editPanel.opacity`)}),(0,L.jsxs)(`span`,{children:[Math.round(n().alpha*100),`%`]})]}),(0,L.jsx)(gt,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:n().alpha,onChange:e=>{let{hex:i}=n();t({backgroundColor:r(i,parseFloat(e.target.value))})}})]})]})]})]})}var yt=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bt=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,xt=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,St=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,Ct=v.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
`,wt=v.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;function Tt({element:e,onUpdate:t}){let{t:n}=C(),r=n=>{let r=e.size?.width||200,i=e.size?.height||2;t({lineOrientation:n,size:{width:i,height:r}})};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(yt,{children:[(0,L.jsxs)(bt,{children:[(0,L.jsx)(xt,{children:n(`obs.editPanel.lineOrientation`)}),(0,L.jsxs)(St,{children:[(0,L.jsxs)(Ct,{children:[(0,L.jsx)(S,{checked:e.lineOrientation===`horizontal`,onChange:()=>r(`horizontal`)}),n(`obs.editPanel.horizontal`)]}),(0,L.jsxs)(Ct,{children:[(0,L.jsx)(S,{checked:e.lineOrientation===`vertical`,onChange:()=>r(`vertical`)}),n(`obs.editPanel.vertical`)]})]})]}),(0,L.jsxs)(bt,{children:[(0,L.jsx)(xt,{children:n(`obs.editPanel.lineThickness`)}),(0,L.jsx)(O,{type:`number`,value:e.lineThickness||2,onChange:e=>t({lineThickness:parseInt(e.target.value,10)}),min:`1`,max:`50`})]})]}),(0,L.jsxs)(bt,{children:[(0,L.jsx)(xt,{children:n(`obs.editPanel.lineColor`)}),(0,L.jsx)(wt,{type:`color`,value:e.lineColor||`#ffffff`,onChange:e=>t({lineColor:e.target.value})})]})]})}var Et=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,K=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,q=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Dt=v.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;function Ot({element:e,onUpdate:t}){let{t:n}=C();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Et,{children:[(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:n(`obs.editPanel.rectangleFillColor`)}),(0,L.jsx)(Dt,{type:`color`,value:e.rectangleFillColor||`#000000`,onChange:e=>t({rectangleFillColor:e.target.value})})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:n(`obs.editPanel.rectangleBorderColor`)}),(0,L.jsx)(Dt,{type:`color`,value:e.rectangleBorderColor||`#ffffff`,onChange:e=>t({rectangleBorderColor:e.target.value})})]})]}),(0,L.jsxs)(Et,{children:[(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:n(`obs.editPanel.rectangleBorderWidth`)}),(0,L.jsx)(O,{type:`number`,value:e.rectangleBorderWidth||2,onChange:e=>t({rectangleBorderWidth:parseInt(e.target.value,10)}),min:`0`,max:`50`})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:n(`obs.editPanel.rectangleBorderRadius`)}),(0,L.jsx)(O,{type:`number`,value:e.rectangleBorderRadius||0,onChange:e=>t({rectangleBorderRadius:parseInt(e.target.value,10)}),min:`0`,max:`100`})]})]})]})}var kt=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,At=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,jt=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Mt=v.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,Nt=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pt=v.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(to right, transparent 0%, currentColor 100%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,Ft=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function It({element:e,onUpdate:t,getBackgroundColorParts:n,hexToRgba:r}){let{t:i}=C();return(0,L.jsxs)(kt,{children:[(0,L.jsxs)(At,{children:[(0,L.jsx)(jt,{children:i(`obs.editPanel.fontSize`)}),(0,L.jsx)(O,{type:`number`,value:e.fontSize||16,onChange:e=>t({fontSize:parseInt(e.target.value,10)}),min:`8`,max:`200`})]}),(0,L.jsxs)(At,{children:[(0,L.jsx)(jt,{children:i(`obs.editPanel.backgroundColor`)}),(0,L.jsxs)(Nt,{children:[(0,L.jsx)(Mt,{type:`color`,value:n().hex,onChange:e=>{let i=n().alpha;t({backgroundColor:r(e.target.value,i)})}}),(0,L.jsxs)(Ft,{children:[(0,L.jsx)(`span`,{children:i(`obs.editPanel.opacity`)}),(0,L.jsxs)(`span`,{children:[Math.round(n().alpha*100),`%`]})]}),(0,L.jsx)(Pt,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:n().alpha,onChange:e=>{let{hex:i}=n();t({backgroundColor:r(i,parseFloat(e.target.value))})}})]})]})]})}var Lt=e(t()),Rt=v.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  max-height: 80vh;
  background: ${({theme:e})=>e.colors.background};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  z-index: 999;
  display: ${({$isOpen:e})=>e?`flex`:`none`};
  flex-direction: column;
  opacity: ${({$isOpen:e})=>e?1:0};
  transition: opacity ${({theme:e})=>e.transitions.base};
`,zt=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.lg} ${({theme:e})=>e.borderRadius.lg} 0 0;
  cursor: move;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`,Bt=v.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  cursor: text;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: background ${({theme:e})=>e.transitions.base};

  &:hover {
    background: ${({theme:e})=>e.colors.surface};
  }
`,Vt=v(O)`
  font-size: 1.125rem;
  font-weight: 600;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  margin: 0;
  height: auto;
`,Ht=v(A)`
  padding: 0;
`,Ut=v.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  overflow-y: auto;
`,Wt=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,J=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Y=v.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,Gt=v.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,X=(e,t)=>{let n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`rgba(${n}, ${r}, ${i}, ${t})`},Kt=e=>{let t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!t)return{hex:`#1f2937`,alpha:1};let n=parseInt(t[1]).toString(16).padStart(2,`0`),r=parseInt(t[2]).toString(16).padStart(2,`0`),i=parseInt(t[3]).toString(16).padStart(2,`0`),a=t[4]?parseFloat(t[4]):1;return{hex:`#${n}${r}${i}`,alpha:a}};function qt(){let{t:e}=C(),{editingElementId:t,elements:n,setEditingElement:r,updateElement:i}=I(),a=(0,z.useRef)(null),o=(0,z.useRef)(null),[s,c]=(0,z.useState)({x:0,y:0}),[l,u]=(0,z.useState)(!1),[d,f]=(0,z.useState)({x:0,y:0}),[p,m]=(0,z.useState)(!1),h=n.find(e=>e.id===t),g=t!==null,_=(0,z.useCallback)(()=>{r(null)},[r]),v=(0,z.useCallback)(e=>{e.stopPropagation(),m(!0)},[]),y=(0,z.useCallback)(()=>{m(!1)},[]),b=(0,z.useCallback)(e=>{(e.key===`Enter`||e.key===`Escape`)&&(m(!1),e.currentTarget.blur())},[]);(0,z.useEffect)(()=>{p&&o.current&&(o.current.focus(),o.current.select())},[p]);let x=(0,z.useCallback)(e=>{e.target!==e.currentTarget&&!e.target.closest(`h3`)||p||(u(!0),f({x:e.clientX-s.x,y:e.clientY-s.y}))},[s,p]);(0,z.useEffect)(()=>{if(!l)return;let e=e=>{c({x:e.clientX-d.x,y:e.clientY-d.y})},t=()=>{u(!1)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[l,d]),(0,z.useEffect)(()=>{let e=e=>{if(!g||l)return;let t=e.target;a.current&&!a.current.contains(t)&&_()};return g&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[g,l,_]);let S=()=>h?.backgroundColor?Kt(h.backgroundColor):{hex:`#1f2937`,alpha:1},ee=()=>{!t||!h||i(t,{visible:!h.visible})},w=(e,n)=>{if(!t||!h)return;let r=parseFloat(n);isNaN(r)||i(t,{position:{...h.position,[e]:r}})},E=t=>{switch(t){case`winCount`:return e(`obs.winCount`);case`loseCount`:return e(`obs.loseCount`);case`winRate`:return e(`obs.winRate`);case`totalMatches`:return e(`obs.totalMatches`);case`plainText`:return e(`obs.elementType.plainText`);case`variableText`:return e(`obs.elementType.variableText`);case`statsCombo`:return e(`obs.elementType.statsCombo`);case`line`:return e(`obs.elementType.line`);case`todayTrendChart`:return e(`obs.elementType.todayTrendChart`);default:return``}},D={transform:`translate(calc(-50% + ${s.x}px), calc(-50% + ${s.y}px))`},k=(0,L.jsxs)(Rt,{ref:a,$isOpen:g,style:D,children:[(0,L.jsxs)(zt,{onMouseDown:x,children:[p&&h?(0,L.jsx)(Vt,{ref:o,type:`text`,value:h.name||``,onChange:e=>i(t,{name:e.target.value}),onBlur:y,onKeyDown:b,placeholder:E(h.type),onClick:e=>e.stopPropagation()}):(0,L.jsx)(Bt,{onClick:v,children:h?h.name||E(h.type):e(`obs.editPanel.title`)}),(0,L.jsx)(Ht,{variant:`ghost`,size:`sm`,onClick:_,children:(0,L.jsx)(N,{name:`close`})})]}),(0,L.jsx)(Ut,{children:h?(0,L.jsxs)(L.Fragment,{children:[h.type===`plainText`&&(0,L.jsx)(Xe,{element:h,onUpdate:e=>i(t,e),getBackgroundColorParts:S,hexToRgba:X}),h.type===`variableText`&&(0,L.jsx)(ct,{element:h,onUpdate:e=>i(t,e),getBackgroundColorParts:S,hexToRgba:X}),h.type===`statsCombo`&&(0,L.jsx)(vt,{element:h,onUpdate:e=>i(t,e),getBackgroundColorParts:S,hexToRgba:X,getElementName:E}),h.type===`line`&&(0,L.jsx)(Tt,{element:h,onUpdate:e=>i(t,e)}),h.type===`rectangle`&&(0,L.jsx)(Ot,{element:h,onUpdate:e=>i(t,e)}),h.type!==`plainText`&&h.type!==`variableText`&&h.type!==`statsCombo`&&h.type!==`line`&&h.type!==`rectangle`&&(0,L.jsx)(It,{element:h,onUpdate:e=>i(t,e),getBackgroundColorParts:S,hexToRgba:X}),(0,L.jsxs)(Wt,{children:[(0,L.jsxs)(J,{children:[(0,L.jsx)(Y,{children:e(`obs.editPanel.positionX`)}),(0,L.jsx)(O,{type:`number`,value:Math.round(h.position.x),onChange:e=>w(`x`,e.target.value),step:`1`})]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(Y,{children:e(`obs.editPanel.positionY`)}),(0,L.jsx)(O,{type:`number`,value:Math.round(h.position.y),onChange:e=>w(`y`,e.target.value),step:`1`})]})]}),(0,L.jsxs)(Wt,{children:[(0,L.jsxs)(J,{children:[(0,L.jsx)(Y,{children:e(`obs.editPanel.scale`)}),(0,L.jsx)(O,{type:`number`,value:h.scale||1,onChange:e=>{let n=parseFloat(e.target.value);isNaN(n)||i(t,{scale:n})},min:`0.1`,max:`5`,step:`0.1`})]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(Y,{children:e(`obs.editPanel.visible`)}),(0,L.jsx)(T,{checked:h.visible,onChange:ee,label:e(`obs.editPanel.visible`)})]})]}),h.type!==`line`&&(0,L.jsxs)(Wt,{children:[(0,L.jsxs)(J,{children:[(0,L.jsx)(Y,{children:e(`obs.editPanel.padding`)}),(0,L.jsx)(O,{type:`number`,value:h.padding===void 0?16:h.padding,onChange:e=>{let n=parseInt(e.target.value,10);isNaN(n)||i(t,{padding:n})},min:`0`,max:`100`,step:`1`})]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(Y,{children:e(`obs.editPanel.boxShadow`)}),(0,L.jsx)(O,{type:`text`,value:h.boxShadow||``,onChange:e=>i(t,{boxShadow:e.target.value}),placeholder:`0 2px 8px rgba(0, 0, 0, 0.2)`})]})]})]}):(0,L.jsx)(Gt,{children:e(`obs.editPanel.selectElement`)})})]});return(0,Lt.createPortal)(k,document.body)}var Jt=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  height: fit-content;
`,Yt=v.h3`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Xt=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  max-height: 410px;
  overflow-y: auto;
  overflow-x: hidden;
`,Zt=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e,$isSelected:t})=>e.colors.surface};
  border: 1px solid ${({theme:e,$isSelected:t})=>t?e.colors.primary[400]:e.colors.border};
  border-left: ${({theme:e,$isSelected:t})=>t?`3px solid ${e.colors.primary[500]}`:`3px solid transparent`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  opacity: ${({$isVisible:e})=>e?1:.5};
  position: relative;

  ${({theme:e,$isSelected:t})=>t&&`
    box-shadow: 0 0 0 1px ${e.colors.primary[200]};
  `}

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
    border-color: ${({theme:e,$isSelected:t})=>t?e.colors.primary[400]:e.colors.primary[200]};

    ${({theme:e,$isSelected:t})=>!t&&`
      border-left-color: ${e.colors.primary[300]};
    `}
  }
`,Qt=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,$t=v.div`
  font-size: 0.875rem;
  font-weight: ${({$isSelected:e})=>e?600:500};
  color: ${({theme:e,$isSelected:t})=>t?e.colors.primary[700]:e.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,en=v.div`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,tn=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[1]};
`,nn=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  color: ${({theme:e})=>e.colors.textSecondary};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    background: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,rn=v.div`
  padding: ${({theme:e})=>e.spacing[4]};
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`,an=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: grab;
  color: ${({theme:e})=>e.colors.textSecondary};

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: "⋮⋮";
    font-size: 14px;
    letter-spacing: -2px;
  }
`;function on({element:e,isSelected:t,onSelect:n,onDelete:r,getElementName:i,t:a}){let{attributes:o,listeners:s,setNodeRef:c,transform:d,transition:f,isDragging:p}=u({id:e.id}),m={transform:l.Transform.toString(d),transition:f,opacity:p?.5:1};return(0,L.jsxs)(Zt,{ref:c,style:m,$isSelected:t,$isVisible:e.visible,onClick:n,children:[(0,L.jsx)(an,{...o,...s,onClick:e=>e.stopPropagation()}),(0,L.jsxs)(Qt,{children:[(0,L.jsx)($t,{$isSelected:t,children:i(e)}),(0,L.jsxs)(en,{children:[`X: `,Math.round(e.position.x),`, Y: `,Math.round(e.position.y)]})]}),(0,L.jsx)(tn,{children:(0,L.jsx)(nn,{onClick:r,title:a(`common.delete`),children:(0,L.jsx)(N,{name:`delete`,size:16})})})]})}function sn(){let{t:e}=C(),{elements:t,removeElement:n,selectElement:r,selectedElementId:i,setEditingElement:s,moveElement:l}=I(),u=f(a(m,{activationConstraint:{distance:8}})),d=(e,t)=>{e.stopPropagation(),n(t)},g=e=>{let{active:n,over:r}=e;if(r&&n.id!==r.id){let e=t.findIndex(e=>e.id===n.id),i=t.findIndex(e=>e.id===r.id);e!==-1&&i!==-1&&l(n.id,i)}},_=t=>{if(t.name)return t.name;switch(t.type){case`winCount`:return e(`obs.winCount`);case`loseCount`:return e(`obs.loseCount`);case`winRate`:return e(`obs.winRate`);case`totalMatches`:return e(`obs.totalMatches`);case`plainText`:return t.text||e(`obs.elementType.plainText`);case`variableText`:return t.text||e(`obs.elementType.variableText`);case`statsCombo`:return e(`obs.elementType.statsCombo`);case`line`:return e(`obs.elementType.line`);case`todayTrendChart`:return e(`obs.elementType.todayTrendChart`);default:return`Unknown`}};return(0,L.jsxs)(Jt,{children:[(0,L.jsx)(Yt,{children:e(`obs.layerPanel.layers`)}),t.length===0?(0,L.jsx)(rn,{children:e(`obs.layerPanel.noLayers`)}):(0,L.jsx)(o,{sensors:u,collisionDetection:c,onDragEnd:g,children:(0,L.jsx)(h,{items:t.map(e=>e.id),strategy:p,children:(0,L.jsx)(Xt,{children:t.map((t,n)=>(0,L.jsx)(on,{element:t,index:n,isSelected:i===t.id,onSelect:()=>{r(t.id),s(t.id)},onDelete:e=>d(e,t.id),getElementName:_,t:e},t.id))})})})]})}var cn=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${({theme:e})=>e.colors.background};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,ln=v.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,un=v.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,dn=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`,fn=v.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.025em;
`,pn=v.input`
  padding: 0.5rem 0.75rem;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  font-family: inherit;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary}33;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`,mn=v.span`
  font-size: 1.25rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: 1.25rem;
`,hn=v.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.4;
`;const gn=()=>{let{t:e}=C(),{screenSize:t,setScreenSize:n}=I();return(0,L.jsxs)(cn,{children:[(0,L.jsx)(ln,{children:e(`pages.obs.screenSize.title`)}),(0,L.jsxs)(un,{children:[(0,L.jsxs)(dn,{children:[(0,L.jsx)(fn,{children:e(`pages.obs.screenSize.width`)}),(0,L.jsx)(pn,{type:`number`,value:t.width,onChange:e=>{let r=parseInt(e.target.value,10);!isNaN(r)&&r>0&&n({width:r,height:t.height,preset:`custom`})},min:640,max:7680,step:1})]}),(0,L.jsx)(mn,{children:`×`}),(0,L.jsxs)(dn,{children:[(0,L.jsx)(fn,{children:e(`pages.obs.screenSize.height`)}),(0,L.jsx)(pn,{type:`number`,value:t.height,onChange:e=>{let r=parseInt(e.target.value,10);!isNaN(r)&&r>0&&n({width:t.width,height:r,preset:`custom`})},min:360,max:4320,step:1})]})]}),(0,L.jsx)(hn,{children:e(`pages.obs.screenSize.info`)})]})};var _n=v.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: 0;
  height: 100%;
  width: 2px;
  background: ${({theme:e})=>e.colors.primary[500]};
  box-shadow: 0 0 8px ${({theme:e})=>e.colors.primary[500]};
  pointer-events: none;
  z-index: 1000;
  animation: fadeIn 0.15s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,vn=v.div`
  position: absolute;
  top: ${({$y:e})=>e}px;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${({theme:e})=>e.colors.primary[500]};
  box-shadow: 0 0 8px ${({theme:e})=>e.colors.primary[500]};
  pointer-events: none;
  z-index: 1000;
  animation: fadeIn 0.15s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,yn=v.div`
  position: absolute;
  background: ${({theme:e})=>e.colors.primary[300]};
  pointer-events: none;
  z-index: 1001;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${({theme:e})=>e.colors.primary[500]};
  }

  ${({$vertical:e})=>e?`
    width: 1px;
    &::before, &::after {
      width: 8px;
      height: 1px;
      left: -4px;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
  `:`
    height: 1px;
    &::before, &::after {
      width: 1px;
      height: 8px;
      top: -4px;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  `}
`,bn=v.div`
  position: absolute;
  background: ${({theme:e})=>e.colors.primary[500]};
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  pointer-events: none;
  z-index: 1002;
  white-space: nowrap;
`;const xn=(0,z.memo)(({x:e,y:t,xDistance:n,yDistance:r})=>(0,L.jsxs)(L.Fragment,{children:[e!==void 0&&(0,L.jsx)(_n,{$x:e}),t!==void 0&&(0,L.jsx)(vn,{$y:t}),n&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yn,{style:{left:`${n.from}px`,top:`${n.y}px`,width:`${Math.abs(n.to-n.from)}px`}}),(0,L.jsxs)(bn,{style:{left:`${n.from+Math.abs(n.to-n.from)/2-20}px`,top:`${n.y-20}px`},children:[Math.abs(n.to-n.from).toFixed(1),`px`]})]}),r&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yn,{$vertical:!0,style:{left:`${r.x}px`,top:`${r.from}px`,height:`${Math.abs(r.to-r.from)}px`}}),(0,L.jsxs)(bn,{style:{left:`${r.x+10}px`,top:`${r.from+Math.abs(r.to-r.from)/2-10}px`},children:[Math.abs(r.to-r.from).toFixed(1),`px`]})]})]}));xn.displayName=`SnapGuide`;const Sn=[{metadata:{id:`minimal-corner`,name:`Corner Stats`,nameKey:`obs.templates.minimalCorner.name`,description:`Clean corner display with essential stats`,descriptionKey:`obs.templates.minimalCorner.description`,category:`minimal`,tags:[`simple`,`clean`,`corner`]},screenSize:{width:250,height:100,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`horizontal`,lineThickness:2,lineColor:`#10b981`,size:{width:200,height:2}},{type:`variableText`,position:{x:10,y:20},visible:!0,fontSize:16,text:`🏆 {winCount}勝 {loseCount}敗
📊 勝率 {winRate}%`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.85)`,padding:12,boxShadow:`0 4px 16px rgba(16, 185, 129, 0.4)`}]},{metadata:{id:`minimal-topbar`,name:`Top Bar`,nameKey:`obs.templates.minimalTopbar.name`,description:`Horizontal top bar layout`,descriptionKey:`obs.templates.minimalTopbar.description`,category:`minimal`,tags:[`simple`,`horizontal`,`top`]},screenSize:{width:700,height:80,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`horizontal`,lineThickness:3,lineColor:`#10b981`,size:{width:400,height:3}},{type:`variableText`,position:{x:10,y:20},visible:!0,fontSize:18,text:`🎮 戦績: {winCount}W-{loseCount}L ({winRate}%)  •  Total: {totalMatches}`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.85)`,padding:12,boxShadow:`0 4px 16px rgba(0, 0, 0, 0.7)`}]},{metadata:{id:`minimal-side`,name:`Side Panel`,nameKey:`obs.templates.minimalSide.name`,description:`Vertical side panel`,descriptionKey:`obs.templates.minimalSide.description`,category:`minimal`,tags:[`simple`,`vertical`,`side`]},screenSize:{width:180,height:250,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`vertical`,lineThickness:3,lineColor:`#8b5cf6`,size:{width:3,height:200}},{type:`variableText`,position:{x:20,y:10},visible:!0,fontSize:16,text:`🏆 勝利
{winCount}

💀 敗北
{loseCount}

� 勝率
{winRate}%`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.85)`,padding:14,boxShadow:`0 4px 16px rgba(0, 0, 0, 0.7)`}]}],Cn=[{metadata:{id:`detailed-dashboard`,name:`Dashboard`,nameKey:`obs.templates.detailedDashboard.name`,description:`Complete stats dashboard`,descriptionKey:`obs.templates.detailedDashboard.description`,category:`detailed`,tags:[`complete`,`dashboard`,`stats`]},screenSize:{width:480,height:540,preset:`custom`},elements:[{type:`variableText`,position:{x:10,y:10},visible:!0,fontSize:22,text:`📊 今日の戦績ダッシュボード`,textColor:`#3b82f6`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:18,boxShadow:`0 6px 20px rgba(0, 0, 0, 0.8)`},{type:`variableText`,position:{x:10,y:80},visible:!0,fontSize:16,text:`🏆 勝利数: {winCount}  |  💀 敗北数: {loseCount}
📈 勝率: {winRate}%  |  🎮 総試合: {totalMatches}`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.85)`,padding:18,boxShadow:`0 4px 16px rgba(0, 0, 0, 0.7)`},{type:`todayTrendChart`,position:{x:10,y:170},visible:!0,size:{width:450,height:350}}]},{metadata:{id:`detailed-split`,name:`Split View`,nameKey:`obs.templates.detailedSplit.name`,description:`Stats and chart side by side`,descriptionKey:`obs.templates.detailedSplit.description`,category:`detailed`,tags:[`split`,`chart`,`detailed`]},screenSize:{width:580,height:540,preset:`custom`},elements:[{type:`variableText`,position:{x:10,y:10},visible:!0,fontSize:20,text:`� 戦績トラッキング`,textColor:`#10b981`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:20,boxShadow:`0 6px 20px rgba(0, 0, 0, 0.8)`},{type:`todayTrendChart`,position:{x:10,y:85},visible:!0,size:{width:550,height:350}},{type:`variableText`,position:{x:10,y:455},visible:!0,fontSize:16,text:`🏆 {winCount}勝  💀 {loseCount}敗
📊 勝率 {winRate}%  🎮 {totalMatches}試合`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.85)`,padding:18,boxShadow:`0 4px 16px rgba(0, 0, 0, 0.7)`}]}],wn=[{metadata:{id:`streaming-ticker`,name:`Bottom Ticker`,nameKey:`obs.templates.streamingTicker.name`,description:`News ticker style at bottom`,descriptionKey:`obs.templates.streamingTicker.description`,category:`streaming`,tags:[`ticker`,`bottom`,`streaming`]},screenSize:{width:1920,height:80,preset:`custom`},elements:[{type:`line`,position:{x:0,y:0},visible:!0,lineOrientation:`horizontal`,lineThickness:5,lineColor:`#ef4444`,size:{width:1920,height:5}},{type:`variableText`,position:{x:10,y:10},visible:!0,fontSize:18,text:`🔴 LIVE  |  🏆 {winCount}勝 {loseCount}敗  |  📊 勝率 {winRate}%  |  🎮 総試合 {totalMatches}`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:12,boxShadow:`0 -8px 24px rgba(0, 0, 0, 0.8)`}]},{metadata:{id:`streaming-corner-overlay`,name:`Corner Overlay`,nameKey:`obs.templates.streamingCornerOverlay.name`,description:`Non-intrusive corner overlay`,descriptionKey:`obs.templates.streamingCornerOverlay.description`,category:`streaming`,tags:[`corner`,`overlay`,`minimal`]},screenSize:{width:250,height:180,preset:`custom`},elements:[{type:`line`,position:{x:1720,y:15},visible:!0,lineOrientation:`vertical`,lineThickness:5,lineColor:`#8b5cf6`,size:{width:5,height:110}},{type:`variableText`,position:{x:1738,y:20},visible:!0,fontSize:16,text:`🏆 W {winCount}
💀 L {loseCount}
📈 {winRate}%`,textColor:`#ffffff`,textAlign:`right`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:12,boxShadow:`0 6px 20px rgba(139, 92, 246, 0.6)`},{type:`line`,position:{x:1720,y:130},visible:!0,lineOrientation:`horizontal`,lineThickness:4,lineColor:`#8b5cf6`,size:{width:180,height:4}}]},{metadata:{id:`streaming-title-safe`,name:`Title Safe Zone`,nameKey:`obs.templates.streamingTitleSafe.name`,description:`Centered in title-safe area`,descriptionKey:`obs.templates.streamingTitleSafe.description`,category:`streaming`,tags:[`centered`,`title-safe`,`broadcast`]},screenSize:{width:450,height:260,preset:`custom`},elements:[{type:`variableText`,position:{x:10,y:10},visible:!0,fontSize:28,text:`🎮 戦績統計`,textColor:`#3b82f6`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:24,boxShadow:`0 8px 32px rgba(0, 0, 0, 0.8)`},{type:`line`,position:{x:10,y:90},visible:!0,lineOrientation:`horizontal`,lineThickness:3,lineColor:`#3b82f6`,size:{width:400,height:3}},{type:`variableText`,position:{x:10,y:103},visible:!0,fontSize:28,text:`{winCount} - {loseCount}`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:24,boxShadow:`0 6px 24px rgba(0, 0, 0, 0.7)`},{type:`variableText`,position:{x:10,y:185},visible:!0,fontSize:18,text:`📊 {winRate}%`,textColor:`#94a3b8`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.85)`,padding:14,boxShadow:`0 4px 16px rgba(0, 0, 0, 0.6)`}]}],Tn=[{metadata:{id:`competitive-esports`,name:`E-Sports HUD`,nameKey:`obs.templates.competitiveEsports.name`,description:`Professional tournament style`,descriptionKey:`obs.templates.competitiveEsports.description`,category:`competitive`,tags:[`esports`,`tournament`,`professional`]},screenSize:{width:550,height:80,preset:`custom`},elements:[{type:`line`,position:{x:0,y:0},visible:!0,lineOrientation:`horizontal`,lineThickness:5,lineColor:`#ef4444`,size:{width:500,height:5}},{type:`variableText`,position:{x:10,y:10},visible:!0,fontSize:20,text:`⚡ RECORD: {winCount}W-{loseCount}L ({winRate}%)`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:14,boxShadow:`0 10px 40px rgba(239, 68, 68, 0.7)`},{type:`line`,position:{x:0,y:58},visible:!0,lineOrientation:`horizontal`,lineThickness:3,lineColor:`#dc2626`,size:{width:500,height:3}},{type:`variableText`,position:{x:435,y:14},visible:!0,fontSize:16,text:`🎮 {totalMatches}`,textColor:`#94a3b8`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:10,boxShadow:`0 6px 20px rgba(0, 0, 0, 0.6)`}]},{metadata:{id:`competitive-scoreboard`,name:`Scoreboard`,nameKey:`obs.templates.competitiveScoreboard.name`,description:`Clear scoreboard layout`,descriptionKey:`obs.templates.competitiveScoreboard.description`,category:`competitive`,tags:[`scoreboard`,`clear`,`readable`]},screenSize:{width:320,height:210,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`horizontal`,lineThickness:6,lineColor:`#fbbf24`,size:{width:280,height:6}},{type:`variableText`,position:{x:10,y:25},visible:!0,fontSize:40,text:`{winCount} - {loseCount}`,textColor:`#fbbf24`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:24,boxShadow:`0 12px 40px rgba(251, 191, 36, 0.6)`},{type:`line`,position:{x:10,y:120},visible:!0,lineOrientation:`horizontal`,lineThickness:3,lineColor:`#475569`,size:{width:280,height:3}},{type:`variableText`,position:{x:10,y:130},visible:!0,fontSize:18,text:`📊 勝率 {winRate}%  •  🎮 総試合数 {totalMatches}`,textColor:`#cbd5e1`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.9)`,padding:12,boxShadow:`0 6px 20px rgba(0, 0, 0, 0.6)`},{type:`line`,position:{x:10,y:180},visible:!0,lineOrientation:`horizontal`,lineThickness:4,lineColor:`#fbbf24`,size:{width:280,height:4}}]},{metadata:{id:`competitive-analyst`,name:`Analyst View`,nameKey:`obs.templates.competitiveAnalyst.name`,description:`Detailed analytics for commentary`,descriptionKey:`obs.templates.competitiveAnalyst.description`,category:`competitive`,tags:[`analyst`,`detailed`,`commentary`]},screenSize:{width:450,height:150,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`horizontal`,lineThickness:4,lineColor:`#06b6d4`,size:{width:400,height:4}},{type:`variableText`,position:{x:10,y:20},visible:!0,fontSize:18,text:`📈 戦績: {winCount}勝 {loseCount}敗
🎯 勝率: {winRate}% ({totalMatches}戦)`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:16,boxShadow:`0 -12px 32px rgba(6, 182, 212, 0.5)`},{type:`line`,position:{x:420,y:20},visible:!0,lineOrientation:`vertical`,lineThickness:3,lineColor:`#475569`,size:{width:3,height:105}},{type:`line`,position:{x:10,y:121},visible:!0,lineOrientation:`horizontal`,lineThickness:3,lineColor:`#0891b2`,size:{width:400,height:3}}]}],En=[{metadata:{id:`premium-neon-glow`,name:`Neon Glow`,nameKey:`obs.templates.premiumNeonGlow.name`,description:`Cyberpunk neon aesthetic`,descriptionKey:`obs.templates.premiumNeonGlow.description`,category:`premium`,tags:[`cyberpunk`,`neon`,`futuristic`]},screenSize:{width:220,height:300,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`vertical`,lineThickness:5,lineColor:`#ec4899`,size:{width:5,height:220}},{type:`variableText`,position:{x:20,y:10},visible:!0,fontSize:20,text:`⚡ WINS
{winCount}`,textColor:`#ec4899`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:16,boxShadow:`0 0 30px rgba(236, 72, 153, 0.8), 0 6px 24px rgba(0, 0, 0, 0.9)`},{type:`variableText`,position:{x:20,y:120},visible:!0,fontSize:20,text:`💀 LOSS
{loseCount}`,textColor:`#8b5cf6`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:16,boxShadow:`0 0 30px rgba(139, 92, 246, 0.8), 0 6px 24px rgba(0, 0, 0, 0.9)`},{type:`line`,position:{x:10,y:220},visible:!0,lineOrientation:`horizontal`,lineThickness:4,lineColor:`#06b6d4`,size:{width:195,height:4}},{type:`variableText`,position:{x:10,y:235},visible:!0,fontSize:22,text:`{winRate}%`,textColor:`#06b6d4`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0.95)`,padding:14,boxShadow:`0 0 30px rgba(6, 182, 212, 0.8), 0 6px 24px rgba(0, 0, 0, 0.9)`}]},{metadata:{id:`premium-gradient-flow`,name:`Gradient Flow`,nameKey:`obs.templates.premiumGradientFlow.name`,description:`Smooth gradient animations`,descriptionKey:`obs.templates.premiumGradientFlow.description`,category:`premium`,tags:[`gradient`,`smooth`,`elegant`]},screenSize:{width:590,height:250,preset:`custom`},elements:[{type:`line`,position:{x:10,y:10},visible:!0,lineOrientation:`horizontal`,lineThickness:3,lineColor:`#667eea`,size:{width:560,height:3}},{type:`variableText`,position:{x:10,y:25},visible:!0,fontSize:26,text:`🌟 今日の戦績`,textColor:`#667eea`,backgroundColor:`rgba(0, 0, 0, 0)`,padding:0,boxShadow:`none`},{type:`variableText`,position:{x:10,y:75},visible:!0,fontSize:34,text:`{winCount}勝 {loseCount}敗`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(102, 126, 234, 0.2)`,padding:22,boxShadow:`0 10px 32px rgba(102, 126, 234, 0.6)`},{type:`line`,position:{x:10,y:170},visible:!0,lineOrientation:`horizontal`,lineThickness:2,lineColor:`#764ba2`,size:{width:420,height:2}},{type:`variableText`,position:{x:10,y:185},visible:!0,fontSize:20,text:`📊 勝率 {winRate}%  •  🎮 {totalMatches}試合`,textColor:`#cbd5e1`,textAlign:`left`,backgroundColor:`rgba(118, 75, 162, 0.2)`,padding:14,boxShadow:`0 6px 18px rgba(118, 75, 162, 0.5)`}]},{metadata:{id:`premium-ultra-clean`,name:`Ultra Clean`,nameKey:`obs.templates.premiumUltraClean.name`,description:`Minimalist perfection`,descriptionKey:`obs.templates.premiumUltraClean.description`,category:`premium`,tags:[`minimal`,`clean`,`perfection`]},screenSize:{width:250,height:170,preset:`custom`},elements:[{type:`variableText`,position:{x:10,y:10},visible:!0,fontSize:50,text:`{winCount} - {loseCount}`,textColor:`#ffffff`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0)`,padding:0,boxShadow:`0 12px 48px rgba(255, 255, 255, 0.2)`},{type:`variableText`,position:{x:10,y:100},visible:!0,fontSize:22,text:`{winRate}%`,textColor:`#64748b`,textAlign:`left`,backgroundColor:`rgba(0, 0, 0, 0)`,padding:0,boxShadow:`none`},{type:`line`,position:{x:10,y:145},visible:!0,lineOrientation:`horizontal`,lineThickness:2,lineColor:`#334155`,size:{width:220,height:2}}]}],Dn=[...Sn,...Cn,...wn,...Tn,...En];var On=e(t()),kn=v.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: ${({$isOpen:e})=>e?`flex`:`none`};
  align-items: flex-start;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  padding-top: ${({theme:e})=>e.spacing[8]};
  overflow-y: auto;
  opacity: ${({$isOpen:e})=>e?1:0};
  transition: opacity ${({theme:e})=>e.transitions.base};
`,An=v.div`
  background: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,jn=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:e})=>e.colors.surface};
`,Mn=v.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Nn=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
  overflow-y: auto;
  flex: 1;
`,Pn=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  border-bottom: 2px solid ${({theme:e})=>e.colors.border};
  overflow-x: auto;
  overflow-y: hidden;
`,Fn=v.button`
  background: none;
  border: none;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({$active:e,theme:t})=>e?t.colors.primary[500]:t.colors.textSecondary};
  cursor: pointer;
  border-bottom: 2px solid ${({$active:e,theme:t})=>e?t.colors.primary[500]:`transparent`};
  margin-bottom: -2px;
  transition: all ${({theme:e})=>e.transitions.base};
  white-space: nowrap;

  &:hover {
    color: ${({theme:e})=>e.colors.primary[400]};
  }
`,In=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
`,Ln=v.button`
  background: ${({theme:e})=>e.colors.surface};
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({theme:e})=>e.gradients.primary};
    opacity: 0;
    transition: opacity ${({theme:e})=>e.transitions.base};
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary[500]};
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.lg};

    &::before {
      opacity: 0.05;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`,Rn=v.div`
  width: 100%;
  height: 140px;
  background: ${({theme:e})=>e.isDark?e.colors.gray[900]:e.colors.gray[100]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,zn=v.div`
  width: 90%;
  height: 90%;
  background: ${({theme:e})=>e.isDark?e.colors.gray[800]:e.colors.white};
  border-radius: 4px;
  position: relative;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,Bn=v.div`
  position: absolute;
  left: ${({$x:e})=>e*.1}px;
  top: ${({$y:e})=>e*.08}px;
  width: ${({$width:e})=>e?`${e*.1}px`:`20px`};
  height: ${({$height:e})=>e?`${e*.08}px`:`8px`};
  background: ${({theme:e})=>e.colors.primary[400]}40;
  border: 1px solid ${({theme:e})=>e.colors.primary[400]};
  border-radius: 2px;
  font-size: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.primary[600]};
  overflow: hidden;
`,Vn=v.h3`
  margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  z-index: 1;
`,Hn=v.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.5;
  position: relative;
  z-index: 1;
`,Un=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[3]};
  position: relative;
  z-index: 1;
`,Wn=v.span`
  font-size: 0.625rem;
  padding: 2px 8px;
  background: ${({theme:e})=>e.colors.primary[500]}20;
  color: ${({theme:e})=>e.colors.primary[500]};
  border-radius: 12px;
  font-weight: 500;
`,Gn=v.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  right: ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.colors.background};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
`,Kn=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`;function qn({isOpen:e,onClose:t}){let{t:n}=C(),{setElements:r,selectElement:i,setScreenSize:a}=I(),[o,s]=(0,z.useState)(`all`),c=[{id:`all`,labelKey:`obs.templates.categories.all`},{id:`minimal`,labelKey:`obs.templates.categories.minimal`},{id:`streaming`,labelKey:`obs.templates.categories.streaming`},{id:`detailed`,labelKey:`obs.templates.categories.detailed`},{id:`competitive`,labelKey:`obs.templates.categories.competitive`}],l=e=>{switch(e){case`all`:return Dn;case`minimal`:return Sn;case`detailed`:return Cn;case`streaming`:return wn;case`competitive`:return Tn;default:return Dn}},u=e=>{let n=e.elements.map(e=>({...e,id:b()}));r(n),i(null),e.screenSize&&a(e.screenSize),t()},d=l(o);return(0,On.createPortal)((0,L.jsx)(kn,{$isOpen:e,onClick:t,children:(0,L.jsxs)(An,{onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(jn,{children:[(0,L.jsx)(Mn,{children:n(`obs.templates.title`)}),(0,L.jsx)(A,{variant:`ghost`,size:`sm`,onClick:t,children:(0,L.jsx)(N,{name:`close`,size:20})})]}),(0,L.jsxs)(Nn,{children:[(0,L.jsx)(Pn,{children:c.map(e=>(0,L.jsx)(Fn,{$active:o===e.id,onClick:()=>s(e.id),children:n(e.labelKey)},e.id))}),d.length===0?(0,L.jsx)(Kn,{children:n(`obs.templates.noTemplates`)}):(0,L.jsx)(In,{children:d.map(e=>(0,L.jsxs)(Ln,{onClick:()=>u(e),children:[(0,L.jsxs)(Rn,{children:[(0,L.jsx)(zn,{children:e.elements.map((e,t)=>(0,L.jsx)(Bn,{$x:e.position.x,$y:e.position.y,$width:e.size?.width,$height:e.size?.height},t))}),(0,L.jsxs)(Gn,{children:[(0,L.jsx)(N,{name:`grid`,size:12}),e.elements.length]})]}),(0,L.jsx)(Vn,{children:n(e.metadata.nameKey)}),(0,L.jsx)(Hn,{children:n(e.metadata.descriptionKey)}),(0,L.jsx)(Un,{children:e.metadata.tags.map(e=>(0,L.jsx)(Wn,{children:e},e))})]},e.metadata.id))})]})]})}),document.body)}var Jn=e=>{let t=document.querySelector(`[data-element-id="${e}"]`)?.getBoundingClientRect();return{width:t?.width||200,height:t?.height||50}},Yn=(e,t,n,r)=>{let i=Math.max(e,n);return Math.min(t,r)>i};function Xn(e,t,n,r,i=10){if(!r.find(t=>t.id===e))return{position:{x:t,y:n},guides:{}};let a=r.filter(t=>t.id!==e),o=t,s=n,c={},{width:l,height:u}=Jn(e),d=null,f=null,p=0,m=0,h=1/0,g=1/0;for(let e of a){let{width:r,height:a}=Jn(e.id),_=Math.abs(t-e.position.x),v=Math.abs(n-e.position.y);_<i&&(o=e.position.x,c.x=e.position.x),v<i&&(s=e.position.y,c.y=e.position.y);let y=Yn(n,n+u,e.position.y,e.position.y+a),b=Yn(t,t+l,e.position.x,e.position.x+r);if(y){let n;n=t<e.position.x?e.position.x-(t+l):t-(e.position.x+r),n>=0&&n<h&&(h=n,d=e,p=r)}if(b){let t;t=n<e.position.y?e.position.y-(n+u):n-(e.position.y+a),t>=0&&t<g&&(g=t,f=e,m=a)}}if(d&&h<200){let e,r,i=Math.max(n,d.position.y)+10;t<d.position.x?(e=t+l,r=d.position.x):(e=d.position.x+p,r=t),c.xDistance={from:e,to:r,y:i}}if(f&&g<200){let e,r,i=Math.max(t,f.position.x)+10;n<f.position.y?(e=n+u,r=f.position.y):(e=f.position.y+m,r=n),c.yDistance={from:e,to:r,x:i}}return{position:{x:o,y:s},guides:c}}var Zn=v.div`
  display: grid;
  grid-template-columns: 120px 1fr 320px;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: start;
  isolation: isolate;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 320px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Qn=v.div`
  min-width: 0;
`,$n=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  position: sticky;
  top: 16px;

  @media (max-width: 1200px) {
    display: none;
  }
`,er=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  position: sticky;
  top: 16px;

  @media (max-width: 1024px) {
    position: static;
  }
`,tr=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,nr=v.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.textSecondary};
  transition: color 0.2s ease;
  padding: 4px;

  &:hover {
    color: ${({theme:e})=>e.colors.primary[400]};
  }
`,rr=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,Z=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Q=v.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,ir=v.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,$=v.li`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  padding-left: ${({theme:e})=>e.spacing[4]};
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({theme:e})=>e.colors.primary[400]};
    font-weight: bold;
  }
`,ar=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border-left: 3px solid ${({theme:e})=>e.colors.primary[400]};
`,or=v.div`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.9375rem;
`,sr=v.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
`,cr=10;function lr(){let{t:e}=C();ee(e(`pages.obs.title`));let{elements:t,editMode:i,screenSize:s,selectedElementIds:c,updateElementPosition:l,updateSelectedElementsPosition:u,toggleEditMode:p,resetLayout:m,selectElement:h,clearSelection:g,addElement:_,setEditingElement:v,removeElement:y,undo:S,redo:T,canUndo:D,canRedo:O}=I(),[k,A]=(0,z.useState)({}),[j,M]=(0,z.useState)(null),[ie,ae]=(0,z.useState)(!1),[oe,se]=(0,z.useState)(!1),[P,F]=(0,z.useState)(!1),[ce,le]=(0,z.useState)(null),R=(0,z.useRef)(null),ue=a(d,{activationConstraint:{distance:10}}),de=a(r,{activationConstraint:{delay:250,tolerance:5}}),fe=f(ue,de);return(0,z.useEffect)(()=>{let e=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)){if((e.key===`Delete`||e.key===`Backspace`)&&i){c.length>0&&(e.preventDefault(),c.forEach(e=>y(e)),g());return}(e.ctrlKey||e.metaKey)&&e.key===`z`&&(e.preventDefault(),e.shiftKey?O()&&(T(),A({}),g()):D()&&(S(),A({}),g()))}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[S,T,D,O,g,i,c,y]),(0,L.jsxs)(te,{fullWidth:!0,children:[(0,L.jsx)(x,{children:(0,L.jsxs)(tr,{children:[(0,L.jsx)(ne,{children:e(`pages.obs.title`)}),(0,L.jsx)(nr,{onClick:()=>se(!0),title:e(`obs.help.buttonTitle`),children:(0,L.jsx)(N,{name:`info`,size:20})})]})}),(0,L.jsx)(E,{children:e(`pages.obs.description`)}),(0,L.jsxs)(re,{children:[(0,L.jsxs)(o,{sensors:fe,onDragStart:e=>{let t=e.active.id;M(t),c.includes(t)&&c.length>1&&F(!0)},onDragMove:e=>{let{active:n,delta:r}=e;if(n.data.current?.isNew)return;let i=t.find(e=>e.id===n.id);if(!i)return;if(P&&c.length>1){A({}),le(r);return}let a=i.position.x+r.x,o=i.position.y+r.y,{guides:s}=Xn(n.id,a,o,t,cr);A(s)},onDragEnd:e=>{let{active:n,delta:r,over:i}=e;if(M(null),A({}),le(null),!i){F(!1);return}if(n.data.current?.isNew){if(!R.current)return;let t=R.current.getBoundingClientRect(),i=100,a=100;e.activatorEvent instanceof MouseEvent?(i=e.activatorEvent.clientX-t.left+r.x,a=e.activatorEvent.clientY-t.top+r.y):e.activatorEvent instanceof TouchEvent&&e.activatorEvent.touches.length>0&&(i=e.activatorEvent.touches[0].clientX-t.left+r.x,a=e.activatorEvent.touches[0].clientY-t.top+r.y);let o=n.data.current.type,s={id:b(),type:o,position:{x:Math.max(0,i),y:Math.max(0,a)},visible:!0,fontSize:16};o===`line`&&(s.lineOrientation=`horizontal`,s.lineThickness=2,s.lineColor=`#ffffff`,s.size={width:200,height:2}),o===`rectangle`&&(s.rectangleFillColor=`transparent`,s.rectangleBorderColor=`#ffffff`,s.rectangleBorderWidth=2,s.rectangleBorderRadius=0,s.size={width:200,height:200}),o===`todayTrendChart`&&(s.size={width:600,height:450}),_(s),h(s.id),v(s.id);return}if(P&&c.length>1){u(r.x,r.y),F(!1);return}let a=t.find(e=>e.id===n.id);if(!a)return;let o=a.position.x+r.x,s=a.position.y+r.y,{position:d}=Xn(n.id,o,s,t,cr);l(n.id,d)},children:[(0,L.jsxs)(Zn,{children:[(0,L.jsx)($n,{children:i&&(0,L.jsx)(he,{})}),(0,L.jsx)(Qn,{children:(0,L.jsxs)(He,{containerRef:R,onClick:e=>{e.target===e.currentTarget&&g()},width:s.width,height:s.height,children:[t.map(e=>(0,L.jsx)(ze,{element:e,editMode:i,isDraggingGroup:P,activeId:j,groupDragDelta:ce},e.id)),i&&(0,L.jsx)(xn,{x:k.x,y:k.y,xDistance:k.xDistance,yDistance:k.yDistance})]})}),(0,L.jsx)(er,{children:i&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(gn,{}),(0,L.jsx)(sn,{})]})})]}),(0,L.jsx)(n,{children:j&&j.startsWith(`new-`)&&(0,L.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#667eea`,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.25)`},children:(0,L.jsx)(N,{name:`add`,size:24})})})]}),(0,L.jsx)(qt,{}),(0,L.jsx)(ye,{editMode:i,onToggleEditMode:p,onResetLayout:m,onOpenTemplates:()=>ae(!0)}),(0,L.jsx)(qn,{isOpen:ie,onClose:()=>ae(!1)}),(0,L.jsx)(w,{isOpen:oe,onClose:()=>se(!1),title:e(`obs.help.title`),children:(0,L.jsxs)(rr,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:e(`obs.help.overview.title`)}),(0,L.jsxs)(ir,{children:[(0,L.jsx)($,{children:e(`obs.help.overview.item1`)}),(0,L.jsx)($,{children:e(`obs.help.overview.item2`)}),(0,L.jsx)($,{children:e(`obs.help.overview.item3`)})]})]}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:e(`obs.help.basicUsage.title`)}),(0,L.jsxs)(ar,{children:[(0,L.jsx)(or,{children:e(`obs.help.basicUsage.step1.title`)}),(0,L.jsx)(sr,{children:e(`obs.help.basicUsage.step1.description`)})]}),(0,L.jsxs)(ar,{children:[(0,L.jsx)(or,{children:e(`obs.help.basicUsage.step2.title`)}),(0,L.jsx)(sr,{children:e(`obs.help.basicUsage.step2.description`)})]}),(0,L.jsxs)(ar,{children:[(0,L.jsx)(or,{children:e(`obs.help.basicUsage.step3.title`)}),(0,L.jsx)(sr,{children:e(`obs.help.basicUsage.step3.description`)})]}),(0,L.jsxs)(ar,{children:[(0,L.jsx)(or,{children:e(`obs.help.basicUsage.step4.title`)}),(0,L.jsx)(sr,{children:e(`obs.help.basicUsage.step4.description`)})]})]}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:e(`obs.help.tips.title`)}),(0,L.jsxs)(ir,{children:[(0,L.jsx)($,{children:e(`obs.help.tips.item1`)}),(0,L.jsx)($,{children:e(`obs.help.tips.item2`)}),(0,L.jsx)($,{children:e(`obs.help.tips.item3`)}),(0,L.jsx)($,{children:e(`obs.help.tips.item4`)})]})]}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:e(`obs.help.important.title`)}),(0,L.jsxs)(ir,{children:[(0,L.jsx)($,{children:e(`obs.help.important.item1`)}),(0,L.jsx)($,{children:e(`obs.help.important.item2`)})]})]})]})})]})]})}function ur(){let{elements:e,screenSize:t}=I();return(0,z.useEffect)(()=>{localStorage.setItem(`obs-browser-source-status`,`open`);let e=e=>{(e.key===`cc-war-record-characters`||e.key===`cc-war-record-match-records`)&&ie.getState().loadData()},t=()=>{localStorage.removeItem(`obs-browser-source-status`)};return window.addEventListener(`storage`,e),window.addEventListener(`beforeunload`,t),()=>{window.removeEventListener(`storage`,e),window.removeEventListener(`beforeunload`,t),localStorage.removeItem(`obs-browser-source-status`)}},[]),(0,L.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`hidden`,background:`transparent`,scrollbarWidth:`none`,msOverflowStyle:`none`},children:[(0,L.jsx)(`style`,{children:`
          body {
            overflow: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          body::-webkit-scrollbar {
            display: none;
          }
        `}),(0,L.jsx)(`div`,{style:{width:`${t.width}px`,height:`${t.height}px`,position:`relative`,background:`transparent`},children:e.map(e=>(0,L.jsx)(ze,{element:e,editMode:!1,isDraggingGroup:!1,activeId:null,groupDragDelta:null},e.id))})]})}export{he as i,lr as n,sn as r,ur as t};