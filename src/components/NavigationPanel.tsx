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
import { Image } from "@nextui-org/react";
import LocalePicker from "./LocalePicker.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

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
        <Image src="/logo_react.png" style={{ height: "80px" }} />
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="w-96">
          <LocalePicker />
        </NavbarItem>
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
