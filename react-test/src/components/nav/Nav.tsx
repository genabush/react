import { NavLink } from "react-router-dom";
import { StyledList } from "../styled/StyledList";

type Link = {
  name: string;
  path: string;
};

const Links: Link[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Login",
    path: "/login",
  },
];

export const Nav = () => {
  return (
    <StyledList>
      {Links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </StyledList>
  );
};
