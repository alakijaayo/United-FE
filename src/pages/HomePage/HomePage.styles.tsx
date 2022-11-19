import { styled, TextField, Typography } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

export const Text = styled(Typography)`
  margin: 1.5rem;
  font-weight: 800;
`;

export const UserName = styled(TextField)`
  margin: 1.5rem;
  width: 350px;
`;

export const LevelsBox = styled("div")`
  margin: 4rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
