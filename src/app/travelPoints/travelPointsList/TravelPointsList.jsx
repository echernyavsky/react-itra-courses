import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FormattedMessage} from "react-intl";
import { format } from "date-fns";
import dateFormats from "../../../shared/constants/dateFormats";

export default function TravelPointsList({ travelPoints }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">
                            <FormattedMessage id="travel-points.form.name" />
                        </TableCell>
                        <TableCell align="right">
                            <FormattedMessage id="travel-points.form.latitude" />
                        </TableCell>
                        <TableCell align="right">
                            <FormattedMessage id="travel-points.form.longitude" />
                        </TableCell>
                        <TableCell align="right">
                            <FormattedMessage id="travel-points.form.status" />
                        </TableCell>
                        <TableCell align="right">
                            <FormattedMessage id="travel-points.form.visited-at" />
                        </TableCell>
                        <TableCell align="right">
                            <FormattedMessage id="travel-points.form.created-at" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {travelPoints.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell align="right">{item.name}</TableCell>
                            <TableCell align="right">{item.latitude}</TableCell>
                            <TableCell align="right">{item.longitude}</TableCell>
                            <TableCell align="right">{item.status}</TableCell>
                            <TableCell align="right">{format(item.visitedAt, dateFormats.DATE)}</TableCell>
                            <TableCell align="right">{format(item.createdAt, dateFormats.DATETIME)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}