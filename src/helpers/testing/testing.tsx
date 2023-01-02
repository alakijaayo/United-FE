import { render } from "@testing-library/react";
import { ReactElement, PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";
import UserProvider from "../../providers/UserProvider";

const renderWithPageProviders = (component: ReactElement) => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <MemoryRouter>
      <UserProvider>{children}</UserProvider>
    </MemoryRouter>
  );

  render(component, { wrapper });
};

export { renderWithPageProviders };
