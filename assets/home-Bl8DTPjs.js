import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,x as n,y as r}from"./react-vendor-D1pS86Oe.js";import{n as i}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{$ as a,A as o,B as s,C as c,D as l,E as u,G as d,J as f,K as p,M as m,N as h,O as g,Q as _,R as v,S as y,T as b,X as x,Y as S,Z as C,_ as w,a as ee,at as T,b as E,c as D,ct as O,j as k,k as te,lt as A,o as j,q as M,rt as N,s as P,st as F,t as I,ut as L,v as ne,y as R,z as re}from"./index-C6zVLts7.js";import{n as ie,t as z}from"./stores-Dqj4DgPB.js";var B=e(t());const V=e=>{let t=Object.values(s),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},H=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var U=e(n()),W=`
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
`,G=i.tr`
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

  ${c.mobile} {
    height: 48px;
  }
`,K=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${W}

  ${c.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,q=i(K)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};

    ${c.mobile} {
      gap: ${({theme:e})=>e.spacing[2]};
      padding-left: 0;
    }
  }
`,ae=i(K)`
  ${c.mobile} {
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
`,oe=i(K)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  text-align: left;

  ${c.mobile} {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,se=i.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>T(e,t)};
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
    background: ${({winRate:e,theme:t})=>T(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${G}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,ce=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,J=i(A)`
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
`;const Y=(0,B.memo)(({summary:e,map:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let a=g(),{t:s}=o();return(0,U.jsxs)(G,{children:[a?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(ae,{children:(0,U.jsx)(h,{job:e.job,size:32})}),(0,U.jsx)(oe,{children:e.job})]}):(0,U.jsx)(q,{children:(0,U.jsxs)(`div`,{children:[(0,U.jsx)(h,{job:e.job,size:32}),e.job]})}),(0,U.jsx)(K,{children:(0,U.jsx)(L,{children:e.totalMatches})}),(0,U.jsx)(K,{children:(0,U.jsx)(L,{children:e.wins})}),(0,U.jsx)(K,{children:(0,U.jsx)(L,{children:e.defeats})}),(0,U.jsx)(K,{children:0<e.totalMatches?(0,U.jsx)(se,{winRate:e.winRate,children:(0,U.jsx)(L,{suffix:`%`,children:e.winRate})}):(0,U.jsx)(`span`,{children:`--%`})}),(0,U.jsx)(K,{children:t?(0,U.jsxs)(ce,{children:[n&&(0,U.jsx)(J,{variant:`win`,onClick:()=>n(e.job,t),title:s(`match.addWin`),children:`W`}),r&&(0,U.jsx)(J,{variant:`defeat`,onClick:()=>r(e.job,t),title:s(`match.addDefeat`),children:`D`}),e.totalMatches>0&&i?(0,U.jsx)(J,{variant:`ghost`,icon:(0,U.jsx)(F,{name:`revert`,size:16}),onClick:()=>i(e.job,t),title:s(`match.rollback`)}):(n||r)&&(0,U.jsx)(`div`,{style:{width:`32px`}})]}):null})]})},(e,t)=>e.summary.totalMatches===t.summary.totalMatches);Y.displayName=`JobSummaryRow`;var le=i.div`
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

  ${c.mobile} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`,ue=i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;

  ${c.mobile} {
    min-width: 600px;
  }
`,de=i.thead`
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

    ${c.mobile} {
      width: 140px;
      min-width: 140px;
      max-width: 140px;
    }
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

  ${c.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
    font-size: 0.625rem;

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,Q=i.tbody``,fe=i.tr`
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

  ${c.mobile} {
    height: 48px;
  }
`,pe=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${X}

  ${c.mobile} {
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};

    &:first-child {
      padding-left: ${({theme:e})=>e.spacing[3]};
    }

    &:last-child {
      padding-right: ${({theme:e})=>e.spacing[3]};
    }
  }
`,me=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${u} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const he=(0,B.memo)(({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:s}=o(),c=g(),l=!!(n||r||i),u=(0,B.useMemo)(()=>d(e),[e]);return(0,U.jsx)(le,{children:(0,U.jsxs)(ue,{children:[(0,U.jsx)(de,{children:(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(Z,{colSpan:c?2:1,children:s(`match.job`)}),(0,U.jsx)(Z,{children:s(`match.totalMatches`)}),(0,U.jsx)(Z,{children:s(`match.win`)}),(0,U.jsx)(Z,{children:s(`match.defeat`)}),(0,U.jsx)(Z,{children:s(`match.winRate`)}),(0,U.jsx)(Z,{children:l&&a?s(`match.actions`):``})]})}),(0,U.jsx)(Q,{children:e.length===0?(0,U.jsx)(fe,{children:(0,U.jsx)(pe,{colSpan:l?6:5,children:(0,U.jsx)(me,{children:s(`match.pleaseRegisterJob`)})})}):u.map(e=>{let o=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,U.jsx)(Y,{summary:o,map:a,onAddWin:n,onAddDefeat:r,onRevertLast:i},e)})})]})})},(e,t)=>e.usedJobs.length===t.usedJobs.length&&e.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)===t.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)&&e.map===t.map);he.displayName=`JobSummaryTable`;var ge=i.span`
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
  animation: ${l} 2s ease-in-out infinite;
`;var be=i.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,xe=i.div`
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

  ${c.mobile} {
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

  ${c.mobile} {
    font-size: 0.9375rem;
  }
`,Ce=i.span`
  font-weight: 600;

  ${c.mobile} {
    font-size: 0.8125rem;
  }
`,we=i.span`
  font-size: 0.625rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 400;
  opacity: 0.8;

  ${({isCurrentMap:e,isNextMap:t})=>(e||t)&&`
      ${c.mobile} {
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

  ${c.mobile} {
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
  color: ${({winRate:e,theme:t})=>T(e,t)};
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
`;const $=(0,B.memo)(({map:e,title:t,totalMatches:n,totalWins:r,totalDefeats:i,winRate:a,isCurrentMap:s,isNextMap:c,isOpen:l,onToggle:u,usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h})=>{let{t:g}=o(),_=e?re(e):null,v=_?`${N(_.startTime)} ~ ${N(_.endTime)}`:null;return(0,U.jsxs)(be,{children:[(0,U.jsxs)(xe,{onClick:()=>u(e),isCurrentMap:s,children:[(0,U.jsxs)(Se,{children:[(0,U.jsx)(Oe,{isOpen:l,children:(0,U.jsx)(F,{name:`arrowDropDown`,size:20})}),(0,U.jsx)(Ce,{children:t}),v&&(0,U.jsx)(we,{isCurrentMap:s,isNextMap:c,children:v}),s&&(0,U.jsxs)(_e,{children:[(0,U.jsx)(ye,{}),`Now`]}),c&&(0,U.jsx)(ve,{children:`Next`})]}),(0,U.jsxs)(Te,{children:[(0,U.jsx)(`span`,{children:g(`character.stats.matches`,{count:n})}),(0,U.jsxs)(`span`,{children:[g(`character.stats.wins`,{count:r}),` / `,g(`character.stats.defeats`,{count:i})]}),0<n?(0,U.jsx)(Ee,{winRate:a,children:g(`character.stats.winRate`,{rate:a})}):(0,U.jsx)(`span`,{children:g(`character.stats.noWinRate`)})]})]}),(0,U.jsx)(De,{isOpen:l,children:(0,U.jsx)(he,{usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h,map:e})})]})},(e,t)=>e.title===t.title&&e.totalMatches===t.totalMatches&&e.usedJobs.length===t.usedJobs.length&&e.isCurrentMap===t.isCurrentMap&&e.isNextMap===t.isNextMap&&e.isOpen===t.isOpen&&e.onToggle===t.onToggle);$.displayName=`MapSection`;var ke=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};

  ${c.mobile} {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`;const Ae=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=o(),{currentMap:s,nextMap:c}=k(),l=V(t),u=H(t,e),d=t.length,f=t.filter(e=>e.isWin).length,p=d-f,m=d>0?Math.round(f/d*100):0,[h,g]=(0,B.useState)(()=>new Set([s])),[_,y]=(0,B.useState)(!1),b=(0,B.useCallback)(e=>{let t=new Set(h);t.has(e)?t.delete(e):t.add(e),g(t)},[h]);return(0,U.jsxs)(ke,{children:[l.map(t=>{let o=t.map===s,l=t.map===c;return(0,U.jsx)($,{map:t.map,title:v(t.map,a),totalMatches:t.totalMatches,totalWins:t.totalWins,totalDefeats:t.totalDefeats,winRate:t.mapWinRate,isCurrentMap:o,isNextMap:l,isOpen:h.has(t.map),onToggle:b,usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i},t.map)}),(0,U.jsx)($,{title:a(`match.allStagesTotal`),totalMatches:d,totalWins:f,totalDefeats:p,winRate:m,isOpen:_,onToggle:()=>y(!_),usedJobs:e,jobSummaries:u})]})};var je=i.div`
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
`,Me=i.div`
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

  ${c.mobile} {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  }
`,Ne=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;

  ${c.mobile} {
    font-size: 1rem;
  }
`,Pe=i.div`
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

  ${c.mobile} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[2]};
    font-size: 0.75rem;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    justify-content: flex-start;

    > span {
      text-align: left;
    }
  }
`,Fe=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>T(e,t)};
`,Ie=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Le=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }

  ${c.mobile} {
    > * {
      padding: ${({theme:e})=>e.spacing[4]};
    }
  }
`,Re=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};

  ${c.mobile} {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,ze=i(A)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Be=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${c.mobile} {
    margin-left: auto;
  }
`,Ve=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  ${c.mobile} {
    display: none;
  }
`,He=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  justify-content: space-between;
  flex: 1;

  ${c.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ue=i(O)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;

  ${c.mobile} {
    font-size: 1rem;
  }
`;const We=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:s,onAddWin:c,onAddDefeat:l,onRevertLast:u,isEditing:d,editingName:f,onEditingNameChange:p,onSortChange:m,onSaveEdit:h,onCancelEdit:g})=>{let{t:v}=o(),y=C(e.recentMatches),b=a(e.recentMatches),S=x(e.recentMatches),w=_(e.recentMatches),ee=[{label:v(`character.actions.addJob`),icon:`add`,onClick:()=>s(e.character.uuid)},{label:v(`character.actions.editName`),icon:`edit`,onClick:()=>r(e.character.uuid,e.character.name)},{label:v(`character.actions.deleteName`),icon:`delete`,onClick:()=>i(e.character.uuid,e.character.name)}];return(0,U.jsxs)(je,{children:[(0,U.jsx)(Me,{onClick:d?void 0:n,style:{cursor:d?`default`:`pointer`},children:d?(0,U.jsxs)(He,{children:[(0,U.jsx)(Ue,{value:f,inputSize:`sm`,onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,U.jsxs)(Be,{children:[(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`arrowUp`,size:16}),onClick:e=>{e.stopPropagation(),m(`up`)},title:v(`character.moveUp`)}),(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`arrowDown`,size:16}),onClick:e=>{e.stopPropagation(),m(`down`)},title:v(`character.moveDown`)}),(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:v(`common.save`)}),(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:v(`common.cancel`)})]})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Ne,{children:e.character.name}),(0,U.jsxs)(Pe,{onClick:e=>e.stopPropagation(),children:[(0,U.jsx)(`span`,{children:v(`character.stats.matches`,{count:y})}),(0,U.jsxs)(`span`,{children:[v(`character.stats.wins`,{count:b}),` / `,v(`character.stats.defeats`,{count:S})]}),0<y?(0,U.jsx)(Fe,{winRate:w,children:v(`character.stats.winRate`,{rate:w})}):(0,U.jsx)(`span`,{children:v(`character.stats.noWinRate`)}),(0,U.jsxs)(Be,{children:[(0,U.jsxs)(Ve,{children:[(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),s(e.character.uuid)},title:v(`character.actions.addJob`)}),(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:v(`character.actions.editName`)}),(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:v(`character.actions.deleteName`)})]}),(0,U.jsx)(j,{items:ee,triggerTitle:v(`character.actions.more`)})]})]})]})}),(0,U.jsx)(Ie,{isOpen:t,children:(0,U.jsx)(Le,{children:e.usedJobs.length===0?(0,U.jsx)(Re,{children:(0,U.jsx)(ze,{onClick:()=>s(e.character.uuid),children:v(`match.pleaseRegisterJob`)})}):(0,U.jsx)(Ae,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:c?(t,n)=>c(e.character.uuid,t,n):void 0,onAddDefeat:l?(t,n)=>l(e.character.uuid,t,n):void 0,onRevertLast:u?(t,n)=>u(e.character.uuid,t,n):void 0})})})]})};var Ge=i.div`
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
`,Ke=i.div`
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
`,qe=i.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Je=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ye=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Xe=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Ze=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 0;

  /* Flush内のmargin-bottomを打ち消す */
  > * {
    margin-bottom: 0;
  }
`,Qe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 48px;
  }

  ${c.mobile} {
    flex-direction: column;
    align-items: stretch;

    button {
      align-self: center;
      width: auto;
      height: 40px;
      padding: 0 ${({theme:e})=>e.spacing[8]};
    }
  }
`,$e=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 200px;
`,et=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const tt=({isOpen:e,onCreateCharacter:t,error:n,onClearError:r,success:i,onClearSuccess:a})=>{let{t:s}=o(),[c,l]=(0,B.useState)(``),[u,d]=(0,B.useState)(e);(0,B.useEffect)(()=>{d(e)},[e]);let f=()=>{d(!u)},p=()=>{c.trim()&&(t(c.trim()),l(``))};return(0,U.jsxs)(Ge,{children:[(0,U.jsxs)(Ke,{onClick:f,children:[(0,U.jsx)(qe,{children:s(`character.create`)}),(0,U.jsx)(Je,{children:(0,U.jsx)(F,{name:u?`close`:`hamburger`,size:16})})]}),(0,U.jsx)(Ye,{isOpen:u,children:(0,U.jsxs)(Xe,{children:[(i||n)&&(0,U.jsxs)(Ze,{children:[i&&a&&(0,U.jsx)(P,{type:`success`,onClose:a,children:i}),n&&r&&(0,U.jsx)(P,{type:`error`,onClose:r,children:n})]}),(0,U.jsxs)(Qe,{children:[(0,U.jsxs)($e,{children:[(0,U.jsx)(et,{htmlFor:`character-name`,children:s(`character.name`)}),(0,U.jsx)(O,{id:`character-name`,value:c,onChange:e=>l(e.target.value),placeholder:s(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&p()})]}),(0,U.jsx)(A,{onClick:p,disabled:!c.trim(),children:s(`character.create`)})]})]})})]})},nt=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=o();return(0,U.jsx)(b,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,U.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var rt=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,it=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,at=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,ot=i.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,st=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,ct=i.button`
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
`,lt=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const ut=({isOpen:e,onClose:t,onRegister:n,characterUuid:r,historyUuid:i,isLoading:a=!1})=>{let{t:s}=o(),c=z(e=>e.addCharacterStats),l=z(e=>e.getHistoryByUuid),u=ie(e=>e.characters),d=l(i)?.characterStats.find(e=>e.character.uuid===r)?.usedJobs||[],g=e=>{if(d.includes(e))return;let a=u.find(e=>e.uuid===r);if(!a){console.error(`キャラクターが見つかりません`);return}c(i,a)&&(n?.(e),t())},_=Object.values(f).map(e=>({role:e,roleInfo:S[e],jobs:Object.values(p).filter(t=>M[t].role===e)}));return(0,U.jsx)(b,{isOpen:e,onClose:t,title:s(`job.selectJob`),isLoading:a,children:(0,U.jsxs)(rt,{children:[(0,U.jsx)(it,{children:s(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,U.jsxs)(at,{children:[(0,U.jsxs)(ot,{children:[(0,U.jsx)(m,{role:e,size:24}),s(`job.${e}`)]}),(0,U.jsx)(st,{children:t.map(e=>{let t=d.includes(e);return(0,U.jsxs)(ct,{isSelected:!1,isDisabled:t,onClick:()=>g(e),type:`button`,disabled:t,children:[(0,U.jsx)(h,{job:e,size:32}),(0,U.jsx)(lt,{children:s(`job.${e}`)})]},e)})})]},e))]})})},dt=()=>{let{t:e}=o();te(e(`navigation.home`));let t=r(),n=g(),{histories:i,isLoading:a,getSortedHistories:s,addUsedJob:c}=z(),{createCharacter:l,updateCharacter:u,updateCharacterOrder:d,deleteCharacter:f,createMatchRecord:p,deleteMatchRecord:m,getCharacterStatsForSeason:h,matchRecords:_,error:v,clearError:b}=ie(),x=s()[0],S=x?h(x.uuid):[],[C,T]=(0,B.useState)(()=>S.length>0?new Set([S[0].character.uuid]):new Set),[O,k]=(0,B.useState)(null),[j,M]=(0,B.useState)(``),[N,P]=(0,B.useState)(!1),[I,L]=(0,B.useState)(null),[re,V]=(0,B.useState)(!1),[H,W]=(0,B.useState)(null),[G,K]=(0,B.useState)(null),q=()=>{t.navigate({to:`/new`})},ae=t=>{try{l({name:t}),K(e(`character.createSuccess`,{name:t})),setTimeout(()=>K(null),3e3)}catch{}},oe=e=>{let t=new Set(C);t.has(e)?t.delete(e):t.add(e),T(t)},se=e=>{if(!O)return;let t=S.findIndex(e=>e.character.uuid===O);if(t===-1)return;let n=e===`up`?t-1:t+1;if(n<0||n>=S.length)return;let r=[...S],[i]=r.splice(t,1);r.splice(n,0,i);let a=r.map(e=>e.character.uuid);d(a)},ce=(e,t)=>{k(e),M(t)},J=()=>{k(null),M(``)},Y=()=>{if(!(!O||!j.trim()))try{u(O,j.trim())&&(k(null),M(``))}catch{}},le=(e,t)=>{L({uuid:e,name:t}),P(!0)},ue=()=>{if(I)try{f(I.uuid),P(!1),L(null)}catch{}},de=()=>{P(!1),L(null)},X=e=>{W(e),V(!0)},Z=()=>{V(!1),W(null)},Q=e=>{if(!(!x||!H))try{c({characterUuid:H,seasonUuid:x.uuid,job:e}),V(!1),W(null)}catch{}},fe=(e,t,n)=>{if(x)try{p({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!0})}catch{}},pe=(e,t,n)=>{if(x)try{p({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!1})}catch{}},me=(e,t,n)=>{if(x)try{let r=_.filter(r=>r.characterUuid===e&&r.seasonUuid===x.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);m(i.uuid)}catch{}};return a?(0,U.jsxs)(w,{children:[(0,U.jsx)(E,{children:e(`pages.home.title`,{seasonName:``})}),(0,U.jsx)(R,{children:e(`common.loading`)})]}):i.length===0?(0,U.jsxs)(w,{children:[(0,U.jsx)(y,{children:(0,U.jsx)(E,{children:e(`pages.home.noSeason`)})}),(0,U.jsx)(R,{children:e(`pages.home.createFirstSeason`)}),(0,U.jsx)(ee,{})]}):(0,U.jsxs)(w,{children:[(0,U.jsxs)(y,{children:[(0,U.jsx)(E,{action:n?(0,U.jsx)(D,{icon:(0,U.jsx)(F,{name:`add`,size:16}),onClick:q,"aria-label":e(`pages.home.createSeason`)}):void 0,children:e(`pages.home.title`,{seasonName:x?.seasonName})}),!n&&(0,U.jsxs)(A,{variant:`outline`,size:`sm`,onClick:q,children:[(0,U.jsx)(F,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,U.jsx)(R,{children:e(`pages.home.description`)}),(0,U.jsxs)(ne,{children:[S.map(e=>(0,U.jsx)(We,{stats:e,isOpen:C.has(e.character.uuid),onToggle:()=>oe(e.character.uuid),onStartEdit:ce,onDelete:le,onOpenJobRegistration:X,onAddWin:fe,onAddDefeat:pe,onRevertLast:me,isEditing:O===e.character.uuid,editingName:j,onEditingNameChange:M,onSortChange:se,onSaveEdit:Y,onCancelEdit:J},e.character.uuid)),(0,U.jsx)(tt,{isOpen:S.length===0,onCreateCharacter:ae,error:v,onClearError:b,success:G,onClearSuccess:()=>K(null)})]}),(0,U.jsx)(nt,{isOpen:N,character:I,onClose:de,onConfirm:ue}),x&&H&&(0,U.jsx)(ut,{isOpen:re,onClose:Z,onRegister:Q,characterUuid:H,historyUuid:x.uuid})]})};export{dt as HomePage};