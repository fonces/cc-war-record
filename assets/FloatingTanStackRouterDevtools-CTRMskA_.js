import{A as e,B as t,F as n,G as r,H as i,I as a,J as o,K as s,L as c,M as l,N as u,P as d,R as f,U as p,V as m,W as h,X as g,Y as _,at as v,it as y,j as b,nt as x,q as S,rt as C,z as w}from"./index-MzI5li_m.js";import{t as T}from"./clsx-BA8vGyrm.js";var E={data:``},D=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||E},O=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,k=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,j=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?j(o,a):a+`{`+j(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=j(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=j.p?j.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},M={},N=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+N(e[n]);return t}return e},P=(e,t,n,r,i)=>{let a=N(e),o=M[a]||(M[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!M[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=O.exec(e.replace(k,``));)t[4]?r.shift():t[3]?(n=t[3].replace(A,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(A,` `).trim();return r[0]})(e):e;M[o]=j(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&M.g?M.g:null;return n&&(M.g=M[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(M[o],t,r,s),o},ee=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:j(e,``):!1===e?``:e}return e+r+(a??``)},``);function F(e){let t=this||{},n=e.call?e(t.p):e;return P(n.unshift?n.raw?ee(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,D(t.target),t.g,t.o,t.k)}F.bind({g:1}),F.bind({k:1});var I={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{90:`e5`,70:`b3`,20:`33`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`},lineHeight:{xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`},weight:{normal:`400`,medium:`500`,semibold:`600`,bold:`700`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},border:{radius:{xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,full:`9999px`}},size:{0:`0px`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,5:`calc(var(--tsrd-font-size) * 1.25)`,8:`calc(var(--tsrd-font-size) * 2)`}},L=e=>{let{colors:t,font:n,size:r,alpha:i,border:a}=I,{fontFamily:o,lineHeight:s,size:c}=n,l=e?F.bind({target:e}):F;return{devtoolsPanelContainer:l`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>l`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?l`
          transition: none;
        `:l`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?l`
          pointer-events: auto;
          transform: translateY(0);
        `:l`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:l`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${o.sans};
      gap: ${I.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:l`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:l`
      display: flex;
      font-size: ${c.sm};
      font-family: ${o.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${c.xs};
      }
    `,dragHandle:l`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:l`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:l`
      padding: ${I.size[2]};
    `,row:l`
      display: flex;
      align-items: center;
      padding: ${I.size[2]} ${I.size[2.5]};
      gap: ${I.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:l`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${I.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${I.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:l`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${I.size[0]} ${I.size[2.5]};
      border-radius: ${a.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:l`
      color: ${t.yellow[300]};
    `,detailsContent:l`
      padding: ${I.size[1.5]} ${I.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:l`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${a.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[l`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${o.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=l`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=l`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(l`
          border-right: 1px solid ${I.colors.gray[500]};
        `),a},detailsHeaderInfo:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[l`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${a.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=l`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:l`
      flex: 1;
      line-height: ${s.xs};
    `,ageTicker:e=>{let n=[l`
        display: flex;
        gap: ${r[1]};
        font-size: ${c.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${s.xs};
      `];if(e){let e=l`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:l`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:l`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:l`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[l`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${c.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${s.xs};
      `];if(e){let e=l`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[l`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${c.xs};
        line-height: ${s.xs};
      `];if(!e){let e=l`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:l`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:l`
      color: ${t.gray[400]};
      font-size: ${c.xs};
      line-height: ${s.xs};
    `,nestedRouteRow:e=>l`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:l`
      font-size: ${c.xs};
      line-height: ${s.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:l`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:l`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:l`
      display: flex;
      flex-direction: column;
      padding: ${I.size[2]};
      font-size: ${I.font.size.xs};
      color: ${I.colors.gray[300]};
      line-height: ${I.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return l`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${I.border.radius.sm};
        font-weight: ${I.font.weight.normal};
        background-color: ${I.colors[n][900]}${I.alpha[90]};
        color: ${I.colors[n][300]};
        border: 1px solid ${I.colors[n][600]};
        margin-bottom: ${I.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:l`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:l`
      display: flex;
    `,mainCloseBtn:l`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${a.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>l`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?l`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:l`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:l`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:l`
      width: 1px;
      background: ${I.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:l`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:l`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:l`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:l`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:l`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:l`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${c.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function R(){let e=g(b),[t]=s(L(e));return t}var z=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function B(e,t){let[n,r]=s();return p(()=>{let n=z(e);r(n??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var V=typeof window>`u`;function H(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function U(e,t){let n=e.find(e=>e.routeId===t.id);return n?H(n):`gray`}function W(){let[e,t]=s(!1);return(V?p:r)(()=>{t(!0)}),e}var G=e=>{let t=Object.getOwnPropertyNames(Object(e)),n=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return`unable to stringify`}};function K(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var q=t(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),J=t(`<div>`),te=t(`<button><span> `),ne=t(`<div><div><button> [<!> ... <!>]`),re=t(`<button><span></span> 🔄 `),ie=t(`<span>:`),ae=t(`<span>`),oe=({expanded:e,style:t={}})=>{let i=ue();return(()=>{var t=q(),a=t.firstChild;return r(r=>{var o=i().expander,s=T(i().expanderIcon(e));return o!==r.e&&n(t,r.e=o),s!==r.t&&f(a,`class`,r.t=s),r},{e:void 0,t:void 0}),t})()};function se(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function ce(e){return Symbol.iterator in e}function Y({value:e,defaultExpanded:t,pageSize:a=100,filterSubEntries:l,...u}){let[d,f]=s(!!t),p=()=>f(e=>!e),m=h(()=>typeof e()),g=h(()=>{let n=[],r=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};return Array.isArray(e())?n=e().map((e,t)=>r({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&ce(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>r({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>r({label:e,value:t}))),l?l(n):n}),_=h(()=>se(g(),a)),[v,y]=s([]),[b,x]=s(void 0),S=ue(),C=()=>{x(e()())},w=t=>i(Y,o({value:e,filterSubEntries:l},u,t));return(()=>{var t=J();return c(t,(()=>{var t=h(()=>!!_().length);return()=>t()?[(()=>{var e=te(),t=e.firstChild,a=t.firstChild;return e.$$click=()=>p(),c(e,i(oe,{get expanded(){return d()??!1}}),t),c(e,()=>u.label,t),c(t,()=>String(m).toLowerCase()===`iterable`?`(Iterable) `:``,a),c(t,()=>g().length,a),c(t,()=>g().length>1?`items`:`item`,null),r(r=>{var i=S().expandButton,a=S().info;return i!==r.e&&n(e,r.e=i),a!==r.t&&n(t,r.t=a),r},{e:void 0,t:void 0}),e})(),h(()=>h(()=>!!(d()??!1))()?h(()=>_().length===1)()?(()=>{var e=J();return c(e,()=>g().map((e,t)=>w(e))),r(()=>n(e,S().subEntries)),e})():(()=>{var e=J();return c(e,()=>_().map((e,t)=>(()=>{var o=ne(),s=o.firstChild,l=s.firstChild,u=l.firstChild,d=u.nextSibling,f=d.nextSibling.nextSibling;return f.nextSibling,l.$$click=()=>y(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),c(l,i(oe,{get expanded(){return v().includes(t)}}),u),c(l,t*a,d),c(l,t*a+a-1,f),c(s,(()=>{var i=h(()=>!!v().includes(t));return()=>i()?(()=>{var t=J();return c(t,()=>e.map(e=>w(e))),r(()=>n(t,S().subEntries)),t})():null})(),null),r(e=>{var t=S().entry,r=T(S().labelButton,`labelButton`);return t!==e.e&&n(s,e.e=t),r!==e.t&&n(l,e.t=r),e},{e:void 0,t:void 0}),o})())),r(()=>n(e,S().subEntries)),e})():null)]:(()=>{var t=h(()=>m()===`function`);return()=>t()?i(Y,{get label(){return(()=>{var e=re(),t=e.firstChild;return e.$$click=C,c(t,()=>u.label),r(()=>n(e,S().refreshValueBtn)),e})()},value:b,defaultExpanded:{}}):[(()=>{var e=ie(),t=e.firstChild;return c(e,()=>u.label,t),e})(),` `,(()=>{var t=ae();return c(t,()=>G(e())),r(()=>n(t,S().value)),t})()]})()})()),r(()=>n(t,S().entry)),t})()}var le=e=>{let{colors:t,font:n,size:r}=I,{fontFamily:i,lineHeight:a,size:o}=n,s=e?F.bind({target:e}):F;return{entry:s`
      font-family: ${i.mono};
      font-size: ${o.xs};
      line-height: ${a.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:s`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:s`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?s`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:s`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:s`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:s`
      color: ${t.purple[400]};
    `,subEntries:s`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:s`
      color: ${t.gray[500]};
      font-size: ${o[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:s`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${i.mono};
      font-size: ${o.xs};
    `}};function ue(){let e=g(b),[t]=s(le(e));return t}a([`click`]);var de=t(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function fe(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function X({match:e,router:t}){let i=R();if(!e)return null;let a=t().looseRoutesById[e.routeId];if(!a.options.loader)return null;let o=Date.now()-e.updatedAt,s=a.options.staleTime??t().options.defaultStaleTime??0,l=a.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=de(),t=e.firstChild,a=t.nextSibling.nextSibling,u=a.nextSibling.nextSibling;return c(t,()=>fe(o)),c(a,()=>fe(s)),c(u,()=>fe(l)),r(()=>n(e,T(i().ageTicker(o>s)))),e})()}var pe=t(`<button type=button>➔`);function Z({to:e,params:t,search:i,router:a}){let o=R();return(()=>{var s=pe();return s.$$click=n=>{n.stopPropagation(),a().navigate({to:e,params:t,search:i})},f(s,`title`,`Navigate to ${e}`),r(()=>n(s,o().navigateButton)),s})()}a([`click`]);var me=t(`<button><div>TANSTACK</div><div>TanStack Router v1`),he=t(`<div><div>`),ge=t(`<code> `),Q=t(`<code>`),_e=t(`<div><div role=button><div>`),$=t(`<div>`),ve=t(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),ye=t(`<div><span>masked`),be=t(`<div role=button><div>`),xe=t(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),Se=t(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),Ce=t(`<div>Loader Data`),we=t(`<div><div><span>Search Params</span></div><div>`),Te=t(`<span style=margin-left:0.5rem;>`),Ee=t(`<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">`);function De(e){let{className:t,...i}=e,a=R();return(()=>{var e=me(),s=e.firstChild,c=s.nextSibling;return w(e,o(i,{get class(){return T(a().logo,t?t():``)}}),!1,!0),r(e=>{var t=a().tanstackLogo,r=a().routerLogo;return t!==e.e&&n(s,e.e=t),r!==e.t&&n(c,e.t=r),e},{e:void 0,t:void 0}),e})()}function Oe(e){return(()=>{var t=he(),i=t.firstChild;return t.style.setProperty(`display`,`flex`),t.style.setProperty(`align-items`,`center`),t.style.setProperty(`width`,`100%`),c(t,()=>e.left,i),i.style.setProperty(`flex-grow`,`1`),i.style.setProperty(`min-width`,`0`),c(i,()=>e.children),c(t,()=>e.right,null),r(()=>n(t,e.class)),t})()}function ke({routerState:e,router:t,route:a,isRoot:o,activeId:s,setActiveId:l}){let u=R(),d=h(()=>e().pendingMatches||e().matches),p=h(()=>e().matches.find(e=>e.routeId===a.id)),g=h(()=>{try{if(p()?.params){let e=p()?.params,t=a.path||C(a.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),_=h(()=>{if(o||!a.path)return;let e=Object.assign({},...d().map(e=>e.params)),n=x({path:a.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return n.isMissingParams?void 0:n.interpolatedPath});return(()=>{var v=_e(),b=v.firstChild,x=b.firstChild;return b.$$click=()=>{p()&&l(s()===a.id?``:a.id)},c(b,i(Oe,{get class(){return T(u().routesRow(!!p()))},get left(){return i(m,{get when(){return _()},children:e=>i(Z,{get to(){return e()},router:t})})},get right(){return i(X,{get match(){return p()},router:t})},get children(){return[(()=>{var e=ge(),t=e.firstChild;return c(e,()=>o?y:a.path||C(a.id),t),r(()=>n(e,u().code)),e})(),(()=>{var e=Q();return c(e,g),r(()=>n(e,u().routeParamInfo)),e})()]}}),null),c(v,(()=>{var d=h(()=>!!a.children?.length);return()=>d()?(()=>{var d=$();return c(d,()=>[...a.children].sort((e,t)=>e.rank-t.rank).map(n=>i(ke,{routerState:e,router:t,route:n,activeId:s,setActiveId:l}))),r(()=>n(d,u().nestedRouteRow(!!o))),d})():null})(),null),r(e=>{var t=`Open match details for ${a.id}`,r=T(u().routesRowContainer(a.id===s(),!!p())),i=T(u().matchIndicator(U(d(),a)));return t!==e.e&&f(b,`aria-label`,e.e=t),r!==e.t&&n(b,e.t=r),i!==e.a&&n(x,e.a=i),e},{e:void 0,t:void 0,a:void 0}),v})()}var Ae=function({...e}){let{isOpen:t=!0,setIsOpen:a,handleDragStart:s,router:u,routerState:p,shadowDOMTarget:m,...g}=e,{onCloseClick:_}=l(),b=R(),{className:x,style:S,...C}=g;v(u,`No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually.`);let[E,D]=B(`tanstackRouterDevtoolsShowMatches`,!0),[O,k]=B(`tanstackRouterDevtoolsActiveRouteId`,``),A=h(()=>[...p().pendingMatches??[],...p().matches,...p().cachedMatches].find(e=>e.routeId===O()||e.id===O())),j=h(()=>Object.keys(p().location.search).length),M=h(()=>({...u(),state:p()})),N=h(()=>Object.fromEntries(K(Object.keys(M()),[`state`,`routesById`,`routesByPath`,`flatRoutes`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,M()[e]]).filter(e=>typeof e[1]!=`function`&&![`__store`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),P=h(()=>A()?.loaderData),ee=h(()=>A()),F=h(()=>p().location.search);return(()=>{var e=ve(),t=e.firstChild,l=t.firstChild,m=t.nextSibling,g=m.firstChild,v=g.nextSibling,M=v.firstChild,I=m.nextSibling,L=I.firstChild,R=L.firstChild;R.firstChild;var z=R.nextSibling,B=z.firstChild,V=z.nextSibling,U=V.firstChild,W=U.firstChild,G=W.nextSibling,K=U.nextSibling,q=V.nextSibling;return w(e,o({get class(){return T(b().devtoolsPanel,`TanStackRouterDevtoolsPanel`,x?x():``)},get style(){return S?S():``}},C),!1,!0),c(e,s?(()=>{var e=$();return d(e,`mousedown`,s,!0),r(()=>n(e,b().dragHandle)),e})():null,t),t.$$click=e=>{a&&a(!1),_(e)},c(g,i(De,{"aria-hidden":!0,onClick:e=>{a&&a(!1),_(e)}})),c(M,i(Y,{label:`Router`,value:N,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),c(R,(()=>{var e=h(()=>!!p().location.maskedLocation);return()=>e()?(()=>{var e=ye(),t=e.firstChild;return r(r=>{var i=b().maskedBadgeContainer,a=b().maskedBadge;return i!==r.e&&n(e,r.e=i),a!==r.t&&n(t,r.t=a),r},{e:void 0,t:void 0}),e})():null})(),null),c(B,()=>p().location.pathname),c(z,(()=>{var e=h(()=>!!p().location.maskedLocation);return()=>e()?(()=>{var e=Q();return c(e,()=>p().location.maskedLocation?.pathname),r(()=>n(e,b().maskedLocation)),e})():null})(),null),W.$$click=()=>{D(!1)},G.$$click=()=>{D(!0)},c(q,(()=>{var e=h(()=>!E());return()=>e()?i(ke,{routerState:p,router:u,get route(){return u().routeTree},isRoot:!0,activeId:O,setActiveId:k}):(()=>{var e=$();return c(e,()=>(p().pendingMatches?.length?p().pendingMatches:p().matches)?.map((e,t)=>(()=>{var t=be(),a=t.firstChild;return t.$$click=()=>k(O()===e.id?``:e.id),c(t,i(Oe,{get left(){return i(Z,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:u})},get right(){return i(X,{match:e,router:u})},get children(){var t=Q();return c(t,()=>`${e.routeId===`__root__`?y:e.pathname}`),r(()=>n(t,b().matchID)),t}}),null),r(r=>{var i=`Open match details for ${e.id}`,o=T(b().matchRow(e===A())),s=T(b().matchIndicator(H(e)));return i!==r.e&&f(t,`aria-label`,r.e=i),o!==r.t&&n(t,r.t=o),s!==r.a&&n(a,r.a=s),r},{e:void 0,t:void 0,a:void 0}),t})())),e})()})()),c(I,(()=>{var e=h(()=>!!p().cachedMatches.length);return()=>e()?(()=>{var e=xe(),t=e.firstChild,a=t.firstChild.nextSibling,o=t.nextSibling;return c(o,()=>p().cachedMatches.map(e=>(()=>{var t=be(),a=t.firstChild;return t.$$click=()=>k(O()===e.id?``:e.id),c(t,i(Oe,{get left(){return i(Z,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:u})},get right(){return i(X,{match:e,router:u})},get children(){var t=Q();return c(t,()=>`${e.id}`),r(()=>n(t,b().matchID)),t}}),null),r(r=>{var i=`Open match details for ${e.id}`,o=T(b().matchRow(e===A())),s=T(b().matchIndicator(H(e)));return i!==r.e&&f(t,`aria-label`,r.e=i),o!==r.t&&n(t,r.t=o),s!==r.a&&n(a,r.a=s),r},{e:void 0,t:void 0,a:void 0}),t})())),r(r=>{var i=b().cachedMatchesContainer,o=b().detailsHeader,s=b().detailsHeaderInfo;return i!==r.e&&n(e,r.e=i),o!==r.t&&n(t,r.t=o),s!==r.a&&n(a,r.a=s),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),c(e,(()=>{var e=h(()=>!!(A()&&A()?.status));return()=>e()?(()=>{var e=Se(),t=e.firstChild,a=t.nextSibling,o=a.firstChild,s=o.firstChild,l=s.firstChild,u=s.nextSibling,d=u.firstChild.nextSibling,f=d.firstChild,m=u.nextSibling,g=m.firstChild.nextSibling,_=m.nextSibling,v=_.firstChild.nextSibling,y=a.nextSibling,x=y.nextSibling;return c(l,(()=>{var e=h(()=>!!(A()?.status===`success`&&A()?.isFetching));return()=>e()?`fetching`:A()?.status})()),c(f,()=>A()?.id),c(g,(()=>{var e=h(()=>!!p().pendingMatches?.find(e=>e.id===A()?.id));return()=>e()?`Pending`:p().matches.find(e=>e.id===A()?.id)?`Active`:`Cached`})()),c(v,(()=>{var e=h(()=>!!A()?.updatedAt);return()=>e()?new Date(A()?.updatedAt).toLocaleTimeString():`N/A`})()),c(e,(()=>{var e=h(()=>!!P());return()=>e()?[(()=>{var e=Ce();return r(()=>n(e,b().detailsHeader)),e})(),(()=>{var e=$();return c(e,i(Y,{label:`loaderData`,value:P,defaultExpanded:{}})),r(()=>n(e,b().detailsContent)),e})()]:null})(),y),c(x,i(Y,{label:`Match`,value:ee,defaultExpanded:{}})),r(r=>{var i=b().thirdContainer,a=b().detailsHeader,c=b().matchDetails,l=b().matchStatus(A()?.status,A()?.isFetching),f=b().matchDetailsInfoLabel,p=b().matchDetailsInfo,h=b().matchDetailsInfoLabel,S=b().matchDetailsInfo,C=b().matchDetailsInfoLabel,w=b().matchDetailsInfo,T=b().detailsHeader,E=b().detailsContent;return i!==r.e&&n(e,r.e=i),a!==r.t&&n(t,r.t=a),c!==r.a&&n(o,r.a=c),l!==r.o&&n(s,r.o=l),f!==r.i&&n(u,r.i=f),p!==r.n&&n(d,r.n=p),h!==r.s&&n(m,r.s=h),S!==r.h&&n(g,r.h=S),C!==r.r&&n(_,r.r=C),w!==r.d&&n(v,r.d=w),T!==r.l&&n(y,r.l=T),E!==r.u&&n(x,r.u=E),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),c(e,(()=>{var e=h(()=>!!j());return()=>e()?(()=>{var e=we(),t=e.firstChild;t.firstChild;var a=t.nextSibling;return c(t,typeof navigator<`u`?(()=>{var e=Te();return c(e,i(je,{getValue:()=>{let e=p().location.search;return JSON.stringify(e)}})),e})():null,null),c(a,i(Y,{value:F,get defaultExpanded(){return Object.keys(p().location.search).reduce((e,t)=>(e[t]={},e),{})}})),r(r=>{var i=b().fourthContainer,o=b().detailsHeader,s=b().detailsContent;return i!==r.e&&n(e,r.e=i),o!==r.t&&n(t,r.t=o),s!==r.a&&n(a,r.a=s),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),r(e=>{var r=b().panelCloseBtn,i=b().panelCloseBtnIcon,a=b().firstContainer,o=b().row,s=b().routerExplorerContainer,c=b().routerExplorer,u=b().secondContainer,d=b().matchesContainer,p=b().detailsHeader,h=b().detailsContent,_=b().detailsHeader,y=b().routeMatchesToggle,x=!E(),S=T(b().routeMatchesToggleBtn(!E(),!0)),C=E(),w=T(b().routeMatchesToggleBtn(!!E(),!1)),D=b().detailsHeaderInfo,O=T(b().routesContainer);return r!==e.e&&n(t,e.e=r),i!==e.t&&f(l,`class`,e.t=i),a!==e.a&&n(m,e.a=a),o!==e.o&&n(g,e.o=o),s!==e.i&&n(v,e.i=s),c!==e.n&&n(M,e.n=c),u!==e.s&&n(I,e.s=u),d!==e.h&&n(L,e.h=d),p!==e.r&&n(R,e.r=p),h!==e.d&&n(z,e.d=h),_!==e.l&&n(V,e.l=_),y!==e.u&&n(U,e.u=y),x!==e.c&&(W.disabled=e.c=x),S!==e.w&&n(W,e.w=S),C!==e.m&&(G.disabled=e.m=C),w!==e.f&&n(G,e.f=w),D!==e.y&&n(K,e.y=D),O!==e.g&&n(q,e.g=O),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),e})()};function je({getValue:e}){let[t,n]=s(!1),i=null,a=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),i&&clearTimeout(i),i=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return _(()=>{i&&clearTimeout(i)}),(()=>{var e=Ee();return e.$$click=a,c(e,()=>t()?`✅`:`📋`),r(()=>f(e,`title`,t()?`Copied!`:`Copy`)),e})()}a([`click`,`mousedown`]);var Me=t(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);function Ne(){let e=S();return(()=>{var t=Me(),n=t.firstChild.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,s=o.firstChild,c=o.nextSibling,l=c.nextSibling,u=l.firstChild,d=l.nextSibling,p=d.firstChild,m=d.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,k=D.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,N=M.firstChild,P=M.nextSibling,ee=P.nextSibling,F=ee.firstChild,I=ee.nextSibling,L=I.firstChild,R=I.nextSibling,z=R.firstChild.nextSibling,B=z.nextSibling,V=R.nextSibling,H=V.firstChild,U=V.nextSibling,W=U.firstChild,G=U.nextSibling,K=G.firstChild,q=K.nextSibling,J=q.nextSibling,te=J.nextSibling,ne=te.nextSibling,re=ne.nextSibling,ie=re.nextSibling,ae=ie.nextSibling,oe=ae.nextSibling,se=oe.nextSibling,ce=se.nextSibling,Y=ce.nextSibling,le=Y.nextSibling,ue=le.nextSibling,de=G.nextSibling,fe=de.firstChild,X=de.nextSibling,pe=X.firstChild,Z=X.nextSibling,me=Z.nextSibling,he=me.nextSibling,ge=he.firstChild,Q=he.nextSibling,_e=Q.firstChild,$=Q.nextSibling,ve=$.firstChild.firstChild,ye=ve.nextSibling,be=ye.nextSibling,xe=be.nextSibling,Se=xe.nextSibling,Ce=Se.nextSibling,we=Ce.nextSibling,Te=we.nextSibling,Ee=Te.nextSibling,De=Ee.nextSibling,Oe=De.nextSibling,ke=Oe.nextSibling,Ae=ke.nextSibling,je=Ae.nextSibling,Ne=je.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling,Ie=Fe.nextSibling;return f(n,`id`,`a-${e}`),f(r,`fill`,`url(#a-${e})`),f(a,`id`,`b-${e}`),f(o,`id`,`c-${e}`),f(s,`filter`,`url(#b-${e})`),f(c,`mask`,`url(#c-${e})`),f(u,`id`,`d-${e}`),f(d,`id`,`e-${e}`),f(p,`filter`,`url(#d-${e})`),f(m,`mask`,`url(#e-${e})`),f(g,`id`,`f-${e}`),f(_,`id`,`g-${e}`),f(v,`filter`,`url(#f-${e})`),f(y,`mask`,`url(#g-${e})`),f(x,`id`,`h-${e}`),f(S,`id`,`i-${e}`),f(C,`filter`,`url(#h-${e})`),f(w,`mask`,`url(#i-${e})`),f(E,`id`,`j-${e}`),f(D,`id`,`k-${e}`),f(O,`filter`,`url(#j-${e})`),f(k,`mask`,`url(#k-${e})`),f(j,`id`,`l-${e}`),f(M,`id`,`m-${e}`),f(N,`filter`,`url(#l-${e})`),f(P,`mask`,`url(#m-${e})`),f(F,`id`,`n-${e}`),f(I,`id`,`o-${e}`),f(L,`filter`,`url(#n-${e})`),f(R,`mask`,`url(#o-${e})`),f(z,`id`,`p-${e}`),f(B,`fill`,`url(#p-${e})`),f(H,`id`,`q-${e}`),f(U,`id`,`r-${e}`),f(W,`filter`,`url(#q-${e})`),f(G,`mask`,`url(#r-${e})`),f(K,`id`,`s-${e}`),f(q,`fill`,`url(#s-${e})`),f(J,`id`,`t-${e}`),f(te,`fill`,`url(#t-${e})`),f(ne,`id`,`u-${e}`),f(re,`fill`,`url(#u-${e})`),f(ie,`id`,`v-${e}`),f(ae,`fill`,`url(#v-${e})`),f(oe,`id`,`w-${e}`),f(se,`fill`,`url(#w-${e})`),f(ce,`id`,`x-${e}`),f(Y,`fill`,`url(#x-${e})`),f(le,`id`,`y-${e}`),f(ue,`fill`,`url(#y-${e})`),f(fe,`id`,`z-${e}`),f(X,`id`,`A-${e}`),f(pe,`filter`,`url(#z-${e})`),f(Z,`id`,`B-${e}`),f(me,`fill`,`url(#B-${e})`),f(me,`mask`,`url(#A-${e})`),f(ge,`id`,`C-${e}`),f(Q,`id`,`D-${e}`),f(_e,`filter`,`url(#C-${e})`),f($,`mask`,`url(#D-${e})`),f(ve,`id`,`E-${e}`),f(ye,`fill`,`url(#E-${e})`),f(be,`id`,`F-${e}`),f(xe,`stroke`,`url(#F-${e})`),f(Se,`id`,`G-${e}`),f(Ce,`stroke`,`url(#G-${e})`),f(we,`id`,`H-${e}`),f(Te,`stroke`,`url(#H-${e})`),f(Ee,`id`,`I-${e}`),f(De,`stroke`,`url(#I-${e})`),f(Oe,`id`,`J-${e}`),f(ke,`stroke`,`url(#J-${e})`),f(Ae,`id`,`K-${e}`),f(je,`stroke`,`url(#K-${e})`),f(Ne,`id`,`L-${e}`),f(Pe,`stroke`,`url(#L-${e})`),f(Fe,`id`,`M-${e}`),f(Ie,`stroke`,`url(#M-${e})`),t})()}var Pe=t(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);function Fe({initialIsOpen:t,panelProps:a={},closeButtonProps:l={},toggleButtonProps:d={},position:f=`bottom-left`,containerElement:m=`footer`,router:g,routerState:_,shadowDOMTarget:v}){let[y,b]=s(),x,[S,C]=B(`tanstackRouterDevtoolsOpen`,t),[E,D]=B(`tanstackRouterDevtoolsHeight`,null),[O,k]=s(!1),[A,j]=s(!1),M=W(),N=R(),P=(e,t)=>{if(t.button!==0)return;j(!0);let n={originalHeight:e?.getBoundingClientRect().height??0,pageY:t.pageY},r=e=>{let t=n.pageY-e.pageY,r=n.originalHeight+t;D(r),C(!(r<70))},i=()=>{j(!1),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseUp`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)};S(),p(()=>{k(S()??!1)}),p(()=>{if(O()){let e=y()?.parentElement?.style.paddingBottom,t=()=>{let e=x.getBoundingClientRect().height;y()?.parentElement&&b(t=>(t?.parentElement&&(t.parentElement.style.paddingBottom=`${e}px`),t))};if(t(),typeof window<`u`)return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),y()?.parentElement&&typeof e==`string`&&b(t=>(t.parentElement.style.paddingBottom=e,t))}}else y()?.parentElement&&b(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),p(()=>{if(y()){let e=y(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}});let{style:ee={},...F}=a,{style:I={},onClick:L,...z}=l,{onClick:V,class:H,...U}=d;if(!M())return null;let G=h(()=>E()??500),K=h(()=>T(N().devtoolsPanelContainer,N().devtoolsPanelContainerVisibility(!!S()),N().devtoolsPanelContainerResizing(A),N().devtoolsPanelContainerAnimation(O(),G()+16))),q=h(()=>({height:`${G()}px`,...ee||{}})),J=h(()=>T(N().mainCloseBtn,N().mainCloseBtnPosition(f),N().mainCloseBtnAnimation(!!S()),H));return i(u,{component:m,ref:b,class:`TanStackRouterDevtools`,get children(){return[i(e.Provider,{value:{onCloseClick:L??(()=>{})},get children(){return i(Ae,o({ref(e){var t=x;typeof t==`function`?t(e):x=e}},F,{router:g,routerState:_,className:K,style:q,get isOpen(){return O()},setIsOpen:C,handleDragStart:e=>P(x,e),shadowDOMTarget:v}))}}),(()=>{var e=Pe(),t=e.firstChild,a=t.firstChild,s=a.nextSibling,l=t.nextSibling,u=l.nextSibling;return w(e,o(U,{"aria-label":`Open TanStack Router Devtools`,onClick:e=>{C(!0),V&&V(e)},get class(){return J()}}),!1,!0),c(a,i(Ne,{})),c(s,i(Ne,{})),r(e=>{var r=N().mainCloseBtnIconContainer,i=N().mainCloseBtnIconOuter,o=N().mainCloseBtnIconInner,c=N().mainCloseBtnDivider,d=N().routerLogoCloseButton;return r!==e.e&&n(t,e.e=r),i!==e.t&&n(a,e.t=i),o!==e.a&&n(s,e.a=o),c!==e.o&&n(l,e.o=c),d!==e.i&&n(u,e.i=d),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()]}})}export{Fe as FloatingTanStackRouterDevtools,Fe as default};