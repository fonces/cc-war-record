import{G as e,H as t,I as n,J as r,M as i,N as a,O as o,P as s,U as c,V as l,Z as u,a as d,c as f,d as p,f as m,g as h,h as g,i as _,l as v,m as y,o as b,r as x,s as S,t as C,x as w}from"./index-BIqBZL1x.js";import{i as T,n as E,r as D,t as O}from"./colors-CgOSH3jX.js";import{t as k}from"./utils-ahtYqTut.js";var A=u(r()),j=u(e()),M=n(x)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${_}:hover &::before {
    opacity: 1;
  }

  ${_}:hover & {
    color: #26a1df;
  }
`,N=n(x)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,P=n(s)`
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
`,F=n(s)`
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
`,I=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
  align-items: center;
`,L=n.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,R=n.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,z=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,B=n.div`
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

  animation: ${m} 0.5s ease-out;
`,V=n.div`
  width: 80px;
  height: 80px;
  background: ${({theme:e})=>e.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[5]};
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.3);

  svg {
    color: ${({theme:e})=>e.colors.white};
  }
`,H=n.h3`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,ee=n.p`
  font-size: 0.9375rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 400px;
`;const U=({histories:e,isLoading:t=!1,onDelete:n})=>{let{t:r}=h(),a=l(),[o,c]=(0,A.useState)(!1),[u,f]=(0,A.useState)(null),m=(0,A.useMemo)(()=>({seasonName:void 0,date:`220px`,actions:`160px`}),[]),g=(0,A.useMemo)(()=>{let e=k();return[{key:`seasonName`,label:r(`pages.historyDetail.columns.season`),width:void 0},{key:`date`,label:r(`pages.historyDetail.columns.date`),width:`220px`},{key:`actions`,label:r(`match.actions`),width:`${160+e}px`}]},[r]),v=e=>{a({to:`/histories/${e}`})},y=(e,t)=>{f({uuid:e,seasonName:t}),c(!0)},b=()=>{c(!1),f(null)};return!t&&e.length===0?(0,j.jsxs)(B,{children:[(0,j.jsx)(V,{children:(0,j.jsx)(i,{name:`history`,size:24})}),(0,j.jsx)(H,{children:r(`pages.histories.emptyState`)}),(0,j.jsx)(ee,{children:r(`pages.histories.createFirstSeason`)})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d,{data:e,columns:g,rowHeight:68,overscan:5,height:`calc(100dvh - 320px)`,isLoading:t,loadingText:r(`common.loading`),emptyText:r(`pages.histories.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>{let n=t.uuid===e[0]?.uuid;return(0,j.jsxs)(_,{children:[(0,j.jsx)(M,{width:m.seasonName,children:t.seasonName}),(0,j.jsx)(N,{width:m.date,children:T(t.createdAt)}),(0,j.jsx)(x,{width:m.actions,children:(0,j.jsxs)(I,{children:[(0,j.jsx)(P,{variant:`outline`,icon:(0,j.jsx)(i,{name:`detail`,size:16}),onClick:()=>v(n?`current`:t.uuid),title:r(`pages.histories.detail`)}),(0,j.jsx)(F,{variant:`outline`,icon:(0,j.jsx)(i,{name:`delete`,size:16}),onClick:()=>y(t.uuid,t.seasonName),title:r(`pages.histories.delete`),disabled:n})]})})]})}}),(0,j.jsx)(p,{isOpen:o,onClose:b,title:r(`pages.histories.confirmDelete`),children:(0,j.jsxs)(L,{children:[(0,j.jsx)(R,{children:r(`pages.histories.deleteDescription`,{seasonName:u?.seasonName})}),(0,j.jsxs)(z,{children:[(0,j.jsx)(s,{variant:`outline`,onClick:b,children:r(`common.cancel`)}),(0,j.jsx)(s,{variant:`primary`,onClick:()=>{u&&(n(u.uuid),c(!1),f(null))},children:r(`character.confirmDelete`)})]})]})})]})};var W=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  animation: ${m} 0.5s ease-out;
`,G=n.div`
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
`,K=n.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,q=n.div`
  font-size: 1.875rem;
  font-weight: 700;
  background: ${({theme:e})=>e.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`,J=n.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,Y=n.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.isDark?`rgba(239, 68, 68, 0.15)`:`rgba(239, 68, 68, 0.1)`};
  backdrop-filter: ${({theme:e})=>e.blur.sm};
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  color: ${({theme:e})=>e.colors.error[600]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  box-shadow: ${({theme:e})=>e.shadows.md};
  animation: ${y} 0.3s ease-out;

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
  animation: ${m} 0.5s ease-out 0.1s both;
`;const ne=()=>{let{t:e,i18n:t}=h();g(e(`pages.histories.title`));let{histories:n,isLoading:r,error:i,getSortedHistories:a,deleteHistory:o,clearError:s}=E(),{matchRecords:c}=D(),l=a(),u=t.language===`ja`?`ja-JP`:t.language===`ko`?`ko-KR`:`en-US`;return(0,j.jsxs)(b,{children:[(0,j.jsx)(v,{children:(0,j.jsx)(f,{children:e(`pages.histories.title`)})}),(0,j.jsx)(S,{children:e(`pages.histories.description`)}),i&&(0,j.jsxs)(Y,{children:[(0,j.jsxs)(`div`,{children:[e(`common.error`),`: `,i]}),(0,j.jsx)(`button`,{onClick:s,children:e(`common.close`)})]}),n.length>0&&(0,j.jsxs)(W,{children:[(0,j.jsxs)(G,{children:[(0,j.jsx)(K,{children:e(`pages.histories.stats`)}),(0,j.jsx)(q,{children:n.length}),(0,j.jsx)(J,{children:e(`pages.histories.totalSeasons`,{count:n.length})})]}),(0,j.jsxs)(G,{children:[(0,j.jsx)(K,{children:e(`pages.histories.latestCreated`)}),(0,j.jsx)(q,{children:new Date(l[0]?.createdAt).toLocaleDateString(u,{month:`numeric`,day:`numeric`})}),(0,j.jsx)(J,{children:new Date(l[0]?.createdAt).toLocaleDateString(u,{year:`numeric`,month:`long`,day:`numeric`})})]})]}),(0,j.jsx)(te,{children:(0,j.jsx)(U,{histories:l,isLoading:r,onDelete:e=>{let t=c.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=D.getState();t.forEach(e=>{n(e.uuid)}),o(e),C(`histories`,`delete`)}})})]})};var re=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${m} 0.6s ease-out;
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

  ${({theme:e,$type:t,$winRate:n})=>t===`win`?`color: ${e.colors.win[400]};`:t===`defeat`?`color: ${e.colors.defeat[400]};`:t===`winRate`&&n!==void 0?`color: ${O(n,e,400)};`:`
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `}
`,$=n.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ie=n(x)`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  position: relative;
  padding-left: calc(${({theme:e})=>e.spacing[6]} + 8px);

  ${_}:hover & {
    color: #26a1df;
  }
`,ae=n(x)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`,oe=n(x)`
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

  ${_}:hover & {
    box-shadow: ${({$isWin:e})=>e?`0 4px 12px rgba(34, 197, 94, 0.2)`:`0 4px 12px rgba(239, 68, 68, 0.2)`};
  }
`,le=n(s)`
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
  animation: ${m} 0.6s ease-out 0.2s backwards;
`,de=n(s)`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({theme:e})=>e.isDark?`rgba(38, 161, 223, 0.15)`:`rgba(38, 161, 223, 0.1)`};
    border-color: ${({theme:e})=>e.colors.primary[400]};
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.15);
  }
`;const fe=()=>{let{t:e,i18n:n}=h(),{id:r}=t({from:`/histories/$id`}),a=l(),{getHistoryByUuid:s,getMatchRecordsForSeason:c,histories:u}=E(),{deleteMatchRecord:m}=D(),y=n.language===`ja`?`ja-JP`:n.language===`ko`?`ko-KR`:`en-US`,[C,O]=(0,A.useState)(!1),[M,N]=(0,A.useState)(null),P=r===`current`,F=(0,A.useMemo)(()=>u[0],[u]),I=(0,A.useMemo)(()=>P?F:s(r),[P,F,r,s]);g(I?e(`pages.historyDetail.title`,{seasonName:I.seasonName}):e(`pages.historyDetail.title`,{seasonName:``}));let L=(0,A.useMemo)(()=>{if(P){let{matchRecords:e}=D.getState();return e}return c(r)},[P,r,c]),R=(0,A.useMemo)(()=>{if(!I)return[];let e=[];return L.forEach(t=>{let n=`不明`;if(P){let{characters:e}=D.getState();n=e.find(e=>e.uuid===t.characterUuid)?.name||`不明`}else n=I.characterStats.find(e=>e.character.uuid===t.characterUuid)?.character.name||`不明`;e.push({...t,characterName:n})}),P||I.characterStats.forEach(t=>{t.recentMatches.forEach(n=>{e.some(e=>e.uuid===n.uuid)||e.push({...n,characterName:t.character.name})})}),e.sort((e,t)=>new Date(t.recordedAt).getTime()-new Date(e.recordedAt).getTime())},[I,L,P]),z=(0,A.useMemo)(()=>{let e=R.length,t=R.filter(e=>e.isWin).length,n=e-t,r=e>0?t/e*100:0;return{totalMatches:e,wins:t,defeats:n,winRate:r}},[R]),B=(0,A.useMemo)(()=>({character:void 0,job:`120px`,date:`180px`,result:`108px`,actions:`84px`}),[]),V=(0,A.useMemo)(()=>{let t=k(),n=[{key:`character`,label:e(`pages.historyDetail.columns.character`),width:void 0},{key:`job`,label:e(`pages.historyDetail.columns.job`),width:`120px`},{key:`date`,label:e(`pages.historyDetail.columns.date`),width:`180px`},{key:`result`,label:e(`pages.historyDetail.columns.result`),width:P?`108px`:`${108+t}px`}];return P&&n.push({key:`actions`,label:e(`match.actions`),width:P?`${84+t}px`:`84px`}),n},[e,P]),H=(e,t,n)=>{N({uuid:e,characterName:t,date:n}),O(!0)};return I?(0,j.jsxs)(b,{children:[(0,j.jsx)(v,{children:(0,j.jsx)(f,{children:I.seasonName})}),(0,j.jsxs)(S,{children:[e(`pages.historyDetail.createdDate`),`: `,new Date(I.createdAt).toLocaleDateString(y,{year:`numeric`,month:`long`,day:`numeric`})]}),(0,j.jsxs)(re,{children:[(0,j.jsxs)(X,{children:[(0,j.jsx)(Z,{children:e(`pages.historyDetail.matchesCount`)}),(0,j.jsx)(Q,{children:z.totalMatches}),(0,j.jsx)($,{children:e(`pages.historyDetail.totalMatches`,{count:z.totalMatches})})]}),(0,j.jsxs)(X,{children:[(0,j.jsx)(Z,{children:e(`pages.historyDetail.results.win`)}),(0,j.jsx)(Q,{$type:`win`,children:z.wins}),(0,j.jsx)($,{children:z.totalMatches>0?`${(z.wins/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,j.jsxs)(X,{children:[(0,j.jsx)(Z,{children:e(`pages.historyDetail.results.defeat`)}),(0,j.jsx)(Q,{$type:`defeat`,children:z.defeats}),(0,j.jsx)($,{children:z.totalMatches>0?`${(z.defeats/z.totalMatches*100).toFixed(1)}%`:`0%`})]}),(0,j.jsxs)(X,{children:[(0,j.jsx)(Z,{children:e(`pages.historyDetail.winRate`)}),0<z.totalMatches?(0,j.jsxs)(Q,{$type:`winRate`,$winRate:z.winRate,children:[z.winRate.toFixed(1),`%`]}):(0,j.jsx)(Q,{children:`--%`}),(0,j.jsx)($,{children:e(`pages.historyDetail.overall`)})]})]}),(0,j.jsx)(d,{data:R,columns:V,rowHeight:66,overscan:5,height:`calc(100dvh - 380px)`,emptyText:e(`pages.historyDetail.emptyState`),getRowKey:e=>e.uuid,renderRow:t=>(0,j.jsxs)(_,{children:[(0,j.jsx)(ie,{width:B.character,children:t.characterName}),(0,j.jsxs)(oe,{width:B.job,children:[(0,j.jsx)(w,{job:t.job,size:24}),(0,j.jsx)(se,{children:o[t.job].shortName})]}),(0,j.jsx)(ae,{width:B.date,children:T(t.recordedAt)}),(0,j.jsx)(x,{width:B.result,children:(0,j.jsx)(ce,{$isWin:t.isWin,children:t.isWin?e(`pages.historyDetail.results.win`):e(`pages.historyDetail.results.defeat`)})}),P&&(0,j.jsx)(x,{width:B.actions,children:(0,j.jsx)(le,{variant:`outline`,icon:(0,j.jsx)(i,{name:`delete`,size:16}),onClick:()=>H(t.uuid,t.characterName,T(t.recordedAt)),title:e(`match.deleteMatch`)})})]})}),(0,j.jsx)(ue,{children:(0,j.jsxs)(de,{variant:`outline`,size:`sm`,onClick:()=>a({to:`/histories`}),children:[(0,j.jsx)(i,{name:`back`,size:16}),e(`pages.historyDetail.backToList`)]})}),P&&(0,j.jsx)(p,{isOpen:C,title:e(`match.confirmDelete`),confirmText:e(`match.confirmDeleteButton`),confirmType:`danger`,onClose:()=>{O(!1),N(null)},onConfirm:()=>{M&&P&&(m(M.uuid),O(!1),N(null))},children:e(`match.deleteConfirmation`,{characterName:M?.characterName,date:M?.date})})]}):(0,j.jsx)(b,{children:(0,j.jsx)(f,{children:e(`pages.historyDetail.notFound`)})})};var pe=n.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
  animation: ${m} 0.6s ease-out;
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
`;const be=()=>{let{t:e}=h();g(e(`pages.newSeason.title`));let t=c(),{createHistory:n,error:r,clearError:i,getSortedHistories:o}=E(),[l,u]=(0,A.useState)(``),[d,m]=(0,A.useState)(!1),[_,v]=(0,A.useState)(``),[y,b]=(0,A.useState)(``),[x,C]=(0,A.useState)(!1),w=async t=>{t.preventDefault();let n=l.trim();if(!n){v(e(`pages.newSeason.validationRequired`));return}if(n.length>50){v(e(`pages.newSeason.validationMaxLength`));return}if(v(``),o().length>0){C(!0);return}await T()},T=async()=>{m(!0),i();try{let r=l.trim(),i=n({seasonName:r});b(e(`pages.newSeason.successMessage`,{seasonName:i.seasonName})),setTimeout(()=>{t.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{m(!1),C(!1)}},D=()=>{T()},O=()=>{C(!1)},k=()=>{history.back()},M=e=>{u(e.target.value),_&&v(``)},N=o()[0]?.seasonName||``;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p,{isOpen:x,onClose:O,title:e(`pages.newSeason.confirmTitle`),confirmText:e(`pages.newSeason.create`),cancelText:e(`pages.newSeason.cancel`),onConfirm:D,confirmType:`danger`,isLoading:d,children:e(`pages.newSeason.confirmDescription`,{seasonName:N})}),(0,j.jsxs)(pe,{children:[(0,j.jsxs)(me,{children:[(0,j.jsx)(f,{children:e(`pages.newSeason.title`)}),(0,j.jsx)(S,{children:e(`pages.newSeason.description`)})]}),(0,j.jsxs)(he,{onSubmit:w,children:[(r||_)&&(0,j.jsx)(ve,{children:_||r}),y&&(0,j.jsx)(ye,{children:y}),(0,j.jsx)(ge,{children:(0,j.jsx)(a,{label:e(`pages.newSeason.seasonName`),type:`text`,value:l,onChange:M,placeholder:e(`pages.newSeason.seasonNamePlaceholder`),disabled:d||!!y,fullWidth:!0,required:!0})}),(0,j.jsxs)(_e,{children:[(0,j.jsx)(s,{type:`button`,variant:`outline`,onClick:k,disabled:d||!!y,children:e(`pages.newSeason.cancel`)}),(0,j.jsx)(s,{type:`submit`,disabled:d||!!y||!l.trim(),children:e(d?`pages.newSeason.creating`:`pages.newSeason.create`)})]})]})]})]})};export{ne as HistoriesPage,fe as HistoryDetailPage,U as HistoryTable,be as NewSeasonPage};