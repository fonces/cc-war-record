import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Icon, Input } from "@/components/ui";
import { useTranslation } from "@/hooks";

const StyledCharacterCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(38, 161, 223, 0.2);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows["2xl"]}, ${({ theme }) => theme.shadows.glow};
  }
`;

const StyledCharacterHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-bottom: 1px solid rgba(38, 161, 223, 0.1);
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    background: linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
  }
`;

const StyledCharacterName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

const StyledCharacterStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledCharacterContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const StyledCharacterBody = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StyledCharacterFormContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-end;
  flex-wrap: wrap;

  input,
  button {
    height: 50px;
  }
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`;

const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

type CharacterFormProps = {
  /** フォームの開閉状態 */
  isOpen: boolean;
  /** キャラクター作成ハンドラー */
  onCreateCharacter: (name: string) => void;
};

/**
 * キャラクター作成フォームコンポーネント
 */
export const CharacterForm = ({ isOpen: isOpenProp, onCreateCharacter }: CharacterFormProps) => {
  const { t } = useTranslation();
  const [newCharacterName, setNewCharacterName] = useState("");
  const [isOpen, setIsOpen] = useState(isOpenProp);

  // propsの変更を反映
  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCreate = () => {
    if (!newCharacterName.trim()) return;
    onCreateCharacter(newCharacterName.trim());
    setNewCharacterName("");
  };

  return (
    <StyledCharacterCard>
      <StyledCharacterHeader onClick={handleToggle}>
        <StyledCharacterName>{t("character.create")}</StyledCharacterName>
        <StyledCharacterStats>
          <Icon name={isOpen ? "close" : "hamburger"} size={16} />
        </StyledCharacterStats>
      </StyledCharacterHeader>

      <StyledCharacterContent isOpen={isOpen}>
        <StyledCharacterBody>
          <StyledCharacterFormContent>
            <StyledFormGroup>
              <StyledLabel htmlFor="character-name">{t("character.name")}</StyledLabel>
              <Input
                id="character-name"
                value={newCharacterName}
                onChange={(e) => setNewCharacterName(e.target.value)}
                placeholder={t("character.namePlaceholder")}
                onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              />
            </StyledFormGroup>
            <Button onClick={handleCreate} disabled={!newCharacterName.trim()}>
              {t("character.create")}
            </Button>
          </StyledCharacterFormContent>
        </StyledCharacterBody>
      </StyledCharacterContent>
    </StyledCharacterCard>
  );
};
