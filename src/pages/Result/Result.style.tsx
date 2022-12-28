import { styled, TextField, Typography } from "@mui/material";

export const Text = styled(Typography)`
  margin: 1rem;
  font-weight: 800;
  font-size: 24px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 60px;
  }
`;

export const UserName = styled(TextField)`
  margin: 1rem;
  width: 350px;
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
