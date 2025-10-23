import{$ as e,A as t,B as n,C as r,E as i,F as a,G as o,H as s,I as c,K as l,L as u,M as d,N as f,O as p,P as m,R as h,S as g,T as _,U as v,W as y,_ as b,a as x,b as S,it as C,j as w,k as T,o as E,p as D,s as O,st as k,t as A,tt as j,v as M,w as N,y as P,z as F}from"./index-BERaIJaj.js";import{n as I,t as L}from"./stores-DsdzEjKc.js";var R=k(C());const z=e=>{let t=Object.values(d),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},B=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var V=k(j()),ee=l.div`
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
`,H=l.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,U=l.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,W=`
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
`,G=l.th`
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
  ${W}
`,K=l.tbody``,q=l.tr`
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
`,J=l.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${W}
`,te=l(J)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,ne=l.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>D(e,t)};
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
    background: ${({winRate:e,theme:t})=>D(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${q}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,re=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,Y=l(y)`
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
`,ie=l.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${r} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const X=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:a,map:c})=>{let{t:l}=i(),u=!!(n||r||a);return(0,V.jsx)(ee,{children:(0,V.jsxs)(H,{children:[(0,V.jsx)(U,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(G,{children:l(`match.job`)}),(0,V.jsx)(G,{children:l(`match.totalMatches`)}),(0,V.jsx)(G,{children:l(`match.win`)}),(0,V.jsx)(G,{children:l(`match.defeat`)}),(0,V.jsx)(G,{children:l(`match.winRate`)}),(0,V.jsx)(G,{children:u&&c?l(`match.actions`):``})]})}),(0,V.jsx)(K,{children:e.length===0?(0,V.jsx)(q,{children:(0,V.jsx)(J,{colSpan:u?6:5,children:(0,V.jsx)(ie,{children:l(`match.pleaseRegisterJob`)})})}):e.map(e=>{let i=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,V.jsxs)(q,{children:[(0,V.jsx)(te,{children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(w,{job:i.job,size:32}),i.job]})}),(0,V.jsx)(J,{children:(0,V.jsx)(o,{children:i.totalMatches})}),(0,V.jsx)(J,{children:(0,V.jsx)(o,{children:i.wins})}),(0,V.jsx)(J,{children:(0,V.jsx)(o,{children:i.defeats})}),(0,V.jsx)(J,{children:0<i.totalMatches?(0,V.jsx)(ne,{winRate:i.winRate,children:(0,V.jsx)(o,{suffix:`%`,children:i.winRate})}):(0,V.jsx)(`span`,{children:`--%`})}),(0,V.jsx)(J,{children:c?(0,V.jsxs)(re,{children:[n&&(0,V.jsx)(Y,{variant:`win`,onClick:()=>n(i.job,c),title:l(`match.addWin`),children:`W`}),r&&(0,V.jsx)(Y,{variant:`defeat`,onClick:()=>r(i.job,c),title:l(`match.addDefeat`),children:`D`}),i.totalMatches>0&&a?(0,V.jsx)(Y,{variant:`ghost`,icon:(0,V.jsx)(s,{name:`revert`,size:16}),onClick:()=>a(i.job,c),title:l(`match.rollback`)}):(n||r)&&(0,V.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},ae=l.span`
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
`,oe=l.span`
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
`,se=l.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: ${N} 2s ease-in-out infinite;
`;var ce=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,Z=l.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Q=l.h4`
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
`,$=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,le=l.div`
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
`,ue=l.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>D(e,t)};
`,de=l.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`,fe=l.span`
  display: flex;
  align-items: center;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s ease;
`;const pe=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:a})=>{let{t:o}=i(),{currentMap:c,nextMap:l}=p(),u=z(t),d=B(t,e),f=t.length,m=t.filter(e=>e.isWin).length,h=f-m,g=f>0?Math.round(m/f*100):0,[_,v]=(0,R.useState)(()=>new Set([c])),[y,b]=(0,R.useState)(!1),x=e=>{let t=new Set(_);t.has(e)?t.delete(e):t.add(e),v(t)};return(0,V.jsxs)(ce,{children:[u.map(t=>{let i=t.map===c,u=t.map===l;return(0,V.jsxs)(Z,{children:[(0,V.jsxs)(Q,{onClick:()=>x(t.map),isCurrentMap:i,children:[(0,V.jsxs)($,{children:[(0,V.jsx)(fe,{isOpen:_.has(t.map),children:(0,V.jsx)(s,{name:`arrowDropDown`,size:20})}),(0,V.jsx)(`span`,{children:T(t.map,o)}),i&&(0,V.jsxs)(ae,{children:[(0,V.jsx)(se,{}),`Now`]}),u&&(0,V.jsx)(oe,{children:`Next`})]}),(0,V.jsxs)(le,{children:[(0,V.jsx)(`span`,{children:o(`character.stats.matches`,{count:t.totalMatches})}),(0,V.jsxs)(`span`,{children:[o(`character.stats.wins`,{count:t.totalWins}),` / `,o(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,V.jsx)(ue,{winRate:t.mapWinRate,children:o(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,V.jsx)(`span`,{children:o(`character.stats.noWinRate`)})]})]}),(0,V.jsx)(de,{isOpen:_.has(t.map),children:(0,V.jsx)(X,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:a,map:t.map})})]},t.map)}),(0,V.jsxs)(Z,{children:[(0,V.jsxs)(Q,{onClick:()=>b(!y),children:[(0,V.jsxs)($,{children:[(0,V.jsx)(fe,{isOpen:y,children:(0,V.jsx)(s,{name:`arrowDropDown`,size:20})}),(0,V.jsx)(`span`,{children:o(`match.allStagesTotal`)})]}),(0,V.jsxs)(le,{children:[(0,V.jsx)(`span`,{children:o(`character.stats.matches`,{count:f})}),(0,V.jsxs)(`span`,{children:[o(`character.stats.wins`,{count:m}),` / `,o(`character.stats.defeats`,{count:h})]}),0<f?(0,V.jsx)(ue,{winRate:g,children:o(`character.stats.winRate`,{rate:g})}):(0,V.jsx)(`span`,{children:o(`character.stats.noWinRate`)})]})]}),(0,V.jsx)(de,{isOpen:y,children:(0,V.jsx)(X,{usedJobs:e,jobSummaries:d})})]})]})};var me=l.div`
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
`,he=l.div`
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
`,ge=l.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,_e=l.div`
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
`,ve=l.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>D(e,t)};
`,ye=l.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,be=l.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,xe=l.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,Se=l(y)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ce=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,we=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,Te=l(v)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;const Ee=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:o,onOpenJobRegistration:l,onAddWin:u,onAddDefeat:d,onRevertLast:p,isEditing:h,editingName:g,onEditingNameChange:_,onSaveEdit:v,onCancelEdit:y})=>{let{t:b}=i(),x=m(e.recentMatches),S=c(e.recentMatches),C=f(e.recentMatches),w=a(e.recentMatches);return(0,V.jsxs)(me,{children:[(0,V.jsx)(he,{onClick:h?void 0:n,style:{cursor:h?`default`:`pointer`},children:h?(0,V.jsxs)(we,{children:[(0,V.jsx)(Te,{value:g,inputSize:`sm`,onChange:e=>_(e.target.value),onKeyDown:e=>{e.key===`Enter`&&v(),e.key===`Escape`&&y()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,V.jsxs)(Ce,{children:[(0,V.jsx)(O,{icon:(0,V.jsx)(s,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),v()},title:b(`common.save`)}),(0,V.jsx)(O,{icon:(0,V.jsx)(s,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),y()},title:b(`common.cancel`)})]})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ge,{children:e.character.name}),(0,V.jsxs)(_e,{onClick:e=>e.stopPropagation(),children:[(0,V.jsx)(`span`,{children:b(`character.stats.matches`,{count:x})}),(0,V.jsxs)(`span`,{children:[b(`character.stats.wins`,{count:S}),` / `,b(`character.stats.defeats`,{count:C})]}),0<x?(0,V.jsx)(ve,{winRate:w,children:b(`character.stats.winRate`,{rate:w})}):(0,V.jsx)(`span`,{children:b(`character.stats.noWinRate`)}),(0,V.jsxs)(Ce,{children:[(0,V.jsx)(O,{icon:(0,V.jsx)(s,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),l(e.character.uuid)},title:b(`character.actions.addJob`)}),(0,V.jsx)(O,{icon:(0,V.jsx)(s,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:b(`character.actions.editName`)}),(0,V.jsx)(O,{icon:(0,V.jsx)(s,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),o(e.character.uuid,e.character.name)},title:b(`character.actions.deleteName`)})]})]})]})}),(0,V.jsx)(ye,{isOpen:t,children:(0,V.jsx)(be,{children:e.usedJobs.length===0?(0,V.jsx)(xe,{children:(0,V.jsx)(Se,{onClick:()=>l(e.character.uuid),children:b(`match.pleaseRegisterJob`)})}):(0,V.jsx)(pe,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:u?(t,n)=>u(e.character.uuid,t,n):void 0,onAddDefeat:d?(t,n)=>d(e.character.uuid,t,n):void 0,onRevertLast:p?(t,n)=>p(e.character.uuid,t,n):void 0})})})]})};var De=l.div`
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
`,Oe=l.div`
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
`,ke=l.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Ae=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,je=l.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Me=l.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Ne=l.div`
  padding: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 0;

  /* Flush内のmargin-bottomを打ち消す */
  > * {
    margin-bottom: 0;
  }
`,Pe=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`,Fe=l.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 200px;
`,Ie=l.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const Le=({isOpen:e,onCreateCharacter:t,error:n,onClearError:r,success:a,onClearSuccess:o})=>{let{t:c}=i(),[l,u]=(0,R.useState)(``),[d,f]=(0,R.useState)(e);(0,R.useEffect)(()=>{f(e)},[e]);let p=()=>{f(!d)},m=()=>{l.trim()&&(t(l.trim()),u(``))};return(0,V.jsxs)(De,{children:[(0,V.jsxs)(Oe,{onClick:p,children:[(0,V.jsx)(ke,{children:c(`character.create`)}),(0,V.jsx)(Ae,{children:(0,V.jsx)(s,{name:d?`close`:`hamburger`,size:16})})]}),(0,V.jsx)(je,{isOpen:d,children:(0,V.jsxs)(Me,{children:[(a||n)&&(0,V.jsxs)(Ne,{children:[a&&o&&(0,V.jsx)(E,{type:`success`,onClose:o,children:a}),n&&r&&(0,V.jsx)(E,{type:`error`,onClose:r,children:n})]}),(0,V.jsxs)(Pe,{children:[(0,V.jsxs)(Fe,{children:[(0,V.jsx)(Ie,{htmlFor:`character-name`,children:c(`character.name`)}),(0,V.jsx)(v,{id:`character-name`,value:l,onChange:e=>u(e.target.value),placeholder:c(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&m()})]}),(0,V.jsx)(y,{onClick:m,disabled:!l.trim(),children:c(`character.create`)})]})]})})]})},Re=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:a}=i();return(0,V.jsx)(g,{isOpen:e,onClose:n,onConfirm:r,title:a(`character.delete`),confirmText:a(`character.confirmDelete`),confirmType:`danger`,cancelText:a(`common.cancel`),children:(0,V.jsx)(`p`,{dangerouslySetInnerHTML:{__html:a(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var ze=l.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Be=l.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Ve=l.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,He=l.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ue=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,We=l.button`
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
`,Ge=l.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const Ke=({isOpen:e,onClose:r,onRegister:a,characterUuid:o,historyUuid:s,isLoading:c=!1})=>{let{t:l}=i(),d=L(e=>e.addCharacterStats),f=L(e=>e.getHistoryByUuid),p=I(e=>e.characters),m=f(s)?.characterStats.find(e=>e.character.uuid===o)?.usedJobs||[],_=e=>{if(m.includes(e))return;let t=p.find(e=>e.uuid===o);if(!t){console.error(`キャラクターが見つかりません`);return}d(s,t)&&(a?.(e),r())},v=Object.values(F).map(e=>({role:e,roleInfo:n[e],jobs:Object.values(u).filter(t=>h[t].role===e)}));return(0,V.jsx)(g,{isOpen:e,onClose:r,title:l(`job.selectJob`),isLoading:c,children:(0,V.jsxs)(ze,{children:[(0,V.jsx)(Be,{children:l(`job.selectJobDescription`)}),v.map(({role:e,jobs:n})=>(0,V.jsxs)(Ve,{children:[(0,V.jsxs)(He,{children:[(0,V.jsx)(t,{role:e,size:24}),l(`job.${e}`)]}),(0,V.jsx)(Ue,{children:n.map(e=>{let t=m.includes(e);return(0,V.jsxs)(We,{isSelected:!1,isDisabled:t,onClick:()=>_(e),type:`button`,disabled:t,children:[(0,V.jsx)(w,{job:e,size:32}),(0,V.jsx)(Ge,{children:l(`job.${e}`)})]},e)})})]},e))]})})};var qe=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${r} 0.5s ease-out;
`;const Je=()=>{let{t}=i();_(t(`navigation.home`));let n=e(),{histories:r,isLoading:a,getSortedHistories:o,addUsedJob:c}=L(),{createCharacter:l,updateCharacter:u,deleteCharacter:d,createMatchRecord:f,deleteMatchRecord:p,getCharacterStatsForSeason:m,matchRecords:h,error:g,clearError:v}=I(),C=o()[0],w=C?m(C.uuid):[],[T,E]=(0,R.useState)(()=>w.length>0?new Set([w[0].character.uuid]):new Set),[D,O]=(0,R.useState)(null),[k,j]=(0,R.useState)(``),[N,F]=(0,R.useState)(!1),[z,B]=(0,R.useState)(null),[ee,H]=(0,R.useState)(!1),[U,W]=(0,R.useState)(null),[G,K]=(0,R.useState)(null),q=()=>{n.navigate({to:`/new`})},J=e=>{try{l({name:e}),K(t(`character.createSuccess`,{name:e})),setTimeout(()=>K(null),3e3)}catch{}},te=e=>{let t=new Set(T);t.has(e)?t.delete(e):t.add(e),E(t)},ne=(e,t)=>{O(e),j(t)},re=()=>{O(null),j(``)},Y=()=>{if(!(!D||!k.trim()))try{u(D,k.trim())&&(O(null),j(``))}catch{}},ie=(e,t)=>{B({uuid:e,name:t}),F(!0)},X=()=>{if(z)try{d(z.uuid),F(!1),B(null)}catch{}},ae=()=>{F(!1),B(null)},oe=e=>{W(e),H(!0)},se=()=>{H(!1),W(null)},ce=e=>{if(!(!C||!U))try{c({characterUuid:U,seasonUuid:C.uuid,job:e}),H(!1),W(null)}catch{}},Z=(e,t,n)=>{if(C)try{f({characterUuid:e,seasonUuid:C.uuid,job:t,map:n,isWin:!0}),A(`record`,`win`)}catch{}},Q=(e,t,n)=>{if(C)try{f({characterUuid:e,seasonUuid:C.uuid,job:t,map:n,isWin:!1}),A(`record`,`defeat`)}catch{}},$=(e,t,n)=>{if(C)try{let r=h.filter(r=>r.characterUuid===e&&r.seasonUuid===C.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);p(i.uuid),A(`record`,`revert`)}catch{}};return a?(0,V.jsxs)(b,{children:[(0,V.jsx)(P,{children:t(`pages.home.title`,{seasonName:``})}),(0,V.jsx)(M,{children:t(`common.loading`)})]}):r.length===0?(0,V.jsxs)(b,{children:[(0,V.jsx)(S,{children:(0,V.jsx)(P,{children:t(`pages.home.noSeason`)})}),(0,V.jsx)(M,{children:t(`pages.home.createFirstSeason`)}),(0,V.jsx)(x,{})]}):(0,V.jsxs)(b,{children:[(0,V.jsxs)(S,{children:[(0,V.jsx)(P,{children:t(`pages.home.title`,{seasonName:C?.seasonName})}),(0,V.jsxs)(y,{variant:`outline`,size:`sm`,onClick:q,children:[(0,V.jsx)(s,{name:`add`,size:16}),t(`pages.home.createSeason`)]})]}),(0,V.jsx)(M,{children:t(`pages.home.description`)}),(0,V.jsxs)(qe,{children:[w.map(e=>(0,V.jsx)(Ee,{stats:e,isOpen:T.has(e.character.uuid),onToggle:()=>te(e.character.uuid),onStartEdit:ne,onDelete:ie,onOpenJobRegistration:oe,onAddWin:Z,onAddDefeat:Q,onRevertLast:$,isEditing:D===e.character.uuid,editingName:k,onEditingNameChange:j,onSaveEdit:Y,onCancelEdit:re},e.character.uuid)),(0,V.jsx)(Le,{isOpen:w.length===0,onCreateCharacter:J,error:g,onClearError:v,success:G,onClearSuccess:()=>K(null)})]}),(0,V.jsx)(Re,{isOpen:N,character:z,onClose:ae,onConfirm:X}),C&&U&&(0,V.jsx)(Ke,{isOpen:ee,onClose:se,onRegister:ce,characterUuid:U,historyUuid:C.uuid})]})};export{Je as HomePage};