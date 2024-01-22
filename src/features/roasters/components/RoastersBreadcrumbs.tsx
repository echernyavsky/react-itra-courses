import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import routes from "../../../shared/constants/routes.ts";
import { FormattedMessage } from "react-intl";

export interface RoastersBreadcrumbsProps {
  currentRoute: string;
  currentRouteName: string | JSX.Element;
}

export default function RoastersBreadcrumbs({
  currentRoute,
  currentRouteName,
}: RoastersBreadcrumbsProps) {
  return (
    <Breadcrumbs color="primary">
      <BreadcrumbItem href={routes.ROASTERS.ROOT}>
        <FormattedMessage id="roasters.page.title" />
      </BreadcrumbItem>
      <BreadcrumbItem href={currentRoute}>{currentRouteName}</BreadcrumbItem>
    </Breadcrumbs>
  );
}
