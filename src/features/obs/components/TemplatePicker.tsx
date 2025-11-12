import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button, Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { generateUUID } from "@/utils";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import { allTemplates, minimalTemplates, detailedTemplates, streamingTemplates, competitiveTemplates } from "../templates";
import type { HudTemplate, TemplateCategory } from "../templates/types";

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.base};
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  overflow-y: auto;
  flex: 1;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;
`;

const CategoryTab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary[500] : theme.colors.textSecondary)};
  cursor: pointer;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary[500] : "transparent")};
  margin-bottom: -2px;
  transition: all ${({ theme }) => theme.transitions.base};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
`;

const TemplateCard = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.primary};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};

    &::before {
      opacity: 0.05;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const TemplatePreview = styled.div`
  width: 100%;
  height: 140px;
  background: ${({ theme }) => (theme.isDark ? theme.colors.gray[900] : theme.colors.gray[100])};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const PreviewMiniature = styled.div`
  width: 90%;
  height: 90%;
  background: ${({ theme }) => (theme.isDark ? theme.colors.gray[800] : theme.colors.white)};
  border-radius: 4px;
  position: relative;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TemplateName = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 1;
`;

const TemplateDescription = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

const TemplateTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[3]};
  position: relative;
  z-index: 1;
`;

const TemplateTag = styled.span`
  font-size: 0.625rem;
  padding: 2px 8px;
  background: ${({ theme }) => theme.colors.primary[500]}20;
  color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 12px;
  font-weight: 500;
`;

const ElementCount = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  right: ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.colors.background};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 2;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

interface TemplatePickerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * テンプレート選択モーダル
 */
export function TemplatePicker({ isOpen, onClose }: TemplatePickerProps) {
  const { t } = useTranslation();
  const { setElements, selectElement } = useObsLayoutStore();
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">("all");

  const categories: Array<{ id: TemplateCategory | "all"; labelKey: string }> = [
    { id: "all", labelKey: "obs.templates.categories.all" },
    { id: "minimal", labelKey: "obs.templates.categories.minimal" },
    { id: "streaming", labelKey: "obs.templates.categories.streaming" },
    { id: "detailed", labelKey: "obs.templates.categories.detailed" },
    { id: "competitive", labelKey: "obs.templates.categories.competitive" },
  ];

  const getTemplatesByCategory = (category: TemplateCategory | "all"): HudTemplate[] => {
    switch (category) {
      case "all":
        return allTemplates;
      case "minimal":
        return minimalTemplates;
      case "detailed":
        return detailedTemplates;
      case "streaming":
        return streamingTemplates;
      case "competitive":
        return competitiveTemplates;
      default:
        return allTemplates;
    }
  };

  const handleSelectTemplate = (template: HudTemplate) => {
    // テンプレートの要素にIDを付与
    const elementsWithIds = template.elements.map((element) => ({
      ...element,
      id: generateUUID(),
    }));

    // 要素を設定
    setElements(elementsWithIds);
    selectElement(null);

    // モーダルを閉じる
    onClose();
  };

  const templates = getTemplatesByCategory(activeCategory);

  return createPortal(
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{t("obs.templates.title")}</ModalTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="close" size={20} />
          </Button>
        </ModalHeader>

        <ModalContent>
          <CategoryTabs>
            {categories.map((category) => (
              <CategoryTab key={category.id} $active={activeCategory === category.id} onClick={() => setActiveCategory(category.id)}>
                {t(category.labelKey)}
              </CategoryTab>
            ))}
          </CategoryTabs>

          {templates.length === 0 ? (
            <EmptyState>{t("obs.templates.noTemplates")}</EmptyState>
          ) : (
            <TemplateGrid>
              {templates.map((template) => (
                <TemplateCard key={template.metadata.id} onClick={() => handleSelectTemplate(template)}>
                  <TemplatePreview>
                    <PreviewMiniature />
                    <ElementCount>
                      <Icon name="grid" size={12} />
                      {template.elements.length}
                    </ElementCount>
                  </TemplatePreview>
                  <TemplateName>{t(template.metadata.nameKey)}</TemplateName>
                  <TemplateDescription>{t(template.metadata.descriptionKey)}</TemplateDescription>
                  <TemplateTags>
                    {template.metadata.tags.map((tag) => (
                      <TemplateTag key={tag}>{tag}</TemplateTag>
                    ))}
                  </TemplateTags>
                </TemplateCard>
              ))}
            </TemplateGrid>
          )}
        </ModalContent>
      </Modal>
    </Overlay>,
    document.body,
  );
}
