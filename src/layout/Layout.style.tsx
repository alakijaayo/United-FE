import { styled } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: 1rem;
  }
`;
