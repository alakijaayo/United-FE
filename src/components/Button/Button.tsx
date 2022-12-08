import { Levels } from "./Button.styles";

interface LevelsButtonProps {
  text: string;
  link: string;
  className?: string;
}

function Button({ text, link, className }: LevelsButtonProps) {
  return (
    <Levels
      className={className}
      fullWidth
      variant="contained"
      disableRipple
      href={link}
    >
      {text}
    </Levels>
  );
}

export default Button;
