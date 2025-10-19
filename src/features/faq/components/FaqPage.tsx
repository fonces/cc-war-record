import styled from "styled-components";
import { PageContainer, PageTitleContainer, PageTitle, PageDescription } from "@/components/ui";
import { usePageTitle, useTranslation } from "@/hooks";

const FaqContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const FaqSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`;

const FaqItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

const Question = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &::before {
    content: "Q.";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const Answer = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;

  p {
    margin-bottom: ${({ theme }) => theme.spacing[3]};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: ${({ theme }) => theme.spacing[2]} 0;
    margin-left: 0.5rem;
    padding-left: ${({ theme }) => theme.spacing[4]};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const Copyright = styled.div`
  margin-top: ${({ theme }) => theme.spacing[10]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    line-height: 1.6;
  }
  
  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

export const FaqPage = () => {
  const { t } = useTranslation();
  usePageTitle(t("pages.faq.title"));

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{t("pages.faq.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{t("pages.faq.description")}</PageDescription>

      <FaqContainer>
        <FaqSection>
          <SectionTitle>{t("pages.faq.privacy.title")}</SectionTitle>

          <FaqItem>
            <Question>{t("pages.faq.privacy.dataStorage.question")}</Question>
            <Answer>
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
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>{t("pages.faq.privacy.analytics.question")}</Question>
            <Answer>
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
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>{t("pages.faq.privacy.dataDeletion.question")}</Question>
            <Answer>
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
            </Answer>
          </FaqItem>
        </FaqSection>

        <FaqSection>
          <SectionTitle>{t("pages.faq.usage.title")}</SectionTitle>

          <FaqItem>
            <Question>{t("pages.faq.usage.dataDefeat.question")}</Question>
            <Answer>
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
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>{t("pages.faq.usage.dataSyncing.question")}</Question>
            <Answer>
              <p>{t("pages.faq.usage.dataSyncing.answer.limitation")}</p>
              <p>{t("pages.faq.usage.dataSyncing.answer.explanation")}</p>
            </Answer>
          </FaqItem>
        </FaqSection>
      </FaqContainer>

      <Copyright>
        <p>
          FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
        </p>
        <p>
          <strong>© SQUARE ENIX CO., LTD. All Rights Reserved.</strong>
        </p>
        <p>
          {t("pages.faq.copyright.disclaimer")}
        </p>
      </Copyright>
    </PageContainer>
  );
};
