import MenuOptions from "../../models/MenuOptions";
import { StyledIconButton } from "./IconButton.style";
import { useNavigate } from "react-router-dom";

interface IconButtonProps {
  options: MenuOptions;
}

function IconButton({ options }: IconButtonProps) {
  const history = useNavigate();
  const { icon: Icon, iconProps } = options;

  const handleOnClick = (option: MenuOptions) => {
    const { path } = option;

    history(path);
  };
  return (
    <StyledIconButton onClick={() => handleOnClick(options)}>
      <Icon style={iconProps} />
    </StyledIconButton>
  );
}

export default IconButton;
