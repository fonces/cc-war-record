import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,x as n,y as r}from"./react-vendor-D1pS86Oe.js";import{n as i}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{A as a,C as o,D as s,E as c,F as l,G as u,H as d,I as f,J as p,K as m,O as h,T as g,U as _,V as v,W as y,Y as b,_ as x,a as ee,at as S,et as C,g as w,it as T,k as E,nt as D,o as O,q as k,rt as A,s as j,t as M,v as N,w as P,x as te,y as F}from"./index-r0khQhuz.js";import{n as ne,t as I}from"./stores-Dch58SN2.js";var L=e(t());const R=e=>{let t=Object.values(f),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},re=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var z=e(n()),B=`
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
`,V=i.tr`
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
`,H=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${B}
`,ie=i(H)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,U=i.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>C(e,t)};
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
    background: ${({winRate:e,theme:t})=>C(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${V}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,ae=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,W=i(T)`
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
`;const G=(0,L.memo)(({summary:e,map:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:o}=s();return(0,z.jsxs)(V,{children:[(0,z.jsx)(ie,{children:(0,z.jsxs)(`div`,{children:[(0,z.jsx)(a,{job:e.job,size:32}),e.job]})}),(0,z.jsx)(H,{children:(0,z.jsx)(S,{children:e.totalMatches})}),(0,z.jsx)(H,{children:(0,z.jsx)(S,{children:e.wins})}),(0,z.jsx)(H,{children:(0,z.jsx)(S,{children:e.defeats})}),(0,z.jsx)(H,{children:0<e.totalMatches?(0,z.jsx)(U,{winRate:e.winRate,children:(0,z.jsx)(S,{suffix:`%`,children:e.winRate})}):(0,z.jsx)(`span`,{children:`--%`})}),(0,z.jsx)(H,{children:t?(0,z.jsxs)(ae,{children:[n&&(0,z.jsx)(W,{variant:`win`,onClick:()=>n(e.job,t),title:o(`match.addWin`),children:`W`}),r&&(0,z.jsx)(W,{variant:`defeat`,onClick:()=>r(e.job,t),title:o(`match.addDefeat`),children:`D`}),e.totalMatches>0&&i?(0,z.jsx)(W,{variant:`ghost`,icon:(0,z.jsx)(D,{name:`revert`,size:16}),onClick:()=>i(e.job,t),title:o(`match.rollback`)}):(n||r)&&(0,z.jsx)(`div`,{style:{width:`32px`}})]}):null})]})},(e,t)=>e.summary.totalMatches===t.summary.totalMatches);G.displayName=`JobSummaryRow`;var K=i.div`
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
`,q=i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,J=i.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,Y=`
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
`,X=i.th`
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
  ${Y}
`,oe=i.tbody``,se=i.tr`
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
`,Z=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${Y}
`,ce=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${P} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const Q=(0,L.memo)(({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=s(),c=!!(n||r||i),l=(0,L.useMemo)(()=>v(e),[e]);return(0,z.jsx)(K,{children:(0,z.jsxs)(q,{children:[(0,z.jsx)(J,{children:(0,z.jsxs)(`tr`,{children:[(0,z.jsx)(X,{children:o(`match.job`)}),(0,z.jsx)(X,{children:o(`match.totalMatches`)}),(0,z.jsx)(X,{children:o(`match.win`)}),(0,z.jsx)(X,{children:o(`match.defeat`)}),(0,z.jsx)(X,{children:o(`match.winRate`)}),(0,z.jsx)(X,{children:c&&a?o(`match.actions`):``})]})}),(0,z.jsx)(oe,{children:e.length===0?(0,z.jsx)(se,{children:(0,z.jsx)(Z,{colSpan:c?6:5,children:(0,z.jsx)(ce,{children:o(`match.pleaseRegisterJob`)})})}):l.map(e=>{let o=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,z.jsx)(G,{summary:o,map:a,onAddWin:n,onAddDefeat:r,onRevertLast:i},e)})})]})})},(e,t)=>e.usedJobs.length===t.usedJobs.length&&e.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)===t.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)&&e.map===t.map);Q.displayName=`JobSummaryTable`;const le=i.span`
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
`,ue=i.span`
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
`,de=i.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: ${g} 2s ease-in-out infinite;
`;var fe=i.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,pe=i.h4`
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
`,me=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,he=i.div`
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
`,ge=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>C(e,t)};
`,_e=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`,ve=i.span`
  display: flex;
  align-items: center;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s ease;
`;const $=(0,L.memo)(({map:e,title:t,totalMatches:n,totalWins:r,totalDefeats:i,winRate:a,isCurrentMap:o,isNextMap:c,isOpen:l,onToggle:u,usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h})=>{let{t:g}=s();return(0,z.jsxs)(fe,{children:[(0,z.jsxs)(pe,{onClick:u,isCurrentMap:o,children:[(0,z.jsxs)(me,{children:[(0,z.jsx)(ve,{isOpen:l,children:(0,z.jsx)(D,{name:`arrowDropDown`,size:20})}),(0,z.jsx)(`span`,{children:t}),o&&(0,z.jsxs)(le,{children:[(0,z.jsx)(de,{}),`Now`]}),c&&(0,z.jsx)(ue,{children:`Next`})]}),(0,z.jsxs)(he,{children:[(0,z.jsx)(`span`,{children:g(`character.stats.matches`,{count:n})}),(0,z.jsxs)(`span`,{children:[g(`character.stats.wins`,{count:r}),` / `,g(`character.stats.defeats`,{count:i})]}),0<n?(0,z.jsx)(ge,{winRate:a,children:g(`character.stats.winRate`,{rate:a})}):(0,z.jsx)(`span`,{children:g(`character.stats.noWinRate`)})]})]}),(0,z.jsx)(_e,{isOpen:l,children:(0,z.jsx)(Q,{usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h,map:e})})]})},(e,t)=>e.totalMatches===t.totalMatches&&e.isCurrentMap===t.isCurrentMap&&e.isNextMap===t.isNextMap&&e.isOpen===t.isOpen);$.displayName=`MapSection`;var ye=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`;const be=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=s(),{currentMap:o,nextMap:c}=h(),u=R(t),d=re(t,e),f=t.length,p=t.filter(e=>e.isWin).length,m=f-p,g=f>0?Math.round(p/f*100):0,[_,v]=(0,L.useState)(()=>new Set([o])),[y,b]=(0,L.useState)(!1),x=e=>{let t=new Set(_);t.has(e)?t.delete(e):t.add(e),v(t)};return(0,z.jsxs)(ye,{children:[u.map(t=>{let s=t.map===o,u=t.map===c;return(0,z.jsx)($,{map:t.map,title:l(t.map,a),totalMatches:t.totalMatches,totalWins:t.totalWins,totalDefeats:t.totalDefeats,winRate:t.mapWinRate,isCurrentMap:s,isNextMap:u,isOpen:_.has(t.map),onToggle:()=>x(t.map),usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i},t.map)}),(0,z.jsx)($,{title:a(`match.allStagesTotal`),totalMatches:f,totalWins:p,totalDefeats:m,winRate:g,isOpen:y,onToggle:()=>b(!y),usedJobs:e,jobSummaries:d})]})};var xe=i.div`
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
`,Se=i.div`
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
`,Ce=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,we=i.div`
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
`,Te=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>C(e,t)};
`,Ee=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,De=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Oe=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,ke=i(T)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ae=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,je=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  justify-content: space-between;
  flex: 1;
`,Me=i(A)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;const Ne=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:o,onAddDefeat:c,onRevertLast:l,isEditing:u,editingName:d,onEditingNameChange:f,onSortChange:h,onSaveEdit:g,onCancelEdit:_})=>{let{t:v}=s(),y=k(e.recentMatches),x=b(e.recentMatches),ee=m(e.recentMatches),S=p(e.recentMatches);return(0,z.jsxs)(xe,{children:[(0,z.jsx)(Se,{onClick:u?void 0:n,style:{cursor:u?`default`:`pointer`},children:u?(0,z.jsxs)(je,{children:[(0,z.jsx)(Me,{value:d,inputSize:`sm`,onChange:e=>f(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g(),e.key===`Escape`&&_()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,z.jsxs)(Ae,{children:[(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`arrowUp`,size:16}),onClick:e=>{e.stopPropagation(),h(`up`)},title:v(`character.moveUp`)}),(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`arrowDown`,size:16}),onClick:e=>{e.stopPropagation(),h(`down`)},title:v(`character.moveDown`)}),(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:v(`common.save`)}),(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),_()},title:v(`common.cancel`)})]})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Ce,{children:e.character.name}),(0,z.jsxs)(we,{onClick:e=>e.stopPropagation(),children:[(0,z.jsx)(`span`,{children:v(`character.stats.matches`,{count:y})}),(0,z.jsxs)(`span`,{children:[v(`character.stats.wins`,{count:x}),` / `,v(`character.stats.defeats`,{count:ee})]}),0<y?(0,z.jsx)(Te,{winRate:S,children:v(`character.stats.winRate`,{rate:S})}):(0,z.jsx)(`span`,{children:v(`character.stats.noWinRate`)}),(0,z.jsxs)(Ae,{children:[(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:v(`character.actions.addJob`)}),(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:v(`character.actions.editName`)}),(0,z.jsx)(j,{icon:(0,z.jsx)(D,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:v(`character.actions.deleteName`)})]})]})]})}),(0,z.jsx)(Ee,{isOpen:t,children:(0,z.jsx)(De,{children:e.usedJobs.length===0?(0,z.jsx)(Oe,{children:(0,z.jsx)(ke,{onClick:()=>a(e.character.uuid),children:v(`match.pleaseRegisterJob`)})}):(0,z.jsx)(be,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:o?(t,n)=>o(e.character.uuid,t,n):void 0,onAddDefeat:c?(t,n)=>c(e.character.uuid,t,n):void 0,onRevertLast:l?(t,n)=>l(e.character.uuid,t,n):void 0})})})]})};var Pe=i.div`
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
`,Fe=i.div`
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
`,Ie=i.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Le=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Re=i.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,ze=i.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Be=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 0;

  /* Flush内のmargin-bottomを打ち消す */
  > * {
    margin-bottom: 0;
  }
`,Ve=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`,He=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 200px;
`,Ue=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const We=({isOpen:e,onCreateCharacter:t,error:n,onClearError:r,success:i,onClearSuccess:a})=>{let{t:o}=s(),[c,l]=(0,L.useState)(``),[u,d]=(0,L.useState)(e);(0,L.useEffect)(()=>{d(e)},[e]);let f=()=>{d(!u)},p=()=>{c.trim()&&(t(c.trim()),l(``))};return(0,z.jsxs)(Pe,{children:[(0,z.jsxs)(Fe,{onClick:f,children:[(0,z.jsx)(Ie,{children:o(`character.create`)}),(0,z.jsx)(Le,{children:(0,z.jsx)(D,{name:u?`close`:`hamburger`,size:16})})]}),(0,z.jsx)(Re,{isOpen:u,children:(0,z.jsxs)(ze,{children:[(i||n)&&(0,z.jsxs)(Be,{children:[i&&a&&(0,z.jsx)(O,{type:`success`,onClose:a,children:i}),n&&r&&(0,z.jsx)(O,{type:`error`,onClose:r,children:n})]}),(0,z.jsxs)(Ve,{children:[(0,z.jsxs)(He,{children:[(0,z.jsx)(Ue,{htmlFor:`character-name`,children:o(`character.name`)}),(0,z.jsx)(A,{id:`character-name`,value:c,onChange:e=>l(e.target.value),placeholder:o(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&p()})]}),(0,z.jsx)(T,{onClick:p,disabled:!c.trim(),children:o(`character.create`)})]})]})})]})},Ge=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=s();return(0,z.jsx)(o,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,z.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Ke=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,qe=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Je=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ye=i.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Xe=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,Ze=i.button`
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
`,Qe=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const $e=({isOpen:e,onClose:t,onRegister:n,characterUuid:r,historyUuid:i,isLoading:c=!1})=>{let{t:l}=s(),f=I(e=>e.addCharacterStats),p=I(e=>e.getHistoryByUuid),m=ne(e=>e.characters),h=p(i)?.characterStats.find(e=>e.character.uuid===r)?.usedJobs||[],g=e=>{if(h.includes(e))return;let a=m.find(e=>e.uuid===r);if(!a){console.error(`キャラクターが見つかりません`);return}f(i,a)&&(n?.(e),t())},v=Object.values(y).map(e=>({role:e,roleInfo:u[e],jobs:Object.values(d).filter(t=>_[t].role===e)}));return(0,z.jsx)(o,{isOpen:e,onClose:t,title:l(`job.selectJob`),isLoading:c,children:(0,z.jsxs)(Ke,{children:[(0,z.jsx)(qe,{children:l(`job.selectJobDescription`)}),v.map(({role:e,jobs:t})=>(0,z.jsxs)(Je,{children:[(0,z.jsxs)(Ye,{children:[(0,z.jsx)(E,{role:e,size:24}),l(`job.${e}`)]}),(0,z.jsx)(Xe,{children:t.map(e=>{let t=h.includes(e);return(0,z.jsxs)(Ze,{isSelected:!1,isDisabled:t,onClick:()=>g(e),type:`button`,disabled:t,children:[(0,z.jsx)(a,{job:e,size:32}),(0,z.jsx)(Qe,{children:l(`job.${e}`)})]},e)})})]},e))]})})},et=()=>{let{t:e}=s();c(e(`navigation.home`));let t=r(),{histories:n,isLoading:i,getSortedHistories:a,addUsedJob:o}=I(),{createCharacter:l,updateCharacter:u,updateCharacterOrder:d,deleteCharacter:f,createMatchRecord:p,deleteMatchRecord:m,getCharacterStatsForSeason:h,matchRecords:g,error:_,clearError:v}=ne(),y=a()[0],b=y?h(y.uuid):[],[S,C]=(0,L.useState)(()=>b.length>0?new Set([b[0].character.uuid]):new Set),[E,O]=(0,L.useState)(null),[k,A]=(0,L.useState)(``),[j,M]=(0,L.useState)(!1),[P,R]=(0,L.useState)(null),[re,B]=(0,L.useState)(!1),[V,H]=(0,L.useState)(null),[ie,U]=(0,L.useState)(null),ae=()=>{t.navigate({to:`/new`})},W=t=>{try{l({name:t}),U(e(`character.createSuccess`,{name:t})),setTimeout(()=>U(null),3e3)}catch{}},G=e=>{let t=new Set(S);t.has(e)?t.delete(e):t.add(e),C(t)},K=e=>{if(!E)return;let t=b.findIndex(e=>e.character.uuid===E);if(t===-1)return;let n=e===`up`?t-1:t+1;if(n<0||n>=b.length)return;let r=[...b],[i]=r.splice(t,1);r.splice(n,0,i);let a=r.map(e=>e.character.uuid);d(a)},q=(e,t)=>{O(e),A(t)},J=()=>{O(null),A(``)},Y=()=>{if(!(!E||!k.trim()))try{u(E,k.trim())&&(O(null),A(``))}catch{}},X=(e,t)=>{R({uuid:e,name:t}),M(!0)},oe=()=>{if(P)try{f(P.uuid),M(!1),R(null)}catch{}},se=()=>{M(!1),R(null)},Z=e=>{H(e),B(!0)},ce=()=>{B(!1),H(null)},Q=e=>{if(!(!y||!V))try{o({characterUuid:V,seasonUuid:y.uuid,job:e}),B(!1),H(null)}catch{}},le=(e,t,n)=>{if(y)try{p({characterUuid:e,seasonUuid:y.uuid,job:t,map:n,isWin:!0})}catch{}},ue=(e,t,n)=>{if(y)try{p({characterUuid:e,seasonUuid:y.uuid,job:t,map:n,isWin:!1})}catch{}},de=(e,t,n)=>{if(y)try{let r=g.filter(r=>r.characterUuid===e&&r.seasonUuid===y.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);m(i.uuid)}catch{}};return i?(0,z.jsxs)(w,{children:[(0,z.jsx)(F,{children:e(`pages.home.title`,{seasonName:``})}),(0,z.jsx)(N,{children:e(`common.loading`)})]}):n.length===0?(0,z.jsxs)(w,{children:[(0,z.jsx)(te,{children:(0,z.jsx)(F,{children:e(`pages.home.noSeason`)})}),(0,z.jsx)(N,{children:e(`pages.home.createFirstSeason`)}),(0,z.jsx)(ee,{})]}):(0,z.jsxs)(w,{children:[(0,z.jsxs)(te,{children:[(0,z.jsx)(F,{children:e(`pages.home.title`,{seasonName:y?.seasonName})}),(0,z.jsxs)(T,{variant:`outline`,size:`sm`,onClick:ae,children:[(0,z.jsx)(D,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,z.jsx)(N,{children:e(`pages.home.description`)}),(0,z.jsxs)(x,{children:[b.map(e=>(0,z.jsx)(Ne,{stats:e,isOpen:S.has(e.character.uuid),onToggle:()=>G(e.character.uuid),onStartEdit:q,onDelete:X,onOpenJobRegistration:Z,onAddWin:le,onAddDefeat:ue,onRevertLast:de,isEditing:E===e.character.uuid,editingName:k,onEditingNameChange:A,onSortChange:K,onSaveEdit:Y,onCancelEdit:J},e.character.uuid)),(0,z.jsx)(We,{isOpen:b.length===0,onCreateCharacter:W,error:_,onClearError:v,success:ie,onClearSuccess:()=>U(null)})]}),(0,z.jsx)(Ge,{isOpen:j,character:P,onClose:se,onConfirm:oe}),y&&V&&(0,z.jsx)($e,{isOpen:re,onClose:ce,onRegister:Q,characterUuid:V,historyUuid:y.uuid})]})};export{et as HomePage};