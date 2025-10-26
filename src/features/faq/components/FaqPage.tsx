import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Page, PageTitleContainer, PageTitle, PageDescription } from "@/components/ui";
import { usePageTitle, useTranslation } from "@/hooks";
import { fadeIn } from "@/styles/animation";

const shine = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const FaqContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeIn} 0.6s ease-out;
`;

const FaqSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  animation: ${fadeIn} 0.6s ease-out;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
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
`;

const FaqItem = styled.div<{ $isOpen: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
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
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 24px rgba(38, 161, 223, 0.12);
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

const QuestionButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => (theme.isDark ? "rgba(38, 161, 223, 0.08)" : "rgba(38, 161, 223, 0.03)")};
  }
`;

const QuestionContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 1;
`;

const QuestionIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const Question = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  flex: 1;
`;

const ExpandIcon = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

const Answer = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen, theme }) => ($isOpen ? `${theme.spacing[2]} 0 ${theme.spacing[6]} ${theme.spacing[5]}` : "0")};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) =>
    theme.isDark ? "linear-gradient(to bottom, rgba(38, 161, 223, 0.05), transparent)" : "linear-gradient(to bottom, rgba(38, 161, 223, 0.02), transparent)"};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[3]};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: ${({ theme }) => theme.spacing[3]} 0;
    padding-left: ${({ theme }) => theme.spacing[6]};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    position: relative;

    &::before {
      content: "▸";
      position: absolute;
      left: -${({ theme }) => theme.spacing[5]};
      color: #26a1df;
      font-weight: 700;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Copyright = styled.div`
  margin-top: ${({ theme }) => theme.spacing[12]};
  padding: ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out 0.3s backwards;
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.border};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -200%;
    width: 200%;
    height: 100%;
    background: ${({ theme }) =>
      theme.isDark ? "linear-gradient(90deg, transparent, rgba(38, 161, 223, 0.1), transparent)" : "linear-gradient(90deg, transparent, rgba(38, 161, 223, 0.05), transparent)"};
    animation: ${shine} 3s ease-in-out infinite;
  }

  p {
    line-height: 1.7;
    position: relative;
    z-index: 1;

    &:not(:last-of-type) {
      margin-bottom: ${({ theme }) => theme.spacing[2]};
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// FAQ アイテムコンポーネント
interface FaqItemComponentProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FaqItemComponent = ({ question, children, defaultOpen = false }: FaqItemComponentProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <FaqItem $isOpen={isOpen}>
      <QuestionButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <QuestionContent>
          <QuestionIcon>Q</QuestionIcon>
          <Question>{question}</Question>
        </QuestionContent>
        <ExpandIcon $isOpen={isOpen}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </ExpandIcon>
      </QuestionButton>
      <Answer $isOpen={isOpen}>{children}</Answer>
    </FaqItem>
  );
};

export const FaqPage = () => {
  const { t } = useTranslation();
  usePageTitle(t("pages.faq.title"));

  return (
    <Page>
      <PageTitleContainer>
        <PageTitle>{t("pages.faq.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{t("pages.faq.description")}</PageDescription>

      <FaqContainer>
        <FaqSection>
          <SectionTitle>{t("pages.faq.privacy.title")}</SectionTitle>

          <FaqItemComponent question={t("pages.faq.privacy.dataStorage.question")} defaultOpen>
            <p>
              <strong>{t("pages.faq.privacy.dataStorage.answer.intro")}</strong>
            </p>
            <p>{t("pages.faq.privacy.dataStorage.answer.description")}</p>
            <ul>
              <li>{t("pages.faq.privacy.dataStorage.answer.points.0")}</li>
              <li>{t("pages.faq.privacy.dataStorage.answer.points.1")}</li>
              <li>{t("pages.faq.privacy.dataStorage.answer.points.2")}</li>
              <li>{t("pages.faq.privacy.dataStorage.answer.points.3")}</li>
            </ul>
          </FaqItemComponent>

          <FaqItemComponent question={t("pages.faq.privacy.analytics.question")}>
            <p>{t("pages.faq.privacy.analytics.answer.intro")}</p>
            <p>{t("pages.faq.privacy.analytics.answer.collected")}</p>
            <ul>
              <li>{t("pages.faq.privacy.analytics.answer.collectedPoints.0")}</li>
              <li>{t("pages.faq.privacy.analytics.answer.collectedPoints.1")}</li>
              <li>{t("pages.faq.privacy.analytics.answer.collectedPoints.2")}</li>
            </ul>
            <p>
              <strong>{t("pages.faq.privacy.analytics.answer.notCollected")}</strong>
            </p>
            <ul>
              <li>{t("pages.faq.privacy.analytics.answer.notCollectedPoints.0")}</li>
              <li>{t("pages.faq.privacy.analytics.answer.notCollectedPoints.1")}</li>
              <li>{t("pages.faq.privacy.analytics.answer.notCollectedPoints.2")}</li>
            </ul>
            <p>{t("pages.faq.privacy.analytics.answer.anonymous")}</p>
          </FaqItemComponent>

          <FaqItemComponent question={t("pages.faq.privacy.dataDeletion.question")}>
            <p>{t("pages.faq.privacy.dataDeletion.answer.intro")}</p>
            <ul>
              <li>{t("pages.faq.privacy.dataDeletion.answer.methods.0")}</li>
              <li>{t("pages.faq.privacy.dataDeletion.answer.methods.1")}</li>
            </ul>
            <p>{t("pages.faq.privacy.dataDeletion.answer.browserMethods")}</p>
            <ul>
              <li>{t("pages.faq.privacy.dataDeletion.answer.browserSteps.0")}</li>
              <li>{t("pages.faq.privacy.dataDeletion.answer.browserSteps.1")}</li>
              <li>{t("pages.faq.privacy.dataDeletion.answer.browserSteps.2")}</li>
            </ul>
          </FaqItemComponent>
        </FaqSection>

        <FaqSection>
          <SectionTitle>{t("pages.faq.usage.title")}</SectionTitle>

          <FaqItemComponent question={t("pages.faq.usage.backup.question")}>
            <p>{t("pages.faq.usage.backup.answer.intro")}</p>
            <p>
              <strong>{t("pages.faq.usage.backup.answer.backup")}</strong>
            </p>
            <ul>
              <li>{t("pages.faq.usage.backup.answer.backupSteps.0")}</li>
              <li>{t("pages.faq.usage.backup.answer.backupSteps.1")}</li>
              <li>{t("pages.faq.usage.backup.answer.backupSteps.2")}</li>
            </ul>
            <p>
              <strong>{t("pages.faq.usage.backup.answer.restore")}</strong>
            </p>
            <ul>
              <li>{t("pages.faq.usage.backup.answer.restoreSteps.0")}</li>
              <li>{t("pages.faq.usage.backup.answer.restoreSteps.1")}</li>
              <li>{t("pages.faq.usage.backup.answer.restoreSteps.2")}</li>
            </ul>
            <p>
              <strong>{t("pages.faq.usage.backup.answer.includes")}</strong>
            </p>
            <ul>
              <li>{t("pages.faq.usage.backup.answer.includesItems.0")}</li>
              <li>{t("pages.faq.usage.backup.answer.includesItems.1")}</li>
              <li>{t("pages.faq.usage.backup.answer.includesItems.2")}</li>
              <li>{t("pages.faq.usage.backup.answer.includesItems.3")}</li>
            </ul>
            <p>{t("pages.faq.usage.backup.answer.note")}</p>
          </FaqItemComponent>

          <FaqItemComponent question={t("pages.faq.usage.dataDefeat.question")}>
            <p>{t("pages.faq.usage.dataDefeat.answer.intro")}</p>
            <ul>
              <li>{t("pages.faq.usage.dataDefeat.answer.causes.0")}</li>
              <li>{t("pages.faq.usage.dataDefeat.answer.causes.1")}</li>
              <li>{t("pages.faq.usage.dataDefeat.answer.causes.2")}</li>
              <li>{t("pages.faq.usage.dataDefeat.answer.causes.3")}</li>
            </ul>
            <p>
              <strong>{t("pages.faq.usage.dataDefeat.answer.recommendation")}</strong>
            </p>
          </FaqItemComponent>

          <FaqItemComponent question={t("pages.faq.usage.dataSyncing.question")}>
            <p>{t("pages.faq.usage.dataSyncing.answer.limitation")}</p>
            <p>{t("pages.faq.usage.dataSyncing.answer.explanation")}</p>
            <p>
              <strong>{t("pages.faq.usage.dataSyncing.answer.workaround")}</strong>
            </p>
          </FaqItemComponent>
        </FaqSection>
      </FaqContainer>

      <Copyright>
        <p>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.</p>
        <p>
          <strong>© SQUARE ENIX CO., LTD. All Rights Reserved.</strong>
        </p>
        <p>{t("pages.faq.copyright.disclaimer")}</p>
      </Copyright>
    </Page>
  );
};
