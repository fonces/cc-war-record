import{B as e,C as t,D as n,F as r,L as i,O as a,S as o,T as s,U as c,_ as l,a as u,b as d,c as f,d as p,f as m,g as h,h as g,i as _,k as v,l as y,m as b,n as x,o as S,r as C,t as w,u as T,v as E,w as D,x as O,y as ee}from"./index-DArPHjll.js";import{n as te,t as k}from"./stores-BAbvEvku.js";import{t as A}from"./colors-B1cxjv0s.js";var j=c(e());const M=e=>{let t=Object.values(h),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.defeats++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,totalMatches:i,totalWins:a,totalDefeats:o,mapWinRate:s,jobSummaries:l}})},N=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,defeats:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.defeats++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};var P=c(i()),F=v.div`
  overflow-x: auto;
`,ne=v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,I=v.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,L=`
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
`,R=v.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${L}
`,z=v.tbody``,B=v.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,V=v.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${L}
`,H=v(V)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,U=v.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>A(e,t)};
`,W=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,G=v(a)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,K=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const q=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:a})=>{let{t:o}=m(),c=!!(n||r||i);return(0,P.jsx)(F,{children:(0,P.jsxs)(ne,{children:[(0,P.jsx)(I,{children:(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(R,{children:o(`match.job`)}),(0,P.jsx)(R,{children:o(`match.totalMatches`)}),(0,P.jsx)(R,{children:o(`match.win`)}),(0,P.jsx)(R,{children:o(`match.defeat`)}),(0,P.jsx)(R,{children:o(`match.winRate`)}),(0,P.jsx)(R,{children:c&&a?o(`match.actions`):``})]})}),(0,P.jsx)(z,{children:e.length===0?(0,P.jsx)(B,{children:(0,P.jsx)(V,{colSpan:c?6:5,children:(0,P.jsx)(K,{children:o(`match.pleaseRegisterJob`)})})}):e.map(e=>{let c=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,defeats:0,winRate:0};return(0,P.jsxs)(B,{children:[(0,P.jsx)(H,{children:(0,P.jsxs)(`div`,{children:[(0,P.jsx)(g,{job:c.job,size:32}),c.job]})}),(0,P.jsx)(V,{children:c.totalMatches}),(0,P.jsx)(V,{children:c.wins}),(0,P.jsx)(V,{children:c.defeats}),(0,P.jsx)(V,{children:0<c.totalMatches?(0,P.jsxs)(U,{winRate:c.winRate,children:[c.winRate,`%`]}):(0,P.jsx)(`span`,{children:`--%`})}),(0,P.jsx)(V,{children:a?(0,P.jsxs)(W,{children:[n&&(0,P.jsx)(G,{variant:`win`,onClick:()=>n(c.job,a),title:o(`match.addWin`),children:`W`}),r&&(0,P.jsx)(G,{variant:`defeat`,onClick:()=>r(c.job,a),title:o(`match.addDefeat`),children:`D`}),c.totalMatches>0&&i?(0,P.jsx)(G,{variant:`ghost`,icon:(0,P.jsx)(s,{name:`revert`,size:16}),onClick:()=>i(c.job,a),title:o(`match.rollback`)}):(n||r)&&(0,P.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})},re=v.span`
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
  color: ${({winRate:e,theme:t})=>A(e,t)};
`,se=v.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;const ce=({usedJobs:e,matchRecords:t,onAddWin:n,onAddDefeat:r,onRevertLast:i})=>{let{t:a}=m(),{currentMap:o,nextMap:c}=y(),l=M(t),u=N(t,e),d=t.length,f=t.filter(e=>e.isWin).length,p=d-f,h=d>0?Math.round(f/d*100):0,[g,_]=(0,j.useState)(()=>new Set([o])),v=e=>{let t=new Set(g);t.has(e)?t.delete(e):t.add(e),_(t)};return(0,P.jsxs)(oe,{children:[l.map(t=>{let l=t.map===o,u=t.map===c;return(0,P.jsxs)(J,{children:[(0,P.jsxs)(Y,{onClick:()=>v(t.map),isCurrentMap:l,children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(s,{name:g.has(t.map)?`minus`:`add`,size:16}),(0,P.jsx)(`span`,{children:T(t.map,a)}),l&&(0,P.jsxs)(re,{children:[(0,P.jsx)(ae,{}),`Now`]}),u&&(0,P.jsx)(ie,{children:`Next`})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(`span`,{children:a(`character.stats.matches`,{count:t.totalMatches})}),(0,P.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:t.totalWins}),` / `,a(`character.stats.defeats`,{count:t.totalDefeats})]}),0<t.totalMatches?(0,P.jsx)(Q,{winRate:t.mapWinRate,children:a(`character.stats.winRate`,{rate:t.mapWinRate})}):(0,P.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,P.jsx)(se,{isOpen:g.has(t.map),children:(0,P.jsx)(q,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddDefeat:r,onRevertLast:i,map:t.map})})]},t.map)}),(0,P.jsxs)(J,{children:[(0,P.jsxs)(Y,{style:{cursor:`default`},children:[(0,P.jsx)(X,{children:(0,P.jsx)(`span`,{children:a(`match.allStagesTotal`)})}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(`span`,{children:a(`character.stats.matches`,{count:d})}),(0,P.jsxs)(`span`,{children:[a(`character.stats.wins`,{count:f}),` / `,a(`character.stats.defeats`,{count:p})]}),0<d?(0,P.jsx)(Q,{winRate:h,children:a(`character.stats.winRate`,{rate:h})}):(0,P.jsx)(`span`,{children:a(`character.stats.noWinRate`)})]})]}),(0,P.jsx)(q,{usedJobs:e,jobSummaries:u})]})]})};var le=v.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,ue=v.div`
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
  color: ${({winRate:e,theme:t})=>A(e,t)};
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
`,_e=v(a)`
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
`,be=v(n)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=v(a)`
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
`;const xe=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:o,onAddDefeat:c,onRevertLast:u,isEditing:f,editingName:p,onEditingNameChange:h,onSaveEdit:g,onCancelEdit:_})=>{let{t:v}=m(),y=E(e.recentMatches),b=d(e.recentMatches),x=l(e.recentMatches),S=ee(e.recentMatches);return(0,P.jsxs)(le,{children:[(0,P.jsx)(ue,{onClick:f?void 0:n,style:{cursor:f?`default`:`pointer`},children:f?(0,P.jsxs)(ye,{children:[(0,P.jsx)(be,{value:p,inputSize:`sm`,onChange:e=>h(e.target.value),onKeyDown:e=>{e.key===`Enter`&&g(),e.key===`Escape`&&_()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,P.jsxs)(ve,{children:[(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(s,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:v(`common.save`)}),(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(s,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),_()},title:v(`common.cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(de,{children:e.character.name}),(0,P.jsxs)(fe,{onClick:e=>e.stopPropagation(),children:[(0,P.jsx)(`span`,{children:v(`character.stats.matches`,{count:y})}),(0,P.jsxs)(`span`,{children:[v(`character.stats.wins`,{count:b}),` / `,v(`character.stats.defeats`,{count:x})]}),0<y?(0,P.jsx)(pe,{winRate:S,children:v(`character.stats.winRate`,{rate:S})}):(0,P.jsx)(`span`,{children:v(`character.stats.noWinRate`)}),(0,P.jsxs)(ve,{children:[(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(s,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:v(`character.actions.addJob`)}),(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(s,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:v(`character.actions.editName`)}),(0,P.jsx)($,{variant:`outline`,icon:(0,P.jsx)(s,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:v(`character.actions.deleteName`)})]})]})]})}),(0,P.jsx)(me,{isOpen:t,children:(0,P.jsx)(he,{children:e.usedJobs.length===0?(0,P.jsx)(ge,{children:(0,P.jsx)(_e,{onClick:()=>a(e.character.uuid),children:v(`match.pleaseRegisterJob`)})}):(0,P.jsx)(ce,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:o?(t,n)=>o(e.character.uuid,t,n):void 0,onAddDefeat:c?(t,n)=>c(e.character.uuid,t,n):void 0,onRevertLast:u?(t,n)=>u(e.character.uuid,t,n):void 0})})})]})};var Se=v.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,Ce=v.div`
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
`,we=v.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
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
`;const je=({isOpen:e,onCreateCharacter:t})=>{let{t:r}=m(),[i,o]=(0,j.useState)(``),[c,l]=(0,j.useState)(e);(0,j.useEffect)(()=>{l(e)},[e]);let u=()=>{l(!c)},d=()=>{i.trim()&&(t(i.trim()),o(``))};return(0,P.jsxs)(Se,{children:[(0,P.jsxs)(Ce,{onClick:u,children:[(0,P.jsx)(we,{children:r(`character.create`)}),(0,P.jsx)(Te,{children:(0,P.jsx)(s,{name:c?`close`:`hamburger`,size:16})})]}),(0,P.jsx)(Ee,{isOpen:c,children:(0,P.jsx)(De,{children:(0,P.jsxs)(Oe,{children:[(0,P.jsxs)(ke,{children:[(0,P.jsx)(Ae,{htmlFor:`character-name`,children:r(`character.name`)}),(0,P.jsx)(n,{id:`character-name`,value:i,onChange:e=>o(e.target.value),placeholder:r(`character.namePlaceholder`),onKeyDown:e=>e.key===`Enter`&&d()})]}),(0,P.jsx)(a,{onClick:d,disabled:!i.trim(),children:r(`character.create`)})]})})})]})},Me=({isOpen:e,character:t,onClose:n,onConfirm:r})=>{let{t:i}=m();return(0,P.jsx)(f,{isOpen:e,onClose:n,onConfirm:r,title:i(`character.delete`),confirmText:i(`character.confirmDelete`),confirmType:`danger`,cancelText:i(`common.cancel`),children:(0,P.jsx)(`p`,{dangerouslySetInnerHTML:{__html:i(`character.deleteDescription`,{name:`<strong>${t?.name}</strong>`})}})})};var Ne=v.div`
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
`;const Be=({isOpen:e,onClose:n,onRegister:r,characterUuid:i,historyUuid:a,isLoading:s=!1})=>{let{t:c}=m(),l=k(e=>e.addCharacterStats),u=k(e=>e.getHistoryByUuid),d=te(e=>e.characters),p=u(a)?.characterStats.find(e=>e.character.uuid===i)?.usedJobs||[],h=e=>{if(p.includes(e))return;let t=d.find(e=>e.uuid===i);if(!t){console.error(`キャラクターが見つかりません`);return}l(a,t)&&(r?.(e),n())},_=Object.values(t).map(e=>({role:e,roleInfo:D[e],jobs:Object.values(O).filter(t=>o[t].role===e)}));return(0,P.jsx)(f,{isOpen:e,onClose:n,title:c(`job.selectJob`),isLoading:s,children:(0,P.jsxs)(Ne,{children:[(0,P.jsx)(Pe,{children:c(`job.selectJobDescription`)}),_.map(({role:e,jobs:t})=>(0,P.jsxs)(Fe,{children:[(0,P.jsxs)(Ie,{children:[(0,P.jsx)(b,{role:e,size:24}),c(`job.${e}`)]}),(0,P.jsx)(Le,{children:t.map(e=>{let t=p.includes(e);return(0,P.jsxs)(Re,{isSelected:!1,isDisabled:t,onClick:()=>h(e),type:`button`,disabled:t,children:[(0,P.jsx)(g,{job:e,size:32}),(0,P.jsx)(ze,{children:c(`job.${e}`)})]},e)})})]},e))]})})};var Ve=v.div`
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
`;const We=()=>{let{t:e}=m();p(e(`navigation.home`));let t=r(),{histories:n,isLoading:i,getSortedHistories:o,addUsedJob:c}=k(),{createCharacter:l,updateCharacter:d,deleteCharacter:f,createMatchRecord:h,deleteMatchRecord:g,getCharacterStatsForSeason:v,matchRecords:y,error:b,clearError:T}=te(),E=o()[0],D=E?v(E.uuid):[],[O,ee]=(0,j.useState)(()=>D.length>0?new Set([D[0].character.uuid]):new Set),[A,M]=(0,j.useState)(null),[N,F]=(0,j.useState)(``),[ne,I]=(0,j.useState)(!1),[L,R]=(0,j.useState)(null),[z,B]=(0,j.useState)(!1),[V,H]=(0,j.useState)(null),U=()=>{t.navigate({to:`/new`})},W=e=>{try{l({name:e})}catch{}},G=e=>{let t=new Set(O);t.has(e)?t.delete(e):t.add(e),ee(t)},K=(e,t)=>{M(e),F(t)},q=()=>{M(null),F(``)},re=()=>{if(!(!A||!N.trim()))try{d(A,N.trim())&&(M(null),F(``))}catch{}},ie=(e,t)=>{R({uuid:e,name:t}),I(!0)},ae=()=>{if(L)try{f(L.uuid),I(!1),R(null)}catch{}},oe=()=>{I(!1),R(null)},J=e=>{H(e),B(!0)},Y=()=>{B(!1),H(null)},X=e=>{if(!(!E||!V))try{c({characterUuid:V,seasonUuid:E.uuid,job:e}),B(!1),H(null)}catch{}},Z=(e,t,n)=>{if(E)try{h({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!0}),w(`record`,`win`)}catch{}},Q=(e,t,n)=>{if(E)try{h({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!1}),w(`record`,`defeat`)}catch{}},se=(e,t,n)=>{if(E)try{let r=y.filter(r=>r.characterUuid===e&&r.seasonUuid===E.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);g(i.uuid),w(`record`,`revert`)}catch{}};return i?(0,P.jsxs)(C,{children:[(0,P.jsx)(u,{children:e(`pages.home.title`,{seasonName:``})}),(0,P.jsx)(_,{children:e(`common.loading`)})]}):n.length===0?(0,P.jsxs)(C,{children:[(0,P.jsx)(S,{children:(0,P.jsx)(u,{children:e(`pages.home.noSeason`)})}),(0,P.jsx)(_,{children:e(`pages.home.createFirstSeason`)}),(0,P.jsx)(x,{onCreateSeason:U})]}):(0,P.jsxs)(C,{children:[(0,P.jsxs)(S,{children:[(0,P.jsx)(u,{children:e(`pages.home.title`,{seasonName:E?.seasonName})}),(0,P.jsxs)(a,{variant:`outline`,size:`sm`,onClick:U,children:[(0,P.jsx)(s,{name:`add`,size:16}),e(`pages.home.createSeason`)]})]}),(0,P.jsx)(_,{children:e(`pages.home.description`)}),b&&(0,P.jsxs)(He,{children:[(0,P.jsx)(`span`,{children:b}),(0,P.jsx)(Ue,{onClick:T,children:e(`common.close`)})]}),(0,P.jsxs)(Ve,{children:[D.map(e=>(0,P.jsx)(xe,{stats:e,isOpen:O.has(e.character.uuid),onToggle:()=>G(e.character.uuid),onStartEdit:K,onDelete:ie,onOpenJobRegistration:J,onAddWin:Z,onAddDefeat:Q,onRevertLast:se,isEditing:A===e.character.uuid,editingName:N,onEditingNameChange:F,onSaveEdit:re,onCancelEdit:q},e.character.uuid)),(0,P.jsx)(je,{isOpen:D.length===0,onCreateCharacter:W})]}),(0,P.jsx)(Me,{isOpen:ne,character:L,onClose:oe,onConfirm:ae}),E&&V&&(0,P.jsx)(Be,{isOpen:z,onClose:Y,onRegister:X,characterUuid:V,historyUuid:E.uuid})]})};export{We as HomePage};