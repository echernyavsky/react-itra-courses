import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function NavigationPanel() {
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
          <Link href="#">Login</Link>
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
