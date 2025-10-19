import{C as e,E as t,M as n,N as r,u as i,z as a}from"./index-ctg_uAAC.js";var o=a(n()),s=r.div`
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
`,c=r.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:e})=>e.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,l=r.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,u=r.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`,d=r(t)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 1.1rem;
`;const f=({onCreateSeason:t})=>{let{t:n}=i();return(0,o.jsxs)(s,{children:[(0,o.jsx)(c,{children:(0,o.jsx)(e,{name:`home`,size:32})}),(0,o.jsx)(l,{children:n(`pages.home.noSeason`)}),(0,o.jsx)(u,{children:n(`pages.home.createFirstSeason`)}),(0,o.jsxs)(d,{onClick:t,children:[(0,o.jsx)(e,{name:`add`,size:20,color:`white`}),n(`pages.home.createSeason`)]})]})},p=(e,t)=>e>=51?t.colors.success[600]:e>=40?t.colors.warning[600]:t.colors.error[600];export{f as n,p as t};