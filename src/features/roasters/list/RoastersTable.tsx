import { Roaster } from "../../../shared/types/roaster.ts";
import {
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
import { DeleteIcon } from "../../../components/icons/DeleteIcon.tsx";
import { FormattedMessage } from "react-intl";

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
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip
              color="danger"
              content={<FormattedMessage id="roasters.table.actions.delete" />}
            >
              <span className="cursor-pointer text-lg text-danger active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
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
