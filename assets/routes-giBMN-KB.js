import{A as e,C as t,D as n,E as r,I as i,N as a,P as o,S as s,_ as c,b as l,c as u,d,g as f,h as p,i as m,l as h,m as g,n as _,o as v,p as y,r as b,s as x,t as S,u as ee,v as C,w,x as T,y as te,z as E}from"./index-BRKS9oX4.js";import{n as ne,t as D}from"./stores-BYnJhk5N.js";import{t as re}from"./EmptyState-CsZZ5_d8.js";var O=E(i()),k=E(a()),A=o.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,j=o.div`
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
`,M=o.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,N=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,P=o.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,F=o.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,I=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,L=o.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,R=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const ie=({isOpen:e,onCreateCharacter:t})=>{let{t:i}=d(),[a,o]=(0,O.useState)(``),[s,c]=(0,O.useState)(e);(0,O.useEffect)(()=>{c(e)},[e]);let l=()=>{c(!s)},u=()=>{a.trim()&&(t(a.trim()),o(``))};return(0,k.jsxs)(A,{children:[(0,k.jsxs)(j,{onClick:l,children:[(0,k.jsx)(M,{children:i(`character.create`)}),(0,k.jsx)(N,{children:(0,k.jsx)(w,{name:s?`close`:`hamburger`,size:16})})]}),(0,k.jsx)(P,{isOpen:s,children:(0,k.jsx)(F,{children:(0,k.jsxs)(I,{children:[(0,k.jsxs)(L,{children:[(0,k.jsx)(R,{htmlFor:`character-name`,children:i(`character.name`)}),(0,k.jsx)(r,{id:`character-name`,value:a,onChange:e=>o(e.target.value),placeholder:i(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&u()})]}),(0,k.jsx)(n,{onClick:u,disabled:!a.trim(),children:i(`character.create`)})]})})})]})},z=(e,t)=>e>=51?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600],B=e=>{let t=Object.values(p),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.losses++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalLosses:o,mapWinRate:s,jobSummaries:l}})},V=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.losses++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var ae=o.div`
  overflow-x: auto;
`,oe=o.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,H=o.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
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
`,W=o.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${U}
`,G=o.tbody``,K=o.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,q=o.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${U}
`,J=o(q)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Y=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>z(e,t)};
`,X=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,Z=o(n)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,se=o.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const Q=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddLoss:r,onRevertLast:i,map:a})=>{let{t:o}=d(),s=!!(n||r||i);return(0,k.jsx)(ae,{children:(0,k.jsxs)(oe,{children:[(0,k.jsx)(H,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(W,{children:o(`match.job`)}),(0,k.jsx)(W,{children:o(`match.totalMatches`)}),(0,k.jsx)(W,{children:o(`match.win`)}),(0,k.jsx)(W,{children:o(`match.loss`)}),(0,k.jsx)(W,{children:o(`match.winRate`)}),(0,k.jsx)(W,{children:s&&a?o(`match.actions`):``})]})}),(0,k.jsx)(G,{children:e.length===0?(0,k.jsx)(K,{children:(0,k.jsx)(q,{colSpan:s?6:5,children:(0,k.jsx)(se,{children:o(`match.pleaseRegisterJob`)})})}):e.map(e=>{let o=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,losses:0,winRate:0};return(0,k.jsxs)(K,{children:[(0,k.jsx)(J,{children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(g,{job:o.job,size:32}),o.job]})}),(0,k.jsx)(q,{children:o.totalMatches}),(0,k.jsx)(q,{children:o.wins}),(0,k.jsx)(q,{children:o.losses}),(0,k.jsx)(q,{children:0<o.totalMatches?(0,k.jsxs)(Y,{winRate:o.winRate,children:[o.winRate,`%`]}):(0,k.jsx)(`span`,{children:`--%`})}),(0,k.jsx)(q,{children:a?(0,k.jsxs)(X,{children:[n&&(0,k.jsx)(Z,{variant:`win`,onClick:()=>n(o.job,a),children:`W`}),r&&(0,k.jsx)(Z,{variant:`secondary`,onClick:()=>r(o.job,a),children:`L`}),o.totalMatches>0&&i?(0,k.jsx)(Z,{variant:`outline`,icon:(0,k.jsx)(w,{name:`revert`,size:16}),onClick:()=>i(o.job,a)}):(n||r)&&(0,k.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},ce=o.span`
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
`,le=o.span`
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
`,ue=o.span`
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
`;var de=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,fe=o.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,pe=o.h4`
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
`,me=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,he=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ge=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>z(e,t)};
`,_e=o.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;const ve=({usedJobs:e,matchRecords:t,onAddWin:n,onAddLoss:r,onRevertLast:i})=>{let{t:a}=d(),o=x(),s=u(),c=B(t),l=V(t,e),f=t.length,p=t.filter(e=>e.isWin).length,m=f-p,g=f>0?Math.round(p/f*100):0,[_,v]=(0,O.useState)(()=>new Set([o])),y=e=>{let t=new Set(_);t.has(e)?t.delete(e):t.add(e),v(t)};return(0,k.jsxs)(de,{children:[c.map(t=>{let c=t.map===o,l=t.map===s;return(0,k.jsxs)(fe,{children:[(0,k.jsxs)(pe,{onClick:()=>y(t.map),isCurrentMap:c,children:[(0,k.jsxs)(me,{children:[(0,k.jsx)(w,{name:_.has(t.map)?`minus`:`add`,size:16}),(0,k.jsx)(`span`,{children:h(t.map,a)}),c&&(0,k.jsxs)(ce,{children:[(0,k.jsx)(ue,{}),`Now`]}),l&&(0,k.jsx)(le,{children:`Next`})]}),(0,k.jsxs)(he,{children:[(0,k.jsx)(`span`,{children:a(`character.stats.matches`,{count:t.totalMatches})}),(0,k.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:t.totalWins}),` / `,a(`character.stats.losses`,{count:t.totalLosses})]}),0<t.totalMatches?(0,k.jsx)(ge,{winRate:t.mapWinRate,children:a(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,k.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,k.jsx)(_e,{isOpen:_.has(t.map),children:(0,k.jsx)(Q,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddLoss:r,onRevertLast:i,map:t.map})})]},t.map)}),(0,k.jsxs)(fe,{children:[(0,k.jsxs)(pe,{style:{cursor:`default`},children:[(0,k.jsx)(me,{children:(0,k.jsx)(`span`,{children:a(`match.allStagesTotal`)})}),(0,k.jsxs)(he,{children:[(0,k.jsx)(`span`,{children:a(`character.stats.matches`,{count:f})}),(0,k.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:p}),` / `,a(`character.stats.losses`,{count:m})]}),0<f?(0,k.jsx)(ge,{winRate:g,children:a(`character.stats.winRate`,{rate:g})}):(0,k.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,k.jsx)(Q,{usedJobs:e,jobSummaries:l})]})]})};var ye=o.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,be=o.div`
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
`,xe=o.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,Se=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Ce=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>z(e,t)};
`,we=o.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,Te=o.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,Ee=o.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,De=o(n)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Oe=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,ke=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,Ae=o(r)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=o(n)`
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
`;const je=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:o,onAddLoss:s,onRevertLast:l,isEditing:u,editingName:p,onEditingNameChange:m,onSaveEdit:h,onCancelEdit:g})=>{let{t:_}=d(),v=c(e.recentMatches),y=te(e.recentMatches),b=f(e.recentMatches),x=C(e.recentMatches);return(0,k.jsxs)(ye,{children:[(0,k.jsx)(be,{onClick:u?void 0:n,style:{cursor:u?`default`:`pointer`},children:u?(0,k.jsxs)(ke,{children:[(0,k.jsx)(Ae,{value:p,inputSize:`sm`,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,k.jsxs)(Oe,{children:[(0,k.jsx)($,{variant:`outline`,icon:(0,k.jsx)(w,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:_(`common.save`)}),(0,k.jsx)($,{variant:`outline`,icon:(0,k.jsx)(w,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:_(`common.cancel`)})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(xe,{children:e.character.name}),(0,k.jsxs)(Se,{onClick:e=>e.stopPropagation(),children:[(0,k.jsx)(`span`,{children:_(`character.stats.matches`,{count:v})}),(0,k.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:y}),` / `,_(`character.stats.losses`,{count:b})]}),0<v?(0,k.jsx)(Ce,{winRate:x,children:_(`character.stats.winRate`,{rate:x})}):(0,k.jsx)(`span`,{children:_(`character.stats.noWinRate`)}),(0,k.jsxs)(Oe,{children:[(0,k.jsx)($,{variant:`outline`,icon:(0,k.jsx)(w,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:_(`character.actions.addJob`)}),(0,k.jsx)($,{variant:`outline`,icon:(0,k.jsx)(w,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:_(`character.actions.editName`)}),(0,k.jsx)($,{variant:`outline`,icon:(0,k.jsx)(w,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:_(`character.actions.deleteName`)})]})]})]})}),(0,k.jsx)(we,{isOpen:t,children:(0,k.jsx)(Te,{children:e.usedJobs.length===0?(0,k.jsx)(Ee,{children:(0,k.jsx)(De,{onClick:()=>a(e.character.uuid),children:_(`match.pleaseRegisterJob`)})}):(0,k.jsx)(ve,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:o?(t,n)=>o(e.character.uuid,t,n):void 0,onAddLoss:s?(t,n)=>s(e.character.uuid,t,n):void 0,onRevertLast:l?(t,n)=>l(e.character.uuid,t,n):void 0})})})]})},Me=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=d();return(0,k.jsx)(v,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,k.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Ne=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Pe=o.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Fe=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ie=o.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Le=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,Re=o.button`
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
`,ze=o.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const Be=({isOpen:e,onClose:n,onRegister:r,characterUuid:i,historyUuid:a,isLoading:o=!1})=>{let{t:c}=d(),u=D(e=>e.addCharacterStats),f=D(e=>e.getHistoryByUuid),p=ne(e=>e.characters),m=f(a)?.characterStats.find(e=>e.character.uuid===i)?.usedJobs||[],h=e=>{if(m.includes(e))return;let t=p.find(e=>e.uuid===i);if(!t){console.error(`キャラクターが見つかりません`);return}u(a,t)&&(r?.(e),n())},_=Object.values(s).map(e=>({role:e,roleInfo:t[e],jobs:Object.values(l).filter(t=>T[t].role===e)}));return(0,k.jsx)(v,{isOpen:e,onClose:n,title:c(`job.selectJob`),isLoading:o,children:(0,k.jsxs)(Ne,{children:[(0,k.jsx)(Pe,{children:c(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,k.jsxs)(Fe,{children:[(0,k.jsxs)(Ie,{children:[(0,k.jsx)(y,{role:e,size:24}),c(`job.${e}`)]}),(0,k.jsx)(Le,{children:t.map(e=>{let t=m.includes(e);return(0,k.jsxs)(Re,{isSelected:!1,isDisabled:t,onClick:()=>h(e),type:`button`,disabled:t,children:[(0,k.jsx)(g,{job:e,size:32}),(0,k.jsx)(ze,{children:c(`job.${e}`)})]},e)})})]},e))]})})};var Ve=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,He=o.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ue=o.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,We=()=>{let{t}=d();ee(t(`navigation.home`));let r=e(),{histories:i,isLoading:a,getSortedHistories:o,addUsedJob:s}=D(),{createCharacter:c,updateCharacter:l,deleteCharacter:u,createMatchRecord:f,deleteMatchRecord:p,getCharacterStatsForSeason:h,matchRecords:g,error:v,clearError:y}=ne(),x=o()[0],C=x?h(x.uuid):[],[T,te]=(0,O.useState)(()=>C.length>0?new Set([C[0].character.uuid]):new Set),[E,A]=(0,O.useState)(null),[j,M]=(0,O.useState)(``),[N,P]=(0,O.useState)(!1),[F,I]=(0,O.useState)(null),[L,R]=(0,O.useState)(!1),[z,B]=(0,O.useState)(null),V=()=>{r.navigate({to:`/new`})},ae=e=>{try{c({name:e})}catch{}},oe=e=>{let t=new Set(T);t.has(e)?t.delete(e):t.add(e),te(t)},H=(e,t)=>{A(e),M(t)},U=()=>{A(null),M(``)},W=()=>{if(!(!E||!j.trim()))try{l(E,j.trim())&&(A(null),M(``))}catch{}},G=(e,t)=>{I({uuid:e,name:t}),P(!0)},K=()=>{if(F)try{u(F.uuid),P(!1),I(null)}catch{}},q=()=>{P(!1),I(null)},J=e=>{B(e),R(!0)},Y=()=>{R(!1),B(null)},X=e=>{if(!(!x||!z))try{s({characterUuid:z,seasonUuid:x.uuid,job:e}),R(!1),B(null)}catch{}},Z=(e,t,n)=>{if(x)try{f({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!0})}catch{}},se=(e,t,n)=>{if(x)try{f({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!1})}catch{}},Q=(e,t,n)=>{if(x)try{let r=g.filter(r=>r.characterUuid===e&&r.seasonUuid===x.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);p(i.uuid)}catch{}};return a?(0,k.jsxs)(S,{children:[(0,k.jsx)(b,{children:t(`pages.home.title`,{seasonName:``})}),(0,k.jsx)(_,{children:t(`common.loading`)})]}):i.length===0?(0,k.jsxs)(S,{children:[(0,k.jsx)(m,{children:(0,k.jsx)(b,{children:t(`pages.home.noSeason`)})}),(0,k.jsx)(_,{children:t(`pages.home.createFirstSeason`)}),(0,k.jsx)(re,{onCreateSeason:V})]}):(0,k.jsxs)(S,{children:[(0,k.jsxs)(m,{children:[(0,k.jsx)(b,{children:t(`pages.home.title`,{seasonName:x?.seasonName})}),(0,k.jsxs)(n,{variant:`outline`,size:`sm`,onClick:V,children:[(0,k.jsx)(w,{name:`add`,size:16}),t(`pages.home.createSeason`)]})]}),(0,k.jsx)(_,{children:t(`pages.home.description`)}),v&&(0,k.jsxs)(He,{children:[(0,k.jsx)(`span`,{children:v}),(0,k.jsx)(Ue,{onClick:y,children:t(`common.close`)})]}),(0,k.jsxs)(Ve,{children:[C.map(e=>(0,k.jsx)(je,{stats:e,isOpen:T.has(e.character.uuid),onToggle:()=>oe(e.character.uuid),onStartEdit:H,onDelete:G,onOpenJobRegistration:J,onAddWin:Z,onAddLoss:se,onRevertLast:Q,isEditing:E===e.character.uuid,editingName:j,onEditingNameChange:M,onSaveEdit:W,onCancelEdit:U},e.character.uuid)),(0,k.jsx)(ie,{isOpen:C.length===0,onCreateCharacter:ae})]}),(0,k.jsx)(Me,{isOpen:N,character:F,onClose:q,onConfirm:K}),x&&z&&(0,k.jsx)(Be,{isOpen:L,onClose:Y,onRegister:X,characterUuid:z,historyUuid:x.uuid})]})};export{We as component};