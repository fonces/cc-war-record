import styled from "styled-components";
import { pulse } from "@/styles/animation";

const StyledMapBadgeBase = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: 2px ${({ theme }) => theme.spacing[1]};
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

export const StyledCurrentMapBadge = styled(StyledMapBadgeBase)`
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;

export const StyledNextMapBadge = styled(StyledMapBadgeBase)`
  background-color: ${({ theme }) => theme.colors.gray[400]};
`;

export const StyledPulsingDot = styled.span`
  width: 5px;
  height: 5px;
  background-color: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.9)" : theme.colors.white)};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;
