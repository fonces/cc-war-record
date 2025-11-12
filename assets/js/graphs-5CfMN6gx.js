import{i as e}from"./rolldown-runtime-CescaEWC.js";import{kt as t}from"./vendor-CfpF3efx.js";import{b as n}from"./vendor-react-Dqtmilgm.js";import{n as r,o as i}from"./vendor-styled-zRjDkof3.js";import"./vendor-jszip-BemITh_p.js";import"./vendor-i18n-DFMPNbhM.js";import{C as a,E as o,G as s,M as c,N as l,U as u,V as d,W as f,X as p,Y as m,a as h,b as g,ct as _,j as v,k as y,lt as b,q as x,v as S,w as C,x as w,y as T}from"./index-C5jF5Hv-.js";import{n as E,t as D}from"./stores-C0mYd_Ps.js";import{_ as ee,a as te,b as O,c as k,d as A,f as j,g as ne,h as re,i as ie,l as ae,m as oe,n as se,o as ce,p as le,r as ue,s as M,t as de,u as N,v as P,x as F,y as I}from"./vendor-recharts-CltENXDe.js";var L=e(t());const R=[{index:0,short:`Sun`,name:`日曜日`},{index:1,short:`Mon`,name:`月曜日`},{index:2,short:`Tue`,name:`火曜日`},{index:3,short:`Wed`,name:`水曜日`},{index:4,short:`Thu`,name:`木曜日`},{index:5,short:`Fri`,name:`金曜日`},{index:6,short:`Sat`,name:`土曜日`}],z=(e,t,n,r,i)=>{let a=new Date(e.createdAt),o=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)),s=new Date(a);s.setMonth(s.getMonth()+2);let c=o.reduce((e,t)=>{let n=new Date(t.recordedAt);return n>e?n:e},new Date(a)),l=c>s?c:s,u=[],d=new Date(a);for(;d<=l;)u.push(d.toISOString().split(`T`)[0]),d.setDate(d.getDate()+1);let f=new Map;return u.forEach(e=>{f.set(e,{wins:0,defeats:0})}),o.forEach(e=>{let t=e.recordedAt.split(`T`)[0];if(f.has(t)){let n=f.get(t);e.isWin?n.wins++:n.defeats++}}),u.map(e=>{let[,t,n]=e.split(`-`),r=`${parseInt(t)}/${parseInt(n)}`,i=f.get(e),a=i.wins+i.defeats,o=a>0?Math.round(i.wins/a*100):null;return{date:r,fullDate:e,Win:i.wins,Defeat:i.defeats,WinRate:o}})},B=(e,t,n,r,i)=>{let a=new Map;return R.forEach(e=>{a.set(e.index,{wins:0,defeats:0,total:0})}),t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)).forEach(e=>{let t=new Date(e.recordedAt).getDay();if(a.has(t)){let n=a.get(t);n.total++,e.isWin?n.wins++:n.defeats++}}),R.map(e=>{let t=a.get(e.index),n=t.total>0?Math.round(t.wins/t.total*100):null,r=t.total>0?Math.round(t.defeats/t.total*100):null;return{weekday:e.short,weekdayName:e.name,weekdayIndex:e.index,winRate:n,defeatRate:r,wins:t.wins,defeats:t.defeats,total:t.total}})},V=(e,t,n,r,i,a)=>{let o=Array.from({length:24},(e,t)=>t),s=new Map;return o.forEach(e=>{s.set(e,{wins:0,defeats:0,total:0})}),t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)).forEach(e=>{let t=new Date(e.recordedAt).getHours();if(s.has(t)){let n=s.get(t);n.total++,e.isWin?n.wins++:n.defeats++}}),o.map(e=>{let t=s.get(e),n=t.total>0?Math.round(t.wins/t.total*100):0,r=t.total>0?Math.round(t.defeats/t.total*100):0;return{hour:a(`chart.hour`,{hour:e}),winRate:n,defeatRate:r,wins:t.wins,defeats:t.defeats,total:t.total}})},H=(e,t,n,r,i)=>{let a=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.map!==r)),o=new Map;a.forEach(e=>{let t=o.get(e.job)||0;o.set(e.job,t+1)});let s=a.length;return Array.from(o.entries()).map(([e,t])=>({name:i(`job.${e}`),job:e,value:t,percentage:s>0?Math.round(t/s*100):0})).sort((e,t)=>t.value-e.value)},U=(e,t,n,r,i)=>{let a=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r.length>0&&!r.includes(t.job))),o=new Map;return a.forEach(e=>{o.has(e.map)||o.set(e.map,new Map);let t=o.get(e.map);t.has(e.job)||t.set(e.job,{wins:0,total:0});let n=t.get(e.job);n.total++,e.isWin&&n.wins++}),Object.values(u).map(e=>{let t={map:d(e,i),fullMark:100};return r.forEach(n=>{let r=o.get(e)?.get(n);r&&r.total>0?t[n]=Math.round(r.wins/r.total*100):t[n]=0}),t})},fe=(e,t,n,r,i,a)=>{let o=a||new Date().toISOString().split(`T`)[0],s=[...t.filter(t=>t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i?!1:t.recordedAt.split(`T`)[0]===o)].sort((e,t)=>new Date(e.recordedAt).getTime()-new Date(t.recordedAt).getTime()),c=0,l=0,u=0,d=0;return s.map((e,t)=>{l++,e.isWin?(c++,u++):(c--,d++);let n=Math.round(c/l*100),r=new Date(e.recordedAt),i=`${String(r.getHours()).padStart(2,`0`)}:${String(r.getMinutes()).padStart(2,`0`)}`;return{matchNumber:t+1,time:i,fullTime:e.recordedAt,isWin:e.isWin,winRate:n,wins:c,actualWins:u,defeats:d,total:l,job:e.job,map:e.map}})},pe=(e,t,n,r,i)=>{let a=t.filter(t=>!(t.seasonUuid!==e.uuid||n&&t.characterUuid!==n||r&&t.job!==r||i&&t.map!==i)),o=new Set;return a.forEach(e=>{let t=e.recordedAt.split(`T`)[0];o.add(t)}),Array.from(o).sort((e,t)=>t.localeCompare(e))},W=r.div`
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

  ${C.mobile} {
    padding: ${({theme:e})=>e.spacing[4]};
  }

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
`,G=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;

  ${C.mobile} {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,K=r.h2`
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
`,q=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;
  align-items: flex-end;

  & > * {
    width: 200px;
  }

  ${C.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;

    & > * {
      width: auto;
      min-width: 0;
    }
  }
`;var J=e(n()),me=r.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;

  ${({$color:e,$type:t,theme:n})=>{if(e)return`background-color: ${e};`;switch(t){case`win`:return`background: ${n.colors.win[400]};`;case`defeat`:return`background: ${n.colors.defeat[400]};`;case`gradient`:return`background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);`;case`total`:return`background: ${n.colors.gray[600]};`;case`nodata`:return`background: ${n.colors.gray[400]};`;default:return``}}}
`;const Y=(0,L.memo)(({type:e,color:t})=>(0,J.jsx)(me,{$color:t,$type:e}));Y.displayName=`Dot`;const X=r.div`
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
    color: ${({theme:e})=>e.colors.text};
  }

  .result-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: ${({theme:e})=>e.spacing[1]};

    &.win {
      background-color: ${({theme:e})=>e.colors.win[400]};
      color: white;
    }

    &.defeat {
      background-color: ${({theme:e})=>e.colors.defeat[400]};
      color: white;
    }
  }
`,Z=r.div`
  font-size: 0.875rem;
  margin: ${({theme:e})=>e.spacing[1]} 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.text};
`;var he=r.div`
  font-weight: 600;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.text};
`;const Q=(0,L.memo)(({children:e})=>(0,J.jsx)(he,{children:e}));Q.displayName=`TooltipLabel`;const $=(0,L.memo)(({children:e})=>(0,J.jsx)(`span`,{children:e}));$.displayName=`TooltipText`;var ge=({active:e,payload:t,label:n})=>!e||!t?null:(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:n}),t.map((e,t)=>{let n=e.name===`Win`?`win`:e.name===`Defeat`?`defeat`:e.name===`WinRate`?`gradient`:`total`;return(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:n}),(0,J.jsxs)($,{children:[e.name,`: `,typeof e.value==`number`&&e.name===`WinRate`?`${e.value.toFixed(1)}%`:e.value]})]},t)})]});const _e=(0,L.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=l(),o=v(),[s,c]=(0,L.useState)(null),[f,p]=(0,L.useState)(null),[h,g]=(0,L.useState)(null),_=(0,L.useMemo)(()=>z(e,t,s,f,h),[e,t,s,f,h]);return(0,J.jsxs)(W,{children:[(0,J.jsxs)(G,{children:[(0,J.jsx)(K,{children:a(`chart.titles.dailyWinDefeat`)}),(0,J.jsxs)(q,{children:[(0,J.jsx)(b,{label:a(`chart.labels.character`),id:`character-filter`,value:s||``,onChange:e=>c(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))]}),(0,J.jsx)(b,{label:a(`chart.labels.job`),id:`job-filter`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(m).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))]}),(0,J.jsx)(b,{label:a(`chart.labels.map`),id:`map-filter`,value:h||``,onChange:e=>g(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:d(e,a)}))]})]})]}),(0,J.jsx)(I,{width:`100%`,height:400,children:(0,J.jsxs)(de,{data:_,margin:o?{top:0,right:10,left:0,bottom:-28}:{top:20,right:20,left:20,bottom:-28},children:[(0,J.jsxs)(`defs`,{children:[(0,J.jsxs)(`linearGradient`,{id:`colorWin`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,J.jsx)(`stop`,{offset:`5%`,stopColor:r.colors.win[400],stopOpacity:.8}),(0,J.jsx)(`stop`,{offset:`95%`,stopColor:r.colors.win[400],stopOpacity:.4})]}),(0,J.jsxs)(`linearGradient`,{id:`colorDefeat`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,J.jsx)(`stop`,{offset:`5%`,stopColor:r.colors.defeat[400],stopOpacity:.8}),(0,J.jsx)(`stop`,{offset:`95%`,stopColor:r.colors.defeat[400],stopOpacity:.4})]}),(0,J.jsxs)(`linearGradient`,{id:`colorWinRate`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,J.jsx)(`stop`,{offset:`0%`,stopColor:`#26A1DF`}),(0,J.jsx)(`stop`,{offset:`100%`,stopColor:`#F36346`})]})]}),(0,J.jsx)(A,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,J.jsx)(k,{dataKey:`date`,tick:{fontSize:12,fill:r.colors.gray[600]},angle:-45,textAnchor:`end`,height:80}),(0,J.jsx)(M,{yAxisId:`left`,label:o?void 0:{value:a(`chart.axes.matchCount`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},allowDecimals:!1,tick:{fill:r.colors.gray[600]},width:o?30:60}),(0,J.jsx)(M,{yAxisId:`right`,orientation:`right`,label:o?void 0:{value:a(`chart.axes.winRatePercent`),angle:90,position:`insideRight`,fill:r.colors.gray[700]},domain:[0,100],tick:{fill:r.colors.gray[600]},width:o?30:60}),(0,J.jsx)(O,{content:(0,J.jsx)(ge,{})}),(0,J.jsx)(j,{yAxisId:`left`,dataKey:`Win`,fill:`url(#colorWin)`,stackId:`a`,isAnimationActive:!1,radius:[4,4,0,0]}),(0,J.jsx)(j,{yAxisId:`left`,dataKey:`Defeat`,fill:`url(#colorDefeat)`,stackId:`a`,isAnimationActive:!1,radius:[4,4,0,0]}),(0,J.jsx)(N,{yAxisId:`right`,type:`monotone`,dataKey:`WinRate`,stroke:`url(#colorWinRate)`,strokeWidth:3,dot:{r:4,strokeWidth:2,fill:`#fff`},connectNulls:!0,isAnimationActive:!1})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var ve=r.div`
  .recharts-tooltip-cursor {
    fill: ${({theme:e})=>e.isDark?`rgba(255, 255, 255, 0.05)`:`rgba(0, 0, 0, 0.05)`};
  }
`,ye=({active:e,payload:t,label:n})=>{let{t:r}=l();if(e&&t&&t.length){let e=t[0].payload;return(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:n}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`win`}),(0,J.jsx)($,{children:`${r(`chart.tooltip.win`)}: ${e.wins} ${r(`chart.tooltip.matches`)} (${e.winRate}%)`})]}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`defeat`}),(0,J.jsx)($,{children:`${r(`chart.tooltip.lose`)}: ${e.defeats} ${r(`chart.tooltip.matches`)} (${e.defeatRate}%)`})]}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`total`}),(0,J.jsx)($,{children:`${r(`chart.tooltip.total`)}: ${e.total} ${r(`chart.tooltip.matches`)}`})]})]})}return null};const be=(0,L.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=l(),o=v(),[s,c]=(0,L.useState)(null),[f,p]=(0,L.useState)(null),[h,g]=(0,L.useState)(null),y=(0,L.useMemo)(()=>V(e,t,s,f,h,a),[e,t,s,f,h,a]);return(0,J.jsxs)(W,{children:[(0,J.jsxs)(G,{children:[(0,J.jsx)(K,{children:a(`chart.titles.hourlyWinDefeat`)}),(0,J.jsxs)(q,{children:[(0,J.jsx)(b,{label:a(`chart.labels.character`),id:`character-filter-hourly`,value:s||``,onChange:e=>c(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))]}),(0,J.jsx)(b,{label:a(`chart.labels.job`),id:`job-filter-hourly`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(m).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))]}),(0,J.jsx)(b,{label:a(`chart.labels.map`),id:`map-filter-hourly`,value:h||``,onChange:e=>g(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:d(e,a)}))]})]})]}),(0,J.jsx)(ve,{children:(0,J.jsx)(I,{width:`100%`,height:400,children:(0,J.jsxs)(te,{data:y,margin:o?{top:0,right:10,left:0,bottom:5}:{top:20,right:30,left:20,bottom:5},children:[(0,J.jsx)(`defs`,{children:(0,J.jsxs)(`linearGradient`,{id:`colorHourlyWin`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,J.jsx)(`stop`,{offset:`5%`,stopColor:`#10b981`,stopOpacity:.8}),(0,J.jsx)(`stop`,{offset:`95%`,stopColor:`#10b981`,stopOpacity:.3})]})}),(0,J.jsx)(A,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,J.jsx)(k,{dataKey:`hour`,tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,J.jsx)(M,{label:o?void 0:{value:a(`chart.axes.winRatePercent`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},domain:[0,100],tick:{fontSize:12,fill:r.colors.gray[600]},width:o?30:60}),(0,J.jsx)(O,{content:(0,J.jsx)(ye,{})}),(0,J.jsx)(j,{dataKey:`winRate`,name:`WinRate`,radius:[8,8,0,0],isAnimationActive:!1,children:y.map((e,t)=>(0,J.jsx)(P,{fill:_(e.winRate,r,400),opacity:.8},`cell-${t}`))})]})})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var xe=Math.PI/180,Se=e=>{let{cx:t,cy:n,midAngle:r,innerRadius:i,outerRadius:a,percent:o}=e,s=i+(a-i)*.5,c=t+s*Math.cos(-r*xe),l=n+s*Math.sin(-r*xe);return o<.05?null:(0,J.jsx)(`text`,{x:c,y:l,fill:`white`,textAnchor:c>t?`start`:`end`,dominantBaseline:`central`,fontSize:14,fontWeight:`bold`,children:`${(o*100).toFixed(0)}%`})},Ce=({active:e,payload:t})=>{let{t:n}=l();if(e&&t&&t.length){let e=t[0].payload,r=p[e.job].color;return(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:`${e.name} (${e.job})`}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`win`,color:r}),(0,J.jsx)($,{children:`${n(`chart.tooltip.usageCount`)}: ${e.value} ${n(`chart.matches`)}`})]}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`total`}),(0,J.jsx)($,{children:`${n(`chart.tooltip.usageRatePercent`)}: ${e.percentage}%`})]})]})}return null};const we=(0,L.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),a=v(),{t:o}=l(),[s,c]=(0,L.useState)(null),[f,m]=(0,L.useState)(null),h=(0,L.useMemo)(()=>H(e,t,s,f,o),[e,t,s,f,o]);return(0,J.jsxs)(W,{children:[(0,J.jsxs)(G,{children:[(0,J.jsx)(K,{children:o(`chart.titles.jobUsageRate`)}),(0,J.jsxs)(q,{children:[(0,J.jsx)(b,{label:o(`chart.labels.character`),id:`character-filter-job-usage`,value:s||``,onChange:e=>c(e.target.value||null),options:[{value:``,label:o(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))]}),(0,J.jsx)(b,{label:o(`chart.labels.map`),id:`map-filter-job-usage`,value:f||``,onChange:e=>m(e.target.value||null),options:[{value:``,label:o(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:d(e,o)}))]})]})]}),h.length>0?(0,J.jsx)(I,{width:`100%`,height:a?372:400,children:(0,J.jsxs)(ie,{children:[(0,J.jsx)(oe,{data:h,cx:`50%`,cy:`50%`,labelLine:!1,label:Se,outerRadius:150,fill:`#8884d8`,dataKey:`value`,isAnimationActive:!1,children:h.map((e,t)=>(0,J.jsx)(P,{fill:p[e.job].color,fillOpacity:r.isDark?.6:.8},`cell-${t}`))}),(0,J.jsx)(O,{content:(0,J.jsx)(Ce,{})}),(0,J.jsx)(F,{})]})}):(0,J.jsx)(`div`,{style:{textAlign:`center`,padding:`3rem`,color:r.colors.textSecondary},children:o(`chart.noMatchData`)})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var Te=({active:e,payload:t,label:n})=>e&&t&&t.length?(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:n}),t.map((e,t)=>(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`win`,color:e.stroke}),(0,J.jsx)($,{children:`${e.name}: ${e.value}%`})]},t))]}):null;const Ee=(0,L.memo)(({history:e,matchRecords:t,characters:n})=>{let{t:r}=l(),i=v(),[a,c]=(0,L.useState)(null),[u,d]=(0,L.useState)(()=>s(f.RADAR_CHART_JOBS,[m.PALADIN,m.WHITE_MAGE])),h=e=>{let t=e;d(t),x(f.RADAR_CHART_JOBS,t)},g=(0,L.useMemo)(()=>U(e,t,a,u,r),[e,t,a,u,r]);return(0,J.jsxs)(W,{children:[(0,J.jsxs)(G,{children:[(0,J.jsx)(K,{children:r(`chart.titles.jobWinRateByMap`)}),(0,J.jsxs)(q,{children:[(0,J.jsx)(b,{label:r(`chart.labels.character`),id:`character-filter-radar`,value:a||``,onChange:e=>c(e.target.value||null),options:[{value:``,label:r(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))]}),(0,J.jsx)(o,{label:r(`chart.labels.jobSelection`),value:u,onChange:h,options:Object.values(m).map(e=>({value:e,label:`${r(`job.${e}`)} (${e})`})),placeholder:r(`chart.labels.selectJob`),maxSelections:5})]})]}),(0,J.jsx)(I,{width:`100%`,height:i?460:500,children:(0,J.jsxs)(ue,{data:g,children:[(0,J.jsx)(ee,{}),(0,J.jsx)(re,{dataKey:`map`}),(0,J.jsx)(ne,{angle:90,domain:[0,100]}),u.map(e=>(0,J.jsx)(le,{name:`${r(`job.${e}`)} (${e})`,dataKey:e,stroke:p[e].color,fill:p[e].color,fillOpacity:.6,isAnimationActive:!1},e)),(0,J.jsx)(F,{}),(0,J.jsx)(O,{content:(0,J.jsx)(Te,{})})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var De=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${({theme:e})=>e.colors.gray[500]};
  font-size: 1rem;
  gap: ${({theme:e})=>e.spacing[3]};

  .icon {
    font-size: 3rem;
    opacity: 0.5;
  }
`,Oe=({active:e,payload:t})=>{let{t:n}=l();if(!e||!t||!t[0])return null;let r=t[0].payload;return(0,J.jsxs)(X,{children:[(0,J.jsxs)(Q,{children:[n(`chart.todayTrend.match`,{number:r.matchNumber}),` (`,r.time,`)`,(0,J.jsx)(`span`,{className:`result-badge ${r.isWin?`win`:`defeat`}`,children:r.isWin?n(`common.win`):n(`common.defeat`)})]}),(0,J.jsxs)(Z,{children:[n(`chart.todayTrend.winDifference`),`: `,r.wins]}),(0,J.jsxs)(Z,{children:[n(`chart.todayTrend.record`),`: `,r.actualWins,n(`common.win`),` `,r.defeats,n(`common.defeat`),` (`,r.total,n(`chart.todayTrend.matches`),`)`]}),(0,J.jsxs)(Z,{children:[n(`chart.labels.job`),`: `,(0,J.jsx)(Y,{type:`win`,color:p[r.job].color}),n(`job.${r.job}`)]}),(0,J.jsxs)(Z,{children:[n(`chart.labels.map`),`: `,d(r.map,n)]})]})};const ke=(0,L.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=l(),o=v(),[s,c]=(0,L.useState)(null),[f,p]=(0,L.useState)(null),[h,g]=(0,L.useState)(null),[_,y]=(0,L.useState)(null),x=(0,L.useMemo)(()=>pe(e,t,s,f,h),[e,t,s,f,h]),S=new Date().toISOString().split(`T`)[0],C=x.includes(S)?S:x[0]||null,w=_||C,T=(0,L.useMemo)(()=>fe(e,t,s,f,h,w),[e,t,s,f,h,w]),E=e=>{let[,t,n]=e.split(`-`);return`${parseInt(t)}/${parseInt(n)}`},D=e=>{let{cx:t,cy:n,payload:i}=e;return t===void 0||n===void 0||!i?null:(0,J.jsx)(`circle`,{cx:t,cy:n,r:6,fill:i.isWin?r.colors.win[400]:r.colors.defeat[400],stroke:`#fff`,strokeWidth:2})};return(0,J.jsxs)(W,{children:[(0,J.jsxs)(G,{children:[(0,J.jsx)(K,{children:a(`chart.titles.todayWinDefeatTrend`)}),(0,J.jsxs)(q,{children:[(0,J.jsx)(b,{label:a(`chart.labels.date`),id:`today-date-filter`,value:w||``,onChange:e=>y(e.target.value||null),options:x.map(e=>({value:e,label:E(e)})),disabled:x.length===0}),(0,J.jsx)(b,{label:a(`chart.labels.character`),id:`today-character-filter`,value:s||``,onChange:e=>c(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))]}),(0,J.jsx)(b,{label:a(`chart.labels.job`),id:`today-job-filter`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(m).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))]}),(0,J.jsx)(b,{label:a(`chart.labels.map`),id:`today-map-filter`,value:h||``,onChange:e=>g(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:d(e,a)}))]})]})]}),T.length===0?(0,J.jsx)(De,{children:(0,J.jsx)(`div`,{children:a(`chart.todayTrend.noData`)})}):(0,J.jsx)(I,{width:`100%`,height:400,children:(0,J.jsxs)(ce,{data:T,margin:o?{top:0,right:10,left:0,bottom:0}:{top:20,right:20,left:20,bottom:20},children:[(0,J.jsx)(`defs`,{children:(0,J.jsxs)(`linearGradient`,{id:`colorTodayWins`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,J.jsx)(`stop`,{offset:`0%`,stopColor:`#26A1DF`}),(0,J.jsx)(`stop`,{offset:`100%`,stopColor:`#F36346`})]})}),(0,J.jsx)(A,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,J.jsx)(k,{dataKey:`matchNumber`,tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,J.jsx)(M,{label:o?void 0:{value:a(`chart.todayTrend.winCount`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},allowDecimals:!1,tick:{fill:r.colors.gray[600]},width:o?30:60}),(0,J.jsx)(O,{content:(0,J.jsx)(Oe,{})}),(0,J.jsx)(N,{type:`monotone`,dataKey:()=>0,stroke:r.colors.gray[400],strokeWidth:2,strokeDasharray:`5 5`,dot:!1,isAnimationActive:!1}),(0,J.jsx)(N,{type:`monotone`,dataKey:`wins`,stroke:`url(#colorTodayWins)`,strokeWidth:3,dot:(0,J.jsx)(D,{}),isAnimationActive:!1})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length);var Ae=({active:e,payload:t,label:n})=>{let{t:r}=l();if(e&&t&&t.length){let e=t[0].payload,i=r(`chart.weekdays.${[`sunday`,`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`][e.weekdayIndex]}`);return e.total===0?(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:`${i} (${n})`}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`nodata`}),(0,J.jsx)($,{children:r(`chart.tooltip.noMatchData`)})]})]}):(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:`${i} (${n})`}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`win`}),(0,J.jsx)($,{children:`${r(`chart.tooltip.win`)}: ${e.wins} ${r(`chart.tooltip.matches`)} (${e.winRate||0}%)`})]}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`defeat`}),(0,J.jsx)($,{children:`${r(`chart.tooltip.lose`)}: ${e.defeats} ${r(`chart.tooltip.matches`)} (${e.defeatRate||0}%)`})]}),(0,J.jsxs)(Z,{children:[(0,J.jsx)(Y,{type:`total`}),(0,J.jsx)($,{children:`${r(`chart.tooltip.total`)}: ${e.total} ${r(`chart.tooltip.matches`)}`})]})]})}return null};const je=(0,L.memo)(({history:e,matchRecords:t,characters:n})=>{let r=i(),{t:a}=l(),o=v(),[s,c]=(0,L.useState)(null),[f,p]=(0,L.useState)(null),[h,g]=(0,L.useState)(null),_=(0,L.useMemo)(()=>B(e,t,s,f,h),[e,t,s,f,h]);return(0,J.jsxs)(W,{children:[(0,J.jsxs)(G,{children:[(0,J.jsx)(K,{children:a(`chart.titles.weeklyWinRate`)}),(0,J.jsxs)(q,{children:[(0,J.jsx)(b,{label:a(`chart.labels.character`),id:`character-filter-weekly`,value:s||``,onChange:e=>c(e.target.value||null),options:[{value:``,label:a(`chart.labels.allCharacters`)},...n.map(e=>({value:e.uuid,label:e.name}))]}),(0,J.jsx)(b,{label:a(`chart.labels.job`),id:`job-filter-weekly`,value:f||``,onChange:e=>p(e.target.value||null),options:[{value:``,label:a(`chart.labels.allJobs`)},...Object.values(m).map(e=>({value:e,label:`${a(`job.${e}`)} (${e})`}))]}),(0,J.jsx)(b,{label:a(`chart.labels.map`),id:`map-filter-weekly`,value:h||``,onChange:e=>g(e.target.value||null),options:[{value:``,label:a(`chart.labels.allMaps`)},...Object.values(u).map(e=>({value:e,label:d(e,a)}))]})]})]}),(0,J.jsx)(I,{width:`100%`,height:400,children:(0,J.jsxs)(se,{data:_,margin:o?{top:0,right:10,left:0,bottom:5}:{top:20,right:30,left:20,bottom:5},children:[(0,J.jsxs)(`defs`,{children:[(0,J.jsxs)(`linearGradient`,{id:`colorWeeklyWin`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,J.jsx)(`stop`,{offset:`5%`,stopColor:`#10b981`,stopOpacity:.8}),(0,J.jsx)(`stop`,{offset:`95%`,stopColor:`#10b981`,stopOpacity:.1})]}),(0,J.jsxs)(`linearGradient`,{id:`colorWeeklyDefeat`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,J.jsx)(`stop`,{offset:`5%`,stopColor:`#ef4444`,stopOpacity:.8}),(0,J.jsx)(`stop`,{offset:`95%`,stopColor:`#ef4444`,stopOpacity:.1})]})]}),(0,J.jsx)(A,{strokeDasharray:`3 3`,stroke:`rgba(0,0,0,0.05)`}),(0,J.jsx)(k,{dataKey:`weekday`,tick:{fontSize:12,fill:r.colors.gray[600]}}),(0,J.jsx)(M,{label:o?void 0:{value:a(`chart.axes.winRatePercent`),angle:-90,position:`insideLeft`,fill:r.colors.gray[700]},domain:[0,100],tick:{fontSize:12,fill:r.colors.gray[600]},width:o?30:60}),(0,J.jsx)(O,{content:(0,J.jsx)(Ae,{})}),(0,J.jsx)(ae,{type:`monotone`,dataKey:`winRate`,name:`WinRate`,stroke:`#10b981`,strokeWidth:2,fill:`url(#colorWeeklyWin)`,connectNulls:!0,isAnimationActive:!1}),(0,J.jsx)(ae,{type:`monotone`,dataKey:`defeatRate`,name:`DefeatRate`,stroke:`#ef4444`,strokeWidth:2,fill:`url(#colorWeeklyDefeat)`,connectNulls:!1,isAnimationActive:!1})]})})]})},(e,t)=>e.history.uuid===t.history.uuid&&e.matchRecords.length===t.matchRecords.length&&e.characters.length===t.characters.length),Me=()=>{let{t:e}=l();c(e(`pages.graphs.title`));let{histories:t}=D(),{characters:n,matchRecords:r}=E(),i=t.length>0?t[t.length-1]:null;return(0,J.jsxs)(S,{children:[(0,J.jsx)(a,{children:(0,J.jsx)(w,{children:e(`pages.graphs.title`)})}),(0,J.jsx)(g,{children:i?e(`pages.graphs.descriptionWithSeason`,{seasonName:i.seasonName}):e(`pages.graphs.description`)}),i?(0,J.jsxs)(T,{children:[(0,J.jsx)(ke,{history:i,matchRecords:r,characters:n}),(0,J.jsx)(_e,{history:i,matchRecords:r,characters:n}),(0,J.jsx)(be,{history:i,matchRecords:r,characters:n}),(0,J.jsx)(je,{history:i,matchRecords:r,characters:n}),(0,J.jsx)(we,{history:i,matchRecords:r,characters:n}),(0,J.jsx)(Ee,{history:i,matchRecords:r,characters:n})]}):(0,J.jsx)(h,{icon:`chart`})]})};export{Me as GraphsPage,R as WEEKDAYS,z as aggregateDailyWinDefeat,V as aggregateHourlyWinDefeat,H as aggregateJobUsageRate,U as aggregateJobWinRateByMap,fe as aggregateTodayWinDefeatTrend,B as aggregateWeeklyWinDefeat,pe as getAvailableDates};