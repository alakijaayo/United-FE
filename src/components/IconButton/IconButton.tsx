import { useContext } from "react";
import MenuOptions from "../../models/MenuOptions";
import { StyledIconButton } from "./IconButton.style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { Types } from "../../providers/UserProvider/reducer";

interface IconButtonProps {
  options: MenuOptions;
}

function IconButton({ options }: IconButtonProps) {
  const history = useNavigate();
  const { dispatch } = useContext(UserContext);
  const { icon: Icon, iconProps } = options;

  const handleOnClick = (option: MenuOptions) => {
    const { path } = option;

    dispatch({ type: Types.reset });

    history(path);
  };

  return (
    <StyledIconButton disableRipple onClick={() => handleOnClick(options)}>
      <Icon style={iconProps} />
    </StyledIconButton>
  );
}

export default IconButton;
