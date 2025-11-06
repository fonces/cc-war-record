import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,_ as n,g as r,x as i}from"./react-vendor-D1pS86Oe.js";import{n as a}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{A as o,C as s,F as c,I as l,N as u,O as d,P as f,S as p,T as m,_ as h,a as g,b as _,c as v,ct as y,d as b,et as x,f as S,g as C,h as w,k as T,l as E,lt as D,m as O,nt as k,o as A,p as j,q as M,s as N,st as P,t as F,tt as I,u as L,v as R,x as z,y as B}from"./index-CReP5MNo.js";import{n as V,t as H}from"./stores-CeLOu-Jq.js";var U=e(t()),W=e(i()),G=a(O)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${w}:hover &::before {
    opacity: 1;
  }

  ${w}:hover & {
    color: #26a1df;
  }

  ${s.mobile} {
    font-size: 0.875rem;
    padding-left: ${({theme:e})=>e.spacing[4]};
  }
`,K=a(O)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,q=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,J=a.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,Y=a.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,X=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`;const Z=({histories:e,isLoading:t=!1,onDelete:n})=>{let{t:i}=o(),a=r(),s=d(),[c,u]=(0,U.useState)(!1),[f,p]=(0,U.useState)(null),h=(0,U.useMemo)(()=>s?{seasonName:void 0,date:140,actions:120}:{seasonName:void 0,date:220,actions:160},[s]),g=(0,U.useMemo)(()=>({seasonName:h.seasonName?`${h.seasonName}px`:void 0,date:`${h.date}px`,actions:`${h.actions}px`}),[h]),_=(0,U.useMemo)(()=>{let e=l();return[{key:`seasonName`,label:i(`pages.historyDetail.columns.season`),width:h.seasonName?`${h.seasonName}px`:void 0},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`${h.date}px`},{key:`actions`,label:i(`match.actions`),width:`${h.actions+e}px`}]},[i,h]),y=(0,U.useMemo)(()=>s?`${Object.values(h).reduce((e,t)=>e+(t||0),0)}px`:`100%`,[s,h]),b=(0,U.useMemo)(()=>s?`500px`:`calc(100dvh - 320px)`,[s]),S=e=>{a({to:`/histories/${e}`})},T=(e,t)=>{p({uuid:e,seasonName:t}),u(!0)},E=()=>{u(!1),p(null)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(C,{data:e,columns:_,rowHeight:68,overscan:5,height:b,width:y,isLoading:t,loadingText:i(`common.loading`),emptyText:i(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,W.jsxs)(w,{children:[(0,W.jsx)(G,{width:g.seasonName,children:t.seasonName}),(0,W.jsx)(K,{width:g.date,children:x(t.createdAt)}),(0,W.jsx)(O,{width:g.actions,children:(0,W.jsxs)(q,{children:[(0,W.jsx)(v,{icon:(0,W.jsx)(P,{name:`detail`,size:16}),onClick:()=>S(n?`current`:t.uuid),title:i(`pages.histories.detail`)}),(0,W.jsx)(v,{$type:`danger`,icon:(0,W.jsx)(P,{name:`delete`,size:16}),onClick:()=>T(t.uuid,t.seasonName),title:i(`pages.histories.delete`),disabled:n})]})})]})}}),(0,W.jsx)(m,{isOpen:c,onClose:E,title:i(`pages.histories.confirmDelete`),children:(0,W.jsxs)(J,{children:[(0,W.jsx)(Y,{children:i(`pages.histories.deleteDescription`,{seasonName:f?.seasonName})}),(0,W.jsxs)(X,{children:[(0,W.jsx)(D,{variant:`outline`,onClick:E,children:i(`common.cancel`)}),(0,W.jsx)(D,{variant:`primary`,onClick:()=>{f&&(n(f.uuid),u(!1),p(null))},children:i(`character.confirmDelete`)})]})]})})]})};var Q=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[6]};
`;const $=()=>{let{t:e,i18n:t}=o();T(e(`pages.histories.title`));let n=d(),{histories:r,isLoading:i,error:a,getSortedHistories:s,deleteHistory:l,clearError:u}=H(),{matchRecords:y}=V(),[x,C]=(0,U.useState)(null),[w,D]=(0,U.useState)(null),[O,M]=(0,U.useState)(!1),F=s(),R=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,G=e=>{let t=y.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=V.getState();t.forEach(e=>{n(e.uuid)}),l(e)},K=async()=>{try{C(null),D(null),await f(),D(e(`pages.histories.backupCreated`))}catch{C(e(`pages.histories.errors.backupCreateFailed`))}},q=()=>{M(!0)},J=()=>{M(!1);let t=document.createElement(`input`);t.type=`file`,t.accept=`.zip`,t.onchange=async t=>{let n=t.target.files?.[0];if(n)try{C(null),D(null),await c(n),D(e(`pages.histories.backupRestored`)),setTimeout(()=>{window.location.reload()},1500)}catch(t){t instanceof Error&&t.message===`BACKUP_FILE_CORRUPTED`?C(e(`pages.histories.errors.backupFileCorrupted`)):C(e(`pages.histories.errors.backupRestoreFailed`))}},t.click()},Y=[{label:e(`pages.histories.createBackup`),icon:`download`,onClick:K},{label:e(`pages.histories.importBackup`),icon:`upload`,onClick:q}];return(0,W.jsxs)(h,{children:[(0,W.jsxs)(p,{children:[(0,W.jsx)(_,{action:n?(0,W.jsx)(A,{items:Y,triggerTitle:e(`common.menu`),stopPropagation:!1}):void 0,children:e(`pages.histories.title`)}),!n&&(0,W.jsxs)(z,{children:[(0,W.jsx)(v,{onClick:K,icon:(0,W.jsx)(P,{name:`download`,size:16}),title:e(`pages.histories.createBackup`)}),(0,W.jsx)(v,{onClick:q,icon:(0,W.jsx)(P,{name:`upload`,size:16}),title:e(`pages.histories.importBackup`)})]})]}),(0,W.jsx)(B,{children:e(`pages.histories.description`)}),a&&(0,W.jsx)(N,{type:`error`,onClose:u,children:a}),x&&(0,W.jsx)(N,{type:`error`,onClose:()=>C(null),children:x}),w&&(0,W.jsx)(N,{type:`success`,onClose:()=>D(null),children:w}),0<r.length?(0,W.jsxs)(Q,{children:[(0,W.jsxs)(j,{children:[(0,W.jsxs)(E,{children:[(0,W.jsx)(b,{children:e(`pages.histories.stats`)}),(0,W.jsx)(S,{children:r.length}),(0,W.jsx)(L,{children:e(`pages.histories.totalSeasons`,{count:r.length})})]}),(0,W.jsxs)(E,{children:[(0,W.jsx)(b,{children:e(`pages.histories.latestCreated`)}),(0,W.jsx)(S,{children:k(F[0]?.createdAt,R)}),(0,W.jsx)(L,{children:I(F[0]?.createdAt,R)})]})]}),(0,W.jsx)(Z,{histories:F,isLoading:i,onDelete:G})]}):(0,W.jsx)(g,{icon:`history`}),(0,W.jsx)(m,{isOpen:O,onClose:()=>M(!1),title:e(`pages.histories.importBackupWarningTitle`),onConfirm:J,confirmText:e(`common.upload`),cancelText:e(`common.cancel`),confirmType:`danger`,children:(0,W.jsx)(`p`,{children:e(`pages.histories.importBackupWarningMessage`)})})]})};var ee=a(O)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${w}:hover & {
    color: #26a1df;
  }
`,te=a(O)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,ne=a(O)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,re=a.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,ie=a(O)`
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  white-space: nowrap;

  ${s.mobile} {
    align-items: center;
    font-size: 0.75rem;
    white-space: normal;
  }
`,ae=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 60px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({$isWin:e})=>e?`linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.15) 100%)`:`linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)`};
  color: ${({theme:e,$isWin:t})=>t?e.colors.win[700]:e.colors.defeat[700]};
  border: 1px solid ${({$isWin:e})=>e?`rgba(34, 197, 94, 0.2)`:`rgba(239, 68, 68, 0.2)`};

  ${w}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`;const oe=({matches:e,isCurrent:t,onDeleteMatch:n})=>{let r=d(),{t:i}=o(),[a,s]=(0,U.useState)(!1),[c,f]=(0,U.useState)(null),p=(e,t,n)=>{f({uuid:e,characterName:t,date:n}),s(!0)},h=()=>{s(!1),f(null)},g=()=>{c&&(n(c.uuid),s(!1),f(null))},_=(0,U.useMemo)(()=>r?{character:120,job:94,map:120,date:134,result:92,actions:68}:{character:void 0,job:120,map:232,date:180,result:108,actions:84},[r]),y=(0,U.useMemo)(()=>({character:_.character?`${_.character}px`:void 0,job:`${_.job}px`,map:`${_.map}px`,date:`${_.date}px`,result:`${_.result}px`,actions:`${_.actions}px`}),[_]),b=(0,U.useMemo)(()=>{let e=l(),n=[{key:`character`,label:i(`pages.historyDetail.columns.character`),width:_.character?`${_.character}px`:void 0},{key:`job`,label:i(`pages.historyDetail.columns.job`),width:`${_.job}px`},{key:`map`,label:i(`pages.historyDetail.columns.map`),width:`${_.map}px`},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`${_.date}px`},{key:`result`,label:i(`pages.historyDetail.columns.result`),width:t?`${_.result}px`:`${_.result+e}px`}];return t&&n.push({key:`actions`,label:i(`match.actions`),width:`${_.actions+e}px`}),n},[i,t,_]),S=(0,U.useMemo)(()=>r?`${Object.values(_).reduce((e,t)=>e+(t||0),0)}px`:`100%`,[r,_]),T=(0,U.useMemo)(()=>r?`500px`:`calc(100dvh - 436px)`,[r]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(C,{data:e,columns:b,rowHeight:66,overscan:5,height:T,width:S,emptyText:i(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>(0,W.jsxs)(w,{children:[(0,W.jsx)(ee,{width:y.character,children:e.characterName}),(0,W.jsxs)(ne,{width:y.job,children:[(0,W.jsx)(u,{job:e.job,size:24}),(0,W.jsx)(re,{children:M[e.job].shortName})]}),(0,W.jsx)(ie,{width:y.map,children:i(`maps.${e.map}`)}),(0,W.jsx)(te,{width:y.date,children:x(e.recordedAt)}),(0,W.jsx)(O,{width:y.result,children:(0,W.jsx)(ae,{$isWin:e.isWin,children:e.isWin?i(`pages.historyDetail.results.win`):i(`pages.historyDetail.results.defeat`)})}),t&&(0,W.jsx)(O,{width:y.actions,children:(0,W.jsx)(v,{$type:`danger`,icon:(0,W.jsx)(P,{name:`delete`,size:16}),onClick:()=>p(e.uuid,e.characterName,x(e.recordedAt)),title:i(`match.deleteMatch`)})})]})}),t&&(0,W.jsx)(m,{isOpen:a,title:i(`match.confirmDelete`),confirmText:i(`match.confirmDeleteButton`),confirmType:`danger`,onClose:h,onConfirm:g,children:i(`match.deleteConfirmation`,{characterName:c?.characterName,date:c?.date})})]})};var se=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;const ce=()=>{let{t:e,i18n:t}=o(),{id:i}=n({from:`/histories/$id`}),a=r(),s=d(),{getHistoryByUuid:c,getMatchRecordsForSeason:l,histories:u}=H(),{deleteMatchRecord:f}=V(),[m,g]=(0,U.useState)(``),v=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,C=i===`current`,w=(0,U.useMemo)(()=>u[0],[u]),O=(0,U.useMemo)(()=>C?w:c(i),[C,w,i,c]);T(O?e(`pages.historyDetail.title`,{seasonName:O.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let k=(0,U.useMemo)(()=>{if(C){let{matchRecords:e}=V.getState();return e}return l(i)},[C,i,l]),A=(0,U.useMemo)(()=>{if(!O)return[];let e=[];return k.forEach(t=>{let n=`不明`;if(C){let{characters:e}=V.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=O.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),C||O.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[O,k,C]),N=(0,U.useDeferredValue)(m),F=(0,U.useMemo)(()=>{if(!N.trim())return A;let e=N.toLowerCase().trim();return A.filter(t=>{if(t.characterName.toLowerCase().includes(e)||t.job.toLowerCase().includes(e))return!0;let n=M[t.job];return!!(n.name.toLowerCase().includes(e)||n.nameEn.toLowerCase().includes(e)||n.shortName.toLowerCase().includes(e)||x(t.recordedAt).toLowerCase().includes(e))})},[A,N]),z=(0,U.useMemo)(()=>{let e=F.length,t=F.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[F]);return(0,U.useEffect)(()=>{O||a({to:`/histories`})},[O,a]),O?(0,W.jsxs)(h,{children:[(0,W.jsx)(p,{children:(0,W.jsx)(_,{children:O.seasonName})}),(0,W.jsxs)(B,{children:[e(`pages.historyDetail.createdDate`),`: `,I(O.createdAt,v)]}),(0,W.jsxs)(R,{children:[(0,W.jsxs)(j,{children:[(0,W.jsxs)(E,{children:[(0,W.jsx)(b,{children:e(`pages.historyDetail.matchesCount`)}),(0,W.jsx)(S,{children:z.totalMatches}),(0,W.jsx)(L,{children:e(`pages.historyDetail.totalMatches`,{count:z.totalMatches})})]}),(0,W.jsxs)(E,{children:[(0,W.jsx)(b,{children:e(`pages.historyDetail.results.win`)}),(0,W.jsx)(S,{$type:`win`,children:z.wins}),(0,W.jsx)(L,{children:z.totalMatches>0?`${(z.wins/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,W.jsxs)(E,{children:[(0,W.jsx)(b,{children:e(`pages.historyDetail.results.defeat`)}),(0,W.jsx)(S,{$type:`defeat`,children:z.defeats}),(0,W.jsx)(L,{children:z.totalMatches>0?`${(z.defeats/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,W.jsxs)(E,{children:[(0,W.jsx)(b,{children:e(`pages.historyDetail.winRate`)}),0<z.totalMatches?(0,W.jsxs)(S,{$type:`winRate`,$winRate:z.winRate,children:[z.winRate.toFixed(1),`%`]}):(0,W.jsx)(S,{children:`--%`}),(0,W.jsx)(L,{children:e(`pages.historyDetail.overall`)})]})]}),(0,W.jsxs)(se,{children:[(0,W.jsx)(y,{type:`text`,placeholder:e(`pages.historyDetail.searchPlaceholder`),value:m,onChange:e=>g(e.target.value),icon:(0,W.jsx)(P,{name:`search`,size:16}),style:{width:s?`calc(100vw - 32px)`:`400px`}}),(0,W.jsx)(oe,{matches:F,isCurrent:C,onDeleteMatch:e=>{C&&f(e)}})]}),(0,W.jsxs)(D,{variant:`outline`,size:`sm`,fit:!0,onClick:()=>a({to:`/histories`}),children:[(0,W.jsx)(P,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})]})]}):null};export{$ as HistoriesPage,ce as HistoryDetailPage,Z as HistoryTable};