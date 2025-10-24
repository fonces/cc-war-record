import styled from "styled-components";
import { pulse } from "@/styles/animation";

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
  background-color: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.9)" : theme.colors.white)};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;
