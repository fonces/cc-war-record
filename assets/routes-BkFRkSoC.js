import{B as e,C as t,D as n,E as r,L as i,M as a,O as o,P as s,S as c,_ as l,a as u,b as d,c as f,d as p,g as m,h,i as g,l as _,m as v,n as y,p as b,r as x,s as S,t as ee,u as te,v as C,w,x as T,y as E}from"./index-DWH5DhFd.js";import{n as ne,t as D}from"./stores-BRg7tdeQ.js";import{t as O}from"./colors-B1cxjv0s.js";var k=e(i());const A=e=>{let t=Object.values(h),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},j=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var M=e(s()),N=o.div`
  overflow-x: auto;
`,P=o.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,F=o.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,I=`
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
`,L=o.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${I}
`,re=o.tbody``,R=o.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,z=o.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${I}
`,B=o(z)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,V=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>O(e,t)};
`,ie=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,H=o(n)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,ae=o.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const U=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=p(),s=!!(n||r||i);return(0,M.jsx)(N,{children:(0,M.jsxs)(P,{children:[(0,M.jsx)(F,{children:(0,M.jsxs)(`tr`,{children:[(0,M.jsx)(L,{children:o(`match.job`)}),(0,M.jsx)(L,{children:o(`match.totalMatches`)}),(0,M.jsx)(L,{children:o(`match.win`)}),(0,M.jsx)(L,{children:o(`match.defeat`)}),(0,M.jsx)(L,{children:o(`match.winRate`)}),(0,M.jsx)(L,{children:s&&a?o(`match.actions`):``})]})}),(0,M.jsx)(re,{children:e.length===0?(0,M.jsx)(R,{children:(0,M.jsx)(z,{colSpan:s?6:5,children:(0,M.jsx)(ae,{children:o(`match.pleaseRegisterJob`)})})}):e.map(e=>{let s=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,M.jsxs)(R,{children:[(0,M.jsx)(B,{children:(0,M.jsxs)(`div`,{children:[(0,M.jsx)(v,{job:s.job,size:32}),s.job]})}),(0,M.jsx)(z,{children:s.totalMatches}),(0,M.jsx)(z,{children:s.wins}),(0,M.jsx)(z,{children:s.defeats}),(0,M.jsx)(z,{children:0<s.totalMatches?(0,M.jsxs)(V,{winRate:s.winRate,children:[s.winRate,`%`]}):(0,M.jsx)(`span`,{children:`--%`})}),(0,M.jsx)(z,{children:a?(0,M.jsxs)(ie,{children:[n&&(0,M.jsx)(H,{variant:`win`,onClick:()=>n(s.job,a),title:o(`match.addWin`),children:`W`}),r&&(0,M.jsx)(H,{variant:`defeat`,onClick:()=>r(s.job,a),title:o(`match.addDefeat`),children:`D`}),s.totalMatches>0&&i?(0,M.jsx)(H,{variant:`ghost`,icon:(0,M.jsx)(w,{name:`revert`,size:16}),onClick:()=>i(s.job,a),title:o(`match.rollback`)}):(n||r)&&(0,M.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},W=o.span`
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
`,G=o.span`
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
`,K=o.span`
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
`;var q=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,J=o.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Y=o.h4`
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
`,X=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Z=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Q=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>O(e,t)};
`,oe=o.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;const se=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=p(),{currentMap:o,nextMap:s}=f(),c=A(t),l=j(t,e),u=t.length,d=t.filter(e=>e.isWin).length,m=u-d,h=u>0?Math.round(d/u*100):0,[g,v]=(0,k.useState)(()=>new Set([o])),y=e=>{let t=new Set(g);t.has(e)?t.delete(e):t.add(e),v(t)};return(0,M.jsxs)(q,{children:[c.map(t=>{let c=t.map===o,l=t.map===s;return(0,M.jsxs)(J,{children:[(0,M.jsxs)(Y,{onClick:()=>y(t.map),isCurrentMap:c,children:[(0,M.jsxs)(X,{children:[(0,M.jsx)(w,{name:g.has(t.map)?`minus`:`add`,size:16}),(0,M.jsx)(`span`,{children:_(t.map,a)}),c&&(0,M.jsxs)(W,{children:[(0,M.jsx)(K,{}),`Now`]}),l&&(0,M.jsx)(G,{children:`Next`})]}),(0,M.jsxs)(Z,{children:[(0,M.jsx)(`span`,{children:a(`character.stats.matches`,{count:t.totalMatches})}),(0,M.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:t.totalWins}),` / `,a(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,M.jsx)(Q,{winRate:t.mapWinRate,children:a(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,M.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,M.jsx)(oe,{isOpen:g.has(t.map),children:(0,M.jsx)(U,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:t.map})})]},t.map)}),(0,M.jsxs)(J,{children:[(0,M.jsxs)(Y,{style:{cursor:`default`},children:[(0,M.jsx)(X,{children:(0,M.jsx)(`span`,{children:a(`match.allStagesTotal`)})}),(0,M.jsxs)(Z,{children:[(0,M.jsx)(`span`,{children:a(`character.stats.matches`,{count:u})}),(0,M.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:d}),` / `,a(`character.stats.defeats`,{count:m})]}),0<u?(0,M.jsx)(Q,{winRate:h,children:a(`character.stats.winRate`,{rate:h})}):(0,M.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,M.jsx)(U,{usedJobs:e,jobSummaries:l})]})]})};var ce=o.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,le=o.div`
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
`,ue=o.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,de=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,fe=o.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>O(e,t)};
`,pe=o.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,me=o.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,he=o.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,ge=o(n)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,_e=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,ve=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,ye=o(r)`
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
`;const be=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:o,onAddDefeat:s,onRevertLast:c,isEditing:u,editingName:d,onEditingNameChange:f,onSaveEdit:h,onCancelEdit:g})=>{let{t:_}=p(),v=l(e.recentMatches),y=E(e.recentMatches),b=m(e.recentMatches),x=C(e.recentMatches);return(0,M.jsxs)(ce,{children:[(0,M.jsx)(le,{onClick:u?void 0:n,style:{cursor:u?`default`:`pointer`},children:u?(0,M.jsxs)(ve,{children:[(0,M.jsx)(ye,{value:d,inputSize:`sm`,onChange:e=>f(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,M.jsxs)(_e,{children:[(0,M.jsx)($,{variant:`outline`,icon:(0,M.jsx)(w,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:_(`common.save`)}),(0,M.jsx)($,{variant:`outline`,icon:(0,M.jsx)(w,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:_(`common.cancel`)})]})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ue,{children:e.character.name}),(0,M.jsxs)(de,{onClick:e=>e.stopPropagation(),children:[(0,M.jsx)(`span`,{children:_(`character.stats.matches`,{count:v})}),(0,M.jsxs)(`span`,{children:[_(`character.stats.wins`,{count:y}),` / `,_(`character.stats.defeats`,{count:b})]}),0<v?(0,M.jsx)(fe,{winRate:x,children:_(`character.stats.winRate`,{rate:x})}):(0,M.jsx)(`span`,{children:_(`character.stats.noWinRate`)}),(0,M.jsxs)(_e,{children:[(0,M.jsx)($,{variant:`outline`,icon:(0,M.jsx)(w,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:_(`character.actions.addJob`)}),(0,M.jsx)($,{variant:`outline`,icon:(0,M.jsx)(w,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:_(`character.actions.editName`)}),(0,M.jsx)($,{variant:`outline`,icon:(0,M.jsx)(w,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:_(`character.actions.deleteName`)})]})]})]})}),(0,M.jsx)(pe,{isOpen:t,children:(0,M.jsx)(me,{children:e.usedJobs.length===0?(0,M.jsx)(he,{children:(0,M.jsx)(ge,{onClick:()=>a(e.character.uuid),children:_(`match.pleaseRegisterJob`)})}):(0,M.jsx)(se,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:o?(t,n)=>o(e.character.uuid,t,n):void 0,onAddDefeat:s?(t,n)=>s(e.character.uuid,t,n):void 0,onRevertLast:c?(t,n)=>c(e.character.uuid,t,n):void 0})})})]})};var xe=o.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,Se=o.div`
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
`,Ce=o.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,we=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Te=o.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,Ee=o.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,De=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,Oe=o.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,ke=o.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const Ae=({isOpen:e,onCreateCharacter:t})=>{let{t:i}=p(),[a,o]=(0,k.useState)(``),[s,c]=(0,k.useState)(e);(0,k.useEffect)(()=>{c(e)},[e]);let l=()=>{c(!s)},u=()=>{a.trim()&&(t(a.trim()),o(``))};return(0,M.jsxs)(xe,{children:[(0,M.jsxs)(Se,{onClick:l,children:[(0,M.jsx)(Ce,{children:i(`character.create`)}),(0,M.jsx)(we,{children:(0,M.jsx)(w,{name:s?`close`:`hamburger`,size:16})})]}),(0,M.jsx)(Te,{isOpen:s,children:(0,M.jsx)(Ee,{children:(0,M.jsxs)(De,{children:[(0,M.jsxs)(Oe,{children:[(0,M.jsx)(ke,{htmlFor:`character-name`,children:i(`character.name`)}),(0,M.jsx)(r,{id:`character-name`,value:a,onChange:e=>o(e.target.value),placeholder:i(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&u()})]}),(0,M.jsx)(n,{onClick:u,disabled:!a.trim(),children:i(`character.create`)})]})})})]})},je=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=p();return(0,M.jsx)(S,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,M.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Me=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Ne=o.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`,Pe=o.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Fe=o.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ie=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
`,Le=o.button`
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
`,Re=o.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  text-align: center;
`;const ze=({isOpen:e,onClose:n,onRegister:r,characterUuid:i,historyUuid:a,isLoading:o=!1})=>{let{t:s}=p(),l=D(e=>e.addCharacterStats),u=D(e=>e.getHistoryByUuid),f=ne(e=>e.characters),m=u(a)?.characterStats.find(e=>e.character.uuid===i)?.usedJobs||[],h=e=>{if(m.includes(e))return;let t=f.find(e=>e.uuid===i);if(!t){console.error(`キャラクターが見つかりません`);return}l(a,t)&&(r?.(e),n())},g=Object.values(c).map(e=>({role:e,roleInfo:t[e],jobs:Object.values(d).filter(t=>T[t].role===e)}));return(0,M.jsx)(S,{isOpen:e,onClose:n,title:s(`job.selectJob`),isLoading:o,children:(0,M.jsxs)(Me,{children:[(0,M.jsx)(Ne,{children:s(`job.selectJobDescription`)}),g.map(({role:e,jobs:t})=>(0,M.jsxs)(Pe,{children:[(0,M.jsxs)(Fe,{children:[(0,M.jsx)(b,{role:e,size:24}),s(`job.${e}`)]}),(0,M.jsx)(Ie,{children:t.map(e=>{let t=m.includes(e);return(0,M.jsxs)(Le,{isSelected:!1,isDisabled:t,onClick:()=>h(e),type:`button`,disabled:t,children:[(0,M.jsx)(v,{job:e,size:32}),(0,M.jsx)(Re,{children:s(`job.${e}`)})]},e)})})]},e))]})})};var Be=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,Ve=o.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,He=o.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,Ue=()=>{let{t:e}=p();te(e(`navigation.home`));let t=a(),{histories:r,isLoading:i,getSortedHistories:o,addUsedJob:s}=D(),{createCharacter:c,updateCharacter:l,deleteCharacter:d,createMatchRecord:f,deleteMatchRecord:m,getCharacterStatsForSeason:h,matchRecords:_,error:v,clearError:b}=ne(),S=o()[0],C=S?h(S.uuid):[],[T,E]=(0,k.useState)(()=>C.length>0?new Set([C[0].character.uuid]):new Set),[O,A]=(0,k.useState)(null),[j,N]=(0,k.useState)(``),[P,F]=(0,k.useState)(!1),[I,L]=(0,k.useState)(null),[re,R]=(0,k.useState)(!1),[z,B]=(0,k.useState)(null),V=()=>{t.navigate({to:`/new`})},ie=e=>{try{c({name:e})}catch{}},H=e=>{let t=new Set(T);t.has(e)?t.delete(e):t.add(e),E(t)},ae=(e,t)=>{A(e),N(t)},U=()=>{A(null),N(``)},W=()=>{if(!(!O||!j.trim()))try{l(O,j.trim())&&(A(null),N(``))}catch{}},G=(e,t)=>{L({uuid:e,name:t}),F(!0)},K=()=>{if(I)try{d(I.uuid),F(!1),L(null)}catch{}},q=()=>{F(!1),L(null)},J=e=>{B(e),R(!0)},Y=()=>{R(!1),B(null)},X=e=>{if(!(!S||!z))try{s({characterUuid:z,seasonUuid:S.uuid,job:e}),R(!1),B(null)}catch{}},Z=(e,t,n)=>{if(S)try{f({characterUuid:e,seasonUuid:S.uuid,job:t,map:n,isWin:!0})}catch{}},Q=(e,t,n)=>{if(S)try{f({characterUuid:e,seasonUuid:S.uuid,job:t,map:n,isWin:!1})}catch{}},oe=(e,t,n)=>{if(S)try{let r=_.filter(r=>r.characterUuid===e&&r.seasonUuid===S.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);m(i.uuid)}catch{}};return i?(0,M.jsxs)(y,{children:[(0,M.jsx)(g,{children:e(`pages.home.title`,{seasonName:``})}),(0,M.jsx)(x,{children:e(`common.loading`)})]}):r.length===0?(0,M.jsxs)(y,{children:[(0,M.jsx)(u,{children:(0,M.jsx)(g,{children:e(`pages.home.noSeason`)})}),(0,M.jsx)(x,{children:e(`pages.home.createFirstSeason`)}),(0,M.jsx)(ee,{onCreateSeason:V})]}):(0,M.jsxs)(y,{children:[(0,M.jsxs)(u,{children:[(0,M.jsx)(g,{children:e(`pages.home.title`,{seasonName:S?.seasonName})}),(0,M.jsxs)(n,{variant:`outline`,size:`sm`,onClick:V,children:[(0,M.jsx)(w,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,M.jsx)(x,{children:e(`pages.home.description`)}),v&&(0,M.jsxs)(Ve,{children:[(0,M.jsx)(`span`,{children:v}),(0,M.jsx)(He,{onClick:b,children:e(`common.close`)})]}),(0,M.jsxs)(Be,{children:[C.map(e=>(0,M.jsx)(be,{stats:e,isOpen:T.has(e.character.uuid),onToggle:()=>H(e.character.uuid),onStartEdit:ae,onDelete:G,onOpenJobRegistration:J,onAddWin:Z,onAddDefeat:Q,onRevertLast:oe,isEditing:O===e.character.uuid,editingName:j,onEditingNameChange:N,onSaveEdit:W,onCancelEdit:U},e.character.uuid)),(0,M.jsx)(Ae,{isOpen:C.length===0,onCreateCharacter:ie})]}),(0,M.jsx)(je,{isOpen:P,character:I,onClose:q,onConfirm:K}),S&&z&&(0,M.jsx)(ze,{isOpen:re,onClose:Y,onRegister:X,characterUuid:z,historyUuid:S.uuid})]})};export{Ue as component};