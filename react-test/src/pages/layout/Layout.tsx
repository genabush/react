import { Footer, Header, StyledWrapper } from "../../components";
import { Outlet } from "react-router-dom";
import { StyledMainContent } from "../../components/styled/StyledMainContent";

export const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMainContent>
        <Outlet />
      </StyledMainContent>
      <Footer />
    </StyledWrapper>
  );
};
