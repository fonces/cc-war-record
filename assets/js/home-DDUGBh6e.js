import{i as e}from"./rolldown-runtime-CescaEWC.js";import{kt as t}from"./vendor-CfpF3efx.js";import{b as n,y as r}from"./vendor-react-Dqtmilgm.js";import{n as i}from"./vendor-styled-zRjDkof3.js";import"./vendor-jszip-BemITh_p.js";import"./vendor-i18n-DFMPNbhM.js";import{$ as a,A as o,C as s,F as c,H as l,I as u,J as d,M as f,N as p,O as m,P as h,Q as g,U as _,V as v,X as y,Y as b,Z as x,a as ee,b as S,c as C,ct as w,et as te,ft as T,ht as E,j as D,k as O,l as k,mt as A,nt as j,o as ne,ot as M,t as N,tt as P,ut as F,v as I,w as L,x as R,y as re}from"./index-C5jF5Hv-.js";import{n as ie,t as z}from"./stores-C0mYd_Ps.js";import{t as ae}from"./obsLayoutStore-VWYliVl_.js";var B=e(t());const V=e=>{let t=Object.values(_),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},oe=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var H=e(n()),U=`
  &:first-child {
    padding-left: 24px;
    text-align: left;
    width: calc(100% - 500px);
  }

  &:nth-child(2) {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
  }

  &:last-child {
    padding-right: 24px;
    width: 160px;
    min-width: 160px;
    max-width: 160px;
  }
`,W=i.tr`
  border-bottom: 1px solid rgba(38, 161, 223, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 64px;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: linear-gradient(90deg, rgba(38, 161, 223, 0.03) 0%, rgba(243, 99, 70, 0.03) 100%);

    &::before {
      width: 4px;
    }
  }

  ${L.mobile} {
    height: 48px;
  }
`,G=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${U}

  ${L.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,se=i(G)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;

    ${L.mobile} {
      gap: ${({theme:e})=>e.spacing[2]};
    }
  }
`,K=i(G)`
  ${L.mobile} {
    position: sticky;
    left: 0;
    width: 48px;
    min-width: 48px;
    max-width: 48px;
    padding: ${({theme:e})=>e.spacing[2]};
    z-index: 1;

    img {
      transform: translateY(3px);
    }
  }
`,q=i(G)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  text-align: left;

  ${L.mobile} {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,J=i.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>w(e,t)};
  position: relative;
  display: inline-block;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({winRate:e,theme:t})=>w(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${W}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,ce=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,Y=i(A)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(38, 161, 223, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(-2px);
  }
`;const X=(0,B.memo)(({summary:e,map:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let a=D(),{t:o}=p();return(0,H.jsxs)(W,{children:[a?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(K,{children:(0,H.jsx)(u,{job:e.job,size:32})}),(0,H.jsx)(q,{children:e.job})]}):(0,H.jsx)(se,{children:(0,H.jsxs)(`div`,{children:[(0,H.jsx)(u,{job:e.job,size:32}),e.job]})}),(0,H.jsx)(G,{children:(0,H.jsx)(E,{children:e.totalMatches})}),(0,H.jsx)(G,{children:(0,H.jsx)(E,{children:e.wins})}),(0,H.jsx)(G,{children:(0,H.jsx)(E,{children:e.defeats})}),(0,H.jsx)(G,{children:0<e.totalMatches?(0,H.jsx)(J,{winRate:e.winRate,children:(0,H.jsx)(E,{suffix:`%`,children:e.winRate})}):(0,H.jsx)(`span`,{children:`--%`})}),(0,H.jsx)(G,{children:t?(0,H.jsxs)(ce,{children:[n&&(0,H.jsx)(Y,{variant:`win`,onClick:()=>n(e.job,t),title:o(`match.addWin`),children:`W`}),r&&(0,H.jsx)(Y,{variant:`defeat`,onClick:()=>r(e.job,t),title:o(`match.addDefeat`),children:`D`}),e.totalMatches>0&&i?(0,H.jsx)(Y,{variant:`ghost`,icon:(0,H.jsx)(F,{name:`revert`,size:16}),onClick:()=>i(e.job,t),title:o(`match.rollback`)}):(n||r)&&(0,H.jsx)(`div`,{style:{width:`32px`}})]}):null})]})},(e,t)=>e.summary.totalMatches===t.summary.totalMatches);X.displayName=`JobSummaryRow`;var le=i.div`
  overflow: hidden;
  background: ${({theme:e})=>e.colors.transparent};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  /* border: 1px solid ${({theme:e})=>e.colors.borderLight}; */
  border-radius: 0 0 ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    box-shadow:
      ${({theme:e})=>e.shadows[`2xl`]},
      0 0 0 1px rgba(38, 161, 223, 0.1);
    border-color: ${({theme:e})=>e.colors.border};
  }

  ${L.mobile} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,ue=i.table`
  border-collapse: collapse;
  border-top: 1px solid rgba(38, 161, 223, 0.3);
  font-size: 0.875rem;
  table-layout: fixed;
  width: 100%;

  ${L.mobile} {
    min-width: 600px;
  }
`,de=i.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,Z=`
  &:first-child {
    padding-left: 24px;
    text-align: left;
    width: calc(100% - 500px);
  }

  &:nth-child(2) {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
  }

  &:last-child {
    padding-right: 24px;
    width: 160px;
    min-width: 160px;
    max-width: 160px;

    ${L.mobile} {
      width: 140px;
      min-width: 140px;
      max-width: 140px;
    }
  }
`,Q=i.th`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.gray[700]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
  ${Z}

  ${L.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
    font-size: 0.625rem;

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,fe=i.tbody``,pe=i.tr`
  border-bottom: 1px solid rgba(38, 161, 223, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 64px;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: linear-gradient(90deg, rgba(38, 161, 223, 0.03) 0%, rgba(243, 99, 70, 0.03) 100%);

    &::before {
      width: 4px;
    }
  }

  ${L.mobile} {
    height: 48px;
  }
`,me=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${Z}

  ${L.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,he=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${O} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const $=(0,B.memo)(({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=p(),s=D(),c=!!(n||r||i),l=(0,B.useMemo)(()=>d(e),[e]);return(0,H.jsx)(le,{children:(0,H.jsxs)(ue,{children:[(0,H.jsx)(de,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(Q,{colSpan:s?2:1,children:o(`match.job`)}),(0,H.jsx)(Q,{children:o(`match.totalMatches`)}),(0,H.jsx)(Q,{children:o(`match.win`)}),(0,H.jsx)(Q,{children:o(`match.defeat`)}),(0,H.jsx)(Q,{children:o(`match.winRate`)}),(0,H.jsx)(Q,{children:c&&a?o(`match.actions`):``})]})}),(0,H.jsx)(fe,{children:e.length===0?(0,H.jsx)(pe,{children:(0,H.jsx)(me,{colSpan:c?6:5,children:(0,H.jsx)(he,{children:o(`match.pleaseRegisterJob`)})})}):l.map(e=>{let o=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,H.jsx)(X,{summary:o,map:a,onAddWin:n,onAddDefeat:r,onRevertLast:i},e)})})]})})},(e,t)=>e.usedJobs.length===t.usedJobs.length&&e.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)===t.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)&&e.map===t.map);$.displayName=`JobSummaryTable`;var ge=i.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: 2px ${({theme:e})=>e.spacing[1]};
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;const _e=i(ge)`
  background-color: ${({theme:e})=>e.colors.primary[500]};
`,ve=i(ge)`
  background-color: ${({theme:e})=>e.colors.gray[400]};
`,ye=i.span`
  width: 5px;
  height: 5px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: ${o} 2s ease-in-out infinite;
`;var be=i.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,xe=i.div`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({isCurrentMap:e,theme:t})=>{let n=t.isDark;return e?n?`rgba(38, 161, 223, 0.15)`:`rgba(38, 161, 223, 0.08)`:n?`rgba(255, 255, 255, 0.03)`:`rgba(0, 0, 0, 0.02)`}};
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: background-color 0.2s ease;

  ${({isCurrentMap:e,theme:t})=>e&&`
    border-left: 4px solid ${t.colors.primary[500]};
    padding-left: calc(${t.spacing[4]} - 4px);
  `}

  &:hover {
    background-color: ${({isCurrentMap:e,theme:t})=>{let n=t.isDark;return e?n?`rgba(38, 161, 223, 0.22)`:`rgba(38, 161, 223, 0.12)`:n?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.04)`}};
  }

  ${L.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
    ${({isCurrentMap:e,theme:t})=>e&&`
      padding-left: calc(${t.spacing[3]} - 4px);
    `}
  }
`,Se=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  ${L.mobile} {
    font-size: 0.9375rem;
  }
`,Ce=i.span`
  font-weight: 600;

  ${L.mobile} {
    font-size: 0.8125rem;
  }
`,we=i.span`
  font-size: 0.625rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 400;
  opacity: 0.8;

  ${({isCurrentMap:e,isNextMap:t})=>(e||t)&&`
      ${L.mobile} {
        display: none;
      }
    `}
`,Te=i.div`
  align-items: center;
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: flex-end;
  color: ${({theme:e})=>e.colors.textSecondary};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-radius: ${({theme:e})=>e.borderRadius.lg};

  ${L.mobile} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[2]};
    font-size: 0.75rem;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    justify-content: flex-start;

    > span {
      text-align: left;
    }
  }
`,Ee=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>w(e,t)};
`,De=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`,Oe=i.span`
  display: flex;
  align-items: center;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s ease;
`;const ke=(0,B.memo)(({map:e,title:t,totalMatches:n,totalWins:r,totalDefeats:i,winRate:a,isCurrentMap:o,isNextMap:s,isOpen:c,onToggle:u,usedJobs:d,jobSummaries:f,onAddWin:m,onAddDefeat:h,onRevertLast:g})=>{let{t:_}=p(),v=e?l(e):null,y=v?`${M(v.startTime)} ~ ${M(v.endTime)}`:null;return(0,H.jsxs)(be,{children:[(0,H.jsxs)(xe,{onClick:()=>u(e),isCurrentMap:o,children:[(0,H.jsxs)(Se,{children:[(0,H.jsx)(Oe,{isOpen:c,children:(0,H.jsx)(F,{name:`arrowDropDown`,size:20})}),(0,H.jsx)(Ce,{children:t}),y&&(0,H.jsx)(we,{isCurrentMap:o,isNextMap:s,children:y}),o&&(0,H.jsxs)(_e,{children:[(0,H.jsx)(ye,{}),`Now`]}),s&&(0,H.jsx)(ve,{children:`Next`})]}),(0,H.jsxs)(Te,{children:[(0,H.jsx)(`span`,{children:_(`character.stats.matches`,{count:n})}),(0,H.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:r}),` / `,_(`character.stats.defeats`,{count:i})]}),0<n?(0,H.jsx)(Ee,{winRate:a,children:_(`character.stats.winRate`,{rate:a})}):(0,H.jsx)(`span`,{children:_(`character.stats.noWinRate`)})]})]}),(0,H.jsx)(De,{isOpen:c,children:(0,H.jsx)($,{usedJobs:d,jobSummaries:f,onAddWin:m,onAddDefeat:h,onRevertLast:g,map:e})})]})},(e,t)=>e.title===t.title&&e.totalMatches===t.totalMatches&&e.usedJobs.length===t.usedJobs.length&&e.isCurrentMap===t.isCurrentMap&&e.isNextMap===t.isNextMap&&e.isOpen===t.isOpen&&e.onToggle===t.onToggle);ke.displayName=`MapSection`;var Ae=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};

  ${L.mobile} {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`;const je=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=p(),{currentMap:o,nextMap:s}=h(),c=V(t),l=oe(t,e),u=t.length,d=t.filter(e=>e.isWin).length,f=u-d,m=u>0?Math.round(d/u*100):0,[g,_]=(0,B.useState)(()=>new Set([o])),[y,b]=(0,B.useState)(!1),x=(0,B.useCallback)(e=>{let t=new Set(g);t.has(e)?t.delete(e):t.add(e),_(t)},[g]);return(0,H.jsxs)(Ae,{children:[c.map(t=>{let c=t.map===o,l=t.map===s;return(0,H.jsx)(ke,{map:t.map,title:v(t.map,a),totalMatches:t.totalMatches,totalWins:t.totalWins,totalDefeats:t.totalDefeats,winRate:t.mapWinRate,isCurrentMap:c,isNextMap:l,isOpen:g.has(t.map),onToggle:x,usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i},t.map)}),(0,H.jsx)(ke,{title:a(`match.allStagesTotal`),totalMatches:u,totalWins:d,totalDefeats:f,winRate:m,isOpen:y,onToggle:()=>b(!y),usedJobs:e,jobSummaries:l})]})};var Me=i.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
    border-color: ${({theme:e})=>e.colors.border};
  }
`,Ne=i.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;
  height: 85px;

  &:hover {
    background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)`};
  }

  ${L.mobile} {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  }
`,Pe=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;

  ${L.mobile} {
    font-size: 1rem;
  }
`,Fe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  justify-content: flex-end;
  color: ${({theme:e})=>e.colors.textSecondary};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-radius: ${({theme:e})=>e.borderRadius.lg};

  ${L.mobile} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[2]};
    font-size: 0.75rem;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    justify-content: flex-start;

    > span {
      text-align: left;
    }
  }
`,Ie=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>w(e,t)};
`,Le=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Re=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }

  ${L.mobile} {
    > * {
      padding: ${({theme:e})=>e.spacing[4]};
    }
  }
`,ze=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};

  ${L.mobile} {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Be=i(A)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ve=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${L.mobile} {
    margin-left: auto;
  }
`,He=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${L.mobile} {
    display: none;
  }
`,Ue=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  justify-content: space-between;
  flex: 1;

  ${L.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,We=i(T)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;

  ${L.mobile} {
    font-size: 1rem;
  }
`;const Ge=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:o,onAddWin:s,onAddDefeat:c,onRevertLast:l,isEditing:u,editingName:d,onEditingNameChange:f,onSortChange:m,onSaveEdit:h,onCancelEdit:g})=>{let{t:_}=p(),v=te(e.recentMatches),y=j(e.recentMatches),b=a(e.recentMatches),x=P(e.recentMatches),ee=[{label:_(`character.actions.addJob`),icon:`add`,onClick:()=>o(e.character.uuid)},{label:_(`character.actions.editName`),icon:`edit`,onClick:()=>r(e.character.uuid,e.character.name)},{label:_(`character.actions.deleteName`),icon:`delete`,onClick:()=>i(e.character.uuid,e.character.name)}];return(0,H.jsxs)(Me,{children:[(0,H.jsx)(Ne,{onClick:u?void 0:n,style:{cursor:u?`default`:`pointer`},children:u?(0,H.jsxs)(Ue,{children:[(0,H.jsx)(We,{value:d,inputSize:`sm`,onChange:e=>f(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,H.jsxs)(Ve,{children:[(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`arrowUp`,size:16}),onClick:e=>{e.stopPropagation(),m(`up`)},title:_(`character.moveUp`)}),(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`arrowDown`,size:16}),onClick:e=>{e.stopPropagation(),m(`down`)},title:_(`character.moveDown`)}),(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:_(`common.save`)}),(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:_(`common.cancel`)})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Pe,{children:e.character.name}),(0,H.jsxs)(Fe,{onClick:e=>e.stopPropagation(),children:[(0,H.jsx)(`span`,{children:_(`character.stats.matches`,{count:v})}),(0,H.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:y}),` / `,_(`character.stats.defeats`,{count:b})]}),0<v?(0,H.jsx)(Ie,{winRate:x,children:_(`character.stats.winRate`,{rate:x})}):(0,H.jsx)(`span`,{children:_(`character.stats.noWinRate`)}),(0,H.jsxs)(Ve,{children:[(0,H.jsxs)(He,{children:[(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),o(e.character.uuid)},title:_(`character.actions.addJob`)}),(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:_(`character.actions.editName`)}),(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:_(`character.actions.deleteName`)})]}),(0,H.jsx)(ne,{items:ee,triggerTitle:_(`character.actions.more`)})]})]})]})}),(0,H.jsx)(Le,{isOpen:t,children:(0,H.jsx)(Re,{children:e.usedJobs.length===0?(0,H.jsx)(ze,{children:(0,H.jsx)(Be,{onClick:()=>o(e.character.uuid),children:_(`match.pleaseRegisterJob`)})}):(0,H.jsx)(je,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:s?(t,n)=>s(e.character.uuid,t,n):void 0,onAddDefeat:c?(t,n)=>c(e.character.uuid,t,n):void 0,onRevertLast:l?(t,n)=>l(e.character.uuid,t,n):void 0})})})]})};var Ke=i.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
    border-color: ${({theme:e})=>e.colors.border};
  }
`,qe=i.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  cursor: pointer;
  user-select: none;
  display: flex;
  height: 85px;
  justify-content: space-between;
  align-items: center;
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)`};
  }
`,Je=i.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Ye=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Xe=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Ze=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Qe=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 0;

  /* Flush内のmargin-bottomを打ち消す */
  > * {
    margin-bottom: 0;
  }
`,$e=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 48px;
  }

  ${L.mobile} {
    flex-direction: column;
    align-items: stretch;

    button {
      align-self: center;
      width: auto;
      height: 40px;
      padding: 0 ${({theme:e})=>e.spacing[8]};
    }
  }
`,et=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 200px;
`,tt=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const nt=({isOpen:e,onCreateCharacter:t,error:n,onClearError:r,success:i,onClearSuccess:a})=>{let{t:o}=p(),[s,c]=(0,B.useState)(``),[l,u]=(0,B.useState)(e);(0,B.useEffect)(()=>{u(e)},[e]);let d=()=>{u(!l)},f=()=>{s.trim()&&(t(s.trim()),c(``))};return(0,H.jsxs)(Ke,{children:[(0,H.jsxs)(qe,{onClick:d,children:[(0,H.jsx)(Je,{children:o(`character.create`)}),(0,H.jsx)(Ye,{children:(0,H.jsx)(F,{name:l?`close`:`hamburger`,size:16})})]}),(0,H.jsx)(Xe,{isOpen:l,children:(0,H.jsxs)(Ze,{children:[(i||n)&&(0,H.jsxs)(Qe,{children:[i&&a&&(0,H.jsx)(C,{type:`success`,onClose:a,children:i}),n&&r&&(0,H.jsx)(C,{type:`error`,onClose:r,children:n})]}),(0,H.jsxs)($e,{children:[(0,H.jsxs)(et,{children:[(0,H.jsx)(tt,{htmlFor:`character-name`,children:o(`character.name`)}),(0,H.jsx)(T,{id:`character-name`,value:s,onChange:e=>c(e.target.value),placeholder:o(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&f()})]}),(0,H.jsx)(A,{onClick:f,disabled:!s.trim(),children:o(`character.create`)})]})]})})]})},rt=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=p();return(0,H.jsx)(m,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,H.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var it=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,at=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,ot=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,st=i.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ct=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,lt=i.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 2px solid
    ${({isSelected:e,isDisabled:t,theme:n})=>t?n.isDark?`rgba(71, 85, 105, 0.5)`:n.colors.gray[300]:e?n.colors.primary[500]:n.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({isSelected:e,isDisabled:t,theme:n})=>t?n.isDark?`rgba(51, 65, 85, 0.3)`:n.colors.gray[50]:e?n.isDark?`rgba(38, 161, 223, 0.2)`:n.colors.primary[50]:n.colors.surface};
  cursor: ${({isDisabled:e})=>e?`not-allowed`:`pointer`};
  opacity: ${({isDisabled:e,theme:t})=>e?t.isDark?`1`:`0.6`:`1`};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({isDisabled:e,theme:t})=>e?t.isDark?`rgba(71, 85, 105, 0.5)`:t.colors.gray[300]:t.colors.primary[300]};
    background-color: ${({isDisabled:e,theme:t})=>e?t.isDark?`rgba(51, 65, 85, 0.3)`:t.colors.gray[50]:t.isDark?`rgba(38, 161, 223, 0.15)`:t.colors.primary[50]};
  }
`,ut=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const dt=({isOpen:e,onClose:t,onRegister:n,characterUuid:r,historyUuid:i,isLoading:a=!1})=>{let{t:o}=p(),s=z(e=>e.addCharacterStats),l=z(e=>e.getHistoryByUuid),d=ie(e=>e.characters),f=l(i)?.characterStats.find(e=>e.character.uuid===r)?.usedJobs||[],h=e=>{if(f.includes(e))return;let a=d.find(e=>e.uuid===r);if(!a){console.error(`キャラクターが見つかりません`);return}s(i,a)&&(n?.(e),t())},_=Object.values(x).map(e=>({role:e,roleInfo:g[e],jobs:Object.values(b).filter(t=>y[t].role===e)}));return(0,H.jsx)(m,{isOpen:e,onClose:t,title:o(`job.selectJob`),isLoading:a,children:(0,H.jsxs)(it,{children:[(0,H.jsx)(at,{children:o(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,H.jsxs)(ot,{children:[(0,H.jsxs)(st,{children:[(0,H.jsx)(c,{role:e,size:24}),o(`job.${e}`)]}),(0,H.jsx)(ct,{children:t.map(e=>{let t=f.includes(e);return(0,H.jsxs)(lt,{isSelected:!1,isDisabled:t,onClick:()=>h(e),type:`button`,disabled:t,children:[(0,H.jsx)(u,{job:e,size:32}),(0,H.jsx)(ut,{children:o(`job.${e}`)})]},e)})})]},e))]})})};var ft=i.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  margin-bottom: 16px;
`,pt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`,mt=i.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$isRecording:e,theme:t})=>e?t.colors.error[500]:t.colors.textSecondary};
  animation: ${({$isRecording:e})=>e?`pulse 2s ease-in-out infinite`:`none`};

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`,ht=i.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text};
`;const gt=()=>{let{t:e}=p();f(e(`navigation.home`));let t=r(),n=D(),{histories:i,isLoading:a,getSortedHistories:o,addUsedJob:c}=z(),{createCharacter:l,updateCharacter:u,updateCharacterOrder:d,deleteCharacter:m,createMatchRecord:h,deleteMatchRecord:g,getCharacterStatsForSeason:_,matchRecords:v,error:y,clearError:b}=ie(),{obsRecordingStartTime:x,startObsRecording:C,stopObsRecording:w}=ae(),[te,T]=(0,B.useState)(!1);(0,B.useEffect)(()=>{let e=e=>{e.key===`obs-browser-source-status`&&T(e.newValue===`open`)},t=()=>{let e=localStorage.getItem(`obs-browser-source-status`);T(e===`open`)};t(),window.addEventListener(`storage`,e);let n=setInterval(t,1e3);return()=>{window.removeEventListener(`storage`,e),clearInterval(n)}},[]);let E=o()[0],O=E?_(E.uuid):[],[j,ne]=(0,B.useState)(()=>O.length>0?new Set([O[0].character.uuid]):new Set),[M,P]=(0,B.useState)(null),[L,V]=(0,B.useState)(``),[oe,U]=(0,B.useState)(!1),[W,G]=(0,B.useState)(null),[se,K]=(0,B.useState)(!1),[q,J]=(0,B.useState)(null),[ce,Y]=(0,B.useState)(null),X=()=>{t.navigate({to:`/new`})},le=t=>{try{l({name:t}),Y(e(`character.createSuccess`,{name:t})),setTimeout(()=>Y(null),3e3)}catch{}},ue=e=>{let t=new Set(j);t.has(e)?t.delete(e):t.add(e),ne(t)},de=e=>{if(!M)return;let t=O.findIndex(e=>e.character.uuid===M);if(t===-1)return;let n=e===`up`?t-1:t+1;if(n<0||n>=O.length)return;let r=[...O],[i]=r.splice(t,1);r.splice(n,0,i);let a=r.map(e=>e.character.uuid);d(a)},Z=(e,t)=>{P(e),V(t)},Q=()=>{P(null),V(``)},fe=()=>{if(!(!M||!L.trim()))try{u(M,L.trim())&&(P(null),V(``))}catch{}},pe=(e,t)=>{G({uuid:e,name:t}),U(!0)},me=()=>{if(W)try{m(W.uuid),U(!1),G(null)}catch{}},he=()=>{U(!1),G(null)},$=e=>{J(e),K(!0)},ge=()=>{K(!1),J(null)},_e=e=>{if(!(!E||!q))try{c({characterUuid:q,seasonUuid:E.uuid,job:e}),K(!1),J(null)}catch{}},ve=(e,t,n)=>{if(E)try{h({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!0}),N(`record`,`win`)}catch{}},ye=(e,t,n)=>{if(E)try{h({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!1}),N(`record`,`defeat`)}catch{}},be=(e,t,n)=>{if(E)try{let r=v.filter(r=>r.characterUuid===e&&r.seasonUuid===E.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);g(i.uuid),N(`record`,`revert`)}catch{}};return a?(0,H.jsxs)(I,{children:[(0,H.jsx)(R,{children:e(`pages.home.title`,{seasonName:``})}),(0,H.jsx)(S,{children:e(`common.loading`)})]}):i.length===0?(0,H.jsxs)(I,{children:[(0,H.jsx)(s,{children:(0,H.jsx)(R,{children:e(`pages.home.noSeason`)})}),(0,H.jsx)(S,{children:e(`pages.home.createFirstSeason`)}),(0,H.jsx)(ee,{})]}):(0,H.jsxs)(I,{children:[(0,H.jsxs)(s,{children:[(0,H.jsx)(R,{action:n?(0,H.jsx)(k,{icon:(0,H.jsx)(F,{name:`add`,size:16}),onClick:X,"aria-label":e(`pages.home.createSeason`)}):void 0,children:e(`pages.home.title`,{seasonName:E?.seasonName})}),!n&&(0,H.jsxs)(A,{variant:`outline`,size:`sm`,onClick:X,children:[(0,H.jsx)(F,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,H.jsx)(S,{children:e(`pages.home.description`)}),te&&(0,H.jsxs)(ft,{children:[(0,H.jsxs)(pt,{children:[(0,H.jsx)(mt,{$isRecording:!!x}),(0,H.jsx)(ht,{children:e(x?`obs.recording.active`:`obs.recording.description`)})]}),x?(0,H.jsxs)(A,{variant:`secondary`,size:`sm`,onClick:w,children:[(0,H.jsx)(F,{name:`xCircle`,size:16}),e(`obs.recording.stop`)]}):(0,H.jsxs)(A,{variant:`primary`,size:`sm`,onClick:C,children:[(0,H.jsx)(F,{name:`video`,size:16}),e(`obs.recording.start`)]})]}),(0,H.jsxs)(re,{children:[O.map(e=>(0,H.jsx)(Ge,{stats:e,isOpen:j.has(e.character.uuid),onToggle:()=>ue(e.character.uuid),onStartEdit:Z,onDelete:pe,onOpenJobRegistration:$,onAddWin:ve,onAddDefeat:ye,onRevertLast:be,isEditing:M===e.character.uuid,editingName:L,onEditingNameChange:V,onSortChange:de,onSaveEdit:fe,onCancelEdit:Q},e.character.uuid)),(0,H.jsx)(nt,{isOpen:O.length===0,onCreateCharacter:le,error:y,onClearError:b,success:ce,onClearSuccess:()=>Y(null)})]}),(0,H.jsx)(rt,{isOpen:oe,character:W,onClose:he,onConfirm:me}),E&&q&&(0,H.jsx)(dt,{isOpen:se,onClose:ge,onRegister:_e,characterUuid:q,historyUuid:E.uuid})]})};export{gt as HomePage};