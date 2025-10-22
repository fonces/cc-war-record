import{C as e,D as t,I as n,O as r,R as i,S as a,T as o,V as s,W as c,_ as l,a as u,b as d,c as f,d as p,f as m,g as h,h as g,i as _,k as v,l as y,m as b,n as x,o as S,r as C,t as w,u as T,v as E,w as D,x as O,y as ee}from"./index-CFNUP7SU.js";import{n as k,r as A,t as j}from"./colors-C0O_F-ka.js";var M=c(s());const N=e=>{let t=Object.values(h),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},P=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var F=c(i()),I=v.div`
  overflow-x: auto;
`,te=v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,L=v.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,R=`
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
`,z=v.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${R}
`,B=v.tbody``,V=v.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,H=v.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${R}
`,U=v(H)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,W=v.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>j(e,t)};
`,G=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,K=v(r)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,ne=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const q=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:s}=m(),c=!!(n||r||i);return(0,F.jsx)(I,{children:(0,F.jsxs)(te,{children:[(0,F.jsx)(L,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(z,{children:s(`match.job`)}),(0,F.jsx)(z,{children:s(`match.totalMatches`)}),(0,F.jsx)(z,{children:s(`match.win`)}),(0,F.jsx)(z,{children:s(`match.defeat`)}),(0,F.jsx)(z,{children:s(`match.winRate`)}),(0,F.jsx)(z,{children:c&&a?s(`match.actions`):``})]})}),(0,F.jsx)(B,{children:e.length===0?(0,F.jsx)(V,{children:(0,F.jsx)(H,{colSpan:c?6:5,children:(0,F.jsx)(ne,{children:s(`match.pleaseRegisterJob`)})})}):e.map(e=>{let c=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,F.jsxs)(V,{children:[(0,F.jsx)(U,{children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(g,{job:c.job,size:32}),c.job]})}),(0,F.jsx)(H,{children:c.totalMatches}),(0,F.jsx)(H,{children:c.wins}),(0,F.jsx)(H,{children:c.defeats}),(0,F.jsx)(H,{children:0<c.totalMatches?(0,F.jsxs)(W,{winRate:c.winRate,children:[c.winRate,`%`]}):(0,F.jsx)(`span`,{children:`--%`})}),(0,F.jsx)(H,{children:a?(0,F.jsxs)(G,{children:[n&&(0,F.jsx)(K,{variant:`win`,onClick:()=>n(c.job,a),title:s(`match.addWin`),children:`W`}),r&&(0,F.jsx)(K,{variant:`defeat`,onClick:()=>r(c.job,a),title:s(`match.addDefeat`),children:`D`}),c.totalMatches>0&&i?(0,F.jsx)(K,{variant:`ghost`,icon:(0,F.jsx)(o,{name:`revert`,size:16}),onClick:()=>i(c.job,a),title:s(`match.rollback`)}):(n||r)&&(0,F.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},re=v.span`
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
`,ie=v.span`
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
`,ae=v.span`
  width: 6px;
  height: 6px;
  background-color: white;
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
`;var oe=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,J=v.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Y=v.h4`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({isCurrentMap:e,theme:t})=>e?t.colors.primary[50]:t.colors.gray[100]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
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
    background-color: ${({isCurrentMap:e,theme:t})=>e?t.colors.primary[100]:t.colors.gray[200]};
  }
`,X=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Z=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Q=v.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>j(e,t)};
`,se=v.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;const ce=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=m(),{currentMap:s,nextMap:c}=y(),l=N(t),u=P(t,e),d=t.length,f=t.filter(e=>e.isWin).length,p=d-f,h=d>0?Math.round(f/d*100):0,[g,_]=(0,M.useState)(()=>new Set([s])),v=e=>{let t=new Set(g);t.has(e)?t.delete(e):t.add(e),_(t)};return(0,F.jsxs)(oe,{children:[l.map(t=>{let l=t.map===s,u=t.map===c;return(0,F.jsxs)(J,{children:[(0,F.jsxs)(Y,{onClick:()=>v(t.map),isCurrentMap:l,children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(o,{name:g.has(t.map)?`minus`:`add`,size:16}),(0,F.jsx)(`span`,{children:T(t.map,a)}),l&&(0,F.jsxs)(re,{children:[(0,F.jsx)(ae,{}),`Now`]}),u&&(0,F.jsx)(ie,{children:`Next`})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(`span`,{children:a(`character.stats.matches`,{count:t.totalMatches})}),(0,F.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:t.totalWins}),` / `,a(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,F.jsx)(Q,{winRate:t.mapWinRate,children:a(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,F.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,F.jsx)(se,{isOpen:g.has(t.map),children:(0,F.jsx)(q,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:t.map})})]},t.map)}),(0,F.jsxs)(J,{children:[(0,F.jsxs)(Y,{style:{cursor:`default`},children:[(0,F.jsx)(X,{children:(0,F.jsx)(`span`,{children:a(`match.allStagesTotal`)})}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(`span`,{children:a(`character.stats.matches`,{count:d})}),(0,F.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:f}),` / `,a(`character.stats.defeats`,{count:p})]}),0<d?(0,F.jsx)(Q,{winRate:h,children:a(`character.stats.winRate`,{rate:h})}):(0,F.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,F.jsx)(q,{usedJobs:e,jobSummaries:u})]})]})};var le=v.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid rgba(38, 161, 223, 0.2);
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
  }
`,ue=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-bottom: 1px solid rgba(38, 161, 223, 0.1);
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({theme:e})=>e.transitions.base};
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
  }
`,de=v.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,fe=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,pe=v.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>j(e,t)};
`,me=v.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,he=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,ge=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,_e=v(r)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ve=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,ye=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,be=v(t)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=v(r)`
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
`;const xe=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:s,onAddDefeat:c,onRevertLast:u,isEditing:f,editingName:p,onEditingNameChange:h,onSaveEdit:g,onCancelEdit:_})=>{let{t:v}=m(),y=E(e.recentMatches),b=d(e.recentMatches),x=l(e.recentMatches),S=ee(e.recentMatches);return(0,F.jsxs)(le,{children:[(0,F.jsx)(ue,{onClick:f?void 0:n,style:{cursor:f?`default`:`pointer`},children:f?(0,F.jsxs)(ye,{children:[(0,F.jsx)(be,{value:p,inputSize:`sm`,onChange:e=>h(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g(),e.key===`Escape`&&_()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,F.jsxs)(ve,{children:[(0,F.jsx)($,{variant:`outline`,icon:(0,F.jsx)(o,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:v(`common.save`)}),(0,F.jsx)($,{variant:`outline`,icon:(0,F.jsx)(o,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),_()},title:v(`common.cancel`)})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(de,{children:e.character.name}),(0,F.jsxs)(fe,{onClick:e=>e.stopPropagation(),children:[(0,F.jsx)(`span`,{children:v(`character.stats.matches`,{count:y})}),(0,F.jsxs)(`span`,{children:[v(`character.stats.wins`,{count:b}),` / `,v(`character.stats.defeats`,{count:x})]}),0<y?(0,F.jsx)(pe,{winRate:S,children:v(`character.stats.winRate`,{rate:S})}):(0,F.jsx)(`span`,{children:v(`character.stats.noWinRate`)}),(0,F.jsxs)(ve,{children:[(0,F.jsx)($,{variant:`outline`,icon:(0,F.jsx)(o,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:v(`character.actions.addJob`)}),(0,F.jsx)($,{variant:`outline`,icon:(0,F.jsx)(o,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:v(`character.actions.editName`)}),(0,F.jsx)($,{variant:`outline`,icon:(0,F.jsx)(o,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:v(`character.actions.deleteName`)})]})]})]})}),(0,F.jsx)(me,{isOpen:t,children:(0,F.jsx)(he,{children:e.usedJobs.length===0?(0,F.jsx)(ge,{children:(0,F.jsx)(_e,{onClick:()=>a(e.character.uuid),children:v(`match.pleaseRegisterJob`)})}):(0,F.jsx)(ce,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:s?(t,n)=>s(e.character.uuid,t,n):void 0,onAddDefeat:c?(t,n)=>c(e.character.uuid,t,n):void 0,onRevertLast:u?(t,n)=>u(e.character.uuid,t,n):void 0})})})]})};var Se=v.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid rgba(38, 161, 223, 0.2);
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
  }
`,Ce=v.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border-bottom: 1px solid rgba(38, 161, 223, 0.1);
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    background: linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
  }
`,we=v.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`,Te=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ee=v.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,De=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,Oe=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`,ke=v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,Ae=v.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const je=({isOpen:e,onCreateCharacter:n})=>{let{t:i}=m(),[a,s]=(0,M.useState)(``),[c,l]=(0,M.useState)(e);(0,M.useEffect)(()=>{l(e)},[e]);let u=()=>{l(!c)},d=()=>{a.trim()&&(n(a.trim()),s(``))};return(0,F.jsxs)(Se,{children:[(0,F.jsxs)(Ce,{onClick:u,children:[(0,F.jsx)(we,{children:i(`character.create`)}),(0,F.jsx)(Te,{children:(0,F.jsx)(o,{name:c?`close`:`hamburger`,size:16})})]}),(0,F.jsx)(Ee,{isOpen:c,children:(0,F.jsx)(De,{children:(0,F.jsxs)(Oe,{children:[(0,F.jsxs)(ke,{children:[(0,F.jsx)(Ae,{htmlFor:`character-name`,children:i(`character.name`)}),(0,F.jsx)(t,{id:`character-name`,value:a,onChange:e=>s(e.target.value),placeholder:i(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&d()})]}),(0,F.jsx)(r,{onClick:d,disabled:!a.trim(),children:i(`character.create`)})]})})})]})},Me=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=m();return(0,F.jsx)(f,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,F.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Ne=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Pe=v.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Fe=v.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ie=v.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Le=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,Re=v.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 2px solid ${({isSelected:e,isDisabled:t,theme:n})=>t?n.colors.gray[200]:e?n.colors.primary[500]:n.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background-color: ${({isSelected:e,isDisabled:t,theme:n})=>t?n.colors.gray[100]:e?n.colors.primary[50]:`white`};
  cursor: ${({isDisabled:e})=>e?`not-allowed`:`pointer`};
  opacity: ${({isDisabled:e})=>e?.5:1};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({isDisabled:e,theme:t})=>e?t.colors.gray[200]:t.colors.primary[300]};
    background-color: ${({isDisabled:e,theme:t})=>e?t.colors.gray[100]:t.colors.primary[50]};
  }
`,ze=v.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const Be=({isOpen:t,onClose:n,onRegister:r,characterUuid:i,historyUuid:o,isLoading:s=!1})=>{let{t:c}=m(),l=k(e=>e.addCharacterStats),u=k(e=>e.getHistoryByUuid),d=A(e=>e.characters),p=u(o)?.characterStats.find(e=>e.character.uuid===i)?.usedJobs||[],h=e=>{if(p.includes(e))return;let t=d.find(e=>e.uuid===i);if(!t){console.error(`キャラクターが見つかりません`);return}l(o,t)&&(r?.(e),n())},_=Object.values(e).map(e=>({role:e,roleInfo:D[e],jobs:Object.values(O).filter(t=>a[t].role===e)}));return(0,F.jsx)(f,{isOpen:t,onClose:n,title:c(`job.selectJob`),isLoading:s,children:(0,F.jsxs)(Ne,{children:[(0,F.jsx)(Pe,{children:c(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,F.jsxs)(Fe,{children:[(0,F.jsxs)(Ie,{children:[(0,F.jsx)(b,{role:e,size:24}),c(`job.${e}`)]}),(0,F.jsx)(Le,{children:t.map(e=>{let t=p.includes(e);return(0,F.jsxs)(Re,{isSelected:!1,isDisabled:t,onClick:()=>h(e),type:`button`,disabled:t,children:[(0,F.jsx)(g,{job:e,size:32}),(0,F.jsx)(ze,{children:c(`job.${e}`)})]},e)})})]},e))]})})};var Ve=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,He=v.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ue=v.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;const We=()=>{let{t:e}=m();p(e(`navigation.home`));let t=n(),{histories:i,isLoading:a,getSortedHistories:s,addUsedJob:c}=k(),{createCharacter:l,updateCharacter:d,deleteCharacter:f,createMatchRecord:h,deleteMatchRecord:g,getCharacterStatsForSeason:v,matchRecords:y,error:b,clearError:T}=A(),E=s()[0],D=E?v(E.uuid):[],[O,ee]=(0,M.useState)(()=>D.length>0?new Set([D[0].character.uuid]):new Set),[j,N]=(0,M.useState)(null),[P,I]=(0,M.useState)(``),[te,L]=(0,M.useState)(!1),[R,z]=(0,M.useState)(null),[B,V]=(0,M.useState)(!1),[H,U]=(0,M.useState)(null),W=()=>{t.navigate({to:`/new`})},G=e=>{try{l({name:e})}catch{}},K=e=>{let t=new Set(O);t.has(e)?t.delete(e):t.add(e),ee(t)},ne=(e,t)=>{N(e),I(t)},q=()=>{N(null),I(``)},re=()=>{if(!(!j||!P.trim()))try{d(j,P.trim())&&(N(null),I(``))}catch{}},ie=(e,t)=>{z({uuid:e,name:t}),L(!0)},ae=()=>{if(R)try{f(R.uuid),L(!1),z(null)}catch{}},oe=()=>{L(!1),z(null)},J=e=>{U(e),V(!0)},Y=()=>{V(!1),U(null)},X=e=>{if(!(!E||!H))try{c({characterUuid:H,seasonUuid:E.uuid,job:e}),V(!1),U(null)}catch{}},Z=(e,t,n)=>{if(E)try{h({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!0}),w(`record`,`win`)}catch{}},Q=(e,t,n)=>{if(E)try{h({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!1}),w(`record`,`defeat`)}catch{}},se=(e,t,n)=>{if(E)try{let r=y.filter(r=>r.characterUuid===e&&r.seasonUuid===E.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);g(i.uuid),w(`record`,`revert`)}catch{}};return a?(0,F.jsxs)(C,{children:[(0,F.jsx)(u,{children:e(`pages.home.title`,{seasonName:``})}),(0,F.jsx)(_,{children:e(`common.loading`)})]}):i.length===0?(0,F.jsxs)(C,{children:[(0,F.jsx)(S,{children:(0,F.jsx)(u,{children:e(`pages.home.noSeason`)})}),(0,F.jsx)(_,{children:e(`pages.home.createFirstSeason`)}),(0,F.jsx)(x,{onCreateSeason:W})]}):(0,F.jsxs)(C,{children:[(0,F.jsxs)(S,{children:[(0,F.jsx)(u,{children:e(`pages.home.title`,{seasonName:E?.seasonName})}),(0,F.jsxs)(r,{variant:`outline`,size:`sm`,onClick:W,children:[(0,F.jsx)(o,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,F.jsx)(_,{children:e(`pages.home.description`)}),b&&(0,F.jsxs)(He,{children:[(0,F.jsx)(`span`,{children:b}),(0,F.jsx)(Ue,{onClick:T,children:e(`common.close`)})]}),(0,F.jsxs)(Ve,{children:[D.map(e=>(0,F.jsx)(xe,{stats:e,isOpen:O.has(e.character.uuid),onToggle:()=>K(e.character.uuid),onStartEdit:ne,onDelete:ie,onOpenJobRegistration:J,onAddWin:Z,onAddDefeat:Q,onRevertLast:se,isEditing:j===e.character.uuid,editingName:P,onEditingNameChange:I,onSaveEdit:re,onCancelEdit:q},e.character.uuid)),(0,F.jsx)(je,{isOpen:D.length===0,onCreateCharacter:G})]}),(0,F.jsx)(Me,{isOpen:te,character:R,onClose:oe,onConfirm:ae}),E&&H&&(0,F.jsx)(Be,{isOpen:B,onClose:Y,onRegister:X,characterUuid:H,historyUuid:E.uuid})]})};export{We as HomePage};