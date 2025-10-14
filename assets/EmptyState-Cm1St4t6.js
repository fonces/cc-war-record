import{L as e,M as t,S as n,T as r,j as i}from"./index-D_meSxiB.js";var a=e(i()),o=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,s=t.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,c=t.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,l=t.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`,u=t(r)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
`;const d=({onCreateSeason:e})=>(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{children:(0,a.jsx)(n,{name:`home`,size:32})}),(0,a.jsx)(c,{children:`まだシーズンが作成されていません`}),(0,a.jsx)(l,{children:`戦績を記録するために、まず最初のシーズンを作成してください。 シーズン名を設定して、勝敗の記録を開始できます。`}),(0,a.jsxs)(u,{onClick:e,children:[(0,a.jsx)(n,{name:`add`,size:20,color:`white`}),`シーズンを作成する`]})]});export{d as t};