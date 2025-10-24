import{$ as e,B as t,C as n,D as r,G as i,H as a,M as o,N as s,O as c,Q as l,R as u,S as d,T as f,U as p,V as m,W as h,X as g,_,_t as v,a as y,dt as b,et as x,g as S,k as C,lt as w,mt as T,nt as E,o as D,s as O,t as k,tt as A,v as j,w as ee,x as M,y as N,z as P}from"./index-BBYhvlPi.js";import{n as F,t as I}from"./stores-ByG3wVEh.js";var L=v(T());const R=e=>{let t=Object.values(s),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},z=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var B=v(b()),te=E.div`
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
`,V=E.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,H=E.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,U=`
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
`,W=E.th`
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
  ${U}
`,G=E.tbody``,K=E.tr`
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
`,q=E.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${U}
`,J=E(q)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,ne=E.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>g(e,t)};
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
    background: ${({winRate:e,theme:t})=>g(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${K}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,re=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,Y=E(x)`
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
`,ie=E.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${d} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const X=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=f(),s=!!(n||r||i);return(0,B.jsx)(te,{children:(0,B.jsxs)(V,{children:[(0,B.jsx)(H,{children:(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(W,{children:o(`match.job`)}),(0,B.jsx)(W,{children:o(`match.totalMatches`)}),(0,B.jsx)(W,{children:o(`match.win`)}),(0,B.jsx)(W,{children:o(`match.defeat`)}),(0,B.jsx)(W,{children:o(`match.winRate`)}),(0,B.jsx)(W,{children:s&&a?o(`match.actions`):``})]})}),(0,B.jsx)(G,{children:e.length===0?(0,B.jsx)(K,{children:(0,B.jsx)(q,{colSpan:s?6:5,children:(0,B.jsx)(ie,{children:o(`match.pleaseRegisterJob`)})})}):e.map(e=>{let s=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,B.jsxs)(K,{children:[(0,B.jsx)(J,{children:(0,B.jsxs)(`div`,{children:[(0,B.jsx)(C,{job:s.job,size:32}),s.job]})}),(0,B.jsx)(q,{children:(0,B.jsx)(A,{children:s.totalMatches})}),(0,B.jsx)(q,{children:(0,B.jsx)(A,{children:s.wins})}),(0,B.jsx)(q,{children:(0,B.jsx)(A,{children:s.defeats})}),(0,B.jsx)(q,{children:0<s.totalMatches?(0,B.jsx)(ne,{winRate:s.winRate,children:(0,B.jsx)(A,{suffix:`%`,children:s.winRate})}):(0,B.jsx)(`span`,{children:`--%`})}),(0,B.jsx)(q,{children:a?(0,B.jsxs)(re,{children:[n&&(0,B.jsx)(Y,{variant:`win`,onClick:()=>n(s.job,a),title:o(`match.addWin`),children:`W`}),r&&(0,B.jsx)(Y,{variant:`defeat`,onClick:()=>r(s.job,a),title:o(`match.addDefeat`),children:`D`}),s.totalMatches>0&&i?(0,B.jsx)(Y,{variant:`ghost`,icon:(0,B.jsx)(l,{name:`revert`,size:16}),onClick:()=>i(s.job,a),title:o(`match.rollback`)}):(n||r)&&(0,B.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},ae=E.span`
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
`,oe=E.span`
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
`,se=E.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: ${n} 2s ease-in-out infinite;
`;var ce=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,Z=E.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Q=E.h4`
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
`,$=E.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,le=E.div`
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
`,ue=E.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>g(e,t)};
`,de=E.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`,fe=E.span`
  display: flex;
  align-items: center;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s ease;
`;const pe=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:i,onRevertLast:a})=>{let{t:s}=f(),{currentMap:c,nextMap:u}=r(),d=R(t),p=z(t,e),m=t.length,h=t.filter(e=>e.isWin).length,g=m-h,_=m>0?Math.round(h/m*100):0,[v,y]=(0,L.useState)(()=>new Set([c])),[b,x]=(0,L.useState)(!1),S=e=>{let t=new Set(v);t.has(e)?t.delete(e):t.add(e),y(t)};return(0,B.jsxs)(ce,{children:[d.map(t=>{let r=t.map===c,d=t.map===u;return(0,B.jsxs)(Z,{children:[(0,B.jsxs)(Q,{onClick:()=>S(t.map),isCurrentMap:r,children:[(0,B.jsxs)($,{children:[(0,B.jsx)(fe,{isOpen:v.has(t.map),children:(0,B.jsx)(l,{name:`arrowDropDown`,size:20})}),(0,B.jsx)(`span`,{children:o(t.map,s)}),r&&(0,B.jsxs)(ae,{children:[(0,B.jsx)(se,{}),`Now`]}),d&&(0,B.jsx)(oe,{children:`Next`})]}),(0,B.jsxs)(le,{children:[(0,B.jsx)(`span`,{children:s(`character.stats.matches`,{count:t.totalMatches})}),(0,B.jsxs)(`span`,{children:[s(`character.stats.wins`,{count:t.totalWins}),` / `,s(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,B.jsx)(ue,{winRate:t.mapWinRate,children:s(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,B.jsx)(`span`,{children:s(`character.stats.noWinRate`)})]})]}),(0,B.jsx)(de,{isOpen:v.has(t.map),children:(0,B.jsx)(X,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:i,onRevertLast:a,map:t.map})})]},t.map)}),(0,B.jsxs)(Z,{children:[(0,B.jsxs)(Q,{onClick:()=>x(!b),children:[(0,B.jsxs)($,{children:[(0,B.jsx)(fe,{isOpen:b,children:(0,B.jsx)(l,{name:`arrowDropDown`,size:20})}),(0,B.jsx)(`span`,{children:s(`match.allStagesTotal`)})]}),(0,B.jsxs)(le,{children:[(0,B.jsx)(`span`,{children:s(`character.stats.matches`,{count:m})}),(0,B.jsxs)(`span`,{children:[s(`character.stats.wins`,{count:h}),` / `,s(`character.stats.defeats`,{count:g})]}),0<m?(0,B.jsx)(ue,{winRate:_,children:s(`character.stats.winRate`,{rate:_})}):(0,B.jsx)(`span`,{children:s(`character.stats.noWinRate`)})]})]}),(0,B.jsx)(de,{isOpen:b,children:(0,B.jsx)(X,{usedJobs:e,jobSummaries:p})})]})]})};var me=E.div`
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
`,he=E.div`
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
`,ge=E.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,_e=E.div`
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
`,ve=E.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>g(e,t)};
`,ye=E.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,be=E.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,xe=E.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,Se=E(x)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ce=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,we=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,Te=E(e)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;const Ee=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:o,onOpenJobRegistration:s,onAddWin:c,onAddDefeat:u,onRevertLast:d,isEditing:m,editingName:g,onEditingNameChange:_,onSaveEdit:v,onCancelEdit:y})=>{let{t:b}=f(),x=p(e.recentMatches),S=i(e.recentMatches),C=a(e.recentMatches),w=h(e.recentMatches);return(0,B.jsxs)(me,{children:[(0,B.jsx)(he,{onClick:m?void 0:n,style:{cursor:m?`default`:`pointer`},children:m?(0,B.jsxs)(we,{children:[(0,B.jsx)(Te,{value:g,inputSize:`sm`,onChange:e=>_(e.target.value),onKeyDown:e=>{e.key===`Enter`&&v(),e.key===`Escape`&&y()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,B.jsxs)(Ce,{children:[(0,B.jsx)(O,{icon:(0,B.jsx)(l,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),v()},title:b(`common.save`)}),(0,B.jsx)(O,{icon:(0,B.jsx)(l,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),y()},title:b(`common.cancel`)})]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ge,{children:e.character.name}),(0,B.jsxs)(_e,{onClick:e=>e.stopPropagation(),children:[(0,B.jsx)(`span`,{children:b(`character.stats.matches`,{count:x})}),(0,B.jsxs)(`span`,{children:[b(`character.stats.wins`,{count:S}),` / `,b(`character.stats.defeats`,{count:C})]}),0<x?(0,B.jsx)(ve,{winRate:w,children:b(`character.stats.winRate`,{rate:w})}):(0,B.jsx)(`span`,{children:b(`character.stats.noWinRate`)}),(0,B.jsxs)(Ce,{children:[(0,B.jsx)(O,{icon:(0,B.jsx)(l,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),s(e.character.uuid)},title:b(`character.actions.addJob`)}),(0,B.jsx)(O,{icon:(0,B.jsx)(l,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:b(`character.actions.editName`)}),(0,B.jsx)(O,{icon:(0,B.jsx)(l,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),o(e.character.uuid,e.character.name)},title:b(`character.actions.deleteName`)})]})]})]})}),(0,B.jsx)(ye,{isOpen:t,children:(0,B.jsx)(be,{children:e.usedJobs.length===0?(0,B.jsx)(xe,{children:(0,B.jsx)(Se,{onClick:()=>s(e.character.uuid),children:b(`match.pleaseRegisterJob`)})}):(0,B.jsx)(pe,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:c?(t,n)=>c(e.character.uuid,t,n):void 0,onAddDefeat:u?(t,n)=>u(e.character.uuid,t,n):void 0,onRevertLast:d?(t,n)=>d(e.character.uuid,t,n):void 0})})})]})};var De=E.div`
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
`,Oe=E.div`
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
`,ke=E.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Ae=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,je=E.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,Me=E.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Ne=E.div`
  padding: ${({theme:e})=>e.spacing[6]};
  padding-bottom: 0;

  /* Flush内のmargin-bottomを打ち消す */
  > * {
    margin-bottom: 0;
  }
`,Pe=E.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`,Fe=E.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({theme:e})=>e.spacing[4]};
  min-width: 200px;
`,Ie=E.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`;const Le=({isOpen:t,onCreateCharacter:n,error:r,onClearError:i,success:a,onClearSuccess:o})=>{let{t:s}=f(),[c,u]=(0,L.useState)(``),[d,p]=(0,L.useState)(t);(0,L.useEffect)(()=>{p(t)},[t]);let m=()=>{p(!d)},h=()=>{c.trim()&&(n(c.trim()),u(``))};return(0,B.jsxs)(De,{children:[(0,B.jsxs)(Oe,{onClick:m,children:[(0,B.jsx)(ke,{children:s(`character.create`)}),(0,B.jsx)(Ae,{children:(0,B.jsx)(l,{name:d?`close`:`hamburger`,size:16})})]}),(0,B.jsx)(je,{isOpen:d,children:(0,B.jsxs)(Me,{children:[(a||r)&&(0,B.jsxs)(Ne,{children:[a&&o&&(0,B.jsx)(D,{type:`success`,onClose:o,children:a}),r&&i&&(0,B.jsx)(D,{type:`error`,onClose:i,children:r})]}),(0,B.jsxs)(Pe,{children:[(0,B.jsxs)(Fe,{children:[(0,B.jsx)(Ie,{htmlFor:`character-name`,children:s(`character.name`)}),(0,B.jsx)(e,{id:`character-name`,value:c,onChange:e=>u(e.target.value),placeholder:s(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&h()})]}),(0,B.jsx)(x,{onClick:h,disabled:!c.trim(),children:s(`character.create`)})]})]})})]})},Re=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=f();return(0,B.jsx)(M,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,B.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var ze=E.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Be=E.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Ve=E.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,He=E.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ue=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,We=E.button`
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
`,Ge=E.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const Ke=({isOpen:e,onClose:n,onRegister:r,characterUuid:i,historyUuid:a,isLoading:o=!1})=>{let{t:s}=f(),l=I(e=>e.addCharacterStats),d=I(e=>e.getHistoryByUuid),p=F(e=>e.characters),h=d(a)?.characterStats.find(e=>e.character.uuid===i)?.usedJobs||[],g=e=>{if(h.includes(e))return;let t=p.find(e=>e.uuid===i);if(!t){console.error(`キャラクターが見つかりません`);return}l(a,t)&&(r?.(e),n())},_=Object.values(t).map(e=>({role:e,roleInfo:m[e],jobs:Object.values(u).filter(t=>P[t].role===e)}));return(0,B.jsx)(M,{isOpen:e,onClose:n,title:s(`job.selectJob`),isLoading:o,children:(0,B.jsxs)(ze,{children:[(0,B.jsx)(Be,{children:s(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,B.jsxs)(Ve,{children:[(0,B.jsxs)(He,{children:[(0,B.jsx)(c,{role:e,size:24}),s(`job.${e}`)]}),(0,B.jsx)(Ue,{children:t.map(e=>{let t=h.includes(e);return(0,B.jsxs)(We,{isSelected:!1,isDisabled:t,onClick:()=>g(e),type:`button`,disabled:t,children:[(0,B.jsx)(C,{job:e,size:32}),(0,B.jsx)(Ge,{children:s(`job.${e}`)})]},e)})})]},e))]})})};var qe=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${d} 0.5s ease-out;
`;const Je=()=>{let{t:e}=f();ee(e(`navigation.home`));let t=w(),{histories:n,isLoading:r,getSortedHistories:i,addUsedJob:a}=I(),{createCharacter:o,updateCharacter:s,deleteCharacter:c,createMatchRecord:u,deleteMatchRecord:d,getCharacterStatsForSeason:p,matchRecords:m,error:h,clearError:g}=F(),v=i()[0],b=v?p(v.uuid):[],[C,T]=(0,L.useState)(()=>b.length>0?new Set([b[0].character.uuid]):new Set),[E,D]=(0,L.useState)(null),[O,A]=(0,L.useState)(``),[M,P]=(0,L.useState)(!1),[R,z]=(0,L.useState)(null),[te,V]=(0,L.useState)(!1),[H,U]=(0,L.useState)(null),[W,G]=(0,L.useState)(null),K=()=>{t.navigate({to:`/new`})},q=t=>{try{o({name:t}),G(e(`character.createSuccess`,{name:t})),setTimeout(()=>G(null),3e3)}catch{}},J=e=>{let t=new Set(C);t.has(e)?t.delete(e):t.add(e),T(t)},ne=(e,t)=>{D(e),A(t)},re=()=>{D(null),A(``)},Y=()=>{if(!(!E||!O.trim()))try{s(E,O.trim())&&(D(null),A(``))}catch{}},ie=(e,t)=>{z({uuid:e,name:t}),P(!0)},X=()=>{if(R)try{c(R.uuid),P(!1),z(null)}catch{}},ae=()=>{P(!1),z(null)},oe=e=>{U(e),V(!0)},se=()=>{V(!1),U(null)},ce=e=>{if(!(!v||!H))try{a({characterUuid:H,seasonUuid:v.uuid,job:e}),V(!1),U(null)}catch{}},Z=(e,t,n)=>{if(v)try{u({characterUuid:e,seasonUuid:v.uuid,job:t,map:n,isWin:!0}),k(`record`,`win`)}catch{}},Q=(e,t,n)=>{if(v)try{u({characterUuid:e,seasonUuid:v.uuid,job:t,map:n,isWin:!1}),k(`record`,`defeat`)}catch{}},$=(e,t,n)=>{if(v)try{let r=m.filter(r=>r.characterUuid===e&&r.seasonUuid===v.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);d(i.uuid),k(`record`,`revert`)}catch{}};return r?(0,B.jsxs)(S,{children:[(0,B.jsx)(j,{children:e(`pages.home.title`,{seasonName:``})}),(0,B.jsx)(_,{children:e(`common.loading`)})]}):n.length===0?(0,B.jsxs)(S,{children:[(0,B.jsx)(N,{children:(0,B.jsx)(j,{children:e(`pages.home.noSeason`)})}),(0,B.jsx)(_,{children:e(`pages.home.createFirstSeason`)}),(0,B.jsx)(y,{})]}):(0,B.jsxs)(S,{children:[(0,B.jsxs)(N,{children:[(0,B.jsx)(j,{children:e(`pages.home.title`,{seasonName:v?.seasonName})}),(0,B.jsxs)(x,{variant:`outline`,size:`sm`,onClick:K,children:[(0,B.jsx)(l,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,B.jsx)(_,{children:e(`pages.home.description`)}),(0,B.jsxs)(qe,{children:[b.map(e=>(0,B.jsx)(Ee,{stats:e,isOpen:C.has(e.character.uuid),onToggle:()=>J(e.character.uuid),onStartEdit:ne,onDelete:ie,onOpenJobRegistration:oe,onAddWin:Z,onAddDefeat:Q,onRevertLast:$,isEditing:E===e.character.uuid,editingName:O,onEditingNameChange:A,onSaveEdit:Y,onCancelEdit:re},e.character.uuid)),(0,B.jsx)(Le,{isOpen:b.length===0,onCreateCharacter:q,error:h,onClearError:g,success:W,onClearSuccess:()=>G(null)})]}),(0,B.jsx)(Re,{isOpen:M,character:R,onClose:ae,onConfirm:X}),v&&H&&(0,B.jsx)(Ke,{isOpen:te,onClose:se,onRegister:ce,characterUuid:H,historyUuid:v.uuid})]})};export{Je as HomePage};