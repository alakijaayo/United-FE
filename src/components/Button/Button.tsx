import { Levels } from "./Button.styles";

interface LevelsButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

function Button({
  text,
  link,
  className,
  onClick,
  ariaLabel,
}: LevelsButtonProps) {
  return (
    <Levels
      className={className}
      fullWidth
      aria-label={ariaLabel}
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
