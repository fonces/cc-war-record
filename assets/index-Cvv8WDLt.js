const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/new-DMAW7y_9.js","assets/react-vendor-D1pS86Oe.js","assets/rolldown-runtime-CIDIeb-o.js","assets/graphs-BnLQJXPN.js","assets/faq-CL-9mdyj.js","assets/routes-BfZNbpFG.js","assets/histories-DcV9mgWy.js","assets/_id-BNHuUPta.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{C as t,T as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,o as f,p,s as ee,u as te,v as ne,w as m,x as re}from"./react-vendor-D1pS86Oe.js";import{a as h,i as g,n as _,r as ie,s as ae,t as oe}from"./styled-DX7-lrl4.js";import{t as se}from"./jszip-DU7jsDXX.js";import{n as ce,t as le}from"./i18n-THkEc1_o.js";import{t as ue}from"./vendor-DeEjTzyN.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var v=e(re()),de=e(t()),fe=e(m()),y=e(n()),pe=`modulepreload`,me=function(e){return`/cc-war-record/`+e},b={};const x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=me(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:pe,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var he=h`
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
`,ge=h`
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
`,_e=_.span`
  display: inline-block;
  position: relative;
  animation: ${({$direction:e})=>e===`up`?g`
            ${he}
          `:g`
            ${ge}
          `}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;const ve=(0,y.memo)(({children:e,suffix:t})=>{let n=(0,y.useRef)(e),[r,i]=(0,y.useState)(`up`);return(0,y.useEffect)(()=>{n.current!==e&&(i(e>n.current?`up`:`down`),n.current=e)},[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_e,{$direction:r,children:e},`${e}`),t]})});ve.displayName=`AnimatedNumber`;var ye=_.button`
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
`;const S=(0,y.memo)(({children:e,icon:t,...n})=>(0,v.jsx)(ye,{...n,icon:t,children:t||e}));S.displayName=`Button`;var be=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({fit:e})=>e&&`width: fit-content;`}
`,xe=_.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Se=_.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Ce=_.div`
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
`,we=_.input`
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
`,Te=_.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.error[500]};
`;const C=(0,y.memo)((0,y.forwardRef)(({label:e,error:t,fullWidth:n,inputSize:r=`md`,icon:i,...a},o)=>(0,v.jsxs)(be,{fit:!!i,fullWidth:n,children:[e&&(0,v.jsx)(xe,{children:e}),(0,v.jsxs)(Se,{children:[(0,v.jsx)(we,{ref:o,hasError:!!t,inputSize:r,hasIcon:!!i,...a}),i&&(0,v.jsx)(Ce,{children:i})]}),t&&(0,v.jsx)(Te,{children:t})]})));C.displayName=`Input`;const Ee=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,v.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,v.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]}),w=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,v.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),De=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`path`,{d:`m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),(0,v.jsx)(`polyline`,{points:`9,22 9,12 15,12 15,22`})]}),Oe=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,v.jsx)(`polyline`,{points:`12,6 12,12 16,14`})]}),ke=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`line`,{x1:`18`,y1:`20`,x2:`18`,y2:`10`}),(0,v.jsx)(`line`,{x1:`12`,y1:`20`,x2:`12`,y2:`4`}),(0,v.jsx)(`line`,{x1:`6`,y1:`20`,x2:`6`,y2:`14`})]}),Ae=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`path`,{d:`m18 2 4 4-18 18H0v-4L18 2z`}),(0,v.jsx)(`path`,{d:`m14.5 5.5 4 4`})]}),je=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,v.jsx)(`polyline`,{points:`20,6 9,17 4,12`})}),Me=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),(0,v.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})]}),Ne=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`polyline`,{points:`3,6 5,6 21,6`}),(0,v.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}),(0,v.jsx)(`line`,{x1:`10`,y1:`11`,x2:`10`,y2:`17`}),(0,v.jsx)(`line`,{x1:`14`,y1:`11`,x2:`14`,y2:`17`})]}),Pe=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,v.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})}),Fe=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`polyline`,{points:`1,4 1,10 7,10`}),(0,v.jsx)(`path`,{d:`M3.51 15a9 9 0 1 0 2.13-9.36L1 10`})]}),Ie=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,v.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,v.jsx)(`polyline`,{points:`14,2 14,8 20,8`}),(0,v.jsx)(`line`,{x1:`16`,y1:`13`,x2:`8`,y2:`13`}),(0,v.jsx)(`line`,{x1:`16`,y1:`17`,x2:`8`,y2:`17`}),(0,v.jsx)(`polyline`,{points:`10,9 9,9 8,9`})]}),Le=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,v.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`}),(0,v.jsx)(`polyline`,{points:`12,19 5,12 12,5`})]}),Re=()=>(0,v.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,v.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,v.jsx)(`line`,{x1:`2`,y1:`12`,x2:`22`,y2:`12`}),(0,v.jsx)(`path`,{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),ze=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,v.jsx)(`path`,{d:`M7 10l5 5 5-5z`})}),Be=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,v.jsx)(`path`,{d:`M12 19V5M5 12L12 5L19 12`,strokeLinecap:`round`,strokeLinejoin:`round`})}),Ve=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,v.jsx)(`path`,{d:`M12 5V19M19 12L12 19L5 12`,strokeLinecap:`round`,strokeLinejoin:`round`})}),He=(0,y.memo)(({size:e=24,color:t=`currentColor`})=>(0,v.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,v.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,v.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,v.jsx)(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]}));He.displayName=`DownloadIcon`;const Ue=(0,y.memo)(({size:e=24,color:t=`currentColor`})=>(0,v.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,v.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,v.jsx)(`polyline`,{points:`17 8 12 3 7 8`}),(0,v.jsx)(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`})]}));Ue.displayName=`UploadIcon`;const We=(0,y.memo)(({size:e=24,color:t=`currentColor`})=>(0,v.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,v.jsx)(`path`,{d:`M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,v.jsx)(`path`,{d:`M21 21L16.65 16.65`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}));We.displayName=`SearchIcon`;var Ge=_.div`
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
`;const T=(0,y.memo)(({name:e,size:t=24,color:n,onClick:r,className:i})=>(0,v.jsx)(Ge,{size:t,color:n,onClick:r,className:i,children:(()=>{switch(e){case`hamburger`:return(0,v.jsx)(Ee,{});case`close`:return(0,v.jsx)(w,{});case`home`:return(0,v.jsx)(De,{});case`history`:return(0,v.jsx)(Oe,{});case`chart`:return(0,v.jsx)(ke,{});case`edit`:return(0,v.jsx)(Ae,{});case`accept`:return(0,v.jsx)(je,{});case`add`:return(0,v.jsx)(Me,{});case`delete`:return(0,v.jsx)(Ne,{});case`minus`:return(0,v.jsx)(Pe,{});case`revert`:return(0,v.jsx)(Fe,{});case`detail`:return(0,v.jsx)(Ie,{});case`back`:return(0,v.jsx)(Le,{});case`language`:return(0,v.jsx)(Re,{});case`arrowDropDown`:return(0,v.jsx)(ze,{});case`arrowUp`:return(0,v.jsx)(Be,{});case`arrowDown`:return(0,v.jsx)(Ve,{});case`download`:return(0,v.jsx)(He,{});case`upload`:return(0,v.jsx)(Ue,{});case`search`:return(0,v.jsx)(We,{});default:return null}})()}));T.displayName=`Icon`;var Ke=h`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qe=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  position: relative;
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({width:e})=>e&&`width: ${e};`}
`,Je=_.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ye=_.button`
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
`,Xe=_.div`
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
`,Ze=_.div`
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
  animation: ${Ke} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
`,Qe=_.div`
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
`,$e=_.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.error[500]};
`,et=_.select`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;const tt=(0,y.memo)(({id:e,label:t,error:n,fullWidth:r,width:i,options:a,value:o,onChange:s,disabled:c})=>{let[l,u]=(0,y.useState)(!1),d=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&u(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let f=e=>{c||(u(!1),s&&s({target:{value:e}}))},p=a.find(e=>e.value===o)?.label||a[0]?.label||``;return(0,v.jsxs)(qe,{ref:d,fullWidth:r,width:i,children:[t&&(0,v.jsx)(Je,{htmlFor:e,children:t}),(0,v.jsxs)(Ye,{type:`button`,onClick:()=>!c&&u(!l),isOpen:l,hasError:!!n,disabled:c,children:[p,(0,v.jsx)(Xe,{isOpen:l,children:(0,v.jsx)(T,{name:`arrowDropDown`,size:24})})]}),(0,v.jsx)(Ze,{isOpen:l,children:a.map(e=>(0,v.jsx)(Qe,{onClick:()=>f(e.value),isSelected:e.value===o,children:e.label},e.value))}),(0,v.jsx)(et,{id:e,value:o,onChange:s,disabled:c,tabIndex:-1,children:a.map(e=>(0,v.jsx)(`option`,{value:e.value,children:e.label},e.value))}),n&&(0,v.jsx)($e,{children:n})]})});tt.displayName=`Select`;const nt=(e,t,n=600)=>e>=51?t.colors.success[n]:e>=40?t.colors.warning[n]:t.colors.error[n],rt=()=>new Date().toISOString(),it=(e,t,n)=>{let r=new Date(e);if(!t){let e=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,`0`),n=String(r.getDate()).padStart(2,`0`),i=String(r.getHours()).padStart(2,`0`),a=String(r.getMinutes()).padStart(2,`0`);return`${e}-${t}-${n} ${i}:${a}`}return r.toLocaleDateString(t,n)},at=(e,t)=>new Date(e).toLocaleDateString(t,{month:`numeric`,day:`numeric`}),ot=(e,t)=>new Date(e).toLocaleDateString(t,{year:`numeric`,month:`long`,day:`numeric`}),E=e=>e.length,D=e=>e.filter(e=>e.isWin).length,st=e=>e.filter(e=>!e.isWin).length,ct=e=>{let t=E(e);if(t===0)return 0;let n=D(e);return Math.round(n/t*100)},O={TANK:`tank`,HEALER:`healer`,MELEE_DPS:`melee_dps`,PHYSICAL_RANGED_DPS:`physical_ranged_dps`,MAGICAL_RANGED_DPS:`magical_ranged_dps`},k={[O.TANK]:{code:O.TANK,name:`タンク`,nameEn:`Tank`,color:`#3b82f6`},[O.HEALER]:{code:O.HEALER,name:`ヒーラー`,nameEn:`Healer`,color:`#10b981`},[O.MELEE_DPS]:{code:O.MELEE_DPS,name:`近接DPS`,nameEn:`MeleeDPS`,color:`#f59e0b`},[O.PHYSICAL_RANGED_DPS]:{code:O.PHYSICAL_RANGED_DPS,name:`物理遠隔DPS`,nameEn:`PhysicalRangedDPS`,color:`#8b5cf6`},[O.MAGICAL_RANGED_DPS]:{code:O.MAGICAL_RANGED_DPS,name:`魔法遠隔DPS`,nameEn:`MagicalRangedDPS`,color:`#ef4444`}},A={PALADIN:`PLD`,WARRIOR:`WAR`,DARK_KNIGHT:`DRK`,GUNBREAKER:`GNB`,WHITE_MAGE:`WHM`,SCHOLAR:`SCH`,ASTROLOGIAN:`AST`,SAGE:`SGE`,MONK:`MNK`,DRAGOON:`DRG`,NINJA:`NIN`,SAMURAI:`SAM`,REAPER:`RPR`,VIPER:`VPR`,BARD:`BRD`,MACHINIST:`MCH`,DANCER:`DNC`,BLACK_MAGE:`BLM`,SUMMONER:`SMN`,RED_MAGE:`RDM`,PICTOMANCER:`PCT`},j={[A.PALADIN]:{code:A.PALADIN,name:`ナイト`,nameEn:`Paladin`,shortName:`PLD`,role:O.TANK,iconId:19,color:`#5EADDC`},[A.WARRIOR]:{code:A.WARRIOR,name:`戦士`,nameEn:`Warrior`,shortName:`WAR`,role:O.TANK,iconId:21,color:`#CF2621`},[A.DARK_KNIGHT]:{code:A.DARK_KNIGHT,name:`暗黒騎士`,nameEn:`DarkKnight`,shortName:`DRK`,role:O.TANK,iconId:32,color:`#D126CC`},[A.GUNBREAKER]:{code:A.GUNBREAKER,name:`ガンブレイカー`,nameEn:`Gunbreaker`,shortName:`GNB`,role:O.TANK,iconId:37,color:`#9C8542`},[A.WHITE_MAGE]:{code:A.WHITE_MAGE,name:`白魔道士`,nameEn:`WhiteMage`,shortName:`WHM`,role:O.HEALER,iconId:24,color:`#E6D8BC`},[A.SCHOLAR]:{code:A.SCHOLAR,name:`学者`,nameEn:`Scholar`,shortName:`SCH`,role:O.HEALER,iconId:28,color:`#8657FF`},[A.ASTROLOGIAN]:{code:A.ASTROLOGIAN,name:`占星術師`,nameEn:`Astrologian`,shortName:`AST`,role:O.HEALER,iconId:33,color:`#E6C84A`},[A.SAGE]:{code:A.SAGE,name:`賢者`,nameEn:`Sage`,shortName:`SGE`,role:O.HEALER,iconId:40,color:`#8FD14F`},[A.MONK]:{code:A.MONK,name:`モンク`,nameEn:`Monk`,shortName:`MNK`,role:O.MELEE_DPS,iconId:20,color:`#D69C00`},[A.DRAGOON]:{code:A.DRAGOON,name:`竜騎士`,nameEn:`Dragoon`,shortName:`DRG`,role:O.MELEE_DPS,iconId:22,color:`#4164CD`},[A.NINJA]:{code:A.NINJA,name:`忍者`,nameEn:`Ninja`,shortName:`NIN`,role:O.MELEE_DPS,iconId:30,color:`#AF1964`},[A.SAMURAI]:{code:A.SAMURAI,name:`侍`,nameEn:`Samurai`,shortName:`SAM`,role:O.MELEE_DPS,iconId:34,color:`#E46D04`},[A.REAPER]:{code:A.REAPER,name:`リーパー`,nameEn:`Reaper`,shortName:`RPR`,role:O.MELEE_DPS,iconId:39,color:`#965A90`},[A.VIPER]:{code:A.VIPER,name:`ヴァイパー`,nameEn:`Viper`,shortName:`VPR`,role:O.MELEE_DPS,iconId:41,color:`#B07830`},[A.BARD]:{code:A.BARD,name:`吟遊詩人`,nameEn:`Bard`,shortName:`BRD`,role:O.PHYSICAL_RANGED_DPS,iconId:23,color:`#91BA5E`},[A.MACHINIST]:{code:A.MACHINIST,name:`機工士`,nameEn:`Machinist`,shortName:`MCH`,role:O.PHYSICAL_RANGED_DPS,iconId:31,color:`#6EE1D6`},[A.DANCER]:{code:A.DANCER,name:`踊り子`,nameEn:`Dancer`,shortName:`DNC`,role:O.PHYSICAL_RANGED_DPS,iconId:38,color:`#D98B8A`},[A.BLACK_MAGE]:{code:A.BLACK_MAGE,name:`黒魔道士`,nameEn:`BlackMage`,shortName:`BLM`,role:O.MAGICAL_RANGED_DPS,iconId:25,color:`#A579D6`},[A.SUMMONER]:{code:A.SUMMONER,name:`召喚士`,nameEn:`Summoner`,shortName:`SMN`,role:O.MAGICAL_RANGED_DPS,iconId:27,color:`#2D9B78`},[A.RED_MAGE]:{code:A.RED_MAGE,name:`赤魔道士`,nameEn:`RedMage`,shortName:`RDM`,role:O.MAGICAL_RANGED_DPS,iconId:35,color:`#E87B7B`},[A.PICTOMANCER]:{code:A.PICTOMANCER,name:`ピクトマンサー`,nameEn:`Pictomancer`,shortName:`PCT`,role:O.MAGICAL_RANGED_DPS,iconId:42,color:`#D4C05C`}},M=e=>j[e],lt=e=>{let t=M(e);if(!t)return``;let n=``;switch(t.role){case O.TANK:n=`01_TANK`;break;case O.HEALER:n=`02_HEALER`;break;case O.MELEE_DPS:case O.PHYSICAL_RANGED_DPS:case O.MAGICAL_RANGED_DPS:n=`03_DPS`;break}return`/cc-war-record/img/${n}/Job/${t.nameEn}.png`},ut=e=>{let t=``;switch(e){case O.TANK:t=`TankRole`;break;case O.HEALER:t=`HealerRole`;break;case O.MELEE_DPS:t=`MeleeDPS`;break;case O.PHYSICAL_RANGED_DPS:t=`PhysicalRangedDPS`;break;case O.MAGICAL_RANGED_DPS:t=`MagicalRangedDPS`;break}return`/cc-war-record/img/00_ROLE/${t}.png`};O.TANK,O.HEALER,O.MELEE_DPS,O.PHYSICAL_RANGED_DPS,O.MAGICAL_RANGED_DPS,O.TANK,O.HEALER,O.MELEE_DPS,O.PHYSICAL_RANGED_DPS,O.MAGICAL_RANGED_DPS;const dt=e=>{let t=Object.values(A);return e.sort((e,n)=>t.indexOf(e)-t.indexOf(n))},N={BUILD_TIMESTAMP:`app-build-timestamp`,THEME:`cc-war-record-theme`,CHARACTERS:`cc-war-record-characters`,MATCH_RECORDS:`cc-war-record-match-records`,HISTORIES:`cc-war-record-histories`,HISTORY:"histories-${uuid}",RADAR_CHART_JOBS:`cc-war-record:radar-chart-jobs`},P=(e,t)=>{try{if(typeof window>`u`)return t;let n=window.localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch(n){return console.error(`Error reading from localStorage (key: ${e}):`,n),t}},F=(e,t)=>{try{if(typeof window>`u`)return;window.localStorage.setItem(e,JSON.stringify(t))}catch(t){console.error(`Error writing to localStorage (key: ${e}):`,t)}},ft=e=>{try{if(typeof window>`u`)return;window.localStorage.removeItem(e)}catch(t){console.error(`Error removing from localStorage (key: ${e}):`,t)}},I={THE_PALAISTRA:`THE_PALAISTRA`,VOLCANIC_HEART:`VOLCANIC_HEART`,CLOUD_NINE:`CLOUD_NINE`,TOUHOU_KARAKURI_GOTEN:`TOUHOU_KARAKURI_GOTEN`,RED_SANDS:`RED_SANDS`,BAYSIDE_BATTLEGROUND:`BAYSIDE_BATTLEGROUND`},L={ARENA:`arena`,SKY:`sky`,VOLCANIC:`volcanic`,WATER:`water`,CASTLE:`castle`,URBAN:`urban`,DESERT:`desert`},R={SMALL:`small`,MEDIUM:`medium`,LARGE:`large`},z={CENTRAL_CRYSTAL:`central_crystal`,MULTI_LEVEL:`multi_level`,NARROW_PATHS:`narrow_paths`,OPEN_AREA:`open_area`,ENVIRONMENTAL_HAZARDS:`environmental_hazards`,VERTICAL_MOVEMENT:`vertical_movement`};I.THE_PALAISTRA,I.THE_PALAISTRA,L.ARENA,R.MEDIUM,z.CENTRAL_CRYSTAL,z.OPEN_AREA,I.VOLCANIC_HEART,I.VOLCANIC_HEART,L.VOLCANIC,R.MEDIUM,z.ENVIRONMENTAL_HAZARDS,z.CENTRAL_CRYSTAL,I.CLOUD_NINE,I.CLOUD_NINE,L.SKY,R.LARGE,z.MULTI_LEVEL,z.VERTICAL_MOVEMENT,I.TOUHOU_KARAKURI_GOTEN,I.TOUHOU_KARAKURI_GOTEN,L.CASTLE,R.MEDIUM,z.MULTI_LEVEL,z.NARROW_PATHS,z.ENVIRONMENTAL_HAZARDS,I.RED_SANDS,I.RED_SANDS,L.DESERT,R.LARGE,z.OPEN_AREA,z.ENVIRONMENTAL_HAZARDS,I.BAYSIDE_BATTLEGROUND,I.BAYSIDE_BATTLEGROUND,L.WATER,R.LARGE,z.OPEN_AREA,z.CENTRAL_CRYSTAL,z.ENVIRONMENTAL_HAZARDS;const pt=(e,t)=>t(`maps.${e}`);var B=[I.THE_PALAISTRA,I.VOLCANIC_HEART,I.TOUHOU_KARAKURI_GOTEN,I.BAYSIDE_BATTLEGROUND,I.CLOUD_NINE,I.RED_SANDS],V=new Date(`2022-01-01T00:00:00+09:00`),H=5400*1e3;const U=(e=new Date)=>{let t=e.getTime()-V.getTime(),n=Math.floor(t/H)%B.length;return B[n]},W=(e=new Date)=>{let t=e.getTime()-V.getTime(),n=(Math.floor(t/H)%B.length+1)%B.length;return B[n]},mt=(e=new Date)=>{let t=(e.getTime()-V.getTime())%H,n=H-t;return new Date(e.getTime()+n)},ht=()=>`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e===`x`?t:t&3|8).toString(16)}),gt=()=>{if(typeof window>`u`)return 0;let e=document.createElement(`div`);e.style.visibility=`hidden`,e.style.overflow=`scroll`,e.style.width=`100px`,e.style.position=`absolute`,e.style.top=`-9999px`,document.body.appendChild(e);let t=document.createElement(`div`);t.style.width=`100%`,e.appendChild(t);let n=e.offsetWidth-t.offsetWidth;return document.body.removeChild(e),n};var G=e(se()),_t=[N.CHARACTERS,N.MATCH_RECORDS,N.HISTORIES,N.RADAR_CHART_JOBS];const vt=async()=>{let e=new G.default;_t.forEach(t=>{let n=localStorage.getItem(t);if(n){let r=`${t.replace(/^cc-war-record[-:]?/,``)}.json`;e.file(r,n)}});let t=[];for(let e=0;e<localStorage.length;e++){let n=localStorage.key(e);n?.startsWith(`histories-`)&&t.push(n)}t.forEach(t=>{let n=localStorage.getItem(t);n&&e.file(`${t}.json`,n)});let n=await e.generateAsync({type:`blob`}),r=`cc-war-record-backup-${new Date().toISOString().replace(/[-:]/g,``).replace(/\.\d{3}Z$/,``).replace(`T`,`-`)}.zip`,i=URL.createObjectURL(n),a=document.createElement(`a`);a.href=i,a.download=r,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},yt=async e=>{let t=await new G.default().loadAsync(e),n=new Set,r=[`characters`,`match-records`,`histories`,`radar-chart-jobs`],i=new Map,a=[];t.forEach((e,t)=>{if(t.dir)return;let o=e.replace(/\.json$/,``);if(!(o.startsWith(`histories-`)||r.some(e=>o===e)))throw Error(`BACKUP_FILE_CORRUPTED`);n.add(o),a.push((async()=>{let e=await t.async(`text`);try{JSON.parse(e)}catch{throw Error(`BACKUP_FILE_CORRUPTED`)}let n;n=o.startsWith(`histories-`)?o:o.includes(`:`)?`cc-war-record:${o}`:`cc-war-record-${o}`,i.set(n,localStorage.getItem(n)),localStorage.setItem(n,e)})())});try{await Promise.all(a)}catch(e){throw i.forEach((e,t)=>{e===null?localStorage.removeItem(t):localStorage.setItem(t,e)}),e}};var bt=_.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: contain;
  display: inline-block;
  filter: brightness(1.25);
`,xt=_.div`
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
`;const K=(0,y.memo)(({job:e,size:t=32,alt:n,className:r})=>{let i=lt(e),a=e,o=e=>{let t=M(e);return t?t.color:`#6B7280`};return i?(0,v.jsx)(bt,{src:i,alt:n||e,size:t,className:r,onError:i=>{let s=i.target;s.style.display=`none`;let c=document.createElement(`div`);c.className=r||``,c.style.cssText=`
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
        `,c.textContent=a,c.title=n||e,s.parentNode&&s.parentNode.insertBefore(c,s)}}):(0,v.jsx)(xt,{size:t,bgColor:o(e),className:r,title:n||e,children:a})});K.displayName=`JobIcon`;var St=_.img`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  object-fit: contain;
  display: inline-block;
`,Ct=_.div`
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
`;const q=(0,y.memo)(({role:e,size:t=32,alt:n,className:r})=>{let i=ut(e),a=k[e]?.name||e,o=e=>{let t=k[e];return t?t.color:`#6B7280`};return i?(0,v.jsx)(St,{src:i,alt:n||a,size:t,className:r,onError:i=>{let s=i.target;s.style.display=`none`;let c=document.createElement(`div`);c.className=r||``,c.style.cssText=`
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
        `,c.textContent=a,c.title=n||a,s.parentNode&&s.parentNode.insertBefore(c,s)}}):(0,v.jsx)(Ct,{size:t,bgColor:o(e),className:r,title:n||a,children:a})});q.displayName=`RoleIcon`;const wt=()=>{let[e,t]=(0,y.useState)(()=>U()),[n,r]=(0,y.useState)(()=>W());return(0,y.useEffect)(()=>{t(U()),r(W());let e=()=>{let n=new Date,i=mt(n).getTime()-n.getTime();return setTimeout(()=>{t(U()),r(W()),e()},i)},n=e();return()=>{clearTimeout(n)}},[]),{currentMap:e,nextMap:n}},J=()=>{let{t:e,i18n:t}=f();return{t:e,i18n:t,currentLanguage:t.language,changeLanguage:e=>t.changeLanguage(e),isLanguage:e=>t.language===e}},Tt=e=>{let{t}=J();(0,y.useEffect)(()=>{let n=t(`common.appName`);return document.title=e?`${n} - ${e}`:n,()=>{document.title=n}},[e,t])},Et=e=>{(0,y.useEffect)(()=>{if(e){let e=window.innerWidth-document.documentElement.clientWidth,t=window.scrollY;return document.body.style.overflow=`hidden`,document.body.style.paddingRight=`${e}px`,document.body.style.position=`fixed`,document.body.style.top=`-${t}px`,document.body.style.width=`100%`,()=>{document.body.style.overflow=``,document.body.style.paddingRight=``,document.body.style.position=``,document.body.style.top=``,document.body.style.width=``,window.scrollTo(0,t)}}},[e])};var Dt={isLight:!1,isDark:!1,breakpoints:{sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},spacing:{0:`0`,1:`0.25rem`,2:`0.5rem`,3:`0.75rem`,4:`1rem`,5:`1.25rem`,6:`1.5rem`,8:`2rem`,10:`2.5rem`,12:`3rem`,16:`4rem`,20:`5rem`,24:`6rem`},borderRadius:{none:`0`,sm:`0.125rem`,default:`0.25rem`,md:`0.375rem`,lg:`0.5rem`,xl:`0.75rem`,"2xl":`1rem`,"3xl":`1.5rem`,full:`9999px`},transitions:{fast:`150ms cubic-bezier(0.4, 0, 0.2, 1)`,base:`200ms cubic-bezier(0.4, 0, 0.2, 1)`,slow:`300ms cubic-bezier(0.4, 0, 0.2, 1)`,bounce:`400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`},blur:{sm:`blur(4px)`,md:`blur(8px)`,lg:`blur(12px)`,xl:`blur(16px)`}};const Ot={...Dt,isLight:!0,colors:{primary:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#26A1DF`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`},win:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},defeat:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},error:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},success:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},warning:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`},gray:{50:`#f9fafb`,100:`#f3f4f6`,200:`#e5e7eb`,300:`#d1d5db`,400:`#9ca3af`,500:`#6b7280`,600:`#4b5563`,700:`#374151`,800:`#1f2937`,900:`#111827`},white:`#ffffff`,black:`#000000`,background:`#ffffff`,backgroundSecondary:`#f9fafb`,surface:`rgba(255, 255, 255, 0.95)`,surfaceHover:`rgba(255, 255, 255, 0.98)`,border:`rgba(38, 161, 223, 0.2)`,borderLight:`rgba(38, 161, 223, 0.15)`,text:`#111827`,textSecondary:`#6b7280`,textTertiary:`#9ca3af`,info:`#3b82f6`,transparent:`transparent`},gradients:{primary:`linear-gradient(135deg, #26A1DF 0%, #F36346 100%)`,success:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,danger:`linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,warning:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,glass:`linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,shimmer:`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`},shadows:{xs:`0 1px 2px 0 rgba(0, 0, 0, 0.05)`,sm:`0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.25)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)`,none:`none`,glow:`0 0 20px rgba(38, 161, 223, 0.4)`,glowLg:`0 0 40px rgba(38, 161, 223, 0.6)`}},kt={...Dt,isDark:!0,colors:{primary:{50:`#f0f9ff`,100:`#e0f2fe`,200:`#bae6fd`,300:`#7dd3fc`,400:`#38bdf8`,500:`#26A1DF`,600:`#0284c7`,700:`#0369a1`,800:`#075985`,900:`#0c4a6e`},win:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},defeat:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},error:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`},success:{50:`#f0fdf4`,100:`#dcfce7`,200:`#bbf7d0`,300:`#86efac`,400:`#4ade80`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`},warning:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`},gray:{50:`#18181b`,100:`#27272a`,200:`#3f3f46`,300:`#52525b`,400:`#71717a`,500:`#a1a1aa`,600:`#d4d4d8`,700:`#e4e4e7`,800:`#f4f4f5`,900:`#fafafa`},white:`#000000`,black:`#ffffff`,background:`#0a0a0b`,backgroundSecondary:`#18181b`,surface:`rgba(24, 24, 27, 0.95)`,surfaceHover:`rgba(39, 39, 42, 0.98)`,border:`rgba(38, 161, 223, 0.3)`,borderLight:`rgba(38, 161, 223, 0.2)`,text:`#fafafa`,textSecondary:`#a1a1aa`,textTertiary:`#71717a`,info:`#60a5fa`},gradients:{primary:`linear-gradient(135deg, #26A1DF 0%, #F36346 100%)`,success:`linear-gradient(135deg, #10b981 0%, #059669 100%)`,danger:`linear-gradient(135deg, #ef4444 0%, #dc2626 100%)`,warning:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,glass:`linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,shimmer:`linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`},shadows:{xs:`0 1px 2px 0 rgba(0, 0, 0, 0.3)`,sm:`0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.6)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)`,none:`none`,glow:`0 0 20px rgba(38, 161, 223, 0.5)`,glowLg:`0 0 40px rgba(38, 161, 223, 0.7)`}};var At=(0,y.createContext)(void 0);const jt=()=>{let e=(0,y.useContext)(At);if(!e)throw Error(`useTheme must be used within a ThemeProvider`);return e},Mt=({children:e})=>{let[t,n]=(0,y.useState)(()=>P(N.THEME,`light`));(0,y.useEffect)(()=>{F(N.THEME,t)},[t]);let r=(0,y.useMemo)(()=>({mode:t,toggleMode:()=>n(e=>e===`light`?`dark`:`light`),setMode:e=>n(e),theme:t===`dark`?kt:Ot}),[t]);return(0,v.jsx)(At.Provider,{value:r,children:e})},Y=h`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;h`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;const Nt=h`
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
`,Pt=h`
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
`,Ft=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,It=h`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;var Lt=_.div`
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
  animation: ${Y} ${({theme:e})=>e.transitions.base};
`,Rt=_.div`
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
  animation: ${It} ${({theme:e})=>e.transitions.bounce};
`,zt=_.div`
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  background: ${({theme:e})=>e.gradients.glass};
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]} ${({theme:e})=>e.borderRadius[`2xl`]} 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`,Bt=_.h2`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  flex: 1;
  margin-right: ${({theme:e})=>e.spacing[4]};
`,Vt=_.button`
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
`,Ht=_.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.6;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`,Ut=_.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[6]};
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
  border-top: 1px solid ${({theme:e})=>e.colors.gray[200]};
  flex-shrink: 0;
`,Wt=_(S)`
  background-color: ${({confirmType:e,theme:t})=>e===`danger`?t.colors.error[600]:t.colors.primary[600]};

  &:hover:not(:disabled) {
    background-color: ${({confirmType:e,theme:t})=>e===`danger`?t.colors.error[700]:t.colors.primary[700]};
  }
`;const Gt=(0,y.memo)(({isOpen:e,onClose:t,title:n,children:r,confirmText:i,cancelText:a,onConfirm:o,confirmType:s=`primary`,isLoading:c=!1})=>{let{t:l}=J(),u=i??l(`common.confirm`),d=a??l(`common.cancel`);return Et(e),e?(0,v.jsx)(Lt,{isOpen:e,onClick:e=>{e.target===e.currentTarget&&t()},onKeyDown:e=>{e.key===`Escape`&&t()},children:(0,v.jsxs)(Rt,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`dialog-title`,children:[(0,v.jsxs)(zt,{children:[(0,v.jsx)(Bt,{id:`dialog-title`,children:n}),(0,v.jsx)(Vt,{onClick:t,"aria-label":l(`common.closeDialog`),children:(0,v.jsx)(T,{name:`close`,size:20})})]}),(0,v.jsx)(Ht,{children:r}),o&&(0,v.jsxs)(Ut,{children:[(0,v.jsx)(S,{variant:`secondary`,onClick:t,disabled:c,children:d}),(0,v.jsx)(Wt,{confirmType:s,onClick:o,disabled:c,children:c?l(`common.processing`):u})]})]})}):null});Gt.displayName=`Dialog`;var Kt=_.input`
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
`;const qt=(0,y.memo)(({checked:e,onChange:t,disabled:n=!1})=>(0,v.jsx)(Kt,{type:`checkbox`,checked:e,onChange:t,disabled:n}));qt.displayName=`Checkbox`;var Jt=h`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Yt=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  position: relative;
  ${({fullWidth:e})=>e&&`width: 100%;`}
  ${({width:e})=>e&&`width: ${e};`}
`,Xt=_.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Zt=_.button`
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
`,Qt=_.div`
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
`,$t=_.div`
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
  animation: ${Jt} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
`,en=_.label`
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
`,tn=_.span`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  flex: 1;
  font-weight: 500;
`,nn=_.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 600;
`;const rn=(0,y.memo)(({label:e,value:t,onChange:n,options:r,placeholder:i=`選択してください`,maxSelections:a,width:o,fullWidth:s})=>{let[c,l]=(0,y.useState)(!1),u=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let d=e=>{if(t.includes(e))n(t.filter(t=>t!==e));else{if(a&&t.length>=a)return;n([...t,e])}};return(0,v.jsxs)(Yt,{ref:u,width:o,fullWidth:s,children:[e&&(0,v.jsx)(Xt,{children:e}),(0,v.jsxs)(Zt,{type:`button`,onClick:()=>l(!c),isOpen:c,children:[(()=>t.length===0?i:t.map(e=>r.find(t=>t.value===e)?.label||e).join(`, `))(),t.length>0&&(0,v.jsxs)(nn,{children:[` (`,t.length,`)`]}),(0,v.jsx)(Qt,{isOpen:c,children:(0,v.jsx)(T,{name:`add`,size:16})})]}),(0,v.jsx)($t,{isOpen:c,children:r.map(e=>{let n=a?t.length>=a&&!t.includes(e.value):!1;return(0,v.jsxs)(en,{disabled:n,children:[(0,v.jsx)(qt,{checked:t.includes(e.value),onChange:()=>d(e.value),disabled:n}),(0,v.jsx)(tn,{children:e.label})]},e.value)})})]})});rn.displayName=`MultiSelect`;var an=_.div`
  padding: ${({theme:e})=>e.spacing[6]};
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  width: 100%;
`,on=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,sn=_.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Y} 0.5s ease-out;
`,cn=_.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,ln=_.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`,un=_.div`
  display: grid;
  gap: ${({gap:e})=>e};
  animation: ${Y} 0.5s ease-out;
`;const X=(0,y.memo)(({children:e})=>(0,v.jsx)(an,{children:e}));X.displayName=`Page`;const dn=(0,y.memo)(({children:e})=>(0,v.jsx)(on,{children:e}));dn.displayName=`PageTitleContainer`;const fn=(0,y.memo)(({children:e})=>(0,v.jsx)(sn,{children:e}));fn.displayName=`PageTitle`;const pn=(0,y.memo)(({children:e})=>(0,v.jsx)(cn,{children:e}));pn.displayName=`PageDescription`;const mn=(0,y.memo)(({children:e})=>(0,v.jsx)(ln,{children:e}));mn.displayName=`PageTitleActions`;const hn=(0,y.memo)(({children:e,gap:t=`1.5rem`})=>(0,v.jsx)(un,{gap:t,children:e}));hn.displayName=`PageContainer`;var gn=h`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_n=h`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,vn=_.div`
  position: relative;
  display: ${({$fullWidth:e})=>e?`block`:`inline-block`};
  width: ${({$fullWidth:e})=>e?`100%`:`auto`};
`,yn=_.button`
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
`,bn=_.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: #26a1df;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  span {
    color: ${({theme:e})=>e.colors.text};
  }
`,xn=_.div`
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
  animation: ${({direction:e})=>e===`up`?gn:_n} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
`,Sn=_.button`
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
`,Cn=_.span`
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
`,wn=_.span`
  display: flex;
  align-items: center;
  color: #26a1df;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,Tn=[{code:`ja`,name:`日本語`,flag:`🇯🇵`},{code:`en`,name:`English`,flag:`🇺🇸`},{code:`ko`,name:`한국어`,flag:`🇰🇷`}];const En=(0,y.memo)(({direction:e=`down`,fullWidth:t=!1})=>{let[n,r]=(0,y.useState)(!1),{currentLanguage:i,changeLanguage:a}=J(),o=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&r(!1)};return n&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[n]);let s=e=>{a(e),r(!1)},c=Tn.find(e=>e.code===i)?.name||`日本語`;return(0,v.jsxs)(vn,{ref:o,$fullWidth:t,children:[(0,v.jsxs)(yn,{onClick:()=>r(!n),$fullWidth:t,children:[(0,v.jsxs)(bn,{children:[(0,v.jsx)(T,{name:`language`,size:18}),(0,v.jsx)(`span`,{children:c})]}),(0,v.jsx)(wn,{isOpen:n,children:(0,v.jsx)(T,{name:`arrowDropDown`,size:24})})]}),(0,v.jsx)(xn,{isOpen:n,direction:e,children:Tn.map(e=>(0,v.jsxs)(Sn,{isActive:i===e.code,onClick:()=>s(e.code),children:[(0,v.jsx)(Cn,{children:e.flag}),(0,v.jsx)(`span`,{children:e.name})]},e.code))})]})});En.displayName=`LanguageSelector`;var Dn=_.div`
  position: fixed;
  bottom: ${({theme:e})=>e.spacing[6]};
  right: ${({theme:e})=>e.spacing[6]};
  z-index: 100;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    bottom: ${({theme:e})=>e.spacing[4]};
    right: ${({theme:e})=>e.spacing[4]};
  }
`,On=_.button`
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
      animation: ${Ft} 0.6s ease-in-out;
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
`;const kn=(0,y.memo)(()=>{let{mode:e,toggleMode:t}=jt(),{t:n}=J(),r=(0,v.jsx)(Dn,{children:(0,v.jsx)(On,{onClick:t,"aria-label":n(`common.toggleTheme`),title:n(e===`light`?`common.switchToDarkMode`:`common.switchToLightMode`),children:e===`light`?(0,v.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,children:(0,v.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z`})}):(0,v.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:2,stroke:`currentColor`,children:(0,v.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z`})})})});return(0,fe.createPortal)(r,document.body)});var An=_.div`
  overflow: hidden;
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
  animation: ${Y} 0.6s ease-out 0.1s backwards;

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
    border-color: ${({theme:e})=>e.colors.border};
  }
`,jn=_.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,Mn=_.div`
  display: flex;
  background: ${({theme:e})=>e.isDark?`rgba(39, 39, 42, 0.6)`:`rgba(255, 255, 255, 0.1)`};
  backdrop-filter: blur(8px);
  border-bottom: 2px solid ${({theme:e})=>e.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 2;
`;const Nn=_.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  text-align: left;

  &:last-child {
    text-align: center;
  }
`;var Z=_.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`;const Pn=_.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
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
    background: ${({theme:e})=>e.isDark?`rgba(38, 161, 223, 0.08)`:`rgba(38, 161, 223, 0.03)`};

    &::before {
      width: 4px;
    }
  }
`,Fn=_.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
  flex: ${({width:e})=>e?`0 0 `+e:`1`};
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
  }
`;var In=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ln=_.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.gray[500]};
`,Rn=_.div`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
  padding: ${({theme:e})=>e.spacing[16]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  animation: ${Pt} 1.5s ease-in-out infinite;
`;function zn({data:e,columns:t,renderRow:n,rowHeight:i=56,overscan:a=5,height:o,isLoading:s=!1,loadingText:c=`Loading...`,emptyText:l=`No data`,getRowKey:u}){let d=(0,y.useRef)(null),f=r({count:e.length,getScrollElement:()=>d.current,estimateSize:()=>i,overscan:a});return(0,v.jsx)(An,{$height:o,children:(0,v.jsxs)(jn,{children:[(0,v.jsx)(Mn,{children:t.map(e=>(0,v.jsx)(Nn,{width:e.width,children:e.label},e.key))}),s?(0,v.jsx)(Z,{children:(0,v.jsx)(Rn,{children:c})}):e.length>0?(0,v.jsx)(Z,{ref:d,children:(0,v.jsx)(`div`,{style:{height:`${f.getTotalSize()}px`,position:`relative`},children:f.getVirtualItems().map(t=>{let r=e[t.index];return(0,v.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,transform:`translateY(${t.start}px)`,height:`${t.size}px`},children:n(r,t)},u(r))})})}):(0,v.jsx)(In,{children:(0,v.jsx)(Ln,{children:l})})]})})}const Bn=_.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  animation: ${Y} 0.6s ease-out;
`,Vn=_.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
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
    border-color: ${({theme:e})=>e.colors.border};
  }
`,Hn=_.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Un=_.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  ${({theme:e,$type:t,$winRate:n})=>t===`win`?`color: ${e.colors.win[400]};`:t===`defeat`?`color: ${e.colors.defeat[400]};`:t===`winRate`&&n!==void 0?`color: ${nt(n,e,400)};`:`
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,Wn=_.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`;var Gn={danger:g`
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: ${({theme:e})=>e.colors.error[500]};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.error[500]};
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  `,default:g`
    border: 1px solid ${({theme:e})=>e.colors.borderLight};
    color: ${({theme:e})=>e.colors.primary[500]};

    &:hover:not(:disabled) {
      border-color: ${({theme:e})=>e.colors.primary[500]};
      box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
    }
  `},Kn=_(S)`
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

  ${({$type:e})=>Gn[e||`default`]}
`;const qn=(0,y.memo)(({icon:e,children:t,...n})=>(0,v.jsx)(Kn,{variant:`outline`,...n,children:e||t}));qn.displayName=`IconicButton`;var Jn=_.div`
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
`,Yn=_.div`
  flex: 1;
`,Xn=_.button`
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
`;const Zn=(0,y.memo)(({type:e=`info`,children:t,onClose:n})=>(0,v.jsxs)(Jn,{$type:e,children:[(0,v.jsx)(Yn,{children:t}),n&&(0,v.jsx)(Xn,{onClick:n,type:`button`,"aria-label":`Close`,children:(0,v.jsx)(T,{name:`close`,size:16})})]}));Zn.displayName=`Flush`;var Qn=e(m()),$n=h`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,er=h`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,tr=_.div`
  position: fixed;
  top: ${({theme:e})=>e.spacing[6]};
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -100%);
  opacity: 0;
  visibility: ${({$isVisible:e})=>e?`visible`:`hidden`};
  animation: ${({$isVisible:e})=>e?$n:er} 0.3s ease-out forwards;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    top: ${({theme:e})=>e.spacing[4]};
    left: ${({theme:e})=>e.spacing[4]};
    right: ${({theme:e})=>e.spacing[4]};
    transform: translateY(-100%);
  }
`,nr=_.div`
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
`,rr=_.div`
  flex: 1;
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-right: 1rem;
`,ir=_.button`
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
`;const ar=(0,y.memo)(({open:e,message:t,actionLabel:n,onAction:r,onClose:i,autoHideDuration:a})=>{let{t:o}=J(),[s,c]=(0,y.useState)(!1);(0,y.useEffect)(()=>{if(e){let e=setTimeout(()=>{c(!0)},10);if(a){let t=setTimeout(()=>{c(!1),setTimeout(()=>{i?.()},300)},a);return()=>{clearTimeout(e),clearTimeout(t)}}return()=>clearTimeout(e)}else c(!1)},[e,a,i]);let l=()=>{c(!1),setTimeout(()=>{i?.()},300)};if(!e)return null;let u=(0,v.jsx)(tr,{$isVisible:s,children:(0,v.jsxs)(nr,{children:[(0,v.jsx)(rr,{children:t}),n&&r&&(0,v.jsx)(S,{variant:`outline`,size:`sm`,onClick:r,children:n}),(0,v.jsx)(ir,{onClick:l,"aria-label":o(`common.close`),children:(0,v.jsx)(w,{})})]})});return(0,Qn.createPortal)(u,document.body)});ar.displayName=`Snackbar`;var or=_.header`
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
`,sr=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,cr=_.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,lr=_.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ur=_.img`
  width: 3rem;
  height: 2rem;
  object-fit: contain;
`,dr=_.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`;const fr=({onMenuClick:e})=>{let{t}=J();return(0,v.jsx)(or,{children:(0,v.jsxs)(sr,{children:[(0,v.jsxs)(lr,{children:[(0,v.jsx)(ur,{src:`/cc-war-record/img/cc.webp`,alt:`CC`}),(0,v.jsx)(dr,{children:t(`common.appName`)})]}),(0,v.jsxs)(cr,{children:[(0,v.jsx)(kn,{}),(0,v.jsx)(T,{name:`hamburger`,size:24,onClick:e})]})]})})},pr=[{labelKey:`navigation.home`,path:`/`,icon:`home`},{labelKey:`navigation.graphs`,path:`/graphs`,icon:`chart`},{labelKey:`navigation.histories`,path:`/histories`,icon:`history`},{labelKey:`navigation.faq`,path:`/faq`,icon:`detail`}];var mr=_.aside`
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
`,hr=_.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,gr=_.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`,_r=_.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.text};
`,vr=_.nav`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,yr=_(c)`
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
`,br=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: inherit;
`,xr=_.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing[4]};
  right: ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;const Sr=({isOpen:e,isActivePath:t,onClose:n})=>{let{t:r}=J();return(0,v.jsxs)(mr,{$isOpen:e,children:[(0,v.jsx)(xr,{children:(0,v.jsx)(T,{name:`close`,size:24,onClick:n})}),(0,v.jsxs)(hr,{children:[(0,v.jsx)(gr,{src:`/cc-war-record/img/cc.webp`,alt:`CC`}),(0,v.jsx)(_r,{children:r(`common.appName`)})]}),(0,v.jsx)(vr,{children:pr.map(e=>(0,v.jsxs)(yr,{to:e.path,$isActive:t(e.path),onClick:n,children:[(0,v.jsx)(br,{$isActive:t(e.path),children:(0,v.jsx)(T,{name:e.icon,size:20})}),r(e.labelKey)]},e.path))}),(0,v.jsx)(`div`,{style:{marginTop:`auto`,paddingTop:`24px`},children:(0,v.jsx)(En,{direction:`up`,fullWidth:!0})})]})};var Cr=_.div`
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
`,wr=_.main`
  display: flex;
  flex: 1;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-left: 260px;
  }
`,Tr=_.div`
  display: flex;
  min-height: 100vh;
  background-image: url("${`/cc-war-record/`}img/${({theme:e})=>e.isDark?`bgn.webp`:`bg.webp`}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex-direction: column;
  }
`;const Er=({children:e})=>{let[t,n]=(0,y.useState)(!1),r=i(),a=()=>{n(!t)},o=()=>{n(!1)};return(0,v.jsxs)(Tr,{children:[(0,v.jsx)(fr,{onMenuClick:a}),(0,v.jsx)(Sr,{isOpen:t,isActivePath:e=>e===`/`?r.pathname===`/`:r.pathname.startsWith(e),onClose:o}),(0,v.jsx)(Cr,{$isOpen:t,onClick:o}),(0,v.jsx)(wr,{children:e})]})};var Dr=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  min-height: 400px;
  text-align: center;
`,Or=_.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,kr=_.div`
  display: flex;
  gap: 1rem;
`,Ar=_.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`,jr=_.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,Mr=_.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 28rem;
  margin: 0.5rem auto;
  line-height: 1.6;
`;const Nr=()=>(0,v.jsx)(X,{children:(0,v.jsxs)(Dr,{children:[(0,v.jsxs)(Or,{children:[(0,v.jsx)(Ar,{children:`404`}),(0,v.jsx)(jr,{children:`ページが見つかりません`}),(0,v.jsx)(Mr,{children:`お探しのページは削除されたか、URLが間違っている可能性があります。`})]}),(0,v.jsx)(kr,{children:(0,v.jsx)(c,{to:`/`,children:(0,v.jsx)(S,{children:`ホームに戻る`})})})]})});var Pr=h`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,Fr=h`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,Ir=_.div`
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
  animation: ${Y} 0.8s ease-out;
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
    animation: ${Fr} 3s ease-in-out infinite;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.border};
  }
`,Lr=_.div`
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
  animation: ${Pr} 3s ease-in-out infinite;
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
`,Rr=_.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  position: relative;
  z-index: 1;
  animation: ${Y} 0.8s ease-out 0.2s backwards;
`,zr=_.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 450px;
  line-height: 1.7;
  font-weight: 500;
  position: relative;
  z-index: 1;
  animation: ${Y} 0.8s ease-out 0.4s backwards;
`,Br=_(S)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
  position: relative;
  z-index: 1;
  animation: ${Y} 0.8s ease-out 0.6s backwards;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(38, 161, 223, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }
`;const Vr=(0,y.memo)(({icon:e=`home`})=>{let{t}=J(),n=s();return(0,v.jsxs)(Ir,{children:[(0,v.jsx)(Lr,{children:(0,v.jsx)(T,{name:e,size:32})}),(0,v.jsx)(Rr,{children:t(`pages.home.noSeason`)}),(0,v.jsx)(zr,{children:t(`pages.home.createFirstSeason`)}),(0,v.jsxs)(Br,{onClick:()=>{n({to:`/new`})},children:[(0,v.jsx)(T,{name:`add`,size:20,color:`white`}),t(`pages.home.createSeason`)]})]})});Vr.displayName=`EmptyState`;var Hr=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: ${({theme:e})=>e.spacing[8]};
`,Ur=_.div`
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
`,Wr=_.p`
  margin-top: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const Gr=()=>(0,v.jsx)(Hr,{children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(Ur,{}),(0,v.jsx)(Wr,{children:`Loading...`})]})}),Kr=_.form`
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
`,qr=_.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Jr=_.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;var Q=e(l()),Yr=`G-8MW9KTB7Q5`;const Xr=()=>{Q.default.initialize(Yr,{gaOptions:{siteSpeedSampleRate:100}})},Zr=(e,t)=>{Q.default.send({hitType:`pageview`,page:e,title:t})},Qr=(e,t,n,r)=>{Q.default.event({category:e,action:t,label:n,value:r})},$r=async()=>{try{let e=await fetch(`/cc-war-record/build-info.json`,{cache:`no-cache`});return e.ok?await e.json():(console.warn(`Failed to fetch build-info.json:`,e.status),null)}catch(e){return console.error(`Error fetching build-info.json:`,e),null}},ei=async()=>{let e=await $r();if(!e)return console.warn(`Failed to fetch build info`),!1;let{timestamp:t}=e,n=P(N.BUILD_TIMESTAMP,``);if(!n)return F(N.BUILD_TIMESTAMP,t.toString()),console.info(`First access: build timestamp saved`),!1;if(Number(n)!==t&&(console.info(`Build updated detected:`,{old:new Date(Number(n)).toISOString(),new:e.buildTime}),F(N.BUILD_TIMESTAMP,t.toString()),`serviceWorker`in navigator&&navigator.serviceWorker.controller))try{if(await(await navigator.serviceWorker.ready).unregister(),console.info(`ServiceWorker unregistered`),`caches`in window){let e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e))),console.info(`Cache storage cleared`)}return!0}catch(e){console.error(`Error clearing ServiceWorker cache:`,e)}return!1},$=d({component:ti,notFoundComponent:ni});function ti(){let e=ne(),{t}=J(),n=(0,y.useRef)(!1),[r,i]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{window.scrollTo(0,0),Zr(e.location.pathname)},[e.location.pathname]),(0,y.useEffect)(()=>{!r&&!n.current&&setTimeout(()=>{ei().then(e=>{e&&i(!0)})},1e3)},[e.location.pathname]),(0,v.jsxs)(Er,{children:[(0,v.jsx)(y.Suspense,{fallback:(0,v.jsx)(Gr,{}),children:(0,v.jsx)(a,{})}),(0,v.jsx)(ar,{open:r,message:t(`common.buildUpdate.message`),actionLabel:t(`common.buildUpdate.reload`),onAction:()=>{window.location.reload()},onClose:()=>{i(!1),n.current=!0}})]})}function ni(){return(0,v.jsx)(Nr,{})}const ri=p(`/new`)({component:o(()=>x(()=>import(`./new-DMAW7y_9.js`),__vite__mapDeps([0,1,2])),`component`)}),ii=p(`/graphs`)({component:o(()=>x(()=>import(`./graphs-BnLQJXPN.js`),__vite__mapDeps([3,1,2])),`component`),staleTime:1e3*60*5,gcTime:1e3*60*10}),ai=p(`/faq`)({component:o(()=>x(()=>import(`./faq-CL-9mdyj.js`),__vite__mapDeps([4,1,2])),`component`)}),oi=p(`/`)({component:o(()=>x(()=>import(`./routes-BfZNbpFG.js`),__vite__mapDeps([5,1,2])),`component`)}),si=p(`/histories/`)({component:o(()=>x(()=>import(`./histories-DcV9mgWy.js`),__vite__mapDeps([6,1,2])),`component`)}),ci=p(`/histories/$id`)({component:o(()=>x(()=>import(`./_id-BNHuUPta.js`),__vite__mapDeps([7,1,2])),`component`)});var li=ri.update({id:`/new`,path:`/new`,getParentRoute:()=>$}),ui=ii.update({id:`/graphs`,path:`/graphs`,getParentRoute:()=>$}),di=ai.update({id:`/faq`,path:`/faq`,getParentRoute:()=>$}),fi=oi.update({id:`/`,path:`/`,getParentRoute:()=>$}),pi=si.update({id:`/histories/`,path:`/histories/`,getParentRoute:()=>$}),mi=ci.update({id:`/histories/$id`,path:`/histories/$id`,getParentRoute:()=>$}),hi={IndexRoute:fi,FaqRoute:di,GraphsRoute:ui,NewRoute:li,HistoriesIdRoute:mi,HistoriesIndexRoute:pi};const gi=$._addFileChildren(hi)._addFileTypes();var _i=te({routeTree:gi,basepath:`/cc-war-record`,defaultViewTransition:!0});const vi=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{router:_i}),!1]}),yi=ie`
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
`;var bi=(e,t)=>typeof t==`string`?ue(e):!0,xi=({children:e})=>{let{theme:t}=jt();return(0,v.jsx)(oe,{shouldForwardProp:bi,children:(0,v.jsxs)(ae,{theme:t,children:[(0,v.jsx)(yi,{}),e]})})};ce.use(le).use(ee).init({resources:{ja:{translation:{common:{appName:`クリコン戦績記録`,confirm:`確認`,upload:`アップロード`,cancel:`キャンセル`,delete:`削除`,edit:`編集`,save:`保存`,close:`閉じる`,add:`追加`,back:`戻る`,loading:`読み込み中...`,processing:`処理中...`,closeDialog:`ダイアログを閉じる`,error:`エラーが発生しました`,noData:`データがありません`,success:`成功しました`,warning:`警告`,info:`情報`,toggleTheme:`テーマを切り替え`,switchToDarkMode:`ダークモードに切り替え`,switchToLightMode:`ライトモードに切り替え`,buildUpdate:{message:`新しいバージョンが利用可能です`,reload:`更新`}},navigation:{home:`ホーム`,graphs:`グラフ`,histories:`履歴`,faq:`FAQ`},pages:{home:{title:`{{seasonName}} の戦績`,description:`戦績と統計情報を入力します。`,createSeason:`新しいシーズンを作成`,noSeason:`シーズンが作成されていません`,createFirstSeason:`最初のシーズンを作成してください`,errorOccurred:`エラーが発生しました`},graphs:{title:`戦績グラフ`,description:`現シーズンの戦績をグラフ形式で可視化します。`,descriptionWithSeason:`{{seasonName}} の戦績をグラフ形式で可視化します。`,daily:`日別勝敗数`,hourly:`時間別勝率`,weekly:`曜日別勝率`,jobWinRate:`ジョブ別勝率`,jobUsage:`ジョブ使用率`,filters:{character:`キャラクター`,job:`ジョブ`,map:`マップ`,all:`すべて`}},histories:{title:`履歴一覧`,description:`過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。`,totalSeasons:`総シーズン数: {{count}}件`,totalMatches:`総試合数: {{count}}`,latestCreated:`最新作成`,detail:`詳細`,delete:`削除`,confirmDelete:`シーズンの削除`,deleteDescription:`「{{seasonName}}」を削除してもよろしいですか？
この操作は取り消すことができません。`,emptyState:`履歴がありません`,stats:`シーズン数`,createBackup:`バックアップを作成`,importBackup:`バックアップ取り込み`,importBackupWarningTitle:`バックアップの取り込み`,importBackupWarningMessage:`現在のデータはバックアップのデータで上書きされます。この操作は取り消せません。続行しますか？`,backupCreated:`バックアップを作成しました`,backupRestored:`バックアップを復元しました`,errors:{loadFailed:`履歴の読み込みに失敗しました`,alreadyExists:`シーズン「{{seasonName}}」は既に存在します`,notFound:`指定された履歴が見つかりません`,characterNotFound:`指定されたキャラクターが見つかりません`,deleteMatchRecordsFailed:`シーズン {{uuid}} のマッチレコード削除中にエラーが発生しました`,loadMatchRecordsFailed:`シーズン {{seasonUuid}} のマッチレコード読み込み中にエラーが発生しました`,backupCreateFailed:`バックアップの作成に失敗しました`,backupRestoreFailed:`バックアップの復元に失敗しました`,backupFileCorrupted:`バックアップファイルが破損しています`}},historyDetail:{title:`{{seasonName}} の詳細`,description:`シーズンの全戦績を表示しています。`,backToList:`履歴一覧に戻る`,totalMatches:`{{count}}試合の戦績`,matchesCount:`試合数`,winRate:`勝率`,overall:`全体`,createdDate:`作成日`,searchPlaceholder:`キャラクター名、ジョブ、日時で検索...`,columns:{season:`シーズン名`,character:`キャラクター名`,job:`使用ジョブ`,map:`マップ`,result:`勝敗`,date:`作成日時`},results:{win:`Win`,defeat:`Defeat`},emptyState:`戦績が記録されていません`},newSeason:{title:`新しいシーズンを作成`,description:`新しいシーズンを作成します。シーズン名を入力してください。`,seasonName:`シーズン名`,seasonNamePlaceholder:`例: シーズン1`,create:`作成する`,creating:`作成中...`,cancel:`キャンセル`,confirmTitle:`シーズン作成の確認`,confirmDescription:`新しいシーズンを作成すると「{{seasonName}}」の戦績データは過去のシーズンとしてアーカイブされ、新しい戦績の入力が開始されます。よろしいでしょうか?`,validationRequired:`シーズン名を入力してください`,validationMaxLength:`シーズン名は{{length}}文字以内で入力してください`,successMessage:`シーズン「{{seasonName}}」を作成しました`},faq:{title:`よくある質問 (FAQ)`,description:`CC戦績記録について、よくお寄せいただく質問とその回答をまとめました。`,privacy:{title:`プライバシー・データについて`,dataStorage:{question:`戦績データはどこに保存されますか？`,answer:{intro:`戦績データはすべてお使いのブラウザのローカルストレージに保存されます。`,description:`当アプリケーションでは、以下の方針でデータを扱っています：`,points:[`戦績データや個人情報は一切サーバーに送信されません`,`すべてのデータはブラウザ内のみで管理されます`,`アプリケーション開発者がユーザーの戦績データにアクセスすることはありません`,`データの削除はブラウザの設定から行えます`]}},analytics:{question:`Google Analyticsで何が収集されますか？`,answer:{intro:`当サイトでは、サービス改善のためにGoogle Analyticsを使用しています。`,collected:`収集される情報：`,collectedPoints:[`アクセス統計：ページビュー数、セッション数、平均滞在時間など`,`技術情報：ブラウザの種類、OS、画面サイズなど`,`地域情報：国や地域レベルの大まかな位置情報（詳細な住所等は含まれません）`],notCollected:`収集されない情報：`,notCollectedPoints:[`戦績データや個人の成績情報`,`キャラクター名やその他の個人情報`,`詳細な位置情報や住所`],anonymous:`これらの統計情報は匿名化されており、個人を特定することはできません。`}},dataDeletion:{question:`データの削除方法を教えてください`,answer:{intro:`保存されているデータを削除したい場合は、以下の方法で行えます：`,methods:[`個別削除：各ページで「削除」ボタンを使用`,`完全削除：ブラウザの設定からサイトデータを削除`],browserMethods:`ブラウザからのデータ削除方法：`,browserSteps:[`Chrome: 設定 → プライバシーとセキュリティ → サイトデータ`,`Firefox: 設定 → プライバシーとセキュリティ → Cookieとサイトデータ`,`Safari: 環境設定 → プライバシー → Webサイトデータを管理`]}}},usage:{title:`アプリケーションの使い方`,backup:{question:`データのバックアップ方法を教えてください`,answer:{intro:`履歴ページからデータのバックアップと復元ができます：`,backup:`バックアップの作成：`,backupSteps:[`履歴ページの右上にある「バックアップを作成」ボタンをクリック`,`自動的にZIPファイルがダウンロードされます`,`ファイル名は「cc-war-record-backup-日時.zip」形式で保存されます`],restore:`バックアップの復元：`,restoreSteps:[`履歴ページの右上にある「バックアップから復元」ボタンをクリック`,`保存したZIPファイルを選択`,`データが復元され、ページが自動的にリロードされます`],includes:`バックアップに含まれるデータ：`,includesItems:[`キャラクター情報`,`試合記録（全シーズン）`,`シーズン履歴`,`レーダーチャート設定`],note:`※ バックアップファイルは安全な場所に保管してください`}},dataDefeat:{question:`データが消えてしまうことはありますか？`,answer:{intro:`ローカルストレージに保存されたデータは、以下の場合に削除される可能性があります：`,causes:[`ブラウザのキャッシュクリア時`,`ブラウザの設定でサイトデータを削除した場合`,`プライベートブラウジングモード使用時`,`デバイスの容量不足時（ブラウザが自動削除する場合）`],recommendation:`重要なデータは定期的にバックアップを取ることをお勧めします。`}},dataSyncing:{question:`複数のブラウザでデータを共有できますか？`,answer:{limitation:`申し訳ございませんが、現在のところブラウザ間でのデータ同期機能は提供していません。`,explanation:`各ブラウザのローカルストレージは独立しているため、データは使用したブラウザでのみ利用可能です。`,workaround:`ただし、バックアップ機能を使えば、別のブラウザやデバイスにデータを移行することができます。`}}},copyright:{disclaimer:`このアプリケーションはファンメイドの非公式ツールであり、株式会社スクウェア・エニックスとは一切関係がありません。`}},notFound:{title:`ページが見つかりません`,description:`お探しのページは存在しないか、削除された可能性があります。`,backToHome:`ホームに戻る`}},character:{name:`キャラクター名`,create:`キャラクターを作成`,createSuccess:`キャラクター「{{name}}」を作成しました`,edit:`キャラクター名を編集`,delete:`キャラクターを削除`,confirmDelete:`削除する`,moveUp:`1つ上に`,moveDown:`1つ下に`,deleteDescription:`キャラクター「{{name}}」を削除しますか？<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。</span>`,namePlaceholder:`キャラクター名を入力`,validationRequired:`キャラクター名を入力してください`,emptyState:`キャラクターがありません`,createFirst:`最初のキャラクターを作成してください`,errors:{alreadyExists:`キャラクター「{{name}}」は既に存在します`,notFound:`キャラクターが見つかりません`,loadFailed:`データの読み込みに失敗しました`,matchRecordNotFound:`戦績記録が見つかりません`},stats:{matches:`{{count}}試合`,totalMatches:`{{count}}試合`,winRate:`勝率{{rate}}%`,noWinRate:`勝率--%`,wins:`{{count}}勝`,defeats:`{{count}}敗`},actions:{addJob:`ジョブの追加`,editName:`名前を編集`,deleteName:`キャラクターの削除`}},match:{record:`戦績を記録`,job:`ジョブ`,map:`マップ`,result:`結果`,win:`勝利数`,defeat:`敗北数`,memo:`メモ`,memoPlaceholder:`メモを入力（任意）`,selectJob:`ジョブを選択してください`,selectMap:`マップを選択してください`,recorded:`戦績を記録しました`,totalMatches:`試合数`,winRate:`勝率`,allStagesTotal:`全ステージ合計`,actions:`操作`,pleaseRegisterJob:`ジョブを登録してください`,recentMatches:`最近の戦績`,deleteMatch:`戦績を削除`,confirmDelete:`戦績の削除`,confirmDeleteButton:`削除する`,deleteConfirmation:`{{characterName}} の {{date}} の戦績を削除してもよろしいですか？
この操作は取り消すことができません。`,addWin:`勝利を記録`,addDefeat:`敗北を記録`,rollback:`直前の記録を取り消し`},job:{select:`ジョブ選択`,selectJob:`使用ジョブを選択`,selectJobDescription:`ジョブを選択してください`,tank:`タンク`,healer:`ヒーラー`,meleeDps:`近接DPS`,melee_dps:`近接DPS`,physicalRangedDps:`物理遠隔DPS`,physical_ranged_dps:`物理遠隔DPS`,magicalRangedDps:`魔法遠隔DPS`,magical_ranged_dps:`魔法遠隔DPS`,PLD:`ナイト`,WAR:`戦士`,DRK:`暗黒騎士`,GNB:`ガンブレイカー`,WHM:`白魔道士`,SCH:`学者`,AST:`占星術師`,SGE:`賢者`,MNK:`モンク`,DRG:`竜騎士`,NIN:`忍者`,SAM:`侍`,RPR:`リーパー`,VPR:`ヴァイパー`,BRD:`吟遊詩人`,MCH:`機工士`,DNC:`踊り子`,BLM:`黒魔道士`,SMN:`召喚士`,RDM:`赤魔道士`,PCT:`ピクトマンサー`},maps:{THE_PALAISTRA:`パライストラ`,VOLCANIC_HEART:`ヴォルカニックハート`,CLOUD_NINE:`クラウドナイン`,TOUHOU_KARAKURI_GOTEN:`東方絡繰御殿`,RED_SANDS:`レッドサンズ`,BAYSIDE_BATTLEGROUND:`ベイサイドバトルグラウンド`},chart:{winRate:`勝率`,winCount:`勝利数`,defeatCount:`敗北数`,usageRate:`使用率`,matches:`試合`,noData:`データがありません`,noMatchData:`試合データがありません`,selectJobs:`ジョブを選択（最大5個）`,hour:`{{hour}}時`,day:{sunday:`日`,monday:`月`,tuesday:`火`,wednesday:`水`,thursday:`木`,friday:`金`,saturday:`土`},labels:{character:`キャラクター`,job:`ジョブ`,map:`マップ`,allCharacters:`すべてのキャラクター`,allJobs:`すべてのジョブ`,allMaps:`すべてのマップ`,jobSelection:`ジョブ選択（最大5つ）`,selectJob:`ジョブを選択`},titles:{dailyWinDefeat:`日別勝敗数と勝率推移`,weeklyWinRate:`曜日別勝率比較`,hourlyWinRate:`時間帯別勝率分析`,jobUsageRate:`ジョブ使用率`,jobWinRateByMap:`マップ別ジョブ勝率比較`},axes:{matchCount:`対戦回数`,winRatePercent:`勝率 (%)`,date:`日付`,weekday:`曜日`,hour:`時間帯`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`使用回数`,usageRatePercent:`使用率`,win:`Win`,lose:`Defeat`,total:`合計`,matches:`試合`,noMatchData:`試合データなし`},weekdays:{sunday:`日曜日`,monday:`月曜日`,tuesday:`火曜日`,wednesday:`水曜日`,thursday:`木曜日`,friday:`金曜日`,saturday:`土曜日`}},language:{current:`日本語`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`言語を切り替え`}}},en:{translation:{common:{appName:`CC War Record`,confirm:`Confirm`,upload:`Upload`,cancel:`Cancel`,delete:`Delete`,edit:`Edit`,save:`Save`,close:`Close`,add:`Add`,back:`Back`,loading:`Loading...`,processing:`Processing...`,closeDialog:`Close dialog`,error:`An error occurred`,noData:`No data available`,success:`Success`,warning:`Warning`,info:`Information`,toggleTheme:`Toggle theme`,switchToDarkMode:`Switch to dark mode`,switchToLightMode:`Switch to light mode`,buildUpdate:{message:`A new version is available`,reload:`Reload`}},navigation:{home:`Home`,graphs:`Graphs`,histories:`Histories`,faq:`FAQ`},pages:{home:{title:`{{seasonName}} Records`,description:`Enter your match records and view statistics.`,createSeason:`Create New Season`,noSeason:`No season has been created`,createFirstSeason:`Please create your first season`,errorOccurred:`An error occurred`},graphs:{title:`Match Statistics`,description:`Visualize current season match statistics in graph format.`,descriptionWithSeason:`Visualize {{seasonName}} match statistics in graph format.`,daily:`Daily Win/Defeat`,hourly:`Hourly Win Rate`,weekly:`Weekly Win Rate`,jobWinRate:`Job Win Rate`,jobUsage:`Job Usage Rate`,filters:{character:`Character`,job:`Job`,map:`Map`,all:`All`}},histories:{title:`History`,description:`View and manage past seasons. Click the detail button to see more information about each season.`,totalSeasons:`Total Seasons: {{count}}`,totalMatches:`Total Matches: {{count}}`,latestCreated:`Latest`,detail:`Details`,delete:`Delete`,confirmDelete:`Delete Season`,deleteDescription:`Are you sure you want to delete "{{seasonName}}"?
This action cannot be undone.`,emptyState:`No history available`,stats:`Seasons`,createBackup:`Create Backup`,importBackup:`Import Backup`,importBackupWarningTitle:`Import Backup`,importBackupWarningMessage:`Current data will be overwritten with the backup data. This action cannot be undone. Do you want to continue?`,backupCreated:`Backup created successfully`,backupRestored:`Backup restored successfully`,errors:{loadFailed:`Failed to load history`,alreadyExists:`Season "{{seasonName}}" already exists`,notFound:`The specified history was not found`,characterNotFound:`The specified character was not found`,deleteMatchRecordsFailed:`Error deleting match records for season {{uuid}}`,loadMatchRecordsFailed:`Error loading match records for season {{seasonUuid}}`,backupCreateFailed:`Failed to create backup`,backupRestoreFailed:`Failed to restore backup`,backupFileCorrupted:`Backup file is corrupted`}},historyDetail:{title:`{{seasonName}} Details`,description:`Displaying all matches for this season.`,backToList:`Back to History`,totalMatches:`{{count}} matches`,matchesCount:`Matches`,winRate:`Win Rate`,overall:`Overall`,createdDate:`Created`,searchPlaceholder:`Search by character, job, date...`,columns:{season:`Season Name`,character:`Character Name`,job:`Job Used`,map:`Map`,result:`Result`,date:`Date`},results:{win:`Win`,defeat:`Defeat`},emptyState:`No matches recorded`},newSeason:{title:`Create New Season`,description:`Create a new season. Please enter a season name.`,seasonName:`Season Name`,seasonNamePlaceholder:`e.g. Season 1`,create:`Create`,creating:`Creating...`,cancel:`Cancel`,confirmTitle:`Confirm Season Creation`,confirmDescription:`Creating a new season will archive the match data for "{{seasonName}}" and start recording new matches. Continue?`,validationRequired:`Please enter a season name`,validationMaxLength:`Season name must be {{length}} characters or less`,successMessage:`Season "{{seasonName}}" created successfully`},faq:{title:`Frequently Asked Questions (FAQ)`,description:`Common questions and answers about CC War Record.`,privacy:{title:`Privacy & Data`,dataStorage:{question:`Where is my match data stored?`,answer:{intro:`All match data is stored in your browser's local storage only.`,description:`Our application handles data with the following policy:`,points:[`Match data and personal information are never sent to servers`,`All data is managed within your browser only`,`Application developers cannot access your match data`,`Data can be deleted through browser settings`]}},analytics:{question:`What does Google Analytics collect?`,answer:{intro:`We use Google Analytics to improve our service.`,collected:`Information collected:`,collectedPoints:[`Access statistics: page views, sessions, average session duration, etc.`,`Technical information: browser type, OS, screen size, etc.`,`Regional information: general location at country/region level (no detailed addresses)`],notCollected:`Information NOT collected:`,notCollectedPoints:[`Match data or personal performance information`,`Character names or other personal information`,`Detailed location information or addresses`],anonymous:`All statistical information is anonymized and cannot identify individuals.`}},dataDeletion:{question:`How can I delete my data?`,answer:{intro:`To delete stored data, you can use the following methods:`,methods:[`Individual deletion: Use the "Delete" button on each page`,`Complete deletion: Delete site data through browser settings`],browserMethods:`Browser data deletion methods:`,browserSteps:[`Chrome: Settings → Privacy and security → Site data`,`Firefox: Settings → Privacy & Security → Cookies and Site Data`,`Safari: Preferences → Privacy → Manage Website Data`]}}},usage:{title:`Application Usage`,backup:{question:`How do I backup my data?`,answer:{intro:`You can backup and restore your data from the History page:`,backup:`Creating a backup:`,backupSteps:[`Click the "Create Backup" button in the top right of the History page`,`A ZIP file will be automatically downloaded`,`The file is saved as "cc-war-record-backup-timestamp.zip"`],restore:`Restoring from backup:`,restoreSteps:[`Click the "Restore from Backup" button in the top right of the History page`,`Select your saved ZIP file`,`Data will be restored and the page will automatically reload`],includes:`Data included in backup:`,includesItems:[`Character information`,`Match records (all seasons)`,`Season history`,`Radar chart settings`],note:`※ Please keep your backup file in a safe place`}},dataDefeat:{question:`Can my data be lost?`,answer:{intro:`Data stored in local storage may be deleted in the following cases:`,causes:[`When browser cache is cleared`,`When site data is deleted through browser settings`,`When using private browsing mode`,`When device storage is low (browser may auto-delete)`],recommendation:`We recommend regularly backing up important data.`}},dataSyncing:{question:`Can I share data between multiple browsers?`,answer:{limitation:`Unfortunately, we do not currently provide data synchronization between browsers.`,explanation:`Each browser's local storage is independent, so data is only available in the browser where it was created.`,workaround:`However, you can use the backup feature to transfer data to another browser or device.`}}},copyright:{disclaimer:`This application is a fan-made unofficial tool and is not affiliated with Square Enix Co., Ltd. in any way.`}},notFound:{title:`Page Not Found`,description:`The page you're looking for doesn't exist or may have been deleted.`,backToHome:`Back to Home`}},character:{name:`Character Name`,create:`Create Character`,createSuccess:`Character "{{name}}" created successfully`,edit:`Edit Character Name`,delete:`Delete Character`,confirmDelete:`Delete`,moveUp:`Move up`,moveDown:`Move down`,deleteDescription:`Are you sure you want to delete character "{{name}}"?<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ All associated match records will also be deleted. This action cannot be undone.</span>`,namePlaceholder:`Enter character name`,validationRequired:`Please enter a character name`,emptyState:`No characters`,createFirst:`Create your first character`,errors:{alreadyExists:`Character "{{name}}" already exists`,notFound:`Character not found`,loadFailed:`Failed to load data`,matchRecordNotFound:`Match record not found`},stats:{matches:`{{count}} matches`,totalMatches:`{{count}} matches`,winRate:`{{rate}}% win rate`,noWinRate:`-- % win rate`,wins:`{{count}} wins`,defeats:`{{count}} defeats`},actions:{addJob:`Add Job`,editName:`Edit Name`,deleteName:`Delete Character`}},match:{record:`Record Match`,job:`Job`,map:`Map`,result:`Result`,win:`Wins`,defeat:`Defeats`,memo:`Memo`,memoPlaceholder:`Enter memo (optional)`,selectJob:`Please select a job`,selectMap:`Please select a map`,recorded:`Match recorded successfully`,totalMatches:`Matches`,winRate:`Win Rate`,allStagesTotal:`All Stages Total`,actions:`Actions`,pleaseRegisterJob:`Please register a job`,recentMatches:`Recent Matches`,deleteMatch:`Delete Match`,confirmDelete:`Delete Match Record`,confirmDeleteButton:`Delete`,deleteConfirmation:`Are you sure you want to delete the match record for {{characterName}} on {{date}}?
This action cannot be undone.`,addWin:`Record Win`,addDefeat:`Record Defeat`,rollback:`Undo Last Record`},job:{select:`Select Job`,selectJob:`Select Job to Use`,selectJobDescription:`Please select a job`,tank:`Tank`,healer:`Healer`,meleeDps:`Melee DPS`,melee_dps:`Melee DPS`,physicalRangedDps:`Physical Ranged DPS`,physical_ranged_dps:`Physical Ranged DPS`,magicalRangedDps:`Magical Ranged DPS`,magical_ranged_dps:`Magical Ranged DPS`,PLD:`Paladin`,WAR:`Warrior`,DRK:`Dark Knight`,GNB:`Gunbreaker`,WHM:`White Mage`,SCH:`Scholar`,AST:`Astrologian`,SGE:`Sage`,MNK:`Monk`,DRG:`Dragoon`,NIN:`Ninja`,SAM:`Samurai`,RPR:`Reaper`,VPR:`Viper`,BRD:`Bard`,MCH:`Machinist`,DNC:`Dancer`,BLM:`Black Mage`,SMN:`Summoner`,RDM:`Red Mage`,PCT:`Pictomancer`},maps:{THE_PALAISTRA:`The Palaistra`,VOLCANIC_HEART:`The Volcanic Heart`,CLOUD_NINE:`Cloud Nine`,TOUHOU_KARAKURI_GOTEN:`The Clockwork Castletown`,RED_SANDS:`The Red Sands`,BAYSIDE_BATTLEGROUND:`The Bayside Battleground`},chart:{winRate:`Win Rate`,winCount:`Wins`,defeatCount:`Defeats`,usageRate:`Usage Rate`,matches:`Matches`,noData:`No data available`,noMatchData:`No match data available`,selectJobs:`Select jobs (max 5)`,hour:`{{hour}}:00`,day:{sunday:`Sun`,monday:`Mon`,tuesday:`Tue`,wednesday:`Wed`,thursday:`Thu`,friday:`Fri`,saturday:`Sat`},labels:{character:`Character`,job:`Job`,map:`Map`,allCharacters:`All Characters`,allJobs:`All Jobs`,allMaps:`All Maps`,jobSelection:`Job Selection (Max 5)`,selectJob:`Select Job`},titles:{dailyWinDefeat:`Daily Win/Defeat and Win Rate Trend`,weeklyWinRate:`Win Rate Comparison by Day of Week`,hourlyWinRate:`Win Rate Analysis by Time of Day`,jobUsageRate:`Job Usage Rate`,jobWinRateByMap:`Job Win Rate Comparison by Map`},axes:{matchCount:`Match Count`,winRatePercent:`Win Rate (%)`,date:`Date`,weekday:`Day of Week`,hour:`Time of Day`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`Usage Count`,usageRatePercent:`Usage Rate`,win:`Win`,lose:`Defeat`,total:`Total`,matches:`Matches`,noMatchData:`No match data`},weekdays:{sunday:`Sunday`,monday:`Monday`,tuesday:`Tuesday`,wednesday:`Wednesday`,thursday:`Thursday`,friday:`Friday`,saturday:`Saturday`}},language:{current:`English`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`Switch Language`}}},ko:{translation:{common:{appName:`크리스탈 컨플릭트 전적 기록`,confirm:`확인`,upload:`업로드`,cancel:`취소`,delete:`삭제`,edit:`편집`,save:`저장`,close:`닫기`,add:`추가`,back:`뒤로`,loading:`로딩 중...`,processing:`처리 중...`,closeDialog:`대화상자 닫기`,error:`오류가 발생했습니다`,noData:`데이터가 없습니다`,success:`성공`,warning:`경고`,info:`정보`,toggleTheme:`테마 전환`,switchToDarkMode:`다크 모드로 전환`,switchToLightMode:`라이트 모드로 전환`,buildUpdate:{message:`새 버전을 사용할 수 있습니다`,reload:`새로고침`}},navigation:{home:`홈`,graphs:`그래프`,histories:`기록`,faq:`FAQ`},pages:{home:{title:`{{seasonName}} 전적`,description:`전적과 통계 정보를 입력합니다.`,createSeason:`새 시즌 만들기`,noSeason:`시즌이 생성되지 않았습니다`,createFirstSeason:`첫 번째 시즌을 만들어주세요`,errorOccurred:`오류가 발생했습니다`},graphs:{title:`전적 그래프`,description:`현재 시즌 전적을 그래프 형식으로 시각화합니다.`,descriptionWithSeason:`{{seasonName}} 전적을 그래프 형식으로 시각화합니다.`,daily:`일별 승부`,hourly:`시간별 승률`,weekly:`요일별 승률`,jobWinRate:`잡별 승률`,jobUsage:`잡 사용률`,filters:{character:`캐릭터`,job:`잡`,map:`맵`,all:`전체`}},histories:{title:`히스토리 목록`,description:`과거 시즌 목록을 표시하고 관리합니다. 각 시즌의 세부정보는 상세 버튼에서 확인할 수 있습니다.`,totalSeasons:`총 시즌 수: {{count}}개`,totalMatches:`총 경기 수: {{count}}`,latestCreated:`최근 생성`,detail:`상세`,delete:`삭제`,confirmDelete:`시즌 삭제`,deleteDescription:`"{{seasonName}}"을(를) 삭제하시겠습니까?
이 작업은 취소할 수 없습니다.`,emptyState:`히스토리가 없습니다`,stats:`시즌`,createBackup:`백업 생성`,importBackup:`백업 가져오기`,importBackupWarningTitle:`백업 가져오기`,importBackupWarningMessage:`현재 데이터가 백업 데이터로 덮어씌워집니다. 이 작업은 취소할 수 없습니다. 계속하시겠습니까?`,backupCreated:`백업이 생성되었습니다`,backupRestored:`백업이 복원되었습니다`,errors:{loadFailed:`히스토리 로드에 실패했습니다`,alreadyExists:`시즌 "{{seasonName}}"은(는) 이미 존재합니다`,notFound:`지정된 히스토리를 찾을 수 없습니다`,characterNotFound:`지정된 캐릭터를 찾을 수 없습니다`,deleteMatchRecordsFailed:`시즌 {{uuid}}의 매치 기록 삭제 중 오류가 발생했습니다`,loadMatchRecordsFailed:`시즌 {{seasonUuid}}의 매치 기록 로드 중 오류가 발생했습니다`,backupCreateFailed:`백업 생성에 실패했습니다`,backupRestoreFailed:`백업 복원에 실패했습니다`,backupFileCorrupted:`백업 파일이 손상되었습니다`}},historyDetail:{title:`{{seasonName}} 상세`,description:`시즌의 모든 전적을 표시하고 있습니다.`,backToList:`기록 목록으로 돌아가기`,totalMatches:`{{count}}경기 전적`,matchesCount:`경기 수`,winRate:`승률`,overall:`전체`,createdDate:`생성일`,searchPlaceholder:`캐릭터명, 잡, 날짜로 검색...`,columns:{season:`시즌명`,character:`캐릭터명`,job:`사용 잡`,map:`맵`,result:`결과`,date:`생성일시`},results:{win:`Win`,defeat:`Defeat`},emptyState:`전적이 기록되지 않았습니다`},newSeason:{title:`새 시즌 만들기`,description:`새 시즌을 만듭니다. 시즌명을 입력해주세요.`,seasonName:`시즌명`,seasonNamePlaceholder:`예: 시즌 1`,create:`만들기`,creating:`만드는 중...`,cancel:`취소`,confirmTitle:`시즌 생성 확인`,confirmDescription:`새 시즌을 만들면 "{{seasonName}}"의 전적 데이터가 과거 시즌으로 아카이브되고 새로운 전적 입력이 시작됩니다. 계속하시겠습니까?`,validationRequired:`시즌명을 입력해주세요`,validationMaxLength:`시즌명은 {{length}}자 이내로 입력해주세요`,successMessage:`시즌 "{{seasonName}}"을 만들었습니다`},faq:{title:`자주 묻는 질문 (FAQ)`,description:`크리스탈 컨플릭트 전적 기록에 대한 자주 묻는 질문과 답변입니다.`,privacy:{title:`개인정보 및 데이터`,dataStorage:{question:`전적 데이터는 어디에 저장되나요?`,answer:{intro:`모든 전적 데이터는 사용자의 브라우저 로컬 스토리지에만 저장됩니다.`,description:`본 애플리케이션은 다음 방침으로 데이터를 다룹니다:`,points:[`전적 데이터나 개인정보는 일체 서버로 전송되지 않습니다`,`모든 데이터는 브라우저 내에서만 관리됩니다`,`애플리케이션 개발자가 사용자의 전적 데이터에 접근할 수 없습니다`,`데이터 삭제는 브라우저 설정에서 할 수 있습니다`]}},analytics:{question:`Google Analytics에서 무엇을 수집하나요?`,answer:{intro:`본 사이트는 서비스 개선을 위해 Google Analytics를 사용합니다.`,collected:`수집되는 정보:`,collectedPoints:[`접속 통계: 페이지뷰 수, 세션 수, 평균 체류시간 등`,`기술 정보: 브라우저 종류, OS, 화면 크기 등`,`지역 정보: 국가나 지역 수준의 대략적인 위치 정보 (상세 주소 등은 포함되지 않음)`],notCollected:`수집되지 않는 정보:`,notCollectedPoints:[`전적 데이터나 개인 성적 정보`,`캐릭터명이나 기타 개인정보`,`상세한 위치 정보나 주소`],anonymous:`이러한 통계 정보는 익명화되어 있으며, 개인을 특정할 수 없습니다.`}},dataDeletion:{question:`데이터 삭제 방법을 알려주세요`,answer:{intro:`저장된 데이터를 삭제하고 싶은 경우 다음 방법으로 할 수 있습니다:`,methods:[`개별 삭제: 각 페이지에서 "삭제" 버튼 사용`,`완전 삭제: 브라우저 설정에서 사이트 데이터 삭제`],browserMethods:`브라우저에서 데이터 삭제 방법:`,browserSteps:[`Chrome: 설정 → 개인정보 및 보안 → 사이트 데이터`,`Firefox: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터`,`Safari: 환경설정 → 개인정보 보호 → 웹사이트 데이터 관리`]}}},usage:{title:`애플리케이션 사용법`,backup:{question:`데이터 백업 방법을 알려주세요`,answer:{intro:`히스토리 페이지에서 데이터 백업 및 복원을 할 수 있습니다:`,backup:`백업 생성:`,backupSteps:[`히스토리 페이지 우측 상단의 "백업 생성" 버튼 클릭`,`자동으로 ZIP 파일이 다운로드됩니다`,`파일명은 "cc-war-record-backup-날짜시간.zip" 형식으로 저장됩니다`],restore:`백업 복원:`,restoreSteps:[`히스토리 페이지 우측 상단의 "백업에서 복원" 버튼 클릭`,`저장된 ZIP 파일 선택`,`데이터가 복원되고 페이지가 자동으로 새로고침됩니다`],includes:`백업에 포함되는 데이터:`,includesItems:[`캐릭터 정보`,`경기 기록 (전체 시즌)`,`시즌 히스토리`,`레이더 차트 설정`],note:`※ 백업 파일은 안전한 장소에 보관하세요`}},dataDefeat:{question:`데이터가 사라질 수 있나요?`,answer:{intro:`로컬 스토리지에 저장된 데이터는 다음의 경우 삭제될 수 있습니다:`,causes:[`브라우저 캐시 삭제 시`,`브라우저 설정에서 사이트 데이터를 삭제한 경우`,`프라이빗 브라우징 모드 사용 시`,`디바이스 용량 부족 시 (브라우저가 자동 삭제하는 경우)`],recommendation:`중요한 데이터는 정기적으로 백업을 받는 것을 권장합니다.`}},dataSyncing:{question:`여러 브라우저에서 데이터를 공유할 수 있나요?`,answer:{limitation:`죄송하지만 현재로서는 브라우저 간 데이터 동기화 기능을 제공하지 않습니다.`,explanation:`각 브라우저의 로컬 스토리지는 독립적이므로, 데이터는 사용한 브라우저에서만 이용 가능합니다.`,workaround:`다만, 백업 기능을 사용하면 다른 브라우저나 디바이스로 데이터를 이전할 수 있습니다.`}}},copyright:{disclaimer:`이 애플리케이션은 팬이 만든 비공식 도구이며, 주식회사 스퀘어 에닉스와는 일체 관계가 없습니다.`}},notFound:{title:`페이지를 찾을 수 없음`,description:`찾으시는 페이지가 존재하지 않거나 삭제되었을 수 있습니다.`,backToHome:`홈으로 돌아가기`}},character:{name:`캐릭터 이름`,create:`캐릭터 생성`,createSuccess:`캐릭터 "{{name}}"을(를) 생성했습니다`,edit:`캐릭터 이름 편집`,delete:`캐릭터 삭제`,confirmDelete:`삭제`,moveUp:`위로 이동`,moveDown:`아래로 이동`,deleteDescription:`캐릭터 "{{name}}"을(를) 삭제하시겠습니까?<br/><span style='color: #dc2626; margin-top: 12px; font-size: 0.875rem; display: block;'>⚠️ 관련된 모든 전적 기록도 삭제됩니다. 이 작업은 취소할 수 없습니다.</span>`,namePlaceholder:`캐릭터 이름 입력`,validationRequired:`캐릭터 이름을 입력해주세요`,emptyState:`캐릭터가 없습니다`,createFirst:`첫 번째 캐릭터를 생성하세요`,errors:{alreadyExists:`캐릭터 "{{name}}"은(는) 이미 존재합니다`,notFound:`캐릭터를 찾을 수 없습니다`,loadFailed:`데이터 로드에 실패했습니다`,matchRecordNotFound:`전적 기록을 찾을 수 없습니다`},stats:{matches:`{{count}}경기`,totalMatches:`{{count}}경기`,winRate:`승률{{rate}}%`,noWinRate:`승률--%`,wins:`{{count}}승`,defeats:`{{count}}패`},actions:{addJob:`잡 추가`,editName:`이름 편집`,deleteName:`캐릭터 삭제`}},match:{record:`전적 기록`,job:`잡`,map:`맵`,result:`결과`,win:`승리 수`,defeat:`패배 수`,memo:`메모`,memoPlaceholder:`메모를 입력하세요 (선택사항)`,selectJob:`잡을 선택해주세요`,selectMap:`맵을 선택해주세요`,recorded:`전적이 기록되었습니다`,totalMatches:`경기 수`,winRate:`승률`,allStagesTotal:`전체 스테이지 합계`,actions:`작업`,pleaseRegisterJob:`잡을 등록해주세요`,recentMatches:`최근 전적`,deleteMatch:`전적 삭제`,confirmDelete:`전적 삭제`,confirmDeleteButton:`삭제`,deleteConfirmation:`{{characterName}}의 {{date}} 전적을 삭제하시겠습니까?
이 작업은 취소할 수 없습니다.`,addWin:`승리 기록`,addDefeat:`패배 기록`,rollback:`마지막 기록 취소`},job:{select:`잡 선택`,selectJob:`사용할 잡 선택`,selectJobDescription:`잡을 선택해주세요`,tank:`탱커`,healer:`힐러`,meleeDps:`근접 DPS`,melee_dps:`근접 DPS`,physicalRangedDps:`물리 원거리 DPS`,physical_ranged_dps:`물리 원거리 DPS`,magicalRangedDps:`마법 원거리 DPS`,magical_ranged_dps:`마법 원거리 DPS`,PLD:`나이트`,WAR:`전사`,DRK:`암흑기사`,GNB:`건브레이커`,WHM:`백마도사`,SCH:`학자`,AST:`점성술사`,SGE:`현자`,MNK:`몽크`,DRG:`용기사`,NIN:`닌자`,SAM:`사무라이`,RPR:`리퍼`,VPR:`바이퍼`,BRD:`음유시인`,MCH:`기공사`,DNC:`무도가`,BLM:`흑마도사`,SMN:`소환사`,RDM:`적마도사`,PCT:`픽토맨서`},maps:{THE_PALAISTRA:`팔라이스트라`,VOLCANIC_HEART:`화산의 심장부`,CLOUD_NINE:`클라우드 나인`,TOUHOU_KARAKURI_GOTEN:`동방 기믹 저택`,RED_SANDS:`붉은 사막 지대`,BAYSIDE_BATTLEGROUND:`베이사이드 배틀그라운드`},chart:{winRate:`승률`,winCount:`승리 수`,defeatCount:`패배 수`,usageRate:`사용률`,matches:`경기 수`,noData:`데이터가 없습니다`,noMatchData:`경기 데이터가 없습니다`,selectJobs:`잡 선택 (최대 5개)`,hour:`{{hour}}시`,day:{sunday:`일`,monday:`월`,tuesday:`화`,wednesday:`수`,thursday:`목`,friday:`금`,saturday:`토`},labels:{character:`캐릭터`,job:`잡`,map:`맵`,allCharacters:`모든 캐릭터`,allJobs:`모든 잡`,allMaps:`모든 맵`,jobSelection:`잡 선택 (최대 5개)`,selectJob:`잡 선택`},titles:{dailyWinDefeat:`일별 승패 및 승률 추이`,weeklyWinRate:`요일별 승률 비교`,hourlyWinRate:`시간대별 승률 분석`,jobUsageRate:`잡 사용률`,jobWinRateByMap:`맵별 잡 승률 비교`},axes:{matchCount:`대전 횟수`,winRatePercent:`승률 (%)`,date:`날짜`,weekday:`요일`,hour:`시간대`},legend:{win:`Win`,lose:`Defeat`,winRate:`WinRate`,defeatRate:`DefeatRate`},tooltip:{usageCount:`사용 횟수`,usageRatePercent:`사용률`,win:`Win`,lose:`Defeat`,total:`합계`,matches:`경기`,noMatchData:`경기 데이터 없음`},weekdays:{sunday:`일요일`,monday:`월요일`,tuesday:`화요일`,wednesday:`수요일`,thursday:`목요일`,friday:`금요일`,saturday:`토요일`}},language:{current:`한국어`,japanese:`日本語`,english:`English`,korean:`한국어`,switch:`언어 변경`}}}},fallbackLng:`en`,debug:!1,detection:{order:[`localStorage`,`navigator`,`htmlTag`],caches:[`localStorage`]},interpolation:{escapeValue:!1},defaultNS:`translation`,ns:[`translation`]}),ce.on(`languageChanged`,e=>{document.documentElement.lang=e}),Xr(),(()=>{if(`serviceWorker`in navigator){let e=`/cc-war-record`,t=e.endsWith(`/`)?e:`${e}/`,n=`${t}sw.js`;window.addEventListener(`load`,()=>{navigator.serviceWorker.register(n,{scope:t}).then(e=>{console.log(`ServiceWorker registered:`,e.scope)}).catch(e=>{console.error(`ServiceWorker registration failed:`,e)})})}})(),(0,de.createRoot)(document.getElementById(`root`)).render((0,v.jsx)(y.StrictMode,{children:(0,v.jsx)(({children:e})=>(0,v.jsx)(Mt,{children:(0,v.jsx)(xi,{children:e})}),{children:(0,v.jsx)(vi,{})})}));export{rt as $,K as A,F as B,Gt as C,J as D,Tt as E,pt as F,k as G,A as H,I,ct as J,st as K,N as L,yt as M,gt as N,wt as O,ht as P,at as Q,P as R,rn as S,Nt as T,j as U,dt as V,O as W,it as X,D as Y,ot as Z,hn as _,Vr as a,ve as at,mn as b,Vn as c,Un as d,nt as et,Bn as f,X as g,zn as h,qr as i,S as it,vt as j,q as k,Wn as l,Pn as m,Kr as n,T as nt,Zn as o,x as ot,Fn as p,E as q,Jr as r,C as rt,qn as s,Qr as t,tt,Hn as u,pn as v,Y as w,dn as x,fn as y,ft as z};