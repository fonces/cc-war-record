import{C as e,E as t,I as n,M as r,N as i,S as a,T as o,_ as s,b as c,c as l,f as u,g as d,h as f,i as p,k as m,l as h,m as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C,v as w,x as T,y as E,z as D}from"./index-DhA9AGh8.js";import{n as ee,t as O}from"./stores-hPUjOHfi.js";import{n as te,t as k}from"./colors-CSEKSr6O.js";var A=D(n()),j=D(r()),M=i.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,N=i.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[100]};
  }
`,P=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,F=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,I=i.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,L=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,R=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,z=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,B=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const ne=({isOpen:n,onCreateCharacter:r})=>{let{t:i}=C(),[a,s]=(0,A.useState)(``),[c,l]=(0,A.useState)(n);(0,A.useEffect)(()=>{l(n)},[n]);let u=()=>{l(!c)},d=()=>{a.trim()&&(r(a.trim()),s(``))};return(0,j.jsxs)(M,{children:[(0,j.jsxs)(N,{onClick:u,children:[(0,j.jsx)(P,{children:i(`character.create`)}),(0,j.jsx)(F,{children:(0,j.jsx)(e,{name:c?`close`:`hamburger`,size:16})})]}),(0,j.jsx)(I,{isOpen:c,children:(0,j.jsx)(L,{children:(0,j.jsxs)(R,{children:[(0,j.jsxs)(z,{children:[(0,j.jsx)(B,{htmlFor:`character-name`,children:i(`character.name`)}),(0,j.jsx)(o,{id:`character-name`,value:a,onChange:e=>s(e.target.value),placeholder:i(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&d()})]}),(0,j.jsx)(t,{onClick:d,disabled:!a.trim(),children:i(`character.create`)})]})})})]})},V=e=>{let t=Object.values(g),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},H=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var U=i.div`
  overflow-x: auto;
`,re=i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,ie=i.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
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
`,G=i.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${W}
`,K=i.tbody``,q=i.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,J=i.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${W}
`,Y=i(J)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,X=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>k(e,t)};
`,ae=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,Z=i(t)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,oe=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const Q=({usedJobs:t,jobSummaries:n,onAddWin:r,onAddDefeat:i,onRevertLast:a,map:o})=>{let{t:s}=C(),c=!!(r||i||a);return(0,j.jsx)(U,{children:(0,j.jsxs)(re,{children:[(0,j.jsx)(ie,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(G,{children:s(`match.job`)}),(0,j.jsx)(G,{children:s(`match.totalMatches`)}),(0,j.jsx)(G,{children:s(`match.win`)}),(0,j.jsx)(G,{children:s(`match.defeat`)}),(0,j.jsx)(G,{children:s(`match.winRate`)}),(0,j.jsx)(G,{children:c&&o?s(`match.actions`):``})]})}),(0,j.jsx)(K,{children:t.length===0?(0,j.jsx)(q,{children:(0,j.jsx)(J,{colSpan:c?6:5,children:(0,j.jsx)(oe,{children:s(`match.pleaseRegisterJob`)})})}):t.map(t=>{let c=n.find(e=>e.job===t)||{job:t,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,j.jsxs)(q,{children:[(0,j.jsx)(Y,{children:(0,j.jsxs)(`div`,{children:[(0,j.jsx)(y,{job:c.job,size:32}),c.job]})}),(0,j.jsx)(J,{children:c.totalMatches}),(0,j.jsx)(J,{children:c.wins}),(0,j.jsx)(J,{children:c.defeats}),(0,j.jsx)(J,{children:0<c.totalMatches?(0,j.jsxs)(X,{winRate:c.winRate,children:[c.winRate,`%`]}):(0,j.jsx)(`span`,{children:`--%`})}),(0,j.jsx)(J,{children:o?(0,j.jsxs)(ae,{children:[r&&(0,j.jsx)(Z,{variant:`win`,onClick:()=>r(c.job,o),title:s(`match.addWin`),children:`W`}),i&&(0,j.jsx)(Z,{variant:`defeat`,onClick:()=>i(c.job,o),title:s(`match.addDefeat`),children:`D`}),c.totalMatches>0&&a?(0,j.jsx)(Z,{variant:`ghost`,icon:(0,j.jsx)(e,{name:`revert`,size:16}),onClick:()=>a(c.job,o),title:s(`match.rollback`)}):(r||i)&&(0,j.jsx)(`div`,{style:{width:`32px`}})]}):null})]},t)})})]})})},se=i.span`
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
`,ce=i.span`
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
`,le=i.span`
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
`;var ue=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,de=i.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,fe=i.h4`
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
`,pe=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,me=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,he=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>k(e,t)};
`,ge=i.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;const _e=({usedJobs:t,matchRecords:n,onAddWin:r,onAddDefeat:i,onRevertLast:a})=>{let{t:o}=C(),{currentMap:s,nextMap:c}=x(),u=V(n),d=H(n,t),f=n.length,p=n.filter(e=>e.isWin).length,m=f-p,h=f>0?Math.round(p/f*100):0,[g,_]=(0,A.useState)(()=>new Set([s])),v=e=>{let t=new Set(g);t.has(e)?t.delete(e):t.add(e),_(t)};return(0,j.jsxs)(ue,{children:[u.map(n=>{let u=n.map===s,d=n.map===c;return(0,j.jsxs)(de,{children:[(0,j.jsxs)(fe,{onClick:()=>v(n.map),isCurrentMap:u,children:[(0,j.jsxs)(pe,{children:[(0,j.jsx)(e,{name:g.has(n.map)?`minus`:`add`,size:16}),(0,j.jsx)(`span`,{children:l(n.map,o)}),u&&(0,j.jsxs)(se,{children:[(0,j.jsx)(le,{}),`Now`]}),d&&(0,j.jsx)(ce,{children:`Next`})]}),(0,j.jsxs)(me,{children:[(0,j.jsx)(`span`,{children:o(`character.stats.matches`,{count:n.totalMatches})}),(0,j.jsxs)(`span`,{children:[o(`character.stats.wins`,{count:n.totalWins}),` / `,o(`character.stats.defeats`,{count:n.totalDefeats})]}),0<n.totalMatches?(0,j.jsx)(he,{winRate:n.mapWinRate,children:o(`character.stats.winRate`,{rate:n.mapWinRate})}):(0,j.jsx)(`span`,{children:o(`character.stats.noWinRate`)})]})]}),(0,j.jsx)(ge,{isOpen:g.has(n.map),children:(0,j.jsx)(Q,{usedJobs:t,jobSummaries:n.jobSummaries,onAddWin:r,onAddDefeat:i,onRevertLast:a,map:n.map})})]},n.map)}),(0,j.jsxs)(de,{children:[(0,j.jsxs)(fe,{style:{cursor:`default`},children:[(0,j.jsx)(pe,{children:(0,j.jsx)(`span`,{children:o(`match.allStagesTotal`)})}),(0,j.jsxs)(me,{children:[(0,j.jsx)(`span`,{children:o(`character.stats.matches`,{count:f})}),(0,j.jsxs)(`span`,{children:[o(`character.stats.wins`,{count:p}),` / `,o(`character.stats.defeats`,{count:m})]}),0<f?(0,j.jsx)(he,{winRate:h,children:o(`character.stats.winRate`,{rate:h})}):(0,j.jsx)(`span`,{children:o(`character.stats.noWinRate`)})]})]}),(0,j.jsx)(Q,{usedJobs:t,jobSummaries:d})]})]})};var ve=i.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,ye=i.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[100]};
  }
`,be=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,xe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Se=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>k(e,t)};
`,Ce=i.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,we=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,Te=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ee=i(t)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,De=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,Oe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,ke=i(o)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=i(t)`
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
`;const Ae=({stats:t,isOpen:n,onToggle:r,onStartEdit:i,onDelete:a,onOpenJobRegistration:o,onAddWin:c,onAddDefeat:l,onRevertLast:u,isEditing:p,editingName:m,onEditingNameChange:h,onSaveEdit:g,onCancelEdit:_})=>{let{t:v}=C(),y=d(t.recentMatches),b=w(t.recentMatches),x=f(t.recentMatches),S=s(t.recentMatches);return(0,j.jsxs)(ve,{children:[(0,j.jsx)(ye,{onClick:p?void 0:r,style:{cursor:p?`default`:`pointer`},children:p?(0,j.jsxs)(Oe,{children:[(0,j.jsx)(ke,{value:m,inputSize:`sm`,onChange:e=>h(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g(),e.key===`Escape`&&_()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,j.jsxs)(De,{children:[(0,j.jsx)($,{variant:`outline`,icon:(0,j.jsx)(e,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:v(`common.save`)}),(0,j.jsx)($,{variant:`outline`,icon:(0,j.jsx)(e,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),_()},title:v(`common.cancel`)})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(be,{children:t.character.name}),(0,j.jsxs)(xe,{onClick:e=>e.stopPropagation(),children:[(0,j.jsx)(`span`,{children:v(`character.stats.matches`,{count:y})}),(0,j.jsxs)(`span`,{children:[v(`character.stats.wins`,{count:b}),` / `,v(`character.stats.defeats`,{count:x})]}),0<y?(0,j.jsx)(Se,{winRate:S,children:v(`character.stats.winRate`,{rate:S})}):(0,j.jsx)(`span`,{children:v(`character.stats.noWinRate`)}),(0,j.jsxs)(De,{children:[(0,j.jsx)($,{variant:`outline`,icon:(0,j.jsx)(e,{name:`add`,size:16}),onClick:e=>{e.stopPropagation(),o(t.character.uuid)},title:v(`character.actions.addJob`)}),(0,j.jsx)($,{variant:`outline`,icon:(0,j.jsx)(e,{name:`edit`,size:16}),onClick:e=>{e.stopPropagation(),i(t.character.uuid,t.character.name)},title:v(`character.actions.editName`)}),(0,j.jsx)($,{variant:`outline`,icon:(0,j.jsx)(e,{name:`delete`,size:16}),onClick:e=>{e.stopPropagation(),a(t.character.uuid,t.character.name)},title:v(`character.actions.deleteName`)})]})]})]})}),(0,j.jsx)(Ce,{isOpen:n,children:(0,j.jsx)(we,{children:t.usedJobs.length===0?(0,j.jsx)(Te,{children:(0,j.jsx)(Ee,{onClick:()=>o(t.character.uuid),children:v(`match.pleaseRegisterJob`)})}):(0,j.jsx)(_e,{usedJobs:t.usedJobs,matchRecords:t.recentMatches,onAddWin:c?(e,n)=>c(t.character.uuid,e,n):void 0,onAddDefeat:l?(e,n)=>l(t.character.uuid,e,n):void 0,onRevertLast:u?(e,n)=>u(t.character.uuid,e,n):void 0})})})]})},je=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=C();return(0,j.jsx)(v,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,j.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Me=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ne=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Pe=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Fe=i.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ie=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,Le=i.button`
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
`,Re=i.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const ze=({isOpen:e,onClose:t,onRegister:n,characterUuid:r,historyUuid:i,isLoading:o=!1})=>{let{t:s}=C(),l=O(e=>e.addCharacterStats),d=O(e=>e.getHistoryByUuid),f=ee(e=>e.characters),p=d(i)?.characterStats.find(e=>e.character.uuid===r)?.usedJobs||[],m=e=>{if(p.includes(e))return;let a=f.find(e=>e.uuid===r);if(!a){console.error(`キャラクターが見つかりません`);return}l(i,a)&&(n?.(e),t())},h=Object.values(T).map(e=>({role:e,roleInfo:a[e],jobs:Object.values(E).filter(t=>c[t].role===e)}));return(0,j.jsx)(v,{isOpen:e,onClose:t,title:s(`job.selectJob`),isLoading:o,children:(0,j.jsxs)(Me,{children:[(0,j.jsx)(Ne,{children:s(`job.selectJobDescription`)}),h.map(({role:e,jobs:t})=>(0,j.jsxs)(Pe,{children:[(0,j.jsxs)(Fe,{children:[(0,j.jsx)(u,{role:e,size:24}),s(`job.${e}`)]}),(0,j.jsx)(Ie,{children:t.map(e=>{let t=p.includes(e);return(0,j.jsxs)(Le,{isSelected:!1,isDisabled:t,onClick:()=>m(e),type:`button`,disabled:t,children:[(0,j.jsx)(y,{job:e,size:32}),(0,j.jsx)(Re,{children:s(`job.${e}`)})]},e)})})]},e))]})})};var Be=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,Ve=i.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,He=i.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,Ue=()=>{let{t:n}=C();h(n(`navigation.home`));let r=m(),{histories:i,isLoading:a,getSortedHistories:o,addUsedJob:s}=O(),{createCharacter:c,updateCharacter:l,deleteCharacter:u,createMatchRecord:d,deleteMatchRecord:f,getCharacterStatsForSeason:g,matchRecords:v,error:y,clearError:x}=ee(),w=o()[0],T=w?g(w.uuid):[],[E,D]=(0,A.useState)(()=>T.length>0?new Set([T[0].character.uuid]):new Set),[k,M]=(0,A.useState)(null),[N,P]=(0,A.useState)(``),[F,I]=(0,A.useState)(!1),[L,R]=(0,A.useState)(null),[z,B]=(0,A.useState)(!1),[V,H]=(0,A.useState)(null),U=()=>{r.navigate({to:`/new`})},re=e=>{try{c({name:e})}catch{}},ie=e=>{let t=new Set(E);t.has(e)?t.delete(e):t.add(e),D(t)},W=(e,t)=>{M(e),P(t)},G=()=>{M(null),P(``)},K=()=>{if(!(!k||!N.trim()))try{l(k,N.trim())&&(M(null),P(``))}catch{}},q=(e,t)=>{R({uuid:e,name:t}),I(!0)},J=()=>{if(L)try{u(L.uuid),I(!1),R(null)}catch{}},Y=()=>{I(!1),R(null)},X=e=>{H(e),B(!0)},ae=()=>{B(!1),H(null)},Z=e=>{if(!(!w||!V))try{s({characterUuid:V,seasonUuid:w.uuid,job:e}),B(!1),H(null)}catch{}},oe=(e,t,n)=>{if(w)try{d({characterUuid:e,seasonUuid:w.uuid,job:t,map:n,isWin:!0})}catch{}},Q=(e,t,n)=>{if(w)try{d({characterUuid:e,seasonUuid:w.uuid,job:t,map:n,isWin:!1})}catch{}},se=(e,t,n)=>{if(w)try{let r=v.filter(r=>r.characterUuid===e&&r.seasonUuid===w.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);f(i.uuid)}catch{}};return a?(0,j.jsxs)(S,{children:[(0,j.jsx)(b,{children:n(`pages.home.title`,{seasonName:``})}),(0,j.jsx)(_,{children:n(`common.loading`)})]}):i.length===0?(0,j.jsxs)(S,{children:[(0,j.jsx)(p,{children:(0,j.jsx)(b,{children:n(`pages.home.noSeason`)})}),(0,j.jsx)(_,{children:n(`pages.home.createFirstSeason`)}),(0,j.jsx)(te,{onCreateSeason:U})]}):(0,j.jsxs)(S,{children:[(0,j.jsxs)(p,{children:[(0,j.jsx)(b,{children:n(`pages.home.title`,{seasonName:w?.seasonName})}),(0,j.jsxs)(t,{variant:`outline`,size:`sm`,onClick:U,children:[(0,j.jsx)(e,{name:`add`,size:16}),n(`pages.home.createSeason`)]})]}),(0,j.jsx)(_,{children:n(`pages.home.description`)}),y&&(0,j.jsxs)(Ve,{children:[(0,j.jsx)(`span`,{children:y}),(0,j.jsx)(He,{onClick:x,children:n(`common.close`)})]}),(0,j.jsxs)(Be,{children:[T.map(e=>(0,j.jsx)(Ae,{stats:e,isOpen:E.has(e.character.uuid),onToggle:()=>ie(e.character.uuid),onStartEdit:W,onDelete:q,onOpenJobRegistration:X,onAddWin:oe,onAddDefeat:Q,onRevertLast:se,isEditing:k===e.character.uuid,editingName:N,onEditingNameChange:P,onSaveEdit:K,onCancelEdit:G},e.character.uuid)),(0,j.jsx)(ne,{isOpen:T.length===0,onCreateCharacter:re})]}),(0,j.jsx)(je,{isOpen:F,character:L,onClose:Y,onConfirm:J}),w&&V&&(0,j.jsx)(ze,{isOpen:z,onClose:ae,onRegister:Z,characterUuid:V,historyUuid:w.uuid})]})};export{Ue as component};