import { Button, Grid, styled, TextField, Typography } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 1rem;
  }
`;

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

export const StyledGrid = styled(Grid)`
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 4rem;
  }
`;

export const Submit = styled(Button)`
  background: red;

  &:hover {
    background: black;
  }
`;
