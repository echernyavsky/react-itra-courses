import { Drink } from "../../../shared/types/drink.ts";
import { Key, useCallback } from "react";
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
} from "@heroui/react";
import routes from "../../../shared/constants/routes.ts";
import { EyeIcon } from "../../../components/icons/EyeIcon.tsx";

interface DrinksTableProps {
  rows: Drink[];
}

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "brand",
    label: "Brand",
  },
  {
    key: "volumeInMilliliters",
    label: "Volume (ml)",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export default function DrinksTable({ rows }: DrinksTableProps) {
  const renderCell = useCallback((item: Drink, columnKey: Key) => {
    const cellValue = item[columnKey as keyof Drink];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: item.image }}
            name={cellValue}
          >
            {cellValue}
          </User>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <Link
                href={routes.DRINKS.DETAILS.replace(":id", item.id.toString())}
                className="cursor-pointer text-lg text-default-400 active:opacity-50"
              >
                <EyeIcon />
              </Link>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key === "actions" ? "center" : "start"}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
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
