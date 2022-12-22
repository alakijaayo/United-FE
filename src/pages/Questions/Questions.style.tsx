import { styled, Typography, Grid } from "@mui/material";
import Button from "../../components/Button";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 1rem;
  }
`;

export const QuestionText = styled(Typography)`
  font-weight: 800;
  margin: 1rem;
  text-align: center;
  font-size: 22px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 44px;
  }
`;

export const Option = styled(Button)`
  width: 250px;
  font-size: 15px;
  height: 50px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 500px;
    font-size: 24px;
    height: 70px;
  }
`;

export const StyledGrid = styled(Grid)`
  text-align: center;
  width: 90%;
  position: absolute;
  top: 38%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: auto;
    width: 100%;
    top: 30%;
  }
`;
