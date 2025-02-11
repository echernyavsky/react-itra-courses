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
    <span>
      test: {currentRoute} {currentRouteName}
    </span>
  );
}
