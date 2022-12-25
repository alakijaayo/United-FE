import { styled, Typography } from "@mui/material";
import Button from "../../components/Button";

export const Text = styled(Typography)`
  margin: 1.5rem;
  font-weight: 800;
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 72px;
  }
`;

export const Next = styled(Button)`
  width: 250px;
  font-size: 15px;
  height: 50px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 500px;
    font-size: 24px;
    height: 70px;
  }
`;
