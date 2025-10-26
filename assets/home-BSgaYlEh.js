import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,x as n,y as r}from"./react-vendor-D1pS86Oe.js";import{n as i}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{A as a,C as o,D as s,E as c,F as l,G as u,H as d,I as f,J as p,K as m,O as h,T as g,U as _,V as v,W as y,Y as b,_ as x,a as S,at as C,et as w,g as T,it as E,k as D,nt as O,o as k,q as A,rt as j,s as M,t as N,v as P,w as F,x as ee,y as I}from"./index-DzAmwz1d.js";import{n as te,t as L}from"./stores-gG6RgjPY.js";var R=e(t());const z=e=>{let t=Object.values(f),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},ne=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var B=e(n()),V=`
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
`,H=i.tr`
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
`,U=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${V}
`,re=i(U)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,W=i.span`
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

  ${H}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,ie=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,G=i(E)`
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
`;const K=(0,R.memo)(({summary:e,map:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:o}=s();return(0,B.jsxs)(H,{children:[(0,B.jsx)(re,{children:(0,B.jsxs)(`div`,{children:[(0,B.jsx)(a,{job:e.job,size:32}),e.job]})}),(0,B.jsx)(U,{children:(0,B.jsx)(C,{children:e.totalMatches})}),(0,B.jsx)(U,{children:(0,B.jsx)(C,{children:e.wins})}),(0,B.jsx)(U,{children:(0,B.jsx)(C,{children:e.defeats})}),(0,B.jsx)(U,{children:0<e.totalMatches?(0,B.jsx)(W,{winRate:e.winRate,children:(0,B.jsx)(C,{suffix:`%`,children:e.winRate})}):(0,B.jsx)(`span`,{children:`--%`})}),(0,B.jsx)(U,{children:t?(0,B.jsxs)(ie,{children:[n&&(0,B.jsx)(G,{variant:`win`,onClick:()=>n(e.job,t),title:o(`match.addWin`),children:`W`}),r&&(0,B.jsx)(G,{variant:`defeat`,onClick:()=>r(e.job,t),title:o(`match.addDefeat`),children:`D`}),e.totalMatches>0&&i?(0,B.jsx)(G,{variant:`ghost`,icon:(0,B.jsx)(O,{name:`revert`,size:16}),onClick:()=>i(e.job,t),title:o(`match.rollback`)}):(n||r)&&(0,B.jsx)(`div`,{style:{width:`32px`}})]}):null})]})},(e,t)=>e.summary.totalMatches===t.summary.totalMatches);K.displayName=`JobSummaryRow`;var ae=i.div`
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
  animation: ${F} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const Q=(0,R.memo)(({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=s(),c=!!(n||r||i),l=(0,R.useMemo)(()=>v(e),[e]);return(0,B.jsx)(ae,{children:(0,B.jsxs)(q,{children:[(0,B.jsx)(J,{children:(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(X,{children:o(`match.job`)}),(0,B.jsx)(X,{children:o(`match.totalMatches`)}),(0,B.jsx)(X,{children:o(`match.win`)}),(0,B.jsx)(X,{children:o(`match.defeat`)}),(0,B.jsx)(X,{children:o(`match.winRate`)}),(0,B.jsx)(X,{children:c&&a?o(`match.actions`):``})]})}),(0,B.jsx)(oe,{children:e.length===0?(0,B.jsx)(se,{children:(0,B.jsx)(Z,{colSpan:c?6:5,children:(0,B.jsx)(ce,{children:o(`match.pleaseRegisterJob`)})})}):l.map(e=>{let o=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,B.jsx)(K,{summary:o,map:a,onAddWin:n,onAddDefeat:r,onRevertLast:i},e)})})]})})},(e,t)=>e.usedJobs.length===t.usedJobs.length&&e.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)===t.jobSummaries.reduce((e,t)=>e+(t.totalMatches||0),0)&&e.map===t.map);Q.displayName=`JobSummaryTable`;const le=i.span`
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
  color: ${({winRate:e,theme:t})=>w(e,t)};
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
`;const $=(0,R.memo)(({map:e,title:t,totalMatches:n,totalWins:r,totalDefeats:i,winRate:a,isCurrentMap:o,isNextMap:c,isOpen:l,onToggle:u,usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h})=>{let{t:g}=s();return console.log(`update mapsection`),(0,B.jsxs)(fe,{children:[(0,B.jsxs)(pe,{onClick:u,isCurrentMap:o,children:[(0,B.jsxs)(me,{children:[(0,B.jsx)(ve,{isOpen:l,children:(0,B.jsx)(O,{name:`arrowDropDown`,size:20})}),(0,B.jsx)(`span`,{children:t}),o&&(0,B.jsxs)(le,{children:[(0,B.jsx)(de,{}),`Now`]}),c&&(0,B.jsx)(ue,{children:`Next`})]}),(0,B.jsxs)(he,{children:[(0,B.jsx)(`span`,{children:g(`character.stats.matches`,{count:n})}),(0,B.jsxs)(`span`,{children:[g(`character.stats.wins`,{count:r}),` / `,g(`character.stats.defeats`,{count:i})]}),0<n?(0,B.jsx)(ge,{winRate:a,children:g(`character.stats.winRate`,{rate:a})}):(0,B.jsx)(`span`,{children:g(`character.stats.noWinRate`)})]})]}),(0,B.jsx)(_e,{isOpen:l,children:(0,B.jsx)(Q,{usedJobs:d,jobSummaries:f,onAddWin:p,onAddDefeat:m,onRevertLast:h,map:e})})]})},(e,t)=>e.totalMatches===t.totalMatches&&e.isCurrentMap===t.isCurrentMap&&e.isNextMap===t.isNextMap&&e.isOpen===t.isOpen);$.displayName=`MapSection`;var ye=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`;const be=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=s(),{currentMap:o,nextMap:c}=h(),u=z(t),d=ne(t,e),f=t.length,p=t.filter(e=>e.isWin).length,m=f-p,g=f>0?Math.round(p/f*100):0,[_,v]=(0,R.useState)(()=>new Set([o])),[y,b]=(0,R.useState)(!1),x=e=>{let t=new Set(_);t.has(e)?t.delete(e):t.add(e),v(t)};return(0,B.jsxs)(ye,{children:[u.map(t=>{let s=t.map===o,u=t.map===c;return(0,B.jsx)($,{map:t.map,title:l(t.map,a),totalMatches:t.totalMatches,totalWins:t.totalWins,totalDefeats:t.totalDefeats,winRate:t.mapWinRate,isCurrentMap:s,isNextMap:u,isOpen:_.has(t.map),onToggle:()=>x(t.map),usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i},t.map)}),(0,B.jsx)($,{title:a(`match.allStagesTotal`),totalMatches:f,totalWins:p,totalDefeats:m,winRate:g,isOpen:y,onToggle:()=>b(!y),usedJobs:e,jobSummaries:d})]})};var xe=i.div`
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
  color: ${({winRate:e,theme:t})=>w(e,t)};
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
`,ke=i(E)`
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
  flex: 1;
`,Me=i(j)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;const Ne=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:o,onAddDefeat:c,onRevertLast:l,isEditing:u,editingName:d,onEditingNameChange:f,onSaveEdit:h,onCancelEdit:g})=>{let{t:_}=s(),v=A(e.recentMatches),y=b(e.recentMatches),x=m(e.recentMatches),S=p(e.recentMatches);return(0,B.jsxs)(xe,{children:[(0,B.jsx)(Se,{onClick:u?void 0:n,style:{cursor:u?`default`:`pointer`},children:u?(0,B.jsxs)(je,{children:[(0,B.jsx)(Me,{value:d,inputSize:`sm`,onChange:e=>f(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,B.jsxs)(Ae,{children:[(0,B.jsx)(M,{icon:(0,B.jsx)(O,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:_(`common.save`)}),(0,B.jsx)(M,{icon:(0,B.jsx)(O,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:_(`common.cancel`)})]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Ce,{children:e.character.name}),(0,B.jsxs)(we,{onClick:e=>e.stopPropagation(),children:[(0,B.jsx)(`span`,{children:_(`character.stats.matches`,{count:v})}),(0,B.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:y}),` / `,_(`character.stats.defeats`,{count:x})]}),0<v?(0,B.jsx)(Te,{winRate:S,children:_(`character.stats.winRate`,{rate:S})}):(0,B.jsx)(`span`,{children:_(`character.stats.noWinRate`)}),(0,B.jsxs)(Ae,{children:[(0,B.jsx)(M,{icon:(0,B.jsx)(O,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:_(`character.actions.addJob`)}),(0,B.jsx)(M,{icon:(0,B.jsx)(O,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:_(`character.actions.editName`)}),(0,B.jsx)(M,{icon:(0,B.jsx)(O,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:_(`character.actions.deleteName`)})]})]})]})}),(0,B.jsx)(Ee,{isOpen:t,children:(0,B.jsx)(De,{children:e.usedJobs.length===0?(0,B.jsx)(Oe,{children:(0,B.jsx)(ke,{onClick:()=>a(e.character.uuid),children:_(`match.pleaseRegisterJob`)})}):(0,B.jsx)(be,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:o?(t,n)=>o(e.character.uuid,t,n):void 0,onAddDefeat:c?(t,n)=>c(e.character.uuid,t,n):void 0,onRevertLast:l?(t,n)=>l(e.character.uuid,t,n):void 0})})})]})};var Pe=i.div`
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
`;const We=({isOpen:e,onCreateCharacter:t,error:n,onClearError:r,success:i,onClearSuccess:a})=>{let{t:o}=s(),[c,l]=(0,R.useState)(``),[u,d]=(0,R.useState)(e);(0,R.useEffect)(()=>{d(e)},[e]);let f=()=>{d(!u)},p=()=>{c.trim()&&(t(c.trim()),l(``))};return(0,B.jsxs)(Pe,{children:[(0,B.jsxs)(Fe,{onClick:f,children:[(0,B.jsx)(Ie,{children:o(`character.create`)}),(0,B.jsx)(Le,{children:(0,B.jsx)(O,{name:u?`close`:`hamburger`,size:16})})]}),(0,B.jsx)(Re,{isOpen:u,children:(0,B.jsxs)(ze,{children:[(i||n)&&(0,B.jsxs)(Be,{children:[i&&a&&(0,B.jsx)(k,{type:`success`,onClose:a,children:i}),n&&r&&(0,B.jsx)(k,{type:`error`,onClose:r,children:n})]}),(0,B.jsxs)(Ve,{children:[(0,B.jsxs)(He,{children:[(0,B.jsx)(Ue,{htmlFor:`character-name`,children:o(`character.name`)}),(0,B.jsx)(j,{id:`character-name`,value:c,onChange:e=>l(e.target.value),placeholder:o(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&p()})]}),(0,B.jsx)(E,{onClick:p,disabled:!c.trim(),children:o(`character.create`)})]})]})})]})},Ge=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=s();return(0,B.jsx)(o,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,B.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Ke=i.div`
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
`;const $e=({isOpen:e,onClose:t,onRegister:n,characterUuid:r,historyUuid:i,isLoading:c=!1})=>{let{t:l}=s(),f=L(e=>e.addCharacterStats),p=L(e=>e.getHistoryByUuid),m=te(e=>e.characters),h=p(i)?.characterStats.find(e=>e.character.uuid===r)?.usedJobs||[],g=e=>{if(h.includes(e))return;let a=m.find(e=>e.uuid===r);if(!a){console.error(`キャラクターが見つかりません`);return}f(i,a)&&(n?.(e),t())},v=Object.values(y).map(e=>({role:e,roleInfo:u[e],jobs:Object.values(d).filter(t=>_[t].role===e)}));return(0,B.jsx)(o,{isOpen:e,onClose:t,title:l(`job.selectJob`),isLoading:c,children:(0,B.jsxs)(Ke,{children:[(0,B.jsx)(qe,{children:l(`job.selectJobDescription`)}),v.map(({role:e,jobs:t})=>(0,B.jsxs)(Je,{children:[(0,B.jsxs)(Ye,{children:[(0,B.jsx)(D,{role:e,size:24}),l(`job.${e}`)]}),(0,B.jsx)(Xe,{children:t.map(e=>{let t=h.includes(e);return(0,B.jsxs)(Ze,{isSelected:!1,isDisabled:t,onClick:()=>g(e),type:`button`,disabled:t,children:[(0,B.jsx)(a,{job:e,size:32}),(0,B.jsx)(Qe,{children:l(`job.${e}`)})]},e)})})]},e))]})})},et=()=>{let{t:e}=s();c(e(`navigation.home`));let t=r(),{histories:n,isLoading:i,getSortedHistories:a,addUsedJob:o}=L(),{createCharacter:l,updateCharacter:u,deleteCharacter:d,createMatchRecord:f,deleteMatchRecord:p,getCharacterStatsForSeason:m,matchRecords:h,error:g,clearError:_}=te(),v=a()[0],y=v?m(v.uuid):[],[b,C]=(0,R.useState)(()=>y.length>0?new Set([y[0].character.uuid]):new Set),[w,D]=(0,R.useState)(null),[k,A]=(0,R.useState)(``),[j,M]=(0,R.useState)(!1),[F,z]=(0,R.useState)(null),[ne,V]=(0,R.useState)(!1),[H,U]=(0,R.useState)(null),[re,W]=(0,R.useState)(null),ie=()=>{t.navigate({to:`/new`})},G=t=>{try{l({name:t}),W(e(`character.createSuccess`,{name:t})),setTimeout(()=>W(null),3e3)}catch{}},K=e=>{let t=new Set(b);t.has(e)?t.delete(e):t.add(e),C(t)},ae=(e,t)=>{D(e),A(t)},q=()=>{D(null),A(``)},J=()=>{if(!(!w||!k.trim()))try{u(w,k.trim())&&(D(null),A(``))}catch{}},Y=(e,t)=>{z({uuid:e,name:t}),M(!0)},X=()=>{if(F)try{d(F.uuid),M(!1),z(null)}catch{}},oe=()=>{M(!1),z(null)},se=e=>{U(e),V(!0)},Z=()=>{V(!1),U(null)},ce=e=>{if(!(!v||!H))try{o({characterUuid:H,seasonUuid:v.uuid,job:e}),V(!1),U(null)}catch{}},Q=(e,t,n)=>{if(v)try{f({characterUuid:e,seasonUuid:v.uuid,job:t,map:n,isWin:!0}),N(`record`,`win`)}catch{}},le=(e,t,n)=>{if(v)try{f({characterUuid:e,seasonUuid:v.uuid,job:t,map:n,isWin:!1}),N(`record`,`defeat`)}catch{}},ue=(e,t,n)=>{if(v)try{let r=h.filter(r=>r.characterUuid===e&&r.seasonUuid===v.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);p(i.uuid),N(`record`,`revert`)}catch{}};return i?(0,B.jsxs)(T,{children:[(0,B.jsx)(I,{children:e(`pages.home.title`,{seasonName:``})}),(0,B.jsx)(P,{children:e(`common.loading`)})]}):n.length===0?(0,B.jsxs)(T,{children:[(0,B.jsx)(ee,{children:(0,B.jsx)(I,{children:e(`pages.home.noSeason`)})}),(0,B.jsx)(P,{children:e(`pages.home.createFirstSeason`)}),(0,B.jsx)(S,{})]}):(0,B.jsxs)(T,{children:[(0,B.jsxs)(ee,{children:[(0,B.jsx)(I,{children:e(`pages.home.title`,{seasonName:v?.seasonName})}),(0,B.jsxs)(E,{variant:`outline`,size:`sm`,onClick:ie,children:[(0,B.jsx)(O,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,B.jsx)(P,{children:e(`pages.home.description`)}),(0,B.jsxs)(x,{children:[y.map(e=>(0,B.jsx)(Ne,{stats:e,isOpen:b.has(e.character.uuid),onToggle:()=>K(e.character.uuid),onStartEdit:ae,onDelete:Y,onOpenJobRegistration:se,onAddWin:Q,onAddDefeat:le,onRevertLast:ue,isEditing:w===e.character.uuid,editingName:k,onEditingNameChange:A,onSaveEdit:J,onCancelEdit:q},e.character.uuid)),(0,B.jsx)(We,{isOpen:y.length===0,onCreateCharacter:G,error:g,onClearError:_,success:re,onClearSuccess:()=>W(null)})]}),(0,B.jsx)(Ge,{isOpen:j,character:F,onClose:oe,onConfirm:X}),v&&H&&(0,B.jsx)($e,{isOpen:ne,onClose:Z,onRegister:ce,characterUuid:H,historyUuid:v.uuid})]})};export{et as HomePage};