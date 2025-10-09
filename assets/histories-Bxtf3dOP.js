import{C as e,D as t,E as n,L as r,M as i,O as a,P as o,T as s,f as c,i as l,j as u,n as d,o as f,p,r as m,s as h,t as g}from"./index-Br5uo2xh.js";var _=r(o()),v=r(u()),y=i.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
`,b=i.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`,x=i.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,S=i.th`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[700]};
  white-space: nowrap;

  &:last-child {
    text-align: center;
    width: 120px;
  }
`,C=i.tbody``,w=i.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }

  &:last-child {
    border-bottom: none;
  }
`,T=i.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};

  &:last-child {
    text-align: center;
  }
`,E=i(T)`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,D=i(T)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`,O=i(n)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
  }
`,k=i(n)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.error};
  }
`,A=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
`,j=i.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,M=i.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,N=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,P=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,F=i.div`
  width: 64px;
  height: 64px;
  background-color: ${({theme:e})=>e.colors.gray[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,I=i.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,L=i.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,R=i(w)`
  &:hover {
    background-color: transparent;
  }
`,z=i(T)`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
`;const B=({histories:r,isLoading:i=!1,onDelete:a})=>{let o=t(),[s,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(null),f=e=>{o({to:`/histories/${e}`})},m=(e,t)=>{d({uuid:e,seasonName:t}),l(!0)},h=()=>{l(!1),d(null)};return i?(0,v.jsx)(y,{children:(0,v.jsxs)(b,{children:[(0,v.jsx)(x,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(S,{children:`シーズン名`}),(0,v.jsx)(S,{children:`作成日時`}),(0,v.jsx)(S,{children:`詳細`})]})}),(0,v.jsx)(C,{children:(0,v.jsx)(R,{children:(0,v.jsx)(z,{colSpan:3,children:`読み込み中...`})})})]})}):r.length===0?(0,v.jsxs)(P,{children:[(0,v.jsx)(F,{children:(0,v.jsx)(e,{name:`history`,size:24})}),(0,v.jsx)(I,{children:`履歴がありません`}),(0,v.jsxs)(L,{children:[`シーズンの履歴がまだ作成されていません。`,(0,v.jsx)(`br`,{}),`新しいシーズンを作成してください。`]})]}):(0,v.jsxs)(y,{children:[(0,v.jsxs)(b,{children:[(0,v.jsx)(x,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(S,{children:`シーズン名`}),(0,v.jsx)(S,{children:`作成日時`}),(0,v.jsx)(S,{children:`操作`})]})}),(0,v.jsx)(C,{children:r.map(t=>(0,v.jsxs)(w,{children:[(0,v.jsx)(E,{children:t.seasonName}),(0,v.jsx)(D,{children:c(t.createdAt)}),(0,v.jsx)(T,{children:(0,v.jsxs)(A,{children:[(0,v.jsx)(O,{variant:`outline`,icon:(0,v.jsx)(e,{name:`detail`,size:16}),onClick:()=>f(t.uuid),title:`${t.seasonName}の詳細を表示`}),(0,v.jsx)(k,{variant:`outline`,icon:(0,v.jsx)(e,{name:`delete`,size:16}),onClick:()=>m(t.uuid,t.seasonName),title:`${t.seasonName}を削除`})]})})]},t.uuid))})]}),(0,v.jsx)(p,{isOpen:s,onClose:h,title:`シーズンの削除`,children:(0,v.jsxs)(j,{children:[(0,v.jsxs)(M,{children:[`「`,u?.seasonName,`」を削除してもよろしいですか？`,(0,v.jsx)(`br`,{}),`この操作は取り消すことができません。`]}),(0,v.jsxs)(N,{children:[(0,v.jsx)(n,{variant:`outline`,onClick:h,children:`キャンセル`}),(0,v.jsx)(n,{variant:`primary`,onClick:()=>{u&&(a(u.uuid),l(!1),d(null))},children:`削除する`})]})]})})]})};var V=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,H=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,U=i.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,W=i.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,G=i.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.error}20;
  border: 1px solid ${({theme:e})=>e.colors.error}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
`;const K=()=>{let{histories:e,isLoading:t,error:n,getSortedHistories:r,deleteHistory:i,clearError:a}=h(),{matchRecords:o}=f(),s=r();return(0,v.jsxs)(g,{children:[(0,v.jsx)(l,{children:(0,v.jsx)(m,{children:`シーズン履歴一覧`})}),(0,v.jsx)(d,{children:`過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。`}),n&&(0,v.jsxs)(G,{children:[(0,v.jsxs)(`div`,{children:[`エラー: `,n]}),(0,v.jsx)(`button`,{onClick:a,style:{marginTop:`8px`,textDecoration:`underline`},children:`エラーを閉じる`})]}),(0,v.jsx)(V,{children:(0,v.jsxs)(H,{children:[(0,v.jsxs)(U,{children:[`総シーズン数: `,(0,v.jsxs)(W,{children:[e.length,`件`]})]}),e.length>0&&(0,v.jsxs)(U,{children:[`最新作成: `,(0,v.jsx)(W,{children:new Date(s[0]?.createdAt).toLocaleDateString(`ja-JP`)})]})]})}),(0,v.jsx)(B,{histories:s,isLoading:t,onDelete:e=>{let t=o.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=f.getState();t.forEach(e=>{n(e.uuid)}),i(e)}})]})},q=()=>(0,v.jsx)(g,{children:(0,v.jsx)(m,{children:`Do Something...`})});var J=i.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
`,Y=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,X=i.form`
  background-color: white;
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,Z=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Q=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,$=i.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.error}20;
  border: 1px solid ${({theme:e})=>e.colors.error}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`,ee=i.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.success}20;
  border: 1px solid ${({theme:e})=>e.colors.success}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`;const te=()=>{let e=a(),{createHistory:t,error:r,clearError:i,getSortedHistories:o}=h(),[c,l]=(0,_.useState)(``),[u,f]=(0,_.useState)(!1),[g,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(``),[S,C]=(0,_.useState)(!1),w=async e=>{e.preventDefault();let t=c.trim();if(!t){y(`シーズン名を入力してください`);return}if(t.length>50){y(`シーズン名は50文字以内で入力してください`);return}if(y(``),o().length>0){C(!0);return}await T()},T=async()=>{f(!0),i();try{let n=c.trim(),r=t({seasonName:n});x(`シーズン「${r.seasonName}」を作成しました`),setTimeout(()=>{e.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{f(!1),C(!1)}},E=()=>{T()},D=()=>{C(!1)},O=()=>{history.back()},k=e=>{l(e.target.value),g&&y(``)},A=o()[0]?.seasonName||``;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p,{isOpen:S,onClose:D,title:`シーズン作成の確認`,confirmText:`作成する`,cancelText:`キャンセル`,onConfirm:E,confirmType:`danger`,isLoading:u,children:[`新しいシーズンを作成すると「`,A,`」の戦績はアーカイブされ、戦績を入力することができなくなります。よろしいでしょうか?`]}),(0,v.jsxs)(J,{children:[(0,v.jsxs)(Y,{children:[(0,v.jsx)(m,{children:`新規シーズン作成`}),(0,v.jsx)(d,{children:`新しいシーズンを作成します。シーズン名を入力してください。`})]}),(0,v.jsxs)(X,{onSubmit:w,children:[(r||g)&&(0,v.jsx)($,{children:g||r}),b&&(0,v.jsx)(ee,{children:b}),(0,v.jsx)(Z,{children:(0,v.jsx)(s,{label:`シーズン名`,type:`text`,value:c,onChange:k,placeholder:`例: シーズン1`,disabled:u||!!b,fullWidth:!0,required:!0})}),(0,v.jsxs)(Q,{children:[(0,v.jsx)(n,{type:`button`,variant:`outline`,onClick:O,disabled:u||!!b,children:`キャンセル`}),(0,v.jsx)(n,{type:`submit`,disabled:u||!!b||!c.trim(),children:u?`作成中...`:`作成する`})]})]})]})]})};export{q as n,K as r,te as t};