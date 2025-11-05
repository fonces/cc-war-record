import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,x as n,y as r}from"./react-vendor-D1pS86Oe.js";import{n as i}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{A as a,C as o,D as s,E as c,G as l,J as u,K as d,M as f,N as p,O as m,Q as h,R as g,S as _,T as v,W as y,X as b,Y as x,Z as S,_ as C,a as w,at as T,b as E,c as D,ct as O,j as k,k as ee,o as A,ot as j,q as M,rt as N,s as P,st as F,t as I,v as te,y as L,z as R}from"./index-BXtaWAWr.js";import{n as ne,t as z}from"./stores-C_XRqzmO.js";var B=e(t());const V=e=>{let t=Object.values(R),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},re=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var H=e(n()),U=`
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

  ${o.mobile} {
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

  ${o.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,ie=i(G)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};

    ${o.mobile} {
      gap: ${({theme:e})=>e.spacing[2]};
      padding-left: 0;
    }
  }
`,K=i(G)`
  ${o.mobile} {
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

  ${o.mobile} {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,ae=i.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>N(e,t)};
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
    background: ${({winRate:e,theme:t})=>N(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${W}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,oe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,J=i(F)`
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
`;const Y=(0,B.memo)(({summary:e,map:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let o=m(),{t:s}=a();return(0,H.jsxs)(W,{children:[o?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(K,{children:(0,H.jsx)(p,{job:e.job,size:32})}),(0,H.jsx)(q,{children:e.job})]}):(0,H.jsx)(ie,{children:(0,H.jsxs)(`div`,{children:[(0,H.jsx)(p,{job:e.job,size:32}),e.job]})}),(0,H.jsx)(G,{children:(0,H.jsx)(O,{children:e.totalMatches})}),(0,H.jsx)(G,{children:(0,H.jsx)(O,{children:e.wins})}),(0,H.jsx)(G,{children:(0,H.jsx)(O,{children:e.defeats})}),(0,H.jsx)(G,{children:0<e.totalMatches?(0,H.jsx)(ae,{winRate:e.winRate,children:(0,H.jsx)(O,{suffix:`%`,children:e.winRate})}):(0,H.jsx)(`span`,{children:`--%`})}),(0,H.jsx)(G,{children:t?(0,H.jsxs)(oe,{children:[n&&(0,H.jsx)(J,{variant:`win`,onClick:()=>n(e.job,t),title:s(`match.addWin`),children:`W`}),r&&(0,H.jsx)(J,{variant:`defeat`,onClick:()=>r(e.job,t),title:s(`match.addDefeat`),children:`D`}),e.totalMatches>0&&i?(0,H.jsx)(J,{variant:`ghost`,icon:(0,H.jsx)(T,{name:`revert`,size:16}),onClick:()=>i(e.job,t),title:s(`match.rollback`)}):(n||r)&&(0,H.jsx)(`div`,{style:{width:`32px`}})]}):null})]})},(e,t)=>e.summary.totalMatches===t.summary.totalMatches);Y.displayName=`JobSummaryRow`;var se=i.div`
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

  ${o.mobile} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,ce=i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;

  ${o.mobile} {
    min-width: 600px;
  }
`,le=i.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,X=`
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
`,Z=i.th`
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
  ${X}

  ${o.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
    font-size: 0.625rem;

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,ue=i.tbody``,de=i.tr`
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

  ${o.mobile} {
    height: 48px;
  }
`,fe=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${X}

  ${o.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,pe=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${c} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const Q=(0,B.memo)(({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:o})=>{let{t:s}=a(),c=m(),l=!!(n||r||i),u=(0,B.useMemo)(()=>y(e),[e]);return(0,H.jsx)(se,{children:(0,H.jsxs)(ce,{children:[(0,H.jsx)(le,{children:(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(Z,{colSpan:c?2:1,children:s(`match.job`)}),(0,H.jsx)(Z,{children:s(`match.totalMatches`)}),(0,H.jsx)(Z,{children:s(`match.win`)}),(0,H.jsx)(Z,{children:s(`match.defeat`)}),(0,H.jsx)(Z,{children:s(`match.winRate`)}),(0,H.jsx)(Z,{children:l&&o?s(`match.actions`):``})]})}),(0,H.jsx)(ue,{children:e.length===0?(0,H.jsx)(de,{children:(0,H.jsx)(fe,{colSpan:l?6:5,children:(0,H.jsx)(pe,{children:s(`match.pleaseRegisterJob`)})})}):u.map(e=>{let a=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,H.jsx)(Y,{summary:a,map:o,onAddWin:n,onAddDefeat:r,onRevertLast:i},e)})})]})})},(e,t)=>e.usedJobs.length===t.usedJobs.length&&e.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)===t.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)&&e.map===t.map);Q.displayName=`JobSummaryTable`;const me=i.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  background-color: ${({theme:e})=>e.colors.primary[500]};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: ${({theme:e})=>e.spacing[2]};
`,he=i.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  background-color: ${({theme:e})=>e.colors.gray[400]};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: ${({theme:e})=>e.spacing[2]};
`,ge=i.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: ${s} 2s ease-in-out infinite;
`;var _e=i.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,ve=i.h4`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({isCurrentMap:e,theme:t})=>{let n=t.isDark;return e?n?`rgba(38, 161, 223, 0.15)`:`rgba(38, 161, 223, 0.08)`:n?`rgba(255, 255, 255, 0.03)`:`rgba(0, 0, 0, 0.02)`}};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
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

  ${o.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
    ${({isCurrentMap:e,theme:t})=>e&&`
      padding-left: calc(${t.spacing[3]} - 4px);
    `}
  }
`,ye=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  ${o.mobile} {
    font-size: 0.9375rem;
  }
`,be=i.div`
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

  ${o.mobile} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[2]};
    font-size: 0.75rem;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    justify-content: flex-start;

    > span {
      text-align: left;
    }
  }
`,xe=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>N(e,t)};
`,Se=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`,Ce=i.span`
  display: flex;
  align-items: center;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s ease;
`;const $=(0,B.memo)(({map:e,title:t,totalMatches:n,totalWins:r,totalDefeats:i,winRate:o,isCurrentMap:s,isNextMap:c,isOpen:l,onToggle:u,usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h})=>{let{t:g}=a();return(0,H.jsxs)(_e,{children:[(0,H.jsxs)(ve,{onClick:()=>u(e),isCurrentMap:s,children:[(0,H.jsxs)(ye,{children:[(0,H.jsx)(Ce,{isOpen:l,children:(0,H.jsx)(T,{name:`arrowDropDown`,size:20})}),(0,H.jsx)(`span`,{children:t}),s&&(0,H.jsxs)(me,{children:[(0,H.jsx)(ge,{}),`Now`]}),c&&(0,H.jsx)(he,{children:`Next`})]}),(0,H.jsxs)(be,{children:[(0,H.jsx)(`span`,{children:g(`character.stats.matches`,{count:n})}),(0,H.jsxs)(`span`,{children:[g(`character.stats.wins`,{count:r}),` / `,g(`character.stats.defeats`,{count:i})]}),0<n?(0,H.jsx)(xe,{winRate:o,children:g(`character.stats.winRate`,{rate:o})}):(0,H.jsx)(`span`,{children:g(`character.stats.noWinRate`)})]})]}),(0,H.jsx)(Se,{isOpen:l,children:(0,H.jsx)(Q,{usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h,map:e})})]})},(e,t)=>e.totalMatches===t.totalMatches&&e.usedJobs.length===t.usedJobs.length&&e.isCurrentMap===t.isCurrentMap&&e.isNextMap===t.isNextMap&&e.isOpen===t.isOpen&&e.onToggle===t.onToggle);$.displayName=`MapSection`;var we=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`;const Te=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:o}=a(),{currentMap:s,nextMap:c}=k(),l=V(t),u=re(t,e),d=t.length,f=t.filter(e=>e.isWin).length,p=d-f,m=d>0?Math.round(f/d*100):0,[h,_]=(0,B.useState)(()=>new Set([s])),[v,y]=(0,B.useState)(!1),b=(0,B.useCallback)(e=>{let t=new Set(h);t.has(e)?t.delete(e):t.add(e),_(t)},[h]);return(0,H.jsxs)(we,{children:[l.map(t=>{let a=t.map===s,l=t.map===c;return(0,H.jsx)($,{map:t.map,title:g(t.map,o),totalMatches:t.totalMatches,totalWins:t.totalWins,totalDefeats:t.totalDefeats,winRate:t.mapWinRate,isCurrentMap:a,isNextMap:l,isOpen:h.has(t.map),onToggle:b,usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i},t.map)}),(0,H.jsx)($,{title:o(`match.allStagesTotal`),totalMatches:d,totalWins:f,totalDefeats:p,winRate:m,isOpen:v,onToggle:()=>y(!v),usedJobs:e,jobSummaries:u})]})};var Ee=i.div`
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
`,De=i.div`
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

  ${o.mobile} {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  }
`,Oe=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;

  ${o.mobile} {
    font-size: 1rem;
  }
`,ke=i.div`
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

  ${o.mobile} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[2]};
    font-size: 0.75rem;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    justify-content: flex-start;

    > span {
      text-align: left;
    }
  }
`,Ae=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>N(e,t)};
`,je=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Me=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }

  ${o.mobile} {
    > * {
      padding: ${({theme:e})=>e.spacing[4]};
    }
  }
`,Ne=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};

  ${o.mobile} {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Pe=i(F)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Fe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${o.mobile} {
    margin-left: auto;
  }
`,Ie=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${o.mobile} {
    display: none;
  }
`,Le=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  justify-content: space-between;
  flex: 1;

  ${o.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Re=i(j)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;

  ${o.mobile} {
    font-size: 1rem;
  }
`;const ze=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:o,onAddWin:s,onAddDefeat:c,onRevertLast:l,isEditing:u,editingName:d,onEditingNameChange:f,onSortChange:p,onSaveEdit:m,onCancelEdit:g})=>{let{t:_}=a(),v=b(e.recentMatches),y=h(e.recentMatches),C=x(e.recentMatches),w=S(e.recentMatches),E=[{label:_(`character.actions.addJob`),icon:`add`,onClick:()=>o(e.character.uuid)},{label:_(`character.actions.editName`),icon:`edit`,onClick:()=>r(e.character.uuid,e.character.name)},{label:_(`character.actions.deleteName`),icon:`delete`,onClick:()=>i(e.character.uuid,e.character.name)}];return(0,H.jsxs)(Ee,{children:[(0,H.jsx)(De,{onClick:u?void 0:n,style:{cursor:u?`default`:`pointer`},children:u?(0,H.jsxs)(Le,{children:[(0,H.jsx)(Re,{value:d,inputSize:`sm`,onChange:e=>f(e.target.value),onKeyDown:e=>{e.key===`Enter`&&m(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,H.jsxs)(Fe,{children:[(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`arrowUp`,size:16}),onClick:e=>{e.stopPropagation(),p(`up`)},title:_(`character.moveUp`)}),(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`arrowDown`,size:16}),onClick:e=>{e.stopPropagation(),p(`down`)},title:_(`character.moveDown`)}),(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),m()},title:_(`common.save`)}),(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:_(`common.cancel`)})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Oe,{children:e.character.name}),(0,H.jsxs)(ke,{onClick:e=>e.stopPropagation(),children:[(0,H.jsx)(`span`,{children:_(`character.stats.matches`,{count:v})}),(0,H.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:y}),` / `,_(`character.stats.defeats`,{count:C})]}),0<v?(0,H.jsx)(Ae,{winRate:w,children:_(`character.stats.winRate`,{rate:w})}):(0,H.jsx)(`span`,{children:_(`character.stats.noWinRate`)}),(0,H.jsxs)(Fe,{children:[(0,H.jsxs)(Ie,{children:[(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),o(e.character.uuid)},title:_(`character.actions.addJob`)}),(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:_(`character.actions.editName`)}),(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:_(`character.actions.deleteName`)})]}),(0,H.jsx)(A,{items:E,triggerTitle:_(`character.actions.more`)})]})]})]})}),(0,H.jsx)(je,{isOpen:t,children:(0,H.jsx)(Me,{children:e.usedJobs.length===0?(0,H.jsx)(Ne,{children:(0,H.jsx)(Pe,{onClick:()=>o(e.character.uuid),children:_(`match.pleaseRegisterJob`)})}):(0,H.jsx)(Te,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:s?(t,n)=>s(e.character.uuid,t,n):void 0,onAddDefeat:c?(t,n)=>c(e.character.uuid,t,n):void 0,onRevertLast:l?(t,n)=>l(e.character.uuid,t,n):void 0})})})]})};var Be=i.div`
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
`,Ve=i.div`
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
`,He=i.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Ue=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,We=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Ge=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Ke=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 0;

  /* Flush内のmargin-bottomを打ち消す */
  > * {
    margin-bottom: 0;
  }
`,qe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 48px;
  }

  ${o.mobile} {
    flex-direction: column;
    align-items: stretch;

    button {
      align-self: center;
      width: auto;
      height: 40px;
      padding: 0 ${({theme:e})=>e.spacing[8]};
    }
  }
`,Je=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 200px;
`,Ye=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const Xe=({isOpen:e,onCreateCharacter:t,error:n,onClearError:r,success:i,onClearSuccess:o})=>{let{t:s}=a(),[c,l]=(0,B.useState)(``),[u,d]=(0,B.useState)(e);(0,B.useEffect)(()=>{d(e)},[e]);let f=()=>{d(!u)},p=()=>{c.trim()&&(t(c.trim()),l(``))};return(0,H.jsxs)(Be,{children:[(0,H.jsxs)(Ve,{onClick:f,children:[(0,H.jsx)(He,{children:s(`character.create`)}),(0,H.jsx)(Ue,{children:(0,H.jsx)(T,{name:u?`close`:`hamburger`,size:16})})]}),(0,H.jsx)(We,{isOpen:u,children:(0,H.jsxs)(Ge,{children:[(i||n)&&(0,H.jsxs)(Ke,{children:[i&&o&&(0,H.jsx)(P,{type:`success`,onClose:o,children:i}),n&&r&&(0,H.jsx)(P,{type:`error`,onClose:r,children:n})]}),(0,H.jsxs)(qe,{children:[(0,H.jsxs)(Je,{children:[(0,H.jsx)(Ye,{htmlFor:`character-name`,children:s(`character.name`)}),(0,H.jsx)(j,{id:`character-name`,value:c,onChange:e=>l(e.target.value),placeholder:s(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&p()})]}),(0,H.jsx)(F,{onClick:p,disabled:!c.trim(),children:s(`character.create`)})]})]})})]})},Ze=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=a();return(0,H.jsx)(v,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,H.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Qe=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,$e=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,et=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,tt=i.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,nt=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,rt=i.button`
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
`,it=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const at=({isOpen:e,onClose:t,onRegister:n,characterUuid:r,historyUuid:i,isLoading:o=!1})=>{let{t:s}=a(),c=z(e=>e.addCharacterStats),m=z(e=>e.getHistoryByUuid),h=ne(e=>e.characters),g=m(i)?.characterStats.find(e=>e.character.uuid===r)?.usedJobs||[],_=e=>{if(g.includes(e))return;let a=h.find(e=>e.uuid===r);if(!a){console.error(`キャラクターが見つかりません`);return}c(i,a)&&(n?.(e),t())},y=Object.values(M).map(e=>({role:e,roleInfo:u[e],jobs:Object.values(l).filter(t=>d[t].role===e)}));return(0,H.jsx)(v,{isOpen:e,onClose:t,title:s(`job.selectJob`),isLoading:o,children:(0,H.jsxs)(Qe,{children:[(0,H.jsx)($e,{children:s(`job.selectJobDescription`)}),y.map(({role:e,jobs:t})=>(0,H.jsxs)(et,{children:[(0,H.jsxs)(tt,{children:[(0,H.jsx)(f,{role:e,size:24}),s(`job.${e}`)]}),(0,H.jsx)(nt,{children:t.map(e=>{let t=g.includes(e);return(0,H.jsxs)(rt,{isSelected:!1,isDisabled:t,onClick:()=>_(e),type:`button`,disabled:t,children:[(0,H.jsx)(p,{job:e,size:32}),(0,H.jsx)(it,{children:s(`job.${e}`)})]},e)})})]},e))]})})},ot=()=>{let{t:e}=a();ee(e(`navigation.home`));let t=r(),n=m(),{histories:i,isLoading:o,getSortedHistories:s,addUsedJob:c}=z(),{createCharacter:l,updateCharacter:u,updateCharacterOrder:d,deleteCharacter:f,createMatchRecord:p,deleteMatchRecord:h,getCharacterStatsForSeason:g,matchRecords:v,error:y,clearError:b}=ne(),x=s()[0],S=x?g(x.uuid):[],[O,k]=(0,B.useState)(()=>S.length>0?new Set([S[0].character.uuid]):new Set),[A,j]=(0,B.useState)(null),[M,N]=(0,B.useState)(``),[P,I]=(0,B.useState)(!1),[R,V]=(0,B.useState)(null),[re,U]=(0,B.useState)(!1),[W,G]=(0,B.useState)(null),[ie,K]=(0,B.useState)(null),q=()=>{t.navigate({to:`/new`})},ae=t=>{try{l({name:t}),K(e(`character.createSuccess`,{name:t})),setTimeout(()=>K(null),3e3)}catch{}},oe=e=>{let t=new Set(O);t.has(e)?t.delete(e):t.add(e),k(t)},J=e=>{if(!A)return;let t=S.findIndex(e=>e.character.uuid===A);if(t===-1)return;let n=e===`up`?t-1:t+1;if(n<0||n>=S.length)return;let r=[...S],[i]=r.splice(t,1);r.splice(n,0,i);let a=r.map(e=>e.character.uuid);d(a)},Y=(e,t)=>{j(e),N(t)},se=()=>{j(null),N(``)},ce=()=>{if(!(!A||!M.trim()))try{u(A,M.trim())&&(j(null),N(``))}catch{}},le=(e,t)=>{V({uuid:e,name:t}),I(!0)},X=()=>{if(R)try{f(R.uuid),I(!1),V(null)}catch{}},Z=()=>{I(!1),V(null)},ue=e=>{G(e),U(!0)},de=()=>{U(!1),G(null)},fe=e=>{if(!(!x||!W))try{c({characterUuid:W,seasonUuid:x.uuid,job:e}),U(!1),G(null)}catch{}},pe=(e,t,n)=>{if(x)try{p({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!0})}catch{}},Q=(e,t,n)=>{if(x)try{p({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!1})}catch{}},me=(e,t,n)=>{if(x)try{let r=v.filter(r=>r.characterUuid===e&&r.seasonUuid===x.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);h(i.uuid)}catch{}};return o?(0,H.jsxs)(C,{children:[(0,H.jsx)(E,{children:e(`pages.home.title`,{seasonName:``})}),(0,H.jsx)(L,{children:e(`common.loading`)})]}):i.length===0?(0,H.jsxs)(C,{children:[(0,H.jsx)(_,{children:(0,H.jsx)(E,{children:e(`pages.home.noSeason`)})}),(0,H.jsx)(L,{children:e(`pages.home.createFirstSeason`)}),(0,H.jsx)(w,{})]}):(0,H.jsxs)(C,{children:[(0,H.jsxs)(_,{children:[(0,H.jsx)(E,{action:n?(0,H.jsx)(D,{icon:(0,H.jsx)(T,{name:`add`,size:16}),onClick:q,"aria-label":e(`pages.home.createSeason`)}):void 0,children:e(`pages.home.title`,{seasonName:x?.seasonName})}),!n&&(0,H.jsxs)(F,{variant:`outline`,size:`sm`,onClick:q,children:[(0,H.jsx)(T,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,H.jsx)(L,{children:e(`pages.home.description`)}),(0,H.jsxs)(te,{children:[S.map(e=>(0,H.jsx)(ze,{stats:e,isOpen:O.has(e.character.uuid),onToggle:()=>oe(e.character.uuid),onStartEdit:Y,onDelete:le,onOpenJobRegistration:ue,onAddWin:pe,onAddDefeat:Q,onRevertLast:me,isEditing:A===e.character.uuid,editingName:M,onEditingNameChange:N,onSortChange:J,onSaveEdit:ce,onCancelEdit:se},e.character.uuid)),(0,H.jsx)(Xe,{isOpen:S.length===0,onCreateCharacter:ae,error:y,onClearError:b,success:ie,onClearSuccess:()=>K(null)})]}),(0,H.jsx)(Ze,{isOpen:P,character:R,onClose:Z,onConfirm:X}),x&&W&&(0,H.jsx)(at,{isOpen:re,onClose:de,onRegister:fe,characterUuid:W,historyUuid:x.uuid})]})};export{ot as HomePage};