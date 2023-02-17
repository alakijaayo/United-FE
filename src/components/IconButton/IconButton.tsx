import MenuOptions from "../../models/MenuOptions";
import { StyledIconButton } from "./IconButton.style";
import { useNavigate } from "react-router-dom";

interface IconButtonProps {
  options: MenuOptions;
  onClick?: () => void;
}

function IconButton({ options, onClick }: IconButtonProps) {
  const history = useNavigate();
  const { icon: Icon, iconProps } = options;

  const handleOnClick = (option: MenuOptions) => {
    const { path } = option;

    if (onClick) {
      onClick();
    }

    history(path);
  };

  return (
    <StyledIconButton disableRipple onClick={() => handleOnClick(options)}>
      <Icon style={iconProps} />
    </StyledIconButton>
  );
}

export default IconButton;
