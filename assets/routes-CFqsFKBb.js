import{L as e,M as t,O as n,P as r,S as i,T as a,_ as o,c as s,f as c,g as l,h as u,i as d,j as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,v as b,w as x,y as S}from"./index-D_meSxiB.js";import"./stores-COx9ZclY.js";import{t as ee}from"./EmptyState-Cm1St4t6.js";var C=e(r()),w=e(f()),T=t.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,E=t.div`
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
`,D=t.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,O=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,te=t.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,k=t.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,A=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,j=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,M=t.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const ne=({isOpen:e,onCreateCharacter:t})=>{let[n,r]=(0,C.useState)(``),[o,s]=(0,C.useState)(e);(0,C.useEffect)(()=>{s(e)},[e]);let c=()=>{s(!o)},l=()=>{n.trim()&&(t(n.trim()),r(``))};return(0,w.jsxs)(T,{children:[(0,w.jsxs)(E,{onClick:c,children:[(0,w.jsx)(D,{children:`キャラクター登録`}),(0,w.jsx)(O,{children:(0,w.jsx)(i,{name:o?`close`:`hamburger`,size:16})})]}),(0,w.jsx)(te,{isOpen:o,children:(0,w.jsx)(k,{children:(0,w.jsxs)(A,{children:[(0,w.jsxs)(j,{children:[(0,w.jsx)(M,{htmlFor:`character-name`,children:`キャラクター名`}),(0,w.jsx)(x,{id:`character-name`,value:n,onChange:e=>r(e.target.value),placeholder:`キャラクター名を入力`,onKeyDown:e=>e.key===`Enter`&&l()})]}),(0,w.jsx)(a,{onClick:l,disabled:!n.trim(),children:`キャラクターを登録`})]})})})]})},N=(e,t)=>e>=51?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600];var P=t.div`
  overflow-x: auto;
`,F=t.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  table-layout: fixed;
`,I=t.thead`
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
`,R=t.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;
  ${L}
`,z=t.tbody``,B=t.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,V=t.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;
  ${L}
`,H=t(V)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,U=t.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>N(e,t)};
`,re=t.div`
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
`;const K=({usedJobs:e,jobSummaries:t,onAddWin:n,onAddLoss:r,onRevertLast:a,map:o})=>{let s=!!(n||r||a);return(0,w.jsx)(P,{children:(0,w.jsxs)(F,{children:[(0,w.jsx)(I,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(R,{children:`ジョブ`}),(0,w.jsx)(R,{children:`試合数`}),(0,w.jsx)(R,{children:`勝利`}),(0,w.jsx)(R,{children:`敗北`}),(0,w.jsx)(R,{children:`勝率`}),(0,w.jsx)(R,{children:s&&o?`操作`:``})]})}),(0,w.jsx)(z,{children:e.length===0?(0,w.jsx)(B,{children:(0,w.jsx)(V,{colSpan:s?6:5,children:(0,w.jsx)(G,{children:`ジョブを登録してください`})})}):e.map(e=>{let s=t.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,losses:0,winRate:0};return(0,w.jsxs)(B,{children:[(0,w.jsx)(H,{children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(g,{job:s.job,size:20}),s.job]})}),(0,w.jsx)(V,{children:s.totalMatches}),(0,w.jsx)(V,{children:s.wins}),(0,w.jsx)(V,{children:s.losses}),(0,w.jsx)(V,{children:0<s.totalMatches?(0,w.jsxs)(U,{winRate:s.winRate,children:[s.winRate,`%`]}):(0,w.jsx)(`span`,{children:`--%`})}),(0,w.jsx)(V,{children:o?(0,w.jsxs)(re,{children:[n&&(0,w.jsx)(W,{variant:`win`,onClick:()=>n(s.job,o),children:`W`}),r&&(0,w.jsx)(W,{variant:`secondary`,onClick:()=>r(s.job,o),children:`L`}),s.totalMatches>0&&a?(0,w.jsx)(W,{variant:`outline`,icon:(0,w.jsx)(i,{name:`revert`,size:16}),onClick:()=>a(s.job,o)}):(n||r)&&(0,w.jsx)(`div`,{style:{width:`32px`}})]}):null})]},e)})})]})})};var q=t.div`
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
  color: ${({winRate:e,theme:t})=>N(e,t)};
`,ie=t.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,ae=e=>{let t=Object.values(p),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.losses++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,mapName:u[t].name,totalMatches:i,totalWins:a,totalLosses:o,mapWinRate:s,jobSummaries:l}})},oe=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.losses++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};const se=({usedJobs:e,matchRecords:t,onAddWin:n,onAddLoss:r,onRevertLast:a})=>{let o=ae(t),s=oe(t,e),c=t.length,l=t.filter(e=>e.isWin).length,u=c-l,d=c>0?Math.round(l/c*100):0,[f,p]=(0,C.useState)(new Set),m=e=>{let t=new Set(f);t.has(e)?t.delete(e):t.add(e),p(t)};return(0,w.jsxs)(q,{children:[o.map(t=>(0,w.jsxs)(J,{children:[(0,w.jsxs)(Y,{onClick:()=>m(t.map),children:[(0,w.jsxs)(X,{children:[(0,w.jsx)(i,{name:f.has(t.map)?`minus`:`add`,size:16}),(0,w.jsx)(`span`,{children:t.mapName})]}),(0,w.jsxs)(Z,{children:[(0,w.jsxs)(`span`,{children:[t.totalMatches,`試合`]}),(0,w.jsxs)(`span`,{children:[t.totalWins,`勝 / `,t.totalLosses,`敗`]}),0<t.totalMatches?(0,w.jsxs)(Q,{winRate:t.mapWinRate,children:[`勝率`,t.mapWinRate,`%`]}):(0,w.jsx)(`span`,{children:`勝率--%`})]})]}),(0,w.jsx)(ie,{isOpen:f.has(t.map),children:(0,w.jsx)(K,{usedJobs:e,jobSummaries:t.jobSummaries,onAddWin:n,onAddLoss:r,onRevertLast:a,map:t.map})})]},t.map)),(0,w.jsxs)(J,{children:[(0,w.jsxs)(Y,{style:{cursor:`default`},children:[(0,w.jsx)(X,{children:(0,w.jsx)(`span`,{children:`全ステージ合計`})}),(0,w.jsxs)(Z,{children:[(0,w.jsxs)(`span`,{children:[c,`試合`]}),(0,w.jsxs)(`span`,{children:[l,`勝 / `,u,`敗`]}),0<c?(0,w.jsxs)(Q,{winRate:d,children:[`勝率`,d,`%`]}):(0,w.jsx)(`span`,{children:`勝率--%`})]})]}),(0,w.jsx)(K,{usedJobs:e,jobSummaries:s})]})]})};var ce=t.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,le=t.div`
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
`,ue=t.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,de=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,fe=t.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>N(e,t)};
`,pe=t.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,me=t.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,he=t.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,ge=t(a)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,_e=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,ve=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,ye=t(x)`
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
`;const be=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:a,onOpenJobRegistration:s,onAddWin:c,onAddLoss:u,onRevertLast:d,isEditing:f,editingName:p,onEditingNameChange:m,onSaveEdit:h,onCancelEdit:g})=>{let _=o(e.recentMatches),v=S(e.recentMatches),y=l(e.recentMatches),x=b(e.recentMatches);return(0,w.jsxs)(ce,{children:[(0,w.jsx)(le,{onClick:f?void 0:n,style:{cursor:f?`default`:`pointer`},children:f?(0,w.jsxs)(ve,{children:[(0,w.jsx)(ye,{value:p,inputSize:`sm`,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,w.jsxs)(_e,{children:[(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(i,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:`保存`}),(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(i,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:`キャンセル`})]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ue,{children:e.character.name}),(0,w.jsxs)(de,{onClick:e=>e.stopPropagation(),children:[(0,w.jsxs)(`span`,{children:[_,`試合`]}),(0,w.jsxs)(`span`,{children:[v,`勝 / `,y,`敗`]}),0<_?(0,w.jsxs)(fe,{winRate:x,children:[`勝率`,x,`%`]}):(0,w.jsx)(`span`,{children:`勝率--%`}),(0,w.jsxs)(_e,{children:[(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(i,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),s(e.character.uuid)},title:`ジョブの追加`}),(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(i,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:`キャラクター名の編集`}),(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(i,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid,e.character.name)},title:`キャラクターの削除`})]})]})]})}),(0,w.jsx)(pe,{isOpen:t,children:(0,w.jsx)(me,{children:e.usedJobs.length===0?(0,w.jsx)(he,{children:(0,w.jsx)(ge,{onClick:()=>s(e.character.uuid),children:`ジョブを登録してください`})}):(0,w.jsx)(se,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:c?(t,n)=>c(e.character.uuid,t,n):void 0,onAddLoss:u?(t,n)=>u(e.character.uuid,t,n):void 0,onRevertLast:d?(t,n)=>d(e.character.uuid,t,n):void 0})})})]})},xe=({isOpen:e,character:t,onClose:n,onConfirm:r})=>(0,w.jsxs)(c,{isOpen:e,onClose:n,onConfirm:r,title:`キャラクターを削除`,confirmText:`削除する`,confirmType:`danger`,cancelText:`キャンセル`,children:[(0,w.jsxs)(`p`,{children:[`キャラクター「`,(0,w.jsx)(`strong`,{children:t?.name}),`」を削除しますか？`]}),(0,w.jsx)(`p`,{style:{color:`#dc2626`,marginTop:`12px`,fontSize:`0.875rem`},children:`⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。`})]});var Se=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,Ce=t.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,we=t.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,Te=()=>{let e=n(),{histories:t,isLoading:r,getSortedHistories:o,addUsedJob:c}=v(),{createCharacter:l,updateCharacter:u,deleteCharacter:f,createMatchRecord:p,deleteMatchRecord:g,getCharacterStatsForSeason:b,matchRecords:x,error:S,clearError:T}=s(),E=o()[0],D=E?b(E.uuid):[],[O,te]=(0,C.useState)(()=>D.length>0?new Set([D[0].character.uuid]):new Set),[k,A]=(0,C.useState)(null),[j,M]=(0,C.useState)(``),[N,P]=(0,C.useState)(!1),[F,I]=(0,C.useState)(null),[L,R]=(0,C.useState)(!1),[z,B]=(0,C.useState)(null),V=()=>{e.navigate({to:`/new`})},H=e=>{try{l({name:e})}catch{}},U=e=>{let t=new Set(O);t.has(e)?t.delete(e):t.add(e),te(t)},re=(e,t)=>{A(e),M(t)},W=()=>{A(null),M(``)},G=()=>{if(!(!k||!j.trim()))try{u(k,j.trim())&&(A(null),M(``))}catch{}},K=(e,t)=>{I({uuid:e,name:t}),P(!0)},q=()=>{if(F)try{f(F.uuid),P(!1),I(null)}catch{}},J=()=>{P(!1),I(null)},Y=e=>{B(e),R(!0)},X=()=>{R(!1),B(null)},Z=e=>{if(!(!E||!z))try{c({characterUuid:z,seasonUuid:E.uuid,job:e}),R(!1),B(null)}catch{}},Q=(e,t,n)=>{if(E)try{p({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!0})}catch{}},ie=(e,t,n)=>{if(E)try{p({characterUuid:e,seasonUuid:E.uuid,job:t,map:n,isWin:!1})}catch{}},ae=(e,t,n)=>{if(E)try{let r=x.filter(r=>r.characterUuid===e&&r.seasonUuid===E.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);g(i.uuid)}catch{}};return r?(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:`現シーズンの戦績`}),(0,w.jsx)(m,{children:`読み込み中...`})]}):t.length===0?(0,w.jsxs)(y,{children:[(0,w.jsx)(d,{children:(0,w.jsx)(_,{children:`現シーズンの戦績`})}),(0,w.jsx)(m,{children:`クリスタルコンフリクト戦績管理へようこそ！`}),(0,w.jsx)(ee,{onCreateSeason:V})]}):(0,w.jsxs)(y,{children:[(0,w.jsxs)(d,{children:[(0,w.jsxs)(_,{children:[E?.seasonName,` の戦績`]}),(0,w.jsxs)(a,{variant:`outline`,size:`sm`,onClick:V,children:[(0,w.jsx)(i,{name:`add`,size:16}),`新しいシーズンを作成`]})]}),(0,w.jsx)(m,{children:`戦績と統計情報を入力します。`}),S&&(0,w.jsxs)(Ce,{children:[(0,w.jsx)(`span`,{children:S}),(0,w.jsx)(we,{onClick:T,children:`閉じる`})]}),(0,w.jsxs)(Se,{children:[D.map(e=>(0,w.jsx)(be,{stats:e,isOpen:O.has(e.character.uuid),onToggle:()=>U(e.character.uuid),onStartEdit:re,onDelete:K,onOpenJobRegistration:Y,onAddWin:Q,onAddLoss:ie,onRevertLast:ae,isEditing:k===e.character.uuid,editingName:j,onEditingNameChange:M,onSaveEdit:G,onCancelEdit:W},e.character.uuid)),(0,w.jsx)(ne,{isOpen:D.length===0,onCreateCharacter:H})]}),(0,w.jsx)(xe,{isOpen:N,character:F,onClose:J,onConfirm:q}),E&&z&&(0,w.jsx)(h,{isOpen:L,onClose:X,onRegister:Z,characterUuid:z,historyUuid:E.uuid})]})};export{Te as component};