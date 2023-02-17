import { styled, Typography, Button } from "@mui/material";

export const Text = styled(Typography)`
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 36px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 72px;
    margin-bottom: 1.5rem;
  }
`;

export const CorrectAnswer = styled(Typography)`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 44px;
  }
`;

export const Next = styled(Button)`
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

export const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
