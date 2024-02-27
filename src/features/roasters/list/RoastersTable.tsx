import { Roaster } from "../../../shared/types/roaster.ts";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { Key, useCallback } from "react";
import { EyeIcon } from "../../../components/icons/EyeIcon.tsx";
import { FormattedMessage } from "react-intl";
import routes from "../../../shared/constants/routes.ts";
import DeleteRoasterConfirmation from "./DeleteRoasterConfirmation.tsx";
import { deleteRoaster } from "../../../shared/apis/roasterApi.ts";
import { useRevalidator } from "react-router";

interface RoastersTableProps {
  rows: Roaster[];
}

const columns = [
  {
    key: "name",
    label: <FormattedMessage id="roasters.table.header.name" />,
  },
  {
    key: "year",
    label: <FormattedMessage id="roasters.table.header.year" />,
  },
  {
    key: "location",
    label: <FormattedMessage id="roasters.table.header.location" />,
  },
  {
    key: "actions",
    label: <FormattedMessage id="roasters.table.header.actions" />,
  },
];

export default function RoastersTable({ rows }: RoastersTableProps) {
  const revalidator = useRevalidator();
  const renderCell = useCallback((item: Roaster, columnKey: Key) => {
    const cellValue = item[columnKey as keyof Roaster];

    switch (columnKey) {
      case "name":
        return (
          <User avatarProps={{ radius: "lg", src: item.logo }} name={cellValue}>
            {cellValue}
          </User>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip
              content={<FormattedMessage id="roasters.table.actions.details" />}
            >
              <Link
                href={routes.ROASTERS.DETAILS.replace(
                  ":id",
                  item.id.toString(),
                )}
                className="cursor-pointer text-lg text-default-400 active:opacity-50"
              >
                <EyeIcon />
              </Link>
            </Tooltip>
            <DeleteRoasterConfirmation
              onDelete={async () => {
                await deleteRoaster(item.id);
                revalidator.revalidate();
              }}
            />
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item: Roaster) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
