import styled from "styled-components";
import { useTranslation } from "@/hooks";
import { useObsLayoutStore } from "../store/obsLayoutStore";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const CustomInputs = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.025em;
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-family: inherit;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;

const Separator = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 1.25rem;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

export const ScreenSizeSelector = () => {
  const { t } = useTranslation();
  const { screenSize, setScreenSize } = useObsLayoutStore();

  const handleCustomWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(e.target.value, 10);
    if (!isNaN(width) && width > 0) {
      setScreenSize({
        width,
        height: screenSize.height,
        preset: "custom",
      });
    }
  };

  const handleCustomHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(e.target.value, 10);
    if (!isNaN(height) && height > 0) {
      setScreenSize({
        width: screenSize.width,
        height,
        preset: "custom",
      });
    }
  };

  return (
    <Container>
      <Title>{t("pages.obs.screenSize.title")}</Title>
      <CustomInputs>
        <InputGroup>
          <Label>{t("pages.obs.screenSize.width")}</Label>
          <Input type="number" value={screenSize.width} onChange={handleCustomWidthChange} min={640} max={7680} step={1} />
        </InputGroup>
        <Separator>×</Separator>
        <InputGroup>
          <Label>{t("pages.obs.screenSize.height")}</Label>
          <Input type="number" value={screenSize.height} onChange={handleCustomHeightChange} min={360} max={4320} step={1} />
        </InputGroup>
      </CustomInputs>
      <InfoText>{t("pages.obs.screenSize.info")}</InfoText>
    </Container>
  );
};
