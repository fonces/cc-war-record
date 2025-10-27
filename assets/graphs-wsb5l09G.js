import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,x as n}from"./react-vendor-D1pS86Oe.js";import{n as r,o as i}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import"./i18n-THkEc1_o.js";import{B as a,D as o,E as s,F as c,H as l,I as u,L as d,R as f,S as p,U as m,_ as h,a as g,et as ee,g as _,tt as v,v as te,w as y,x as b,y as x}from"./index-Cvv8WDLt.js";import{_ as S,a as ne,b as C,c as w,d as T,f as E,g as re,h as D,i as ie,l as ae,m as O,n as k,o as A,p as j,r as M,s as N,t as oe,u as P,v as F,y as I}from"./recharts-DSbpEn03.js";import{n as L,t as R}from"./stores-CNhZG_iC.js";var z=e(t());const B=[{index:0,short:`Sun`,name:`日曜日`},{index:1,short:`Mon`,name:`月曜日`},{index:2,short:`Tue`,name:`火曜日`},{index:3,short:`Wed`,name:`水曜日`},{index:4,short:`Thu`,name:`木曜日`},{index:5,short:`Fri`,name:`金曜日`},{index:6,short:`Sat`,name:`土曜日`}],V=(e,t,n,r,i)=>{let a=new Date(e.createdAt),o=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)),s=new Date(a);s.setMonth(s.getMonth()+2);let c=o.reduce((e,t)=>{let n=new Date(t.recordedAt);return n>e?n:e},new Date(a)),l=c>s?c:s,u=[],d=new Date(a);for(;d<=l;)u.push(d.toISOString().split(`T`)[0]),d.setDate(d.getDate()+1);let f=new Map;return u.forEach(e=>{f.set(e,{wins:0,defeats:0})}),o.forEach(e=>{let t=e.recordedAt.split(`T`)[0];if(f.has(t)){let n=f.get(t);e.isWin?n.wins++:n.defeats++}}),u.map(e=>{let[,t,n]=e.split(`-`),r=`${parseInt(t)}/${parseInt(n)}`,i=f.get(e),a=i.wins+i.defeats,o=a>0?Math.round(i.wins/a*100):null;return{date:r,fullDate:e,Win:i.wins,Defeat:i.defeats,WinRate:o}})},H=(e,t,n,r,i)=>{let a=new Map;return B.forEach(e=>{a.set(e.index,{wins:0,defeats:0,total:0})}),t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)).forEach(e=>{let t=new Date(e.recordedAt).getDay();if(a.has(t)){let n=a.get(t);n.total++,e.isWin?n.wins++:n.defeats++}}),B.map(e=>{let t=a.get(e.index),n=t.total>0?Math.round(t.wins/t.total*100):null,r=t.total>0?Math.round(t.defeats/t.total*100):null;return{weekday:e.short,weekdayName:e.name,weekdayIndex:e.index,winRate:n,defeatRate:r,wins:t.wins,defeats:t.defeats,total:t.total}})},U=(e,t,n,r,i,a)=>{let o=Array.from({length:24},(e,t)=>t),s=new Map;return o.forEach(e=>{s.set(e,{wins:0,defeats:0,total:0})}),t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)).forEach(e=>{let t=new Date(e.recordedAt).getHours();if(s.has(t)){let n=s.get(t);n.total++,e.isWin?n.wins++:n.defeats++}}),o.map(e=>{let t=s.get(e),n=t.total>0?Math.round(t.wins/t.total*100):0,r=t.total>0?Math.round(t.defeats/t.total*100):0;return{hour:a(`chart.hour`,{hour:e}),winRate:n,defeatRate:r,wins:t.wins,defeats:t.defeats,total:t.total}})},W=(e,t,n,r,i)=>{let a=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.map!==r)),o=new Map;a.forEach(e=>{let t=o.get(e.job)||0;o.set(e.job,t+1)});let s=a.length;return Array.from(o.entries()).map(([e,t])=>({name:i(`job.${e}`),job:e,value:t,percentage:s>0?Math.round(t/s*100):0})).sort((e,t)=>t.value-e.value)},G=(e,t,n,r,i)=>{let a=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r.length>0&&!r.includes(t.job))),o=new Map;return a.forEach(e=>{o.has(e.map)||o.set(e.map,new Map);let t=o.get(e.map);t.has(e.job)||t.set(e.job,{wins:0,total:0});let n=t.get(e.job);n.total++,e.isWin&&n.wins++}),Object.values(u).map(e=>{let t={map:c(e,i),fullMark:100};return r.forEach(n=>{let r=o.get(e)?.get(n);r&&r.total>0?t[n]=Math.round(r.wins/r.total*100):t[n]=0}),t})},K=r.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  padding: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transition: all ${({theme:e})=>e.transitions.base};
  position: relative;
  overflow: hidden;
  animation: ${y} 0.6s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({theme:e})=>e.gradients.primary};
  }

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows[`2xl`]}, ${({theme:e})=>e.shadows.glow};
    border-color: ${({theme:e})=>e.colors.border};
  }

  /* Recharts要素のフォーカスoutlineを打ち消し */
  .recharts-layer:focus,
  .recharts-layer path:focus,
  .recharts-surface:focus {
    outline: none;
  }
`,q=r.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,J=r.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: ${({theme:e})=>e.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${y} 0.5s ease-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${({theme:e})=>e.gradients.primary};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    opacity: 0.6;
  }
`,Y=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;var X=e(n()),se=r.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>`${e.blur.md} brightness(${e.isDark?`0%`:`100%`})`};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[3]};
  box-shadow:
    ${({theme:e})=>e.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);

  .label {
    font-weight: 600;
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .value {
    font-size: 0.875rem;
    margin: ${({theme:e})=>e.spacing[1]} 0;
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .dot-win {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.win[400]};
  }

  .dot-defeat {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.defeat[400]};
  }

  .dot-gradient {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }
`,ce=({active:e,payload:t,label:n})=>!e||!t?null:(0,X.jsxs)(se,{children:[(0,X.jsx)(`div`,{className:`label`,children:n}),t.map((e,t)=>(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:e.name===`Win`?`dot-win`:e.name===`Defeat`?`dot-defeat`:e.name===`WinRate`?`dot-gradient`:``}),(0,X.jsxs)(`span`,{children:[e.name,`: `,typeof e.value==`number`&&e.name===`WinRate`?`${e.value.toFixed(1)}%`:e.value]})]},t))]});const le=(0,z.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=o(),[s,d]=(0,z.useState)(null),[f,p]=(0,z.useState)(null),[m,h]=(0,z.useState)(null),g=(0,z.useMemo)(()=>V(e,t,s,f,m),[e,t,s,f,m]);return(0,X.jsxs)(K,{children:[(0,X.jsxs)(q,{children:[(0,X.jsx)(J,{children:a(`chart.titles.dailyWinDefeat`)}),(0,X.jsxs)(Y,{children:[(0,X.jsx)(v,{label:a(`chart.labels.character`),id:`character-filter`,value:s||``,onChange:e=>d(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.job`),id:`job-filter`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(l).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.map`),id:`map-filter`,value:m||``,onChange:e=>h(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:c(e,a)}))],width:`200px`})]})]}),(0,X.jsx)(F,{width:`100%`,height:400,children:(0,X.jsxs)(oe,{data:g,margin:{top:20,right:20,left:20,bottom:-28},children:[(0,X.jsxs)(`defs`,{children:[(0,X.jsxs)(`linearGradient`,{id:`colorWin`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,X.jsx)(`stop`,{offset:`5%`,stopColor:r.colors.win[400],stopOpacity:.8}),(0,X.jsx)(`stop`,{offset:`95%`,stopColor:r.colors.win[400],stopOpacity:.4})]}),(0,X.jsxs)(`linearGradient`,{id:`colorDefeat`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,X.jsx)(`stop`,{offset:`5%`,stopColor:r.colors.defeat[400],stopOpacity:.8}),(0,X.jsx)(`stop`,{offset:`95%`,stopColor:r.colors.defeat[400],stopOpacity:.4})]}),(0,X.jsxs)(`linearGradient`,{id:`colorWinRate`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,X.jsx)(`stop`,{offset:`0%`,stopColor:`#26A1DF`}),(0,X.jsx)(`stop`,{offset:`100%`,stopColor:`#F36346`})]})]}),(0,X.jsx)(P,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,X.jsx)(N,{dataKey:`date`,tick:{fontSize:12,fill:r.colors.gray[600]},angle:-45,textAnchor:`end`,height:80}),(0,X.jsx)(A,{yAxisId:`left`,label:{value:a(`chart.axes.matchCount`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},allowDecimals:!1,tick:{fill:r.colors.gray[600]}}),(0,X.jsx)(A,{yAxisId:`right`,orientation:`right`,label:{value:a(`chart.axes.winRatePercent`),angle:90,position:`insideRight`,fill:r.colors.gray[700]},domain:[0,100],tick:{fill:r.colors.gray[600]}}),(0,X.jsx)(I,{content:(0,X.jsx)(ce,{})}),(0,X.jsx)(T,{yAxisId:`left`,dataKey:`Win`,fill:`url(#colorWin)`,stackId:`a`,isAnimationActive:!1,radius:[4,4,0,0]}),(0,X.jsx)(T,{yAxisId:`left`,dataKey:`Defeat`,fill:`url(#colorDefeat)`,stackId:`a`,isAnimationActive:!1,radius:[4,4,0,0]}),(0,X.jsx)(ae,{yAxisId:`right`,type:`monotone`,dataKey:`WinRate`,stroke:`url(#colorWinRate)`,strokeWidth:3,dot:{r:4,strokeWidth:2,fill:`#fff`},connectNulls:!0,isAnimationActive:!1})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var ue=r.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>`${e.blur.md} brightness(${e.isDark?`0%`:`100%`})`};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[3]};
  box-shadow:
    ${({theme:e})=>e.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);

  .label {
    font-weight: 600;
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .value {
    font-size: 0.875rem;
    margin: ${({theme:e})=>e.spacing[1]} 0;
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .dot-win {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.win[400]};
  }

  .dot-defeat {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.defeat[400]};
  }

  .dot-total {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.gray[600]};
  }
`,de=r.div`
  .recharts-tooltip-cursor {
    fill: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.05)`};
  }
`,fe=({active:e,payload:t,label:n})=>{let{t:r}=o();if(e&&t&&t.length){let e=t[0].payload;return(0,X.jsxs)(ue,{children:[(0,X.jsx)(`div`,{className:`label`,children:n}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-win`}),(0,X.jsx)(`span`,{children:`${r(`chart.tooltip.win`)}: ${e.wins} ${r(`chart.tooltip.matches`)} (${e.winRate}%)`})]}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-defeat`}),(0,X.jsx)(`span`,{children:`${r(`chart.tooltip.lose`)}: ${e.defeats} ${r(`chart.tooltip.matches`)} (${e.defeatRate}%)`})]}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-total`}),(0,X.jsx)(`span`,{children:`${r(`chart.tooltip.total`)}: ${e.total} ${r(`chart.tooltip.matches`)}`})]})]})}return null};const pe=(0,z.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=o(),[s,d]=(0,z.useState)(null),[f,p]=(0,z.useState)(null),[m,h]=(0,z.useState)(null),g=(0,z.useMemo)(()=>U(e,t,s,f,m,a),[e,t,s,f,m,a]);return(0,X.jsxs)(K,{children:[(0,X.jsxs)(q,{children:[(0,X.jsx)(J,{children:a(`chart.titles.hourlyWinRate`)}),(0,X.jsxs)(Y,{children:[(0,X.jsx)(v,{label:a(`chart.labels.character`),id:`character-filter-hourly`,value:s||``,onChange:e=>d(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.job`),id:`job-filter-hourly`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(l).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.map`),id:`map-filter-hourly`,value:m||``,onChange:e=>h(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:c(e,a)}))],width:`200px`})]})]}),(0,X.jsx)(de,{children:(0,X.jsx)(F,{width:`100%`,height:400,children:(0,X.jsxs)(ne,{data:g,margin:{top:20,right:30,left:20,bottom:5},children:[(0,X.jsx)(`defs`,{children:(0,X.jsxs)(`linearGradient`,{id:`colorHourlyWin`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,X.jsx)(`stop`,{offset:`5%`,stopColor:`#10b981`,stopOpacity:.8}),(0,X.jsx)(`stop`,{offset:`95%`,stopColor:`#10b981`,stopOpacity:.3})]})}),(0,X.jsx)(P,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,X.jsx)(N,{dataKey:`hour`,tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,X.jsx)(A,{label:{value:a(`chart.axes.winRatePercent`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},domain:[0,100],tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,X.jsx)(I,{content:(0,X.jsx)(fe,{})}),(0,X.jsx)(T,{dataKey:`winRate`,name:`WinRate`,radius:[8,8,0,0],isAnimationActive:!1,children:g.map((e,t)=>(0,X.jsx)(S,{fill:ee(e.winRate,r,400),opacity:.8},`cell-${t}`))})]})})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var me=r.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>`${e.blur.md} brightness(${e.isDark?`0%`:`100%`})`};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[3]};
  box-shadow:
    ${({theme:e})=>e.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);

  .label {
    font-weight: 600;
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .value {
    font-size: 0.875rem;
    margin: ${({theme:e})=>e.spacing[1]} 0;
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .dot-total {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.gray[600]};
  }
`,Z=Math.PI/180,Q=e=>{let{cx:t,cy:n,midAngle:r,innerRadius:i,outerRadius:a,percent:o}=e,s=i+(a-i)*.5,c=t+s*Math.cos(-r*Z),l=n+s*Math.sin(-r*Z);return o<.05?null:(0,X.jsx)(`text`,{x:c,y:l,fill:`white`,textAnchor:c>t?`start`:`end`,dominantBaseline:`central`,fontSize:14,fontWeight:`bold`,children:`${(o*100).toFixed(0)}%`})},he=({active:e,payload:t})=>{let{t:n}=o();if(e&&t&&t.length){let e=t[0].payload,r=m[e.job].color;return(0,X.jsxs)(me,{children:[(0,X.jsx)(`div`,{className:`label`,children:`${e.name} (${e.job})`}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot`,style:{backgroundColor:r}}),(0,X.jsx)(`span`,{children:`${n(`chart.tooltip.usageCount`)}: ${e.value} ${n(`chart.matches`)}`})]}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-total`}),(0,X.jsx)(`span`,{children:`${n(`chart.tooltip.usageRatePercent`)}: ${e.percentage}%`})]})]})}return null};const ge=(0,z.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=o(),[s,l]=(0,z.useState)(null),[d,f]=(0,z.useState)(null),p=(0,z.useMemo)(()=>W(e,t,s,d,a),[e,t,s,d,a]);return(0,X.jsxs)(K,{children:[(0,X.jsxs)(q,{children:[(0,X.jsx)(J,{children:a(`chart.titles.jobUsageRate`)}),(0,X.jsxs)(Y,{children:[(0,X.jsx)(v,{label:a(`chart.labels.character`),id:`character-filter-job-usage`,value:s||``,onChange:e=>l(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.map`),id:`map-filter-job-usage`,value:d||``,onChange:e=>f(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:c(e,a)}))],width:`200px`})]})]}),p.length>0?(0,X.jsx)(F,{width:`100%`,height:400,children:(0,X.jsxs)(ie,{children:[(0,X.jsx)(j,{data:p,cx:`50%`,cy:`50%`,labelLine:!1,label:Q,outerRadius:150,fill:`#8884d8`,dataKey:`value`,isAnimationActive:!1,children:p.map((e,t)=>(0,X.jsx)(S,{fill:m[e.job].color,fillOpacity:r.isDark?.6:.8},`cell-${t}`))}),(0,X.jsx)(I,{content:(0,X.jsx)(he,{})}),(0,X.jsx)(C,{})]})}):(0,X.jsx)(`div`,{style:{textAlign:`center`,padding:`3rem`,color:r.colors.textSecondary},children:a(`chart.noMatchData`)})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var _e=r.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>`${e.blur.md} brightness(${e.isDark?`0%`:`100%`})`};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[3]};
  box-shadow:
    ${({theme:e})=>e.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);

  .label {
    font-weight: 600;
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .value {
    font-size: 0.875rem;
    margin: ${({theme:e})=>e.spacing[1]} 0;
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`,ve=({active:e,payload:t,label:n})=>e&&t&&t.length?(0,X.jsxs)(_e,{children:[(0,X.jsx)(`div`,{className:`label`,children:n}),t.map((e,t)=>(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot`,style:{backgroundColor:e.stroke}}),(0,X.jsx)(`span`,{children:`${e.name}: ${e.value}%`})]},t))]}):null;const ye=(0,z.memo)(({history:e,matchRecords:t,characters:n})=>{let{t:r}=o(),[i,s]=(0,z.useState)(null),[c,u]=(0,z.useState)(()=>f(d.RADAR_CHART_JOBS,[l.PALADIN,l.WHITE_MAGE])),h=e=>{let t=e;u(t),a(d.RADAR_CHART_JOBS,t)},g=(0,z.useMemo)(()=>G(e,t,i,c,r),[e,t,i,c,r]);return(0,X.jsxs)(K,{children:[(0,X.jsxs)(q,{children:[(0,X.jsx)(J,{children:r(`chart.titles.jobWinRateByMap`)}),(0,X.jsxs)(Y,{children:[(0,X.jsx)(v,{label:r(`chart.labels.character`),id:`character-filter-radar`,value:i||``,onChange:e=>s(e.target.value||null),options:[{value:``,label:r(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))],width:`200px`}),(0,X.jsx)(p,{label:r(`chart.labels.jobSelection`),value:c,onChange:h,options:Object.values(l).map(e=>({value:e,label:`${r(`job.${e}`)} (${e})`})),placeholder:r(`chart.labels.selectJob`),maxSelections:5,width:`200px`})]})]}),(0,X.jsx)(F,{width:`100%`,height:500,children:(0,X.jsxs)(M,{data:g,children:[(0,X.jsx)(re,{}),(0,X.jsx)(O,{dataKey:`map`}),(0,X.jsx)(D,{angle:90,domain:[0,100]}),c.map(e=>(0,X.jsx)(E,{name:`${r(`job.${e}`)} (${e})`,dataKey:e,stroke:m[e].color,fill:m[e].color,fillOpacity:.6,isAnimationActive:!1},e)),(0,X.jsx)(C,{}),(0,X.jsx)(I,{content:(0,X.jsx)(ve,{})})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var $=r.div`
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>`${e.blur.md} brightness(${e.isDark?`0%`:`100%`})`};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing[3]};
  box-shadow:
    ${({theme:e})=>e.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);

  .label {
    font-weight: 600;
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .value {
    font-size: 0.875rem;
    margin: ${({theme:e})=>e.spacing[1]} 0;
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.colors.text};
  }

  .dot-win {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.win[400]};
  }

  .dot-defeat {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.defeat[400]};
  }

  .dot-total {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.gray[600]};
  }

  .dot-nodata {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.gray[400]};
  }
`,be=({active:e,payload:t,label:n})=>{let{t:r}=o();if(e&&t&&t.length){let e=t[0].payload,i=r(`chart.weekdays.${[`sunday`,`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`][e.weekdayIndex]}`);return e.total===0?(0,X.jsxs)($,{children:[(0,X.jsx)(`div`,{className:`label`,children:`${i} (${n})`}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-nodata`}),(0,X.jsx)(`span`,{children:r(`chart.tooltip.noMatchData`)})]})]}):(0,X.jsxs)($,{children:[(0,X.jsx)(`div`,{className:`label`,children:`${i} (${n})`}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-win`}),(0,X.jsx)(`span`,{children:`${r(`chart.tooltip.win`)}: ${e.wins} ${r(`chart.tooltip.matches`)} (${e.winRate||0}%)`})]}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-defeat`}),(0,X.jsx)(`span`,{children:`${r(`chart.tooltip.lose`)}: ${e.defeats} ${r(`chart.tooltip.matches`)} (${e.defeatRate||0}%)`})]}),(0,X.jsxs)(`div`,{className:`value`,children:[(0,X.jsx)(`div`,{className:`dot-total`}),(0,X.jsx)(`span`,{children:`${r(`chart.tooltip.total`)}: ${e.total} ${r(`chart.tooltip.matches`)}`})]})]})}return null};const xe=(0,z.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=o(),[s,d]=(0,z.useState)(null),[f,p]=(0,z.useState)(null),[m,h]=(0,z.useState)(null),g=(0,z.useMemo)(()=>H(e,t,s,f,m),[e,t,s,f,m]);return(0,X.jsxs)(K,{children:[(0,X.jsxs)(q,{children:[(0,X.jsx)(J,{children:a(`chart.titles.weeklyWinRate`)}),(0,X.jsxs)(Y,{children:[(0,X.jsx)(v,{label:a(`chart.labels.character`),id:`character-filter-weekly`,value:s||``,onChange:e=>d(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.job`),id:`job-filter-weekly`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(l).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))],width:`200px`}),(0,X.jsx)(v,{label:a(`chart.labels.map`),id:`map-filter-weekly`,value:m||``,onChange:e=>h(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:c(e,a)}))],width:`200px`})]})]}),(0,X.jsx)(F,{width:`100%`,height:400,children:(0,X.jsxs)(k,{data:g,margin:{top:20,right:30,left:20,bottom:5},children:[(0,X.jsxs)(`defs`,{children:[(0,X.jsxs)(`linearGradient`,{id:`colorWeeklyWin`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,X.jsx)(`stop`,{offset:`5%`,stopColor:`#10b981`,stopOpacity:.8}),(0,X.jsx)(`stop`,{offset:`95%`,stopColor:`#10b981`,stopOpacity:.1})]}),(0,X.jsxs)(`linearGradient`,{id:`colorWeeklyDefeat`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,X.jsx)(`stop`,{offset:`5%`,stopColor:`#ef4444`,stopOpacity:.8}),(0,X.jsx)(`stop`,{offset:`95%`,stopColor:`#ef4444`,stopOpacity:.1})]})]}),(0,X.jsx)(P,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,X.jsx)(N,{dataKey:`weekday`,tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,X.jsx)(A,{label:{value:a(`chart.axes.winRatePercent`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},domain:[0,100],tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,X.jsx)(I,{content:(0,X.jsx)(be,{})}),(0,X.jsx)(w,{type:`monotone`,dataKey:`winRate`,name:`WinRate`,stroke:`#10b981`,strokeWidth:2,fill:`url(#colorWeeklyWin)`,connectNulls:!0,isAnimationActive:!1}),(0,X.jsx)(w,{type:`monotone`,dataKey:`defeatRate`,name:`DefeatRate`,stroke:`#ef4444`,strokeWidth:2,fill:`url(#colorWeeklyDefeat)`,connectNulls:!1,isAnimationActive:!1})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length),Se=()=>{let{t:e}=o();s(e(`pages.graphs.title`));let{histories:t}=R(),{characters:n,matchRecords:r}=L(),i=t.length>0?t[t.length-1]:null;return(0,X.jsxs)(_,{children:[(0,X.jsx)(b,{children:(0,X.jsx)(x,{children:e(`pages.graphs.title`)})}),(0,X.jsx)(te,{children:i?e(`pages.graphs.descriptionWithSeason`,{seasonName:i.seasonName}):e(`pages.graphs.description`)}),i?(0,X.jsxs)(h,{children:[(0,X.jsx)(le,{history:i,matchRecords:r,characters:n}),(0,X.jsx)(pe,{history:i,matchRecords:r,characters:n}),(0,X.jsx)(xe,{history:i,matchRecords:r,characters:n}),(0,X.jsx)(ge,{history:i,matchRecords:r,characters:n}),(0,X.jsx)(ye,{history:i,matchRecords:r,characters:n})]}):(0,X.jsx)(g,{icon:`chart`})]})};export{Se as GraphsPage,B as WEEKDAYS,V as aggregateDailyWinDefeat,U as aggregateHourlyWinDefeat,W as aggregateJobUsageRate,G as aggregateJobWinRateByMap,H as aggregateWeeklyWinDefeat};