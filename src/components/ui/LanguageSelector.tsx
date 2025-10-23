import { useState, useEffect, useRef, memo } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "@/hooks";
import { Icon } from "./Icon";

// アニメーション
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledLanguageSelector = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${({ $fullWidth }) => ($fullWidth ? "block" : "inline-block")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

const StyledLanguageButton = styled.button<{ $fullWidth?: boolean }>`
  padding: 0.625rem 1rem;
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: ${({ $fullWidth }) => ($fullWidth ? "auto" : "140px")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border};
    box-shadow:
      ${({ theme }) => theme.shadows.md},
      0 0 0 1px rgba(38, 161, 223, 0.1);
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border};
    box-shadow:
      ${({ theme }) => theme.shadows.md},
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: #26a1df;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const StyledLanguageDropdown = styled.div<{ isOpen: boolean; direction: "up" | "down" }>`
  position: absolute;
  ${({ direction }) => (direction === "up" ? "bottom: calc(100% + 8px);" : "top: calc(100% + 8px);")}
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md} brightness(0%);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow:
    ${({ theme }) => theme.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);
  overflow: hidden;
  z-index: 50;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ direction }) => (direction === "up" ? fadeInUp : fadeInDown)} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  }
`;

const StyledLanguageOption = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ isActive }) => (isActive ? "rgba(38, 161, 223, 0.08)" : "transparent")};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: ${({ isActive }) => (isActive ? "600" : "500")};
  text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background-color: rgba(38, 161, 223, 0.05);
    padding-left: ${({ theme }) => theme.spacing[5]};

    &::before {
      opacity: 0.5;
    }
  }

  &:first-child {
    padding-top: ${({ theme }) => theme.spacing[4]};
  }

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const StyledLanguageFlag = styled.span`
  font-size: 1.25rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  background: rgba(0, 0, 0, 0.02);
`;

const StyledArrowWrapper = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  color: #26a1df;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const languages = [
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
];

type LanguageSelectorProps = {
  /** プルダウンの表示方向 */
  direction?: "up" | "down";
  /** 幅を親要素に合わせるかどうか */
  fullWidth?: boolean;
};

export const LanguageSelector = memo(({ direction = "down", fullWidth = false }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslation();
  const selectorRef = useRef<HTMLDivElement>(null);

  // 外側クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguageName = languages.find((lang) => lang.code === currentLanguage)?.name || "日本語";

  return (
    <StyledLanguageSelector ref={selectorRef} $fullWidth={fullWidth}>
      <StyledLanguageButton onClick={() => setIsOpen(!isOpen)} $fullWidth={fullWidth}>
        <StyledIconWrapper>
          <Icon name="language" size={18} />
          <span>{currentLanguageName}</span>
        </StyledIconWrapper>
        <StyledArrowWrapper isOpen={isOpen}>
          <Icon name="arrowDropDown" size={24} />
        </StyledArrowWrapper>
      </StyledLanguageButton>

      <StyledLanguageDropdown isOpen={isOpen} direction={direction}>
        {languages.map((language) => (
          <StyledLanguageOption key={language.code} isActive={currentLanguage === language.code} onClick={() => handleLanguageChange(language.code)}>
            <StyledLanguageFlag>{language.flag}</StyledLanguageFlag>
            <span>{language.name}</span>
          </StyledLanguageOption>
        ))}
      </StyledLanguageDropdown>
    </StyledLanguageSelector>
  );
});

LanguageSelector.displayName = "LanguageSelector";
