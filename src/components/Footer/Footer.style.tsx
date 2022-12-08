import { AppBar, styled, Toolbar, Typography } from "@mui/material";

export const StyledFooter = styled(AppBar)`
  background: red;
  top: auto;
  bottom: 0;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled(Typography)`
  font-weight: 800;
  font-size: 16px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 34px;
  }
`;
