import { useState, useEffect, useRef, memo } from "react";
import styled from "styled-components";
import { useTranslation } from "@/hooks";
import { Icon } from "./Icon";

const StyledLanguageSelector = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${({ $fullWidth }) => ($fullWidth ? "block" : "inline-block")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

const StyledLanguageButton = styled.button<{ $fullWidth?: boolean }>`
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: ${({ $fullWidth }) => ($fullWidth ? "auto" : "120px")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  justify-content: space-between;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[400]};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[100]};
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledLanguageDropdown = styled.div<{ isOpen: boolean; direction: "up" | "down" }>`
  position: absolute;
  ${({ direction }) => (direction === "up" ? "bottom: calc(100% + 4px);" : "top: calc(100% + 4px);")}
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  z-index: 50;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const StyledLanguageOption = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary[50] : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary[600] : theme.colors.text)};
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.md};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.md};
  }

  &:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

const StyledArrow = styled.span<{ isOpen: boolean; direction: "up" | "down" }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const languages = [
  { code: "ja", name: "日本語" },
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
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
        <StyledArrow isOpen={isOpen} direction={direction}>
          ▼
        </StyledArrow>
      </StyledLanguageButton>

      <StyledLanguageDropdown isOpen={isOpen} direction={direction}>
        {languages.map((language) => (
          <StyledLanguageOption key={language.code} isActive={currentLanguage === language.code} onClick={() => handleLanguageChange(language.code)}>
            {language.name}
          </StyledLanguageOption>
        ))}
      </StyledLanguageDropdown>
    </StyledLanguageSelector>
  );
});

LanguageSelector.displayName = "LanguageSelector";
