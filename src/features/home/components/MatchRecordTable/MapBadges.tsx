import styled from "styled-components";

export const StyledCurrentMapBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: ${({ theme }) => theme.spacing[2]};
`;

export const StyledNextMapBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: ${({ theme }) => theme.spacing[2]};
`;

export const StyledPulsingDot = styled.span`
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }
`;
