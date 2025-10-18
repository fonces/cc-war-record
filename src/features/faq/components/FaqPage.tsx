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
  padding: ${({ theme }) => theme.spacing[4]};
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
                <li>戦績データや個人情報は一切サーバーに送信されません</li>
                <li>すべてのデータはブラウザ内のみで管理されます</li>
                <li>アプリケーション開発者がユーザーの戦績データにアクセスすることはありません</li>
                <li>データの削除はブラウザの設定から行えます</li>
              </ul>
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>{t("pages.faq.privacy.analytics.question")}</Question>
            <Answer>
              <p>{t("pages.faq.privacy.analytics.answer.intro")}</p>
              <p>{t("pages.faq.privacy.analytics.answer.collected")}</p>
              <ul>
                <li><strong>アクセス統計</strong>：ページビュー数、セッション数、平均滞在時間など</li>
                <li><strong>技術情報</strong>：ブラウザの種類、OS、画面サイズなど</li>
                <li><strong>地域情報</strong>：国や地域レベルの大まかな位置情報（詳細な住所等は含まれません）</li>
              </ul>
              <p><strong>{t("pages.faq.privacy.analytics.answer.notCollected")}</strong></p>
              <ul>
                <li>戦績データや個人の成績情報</li>
                <li>キャラクター名やその他の個人情報</li>
                <li>詳細な位置情報や住所</li>
              </ul>
              <p>{t("pages.faq.privacy.analytics.answer.anonymous")}</p>
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>{t("pages.faq.privacy.dataDeletion.question")}</Question>
            <Answer>
              <p>{t("pages.faq.privacy.dataDeletion.answer.intro")}</p>
              <ul>
                <li><strong>個別削除</strong>：各ページで「削除」ボタンを使用</li>
                <li><strong>完全削除</strong>：ブラウザの設定からサイトデータを削除</li>
              </ul>
              <p>{t("pages.faq.privacy.dataDeletion.answer.browserMethods")}</p>
              <ul>
                <li>Chrome: 設定 → プライバシーとセキュリティ → サイトデータ</li>
                <li>Firefox: 設定 → プライバシーとセキュリティ → Cookieとサイトデータ</li>
                <li>Safari: 環境設定 → プライバシー → Webサイトデータを管理</li>
              </ul>
            </Answer>
          </FaqItem>
        </FaqSection>

        <FaqSection>
          <SectionTitle>{t("pages.faq.usage.title")}</SectionTitle>
          
          <FaqItem>
            <Question>{t("pages.faq.usage.dataLoss.question")}</Question>
            <Answer>
              <p>{t("pages.faq.usage.dataLoss.answer.intro")}</p>
              <ul>
                <li>ブラウザのキャッシュクリア時</li>
                <li>ブラウザの設定でサイトデータを削除した場合</li>
                <li>プライベートブラウジングモード使用時</li>
                <li>デバイスの容量不足時（ブラウザが自動削除する場合）</li>
              </ul>
              <p><strong>{t("pages.faq.usage.dataLoss.answer.recommendation")}</strong></p>
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
    </PageContainer>
  );
};
