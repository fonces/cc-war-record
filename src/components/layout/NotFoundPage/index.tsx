import { Link } from "@tanstack/react-router";
import styled from "styled-components";
import { PageContainer, Button } from "@/components/ui";
import { Flex } from "@/components/layout";

const StyledContainer = styled(Flex)`
  min-height: 400px;
  text-align: center;
`;

const StyledErrorCode = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 28rem;
  margin: 0.5rem auto;
  line-height: 1.6;
`;

/**
 * 404 Not Found ページコンポーネント
 * 存在しないルートにアクセスした際に表示される
 */
export const NotFoundPage = () => {
  return (
    <PageContainer>
      <StyledContainer direction="column" align="center" justify="center" gap="1.5rem">
        <Flex direction="column" gap="0.5rem">
          <StyledErrorCode>404</StyledErrorCode>
          <StyledTitle>ページが見つかりません</StyledTitle>
          <StyledDescription>お探しのページは削除されたか、URLが間違っている可能性があります。</StyledDescription>
        </Flex>

        <Flex gap="1rem">
          <Link to="/">
            <Button>ホームに戻る</Button>
          </Link>
        </Flex>
      </StyledContainer>
    </PageContainer>
  );
};
