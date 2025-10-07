import{C as e,E as t,_ as n,a as r,b as i,c as a,d as o,f as s,h as c,k as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g,v as _,w as v}from"./index-XOscuVPe.js";import"./stores-COx9ZclY.js";var y=l(t()),b=l(e()),x=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,S=v.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,C=v.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,w=v.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`,T=v(_)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
`;const ee=({onCreateSeason:e})=>(0,b.jsxs)(x,{children:[(0,b.jsx)(S,{children:(0,b.jsx)(c,{name:`home`,size:32})}),(0,b.jsx)(C,{children:`まだシーズンが作成されていません`}),(0,b.jsx)(w,{children:`戦績を記録するために、まず最初のシーズンを作成してください。 シーズン名を設定して、勝敗の記録を開始できます。`}),(0,b.jsxs)(T,{onClick:e,children:[(0,b.jsx)(c,{name:`home`,size:20}),`シーズンを作成する`]})]});var E=v.div`
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,D=v.div`
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
`,O=v.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
`,te=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,k=v.div`
  max-height: ${({isOpen:e})=>e?`1000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,A=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,j=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;
`,ne=v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`,M=v.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`;const re=({isOpen:e,onCreateCharacter:t})=>{let[r,i]=(0,y.useState)(``),[a,o]=(0,y.useState)(e);(0,y.useEffect)(()=>{o(e)},[e]);let s=()=>{o(!a)},l=()=>{r.trim()&&(t(r.trim()),i(``))};return(0,b.jsxs)(E,{children:[(0,b.jsxs)(D,{onClick:s,children:[(0,b.jsx)(O,{children:`キャラクター登録`}),(0,b.jsx)(te,{children:(0,b.jsx)(c,{name:a?`close`:`hamburger`,size:16})})]}),(0,b.jsx)(k,{isOpen:a,children:(0,b.jsx)(A,{children:(0,b.jsxs)(j,{children:[(0,b.jsxs)(ne,{children:[(0,b.jsx)(M,{htmlFor:`character-name`,children:`キャラクター名`}),(0,b.jsx)(n,{id:`character-name`,value:r,onChange:e=>i(e.target.value),placeholder:`キャラクター名を入力`,onKeyPress:e=>e.key===`Enter`&&l()})]}),(0,b.jsx)(_,{onClick:l,disabled:!r.trim(),children:`キャラクターを登録`})]})})})]})};var N=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
`,P=v.div`
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
`,F=v.h4`
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
`,I=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,L=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textSecondary};
`,R=v.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>e>=60?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600]};
`,z=v.div`
  overflow-x: auto;
`,B=v.div`
  max-height: ${({isOpen:e})=>e?`10000px`:`0`};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`,V=v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`,H=v.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,U=v.th`
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
`,W=v.tbody``,G=v.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
  transition: background-color 0.15s;
  height: 58px;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }
`,K=v.td`
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
`,q=v(K)`
  & > div {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,J=v.span`
  font-weight: 600;
  color: ${({winRate:e,theme:t})=>e>=60?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600]};
`,ie=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: flex-end;
`,Y=v(_)`
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`,ae=v.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
`,oe=e=>{let t=Object.values(m),n=new Set;e.forEach(e=>{n.add(e.job)});let r=Array.from(n);return t.map(t=>{let n=e.filter(e=>e.map===t),i=n.length,o=n.filter(e=>e.isWin).length,s=i-o,c=i>0?Math.round(o/i*100):0,l=new Map;r.forEach(e=>{l.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),n.forEach(e=>{let t=l.get(e.job);t.totalMatches++,e.isWin?t.wins++:t.losses++}),l.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0});let u=Array.from(l.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches);return{map:t,mapName:a[t].name,totalMatches:i,totalWins:o,totalLosses:s,mapWinRate:c,jobSummaries:u}})},se=(e,t)=>{let n=new Map;return t.forEach(e=>{n.set(e,{job:e,totalMatches:0,wins:0,losses:0,winRate:0})}),e.forEach(e=>{let t=n.get(e.job);t&&(t.totalMatches++,e.isWin?t.wins++:t.losses++)}),n.forEach(e=>{e.winRate=e.totalMatches>0?Math.round(e.wins/e.totalMatches*100):0}),Array.from(n.values()).sort((e,t)=>t.totalMatches===e.totalMatches?e.job.localeCompare(t.job):t.totalMatches-e.totalMatches)};const ce=({usedJobs:e,matchRecords:t,onAddWin:n,onAddLoss:r,onRevertLast:i})=>{let a=oe(t),o=se(t,e),s=t.length,l=t.filter(e=>e.isWin).length,u=s-l,d=s>0?Math.round(l/s*100):0,[p,m]=(0,y.useState)(new Set),h=e=>{let t=new Set(p);t.has(e)?t.delete(e):t.add(e),m(t)};return(0,b.jsxs)(N,{children:[a.map(t=>(0,b.jsxs)(P,{children:[(0,b.jsxs)(F,{onClick:()=>h(t.map),children:[(0,b.jsxs)(I,{children:[(0,b.jsx)(c,{name:p.has(t.map)?`minus`:`add`,size:16}),(0,b.jsx)(`span`,{children:t.mapName})]}),(0,b.jsxs)(L,{children:[(0,b.jsxs)(`span`,{children:[t.totalMatches,`試合`]}),(0,b.jsxs)(`span`,{children:[t.totalWins,`勝`,t.totalLosses,`敗`]}),(0,b.jsxs)(R,{winRate:t.mapWinRate,children:[`勝率`,t.mapWinRate,`%`]})]})]}),(0,b.jsx)(B,{isOpen:p.has(t.map),children:(0,b.jsx)(z,{children:(0,b.jsxs)(V,{children:[(0,b.jsx)(H,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(U,{children:`ジョブ`}),(0,b.jsx)(U,{children:`試合数`}),(0,b.jsx)(U,{children:`勝利`}),(0,b.jsx)(U,{children:`敗北`}),(0,b.jsx)(U,{children:`勝率`}),(n||r||i)&&(0,b.jsx)(U,{})]})}),(0,b.jsx)(W,{children:e.length===0?(0,b.jsx)(G,{children:(0,b.jsx)(K,{colSpan:n||r||i?6:5,children:(0,b.jsx)(ae,{children:`ジョブを登録してください`})})}):e.map(e=>{let a=t.jobSummaries.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,losses:0,winRate:0};return(0,b.jsxs)(G,{children:[(0,b.jsx)(q,{children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(f,{job:a.job,size:20}),a.job]})}),(0,b.jsx)(K,{children:a.totalMatches}),(0,b.jsx)(K,{children:a.wins}),(0,b.jsx)(K,{children:a.losses}),(0,b.jsx)(K,{children:(0,b.jsxs)(J,{winRate:a.winRate,children:[a.winRate,`%`]})}),(n||r||i)&&(0,b.jsx)(K,{children:(0,b.jsxs)(ie,{children:[n&&(0,b.jsx)(Y,{variant:`win`,onClick:()=>n(a.job,t.map),children:`W`}),r&&(0,b.jsx)(Y,{variant:`secondary`,onClick:()=>r(a.job,t.map),children:`L`}),a.totalMatches>0&&i?(0,b.jsx)(Y,{variant:`outline`,icon:(0,b.jsx)(c,{name:`revert`,size:16}),onClick:()=>i(a.job,t.map)}):(n||r)&&(0,b.jsx)(`div`,{style:{width:`32px`}})]})})]},e)})})]})})})]},t.map)),(0,b.jsxs)(P,{children:[(0,b.jsxs)(F,{style:{cursor:`default`},children:[(0,b.jsx)(I,{children:(0,b.jsx)(`span`,{children:`全ステージ合計`})}),(0,b.jsxs)(L,{children:[(0,b.jsxs)(`span`,{children:[s,`試合`]}),(0,b.jsxs)(`span`,{children:[l,`勝`,u,`敗`]}),(0,b.jsxs)(R,{winRate:d,children:[`勝率`,d,`%`]})]})]}),(0,b.jsx)(z,{children:(0,b.jsxs)(V,{children:[(0,b.jsx)(H,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(U,{children:`ジョブ`}),(0,b.jsx)(U,{children:`試合数`}),(0,b.jsx)(U,{children:`勝利`}),(0,b.jsx)(U,{children:`敗北`}),(0,b.jsx)(U,{children:`勝率`}),(n||r||i)&&(0,b.jsx)(U,{})]})}),(0,b.jsx)(W,{children:e.length===0?(0,b.jsx)(G,{children:(0,b.jsx)(K,{colSpan:n||r||i?6:5,children:(0,b.jsx)(ae,{children:`ジョブを登録してください`})})}):e.map(e=>{let t=o.find(t=>t.job===e)||{job:e,totalMatches:0,wins:0,losses:0,winRate:0};return(0,b.jsxs)(G,{children:[(0,b.jsx)(q,{children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(f,{job:t.job,size:20}),t.job]})}),(0,b.jsx)(K,{children:t.totalMatches}),(0,b.jsx)(K,{children:t.wins}),(0,b.jsx)(K,{children:t.losses}),(0,b.jsx)(K,{children:(0,b.jsxs)(J,{winRate:t.winRate,children:[t.winRate,`%`]})}),(n||r||i)&&(0,b.jsx)(K,{})]},e)})})]})})]})]})};var le=v.div`
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
  color: ${({winRate:e,theme:t})=>e>=60?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600]};
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
`,_e=v(_)`
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
`,X=v(_)`
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
`;const xe=({stats:e,isOpen:t,onToggle:n,onStartEdit:r,onDelete:i,onOpenJobRegistration:a,onAddWin:l,onAddLoss:d,onRevertLast:f,isEditing:p,editingName:m,onEditingNameChange:h,onSaveEdit:_,onCancelEdit:v})=>{let y=g(e.recentMatches),x=s(e.recentMatches),S=u(e.recentMatches),C=o(e.recentMatches);return(0,b.jsxs)(le,{children:[(0,b.jsx)(ue,{onClick:p?void 0:n,style:{cursor:p?`default`:`pointer`},children:p?(0,b.jsxs)(ye,{children:[(0,b.jsx)(be,{value:m,onChange:e=>h(e.target.value),onKeyDown:e=>{e.key===`Enter`&&_(),e.key===`Escape`&&v()},onClick:e=>e.stopPropagation(),autoFocus:!0}),(0,b.jsxs)(ve,{children:[(0,b.jsx)(X,{variant:`outline`,icon:(0,b.jsx)(c,{name:`accept`,size:16}),onClick:e=>{e.stopPropagation(),_()},title:`保存`}),(0,b.jsx)(X,{variant:`outline`,icon:(0,b.jsx)(c,{name:`close`,size:16}),onClick:e=>{e.stopPropagation(),v()},title:`キャンセル`})]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(de,{children:e.character.name}),(0,b.jsxs)(fe,{onClick:e=>e.stopPropagation(),children:[(0,b.jsxs)(`span`,{children:[y,`試合`]}),(0,b.jsxs)(`span`,{children:[x,`勝`,S,`敗`]}),(0,b.jsxs)(pe,{winRate:C,children:[`勝率`,C,`%`]}),(0,b.jsxs)(ve,{children:[(0,b.jsx)(X,{variant:`outline`,icon:(0,b.jsx)(c,{name:`add`,size:16}),onClick:t=>{t.stopPropagation(),a(e.character.uuid)},title:`ジョブの追加`}),(0,b.jsx)(X,{variant:`outline`,icon:(0,b.jsx)(c,{name:`edit`,size:16}),onClick:t=>{t.stopPropagation(),r(e.character.uuid,e.character.name)},title:`キャラクター名の編集`}),(0,b.jsx)(X,{variant:`outline`,icon:(0,b.jsx)(c,{name:`delete`,size:16}),onClick:t=>{t.stopPropagation(),i(e.character.uuid,e.character.name)},title:`キャラクターの削除`})]})]})]})}),(0,b.jsx)(me,{isOpen:t,children:(0,b.jsx)(he,{children:e.usedJobs.length===0?(0,b.jsx)(ge,{children:(0,b.jsx)(_e,{onClick:()=>a(e.character.uuid),children:`ジョブを登録してください`})}):(0,b.jsx)(ce,{usedJobs:e.usedJobs,matchRecords:e.recentMatches,onAddWin:l?(t,n)=>l(e.character.uuid,t,n):void 0,onAddLoss:d?(t,n)=>d(e.character.uuid,t,n):void 0,onRevertLast:f?(t,n)=>f(e.character.uuid,t,n):void 0})})})]})},Se=({isOpen:e,character:t,onClose:n,onConfirm:i})=>(0,b.jsxs)(r,{isOpen:e,onClose:n,onConfirm:i,title:`キャラクターを削除`,confirmText:`削除する`,confirmType:`danger`,cancelText:`キャンセル`,children:[(0,b.jsxs)(`p`,{children:[`キャラクター「`,(0,b.jsx)(`strong`,{children:t?.name}),`」を削除しますか？`]}),(0,b.jsx)(`p`,{style:{color:`#dc2626`,marginTop:`12px`,fontSize:`0.875rem`},children:`⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。`})]});var Z=v.div`
  padding: ${({theme:e})=>e.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`,Ce=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  gap: ${({theme:e})=>e.spacing[4]};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Q=v.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${({theme:e})=>e.colors.text};
`,$=v.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,we=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
`,Te=v.div`
  padding: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ee=v.button`
  margin-left: ${({theme:e})=>e.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`,De=()=>{let e=i(),{histories:t,isLoading:n,getSortedHistories:r,addUsedJob:a}=p(),{createCharacter:o,updateCharacter:s,deleteCharacter:c,createMatchRecord:l,deleteMatchRecord:u,getCharacterStatsForSeason:f,matchRecords:m,error:g,clearError:v}=d(),x=r()[0],S=x?f(x.uuid):[],[C,w]=(0,y.useState)(()=>S.length>0?new Set([S[0].character.uuid]):new Set),[T,E]=(0,y.useState)(null),[D,O]=(0,y.useState)(``),[te,k]=(0,y.useState)(!1),[A,j]=(0,y.useState)(null),[ne,M]=(0,y.useState)(!1),[N,P]=(0,y.useState)(null),F=()=>{e.navigate({to:`/new`})},I=e=>{try{o({name:e})}catch{}},L=e=>{let t=new Set(C);t.has(e)?t.delete(e):t.add(e),w(t)},R=(e,t)=>{E(e),O(t)},z=()=>{E(null),O(``)},B=()=>{if(!(!T||!D.trim()))try{s(T,D.trim())&&(E(null),O(``))}catch{}},V=(e,t)=>{j({uuid:e,name:t}),k(!0)},H=()=>{if(A)try{c(A.uuid),k(!1),j(null)}catch{}},U=()=>{k(!1),j(null)},W=e=>{P(e),M(!0)},G=()=>{M(!1),P(null)},K=e=>{if(!(!x||!N))try{a({characterUuid:N,seasonUuid:x.uuid,job:e}),M(!1),P(null)}catch{}},q=(e,t,n)=>{if(x)try{l({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!0})}catch{}},J=(e,t,n)=>{if(x)try{l({characterUuid:e,seasonUuid:x.uuid,job:t,map:n,isWin:!1})}catch{}},ie=(e,t,n)=>{if(x)try{let r=m.filter(r=>r.characterUuid===e&&r.seasonUuid===x.uuid&&r.job===t&&r.map===n);if(r.length===0)return;let i=r.reduce((e,t)=>new Date(t.createdAt)>new Date(e.createdAt)?t:e);u(i.uuid)}catch{}};return n?(0,b.jsxs)(Z,{children:[(0,b.jsx)(Q,{children:`現シーズンの戦績`}),(0,b.jsx)($,{children:`読み込み中...`})]}):t.length===0?(0,b.jsxs)(Z,{children:[(0,b.jsx)(Q,{children:`現シーズンの戦績`}),(0,b.jsx)($,{children:`クリスタルコンフリクト戦績管理へようこそ！`}),(0,b.jsx)(ee,{onCreateSeason:F})]}):(0,b.jsxs)(Z,{children:[(0,b.jsxs)(Ce,{children:[(0,b.jsxs)(Q,{children:[x?.seasonName,` の戦績`]}),(0,b.jsx)(_,{variant:`outline`,size:`sm`,onClick:F,children:`新しいシーズンを作成`})]}),(0,b.jsx)($,{children:`戦績と統計情報を入力します。`}),g&&(0,b.jsxs)(Te,{children:[(0,b.jsx)(`span`,{children:g}),(0,b.jsx)(Ee,{onClick:v,children:`閉じる`})]}),(0,b.jsxs)(we,{children:[S.map(e=>(0,b.jsx)(xe,{stats:e,isOpen:C.has(e.character.uuid),onToggle:()=>L(e.character.uuid),onStartEdit:R,onDelete:V,onOpenJobRegistration:W,onAddWin:q,onAddLoss:J,onRevertLast:ie,isEditing:T===e.character.uuid,editingName:D,onEditingNameChange:O,onSaveEdit:B,onCancelEdit:z},e.character.uuid)),(0,b.jsx)(re,{isOpen:S.length===0,onCreateCharacter:I})]}),(0,b.jsx)(Se,{isOpen:te,character:A,onClose:U,onConfirm:H}),x&&N&&(0,b.jsx)(h,{isOpen:ne,onClose:G,onRegister:K,characterUuid:N,historyUuid:x.uuid})]})};export{De as component};