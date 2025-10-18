import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "@/hooks";

const StyledLanguageSelector = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledLanguageButton = styled.button`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 80px;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[200]};
  }
`;

const StyledLanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  min-width: 120px;
  margin-top: ${({ theme }) => theme.spacing[1]};
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

const StyledArrow = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const languages = [
  { code: "ja", name: "日本語" },
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
];

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguageName = languages.find(lang => lang.code === currentLanguage)?.name || "日本語";

  return (
    <StyledLanguageSelector>
      <StyledLanguageButton onClick={() => setIsOpen(!isOpen)}>
        <span>{currentLanguageName}</span>
        <StyledArrow isOpen={isOpen}>▼</StyledArrow>
      </StyledLanguageButton>

      <StyledLanguageDropdown isOpen={isOpen}>
        {languages.map((language) => (
          <StyledLanguageOption
            key={language.code}
            isActive={currentLanguage === language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </StyledLanguageOption>
        ))}
      </StyledLanguageDropdown>
    </StyledLanguageSelector>
  );
};