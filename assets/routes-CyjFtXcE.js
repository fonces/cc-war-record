import{C as e,E as t,F as n,M as r,N as i,R as a,T as o,_ as s,a as c,b as l,g as u,h as d,i as f,k as p,m,n as h,o as g,p as _,r as v,s as y,t as b,v as x,y as S}from"./index-CHSr5kDl.js";import"./stores-COx9ZclY.js";import{t as ee}from"./EmptyState-Bhvovydn.js";var C=a(n()),w=a(r()),T=i.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,E=i.div`
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
`,D=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,te=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,O=i.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,k=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,A=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,j=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,M=i.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const ne=({isOpen:n,onCreateCharacter:r})=>{let[i,a]=(0,C.useState)(``),[s,c]=(0,C.useState)(n);(0,C.useEffect)(()=>{c(n)},[n]);let l=()=>{c(!s)},u=()=>{i.trim()&&(r(i.trim()),a(``))};return(0,w.jsxs)(T,{children:[(0,w.jsxs)(E,{onClick:l,children:[(0,w.jsx)(D,{children:`キャラクター登録`}),(0,w.jsx)(te,{children:(0,w.jsx)(e,{name:s?`close`:`hamburger`,size:16})})]}),(0,w.jsx)(O,{isOpen:s,children:(0,w.jsx)(k,{children:(0,w.jsxs)(A,{children:[(0,w.jsxs)(j,{children:[(0,w.jsx)(M,{htmlFor:`character-name`,children:`キャラクター名`}),(0,w.jsx)(o,{id:`character-name`,value:i,onChange:e=>a(e.target.value),placeholder:`キャラクター名を入力`,onKeyPress:e=>e.key===`Enter`&&u()})]}),(0,w.jsx)(t,{onClick:u,disabled:!i.trim(),children:`キャラクターを登録`})]})})})]})};var N=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,P=i.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,F=i.h4`
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
`,I=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,L=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,R=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>e>=51?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600]};
`,z=i.div`
  overflow-x: auto;
`,B=i.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,V=i.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`,H=i.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,U=i.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  white-space: nowrap;
  box-sizing: border-box;

  &:first-child {
    padding-left: ${({theme:e})=>e.spacing[6]};
    text-align: left;
    width: 200px;
  }

  &:nth-child(2) {
    width: 80px;
  }

  &:nth-child(3) {
    width: 80px;
  }

  &:nth-child(4) {
    width: 80px;
  }

  &:nth-child(5) {
    width: 80px;
  }

  &:last-child {
    padding-right: ${({theme:e})=>e.spacing[6]};
    width: 140px;
  }
`,W=i.tbody``,G=i.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,K=i.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-align: center;
  box-sizing: border-box;

  &:first-child {
    padding-left: ${({theme:e})=>e.spacing[6]};
    text-align: left;
  }

  &:last-child {
    padding-right: ${({theme:e})=>e.spacing[6]};
  }
`,q=i(K)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,J=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>e>=51?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600]};
`,Y=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,X=i(t)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,Z=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`,re=e=>{let t=Object.values(d),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,a=n.filter(e=>e.isWin).length,o=i-a,s=i>0?Math.round(a/i*100):0,c=new Map;r.forEach(e=>{c.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),n.forEach(e=>{let t=c.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.losses++}),c.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let l=Array.from(c.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,mapName:u[t].name,totalMatches:i,totalWins:a,totalLosses:o,mapWinRate:s,jobSummaries:l}})},ie=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.losses++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};const Q=({usedJobs:t,matchRecords:n,onAddWin:r,onAddLoss:i,onRevertLast:a})=>{let o=re(n),s=ie(n,t),c=n.length,l=n.filter(e=>e.isWin).length,u=c-l,d=c>0?Math.round(l/c*100):0,[f,p]=(0,C.useState)(new Set),h=e=>{let t=new Set(f);t.has(e)?t.delete(e):t.add(e),p(t)};return(0,w.jsxs)(N,{children:[o.map(n=>(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{onClick:()=>h(n.map),children:[(0,w.jsxs)(I,{children:[(0,w.jsx)(e,{name:f.has(n.map)?`minus`:`add`,size:16}),(0,w.jsx)(`span`,{children:n.mapName})]}),(0,w.jsxs)(L,{children:[(0,w.jsxs)(`span`,{children:[n.totalMatches,`試合`]}),(0,w.jsxs)(`span`,{children:[n.totalWins,`勝`,n.totalLosses,`敗`]}),(0,w.jsxs)(R,{winRate:n.mapWinRate,children:[`勝率`,n.mapWinRate,`%`]})]})]}),(0,w.jsx)(B,{isOpen:f.has(n.map),children:(0,w.jsx)(z,{children:(0,w.jsxs)(V,{children:[(0,w.jsx)(H,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(U,{children:`ジョブ`}),(0,w.jsx)(U,{children:`試合数`}),(0,w.jsx)(U,{children:`勝利`}),(0,w.jsx)(U,{children:`敗北`}),(0,w.jsx)(U,{children:`勝率`}),(r||i||a)&&(0,w.jsx)(U,{children:`操作`})]})}),(0,w.jsx)(W,{children:t.length===0?(0,w.jsx)(G,{children:(0,w.jsx)(K,{colSpan:r||i||a?6:5,children:(0,w.jsx)(Z,{children:`ジョブを登録してください`})})}):t.map(t=>{let o=n.jobSummaries.find(e=>e.job===t)||{job:t,totalMatches:0,wins:0,losses:0,winRate:0};return(0,w.jsxs)(G,{children:[(0,w.jsx)(q,{children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(m,{job:o.job,size:20}),o.job]})}),(0,w.jsx)(K,{children:o.totalMatches}),(0,w.jsx)(K,{children:o.wins}),(0,w.jsx)(K,{children:o.losses}),(0,w.jsx)(K,{children:(0,w.jsxs)(J,{winRate:o.winRate,children:[o.winRate,`%`]})}),(r||i||a)&&(0,w.jsx)(K,{children:(0,w.jsxs)(Y,{children:[r&&(0,w.jsx)(X,{variant:`win`,onClick:()=>r(o.job,n.map),children:`W`}),i&&(0,w.jsx)(X,{variant:`secondary`,onClick:()=>i(o.job,n.map),children:`L`}),o.totalMatches>0&&a?(0,w.jsx)(X,{variant:`outline`,icon:(0,w.jsx)(e,{name:`revert`,size:16}),onClick:()=>a(o.job,n.map)}):(r||i)&&(0,w.jsx)(`div`,{style:{width:`32px`}})]})})]},t)})})]})})})]},n.map)),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{style:{cursor:`default`},children:[(0,w.jsx)(I,{children:(0,w.jsx)(`span`,{children:`全ステージ合計`})}),(0,w.jsxs)(L,{children:[(0,w.jsxs)(`span`,{children:[c,`試合`]}),(0,w.jsxs)(`span`,{children:[l,`勝`,u,`敗`]}),(0,w.jsxs)(R,{winRate:d,children:[`勝率`,d,`%`]})]})]}),(0,w.jsx)(z,{children:(0,w.jsxs)(V,{children:[(0,w.jsx)(H,{children:(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(U,{children:`ジョブ`}),(0,w.jsx)(U,{children:`試合数`}),(0,w.jsx)(U,{children:`勝利`}),(0,w.jsx)(U,{children:`敗北`}),(0,w.jsx)(U,{children:`勝率`}),(r||i||a)&&(0,w.jsx)(U,{})]})}),(0,w.jsx)(W,{children:t.length===0?(0,w.jsx)(G,{children:(0,w.jsx)(K,{colSpan:r||i||a?6:5,children:(0,w.jsx)(Z,{children:`ジョブを登録してください`})})}):t.map(e=>{let t=s.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,losses:0,winRate:0};return(0,w.jsxs)(G,{children:[(0,w.jsx)(q,{children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(m,{job:t.job,size:20}),t.job]})}),(0,w.jsx)(K,{children:t.totalMatches}),(0,w.jsx)(K,{children:t.wins}),(0,w.jsx)(K,{children:t.losses}),(0,w.jsx)(K,{children:(0,w.jsxs)(J,{winRate:t.winRate,children:[t.winRate,`%`]})}),(r||i||a)&&(0,w.jsx)(K,{})]},e)})})]})})]})]})};var ae=i.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,oe=i.div`
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
`,se=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,ce=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,le=i.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>e>=60?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600]};
`,ue=i.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,de=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,fe=i.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.colors.textSecondary};
`,pe=i(t)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,me=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,he=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  flex: 1;
`,ge=i(o)`
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
`;const _e=({stats:t,isOpen:n,onToggle:r,onStartEdit:i,onDelete:a,onOpenJobRegistration:o,onAddWin:c,onAddLoss:u,onRevertLast:d,isEditing:f,editingName:p,onEditingNameChange:m,onSaveEdit:h,onCancelEdit:g})=>{let _=x(t.recentMatches),v=l(t.recentMatches),y=s(t.recentMatches),b=S(t.recentMatches);return(0,w.jsxs)(ae,{children:[(0,w.jsx)(oe,{onClick:f?void 0:r,style:{cursor:f?`default`:`pointer`},children:f?(0,w.jsxs)(he,{children:[(0,w.jsx)(ge,{value:p,inputSize:`sm`,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h(),e.key===`Escape`&&g()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,w.jsxs)(me,{children:[(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(e,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),h()},title:`保存`}),(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(e,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),g()},title:`キャンセル`})]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(se,{children:t.character.name}),(0,w.jsxs)(ce,{onClick:e=>e.stopPropagation(),children:[(0,w.jsxs)(`span`,{children:[_,`試合`]}),(0,w.jsxs)(`span`,{children:[v,`勝`,y,`敗`]}),(0,w.jsxs)(le,{winRate:b,children:[`勝率`,b,`%`]}),(0,w.jsxs)(me,{children:[(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(e,{name:`add`,size:16}),onClick:e=>{e.stopPropagation(),o(t.character.uuid)},title:`ジョブの追加`}),(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(e,{name:`edit`,size:16}),onClick:e=>{e.stopPropagation(),i(t.character.uuid,t.character.name)},title:`キャラクター名の編集`}),(0,w.jsx)($,{variant:`outline`,icon:(0,w.jsx)(e,{name:`delete`,size:16}),onClick:e=>{e.stopPropagation(),a(t.character.uuid,t.character.name)},title:`キャラクターの削除`})]})]})]})}),(0,w.jsx)(ue,{isOpen:n,children:(0,w.jsx)(de,{children:t.usedJobs.length===0?(0,w.jsx)(fe,{children:(0,w.jsx)(pe,{onClick:()=>o(t.character.uuid),children:`ジョブを登録してください`})}):(0,w.jsx)(Q,{usedJobs:t.usedJobs,matchRecords:t.recentMatches,onAddWin:c?(e,n)=>c(t.character.uuid,e,n):void 0,onAddLoss:u?(e,n)=>u(t.character.uuid,e,n):void 0,onRevertLast:d?(e,n)=>d(t.character.uuid,e,n):void 0})})})]})},ve=({isOpen:e,character:t,onClose:n,onConfirm:r})=>(0,w.jsxs)(_,{isOpen:e,onClose:n,onConfirm:r,title:`キャラクターを削除`,confirmText:`削除する`,confirmType:`danger`,cancelText:`キャンセル`,children:[(0,w.jsxs)(`p`,{children:[`キャラクター「`,(0,w.jsx)(`strong`,{children:t?.name}),`」を削除しますか？`]}),(0,w.jsx)(`p`,{style:{color:`#dc2626`,marginTop:`12px`,fontSize:`0.875rem`},children:`⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。`})]});var ye=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,be=i.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,xe=i.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,Se=()=>{let e=p(),{histories:n,isLoading:r,getSortedHistories:i,addUsedJob:a}=g(),{createCharacter:o,updateCharacter:s,deleteCharacter:l,createMatchRecord:u,deleteMatchRecord:d,getCharacterStatsForSeason:m,matchRecords:_,error:x,clearError:S}=y(),T=i()[0],E=T?m(T.uuid):[],[D,te]=(0,C.useState)(()=>E.length>0?new Set([E[0].character.uuid]):new Set),[O,k]=(0,C.useState)(null),[A,j]=(0,C.useState)(``),[M,N]=(0,C.useState)(!1),[P,F]=(0,C.useState)(null),[I,L]=(0,C.useState)(!1),[R,z]=(0,C.useState)(null),B=()=>{e.navigate({to:`/new`})},V=e=>{try{o({name:e})}catch{}},H=e=>{let t=new Set(D);t.has(e)?t.delete(e):t.add(e),te(t)},U=(e,t)=>{k(e),j(t)},W=()=>{k(null),j(``)},G=()=>{if(!(!O||!A.trim()))try{s(O,A.trim())&&(k(null),j(``))}catch{}},K=(e,t)=>{F({uuid:e,name:t}),N(!0)},q=()=>{if(P)try{l(P.uuid),N(!1),F(null)}catch{}},J=()=>{N(!1),F(null)},Y=e=>{z(e),L(!0)},X=()=>{L(!1),z(null)},Z=e=>{if(!(!T||!R))try{a({characterUuid:R,seasonUuid:T.uuid,job:e}),L(!1),z(null)}catch{}},re=(e,t,n)=>{if(T)try{u({characterUuid:e,seasonUuid:T.uuid,job:t,map:n,isWin:!0})}catch{}},ie=(e,t,n)=>{if(T)try{u({characterUuid:e,seasonUuid:T.uuid,job:t,map:n,isWin:!1})}catch{}},Q=(e,t,n)=>{if(T)try{let r=_.filter(r=>r.characterUuid===e&&r.seasonUuid===T.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);d(i.uuid)}catch{}};return r?(0,w.jsxs)(b,{children:[(0,w.jsx)(v,{children:`現シーズンの戦績`}),(0,w.jsx)(h,{children:`読み込み中...`})]}):n.length===0?(0,w.jsxs)(b,{children:[(0,w.jsx)(f,{children:(0,w.jsx)(v,{children:`現シーズンの戦績`})}),(0,w.jsx)(h,{children:`クリスタルコンフリクト戦績管理へようこそ！`}),(0,w.jsx)(ee,{onCreateSeason:B})]}):(0,w.jsxs)(b,{children:[(0,w.jsxs)(f,{children:[(0,w.jsxs)(v,{children:[T?.seasonName,` の戦績`]}),(0,w.jsx)(t,{variant:`outline`,size:`sm`,onClick:B,children:`新しいシーズンを作成`})]}),(0,w.jsx)(h,{children:`戦績と統計情報を入力します。`}),x&&(0,w.jsxs)(be,{children:[(0,w.jsx)(`span`,{children:x}),(0,w.jsx)(xe,{onClick:S,children:`閉じる`})]}),(0,w.jsxs)(ye,{children:[E.map(e=>(0,w.jsx)(_e,{stats:e,isOpen:D.has(e.character.uuid),onToggle:()=>H(e.character.uuid),onStartEdit:U,onDelete:K,onOpenJobRegistration:Y,onAddWin:re,onAddLoss:ie,onRevertLast:Q,isEditing:O===e.character.uuid,editingName:A,onEditingNameChange:j,onSaveEdit:G,onCancelEdit:W},e.character.uuid)),(0,w.jsx)(ne,{isOpen:E.length===0,onCreateCharacter:V})]}),(0,w.jsx)(ve,{isOpen:M,character:P,onClose:J,onConfirm:q}),T&&R&&(0,w.jsx)(c,{isOpen:I,onClose:X,onRegister:Z,characterUuid:R,historyUuid:T.uuid})]})};export{Se as component};