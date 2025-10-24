import { memo } from "react";
import styled from "styled-components";
import {
  HamburgerIcon,
  CloseIcon,
  HomeIcon,
  HistoryIcon,
  ChartIcon,
  EditIcon,
  AcceptIcon,
  AddIcon,
  DeleteIcon,
  MinusIcon,
  RevertIcon,
  DetailIcon,
  BackIcon,
  LanguageIcon,
  ArrowDropDownIcon,
} from "./icons";
import type { IconProps } from "./types";

const StyledIcon = styled.div<Pick<IconProps, "size" | "color">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  color: ${({ color }) => color || "inherit"};

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

/**
 * アイコンコンポーネント
 */
export const Icon = memo(({ name, size = 24, color, onClick, className }: IconProps) => {
  const renderIcon = () => {
    switch (name) {
      case "hamburger":
        return <HamburgerIcon />;
      case "close":
        return <CloseIcon />;
      case "home":
        return <HomeIcon />;
      case "history":
        return <HistoryIcon />;
      case "chart":
        return <ChartIcon />;
      case "edit":
        return <EditIcon />;
      case "accept":
        return <AcceptIcon />;
      case "add":
        return <AddIcon />;
      case "delete":
        return <DeleteIcon />;
      case "minus":
        return <MinusIcon />;
      case "revert":
        return <RevertIcon />;
      case "detail":
        return <DetailIcon />;
      case "back":
        return <BackIcon />;
      case "language":
        return <LanguageIcon />;
      case "arrowDropDown":
        return <ArrowDropDownIcon />;
      default:
        return null;
    }
  };

  return (
    <StyledIcon size={size} color={color} onClick={onClick} className={className}>
      {renderIcon()}
    </StyledIcon>
  );
});

Icon.displayName = "Icon";
