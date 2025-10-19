import{D as e,N as t,P as n,d as r,w as i,z as a}from"./index-Bvl7ejEb.js";var o=a(t()),s=n.div`
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
`,c=n.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,l=n.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,u=n.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`,d=n(e)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
`;const f=({onCreateSeason:e})=>{let{t}=r();return(0,o.jsxs)(s,{children:[(0,o.jsx)(c,{children:(0,o.jsx)(i,{name:`home`,size:32})}),(0,o.jsx)(l,{children:t(`pages.home.noSeason`)}),(0,o.jsx)(u,{children:t(`pages.home.createFirstSeason`)}),(0,o.jsxs)(d,{onClick:e,children:[(0,o.jsx)(i,{name:`add`,size:20,color:`white`}),t(`pages.home.createSeason`)]})]})};export{f as t};