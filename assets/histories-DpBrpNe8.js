import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,_ as n,g as r,x as i}from"./react-vendor-D1pS86Oe.js";import{n as a}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{$ as o,A as s,C as c,F as l,I as u,K as d,N as f,O as p,P as m,S as h,T as g,_,a as v,at as y,b,c as x,d as S,et as C,f as w,g as T,h as E,k as D,l as O,m as k,o as A,ot as j,p as M,s as N,st as P,t as F,tt as I,u as L,v as R,x as z,y as B}from"./index-CBtGcQ1u.js";import{n as V,t as H}from"./stores-Dc9vblbV.js";var U=e(t()),W=e(i()),G=a(k)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${E}:hover &::before {
    opacity: 1;
  }

  ${E}:hover & {
    color: #26a1df;
  }

  ${c.mobile} {
    font-size: 0.875rem;
    padding-left: ${({theme:e})=>e.spacing[4]};
  }
`,K=a(k)`
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
`;const Z=({histories:e,isLoading:t=!1,onDelete:n})=>{let{t:i}=s(),a=r(),c=p(),[l,d]=(0,U.useState)(!1),[f,m]=(0,U.useState)(null),h=(0,U.useMemo)(()=>c?{seasonName:void 0,date:140,actions:120}:{seasonName:void 0,date:220,actions:160},[c]),_=(0,U.useMemo)(()=>({seasonName:h.seasonName?`${h.seasonName}px`:void 0,date:`${h.date}px`,actions:`${h.actions}px`}),[h]),v=(0,U.useMemo)(()=>{let e=u();return[{key:`seasonName`,label:i(`pages.historyDetail.columns.season`),width:h.seasonName?`${h.seasonName}px`:void 0},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`${h.date}px`},{key:`actions`,label:i(`match.actions`),width:`${h.actions+e}px`}]},[i,h]),b=(0,U.useMemo)(()=>c?`${Object.values(h).reduce((e,t)=>e+(t||0),0)}px`:`100%`,[c,h]),S=(0,U.useMemo)(()=>c?`500px`:`calc(100dvh - 320px)`,[c]),C=e=>{a({to:`/histories/${e}`})},w=(e,t)=>{m({uuid:e,seasonName:t}),d(!0)},D=()=>{d(!1),m(null)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(T,{data:e,columns:v,rowHeight:68,overscan:5,height:S,width:b,isLoading:t,loadingText:i(`common.loading`),emptyText:i(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,W.jsxs)(E,{children:[(0,W.jsx)(G,{width:_.seasonName,children:t.seasonName}),(0,W.jsx)(K,{width:_.date,children:o(t.createdAt)}),(0,W.jsx)(k,{width:_.actions,children:(0,W.jsxs)(q,{children:[(0,W.jsx)(x,{icon:(0,W.jsx)(y,{name:`detail`,size:16}),onClick:()=>C(n?`current`:t.uuid),title:i(`pages.histories.detail`)}),(0,W.jsx)(x,{$type:`danger`,icon:(0,W.jsx)(y,{name:`delete`,size:16}),onClick:()=>w(t.uuid,t.seasonName),title:i(`pages.histories.delete`),disabled:n})]})})]})}}),(0,W.jsx)(g,{isOpen:l,onClose:D,title:i(`pages.histories.confirmDelete`),children:(0,W.jsxs)(J,{children:[(0,W.jsx)(Y,{children:i(`pages.histories.deleteDescription`,{seasonName:f?.seasonName})}),(0,W.jsxs)(X,{children:[(0,W.jsx)(P,{variant:`outline`,onClick:D,children:i(`common.cancel`)}),(0,W.jsx)(P,{variant:`primary`,onClick:()=>{f&&(n(f.uuid),d(!1),m(null))},children:i(`character.confirmDelete`)})]})]})})]})};var Q=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[6]};
`;const $=()=>{let{t:e,i18n:t}=s();D(e(`pages.histories.title`));let n=p(),{histories:r,isLoading:i,error:a,getSortedHistories:o,deleteHistory:c,clearError:u}=H(),{matchRecords:d}=V(),[f,T]=(0,U.useState)(null),[E,k]=(0,U.useState)(null),[j,P]=(0,U.useState)(!1),F=o(),R=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,G=e=>{let t=d.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=V.getState();t.forEach(e=>{n(e.uuid)}),c(e)},K=async()=>{try{T(null),k(null),await m(),k(e(`pages.histories.backupCreated`))}catch{T(e(`pages.histories.errors.backupCreateFailed`))}},q=()=>{P(!0)},J=()=>{P(!1);let t=document.createElement(`input`);t.type=`file`,t.accept=`.zip`,t.onchange=async t=>{let n=t.target.files?.[0];if(n)try{T(null),k(null),await l(n),k(e(`pages.histories.backupRestored`)),setTimeout(()=>{window.location.reload()},1500)}catch(t){t instanceof Error&&t.message===`BACKUP_FILE_CORRUPTED`?T(e(`pages.histories.errors.backupFileCorrupted`)):T(e(`pages.histories.errors.backupRestoreFailed`))}},t.click()},Y=[{label:e(`pages.histories.createBackup`),icon:`download`,onClick:K},{label:e(`pages.histories.importBackup`),icon:`upload`,onClick:q}];return(0,W.jsxs)(_,{children:[(0,W.jsxs)(h,{children:[(0,W.jsx)(b,{action:n?(0,W.jsx)(A,{items:Y,triggerTitle:e(`common.menu`),stopPropagation:!1}):void 0,children:e(`pages.histories.title`)}),!n&&(0,W.jsxs)(z,{children:[(0,W.jsx)(x,{onClick:K,icon:(0,W.jsx)(y,{name:`download`,size:16}),title:e(`pages.histories.createBackup`)}),(0,W.jsx)(x,{onClick:q,icon:(0,W.jsx)(y,{name:`upload`,size:16}),title:e(`pages.histories.importBackup`)})]})]}),(0,W.jsx)(B,{children:e(`pages.histories.description`)}),a&&(0,W.jsx)(N,{type:`error`,onClose:u,children:a}),f&&(0,W.jsx)(N,{type:`error`,onClose:()=>T(null),children:f}),E&&(0,W.jsx)(N,{type:`success`,onClose:()=>k(null),children:E}),0<r.length?(0,W.jsxs)(Q,{children:[(0,W.jsxs)(M,{children:[(0,W.jsxs)(O,{children:[(0,W.jsx)(S,{children:e(`pages.histories.stats`)}),(0,W.jsx)(w,{children:r.length}),(0,W.jsx)(L,{children:e(`pages.histories.totalSeasons`,{count:r.length})})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(S,{children:e(`pages.histories.latestCreated`)}),(0,W.jsx)(w,{children:I(F[0]?.createdAt,R)}),(0,W.jsx)(L,{children:C(F[0]?.createdAt,R)})]})]}),(0,W.jsx)(Z,{histories:F,isLoading:i,onDelete:G})]}):(0,W.jsx)(v,{icon:`history`}),(0,W.jsx)(g,{isOpen:j,onClose:()=>P(!1),title:e(`pages.histories.importBackupWarningTitle`),onConfirm:J,confirmText:e(`common.upload`),cancelText:e(`common.cancel`),confirmType:`danger`,children:(0,W.jsx)(`p`,{children:e(`pages.histories.importBackupWarningMessage`)})})]})};var ee=a(k)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${E}:hover & {
    color: #26a1df;
  }
`,te=a(k)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,ne=a(k)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,re=a.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,ie=a(k)`
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  white-space: nowrap;

  ${c.mobile} {
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

  ${E}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`;const oe=({matches:e,isCurrent:t,onDeleteMatch:n})=>{let r=p(),{t:i}=s(),[a,c]=(0,U.useState)(!1),[l,m]=(0,U.useState)(null),h=(e,t,n)=>{m({uuid:e,characterName:t,date:n}),c(!0)},_=()=>{c(!1),m(null)},v=()=>{l&&(n(l.uuid),c(!1),m(null))},b=(0,U.useMemo)(()=>r?{character:120,job:94,map:120,date:134,result:92,actions:68}:{character:void 0,job:120,map:232,date:180,result:108,actions:84},[r]),S=(0,U.useMemo)(()=>({character:b.character?`${b.character}px`:void 0,job:`${b.job}px`,map:`${b.map}px`,date:`${b.date}px`,result:`${b.result}px`,actions:`${b.actions}px`}),[b]),C=(0,U.useMemo)(()=>{let e=u(),n=[{key:`character`,label:i(`pages.historyDetail.columns.character`),width:b.character?`${b.character}px`:void 0},{key:`job`,label:i(`pages.historyDetail.columns.job`),width:`${b.job}px`},{key:`map`,label:i(`pages.historyDetail.columns.map`),width:`${b.map}px`},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`${b.date}px`},{key:`result`,label:i(`pages.historyDetail.columns.result`),width:t?`${b.result}px`:`${b.result+e}px`}];return t&&n.push({key:`actions`,label:i(`match.actions`),width:`${b.actions+e}px`}),n},[i,t,b]),w=(0,U.useMemo)(()=>r?`${Object.values(b).reduce((e,t)=>e+(t||0),0)}px`:`100%`,[r,b]),D=(0,U.useMemo)(()=>r?`500px`:`calc(100dvh - 436px)`,[r]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(T,{data:e,columns:C,rowHeight:66,overscan:5,height:D,width:w,emptyText:i(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>(0,W.jsxs)(E,{children:[(0,W.jsx)(ee,{width:S.character,children:e.characterName}),(0,W.jsxs)(ne,{width:S.job,children:[(0,W.jsx)(f,{job:e.job,size:24}),(0,W.jsx)(re,{children:d[e.job].shortName})]}),(0,W.jsx)(ie,{width:S.map,children:i(`maps.${e.map}`)}),(0,W.jsx)(te,{width:S.date,children:o(e.recordedAt)}),(0,W.jsx)(k,{width:S.result,children:(0,W.jsx)(ae,{$isWin:e.isWin,children:e.isWin?i(`pages.historyDetail.results.win`):i(`pages.historyDetail.results.defeat`)})}),t&&(0,W.jsx)(k,{width:S.actions,children:(0,W.jsx)(x,{$type:`danger`,icon:(0,W.jsx)(y,{name:`delete`,size:16}),onClick:()=>h(e.uuid,e.characterName,o(e.recordedAt)),title:i(`match.deleteMatch`)})})]})}),t&&(0,W.jsx)(g,{isOpen:a,title:i(`match.confirmDelete`),confirmText:i(`match.confirmDeleteButton`),confirmType:`danger`,onClose:_,onConfirm:v,children:i(`match.deleteConfirmation`,{characterName:l?.characterName,date:l?.date})})]})};var se=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;const ce=()=>{let{t:e,i18n:t}=s(),{id:i}=n({from:`/histories/$id`}),a=r(),c=p(),{getHistoryByUuid:l,getMatchRecordsForSeason:u,histories:f}=H(),{deleteMatchRecord:m}=V(),[g,v]=(0,U.useState)(``),x=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,T=i===`current`,E=(0,U.useMemo)(()=>f[0],[f]),k=(0,U.useMemo)(()=>T?E:l(i),[T,E,i,l]);D(k?e(`pages.historyDetail.title`,{seasonName:k.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let A=(0,U.useMemo)(()=>{if(T){let{matchRecords:e}=V.getState();return e}return u(i)},[T,i,u]),N=(0,U.useMemo)(()=>{if(!k)return[];let e=[];return A.forEach(t=>{let n=`不明`;if(T){let{characters:e}=V.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=k.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),T||k.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[k,A,T]),F=(0,U.useDeferredValue)(g),I=(0,U.useMemo)(()=>{if(!F.trim())return N;let e=F.toLowerCase().trim();return N.filter(t=>{if(t.characterName.toLowerCase().includes(e)||t.job.toLowerCase().includes(e))return!0;let n=d[t.job];return!!(n.name.toLowerCase().includes(e)||n.nameEn.toLowerCase().includes(e)||n.shortName.toLowerCase().includes(e)||o(t.recordedAt).toLowerCase().includes(e))})},[N,F]),z=(0,U.useMemo)(()=>{let e=I.length,t=I.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[I]);return(0,U.useEffect)(()=>{k||a({to:`/histories`})},[k,a]),k?(0,W.jsxs)(_,{children:[(0,W.jsx)(h,{children:(0,W.jsx)(b,{children:k.seasonName})}),(0,W.jsxs)(B,{children:[e(`pages.historyDetail.createdDate`),`: `,C(k.createdAt,x)]}),(0,W.jsxs)(R,{children:[(0,W.jsxs)(M,{children:[(0,W.jsxs)(O,{children:[(0,W.jsx)(S,{children:e(`pages.historyDetail.matchesCount`)}),(0,W.jsx)(w,{children:z.totalMatches}),(0,W.jsx)(L,{children:e(`pages.historyDetail.totalMatches`,{count:z.totalMatches})})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(S,{children:e(`pages.historyDetail.results.win`)}),(0,W.jsx)(w,{$type:`win`,children:z.wins}),(0,W.jsx)(L,{children:z.totalMatches>0?`${(z.wins/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(S,{children:e(`pages.historyDetail.results.defeat`)}),(0,W.jsx)(w,{$type:`defeat`,children:z.defeats}),(0,W.jsx)(L,{children:z.totalMatches>0?`${(z.defeats/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,W.jsxs)(O,{children:[(0,W.jsx)(S,{children:e(`pages.historyDetail.winRate`)}),0<z.totalMatches?(0,W.jsxs)(w,{$type:`winRate`,$winRate:z.winRate,children:[z.winRate.toFixed(1),`%`]}):(0,W.jsx)(w,{children:`--%`}),(0,W.jsx)(L,{children:e(`pages.historyDetail.overall`)})]})]}),(0,W.jsxs)(se,{children:[(0,W.jsx)(j,{type:`text`,placeholder:e(`pages.historyDetail.searchPlaceholder`),value:g,onChange:e=>v(e.target.value),icon:(0,W.jsx)(y,{name:`search`,size:16}),style:{width:c?`calc(100vw - 32px)`:`400px`}}),(0,W.jsx)(oe,{matches:I,isCurrent:T,onDeleteMatch:e=>{T&&m(e)}})]}),(0,W.jsxs)(P,{variant:`outline`,size:`sm`,fit:!0,onClick:()=>a({to:`/histories`}),children:[(0,W.jsx)(y,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})]})]}):null};export{$ as HistoriesPage,ce as HistoryDetailPage,Z as HistoryTable};