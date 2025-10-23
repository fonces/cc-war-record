import{A as e,C as t,D as n,E as r,M as i,N as a,S as o,T as s,V as c,W as l,_ as u,b as d,c as f,d as p,f as m,g as h,h as g,j as _,k as v,l as y,n as ee,o as b,p as x,q as S,s as C,t as w,v as T,w as E,x as te,y as D,z as ne}from"./index-CUg7Bi74.js";import{n as O,r as k,t as A}from"./colors-BSQPRjSo.js";var j=S(l());const M=e=>{let t=Object.values(D),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},N=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var P=S(c()),F=a`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,I=i.div`
  overflow: hidden;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: ${F} 0.6s ease-out;

  &:hover {
    box-shadow:
      ${({theme:e})=>e.shadows[`2xl`]},
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`,L=i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,R=i.thead`
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.08) 0%, rgba(243, 99, 70, 0.08) 100%);
  border-bottom: 2px solid rgba(38, 161, 223, 0.15);
  position: relative;
`,z=`
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
`,B=i.th`
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
  ${z}
`,V=i.tbody``,H=i.tr`
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
  ${z}
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
`,ie=i.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({winRate:e,theme:t})=>A(e,t)};
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
    background: ${({winRate:e,theme:t})=>A(e,t)};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${H}:hover & {
    &::after {
      opacity: 0.3;
    }
  }
`,ae=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-start;
  align-items: center;
`,W=i(_)`
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
`,oe=i.div`
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
`;const G=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=x(),s=!!(n||r||i);return(0,P.jsx)(I,{children:(0,P.jsxs)(L,{children:[(0,P.jsx)(R,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(B,{children:o(`match.job`)}),(0,P.jsx)(B,{children:o(`match.totalMatches`)}),(0,P.jsx)(B,{children:o(`match.win`)}),(0,P.jsx)(B,{children:o(`match.defeat`)}),(0,P.jsx)(B,{children:o(`match.winRate`)}),(0,P.jsx)(B,{children:s&&a?o(`match.actions`):``})]})}),(0,P.jsx)(V,{children:e.length===0?(0,P.jsx)(H,{children:(0,P.jsx)(U,{colSpan:s?6:5,children:(0,P.jsx)(oe,{children:o(`match.pleaseRegisterJob`)})})}):e.map(e=>{let s=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,P.jsxs)(H,{children:[(0,P.jsx)(re,{children:(0,P.jsxs)(`div`,{children:[(0,P.jsx)(T,{job:s.job,size:32}),s.job]})}),(0,P.jsx)(U,{children:s.totalMatches}),(0,P.jsx)(U,{children:s.wins}),(0,P.jsx)(U,{children:s.defeats}),(0,P.jsx)(U,{children:0<s.totalMatches?(0,P.jsxs)(ie,{winRate:s.winRate,children:[s.winRate,`%`]}):(0,P.jsx)(`span`,{children:`--%`})}),(0,P.jsx)(U,{children:a?(0,P.jsxs)(ae,{children:[n&&(0,P.jsx)(W,{variant:`win`,onClick:()=>n(s.job,a),title:o(`match.addWin`),children:`W`}),r&&(0,P.jsx)(W,{variant:`defeat`,onClick:()=>r(s.job,a),title:o(`match.addDefeat`),children:`D`}),s.totalMatches>0&&i?(0,P.jsx)(W,{variant:`ghost`,icon:(0,P.jsx)(v,{name:`revert`,size:16}),onClick:()=>i(s.job,a),title:o(`match.rollback`)}):(n||r)&&(0,P.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},K=i.span`
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
`,q=i.span`
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
`,J=i.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.9)`:e.colors.white};
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }
`;var se=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,Y=i.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,X=i.h4`
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
`,Z=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Q=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ce=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>A(e,t)};
`,le=i.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;const ue=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=x(),{currentMap:o,nextMap:s}=g(),c=M(t),l=N(t,e),u=t.length,d=t.filter(e=>e.isWin).length,f=u-d,p=u>0?Math.round(d/u*100):0,[m,_]=(0,j.useState)(()=>new Set([o])),y=e=>{let t=new Set(m);t.has(e)?t.delete(e):t.add(e),_(t)};return(0,P.jsxs)(se,{children:[c.map(t=>{let c=t.map===o,l=t.map===s;return(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{onClick:()=>y(t.map),isCurrentMap:c,children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(v,{name:m.has(t.map)?`minus`:`add`,size:16}),(0,P.jsx)(`span`,{children:h(t.map,a)}),c&&(0,P.jsxs)(K,{children:[(0,P.jsx)(J,{}),`Now`]}),l&&(0,P.jsx)(q,{children:`Next`})]}),(0,P.jsxs)(Q,{children:[(0,P.jsx)(`span`,{children:a(`character.stats.matches`,{count:t.totalMatches})}),(0,P.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:t.totalWins}),` / `,a(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,P.jsx)(ce,{winRate:t.mapWinRate,children:a(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,P.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,P.jsx)(le,{isOpen:m.has(t.map),children:(0,P.jsx)(G,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:t.map})})]},t.map)}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{style:{cursor:`default`},children:[(0,P.jsx)(Z,{children:(0,P.jsx)(`span`,{children:a(`match.allStagesTotal`)})}),(0,P.jsxs)(Q,{children:[(0,P.jsx)(`span`,{children:a(`character.stats.matches`,{count:u})}),(0,P.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:d}),` / `,a(`character.stats.defeats`,{count:f})]}),0<u?(0,P.jsx)(ce,{winRate:p,children:a(`character.stats.winRate`,{rate:p})}):(0,P.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,P.jsx)(G,{usedJobs:e,jobSummaries:l})]})]})};var de=i.div`
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
`,fe=i.div`
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
`,pe=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,me=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,he=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>A(e,t)};
`,ge=i.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,_e=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,ve=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,ye=i(_)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,be=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,xe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,Se=i(e)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=i(_)`
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
`;const Ce=({stats:e,isOpen:n,onToggle:r,onStartEdit:i,onDelete:a,onOpenJobRegistration:s,onAddWin:c,onAddDefeat:l,onRevertLast:u,isEditing:f,editingName:p,onEditingNameChange:m,onSaveEdit:h,onCancelEdit:g})=>{let{t:_}=x(),y=te(e.recentMatches),ee=t(e.recentMatches),b=d(e.recentMatches),S=o(e.recentMatches);return(0,P.jsxs)(de,{children:[(0,P.jsx)(fe,{onClick:f?void 0:r,style:{cursor:f?`default`:`pointer`},children:f?(0,P.jsxs)(xe,{children:[(0,P.jsx)(Se,{value:p,inputSize:`sm`,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,P.jsxs)(be,{children:[(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(v,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:_(`common.save`)}),(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(v,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:_(`common.cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(pe,{children:e.character.name}),(0,P.jsxs)(me,{onClick:e=>e.stopPropagation(),children:[(0,P.jsx)(`span`,{children:_(`character.stats.matches`,{count:y})}),(0,P.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:ee}),` / `,_(`character.stats.defeats`,{count:b})]}),0<y?(0,P.jsx)(he,{winRate:S,children:_(`character.stats.winRate`,{rate:S})}):(0,P.jsx)(`span`,{children:_(`character.stats.noWinRate`)}),(0,P.jsxs)(be,{children:[(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(v,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),s(e.character.uuid)},title:_(`character.actions.addJob`)}),(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(v,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:_(`character.actions.editName`)}),(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(v,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid,e.character.name)},title:_(`character.actions.deleteName`)})]})]})]})}),(0,P.jsx)(ge,{isOpen:n,children:(0,P.jsx)(_e,{children:e.usedJobs.length===0?(0,P.jsx)(ve,{children:(0,P.jsx)(ye,{onClick:()=>s(e.character.uuid),children:_(`match.pleaseRegisterJob`)})}):(0,P.jsx)(ue,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:c?(t,n)=>c(e.character.uuid,t,n):void 0,onAddDefeat:l?(t,n)=>l(e.character.uuid,t,n):void 0,onRevertLast:u?(t,n)=>u(e.character.uuid,t,n):void 0})})})]})};var we=i.div`
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
`,Te=i.div`
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
`,Ee=i.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,De=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Oe=i.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,ke=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,Ae=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`,je=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,Me=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const Ne=({isOpen:t,onCreateCharacter:n})=>{let{t:r}=x(),[i,a]=(0,j.useState)(``),[o,s]=(0,j.useState)(t);(0,j.useEffect)(()=>{s(t)},[t]);let c=()=>{s(!o)},l=()=>{i.trim()&&(n(i.trim()),a(``))};return(0,P.jsxs)(we,{children:[(0,P.jsxs)(Te,{onClick:c,children:[(0,P.jsx)(Ee,{children:r(`character.create`)}),(0,P.jsx)(De,{children:(0,P.jsx)(v,{name:o?`close`:`hamburger`,size:16})})]}),(0,P.jsx)(Oe,{isOpen:o,children:(0,P.jsx)(ke,{children:(0,P.jsxs)(Ae,{children:[(0,P.jsxs)(je,{children:[(0,P.jsx)(Me,{htmlFor:`character-name`,children:r(`character.name`)}),(0,P.jsx)(e,{id:`character-name`,value:i,onChange:e=>a(e.target.value),placeholder:r(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&l()})]}),(0,P.jsx)(_,{onClick:l,disabled:!i.trim(),children:r(`character.create`)})]})})})]})},Pe=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=x();return(0,P.jsx)(p,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,P.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Fe=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ie=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Le=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Re=i.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ze=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,Be=i.button`
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
`,Ve=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const He=({isOpen:e,onClose:t,onRegister:i,characterUuid:a,historyUuid:o,isLoading:c=!1})=>{let{t:l}=x(),d=O(e=>e.addCharacterStats),f=O(e=>e.getHistoryByUuid),m=k(e=>e.characters),h=f(o)?.characterStats.find(e=>e.character.uuid===a)?.usedJobs||[],g=e=>{if(h.includes(e))return;let n=m.find(e=>e.uuid===a);if(!n){console.error(`キャラクターが見つかりません`);return}d(o,n)&&(i?.(e),t())},_=Object.values(r).map(e=>({role:e,roleInfo:n[e],jobs:Object.values(E).filter(t=>s[t].role===e)}));return(0,P.jsx)(p,{isOpen:e,onClose:t,title:l(`job.selectJob`),isLoading:c,children:(0,P.jsxs)(Fe,{children:[(0,P.jsx)(Ie,{children:l(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,P.jsxs)(Le,{children:[(0,P.jsxs)(Re,{children:[(0,P.jsx)(u,{role:e,size:24}),l(`job.${e}`)]}),(0,P.jsx)(ze,{children:t.map(e=>{let t=h.includes(e);return(0,P.jsxs)(Be,{isSelected:!1,isDisabled:t,onClick:()=>g(e),type:`button`,disabled:t,children:[(0,P.jsx)(T,{job:e,size:32}),(0,P.jsx)(Ve,{children:l(`job.${e}`)})]},e)})})]},e))]})})};var Ue=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,We=i.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.isDark?`rgba(239, 68, 68, 0.15)`:`#fef2f2`};
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error[600]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ge=i.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.error[600]};
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;const Ke=()=>{let{t:e}=x();m(e(`navigation.home`));let t=ne(),{histories:n,isLoading:r,getSortedHistories:i,addUsedJob:a}=O(),{createCharacter:o,updateCharacter:s,deleteCharacter:c,createMatchRecord:l,deleteMatchRecord:u,getCharacterStatsForSeason:d,matchRecords:p,error:h,clearError:g}=k(),S=i()[0],T=S?d(S.uuid):[],[E,te]=(0,j.useState)(()=>T.length>0?new Set([T[0].character.uuid]):new Set),[D,A]=(0,j.useState)(null),[M,N]=(0,j.useState)(``),[F,I]=(0,j.useState)(!1),[L,R]=(0,j.useState)(null),[z,B]=(0,j.useState)(!1),[V,H]=(0,j.useState)(null),U=()=>{t.navigate({to:`/new`})},re=e=>{try{o({name:e})}catch{}},ie=e=>{let t=new Set(E);t.has(e)?t.delete(e):t.add(e),te(t)},ae=(e,t)=>{A(e),N(t)},W=()=>{A(null),N(``)},oe=()=>{if(!(!D||!M.trim()))try{s(D,M.trim())&&(A(null),N(``))}catch{}},G=(e,t)=>{R({uuid:e,name:t}),I(!0)},K=()=>{if(L)try{c(L.uuid),I(!1),R(null)}catch{}},q=()=>{I(!1),R(null)},J=e=>{H(e),B(!0)},se=()=>{B(!1),H(null)},Y=e=>{if(!(!S||!V))try{a({characterUuid:V,seasonUuid:S.uuid,job:e}),B(!1),H(null)}catch{}},X=(e,t,n)=>{if(S)try{l({characterUuid:e,seasonUuid:S.uuid,job:t,map:n,isWin:!0}),w(`record`,`win`)}catch{}},Z=(e,t,n)=>{if(S)try{l({characterUuid:e,seasonUuid:S.uuid,job:t,map:n,isWin:!1}),w(`record`,`defeat`)}catch{}},Q=(e,t,n)=>{if(S)try{let r=p.filter(r=>r.characterUuid===e&&r.seasonUuid===S.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);u(i.uuid),w(`record`,`revert`)}catch{}};return r?(0,P.jsxs)(b,{children:[(0,P.jsx)(f,{children:e(`pages.home.title`,{seasonName:``})}),(0,P.jsx)(C,{children:e(`common.loading`)})]}):n.length===0?(0,P.jsxs)(b,{children:[(0,P.jsx)(y,{children:(0,P.jsx)(f,{children:e(`pages.home.noSeason`)})}),(0,P.jsx)(C,{children:e(`pages.home.createFirstSeason`)}),(0,P.jsx)(ee,{onCreateSeason:U})]}):(0,P.jsxs)(b,{children:[(0,P.jsxs)(y,{children:[(0,P.jsx)(f,{children:e(`pages.home.title`,{seasonName:S?.seasonName})}),(0,P.jsxs)(_,{variant:`outline`,size:`sm`,onClick:U,children:[(0,P.jsx)(v,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,P.jsx)(C,{children:e(`pages.home.description`)}),h&&(0,P.jsxs)(We,{children:[(0,P.jsx)(`span`,{children:h}),(0,P.jsx)(Ge,{onClick:g,children:e(`common.close`)})]}),(0,P.jsxs)(Ue,{children:[T.map(e=>(0,P.jsx)(Ce,{stats:e,isOpen:E.has(e.character.uuid),onToggle:()=>ie(e.character.uuid),onStartEdit:ae,onDelete:G,onOpenJobRegistration:J,onAddWin:X,onAddDefeat:Z,onRevertLast:Q,isEditing:D===e.character.uuid,editingName:M,onEditingNameChange:N,onSaveEdit:oe,onCancelEdit:W},e.character.uuid)),(0,P.jsx)(Ne,{isOpen:T.length===0,onCreateCharacter:re})]}),(0,P.jsx)(Pe,{isOpen:F,character:L,onClose:q,onConfirm:K}),S&&V&&(0,P.jsx)(He,{isOpen:z,onClose:se,onRegister:Y,characterUuid:V,historyUuid:S.uuid})]})};export{Ke as HomePage};