import styled from "styled-components";

/**
 * フォームコンテナ
 * ガラスモーフィズムデザインのフォームラッパー
 */
export const Form = styled.form`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows["2xl"]};
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

/**
 * フォームグループ
 * フォーム内の入力要素をグループ化
 */
export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

/**
 * フォームアクション
 * フォーム内のボタン群を配置
 */
export const FormActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;
