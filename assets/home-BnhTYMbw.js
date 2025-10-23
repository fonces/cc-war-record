import{A as e,C as t,D as n,E as r,F as i,G as a,I as o,J as s,M as c,N as l,O as u,P as d,S as f,T as p,U as m,Z as h,b as g,c as _,d as v,f as y,g as b,h as x,k as S,l as C,n as ee,o as w,p as T,s as E,t as D,v as te,w as O,x as k,y as A}from"./index-j1yoC5uG.js";import{n as j,r as ne,t as M}from"./colors-CQ5nDc5_.js";var N=h(s());const P=e=>{let t=Object.values(f),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},F=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var I=h(a()),L=o.div`
  overflow: hidden;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    box-shadow:
      ${({theme:e})=>e.shadows[`2xl`]},
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`,R=o.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,z=o.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,B=`
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
`,V=o.th`
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
  ${B}
`,H=o.tbody``,U=o.tr`
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
`,W=o.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.gray[700]};
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${B}
`,re=o(W)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text};
    position: relative;
    padding-left: ${({theme:e})=>e.spacing[2]};
  }
`,ie=o.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>M(e,t)};
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
    background: ${({winRate:e,theme:t})=>M(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${U}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,G=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,K=o(d)`
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
`,q=o.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${y} 0.5s ease-out;

  &::before {
    content: "📊";
    font-size: 3rem;
    opacity: 0.5;
  }
`;const J=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:a,map:o})=>{let{t:s}=b(),l=!!(n||r||a);return(0,I.jsx)(L,{children:(0,I.jsxs)(R,{children:[(0,I.jsx)(z,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(V,{children:s(`match.job`)}),(0,I.jsx)(V,{children:s(`match.totalMatches`)}),(0,I.jsx)(V,{children:s(`match.win`)}),(0,I.jsx)(V,{children:s(`match.defeat`)}),(0,I.jsx)(V,{children:s(`match.winRate`)}),(0,I.jsx)(V,{children:l&&o?s(`match.actions`):``})]})}),(0,I.jsx)(H,{children:e.length===0?(0,I.jsx)(U,{children:(0,I.jsx)(W,{colSpan:l?6:5,children:(0,I.jsx)(q,{children:s(`match.pleaseRegisterJob`)})})}):e.map(e=>{let l=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,I.jsxs)(U,{children:[(0,I.jsx)(re,{children:(0,I.jsxs)(`div`,{children:[(0,I.jsx)(k,{job:l.job,size:32}),l.job]})}),(0,I.jsx)(W,{children:(0,I.jsx)(i,{children:l.totalMatches})}),(0,I.jsx)(W,{children:(0,I.jsx)(i,{children:l.wins})}),(0,I.jsx)(W,{children:(0,I.jsx)(i,{children:l.defeats})}),(0,I.jsx)(W,{children:0<l.totalMatches?(0,I.jsx)(ie,{winRate:l.winRate,children:(0,I.jsx)(i,{suffix:`%`,children:l.winRate})}):(0,I.jsx)(`span`,{children:`--%`})}),(0,I.jsx)(W,{children:o?(0,I.jsxs)(G,{children:[n&&(0,I.jsx)(K,{variant:`win`,onClick:()=>n(l.job,o),title:s(`match.addWin`),children:`W`}),r&&(0,I.jsx)(K,{variant:`defeat`,onClick:()=>r(l.job,o),title:s(`match.addDefeat`),children:`D`}),l.totalMatches>0&&a?(0,I.jsx)(K,{variant:`ghost`,icon:(0,I.jsx)(c,{name:`revert`,size:16}),onClick:()=>a(l.job,o),title:s(`match.rollback`)}):(n||r)&&(0,I.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},Y=o.span`
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
`,ae=o.span`
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
`,oe=o.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: ${T} 2s ease-in-out infinite;
`;var se=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,X=o.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Z=o.h4`
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
`,Q=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ce=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,le=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>M(e,t)};
`,ue=o.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  > * {
    min-height: 0;
  }
`,de=o.span`
  display: flex;
  align-items: center;
  transform: ${({isOpen:e})=>e?`rotate(180deg)`:`rotate(0deg)`};
  transition: transform 0.3s ease;
`;const fe=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=b(),{currentMap:o,nextMap:s}=te(),l=P(t),u=F(t,e),d=t.length,f=t.filter(e=>e.isWin).length,p=d-f,m=d>0?Math.round(f/d*100):0,[h,g]=(0,N.useState)(()=>new Set([o])),_=e=>{let t=new Set(h);t.has(e)?t.delete(e):t.add(e),g(t)};return(0,I.jsxs)(se,{children:[l.map(t=>{let l=t.map===o,u=t.map===s;return(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{onClick:()=>_(t.map),isCurrentMap:l,children:[(0,I.jsxs)(Q,{children:[(0,I.jsx)(de,{isOpen:h.has(t.map),children:(0,I.jsx)(c,{name:`arrowDropDown`,size:20})}),(0,I.jsx)(`span`,{children:A(t.map,a)}),l&&(0,I.jsxs)(Y,{children:[(0,I.jsx)(oe,{}),`Now`]}),u&&(0,I.jsx)(ae,{children:`Next`})]}),(0,I.jsxs)(ce,{children:[(0,I.jsx)(`span`,{children:a(`character.stats.matches`,{count:t.totalMatches})}),(0,I.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:t.totalWins}),` / `,a(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,I.jsx)(le,{winRate:t.mapWinRate,children:a(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,I.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,I.jsx)(ue,{isOpen:h.has(t.map),children:(0,I.jsx)(J,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:t.map})})]},t.map)}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{style:{cursor:`default`},children:[(0,I.jsx)(Q,{children:(0,I.jsx)(`span`,{children:a(`match.allStagesTotal`)})}),(0,I.jsxs)(ce,{children:[(0,I.jsx)(`span`,{children:a(`character.stats.matches`,{count:d})}),(0,I.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:f}),` / `,a(`character.stats.defeats`,{count:p})]}),0<d?(0,I.jsx)(le,{winRate:m,children:a(`character.stats.winRate`,{rate:m})}):(0,I.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,I.jsx)(J,{usedJobs:e,jobSummaries:u})]})]})};var pe=o.div`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid ${({theme:e})=>e.colors.border};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
  }
`,me=o.div`
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

  &:hover {
    background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)`};
  }
`,he=o.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,ge=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,_e=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>M(e,t)};
`,ve=o.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,ye=o.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,be=o.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,xe=o(d)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Se=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,Ce=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,we=o(l)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=o(d)`
  padding: ${({theme:e})=>e.spacing[1]};
  min-width: auto;

  &.delete:hover {
    background-color: ${({theme:e})=>e.colors.error[50]};
    border-color: ${({theme:e})=>e.colors.error[600]};
    color: ${({theme:e})=>e.colors.error[600]};
  }

  &.save:hover {
    background-color: ${({theme:e})=>e.colors.success[50]};
    border-color: ${({theme:e})=>e.colors.success[600]};
    color: ${({theme:e})=>e.colors.success[600]};
  }
`;const Te=({stats:e,isOpen:n,onToggle:i,onStartEdit:a,onDelete:o,onOpenJobRegistration:s,onAddWin:l,onAddDefeat:u,onRevertLast:d,isEditing:f,editingName:m,onEditingNameChange:h,onSaveEdit:g,onCancelEdit:_})=>{let{t:v}=b(),y=O(e.recentMatches),x=r(e.recentMatches),S=t(e.recentMatches),C=p(e.recentMatches);return(0,I.jsxs)(pe,{children:[(0,I.jsx)(me,{onClick:f?void 0:i,style:{cursor:f?`default`:`pointer`},children:f?(0,I.jsxs)(Ce,{children:[(0,I.jsx)(we,{value:m,inputSize:`sm`,onChange:e=>h(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g(),e.key===`Escape`&&_()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,I.jsxs)(Se,{children:[(0,I.jsx)($,{variant:`outline`,icon:(0,I.jsx)(c,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:v(`common.save`)}),(0,I.jsx)($,{variant:`outline`,icon:(0,I.jsx)(c,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),_()},title:v(`common.cancel`)})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(he,{children:e.character.name}),(0,I.jsxs)(ge,{onClick:e=>e.stopPropagation(),children:[(0,I.jsx)(`span`,{children:v(`character.stats.matches`,{count:y})}),(0,I.jsxs)(`span`,{children:[v(`character.stats.wins`,{count:x}),` / `,v(`character.stats.defeats`,{count:S})]}),0<y?(0,I.jsx)(_e,{winRate:C,children:v(`character.stats.winRate`,{rate:C})}):(0,I.jsx)(`span`,{children:v(`character.stats.noWinRate`)}),(0,I.jsxs)(Se,{children:[(0,I.jsx)($,{variant:`outline`,icon:(0,I.jsx)(c,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),s(e.character.uuid)},title:v(`character.actions.addJob`)}),(0,I.jsx)($,{variant:`outline`,icon:(0,I.jsx)(c,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid,e.character.name)},title:v(`character.actions.editName`)}),(0,I.jsx)($,{variant:`outline`,icon:(0,I.jsx)(c,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),o(e.character.uuid,e.character.name)},title:v(`character.actions.deleteName`)})]})]})]})}),(0,I.jsx)(ve,{isOpen:n,children:(0,I.jsx)(ye,{children:e.usedJobs.length===0?(0,I.jsx)(be,{children:(0,I.jsx)(xe,{onClick:()=>s(e.character.uuid),children:v(`match.pleaseRegisterJob`)})}):(0,I.jsx)(fe,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:l?(t,n)=>l(e.character.uuid,t,n):void 0,onAddDefeat:u?(t,n)=>u(e.character.uuid,t,n):void 0,onRevertLast:d?(t,n)=>d(e.character.uuid,t,n):void 0})})})]})};var Ee=o.div`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid ${({theme:e})=>e.colors.border};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
  }
`,De=o.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, rgba(38, 161, 223, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)`:`linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)`};
  }
`,Oe=o.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,ke=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ae=o.div`
  display: grid;
  grid-template-rows: ${({isOpen:e})=>e?`1fr`:`0fr`};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`,je=o.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({theme:e})=>e.spacing[6]};
  }
`,Me=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`,Ne=o.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,Pe=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const Fe=({isOpen:e,onCreateCharacter:t})=>{let{t:n}=b(),[r,i]=(0,N.useState)(``),[a,o]=(0,N.useState)(e);(0,N.useEffect)(()=>{o(e)},[e]);let s=()=>{o(!a)},u=()=>{r.trim()&&(t(r.trim()),i(``))};return(0,I.jsxs)(Ee,{children:[(0,I.jsxs)(De,{onClick:s,children:[(0,I.jsx)(Oe,{children:n(`character.create`)}),(0,I.jsx)(ke,{children:(0,I.jsx)(c,{name:a?`close`:`hamburger`,size:16})})]}),(0,I.jsx)(Ae,{isOpen:a,children:(0,I.jsx)(je,{children:(0,I.jsxs)(Me,{children:[(0,I.jsxs)(Ne,{children:[(0,I.jsx)(Pe,{htmlFor:`character-name`,children:n(`character.name`)}),(0,I.jsx)(l,{id:`character-name`,value:r,onChange:e=>i(e.target.value),placeholder:n(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&u()})]}),(0,I.jsx)(d,{onClick:u,disabled:!r.trim(),children:n(`character.create`)})]})})})]})},Ie=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=b();return(0,I.jsx)(v,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,I.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Le=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Re=o.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,ze=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Be=o.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ve=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,He=o.button`
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
`,Ue=o.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const We=({isOpen:t,onClose:r,onRegister:i,characterUuid:a,historyUuid:o,isLoading:s=!1})=>{let{t:c}=b(),l=j(e=>e.addCharacterStats),d=j(e=>e.getHistoryByUuid),f=ne(e=>e.characters),p=d(o)?.characterStats.find(e=>e.character.uuid===a)?.usedJobs||[],m=e=>{if(p.includes(e))return;let t=f.find(e=>e.uuid===a);if(!t){console.error(`キャラクターが見つかりません`);return}l(o,t)&&(i?.(e),r())},h=Object.values(S).map(t=>({role:t,roleInfo:e[t],jobs:Object.values(n).filter(e=>u[e].role===t)}));return(0,I.jsx)(v,{isOpen:t,onClose:r,title:c(`job.selectJob`),isLoading:s,children:(0,I.jsxs)(Le,{children:[(0,I.jsx)(Re,{children:c(`job.selectJobDescription`)}),h.map(({role:e,jobs:t})=>(0,I.jsxs)(ze,{children:[(0,I.jsxs)(Be,{children:[(0,I.jsx)(g,{role:e,size:24}),c(`job.${e}`)]}),(0,I.jsx)(Ve,{children:t.map(e=>{let t=p.includes(e);return(0,I.jsxs)(He,{isSelected:!1,isDisabled:t,onClick:()=>m(e),type:`button`,disabled:t,children:[(0,I.jsx)(k,{job:e,size:32}),(0,I.jsx)(Ue,{children:c(`job.${e}`)})]},e)})})]},e))]})})};var Ge=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${y} 0.5s ease-out;
`,Ke=o.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.isDark?`rgba(239, 68, 68, 0.15)`:`#fef2f2`};
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[600]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,qe=o.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.error[600]};
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;const Je=()=>{let{t:e}=b();x(e(`navigation.home`));let t=m(),{histories:n,isLoading:r,getSortedHistories:i,addUsedJob:a}=j(),{createCharacter:o,updateCharacter:s,deleteCharacter:l,createMatchRecord:u,deleteMatchRecord:f,getCharacterStatsForSeason:p,matchRecords:h,error:g,clearError:v}=ne(),y=i()[0],S=y?p(y.uuid):[],[T,te]=(0,N.useState)(()=>S.length>0?new Set([S[0].character.uuid]):new Set),[O,k]=(0,N.useState)(null),[A,M]=(0,N.useState)(``),[P,F]=(0,N.useState)(!1),[L,R]=(0,N.useState)(null),[z,B]=(0,N.useState)(!1),[V,H]=(0,N.useState)(null),U=()=>{t.navigate({to:`/new`})},W=e=>{try{o({name:e})}catch{}},re=e=>{let t=new Set(T);t.has(e)?t.delete(e):t.add(e),te(t)},ie=(e,t)=>{k(e),M(t)},G=()=>{k(null),M(``)},K=()=>{if(!(!O||!A.trim()))try{s(O,A.trim())&&(k(null),M(``))}catch{}},q=(e,t)=>{R({uuid:e,name:t}),F(!0)},J=()=>{if(L)try{l(L.uuid),F(!1),R(null)}catch{}},Y=()=>{F(!1),R(null)},ae=e=>{H(e),B(!0)},oe=()=>{B(!1),H(null)},se=e=>{if(!(!y||!V))try{a({characterUuid:V,seasonUuid:y.uuid,job:e}),B(!1),H(null)}catch{}},X=(e,t,n)=>{if(y)try{u({characterUuid:e,seasonUuid:y.uuid,job:t,map:n,isWin:!0}),D(`record`,`win`)}catch{}},Z=(e,t,n)=>{if(y)try{u({characterUuid:e,seasonUuid:y.uuid,job:t,map:n,isWin:!1}),D(`record`,`defeat`)}catch{}},Q=(e,t,n)=>{if(y)try{let r=h.filter(r=>r.characterUuid===e&&r.seasonUuid===y.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);f(i.uuid),D(`record`,`revert`)}catch{}};return r?(0,I.jsxs)(w,{children:[(0,I.jsx)(_,{children:e(`pages.home.title`,{seasonName:``})}),(0,I.jsx)(E,{children:e(`common.loading`)})]}):n.length===0?(0,I.jsxs)(w,{children:[(0,I.jsx)(C,{children:(0,I.jsx)(_,{children:e(`pages.home.noSeason`)})}),(0,I.jsx)(E,{children:e(`pages.home.createFirstSeason`)}),(0,I.jsx)(ee,{onCreateSeason:U})]}):(0,I.jsxs)(w,{children:[(0,I.jsxs)(C,{children:[(0,I.jsx)(_,{children:e(`pages.home.title`,{seasonName:y?.seasonName})}),(0,I.jsxs)(d,{variant:`outline`,size:`sm`,onClick:U,children:[(0,I.jsx)(c,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,I.jsx)(E,{children:e(`pages.home.description`)}),g&&(0,I.jsxs)(Ke,{children:[(0,I.jsx)(`span`,{children:g}),(0,I.jsx)(qe,{onClick:v,children:e(`common.close`)})]}),(0,I.jsxs)(Ge,{children:[S.map(e=>(0,I.jsx)(Te,{stats:e,isOpen:T.has(e.character.uuid),onToggle:()=>re(e.character.uuid),onStartEdit:ie,onDelete:q,onOpenJobRegistration:ae,onAddWin:X,onAddDefeat:Z,onRevertLast:Q,isEditing:O===e.character.uuid,editingName:A,onEditingNameChange:M,onSaveEdit:K,onCancelEdit:G},e.character.uuid)),(0,I.jsx)(Fe,{isOpen:S.length===0,onCreateCharacter:W})]}),(0,I.jsx)(Ie,{isOpen:P,character:L,onClose:Y,onConfirm:J}),y&&V&&(0,I.jsx)(We,{isOpen:z,onClose:oe,onRegister:se,characterUuid:V,historyUuid:y.uuid})]})};export{Je as HomePage};