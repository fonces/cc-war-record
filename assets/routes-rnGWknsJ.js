import{L as e,M as t,O as n,P as r,S as i,T as a,_ as o,c as s,f as c,g as l,h as u,i as d,j as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,v as ee,w as b,y as x}from"./index-CtIgVn_i.js";import{t as te}from"./usePageTitle-D8lqTfDd.js";import"./stores-F4lXWS7a.js";import{t as ne}from"./EmptyState-2QCuTco4.js";var S=e(r()),C=e(f()),re=t.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,w=t.div`
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
`,T=t.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,E=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,D=t.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,O=t.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,k=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,A=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,j=t.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const ie=({isOpen:e,onCreateCharacter:t})=>{let[n,r]=(0,S.useState)(``),[o,s]=(0,S.useState)(e);(0,S.useEffect)(()=>{s(e)},[e]);let c=()=>{s(!o)},l=()=>{n.trim()&&(t(n.trim()),r(``))};return(0,C.jsxs)(re,{children:[(0,C.jsxs)(w,{onClick:c,children:[(0,C.jsx)(T,{children:`キャラクター登録`}),(0,C.jsx)(E,{children:(0,C.jsx)(i,{name:o?`close`:`hamburger`,size:16})})]}),(0,C.jsx)(D,{isOpen:o,children:(0,C.jsx)(O,{children:(0,C.jsxs)(k,{children:[(0,C.jsxs)(A,{children:[(0,C.jsx)(j,{htmlFor:`character-name`,children:`キャラクター名`}),(0,C.jsx)(b,{id:`character-name`,value:n,onChange:e=>r(e.target.value),placeholder:`キャラクター名を入力`,onKeyDown:e=>e.key===`Enter`&&l()})]}),(0,C.jsx)(a,{onClick:l,disabled:!n.trim(),children:`キャラクターを登録`})]})})})]})},M=(e,t)=>e>=51?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600];var N=t.div`
  overflow-x: auto;
`,P=t.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,F=t.thead`
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
`,L=t.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${I}
`,R=t.tbody``,z=t.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,B=t.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${I}
`,V=t(B)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,H=t.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>M(e,t)};
`,U=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,W=t(a)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,G=t.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`;const K=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddLoss:r,onRevertLast:a,map:o})=>{let s=!!(n||r||a);return(0,C.jsx)(N,{children:(0,C.jsxs)(P,{children:[(0,C.jsx)(F,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(L,{children:`ジョブ`}),(0,C.jsx)(L,{children:`試合数`}),(0,C.jsx)(L,{children:`勝利`}),(0,C.jsx)(L,{children:`敗北`}),(0,C.jsx)(L,{children:`勝率`}),(0,C.jsx)(L,{children:s&&o?`操作`:``})]})}),(0,C.jsx)(R,{children:e.length===0?(0,C.jsx)(z,{children:(0,C.jsx)(B,{colSpan:s?6:5,children:(0,C.jsx)(G,{children:`ジョブを登録してください`})})}):e.map(e=>{let s=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,losses:0,winRate:0};return(0,C.jsxs)(z,{children:[(0,C.jsx)(V,{children:(0,C.jsxs)(`div`,{children:[(0,C.jsx)(g,{job:s.job,size:32}),s.job]})}),(0,C.jsx)(B,{children:s.totalMatches}),(0,C.jsx)(B,{children:s.wins}),(0,C.jsx)(B,{children:s.losses}),(0,C.jsx)(B,{children:0<s.totalMatches?(0,C.jsxs)(H,{winRate:s.winRate,children:[s.winRate,`%`]}):(0,C.jsx)(`span`,{children:`--%`})}),(0,C.jsx)(B,{children:o?(0,C.jsxs)(U,{children:[n&&(0,C.jsx)(W,{variant:`win`,onClick:()=>n(s.job,o),children:`W`}),r&&(0,C.jsx)(W,{variant:`secondary`,onClick:()=>r(s.job,o),children:`L`}),s.totalMatches>0&&a?(0,C.jsx)(W,{variant:`outline`,icon:(0,C.jsx)(i,{name:`revert`,size:16}),onClick:()=>a(s.job,o)}):(n||r)&&(0,C.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})};var q=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,J=t.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,Y=t.h4`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.gray[100]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[200]};
  }
`,X=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Z=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,Q=t.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>M(e,t)};
`,ae=t.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,oe=e=>{let t=Object.values(p),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.losses++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,mapName:u[t].name,totalMatches:i,totalWins:a,totalLosses:o,mapWinRate:s,jobSummaries:l}})},se=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.losses++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};const ce=({usedJobs:e,matchRecords:t,onAddWin:n,onAddLoss:r,onRevertLast:a})=>{let o=oe(t),s=se(t,e),c=t.length,l=t.filter(e=>e.isWin).length,u=c-l,d=c>0?Math.round(l/c*100):0,[f,p]=(0,S.useState)(new Set),m=e=>{let t=new Set(f);t.has(e)?t.delete(e):t.add(e),p(t)};return(0,C.jsxs)(q,{children:[o.map(t=>(0,C.jsxs)(J,{children:[(0,C.jsxs)(Y,{onClick:()=>m(t.map),children:[(0,C.jsxs)(X,{children:[(0,C.jsx)(i,{name:f.has(t.map)?`minus`:`add`,size:16}),(0,C.jsx)(`span`,{children:t.mapName})]}),(0,C.jsxs)(Z,{children:[(0,C.jsxs)(`span`,{children:[t.totalMatches,`試合`]}),(0,C.jsxs)(`span`,{children:[t.totalWins,`勝 / `,t.totalLosses,`敗`]}),0<t.totalMatches?(0,C.jsxs)(Q,{winRate:t.mapWinRate,children:[`勝率`,t.mapWinRate,`%`]}):(0,C.jsx)(`span`,{children:`勝率--%`})]})]}),(0,C.jsx)(ae,{isOpen:f.has(t.map),children:(0,C.jsx)(K,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddLoss:r,onRevertLast:a,map:t.map})})]},t.map)),(0,C.jsxs)(J,{children:[(0,C.jsxs)(Y,{style:{cursor:`default`},children:[(0,C.jsx)(X,{children:(0,C.jsx)(`span`,{children:`全ステージ合計`})}),(0,C.jsxs)(Z,{children:[(0,C.jsxs)(`span`,{children:[c,`試合`]}),(0,C.jsxs)(`span`,{children:[l,`勝 / `,u,`敗`]}),0<c?(0,C.jsxs)(Q,{winRate:d,children:[`勝率`,d,`%`]}):(0,C.jsx)(`span`,{children:`勝率--%`})]})]}),(0,C.jsx)(K,{usedJobs:e,jobSummaries:s})]})]})};var le=t.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,ue=t.div`
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
`,de=t.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,fe=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,pe=t.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>M(e,t)};
`,me=t.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,he=t.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,ge=t.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,_e=t(a)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ve=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,ye=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,be=t(b)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`,$=t(a)`
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
`;const xe=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:a,onOpenJobRegistration:s,onAddWin:c,onAddLoss:u,onRevertLast:d,isEditing:f,editingName:p,onEditingNameChange:m,onSaveEdit:h,onCancelEdit:g})=>{let _=o(e.recentMatches),v=x(e.recentMatches),y=l(e.recentMatches),b=ee(e.recentMatches);return(0,C.jsxs)(le,{children:[(0,C.jsx)(ue,{onClick:f?void 0:n,style:{cursor:f?`default`:`pointer`},children:f?(0,C.jsxs)(ye,{children:[(0,C.jsx)(be,{value:p,inputSize:`sm`,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,C.jsxs)(ve,{children:[(0,C.jsx)($,{variant:`outline`,icon:(0,C.jsx)(i,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:`保存`}),(0,C.jsx)($,{variant:`outline`,icon:(0,C.jsx)(i,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:`キャンセル`})]})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(de,{children:e.character.name}),(0,C.jsxs)(fe,{onClick:e=>e.stopPropagation(),children:[(0,C.jsxs)(`span`,{children:[_,`試合`]}),(0,C.jsxs)(`span`,{children:[v,`勝 / `,y,`敗`]}),0<_?(0,C.jsxs)(pe,{winRate:b,children:[`勝率`,b,`%`]}):(0,C.jsx)(`span`,{children:`勝率--%`}),(0,C.jsxs)(ve,{children:[(0,C.jsx)($,{variant:`outline`,icon:(0,C.jsx)(i,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),s(e.character.uuid)},title:`ジョブの追加`}),(0,C.jsx)($,{variant:`outline`,icon:(0,C.jsx)(i,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:`キャラクター名の編集`}),(0,C.jsx)($,{variant:`outline`,icon:(0,C.jsx)(i,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid,e.character.name)},title:`キャラクターの削除`})]})]})]})}),(0,C.jsx)(me,{isOpen:t,children:(0,C.jsx)(he,{children:e.usedJobs.length===0?(0,C.jsx)(ge,{children:(0,C.jsx)(_e,{onClick:()=>s(e.character.uuid),children:`ジョブを登録してください`})}):(0,C.jsx)(ce,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:c?(t,n)=>c(e.character.uuid,t,n):void 0,onAddLoss:u?(t,n)=>u(e.character.uuid,t,n):void 0,onRevertLast:d?(t,n)=>d(e.character.uuid,t,n):void 0})})})]})},Se=({isOpen:e,character:t,onClose:n,onConfirm:r})=>(0,C.jsxs)(c,{isOpen:e,onClose:n,onConfirm:r,title:`キャラクターを削除`,confirmText:`削除する`,confirmType:`danger`,cancelText:`キャンセル`,children:[(0,C.jsxs)(`p`,{children:[`キャラクター「`,(0,C.jsx)(`strong`,{children:t?.name}),`」を削除しますか？`]}),(0,C.jsx)(`p`,{style:{color:`#dc2626`,marginTop:`12px`,fontSize:`0.875rem`},children:`⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。`})]});var Ce=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,we=t.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Te=t.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,Ee=()=>{te(`ホーム`);let e=n(),{histories:t,isLoading:r,getSortedHistories:o,addUsedJob:c}=v(),{createCharacter:l,updateCharacter:u,deleteCharacter:f,createMatchRecord:p,deleteMatchRecord:g,getCharacterStatsForSeason:ee,matchRecords:b,error:x,clearError:re}=s(),w=o()[0],T=w?ee(w.uuid):[],[E,D]=(0,S.useState)(()=>T.length>0?new Set([T[0].character.uuid]):new Set),[O,k]=(0,S.useState)(null),[A,j]=(0,S.useState)(``),[M,N]=(0,S.useState)(!1),[P,F]=(0,S.useState)(null),[I,L]=(0,S.useState)(!1),[R,z]=(0,S.useState)(null),B=()=>{e.navigate({to:`/new`})},V=e=>{try{l({name:e})}catch{}},H=e=>{let t=new Set(E);t.has(e)?t.delete(e):t.add(e),D(t)},U=(e,t)=>{k(e),j(t)},W=()=>{k(null),j(``)},G=()=>{if(!(!O||!A.trim()))try{u(O,A.trim())&&(k(null),j(``))}catch{}},K=(e,t)=>{F({uuid:e,name:t}),N(!0)},q=()=>{if(P)try{f(P.uuid),N(!1),F(null)}catch{}},J=()=>{N(!1),F(null)},Y=e=>{z(e),L(!0)},X=()=>{L(!1),z(null)},Z=e=>{if(!(!w||!R))try{c({characterUuid:R,seasonUuid:w.uuid,job:e}),L(!1),z(null)}catch{}},Q=(e,t,n)=>{if(w)try{p({characterUuid:e,seasonUuid:w.uuid,job:t,map:n,isWin:!0})}catch{}},ae=(e,t,n)=>{if(w)try{p({characterUuid:e,seasonUuid:w.uuid,job:t,map:n,isWin:!1})}catch{}},oe=(e,t,n)=>{if(w)try{let r=b.filter(r=>r.characterUuid===e&&r.seasonUuid===w.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);g(i.uuid)}catch{}};return r?(0,C.jsxs)(y,{children:[(0,C.jsx)(_,{children:`現シーズンの戦績`}),(0,C.jsx)(m,{children:`読み込み中...`})]}):t.length===0?(0,C.jsxs)(y,{children:[(0,C.jsx)(d,{children:(0,C.jsx)(_,{children:`現シーズンの戦績`})}),(0,C.jsx)(m,{children:`クリスタルコンフリクト戦績管理へようこそ！`}),(0,C.jsx)(ne,{onCreateSeason:B})]}):(0,C.jsxs)(y,{children:[(0,C.jsxs)(d,{children:[(0,C.jsxs)(_,{children:[w?.seasonName,` の戦績`]}),(0,C.jsxs)(a,{variant:`outline`,size:`sm`,onClick:B,children:[(0,C.jsx)(i,{name:`add`,size:16}),`新しいシーズンを作成`]})]}),(0,C.jsx)(m,{children:`戦績と統計情報を入力します。`}),x&&(0,C.jsxs)(we,{children:[(0,C.jsx)(`span`,{children:x}),(0,C.jsx)(Te,{onClick:re,children:`閉じる`})]}),(0,C.jsxs)(Ce,{children:[T.map(e=>(0,C.jsx)(xe,{stats:e,isOpen:E.has(e.character.uuid),onToggle:()=>H(e.character.uuid),onStartEdit:U,onDelete:K,onOpenJobRegistration:Y,onAddWin:Q,onAddLoss:ae,onRevertLast:oe,isEditing:O===e.character.uuid,editingName:A,onEditingNameChange:j,onSaveEdit:G,onCancelEdit:W},e.character.uuid)),(0,C.jsx)(ie,{isOpen:T.length===0,onCreateCharacter:V})]}),(0,C.jsx)(Se,{isOpen:M,character:P,onClose:J,onConfirm:q}),w&&R&&(0,C.jsx)(h,{isOpen:I,onClose:X,onRegister:Z,characterUuid:R,historyUuid:w.uuid})]})};export{Ee as component};