const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/new-Cd3tOpxu.js","assets/js/vendor-CfpF3efx.js","assets/js/rolldown-runtime-CescaEWC.js","assets/js/vendor-react-Dqtmilgm.js","assets/js/graphs-o4hOgSpa.js","assets/js/faq-xQRGgGGy.js","assets/js/routes-MB2ptHFA.js","assets/js/obs-CmKknzKl.js","assets/js/histories-B_iq-8MR.js","assets/js/window-Ca83_S1L.js","assets/js/vendor-i18n-DFMPNbhM.js","assets/js/vendor-jszip-BemITh_p.js","assets/js/vendor-recharts-CltENXDe.js","assets/js/vendor-styled-zRjDkof3.js","assets/js/obs-C9qznMkO.js","assets/js/obsLayoutStore-VWYliVl_.js","assets/js/stores-C0mYd_Ps.js","assets/js/_id-Bt-8R08v.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-CescaEWC.js";import{Ot as t,ht as n,kt as r}from"./vendor-CfpF3efx.js";import{a as i,b as a,c as o,d as s,f as c,g as l,h as u,i as d,l as f,m as p,o as m,p as h,s as ee,u as te,v as ne,x as re}from"./vendor-react-Dqtmilgm.js";import{a as g,i as _,n as v,r as ie,s as ae,t as oe}from"./vendor-styled-zRjDkof3.js";import{t as se}from"./vendor-jszip-BemITh_p.js";import{n as ce,t as le}from"./vendor-i18n-DFMPNbhM.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var y=e(a()),ue=e(re()),de=e(t()),b=e(r()),fe=`modulepreload`,pe=function(e){return`/cc-war-record/`+e},me={};const x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=pe(t,n),t in me)return;me[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:fe,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var he=g`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,ge=g`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,_e=v.span`
  display: inline-block;
  position: relative;
  animation: ${({$direction:e})=>e===`up`?_`
            ${he}
          `:_`
            ${ge}
          `}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;const ve=(0,b.memo)(({children:e,suffix:t})=>{let n=(0,b.useRef)(e),[r,i]=(0,b.useState)(`up`);return(0,b.useEffect)(()=>{n.current!==e&&(i(e>n.current?`up`:`down`),n.current=e)},[e]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_e,{$direction:r,children:e},`${e}`),t]})});ve.displayName=`AnimatedNumber`;var ye=v.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  gap: 0.4rem;
  line-height: 1;
  transition: all ${({theme:e})=>e.transitions.base};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;

  /* サイズ */
  ${({size:e=`md`,theme:t,icon:n})=>{if(n)return`
        padding: ${t.spacing[1]};
        font-size: 1rem;
      `;switch(e){case`sm`:return`
          padding: ${t.spacing[2]} ${t.spacing[3]};
          font-size: 0.875rem;
        `;case`lg`:return`
          padding: ${t.spacing[4]} ${t.spacing[6]};
          font-size: 1.125rem;
        `;default:return`
          padding: ${t.spacing[3]} ${t.spacing[4]};
          font-size: 1rem;
        `}}}

  /* バリアント */
  ${({variant:e=`primary`,theme:t})=>{switch(e){case`primary`:return`
          background: ${t.gradients.primary};
          color: white;
          border: none;
          box-shadow: ${t.shadows.glow};

          &:hover:not(:disabled) {
            transform: translateY(-2px) scale(1.02);
            box-shadow: ${t.shadows.glowLg};
          }

          &:active:not(:disabled) {
            transform: translateY(0) scale(0.98);
            box-shadow: ${t.shadows.glow};
          }

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: ${t.gradients.shimmer};
            transition: left ${t.transitions.slow};
          }

          &:hover::before {
            left: 100%;
          }
        `;case`secondary`:return`
          background: ${t.gradients.glass};
          backdrop-filter: ${t.blur.md};
          color: ${t.colors.text};
          border: 1px solid ${t.colors.borderLight};
          box-shadow: ${t.shadows.sm};

          &:hover:not(:disabled) {
            border-color: ${t.colors.border};
            transform: translateY(-2px);
            box-shadow: ${t.shadows.md};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${t.shadows.sm};
          }
        `;case`outline`:return`
          background: ${t.gradients.glass};
          backdrop-filter: ${t.blur.md};
          color: ${t.colors.primary[600]};
          border: 1px solid ${t.colors.borderLight};
          box-shadow: ${t.shadows.sm};

          &:hover:not(:disabled) {
            border-color: ${t.colors.border};
            transform: translateY(-2px);
            box-shadow: ${t.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${t.shadows.sm};
          }
        `;case`ghost`:return`
          background-color: transparent;
          color: ${t.colors.textSecondary};
          border: none;

          &:hover:not(:disabled) {
            background: ${t.gradients.glass};
            backdrop-filter: ${t.blur.sm};
          }

          &:active:not(:disabled) {
            background: ${t.isDark?`rgba(255, 255, 255, 0.1)`:t.colors.gray[200]};
          }
        `;case`win`:return`
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.15) 100%);
          backdrop-filter: ${t.blur.md};
          color: ${t.colors.win[700]};
          border: 1px solid rgba(34, 197, 94, 0.2);
          box-shadow: ${t.shadows.sm};

          &:hover:not(:disabled) {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.2) 100%);
            border-color: rgba(34, 197, 94, 0.3);
            transform: translateY(-2px);
            box-shadow: ${t.shadows.md}, 0 4px 12px rgba(34, 197, 94, 0.2);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${t.shadows.sm};
          }
        `;case`defeat`:return`
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%);
          backdrop-filter: ${t.blur.md};
          color: ${t.colors.defeat[700]};
          border: 1px solid rgba(239, 68, 68, 0.2);
          box-shadow: ${t.shadows.sm};

          &:hover:not(:disabled) {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.2) 100%);
            border-color: rgba(239, 68, 68, 0.3);
            transform: translateY(-2px);
            box-shadow: ${t.shadows.md}, 0 4px 12px rgba(239, 68, 68, 0.2);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${t.shadows.sm};
          }
        `}}}

  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({fit:e})=>e&&`width: fit-content;`}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      cursor: not-allowed;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary[500]};
    outline-offset: 2px;
  }
`;const S=(0,b.memo)(({children:e,icon:t,...n})=>(0,y.jsx)(ye,{...n,icon:t,children:t||e}));S.displayName=`Button`;var be=v.div`
  display: flex;
  flex-direction: ${({direction:e=`vertical`})=>e===`vertical`?`column`:`row`};
  width: ${({fullWidth:e})=>e?`100%`:`auto`};

  /* 横並びの場合はボタンを折り返す */
  ${({direction:e})=>e===`horizontal`&&`flex-wrap: wrap;`}

  /* 隣接ボタンの角を削除 */
  button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  /* hover時の浮き上がりを無効化 */
  button:hover:not(:disabled) {
    transform: none;
  }

  ${({direction:e=`vertical`})=>e===`vertical`?`
    button:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    button:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `:`
    button:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `}
`;const xe=(0,b.memo)(({direction:e=`vertical`,fullWidth:t=!1,children:n})=>(0,y.jsx)(be,{direction:e,fullWidth:t,children:n}));xe.displayName=`ButtonGroup`;var Se=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({fit:e})=>e&&`width: fit-content;`}
`,Ce=v.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,we=v.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Te=v.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({theme:e})=>e.colors.gray[500]};
  z-index: 1;
`,Ee=v.input`
  display: block;
  padding: ${({theme:e,inputSize:t=`md`})=>{switch(t){case`sm`:return`${e.spacing[2]} ${e.spacing[3]}`;case`lg`:return`${e.spacing[4]} ${e.spacing[5]}`;default:return`${e.spacing[3]} ${e.spacing[4]}`}}};
  padding-right: ${({hasIcon:e,inputSize:t=`md`})=>{if(e)switch(t){case`sm`:return`2.5rem`;case`lg`:return`3rem`;default:return`2.75rem`}}};
  font-size: ${({size:e=`md`})=>{switch(e){case`sm`:return`0.875rem`;case`lg`:return`1.125rem`;default:return`1rem`}}};
  line-height: 1;
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.error[500]:e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  outline: none;
  transition: all ${({theme:e})=>e.transitions.base};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  box-shadow: ${({theme:e})=>e.shadows.sm};
  color: ${({theme:e})=>e.colors.text};
  width: 100%;

  &:focus {
    border-color: ${({theme:e,hasError:t})=>t?e.colors.error[500]:e.colors.border};
    box-shadow: ${({theme:e,hasError:t})=>t?e.shadows.md:`${e.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1)`};
    transform: translateY(-1px);
  }

  &:hover:not(:disabled) {
    border-color: ${({theme:e,hasError:t})=>t?e.colors.error[600]:e.colors.border};
  }

  &:disabled {
    background: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.03)`:`rgba(0, 0, 0, 0.03)`};
    backdrop-filter: ${({theme:e})=>e.blur.sm};
    color: ${({theme:e})=>e.colors.textSecondary};
    border-color: ${({theme:e})=>e.colors.borderLight};
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textTertiary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({theme:e})=>e.isDark?`rgba(26, 32, 44, 1)`:`rgba(255, 255, 255, 1)`} inset !important;
    -webkit-text-fill-color: ${({theme:e})=>e.colors.text} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`,De=v.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.error[500]};
`;const Oe=(0,b.memo)((0,b.forwardRef)(({label:e,error:t,fullWidth:n,inputSize:r=`md`,icon:i,...a},o)=>(0,y.jsxs)(Se,{fit:!!i,fullWidth:n,children:[e&&(0,y.jsx)(Ce,{children:e}),(0,y.jsxs)(we,{children:[(0,y.jsx)(Ee,{ref:o,hasError:!!t,inputSize:r,hasIcon:!!i,...a}),i&&(0,y.jsx)(Te,{children:i})]}),t&&(0,y.jsx)(De,{children:t})]})));Oe.displayName=`Input`;const ke=v.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  transition: border-color ${({theme:e})=>e.transitions.base};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary[500]};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
  }

  &:disabled {
    background: ${({theme:e})=>e.colors.gray[100]};
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Ae=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,y.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,y.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]}),C=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,y.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),je=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),(0,y.jsx)(`polyline`,{points:`9,22 9,12 15,12 15,22`})]}),Me=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,y.jsx)(`polyline`,{points:`12,6 12,12 16,14`})]}),Ne=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`line`,{x1:`18`,y1:`20`,x2:`18`,y2:`10`}),(0,y.jsx)(`line`,{x1:`12`,y1:`20`,x2:`12`,y2:`4`}),(0,y.jsx)(`line`,{x1:`6`,y1:`20`,x2:`6`,y2:`14`})]}),Pe=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`path`,{d:`m18 2 4 4-18 18H0v-4L18 2z`}),(0,y.jsx)(`path`,{d:`m14.5 5.5 4 4`})]}),Fe=()=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,y.jsx)(`polyline`,{points:`20,6 9,17 4,12`})}),Ie=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),(0,y.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})]}),Le=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`polyline`,{points:`3,6 5,6 21,6`}),(0,y.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}),(0,y.jsx)(`line`,{x1:`10`,y1:`11`,x2:`10`,y2:`17`}),(0,y.jsx)(`line`,{x1:`14`,y1:`11`,x2:`14`,y2:`17`})]}),Re=()=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,y.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})}),ze=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`polyline`,{points:`1,4 1,10 7,10`}),(0,y.jsx)(`path`,{d:`M3.51 15a9 9 0 1 0 2.13-9.36L1 10`})]}),Be=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,y.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,y.jsx)(`polyline`,{points:`14,2 14,8 20,8`}),(0,y.jsx)(`line`,{x1:`16`,y1:`13`,x2:`8`,y2:`13`}),(0,y.jsx)(`line`,{x1:`16`,y1:`17`,x2:`8`,y2:`17`}),(0,y.jsx)(`polyline`,{points:`10,9 9,9 8,9`})]}),Ve=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`}),(0,y.jsx)(`polyline`,{points:`12,19 5,12 12,5`})]}),He=()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,y.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,y.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),Ue=()=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,y.jsx)(`path`,{d:`M7 10l5 5 5-5z`})}),We=()=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,y.jsx)(`path`,{d:`M12 19V5M5 12L12 5L19 12`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Ge=()=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,y.jsx)(`path`,{d:`M12 5V19M19 12L12 19L5 12`,strokeLinecap:`round`,strokeLinejoin:`round`})}),w=(0,b.memo)(({size:e=24,color:t=`currentColor`})=>(0,y.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,y.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,y.jsx)(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]}));w.displayName=`DownloadIcon`;const T=(0,b.memo)(({size:e=24,color:t=`currentColor`})=>(0,y.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,y.jsx)(`polyline`,{points:`17 8 12 3 7 8`}),(0,y.jsx)(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`})]}));T.displayName=`UploadIcon`;const E=(0,b.memo)(({size:e=24,color:t=`currentColor`})=>(0,y.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,y.jsx)(`path`,{d:`M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M21 21L16.65 16.65`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}));E.displayName=`SearchIcon`;const Ke=(0,b.memo)(({size:e=24,color:t=`currentColor`})=>(0,y.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 21H16`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M12 17V21`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`circle`,{cx:`6`,cy:`7`,r:`1.5`,fill:t}),(0,y.jsx)(`path`,{d:`M10 8L15 11L10 14V8Z`,fill:t})]}));Ke.displayName=`VideoIcon`;function qe(){return(0,y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`path`,{d:`M6 9H4.5a2.5 2.5 0 0 1 0-5H6`}),(0,y.jsx)(`path`,{d:`M18 9h1.5a2.5 2.5 0 0 0 0-5H18`}),(0,y.jsx)(`path`,{d:`M4 22h16`}),(0,y.jsx)(`path`,{d:`M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22`}),(0,y.jsx)(`path`,{d:`M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22`}),(0,y.jsx)(`path`,{d:`M18 2H6v7a6 6 0 0 0 12 0V2Z`})]})}function Je(){return(0,y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`line`,{x1:`19`,y1:`5`,x2:`5`,y2:`19`}),(0,y.jsx)(`circle`,{cx:`6.5`,cy:`6.5`,r:`2.5`}),(0,y.jsx)(`circle`,{cx:`17.5`,cy:`17.5`,r:`2.5`})]})}function Ye(){return(0,y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`polyline`,{points:`4 7 4 4 20 4 20 7`}),(0,y.jsx)(`line`,{x1:`9`,y1:`20`,x2:`15`,y2:`20`}),(0,y.jsx)(`line`,{x1:`12`,y1:`4`,x2:`12`,y2:`20`})]})}function Xe(){return(0,y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`}),(0,y.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`}),(0,y.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`}),(0,y.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`})]})}function Ze(){return(0,y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`line`,{x1:`4`,y1:`9`,x2:`20`,y2:`9`}),(0,y.jsx)(`line`,{x1:`4`,y1:`15`,x2:`20`,y2:`15`}),(0,y.jsx)(`line`,{x1:`10`,y1:`3`,x2:`8`,y2:`21`}),(0,y.jsx)(`line`,{x1:`16`,y1:`3`,x2:`14`,y2:`21`})]})}function Qe(){return(0,y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,y.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,y.jsx)(`line`,{x1:`15`,y1:`9`,x2:`9`,y2:`15`}),(0,y.jsx)(`line`,{x1:`9`,y1:`9`,x2:`15`,y2:`15`})]})}function $e(e){return(0,y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,y.jsx)(`text`,{x:`3`,y:`17`,fontFamily:`serif`,fontSize:`16`,fontStyle:`italic`,fill:`currentColor`,children:`f(x)`})})}const et=(0,b.memo)(({size:e=24,color:t=`currentColor`})=>(0,y.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,y.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`16`,rx:`2`,stroke:t,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`M3 8h18`,stroke:t,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`6`,cy:`6`,r:`0.5`,fill:t}),(0,y.jsx)(`circle`,{cx:`8`,cy:`6`,r:`0.5`,fill:t}),(0,y.jsx)(`circle`,{cx:`10`,cy:`6`,r:`0.5`,fill:t})]}));et.displayName=`WindowIcon`;const tt=(0,b.memo)(()=>(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,y.jsx)(`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`})}));tt.displayName=`SquareIcon`;const nt=(0,b.memo)(()=>(0,y.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,y.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`}),(0,y.jsx)(`path`,{d:`M12 16V12M12 8H12.01`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]}));nt.displayName=`InfoIcon`;var rt=v.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: ${({size:e=24})=>e}px;
  height: ${({size:e=24})=>e}px;
  color: ${({color:e})=>e||`inherit`};

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;const D=(0,b.memo)(({name:e,size:t=24,color:n,onClick:r,className:i})=>(0,y.jsx)(rt,{size:t,color:n,onClick:r,className:i,children:(()=>{switch(e){case`hamburger`:return(0,y.jsx)(Ae,{});case`close`:return(0,y.jsx)(C,{});case`home`:return(0,y.jsx)(je,{});case`history`:return(0,y.jsx)(Me,{});case`chart`:return(0,y.jsx)(Ne,{});case`edit`:return(0,y.jsx)(Pe,{});case`accept`:return(0,y.jsx)(Fe,{});case`add`:return(0,y.jsx)(Ie,{});case`delete`:return(0,y.jsx)(Le,{});case`minus`:return(0,y.jsx)(Re,{});case`revert`:return(0,y.jsx)(ze,{});case`detail`:return(0,y.jsx)(Be,{});case`back`:return(0,y.jsx)(Ve,{});case`language`:return(0,y.jsx)(He,{});case`arrowDropDown`:return(0,y.jsx)(Ue,{});case`arrowUp`:return(0,y.jsx)(We,{});case`arrowDown`:return(0,y.jsx)(Ge,{});case`download`:return(0,y.jsx)(w,{});case`upload`:return(0,y.jsx)(T,{});case`search`:return(0,y.jsx)(E,{});case`video`:return(0,y.jsx)(Ke,{});case`trophy`:return(0,y.jsx)(qe,{});case`percent`:return(0,y.jsx)(Je,{});case`text`:return(0,y.jsx)(Ye,{});case`grid`:return(0,y.jsx)(Xe,{});case`hash`:return(0,y.jsx)(Ze,{});case`xCircle`:return(0,y.jsx)(Qe,{});case`function`:return(0,y.jsx)($e,{});case`window`:return(0,y.jsx)(et,{});case`square`:return(0,y.jsx)(tt,{});case`info`:return(0,y.jsx)(nt,{});default:return null}})()}));D.displayName=`Icon`;var it=g`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,at=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  position: relative;
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({width:e})=>e&&`width: ${e};`}
`,ot=v.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,st=v.button`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid ${({isOpen:e,hasError:t,theme:n})=>t?n.colors.error[500]:e?n.colors.border:n.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all ${({theme:e})=>e.transitions.base};
  box-shadow: ${({theme:e,isOpen:t})=>t?`${e.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1)`:e.shadows.sm};
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.colors.border};
    box-shadow: ${({theme:e})=>e.shadows.md};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e,hasError:t})=>t?e.colors.error[500]:e.colors.border};
    box-shadow: ${({theme:e})=>`${e.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1)`};
  }

  &:disabled {
    background: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.03)`:`rgba(0, 0, 0, 0.03)`};
    backdrop-filter: ${({theme:e})=>e.blur.sm};
    color: ${({theme:e})=>e.colors.textSecondary};
    border-color: ${({theme:e})=>e.colors.borderLight};
    cursor: not-allowed;
    opacity: 0.5;
  }
`,ct=v.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%) ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform ${({theme:e})=>e.transitions.base};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #26a1df;
`,lt=v.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>`${e.blur.md} brightness(${e.isDark?`0%`:`100%`})`};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>`${e.shadows.xl}, 0 0 0 1px rgba(38, 161, 223, 0.1)`};
  max-height: 300px;
  overflow-y: auto;
  z-index: 50;
  display: ${({isOpen:e})=>e?`block`:`none`};
  animation: ${it} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    border-radius: ${({theme:e})=>e.borderRadius.lg} ${({theme:e})=>e.borderRadius.lg} 0 0;
  }
`,ut=v.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  position: relative;
  background: ${({isSelected:e})=>e?`rgba(38, 161, 223, 0.1)`:`transparent`};
  font-weight: ${({isSelected:e})=>e?`600`:`500`};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({isSelected:e})=>e?`3px`:`0`};
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width ${({theme:e})=>e.transitions.base};
  }

  &:hover {
    background-color: rgba(38, 161, 223, 0.05);
    padding-left: ${({theme:e})=>e.spacing[5]};

    &::before {
      width: 3px;
    }
  }

  &:first-child {
    padding-top: ${({theme:e})=>e.spacing[4]};
  }

  &:last-child {
    padding-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,dt=v.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.error[500]};
`,ft=v.select`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;const pt=(0,b.memo)(({id:e,label:t,error:n,fullWidth:r,width:i,options:a,value:o,onChange:s,disabled:c})=>{let[l,u]=(0,b.useState)(!1),d=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&u(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let f=e=>{c||(u(!1),s&&s({target:{value:e}}))},p=a.find(e=>e.value===o)?.label||a[0]?.label||``;return(0,y.jsxs)(at,{ref:d,fullWidth:r,width:i,children:[t&&(0,y.jsx)(ot,{htmlFor:e,children:t}),(0,y.jsxs)(st,{type:`button`,onClick:()=>!c&&u(!l),isOpen:l,hasError:!!n,disabled:c,children:[p,(0,y.jsx)(ct,{isOpen:l,children:(0,y.jsx)(D,{name:`arrowDropDown`,size:24})})]}),(0,y.jsx)(lt,{isOpen:l,children:a.map(e=>(0,y.jsx)(ut,{onClick:()=>f(e.value),isSelected:e.value===o,children:e.label},e.value))}),(0,y.jsx)(ft,{id:e,value:o,onChange:s,disabled:c,tabIndex:-1,children:a.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))}),n&&(0,y.jsx)(dt,{children:n})]})});pt.displayName=`Select`;const mt=(e,t,n=600)=>e>=51?t.colors.success[n]:e>=40?t.colors.warning[n]:t.colors.error[n],ht=()=>new Date().toISOString(),gt=(e,t,n)=>{let r=new Date(e);if(!t){let e=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,`0`),n=String(r.getDate()).padStart(2,`0`),i=String(r.getHours()).padStart(2,`0`),a=String(r.getMinutes()).padStart(2,`0`);return`${e}-${t}-${n} ${i}:${a}`}return r.toLocaleDateString(t,n)},_t=(e,t)=>new Date(e).toLocaleDateString(t,{month:`numeric`,day:`numeric`}),vt=(e,t)=>new Date(e).toLocaleDateString(t,{year:`numeric`,month:`long`,day:`numeric`}),yt=e=>{let t=new Date(e),n=String(t.getHours()).padStart(2,`0`),r=String(t.getMinutes()).padStart(2,`0`);return`${n}:${r}`},bt=e=>e.length,xt=e=>e.filter(e=>e.isWin).length,St=e=>e.filter(e=>!e.isWin).length,Ct=e=>{let t=bt(e);if(t===0)return 0;let n=xt(e);return Math.round(n/t*100)},O={TANK:`tank`,HEALER:`healer`,MELEE_DPS:`melee_dps`,PHYSICAL_RANGED_DPS:`physical_ranged_dps`,MAGICAL_RANGED_DPS:`magical_ranged_dps`},k={[O.TANK]:{code:O.TANK,name:`タンク`,nameEn:`Tank`,color:`#3b82f6`},[O.HEALER]:{code:O.HEALER,name:`ヒーラー`,nameEn:`Healer`,color:`#10b981`},[O.MELEE_DPS]:{code:O.MELEE_DPS,name:`近接DPS`,nameEn:`MeleeDPS`,color:`#f59e0b`},[O.PHYSICAL_RANGED_DPS]:{code:O.PHYSICAL_RANGED_DPS,name:`物理遠隔DPS`,nameEn:`PhysicalRangedDPS`,color:`#8b5cf6`},[O.MAGICAL_RANGED_DPS]:{code:O.MAGICAL_RANGED_DPS,name:`魔法遠隔DPS`,nameEn:`MagicalRangedDPS`,color:`#ef4444`}},A={PALADIN:`PLD`,WARRIOR:`WAR`,DARK_KNIGHT:`DRK`,GUNBREAKER:`GNB`,WHITE_MAGE:`WHM`,SCHOLAR:`SCH`,ASTROLOGIAN:`AST`,SAGE:`SGE`,MONK:`MNK`,DRAGOON:`DRG`,NINJA:`NIN`,SAMURAI:`SAM`,REAPER:`RPR`,VIPER:`VPR`,BARD:`BRD`,MACHINIST:`MCH`,DANCER:`DNC`,BLACK_MAGE:`BLM`,SUMMONER:`SMN`,RED_MAGE:`RDM`,PICTOMANCER:`PCT`},wt={[A.PALADIN]:{code:A.PALADIN,name:`ナイト`,nameEn:`Paladin`,shortName:`PLD`,role:O.TANK,iconId:19,color:`#5EADDC`},[A.WARRIOR]:{code:A.WARRIOR,name:`戦士`,nameEn:`Warrior`,shortName:`WAR`,role:O.TANK,iconId:21,color:`#CF2621`},[A.DARK_KNIGHT]:{code:A.DARK_KNIGHT,name:`暗黒騎士`,nameEn:`DarkKnight`,shortName:`DRK`,role:O.TANK,iconId:32,color:`#D126CC`},[A.GUNBREAKER]:{code:A.GUNBREAKER,name:`ガンブレイカー`,nameEn:`Gunbreaker`,shortName:`GNB`,role:O.TANK,iconId:37,color:`#9C8542`},[A.WHITE_MAGE]:{code:A.WHITE_MAGE,name:`白魔道士`,nameEn:`WhiteMage`,shortName:`WHM`,role:O.HEALER,iconId:24,color:`#E6D8BC`},[A.SCHOLAR]:{code:A.SCHOLAR,name:`学者`,nameEn:`Scholar`,shortName:`SCH`,role:O.HEALER,iconId:28,color:`#8657FF`},[A.ASTROLOGIAN]:{code:A.ASTROLOGIAN,name:`占星術師`,nameEn:`Astrologian`,shortName:`AST`,role:O.HEALER,iconId:33,color:`#E6C84A`},[A.SAGE]:{code:A.SAGE,name:`賢者`,nameEn:`Sage`,shortName:`SGE`,role:O.HEALER,iconId:40,color:`#8FD14F`},[A.MONK]:{code:A.MONK,name:`モンク`,nameEn:`Monk`,shortName:`MNK`,role:O.MELEE_DPS,iconId:20,color:`#D69C00`},[A.DRAGOON]:{code:A.DRAGOON,name:`竜騎士`,nameEn:`Dragoon`,shortName:`DRG`,role:O.MELEE_DPS,iconId:22,color:`#4164CD`},[A.NINJA]:{code:A.NINJA,name:`忍者`,nameEn:`Ninja`,shortName:`NIN`,role:O.MELEE_DPS,iconId:30,color:`#AF1964`},[A.SAMURAI]:{code:A.SAMURAI,name:`侍`,nameEn:`Samurai`,shortName:`SAM`,role:O.MELEE_DPS,iconId:34,color:`#E46D04`},[A.REAPER]:{code:A.REAPER,name:`リーパー`,nameEn:`Reaper`,shortName:`RPR`,role:O.MELEE_DPS,iconId:39,color:`#965A90`},[A.VIPER]:{code:A.VIPER,name:`ヴァイパー`,nameEn:`Viper`,shortName:`VPR`,role:O.MELEE_DPS,iconId:41,color:`#B07830`},[A.BARD]:{code:A.BARD,name:`吟遊詩人`,nameEn:`Bard`,shortName:`BRD`,role:O.PHYSICAL_RANGED_DPS,iconId:23,color:`#91BA5E`},[A.MACHINIST]:{code:A.MACHINIST,name:`機工士`,nameEn:`Machinist`,shortName:`MCH`,role:O.PHYSICAL_RANGED_DPS,iconId:31,color:`#6EE1D6`},[A.DANCER]:{code:A.DANCER,name:`踊り子`,nameEn:`Dancer`,shortName:`DNC`,role:O.PHYSICAL_RANGED_DPS,iconId:38,color:`#D98B8A`},[A.BLACK_MAGE]:{code:A.BLACK_MAGE,name:`黒魔道士`,nameEn:`BlackMage`,shortName:`BLM`,role:O.MAGICAL_RANGED_DPS,iconId:25,color:`#A579D6`},[A.SUMMONER]:{code:A.SUMMONER,name:`召喚士`,nameEn:`Summoner`,shortName:`SMN`,role:O.MAGICAL_RANGED_DPS,iconId:27,color:`#2D9B78`},[A.RED_MAGE]:{code:A.RED_MAGE,name:`赤魔道士`,nameEn:`RedMage`,shortName:`RDM`,role:O.MAGICAL_RANGED_DPS,iconId:35,color:`#E87B7B`},[A.PICTOMANCER]:{code:A.PICTOMANCER,name:`ピクトマンサー`,nameEn:`Pictomancer`,shortName:`PCT`,role:O.MAGICAL_RANGED_DPS,iconId:42,color:`#D4C05C`}},Tt=e=>wt[e],Et=e=>{let t=Tt(e);if(!t)return``;let n=``;switch(t.role){case O.TANK:n=`01_TANK`;break;case O.HEALER:n=`02_HEALER`;break;case O.MELEE_DPS:case O.PHYSICAL_RANGED_DPS:case O.MAGICAL_RANGED_DPS:n=`03_DPS`;break}return`/cc-war-record/img/${n}/Job/${t.nameEn}.png`},Dt=e=>{let t=``;switch(e){case O.TANK:t=`TankRole`;break;case O.HEALER:t=`HealerRole`;break;case O.MELEE_DPS:t=`MeleeDPS`;break;case O.PHYSICAL_RANGED_DPS:t=`PhysicalRangedDPS`;break;case O.MAGICAL_RANGED_DPS:t=`MagicalRangedDPS`;break}return`/cc-war-record/img/00_ROLE/${t}.png`};O.TANK,O.HEALER,O.MELEE_DPS,O.PHYSICAL_RANGED_DPS,O.MAGICAL_RANGED_DPS,O.TANK,O.HEALER,O.MELEE_DPS,O.PHYSICAL_RANGED_DPS,O.MAGICAL_RANGED_DPS;const Ot=e=>{let t=Object.values(A);return e.sort((e,n)=>t.indexOf(e)-t.indexOf(n))},j={BUILD_TIMESTAMP:`app-build-timestamp`,THEME:`cc-war-record-theme`,CHARACTERS:`cc-war-record-characters`,MATCH_RECORDS:`cc-war-record-match-records`,HISTORIES:`cc-war-record-histories`,HISTORY:"histories-${uuid}",RADAR_CHART_JOBS:`cc-war-record:radar-chart-jobs`},M=(e,t)=>{try{if(typeof window>`u`)return t;let n=window.localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch(n){return console.error(`Error reading from localStorage (key: ${e}):`,n),t}},N=(e,t)=>{try{if(typeof window>`u`)return;window.localStorage.setItem(e,JSON.stringify(t))}catch(t){console.error(`Error writing to localStorage (key: ${e}):`,t)}},kt=e=>{try{if(typeof window>`u`)return;window.localStorage.removeItem(e)}catch(t){console.error(`Error removing from localStorage (key: ${e}):`,t)}},P={THE_PALAISTRA:`THE_PALAISTRA`,VOLCANIC_HEART:`VOLCANIC_HEART`,CLOUD_NINE:`CLOUD_NINE`,TOUHOU_KARAKURI_GOTEN:`TOUHOU_KARAKURI_GOTEN`,RED_SANDS:`RED_SANDS`,BAYSIDE_BATTLEGROUND:`BAYSIDE_BATTLEGROUND`},F={ARENA:`arena`,SKY:`sky`,VOLCANIC:`volcanic`,WATER:`water`,CASTLE:`castle`,URBAN:`urban`,DESERT:`desert`},I={SMALL:`small`,MEDIUM:`medium`,LARGE:`large`},L={CENTRAL_CRYSTAL:`central_crystal`,MULTI_LEVEL:`multi_level`,NARROW_PATHS:`narrow_paths`,OPEN_AREA:`open_area`,ENVIRONMENTAL_HAZARDS:`environmental_hazards`,VERTICAL_MOVEMENT:`vertical_movement`};P.THE_PALAISTRA,P.THE_PALAISTRA,F.ARENA,I.MEDIUM,L.CENTRAL_CRYSTAL,L.OPEN_AREA,P.VOLCANIC_HEART,P.VOLCANIC_HEART,F.VOLCANIC,I.MEDIUM,L.ENVIRONMENTAL_HAZARDS,L.CENTRAL_CRYSTAL,P.CLOUD_NINE,P.CLOUD_NINE,F.SKY,I.LARGE,L.MULTI_LEVEL,L.VERTICAL_MOVEMENT,P.TOUHOU_KARAKURI_GOTEN,P.TOUHOU_KARAKURI_GOTEN,F.CASTLE,I.MEDIUM,L.MULTI_LEVEL,L.NARROW_PATHS,L.ENVIRONMENTAL_HAZARDS,P.RED_SANDS,P.RED_SANDS,F.DESERT,I.LARGE,L.OPEN_AREA,L.ENVIRONMENTAL_HAZARDS,P.BAYSIDE_BATTLEGROUND,P.BAYSIDE_BATTLEGROUND,F.WATER,I.LARGE,L.OPEN_AREA,L.CENTRAL_CRYSTAL,L.ENVIRONMENTAL_HAZARDS;const At=(e,t)=>t(`maps.${e}`);var R=[P.THE_PALAISTRA,P.VOLCANIC_HEART,P.TOUHOU_KARAKURI_GOTEN,P.BAYSIDE_BATTLEGROUND,P.CLOUD_NINE,P.RED_SANDS],z=new Date(`2022-01-01T00:00:00+09:00`),B=5400*1e3;const V=(e=new Date)=>{let t=e.getTime()-z.getTime(),n=Math.floor(t/B)%R.length;return R[n]},H=(e=new Date)=>{let t=e.getTime()-z.getTime(),n=(Math.floor(t/B)%R.length+1)%R.length;return R[n]},jt=(e=new Date)=>{let t=(e.getTime()-z.getTime())%B,n=B-t;return new Date(e.getTime()+n)},Mt=(e,t=new Date)=>{if(V(t)===e)return jt(t);let n=t.getTime()-z.getTime(),r=Math.floor(n/B)%R.length,i=R.indexOf(e)-r;i<=0&&(i+=R.length);let a=n%B,o=B-a,s=t.getTime()+o+(i-1)*B;return new Date(s)},Nt=(e,t=new Date)=>{if(V(t)===e){let e=(t.getTime()-z.getTime())%B,n=new Date(t.getTime()-e),r=new Date(n.getTime()+B);return{startTime:n,endTime:r}}let n=Mt(e,t),r=new Date(n.getTime()+B);return{startTime:n,endTime:r}},Pt=()=>`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)}),Ft=()=>{if(typeof window>`u`)return 0;let e=document.createElement(`div`);e.style.visibility=`hidden`,e.style.overflow=`scroll`,e.style.width=`100px`,e.style.position=`absolute`,e.style.top=`-9999px`,document.body.appendChild(e);let t=document.createElement(`div`);t.style.width=`100%`,e.appendChild(t);let n=e.offsetWidth-t.offsetWidth;return document.body.removeChild(e),n};var It=e(se()),Lt=[j.CHARACTERS,j.MATCH_RECORDS,j.HISTORIES,j.RADAR_CHART_JOBS];const Rt=async()=>{let e=new It.default;Lt.forEach(t=>{let n=localStorage.getItem(t);if(n){let r=`${t.replace(/^cc-war-record[-:]?/,``)}.json`;e.file(r,n)}});let t=[];for(let e=0;e<localStorage.length;e++){let n=localStorage.key(e);n?.startsWith(`histories-`)&&t.push(n)}t.forEach(t=>{let n=localStorage.getItem(t);n&&e.file(`${t}.json`,n)});let n=await e.generateAsync({type:`blob`}),r=`cc-war-record-backup-${new Date().toISOString().replace(/[-:]/g,``).replace(/\.\d{3}Z$/,``).replace(`T`,`-`)}.zip`,i=URL.createObjectURL(n),a=document.createElement(`a`);a.href=i,a.download=r,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},zt=async e=>{let t=await new It.default().loadAsync(e),n=new Set,r=[`characters`,`match-records`,`histories`,`radar-chart-jobs`],i=new Map,a=[];t.forEach((e,t)=>{if(t.dir)return;let o=e.replace(/\.json$/,``);if(!(o.startsWith(`histories-`)||r.some(e=>o===e)))throw Error(`BACKUP_FILE_CORRUPTED`);n.add(o),a.push((async()=>{let e=await t.async(`text`);try{JSON.parse(e)}catch{throw Error(`BACKUP_FILE_CORRUPTED`)}let n;n=o.startsWith(`histories-`)?o:o.includes(`:`)?`cc-war-record:${o}`:`cc-war-record-${o}`,i.set(n,localStorage.getItem(n)),localStorage.setItem(n,e)})())});try{await Promise.all(a)}catch(e){throw i.forEach((e,t)=>{e===null?localStorage.removeItem(t):localStorage.setItem(t,e)}),e}};var Bt=v.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: contain;
  display: inline-block;
  filter: brightness(1.25);
`,Vt=v.div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background-color: ${({bgColor:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${({size:e})=>Math.max(e*.3,10)}px;
`;const Ht=(0,b.memo)(({job:e,size:t=32,alt:n,className:r})=>{let i=Et(e),a=e,o=e=>{let t=Tt(e);return t?t.color:`#6B7280`};return i?(0,y.jsx)(Bt,{src:i,alt:n||e,size:t,className:r,onError:i=>{let s=i.target;s.style.display=`none`;let c=document.createElement(`div`);c.className=r||``,c.style.cssText=`
          width: ${t}px;
          height: ${t}px;
          background-color: ${o(e)};
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: ${Math.max(t*.3,10)}px;
        `,c.textContent=a,c.title=n||e,s.parentNode&&s.parentNode.insertBefore(c,s)}}):(0,y.jsx)(Vt,{size:t,bgColor:o(e),className:r,title:n||e,children:a})});Ht.displayName=`JobIcon`;var Ut=v.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: contain;
  display: inline-block;
`,Wt=v.div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  background-color: ${({bgColor:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${({size:e})=>Math.max(e*.3,10)}px;
`;const Gt=(0,b.memo)(({role:e,size:t=32,alt:n,className:r})=>{let i=Dt(e),a=k[e]?.name||e,o=e=>{let t=k[e];return t?t.color:`#6B7280`};return i?(0,y.jsx)(Ut,{src:i,alt:n||a,size:t,className:r,onError:i=>{let s=i.target;s.style.display=`none`;let c=document.createElement(`div`);c.className=r||``,c.style.cssText=`
          width: ${t}px;
          height: ${t}px;
          background-color: ${o(e)};
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: ${Math.max(t*.3,10)}px;
        `,c.textContent=a,c.title=n||a,s.parentNode&&s.parentNode.insertBefore(c,s)}}):(0,y.jsx)(Wt,{size:t,bgColor:o(e),className:r,title:n||a,children:a})});Gt.displayName=`RoleIcon`;const Kt=()=>{let[e,t]=(0,b.useState)(()=>V()),[n,r]=(0,b.useState)(()=>H());return(0,b.useEffect)(()=>{t(V()),r(H());let e=()=>{let n=new Date,i=jt(n).getTime()-n.getTime();return setTimeout(()=>{t(V()),r(H()),e()},i)},n=e();return()=>{clearTimeout(n)}},[]),{currentMap:e,nextMap:n}},U=()=>{let{t:e,i18n:t}=m();return{t:e,i18n:t,currentLanguage:t.language,changeLanguage:e=>t.changeLanguage(e),isLanguage:e=>t.language===e}},qt=e=>{let{t}=U();(0,b.useEffect)(()=>{let n=t(`common.appName`);return document.title=e?`${n} - ${e}`:n,()=>{document.title=n}},[e,t])},W=e=>{(0,b.useEffect)(()=>{if(e){let e=window.innerWidth-document.documentElement.clientWidth,t=window.scrollY;return document.body.style.overflow=`hidden`,document.body.style.paddingRight=`${e}px`,document.body.style.position=`fixed`,document.body.style.top=`-${t}px`,document.body.style.width=`100%`,()=>{document.body.style.overflow=``,document.body.style.paddingRight=``,document.body.style.position=``,document.body.style.top=``,document.body.style.width=``,window.scrollTo(0,t)}}},[e])};var Jt={isLight:!1,isDark:!1,breakpoints:{sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},spacing:{0:`0`,1:`0.25rem`,2:`0.5rem`,3:`0.75rem`,4:`1rem`,5:`1.25rem`,6:`1.5rem`,8:`2rem`,10:`2.5rem`,12:`3rem`,16:`4rem`,20:`5rem`,24:`6rem`},borderRadius:{none:`0`,sm:`0.125rem`,default:`0.25rem`,md:`0.375rem`,lg:`0.5rem`,xl:`0.75rem`,"2xl":`1rem`,"3xl":`1.5rem`,full:`9999px`},transitions:{fast:`150ms cubic-bezier(0.4, 0, 0.2, 1)`,base:`200ms cubic-bezier(0.4, 0, 0.2, 1)`,slow:`300ms cubic-bezier(0.4, 0, 0.2, 1)`,bounce:`400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`},blur:{sm:`blur(4px)`,md:`blur(8px)`,lg:`blur(12px)`,xl:`blur(16px)`}};const Yt={...Jt,isLight:!0,colors:{primary:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#26A1DF`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`},win:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},defeat:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},error:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},success:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},warning:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`},gray:{50:`#f9fafb`,100:`#f3f4f6`,200:`#e5e7eb`,300:`#d1d5db`,400:`#9ca3af`,500:`#6b7280`,600:`#4b5563`,700:`#374151`,800:`#1f2937`,900:`#111827`},white:`#ffffff`,black:`#000000`,background:`#ffffff`,backgroundSecondary:`#f9fafb`,surface:`rgba(255, 255, 255, 0.95)`,surfaceHover:`rgba(255, 255, 255, 0.98)`,border:`rgba(38, 161, 223, 0.2)`,borderLight:`rgba(38, 161, 223, 0.15)`,text:`#111827`,textSecondary:`#6b7280`,textTertiary:`#9ca3af`,info:`#3b82f6`,transparent:`transparent`},gradients:{primary:`linear-gradient(135deg, #26A1DF 0%, #F36346 100%)`,success:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,danger:`linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,warning:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,glass:`linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,shimmer:`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`},shadows:{xs:`0 1px 2px 0 rgba(0, 0, 0, 0.05)`,sm:`0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.25)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)`,none:`none`,glow:`0 0 20px rgba(38, 161, 223, 0.4)`,glowLg:`0 0 40px rgba(38, 161, 223, 0.6)`}},Xt={...Jt,isDark:!0,colors:{primary:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#26A1DF`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`},win:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},defeat:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},error:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},success:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},warning:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`},gray:{50:`#18181b`,100:`#27272a`,200:`#3f3f46`,300:`#52525b`,400:`#71717a`,500:`#a1a1aa`,600:`#d4d4d8`,700:`#e4e4e7`,800:`#f4f4f5`,900:`#fafafa`},white:`#000000`,black:`#ffffff`,background:`#0a0a0b`,backgroundSecondary:`#18181b`,surface:`rgba(24, 24, 27, 0.95)`,surfaceHover:`rgba(39, 39, 42, 0.98)`,border:`rgba(38, 161, 223, 0.3)`,borderLight:`rgba(38, 161, 223, 0.2)`,text:`#fafafa`,textSecondary:`#a1a1aa`,textTertiary:`#71717a`,info:`#60a5fa`},gradients:{primary:`linear-gradient(135deg, #26A1DF 0%, #F36346 100%)`,success:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,danger:`linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,warning:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,glass:`linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,shimmer:`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`},shadows:{xs:`0 1px 2px 0 rgba(0, 0, 0, 0.3)`,sm:`0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.6)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)`,none:`none`,glow:`0 0 20px rgba(38, 161, 223, 0.5)`,glowLg:`0 0 40px rgba(38, 161, 223, 0.7)`}};var Zt=(0,b.createContext)(void 0);const Qt=()=>{let e=(0,b.useContext)(Zt);if(!e)throw Error(`useTheme must be used within a ThemeProvider`);return e},$t=({children:e})=>{let[t,n]=(0,b.useState)(()=>M(j.THEME,`light`));(0,b.useEffect)(()=>{N(j.THEME,t)},[t]),(0,b.useEffect)(()=>{let e=`rgba(255, 255, 255, 0.7)`,t=`rgba(10, 10, 11, 0.7)`,n=document.querySelector(`meta[name="theme-color"][media="(prefers-color-scheme: light)"]`),r=document.querySelector(`meta[name="theme-color"][media="(prefers-color-scheme: dark)"]`);if(n&&r)n.setAttribute(`content`,e),r.setAttribute(`content`,t);else{let n=document.querySelector(`meta[name="theme-color"]:not([media])`);n&&n.remove();let r=document.createElement(`meta`);r.name=`theme-color`,r.content=e,r.media=`(prefers-color-scheme: light)`,document.head.appendChild(r);let i=document.createElement(`meta`);i.name=`theme-color`,i.content=t,i.media=`(prefers-color-scheme: dark)`,document.head.appendChild(i)}let i=document.querySelector(`meta[name="color-scheme"]`);i||(i=document.createElement(`meta`),i.setAttribute(`name`,`color-scheme`),document.head.appendChild(i)),i.setAttribute(`content`,`light dark`)},[t]);let r=(0,b.useMemo)(()=>({mode:t,toggleMode:()=>n(e=>e===`light`?`dark`:`light`),setMode:e=>n(e),theme:t===`dark`?Xt:Yt}),[t]);return(0,y.jsx)(Zt.Provider,{value:r,children:e})},en=e=>{let[t,n]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{let t=window.matchMedia(e);n(t.matches);let r=e=>{n(e.matches)};return t.addEventListener(`change`,r),()=>{t.removeEventListener(`change`,r)}},[e]),t},tn=()=>en(`(max-width: 768px)`),G=g`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;g`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const nn=g`
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
`,rn=g`
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
`,an=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,on=g`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;var sn=v.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: ${({theme:e})=>e.blur.md};
  display: ${({isOpen:e})=>e?`flex`:`none`};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({theme:e})=>e.spacing[4]};
  animation: ${G} ${({theme:e})=>e.transitions.base};
`,cn=v.div`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.lg};
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]};
  border: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${on} ${({theme:e})=>e.transitions.bounce};
`,ln=v.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  background: ${({theme:e})=>e.gradients.glass};
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]} ${({theme:e})=>e.borderRadius[`2xl`]} 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,un=v.h2`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  flex: 1;
  margin-right: ${({theme:e})=>e.spacing[4]};
`,dn=v.button`
  background: none;
  border: none;
  padding: ${({theme:e})=>e.spacing[1]};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.textSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.1)`:e.colors.gray[100]};
    color: ${({theme:e})=>e.colors.text};
  }
`,fn=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,pn=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[6]};
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
  flex-shrink: 0;
`,mn=v(S)`
  background-color: ${({confirmType:e,theme:t})=>e===`danger`?t.colors.error[600]:t.colors.primary[600]};

  &:hover:not(:disabled) {
    background-color: ${({confirmType:e,theme:t})=>e===`danger`?t.colors.error[700]:t.colors.primary[700]};
  }
`;const hn=(0,b.memo)(({isOpen:e,onClose:t,title:n,children:r,confirmText:i,cancelText:a,onConfirm:o,confirmType:s=`primary`,isLoading:c=!1})=>{let{t:l}=U(),u=i??l(`common.confirm`),d=a??l(`common.cancel`);return W(e),e?(0,y.jsx)(sn,{isOpen:e,onClick:e=>{e.target===e.currentTarget&&t()},onKeyDown:e=>{e.key===`Escape`&&t()},children:(0,y.jsxs)(cn,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dialog-title`,children:[(0,y.jsxs)(ln,{children:[(0,y.jsx)(un,{id:`dialog-title`,children:n}),(0,y.jsx)(dn,{onClick:t,"aria-label":l(`common.closeDialog`),children:(0,y.jsx)(D,{name:`close`,size:20})})]}),(0,y.jsx)(fn,{children:r}),o&&(0,y.jsxs)(pn,{children:[(0,y.jsx)(S,{variant:`secondary`,onClick:t,disabled:c,children:d}),(0,y.jsx)(mn,{confirmType:s,onClick:o,disabled:c,children:c?l(`common.processing`):u})]})]})}):null});hn.displayName=`Dialog`;var gn=v.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({theme:e})=>e.colors.gray[300]};
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: ${({theme:e})=>e.colors.primary[500]};
    border-color: ${({theme:e})=>e.colors.primary[500]};
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;const K=(0,b.memo)(({checked:e,onChange:t,disabled:n=!1})=>(0,y.jsx)(gn,{type:`checkbox`,checked:e,onChange:t,disabled:n}));K.displayName=`Checkbox`;var _n=g`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,vn=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  position: relative;
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({width:e})=>e&&`width: ${e};`}
`,yn=v.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,bn=v.button`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid ${({isOpen:e,theme:t})=>e?t.colors.border:t.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all ${({theme:e})=>e.transitions.base};
  box-shadow: ${({theme:e,isOpen:t})=>t?`${e.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1)`:e.shadows.sm};
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border-color: ${({theme:e})=>e.colors.border};
    box-shadow: ${({theme:e})=>e.shadows.md};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border};
    box-shadow: ${({theme:e})=>`${e.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1)`};
  }
`,xn=v.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%) ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform ${({theme:e})=>e.transitions.base};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #26a1df;
`,Sn=v.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md} brightness(0%);
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>`${e.shadows.xl}, 0 0 0 1px rgba(38, 161, 223, 0.1)`};
  max-height: 300px;
  overflow-y: auto;
  z-index: 50;
  display: ${({isOpen:e})=>e?`block`:`none`};
  animation: ${_n} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    border-radius: ${({theme:e})=>e.borderRadius.lg} ${({theme:e})=>e.borderRadius.lg} 0 0;
  }
`,Cn=v.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  cursor: ${({disabled:e})=>e?`not-allowed`:`pointer`};
  transition: all ${({theme:e})=>e.transitions.base};
  position: relative;
  opacity: ${({disabled:e})=>e?`0.5`:`1`};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width ${({theme:e})=>e.transitions.base};
  }

  &:hover:not([disabled]) {
    background-color: rgba(38, 161, 223, 0.05);
    padding-left: ${({theme:e})=>e.spacing[5]};

    &::before {
      width: 3px;
    }
  }

  &:first-child {
    padding-top: ${({theme:e})=>e.spacing[4]};
  }

  &:last-child {
    padding-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,wn=v.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  flex: 1;
  font-weight: 500;
`,Tn=v.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 600;
`;const En=(0,b.memo)(({label:e,value:t,onChange:n,options:r,placeholder:i=`選択してください`,maxSelections:a,width:o,fullWidth:s})=>{let[c,l]=(0,b.useState)(!1),u=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let d=e=>{if(t.includes(e))n(t.filter(t=>t!==e));else{if(a&&t.length>=a)return;n([...t,e])}};return(0,y.jsxs)(vn,{ref:u,width:o,fullWidth:s,children:[e&&(0,y.jsx)(yn,{children:e}),(0,y.jsxs)(bn,{type:`button`,onClick:()=>l(!c),isOpen:c,children:[(()=>t.length===0?i:t.map(e=>r.find(t=>t.value===e)?.label||e).join(`, `))(),t.length>0&&(0,y.jsxs)(Tn,{children:[` (`,t.length,`)`]}),(0,y.jsx)(xn,{isOpen:c,children:(0,y.jsx)(D,{name:`add`,size:16})})]}),(0,y.jsx)(Sn,{isOpen:c,children:r.map(e=>{let n=a?t.length>=a&&!t.includes(e.value):!1;return(0,y.jsxs)(Cn,{disabled:n,children:[(0,y.jsx)(K,{checked:t.includes(e.value),onChange:()=>d(e.value),disabled:n}),(0,y.jsx)(wn,{children:e.label})]},e.value)})})]})});En.displayName=`MultiSelect`;var Dn=v.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  cursor: ${({$disabled:e})=>e?`not-allowed`:`pointer`};
  user-select: none;
  opacity: ${({$disabled:e})=>e?.5:1};
  min-height: 40px;
`,On=v.div`
  position: relative;
  width: 44px;
  height: 24px;
  background: ${({$checked:e,theme:t})=>e?t.colors.primary[500]:t.colors.gray[300]};
  border-radius: 12px;
  transition: background ${({theme:e})=>e.transitions.base};
  cursor: ${({$disabled:e})=>e?`not-allowed`:`pointer`};
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    ${({$checked:e,theme:t,$disabled:n})=>!n&&`
      background: ${e?t.colors.primary[600]:t.colors.gray[400]};
    `}
  }
`,kn=v.div`
  position: absolute;
  top: 2px;
  left: ${({$checked:e})=>e?`22px`:`2px`};
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: left 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,An=v.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const jn=(0,b.memo)(({checked:e,onChange:t,label:n,disabled:r=!1})=>(0,y.jsxs)(Dn,{$disabled:r,onClick:e=>{e.preventDefault(),r||t()},children:[(0,y.jsx)(On,{$checked:e,$disabled:r,children:(0,y.jsx)(kn,{$checked:e})}),n&&(0,y.jsx)(An,{children:n})]}));jn.displayName=`Toggle`;const q={mobile:768,tablet:1024,desktop:1280},J={mobile:`@media (max-width: ${q.mobile}px)`,tablet:`@media (max-width: ${q.tablet}px)`,desktop:`@media (min-width: ${q.desktop}px)`,maxWidth:e=>`@media (max-width: ${e}px)`,minWidth:e=>`@media (min-width: ${e}px)`};var Mn=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
  max-width: ${({$fullWidth:e})=>e?`100%`:`1200px`};
  min-width: ${({$fullWidth:e})=>e?`unset`:`800px`};
  margin: 0 auto;
  width: 100%;

  ${J.mobile} {
    padding: ${({theme:e})=>e.spacing[4]};
    min-width: unset;
    max-width: 100%;
  }
`,Nn=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  gap: ${({theme:e})=>e.spacing[4]};

  ${J.mobile} {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Pn=v.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  animation: ${G} 0.5s ease-out;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
`,Fn=v.span`
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,In=v.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ln=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${J.mobile} {
    width: 100%;
    flex-direction: column;
  }
`,Rn=v.div`
  display: grid;
  gap: ${({gap:e})=>e};
  animation: ${G} 0.5s ease-out;
`;const Y=(0,b.memo)(({children:e,fullWidth:t=!1})=>(0,y.jsx)(Mn,{$fullWidth:t,children:e}));Y.displayName=`Page`;const zn=(0,b.memo)(({children:e})=>(0,y.jsx)(Nn,{children:e}));zn.displayName=`PageTitleContainer`;const Bn=(0,b.memo)(({children:e,action:t})=>(0,y.jsxs)(Pn,{children:[(0,y.jsx)(Fn,{children:e}),t]}));Bn.displayName=`PageTitle`;const Vn=(0,b.memo)(({children:e})=>(0,y.jsx)(In,{children:e}));Vn.displayName=`PageDescription`;const Hn=(0,b.memo)(({children:e})=>(0,y.jsx)(Ln,{children:e}));Hn.displayName=`PageTitleActions`;const Un=(0,b.memo)(({children:e,gap:t=`1.5rem`})=>(0,y.jsx)(Rn,{gap:t,children:e}));Un.displayName=`PageContainer`;var Wn=g`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Gn=g`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kn=v.div`
  position: relative;
  display: ${({$fullWidth:e})=>e?`block`:`inline-block`};
  width: ${({$fullWidth:e})=>e?`100%`:`auto`};
`,qn=v.button`
  padding: 0.625rem 1rem;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: ${({$fullWidth:e})=>e?`auto`:`140px`};
  width: ${({$fullWidth:e})=>e?`100%`:`auto`};
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({theme:e})=>e.shadows.sm};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.border};
    box-shadow:
      ${({theme:e})=>e.shadows.md},
      0 0 0 1px rgba(38, 161, 223, 0.1);
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.border};
    box-shadow:
      ${({theme:e})=>e.shadows.md},
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`,Jn=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: #26a1df;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  span {
    color: ${({theme:e})=>e.colors.text};
  }
`,Yn=v.div`
  position: absolute;
  ${({direction:e})=>e===`up`?`bottom: calc(100% + 8px);`:`top: calc(100% + 8px);`}
  left: 0;
  right: 0;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md} brightness(0%);
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow:
    ${({theme:e})=>e.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);
  overflow: hidden;
  z-index: 50;
  display: ${({isOpen:e})=>e?`block`:`none`};
  animation: ${({direction:e})=>e===`up`?Wn:Gn} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    border-radius: ${({theme:e})=>e.borderRadius.lg} ${({theme:e})=>e.borderRadius.lg} 0 0;
  }
`,Xn=v.button`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({isActive:e})=>e?`rgba(38, 161, 223, 0.08)`:`transparent`};
  color: ${({theme:e})=>e.colors.text};
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: ${({isActive:e})=>e?`600`:`500`};
  text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: ${({isActive:e})=>e?`1`:`0`};
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background-color: rgba(38, 161, 223, 0.05);
    padding-left: ${({theme:e})=>e.spacing[5]};

    &::before {
      opacity: 0.5;
    }
  }

  &:first-child {
    padding-top: ${({theme:e})=>e.spacing[4]};
  }

  &:last-child {
    padding-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,Zn=v.span`
  font-size: 1.25rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
  background: rgba(0, 0, 0, 0.02);
`,Qn=v.span`
  display: flex;
  align-items: center;
  color: #26a1df;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,$n=[{code:`ja`,name:`日本語`,flag:`🇯🇵`},{code:`en`,name:`English`,flag:`🇺🇸`},{code:`ko`,name:`한국어`,flag:`🇰🇷`}];const er=(0,b.memo)(({direction:e=`down`,fullWidth:t=!1})=>{let[n,r]=(0,b.useState)(!1),{currentLanguage:i,changeLanguage:a}=U(),o=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&r(!1)};return n&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[n]);let s=e=>{a(e),r(!1)},c=$n.find(e=>e.code===i)?.name||`日本語`;return(0,y.jsxs)(Kn,{ref:o,$fullWidth:t,children:[(0,y.jsxs)(qn,{onClick:()=>r(!n),$fullWidth:t,children:[(0,y.jsxs)(Jn,{children:[(0,y.jsx)(D,{name:`language`,size:18}),(0,y.jsx)(`span`,{children:c})]}),(0,y.jsx)(Qn,{isOpen:n,children:(0,y.jsx)(D,{name:`arrowDropDown`,size:24})})]}),(0,y.jsx)(Yn,{isOpen:n,direction:e,children:$n.map(e=>(0,y.jsxs)(Xn,{isActive:i===e.code,onClick:()=>s(e.code),children:[(0,y.jsx)(Zn,{children:e.flag}),(0,y.jsx)(`span`,{children:e.name})]},e.code))})]})});er.displayName=`LanguageSelector`;var tr=v.div`
  position: fixed;
  bottom: ${({theme:e})=>e.spacing[6]};
  right: ${({theme:e})=>e.spacing[6]};
  z-index: 100;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    bottom: ${({theme:e})=>e.spacing[4]};
    right: ${({theme:e})=>e.spacing[4]};
  }
`,nr=v.button`
  width: 56px;
  height: 56px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.base};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${({theme:e})=>e.borderRadius.full};
    padding: 2px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow:
      ${({theme:e})=>e.shadows[`2xl`]},
      0 8px 24px rgba(38, 161, 223, 0.2);
    border-color: ${({theme:e})=>e.colors.border};

    &::before {
      opacity: 1;
    }

    svg {
      animation: ${an} 0.6s ease-in-out;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({theme:e})=>e.colors.primary[500]};
    transition: all ${({theme:e})=>e.transitions.base};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 48px;
    height: 48px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;const rr=(0,b.memo)(()=>{let{mode:e,toggleMode:t}=Qt(),{t:n}=U(),r=(0,y.jsx)(tr,{children:(0,y.jsx)(nr,{onClick:t,"aria-label":n(`common.toggleTheme`),title:n(e===`light`?`common.switchToDarkMode`:`common.switchToLightMode`),children:e===`light`?(0,y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,children:(0,y.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z`})}):(0,y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,children:(0,y.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z`})})})});return(0,de.createPortal)(r,document.body)});var ir=v.div`
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  height: ${({$height:e})=>e||`calc(100dvh - 380px)`};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${G} 0.6s ease-out 0.1s backwards;

  &::before {
    content: "";
    position: sticky;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    z-index: 3;
  }

  &:hover {
    box-shadow:
      0 12px 40px rgba(38, 161, 223, 0.12),
      0 0 0 1px rgba(38, 161, 223, 0.1);
    border-color: ${({theme:e})=>e.colors.border};
  }
`,ar=v.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  ${J.mobile} {
    min-width: 380px;
  }
`,or=v.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  /* スクロールバーを非表示 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,sr=v.div`
  display: flex;
  background: ${({theme:e})=>e.isDark?`rgba(39, 39, 42, 0.6)`:`rgba(255, 255, 255, 0.1)`};
  backdrop-filter: blur(8px);
  border-bottom: 2px solid ${({theme:e})=>e.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 2;
  min-width: 100%;
  width: ${({$width:e})=>e?`calc(${e} + 4px)`:`100%`};

  ${J.mobile} {
    min-width: 380px;
  }
`;const cr=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  text-align: left;

  ${J.mobile} {
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
    font-size: 0.6875rem;
  }

  &:last-child {
    text-align: center;
  }
`;var lr=v.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`;const ur=v.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  background: transparent;

  ${J.mobile} {
    min-width: 380px;
  }

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
    background: ${({theme:e})=>e.isDark?`rgba(38, 161, 223, 0.08)`:`rgba(38, 161, 223, 0.03)`};

    &::before {
      width: 4px;
    }
  }
`,dr=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  display: flex;
  align-items: center;
  height: 66px;

  ${J.mobile} {
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
    font-size: 0.8125rem;
  }

  &:last-child {
    justify-content: center;
  }
`;var fr=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
  gap: ${({theme:e})=>e.spacing[4]};
`,pr=v.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.gray[500]};
`,mr=v.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
  padding: ${({theme:e})=>e.spacing[16]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  animation: ${rn} 1.5s ease-in-out infinite;
`;function hr({data:e,columns:t,renderRow:n,rowHeight:r=56,overscan:a=5,height:o,width:s=`100%`,isLoading:c=!1,loadingText:l=`Loading...`,emptyText:u=`No data`,getRowKey:d}){let f=(0,b.useRef)(null),p=(0,b.useRef)(null),m=i({count:e.length,getScrollElement:()=>f.current,estimateSize:()=>r,overscan:a});return(0,b.useEffect)(()=>{let e=f.current,t=p.current;if(!e||!t)return;let n=()=>{t.scrollLeft=e.scrollLeft};return e.addEventListener(`scroll`,n),()=>{e.removeEventListener(`scroll`,n)}},[]),(0,y.jsx)(ir,{$height:o,children:(0,y.jsxs)(ar,{children:[(0,y.jsx)(or,{ref:p,children:(0,y.jsx)(sr,{$width:s,children:t.map(e=>(0,y.jsx)(cr,{width:e.width,children:e.label},e.key))})}),c?(0,y.jsx)(lr,{children:(0,y.jsx)(mr,{children:l})}):e.length>0?(0,y.jsx)(lr,{ref:f,children:(0,y.jsx)(`div`,{style:{height:`${m.getTotalSize()}px`,position:`relative`,width:s},children:m.getVirtualItems().map(t=>{let r=e[t.index];return(0,y.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,transform:`translateY(${t.start}px)`,height:`${t.size}px`},children:n(r,t)},d(r))})})}):(0,y.jsx)(fr,{children:(0,y.jsx)(pr,{children:u})})]})})}const gr=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  animation: ${G} 0.6s ease-out;

  ${J.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,_r=v.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${J.mobile} {
    padding: ${({theme:e})=>e.spacing[4]};
  }

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
    border-color: ${({theme:e})=>e.colors.border};
  }
`,vr=v.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,yr=v.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  ${({theme:e,$type:t,$winRate:n})=>t===`win`?`color: ${e.colors.win[400]};`:t===`defeat`?`color: ${e.colors.defeat[400]};`:t===`winRate`&&n!==void 0?`color: ${mt(n,e,400)};`:`
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,br=v.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`;var xr={danger:_`
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: ${({theme:e})=>e.colors.error[500]};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.error[500]};
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  `,default:_`
    border: 1px solid ${({theme:e})=>e.colors.borderLight};
    color: ${({theme:e})=>e.colors.primary[500]};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.primary[500]};
      box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
    }
  `,secondary:_`
    border: 1px solid ${({theme:e})=>e.colors.borderLight};
    color: ${({theme:e})=>e.colors.textSecondary};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.border};
      color: ${({theme:e})=>e.colors.text};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  `},Sr=v(S)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.base};
  background: ${({theme:e,$borderless:t})=>t?`transparent`:e.gradients.glass};
  backdrop-filter: ${({theme:e,$borderless:t})=>t?`none`:e.blur.sm};
  padding: 0;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({$type:e=`default`})=>xr[e]}
  ${({$borderless:e})=>e&&`border: none;`}
`;const X=(0,b.memo)(({icon:e,children:t,...n})=>(0,y.jsx)(Sr,{variant:`outline`,...n,children:e||t}));X.displayName=`IconicButton`;var Cr=v.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 0.875rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  ${({theme:e,$type:t})=>{let n=e.isDark;switch(t){case`error`:return`
          background-color: ${n?`rgba(239, 68, 68, 0.15)`:`${e.colors.error[500]}20`};
          border: 1px solid ${n?`rgba(239, 68, 68, 0.3)`:`${e.colors.error[500]}40`};
          color: ${n?`#fca5a5`:e.colors.error[500]};
        `;case`success`:return`
          background-color: ${n?`rgba(34, 197, 94, 0.15)`:`${e.colors.success[500]}20`};
          border: 1px solid ${n?`rgba(34, 197, 94, 0.3)`:`${e.colors.success[500]}40`};
          color: ${n?`#86efac`:e.colors.success[500]};
        `;case`warning`:return`
          background-color: ${n?`rgba(234, 179, 8, 0.15)`:`rgba(234, 179, 8, 0.1)`};
          border: 1px solid rgba(234, 179, 8, 0.3);
          color: ${n?`#fde047`:`#a16207`};
        `;case`info`:return`
          background-color: ${n?`rgba(38, 161, 223, 0.15)`:`rgba(38, 161, 223, 0.1)`};
          border: 1px solid rgba(38, 161, 223, 0.3);
          color: ${n?`#7dd3fc`:`#0369a1`};
        `;default:return``}}}
`,wr=v.div`
  flex: 1;
`,Tr=v.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  transition: opacity ${({theme:e})=>e.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;

  /* クリック領域を拡張 */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }
`;const Er=(0,b.memo)(({type:e=`info`,children:t,onClose:n})=>(0,y.jsxs)(Cr,{$type:e,children:[(0,y.jsx)(wr,{children:t}),n&&(0,y.jsx)(Tr,{onClick:n,type:`button`,"aria-label":`Close`,children:(0,y.jsx)(D,{name:`close`,size:16})})]}));Er.displayName=`Flush`;var Dr=e(t()),Or=g`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,kr=g`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,Ar=v.div`
  position: fixed;
  top: ${({theme:e})=>e.spacing[6]};
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -100%);
  opacity: 0;
  visibility: ${({$isVisible:e})=>e?`visible`:`hidden`};
  animation: ${({$isVisible:e})=>e?Or:kr} 0.3s ease-out forwards;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    top: ${({theme:e})=>e.spacing[4]};
    left: ${({theme:e})=>e.spacing[4]};
    right: ${({theme:e})=>e.spacing[4]};
    transform: translateY(-100%);
  }
`,jr=v.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  box-shadow: ${({theme:e})=>e.shadows[`2xl`]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 320px;
  max-width: 500px;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-width: auto;
    padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  }
`,Mr=v.div`
  flex: 1;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-right: 1rem;
`,Nr=v.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.textSecondary};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({theme:e})=>e.transitions.base};

  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;const Z=(0,b.memo)(({open:e,message:t,actionLabel:n,onAction:r,onClose:i,autoHideDuration:a})=>{let{t:o}=U(),[s,c]=(0,b.useState)(!1);(0,b.useEffect)(()=>{if(e){let e=setTimeout(()=>{c(!0)},10);if(a){let t=setTimeout(()=>{c(!1),setTimeout(()=>{i?.()},300)},a);return()=>{clearTimeout(e),clearTimeout(t)}}return()=>clearTimeout(e)}else c(!1)},[e,a,i]);let l=()=>{c(!1),setTimeout(()=>{i?.()},300)};if(!e)return null;let u=(0,y.jsx)(Ar,{$isVisible:s,children:(0,y.jsxs)(jr,{children:[(0,y.jsx)(Mr,{children:t}),n&&r&&(0,y.jsx)(S,{variant:`outline`,size:`sm`,onClick:r,children:n}),(0,y.jsx)(Nr,{onClick:l,"aria-label":o(`common.close`),children:(0,y.jsx)(C,{})})]})});return(0,Dr.createPortal)(u,document.body)});Z.displayName=`Snackbar`;var Pr=e(t()),Fr=g`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ir=g`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,Lr=g`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Rr=g`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
`,zr=v.div`
  display: none;
  position: relative;

  ${J.mobile} {
    display: block;
  }
`,Br=v.div`
  display: ${({$isOpen:e,$isClosing:t})=>e||t?`block`:`none`};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background: ${({theme:e})=>e.isDark?`rgba(0, 0, 0, 0.3)`:`rgba(255, 255, 255, 0.3)`};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: ${({$isClosing:e})=>e?Ir:Fr} 0.2s ease-out;
`,Vr=v.div`
  position: fixed;
  top: ${({$position:e})=>e.top}px;
  right: ${({$position:e})=>e.right}px;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  -webkit-backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  z-index: 9999;
  min-width: 160px;
  overflow: hidden;
  display: ${({$isOpen:e,$isClosing:t})=>e||t?`block`:`none`};
  animation: ${({$isClosing:e})=>e?Rr:Lr} 0.2s ease-out;
  transform-origin: top right;
`,Hr=v.button`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  transition: background-color ${({theme:e})=>e.transitions.base};

  &:hover {
    background: ${({theme:e})=>e.colors.backgroundSecondary};
  }

  &:active {
    background: ${({theme:e})=>e.colors.border};
  }
`;const Ur=({items:e,triggerTitle:t,stopPropagation:n=!0})=>{let[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(!1),[s,c]=(0,b.useState)({top:0,right:0}),l=(0,b.useRef)(null),u=(0,b.useRef)(null),d=(0,b.useRef)(null);W(r);let f=(0,b.useCallback)(()=>{o(!0),setTimeout(()=>{i(!1),o(!1)},200)},[]),p=(0,b.useCallback)(()=>{if(u.current){let e=u.current.getBoundingClientRect();c({top:e.bottom+8,right:window.innerWidth-e.right})}},[]),m=(0,b.useCallback)(()=>{p(),i(!0)},[p]);(0,b.useEffect)(()=>{let e=e=>{let t=e.target;l.current&&!l.current.contains(t)&&d.current&&!d.current.contains(t)&&f()},t=e=>{e.key===`Escape`&&f()};if(r)return document.addEventListener(`click`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`click`,e),document.removeEventListener(`keydown`,t)}},[r,f]);let h=e=>{e.preventDefault(),n&&e.stopPropagation(),r?f():m()},ee=(e,t)=>{e.preventDefault(),n&&e.stopPropagation(),f(),t()};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(zr,{ref:d,children:(0,y.jsx)(`div`,{ref:u,children:(0,y.jsx)(X,{icon:(0,y.jsx)(D,{name:`hamburger`,size:16}),onClick:h,title:t})})}),(r||a)&&(0,Pr.createPortal)((0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Br,{$isOpen:r,$isClosing:a,onClick:f}),(0,y.jsx)(Vr,{ref:l,$isOpen:r,$isClosing:a,$position:s,children:e.map((e,t)=>(0,y.jsxs)(Hr,{onClick:t=>ee(t,e.onClick),children:[(0,y.jsx)(D,{name:e.icon,size:16}),e.label]},t))})]}),document.body)]})};var Wr=v.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  height: 70px;
  padding: ${({theme:e})=>e.spacing[4]};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Gr=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Kr=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,qr=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Jr=v.img`
  width: 3rem;
  height: 2rem;
  object-fit: contain;
`,Yr=v.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`;const Xr=({onMenuClick:e})=>{let{t}=U();return(0,y.jsx)(Wr,{children:(0,y.jsxs)(Gr,{children:[(0,y.jsxs)(qr,{children:[(0,y.jsx)(Jr,{src:`/cc-war-record/img/cc.webp`,alt:`CC`}),(0,y.jsx)(Yr,{children:t(`common.appName`)})]}),(0,y.jsxs)(Kr,{children:[(0,y.jsx)(rr,{}),(0,y.jsx)(X,{$type:`secondary`,$borderless:!0,icon:(0,y.jsx)(D,{name:`hamburger`,size:24}),onClick:e,title:t(`common.menu`)})]})]})})},Zr=[{labelKey:`navigation.home`,path:`/`,icon:`home`},{labelKey:`navigation.graphs`,path:`/graphs`,icon:`chart`},{labelKey:`navigation.histories`,path:`/histories`,icon:`history`},{labelKey:`navigation.obs`,path:`/obs`,icon:`video`,desktopOnly:!0},{labelKey:`navigation.faq`,path:`/faq`,icon:`detail`}];var Qr=v.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100dvh;
  width: 260px;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.lg};
  border-right: 1px solid ${({theme:e})=>e.colors.borderLight};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  z-index: 10;
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[4]};
  transform: translateX(${({$isOpen:e})=>e?`0`:`-100%`});
  transition:
    transform ${({theme:e})=>e.transitions.base},
    background 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    transform: translateX(0);
    position: fixed;
    flex-shrink: 0;
  }
`,$r=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};

  ${J.mobile} {
    display: none;
  }
`,ei=v.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`,ti=v.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`,ni=v.nav`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  ${J.mobile} {
    margin-top: ${({theme:e})=>e.spacing[16]};
  }
`,ri=v(u)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  color: ${({theme:e,$isActive:t})=>t?e.colors.white:e.colors.text};
  background: ${({theme:e,$isActive:t})=>t?e.gradients.primary:`transparent`};
  font-weight: ${({$isActive:e})=>e?`600`:`500`};
  transition: all ${({theme:e})=>e.transitions.bounce};
  box-shadow: ${({theme:e,$isActive:t})=>t?e.shadows.md:e.shadows.none};
  position: relative;
  overflow: hidden;

  ${({$desktopOnly:e})=>e&&`
    @media (max-width: 1023px) {
      display: none;
    }
  `}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({theme:e})=>e.gradients.glass};
    opacity: 0;
    transition: opacity ${({theme:e})=>e.transitions.base};
  }

  &:hover {
    color: ${({theme:e,$isActive:t})=>t?e.colors.white:e.isDark?e.colors.primary[300]:e.colors.primary[700]};
    transform: translateX(4px);
    box-shadow: ${({theme:e})=>e.shadows.md};

    &::before {
      opacity: 1;
    }
  }
`,ii=v.span`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
`,ai=v.span`
  margin-left: auto;
  font-size: 0.625rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${({theme:e})=>e.isDark?e.colors.primary[500]:e.colors.primary[600]};
  color: ${({theme:e})=>e.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
`,oi=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: inherit;
`;const si=({isOpen:e,isActivePath:t,onClose:n})=>{let{t:r}=U();return(0,y.jsxs)(Qr,{$isOpen:e,children:[(0,y.jsxs)($r,{children:[(0,y.jsx)(ei,{src:`/cc-war-record/img/cc.webp`,alt:`CC`}),(0,y.jsx)(ti,{children:r(`common.appName`)})]}),(0,y.jsx)(ni,{children:Zr.map(e=>(0,y.jsxs)(ri,{to:e.path,$isActive:t(e.path),$desktopOnly:e.desktopOnly,onClick:n,children:[(0,y.jsx)(oi,{$isActive:t(e.path),children:(0,y.jsx)(D,{name:e.icon,size:20})}),(0,y.jsxs)(ii,{children:[r(e.labelKey),e.labelKey===`navigation.obs`&&(0,y.jsx)(ai,{children:`Beta`})]})]},e.path))}),(0,y.jsx)(`div`,{style:{marginTop:`auto`,paddingTop:`24px`},children:(0,y.jsx)(er,{direction:`up`,fullWidth:!0})})]})};var ci=v.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: ${({$isOpen:e})=>e?1:0};
  visibility: ${({$isOpen:e})=>e?`visible`:`hidden`};
  transition: all 0.3s ease-in-out;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,li=v.main`
  display: flex;
  flex: 1;
  min-height: calc(100dvh - 70px);
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-left: 260px;
    min-height: 100dvh;
  }
`,ui=v.div`
  display: flex;
  min-height: 100dvh;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex-direction: column;
  }
`;const di=({children:e})=>{let[t,n]=(0,b.useState)(!1),r=o(),i=()=>{n(!t)},a=()=>{n(!1)};return(0,y.jsxs)(ui,{children:[(0,y.jsx)(Xr,{onMenuClick:i}),(0,y.jsx)(si,{isOpen:t,isActivePath:e=>e===`/`?r.pathname===`/`:r.pathname.startsWith(e),onClose:a}),(0,y.jsx)(ci,{$isOpen:t,onClick:a}),(0,y.jsx)(li,{children:e})]})};var fi=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  min-height: 400px;
  text-align: center;
`,pi=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,mi=v.div`
  display: flex;
  gap: 1rem;
`,hi=v.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`,gi=v.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,_i=v.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 28rem;
  margin: 0.5rem auto;
  line-height: 1.6;
`;const vi=()=>(0,y.jsx)(Y,{children:(0,y.jsxs)(fi,{children:[(0,y.jsxs)(pi,{children:[(0,y.jsx)(hi,{children:`404`}),(0,y.jsx)(gi,{children:`ページが見つかりません`}),(0,y.jsx)(_i,{children:`お探しのページは削除されたか、URLが間違っている可能性があります。`})]}),(0,y.jsx)(mi,{children:(0,y.jsx)(u,{to:`/`,children:(0,y.jsx)(S,{children:`ホームに戻る`})})})]})});var yi=g`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,bi=g`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,xi=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  box-shadow: ${({theme:e})=>e.shadows[`2xl`]};
  position: relative;
  overflow: hidden;
  animation: ${G} 0.8s ease-out;
  transition: all ${({theme:e})=>e.transitions.base};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(38, 161, 223, 0.03) 0%, transparent 70%);
    animation: ${bi} 3s ease-in-out infinite;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.border};
  }
`,Si=v.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(243, 99, 70, 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  position: relative;
  z-index: 1;
  animation: ${yi} 3s ease-in-out infinite;
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.15);
  border: 2px solid rgba(38, 161, 223, 0.2);

  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.2;
  }
`,Ci=v.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  position: relative;
  z-index: 1;
  animation: ${G} 0.8s ease-out 0.2s backwards;
`,wi=v.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 450px;
  line-height: 1.7;
  font-weight: 500;
  position: relative;
  z-index: 1;
  animation: ${G} 0.8s ease-out 0.4s backwards;
`,Ti=v(S)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
  position: relative;
  z-index: 1;
  animation: ${G} 0.8s ease-out 0.6s backwards;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(38, 161, 223, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }
`;const Ei=(0,b.memo)(({icon:e=`home`})=>{let{t}=U(),n=l();return(0,y.jsxs)(xi,{children:[(0,y.jsx)(Si,{children:(0,y.jsx)(D,{name:e,size:32})}),(0,y.jsx)(Ci,{children:t(`pages.home.noSeason`)}),(0,y.jsx)(wi,{children:t(`pages.home.createFirstSeason`)}),(0,y.jsxs)(Ti,{onClick:()=>{n({to:`/new`})},children:[(0,y.jsx)(D,{name:`add`,size:20,color:`white`}),t(`pages.home.createSeason`)]})]})});Ei.displayName=`EmptyState`;var Di=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: ${({theme:e})=>e.spacing[8]};
`,Oi=v.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({theme:e})=>e.colors.gray[200]};
  border-top-color: ${({theme:e})=>e.colors.primary[500]};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,ki=v.p`
  margin-top: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const Ai=()=>(0,y.jsx)(Di,{children:(0,y.jsxs)(`div`,{children:[(0,y.jsx)(Oi,{}),(0,y.jsx)(ki,{children:`Loading...`})]})}),ji=v.form`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]};
    border-color: ${({theme:e})=>e.colors.border};
  }
`,Mi=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ni=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;var Q=e(d()),Pi=`G-8MW9KTB7Q5`;const Fi=()=>{Q.default.initialize(Pi,{gaOptions:{siteSpeedSampleRate:100}})},Ii=(e,t)=>{Q.default.send({hitType:`pageview`,page:e,title:t})},Li=(e,t,n,r)=>{Q.default.event({category:e,action:t,label:n,value:r})},Ri=async()=>{try{let e=await fetch(`/cc-war-record/build-info.json`,{cache:`no-cache`});return e.ok?await e.json():(console.warn(`Failed to fetch build-info.json:`,e.status),null)}catch(e){return console.error(`Error fetching build-info.json:`,e),null}},zi=async()=>{let e=await Ri();if(!e)return console.warn(`Failed to fetch build info`),!1;let{timestamp:t}=e,n=M(j.BUILD_TIMESTAMP,``);if(!n)return N(j.BUILD_TIMESTAMP,t.toString()),console.info(`First access: build timestamp saved`),!1;if(Number(n)!==t&&(console.info(`Build updated detected:`,{old:new Date(Number(n)).toISOString(),new:e.buildTime}),N(j.BUILD_TIMESTAMP,t.toString()),`serviceWorker`in navigator&&navigator.serviceWorker.controller))try{if(await(await navigator.serviceWorker.ready).unregister(),console.info(`ServiceWorker unregistered`),`caches`in window){let e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e))),console.info(`Cache storage cleared`)}return!0}catch(e){console.error(`Error clearing ServiceWorker cache:`,e)}return!1},$=p({component:Bi,notFoundComponent:Vi});function Bi(){let e=ne(),{t}=U(),n=(0,b.useRef)(!1),[r,i]=(0,b.useState)(!1),a=e.location.pathname.includes(`/obs/window`);return(0,b.useEffect)(()=>{window.scrollTo(0,0),Ii(e.location.pathname)},[e.location.pathname]),(0,b.useEffect)(()=>{!r&&!n.current&&setTimeout(()=>{zi().then(e=>{e&&i(!0)})},1e3)},[e.location.pathname]),a?(0,y.jsx)(b.Suspense,{fallback:(0,y.jsx)(Ai,{}),children:(0,y.jsx)(s,{})}):(0,y.jsxs)(di,{children:[(0,y.jsx)(b.Suspense,{fallback:(0,y.jsx)(Ai,{}),children:(0,y.jsx)(s,{})}),(0,y.jsx)(Z,{open:r,message:t(`common.buildUpdate.message`),actionLabel:t(`common.buildUpdate.reload`),onAction:()=>{window.location.reload()},onClose:()=>{i(!1),n.current=!0}})]})}function Vi(){return(0,y.jsx)(vi,{})}const Hi=h(`/new`)({component:c(()=>x(()=>import(`./new-Cd3tOpxu.js`),__vite__mapDeps([0,1,2,3])),`component`)}),Ui=h(`/graphs`)({component:c(()=>x(()=>import(`./graphs-o4hOgSpa.js`),__vite__mapDeps([4,1,2,3])),`component`),staleTime:1e3*60*5,gcTime:1e3*60*10}),Wi=h(`/faq`)({component:c(()=>x(()=>import(`./faq-xQRGgGGy.js`),__vite__mapDeps([5,1,2,3])),`component`)}),Gi=h(`/`)({component:c(()=>x(()=>import(`./routes-MB2ptHFA.js`),__vite__mapDeps([6,1,2,3])),`component`)}),Ki=h(`/obs/`)({component:c(()=>x(()=>import(`./obs-CmKknzKl.js`),__vite__mapDeps([7,1,2,3])),`component`)}),qi=h(`/histories/`)({component:c(()=>x(()=>import(`./histories-B_iq-8MR.js`),__vite__mapDeps([8,1,2,3])),`component`)}),Ji=h(`/obs/window`)({component:c(()=>x(()=>import(`./window-Ca83_S1L.js`),__vite__mapDeps([9,1,2,3,10,11,12,13,14,15,16])),`component`)}),Yi=h(`/histories/$id`)({component:c(()=>x(()=>import(`./_id-Bt-8R08v.js`),__vite__mapDeps([17,1,2,3])),`component`)});var Xi=Hi.update({id:`/new`,path:`/new`,getParentRoute:()=>$}),Zi=Ui.update({id:`/graphs`,path:`/graphs`,getParentRoute:()=>$}),Qi=Wi.update({id:`/faq`,path:`/faq`,getParentRoute:()=>$}),$i=Gi.update({id:`/`,path:`/`,getParentRoute:()=>$}),ea=Ki.update({id:`/obs/`,path:`/obs/`,getParentRoute:()=>$}),ta=qi.update({id:`/histories/`,path:`/histories/`,getParentRoute:()=>$}),na=Ji.update({id:`/obs/window`,path:`/obs/window`,getParentRoute:()=>$}),ra=Yi.update({id:`/histories/$id`,path:`/histories/$id`,getParentRoute:()=>$}),ia={IndexRoute:$i,FaqRoute:Qi,GraphsRoute:Zi,NewRoute:Xi,HistoriesIdRoute:ra,ObsWindowRoute:na,HistoriesIndexRoute:ta,ObsIndexRoute:ea};const aa=$._addFileChildren(ia)._addFileTypes();var oa=te({routeTree:aa,basepath:`/cc-war-record`,defaultViewTransition:!0});const sa=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{router:oa}),!1]}),ca=ie`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  /* View Transition API サポート */
  @view-transition {
    navigation: auto;
  }

  /* ページ遷移アニメーション */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.3s;
  }

  html {
    background-image: url("${`/cc-war-record/`}img/${({theme:e})=>e.isDark?`bgn.webp`:`bg.webp`}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color-scheme: ${({theme:e})=>e.isDark?`dark`:`light`};
  }

  /* iOS 26 Safari ノッチ・Dynamic Island対応 - グラスモフィーな背景 */
  @supports (padding-top: env(safe-area-inset-top)) {
    html {
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    }

    /* トップエリア（ノッチ・Dynamic Island） - 透過グラスモフィー */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: env(safe-area-inset-top);
      background: transparent;
      backdrop-filter: saturate(180%) ${({theme:e})=>e.blur.xl};
      -webkit-backdrop-filter: saturate(180%) ${({theme:e})=>e.blur.xl};
      z-index: 9999;
      pointer-events: none;
    }

    /* ボトムエリア（ホームインジケーター） - 透過グラスモフィー */
    body::after {
      content: '';
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: env(safe-area-inset-bottom);
      background: transparent;
      backdrop-filter: saturate(180%) ${({theme:e})=>e.blur.xl};
      -webkit-backdrop-filter: saturate(180%) ${({theme:e})=>e.blur.xl};
      z-index: 9999;
      pointer-events: none;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({theme:e})=>e.colors.text};
    overflow-y: scroll;
    scrollbar-width: thin;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* カスタムスクロールバー (Webkit) */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;

    ${J.mobile} {
      width: 4px;
      height: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 0.6) 0%, rgba(243, 99, 70, 0.6) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.5) 0%, rgba(243, 99, 70, 0.5) 100%)`};
    backdrop-filter: ${({theme:e})=>e.blur.sm};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    border: 1px solid ${({theme:e})=>e.colors.borderLight};
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 0.8) 0%, rgba(243, 99, 70, 0.8) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.7) 0%, rgba(243, 99, 70, 0.7) 100%)`};
      border-color: ${({theme:e})=>e.colors.border};
    }

    &:active {
      background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 1) 0%, rgba(243, 99, 70, 1) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.9) 0%, rgba(243, 99, 70, 0.9) 100%)`};
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${({theme:e})=>e.transitions.base};
    
    &:hover {
      color: ${({theme:e})=>e.colors.primary[600]};
    }
  }

  /* テキスト選択時のカラー */
  ::selection {
    background-color: ${({theme:e})=>e.colors.primary[200]};
    color: ${({theme:e})=>e.colors.primary[900]};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  input, textarea, select {
    font: inherit;
  }
`;var la=(e,t)=>typeof t==`string`?n(e):!0,ua=({children:e})=>{let{theme:t}=Qt();return(0,y.jsx)(oe,{shouldForwardProp:la,children:(0,y.jsxs)(ae,{theme:t,children:[(0,y.jsx)(ca,{}),e]})})};ce.use(le).use(ee).init({resources:{ja:{translation:{common:{appName:`クリコン戦績記録`,confirm:`確認`,upload:`アップロード`,cancel:`キャンセル`,delete:`削除`,edit:`編集`,save:`保存`,close:`閉じる`,add:`追加`,back:`戻る`,loading:`読み込み中...`,processing:`処理中...`,closeDialog:`ダイアログを閉じる`,error:`エラーが発生しました`,noData:`データがありません`,success:`成功しました`,warning:`警告`,info:`情報`,menu:`メニュー`,toggleTheme:`テーマを切り替え`,switchToDarkMode:`ダークモードに切り替え`,switchToLightMode:`ライトモードに切り替え`,win:`勝`,defeat:`敗`,show:`表示`,hide:`非表示`,moveUp:`上へ移動`,moveDown:`下へ移動`,buildUpdate:{message:`新しいバージョンが利用可能です`,reload:`更新`}},navigation:{home:`ホーム`,graphs:`グラフ`,histories:`履歴`,faq:`FAQ`,obs:`OBS`},obs:{winCount:`勝利数`,loseCount:`敗北数`,winRate:`勝率`,totalMatches:`総試合数`,matches:`試合`,recording:{start:`OBS記録開始`,stop:`OBS記録停止`,active:`OBS記録中`,description:`記録開始後のデータのみがOBSに表示されます`},plainText:{placeholder:`テキストを入力してください`},elementType:{plainText:`プレーンテキスト`,variableText:`変数テキスト`,statsCombo:`統計コンボ`,line:`線`,rectangle:`矩形`,todayTrendChart:`今日の勝敗推移`},editMode:{enable:`編集モード`,disable:`編集完了`,instruction:`要素をドラッグして配置を調整できます`},resetLayout:`レイアウトをリセット`,browserSource:{open:`ウィンドウキャプチャを開く`},layerPanel:{addElement:`要素`,layers:`レイヤー`,noLayers:`要素がありません`,confirmDelete:`この要素を削除しますか?`},editPanel:{title:`要素を編集`,layerName:`レイヤー名`,elementType:`要素タイプ`,text:`テキスト`,textColor:`文字色`,backgroundColor:`背景色`,opacity:`不透明度`,fontSize:`フォントサイズ`,position:`位置`,visibility:`表示設定`,visible:`表示設定`,comboItems:`表示する項目`,selectElement:`要素をクリックして編集してください`,delete:`削除`,confirmDelete:`この要素を削除しますか?`,lineOrientation:`線の向き`,horizontal:`横`,vertical:`縦`,lineThickness:`線の太さ`,lineColor:`線の色`,rectangleFillColor:`塗りつぶし色`,rectangleBorderColor:`枠線の色`,rectangleBorderWidth:`枠線の太さ`,rectangleBorderRadius:`角の丸み`,scale:`拡大率`,positionX:`X座標`,positionY:`Y座標`,textAlign:`テキスト配置`,alignLeft:`左揃え`,alignCenter:`中央揃え`,alignRight:`右揃え`,padding:`パディング`,boxShadow:`影 (box-shadow)`},todayTrendChart:{noData:`データがありません`},help:{buttonTitle:`使い方を見る`,title:`OBS HUD 使い方ガイド`,overview:{title:`概要`,item1:`OBS Studioなどの配信ソフトに表示するカスタマイズ可能なHUD（ヘッドアップディスプレイ）を作成できます`,item2:`戦績統計、グラフ、テキスト、図形など様々な要素を自由に配置可能`,item3:`作成したレイアウトはウィンドウキャプチャとしてOBSに追加できます`},basicUsage:{title:`基本的な使い方`,step1:{title:`1. 編集モードを有効化`,description:`右下の「編集モード」ボタンをクリックして編集を開始します`},step2:{title:`2. 要素を追加`,description:`左側のパネルから要素アイコンをドラッグ&ドロップでキャンバスに配置します`},step3:{title:`3. 要素をカスタマイズ`,description:`配置した要素をクリックして選択し、右側のパネルで色やサイズ、テキストなどを調整します`},step4:{title:`4. OBSに追加`,description:`「ウィンドウキャプチャを開く」ボタンで別ウィンドウを開き、そのウィンドウをOBSのウィンドウキャプチャソースに設定します`}},tips:{title:`便利な機能`,item1:`テンプレート機能：プリセットレイアウトから選択して素早くセットアップ`,item2:`スナップガイド：要素をドラッグ中に自動的に整列をサポート`,item3:`リサイズハンドル：要素の四隅をドラッグしてサイズを調整`,item4:`OBS記録開始/停止：配信開始時点からのデータのみを表示するように切り替え可能`},important:{title:`重要な注意事項`,item1:`OBSのブラウザソース機能ではlocalStorageにアクセスできないため、データが読み込めません。必ずウィンドウキャプチャを使用してください`,item2:`ウィンドウキャプチャではブラウザのURLバーが必ず表示されます。OBSのクロップ機能やオーバーレイなどを使用してURLバーを隠してください`}},templates:{title:`テンプレートから選択`,button:`テンプレート`,noTemplates:`テンプレートがありません`,categories:{all:`すべて`,minimal:`ミニマル`,detailed:`詳細表示`,streaming:`配信向け`,competitive:`競技向け`},minimalCorner:{name:`コーナー統計`,description:`必要最小限の情報を画面隅に配置`},minimalTopBar:{name:`トップバー`,description:`重要な指標を上部中央に配置`},minimalSidePanel:{name:`サイドパネル`,description:`縦型のサイドパネルレイアウト`},detailedDashboard:{name:`フルダッシュボード`,description:`包括的な統計情報ダッシュボード`},detailedSplitView:{name:`分割ビュー`,description:`統計とグラフを横並びで表示`},streamingBottomTicker:{name:`ボトムティッカー`,description:`画面下部にティッカー表示`},streamingCornerOverlay:{name:`コーナーオーバーレイ`,description:`控えめなコーナーオーバーレイ`},streamingTitleSafe:{name:`タイトルセーフエリア`,description:`サムネイル対応の安全エリア配置`},competitiveEsports:{name:`E-Sports HUD`,description:`プロトーナメントスタイル`},competitiveScoreboard:{name:`スコアボード`,description:`見やすいスコアボードレイアウト`},competitiveAnalyst:{name:`アナリストビュー`,description:`解説向けの詳細分析表示`},premiumNeonGlow:{name:`ネオングロー`,description:`サイバーパンク風ネオン美学`},premiumGradientFlow:{name:`グラデーションフロー`,description:`滑らかなグラデーションアニメーション`},premiumUltraClean:{name:`ウルトラクリーン`,description:`ミニマリストの完璧`}}},pages:{home:{title:`{{seasonName}} の戦績`,description:`戦績と統計情報を入力します。`,createSeason:`新しいシーズンを作成`,noSeason:`シーズンが作成されていません`,createFirstSeason:`最初のシーズンを作成してください`,errorOccurred:`エラーが発生しました`},obs:{title:`OBS配信用HUD`,description:`ドラッグ&ドロップで配置を調整し、OBSのブラウザソースとして使用できます。`,screenSize:{title:`画面サイズ設定`,width:`幅`,height:`高さ`,info:`OBSウィンドウで開く際の画面サイズを設定します。プリセットから選択するか、カスタムサイズを入力できます。`}},graphs:{title:`戦績グラフ`,description:`現シーズンの戦績をグラフ形式で可視化します。`,descriptionWithSeason:`{{seasonName}} の戦績をグラフ形式で可視化します。`,daily:`日別勝敗数`,hourly:`時間別勝率`,weekly:`曜日別勝率`,jobWinRate:`ジョブ別勝率`,jobUsage:`ジョブ使用率`,filters:{character:`キャラクター`,job:`ジョブ`,map:`マップ`,all:`すべて`}},histories:{title:`履歴一覧`,description:`過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。`,totalSeasons:`総シーズン数: {{count}}件`,totalMatches:`総試合数: {{count}}`,latestCreated:`最新作成`,detail:`詳細`,delete:`削除`,confirmDelete:`シーズンの削除`,deleteDescription:`「{{seasonName}}」を削除してもよろしいですか？
この操作は取り消すことができません。`,emptyState:`履歴がありません`,stats:`シーズン数`,createBackup:`バックアップを作成`,importBackup:`バックアップ取り込み`,importBackupWarningTitle:`バックアップの取り込み`,importBackupWarningMessage:`現在のデータはバックアップのデータで上書きされます。この操作は取り消せません。続行しますか？`,backupCreated:`バックアップを作成しました`,backupRestored:`バックアップを復元しました`,errors:{loadFailed:`履歴の読み込みに失敗しました`,alreadyExists:`シーズン「{{seasonName}}」は既に存在します`,notFound:`指定された履歴が見つかりません`,characterNotFound:`指定されたキャラクターが見つかりません`,deleteMatchRecordsFailed:`シーズン {{uuid}} のマッチレコード削除中にエラーが発生しました`,loadMatchRecordsFailed:`シーズン {{seasonUuid}} のマッチレコード読み込み中にエラーが発生しました`,backupCreateFailed:`バックアップの作成に失敗しました`,backupRestoreFailed:`バックアップの復元に失敗しました`,backupFileCorrupted:`バックアップファイルが破損しています`}},historyDetail:{title:`{{seasonName}} の詳細`,description:`シーズンの全戦績を表示しています。`,backToList:`履歴一覧に戻る`,totalMatches:`{{count}}試合の戦績`,matchesCount:`試合数`,winRate:`勝率`,overall:`全体`,createdDate:`作成日`,searchPlaceholder:`キャラクター名、ジョブ、日時で検索...`,columns:{season:`シーズン名`,character:`キャラクター名`,job:`使用ジョブ`,map:`マップ`,result:`勝敗`,date:`作成日時`},results:{win:`Win`,defeat:`Defeat`},emptyState:`戦績が記録されていません`},newSeason:{title:`新しいシーズンを作成`,description:`新しいシーズンを作成します。シーズン名を入力してください。`,seasonName:`シーズン名`,seasonNamePlaceholder:`例: シーズン1`,create:`作成する`,creating:`作成中...`,cancel:`キャンセル`,confirmTitle:`シーズン作成の確認`,confirmDescription:`新しいシーズンを作成すると「{{seasonName}}」の戦績データは過去のシーズンとしてアーカイブされ、新しい戦績の入力が開始されます。よろしいでしょうか?`,validationRequired:`シーズン名を入力してください`,validationMaxLength:`シーズン名は{{length}}文字以内で入力してください`,successMessage:`シーズン「{{seasonName}}」を作成しました`},faq:{title:`よくある質問 (FAQ)`,description:`CC戦績記録について、よくお寄せいただく質問とその回答をまとめました。`,privacy:{title:`プライバシー・データについて`,dataStorage:{question:`戦績データはどこに保存されますか？`,answer:{intro:`戦績データはすべてお使いのブラウザのローカルストレージに保存されます。`,description:`当アプリケーションでは、以下の方針でデータを扱っています：`,points:[`戦績データや個人情報は一切サーバーに送信されません`,`すべてのデータはブラウザ内のみで管理されます`,`アプリケーション開発者がユーザーの戦績データにアクセスすることはありません`,`データの削除はブラウザの設定から行えます`]}},analytics:{question:`Google Analyticsで何が収集されますか？`,answer:{intro:`当サイトでは、サービス改善のためにGoogle Analyticsを使用しています。`,collected:`収集される情報：`,collectedPoints:[`アクセス統計：ページビュー数、セッション数、平均滞在時間など`,`技術情報：ブラウザの種類、OS、画面サイズなど`,`地域情報：国や地域レベルの大まかな位置情報（詳細な住所等は含まれません）`],notCollected:`収集されない情報：`,notCollectedPoints:[`戦績データや個人の成績情報`,`キャラクター名やその他の個人情報`,`詳細な位置情報や住所`],anonymous:`これらの統計情報は匿名化されており、個人を特定することはできません。`}},dataDeletion:{question:`データの削除方法を教えてください`,answer:{intro:`保存されているデータを削除したい場合は、以下の方法で行えます：`,methods:[`個別削除：各ページで「削除」ボタンを使用`,`完全削除：ブラウザの設定からサイトデータを削除`],browserMethods:`ブラウザからのデータ削除方法：`,browserSteps:[`Chrome: 設定 → プライバシーとセキュリティ → サイトデータ`,`Firefox: 設定 → プライバシーとセキュリティ → Cookieとサイトデータ`,`Safari: 環境設定 → プライバシー → Webサイトデータを管理`]}}},usage:{title:`アプリケーションの使い方`,backup:{question:`データのバックアップ方法を教えてください`,answer:{intro:`履歴ページからデータのバックアップと復元ができます：`,backup:`バックアップの作成：`,backupSteps:[`履歴ページの右上にある「バックアップを作成」ボタンをクリック`,`自動的にZIPファイルがダウンロードされます`,`ファイル名は「cc-war-record-backup-日時.zip」形式で保存されます`],restore:`バックアップの復元：`,restoreSteps:[`履歴ページの右上にある「バックアップから復元」ボタンをクリック`,`保存したZIPファイルを選択`,`データが復元され、ページが自動的にリロードされます`],includes:`バックアップに含まれるデータ：`,includesItems:[`キャラクター情報`,`試合記録（全シーズン）`,`シーズン履歴`,`レーダーチャート設定`],note:`※ バックアップファイルは安全な場所に保管してください`}},dataDefeat:{question:`データが消えてしまうことはありますか？`,answer:{intro:`ローカルストレージに保存されたデータは、以下の場合に削除される可能性があります：`,causes:[`ブラウザのキャッシュクリア時`,`ブラウザの設定でサイトデータを削除した場合`,`プライベートブラウジングモード使用時`,`デバイスの容量不足時（ブラウザが自動削除する場合）`],recommendation:`重要なデータは定期的にバックアップを取ることをお勧めします。`}},dataSyncing:{question:`複数のブラウザでデータを共有できますか？`,answer:{limitation:`申し訳ございませんが、現在のところブラウザ間でのデータ同期機能は提供していません。`,explanation:`各ブラウザのローカルストレージは独立しているため、データは使用したブラウザでのみ利用可能です。`,workaround:`ただし、バックアップ機能を使えば、別のブラウザやデバイスにデータを移行することができます。`}}},copyright:{disclaimer:`このアプリケーションはファンメイドの非公式ツールであり、株式会社スクウェア・エニックスとは一切関係がありません。`}},notFound:{title:`ページが見つかりません`,description:`お探しのページは存在しないか、削除された可能性があります。`,backToHome:`ホームに戻る`}},character:{name:`キャラクター名`,create:`キャラクターを作成`,createSuccess:`キャラクター「{{name}}」を作成しました`,edit:`キャラクター名を編集`,delete:`キャラクターを削除`,confirmDelete:`削除する`,moveUp:`1つ上に`,moveDown:`1つ下に`,deleteDescription:`キャラクター「{{name}}」を削除しますか？<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。</span>`,namePlaceholder:`キャラクター名を入力`,validationRequired:`キャラクター名を入力してください`,emptyState:`キャラクターがありません`,createFirst:`最初のキャラクターを作成してください`,errors:{alreadyExists:`キャラクター「{{name}}」は既に存在します`,notFound:`キャラクターが見つかりません`,loadFailed:`データの読み込みに失敗しました`,matchRecordNotFound:`戦績記録が見つかりません`},stats:{matches:`{{count}}試合`,totalMatches:`{{count}}試合`,winRate:`勝率{{rate}}%`,noWinRate:`勝率--%`,wins:`{{count}}勝`,defeats:`{{count}}敗`},actions:{addJob:`ジョブの追加`,editName:`名前を編集`,deleteName:`キャラクターの削除`,more:`その他`}},match:{record:`戦績を記録`,job:`ジョブ`,map:`マップ`,result:`結果`,win:`勝利数`,defeat:`敗北数`,memo:`メモ`,memoPlaceholder:`メモを入力（任意）`,selectJob:`ジョブを選択してください`,selectMap:`マップを選択してください`,recorded:`戦績を記録しました`,totalMatches:`試合数`,winRate:`勝率`,allStagesTotal:`全ステージ合計`,actions:`操作`,pleaseRegisterJob:`ジョブを登録してください`,recentMatches:`最近の戦績`,deleteMatch:`戦績を削除`,confirmDelete:`戦績の削除`,confirmDeleteButton:`削除する`,deleteConfirmation:`{{characterName}} の {{date}} の戦績を削除してもよろしいですか？
この操作は取り消すことができません。`,addWin:`勝利を記録`,addDefeat:`敗北を記録`,rollback:`直前の記録を取り消し`},job:{select:`ジョブ選択`,selectJob:`使用ジョブを選択`,selectJobDescription:`ジョブを選択してください`,tank:`タンク`,healer:`ヒーラー`,meleeDps:`近接DPS`,melee_dps:`近接DPS`,physicalRangedDps:`物理遠隔DPS`,physical_ranged_dps:`物理遠隔DPS`,magicalRangedDps:`魔法遠隔DPS`,magical_ranged_dps:`魔法遠隔DPS`,PLD:`ナイト`,WAR:`戦士`,DRK:`暗黒騎士`,GNB:`ガンブレイカー`,WHM:`白魔道士`,SCH:`学者`,AST:`占星術師`,SGE:`賢者`,MNK:`モンク`,DRG:`竜騎士`,NIN:`忍者`,SAM:`侍`,RPR:`リーパー`,VPR:`ヴァイパー`,BRD:`吟遊詩人`,MCH:`機工士`,DNC:`踊り子`,BLM:`黒魔道士`,SMN:`召喚士`,RDM:`赤魔道士`,PCT:`ピクトマンサー`},maps:{THE_PALAISTRA:`パライストラ`,VOLCANIC_HEART:`ヴォルカニックハート`,CLOUD_NINE:`クラウドナイン`,TOUHOU_KARAKURI_GOTEN:`東方絡繰御殿`,RED_SANDS:`レッドサンズ`,BAYSIDE_BATTLEGROUND:`ベイサイドバトルグラウンド`},chart:{winRate:`勝率`,winCount:`勝利数`,defeatCount:`敗北数`,usageRate:`使用率`,matches:`試合`,noData:`データがありません`,noMatchData:`試合データがありません`,selectJobs:`ジョブを選択（最大5個）`,hour:`{{hour}}時`,day:{sunday:`日`,monday:`月`,tuesday:`火`,wednesday:`水`,thursday:`木`,friday:`金`,saturday:`土`},labels:{character:`キャラクター`,job:`ジョブ`,map:`マップ`,date:`日付`,allCharacters:`すべてのキャラクター`,allJobs:`すべてのジョブ`,allMaps:`すべてのマップ`,jobSelection:`ジョブ選択（最大5つ）`,selectJob:`ジョブを選択`},titles:{dailyWinDefeat:`日別勝敗数と勝率推移`,weeklyWinRate:`曜日別勝率比較`,hourlyWinDefeat:`時間帯別勝率分析`,jobUsageRate:`ジョブ使用率`,jobWinRateByMap:`マップ別ジョブ勝率比較`,todayWinDefeatTrend:`その日の勝敗推移`},axes:{matchCount:`対戦回数`,winRatePercent:`勝率 (%)`,date:`日付`,weekday:`曜日`,hour:`時間帯`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`使用回数`,usageRatePercent:`使用率`,win:`Win`,lose:`Defeat`,total:`合計`,matches:`試合`,noMatchData:`試合データなし`},weekdays:{sunday:`日曜日`,monday:`月曜日`,tuesday:`火曜日`,wednesday:`水曜日`,thursday:`木曜日`,friday:`金曜日`,saturday:`土曜日`},todayTrend:{match:`第{{number}}試合`,winRate:`勝率`,winCount:`勝数`,winDifference:`勝ち越し数`,record:`戦績`,matches:`試合`,matchNumber:`試合数`,noData:`今日の試合データがありません`}},language:{current:`日本語`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`言語を切り替え`}}},en:{translation:{common:{appName:`CC War Record`,confirm:`Confirm`,upload:`Upload`,cancel:`Cancel`,delete:`Delete`,edit:`Edit`,save:`Save`,close:`Close`,add:`Add`,back:`Back`,loading:`Loading...`,processing:`Processing...`,closeDialog:`Close dialog`,error:`An error occurred`,noData:`No data available`,success:`Success`,warning:`Warning`,info:`Information`,menu:`Menu`,toggleTheme:`Toggle theme`,switchToDarkMode:`Switch to dark mode`,switchToLightMode:`Switch to light mode`,win:`Win`,defeat:`Defeat`,show:`Show`,hide:`Hide`,moveUp:`Move Up`,moveDown:`Move Down`,buildUpdate:{message:`A new version is available`,reload:`Reload`}},navigation:{home:`Home`,graphs:`Graphs`,histories:`Histories`,faq:`FAQ`,obs:`OBS`},obs:{winCount:`Wins`,loseCount:`Losses`,winRate:`Win Rate`,totalMatches:`Total Matches`,matches:`Matches`,plainText:{placeholder:`Enter text here`},elementType:{plainText:`Plain Text`,variableText:`Variable Text`,statsCombo:`Stats Combo`,line:`Line`,rectangle:`Rectangle`,todayTrendChart:`Today's Win/Defeat Trend`},editMode:{enable:`Edit Mode`,disable:`Done Editing`,instruction:`Drag elements to adjust their position`},resetLayout:`Reset Layout`,browserSource:{open:`Open Window Capture`},layerPanel:{addElement:`Elements`,layers:`Layers`,noLayers:`No elements`,confirmDelete:`Delete this element?`},editPanel:{title:`Edit Element`,layerName:`Layer Name`,elementType:`Element Type`,text:`Text`,textColor:`Text Color`,backgroundColor:`Background Color`,opacity:`Opacity`,fontSize:`Font Size`,position:`Position`,visibility:`Visibility`,visible:`Visibility`,comboItems:`Items to display`,selectElement:`Click an element to edit`,delete:`Delete`,confirmDelete:`Delete this element?`,lineOrientation:`Line Orientation`,horizontal:`Horizontal`,vertical:`Vertical`,lineThickness:`Line Thickness`,lineColor:`Line Color`,rectangleFillColor:`Fill Color`,rectangleBorderColor:`Border Color`,rectangleBorderWidth:`Border Width`,rectangleBorderRadius:`Border Radius`,scale:`Scale`,positionX:`X Position`,positionY:`Y Position`,textAlign:`Text Alignment`,alignLeft:`Left`,alignCenter:`Center`,alignRight:`Right`,padding:`Padding`,boxShadow:`Shadow (box-shadow)`},todayTrendChart:{noData:`No data available`},help:{buttonTitle:`View Usage Guide`,title:`OBS HUD Usage Guide`,overview:{title:`Overview`,item1:`Create customizable HUD (Heads-Up Display) for streaming software like OBS Studio`,item2:`Freely arrange various elements such as match statistics, charts, text, and shapes`,item3:`Add the created layout to OBS as a window capture`},basicUsage:{title:`Basic Usage`,step1:{title:`1. Enable Edit Mode`,description:`Click the "Edit Mode" button in the bottom-right to start editing`},step2:{title:`2. Add Elements`,description:`Drag and drop element icons from the left panel onto the canvas`},step3:{title:`3. Customize Elements`,description:`Click on a placed element to select it, then adjust colors, sizes, text, etc. in the right panel`},step4:{title:`4. Add to OBS`,description:`Click "Open Window Capture" to open a separate window, then set that window as a window capture source in OBS`}},tips:{title:`Useful Features`,item1:`Templates: Quick setup by choosing from preset layouts`,item2:`Snap Guides: Automatic alignment support while dragging elements`,item3:`Resize Handles: Drag element corners to adjust size`,item4:`OBS Recording Start/Stop: Toggle to display only data from stream start time`},important:{title:`Important Notes`,item1:`OBS Browser Source cannot access localStorage and will not load data. You must use Window Capture instead`,item2:`Window Capture will always show the browser's URL bar. Use OBS crop filter or overlays to hide the URL bar`}},templates:{title:`Choose from Templates`,button:`Templates`,noTemplates:`No templates available`,categories:{all:`All`,minimal:`Minimal`,detailed:`Detailed`,streaming:`Streaming`,competitive:`Competitive`},minimalCorner:{name:`Corner Stats`,description:`Essential stats in screen corner`},minimalTopBar:{name:`Top Bar`,description:`Key metrics centered at top`},minimalSidePanel:{name:`Side Panel`,description:`Vertical side panel layout`},detailedDashboard:{name:`Full Dashboard`,description:`Comprehensive stats dashboard`},detailedSplitView:{name:`Split View`,description:`Stats and chart side by side`},streamingBottomTicker:{name:`Bottom Ticker`,description:`Ticker display at bottom`},streamingCornerOverlay:{name:`Corner Overlay`,description:`Subtle corner overlay`},streamingTitleSafe:{name:`Title Safe Area`,description:`Thumbnail-safe placement`},competitiveEsports:{name:`E-Sports HUD`,description:`Professional tournament style`},competitiveScoreboard:{name:`Scoreboard`,description:`Clear scoreboard layout`},competitiveAnalyst:{name:`Analyst View`,description:`Detailed analytics for commentary`},premiumNeonGlow:{name:`Neon Glow`,description:`Cyberpunk neon aesthetic`},premiumGradientFlow:{name:`Gradient Flow`,description:`Smooth gradient animations`},premiumUltraClean:{name:`Ultra Clean`,description:`Minimalist perfection`}}},pages:{home:{title:`{{seasonName}} Records`,description:`Enter your match records and view statistics.`,createSeason:`Create New Season`,noSeason:`No season created`,createFirstSeason:`Please create your first season`,errorOccurred:`An error occurred`},obs:{title:`OBS Streaming HUD`,description:`Drag and drop to adjust layout, then use as a browser source in OBS.`,screenSize:{title:`Screen Size Settings`,width:`Width`,height:`Height`,info:`Set the screen size for the OBS window. Choose from presets or enter a custom size.`}},graphs:{title:`Match Statistics`,description:`Visualize current season match statistics in graph format.`,descriptionWithSeason:`Visualize {{seasonName}} match statistics in graph format.`,daily:`Daily Win/Defeat`,hourly:`Hourly Win Rate`,weekly:`Weekly Win Rate`,jobWinRate:`Job Win Rate`,jobUsage:`Job Usage Rate`,filters:{character:`Character`,job:`Job`,map:`Map`,all:`All`}},histories:{title:`History`,description:`View and manage past seasons. Click the detail button to see more information about each season.`,totalSeasons:`Total Seasons: {{count}}`,totalMatches:`Total Matches: {{count}}`,latestCreated:`Latest`,detail:`Details`,delete:`Delete`,confirmDelete:`Delete Season`,deleteDescription:`Are you sure you want to delete "{{seasonName}}"?
This action cannot be undone.`,emptyState:`No history available`,stats:`Seasons`,createBackup:`Create Backup`,importBackup:`Import Backup`,importBackupWarningTitle:`Import Backup`,importBackupWarningMessage:`Current data will be overwritten with the backup data. This action cannot be undone. Do you want to continue?`,backupCreated:`Backup created successfully`,backupRestored:`Backup restored successfully`,errors:{loadFailed:`Failed to load history`,alreadyExists:`Season "{{seasonName}}" already exists`,notFound:`The specified history was not found`,characterNotFound:`The specified character was not found`,deleteMatchRecordsFailed:`Error deleting match records for season {{uuid}}`,loadMatchRecordsFailed:`Error loading match records for season {{seasonUuid}}`,backupCreateFailed:`Failed to create backup`,backupRestoreFailed:`Failed to restore backup`,backupFileCorrupted:`Backup file is corrupted`}},historyDetail:{title:`{{seasonName}} Details`,description:`Displaying all matches for this season.`,backToList:`Back to History`,totalMatches:`{{count}} matches`,matchesCount:`Matches`,winRate:`Win Rate`,overall:`Overall`,createdDate:`Created`,searchPlaceholder:`Search by character, job, date...`,columns:{season:`Season Name`,character:`Character Name`,job:`Job Used`,map:`Map`,result:`Result`,date:`Date`},results:{win:`Win`,defeat:`Defeat`},emptyState:`No matches recorded`},newSeason:{title:`Create New Season`,description:`Create a new season. Please enter a season name.`,seasonName:`Season Name`,seasonNamePlaceholder:`e.g. Season 1`,create:`Create`,creating:`Creating...`,cancel:`Cancel`,confirmTitle:`Confirm Season Creation`,confirmDescription:`Creating a new season will archive the match data for "{{seasonName}}" and start recording new matches. Continue?`,validationRequired:`Please enter a season name`,validationMaxLength:`Season name must be {{length}} characters or less`,successMessage:`Season "{{seasonName}}" created successfully`},faq:{title:`Frequently Asked Questions (FAQ)`,description:`Common questions and answers about CC War Record.`,privacy:{title:`Privacy & Data`,dataStorage:{question:`Where is my match data stored?`,answer:{intro:`All match data is stored in your browser's local storage only.`,description:`Our application handles data with the following policy:`,points:[`Match data and personal information are never sent to servers`,`All data is managed within your browser only`,`Application developers cannot access your match data`,`Data can be deleted through browser settings`]}},analytics:{question:`What does Google Analytics collect?`,answer:{intro:`We use Google Analytics to improve our service.`,collected:`Information collected:`,collectedPoints:[`Access statistics: page views, sessions, average session duration, etc.`,`Technical information: browser type, OS, screen size, etc.`,`Regional information: general location at country/region level (no detailed addresses)`],notCollected:`Information NOT collected:`,notCollectedPoints:[`Match data or personal performance information`,`Character names or other personal information`,`Detailed location information or addresses`],anonymous:`All statistical information is anonymized and cannot identify individuals.`}},dataDeletion:{question:`How can I delete my data?`,answer:{intro:`To delete stored data, you can use the following methods:`,methods:[`Individual deletion: Use the "Delete" button on each page`,`Complete deletion: Delete site data through browser settings`],browserMethods:`Browser data deletion methods:`,browserSteps:[`Chrome: Settings → Privacy and security → Site data`,`Firefox: Settings → Privacy & Security → Cookies and Site Data`,`Safari: Preferences → Privacy → Manage Website Data`]}}},usage:{title:`Application Usage`,backup:{question:`How do I backup my data?`,answer:{intro:`You can backup and restore your data from the History page:`,backup:`Creating a backup:`,backupSteps:[`Click the "Create Backup" button in the top right of the History page`,`A ZIP file will be automatically downloaded`,`The file is saved as "cc-war-record-backup-timestamp.zip"`],restore:`Restoring from backup:`,restoreSteps:[`Click the "Restore from Backup" button in the top right of the History page`,`Select your saved ZIP file`,`Data will be restored and the page will automatically reload`],includes:`Data included in backup:`,includesItems:[`Character information`,`Match records (all seasons)`,`Season history`,`Radar chart settings`],note:`※ Please keep your backup file in a safe place`}},dataDefeat:{question:`Can my data be lost?`,answer:{intro:`Data stored in local storage may be deleted in the following cases:`,causes:[`When browser cache is cleared`,`When site data is deleted through browser settings`,`When using private browsing mode`,`When device storage is low (browser may auto-delete)`],recommendation:`We recommend regularly backing up important data.`}},dataSyncing:{question:`Can I share data between multiple browsers?`,answer:{limitation:`Unfortunately, we do not currently provide data synchronization between browsers.`,explanation:`Each browser's local storage is independent, so data is only available in the browser where it was created.`,workaround:`However, you can use the backup feature to transfer data to another browser or device.`}}},copyright:{disclaimer:`This application is a fan-made unofficial tool and is not affiliated with Square Enix Co., Ltd. in any way.`}},notFound:{title:`Page Not Found`,description:`The page you're looking for doesn't exist or may have been deleted.`,backToHome:`Back to Home`}},character:{name:`Character Name`,create:`Create Character`,createSuccess:`Character "{{name}}" created successfully`,edit:`Edit Character Name`,delete:`Delete Character`,confirmDelete:`Delete`,moveUp:`Move up`,moveDown:`Move down`,deleteDescription:`Are you sure you want to delete character "{{name}}"?<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ All associated match records will also be deleted. This action cannot be undone.</span>`,namePlaceholder:`Enter character name`,validationRequired:`Please enter a character name`,emptyState:`No characters`,createFirst:`Create your first character`,errors:{alreadyExists:`Character "{{name}}" already exists`,notFound:`Character not found`,loadFailed:`Failed to load data`,matchRecordNotFound:`Match record not found`},stats:{matches:`{{count}} matches`,totalMatches:`{{count}} matches`,winRate:`{{rate}}% win rate`,noWinRate:`-- % win rate`,wins:`{{count}} wins`,defeats:`{{count}} defeats`},actions:{addJob:`Add Job`,editName:`Edit Name`,deleteName:`Delete Character`,more:`More`}},match:{record:`Record Match`,job:`Job`,map:`Map`,result:`Result`,win:`Wins`,defeat:`Defeats`,memo:`Memo`,memoPlaceholder:`Enter memo (optional)`,selectJob:`Please select a job`,selectMap:`Please select a map`,recorded:`Match recorded successfully`,totalMatches:`Matches`,winRate:`Win Rate`,allStagesTotal:`All Stages Total`,actions:`Actions`,pleaseRegisterJob:`Please register a job`,recentMatches:`Recent Matches`,deleteMatch:`Delete Match`,confirmDelete:`Delete Match Record`,confirmDeleteButton:`Delete`,deleteConfirmation:`Are you sure you want to delete the match record for {{characterName}} on {{date}}?
This action cannot be undone.`,addWin:`Record Win`,addDefeat:`Record Defeat`,rollback:`Undo Last Record`},job:{select:`Select Job`,selectJob:`Select Job to Use`,selectJobDescription:`Please select a job`,tank:`Tank`,healer:`Healer`,meleeDps:`Melee DPS`,melee_dps:`Melee DPS`,physicalRangedDps:`Physical Ranged DPS`,physical_ranged_dps:`Physical Ranged DPS`,magicalRangedDps:`Magical Ranged DPS`,magical_ranged_dps:`Magical Ranged DPS`,PLD:`Paladin`,WAR:`Warrior`,DRK:`Dark Knight`,GNB:`Gunbreaker`,WHM:`White Mage`,SCH:`Scholar`,AST:`Astrologian`,SGE:`Sage`,MNK:`Monk`,DRG:`Dragoon`,NIN:`Ninja`,SAM:`Samurai`,RPR:`Reaper`,VPR:`Viper`,BRD:`Bard`,MCH:`Machinist`,DNC:`Dancer`,BLM:`Black Mage`,SMN:`Summoner`,RDM:`Red Mage`,PCT:`Pictomancer`},maps:{THE_PALAISTRA:`The Palaistra`,VOLCANIC_HEART:`The Volcanic Heart`,CLOUD_NINE:`Cloud Nine`,TOUHOU_KARAKURI_GOTEN:`The Clockwork Castletown`,RED_SANDS:`The Red Sands`,BAYSIDE_BATTLEGROUND:`The Bayside Battleground`},chart:{winRate:`Win Rate`,winCount:`Wins`,defeatCount:`Defeats`,usageRate:`Usage Rate`,matches:`Matches`,noData:`No data available`,noMatchData:`No match data available`,selectJobs:`Select jobs (max 5)`,hour:`{{hour}}:00`,day:{sunday:`Sun`,monday:`Mon`,tuesday:`Tue`,wednesday:`Wed`,thursday:`Thu`,friday:`Fri`,saturday:`Sat`},labels:{character:`Character`,job:`Job`,map:`Map`,date:`Date`,allCharacters:`All Characters`,allJobs:`All Jobs`,allMaps:`All Maps`,jobSelection:`Job Selection (Max 5)`,selectJob:`Select Job`},titles:{dailyWinDefeat:`Daily Win/Defeat and Win Rate Trend`,weeklyWinRate:`Win Rate Comparison by Day of Week`,hourlyWinDefeat:`Win Rate Analysis by Time of Day`,jobUsageRate:`Job Usage Rate`,jobWinRateByMap:`Job Win Rate Comparison by Map`,todayWinDefeatTrend:`Today's Win/Defeat Trend`},axes:{matchCount:`Match Count`,winRatePercent:`Win Rate (%)`,date:`Date`,weekday:`Day of Week`,hour:`Time of Day`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`Usage Count`,usageRatePercent:`Usage Rate`,win:`Win`,lose:`Defeat`,total:`Total`,matches:`Matches`,noMatchData:`No match data`},weekdays:{sunday:`Sunday`,monday:`Monday`,tuesday:`Tuesday`,wednesday:`Wednesday`,thursday:`Thursday`,friday:`Friday`,saturday:`Saturday`},todayTrend:{match:`Match #{{number}}`,winRate:`Win Rate`,winCount:`Wins`,winDifference:`Win Difference`,record:`Record`,matches:`matches`,matchNumber:`Matches`,noData:`No match data available for today`}},language:{current:`English`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`Switch Language`}}},ko:{translation:{common:{appName:`크리스탈 컨플릭트 전적 기록`,confirm:`확인`,upload:`업로드`,cancel:`취소`,delete:`삭제`,edit:`편집`,save:`저장`,close:`닫기`,add:`추가`,back:`뒤로`,loading:`로딩 중...`,processing:`처리 중...`,closeDialog:`대화상자 닫기`,error:`오류가 발생했습니다`,noData:`데이터가 없습니다`,success:`성공`,warning:`경고`,info:`정보`,menu:`메뉴`,toggleTheme:`테마 전환`,switchToDarkMode:`다크 모드로 전환`,switchToLightMode:`라이트 모드로 전환`,show:`표시`,hide:`숨기기`,moveUp:`위로 이동`,moveDown:`아래로 이동`,buildUpdate:{message:`새 버전을 사용할 수 있습니다`,reload:`새로고침`}},navigation:{home:`홈`,graphs:`그래프`,histories:`기록`,faq:`FAQ`,obs:`OBS`},obs:{winCount:`승리`,loseCount:`패배`,winRate:`승률`,totalMatches:`총 경기 수`,matches:`경기`,plainText:{placeholder:`텍스트를 입력하세요`},elementType:{plainText:`일반 텍스트`,variableText:`변수 텍스트`,statsCombo:`통계 콤보`,line:`선`,rectangle:`사각형`,todayTrendChart:`오늘의 승패 추이`},editMode:{enable:`편집 모드`,disable:`편집 완료`,instruction:`요소를 드래그하여 위치를 조정할 수 있습니다`},resetLayout:`레이아웃 재설정`,browserSource:{open:`윈도우 캡처 열기`},layerPanel:{addElement:`요소`,layers:`레이어`,noLayers:`요소가 없습니다`,confirmDelete:`이 요소를 삭제하시겠습니까?`},editPanel:{title:`요소 편집`,layerName:`레이어 이름`,elementType:`요소 유형`,text:`텍스트`,textColor:`텍스트 색상`,backgroundColor:`배경 색상`,opacity:`불투명도`,fontSize:`글꼴 크기`,position:`위치`,visibility:`표시 설정`,visible:`표시 설정`,comboItems:`표시할 항목`,selectElement:`요소를 클릭하여 편집하세요`,delete:`삭제`,confirmDelete:`이 요소를 삭제하시겠습니까?`,lineOrientation:`선 방향`,horizontal:`가로`,vertical:`세로`,lineThickness:`선 두께`,lineColor:`선 색상`,rectangleFillColor:`채우기 색상`,rectangleBorderColor:`테두리 색상`,rectangleBorderWidth:`테두리 두께`,rectangleBorderRadius:`모서리 둥글기`,scale:`확대율`,positionX:`X 위치`,positionY:`Y 위치`,textAlign:`텍스트 정렬`,alignLeft:`왼쪽`,alignCenter:`가운데`,alignRight:`오른쪽`,padding:`패딩`,boxShadow:`그림자 (box-shadow)`},todayTrendChart:{noData:`데이터가 없습니다`},help:{buttonTitle:`사용법 보기`,title:`OBS HUD 사용 가이드`,overview:{title:`개요`,item1:`OBS Studio와 같은 스트리밍 소프트웨어에 표시할 수 있는 사용자 정의 HUD(헤드업 디스플레이)를 만들 수 있습니다`,item2:`전적 통계, 그래프, 텍스트, 도형 등 다양한 요소를 자유롭게 배치할 수 있습니다`,item3:`생성한 레이아웃을 윈도우 캡처로 OBS에 추가할 수 있습니다`},basicUsage:{title:`기본 사용법`,step1:{title:`1. 편집 모드 활성화`,description:`오른쪽 하단의 "편집 모드" 버튼을 클릭하여 편집을 시작합니다`},step2:{title:`2. 요소 추가`,description:`왼쪽 패널에서 요소 아이콘을 드래그 앤 드롭하여 캔버스에 배치합니다`},step3:{title:`3. 요소 사용자 정의`,description:`배치된 요소를 클릭하여 선택한 후 오른쪽 패널에서 색상, 크기, 텍스트 등을 조정합니다`},step4:{title:`4. OBS에 추가`,description:`"윈도우 캡처 열기" 버튼으로 별도 창을 열고, 해당 창을 OBS의 윈도우 캡처 소스로 설정합니다`}},tips:{title:`유용한 기능`,item1:`템플릿 기능: 프리셋 레이아웃에서 선택하여 빠른 설정`,item2:`스냅 가이드: 요소를 드래그하는 동안 자동 정렬 지원`,item3:`크기 조절 핸들: 요소의 모서리를 드래그하여 크기 조정`,item4:`OBS 녹화 시작/중지: 스트리밍 시작 시점부터의 데이터만 표시하도록 전환 가능`},important:{title:`중요 주의사항`,item1:`OBS 브라우저 소스 기능은 localStorage에 접근할 수 없어 데이터를 불러올 수 없습니다. 반드시 윈도우 캡처를 사용하세요`,item2:`윈도우 캡처를 사용하면 브라우저의 URL 바가 항상 표시됩니다. OBS의 크롭 필터나 오버레이 등을 사용하여 URL 바를 숨겨주세요`}},templates:{title:`템플릿 선택`,button:`템플릿`,noTemplates:`템플릿이 없습니다`,categories:{all:`전체`,minimal:`미니멀`,detailed:`상세 표시`,streaming:`스트리밍`,competitive:`경쟁`},minimalCorner:{name:`코너 통계`,description:`필수 정보를 화면 모서리에 배치`},minimalTopBar:{name:`상단 바`,description:`주요 지표를 상단 중앙에 배치`},minimalSidePanel:{name:`사이드 패널`,description:`세로형 사이드 패널 레이아웃`},detailedDashboard:{name:`전체 대시보드`,description:`종합 통계 대시보드`},detailedSplitView:{name:`분할 뷰`,description:`통계와 차트를 나란히 표시`},streamingBottomTicker:{name:`하단 티커`,description:`화면 하단에 티커 표시`},streamingCornerOverlay:{name:`코너 오버레이`,description:`은은한 코너 오버레이`},streamingTitleSafe:{name:`타이틀 안전 영역`,description:`썸네일 대응 안전 영역 배치`},competitiveEsports:{name:`E-Sports HUD`,description:`프로 토너먼트 스타일`},competitiveScoreboard:{name:`스코어보드`,description:`보기 쉬운 스코어보드 레이아웃`},competitiveAnalyst:{name:`분석가 뷰`,description:`해설용 상세 분석 표시`},premiumNeonGlow:{name:`네온 글로우`,description:`사이버펑크 네온 미학`},premiumGradientFlow:{name:`그라데이션 플로우`,description:`부드러운 그라데이션 애니메이션`},premiumUltraClean:{name:`울트라 클린`,description:`미니멀리스트의 완벽함`}}},pages:{home:{title:`{{seasonName}} 전적`,description:`전적과 통계 정보를 입력합니다.`,createSeason:`새 시즌 만들기`,noSeason:`시즌이 생성되지 않았습니다`,createFirstSeason:`첫 번째 시즌을 만드세요`,errorOccurred:`오류가 발생했습니다`},obs:{title:`OBS 스트리밍 HUD`,description:`드래그 앤 드롭으로 레이아웃을 조정한 후 OBS의 브라우저 소스로 사용할 수 있습니다.`,screenSize:{title:`화면 크기 설정`,width:`너비`,height:`높이`,info:`OBS 창에서 열 때의 화면 크기를 설정합니다. 프리셋에서 선택하거나 사용자 지정 크기를 입력할 수 있습니다.`}},graphs:{title:`전적 그래프`,description:`현재 시즌 전적을 그래프 형식으로 시각화합니다.`,descriptionWithSeason:`{{seasonName}} 전적을 그래프 형식으로 시각화합니다.`,daily:`일별 승부`,hourly:`시간별 승률`,weekly:`요일별 승률`,jobWinRate:`잡별 승률`,jobUsage:`잡 사용률`,filters:{character:`캐릭터`,job:`잡`,map:`맵`,all:`전체`}},histories:{title:`히스토리 목록`,description:`과거 시즌 목록을 표시하고 관리합니다. 각 시즌의 세부정보는 상세 버튼에서 확인할 수 있습니다.`,totalSeasons:`총 시즌 수: {{count}}개`,totalMatches:`총 경기 수: {{count}}`,latestCreated:`최근 생성`,detail:`상세`,delete:`삭제`,confirmDelete:`시즌 삭제`,deleteDescription:`"{{seasonName}}"을(를) 삭제하시겠습니까?
이 작업은 취소할 수 없습니다.`,emptyState:`히스토리가 없습니다`,stats:`시즌`,createBackup:`백업 생성`,importBackup:`백업 가져오기`,importBackupWarningTitle:`백업 가져오기`,importBackupWarningMessage:`현재 데이터가 백업 데이터로 덮어씌워집니다. 이 작업은 취소할 수 없습니다. 계속하시겠습니까?`,backupCreated:`백업이 생성되었습니다`,backupRestored:`백업이 복원되었습니다`,errors:{loadFailed:`히스토리 로드에 실패했습니다`,alreadyExists:`시즌 "{{seasonName}}"은(는) 이미 존재합니다`,notFound:`지정된 히스토리를 찾을 수 없습니다`,characterNotFound:`지정된 캐릭터를 찾을 수 없습니다`,deleteMatchRecordsFailed:`시즌 {{uuid}}의 매치 기록 삭제 중 오류가 발생했습니다`,loadMatchRecordsFailed:`시즌 {{seasonUuid}}의 매치 기록 로드 중 오류가 발생했습니다`,backupCreateFailed:`백업 생성에 실패했습니다`,backupRestoreFailed:`백업 복원에 실패했습니다`,backupFileCorrupted:`백업 파일이 손상되었습니다`}},historyDetail:{title:`{{seasonName}} 상세`,description:`시즌의 모든 전적을 표시하고 있습니다.`,backToList:`기록 목록으로 돌아가기`,totalMatches:`{{count}}경기 전적`,matchesCount:`경기 수`,winRate:`승률`,overall:`전체`,createdDate:`생성일`,searchPlaceholder:`캐릭터명, 잡, 날짜로 검색...`,columns:{season:`시즌명`,character:`캐릭터명`,job:`사용 잡`,map:`맵`,result:`결과`,date:`생성일시`},results:{win:`Win`,defeat:`Defeat`},emptyState:`전적이 기록되지 않았습니다`},newSeason:{title:`새 시즌 만들기`,description:`새 시즌을 만듭니다. 시즌명을 입력해주세요.`,seasonName:`시즌명`,seasonNamePlaceholder:`예: 시즌 1`,create:`만들기`,creating:`만드는 중...`,cancel:`취소`,confirmTitle:`시즌 생성 확인`,confirmDescription:`새 시즌을 만들면 "{{seasonName}}"의 전적 데이터가 과거 시즌으로 아카이브되고 새로운 전적 입력이 시작됩니다. 계속하시겠습니까?`,validationRequired:`시즌명을 입력해주세요`,validationMaxLength:`시즌명은 {{length}}자 이내로 입력해주세요`,successMessage:`시즌 "{{seasonName}}"을 만들었습니다`},faq:{title:`자주 묻는 질문 (FAQ)`,description:`크리스탈 컨플릭트 전적 기록에 대한 자주 묻는 질문과 답변입니다.`,privacy:{title:`개인정보 및 데이터`,dataStorage:{question:`전적 데이터는 어디에 저장되나요?`,answer:{intro:`모든 전적 데이터는 사용자의 브라우저 로컬 스토리지에만 저장됩니다.`,description:`본 애플리케이션은 다음 방침으로 데이터를 다룹니다:`,points:[`전적 데이터나 개인정보는 일체 서버로 전송되지 않습니다`,`모든 데이터는 브라우저 내에서만 관리됩니다`,`애플리케이션 개발자가 사용자의 전적 데이터에 접근할 수 없습니다`,`데이터 삭제는 브라우저 설정에서 할 수 있습니다`]}},analytics:{question:`Google Analytics에서 무엇을 수집하나요?`,answer:{intro:`본 사이트는 서비스 개선을 위해 Google Analytics를 사용합니다.`,collected:`수집되는 정보:`,collectedPoints:[`접속 통계: 페이지뷰 수, 세션 수, 평균 체류시간 등`,`기술 정보: 브라우저 종류, OS, 화면 크기 등`,`지역 정보: 국가나 지역 수준의 대략적인 위치 정보 (상세 주소 등은 포함되지 않음)`],notCollected:`수집되지 않는 정보:`,notCollectedPoints:[`전적 데이터나 개인 성적 정보`,`캐릭터명이나 기타 개인정보`,`상세한 위치 정보나 주소`],anonymous:`이러한 통계 정보는 익명화되어 있으며, 개인을 특정할 수 없습니다.`}},dataDeletion:{question:`데이터 삭제 방법을 알려주세요`,answer:{intro:`저장된 데이터를 삭제하고 싶은 경우 다음 방법으로 할 수 있습니다:`,methods:[`개별 삭제: 각 페이지에서 "삭제" 버튼 사용`,`완전 삭제: 브라우저 설정에서 사이트 데이터 삭제`],browserMethods:`브라우저에서 데이터 삭제 방법:`,browserSteps:[`Chrome: 설정 → 개인정보 및 보안 → 사이트 데이터`,`Firefox: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터`,`Safari: 환경설정 → 개인정보 보호 → 웹사이트 데이터 관리`]}}},usage:{title:`애플리케이션 사용법`,backup:{question:`데이터 백업 방법을 알려주세요`,answer:{intro:`히스토리 페이지에서 데이터 백업 및 복원을 할 수 있습니다:`,backup:`백업 생성:`,backupSteps:[`히스토리 페이지 우측 상단의 "백업 생성" 버튼 클릭`,`자동으로 ZIP 파일이 다운로드됩니다`,`파일명은 "cc-war-record-backup-날짜시간.zip" 형식으로 저장됩니다`],restore:`백업 복원:`,restoreSteps:[`히스토리 페이지 우측 상단의 "백업에서 복원" 버튼 클릭`,`저장된 ZIP 파일 선택`,`데이터가 복원되고 페이지가 자동으로 새로고침됩니다`],includes:`백업에 포함되는 데이터:`,includesItems:[`캐릭터 정보`,`경기 기록 (전체 시즌)`,`시즌 히스토리`,`레이더 차트 설정`],note:`※ 백업 파일은 안전한 장소에 보관하세요`}},dataDefeat:{question:`데이터가 사라질 수 있나요?`,answer:{intro:`로컬 스토리지에 저장된 데이터는 다음의 경우 삭제될 수 있습니다:`,causes:[`브라우저 캐시 삭제 시`,`브라우저 설정에서 사이트 데이터를 삭제한 경우`,`프라이빗 브라우징 모드 사용 시`,`디바이스 용량 부족 시 (브라우저가 자동 삭제하는 경우)`],recommendation:`중요한 데이터는 정기적으로 백업을 받는 것을 권장합니다.`}},dataSyncing:{question:`여러 브라우저에서 데이터를 공유할 수 있나요?`,answer:{limitation:`죄송하지만 현재로서는 브라우저 간 데이터 동기화 기능을 제공하지 않습니다.`,explanation:`각 브라우저의 로컬 스토리지는 독립적이므로, 데이터는 사용한 브라우저에서만 이용 가능합니다.`,workaround:`다만, 백업 기능을 사용하면 다른 브라우저나 디바이스로 데이터를 이전할 수 있습니다.`}}},copyright:{disclaimer:`이 애플리케이션은 팬이 만든 비공식 도구이며, 주식회사 스퀘어 에닉스와는 일체 관계가 없습니다.`}},notFound:{title:`페이지를 찾을 수 없음`,description:`찾으시는 페이지가 존재하지 않거나 삭제되었을 수 있습니다.`,backToHome:`홈으로 돌아가기`}},character:{name:`캐릭터 이름`,create:`캐릭터 생성`,createSuccess:`캐릭터 "{{name}}"을(를) 생성했습니다`,edit:`캐릭터 이름 편집`,delete:`캐릭터 삭제`,confirmDelete:`삭제`,moveUp:`위로 이동`,moveDown:`아래로 이동`,deleteDescription:`캐릭터 "{{name}}"을(를) 삭제하시겠습니까?<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ 관련된 모든 전적 기록도 삭제됩니다. 이 작업은 취소할 수 없습니다.</span>`,namePlaceholder:`캐릭터 이름 입력`,validationRequired:`캐릭터 이름을 입력해주세요`,emptyState:`캐릭터가 없습니다`,createFirst:`첫 번째 캐릭터를 생성하세요`,errors:{alreadyExists:`캐릭터 "{{name}}"은(는) 이미 존재합니다`,notFound:`캐릭터를 찾을 수 없습니다`,loadFailed:`데이터 로드에 실패했습니다`,matchRecordNotFound:`전적 기록을 찾을 수 없습니다`},stats:{matches:`{{count}}경기`,totalMatches:`{{count}}경기`,winRate:`승률{{rate}}%`,noWinRate:`승률--%`,wins:`{{count}}승`,defeats:`{{count}}패`},actions:{addJob:`잡 추가`,editName:`이름 편집`,deleteName:`캐릭터 삭제`,more:`더보기`}},match:{record:`전적 기록`,job:`잡`,map:`맵`,result:`결과`,win:`승리 수`,defeat:`패배 수`,memo:`메모`,memoPlaceholder:`메모를 입력하세요 (선택사항)`,selectJob:`잡을 선택해주세요`,selectMap:`맵을 선택해주세요`,recorded:`전적이 기록되었습니다`,totalMatches:`경기 수`,winRate:`승률`,allStagesTotal:`전체 스테이지 합계`,actions:`작업`,pleaseRegisterJob:`잡을 등록해주세요`,recentMatches:`최근 전적`,deleteMatch:`전적 삭제`,confirmDelete:`전적 삭제`,confirmDeleteButton:`삭제`,deleteConfirmation:`{{characterName}}의 {{date}} 전적을 삭제하시겠습니까?
이 작업은 취소할 수 없습니다.`,addWin:`승리 기록`,addDefeat:`패배 기록`,rollback:`마지막 기록 취소`},job:{select:`잡 선택`,selectJob:`사용할 잡 선택`,selectJobDescription:`잡을 선택해주세요`,tank:`탱커`,healer:`힐러`,meleeDps:`근접 DPS`,melee_dps:`근접 DPS`,physicalRangedDps:`물리 원거리 DPS`,physical_ranged_dps:`물리 원거리 DPS`,magicalRangedDps:`마법 원거리 DPS`,magical_ranged_dps:`마법 원거리 DPS`,PLD:`나이트`,WAR:`전사`,DRK:`암흑기사`,GNB:`건브레이커`,WHM:`백마도사`,SCH:`학자`,AST:`점성술사`,SGE:`현자`,MNK:`몽크`,DRG:`용기사`,NIN:`닌자`,SAM:`사무라이`,RPR:`리퍼`,VPR:`바이퍼`,BRD:`음유시인`,MCH:`기공사`,DNC:`무도가`,BLM:`흑마도사`,SMN:`소환사`,RDM:`적마도사`,PCT:`픽토맨서`},maps:{THE_PALAISTRA:`팔라이스트라`,VOLCANIC_HEART:`화산의 심장부`,CLOUD_NINE:`클라우드 나인`,TOUHOU_KARAKURI_GOTEN:`동방 기믹 저택`,RED_SANDS:`붉은 사막 지대`,BAYSIDE_BATTLEGROUND:`베이사이드 배틀그라운드`},chart:{winRate:`승률`,winCount:`승리 수`,defeatCount:`패배 수`,usageRate:`사용률`,matches:`경기 수`,noData:`데이터가 없습니다`,noMatchData:`경기 데이터가 없습니다`,selectJobs:`잡 선택 (최대 5개)`,hour:`{{hour}}시`,day:{sunday:`일`,monday:`월`,tuesday:`화`,wednesday:`수`,thursday:`목`,friday:`금`,saturday:`토`},labels:{character:`캐릭터`,job:`잡`,map:`맵`,date:`날짜`,allCharacters:`모든 캐릭터`,allJobs:`모든 잡`,allMaps:`모든 맵`,jobSelection:`잡 선택 (최대 5개)`,selectJob:`잡 선택`},titles:{dailyWinDefeat:`일별 승패 및 승률 추이`,weeklyWinRate:`요일별 승률 비교`,hourlyWinDefeat:`시간대별 승률 분석`,jobUsageRate:`잡 사용률`,jobWinRateByMap:`맵별 잡 승률 비교`,todayWinDefeatTrend:`그날의 승패 추이`},axes:{matchCount:`대전 횟수`,winRatePercent:`승률 (%)`,date:`날짜`,weekday:`요일`,hour:`시간대`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`사용 횟수`,usageRatePercent:`사용률`,win:`Win`,lose:`Defeat`,total:`합계`,matches:`경기`,noMatchData:`경기 데이터 없음`},weekdays:{sunday:`일요일`,monday:`월요일`,tuesday:`화요일`,wednesday:`수요일`,thursday:`목요일`,friday:`금요일`,saturday:`토요일`},todayTrend:{match:`제{{number}}경기`,winRate:`승률`,winCount:`승수`,winDifference:`승차`,record:`전적`,matches:`경기`,matchNumber:`경기 수`,noData:`오늘의 경기 데이터가 없습니다`}},language:{current:`한국어`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`언어 변경`}}}},fallbackLng:`en`,debug:!1,detection:{order:[`localStorage`,`navigator`,`htmlTag`],caches:[`localStorage`]},interpolation:{escapeValue:!1},defaultNS:`translation`,ns:[`translation`]}),ce.on(`languageChanged`,e=>{document.documentElement.lang=e}),Fi(),(()=>{if(`serviceWorker`in navigator){let e=`/cc-war-record`,t=e.endsWith(`/`)?e:`${e}/`,n=`${t}sw.js`;window.addEventListener(`load`,()=>{navigator.serviceWorker.register(n,{scope:t}).then(e=>{console.log(`ServiceWorker registered:`,e.scope)}).catch(e=>{console.error(`ServiceWorker registration failed:`,e)})})}})(),(0,ue.createRoot)(document.getElementById(`root`)).render((0,y.jsx)(b.StrictMode,{children:(0,y.jsx)(({children:e})=>(0,y.jsx)($t,{children:(0,y.jsx)(ua,{children:e})}),{children:(0,y.jsx)(sa,{})})}));export{St as $,nn as A,Pt as B,zn as C,K as D,En as E,Gt as F,M as G,Nt as H,Ht as I,Ot as J,kt as K,Rt as L,qt as M,U as N,hn as O,Kt as P,k as Q,zt as R,Hn as S,jn as T,P as U,At as V,j as W,wt as X,A as Y,O as Z,hr as _,Ei as a,_t as at,Vn as b,Er as c,mt as ct,br as d,ke as dt,bt as et,vr as f,Oe as ft,ur as g,x as gt,dr as h,ve as ht,Mi as i,vt as it,tn as j,G as k,X as l,pt as lt,gr as m,S as mt,ji as n,xt as nt,Ur as o,yt as ot,yr as p,xe as pt,N as q,Ni as r,gt as rt,Z as s,ht as st,Li as t,Ct as tt,_r as u,D as ut,Y as v,J as w,Bn as x,Un as y,Ft as z};