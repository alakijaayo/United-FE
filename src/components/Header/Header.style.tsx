import {
  AppBar,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

export const StyledHeader = styled(AppBar)`
  background: red;
`;

export const StyledButton = styled(Button)`
  display: none;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled(Typography)`
  font-weight: 800;
  font-size: 28px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 34px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;
