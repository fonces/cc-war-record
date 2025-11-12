import{i as e}from"./rolldown-runtime-CescaEWC.js";import{kt as t}from"./vendor-CfpF3efx.js";import{_ as n,b as r,g as i}from"./vendor-react-Dqtmilgm.js";import{n as a}from"./vendor-styled-zRjDkof3.js";import"./vendor-jszip-BemITh_p.js";import"./vendor-i18n-DFMPNbhM.js";import{C as o,I as s,L as c,M as l,N as u,O as d,R as f,S as p,X as m,_ as h,a as g,at as _,b as v,c as y,d as b,f as x,ft as S,g as C,h as w,it as T,j as E,l as D,m as O,mt as k,o as A,p as j,rt as M,t as N,u as P,ut as F,v as I,w as L,x as R,y as z,z as B}from"./index-C5jF5Hv-.js";import{n as V,t as H}from"./stores-C0mYd_Ps.js";var U=e(t()),W=e(r()),G=a(w)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${C}:hover &::before {
    opacity: 1;
  }

  ${C}:hover & {
    color: #26a1df;
  }

  ${L.mobile} {
    font-size: 0.875rem;
    padding-left: ${({theme:e})=>e.spacing[4]};
  }
`,K=a(w)`
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
`;const Z=({histories:e,isLoading:t=!1,onDelete:n})=>{let{t:r}=u(),a=i(),o=E(),[s,c]=(0,U.useState)(!1),[l,f]=(0,U.useState)(null),p=(0,U.useMemo)(()=>o?{seasonName:void 0,date:140,actions:120}:{seasonName:void 0,date:220,actions:160},[o]),m=(0,U.useMemo)(()=>({seasonName:p.seasonName?`${p.seasonName}px`:void 0,date:`${p.date}px`,actions:`${p.actions}px`}),[p]),g=(0,U.useMemo)(()=>{let e=B();return[{key:`seasonName`,label:r(`pages.historyDetail.columns.season`),width:p.seasonName?`${p.seasonName}px`:void 0},{key:`date`,label:r(`pages.historyDetail.columns.date`),width:`${p.date}px`},{key:`actions`,label:r(`match.actions`),width:`${p.actions+e}px`}]},[r,p]),_=(0,U.useMemo)(()=>o?`${Object.values(p).reduce((e,t)=>e+(t||0),0)}px`:`100%`,[o,p]),v=(0,U.useMemo)(()=>o?`500px`:`calc(100dvh - 320px)`,[o]),y=e=>{a({to:`/histories/${e}`})},b=(e,t)=>{f({uuid:e,seasonName:t}),c(!0)},x=()=>{c(!1),f(null)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(h,{data:e,columns:g,rowHeight:68,overscan:5,height:v,width:_,isLoading:t,loadingText:r(`common.loading`),emptyText:r(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,W.jsxs)(C,{children:[(0,W.jsx)(G,{width:m.seasonName,children:t.seasonName}),(0,W.jsx)(K,{width:m.date,children:M(t.createdAt)}),(0,W.jsx)(w,{width:m.actions,children:(0,W.jsxs)(q,{children:[(0,W.jsx)(D,{icon:(0,W.jsx)(F,{name:`detail`,size:16}),onClick:()=>y(n?`current`:t.uuid),title:r(`pages.histories.detail`)}),(0,W.jsx)(D,{$type:`danger`,icon:(0,W.jsx)(F,{name:`delete`,size:16}),onClick:()=>b(t.uuid,t.seasonName),title:r(`pages.histories.delete`),disabled:n})]})})]})}}),(0,W.jsx)(d,{isOpen:s,onClose:x,title:r(`pages.histories.confirmDelete`),children:(0,W.jsxs)(J,{children:[(0,W.jsx)(Y,{children:r(`pages.histories.deleteDescription`,{seasonName:l?.seasonName})}),(0,W.jsxs)(X,{children:[(0,W.jsx)(k,{variant:`outline`,onClick:x,children:r(`common.cancel`)}),(0,W.jsx)(k,{variant:`primary`,onClick:()=>{l&&(n(l.uuid),c(!1),f(null))},children:r(`character.confirmDelete`)})]})]})})]})};var Q=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[6]};
`;const $=()=>{let{t:e,i18n:t}=u();l(e(`pages.histories.title`));let n=E(),{histories:r,isLoading:i,error:a,getSortedHistories:s,deleteHistory:m,clearError:h}=H(),{matchRecords:S}=V(),[C,w]=(0,U.useState)(null),[k,M]=(0,U.useState)(null),[L,z]=(0,U.useState)(!1),B=s(),G=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,K=e=>{let t=S.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=V.getState();t.forEach(e=>{n(e.uuid)}),m(e),N(`histories`,`delete`)},q=async()=>{try{w(null),M(null),await c(),N(`histories`,`create_backup`),M(e(`pages.histories.backupCreated`))}catch{w(e(`pages.histories.errors.backupCreateFailed`))}},J=()=>{z(!0)},Y=()=>{z(!1);let t=document.createElement(`input`);t.type=`file`,t.accept=`.zip`,t.onchange=async t=>{let n=t.target.files?.[0];if(n)try{w(null),M(null),await f(n),N(`histories`,`restore_backup`),M(e(`pages.histories.backupRestored`)),setTimeout(()=>{window.location.reload()},1500)}catch(t){t instanceof Error&&t.message===`BACKUP_FILE_CORRUPTED`?w(e(`pages.histories.errors.backupFileCorrupted`)):w(e(`pages.histories.errors.backupRestoreFailed`))}},t.click()},X=[{label:e(`pages.histories.createBackup`),icon:`download`,onClick:q},{label:e(`pages.histories.importBackup`),icon:`upload`,onClick:J}];return(0,W.jsxs)(I,{children:[(0,W.jsxs)(o,{children:[(0,W.jsx)(R,{action:n?(0,W.jsx)(A,{items:X,triggerTitle:e(`common.menu`),stopPropagation:!1}):void 0,children:e(`pages.histories.title`)}),!n&&(0,W.jsxs)(p,{children:[(0,W.jsx)(D,{onClick:q,icon:(0,W.jsx)(F,{name:`download`,size:16}),title:e(`pages.histories.createBackup`)}),(0,W.jsx)(D,{onClick:J,icon:(0,W.jsx)(F,{name:`upload`,size:16}),title:e(`pages.histories.importBackup`)})]})]}),(0,W.jsx)(v,{children:e(`pages.histories.description`)}),a&&(0,W.jsx)(y,{type:`error`,onClose:h,children:a}),C&&(0,W.jsx)(y,{type:`error`,onClose:()=>w(null),children:C}),k&&(0,W.jsx)(y,{type:`success`,onClose:()=>M(null),children:k}),0<r.length?(0,W.jsxs)(Q,{children:[(0,W.jsxs)(O,{children:[(0,W.jsxs)(P,{children:[(0,W.jsx)(x,{children:e(`pages.histories.stats`)}),(0,W.jsx)(j,{children:r.length}),(0,W.jsx)(b,{children:e(`pages.histories.totalSeasons`,{count:r.length})})]}),(0,W.jsxs)(P,{children:[(0,W.jsx)(x,{children:e(`pages.histories.latestCreated`)}),(0,W.jsx)(j,{children:_(B[0]?.createdAt,G)}),(0,W.jsx)(b,{children:T(B[0]?.createdAt,G)})]})]}),(0,W.jsx)(Z,{histories:B,isLoading:i,onDelete:K})]}):(0,W.jsx)(g,{icon:`history`}),(0,W.jsx)(d,{isOpen:L,onClose:()=>z(!1),title:e(`pages.histories.importBackupWarningTitle`),onConfirm:Y,confirmText:e(`common.upload`),cancelText:e(`common.cancel`),confirmType:`danger`,children:(0,W.jsx)(`p`,{children:e(`pages.histories.importBackupWarningMessage`)})})]})};var ee=a(w)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${C}:hover & {
    color: #26a1df;
  }
`,te=a(w)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,ne=a(w)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,re=a.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,ie=a(w)`
  color: ${({theme:e})=>e.colors.text};
  font-size: 0.875rem;
  white-space: nowrap;

  ${L.mobile} {
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

  ${C}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`;const oe=({matches:e,isCurrent:t,onDeleteMatch:n})=>{let r=E(),{t:i}=u(),[a,o]=(0,U.useState)(!1),[c,l]=(0,U.useState)(null),f=(e,t,n)=>{l({uuid:e,characterName:t,date:n}),o(!0)},p=()=>{o(!1),l(null)},g=()=>{c&&(n(c.uuid),o(!1),l(null))},_=(0,U.useMemo)(()=>r?{character:120,job:94,map:120,date:134,result:92,actions:68}:{character:void 0,job:120,map:232,date:180,result:108,actions:84},[r]),v=(0,U.useMemo)(()=>({character:_.character?`${_.character}px`:void 0,job:`${_.job}px`,map:`${_.map}px`,date:`${_.date}px`,result:`${_.result}px`,actions:`${_.actions}px`}),[_]),y=(0,U.useMemo)(()=>{let e=B(),n=[{key:`character`,label:i(`pages.historyDetail.columns.character`),width:_.character?`${_.character}px`:void 0},{key:`job`,label:i(`pages.historyDetail.columns.job`),width:`${_.job}px`},{key:`map`,label:i(`pages.historyDetail.columns.map`),width:`${_.map}px`},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`${_.date}px`},{key:`result`,label:i(`pages.historyDetail.columns.result`),width:t?`${_.result}px`:`${_.result+e}px`}];return t&&n.push({key:`actions`,label:i(`match.actions`),width:`${_.actions+e}px`}),n},[i,t,_]),b=(0,U.useMemo)(()=>r?`${Object.values(_).reduce((e,t)=>e+(t||0),0)}px`:`100%`,[r,_]),x=(0,U.useMemo)(()=>r?`500px`:`calc(100dvh - 436px)`,[r]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(h,{data:e,columns:y,rowHeight:66,overscan:5,height:x,width:b,emptyText:i(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>(0,W.jsxs)(C,{children:[(0,W.jsx)(ee,{width:v.character,children:e.characterName}),(0,W.jsxs)(ne,{width:v.job,children:[(0,W.jsx)(s,{job:e.job,size:24}),(0,W.jsx)(re,{children:m[e.job].shortName})]}),(0,W.jsx)(ie,{width:v.map,children:i(`maps.${e.map}`)}),(0,W.jsx)(te,{width:v.date,children:M(e.recordedAt)}),(0,W.jsx)(w,{width:v.result,children:(0,W.jsx)(ae,{$isWin:e.isWin,children:e.isWin?i(`pages.historyDetail.results.win`):i(`pages.historyDetail.results.defeat`)})}),t&&(0,W.jsx)(w,{width:v.actions,children:(0,W.jsx)(D,{$type:`danger`,icon:(0,W.jsx)(F,{name:`delete`,size:16}),onClick:()=>f(e.uuid,e.characterName,M(e.recordedAt)),title:i(`match.deleteMatch`)})})]})}),t&&(0,W.jsx)(d,{isOpen:a,title:i(`match.confirmDelete`),confirmText:i(`match.confirmDeleteButton`),confirmType:`danger`,onClose:p,onConfirm:g,children:i(`match.deleteConfirmation`,{characterName:c?.characterName,date:c?.date})})]})};var se=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;const ce=()=>{let{t:e,i18n:t}=u(),{id:r}=n({from:`/histories/$id`}),a=i(),s=E(),{getHistoryByUuid:c,getMatchRecordsForSeason:d,histories:f}=H(),{deleteMatchRecord:p}=V(),[h,g]=(0,U.useState)(``),_=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,y=r===`current`,C=(0,U.useMemo)(()=>f[0],[f]),w=(0,U.useMemo)(()=>y?C:c(r),[y,C,r,c]);l(w?e(`pages.historyDetail.title`,{seasonName:w.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let D=(0,U.useMemo)(()=>{if(y){let{matchRecords:e}=V.getState();return e}return d(r)},[y,r,d]),A=(0,U.useMemo)(()=>{if(!w)return[];let e=[];return D.forEach(t=>{let n=`不明`;if(y){let{characters:e}=V.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=w.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),y||w.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[w,D,y]),N=(0,U.useDeferredValue)(h),L=(0,U.useMemo)(()=>{if(!N.trim())return A;let e=N.toLowerCase().trim();return A.filter(t=>{if(t.characterName.toLowerCase().includes(e)||t.job.toLowerCase().includes(e))return!0;let n=m[t.job];return!!(n.name.toLowerCase().includes(e)||n.nameEn.toLowerCase().includes(e)||n.shortName.toLowerCase().includes(e)||M(t.recordedAt).toLowerCase().includes(e))})},[A,N]),B=(0,U.useMemo)(()=>{let e=L.length,t=L.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[L]);return(0,U.useEffect)(()=>{w||a({to:`/histories`})},[w,a]),w?(0,W.jsxs)(I,{children:[(0,W.jsx)(o,{children:(0,W.jsx)(R,{children:w.seasonName})}),(0,W.jsxs)(v,{children:[e(`pages.historyDetail.createdDate`),`: `,T(w.createdAt,_)]}),(0,W.jsxs)(z,{children:[(0,W.jsxs)(O,{children:[(0,W.jsxs)(P,{children:[(0,W.jsx)(x,{children:e(`pages.historyDetail.matchesCount`)}),(0,W.jsx)(j,{children:B.totalMatches}),(0,W.jsx)(b,{children:e(`pages.historyDetail.totalMatches`,{count:B.totalMatches})})]}),(0,W.jsxs)(P,{children:[(0,W.jsx)(x,{children:e(`pages.historyDetail.results.win`)}),(0,W.jsx)(j,{$type:`win`,children:B.wins}),(0,W.jsx)(b,{children:B.totalMatches>0?`${(B.wins/B.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,W.jsxs)(P,{children:[(0,W.jsx)(x,{children:e(`pages.historyDetail.results.defeat`)}),(0,W.jsx)(j,{$type:`defeat`,children:B.defeats}),(0,W.jsx)(b,{children:B.totalMatches>0?`${(B.defeats/B.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,W.jsxs)(P,{children:[(0,W.jsx)(x,{children:e(`pages.historyDetail.winRate`)}),0<B.totalMatches?(0,W.jsxs)(j,{$type:`winRate`,$winRate:B.winRate,children:[B.winRate.toFixed(1),`%`]}):(0,W.jsx)(j,{children:`--%`}),(0,W.jsx)(b,{children:e(`pages.historyDetail.overall`)})]})]}),(0,W.jsxs)(se,{children:[(0,W.jsx)(S,{type:`text`,placeholder:e(`pages.historyDetail.searchPlaceholder`),value:h,onChange:e=>g(e.target.value),icon:(0,W.jsx)(F,{name:`search`,size:16}),style:{width:s?`calc(100vw - 32px)`:`400px`}}),(0,W.jsx)(oe,{matches:L,isCurrent:y,onDeleteMatch:e=>{y&&p(e)}})]}),(0,W.jsxs)(k,{variant:`outline`,size:`sm`,fit:!0,onClick:()=>a({to:`/histories`}),children:[(0,W.jsx)(F,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})]})]}):null};export{$ as HistoriesPage,ce as HistoryDetailPage,Z as HistoryTable};