import{$ as e,C as t,E as n,H as r,K as i,Q as a,R as o,S as s,T as c,U as l,W as u,Z as d,_ as f,a as p,b as m,c as h,d as g,f as _,g as v,h as y,i as b,it as x,j as S,l as C,m as w,n as T,o as E,r as D,s as O,st as k,t as A,tt as j,u as M,v as N,y as P}from"./index-BERaIJaj.js";import{n as F,r as I,t as L}from"./stores-DsdzEjKc.js";import{t as R}from"./utils-ahtYqTut.js";var z=k(x()),B=k(j()),V=i(w)`
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
`,H=i(w)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,U=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,W=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,G=i.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,K=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`;const q=({histories:e,isLoading:t=!1,onDelete:i})=>{let{t:a}=n(),o=d(),[c,l]=(0,z.useState)(!1),[f,p]=(0,z.useState)(null),m=(0,z.useMemo)(()=>({seasonName:void 0,date:`220px`,actions:`160px`}),[]),h=(0,z.useMemo)(()=>{let e=R();return[{key:`seasonName`,label:a(`pages.historyDetail.columns.season`),width:void 0},{key:`date`,label:a(`pages.historyDetail.columns.date`),width:`220px`},{key:`actions`,label:a(`match.actions`),width:`${160+e}px`}]},[a]),g=e=>{o({to:`/histories/${e}`})},_=(e,t)=>{p({uuid:e,seasonName:t}),l(!0)},b=()=>{l(!1),p(null)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v,{data:e,columns:h,rowHeight:68,overscan:5,height:`calc(100dvh - 320px)`,isLoading:t,loadingText:a(`common.loading`),emptyText:a(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,B.jsxs)(y,{children:[(0,B.jsx)(V,{width:m.seasonName,children:t.seasonName}),(0,B.jsx)(H,{width:m.date,children:I(t.createdAt)}),(0,B.jsx)(w,{width:m.actions,children:(0,B.jsxs)(U,{children:[(0,B.jsx)(O,{icon:(0,B.jsx)(r,{name:`detail`,size:16}),onClick:()=>g(n?`current`:t.uuid),title:a(`pages.histories.detail`)}),(0,B.jsx)(O,{$type:`danger`,icon:(0,B.jsx)(r,{name:`delete`,size:16}),onClick:()=>_(t.uuid,t.seasonName),title:a(`pages.histories.delete`),disabled:n})]})})]})}}),(0,B.jsx)(s,{isOpen:c,onClose:b,title:a(`pages.histories.confirmDelete`),children:(0,B.jsxs)(W,{children:[(0,B.jsx)(G,{children:a(`pages.histories.deleteDescription`,{seasonName:f?.seasonName})}),(0,B.jsxs)(K,{children:[(0,B.jsx)(u,{variant:`outline`,onClick:b,children:a(`common.cancel`)}),(0,B.jsx)(u,{variant:`primary`,onClick:()=>{f&&(i(f.uuid),l(!1),p(null))},children:a(`character.confirmDelete`)})]})]})})]})},J=()=>{let{t:e,i18n:t}=n();c(e(`pages.histories.title`));let{histories:r,isLoading:i,error:a,getSortedHistories:o,deleteHistory:s,clearError:l}=L(),{matchRecords:u}=F(),d=o(),v=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`;return(0,B.jsxs)(f,{children:[(0,B.jsx)(m,{children:(0,B.jsx)(P,{children:e(`pages.histories.title`)})}),(0,B.jsx)(N,{children:e(`pages.histories.description`)}),a&&(0,B.jsx)(E,{type:`error`,onClose:l,children:a}),0<r.length?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(_,{children:[(0,B.jsxs)(h,{children:[(0,B.jsx)(M,{children:e(`pages.histories.stats`)}),(0,B.jsx)(g,{children:r.length}),(0,B.jsx)(C,{children:e(`pages.histories.totalSeasons`,{count:r.length})})]}),(0,B.jsxs)(h,{children:[(0,B.jsx)(M,{children:e(`pages.histories.latestCreated`)}),(0,B.jsx)(g,{children:new Date(d[0]?.createdAt).toLocaleDateString(v,{month:`numeric`,day:`numeric`})}),(0,B.jsx)(C,{children:new Date(d[0]?.createdAt).toLocaleDateString(v,{year:`numeric`,month:`long`,day:`numeric`})})]})]}),(0,B.jsx)(q,{histories:d,isLoading:i,onDelete:e=>{let t=u.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=F.getState();t.forEach(e=>{n(e.uuid)}),s(e),A(`histories`,`delete`)}})]}):(0,B.jsx)(p,{icon:`history`})]})};var Y=i(w)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${y}:hover & {
    color: #26a1df;
  }
`,X=i(w)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,Z=i(w)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Q=i.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,$=i.span`
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
`;const ee=({matches:e,isCurrent:t,onDeleteMatch:i})=>{let{t:a}=n(),[c,l]=(0,z.useState)(!1),[u,d]=(0,z.useState)(null),f=(e,t,n)=>{d({uuid:e,characterName:t,date:n}),l(!0)},p=()=>{l(!1),d(null)},m=()=>{u&&(i(u.uuid),l(!1),d(null))},h=(0,z.useMemo)(()=>({character:void 0,job:`120px`,date:`180px`,result:`108px`,actions:`84px`}),[]),g=(0,z.useMemo)(()=>{let e=R(),n=[{key:`character`,label:a(`pages.historyDetail.columns.character`),width:void 0},{key:`job`,label:a(`pages.historyDetail.columns.job`),width:`120px`},{key:`date`,label:a(`pages.historyDetail.columns.date`),width:`180px`},{key:`result`,label:a(`pages.historyDetail.columns.result`),width:t?`108px`:`${108+e}px`}];return t&&n.push({key:`actions`,label:a(`match.actions`),width:t?`${84+e}px`:`84px`}),n},[a,t]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(v,{data:e,columns:g,rowHeight:66,overscan:5,height:`calc(100dvh - 380px)`,emptyText:a(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:e=>(0,B.jsxs)(y,{children:[(0,B.jsx)(Y,{width:h.character,children:e.characterName}),(0,B.jsxs)(Z,{width:h.job,children:[(0,B.jsx)(S,{job:e.job,size:24}),(0,B.jsx)(Q,{children:o[e.job].shortName})]}),(0,B.jsx)(X,{width:h.date,children:I(e.recordedAt)}),(0,B.jsx)(w,{width:h.result,children:(0,B.jsx)($,{$isWin:e.isWin,children:e.isWin?a(`pages.historyDetail.results.win`):a(`pages.historyDetail.results.defeat`)})}),t&&(0,B.jsx)(w,{width:h.actions,children:(0,B.jsx)(O,{$type:`danger`,icon:(0,B.jsx)(r,{name:`delete`,size:16}),onClick:()=>f(e.uuid,e.characterName,I(e.recordedAt)),title:a(`match.deleteMatch`)})})]})}),t&&(0,B.jsx)(s,{isOpen:c,title:a(`match.confirmDelete`),confirmText:a(`match.confirmDeleteButton`),confirmType:`danger`,onClose:p,onConfirm:m,children:a(`match.deleteConfirmation`,{characterName:u?.characterName,date:u?.date})})]})};var te=i.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  display: flex;
  justify-content: space-between;
  animation: ${t} 0.6s ease-out 0.2s backwards;
`;const ne=()=>{let{t:e,i18n:t}=n(),{id:i}=a({from:`/histories/$id`}),o=d(),{getHistoryByUuid:s,getMatchRecordsForSeason:l,histories:p}=L(),{deleteMatchRecord:v}=F(),y=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`,b=i===`current`,x=(0,z.useMemo)(()=>p[0],[p]),S=(0,z.useMemo)(()=>b?x:s(i),[b,x,i,s]);c(S?e(`pages.historyDetail.title`,{seasonName:S.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let w=(0,z.useMemo)(()=>{if(b){let{matchRecords:e}=F.getState();return e}return l(i)},[b,i,l]),T=(0,z.useMemo)(()=>{if(!S)return[];let e=[];return w.forEach(t=>{let n=`不明`;if(b){let{characters:e}=F.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=S.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),b||S.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[S,w,b]),E=(0,z.useMemo)(()=>{let e=T.length,t=T.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[T]);return(0,z.useEffect)(()=>{S||o({to:`/histories`})},[S,o]),S?(0,B.jsxs)(f,{children:[(0,B.jsx)(m,{children:(0,B.jsx)(P,{children:S.seasonName})}),(0,B.jsxs)(N,{children:[e(`pages.historyDetail.createdDate`),`: `,new Date(S.createdAt).toLocaleDateString(y,{year:`numeric`,month:`long`,day:`numeric`})]}),(0,B.jsxs)(_,{children:[(0,B.jsxs)(h,{children:[(0,B.jsx)(M,{children:e(`pages.historyDetail.matchesCount`)}),(0,B.jsx)(g,{children:E.totalMatches}),(0,B.jsx)(C,{children:e(`pages.historyDetail.totalMatches`,{count:E.totalMatches})})]}),(0,B.jsxs)(h,{children:[(0,B.jsx)(M,{children:e(`pages.historyDetail.results.win`)}),(0,B.jsx)(g,{$type:`win`,children:E.wins}),(0,B.jsx)(C,{children:E.totalMatches>0?`${(E.wins/E.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,B.jsxs)(h,{children:[(0,B.jsx)(M,{children:e(`pages.historyDetail.results.defeat`)}),(0,B.jsx)(g,{$type:`defeat`,children:E.defeats}),(0,B.jsx)(C,{children:E.totalMatches>0?`${(E.defeats/E.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,B.jsxs)(h,{children:[(0,B.jsx)(M,{children:e(`pages.historyDetail.winRate`)}),0<E.totalMatches?(0,B.jsxs)(g,{$type:`winRate`,$winRate:E.winRate,children:[E.winRate.toFixed(1),`%`]}):(0,B.jsx)(g,{children:`--%`}),(0,B.jsx)(C,{children:e(`pages.historyDetail.overall`)})]})]}),(0,B.jsx)(ee,{matches:T,isCurrent:b,onDeleteMatch:e=>{b&&v(e)}}),(0,B.jsx)(te,{children:(0,B.jsxs)(u,{variant:`outline`,size:`sm`,onClick:()=>o({to:`/histories`}),children:[(0,B.jsx)(r,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})})]}):null},re=()=>{let{t}=n();c(t(`pages.newSeason.title`));let r=e(),{createHistory:i,error:a,clearError:o,getSortedHistories:d}=L(),[p,h]=(0,z.useState)(``),[g,_]=(0,z.useState)(!1),[v,y]=(0,z.useState)(``),[x,S]=(0,z.useState)(``),[C,w]=(0,z.useState)(!1),O=async e=>{e.preventDefault();let n=p.trim();if(!n){y(t(`pages.newSeason.validationRequired`));return}if(n.length>20){y(t(`pages.newSeason.validationMaxLength`,{length:20}));return}if(y(``),d().length>0){w(!0);return}await k()},k=async()=>{_(!0),o();try{let e=p.trim(),n=i({seasonName:e});S(t(`pages.newSeason.successMessage`,{seasonName:n.seasonName})),setTimeout(()=>{r.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{_(!1),w(!1)}},A=()=>{k()},j=()=>{w(!1)},M=()=>{history.back()},F=e=>{h(e.target.value),v&&y(``)},I=d()[0]?.seasonName||``;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(s,{isOpen:C,onClose:j,title:t(`pages.newSeason.confirmTitle`),confirmText:t(`pages.newSeason.create`),cancelText:t(`pages.newSeason.cancel`),onConfirm:A,confirmType:`danger`,isLoading:g,children:t(`pages.newSeason.confirmDescription`,{seasonName:I})}),(0,B.jsxs)(f,{children:[(0,B.jsx)(m,{children:(0,B.jsx)(P,{children:t(`pages.newSeason.title`)})}),(0,B.jsx)(N,{children:t(`pages.newSeason.description`)}),(0,B.jsxs)(T,{onSubmit:O,children:[(a||v)&&(0,B.jsx)(E,{type:`error`,onClose:()=>{y(``),o()},children:v||a}),x&&(0,B.jsx)(E,{type:`success`,children:x}),(0,B.jsx)(b,{children:(0,B.jsx)(l,{label:t(`pages.newSeason.seasonName`),type:`text`,value:p,onChange:F,placeholder:t(`pages.newSeason.seasonNamePlaceholder`),disabled:g||!!x,fullWidth:!0,required:!0})}),(0,B.jsxs)(D,{children:[(0,B.jsx)(u,{type:`button`,variant:`outline`,onClick:M,disabled:g||!!x,children:t(`pages.newSeason.cancel`)}),(0,B.jsx)(u,{type:`submit`,disabled:g||!!x||!p.trim(),children:t(g?`pages.newSeason.creating`:`pages.newSeason.create`)})]})]})]})]})};export{J as HistoriesPage,ne as HistoryDetailPage,q as HistoryTable,re as NewSeasonPage};