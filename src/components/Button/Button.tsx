import { Levels } from "./Button.styles";

interface LevelsButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}

function Button({ text, link, className, onClick }: LevelsButtonProps) {
  return (
    <Levels
      className={className}
      fullWidth
      variant="contained"
      disableRipple
      onClick={onClick}
      href={link}
    >
      {text}
    </Levels>
  );
}

export default Button;
