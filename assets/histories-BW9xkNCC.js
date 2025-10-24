import{A as e,J as t,K as n,Q as r,S as i,T as a,_ as o,_t as s,a as c,c as l,ct as u,d,dt as f,et as p,f as m,g as h,h as g,k as _,l as v,m as y,mt as b,nt as x,o as S,p as C,q as w,s as T,st as E,t as D,u as O,v as k,w as A,x as j,y as M,z as N}from"./index-BBYhvlPi.js";import{n as P,t as F}from"./stores-ByG3wVEh.js";var I=s(b()),L=s(f()),R=x(C)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${y}:hover &::before {
    opacity: 1;
  }

  ${y}:hover & {
    color: #26a1df;
  }
`,z=x(C)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,B=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,V=x.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,H=x.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,U=x.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`;const W=({histories:t,isLoading:i=!1,onDelete:o})=>{let{t:s}=a(),c=E(),[l,u]=(0,I.useState)(!1),[d,f]=(0,I.useState)(null),m=(0,I.useMemo)(()=>({seasonName:void 0,date:`220px`,actions:`160px`}),[]),h=(0,I.useMemo)(()=>{let t=e();return[{key:`seasonName`,label:s(`pages.historyDetail.columns.season`),width:void 0},{key:`date`,label:s(`pages.historyDetail.columns.date`),width:`220px`},{key:`actions`,label:s(`match.actions`),width:`${160+t}px`}]},[s]),_=e=>{c({to:`/histories/${e}`})},v=(e,t)=>{f({uuid:e,seasonName:t}),u(!0)},b=()=>{u(!1),f(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(g,{data:t,columns:h,rowHeight:68,overscan:5,height:`calc(100dvh - 320px)`,isLoading:i,loadingText:s(`common.loading`),emptyText:s(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>{let i=e.uuid===t[0]?.uuid;return(0,L.jsxs)(y,{children:[(0,L.jsx)(R,{width:m.seasonName,children:e.seasonName}),(0,L.jsx)(z,{width:m.date,children:n(e.createdAt)}),(0,L.jsx)(C,{width:m.actions,children:(0,L.jsxs)(B,{children:[(0,L.jsx)(T,{icon:(0,L.jsx)(r,{name:`detail`,size:16}),onClick:()=>_(i?`current`:e.uuid),title:s(`pages.histories.detail`)}),(0,L.jsx)(T,{$type:`danger`,icon:(0,L.jsx)(r,{name:`delete`,size:16}),onClick:()=>v(e.uuid,e.seasonName),title:s(`pages.histories.delete`),disabled:i})]})})]})}}),(0,L.jsx)(j,{isOpen:l,onClose:b,title:s(`pages.histories.confirmDelete`),children:(0,L.jsxs)(V,{children:[(0,L.jsx)(H,{children:s(`pages.histories.deleteDescription`,{seasonName:d?.seasonName})}),(0,L.jsxs)(U,{children:[(0,L.jsx)(p,{variant:`outline`,onClick:b,children:s(`common.cancel`)}),(0,L.jsx)(p,{variant:`primary`,onClick:()=>{d&&(o(d.uuid),u(!1),f(null))},children:s(`character.confirmDelete`)})]})]})})]})},G=()=>{let{t:e,i18n:n}=a();A(e(`pages.histories.title`));let{histories:r,isLoading:i,error:s,getSortedHistories:u,deleteHistory:f,clearError:p}=F(),{matchRecords:g}=P(),_=u(),y=n.language===`ja`?`ja-JP`:n.language===`ko`?`ko-KR`:`en-US`;return(0,L.jsxs)(h,{children:[(0,L.jsx)(M,{children:(0,L.jsx)(k,{children:e(`pages.histories.title`)})}),(0,L.jsx)(o,{children:e(`pages.histories.description`)}),s&&(0,L.jsx)(S,{type:`error`,onClose:p,children:s}),0<r.length?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m,{children:[(0,L.jsxs)(l,{children:[(0,L.jsx)(O,{children:e(`pages.histories.stats`)}),(0,L.jsx)(d,{children:r.length}),(0,L.jsx)(v,{children:e(`pages.histories.totalSeasons`,{count:r.length})})]}),(0,L.jsxs)(l,{children:[(0,L.jsx)(O,{children:e(`pages.histories.latestCreated`)}),(0,L.jsx)(d,{children:t(_[0]?.createdAt,y)}),(0,L.jsx)(v,{children:w(_[0]?.createdAt,y)})]})]}),(0,L.jsx)(W,{histories:_,isLoading:i,onDelete:e=>{let t=g.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=P.getState();t.forEach(e=>{n(e.uuid)}),f(e),D(`histories`,`delete`)}})]}):(0,L.jsx)(c,{icon:`history`})]})};var K=x(C)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${y}:hover & {
    color: #26a1df;
  }
`,q=x(C)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,J=x(C)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Y=x.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,X=x.span`
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

  ${y}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`;const Z=({matches:t,isCurrent:i,onDeleteMatch:o})=>{let{t:s}=a(),[c,l]=(0,I.useState)(!1),[u,d]=(0,I.useState)(null),f=(e,t,n)=>{d({uuid:e,characterName:t,date:n}),l(!0)},p=()=>{l(!1),d(null)},m=()=>{u&&(o(u.uuid),l(!1),d(null))},h=(0,I.useMemo)(()=>({character:void 0,job:`120px`,date:`180px`,result:`108px`,actions:`84px`}),[]),v=(0,I.useMemo)(()=>{let t=e(),n=[{key:`character`,label:s(`pages.historyDetail.columns.character`),width:void 0},{key:`job`,label:s(`pages.historyDetail.columns.job`),width:`120px`},{key:`date`,label:s(`pages.historyDetail.columns.date`),width:`180px`},{key:`result`,label:s(`pages.historyDetail.columns.result`),width:i?`108px`:`${108+t}px`}];return i&&n.push({key:`actions`,label:s(`match.actions`),width:i?`${84+t}px`:`84px`}),n},[s,i]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(g,{data:t,columns:v,rowHeight:66,overscan:5,height:`calc(100dvh - 380px)`,emptyText:s(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>(0,L.jsxs)(y,{children:[(0,L.jsx)(K,{width:h.character,children:e.characterName}),(0,L.jsxs)(J,{width:h.job,children:[(0,L.jsx)(_,{job:e.job,size:24}),(0,L.jsx)(Y,{children:N[e.job].shortName})]}),(0,L.jsx)(q,{width:h.date,children:n(e.recordedAt)}),(0,L.jsx)(C,{width:h.result,children:(0,L.jsx)(X,{$isWin:e.isWin,children:e.isWin?s(`pages.historyDetail.results.win`):s(`pages.historyDetail.results.defeat`)})}),i&&(0,L.jsx)(C,{width:h.actions,children:(0,L.jsx)(T,{$type:`danger`,icon:(0,L.jsx)(r,{name:`delete`,size:16}),onClick:()=>f(e.uuid,e.characterName,n(e.recordedAt)),title:s(`match.deleteMatch`)})})]})}),i&&(0,L.jsx)(j,{isOpen:c,title:s(`match.confirmDelete`),confirmText:s(`match.confirmDeleteButton`),confirmType:`danger`,onClose:p,onConfirm:m,children:s(`match.deleteConfirmation`,{characterName:u?.characterName,date:u?.date})})]})};var Q=x.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  display: flex;
  justify-content: space-between;
  animation: ${i} 0.6s ease-out 0.2s backwards;
`;const $=()=>{let{t:e,i18n:t}=a(),{id:n}=u({from:`/histories/$id`}),i=E(),{getHistoryByUuid:s,getMatchRecordsForSeason:c,histories:f}=F(),{deleteMatchRecord:g}=P(),_=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,y=n===`current`,b=(0,I.useMemo)(()=>f[0],[f]),x=(0,I.useMemo)(()=>y?b:s(n),[y,b,n,s]);A(x?e(`pages.historyDetail.title`,{seasonName:x.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let S=(0,I.useMemo)(()=>{if(y){let{matchRecords:e}=P.getState();return e}return c(n)},[y,n,c]),C=(0,I.useMemo)(()=>{if(!x)return[];let e=[];return S.forEach(t=>{let n=`不明`;if(y){let{characters:e}=P.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=x.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),y||x.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[x,S,y]),T=(0,I.useMemo)(()=>{let e=C.length,t=C.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[C]);return(0,I.useEffect)(()=>{x||i({to:`/histories`})},[x,i]),x?(0,L.jsxs)(h,{children:[(0,L.jsx)(M,{children:(0,L.jsx)(k,{children:x.seasonName})}),(0,L.jsxs)(o,{children:[e(`pages.historyDetail.createdDate`),`: `,w(x.createdAt,_)]}),(0,L.jsxs)(m,{children:[(0,L.jsxs)(l,{children:[(0,L.jsx)(O,{children:e(`pages.historyDetail.matchesCount`)}),(0,L.jsx)(d,{children:T.totalMatches}),(0,L.jsx)(v,{children:e(`pages.historyDetail.totalMatches`,{count:T.totalMatches})})]}),(0,L.jsxs)(l,{children:[(0,L.jsx)(O,{children:e(`pages.historyDetail.results.win`)}),(0,L.jsx)(d,{$type:`win`,children:T.wins}),(0,L.jsx)(v,{children:T.totalMatches>0?`${(T.wins/T.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,L.jsxs)(l,{children:[(0,L.jsx)(O,{children:e(`pages.historyDetail.results.defeat`)}),(0,L.jsx)(d,{$type:`defeat`,children:T.defeats}),(0,L.jsx)(v,{children:T.totalMatches>0?`${(T.defeats/T.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,L.jsxs)(l,{children:[(0,L.jsx)(O,{children:e(`pages.historyDetail.winRate`)}),0<T.totalMatches?(0,L.jsxs)(d,{$type:`winRate`,$winRate:T.winRate,children:[T.winRate.toFixed(1),`%`]}):(0,L.jsx)(d,{children:`--%`}),(0,L.jsx)(v,{children:e(`pages.historyDetail.overall`)})]})]}),(0,L.jsx)(Z,{matches:C,isCurrent:y,onDeleteMatch:e=>{y&&g(e)}}),(0,L.jsx)(Q,{children:(0,L.jsxs)(p,{variant:`outline`,size:`sm`,onClick:()=>i({to:`/histories`}),children:[(0,L.jsx)(r,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})})]}):null};export{G as HistoriesPage,$ as HistoryDetailPage,W as HistoryTable};