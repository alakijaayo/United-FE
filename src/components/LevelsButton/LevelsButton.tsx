import { Levels } from "./LevelsButton.styles";

interface LevelsButtonProps {
  level: string;
}

function LevelsButton({ level }: LevelsButtonProps) {
  return (
    <Levels variant="contained" disableRipple>
      {level}
    </Levels>
  );
}

export default LevelsButton;
