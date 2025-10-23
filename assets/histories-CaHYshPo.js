import{A as e,L as t,M as n,N as r,R as i,T as a,V as o,W as s,a as c,c as l,d as u,f as d,i as f,j as p,k as m,l as h,o as g,p as _,q as v,r as y,s as b,t as x,v as S,z as C}from"./index-CUg7Bi74.js";import{i as w,n as T,r as E,t as D}from"./colors-BSQPRjSo.js";import{t as O}from"./utils-ahtYqTut.js";var k=v(s()),A=v(o()),j=n(y)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${f}:hover &::before {
    opacity: 1;
  }

  ${f}:hover & {
    color: #26a1df;
  }
`,M=n(y)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,N=n(p)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.base};
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.sm};

  &:hover {
    background: ${({theme:e})=>e.colors.primary[500]};
    border-color: ${({theme:e})=>e.colors.primary[500]};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
  }
`,P=n(p)`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.error[500]};
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.base};
  border-color: rgba(239, 68, 68, 0.3);
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.sm};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.error[500]};
    border-color: ${({theme:e})=>e.colors.error[500]};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,F=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,I=n.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,L=n.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,R=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,z=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[16]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({theme:e})=>e.gradients.primary};
  }

  animation: fadeIn 0.5s ease-out;
`,B=n.div`
  width: 80px;
  height: 80px;
  background: ${({theme:e})=>e.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[5]};
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.3);
  animation: pulse 2s ease-in-out infinite;

  svg {
    color: white;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`,V=n.h3`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,H=n.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 400px;
`;const U=({histories:e,isLoading:n=!1,onDelete:r})=>{let{t:i}=_(),a=t(),[o,s]=(0,k.useState)(!1),[l,d]=(0,k.useState)(null),h=(0,k.useMemo)(()=>({seasonName:void 0,date:`220px`,actions:`160px`}),[]),g=(0,k.useMemo)(()=>{let e=O();return[{key:`seasonName`,label:i(`pages.historyDetail.columns.season`),width:void 0},{key:`date`,label:i(`pages.historyDetail.columns.date`),width:`220px`},{key:`actions`,label:i(`match.actions`),width:`${160+e}px`}]},[i]),v=e=>{a({to:`/histories/${e}`})},b=(e,t)=>{d({uuid:e,seasonName:t}),s(!0)},x=()=>{s(!1),d(null)};return!n&&e.length===0?(0,A.jsxs)(z,{children:[(0,A.jsx)(B,{children:(0,A.jsx)(m,{name:`history`,size:24})}),(0,A.jsx)(V,{children:i(`pages.histories.emptyState`)}),(0,A.jsx)(H,{children:i(`pages.histories.createFirstSeason`)})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{data:e,columns:g,rowHeight:68,overscan:5,height:`calc(100dvh - 320px)`,isLoading:n,loadingText:i(`common.loading`),emptyText:i(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,A.jsxs)(f,{children:[(0,A.jsx)(j,{width:h.seasonName,children:t.seasonName}),(0,A.jsx)(M,{width:h.date,children:w(t.createdAt)}),(0,A.jsx)(y,{width:h.actions,children:(0,A.jsxs)(F,{children:[(0,A.jsx)(N,{variant:`outline`,icon:(0,A.jsx)(m,{name:`detail`,size:16}),onClick:()=>v(n?`current`:t.uuid),title:i(`pages.histories.detail`)}),(0,A.jsx)(P,{variant:`outline`,icon:(0,A.jsx)(m,{name:`delete`,size:16}),onClick:()=>b(t.uuid,t.seasonName),title:i(`pages.histories.delete`),disabled:n})]})})]})}}),(0,A.jsx)(u,{isOpen:o,onClose:x,title:i(`pages.histories.confirmDelete`),children:(0,A.jsxs)(I,{children:[(0,A.jsx)(L,{children:i(`pages.histories.deleteDescription`,{seasonName:l?.seasonName})}),(0,A.jsxs)(R,{children:[(0,A.jsx)(p,{variant:`outline`,onClick:x,children:i(`common.cancel`)}),(0,A.jsx)(p,{variant:`primary`,onClick:()=>{l&&(r(l.uuid),s(!1),d(null))},children:i(`character.confirmDelete`)})]})]})})]})};var ee=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: fadeIn 0.5s ease-out;
`,W=n.div`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  padding: ${({theme:e})=>e.spacing[5]};
  box-shadow: ${({theme:e})=>e.shadows.md};
  transition: all ${({theme:e})=>e.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({theme:e})=>e.gradients.primary};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.xl}, ${({theme:e})=>e.shadows.glow};
  }
`,G=n.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,K=n.div`
  font-size: 1.875rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`,q=n.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,J=n.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.isDark?`rgba(239, 68, 68, 0.15)`:`rgba(239, 68, 68, 0.1)`};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  color: ${({theme:e})=>e.colors.error[600]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  box-shadow: ${({theme:e})=>e.shadows.md};
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    margin-top: ${({theme:e})=>e.spacing[2]};
    background: none;
    border: none;
    color: ${({theme:e})=>e.colors.error[700]};
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color ${({theme:e})=>e.transitions.base};

    &:hover {
      color: ${({theme:e})=>e.colors.error[900]};
    }
  }
`,te=n.div`
  animation: fadeIn 0.5s ease-out 0.1s both;
`;const ne=()=>{let{t:e,i18n:t}=_();d(e(`pages.histories.title`));let{histories:n,isLoading:r,error:i,getSortedHistories:a,deleteHistory:o,clearError:s}=T(),{matchRecords:c}=E(),u=a(),f=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`;return(0,A.jsxs)(g,{children:[(0,A.jsx)(h,{children:(0,A.jsx)(l,{children:e(`pages.histories.title`)})}),(0,A.jsx)(b,{children:e(`pages.histories.description`)}),i&&(0,A.jsxs)(J,{children:[(0,A.jsxs)(`div`,{children:[e(`common.error`),`: `,i]}),(0,A.jsx)(`button`,{onClick:s,children:e(`common.close`)})]}),n.length>0&&(0,A.jsxs)(ee,{children:[(0,A.jsxs)(W,{children:[(0,A.jsx)(G,{children:e(`pages.histories.stats`)}),(0,A.jsx)(K,{children:n.length}),(0,A.jsx)(q,{children:e(`pages.histories.totalSeasons`,{count:n.length})})]}),(0,A.jsxs)(W,{children:[(0,A.jsx)(G,{children:e(`pages.histories.latestCreated`)}),(0,A.jsx)(K,{children:new Date(u[0]?.createdAt).toLocaleDateString(f,{month:`numeric`,day:`numeric`})}),(0,A.jsx)(q,{children:new Date(u[0]?.createdAt).toLocaleDateString(f,{year:`numeric`,month:`long`,day:`numeric`})})]})]}),(0,A.jsx)(te,{children:(0,A.jsx)(U,{histories:u,isLoading:r,onDelete:e=>{let t=c.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=E.getState();t.forEach(e=>{n(e.uuid)}),o(e),x(`histories`,`delete`)}})})]})};var Y=r`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,re=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${Y} 0.6s ease-out;
`,X=n.div`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(10px);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[6]};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 24px rgba(38, 161, 223, 0.15),
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`,Z=n.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Q=n.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  ${({theme:e,$type:t,$winRate:n})=>t===`win`?`color: ${e.colors.win[400]};`:t===`defeat`?`color: ${e.colors.defeat[400]};`:t===`winRate`&&n!==void 0?`color: ${D(n,e,400)};`:`
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,$=n.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ie=n(y)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${f}:hover & {
    color: #26a1df;
  }
`,ae=n(y)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,oe=n(y)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,se=n.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,ce=n.span`
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

  ${f}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`,le=n(p)`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.error[500]};
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(8px);
  border-color: rgba(239, 68, 68, 0.3);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.error[500]};
    border-color: ${({theme:e})=>e.colors.error[500]};
    color: ${({theme:e})=>e.colors.white};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`,ue=n.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  display: flex;
  justify-content: space-between;
  animation: ${Y} 0.6s ease-out 0.2s backwards;
`,de=n(p)`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({theme:e})=>e.isDark?`rgba(38, 161, 223, 0.15)`:`rgba(38, 161, 223, 0.1)`};
    border-color: ${({theme:e})=>e.colors.primary[400]};
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.15);
  }
`;const fe=()=>{let{t:e,i18n:n}=_(),{id:r}=i({from:`/histories/$id`}),o=t(),{getHistoryByUuid:s,getMatchRecordsForSeason:p,histories:v}=T(),{deleteMatchRecord:x}=E(),C=n.language===`ja`?`ja-JP`:n.language===`ko`?`ko-KR`:`en-US`,[D,j]=(0,k.useState)(!1),[M,N]=(0,k.useState)(null),P=r===`current`,F=(0,k.useMemo)(()=>v[0],[v]),I=(0,k.useMemo)(()=>P?F:s(r),[P,F,r,s]);d(I?e(`pages.historyDetail.title`,{seasonName:I.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let L=(0,k.useMemo)(()=>{if(P){let{matchRecords:e}=E.getState();return e}return p(r)},[P,r,p]),R=(0,k.useMemo)(()=>{if(!I)return[];let e=[];return L.forEach(t=>{let n=`不明`;if(P){let{characters:e}=E.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=I.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),P||I.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[I,L,P]),z=(0,k.useMemo)(()=>{let e=R.length,t=R.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[R]),B=(0,k.useMemo)(()=>({character:void 0,job:`120px`,date:`180px`,result:`108px`,actions:`84px`}),[]),V=(0,k.useMemo)(()=>{let t=O(),n=[{key:`character`,label:e(`pages.historyDetail.columns.character`),width:void 0},{key:`job`,label:e(`pages.historyDetail.columns.job`),width:`120px`},{key:`date`,label:e(`pages.historyDetail.columns.date`),width:`180px`},{key:`result`,label:e(`pages.historyDetail.columns.result`),width:P?`108px`:`${108+t}px`}];return P&&n.push({key:`actions`,label:e(`match.actions`),width:P?`${84+t}px`:`84px`}),n},[e,P]),H=(e,t,n)=>{N({uuid:e,characterName:t,date:n}),j(!0)};return I?(0,A.jsxs)(g,{children:[(0,A.jsx)(h,{children:(0,A.jsx)(l,{children:I.seasonName})}),(0,A.jsxs)(b,{children:[e(`pages.historyDetail.createdDate`),`: `,new Date(I.createdAt).toLocaleDateString(C,{year:`numeric`,month:`long`,day:`numeric`})]}),(0,A.jsxs)(re,{children:[(0,A.jsxs)(X,{children:[(0,A.jsx)(Z,{children:e(`pages.historyDetail.matchesCount`)}),(0,A.jsx)(Q,{children:z.totalMatches}),(0,A.jsx)($,{children:e(`pages.historyDetail.totalMatches`,{count:z.totalMatches})})]}),(0,A.jsxs)(X,{children:[(0,A.jsx)(Z,{children:e(`pages.historyDetail.results.win`)}),(0,A.jsx)(Q,{$type:`win`,children:z.wins}),(0,A.jsx)($,{children:z.totalMatches>0?`${(z.wins/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,A.jsxs)(X,{children:[(0,A.jsx)(Z,{children:e(`pages.historyDetail.results.defeat`)}),(0,A.jsx)(Q,{$type:`defeat`,children:z.defeats}),(0,A.jsx)($,{children:z.totalMatches>0?`${(z.defeats/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,A.jsxs)(X,{children:[(0,A.jsx)(Z,{children:e(`pages.historyDetail.winRate`)}),0<z.totalMatches?(0,A.jsxs)(Q,{$type:`winRate`,$winRate:z.winRate,children:[z.winRate.toFixed(1),`%`]}):(0,A.jsx)(Q,{children:`--%`}),(0,A.jsx)($,{children:e(`pages.historyDetail.overall`)})]})]}),(0,A.jsx)(c,{data:R,columns:V,rowHeight:66,overscan:5,height:`calc(100dvh - 380px)`,emptyText:e(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>(0,A.jsxs)(f,{children:[(0,A.jsx)(ie,{width:B.character,children:t.characterName}),(0,A.jsxs)(oe,{width:B.job,children:[(0,A.jsx)(S,{job:t.job,size:24}),(0,A.jsx)(se,{children:a[t.job].shortName})]}),(0,A.jsx)(ae,{width:B.date,children:w(t.recordedAt)}),(0,A.jsx)(y,{width:B.result,children:(0,A.jsx)(ce,{$isWin:t.isWin,children:t.isWin?e(`pages.historyDetail.results.win`):e(`pages.historyDetail.results.defeat`)})}),P&&(0,A.jsx)(y,{width:B.actions,children:(0,A.jsx)(le,{variant:`outline`,icon:(0,A.jsx)(m,{name:`delete`,size:16}),onClick:()=>H(t.uuid,t.characterName,w(t.recordedAt)),title:e(`match.deleteMatch`)})})]})}),(0,A.jsx)(ue,{children:(0,A.jsxs)(de,{variant:`outline`,size:`sm`,onClick:()=>o({to:`/histories`}),children:[(0,A.jsx)(m,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})}),P&&(0,A.jsx)(u,{isOpen:D,title:e(`match.confirmDelete`),confirmText:e(`match.confirmDeleteButton`),confirmType:`danger`,onClose:()=>{j(!1),N(null)},onConfirm:()=>{M&&P&&(x(M.uuid),j(!1),N(null))},children:e(`match.deleteConfirmation`,{characterName:M?.characterName,date:M?.date})})]}):(0,A.jsx)(g,{children:(0,A.jsx)(l,{children:e(`pages.historyDetail.notFound`)})})};var pe=n.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
`,me=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,he=n.form`
  background-color: ${({theme:e})=>e.colors.surface};
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,ge=n.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,_e=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,ve=n.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.isDark?`rgba(239, 68, 68, 0.15)`:`${e.colors.error[500]}20`};
  border: 1px solid ${({theme:e})=>e.isDark?`rgba(239, 68, 68, 0.3)`:`${e.colors.error[500]}40`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.isDark?`#fca5a5`:e.colors.error[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`,ye=n.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.isDark?`rgba(34, 197, 94, 0.15)`:`${e.colors.success[500]}20`};
  border: 1px solid ${({theme:e})=>e.isDark?`rgba(34, 197, 94, 0.3)`:`${e.colors.success[500]}40`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.isDark?`#86efac`:e.colors.success[500]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`;const be=()=>{let{t}=_();d(t(`pages.newSeason.title`));let n=C(),{createHistory:r,error:i,clearError:a,getSortedHistories:o}=T(),[s,c]=(0,k.useState)(``),[f,m]=(0,k.useState)(!1),[h,g]=(0,k.useState)(``),[v,y]=(0,k.useState)(``),[x,S]=(0,k.useState)(!1),w=async e=>{e.preventDefault();let n=s.trim();if(!n){g(t(`pages.newSeason.validationRequired`));return}if(n.length>50){g(t(`pages.newSeason.validationMaxLength`));return}if(g(``),o().length>0){S(!0);return}await E()},E=async()=>{m(!0),a();try{let e=s.trim(),i=r({seasonName:e});y(t(`pages.newSeason.successMessage`,{seasonName:i.seasonName})),setTimeout(()=>{n.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{m(!1),S(!1)}},D=()=>{E()},O=()=>{S(!1)},j=()=>{history.back()},M=e=>{c(e.target.value),h&&g(``)},N=o()[0]?.seasonName||``;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u,{isOpen:x,onClose:O,title:t(`pages.newSeason.confirmTitle`),confirmText:t(`pages.newSeason.create`),cancelText:t(`pages.newSeason.cancel`),onConfirm:D,confirmType:`danger`,isLoading:f,children:t(`pages.newSeason.confirmDescription`,{seasonName:N})}),(0,A.jsxs)(pe,{children:[(0,A.jsxs)(me,{children:[(0,A.jsx)(l,{children:t(`pages.newSeason.title`)}),(0,A.jsx)(b,{children:t(`pages.newSeason.description`)})]}),(0,A.jsxs)(he,{onSubmit:w,children:[(i||h)&&(0,A.jsx)(ve,{children:h||i}),v&&(0,A.jsx)(ye,{children:v}),(0,A.jsx)(ge,{children:(0,A.jsx)(e,{label:t(`pages.newSeason.seasonName`),type:`text`,value:s,onChange:M,placeholder:t(`pages.newSeason.seasonNamePlaceholder`),disabled:f||!!v,fullWidth:!0,required:!0})}),(0,A.jsxs)(_e,{children:[(0,A.jsx)(p,{type:`button`,variant:`outline`,onClick:j,disabled:f||!!v,children:t(`pages.newSeason.cancel`)}),(0,A.jsx)(p,{type:`submit`,disabled:f||!!v||!s.trim(),children:t(f?`pages.newSeason.creating`:`pages.newSeason.create`)})]})]})]})]})};export{ne as HistoriesPage,fe as HistoryDetailPage,U as HistoryTable,be as NewSeasonPage};