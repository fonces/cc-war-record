import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  transition: border-color ${({ theme }) => theme.transitions.base};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
