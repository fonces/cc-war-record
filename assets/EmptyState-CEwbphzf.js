import{C as e,E as t,L as n,M as r,j as i}from"./index-TE-ChR4G.js";var a=n(i()),o=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]}
    ${({theme:e})=>e.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`,s=r.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,c=r.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,l=r.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`,u=r(t)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[8]};
`;const d=({onCreateSeason:t})=>(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{children:(0,a.jsx)(e,{name:`home`,size:32})}),(0,a.jsx)(c,{children:`まだシーズンが作成されていません`}),(0,a.jsx)(l,{children:`戦績を記録するために、まず最初のシーズンを作成してください。 シーズン名を設定して、勝敗の記録を開始できます。`}),(0,a.jsxs)(u,{onClick:t,children:[(0,a.jsx)(e,{name:`add`,size:20,color:`white`}),`シーズンを作成する`]})]});export{d as t};