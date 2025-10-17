import styled from "styled-components";
import { PageContainer, PageTitleContainer, PageTitle, PageDescription } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";

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
  usePageTitle("よくある質問 (FAQ)");

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>よくある質問 (FAQ)</PageTitle>
      </PageTitleContainer>
      <PageDescription>CC戦績記録について、よくお寄せいただく質問とその回答をまとめました。</PageDescription>

      <FaqContainer>
        <FaqSection>
          <SectionTitle>プライバシー・データについて</SectionTitle>

          <FaqItem>
            <Question>戦績データはどこに保存されますか？</Question>
            <Answer>
              <p>
                <strong>戦績データはすべてお使いのブラウザのローカルストレージに保存されます。</strong>
              </p>
              <p>当アプリケーションでは、以下の方針でデータを扱っています：</p>
              <ul>
                <li>戦績データや個人情報は一切サーバーに送信されません</li>
                <li>すべてのデータはブラウザ内のみで管理されます</li>
                <li>アプリケーション開発者がユーザーの戦績データにアクセスすることはありません</li>
                <li>データの削除はブラウザの設定から行えます</li>
              </ul>
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>Google Analyticsで何が収集されますか？</Question>
            <Answer>
              <p>
                当サイトでは、サービス改善のために<strong>Google Analytics</strong>を使用しています。
              </p>
              <p>収集される情報：</p>
              <ul>
                <li>
                  <strong>アクセス統計</strong>：ページビュー数、セッション数、平均滞在時間など
                </li>
                <li>
                  <strong>技術情報</strong>：ブラウザの種類、OS、画面サイズなど
                </li>
                <li>
                  <strong>地域情報</strong>：国や地域レベルの大まかな位置情報（詳細な住所等は含まれません）
                </li>
              </ul>
              <p>
                <strong>収集されない情報：</strong>
              </p>
              <ul>
                <li>戦績データや個人の成績情報</li>
                <li>キャラクター名やその他の個人情報</li>
                <li>詳細な位置情報や住所</li>
              </ul>
              <p>これらの統計情報は匿名化されており、個人を特定することはできません。</p>
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>データの削除方法を教えてください</Question>
            <Answer>
              <p>保存されているデータを削除したい場合は、以下の方法で行えます：</p>
              <ul>
                <li>
                  <strong>個別削除</strong>：各ページで「削除」ボタンを使用
                </li>
                <li>
                  <strong>完全削除</strong>：ブラウザの設定からサイトデータを削除
                </li>
              </ul>
              <p>ブラウザからのデータ削除方法：</p>
              <ul>
                <li>Chrome: 設定 → プライバシーとセキュリティ → サイトデータ</li>
                <li>Firefox: 設定 → プライバシーとセキュリティ → Cookieとサイトデータ</li>
                <li>Safari: 環境設定 → プライバシー → Webサイトデータを管理</li>
              </ul>
            </Answer>
          </FaqItem>
        </FaqSection>

        <FaqSection>
          <SectionTitle>アプリケーションの使い方</SectionTitle>

          <FaqItem>
            <Question>データが消えてしまうことはありますか？</Question>
            <Answer>
              <p>ローカルストレージに保存されたデータは、以下の場合に削除される可能性があります：</p>
              <ul>
                <li>ブラウザのキャッシュクリア時</li>
                <li>ブラウザの設定でサイトデータを削除した場合</li>
                <li>プライベートブラウジングモード使用時</li>
                <li>デバイスの容量不足時（ブラウザが自動削除する場合）</li>
              </ul>
              <p>
                <strong>重要なデータは定期的にバックアップを取ることをお勧めします。</strong>
              </p>
            </Answer>
          </FaqItem>

          <FaqItem>
            <Question>複数のブラウザでデータを共有できますか？</Question>
            <Answer>
              <p>申し訳ございませんが、現在のところブラウザ間でのデータ同期機能は提供していません。</p>
              <p>各ブラウザのローカルストレージは独立しているため、データは使用したブラウザでのみ利用可能です。</p>
            </Answer>
          </FaqItem>
        </FaqSection>
      </FaqContainer>
    </PageContainer>
  );
};
