import{C as e,E as t,_ as n,a as r,b as i,h as a,i as o,k as s,n as c,r as l,v as u,w as d,y as f}from"./index-XOscuVPe.js";var p=s(t()),m=s(e()),h=d.div`
  overflow-x: auto;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  background-color: ${({theme:e})=>e.colors.gray[50]};
`,g=d.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`,_=d.thead`
  background-color: ${({theme:e})=>e.colors.gray[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,v=d.th`
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
`,y=d.tbody``,b=d.tr`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray[50]};
  }

  &:last-child {
    border-bottom: none;
  }
`,x=d.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.gray[900]};

  &:last-child {
    text-align: center;
  }
`,S=d(x)`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text};
`,C=d(x)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-family: 'Courier New', monospace;
  white-space: nowrap;
`,w=d(u)`
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
`,T=d(u)`
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
`,E=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-content: center;
`,D=d.div`
  padding: ${({theme:e})=>e.spacing[6]};
`,O=d.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,k=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: flex-end;
`,A=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
`,j=d.div`
  width: 64px;
  height: 64px;
  background-color: ${({theme:e})=>e.colors.gray[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,M=d.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.gray[900]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,N=d.p`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,P=d(b)`
  &:hover {
    background-color: transparent;
  }
`,F=d(x)`
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-style: italic;
`;const I=({histories:e,isLoading:t=!1,onDelete:n})=>{let i=f(),[s,c]=(0,p.useState)(!1),[l,d]=(0,p.useState)(null),I=e=>{i({to:`/histories/${e}`})},L=(e,t)=>{d({uuid:e,seasonName:t}),c(!0)},R=()=>{c(!1),d(null)};return t?(0,m.jsx)(h,{children:(0,m.jsxs)(g,{children:[(0,m.jsx)(_,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(v,{children:`シーズン名`}),(0,m.jsx)(v,{children:`作成日時`}),(0,m.jsx)(v,{children:`詳細`})]})}),(0,m.jsx)(y,{children:(0,m.jsx)(P,{children:(0,m.jsx)(F,{colSpan:3,children:`読み込み中...`})})})]})}):e.length===0?(0,m.jsxs)(A,{children:[(0,m.jsx)(j,{children:(0,m.jsx)(a,{name:`history`,size:24})}),(0,m.jsx)(M,{children:`履歴がありません`}),(0,m.jsxs)(N,{children:[`シーズンの履歴がまだ作成されていません。`,(0,m.jsx)(`br`,{}),`新しいシーズンを作成してください。`]})]}):(0,m.jsxs)(h,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(_,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(v,{children:`シーズン名`}),(0,m.jsx)(v,{children:`作成日時`}),(0,m.jsx)(v,{children:`操作`})]})}),(0,m.jsx)(y,{children:e.map(e=>(0,m.jsxs)(b,{children:[(0,m.jsx)(S,{children:e.seasonName}),(0,m.jsx)(C,{children:o(e.createdAt)}),(0,m.jsx)(x,{children:(0,m.jsxs)(E,{children:[(0,m.jsx)(w,{variant:`outline`,icon:(0,m.jsx)(a,{name:`detail`,size:16}),onClick:()=>I(e.uuid),title:`${e.seasonName}の詳細を表示`}),(0,m.jsx)(T,{variant:`outline`,icon:(0,m.jsx)(a,{name:`delete`,size:16}),onClick:()=>L(e.uuid,e.seasonName),title:`${e.seasonName}を削除`})]})})]},e.uuid))})]}),(0,m.jsx)(r,{isOpen:s,onClose:R,title:`シーズンの削除`,children:(0,m.jsxs)(D,{children:[(0,m.jsxs)(O,{children:[`「`,l?.seasonName,`」を削除してもよろしいですか？`,(0,m.jsx)(`br`,{}),`この操作は取り消すことができません。`]}),(0,m.jsxs)(k,{children:[(0,m.jsx)(u,{variant:`outline`,onClick:R,children:`キャンセル`}),(0,m.jsx)(u,{variant:`primary`,onClick:()=>{l&&(n(l.uuid),c(!1),d(null))},children:`削除する`})]})]})})]})};var L=d.div`
  padding: ${({theme:e})=>e.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`,R=d.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,z=d.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.text};
`,B=d.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,V=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,H=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,U=d.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,W=d.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
`,G=d.div`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  background-color: ${({theme:e})=>e.colors.error}20;
  border: 1px solid ${({theme:e})=>e.colors.error}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  font-size: 0.875rem;
`;const K=()=>{let{histories:e,isLoading:t,error:n,getSortedHistories:r,deleteHistory:i,clearError:a}=l(),{matchRecords:o}=c(),s=r();return(0,m.jsxs)(L,{children:[(0,m.jsxs)(R,{children:[(0,m.jsx)(z,{children:`シーズン履歴一覧`}),(0,m.jsx)(B,{children:`過去のシーズンの一覧を表示・管理します。各シーズンの詳細は詳細ボタンから確認できます。`})]}),n&&(0,m.jsxs)(G,{children:[(0,m.jsxs)(`div`,{children:[`エラー: `,n]}),(0,m.jsx)(`button`,{onClick:a,style:{marginTop:`8px`,textDecoration:`underline`},children:`エラーを閉じる`})]}),(0,m.jsx)(V,{children:(0,m.jsxs)(H,{children:[(0,m.jsxs)(U,{children:[`総シーズン数: `,(0,m.jsxs)(W,{children:[e.length,`件`]})]}),e.length>0&&(0,m.jsxs)(U,{children:[`最新作成: `,(0,m.jsx)(W,{children:new Date(s[0]?.createdAt).toLocaleDateString(`ja-JP`)})]})]})}),(0,m.jsx)(I,{histories:s,isLoading:t,onDelete:e=>{let t=o.filter(t=>t.seasonUuid===e),{deleteMatchRecord:n}=c.getState();t.forEach(e=>{n(e.uuid)}),i(e)}})]})};var q=d.div`
  padding: 2rem;
`,J=d.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors.text};
`;const Y=()=>(0,m.jsx)(q,{children:(0,m.jsx)(J,{children:`飽きた`})});var X=d.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
`,Z=d.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,Q=d.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.colors.text};
`,$=d.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
`,ee=d.form`
  background-color: white;
  padding: ${({theme:e})=>e.spacing[8]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,te=d.div`
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,ne=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,re=d.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.error}20;
  border: 1px solid ${({theme:e})=>e.colors.error}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.error};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`,ie=d.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.success}20;
  border: 1px solid ${({theme:e})=>e.colors.success}40;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.success};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  font-size: 0.875rem;
`;const ae=()=>{let e=i(),{createHistory:t,error:a,clearError:o,getSortedHistories:s}=l(),[c,d]=(0,p.useState)(``),[f,h]=(0,p.useState)(!1),[g,_]=(0,p.useState)(``),[v,y]=(0,p.useState)(``),[b,x]=(0,p.useState)(!1),S=async e=>{e.preventDefault();let t=c.trim();if(!t){_(`シーズン名を入力してください`);return}if(t.length>50){_(`シーズン名は50文字以内で入力してください`);return}if(_(``),s().length>0){x(!0);return}await C()},C=async()=>{h(!0),o();try{let n=c.trim(),r=t({seasonName:n});y(`シーズン「${r.seasonName}」を作成しました`),setTimeout(()=>{e.navigate({to:`/`})},1500)}catch(e){console.error(`シーズン作成エラー:`,e)}finally{h(!1),x(!1)}},w=()=>{C()},T=()=>{x(!1)},E=()=>{history.back()},D=e=>{d(e.target.value),g&&_(``)},O=s()[0]?.seasonName||``;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r,{isOpen:b,onClose:T,title:`シーズン作成の確認`,confirmText:`作成する`,cancelText:`キャンセル`,onConfirm:w,confirmType:`danger`,isLoading:f,children:[`新しいシーズンを作成すると「`,O,`」の戦績はアーカイブされ、戦績を入力することができなくなります。よろしいでしょうか?`]}),(0,m.jsxs)(X,{children:[(0,m.jsxs)(Z,{children:[(0,m.jsx)(Q,{children:`新規シーズン作成`}),(0,m.jsx)($,{children:`新しいシーズンを作成します。シーズン名を入力してください。`})]}),(0,m.jsxs)(ee,{onSubmit:S,children:[(a||g)&&(0,m.jsx)(re,{children:g||a}),v&&(0,m.jsx)(ie,{children:v}),(0,m.jsx)(te,{children:(0,m.jsx)(n,{label:`シーズン名`,type:`text`,value:c,onChange:D,placeholder:`例: シーズン1`,disabled:f||!!v,fullWidth:!0,required:!0})}),(0,m.jsxs)(ne,{children:[(0,m.jsx)(u,{type:`button`,variant:`outline`,onClick:E,disabled:f||!!v,children:`キャンセル`}),(0,m.jsx)(u,{type:`submit`,disabled:f||!!v||!c.trim(),children:f?`作成中...`:`作成する`})]})]})]})]})};export{Y as n,K as r,ae as t};