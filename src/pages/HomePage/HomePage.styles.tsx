import { Grid, styled, Typography } from "@mui/material";

export const Text = styled(Typography)`
  margin: 1rem;
  font-weight: 800;
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 2.5rem;
    font-size: 60px;
  }
`;

export const StyledGrid = styled(Grid)`
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 4rem;
  }
`;
