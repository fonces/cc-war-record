const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/new-Dcn_0mB3.js","assets/react-vendor-D1pS86Oe.js","assets/rolldown-runtime-CIDIeb-o.js","assets/graphs-CHeSeT0L.js","assets/faq-4EkRcjOX.js","assets/routes-C3mTVlT2.js","assets/histories-CG4p1faD.js","assets/_id-nGxAE2iy.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{C as t,T as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,o as f,p,s as m,u as ee,v as h,w as g,x as te}from"./react-vendor-D1pS86Oe.js";import{a as _,i as v,n as y,r as ne,s as re,t as ie}from"./styled-DX7-lrl4.js";import{t as ae}from"./jszip-DU7jsDXX.js";import{n as oe,t as se}from"./i18n-THkEc1_o.js";import{t as ce}from"./vendor-DeEjTzyN.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var b=e(te()),le=e(t()),ue=e(g()),x=e(n()),de=`modulepreload`,fe=function(e){return`/cc-war-record/`+e},pe={};const S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=fe(t,n),t in pe)return;pe[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:de,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var me=_`
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
`,he=_`
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
`,ge=y.span`
  display: inline-block;
  position: relative;
  animation: ${({$direction:e})=>e===`up`?v`
            ${me}
          `:v`
            ${he}
          `}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;const _e=(0,x.memo)(({children:e,suffix:t})=>{let n=(0,x.useRef)(e),[r,i]=(0,x.useState)(`up`);return(0,x.useEffect)(()=>{n.current!==e&&(i(e>n.current?`up`:`down`),n.current=e)},[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(ge,{$direction:r,children:e},`${e}`),t]})});_e.displayName=`AnimatedNumber`;var ve=y.button`
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
`;const C=(0,x.memo)(({children:e,icon:t,...n})=>(0,b.jsx)(ve,{...n,icon:t,children:t||e}));C.displayName=`Button`;var ye=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({fit:e})=>e&&`width: fit-content;`}
`,be=y.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,xe=y.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Se=y.div`
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
`,Ce=y.input`
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
`,we=y.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.error[500]};
`;const w=(0,x.memo)((0,x.forwardRef)(({label:e,error:t,fullWidth:n,inputSize:r=`md`,icon:i,...a},o)=>(0,b.jsxs)(ye,{fit:!!i,fullWidth:n,children:[e&&(0,b.jsx)(be,{children:e}),(0,b.jsxs)(xe,{children:[(0,b.jsx)(Ce,{ref:o,hasError:!!t,inputSize:r,hasIcon:!!i,...a}),i&&(0,b.jsx)(Se,{children:i})]}),t&&(0,b.jsx)(we,{children:t})]})));w.displayName=`Input`;const Te=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,b.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,b.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]}),T=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,b.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),Ee=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),(0,b.jsx)(`polyline`,{points:`9,22 9,12 15,12 15,22`})]}),De=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,b.jsx)(`polyline`,{points:`12,6 12,12 16,14`})]}),Oe=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`line`,{x1:`18`,y1:`20`,x2:`18`,y2:`10`}),(0,b.jsx)(`line`,{x1:`12`,y1:`20`,x2:`12`,y2:`4`}),(0,b.jsx)(`line`,{x1:`6`,y1:`20`,x2:`6`,y2:`14`})]}),ke=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`path`,{d:`m18 2 4 4-18 18H0v-4L18 2z`}),(0,b.jsx)(`path`,{d:`m14.5 5.5 4 4`})]}),Ae=()=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`polyline`,{points:`20,6 9,17 4,12`})}),je=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),(0,b.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})]}),Me=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`polyline`,{points:`3,6 5,6 21,6`}),(0,b.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}),(0,b.jsx)(`line`,{x1:`10`,y1:`11`,x2:`10`,y2:`17`}),(0,b.jsx)(`line`,{x1:`14`,y1:`11`,x2:`14`,y2:`17`})]}),Ne=()=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})}),Pe=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`polyline`,{points:`1,4 1,10 7,10`}),(0,b.jsx)(`path`,{d:`M3.51 15a9 9 0 1 0 2.13-9.36L1 10`})]}),Fe=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,b.jsx)(`polyline`,{points:`14,2 14,8 20,8`}),(0,b.jsx)(`line`,{x1:`16`,y1:`13`,x2:`8`,y2:`13`}),(0,b.jsx)(`line`,{x1:`16`,y1:`17`,x2:`8`,y2:`17`}),(0,b.jsx)(`polyline`,{points:`10,9 9,9 8,9`})]}),Ie=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,b.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`}),(0,b.jsx)(`polyline`,{points:`12,19 5,12 12,5`})]}),Le=()=>(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,b.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,b.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,b.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),Re=()=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,b.jsx)(`path`,{d:`M7 10l5 5 5-5z`})}),ze=()=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`path`,{d:`M12 19V5M5 12L12 5L19 12`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Be=()=>(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,b.jsx)(`path`,{d:`M12 5V19M19 12L12 19L5 12`,strokeLinecap:`round`,strokeLinejoin:`round`})}),E=(0,x.memo)(({size:e=24,color:t=`currentColor`})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,b.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,b.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,b.jsx)(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]}));E.displayName=`DownloadIcon`;const D=(0,x.memo)(({size:e=24,color:t=`currentColor`})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,b.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,b.jsx)(`polyline`,{points:`17 8 12 3 7 8`}),(0,b.jsx)(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`})]}));D.displayName=`UploadIcon`;const O=(0,x.memo)(({size:e=24,color:t=`currentColor`})=>(0,b.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,b.jsx)(`path`,{d:`M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M21 21L16.65 16.65`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}));O.displayName=`SearchIcon`;var Ve=y.div`
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
`;const k=(0,x.memo)(({name:e,size:t=24,color:n,onClick:r,className:i})=>(0,b.jsx)(Ve,{size:t,color:n,onClick:r,className:i,children:(()=>{switch(e){case`hamburger`:return(0,b.jsx)(Te,{});case`close`:return(0,b.jsx)(T,{});case`home`:return(0,b.jsx)(Ee,{});case`history`:return(0,b.jsx)(De,{});case`chart`:return(0,b.jsx)(Oe,{});case`edit`:return(0,b.jsx)(ke,{});case`accept`:return(0,b.jsx)(Ae,{});case`add`:return(0,b.jsx)(je,{});case`delete`:return(0,b.jsx)(Me,{});case`minus`:return(0,b.jsx)(Ne,{});case`revert`:return(0,b.jsx)(Pe,{});case`detail`:return(0,b.jsx)(Fe,{});case`back`:return(0,b.jsx)(Ie,{});case`language`:return(0,b.jsx)(Le,{});case`arrowDropDown`:return(0,b.jsx)(Re,{});case`arrowUp`:return(0,b.jsx)(ze,{});case`arrowDown`:return(0,b.jsx)(Be,{});case`download`:return(0,b.jsx)(E,{});case`upload`:return(0,b.jsx)(D,{});case`search`:return(0,b.jsx)(O,{});default:return null}})()}));k.displayName=`Icon`;var He=_`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ue=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  position: relative;
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({width:e})=>e&&`width: ${e};`}
`,We=y.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ge=y.button`
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
`,Ke=y.div`
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
`,qe=y.div`
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
  animation: ${He} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
`,Je=y.div`
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
`,Ye=y.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.error[500]};
`,Xe=y.select`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;const A=(0,x.memo)(({id:e,label:t,error:n,fullWidth:r,width:i,options:a,value:o,onChange:s,disabled:c})=>{let[l,u]=(0,x.useState)(!1),d=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&u(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let f=e=>{c||(u(!1),s&&s({target:{value:e}}))},p=a.find(e=>e.value===o)?.label||a[0]?.label||``;return(0,b.jsxs)(Ue,{ref:d,fullWidth:r,width:i,children:[t&&(0,b.jsx)(We,{htmlFor:e,children:t}),(0,b.jsxs)(Ge,{type:`button`,onClick:()=>!c&&u(!l),isOpen:l,hasError:!!n,disabled:c,children:[p,(0,b.jsx)(Ke,{isOpen:l,children:(0,b.jsx)(k,{name:`arrowDropDown`,size:24})})]}),(0,b.jsx)(qe,{isOpen:l,children:a.map(e=>(0,b.jsx)(Je,{onClick:()=>f(e.value),isSelected:e.value===o,children:e.label},e.value))}),(0,b.jsx)(Xe,{id:e,value:o,onChange:s,disabled:c,tabIndex:-1,children:a.map(e=>(0,b.jsx)(`option`,{value:e.value,children:e.label},e.value))}),n&&(0,b.jsx)(Ye,{children:n})]})});A.displayName=`Select`;const j=(e,t,n=600)=>e>=51?t.colors.success[n]:e>=40?t.colors.warning[n]:t.colors.error[n],Ze=()=>new Date().toISOString(),Qe=(e,t,n)=>{let r=new Date(e);if(!t){let e=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,`0`),n=String(r.getDate()).padStart(2,`0`),i=String(r.getHours()).padStart(2,`0`),a=String(r.getMinutes()).padStart(2,`0`);return`${e}-${t}-${n} ${i}:${a}`}return r.toLocaleDateString(t,n)},$e=(e,t)=>new Date(e).toLocaleDateString(t,{month:`numeric`,day:`numeric`}),et=(e,t)=>new Date(e).toLocaleDateString(t,{year:`numeric`,month:`long`,day:`numeric`}),tt=e=>e.length,nt=e=>e.filter(e=>e.isWin).length,rt=e=>e.filter(e=>!e.isWin).length,it=e=>{let t=tt(e);if(t===0)return 0;let n=nt(e);return Math.round(n/t*100)},M={TANK:`tank`,HEALER:`healer`,MELEE_DPS:`melee_dps`,PHYSICAL_RANGED_DPS:`physical_ranged_dps`,MAGICAL_RANGED_DPS:`magical_ranged_dps`},N={[M.TANK]:{code:M.TANK,name:`タンク`,nameEn:`Tank`,color:`#3b82f6`},[M.HEALER]:{code:M.HEALER,name:`ヒーラー`,nameEn:`Healer`,color:`#10b981`},[M.MELEE_DPS]:{code:M.MELEE_DPS,name:`近接DPS`,nameEn:`MeleeDPS`,color:`#f59e0b`},[M.PHYSICAL_RANGED_DPS]:{code:M.PHYSICAL_RANGED_DPS,name:`物理遠隔DPS`,nameEn:`PhysicalRangedDPS`,color:`#8b5cf6`},[M.MAGICAL_RANGED_DPS]:{code:M.MAGICAL_RANGED_DPS,name:`魔法遠隔DPS`,nameEn:`MagicalRangedDPS`,color:`#ef4444`}},P={PALADIN:`PLD`,WARRIOR:`WAR`,DARK_KNIGHT:`DRK`,GUNBREAKER:`GNB`,WHITE_MAGE:`WHM`,SCHOLAR:`SCH`,ASTROLOGIAN:`AST`,SAGE:`SGE`,MONK:`MNK`,DRAGOON:`DRG`,NINJA:`NIN`,SAMURAI:`SAM`,REAPER:`RPR`,VIPER:`VPR`,BARD:`BRD`,MACHINIST:`MCH`,DANCER:`DNC`,BLACK_MAGE:`BLM`,SUMMONER:`SMN`,RED_MAGE:`RDM`,PICTOMANCER:`PCT`},at={[P.PALADIN]:{code:P.PALADIN,name:`ナイト`,nameEn:`Paladin`,shortName:`PLD`,role:M.TANK,iconId:19,color:`#5EADDC`},[P.WARRIOR]:{code:P.WARRIOR,name:`戦士`,nameEn:`Warrior`,shortName:`WAR`,role:M.TANK,iconId:21,color:`#CF2621`},[P.DARK_KNIGHT]:{code:P.DARK_KNIGHT,name:`暗黒騎士`,nameEn:`DarkKnight`,shortName:`DRK`,role:M.TANK,iconId:32,color:`#D126CC`},[P.GUNBREAKER]:{code:P.GUNBREAKER,name:`ガンブレイカー`,nameEn:`Gunbreaker`,shortName:`GNB`,role:M.TANK,iconId:37,color:`#9C8542`},[P.WHITE_MAGE]:{code:P.WHITE_MAGE,name:`白魔道士`,nameEn:`WhiteMage`,shortName:`WHM`,role:M.HEALER,iconId:24,color:`#E6D8BC`},[P.SCHOLAR]:{code:P.SCHOLAR,name:`学者`,nameEn:`Scholar`,shortName:`SCH`,role:M.HEALER,iconId:28,color:`#8657FF`},[P.ASTROLOGIAN]:{code:P.ASTROLOGIAN,name:`占星術師`,nameEn:`Astrologian`,shortName:`AST`,role:M.HEALER,iconId:33,color:`#E6C84A`},[P.SAGE]:{code:P.SAGE,name:`賢者`,nameEn:`Sage`,shortName:`SGE`,role:M.HEALER,iconId:40,color:`#8FD14F`},[P.MONK]:{code:P.MONK,name:`モンク`,nameEn:`Monk`,shortName:`MNK`,role:M.MELEE_DPS,iconId:20,color:`#D69C00`},[P.DRAGOON]:{code:P.DRAGOON,name:`竜騎士`,nameEn:`Dragoon`,shortName:`DRG`,role:M.MELEE_DPS,iconId:22,color:`#4164CD`},[P.NINJA]:{code:P.NINJA,name:`忍者`,nameEn:`Ninja`,shortName:`NIN`,role:M.MELEE_DPS,iconId:30,color:`#AF1964`},[P.SAMURAI]:{code:P.SAMURAI,name:`侍`,nameEn:`Samurai`,shortName:`SAM`,role:M.MELEE_DPS,iconId:34,color:`#E46D04`},[P.REAPER]:{code:P.REAPER,name:`リーパー`,nameEn:`Reaper`,shortName:`RPR`,role:M.MELEE_DPS,iconId:39,color:`#965A90`},[P.VIPER]:{code:P.VIPER,name:`ヴァイパー`,nameEn:`Viper`,shortName:`VPR`,role:M.MELEE_DPS,iconId:41,color:`#B07830`},[P.BARD]:{code:P.BARD,name:`吟遊詩人`,nameEn:`Bard`,shortName:`BRD`,role:M.PHYSICAL_RANGED_DPS,iconId:23,color:`#91BA5E`},[P.MACHINIST]:{code:P.MACHINIST,name:`機工士`,nameEn:`Machinist`,shortName:`MCH`,role:M.PHYSICAL_RANGED_DPS,iconId:31,color:`#6EE1D6`},[P.DANCER]:{code:P.DANCER,name:`踊り子`,nameEn:`Dancer`,shortName:`DNC`,role:M.PHYSICAL_RANGED_DPS,iconId:38,color:`#D98B8A`},[P.BLACK_MAGE]:{code:P.BLACK_MAGE,name:`黒魔道士`,nameEn:`BlackMage`,shortName:`BLM`,role:M.MAGICAL_RANGED_DPS,iconId:25,color:`#A579D6`},[P.SUMMONER]:{code:P.SUMMONER,name:`召喚士`,nameEn:`Summoner`,shortName:`SMN`,role:M.MAGICAL_RANGED_DPS,iconId:27,color:`#2D9B78`},[P.RED_MAGE]:{code:P.RED_MAGE,name:`赤魔道士`,nameEn:`RedMage`,shortName:`RDM`,role:M.MAGICAL_RANGED_DPS,iconId:35,color:`#E87B7B`},[P.PICTOMANCER]:{code:P.PICTOMANCER,name:`ピクトマンサー`,nameEn:`Pictomancer`,shortName:`PCT`,role:M.MAGICAL_RANGED_DPS,iconId:42,color:`#D4C05C`}},ot=e=>at[e],st=e=>{let t=ot(e);if(!t)return``;let n=``;switch(t.role){case M.TANK:n=`01_TANK`;break;case M.HEALER:n=`02_HEALER`;break;case M.MELEE_DPS:case M.PHYSICAL_RANGED_DPS:case M.MAGICAL_RANGED_DPS:n=`03_DPS`;break}return`/cc-war-record/img/${n}/Job/${t.nameEn}.png`},ct=e=>{let t=``;switch(e){case M.TANK:t=`TankRole`;break;case M.HEALER:t=`HealerRole`;break;case M.MELEE_DPS:t=`MeleeDPS`;break;case M.PHYSICAL_RANGED_DPS:t=`PhysicalRangedDPS`;break;case M.MAGICAL_RANGED_DPS:t=`MagicalRangedDPS`;break}return`/cc-war-record/img/00_ROLE/${t}.png`};M.TANK,M.HEALER,M.MELEE_DPS,M.PHYSICAL_RANGED_DPS,M.MAGICAL_RANGED_DPS,M.TANK,M.HEALER,M.MELEE_DPS,M.PHYSICAL_RANGED_DPS,M.MAGICAL_RANGED_DPS;const lt=e=>{let t=Object.values(P);return e.sort((e,n)=>t.indexOf(e)-t.indexOf(n))},F={BUILD_TIMESTAMP:`app-build-timestamp`,THEME:`cc-war-record-theme`,CHARACTERS:`cc-war-record-characters`,MATCH_RECORDS:`cc-war-record-match-records`,HISTORIES:`cc-war-record-histories`,HISTORY:"histories-${uuid}",RADAR_CHART_JOBS:`cc-war-record:radar-chart-jobs`},I=(e,t)=>{try{if(typeof window>`u`)return t;let n=window.localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch(n){return console.error(`Error reading from localStorage (key: ${e}):`,n),t}},L=(e,t)=>{try{if(typeof window>`u`)return;window.localStorage.setItem(e,JSON.stringify(t))}catch(t){console.error(`Error writing to localStorage (key: ${e}):`,t)}},ut=e=>{try{if(typeof window>`u`)return;window.localStorage.removeItem(e)}catch(t){console.error(`Error removing from localStorage (key: ${e}):`,t)}},R={THE_PALAISTRA:`THE_PALAISTRA`,VOLCANIC_HEART:`VOLCANIC_HEART`,CLOUD_NINE:`CLOUD_NINE`,TOUHOU_KARAKURI_GOTEN:`TOUHOU_KARAKURI_GOTEN`,RED_SANDS:`RED_SANDS`,BAYSIDE_BATTLEGROUND:`BAYSIDE_BATTLEGROUND`},z={ARENA:`arena`,SKY:`sky`,VOLCANIC:`volcanic`,WATER:`water`,CASTLE:`castle`,URBAN:`urban`,DESERT:`desert`},B={SMALL:`small`,MEDIUM:`medium`,LARGE:`large`},V={CENTRAL_CRYSTAL:`central_crystal`,MULTI_LEVEL:`multi_level`,NARROW_PATHS:`narrow_paths`,OPEN_AREA:`open_area`,ENVIRONMENTAL_HAZARDS:`environmental_hazards`,VERTICAL_MOVEMENT:`vertical_movement`};R.THE_PALAISTRA,R.THE_PALAISTRA,z.ARENA,B.MEDIUM,V.CENTRAL_CRYSTAL,V.OPEN_AREA,R.VOLCANIC_HEART,R.VOLCANIC_HEART,z.VOLCANIC,B.MEDIUM,V.ENVIRONMENTAL_HAZARDS,V.CENTRAL_CRYSTAL,R.CLOUD_NINE,R.CLOUD_NINE,z.SKY,B.LARGE,V.MULTI_LEVEL,V.VERTICAL_MOVEMENT,R.TOUHOU_KARAKURI_GOTEN,R.TOUHOU_KARAKURI_GOTEN,z.CASTLE,B.MEDIUM,V.MULTI_LEVEL,V.NARROW_PATHS,V.ENVIRONMENTAL_HAZARDS,R.RED_SANDS,R.RED_SANDS,z.DESERT,B.LARGE,V.OPEN_AREA,V.ENVIRONMENTAL_HAZARDS,R.BAYSIDE_BATTLEGROUND,R.BAYSIDE_BATTLEGROUND,z.WATER,B.LARGE,V.OPEN_AREA,V.CENTRAL_CRYSTAL,V.ENVIRONMENTAL_HAZARDS;const dt=(e,t)=>t(`maps.${e}`);var H=[R.THE_PALAISTRA,R.VOLCANIC_HEART,R.TOUHOU_KARAKURI_GOTEN,R.BAYSIDE_BATTLEGROUND,R.CLOUD_NINE,R.RED_SANDS],U=new Date(`2022-01-01T00:00:00+09:00`),W=5400*1e3;const G=(e=new Date)=>{let t=e.getTime()-U.getTime(),n=Math.floor(t/W)%H.length;return H[n]},K=(e=new Date)=>{let t=e.getTime()-U.getTime(),n=(Math.floor(t/W)%H.length+1)%H.length;return H[n]},ft=(e=new Date)=>{let t=(e.getTime()-U.getTime())%W,n=W-t;return new Date(e.getTime()+n)},pt=()=>`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)}),mt=()=>{if(typeof window>`u`)return 0;let e=document.createElement(`div`);e.style.visibility=`hidden`,e.style.overflow=`scroll`,e.style.width=`100px`,e.style.position=`absolute`,e.style.top=`-9999px`,document.body.appendChild(e);let t=document.createElement(`div`);t.style.width=`100%`,e.appendChild(t);let n=e.offsetWidth-t.offsetWidth;return document.body.removeChild(e),n};var ht=e(ae()),gt=[F.CHARACTERS,F.MATCH_RECORDS,F.HISTORIES,F.RADAR_CHART_JOBS];const _t=async()=>{let e=new ht.default;gt.forEach(t=>{let n=localStorage.getItem(t);if(n){let r=`${t.replace(/^cc-war-record[-:]?/,``)}.json`;e.file(r,n)}});let t=[];for(let e=0;e<localStorage.length;e++){let n=localStorage.key(e);n?.startsWith(`histories-`)&&t.push(n)}t.forEach(t=>{let n=localStorage.getItem(t);n&&e.file(`${t}.json`,n)});let n=await e.generateAsync({type:`blob`}),r=`cc-war-record-backup-${new Date().toISOString().replace(/[-:]/g,``).replace(/\.\d{3}Z$/,``).replace(`T`,`-`)}.zip`,i=URL.createObjectURL(n),a=document.createElement(`a`);a.href=i,a.download=r,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},vt=async e=>{let t=await new ht.default().loadAsync(e),n=new Set,r=[`characters`,`match-records`,`histories`,`radar-chart-jobs`],i=new Map,a=[];t.forEach((e,t)=>{if(t.dir)return;let o=e.replace(/\.json$/,``);if(!(o.startsWith(`histories-`)||r.some(e=>o===e)))throw Error(`BACKUP_FILE_CORRUPTED`);n.add(o),a.push((async()=>{let e=await t.async(`text`);try{JSON.parse(e)}catch{throw Error(`BACKUP_FILE_CORRUPTED`)}let n;n=o.startsWith(`histories-`)?o:o.includes(`:`)?`cc-war-record:${o}`:`cc-war-record-${o}`,i.set(n,localStorage.getItem(n)),localStorage.setItem(n,e)})())});try{await Promise.all(a)}catch(e){throw i.forEach((e,t)=>{e===null?localStorage.removeItem(t):localStorage.setItem(t,e)}),e}};var yt=y.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: contain;
  display: inline-block;
  filter: brightness(1.25);
`,bt=y.div`
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
`;const xt=(0,x.memo)(({job:e,size:t=32,alt:n,className:r})=>{let i=st(e),a=e,o=e=>{let t=ot(e);return t?t.color:`#6B7280`};return i?(0,b.jsx)(yt,{src:i,alt:n||e,size:t,className:r,onError:i=>{let s=i.target;s.style.display=`none`;let c=document.createElement(`div`);c.className=r||``,c.style.cssText=`
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
        `,c.textContent=a,c.title=n||e,s.parentNode&&s.parentNode.insertBefore(c,s)}}):(0,b.jsx)(bt,{size:t,bgColor:o(e),className:r,title:n||e,children:a})});xt.displayName=`JobIcon`;var St=y.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: contain;
  display: inline-block;
`,Ct=y.div`
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
`;const wt=(0,x.memo)(({role:e,size:t=32,alt:n,className:r})=>{let i=ct(e),a=N[e]?.name||e,o=e=>{let t=N[e];return t?t.color:`#6B7280`};return i?(0,b.jsx)(St,{src:i,alt:n||a,size:t,className:r,onError:i=>{let s=i.target;s.style.display=`none`;let c=document.createElement(`div`);c.className=r||``,c.style.cssText=`
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
        `,c.textContent=a,c.title=n||a,s.parentNode&&s.parentNode.insertBefore(c,s)}}):(0,b.jsx)(Ct,{size:t,bgColor:o(e),className:r,title:n||a,children:a})});wt.displayName=`RoleIcon`;const Tt=()=>{let[e,t]=(0,x.useState)(()=>G()),[n,r]=(0,x.useState)(()=>K());return(0,x.useEffect)(()=>{t(G()),r(K());let e=()=>{let n=new Date,i=ft(n).getTime()-n.getTime();return setTimeout(()=>{t(G()),r(K()),e()},i)},n=e();return()=>{clearTimeout(n)}},[]),{currentMap:e,nextMap:n}},q=()=>{let{t:e,i18n:t}=f();return{t:e,i18n:t,currentLanguage:t.language,changeLanguage:e=>t.changeLanguage(e),isLanguage:e=>t.language===e}},Et=e=>{let{t}=q();(0,x.useEffect)(()=>{let n=t(`common.appName`);return document.title=e?`${n} - ${e}`:n,()=>{document.title=n}},[e,t])},Dt=e=>{(0,x.useEffect)(()=>{if(e){let e=window.innerWidth-document.documentElement.clientWidth,t=window.scrollY;return document.body.style.overflow=`hidden`,document.body.style.paddingRight=`${e}px`,document.body.style.position=`fixed`,document.body.style.top=`-${t}px`,document.body.style.width=`100%`,()=>{document.body.style.overflow=``,document.body.style.paddingRight=``,document.body.style.position=``,document.body.style.top=``,document.body.style.width=``,window.scrollTo(0,t)}}},[e])};var Ot={isLight:!1,isDark:!1,breakpoints:{sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},spacing:{0:`0`,1:`0.25rem`,2:`0.5rem`,3:`0.75rem`,4:`1rem`,5:`1.25rem`,6:`1.5rem`,8:`2rem`,10:`2.5rem`,12:`3rem`,16:`4rem`,20:`5rem`,24:`6rem`},borderRadius:{none:`0`,sm:`0.125rem`,default:`0.25rem`,md:`0.375rem`,lg:`0.5rem`,xl:`0.75rem`,"2xl":`1rem`,"3xl":`1.5rem`,full:`9999px`},transitions:{fast:`150ms cubic-bezier(0.4, 0, 0.2, 1)`,base:`200ms cubic-bezier(0.4, 0, 0.2, 1)`,slow:`300ms cubic-bezier(0.4, 0, 0.2, 1)`,bounce:`400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`},blur:{sm:`blur(4px)`,md:`blur(8px)`,lg:`blur(12px)`,xl:`blur(16px)`}};const kt={...Ot,isLight:!0,colors:{primary:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#26A1DF`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`},win:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},defeat:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},error:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},success:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},warning:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`},gray:{50:`#f9fafb`,100:`#f3f4f6`,200:`#e5e7eb`,300:`#d1d5db`,400:`#9ca3af`,500:`#6b7280`,600:`#4b5563`,700:`#374151`,800:`#1f2937`,900:`#111827`},white:`#ffffff`,black:`#000000`,background:`#ffffff`,backgroundSecondary:`#f9fafb`,surface:`rgba(255, 255, 255, 0.95)`,surfaceHover:`rgba(255, 255, 255, 0.98)`,border:`rgba(38, 161, 223, 0.2)`,borderLight:`rgba(38, 161, 223, 0.15)`,text:`#111827`,textSecondary:`#6b7280`,textTertiary:`#9ca3af`,info:`#3b82f6`,transparent:`transparent`},gradients:{primary:`linear-gradient(135deg, #26A1DF 0%, #F36346 100%)`,success:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,danger:`linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,warning:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,glass:`linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,shimmer:`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`},shadows:{xs:`0 1px 2px 0 rgba(0, 0, 0, 0.05)`,sm:`0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.25)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)`,none:`none`,glow:`0 0 20px rgba(38, 161, 223, 0.4)`,glowLg:`0 0 40px rgba(38, 161, 223, 0.6)`}},At={...Ot,isDark:!0,colors:{primary:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#26A1DF`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`},win:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},defeat:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},error:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},success:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},warning:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`},gray:{50:`#18181b`,100:`#27272a`,200:`#3f3f46`,300:`#52525b`,400:`#71717a`,500:`#a1a1aa`,600:`#d4d4d8`,700:`#e4e4e7`,800:`#f4f4f5`,900:`#fafafa`},white:`#000000`,black:`#ffffff`,background:`#0a0a0b`,backgroundSecondary:`#18181b`,surface:`rgba(24, 24, 27, 0.95)`,surfaceHover:`rgba(39, 39, 42, 0.98)`,border:`rgba(38, 161, 223, 0.3)`,borderLight:`rgba(38, 161, 223, 0.2)`,text:`#fafafa`,textSecondary:`#a1a1aa`,textTertiary:`#71717a`,info:`#60a5fa`},gradients:{primary:`linear-gradient(135deg, #26A1DF 0%, #F36346 100%)`,success:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,danger:`linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,warning:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,glass:`linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,shimmer:`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`},shadows:{xs:`0 1px 2px 0 rgba(0, 0, 0, 0.3)`,sm:`0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.6)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)`,none:`none`,glow:`0 0 20px rgba(38, 161, 223, 0.5)`,glowLg:`0 0 40px rgba(38, 161, 223, 0.7)`}};var jt=(0,x.createContext)(void 0);const Mt=()=>{let e=(0,x.useContext)(jt);if(!e)throw Error(`useTheme must be used within a ThemeProvider`);return e},Nt=({children:e})=>{let[t,n]=(0,x.useState)(()=>I(F.THEME,`light`));(0,x.useEffect)(()=>{L(F.THEME,t)},[t]);let r=(0,x.useMemo)(()=>({mode:t,toggleMode:()=>n(e=>e===`light`?`dark`:`light`),setMode:e=>n(e),theme:t===`dark`?At:kt}),[t]);return(0,b.jsx)(jt.Provider,{value:r,children:e})},Pt=e=>{let[t,n]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{let t=window.matchMedia(e);n(t.matches);let r=e=>{n(e.matches)};return t.addEventListener(`change`,r),()=>{t.removeEventListener(`change`,r)}},[e]),t},Ft=()=>Pt(`(max-width: 768px)`),J=_`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;_`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const It=_`
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
`,Lt=_`
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
`,Rt=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,zt=_`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;var Bt=y.div`
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
  animation: ${J} ${({theme:e})=>e.transitions.base};
`,Vt=y.div`
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
  animation: ${zt} ${({theme:e})=>e.transitions.bounce};
`,Ht=y.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  background: ${({theme:e})=>e.gradients.glass};
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]} ${({theme:e})=>e.borderRadius[`2xl`]} 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,Ut=y.h2`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  flex: 1;
  margin-right: ${({theme:e})=>e.spacing[4]};
`,Wt=y.button`
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
`,Gt=y.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,Kt=y.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[6]};
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
  flex-shrink: 0;
`,qt=y(C)`
  background-color: ${({confirmType:e,theme:t})=>e===`danger`?t.colors.error[600]:t.colors.primary[600]};

  &:hover:not(:disabled) {
    background-color: ${({confirmType:e,theme:t})=>e===`danger`?t.colors.error[700]:t.colors.primary[700]};
  }
`;const Jt=(0,x.memo)(({isOpen:e,onClose:t,title:n,children:r,confirmText:i,cancelText:a,onConfirm:o,confirmType:s=`primary`,isLoading:c=!1})=>{let{t:l}=q(),u=i??l(`common.confirm`),d=a??l(`common.cancel`);return Dt(e),e?(0,b.jsx)(Bt,{isOpen:e,onClick:e=>{e.target===e.currentTarget&&t()},onKeyDown:e=>{e.key===`Escape`&&t()},children:(0,b.jsxs)(Vt,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dialog-title`,children:[(0,b.jsxs)(Ht,{children:[(0,b.jsx)(Ut,{id:`dialog-title`,children:n}),(0,b.jsx)(Wt,{onClick:t,"aria-label":l(`common.closeDialog`),children:(0,b.jsx)(k,{name:`close`,size:20})})]}),(0,b.jsx)(Gt,{children:r}),o&&(0,b.jsxs)(Kt,{children:[(0,b.jsx)(C,{variant:`secondary`,onClick:t,disabled:c,children:d}),(0,b.jsx)(qt,{confirmType:s,onClick:o,disabled:c,children:c?l(`common.processing`):u})]})]})}):null});Jt.displayName=`Dialog`;var Yt=y.input`
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
`;const Xt=(0,x.memo)(({checked:e,onChange:t,disabled:n=!1})=>(0,b.jsx)(Yt,{type:`checkbox`,checked:e,onChange:t,disabled:n}));Xt.displayName=`Checkbox`;var Zt=_`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Qt=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  position: relative;
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({width:e})=>e&&`width: ${e};`}
`,$t=y.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,en=y.button`
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
`,tn=y.div`
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
`,nn=y.div`
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
  animation: ${Zt} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
`,rn=y.label`
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
`,an=y.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  flex: 1;
  font-weight: 500;
`,on=y.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 600;
`;const sn=(0,x.memo)(({label:e,value:t,onChange:n,options:r,placeholder:i=`選択してください`,maxSelections:a,width:o,fullWidth:s})=>{let[c,l]=(0,x.useState)(!1),u=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let d=e=>{if(t.includes(e))n(t.filter(t=>t!==e));else{if(a&&t.length>=a)return;n([...t,e])}};return(0,b.jsxs)(Qt,{ref:u,width:o,fullWidth:s,children:[e&&(0,b.jsx)($t,{children:e}),(0,b.jsxs)(en,{type:`button`,onClick:()=>l(!c),isOpen:c,children:[(()=>t.length===0?i:t.map(e=>r.find(t=>t.value===e)?.label||e).join(`, `))(),t.length>0&&(0,b.jsxs)(on,{children:[` (`,t.length,`)`]}),(0,b.jsx)(tn,{isOpen:c,children:(0,b.jsx)(k,{name:`add`,size:16})})]}),(0,b.jsx)(nn,{isOpen:c,children:r.map(e=>{let n=a?t.length>=a&&!t.includes(e.value):!1;return(0,b.jsxs)(rn,{disabled:n,children:[(0,b.jsx)(Xt,{checked:t.includes(e.value),onChange:()=>d(e.value),disabled:n}),(0,b.jsx)(an,{children:e.label})]},e.value)})})]})});sn.displayName=`MultiSelect`;const Y={mobile:768,tablet:1024,desktop:1280},X={mobile:`@media (max-width: ${Y.mobile}px)`,tablet:`@media (max-width: ${Y.tablet}px)`,desktop:`@media (min-width: ${Y.desktop}px)`,maxWidth:e=>`@media (max-width: ${e}px)`,minWidth:e=>`@media (min-width: ${e}px)`};var cn=y.div`
  padding: ${({theme:e})=>e.spacing[6]};
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  width: 100%;

  ${X.mobile} {
    padding: ${({theme:e})=>e.spacing[4]};
    min-width: unset;
    max-width: 100%;
  }
`,ln=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  gap: ${({theme:e})=>e.spacing[4]};

  ${X.mobile} {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,un=y.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  animation: ${J} 0.5s ease-out;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
`,dn=y.span`
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,fn=y.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,pn=y.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${X.mobile} {
    width: 100%;
    flex-direction: column;
  }
`,mn=y.div`
  display: grid;
  gap: ${({gap:e})=>e};
  animation: ${J} 0.5s ease-out;
`;const Z=(0,x.memo)(({children:e})=>(0,b.jsx)(cn,{children:e}));Z.displayName=`Page`;const hn=(0,x.memo)(({children:e})=>(0,b.jsx)(ln,{children:e}));hn.displayName=`PageTitleContainer`;const gn=(0,x.memo)(({children:e,action:t})=>(0,b.jsxs)(un,{children:[(0,b.jsx)(dn,{children:e}),t]}));gn.displayName=`PageTitle`;const _n=(0,x.memo)(({children:e})=>(0,b.jsx)(fn,{children:e}));_n.displayName=`PageDescription`;const vn=(0,x.memo)(({children:e})=>(0,b.jsx)(pn,{children:e}));vn.displayName=`PageTitleActions`;const yn=(0,x.memo)(({children:e,gap:t=`1.5rem`})=>(0,b.jsx)(mn,{gap:t,children:e}));yn.displayName=`PageContainer`;var bn=_`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xn=_`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Sn=y.div`
  position: relative;
  display: ${({$fullWidth:e})=>e?`block`:`inline-block`};
  width: ${({$fullWidth:e})=>e?`100%`:`auto`};
`,Cn=y.button`
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
`,wn=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: #26a1df;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  span {
    color: ${({theme:e})=>e.colors.text};
  }
`,Tn=y.div`
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
  animation: ${({direction:e})=>e===`up`?bn:xn} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
`,En=y.button`
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
`,Dn=y.span`
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
`,On=y.span`
  display: flex;
  align-items: center;
  color: #26a1df;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,kn=[{code:`ja`,name:`日本語`,flag:`🇯🇵`},{code:`en`,name:`English`,flag:`🇺🇸`},{code:`ko`,name:`한국어`,flag:`🇰🇷`}];const An=(0,x.memo)(({direction:e=`down`,fullWidth:t=!1})=>{let[n,r]=(0,x.useState)(!1),{currentLanguage:i,changeLanguage:a}=q(),o=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&r(!1)};return n&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[n]);let s=e=>{a(e),r(!1)},c=kn.find(e=>e.code===i)?.name||`日本語`;return(0,b.jsxs)(Sn,{ref:o,$fullWidth:t,children:[(0,b.jsxs)(Cn,{onClick:()=>r(!n),$fullWidth:t,children:[(0,b.jsxs)(wn,{children:[(0,b.jsx)(k,{name:`language`,size:18}),(0,b.jsx)(`span`,{children:c})]}),(0,b.jsx)(On,{isOpen:n,children:(0,b.jsx)(k,{name:`arrowDropDown`,size:24})})]}),(0,b.jsx)(Tn,{isOpen:n,direction:e,children:kn.map(e=>(0,b.jsxs)(En,{isActive:i===e.code,onClick:()=>s(e.code),children:[(0,b.jsx)(Dn,{children:e.flag}),(0,b.jsx)(`span`,{children:e.name})]},e.code))})]})});An.displayName=`LanguageSelector`;var jn=y.div`
  position: fixed;
  bottom: ${({theme:e})=>e.spacing[6]};
  right: ${({theme:e})=>e.spacing[6]};
  z-index: 100;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    bottom: ${({theme:e})=>e.spacing[4]};
    right: ${({theme:e})=>e.spacing[4]};
  }
`,Mn=y.button`
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
      animation: ${Rt} 0.6s ease-in-out;
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
`;const Nn=(0,x.memo)(()=>{let{mode:e,toggleMode:t}=Mt(),{t:n}=q(),r=(0,b.jsx)(jn,{children:(0,b.jsx)(Mn,{onClick:t,"aria-label":n(`common.toggleTheme`),title:n(e===`light`?`common.switchToDarkMode`:`common.switchToLightMode`),children:e===`light`?(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,children:(0,b.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z`})}):(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,children:(0,b.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z`})})})});return(0,ue.createPortal)(r,document.body)});var Pn=y.div`
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
  animation: ${J} 0.6s ease-out 0.1s backwards;

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
`,Fn=y.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  ${X.mobile} {
    min-width: 380px;
  }
`,In=y.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  /* スクロールバーを非表示 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Ln=y.div`
  display: flex;
  background: ${({theme:e})=>e.isDark?`rgba(39, 39, 42, 0.6)`:`rgba(255, 255, 255, 0.1)`};
  backdrop-filter: blur(8px);
  border-bottom: 2px solid ${({theme:e})=>e.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 2;
  min-width: 100%;
  width: ${({$width:e})=>e?`calc(${e} + 4px)`:`100%`};

  ${X.mobile} {
    min-width: 380px;
  }
`;const Rn=y.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  text-align: left;

  ${X.mobile} {
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
    font-size: 0.6875rem;
  }

  &:last-child {
    text-align: center;
  }
`;var zn=y.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`;const Bn=y.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  background: transparent;

  ${X.mobile} {
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
`,Vn=y.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  display: flex;
  align-items: center;
  height: 66px;

  ${X.mobile} {
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
    font-size: 0.8125rem;
  }

  &:last-child {
    justify-content: center;
  }
`;var Hn=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
  gap: ${({theme:e})=>e.spacing[4]};
`,Un=y.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.gray[500]};
`,Wn=y.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
  padding: ${({theme:e})=>e.spacing[16]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  animation: ${Lt} 1.5s ease-in-out infinite;
`;function Gn({data:e,columns:t,renderRow:n,rowHeight:i=56,overscan:a=5,height:o,width:s=`100%`,isLoading:c=!1,loadingText:l=`Loading...`,emptyText:u=`No data`,getRowKey:d}){let f=(0,x.useRef)(null),p=(0,x.useRef)(null),m=r({count:e.length,getScrollElement:()=>f.current,estimateSize:()=>i,overscan:a});return(0,x.useEffect)(()=>{let e=f.current,t=p.current;if(!e||!t)return;let n=()=>{t.scrollLeft=e.scrollLeft};return e.addEventListener(`scroll`,n),()=>{e.removeEventListener(`scroll`,n)}},[]),(0,b.jsx)(Pn,{$height:o,children:(0,b.jsxs)(Fn,{children:[(0,b.jsx)(In,{ref:p,children:(0,b.jsx)(Ln,{$width:s,children:t.map(e=>(0,b.jsx)(Rn,{width:e.width,children:e.label},e.key))})}),c?(0,b.jsx)(zn,{children:(0,b.jsx)(Wn,{children:l})}):e.length>0?(0,b.jsx)(zn,{ref:f,children:(0,b.jsx)(`div`,{style:{height:`${m.getTotalSize()}px`,position:`relative`,width:s},children:m.getVirtualItems().map(t=>{let r=e[t.index];return(0,b.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,transform:`translateY(${t.start}px)`,height:`${t.size}px`},children:n(r,t)},d(r))})})}):(0,b.jsx)(Hn,{children:(0,b.jsx)(Un,{children:u})})]})})}const Kn=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  animation: ${J} 0.6s ease-out;

  ${X.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,qn=y.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${X.mobile} {
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
`,Jn=y.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Yn=y.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  ${({theme:e,$type:t,$winRate:n})=>t===`win`?`color: ${e.colors.win[400]};`:t===`defeat`?`color: ${e.colors.defeat[400]};`:t===`winRate`&&n!==void 0?`color: ${j(n,e,400)};`:`
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,Xn=y.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`;var Zn={danger:v`
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: ${({theme:e})=>e.colors.error[500]};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.error[500]};
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  `,default:v`
    border: 1px solid ${({theme:e})=>e.colors.borderLight};
    color: ${({theme:e})=>e.colors.primary[500]};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.primary[500]};
      box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
    }
  `},Qn=y(C)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.base};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  padding: 0;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({$type:e})=>Zn[e||`default`]}
`;const Q=(0,x.memo)(({icon:e,children:t,...n})=>(0,b.jsx)(Qn,{variant:`outline`,...n,children:e||t}));Q.displayName=`IconicButton`;var $n=y.div`
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
`,er=y.div`
  flex: 1;
`,tr=y.button`
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
`;const nr=(0,x.memo)(({type:e=`info`,children:t,onClose:n})=>(0,b.jsxs)($n,{$type:e,children:[(0,b.jsx)(er,{children:t}),n&&(0,b.jsx)(tr,{onClick:n,type:`button`,"aria-label":`Close`,children:(0,b.jsx)(k,{name:`close`,size:16})})]}));nr.displayName=`Flush`;var rr=e(g()),ir=_`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,ar=_`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,or=y.div`
  position: fixed;
  top: ${({theme:e})=>e.spacing[6]};
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -100%);
  opacity: 0;
  visibility: ${({$isVisible:e})=>e?`visible`:`hidden`};
  animation: ${({$isVisible:e})=>e?ir:ar} 0.3s ease-out forwards;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    top: ${({theme:e})=>e.spacing[4]};
    left: ${({theme:e})=>e.spacing[4]};
    right: ${({theme:e})=>e.spacing[4]};
    transform: translateY(-100%);
  }
`,sr=y.div`
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
`,cr=y.div`
  flex: 1;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-right: 1rem;
`,lr=y.button`
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
`;const ur=(0,x.memo)(({open:e,message:t,actionLabel:n,onAction:r,onClose:i,autoHideDuration:a})=>{let{t:o}=q(),[s,c]=(0,x.useState)(!1);(0,x.useEffect)(()=>{if(e){let e=setTimeout(()=>{c(!0)},10);if(a){let t=setTimeout(()=>{c(!1),setTimeout(()=>{i?.()},300)},a);return()=>{clearTimeout(e),clearTimeout(t)}}return()=>clearTimeout(e)}else c(!1)},[e,a,i]);let l=()=>{c(!1),setTimeout(()=>{i?.()},300)};if(!e)return null;let u=(0,b.jsx)(or,{$isVisible:s,children:(0,b.jsxs)(sr,{children:[(0,b.jsx)(cr,{children:t}),n&&r&&(0,b.jsx)(C,{variant:`outline`,size:`sm`,onClick:r,children:n}),(0,b.jsx)(lr,{onClick:l,"aria-label":o(`common.close`),children:(0,b.jsx)(T,{})})]})});return(0,rr.createPortal)(u,document.body)});ur.displayName=`Snackbar`;var dr=e(g()),fr=_`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,pr=_`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,mr=_`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,hr=_`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
`,gr=y.div`
  display: none;
  position: relative;

  ${X.mobile} {
    display: block;
  }
`,_r=y.div`
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
  animation: ${({$isClosing:e})=>e?pr:fr} 0.2s ease-out;
`,vr=y.div`
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
  animation: ${({$isClosing:e})=>e?hr:mr} 0.2s ease-out;
  transform-origin: top right;
`,yr=y.button`
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
`;const br=({items:e,triggerTitle:t,stopPropagation:n=!0})=>{let[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1),[s,c]=(0,x.useState)({top:0,right:0}),l=(0,x.useRef)(null),u=(0,x.useRef)(null),d=(0,x.useRef)(null);Dt(r);let f=(0,x.useCallback)(()=>{o(!0),setTimeout(()=>{i(!1),o(!1)},200)},[]),p=(0,x.useCallback)(()=>{if(u.current){let e=u.current.getBoundingClientRect();c({top:e.bottom+8,right:window.innerWidth-e.right})}},[]),m=(0,x.useCallback)(()=>{p(),i(!0)},[p]);(0,x.useEffect)(()=>{let e=e=>{let t=e.target;l.current&&!l.current.contains(t)&&d.current&&!d.current.contains(t)&&f()},t=e=>{e.key===`Escape`&&f()};if(r)return document.addEventListener(`click`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`click`,e),document.removeEventListener(`keydown`,t)}},[r,f]);let ee=e=>{e.preventDefault(),n&&e.stopPropagation(),r?f():m()},h=(e,t)=>{e.preventDefault(),n&&e.stopPropagation(),f(),t()};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(gr,{ref:d,children:(0,b.jsx)(`div`,{ref:u,children:(0,b.jsx)(Q,{icon:(0,b.jsx)(k,{name:`hamburger`,size:16}),onClick:ee,title:t})})}),(r||a)&&(0,dr.createPortal)((0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_r,{$isOpen:r,$isClosing:a,onClick:f}),(0,b.jsx)(vr,{ref:l,$isOpen:r,$isClosing:a,$position:s,children:e.map((e,t)=>(0,b.jsxs)(yr,{onClick:t=>h(t,e.onClick),children:[(0,b.jsx)(k,{name:e.icon,size:16}),e.label]},t))})]}),document.body)]})};var xr=y.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  padding: ${({theme:e})=>e.spacing[4]};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Sr=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Cr=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,wr=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Tr=y.img`
  width: 3rem;
  height: 2rem;
  object-fit: contain;
`,Er=y.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`;const Dr=({onMenuClick:e})=>{let{t}=q();return(0,b.jsx)(xr,{children:(0,b.jsxs)(Sr,{children:[(0,b.jsxs)(wr,{children:[(0,b.jsx)(Tr,{src:`/cc-war-record/img/cc.webp`,alt:`CC`}),(0,b.jsx)(Er,{children:t(`common.appName`)})]}),(0,b.jsxs)(Cr,{children:[(0,b.jsx)(Nn,{}),(0,b.jsx)(k,{name:`hamburger`,size:24,onClick:e})]})]})})},Or=[{labelKey:`navigation.home`,path:`/`,icon:`home`},{labelKey:`navigation.graphs`,path:`/graphs`,icon:`chart`},{labelKey:`navigation.histories`,path:`/histories`,icon:`history`},{labelKey:`navigation.faq`,path:`/faq`,icon:`detail`}];var kr=y.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
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
`,Ar=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};

  ${X.mobile} {
    display: none;
  }
`,jr=y.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`,Mr=y.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`,Nr=y.nav`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  ${X.mobile} {
    margin-top: ${({theme:e})=>e.spacing[16]};
  }
`,Pr=y(c)`
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
`,Fr=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: inherit;
`;const Ir=({isOpen:e,isActivePath:t,onClose:n})=>{let{t:r}=q();return(0,b.jsxs)(kr,{$isOpen:e,children:[(0,b.jsxs)(Ar,{children:[(0,b.jsx)(jr,{src:`/cc-war-record/img/cc.webp`,alt:`CC`}),(0,b.jsx)(Mr,{children:r(`common.appName`)})]}),(0,b.jsx)(Nr,{children:Or.map(e=>(0,b.jsxs)(Pr,{to:e.path,$isActive:t(e.path),onClick:n,children:[(0,b.jsx)(Fr,{$isActive:t(e.path),children:(0,b.jsx)(k,{name:e.icon,size:20})}),r(e.labelKey)]},e.path))}),(0,b.jsx)(`div`,{style:{marginTop:`auto`,paddingTop:`24px`},children:(0,b.jsx)(An,{direction:`up`,fullWidth:!0})})]})};var Lr=y.div`
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
`,Rr=y.main`
  display: flex;
  flex: 1;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-left: 260px;
  }
`,zr=y.div`
  display: flex;
  min-height: 100vh;
  background-image: url("${`/cc-war-record/`}img/${({theme:e})=>e.isDark?`bgn.webp`:`bg.webp`}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex-direction: column;
  }
`;const Br=({children:e})=>{let[t,n]=(0,x.useState)(!1),r=i(),a=()=>{n(!t)},o=()=>{n(!1)};return(0,b.jsxs)(zr,{children:[(0,b.jsx)(Dr,{onMenuClick:a}),(0,b.jsx)(Ir,{isOpen:t,isActivePath:e=>e===`/`?r.pathname===`/`:r.pathname.startsWith(e),onClose:o}),(0,b.jsx)(Lr,{$isOpen:t,onClick:o}),(0,b.jsx)(Rr,{children:e})]})};var Vr=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  min-height: 400px;
  text-align: center;
`,Hr=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ur=y.div`
  display: flex;
  gap: 1rem;
`,Wr=y.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`,Gr=y.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,Kr=y.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 28rem;
  margin: 0.5rem auto;
  line-height: 1.6;
`;const qr=()=>(0,b.jsx)(Z,{children:(0,b.jsxs)(Vr,{children:[(0,b.jsxs)(Hr,{children:[(0,b.jsx)(Wr,{children:`404`}),(0,b.jsx)(Gr,{children:`ページが見つかりません`}),(0,b.jsx)(Kr,{children:`お探しのページは削除されたか、URLが間違っている可能性があります。`})]}),(0,b.jsx)(Ur,{children:(0,b.jsx)(c,{to:`/`,children:(0,b.jsx)(C,{children:`ホームに戻る`})})})]})});var Jr=_`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,Yr=_`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,Xr=y.div`
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
  animation: ${J} 0.8s ease-out;
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
    animation: ${Yr} 3s ease-in-out infinite;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.border};
  }
`,Zr=y.div`
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
  animation: ${Jr} 3s ease-in-out infinite;
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
`,Qr=y.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  position: relative;
  z-index: 1;
  animation: ${J} 0.8s ease-out 0.2s backwards;
`,$r=y.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 450px;
  line-height: 1.7;
  font-weight: 500;
  position: relative;
  z-index: 1;
  animation: ${J} 0.8s ease-out 0.4s backwards;
`,ei=y(C)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
  position: relative;
  z-index: 1;
  animation: ${J} 0.8s ease-out 0.6s backwards;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(38, 161, 223, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }
`;const ti=(0,x.memo)(({icon:e=`home`})=>{let{t}=q(),n=s();return(0,b.jsxs)(Xr,{children:[(0,b.jsx)(Zr,{children:(0,b.jsx)(k,{name:e,size:32})}),(0,b.jsx)(Qr,{children:t(`pages.home.noSeason`)}),(0,b.jsx)($r,{children:t(`pages.home.createFirstSeason`)}),(0,b.jsxs)(ei,{onClick:()=>{n({to:`/new`})},children:[(0,b.jsx)(k,{name:`add`,size:20,color:`white`}),t(`pages.home.createSeason`)]})]})});ti.displayName=`EmptyState`;var ni=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: ${({theme:e})=>e.spacing[8]};
`,ri=y.div`
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
`,ii=y.p`
  margin-top: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const ai=()=>(0,b.jsx)(ni,{children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(ri,{}),(0,b.jsx)(ii,{children:`Loading...`})]})}),oi=y.form`
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
`,si=y.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,ci=y.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;l();const li=(e,t,n,r)=>{},ui=async()=>{try{let e=await fetch(`/cc-war-record/build-info.json`,{cache:`no-cache`});return e.ok?await e.json():(console.warn(`Failed to fetch build-info.json:`,e.status),null)}catch(e){return console.error(`Error fetching build-info.json:`,e),null}},di=async()=>{let e=await ui();if(!e)return console.warn(`Failed to fetch build info`),!1;let{timestamp:t}=e,n=I(F.BUILD_TIMESTAMP,``);if(!n)return L(F.BUILD_TIMESTAMP,t.toString()),console.info(`First access: build timestamp saved`),!1;if(Number(n)!==t&&(console.info(`Build updated detected:`,{old:new Date(Number(n)).toISOString(),new:e.buildTime}),L(F.BUILD_TIMESTAMP,t.toString()),`serviceWorker`in navigator&&navigator.serviceWorker.controller))try{if(await(await navigator.serviceWorker.ready).unregister(),console.info(`ServiceWorker unregistered`),`caches`in window){let e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e))),console.info(`Cache storage cleared`)}return!0}catch(e){console.error(`Error clearing ServiceWorker cache:`,e)}return!1},$=d({component:fi,notFoundComponent:pi});function fi(){let e=h(),{t}=q(),n=(0,x.useRef)(!1),[r,i]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{window.scrollTo(0,0),e.location.pathname},[e.location.pathname]),(0,x.useEffect)(()=>{!r&&!n.current&&setTimeout(()=>{di().then(e=>{e&&i(!0)})},1e3)},[e.location.pathname]),(0,b.jsxs)(Br,{children:[(0,b.jsx)(x.Suspense,{fallback:(0,b.jsx)(ai,{}),children:(0,b.jsx)(a,{})}),(0,b.jsx)(ur,{open:r,message:t(`common.buildUpdate.message`),actionLabel:t(`common.buildUpdate.reload`),onAction:()=>{window.location.reload()},onClose:()=>{i(!1),n.current=!0}})]})}function pi(){return(0,b.jsx)(qr,{})}const mi=p(`/new`)({component:o(()=>S(()=>import(`./new-Dcn_0mB3.js`),__vite__mapDeps([0,1,2])),`component`)}),hi=p(`/graphs`)({component:o(()=>S(()=>import(`./graphs-CHeSeT0L.js`),__vite__mapDeps([3,1,2])),`component`),staleTime:1e3*60*5,gcTime:1e3*60*10}),gi=p(`/faq`)({component:o(()=>S(()=>import(`./faq-4EkRcjOX.js`),__vite__mapDeps([4,1,2])),`component`)}),_i=p(`/`)({component:o(()=>S(()=>import(`./routes-C3mTVlT2.js`),__vite__mapDeps([5,1,2])),`component`)}),vi=p(`/histories/`)({component:o(()=>S(()=>import(`./histories-CG4p1faD.js`),__vite__mapDeps([6,1,2])),`component`)}),yi=p(`/histories/$id`)({component:o(()=>S(()=>import(`./_id-nGxAE2iy.js`),__vite__mapDeps([7,1,2])),`component`)});var bi=mi.update({id:`/new`,path:`/new`,getParentRoute:()=>$}),xi=hi.update({id:`/graphs`,path:`/graphs`,getParentRoute:()=>$}),Si=gi.update({id:`/faq`,path:`/faq`,getParentRoute:()=>$}),Ci=_i.update({id:`/`,path:`/`,getParentRoute:()=>$}),wi=vi.update({id:`/histories/`,path:`/histories/`,getParentRoute:()=>$}),Ti=yi.update({id:`/histories/$id`,path:`/histories/$id`,getParentRoute:()=>$}),Ei={IndexRoute:Ci,FaqRoute:Si,GraphsRoute:xi,NewRoute:bi,HistoriesIdRoute:Ti,HistoriesIndexRoute:wi};const Di=$._addFileChildren(Ei)._addFileTypes();var Oi=ee({routeTree:Di,basepath:`/cc-war-record`,defaultViewTransition:!0});const ki=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u,{router:Oi}),!1]}),Ai=ne`
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

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({theme:e})=>e.colors.text};
    background: ${({theme:e})=>e.isDark?`linear-gradient(to bottom right, #0a0a0b 0%, #18181b 50%, #27272a 100%)`:`linear-gradient(to bottom right, #faf5ff 0%, #f3f4f6 50%, #e9d5ff 100%)`};
    background-attachment: fixed;
    overflow-y: scroll;
    scrollbar-width: thin;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* カスタムスクロールバー (Webkit) */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;

    ${X.mobile} {
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
`;var ji=(e,t)=>typeof t==`string`?ce(e):!0,Mi=({children:e})=>{let{theme:t}=Mt();return(0,b.jsx)(ie,{shouldForwardProp:ji,children:(0,b.jsxs)(re,{theme:t,children:[(0,b.jsx)(Ai,{}),e]})})};oe.use(se).use(m).init({resources:{ja:{translation:{common:{appName:`クリコン戦績記録`,confirm:`確認`,upload:`アップロード`,cancel:`キャンセル`,delete:`削除`,edit:`編集`,save:`保存`,close:`閉じる`,add:`追加`,back:`戻る`,loading:`読み込み中...`,processing:`処理中...`,closeDialog:`ダイアログを閉じる`,error:`エラーが発生しました`,noData:`データがありません`,success:`成功しました`,warning:`警告`,info:`情報`,menu:`メニュー`,toggleTheme:`テーマを切り替え`,switchToDarkMode:`ダークモードに切り替え`,switchToLightMode:`ライトモードに切り替え`,win:`勝`,defeat:`敗`,buildUpdate:{message:`新しいバージョンが利用可能です`,reload:`更新`}},navigation:{home:`ホーム`,graphs:`グラフ`,histories:`履歴`,faq:`FAQ`},pages:{home:{title:`{{seasonName}} の戦績`,description:`戦績と統計情報を入力します。`,createSeason:`新しいシーズンを作成`,noSeason:`シーズンが作成されていません`,createFirstSeason:`最初のシーズンを作成してください`,errorOccurred:`エラーが発生しました`},graphs:{title:`戦績グラフ`,description:`現シーズンの戦績をグラフ形式で可視化します。`,descriptionWithSeason:`{{seasonName}} の戦績をグラフ形式で可視化します。`,daily:`日別勝敗数`,hourly:`時間別勝率`,weekly:`曜日別勝率`,jobWinRate:`ジョブ別勝率`,jobUsage:`ジョブ使用率`,filters:{character:`キャラクター`,job:`ジョブ`,map:`マップ`,all:`すべて`}},histories:{title:`履歴一覧`,description:`過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。`,totalSeasons:`総シーズン数: {{count}}件`,totalMatches:`総試合数: {{count}}`,latestCreated:`最新作成`,detail:`詳細`,delete:`削除`,confirmDelete:`シーズンの削除`,deleteDescription:`「{{seasonName}}」を削除してもよろしいですか？
この操作は取り消すことができません。`,emptyState:`履歴がありません`,stats:`シーズン数`,createBackup:`バックアップを作成`,importBackup:`バックアップ取り込み`,importBackupWarningTitle:`バックアップの取り込み`,importBackupWarningMessage:`現在のデータはバックアップのデータで上書きされます。この操作は取り消せません。続行しますか？`,backupCreated:`バックアップを作成しました`,backupRestored:`バックアップを復元しました`,errors:{loadFailed:`履歴の読み込みに失敗しました`,alreadyExists:`シーズン「{{seasonName}}」は既に存在します`,notFound:`指定された履歴が見つかりません`,characterNotFound:`指定されたキャラクターが見つかりません`,deleteMatchRecordsFailed:`シーズン {{uuid}} のマッチレコード削除中にエラーが発生しました`,loadMatchRecordsFailed:`シーズン {{seasonUuid}} のマッチレコード読み込み中にエラーが発生しました`,backupCreateFailed:`バックアップの作成に失敗しました`,backupRestoreFailed:`バックアップの復元に失敗しました`,backupFileCorrupted:`バックアップファイルが破損しています`}},historyDetail:{title:`{{seasonName}} の詳細`,description:`シーズンの全戦績を表示しています。`,backToList:`履歴一覧に戻る`,totalMatches:`{{count}}試合の戦績`,matchesCount:`試合数`,winRate:`勝率`,overall:`全体`,createdDate:`作成日`,searchPlaceholder:`キャラクター名、ジョブ、日時で検索...`,columns:{season:`シーズン名`,character:`キャラクター名`,job:`使用ジョブ`,map:`マップ`,result:`勝敗`,date:`作成日時`},results:{win:`Win`,defeat:`Defeat`},emptyState:`戦績が記録されていません`},newSeason:{title:`新しいシーズンを作成`,description:`新しいシーズンを作成します。シーズン名を入力してください。`,seasonName:`シーズン名`,seasonNamePlaceholder:`例: シーズン1`,create:`作成する`,creating:`作成中...`,cancel:`キャンセル`,confirmTitle:`シーズン作成の確認`,confirmDescription:`新しいシーズンを作成すると「{{seasonName}}」の戦績データは過去のシーズンとしてアーカイブされ、新しい戦績の入力が開始されます。よろしいでしょうか?`,validationRequired:`シーズン名を入力してください`,validationMaxLength:`シーズン名は{{length}}文字以内で入力してください`,successMessage:`シーズン「{{seasonName}}」を作成しました`},faq:{title:`よくある質問 (FAQ)`,description:`CC戦績記録について、よくお寄せいただく質問とその回答をまとめました。`,privacy:{title:`プライバシー・データについて`,dataStorage:{question:`戦績データはどこに保存されますか？`,answer:{intro:`戦績データはすべてお使いのブラウザのローカルストレージに保存されます。`,description:`当アプリケーションでは、以下の方針でデータを扱っています：`,points:[`戦績データや個人情報は一切サーバーに送信されません`,`すべてのデータはブラウザ内のみで管理されます`,`アプリケーション開発者がユーザーの戦績データにアクセスすることはありません`,`データの削除はブラウザの設定から行えます`]}},analytics:{question:`Google Analyticsで何が収集されますか？`,answer:{intro:`当サイトでは、サービス改善のためにGoogle Analyticsを使用しています。`,collected:`収集される情報：`,collectedPoints:[`アクセス統計：ページビュー数、セッション数、平均滞在時間など`,`技術情報：ブラウザの種類、OS、画面サイズなど`,`地域情報：国や地域レベルの大まかな位置情報（詳細な住所等は含まれません）`],notCollected:`収集されない情報：`,notCollectedPoints:[`戦績データや個人の成績情報`,`キャラクター名やその他の個人情報`,`詳細な位置情報や住所`],anonymous:`これらの統計情報は匿名化されており、個人を特定することはできません。`}},dataDeletion:{question:`データの削除方法を教えてください`,answer:{intro:`保存されているデータを削除したい場合は、以下の方法で行えます：`,methods:[`個別削除：各ページで「削除」ボタンを使用`,`完全削除：ブラウザの設定からサイトデータを削除`],browserMethods:`ブラウザからのデータ削除方法：`,browserSteps:[`Chrome: 設定 → プライバシーとセキュリティ → サイトデータ`,`Firefox: 設定 → プライバシーとセキュリティ → Cookieとサイトデータ`,`Safari: 環境設定 → プライバシー → Webサイトデータを管理`]}}},usage:{title:`アプリケーションの使い方`,backup:{question:`データのバックアップ方法を教えてください`,answer:{intro:`履歴ページからデータのバックアップと復元ができます：`,backup:`バックアップの作成：`,backupSteps:[`履歴ページの右上にある「バックアップを作成」ボタンをクリック`,`自動的にZIPファイルがダウンロードされます`,`ファイル名は「cc-war-record-backup-日時.zip」形式で保存されます`],restore:`バックアップの復元：`,restoreSteps:[`履歴ページの右上にある「バックアップから復元」ボタンをクリック`,`保存したZIPファイルを選択`,`データが復元され、ページが自動的にリロードされます`],includes:`バックアップに含まれるデータ：`,includesItems:[`キャラクター情報`,`試合記録（全シーズン）`,`シーズン履歴`,`レーダーチャート設定`],note:`※ バックアップファイルは安全な場所に保管してください`}},dataDefeat:{question:`データが消えてしまうことはありますか？`,answer:{intro:`ローカルストレージに保存されたデータは、以下の場合に削除される可能性があります：`,causes:[`ブラウザのキャッシュクリア時`,`ブラウザの設定でサイトデータを削除した場合`,`プライベートブラウジングモード使用時`,`デバイスの容量不足時（ブラウザが自動削除する場合）`],recommendation:`重要なデータは定期的にバックアップを取ることをお勧めします。`}},dataSyncing:{question:`複数のブラウザでデータを共有できますか？`,answer:{limitation:`申し訳ございませんが、現在のところブラウザ間でのデータ同期機能は提供していません。`,explanation:`各ブラウザのローカルストレージは独立しているため、データは使用したブラウザでのみ利用可能です。`,workaround:`ただし、バックアップ機能を使えば、別のブラウザやデバイスにデータを移行することができます。`}}},copyright:{disclaimer:`このアプリケーションはファンメイドの非公式ツールであり、株式会社スクウェア・エニックスとは一切関係がありません。`}},notFound:{title:`ページが見つかりません`,description:`お探しのページは存在しないか、削除された可能性があります。`,backToHome:`ホームに戻る`}},character:{name:`キャラクター名`,create:`キャラクターを作成`,createSuccess:`キャラクター「{{name}}」を作成しました`,edit:`キャラクター名を編集`,delete:`キャラクターを削除`,confirmDelete:`削除する`,moveUp:`1つ上に`,moveDown:`1つ下に`,deleteDescription:`キャラクター「{{name}}」を削除しますか？<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。</span>`,namePlaceholder:`キャラクター名を入力`,validationRequired:`キャラクター名を入力してください`,emptyState:`キャラクターがありません`,createFirst:`最初のキャラクターを作成してください`,errors:{alreadyExists:`キャラクター「{{name}}」は既に存在します`,notFound:`キャラクターが見つかりません`,loadFailed:`データの読み込みに失敗しました`,matchRecordNotFound:`戦績記録が見つかりません`},stats:{matches:`{{count}}試合`,totalMatches:`{{count}}試合`,winRate:`勝率{{rate}}%`,noWinRate:`勝率--%`,wins:`{{count}}勝`,defeats:`{{count}}敗`},actions:{addJob:`ジョブの追加`,editName:`名前を編集`,deleteName:`キャラクターの削除`,more:`その他`}},match:{record:`戦績を記録`,job:`ジョブ`,map:`マップ`,result:`結果`,win:`勝利数`,defeat:`敗北数`,memo:`メモ`,memoPlaceholder:`メモを入力（任意）`,selectJob:`ジョブを選択してください`,selectMap:`マップを選択してください`,recorded:`戦績を記録しました`,totalMatches:`試合数`,winRate:`勝率`,allStagesTotal:`全ステージ合計`,actions:`操作`,pleaseRegisterJob:`ジョブを登録してください`,recentMatches:`最近の戦績`,deleteMatch:`戦績を削除`,confirmDelete:`戦績の削除`,confirmDeleteButton:`削除する`,deleteConfirmation:`{{characterName}} の {{date}} の戦績を削除してもよろしいですか？
この操作は取り消すことができません。`,addWin:`勝利を記録`,addDefeat:`敗北を記録`,rollback:`直前の記録を取り消し`},job:{select:`ジョブ選択`,selectJob:`使用ジョブを選択`,selectJobDescription:`ジョブを選択してください`,tank:`タンク`,healer:`ヒーラー`,meleeDps:`近接DPS`,melee_dps:`近接DPS`,physicalRangedDps:`物理遠隔DPS`,physical_ranged_dps:`物理遠隔DPS`,magicalRangedDps:`魔法遠隔DPS`,magical_ranged_dps:`魔法遠隔DPS`,PLD:`ナイト`,WAR:`戦士`,DRK:`暗黒騎士`,GNB:`ガンブレイカー`,WHM:`白魔道士`,SCH:`学者`,AST:`占星術師`,SGE:`賢者`,MNK:`モンク`,DRG:`竜騎士`,NIN:`忍者`,SAM:`侍`,RPR:`リーパー`,VPR:`ヴァイパー`,BRD:`吟遊詩人`,MCH:`機工士`,DNC:`踊り子`,BLM:`黒魔道士`,SMN:`召喚士`,RDM:`赤魔道士`,PCT:`ピクトマンサー`},maps:{THE_PALAISTRA:`パライストラ`,VOLCANIC_HEART:`ヴォルカニックハート`,CLOUD_NINE:`クラウドナイン`,TOUHOU_KARAKURI_GOTEN:`東方絡繰御殿`,RED_SANDS:`レッドサンズ`,BAYSIDE_BATTLEGROUND:`ベイサイドバトルグラウンド`},chart:{winRate:`勝率`,winCount:`勝利数`,defeatCount:`敗北数`,usageRate:`使用率`,matches:`試合`,noData:`データがありません`,noMatchData:`試合データがありません`,selectJobs:`ジョブを選択（最大5個）`,hour:`{{hour}}時`,day:{sunday:`日`,monday:`月`,tuesday:`火`,wednesday:`水`,thursday:`木`,friday:`金`,saturday:`土`},labels:{character:`キャラクター`,job:`ジョブ`,map:`マップ`,date:`日付`,allCharacters:`すべてのキャラクター`,allJobs:`すべてのジョブ`,allMaps:`すべてのマップ`,jobSelection:`ジョブ選択（最大5つ）`,selectJob:`ジョブを選択`},titles:{dailyWinDefeat:`日別勝敗数と勝率推移`,weeklyWinRate:`曜日別勝率比較`,hourlyWinDefeat:`時間帯別勝率分析`,jobUsageRate:`ジョブ使用率`,jobWinRateByMap:`マップ別ジョブ勝率比較`,todayWinDefeatTrend:`その日の勝敗推移`},axes:{matchCount:`対戦回数`,winRatePercent:`勝率 (%)`,date:`日付`,weekday:`曜日`,hour:`時間帯`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`使用回数`,usageRatePercent:`使用率`,win:`Win`,lose:`Defeat`,total:`合計`,matches:`試合`,noMatchData:`試合データなし`},weekdays:{sunday:`日曜日`,monday:`月曜日`,tuesday:`火曜日`,wednesday:`水曜日`,thursday:`木曜日`,friday:`金曜日`,saturday:`土曜日`},todayTrend:{match:`第{{number}}試合`,winRate:`勝率`,winCount:`勝数`,winDifference:`勝ち越し数`,record:`戦績`,matches:`試合`,matchNumber:`試合数`,noData:`今日の試合データがありません`}},language:{current:`日本語`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`言語を切り替え`}}},en:{translation:{common:{appName:`CC War Record`,confirm:`Confirm`,upload:`Upload`,cancel:`Cancel`,delete:`Delete`,edit:`Edit`,save:`Save`,close:`Close`,add:`Add`,back:`Back`,loading:`Loading...`,processing:`Processing...`,closeDialog:`Close dialog`,error:`An error occurred`,noData:`No data available`,success:`Success`,warning:`Warning`,info:`Information`,menu:`Menu`,toggleTheme:`Toggle theme`,switchToDarkMode:`Switch to dark mode`,switchToLightMode:`Switch to light mode`,win:`Win`,defeat:`Defeat`,buildUpdate:{message:`A new version is available`,reload:`Reload`}},navigation:{home:`Home`,graphs:`Graphs`,histories:`Histories`,faq:`FAQ`},pages:{home:{title:`{{seasonName}} Records`,description:`Enter your match records and view statistics.`,createSeason:`Create New Season`,noSeason:`No season has been created`,createFirstSeason:`Please create your first season`,errorOccurred:`An error occurred`},graphs:{title:`Match Statistics`,description:`Visualize current season match statistics in graph format.`,descriptionWithSeason:`Visualize {{seasonName}} match statistics in graph format.`,daily:`Daily Win/Defeat`,hourly:`Hourly Win Rate`,weekly:`Weekly Win Rate`,jobWinRate:`Job Win Rate`,jobUsage:`Job Usage Rate`,filters:{character:`Character`,job:`Job`,map:`Map`,all:`All`}},histories:{title:`History`,description:`View and manage past seasons. Click the detail button to see more information about each season.`,totalSeasons:`Total Seasons: {{count}}`,totalMatches:`Total Matches: {{count}}`,latestCreated:`Latest`,detail:`Details`,delete:`Delete`,confirmDelete:`Delete Season`,deleteDescription:`Are you sure you want to delete "{{seasonName}}"?
This action cannot be undone.`,emptyState:`No history available`,stats:`Seasons`,createBackup:`Create Backup`,importBackup:`Import Backup`,importBackupWarningTitle:`Import Backup`,importBackupWarningMessage:`Current data will be overwritten with the backup data. This action cannot be undone. Do you want to continue?`,backupCreated:`Backup created successfully`,backupRestored:`Backup restored successfully`,errors:{loadFailed:`Failed to load history`,alreadyExists:`Season "{{seasonName}}" already exists`,notFound:`The specified history was not found`,characterNotFound:`The specified character was not found`,deleteMatchRecordsFailed:`Error deleting match records for season {{uuid}}`,loadMatchRecordsFailed:`Error loading match records for season {{seasonUuid}}`,backupCreateFailed:`Failed to create backup`,backupRestoreFailed:`Failed to restore backup`,backupFileCorrupted:`Backup file is corrupted`}},historyDetail:{title:`{{seasonName}} Details`,description:`Displaying all matches for this season.`,backToList:`Back to History`,totalMatches:`{{count}} matches`,matchesCount:`Matches`,winRate:`Win Rate`,overall:`Overall`,createdDate:`Created`,searchPlaceholder:`Search by character, job, date...`,columns:{season:`Season Name`,character:`Character Name`,job:`Job Used`,map:`Map`,result:`Result`,date:`Date`},results:{win:`Win`,defeat:`Defeat`},emptyState:`No matches recorded`},newSeason:{title:`Create New Season`,description:`Create a new season. Please enter a season name.`,seasonName:`Season Name`,seasonNamePlaceholder:`e.g. Season 1`,create:`Create`,creating:`Creating...`,cancel:`Cancel`,confirmTitle:`Confirm Season Creation`,confirmDescription:`Creating a new season will archive the match data for "{{seasonName}}" and start recording new matches. Continue?`,validationRequired:`Please enter a season name`,validationMaxLength:`Season name must be {{length}} characters or less`,successMessage:`Season "{{seasonName}}" created successfully`},faq:{title:`Frequently Asked Questions (FAQ)`,description:`Common questions and answers about CC War Record.`,privacy:{title:`Privacy & Data`,dataStorage:{question:`Where is my match data stored?`,answer:{intro:`All match data is stored in your browser's local storage only.`,description:`Our application handles data with the following policy:`,points:[`Match data and personal information are never sent to servers`,`All data is managed within your browser only`,`Application developers cannot access your match data`,`Data can be deleted through browser settings`]}},analytics:{question:`What does Google Analytics collect?`,answer:{intro:`We use Google Analytics to improve our service.`,collected:`Information collected:`,collectedPoints:[`Access statistics: page views, sessions, average session duration, etc.`,`Technical information: browser type, OS, screen size, etc.`,`Regional information: general location at country/region level (no detailed addresses)`],notCollected:`Information NOT collected:`,notCollectedPoints:[`Match data or personal performance information`,`Character names or other personal information`,`Detailed location information or addresses`],anonymous:`All statistical information is anonymized and cannot identify individuals.`}},dataDeletion:{question:`How can I delete my data?`,answer:{intro:`To delete stored data, you can use the following methods:`,methods:[`Individual deletion: Use the "Delete" button on each page`,`Complete deletion: Delete site data through browser settings`],browserMethods:`Browser data deletion methods:`,browserSteps:[`Chrome: Settings → Privacy and security → Site data`,`Firefox: Settings → Privacy & Security → Cookies and Site Data`,`Safari: Preferences → Privacy → Manage Website Data`]}}},usage:{title:`Application Usage`,backup:{question:`How do I backup my data?`,answer:{intro:`You can backup and restore your data from the History page:`,backup:`Creating a backup:`,backupSteps:[`Click the "Create Backup" button in the top right of the History page`,`A ZIP file will be automatically downloaded`,`The file is saved as "cc-war-record-backup-timestamp.zip"`],restore:`Restoring from backup:`,restoreSteps:[`Click the "Restore from Backup" button in the top right of the History page`,`Select your saved ZIP file`,`Data will be restored and the page will automatically reload`],includes:`Data included in backup:`,includesItems:[`Character information`,`Match records (all seasons)`,`Season history`,`Radar chart settings`],note:`※ Please keep your backup file in a safe place`}},dataDefeat:{question:`Can my data be lost?`,answer:{intro:`Data stored in local storage may be deleted in the following cases:`,causes:[`When browser cache is cleared`,`When site data is deleted through browser settings`,`When using private browsing mode`,`When device storage is low (browser may auto-delete)`],recommendation:`We recommend regularly backing up important data.`}},dataSyncing:{question:`Can I share data between multiple browsers?`,answer:{limitation:`Unfortunately, we do not currently provide data synchronization between browsers.`,explanation:`Each browser's local storage is independent, so data is only available in the browser where it was created.`,workaround:`However, you can use the backup feature to transfer data to another browser or device.`}}},copyright:{disclaimer:`This application is a fan-made unofficial tool and is not affiliated with Square Enix Co., Ltd. in any way.`}},notFound:{title:`Page Not Found`,description:`The page you're looking for doesn't exist or may have been deleted.`,backToHome:`Back to Home`}},character:{name:`Character Name`,create:`Create Character`,createSuccess:`Character "{{name}}" created successfully`,edit:`Edit Character Name`,delete:`Delete Character`,confirmDelete:`Delete`,moveUp:`Move up`,moveDown:`Move down`,deleteDescription:`Are you sure you want to delete character "{{name}}"?<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ All associated match records will also be deleted. This action cannot be undone.</span>`,namePlaceholder:`Enter character name`,validationRequired:`Please enter a character name`,emptyState:`No characters`,createFirst:`Create your first character`,errors:{alreadyExists:`Character "{{name}}" already exists`,notFound:`Character not found`,loadFailed:`Failed to load data`,matchRecordNotFound:`Match record not found`},stats:{matches:`{{count}} matches`,totalMatches:`{{count}} matches`,winRate:`{{rate}}% win rate`,noWinRate:`-- % win rate`,wins:`{{count}} wins`,defeats:`{{count}} defeats`},actions:{addJob:`Add Job`,editName:`Edit Name`,deleteName:`Delete Character`,more:`More`}},match:{record:`Record Match`,job:`Job`,map:`Map`,result:`Result`,win:`Wins`,defeat:`Defeats`,memo:`Memo`,memoPlaceholder:`Enter memo (optional)`,selectJob:`Please select a job`,selectMap:`Please select a map`,recorded:`Match recorded successfully`,totalMatches:`Matches`,winRate:`Win Rate`,allStagesTotal:`All Stages Total`,actions:`Actions`,pleaseRegisterJob:`Please register a job`,recentMatches:`Recent Matches`,deleteMatch:`Delete Match`,confirmDelete:`Delete Match Record`,confirmDeleteButton:`Delete`,deleteConfirmation:`Are you sure you want to delete the match record for {{characterName}} on {{date}}?
This action cannot be undone.`,addWin:`Record Win`,addDefeat:`Record Defeat`,rollback:`Undo Last Record`},job:{select:`Select Job`,selectJob:`Select Job to Use`,selectJobDescription:`Please select a job`,tank:`Tank`,healer:`Healer`,meleeDps:`Melee DPS`,melee_dps:`Melee DPS`,physicalRangedDps:`Physical Ranged DPS`,physical_ranged_dps:`Physical Ranged DPS`,magicalRangedDps:`Magical Ranged DPS`,magical_ranged_dps:`Magical Ranged DPS`,PLD:`Paladin`,WAR:`Warrior`,DRK:`Dark Knight`,GNB:`Gunbreaker`,WHM:`White Mage`,SCH:`Scholar`,AST:`Astrologian`,SGE:`Sage`,MNK:`Monk`,DRG:`Dragoon`,NIN:`Ninja`,SAM:`Samurai`,RPR:`Reaper`,VPR:`Viper`,BRD:`Bard`,MCH:`Machinist`,DNC:`Dancer`,BLM:`Black Mage`,SMN:`Summoner`,RDM:`Red Mage`,PCT:`Pictomancer`},maps:{THE_PALAISTRA:`The Palaistra`,VOLCANIC_HEART:`The Volcanic Heart`,CLOUD_NINE:`Cloud Nine`,TOUHOU_KARAKURI_GOTEN:`The Clockwork Castletown`,RED_SANDS:`The Red Sands`,BAYSIDE_BATTLEGROUND:`The Bayside Battleground`},chart:{winRate:`Win Rate`,winCount:`Wins`,defeatCount:`Defeats`,usageRate:`Usage Rate`,matches:`Matches`,noData:`No data available`,noMatchData:`No match data available`,selectJobs:`Select jobs (max 5)`,hour:`{{hour}}:00`,day:{sunday:`Sun`,monday:`Mon`,tuesday:`Tue`,wednesday:`Wed`,thursday:`Thu`,friday:`Fri`,saturday:`Sat`},labels:{character:`Character`,job:`Job`,map:`Map`,date:`Date`,allCharacters:`All Characters`,allJobs:`All Jobs`,allMaps:`All Maps`,jobSelection:`Job Selection (Max 5)`,selectJob:`Select Job`},titles:{dailyWinDefeat:`Daily Win/Defeat and Win Rate Trend`,weeklyWinRate:`Win Rate Comparison by Day of Week`,hourlyWinDefeat:`Win Rate Analysis by Time of Day`,jobUsageRate:`Job Usage Rate`,jobWinRateByMap:`Job Win Rate Comparison by Map`,todayWinDefeatTrend:`Today's Win/Defeat Trend`},axes:{matchCount:`Match Count`,winRatePercent:`Win Rate (%)`,date:`Date`,weekday:`Day of Week`,hour:`Time of Day`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`Usage Count`,usageRatePercent:`Usage Rate`,win:`Win`,lose:`Defeat`,total:`Total`,matches:`Matches`,noMatchData:`No match data`},weekdays:{sunday:`Sunday`,monday:`Monday`,tuesday:`Tuesday`,wednesday:`Wednesday`,thursday:`Thursday`,friday:`Friday`,saturday:`Saturday`},todayTrend:{match:`Match #{{number}}`,winRate:`Win Rate`,winCount:`Wins`,winDifference:`Win Difference`,record:`Record`,matches:`matches`,matchNumber:`Matches`,noData:`No match data available for today`}},language:{current:`English`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`Switch Language`}}},ko:{translation:{common:{appName:`크리스탈 컨플릭트 전적 기록`,confirm:`확인`,upload:`업로드`,cancel:`취소`,delete:`삭제`,edit:`편집`,save:`저장`,close:`닫기`,add:`추가`,back:`뒤로`,loading:`로딩 중...`,processing:`처리 중...`,closeDialog:`대화상자 닫기`,error:`오류가 발생했습니다`,noData:`데이터가 없습니다`,success:`성공`,warning:`경고`,info:`정보`,menu:`메뉴`,toggleTheme:`테마 전환`,switchToDarkMode:`다크 모드로 전환`,switchToLightMode:`라이트 모드로 전환`,buildUpdate:{message:`새 버전을 사용할 수 있습니다`,reload:`새로고침`}},navigation:{home:`홈`,graphs:`그래프`,histories:`기록`,faq:`FAQ`},pages:{home:{title:`{{seasonName}} 전적`,description:`전적과 통계 정보를 입력합니다.`,createSeason:`새 시즌 만들기`,noSeason:`시즌이 생성되지 않았습니다`,createFirstSeason:`첫 번째 시즌을 만들어주세요`,errorOccurred:`오류가 발생했습니다`},graphs:{title:`전적 그래프`,description:`현재 시즌 전적을 그래프 형식으로 시각화합니다.`,descriptionWithSeason:`{{seasonName}} 전적을 그래프 형식으로 시각화합니다.`,daily:`일별 승부`,hourly:`시간별 승률`,weekly:`요일별 승률`,jobWinRate:`잡별 승률`,jobUsage:`잡 사용률`,filters:{character:`캐릭터`,job:`잡`,map:`맵`,all:`전체`}},histories:{title:`히스토리 목록`,description:`과거 시즌 목록을 표시하고 관리합니다. 각 시즌의 세부정보는 상세 버튼에서 확인할 수 있습니다.`,totalSeasons:`총 시즌 수: {{count}}개`,totalMatches:`총 경기 수: {{count}}`,latestCreated:`최근 생성`,detail:`상세`,delete:`삭제`,confirmDelete:`시즌 삭제`,deleteDescription:`"{{seasonName}}"을(를) 삭제하시겠습니까?
이 작업은 취소할 수 없습니다.`,emptyState:`히스토리가 없습니다`,stats:`시즌`,createBackup:`백업 생성`,importBackup:`백업 가져오기`,importBackupWarningTitle:`백업 가져오기`,importBackupWarningMessage:`현재 데이터가 백업 데이터로 덮어씌워집니다. 이 작업은 취소할 수 없습니다. 계속하시겠습니까?`,backupCreated:`백업이 생성되었습니다`,backupRestored:`백업이 복원되었습니다`,errors:{loadFailed:`히스토리 로드에 실패했습니다`,alreadyExists:`시즌 "{{seasonName}}"은(는) 이미 존재합니다`,notFound:`지정된 히스토리를 찾을 수 없습니다`,characterNotFound:`지정된 캐릭터를 찾을 수 없습니다`,deleteMatchRecordsFailed:`시즌 {{uuid}}의 매치 기록 삭제 중 오류가 발생했습니다`,loadMatchRecordsFailed:`시즌 {{seasonUuid}}의 매치 기록 로드 중 오류가 발생했습니다`,backupCreateFailed:`백업 생성에 실패했습니다`,backupRestoreFailed:`백업 복원에 실패했습니다`,backupFileCorrupted:`백업 파일이 손상되었습니다`}},historyDetail:{title:`{{seasonName}} 상세`,description:`시즌의 모든 전적을 표시하고 있습니다.`,backToList:`기록 목록으로 돌아가기`,totalMatches:`{{count}}경기 전적`,matchesCount:`경기 수`,winRate:`승률`,overall:`전체`,createdDate:`생성일`,searchPlaceholder:`캐릭터명, 잡, 날짜로 검색...`,columns:{season:`시즌명`,character:`캐릭터명`,job:`사용 잡`,map:`맵`,result:`결과`,date:`생성일시`},results:{win:`Win`,defeat:`Defeat`},emptyState:`전적이 기록되지 않았습니다`},newSeason:{title:`새 시즌 만들기`,description:`새 시즌을 만듭니다. 시즌명을 입력해주세요.`,seasonName:`시즌명`,seasonNamePlaceholder:`예: 시즌 1`,create:`만들기`,creating:`만드는 중...`,cancel:`취소`,confirmTitle:`시즌 생성 확인`,confirmDescription:`새 시즌을 만들면 "{{seasonName}}"의 전적 데이터가 과거 시즌으로 아카이브되고 새로운 전적 입력이 시작됩니다. 계속하시겠습니까?`,validationRequired:`시즌명을 입력해주세요`,validationMaxLength:`시즌명은 {{length}}자 이내로 입력해주세요`,successMessage:`시즌 "{{seasonName}}"을 만들었습니다`},faq:{title:`자주 묻는 질문 (FAQ)`,description:`크리스탈 컨플릭트 전적 기록에 대한 자주 묻는 질문과 답변입니다.`,privacy:{title:`개인정보 및 데이터`,dataStorage:{question:`전적 데이터는 어디에 저장되나요?`,answer:{intro:`모든 전적 데이터는 사용자의 브라우저 로컬 스토리지에만 저장됩니다.`,description:`본 애플리케이션은 다음 방침으로 데이터를 다룹니다:`,points:[`전적 데이터나 개인정보는 일체 서버로 전송되지 않습니다`,`모든 데이터는 브라우저 내에서만 관리됩니다`,`애플리케이션 개발자가 사용자의 전적 데이터에 접근할 수 없습니다`,`데이터 삭제는 브라우저 설정에서 할 수 있습니다`]}},analytics:{question:`Google Analytics에서 무엇을 수집하나요?`,answer:{intro:`본 사이트는 서비스 개선을 위해 Google Analytics를 사용합니다.`,collected:`수집되는 정보:`,collectedPoints:[`접속 통계: 페이지뷰 수, 세션 수, 평균 체류시간 등`,`기술 정보: 브라우저 종류, OS, 화면 크기 등`,`지역 정보: 국가나 지역 수준의 대략적인 위치 정보 (상세 주소 등은 포함되지 않음)`],notCollected:`수집되지 않는 정보:`,notCollectedPoints:[`전적 데이터나 개인 성적 정보`,`캐릭터명이나 기타 개인정보`,`상세한 위치 정보나 주소`],anonymous:`이러한 통계 정보는 익명화되어 있으며, 개인을 특정할 수 없습니다.`}},dataDeletion:{question:`데이터 삭제 방법을 알려주세요`,answer:{intro:`저장된 데이터를 삭제하고 싶은 경우 다음 방법으로 할 수 있습니다:`,methods:[`개별 삭제: 각 페이지에서 "삭제" 버튼 사용`,`완전 삭제: 브라우저 설정에서 사이트 데이터 삭제`],browserMethods:`브라우저에서 데이터 삭제 방법:`,browserSteps:[`Chrome: 설정 → 개인정보 및 보안 → 사이트 데이터`,`Firefox: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터`,`Safari: 환경설정 → 개인정보 보호 → 웹사이트 데이터 관리`]}}},usage:{title:`애플리케이션 사용법`,backup:{question:`데이터 백업 방법을 알려주세요`,answer:{intro:`히스토리 페이지에서 데이터 백업 및 복원을 할 수 있습니다:`,backup:`백업 생성:`,backupSteps:[`히스토리 페이지 우측 상단의 "백업 생성" 버튼 클릭`,`자동으로 ZIP 파일이 다운로드됩니다`,`파일명은 "cc-war-record-backup-날짜시간.zip" 형식으로 저장됩니다`],restore:`백업 복원:`,restoreSteps:[`히스토리 페이지 우측 상단의 "백업에서 복원" 버튼 클릭`,`저장된 ZIP 파일 선택`,`데이터가 복원되고 페이지가 자동으로 새로고침됩니다`],includes:`백업에 포함되는 데이터:`,includesItems:[`캐릭터 정보`,`경기 기록 (전체 시즌)`,`시즌 히스토리`,`레이더 차트 설정`],note:`※ 백업 파일은 안전한 장소에 보관하세요`}},dataDefeat:{question:`데이터가 사라질 수 있나요?`,answer:{intro:`로컬 스토리지에 저장된 데이터는 다음의 경우 삭제될 수 있습니다:`,causes:[`브라우저 캐시 삭제 시`,`브라우저 설정에서 사이트 데이터를 삭제한 경우`,`프라이빗 브라우징 모드 사용 시`,`디바이스 용량 부족 시 (브라우저가 자동 삭제하는 경우)`],recommendation:`중요한 데이터는 정기적으로 백업을 받는 것을 권장합니다.`}},dataSyncing:{question:`여러 브라우저에서 데이터를 공유할 수 있나요?`,answer:{limitation:`죄송하지만 현재로서는 브라우저 간 데이터 동기화 기능을 제공하지 않습니다.`,explanation:`각 브라우저의 로컬 스토리지는 독립적이므로, 데이터는 사용한 브라우저에서만 이용 가능합니다.`,workaround:`다만, 백업 기능을 사용하면 다른 브라우저나 디바이스로 데이터를 이전할 수 있습니다.`}}},copyright:{disclaimer:`이 애플리케이션은 팬이 만든 비공식 도구이며, 주식회사 스퀘어 에닉스와는 일체 관계가 없습니다.`}},notFound:{title:`페이지를 찾을 수 없음`,description:`찾으시는 페이지가 존재하지 않거나 삭제되었을 수 있습니다.`,backToHome:`홈으로 돌아가기`}},character:{name:`캐릭터 이름`,create:`캐릭터 생성`,createSuccess:`캐릭터 "{{name}}"을(를) 생성했습니다`,edit:`캐릭터 이름 편집`,delete:`캐릭터 삭제`,confirmDelete:`삭제`,moveUp:`위로 이동`,moveDown:`아래로 이동`,deleteDescription:`캐릭터 "{{name}}"을(를) 삭제하시겠습니까?<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ 관련된 모든 전적 기록도 삭제됩니다. 이 작업은 취소할 수 없습니다.</span>`,namePlaceholder:`캐릭터 이름 입력`,validationRequired:`캐릭터 이름을 입력해주세요`,emptyState:`캐릭터가 없습니다`,createFirst:`첫 번째 캐릭터를 생성하세요`,errors:{alreadyExists:`캐릭터 "{{name}}"은(는) 이미 존재합니다`,notFound:`캐릭터를 찾을 수 없습니다`,loadFailed:`데이터 로드에 실패했습니다`,matchRecordNotFound:`전적 기록을 찾을 수 없습니다`},stats:{matches:`{{count}}경기`,totalMatches:`{{count}}경기`,winRate:`승률{{rate}}%`,noWinRate:`승률--%`,wins:`{{count}}승`,defeats:`{{count}}패`},actions:{addJob:`잡 추가`,editName:`이름 편집`,deleteName:`캐릭터 삭제`,more:`더보기`}},match:{record:`전적 기록`,job:`잡`,map:`맵`,result:`결과`,win:`승리 수`,defeat:`패배 수`,memo:`메모`,memoPlaceholder:`메모를 입력하세요 (선택사항)`,selectJob:`잡을 선택해주세요`,selectMap:`맵을 선택해주세요`,recorded:`전적이 기록되었습니다`,totalMatches:`경기 수`,winRate:`승률`,allStagesTotal:`전체 스테이지 합계`,actions:`작업`,pleaseRegisterJob:`잡을 등록해주세요`,recentMatches:`최근 전적`,deleteMatch:`전적 삭제`,confirmDelete:`전적 삭제`,confirmDeleteButton:`삭제`,deleteConfirmation:`{{characterName}}의 {{date}} 전적을 삭제하시겠습니까?
이 작업은 취소할 수 없습니다.`,addWin:`승리 기록`,addDefeat:`패배 기록`,rollback:`마지막 기록 취소`},job:{select:`잡 선택`,selectJob:`사용할 잡 선택`,selectJobDescription:`잡을 선택해주세요`,tank:`탱커`,healer:`힐러`,meleeDps:`근접 DPS`,melee_dps:`근접 DPS`,physicalRangedDps:`물리 원거리 DPS`,physical_ranged_dps:`물리 원거리 DPS`,magicalRangedDps:`마법 원거리 DPS`,magical_ranged_dps:`마법 원거리 DPS`,PLD:`나이트`,WAR:`전사`,DRK:`암흑기사`,GNB:`건브레이커`,WHM:`백마도사`,SCH:`학자`,AST:`점성술사`,SGE:`현자`,MNK:`몽크`,DRG:`용기사`,NIN:`닌자`,SAM:`사무라이`,RPR:`리퍼`,VPR:`바이퍼`,BRD:`음유시인`,MCH:`기공사`,DNC:`무도가`,BLM:`흑마도사`,SMN:`소환사`,RDM:`적마도사`,PCT:`픽토맨서`},maps:{THE_PALAISTRA:`팔라이스트라`,VOLCANIC_HEART:`화산의 심장부`,CLOUD_NINE:`클라우드 나인`,TOUHOU_KARAKURI_GOTEN:`동방 기믹 저택`,RED_SANDS:`붉은 사막 지대`,BAYSIDE_BATTLEGROUND:`베이사이드 배틀그라운드`},chart:{winRate:`승률`,winCount:`승리 수`,defeatCount:`패배 수`,usageRate:`사용률`,matches:`경기 수`,noData:`데이터가 없습니다`,noMatchData:`경기 데이터가 없습니다`,selectJobs:`잡 선택 (최대 5개)`,hour:`{{hour}}시`,day:{sunday:`일`,monday:`월`,tuesday:`화`,wednesday:`수`,thursday:`목`,friday:`금`,saturday:`토`},labels:{character:`캐릭터`,job:`잡`,map:`맵`,allCharacters:`모든 캐릭터`,allJobs:`모든 잡`,allMaps:`모든 맵`,jobSelection:`잡 선택 (최대 5개)`,selectJob:`잡 선택`},titles:{dailyWinDefeat:`일별 승패 및 승률 추이`,weeklyWinRate:`요일별 승률 비교`,hourlyWinDefeat:`시간대별 승률 분석`,jobUsageRate:`잡 사용률`,jobWinRateByMap:`맵별 잡 승률 비교`},axes:{matchCount:`대전 횟수`,winRatePercent:`승률 (%)`,date:`날짜`,weekday:`요일`,hour:`시간대`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`사용 횟수`,usageRatePercent:`사용률`,win:`Win`,lose:`Defeat`,total:`합계`,matches:`경기`,noMatchData:`경기 데이터 없음`},weekdays:{sunday:`일요일`,monday:`월요일`,tuesday:`화요일`,wednesday:`수요일`,thursday:`목요일`,friday:`금요일`,saturday:`토요일`}},language:{current:`한국어`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`언어 변경`}}}},fallbackLng:`en`,debug:!1,detection:{order:[`localStorage`,`navigator`,`htmlTag`],caches:[`localStorage`]},interpolation:{escapeValue:!1},defaultNS:`translation`,ns:[`translation`]}),oe.on(`languageChanged`,e=>{document.documentElement.lang=e}),(()=>{if(`serviceWorker`in navigator){let e=`/cc-war-record`,t=e.endsWith(`/`)?e:`${e}/`,n=`${t}sw.js`;window.addEventListener(`load`,()=>{navigator.serviceWorker.register(n,{scope:t}).then(e=>{console.log(`ServiceWorker registered:`,e.scope)}).catch(e=>{console.error(`ServiceWorker registration failed:`,e)})})}})(),(0,le.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(x.StrictMode,{children:(0,b.jsx)(({children:e})=>(0,b.jsx)(Nt,{children:(0,b.jsx)(Mi,{children:e})}),{children:(0,b.jsx)(ki,{})})}));export{Qe as $,q as A,F as B,X as C,It as D,J as E,vt as F,P as G,ut as H,mt as I,N as J,at as K,pt as L,wt as M,xt as N,Ft as O,_t as P,nt as Q,dt as R,hn as S,Jt as T,L as U,I as V,lt as W,tt as X,rt as Y,it as Z,Z as _,ti as a,k as at,gn as b,Q as c,_e as ct,Jn as d,et,Yn as f,Gn as g,Bn as h,si as i,A as it,Tt as j,Et as k,qn as l,S as lt,Vn as m,oi as n,Ze as nt,br as o,w as ot,Kn as p,M as q,ci as r,j as rt,nr as s,C as st,li as t,$e as tt,Xn as u,yn as v,sn as w,vn as x,_n as y,R as z};