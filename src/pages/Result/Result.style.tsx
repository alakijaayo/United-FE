import { styled, TextField, Typography } from "@mui/material";

export const Text = styled(Typography)`
  margin: 1.5rem;
  font-weight: 800;
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 60px;
  }
`;

export const UserName = styled(TextField)`
  margin: 1.5rem;
  width: 350px;
`;
