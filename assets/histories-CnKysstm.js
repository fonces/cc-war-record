import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,_ as n,g as r,x as i}from"./react-vendor-D1pS86Oe.js";import{n as a}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{A as o,C as s,D as c,E as l,M as u,N as d,Q as f,U as p,X as m,Z as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,it as w,j as T,l as E,m as D,nt as O,o as k,p as A,rt as j,s as M,t as N,u as P,v as F,x as I,y as L}from"./index-DzAmwz1d.js";import{n as R,t as z}from"./stores-gG6RgjPY.js";var B=e(t()),V=e(i()),H=a(A)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${D}:hover &::before {
    opacity: 1;
  }

  ${D}:hover & {
    color: #26a1df;
  }
`,U=a(A)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,W=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,G=a.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,K=a.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,q=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`;const J=({histories:e,isLoading:t=!1,onDelete:n})=>{let{t:i}=c(),a=r(),[o,l]=(0,B.useState)(!1),[u,f]=(0,B.useState)(null),p=(0,B.useMemo)(()=>({seasonName:void 0,date:`220px`,actions:`160px`}),[]),h=(0,B.useMemo)(()=>{let e=d();return[{key:`seasonName`,label:i(`pages.historyDetail.columns.season`),width:void 0},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`220px`},{key:`actions`,label:i(`match.actions`),width:`${160+e}px`}]},[i]),g=e=>{a({to:`/histories/${e}`})},_=(e,t)=>{f({uuid:e,seasonName:t}),l(!0)},v=()=>{l(!1),f(null)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(C,{data:e,columns:h,rowHeight:68,overscan:5,height:`calc(100dvh - 320px)`,isLoading:t,loadingText:i(`common.loading`),emptyText:i(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,V.jsxs)(D,{children:[(0,V.jsx)(H,{width:p.seasonName,children:t.seasonName}),(0,V.jsx)(U,{width:p.date,children:m(t.createdAt)}),(0,V.jsx)(A,{width:p.actions,children:(0,V.jsxs)(W,{children:[(0,V.jsx)(M,{icon:(0,V.jsx)(O,{name:`detail`,size:16}),onClick:()=>g(n?`current`:t.uuid),title:i(`pages.histories.detail`)}),(0,V.jsx)(M,{$type:`danger`,icon:(0,V.jsx)(O,{name:`delete`,size:16}),onClick:()=>_(t.uuid,t.seasonName),title:i(`pages.histories.delete`),disabled:n})]})})]})}}),(0,V.jsx)(s,{isOpen:o,onClose:v,title:i(`pages.histories.confirmDelete`),children:(0,V.jsxs)(G,{children:[(0,V.jsx)(K,{children:i(`pages.histories.deleteDescription`,{seasonName:u?.seasonName})}),(0,V.jsxs)(q,{children:[(0,V.jsx)(w,{variant:`outline`,onClick:v,children:i(`common.cancel`)}),(0,V.jsx)(w,{variant:`primary`,onClick:()=>{u&&(n(u.uuid),l(!1),f(null))},children:i(`character.confirmDelete`)})]})]})})]})};var Y=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[6]};
`;const X=()=>{let{t:e,i18n:t}=c();l(e(`pages.histories.title`));let{histories:n,isLoading:r,error:i,getSortedHistories:a,deleteHistory:o,clearError:d}=z(),{matchRecords:p}=R(),[m,g]=(0,B.useState)(null),[C,w]=(0,B.useState)(null),[D,A]=(0,B.useState)(!1),j=a(),H=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`;return(0,V.jsxs)(S,{children:[(0,V.jsxs)(I,{children:[(0,V.jsx)(L,{children:e(`pages.histories.title`)}),(0,V.jsxs)(v,{children:[(0,V.jsx)(M,{onClick:async()=>{try{g(null),w(null),await T(),N(`histories`,`create_backup`),w(e(`pages.histories.backupCreated`))}catch{g(e(`pages.histories.errors.backupCreateFailed`))}},icon:(0,V.jsx)(O,{name:`download`,size:16}),title:e(`pages.histories.createBackup`)}),(0,V.jsx)(M,{onClick:()=>{A(!0)},icon:(0,V.jsx)(O,{name:`upload`,size:16}),title:e(`pages.histories.importBackup`)})]})]}),(0,V.jsx)(F,{children:e(`pages.histories.description`)}),i&&(0,V.jsx)(k,{type:`error`,onClose:d,children:i}),m&&(0,V.jsx)(k,{type:`error`,onClose:()=>g(null),children:m}),C&&(0,V.jsx)(k,{type:`success`,onClose:()=>w(null),children:C}),0<n.length?(0,V.jsxs)(Y,{children:[(0,V.jsxs)(x,{children:[(0,V.jsxs)(y,{children:[(0,V.jsx)(P,{children:e(`pages.histories.stats`)}),(0,V.jsx)(b,{children:n.length}),(0,V.jsx)(E,{children:e(`pages.histories.totalSeasons`,{count:n.length})})]}),(0,V.jsxs)(y,{children:[(0,V.jsx)(P,{children:e(`pages.histories.latestCreated`)}),(0,V.jsx)(b,{children:f(j[0]?.createdAt,H)}),(0,V.jsx)(E,{children:h(j[0]?.createdAt,H)})]})]}),(0,V.jsx)(J,{histories:j,isLoading:r,onDelete:e=>{let t=p.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=R.getState();t.forEach(e=>{n(e.uuid)}),o(e),N(`histories`,`delete`)}})]}):(0,V.jsx)(_,{icon:`history`}),(0,V.jsx)(s,{isOpen:D,onClose:()=>A(!1),title:e(`pages.histories.importBackupWarningTitle`),onConfirm:()=>{A(!1);let t=document.createElement(`input`);t.type=`file`,t.accept=`.zip`,t.onchange=async t=>{let n=t.target.files?.[0];if(n)try{g(null),w(null),await u(n),N(`histories`,`restore_backup`),w(e(`pages.histories.backupRestored`)),setTimeout(()=>{window.location.reload()},1500)}catch(t){t instanceof Error&&t.message===`BACKUP_FILE_CORRUPTED`?g(e(`pages.histories.errors.backupFileCorrupted`)):g(e(`pages.histories.errors.backupRestoreFailed`))}},t.click()},confirmText:e(`common.upload`),cancelText:e(`common.cancel`),confirmType:`danger`,children:(0,V.jsx)(`p`,{children:e(`pages.histories.importBackupWarningMessage`)})})]})};var Z=a(A)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${D}:hover & {
    color: #26a1df;
  }
`,Q=a(A)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,$=a(A)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,ee=a.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,te=a.span`
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

  ${D}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`;const ne=({matches:e,isCurrent:t,onDeleteMatch:n})=>{let{t:r}=c(),[i,a]=(0,B.useState)(!1),[l,u]=(0,B.useState)(null),f=(e,t,n)=>{u({uuid:e,characterName:t,date:n}),a(!0)},h=()=>{a(!1),u(null)},g=()=>{l&&(n(l.uuid),a(!1),u(null))},_=(0,B.useMemo)(()=>({character:void 0,job:`120px`,date:`180px`,result:`108px`,actions:`84px`}),[]),v=(0,B.useMemo)(()=>{let e=d(),n=[{key:`character`,label:r(`pages.historyDetail.columns.character`),width:void 0},{key:`job`,label:r(`pages.historyDetail.columns.job`),width:`120px`},{key:`date`,label:r(`pages.historyDetail.columns.date`),width:`180px`},{key:`result`,label:r(`pages.historyDetail.columns.result`),width:t?`108px`:`${108+e}px`}];return t&&n.push({key:`actions`,label:r(`match.actions`),width:t?`${84+e}px`:`84px`}),n},[r,t]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(C,{data:e,columns:v,rowHeight:66,overscan:5,height:`calc(100dvh - 436px)`,emptyText:r(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>(0,V.jsxs)(D,{children:[(0,V.jsx)(Z,{width:_.character,children:e.characterName}),(0,V.jsxs)($,{width:_.job,children:[(0,V.jsx)(o,{job:e.job,size:24}),(0,V.jsx)(ee,{children:p[e.job].shortName})]}),(0,V.jsx)(Q,{width:_.date,children:m(e.recordedAt)}),(0,V.jsx)(A,{width:_.result,children:(0,V.jsx)(te,{$isWin:e.isWin,children:e.isWin?r(`pages.historyDetail.results.win`):r(`pages.historyDetail.results.defeat`)})}),t&&(0,V.jsx)(A,{width:_.actions,children:(0,V.jsx)(M,{$type:`danger`,icon:(0,V.jsx)(O,{name:`delete`,size:16}),onClick:()=>f(e.uuid,e.characterName,m(e.recordedAt)),title:r(`match.deleteMatch`)})})]})}),t&&(0,V.jsx)(s,{isOpen:i,title:r(`match.confirmDelete`),confirmText:r(`match.confirmDeleteButton`),confirmType:`danger`,onClose:h,onConfirm:g,children:r(`match.deleteConfirmation`,{characterName:l?.characterName,date:l?.date})})]})};var re=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;const ie=()=>{let{t:e,i18n:t}=c(),{id:i}=n({from:`/histories/$id`}),a=r(),{getHistoryByUuid:o,getMatchRecordsForSeason:s,histories:u}=z(),{deleteMatchRecord:d}=R(),[f,_]=(0,B.useState)(``),v=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,C=i===`current`,T=(0,B.useMemo)(()=>u[0],[u]),D=(0,B.useMemo)(()=>C?T:o(i),[C,T,i,o]);l(D?e(`pages.historyDetail.title`,{seasonName:D.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let k=(0,B.useMemo)(()=>{if(C){let{matchRecords:e}=R.getState();return e}return s(i)},[C,i,s]),A=(0,B.useMemo)(()=>{if(!D)return[];let e=[];return k.forEach(t=>{let n=`不明`;if(C){let{characters:e}=R.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=D.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),C||D.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[D,k,C]),M=(0,B.useDeferredValue)(f),N=(0,B.useMemo)(()=>{if(!M.trim())return A;let e=M.toLowerCase().trim();return A.filter(t=>{if(t.characterName.toLowerCase().includes(e)||t.job.toLowerCase().includes(e))return!0;let n=p[t.job];return!!(n.name.toLowerCase().includes(e)||n.nameEn.toLowerCase().includes(e)||n.shortName.toLowerCase().includes(e)||m(t.recordedAt).toLowerCase().includes(e))})},[A,M]),H=(0,B.useMemo)(()=>{let e=N.length,t=N.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[N]);return(0,B.useEffect)(()=>{D||a({to:`/histories`})},[D,a]),D?(0,V.jsxs)(S,{children:[(0,V.jsx)(I,{children:(0,V.jsx)(L,{children:D.seasonName})}),(0,V.jsxs)(F,{children:[e(`pages.historyDetail.createdDate`),`: `,h(D.createdAt,v)]}),(0,V.jsxs)(g,{children:[(0,V.jsxs)(x,{children:[(0,V.jsxs)(y,{children:[(0,V.jsx)(P,{children:e(`pages.historyDetail.matchesCount`)}),(0,V.jsx)(b,{children:H.totalMatches}),(0,V.jsx)(E,{children:e(`pages.historyDetail.totalMatches`,{count:H.totalMatches})})]}),(0,V.jsxs)(y,{children:[(0,V.jsx)(P,{children:e(`pages.historyDetail.results.win`)}),(0,V.jsx)(b,{$type:`win`,children:H.wins}),(0,V.jsx)(E,{children:H.totalMatches>0?`${(H.wins/H.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,V.jsxs)(y,{children:[(0,V.jsx)(P,{children:e(`pages.historyDetail.results.defeat`)}),(0,V.jsx)(b,{$type:`defeat`,children:H.defeats}),(0,V.jsx)(E,{children:H.totalMatches>0?`${(H.defeats/H.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,V.jsxs)(y,{children:[(0,V.jsx)(P,{children:e(`pages.historyDetail.winRate`)}),0<H.totalMatches?(0,V.jsxs)(b,{$type:`winRate`,$winRate:H.winRate,children:[H.winRate.toFixed(1),`%`]}):(0,V.jsx)(b,{children:`--%`}),(0,V.jsx)(E,{children:e(`pages.historyDetail.overall`)})]})]}),(0,V.jsxs)(re,{children:[(0,V.jsx)(j,{type:`text`,placeholder:e(`pages.historyDetail.searchPlaceholder`),value:f,onChange:e=>_(e.target.value),icon:(0,V.jsx)(O,{name:`search`,size:16}),style:{width:`400px`}}),(0,V.jsx)(ne,{matches:N,isCurrent:C,onDeleteMatch:e=>{C&&d(e)}})]}),(0,V.jsxs)(w,{variant:`outline`,size:`sm`,fit:!0,onClick:()=>a({to:`/histories`}),children:[(0,V.jsx)(O,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})]})]}):null};export{X as HistoriesPage,ie as HistoryDetailPage,J as HistoryTable};