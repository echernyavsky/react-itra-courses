import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import routes from "../shared/constants/routes.ts";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export default function NavigationPanel() {
  const navigate = useNavigate();

  const onLinkClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  return (
    <Navbar shouldHideOnScroll isBordered maxWidth="full">
      <NavbarBrand>
        <p className="font-bold text-inherit">Course Project</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link onClick={() => onLinkClick(routes.LOGIN)}>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
