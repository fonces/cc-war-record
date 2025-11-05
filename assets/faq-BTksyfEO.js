import{i as e}from"./rolldown-runtime-CIDIeb-o.js";import{T as t,x as n}from"./react-vendor-D1pS86Oe.js";import{a as r,n as i}from"./styled-DX7-lrl4.js";import"./jszip-DU7jsDXX.js";import{A as a,E as o,S as s,_ as c,b as l,k as u,y as d}from"./index-BnG9akp5.js";var f=e(t()),p=e(n()),m=r`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,h=i.div`
  margin-top: ${({theme:e})=>e.spacing[6]};
  animation: ${o} 0.6s ease-out;
`,g=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  animation: ${o} 0.6s ease-out;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
`,_=i.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.colors.text};
  padding-bottom: ${({theme:e})=>e.spacing[3]};
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    border-radius: 2px;
  }
`,v=i.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: ${({$isOpen:e})=>e?1:0};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 24px rgba(38, 161, 223, 0.12);
    border-color: ${({theme:e})=>e.colors.border};
  }
`,y=i.button`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({theme:e})=>e.isDark?`rgba(38, 161, 223, 0.08)`:`rgba(38, 161, 223, 0.03)`};
  }
`,b=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
`,x=i.div`
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
`,S=i.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  flex: 1;
`,C=i.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${({$isOpen:e})=>e?`180deg`:`0deg`});
  color: ${({theme:e})=>e.colors.textSecondary};

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`,w=i.div`
  padding: ${({$isOpen:e,theme:t})=>e?`${t.spacing[2]} 0 ${t.spacing[6]} ${t.spacing[5]}`:`0`};
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.7;
  max-height: ${({$isOpen:e})=>e?`1000px`:`0`};
  opacity: ${({$isOpen:e})=>e?1:0};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({theme:e})=>e.isDark?`linear-gradient(to bottom, rgba(38, 161, 223, 0.05), transparent)`:`linear-gradient(to bottom, rgba(38, 161, 223, 0.02), transparent)`};

  p {
    margin-bottom: ${({theme:e})=>e.spacing[3]};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: ${({theme:e})=>e.spacing[3]} 0;
    padding-left: ${({theme:e})=>e.spacing[6]};
  }

  li {
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    position: relative;

    &::before {
      content: "▸";
      position: absolute;
      left: -${({theme:e})=>e.spacing[5]};
      color: #26a1df;
      font-weight: 700;
    }
  }

  strong {
    color: ${({theme:e})=>e.colors.text};
    font-weight: 700;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,T=i.div`
  margin-top: ${({theme:e})=>e.spacing[12]};
  padding: ${({theme:e})=>e.spacing[8]};
  background: ${({theme:e})=>e.gradients.glass};
  backdrop-filter: ${({theme:e})=>e.blur.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.875rem;
  position: relative;
  overflow: hidden;
  animation: ${o} 0.6s ease-out 0.3s backwards;
  transition: all ${({theme:e})=>e.transitions.base};

  &:hover {
    border-color: ${({theme:e})=>e.colors.border};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -200%;
    width: 200%;
    height: 100%;
    background: ${({theme:e})=>e.isDark?`linear-gradient(90deg, transparent, rgba(38, 161, 223, 0.1), transparent)`:`linear-gradient(90deg, transparent, rgba(38, 161, 223, 0.05), transparent)`};
    animation: ${m} 3s ease-in-out infinite;
  }

  p {
    line-height: 1.7;
    position: relative;
    z-index: 1;

    &:not(:last-of-type) {
      margin-bottom: ${({theme:e})=>e.spacing[2]};
    }
  }

  strong {
    color: ${({theme:e})=>e.colors.text};
    font-weight: 700;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,E=({question:e,children:t,defaultOpen:n=!1})=>{let[r,i]=(0,f.useState)(n);return(0,p.jsxs)(v,{$isOpen:r,children:[(0,p.jsxs)(y,{$isOpen:r,onClick:()=>i(!r),children:[(0,p.jsxs)(b,{children:[(0,p.jsx)(x,{children:`Q`}),(0,p.jsx)(S,{children:e})]}),(0,p.jsx)(C,{$isOpen:r,children:(0,p.jsx)(`svg`,{viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,p.jsx)(`path`,{d:`M7 10l5 5 5-5z`})})})]}),(0,p.jsx)(w,{$isOpen:r,children:t})]})};const D=()=>{let{t:e}=a();return u(e(`pages.faq.title`)),(0,p.jsxs)(c,{children:[(0,p.jsx)(s,{children:(0,p.jsx)(l,{children:e(`pages.faq.title`)})}),(0,p.jsx)(d,{children:e(`pages.faq.description`)}),(0,p.jsxs)(h,{children:[(0,p.jsxs)(g,{children:[(0,p.jsx)(_,{children:e(`pages.faq.privacy.title`)}),(0,p.jsxs)(E,{question:e(`pages.faq.privacy.dataStorage.question`),defaultOpen:!0,children:[(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.privacy.dataStorage.answer.intro`)})}),(0,p.jsx)(`p`,{children:e(`pages.faq.privacy.dataStorage.answer.description`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataStorage.answer.points.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataStorage.answer.points.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataStorage.answer.points.2`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataStorage.answer.points.3`)})]})]}),(0,p.jsxs)(E,{question:e(`pages.faq.privacy.analytics.question`),children:[(0,p.jsx)(`p`,{children:e(`pages.faq.privacy.analytics.answer.intro`)}),(0,p.jsx)(`p`,{children:e(`pages.faq.privacy.analytics.answer.collected`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.analytics.answer.collectedPoints.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.analytics.answer.collectedPoints.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.analytics.answer.collectedPoints.2`)})]}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.privacy.analytics.answer.notCollected`)})}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.analytics.answer.notCollectedPoints.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.analytics.answer.notCollectedPoints.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.analytics.answer.notCollectedPoints.2`)})]}),(0,p.jsx)(`p`,{children:e(`pages.faq.privacy.analytics.answer.anonymous`)})]}),(0,p.jsxs)(E,{question:e(`pages.faq.privacy.dataDeletion.question`),children:[(0,p.jsx)(`p`,{children:e(`pages.faq.privacy.dataDeletion.answer.intro`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataDeletion.answer.methods.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataDeletion.answer.methods.1`)})]}),(0,p.jsx)(`p`,{children:e(`pages.faq.privacy.dataDeletion.answer.browserMethods`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataDeletion.answer.browserSteps.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataDeletion.answer.browserSteps.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.privacy.dataDeletion.answer.browserSteps.2`)})]})]})]}),(0,p.jsxs)(g,{children:[(0,p.jsx)(_,{children:e(`pages.faq.usage.title`)}),(0,p.jsxs)(E,{question:e(`pages.faq.usage.backup.question`),children:[(0,p.jsx)(`p`,{children:e(`pages.faq.usage.backup.answer.intro`)}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.usage.backup.answer.backup`)})}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.backupSteps.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.backupSteps.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.backupSteps.2`)})]}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.usage.backup.answer.restore`)})}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.restoreSteps.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.restoreSteps.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.restoreSteps.2`)})]}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.usage.backup.answer.includes`)})}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.includesItems.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.includesItems.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.includesItems.2`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.backup.answer.includesItems.3`)})]}),(0,p.jsx)(`p`,{children:e(`pages.faq.usage.backup.answer.note`)})]}),(0,p.jsxs)(E,{question:e(`pages.faq.usage.dataDefeat.question`),children:[(0,p.jsx)(`p`,{children:e(`pages.faq.usage.dataDefeat.answer.intro`)}),(0,p.jsxs)(`ul`,{children:[(0,p.jsx)(`li`,{children:e(`pages.faq.usage.dataDefeat.answer.causes.0`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.dataDefeat.answer.causes.1`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.dataDefeat.answer.causes.2`)}),(0,p.jsx)(`li`,{children:e(`pages.faq.usage.dataDefeat.answer.causes.3`)})]}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.usage.dataDefeat.answer.recommendation`)})})]}),(0,p.jsxs)(E,{question:e(`pages.faq.usage.dataSyncing.question`),children:[(0,p.jsx)(`p`,{children:e(`pages.faq.usage.dataSyncing.answer.limitation`)}),(0,p.jsx)(`p`,{children:e(`pages.faq.usage.dataSyncing.answer.explanation`)}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:e(`pages.faq.usage.dataSyncing.answer.workaround`)})})]})]})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(`p`,{children:`FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.`}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`strong`,{children:`© SQUARE ENIX CO., LTD. All Rights Reserved.`})}),(0,p.jsx)(`p`,{children:e(`pages.faq.copyright.disclaimer`)})]})]})};export{D as FaqPage};