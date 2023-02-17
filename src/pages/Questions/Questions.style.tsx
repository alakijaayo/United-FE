import { styled, Typography, Grid, Button } from "@mui/material";

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
  height: 60px;
  background: red;
  font-weight: 800;
  line-height: inherit;

  &:hover {
    background: black;
  }

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
