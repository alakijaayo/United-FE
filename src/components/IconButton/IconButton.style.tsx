import { IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  display: flex;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;
